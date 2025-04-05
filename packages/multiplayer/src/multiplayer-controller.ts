import {JsonCompatibleValue, makeWritable, MaybePromise, type Uuid} from '@augment-vir/common';
import {mapServiceDevPort} from '@rest-vir/define-service';
import {convertDuration, type AnyDuration} from 'date-vir';
import type {RequireExactlyOne} from 'type-fest';
import {LockStepFrameEvent, LockStepGameStateController} from './lock-step-controller.js';
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
    Connecting = 'connecting',
    Connected = 'connected',
    Disconnected = 'disconnected',
    Error = 'error',
}

/**
 * Service and room connection state for {@link MultiplayerController}.
 *
 * @category Internal
 */
export type ServiceAndRoomConnectionState = {
    service: MultiplayerConnectionState;
    room: MultiplayerConnectionState;
};

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
        connectionUpdate?: (state: ServiceAndRoomConnectionState) => MaybePromise<void>;
    };

    /**
     * The duration between each frame. This should probably always be smaller than your supported
     * render frame duration (1/FPS).
     *
     * @default {milliseconds: 10}
     */
    frameDuration?: AnyDuration | undefined;
} & RequireExactlyOne<{
    singleplayer: true;
    multiplayer: MultiplayerParams;
}>;

/**
 * Multiplayer mode parameters for {@link MultiplayerController}.
 *
 * @category Internal
 */
export type MultiplayerParams = {
    /**
     * Set to `undefined` or `false` to disable port scanning. Set to `true` to enable port
     * scanning. Set to an options object to configure port scanning.
     *
     * It is useful to enable this so that clients can find the port that your multiplayer server is
     * running on in case it must change. Note that port scanning will not be active if your
     * `serviceOrigin` does not contain a port.
     *
     * @default undefined
     */
    portScanOptions?: undefined | Parameters<typeof mapServiceDevPort>[1] | boolean;
    /**
     * The origin of the server running the multiplayer connection service.
     *
     * @example 'http://localhost:3000'
     */
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
};

/**
 * An all-in-one controller for singleplayer or lock-step multiplayer game state. Singleplayer mode
 * requires no servers. Multiplayer mode requires a backend service running the
 * {@link MultiplayerApi}.
 *
 * @category Main
 */
export class MultiplayerController<Action extends JsonCompatibleValue = any> {
    /** Currently joined room id. If a room has not been joined yet, this will be empty. */
    public readonly roomId: Uuid | undefined;
    /** The current connection state of the controller's connection to a backend service. */
    public readonly serviceConnectionState: MultiplayerConnectionState =
        MultiplayerConnectionState.Disconnected;
    /** The current connection state of the controller's connection to a multiplayer room. */
    public readonly roomConnectionState: MultiplayerConnectionState =
        MultiplayerConnectionState.Disconnected;

    /**
     * Current WebRTC lock step connection with the room host (when not the host) or all room
     * participants (when the host). This will only be initialized after calling
     * {@link MultiplayerController.joinOrCreateRoom}.
     */
    protected currentConnection: LockStepGameStateController | undefined;
    /** The current MultiplayerApi. This will be `undefined` if playing in single player. */
    public multiplayerApi: Promise<MultiplayerApi> | undefined;
    /**
     * Used to keep track of the room update interval. This will be set when the controller is
     * constructed in multiplayer mode or when a room is left. This will be cleared when a room is
     * joined or if the controller is destroyed.
     */
    protected roomUpdateIntervalId: ReturnType<typeof globalThis.setInterval> | undefined;

    /** Get the current client's WebRTC client id. */
    public get clientId(): Uuid | undefined {
        return this.currentConnection?.clientId;
    }

    constructor(protected readonly params: MultiplayerControllerParams<Action>) {
        if (params.multiplayer) {
            this.startMultiplayer(params.multiplayer);
        } else {
            this.startSingleplayer();
        }
    }

