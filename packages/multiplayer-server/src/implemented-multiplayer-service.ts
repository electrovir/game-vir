import {callAsynchronously, stringify, type ArrayElement, type Uuid} from '@augment-vir/common';
import {
    defineMultiplayerService,
    MultiplayerWebSocketMessageType,
    type ClientIdentification,
    type MultiplayerClientRoom,
    type MultiplayerClientRooms,
    type MultiplayerService,
} from '@game-vir/multiplayer';
import {CommonWebSocketState} from '@rest-vir/define-service';
import {
    defaultServiceLogger,
    HttpStatus,
    implementService,
    ServerWebSocket,
    ServiceLogger,
} from '@rest-vir/implement-service';

/**
 * Multiplayer server options.
 *
 * @category Internal
 */
export type MultiplayerServerOptions = {
    /**
     * The Multiplayer server's logger.
     *
     * For help setting this, see any of the following from `@rest-vir/implement-service':
     *
     * - `silentServiceLogger`
     * - `defaultServiceLogger`
     * - `createServiceLogger`
     */
    logger?: ServiceLogger;
};

type MultiplayerClient = Pick<ClientIdentification, 'clientName' | 'clientId'> & {
    webSocket: ServerWebSocket<MultiplayerService['webSockets']['/connect']>;
};

type MultiplayerServerRoom = {
    clients: Record<Uuid, MultiplayerClient>;
    clientsAwaitingAnswer: Record<Uuid, MultiplayerClient>;
    hostClient: MultiplayerClient | undefined;
    roomPassword: string;
} & Pick<MultiplayerClientRoom, 'roomName' | 'roomId'>;

type MultiplayerServerRooms = Record<Uuid, MultiplayerServerRoom>;

/**
 * The server's state object which will be mutated constantly while it is running.
 *
 * @category Internal
 */
export type MultiplayerServerState = {
    multiplayerRooms: MultiplayerServerRooms;
    webSocketMessageQueue: {
        webSocket: ServerWebSocket<MultiplayerService['webSockets']['/connect']>;
        message: MultiplayerService['webSockets']['/connect']['MessageFromClientType'] | undefined;
    }[];
    webSocketToRoomMap: WeakMap<
        ServerWebSocket,
        {
            joinedRoomId: Uuid;
            clientId: Uuid;
        }
    >;
    isProcessingQueue: boolean;
    roomsForFetching: MultiplayerClientRooms;
    logger: ServiceLogger;
};

/**
 * The implemented service returned from {@link implementMultiplayerService}.
 *
 * @category Internal
 */
export type ImplementedMultiplayerService = ReturnType<
    typeof implementMultiplayerService
>['service'];

/**
 * Implements the multiplayer server.
 *
 * @category Internal
 */
export function implementMultiplayerService(options: MultiplayerServerOptions = {}) {
    const serverState: MultiplayerServerState = {
        logger: options.logger || defaultServiceLogger,
        multiplayerRooms: {},
        webSocketMessageQueue: [],
        webSocketToRoomMap: new WeakMap(),
        isProcessingQueue: false,
        roomsForFetching: {},
    };

    const service = implementService(
        {
            service: defineMultiplayerService(
                /**
                 * This origin doesn't really matter because `startMultiplayerServer` has options
                 * for this.
                 */
                'http://localhost:3000',
            ),
            logger: serverState.logger,
        },
        {
            endpoints: {
                '/health'() {
                    return {
                        statusCode: HttpStatus.Ok,
                    };
                },
                '/rooms'() {
                    return {
                        statusCode: HttpStatus.Ok,
                        responseData: serverState.roomsForFetching,
                    };
                },
            },
            webSockets: {
                '/connect': {
                    message({message, webSocket}) {
                        serverState.webSocketMessageQueue.push({message, webSocket});
                        void callAsynchronously(() => processQueue(serverState));
                    },
                    close({webSocket}) {
                        serverState.webSocketMessageQueue.push({message: undefined, webSocket});
                        void callAsynchronously(() => processQueue(serverState));
                    },
                },
            },
        },
    );

    return {
        serverState,
        service,
    };
}

function updateRoomsForFetching(
    roomId: Uuid,
    serverState: Pick<MultiplayerServerState, 'roomsForFetching' | 'multiplayerRooms' | 'logger'>,
) {
    const roomForFetching = serverState.roomsForFetching[roomId];
    const multiplayerRoom = serverState.multiplayerRooms[roomId];

    if (!multiplayerRoom) {
        delete serverState.roomsForFetching[roomId];
        serverState.logger.error(
            new Error(`Trying to update a multiplayer room that does not exist: '${roomId}'.`),
        );
        return;
    }

    const clientCount =
        Object.keys(multiplayerRoom.clients).length + (multiplayerRoom.hostClient ? 1 : 0);

    if (roomForFetching) {
        roomForFetching.clientCount = clientCount;
    } else {
        serverState.roomsForFetching[roomId] = {
            roomId: multiplayerRoom.roomId,
            roomName: multiplayerRoom.roomName,
            clientCount: clientCount,
            hasRoomPassword: !!multiplayerRoom.roomPassword,
        };
    }
}

