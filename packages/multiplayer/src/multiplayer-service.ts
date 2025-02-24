import {AnyOrigin, defineService, HttpMethod} from '@rest-vir/define-service';
import {and, defineShape, exact, indexedKeys, or, uuidShape} from 'object-shape-tester';
import {buildUrl} from 'url-vir';

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

    /**
     * Sent from the multiplayer server to a client WebSocket after their offer has been processed
     * to instruct the client on what kind of client they are (member or host).
     */
    OfferResult = 'offer-result',

    /**
     * A message sent to the multiplayer server from the host client to keep the room info up to
     * date. This will be sent repeatedly on an interval.
     */
    HostPing = 'host-ping',

    /** An error message. */
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
    /**
     * The id of the room that the user is communicating with. Set this either to to an existing
     * room to join that room, or a new id to create a new room.
     */
    roomId: uuidShape,
    /** The name of the room to create or join. */
    roomName: '',
});

/**
 * Data included in each multiplayer server message that is used to identify the message client and
 * the room they wish to join or host.
 *
 * @category Internal
 */
export type ClientIdentification = typeof clientIdShape.runtimeType;

/**
 * Shape definition for {@link WebrtcAnswer}.
 *
 * @category Internal
 */
export const webrtcAnswerShape = defineShape({
    type: exact(MultiplayerWebSocketMessageType.Answer),
    sdp: '',
});

/**
 * WebRTC handshake answer data.
 *
 * @category Internal
 */
export type WebrtcAnswer = typeof webrtcAnswerShape.runtimeType;

/**
 * Shape definition for "answer" messages.
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
 * Shape definition for {@link WebrtcOffer}.
 *
 * @category Internal
 */
export const webrtcOfferShape = defineShape({
    type: exact(MultiplayerWebSocketMessageType.Offer),
    sdp: '',
});

/**
 * WebRTC handshake offer data.
 *
 * @category Internal
 */
export type WebrtcOffer = typeof webrtcOfferShape.runtimeType;

/**
 * Shape definition for "offer" messages forwarded from the multiplayer server to the host.
 *
 * @category Internal
 */
export const forwardedOfferMessageShape = and(clientIdShape, {
    type: exact(MultiplayerWebSocketMessageType.Offer),
    /**
     * This data object matches the `RTCSessionDescriptionInit` type from the TS lib. This data
     * should be passed into `RTCPeerConnection.setRemoteDescription` when creating an offer.
     */
    data: webrtcOfferShape,
});
/**
 * Shape definition for "offer" messages.
 *
 * @category Internal
 */
export const offerMessageShape = and(forwardedOfferMessageShape, {
    /**
     * This secret is used to verify that a client is a host of a room. Do not share this with other
     * clients.
     */
    clientSecret: '',
    /** Set this when joining a room with a password or when creating a room to set a room password. */
    roomPassword: '',
});

/**
 * Shape definition for "host ping" messages.
 *
 * @category Internal
 */
export const hostPingMessageShape = and(clientIdShape, {
    type: exact(MultiplayerWebSocketMessageType.HostPing),
    /** This secret is used to verify that the sender is indeed the host of the current room. */
    clientSecret: '',
    clientCount: -1,
    roomPassword: '',
});

/**
 * Shape definition for "offer result" messages.
 *
 * @category Internal
 */
export const offerResultShape = {
    type: exact(MultiplayerWebSocketMessageType.OfferResult),
    hostClientId: uuidShape,
};

/**
 * The output from {@link defineMultiplayerService}, regardless of what the passed-in `serviceOrigin`
 * is.
 *
 * @category Internal
 */
export type MultiplayerService = ReturnType<typeof defineMultiplayerService>;

/**
 * The default, or starting, port for the multiplayer service.
 *
 * @category Internal
 */
export const defaultMultiplayerServicePort = 3500;
export const defaultMultiplayerServiceOrigin = buildUrl('http://localhost', {
    port: defaultMultiplayerServicePort,
}).origin;

/**
 * The multiplayer service definition.
 *
 * @category Internal
 */
export function defineMultiplayerService(serviceOrigin: string = defaultMultiplayerServiceOrigin) {
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
                    hostPingMessageShape,
                ),
                messageFromHostShape: or(
                    answerMessageShape,
                    forwardedOfferMessageShape,
                    offerResultShape,
                    {
                        type: exact(MultiplayerWebSocketMessageType.Error),
                        errorMessage: '',
                    },
                ),
            },
        },
    });
}
