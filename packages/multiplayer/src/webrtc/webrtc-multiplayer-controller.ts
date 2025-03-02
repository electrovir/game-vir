import {assert, waitUntil} from '@augment-vir/assert';
import {
    JsonCompatibleValue,
    PartialWithUndefined,
    Uuid,
    createUuidV4,
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getObjectTypedKeys,
    log,
    makeWritable,
    mergeDefinedProperties,
    randomString,
    stringify,
} from '@augment-vir/common';
import type {ClientWebSocket} from '@rest-vir/define-service';
import type {RequireExactlyOne} from 'type-fest';
import {ListenTarget, defineTypedCustomEvent} from 'typed-event-target';
import type {MultiplayerApi} from '../multiplayer-api.js';
import {MultiplayerWebSocketMessageType, type MultiplayerService} from '../multiplayer-service.js';
import {WebrtcConnectEvent, WebrtcController, WebrtcMessageEvent} from './webrtc-controller.js';

/**
 * An event that is omitted from {@link WebrtcController} when a WebRTC message is received.
 *
 * @category Internal
 */
export class WebrtcMultiplayerMessageEvent<
    MessageData extends JsonCompatibleValue,
> extends defineTypedCustomEvent<any>()('webrtc-multiplayer-message') {
    public declare detail: MessageData;

    constructor(
        public readonly sourceClientId: Uuid,
        detail: MessageData,
    ) {
        super({detail});
    }
}

/**
 * Type for data in {@link WebrtcMultiplayerConnectionUpdateEvent}.
 *
 * @category Internal
 */
export type MultiplayerConnectionUpdate = RequireExactlyOne<{
    newHost: Uuid;
    newMember: Uuid;
    lostHost: Uuid;
    lostMember: Uuid;
}>;

/**
 * An event that is omitted from {@link WebrtcMultiplayerController} when the multiplayer room host
 * is updated.
 *
 * @category Internal
 */
export class WebrtcMultiplayerConnectionUpdateEvent extends defineTypedCustomEvent<MultiplayerConnectionUpdate>()(
    'webrtc-multiplayer-connection-update',
) {}

/**
 * A helper for creating a new empty room.
 *
 * @category Internal
 */
export function createNewRoom(
    params: Readonly<PartialWithUndefined<Omit<RoomInput, 'roomId'>>> = {},
): RoomInput {
    return mergeDefinedProperties<RoomInput>(
        {
            roomId: createUuidV4(),
            roomName: '',
            roomPassword: '',
        },
        params,
    );
}

/**
 * Room selection input for {@link WebrtcMultiplayerController}.
 *
 * @category Internal
 */
export type RoomInput = Pick<
    Extract<
        MultiplayerService['webSockets']['/connect']['MessageFromClientType'],
        {type: MultiplayerWebSocketMessageType.Offer}
    >,
    'roomPassword' | 'roomId' | 'roomName'
>;

/**
 * A controller that connects to the multiplayer api and establishes a WebRTC connection to the
 * selected room, or, if the room does not exist yet, creates the room and becomes the host.
 *
 * Make sure, after constructing this class, to call
 * {@link WebrtcMultiplayerController.initConnection} when you're ready to being the connection.
 *
 * @category Internal
 */
export class WebrtcMultiplayerController<
    MessageData extends JsonCompatibleValue = any,
> extends ListenTarget<
    WebrtcMultiplayerMessageEvent<MessageData> | WebrtcMultiplayerConnectionUpdateEvent