function leaveCurrentRoom(
    serverState: MultiplayerServerState,
    webSocket: ArrayElement<typeof serverState.webSocketMessageQueue>['webSocket'],
) {
    const mappedJoin = serverState.webSocketToRoomMap.get(webSocket);

    if (mappedJoin) {
        serverState.webSocketToRoomMap.delete(webSocket);
        const joinedRoom = serverState.multiplayerRooms[mappedJoin.joinedRoomId];

        if (joinedRoom) {
            if (joinedRoom.hostClient?.clientId === mappedJoin.clientId) {
                joinedRoom.hostClient = undefined;
            }
            delete joinedRoom.clients[mappedJoin.clientId];
            delete joinedRoom.clientsAwaitingAnswer[mappedJoin.clientId];

            if (!Object.keys(joinedRoom.clients).length && !joinedRoom.hostClient) {
                /** If the room is now empty, remove it. */
                delete serverState.multiplayerRooms[mappedJoin.joinedRoomId];
                delete serverState.roomsForFetching[mappedJoin.joinedRoomId];
            } else {
                updateRoomsForFetching(mappedJoin.joinedRoomId, serverState);
            }
        }
    }
}

function processQueueItem(
    serverState: MultiplayerServerState,
    {message, webSocket}: ArrayElement<typeof serverState.webSocketMessageQueue>,
) {
    /** If the WebSocket is closed, we remove this user from all rooms. */
    if (webSocket.readyState !== CommonWebSocketState.Open || !message) {
        leaveCurrentRoom(serverState, webSocket);

        return;
    }

    const multiplayerRoom = serverState.multiplayerRooms[message.roomId];
    const currentClient: MultiplayerClient = {
        clientName: message.clientName,
        clientId: message.clientId,
        webSocket,
    };

    if (message.type === MultiplayerWebSocketMessageType.Offer) {
        /** Indicates that the user is trying to join a new room. */
        const joiningExistingRoom: boolean = !message.roomName;

        /** If a client is trying to join a new room, they must leave their old room first. */
        leaveCurrentRoom(serverState, webSocket);

        if (joiningExistingRoom && !multiplayerRoom) {
            /** The client is trying to join a room which no longer exists. */
            const errorMessage = `Failed to join room ${message.roomId}: it no longer exists.`;
            serverState.logger.error(new Error(errorMessage));
            webSocket.send({
                type: MultiplayerWebSocketMessageType.Error,
                errorMessage,
            });
        } else if (!joiningExistingRoom && !multiplayerRoom) {
            /** The client is creating a new room. */
            const newRoom: MultiplayerServerRoom = {
                clients: {},
                clientsAwaitingAnswer: {},
                hostClient: currentClient,
                roomName: message.roomName,
                roomId: message.roomId,
                roomPassword: message.roomPassword,
            };
            serverState.logger.info(
                `Creating new room '${newRoom.roomName}' with id '${newRoom.roomId}' and host '${currentClient.clientId}'`,
            );
            serverState.multiplayerRooms[newRoom.roomId] = newRoom;
            updateRoomsForFetching(newRoom.roomId, serverState);
            serverState.webSocketToRoomMap.set(webSocket, {
                clientId: currentClient.clientId,
                joinedRoomId: newRoom.roomId,
            });
        } else if (multiplayerRoom) {
            /** The client is connecting to a room. */
            if (
                multiplayerRoom.roomPassword &&
                message.roomPassword !== multiplayerRoom.roomPassword
            ) {
                webSocket.send({
                    type: MultiplayerWebSocketMessageType.Error,
                    errorMessage: 'Invalid password',
                });
                return;
            }

            if (
                multiplayerRoom.hostClient &&
                multiplayerRoom.hostClient.webSocket.readyState === CommonWebSocketState.Open
            ) {
                /** The room has a valid host. */
                serverState.logger.info(`Sending offer to host from ${message.clientId}`);
                multiplayerRoom.hostClient.webSocket.send(message);
                multiplayerRoom.clients[currentClient.clientId] = currentClient;
                serverState.webSocketToRoomMap.set(webSocket, {
                    clientId: currentClient.clientId,
                    joinedRoomId: multiplayerRoom.roomId,
                });
                updateRoomsForFetching(message.roomId, serverState);
            } else {
                /** The room has no valid host, so we set this client as the host. */
                serverState.logger.info(
                    `Setting room '${multiplayerRoom.roomId}' host to ${message.clientId}`,
                );
                multiplayerRoom.hostClient = currentClient;
                delete multiplayerRoom.clients[currentClient.clientId];

                updateRoomsForFetching(message.roomId, serverState);
            }
        } else {
            /** Unexpected operation. */
            const errorMessage = `Operation failed: ${stringify(message)}`;
            serverState.logger.error(new Error(errorMessage));
            webSocket.send({
                type: MultiplayerWebSocketMessageType.Error,
                errorMessage,
            });
        }
    } else if (message.type === MultiplayerWebSocketMessageType.Answer) {
        /** The host client is sending an answer to one of its clients. */
        const client = multiplayerRoom?.clientsAwaitingAnswer[message.clientId];
        if (!client) {
            serverState.logger.error(
                new Error(`No client found waiting for an answer by '${message.clientId}'`),
            );
            return;
        }
        /**
         * Now that we're sending an answer to this client, we can remove it from the list of
         * clients that are waiting for answers.
         */
        delete multiplayerRoom.clientsAwaitingAnswer[message.clientId];
        serverState.logger.info(`Sending answer to ${message.clientId}`);
        client.webSocket.send(message);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (message.type === MultiplayerWebSocketMessageType.LeaveRoom) {
        leaveCurrentRoom(serverState, webSocket);
    } else {
        serverState.logger.error(new TypeError(`Invalid message: ${stringify(message)}`));
    }
}

function processQueue(serverState: MultiplayerServerState) {
    if (serverState.isProcessingQueue) {
        return;
    }
    serverState.isProcessingQueue = true;

    let nextItem: ArrayElement<typeof serverState.webSocketMessageQueue> | undefined;

    while ((nextItem = serverState.webSocketMessageQueue.shift())) {
        processQueueItem(serverState, nextItem);
    }
    serverState.isProcessingQueue = false;
}
