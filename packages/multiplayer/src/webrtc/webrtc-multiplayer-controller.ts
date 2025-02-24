import {assert} from '@augment-vir/assert';
import {
    createUuidV4,
    getObjectTypedEntries,
    log,
    makeWritable,
    randomString,
    type Uuid,
} from '@augment-vir/common';
import type {ClientWebSocket} from '@rest-vir/define-service';
import {ListenTarget} from 'typed-event-target';
import type {MultiplayerApi} from '../multiplayer-api.js';
import {MultiplayerWebSocketMessageType, type MultiplayerService} from '../multiplayer-service.js';
import {
    WebrtcConnectEvent,
    WebrtcController,
    WebrtcEvents,
    WebrtcMessageEvent,
} from './webrtc-controller.js';

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
 * @category Main
 */
export class WebrtcMultiplayerController<MessageData = unknown> extends ListenTarget<
    WebrtcEvents<MessageData>
> {
    /**
     * If this controller is the host, it'll behave differently:
     *
     * - Hosts hold WebRTC connections to all clients (non-hosts only hold a WebRTC connection to the
     *   host).
     * - Hosts hold a WebSocket connection to the signal server so they can receive more clients at
     *   any time.
     */
    public readonly isHost: boolean = false;
    /** The randomized client id for this controller. */
    public readonly clientId: Uuid = createUuidV4();

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
    ) {
        super();
    }

    /** Indicates whether ths client is connected to a multiplayer room. */
    public get isConnected() {
        return (
            this.isHost ||
            Object.values(this.connections).some((controller) => controller.isConnected)
        );
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
        getObjectTypedEntries(this.connections).forEach(
            ([
                clientId,
                connection,
            ]) => {
                if (clientId === this.clientId) {
                    return;
                }
                connection.sendMessage(data);
            },
        );
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

        makeWritable(this).isHost = reply.youAreTheHost;

        this.sendHostPing();

        return true;
    }

    private sendHostPing() {
        if (this.isHost && this.webSocket) {
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
                    if (message.type === MultiplayerWebSocketMessageType.Offer) {
                        if (!this.isHost) {
                            throw new Error(`Non-host multiplayer client received a WebRTC offer.`);
                        }
                        log.faint('received offer');

                        const initConnection = this.connections[this.clientId];
                        /**
                         * Remove the init connection since it won't be used now that this
                         * multi-peer instance is the host.
                         */
                        delete this.connections[this.clientId];
                        const newConnection = this.createNewConnection(message.clientId);
                        const answer = await newConnection.createAnswer(
                            message.data,
                            this.stunServerUrls,
                        );
                        initConnection?.destroy();

                        webSocket.send({
                            type: MultiplayerWebSocketMessageType.Answer,
                            roomId: message.roomId,
                            roomName: message.roomName,
                            clientId: message.clientId,
                            data: answer,
                        });
                    } else if (message.type === MultiplayerWebSocketMessageType.Answer) {
                        log.faint('received answer');
                        /** A connection with the current uuid is the init connection. */
                        const initConnection = this.connections[this.clientId];
                        if (!initConnection) {
                            throw new Error('Cannot accept answer, no init connection found.');
                        }

                        await initConnection.acceptAnswer(message.data);

                        if (!this.isHost) {
                            /**
                             * This client does not need a WebSocket connection anymore if it is not
                             * the host.
                             */
                            await webSocket.close();
                        }
                    } else if (message.type === MultiplayerWebSocketMessageType.Error) {
                        log.error(message.errorMessage);
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
        const newController = new WebrtcController<MessageData>();
        this.connections[uuid] = newController;
        newController.listen(WebrtcConnectEvent, (event) => {
            if (event.detail) {
                this.dispatch(new WebrtcConnectEvent({detail: true}));
            } else {
                newController.destroy();
                delete this.connections[uuid];
                if (!Object.keys(this.connections).length && !this.isHost) {
                    /** If a member client has lost connection to the host, we've got to get it back! */
                    this.dispatch(new WebrtcConnectEvent({detail: false}));
                    void this.initConnection();
                }
            }
        });
        newController.listen(WebrtcMessageEvent, (event) => {
            this.dispatch(
                new WebrtcMessageEvent<MessageData>({
                    detail: event.detail,
                }),
            );
        });

        return newController;
    }
}
