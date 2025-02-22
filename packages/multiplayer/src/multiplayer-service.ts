import {AnyOrigin, defineService, HttpMethod} from '@rest-vir/define-service';
import {and, defineShape, exact, indexedKeys, or, uuidShape} from 'object-shape-tester';

/**
 * All possible message types sent to and from the game-vir multiplayer server. These are used to
 * establish WebRTC connections.
 *
 * @category Internal
 */
export enum MultiplayerWebSocketMessageType {
    /**
     * Sent to the multiplayer server from a client when they want to connect. The offer is then
     * forwarded to the host client.
     *
     * If a host has not been set yet, then this client becomes the host.
     */
    Offer = 'offer',
    /**
     * Sent to the multiplayer server from a host client (in response to an offer), then forwarded
     * to the client.
     */
    Answer = 'answer',

    /** Sent to the multiplayer server from a client when they want to leave a room. */
    LeaveRoom = 'leave-room',

    Error = 'error',
}

/**
 * Shape definition for {@link MultiplayerClientRoom}.
 *
 * @category Internal
 */
export const multiplayerClientRoomShape = defineShape({
    roomName: '',
    roomId: uuidShape,
    clientCount: -1,
    hasRoomPassword: false,
});

/**
 * Room stats presented to clients when they fetch the current list of rooms.
 *
 * @category Internal
 */
export type MultiplayerClientRoom = typeof multiplayerClientRoomShape.runtimeType;

/**
 * Shape definition for {@link MultiplayerClientRooms}.
 *
 * @category Internal
 */
export const multiplayerClientRoomsShape = defineShape(
    indexedKeys({
        keys: uuidShape,
        values: multiplayerClientRoomShape,
        required: false,
    }),
);
/**
 * A collection of {@link MultiplayerClientRoom} instances.
 *
 * @category Internal
 */
export type MultiplayerClientRooms = typeof multiplayerClientRoomsShape.runtimeType;

/**
 * A shape definition for {@link ClientIdentification} when joining or creating a room.
 *
 * @category Internal
 */
export const clientIdShape = defineShape({
    /** This UUID is used to keep track of each client on the multiplayer server. */
    clientId: uuidShape,
    /** The user's self-defined name for themself. */
    clientName: '',
    /**
     * The id of the room that the user is communicating with. Set this either to to an existing
     * room to join that room, or a new id to create a new room.
     */
    roomId: uuidShape,
    /**
     * The name of the room to create. Set this as an empty string when connecting to an existing
     * room.
     */
    roomName: '',
    /** Set this when joining a room with a password or when creating a room to set a room password. */
    roomPassword: '',
});

/**
 * Data included in each multiplayer server message that is used to identify the message client and
 * the room they wish to join or host.
 *
 * @category Internal
 */
export type ClientIdentification = typeof clientIdShape.runtimeType;

/**
 * Message shape for "answer" messages.
 *
 * @category Internal
 */
export const answerMessageShape = and(clientIdShape, {
    type: exact(MultiplayerWebSocketMessageType.Answer),
    /**
     * This data object matches the `RTCSessionDescriptionInit` type from the TS lib. This data
     * should be passed into `RTCPeerConnection.setRemoteDescription` to accept a WebRTC answer.
     */
    data: {
        type: exact(MultiplayerWebSocketMessageType.Answer),
        sdp: '',
    },
});
/**
 * Message shape for "leave room" messages.
 *
 * @category Internal
 */
export const leaveRoomMessageShape = and(clientIdShape, {
    type: exact(MultiplayerWebSocketMessageType.LeaveRoom),
});

/**
 * Message shape for "offer" messages.
 *
 * @category Internal
 */
export const offerMessageShape = and(clientIdShape, {
    type: exact(MultiplayerWebSocketMessageType.Offer),
    /**
     * This data object matches the `RTCSessionDescriptionInit` type from the TS lib. This data
     * should be passed into `RTCPeerConnection.setRemoteDescription` when creating an offer.
     */
    data: {
        type: exact(MultiplayerWebSocketMessageType.Offer),
        sdp: '',
    },
});

/**
 * The output from {@link defineMultiplayerService}, regardless of what the passed-in `serviceOrigin`
 * is.
 *
 * @category Internal
 */
export type MultiplayerService = ReturnType<typeof defineMultiplayerService>;

/**
 * The multiplayer service definition.
 *
 * @category Internal
 */
export function defineMultiplayerService(serviceOrigin: string) {
    return defineService({
        serviceName: 'multiplayer-service',
        requiredClientOrigin: AnyOrigin,
        serviceOrigin,
        endpoints: {
            '/health': {
                methods: {
                    [HttpMethod.Get]: true,
                },
                requestDataShape: undefined,
                responseDataShape: undefined,
            },
            /** List all current public rooms. */
            '/rooms': {
                requestDataShape: undefined,
                responseDataShape: multiplayerClientRoomsShape,
                methods: {
                    [HttpMethod.Get]: true,
                },
            },
        },
        webSockets: {
            '/connect': {
                messageFromClientShape: or(
                    answerMessageShape,
                    offerMessageShape,
                    leaveRoomMessageShape,
                ),
                messageFromHostShape: or(answerMessageShape, offerMessageShape, {
                    type: exact(MultiplayerWebSocketMessageType.Error),
                    errorMessage: '',
                }),
            },
        },
    });
}