> {
    public readonly hostClientId: Uuid | undefined;

    /**
     * Connections between multiple WebRTC peers.
     *
     * A connection with the current client's id is the init connection.
     */
    private connections: Record<Uuid, WebrtcController<MessageData>> = {};
    private webSocket: ClientWebSocket<MultiplayerApi['webSockets']['/connect']> | undefined;
    private readonly clientSecret = randomString(32);

    constructor(
        private readonly multiplayerApi: Readonly<MultiplayerApi>,
        /**
         * - 'stun.l.google.com:19302'
         * - 'stun.stunprotocol.org'
         * - 'stun.cloudflare.com:3478'
         */
        public readonly stunServerUrls: ReadonlyArray<string>,
        public readonly multiplayerRoom: Readonly<RoomInput>,
        /** The randomized client id for this controller and client. */
        public readonly clientId: Uuid = createUuidV4(),
    ) {
        super();
    }

    /**
     * If this controller is the host, it'll behave differently:
     *
     * - Hosts hold WebRTC connections to all clients (non-hosts only hold a WebRTC connection to the
     *   host).
     * - Hosts hold a WebSocket connection to the signal server so they can receive more clients at
     *   any time.
     */
    public isHost(): boolean {
        return this.hostClientId === this.clientId;
    }

    /** Get all connected client ids. */
    public getConnectedClientIds(): Uuid[] {
        const hostConnection: Uuid[] =
            this.isHost() || !this.hostClientId ? [] : [this.hostClientId];

        const memberConnections = getObjectTypedKeys(this.connections).filter((clientId) => {
            const controller = this.connections[clientId];

            return controller && controller.isConnected && clientId !== this.clientId;
        });

        return [
            ...hostConnection,
            ...memberConnections,
        ];
    }

    /** Indicates whether ths client is connected to a multiplayer room. */
    public isConnected(): boolean {
        return this.isHost() || !!this.getConnectedClientIds().length;
    }

    /** Destroy this controller and clean everything up. */
    public override destroy() {
        Object.values(this.connections).forEach((connection) => connection.destroy());
        void this.webSocket?.close();
        super.destroy();
    }

    /**
     * Send a message to the room participants.
     *
     * - If the current client is the room host, this message is sent to all other room clients.
     * - If the current client is just a room member (not the host), the message is sent to the host.
     */
    public sendMessage(data: Readonly<MessageData>) {
        /**
         * When this client is the host, this set of connections will be the all the member clients.
         * When this client is a member client, there will only be one connection and it will be the
         * host client.
         */
        Object.values(this.connections).forEach((connection) => {
            if (!connection.isConnected) {
                return;
            }

            try {
                connection.sendMessage(data);
            } catch (error) {
                log.error(extractErrorMessage(error));
            }
        });
    }

    /** Send a message to just a single client. This is only allowed on a host client. */
    public sendToOnlyOneClient(clientId: Uuid, data: Readonly<MessageData>) {
        if (!this.isHost()) {
            log.error(new Error(`Cannot send to an individual client as not a host.`));
            return;
        }

        const client = this.connections[clientId];

        if (!client || !client.isConnected) {
            log.error(new Error(`Cannot send to missing or disconnected client ('${clientId}')`));
            return;
        }

        client.sendMessage(data);
    }

    /**
     * Call this to connect to the multiplayer server.
     *
     * @returns Whether or not the connection was initialized (it won't be initialized, for example,
     *   if the WebRTC connections already exist).
     */
    public async initConnection(): Promise<boolean> {
        if (Object.values(this.connections).length) {
            // connections already exist
            return false;
        }

        const newConnection = this.createNewConnection(this.clientId);
        const newOffer = await newConnection.createOffer(this.stunServerUrls);

        const webSocket = await this.setupWebSocket();
        const reply = await webSocket.sendAndWaitForReply({
            message: {
                type: MultiplayerWebSocketMessageType.Offer,
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                data: newOffer,
                ...this.multiplayerRoom,
            },
            replyCheck(message) {
                return message.type === MultiplayerWebSocketMessageType.OfferResult;
            },
        });

        assert.strictEquals(reply.type, MultiplayerWebSocketMessageType.OfferResult);

        /**
         * `hostClientId` will be set by the already attached listener. We just need to wait until
         * it does, because we need to know who the host is before calling `sendHostPing`.
         */
        await waitUntil.isDefined(() => this.hostClientId);

        this.sendHostPing();

        return true;
    }

    private sendHostPing() {
        if (this.isHost() && this.webSocket) {
            this.webSocket.send({
                type: MultiplayerWebSocketMessageType.HostPing,
                clientCount:
                    Object.keys(this.connections).filter((clientId) => clientId !== this.clientId)
                        .length +
                    /** Add an extra one for the host itself. */
                    1,
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                ...this.multiplayerRoom,
            });

            setTimeout(() => this.sendHostPing(), 1000);
        }
    }

    private async setupWebSocket() {
        if (
            this.webSocket &&
            (this.webSocket.readyState === WebSocket.OPEN ||
                this.webSocket.readyState === WebSocket.CONNECTING)
        ) {
            return this.webSocket;
        }
        const webSocket = await this.multiplayerApi.webSockets['/connect'].connect({
            listeners: {
                message: async ({message}) => {
                    try {
                        if (message.type === MultiplayerWebSocketMessageType.Offer) {
                            if (!this.isHost()) {
                                throw new Error(
                                    `Non-host multiplayer client received a WebRTC offer.`,
                                );
                            }
                            log.faint('received offer');

                            const newConnection = this.createNewConnection(message.clientId);
                            const answer = await newConnection.createAnswer(
                                message.data,
                                this.stunServerUrls,
                            );

                            webSocket.send({
                                type: MultiplayerWebSocketMessageType.Answer,
                                roomId: message.roomId,
                                roomName: message.roomName,
                                clientId: message.clientId,
                                data: answer,
                            });
                        } else if (message.type === MultiplayerWebSocketMessageType.Answer) {
                            if (this.isHost()) {
                                throw new Error(
                                    `Host multiplayer client received a WebRTC answer.`,
                                );
                            }

                            log.faint('received answer');
                            /** A connection with the current uuid is the init connection. */
                            const initConnection = this.connections[this.clientId];
                            if (!initConnection) {
                                throw new Error('Cannot accept answer, no init connection found.');
                            }

                            await initConnection.acceptAnswer(message.data);

                            /**
                             * This client does not need a WebSocket connection anymore if it is not
                             * the host.
                             */
                            await webSocket.close();
                        } else if (message.type === MultiplayerWebSocketMessageType.OfferResult) {
                            if (message.hostClientId !== this.hostClientId) {
                                makeWritable(this).hostClientId = message.hostClientId;

                                if (this.isHost()) {
                                    const initConnection = this.connections[this.clientId];
                                    /**
                                     * Remove the init connection since it won't be used now that
                                     * this instance is the host.
                                     */
                                    delete this.connections[this.clientId];
                                    initConnection?.destroy();
                                }

                                this.dispatch(
                                    new WebrtcMultiplayerConnectionUpdateEvent({
                                        detail: {
                                            newHost: message.hostClientId,
                                        },
                                    }),
                                );
                            }
                        } else if (
                            (message.type as string) === MultiplayerWebSocketMessageType.Error
                        ) {
                            throw new Error(message.errorMessage);
                        } else {
                            throw new Error(
                                `Unexpected ${WebrtcMultiplayerController.name} WebSocket message type: ${message.type}`,
                            );
                        }
                    } catch (error) {
                        log.error(
                            ensureErrorAndPrependMessage(
                                error,
                                `WebSocket message failed: ${stringify(message)}`,
                            ),
                        );
                    }
                },
                error: (error) => {
                    log.error(error);
                },
                close: () => {
                    this.webSocket = undefined;
                },
            },
        });

        this.webSocket = webSocket;
        return webSocket;
    }

    private createNewConnection(uuid: Uuid): WebrtcController<MessageData> {
        const newController = new WebrtcController<MessageData>(this.clientId);
        this.connections[uuid] = newController;
        newController.listen(WebrtcConnectEvent, (event) => {
            const connectionEstablished = event.detail;

            if (connectionEstablished) {
                if (uuid !== this.clientId) {
                    this.dispatch(
                        new WebrtcMultiplayerConnectionUpdateEvent({
                            detail: {
                                newMember: uuid,
                            },
                        }),
                    );
                }
            } else {
                newController.destroy();
                delete this.connections[uuid];
                if (this.isHost()) {
                    this.dispatch(
                        new WebrtcMultiplayerConnectionUpdateEvent({
                            detail: {
                                lostMember: uuid,
                            },
                        }),
                    );
                } else {
                    this.dispatch(
                        new WebrtcMultiplayerConnectionUpdateEvent({
                            detail: {
                                lostHost: uuid,
                            },
                        }),
                    );
                    /**
                     * If this member client has lost connection to its host, we've got to get it
                     * back!
                     */
                    void this.initConnection();
                }
            }
        });
        newController.listen(WebrtcMessageEvent, (event) => {
            const sourceUuid = uuid === this.clientId ? this.hostClientId : uuid;

            if (sourceUuid) {
                this.dispatch(
                    new WebrtcMultiplayerMessageEvent<MessageData>(sourceUuid, event.detail),
                );
            }
        });

        return newController;
    }
}