    /**
     * This is automatically called when {@link MultiplayerControllerParams} is constructed with the
     * {@link MultiplayerControllerParams['multiplayer']} parameter. This initializes
     * {@link MultiplayerController.multiplayerApi} and
     * {@link MultiplayerController.roomUpdateIntervalId}.
     */
    protected startMultiplayer(params: Readonly<MultiplayerParams>) {
        this.updateConnectionState({service: MultiplayerConnectionState.Connecting});

        this.multiplayerApi = createMultiplayerApi({
            portScanOptions: params.portScanOptions,
            serviceOrigin: params.serviceOrigin,
        })
            .then(async (api) => {
                const output = await api.endpoints['/health'].fetch();
                if (!output.ok) {
                    throw new Error(`Failed to find multiplayer service at ${api.serviceOrigin}`);
                }

                this.updateConnectionState({service: MultiplayerConnectionState.Connected});
                return api;
            })
            .catch((error: unknown) => {
                this.updateConnectionState({service: MultiplayerConnectionState.Error});
                throw error;
            });

        this.startRoomInterval();
    }

    /**
     * This is automatically called when {@link MultiplayerControllerParams} is constructed with the
     * {@link MultiplayerControllerParams['singleplayer']} parameter.
     */
    protected startSingleplayer() {
        if (this.currentConnection) {
            throw new Error(
                `Cannot start singleplayer with a multiplayer connection already present.`,
            );
        }
        this.updateConnectionState({service: MultiplayerConnectionState.Connecting});

        this.currentConnection = new LockStepGameStateController(
            this.params.frameDuration || {milliseconds: 10},
        );
        this.currentConnection.listen(LockStepFrameEvent, async (event) => {
            await this.params.listeners.frame(event.detail);
        });
        this.currentConnection.startSingleplayer();

        globalThis.clearInterval(this.roomUpdateIntervalId);
        this.updateConnectionState({service: MultiplayerConnectionState.Connected});
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
        this.updateConnectionState({
            room: MultiplayerConnectionState.Disconnected,
            service: MultiplayerConnectionState.Disconnected,
        });
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
        if (!this.multiplayerApi || !this.params.multiplayer) {
            throw new Error(
                'Cannot join room. Please construct this controller in multiplayer mode to join rooms.',
            );
        }

        this.updateConnectionState({room: MultiplayerConnectionState.Connecting});

        this.currentConnection = new LockStepGameStateController(
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

        await this.currentConnection.multiplayerConnect(
            await this.multiplayerApi,
            this.params.multiplayer.stunServerUrls || [],
            room,
        );
        makeWritable(this).roomId = room.roomId;
        globalThis.clearInterval(this.roomUpdateIntervalId);
        this.updateConnectionState({room: MultiplayerConnectionState.Connected});
    }

    /** Leave the current room or single player connection. */
    public leaveRoom() {
        if (!this.currentConnection) {
            return;
        }

        makeWritable(this).roomId = undefined;
        this.currentConnection.destroy();
        this.currentConnection = undefined;
        this.startRoomInterval();
        this.updateConnectionState({room: MultiplayerConnectionState.Disconnected});
    }

    /** Set the current connection state and fire listeners. */
    protected updateConnectionState(
        state: Partial<{
            service: MultiplayerConnectionState;
            room: MultiplayerConnectionState;
        }>,
    ) {
        if (state.service) {
            makeWritable(this).serviceConnectionState = state.service;
        }
        if (state.room) {
            makeWritable(this).roomConnectionState = state.room;
        }
        void this.params.listeners.connectionUpdate?.({
            room: this.roomConnectionState,
            service: this.serviceConnectionState,
        });
    }

    /** Starts polling the multiplayer server for room updates and fires listeners. */
    protected startRoomInterval() {
        if (this.params.listeners.roomListUpdate && this.multiplayerApi) {
            const roomUpdateMs: number = this.params.multiplayer?.roomUpdateInterval
                ? convertDuration(this.params.multiplayer.roomUpdateInterval, {milliseconds: true})
                      .milliseconds
                : 10_000;

            this.roomUpdateIntervalId = globalThis.setInterval(async () => {
                if (this.currentConnection || !this.multiplayerApi) {
                    return;
                }
                const output = await (await this.multiplayerApi).endpoints['/rooms'].fetch();
                if (output.ok) {
                    await this.params.listeners.roomListUpdate?.(output.data);
                }
            }, roomUpdateMs);
        }
    }
}
