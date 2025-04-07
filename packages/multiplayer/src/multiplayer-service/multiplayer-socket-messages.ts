import {and, defineShape, exact, or, uuidShape} from 'object-shape-tester';
import {
    MultiplayerWebSocketMessageType,
    webrtcAnswerShape,
    webrtcOfferShape,
} from '../webrtc/web-rtc-communication.js';

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
 * Base shape definition for every message type.
 *
 * @category Internal
 */
export const baseMessageShape = defineShape({
    /**
     * The id of the original message. If a message is ever a response to another message, the
     * message id will remain the same throughout the chain.
     */
    messageId: uuidShape,
});

/**
 * ==========================================================
 *
 * # Message Shape Definitions
 *
 * ==========================================================
 */

/**
 * Shape definition for "answer" messages.
 *
 * @category Internal
 */
export const answerMessageShape = defineShape(
    and(clientIdShape, baseMessageShape, {
        type: exact(MultiplayerWebSocketMessageType.Answer),
        /**
         * This data object matches the `RTCSessionDescriptionInit` type from the TS lib. This data
         * should be passed into `RTCPeerConnection.setRemoteDescription` to accept a WebRTC
         * answer.
         */
        data: or({rejected: exact(true)}, webrtcAnswerShape),
    }),
);

/**
 * Shape definition for "host ping" messages.
 *
 * @category Internal
 */
export const hostPingMessageShape = defineShape(
    and(clientIdShape, baseMessageShape, {
        type: exact(MultiplayerWebSocketMessageType.HostPing),
        /** This secret is used to verify that the sender is indeed the host of the current room. */
        clientSecret: '',
        clientCount: -1,
        roomPassword: '',
    }),
);

/**
 * Shape definition for "offer" messages forwarded from the multiplayer server to the host.
 *
 * @category Internal
 */
export const forwardedOfferMessageShape = defineShape(
    and(clientIdShape, baseMessageShape, {
        type: exact(MultiplayerWebSocketMessageType.Offer),
        /**
         * This data object matches the `RTCSessionDescriptionInit` type from the TS lib. This data
         * should be passed into `RTCPeerConnection.setRemoteDescription` when creating an offer.
         */
        data: webrtcOfferShape,
    }),
);

/**
 * Shape definition for "offer" messages.
 *
 * @category Internal
 */
export const offerMessageShape = defineShape(
    and(forwardedOfferMessageShape, baseMessageShape, {
        /**
         * This secret is used to verify that a client is a host of a room. Do not share this with
         * other clients.
         */
        clientSecret: '',
        /**
         * Set this when joining a room with a password or when creating a room to set a room
         * password.
         */
        roomPassword: '',
    }),
);

/**
 * Shape definition for "offer result" messages.
 *
 * @category Internal
 */
export const offerResultShape = defineShape(
    and(baseMessageShape, {
        type: exact(MultiplayerWebSocketMessageType.OfferResult),
        hostClientId: uuidShape,
    }),
);

/**
 * Shape definition for error messages.
 *
 * @category Internal
 */
export const errorMessageShape = defineShape(
    and(baseMessageShape, {
        type: exact(MultiplayerWebSocketMessageType.Error),
        errorMessage: '',
    }),
);
