import {
    ArrayElement,
    MaybePromise,
    NestedSequentialKeys,
    NestedValue,
    RequiredAndNotNullBy,
    awaitedForEach,
    callAsynchronously,
    copyThroughJson,
    ensureError,
    extractErrorMessage,
    getValueFromNestedKeys,
    isTruthy,
    mergeDeep,
    round,
} from '@augment-vir/common';
import {UnionToIntersection, Writable} from 'type-fest';
import {
    ExtractEventByType,
    ExtractEventTypes,
    TypedEventListenerOrEventListenerObject,
    TypedEventTarget,
} from 'typed-event-target';
import {GameStateBase} from './base-pipeline-types';
import {GameFrame, GameStateUpdate} from './game-frame';
import {GameModule, GameModuleRunnerInput, GameModuleRunnerOutput} from './game-module';
import {GamePipelineOptions} from './game-pipeline-options';
import {PipelineFramerateEvent, PipelinePauseEvent} from './pipeline-events';
import {NestedStateListeners, callListeners} from './state-listeners';

/** Listeners for game state updates on specific properties. */
export type GameStateListener<
    GameState extends GameStateBase = any,
    Keys extends NestedSequentialKeys<GameState> = any,
> = (PartialState: NestedValue<GameState, Keys>) => MaybePromise<void>;

/** A callback for removing listeners. */
export type RemoveListenerCallback = () => void;

/**
 * Type helper that converts an array of game modules into their combined required game state and
 * execution context types.
 */
export type ModulesToPipelineStates<GameModules extends ReadonlyArray<GameModule<any, any>>> =
    Readonly<{
        state: Readonly<
            UnionToIntersection<Parameters<ArrayElement<GameModules>['runModule']>[0]['gameState']>
        >;
        executionContext: Readonly<
            UnionToIntersection<
                Parameters<ArrayElement<GameModules>['runModule']>[0]['executionContext']
            >
        >;
    }>;

/**
 * A union of all possible events that the GamePipeline can emit. This does not include state update
 * events, as the type of state update events vary depending on what part of the state was listened
 * to.
 */
export type GamePipelineEvents = PipelinePauseEvent | PipelineFramerateEvent;

/**
 * Type helper that extracts the needed game state and execution context types out of a game
 * pipeline.
 *
 * @category Basic Use
 * @example
 *     export type MyGameState = GamePipelineStates<MyGamePipeline>['gameState'];
 *     export type MyExecutionContext = GamePipelineStates<MyGamePipeline>['executionContext'];
 */
export type GamePipelineStates<SpecificPipeline extends GamePipeline<any>> =
    SpecificPipeline extends GamePipeline<infer GameModules>
        ? ModulesToPipelineStates<GameModules>
        : never;

/**
 * An instance of the GamePipeline, including loop control and the array of game modules (the
 * "pipeline" itself).
 *
 * @category Basic Use
 */
export class GamePipeline<
    const GameModules extends ReadonlyArray<GameModule<any, any>>,
