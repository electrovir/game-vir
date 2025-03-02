import {JsonCompatibleValue, makeWritable, MaybePromise, type Uuid} from '@augment-vir/common';
import {mapServiceDevPort} from '@rest-vir/define-service';
import {convertDuration, type AnyDuration} from 'date-vir';
import {LockStepFrameEvent, LockStepMultiplayerController} from './lock-step-controller.js';
import {createMultiplayerApi, MultiplayerApi} from './multiplayer-api.js';
import type {MultiplayerClientRooms} from './multiplayer-service.js';
import {
    MultiplayerConnectionUpdate,
    RoomInput,
    WebrtcMultiplayerConnectionUpdateEvent,
} from './webrtc/webrtc-multiplayer-controller.js';

/**
 * Connection state for {@link MultiplayerController}.
 *
 * @category Internal
 */
export enum MultiplayerConnectionState {
    Disconnected = 'disconnected',
    Connecting = 'connecting',
    Connected = 'connected',
}

/**
 * Constructor parameters for {@link MultiplayerController}.
 *
 * @category Internal
 */
export type MultiplayerControllerParams<Action> = {
    /** Listen to multiplayer events. */
    listeners: {
        /** This is fired whenever a new frame is received from the host client. */
        frame: (actions: ReadonlyArray<Action>) => MaybePromise<void>;
        /**
         * This is called whenever the room list updates, even if there were no changes to the room
         * list. Note that room list updates are paused while the controller is connected to an
         * actual room.
         */
        roomListUpdate?: (rooms: Readonly<MultiplayerClientRooms>) => MaybePromise<void>;
        /**
         * This is fired in the following situations:
         *
         * - A new host for the room was selected
         * - The room host was lost
         * - A new room client was added (only fired on the host client)
         * - A room client was lost (only fired on the host client)
         */
        clientUpdate?: (update: Readonly<MultiplayerConnectionUpdate>) => MaybePromise<void>;
        /** Fires when the controller's connection state is updated. */
        connectionUpdate?: (state: MultiplayerConnectionState) => MaybePromise<void>;
    };
    /**
     * Set to `undefined` or `false` to disable port scanning. Set to `true` to enable port
     * scanning. Set to an options object to configure port scanning.
     *
     * It is useful to enable this so that clients can find the port that your multiplayer server is
     * running on in case it must change. Note that port scanning will not be active if your
     * `serviceOrigin` does not contain a port.
     */
    portScanOptions: undefined | Parameters<typeof mapServiceDevPort>[1] | true;
    /** @example 'http://localhost:3000' */
    serviceOrigin: string;
    /**
     * How long to wait before fetching the list of rooms again.
     *
     * @default {seconds: 10}
     */
    roomUpdateInterval?: AnyDuration | undefined;
    /**
     * Optional stun server URLs to help with routing WebRTC connections. This is entirely optional,
     * but might help with clients attempting to establish connections to each other.
     */
    stunServerUrls?: ReadonlyArray<string> | undefined;
    /**
     * The duration between each frame. This should probably always be smaller than your supported
     * render frame duration (1/FPS).
     *
     * @default {milliseconds: 10}
     */
    frameDuration?: AnyDuration | undefined;
};

/**
 * An all-in-one controller for lock-step multiplayer messaging. This requires a Node.js service
 * running the {@link MultiplayerApi} to function.
 *
 * @category Main
 */
export class MultiplayerController<Action extends JsonCompatibleValue = any> {
    /** Currently joined room id. If a room has not been joined yet, this will be empty. */
    public readonly roomId: Uuid | undefined;
    /** The current connection state of the controller. */
    public readonly connectionState: MultiplayerConnectionState =
        MultiplayerConnectionState.Disconnected;

    private currentConnection: LockStepMultiplayerController | undefined;
    private readonly multiplayerApi;
    private roomUpdateIntervalId: ReturnType<typeof globalThis.setInterval> | undefined;

    constructor(private readonly params: MultiplayerControllerParams<Action>) {
        // eslint-disable-next-line sonarjs/no-async-constructor
        this.multiplayerApi = createMultiplayerApi({
            portScanOptions: params.portScanOptions,
            serviceOrigin: params.serviceOrigin,
        });

        this.startRoomInterval();
    }

    /** The current FPS of the data flow. */
    public getFps(): number {
        return this.currentConnection?.currentFps || 0;
    }

    /** Fire an action. This will be sent to all clients in the room so they can process it. */
    public act(actions: Action | ReadonlyArray<Action>) {
        if (!this.currentConnection || !this.currentConnection.isConnected()) {
            throw new Error(`Cannot perform action: not connected to a room.`);
        }

        this.currentConnection.act(Array.isArray(actions) ? actions : [actions]);
    }

    /** Detects if this controller is the room host or not. */
    public isHost(): boolean {
        return this.currentConnection?.isHost() || false;
    }

    /** Cleanup everything. */
    public destroy() {
        this.currentConnection?.destroy();
        globalThis.clearInterval(this.roomUpdateIntervalId);
    }

    /**
     * Join or create a room.
     *
     * @throws `Error` if this controller is already connected to a room.
     */
    public async joinOrCreateRoom(room: Readonly<RoomInput>) {
        if (this.currentConnection) {
            throw new Error(`Cannot join or create a room, `);
        }
        this.updateConnectionState(MultiplayerConnectionState.Connecting);

        this.currentConnection = new LockStepMultiplayerController(
            await this.multiplayerApi,
            this.params.stunServerUrls || [],
            room,
            this.params.frameDuration || {milliseconds: 10},
        );
        this.currentConnection.listen(LockStepFrameEvent, async (event) => {
            await this.params.listeners.frame(event.detail);
        });
        if (this.params.listeners.clientUpdate) {
            this.currentConnection.listen(WebrtcMultiplayerConnectionUpdateEvent, async (event) => {
                await this.params.listeners.clientUpdate?.(event.detail);
            });
        }

        await this.currentConnection.connect();
        makeWritable(this).roomId = room.roomId;
        globalThis.clearInterval(this.roomUpdateIntervalId);
        this.updateConnectionState(MultiplayerConnectionState.Connected);
    }

    /** Leave the current room. */
    public leaveRoom() {
        if (!this.currentConnection) {
            return;
        }

        makeWritable(this).roomId = undefined;
        this.currentConnection.destroy();
        this.currentConnection = undefined;
        this.startRoomInterval();
        this.updateConnectionState(MultiplayerConnectionState.Disconnected);
    }

    private updateConnectionState(state: MultiplayerConnectionState) {
        makeWritable(this).connectionState = state;
        void this.params.listeners.connectionUpdate?.(state);
    }

    private startRoomInterval() {
        if (this.params.listeners.roomListUpdate) {
            const roomUpdateMs: number = this.params.roomUpdateInterval
                ? convertDuration(this.params.roomUpdateInterval, {milliseconds: true}).milliseconds
                : 10_000;

            this.roomUpdateIntervalId = globalThis.setInterval(async () => {
                if (this.currentConnection) {
                    return;
                }
                const {data: currentRooms} = await (
                    await this.multiplayerApi
                ).endpoints['/rooms'].fetch();
                await this.params.listeners.roomListUpdate?.(currentRooms);
            }, roomUpdateMs);
        }
    }
}