> extends TypedEventTarget<GamePipelineEvents> {
    /** Ids of all the game modules that this pipeline was initialized with. */
    public readonly gameModuleIds: ReadonlyArray<ArrayElement<GameModules>['moduleId']>;

    public readonly currentState: ModulesToPipelineStates<GameModules>['state'];
    public readonly currentExecutionContext: ModulesToPipelineStates<GameModules>['executionContext'];

    /** Latest calculated framerate in frames per second. */
    public currentFramerate = 0;
    private framerateOperands = {
        totalDuration: 0,
        frameCount: 0,
    };
    private isFrameExecuting = false;
    private currentOptions: RequiredAndNotNullBy<
        GamePipelineOptions<
            ModulesToPipelineStates<GameModules>['state'],
            ModulesToPipelineStates<GameModules>['executionContext']
        >,
        'framerateCalculationWait'
    > = {
        framerateCalculationWait: {milliseconds: 500},
    };

    constructor(
        /**
         * The list of game modules to run through in each frame. Note that order matters here:
         * earlier modules will be executed and their state updates will be applied first.
         */
        public readonly gameModules: GameModules,
        /**
         * The pipeline's initial state. This state must be JSON serializable. For non-serializable
         * state or assets, use instead the execution context input.
         */
        initialState: Readonly<ModulesToPipelineStates<GameModules>['state']>,
        /**
         * The pipeline's initial execution context. Use this to store run-time only items (that
         * won't persist through game save states) like references to Canvas rendering contexts or
         * ThreeJS.
         */
        initialExecutionContext: Readonly<ModulesToPipelineStates<GameModules>['executionContext']>,
        /**
         * Optional options to control the pipeline's behavior. Non init options can be overridden
         * at any time with overrideOptions.
         */
        initOptions: GamePipelineOptions<
            ModulesToPipelineStates<GameModules>['state'],
            ModulesToPipelineStates<GameModules>['executionContext']
        > = {},
    ) {
        super();
        this.currentState = copyThroughJson(initialState);
        this.currentExecutionContext = initialExecutionContext;
        this.gameModuleIds = this.gameModules.map((gameModule) => gameModule.moduleId);

        this.internalOverrideOptions(initOptions);

        if (!this.currentOptions?.init?.allowDuplicateModuleNames) {
            this.assertValidGameModules();
        }
        if (this.currentOptions?.init?.startLoopImmediately) {
            this.startPipelineLoop();
        }
    }

    private assertValidGameModules() {
        const duplicateNames: string[] = [];
        const moduleNameSet = new Set<string>();
        this.gameModules.forEach((gameModule) => {
            const moduleName = gameModule.moduleId.name;
            if (moduleNameSet.has(moduleName)) {
                duplicateNames.push(moduleName);
            } else {
                moduleNameSet.add(moduleName);
            }
        });

        if (duplicateNames.length) {
            throw new Error(
                `Duplicate modules provided to ${GamePipeline.name}: ${duplicateNames.join(', ')}`,
            );
        }
    }

    /** Start out paused by default. */
    private _loopIsPaused = true;
    private set loopIsPaused(value: boolean) {
        this._loopIsPaused = value;
        this.dispatchEvent(new PipelinePauseEvent({detail: value}));
    }
    private get loopIsPaused(): boolean {
        return this._loopIsPaused;
    }
    /** Indicates if the pipeline loop is paused. */
    public isPipelineLoopPaused(): boolean {
        return this.loopIsPaused;
    }

    /**
     * Stops the pipeline loop.
     *
     * @returns Boolean that indicates whether the loop was stopped or not. The pipeline would, for
     *   example, not be stopped if it was already stopped when this was called, resulting in a
     *   no-op.
     */
    public stopPipelineLoop(): boolean {
        if (this.loopIsPaused) {
            return false;
        } else {
            this.loopIsPaused = true;
            return true;
        }
    }

    /**
     * Starts the pipeline loop using requestAnimationFrame, so it'll try to run at the screen's
     * refresh rate.
     *
     * @returns Boolean that indicates whether the loop was started or not. The pipeline would, for
     *   example, not be started if it was already running when this was called, resulting in a
     *   no-op.
     */
    public startPipelineLoop(): boolean {
        if (this.loopIsPaused) {
            this.loopIsPaused = false;
            this.lastFrameTimestamp = performance.now();
            this.runLoop();
            return true;
        } else {
            return false;
        }
    }

    private runLoop() {
        window.requestAnimationFrame((timestamp) => {
            if (!this.loopIsPaused) {
                callAsynchronously(() => this.runLoop());
            }
            this.internallyTriggerSingleFrame(timestamp);
        });
    }

    private calculateFramerate(millisecondsSinceLastFrame: number) {
        this.framerateOperands.frameCount++;
        this.framerateOperands.totalDuration += millisecondsSinceLastFrame;

        if (
            this.framerateOperands.totalDuration >=
            this.currentOptions.framerateCalculationWait.milliseconds
        ) {
            this.currentFramerate = round({
                number:
                    (this.framerateOperands.frameCount / this.framerateOperands.totalDuration) *
                    1000,
                digits: 1,
            });

            if (
                this.currentOptions.debug?.enableWarningLogging &&
                this.currentOptions.debug.targetFramerate &&
                this.currentFramerate + 1 < this.currentOptions.debug.targetFramerate
            ) {
                console.warn(`Framerate dropped to ${this.currentFramerate}`);
            }

            this.dispatchEvent(
                new PipelineFramerateEvent({
                    detail: this.currentFramerate,
                }),
            );
            this.framerateOperands = {
                frameCount: 0,
                totalDuration: 0,
            };
        }
    }

    /** Clean up all GamePipeline state and call onDestroy (set in options.init). */
    public destroy() {
        this.stopPipelineLoop();
        if (this.currentOptions.init?.onDestroy) {
            this.currentOptions.init.onDestroy({
                gameState: this.currentState,
                executionContext: this.currentExecutionContext,
            });
        }

        this.removeAllEventListeners();
        this.removeAllStateListeners();
    }

    /**
     * Add an event listener that is not a state update event listener. For listening to state
     * update events, use .addStateListener() instead.
     */
    public override addEventListener<
        const EventNameGeneric extends ExtractEventTypes<GamePipelineEvents>,
    >(
        type: EventNameGeneric,
        callback: TypedEventListenerOrEventListenerObject<
            ExtractEventByType<GamePipelineEvents, EventNameGeneric>
        > | null,
        options?: boolean | AddEventListenerOptions | undefined,
    ): RemoveListenerCallback {
        super.addEventListener(type, callback, options);
        return () => {
            super.removeEventListener(type, callback, options);
        };
    }

    private internalOverrideOptions(
        newOptions: GamePipelineOptions<
            ModulesToPipelineStates<GameModules>['state'],
            ModulesToPipelineStates<GameModules>['executionContext']
        >,
    ) {
        (this.currentOptions as GamePipelineOptions<
            ModulesToPipelineStates<GameModules>['state'],
            ModulesToPipelineStates<GameModules>['executionContext']
        >) = mergeDeep(this.currentOptions, newOptions);
    }

    /** Manually update non-init options at any time. */
    public overrideOptions(
        newOptions: Omit<
            GamePipelineOptions<
                ModulesToPipelineStates<GameModules>['state'],
                ModulesToPipelineStates<GameModules>['executionContext']
            >,
            'init'
        >,
    ): void {
        if ('init' in newOptions) {
            throw new Error(
                'Cannot override init options after the GamePipeline has already been constructed.',
            );
        }
        this.internalOverrideOptions(newOptions);
    }

    /**
     * Timestamp of the last frame that was executed. If the game pipeline loop is running, this
     * will get updated very frequently.
     *
     * If you manually update this, crazy things will happen.
     */
    public lastFrameTimestamp: number | undefined;
    /**
     * Count of the last frame that was run. The first frame that runs is frame 1. This is just for
     * debugging purposes.
     */
    public lastFrameCount: number = 0;
    /**
     * History of all frames that have been executed. Will not populate by default, it must be
     * enabled via debug options.
     */
    public frameHistory: Readonly<GameFrame<ModulesToPipelineStates<GameModules>['state']>>[] = [];

    /**
     * Trigger a single frame and do nothing else. Note that executing this while the pipeline loop
     * is running doesn't really make sense, but you still can if you, for whatever reason, want
     * to.
     */
    public triggerSingleFrame(): Promise<unknown> {
        return this.internallyTriggerSingleFrame(performance.now());
    }

    private stateListeners: NestedStateListeners = {
        children: {},
        listeners: undefined,
    };

    /**
     * Listen to state updates on a specific sub property. Returns a callback that, upon being
     * called, will remove the listener.
     */
    public addStateListener<
        Keys extends NestedSequentialKeys<ModulesToPipelineStates<GameModules>['state']>,
    >(
        fireImmediately: boolean,
        keys: Keys,
        listener: GameStateListener<ModulesToPipelineStates<GameModules>['state'], Keys>,
    ): RemoveListenerCallback {
        const listenerParent = (keys as ReadonlyArray<string>).reduce(
            (currentParent: NestedStateListeners, currentKey): NestedStateListeners => {
                const nextParent: NestedStateListeners = currentParent.children[currentKey] || {
                    children: {},
                    listeners: undefined,
                };
                if (!currentParent.children[currentKey]) {
                    currentParent.children[currentKey] = nextParent;
                }
                return nextParent;
            },
            this.stateListeners,
        );

        if (!listenerParent.listeners) {
            listenerParent.listeners = new Set();
        }
        listenerParent.listeners.add(listener);

        if (fireImmediately) {
            listener(getValueFromNestedKeys(this.currentState, keys));
        }

        return () => {
            return this.removeStateListener(keys, listener);
        };
    }

    /** Remove all current state listeners; */
    public removeAllStateListeners() {
        this.stateListeners = {
            children: {},
            listeners: undefined,
        };
    }

    /**
     * Remove the given listener from the given state key array. Returns a boolean indicating
     * whether the listener was removed or not.
     */
    public removeStateListener<
        Keys extends NestedSequentialKeys<ModulesToPipelineStates<GameModules>['state']>,
    >(
        keys: Keys,
        listener: GameStateListener<ModulesToPipelineStates<GameModules>['state'], Keys>,
    ): boolean {
        try {
            const listenerParent = (keys as ReadonlyArray<string>).reduce(
                (
                    currentParent: NestedStateListeners,
                    currentKey,
                    keyIndex,
                ): NestedStateListeners => {
                    const nextParent = currentParent.children[currentKey];
                    if (!nextParent) {
                        throw new Error(
                            `Failed to find any listener children under key ${(
                                keys as ReadonlyArray<string>
                            )
                                .slice(0, keyIndex + 1)
                                .join('->')}`,
                        );
                    }
                    return nextParent;
                },
                this.stateListeners,
            );

            return listenerParent.listeners?.delete(listener) ?? false;
        } catch (error) {
            return false;
        }
    }

    /**
     * Update any part of the game state or execution context by providing a deeply partial state
     * with the updates. Only the parts that will update need be provided, the rest of these objects
     * can be omitted.
     */
    public update(
        update: GameModuleRunnerOutput<
            ModulesToPipelineStates<GameModules>['state'],
            ModulesToPipelineStates<GameModules>['executionContext']
        >,
    ): void {
        this.updateInternally(update, true);
    }

    private updateInternally(
        update: GameModuleRunnerOutput<
            ModulesToPipelineStates<GameModules>['state'],
            ModulesToPipelineStates<GameModules>['executionContext']
        >,
        fireListeners: boolean,
    ) {
        if (update.stateUpdate) {
            (this.currentState as Writable<ModulesToPipelineStates<GameModules>['state']>) =
                mergeDeep<any>(this.currentState, update.stateUpdate);

            if (fireListeners) {
                this.triggerStateListeners([update.stateUpdate]);
            }
        }
        if (update.executionContextUpdate) {
            (this.currentExecutionContext as typeof this.currentExecutionContext) = {
                ...this.currentExecutionContext,
                ...update.executionContextUpdate,
            };
        }
    }

    private triggerStateListeners(
        updates: ReadonlyArray<
            Readonly<
                NonNullable<
                    GameModuleRunnerOutput<
                        ModulesToPipelineStates<GameModules>['state'],
                        ModulesToPipelineStates<GameModules>['executionContext']
                    >['stateUpdate']
                >
            >
        >,
    ) {
        return callListeners(
            this.stateListeners,
            mergeDeep(...(updates as any[])),
            this.currentState,
        );
    }

    private async internallyTriggerSingleFrame(frameTimestampMs: number): Promise<unknown> {
        if (this.isFrameExecuting) {
            if (this.currentOptions.debug?.enableWarningLogging) {
                console.warn('frame skipped');
            }
            return;
        }
        this.isFrameExecuting = true;

        try {
            const millisecondsSinceLastFrame: number =
                this.lastFrameTimestamp == undefined
                    ? 0
                    : frameTimestampMs - this.lastFrameTimestamp;

            this.calculateFramerate(millisecondsSinceLastFrame);

            const orderedStateUpdates: Readonly<
                GameStateUpdate<ModulesToPipelineStates<GameModules>['state']>
            >[] = [];
            this.lastFrameTimestamp = frameTimestampMs;
            this.lastFrameCount++;

            await awaitedForEach(this.gameModules, async (gameModule) => {
                const moduleInput: GameModuleRunnerInput<
                    ModulesToPipelineStates<GameModules>['state'],
                    ModulesToPipelineStates<GameModules>['executionContext']
                > = {
                    gameState: this.currentState,
                    executionContext: this.currentExecutionContext,
                    millisecondsSinceLastFrame,
                };
                const moduleOutput = await gameModule.runModule(moduleInput);
                if (moduleOutput) {
                    this.updateInternally(moduleOutput, false);
                }
                orderedStateUpdates.push({
                    fromModule: gameModule.moduleId,
                    stateUpdates: moduleOutput?.stateUpdate,
                });
            });

            if (this.currentOptions.debug?.enableFrameHistory_Expensive) {
                const gameFrame: GameFrame<ModulesToPipelineStates<GameModules>['state']> = {
                    orderedStateUpdates,
                };
                this.frameHistory.push(gameFrame);
            }

            const stateUpdates = orderedStateUpdates.map(
                (stateUpdate) => stateUpdate.stateUpdates,
            ) as ReadonlyArray<
                Readonly<
                    GameModuleRunnerOutput<
                        ModulesToPipelineStates<GameModules>['state'],
                        ModulesToPipelineStates<GameModules>['executionContext']
                    >
                >['stateUpdate']
            >;
            this.isFrameExecuting = false;

            return this.triggerStateListeners(stateUpdates.filter(isTruthy));
        } catch (caught) {
            this.isFrameExecuting = false;
            const error = ensureError(caught);
            error.message = `Failed to render frame: ${extractErrorMessage(error)}`;
            throw error;
        }
    }
}
