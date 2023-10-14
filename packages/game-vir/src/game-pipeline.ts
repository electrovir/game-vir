import {
    MaybePromise,
    NestedSequentialKeys,
    NestedValue,
    PartialAndUndefined,
    copyThroughJson,
    mergeDeep,
} from '@augment-vir/common';
import {PartialDeep, Writable} from 'type-fest';
import {GameFrame, GameStateUpdate} from './game-frame';
import {GameModule, GameModuleRunnerInput} from './game-module';
import {GameStateBase} from './game-state';
import {NestedStateListeners, callListeners} from './state-listeners';

/** Listeners for game state changes on specific properties. */
export type GameStateListener<
    GameState extends GameStateBase,
    Keys extends NestedSequentialKeys<GameState>,
> = (PartialState: NestedValue<GameState, Keys>) => MaybePromise<void>;

/**
 * Optional options that can be provided to a pipeline. init options cannot be updated after
 * pipeline construction. All other options can be updated after pipeline construction.
 */
export type GamePipelineOptions = PartialAndUndefined<{
    /** These options can only be set on pipeline construction. */
    init: {
        /** Start the pipeline loop immediately. */
        startLoopImmediately: boolean;
        /** By default module names are checked for uniqueness. To turn that off, set this to true. */
        allowDuplicateModuleNames: boolean;
    };
    /** Collection of options that should only be used for debugging. */
    debug: PartialAndUndefined<{
        /**
         * Enable saving frame history. This can quickly become expensive to memory as each frame
         * will be saved as well as each module's output.
         */
        enableFrameHistory_Expensive: boolean;
    }>;
}>;

/**
 * An instance of the GamePipeline, including loop control and the array of game modules (the
 * "pipeline" itself).
 */
export class GamePipeline<GameState extends GameStateBase> {
    /** Ids of all the game modules that this pipeline was initialized with. */
    public readonly gameModuleIds: ReadonlyArray<GameModule<GameState>['moduleId']>;

    public readonly currentState: GameState;

    constructor(
        /**
         * The list of game modules to run through in each frame. Note that order matters here:
         * earlier modules will be executed and their state updates will be applied first.
         */
        public readonly modulePipeline: ReadonlyArray<GameModule<GameState>>,
        /** The pipeline's initial state. */
        initialState: Readonly<GameState>,
        /**
         * Optional options to control the pipeline's behavior. Non init options can be overridden
         * at any time with overrideOptions.
         */
        public readonly options: GamePipelineOptions = {},
    ) {
        this.currentState = copyThroughJson(initialState);
        this.gameModuleIds = this.modulePipeline.map((gameModule) => gameModule.moduleId);

        if (!options?.init?.allowDuplicateModuleNames) {
            this.assertValidModulePipeline();
        }
        if (options?.init?.startLoopImmediately) {
            this.startPipeline();
        }
    }

    private assertValidModulePipeline() {
        const duplicateNames: string[] = [];
        const moduleNameSet = new Set<string>();
        this.modulePipeline.forEach((gameModule) => {
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

    private loopIsPaused = false;

    /**
     * Stops the pipeline loop. Return value indicates whether it was stopped or not. (The pipeline
     * would, for example, not be stopped if it was already stopped when this was called.)
     */
    public stopPipeline(): boolean {
        if (this.loopIsPaused) {
            return false;
        } else {
            this.loopIsPaused = true;
            return true;
        }
    }

    /**
     * Starts the pipeline loop using requestAnimationFrame. Return value indicates whether it was
     * started or not. (The pipeline would, for example, not be started if it was already running
     * when this was called.)
     */
    public startPipeline(): boolean {
        if (!this.loopIsPaused) {
            return false;
        } else {
            this.loopIsPaused = false;
            this.runLoop();
            return true;
        }
    }

    private runLoop() {
        requestAnimationFrame((timestamp) => {
            if (!this.loopIsPaused) {
                this.runLoop();
            }
            this.internallyTriggerSingleFrame(timestamp);
        });
    }

    /** Manually update non-init options at any time. */
    public overrideOptions(newOptions: PartialDeep<Omit<GamePipelineOptions, 'init'>>): void {
        (this.options as Writable<GamePipelineOptions>) = mergeDeep(this.options, newOptions);
    }

    /**
     * Timestamp of the last frame that was executed. If the game pipeline loop is running, this
     * will get updated very frequently.
     *
     * If you manually update this, crazy things will happen.
     */
    public lastFrameTimestamp: number | undefined;
    /**
     * Count of the last frame that was run. The first frame that runs is frame 0. This is just for
     * debugging purposes.
     */
    public lastFrameCount: number = -1;
    /**
     * History of all frames that have been executed. Will not populate by default, it must be
     * enabled via debug options.
     */
    public frameHistory: Readonly<GameFrame<GameState>>[] = [];

    /**
     * Trigger a single frame and do nothing else. Note that executing this while the loop is
     * running doesn't really make sense, but you still can if you, for whatever reason, want to.
     */
    public triggerSingleFrame(): Promise<unknown> {
        return this.internallyTriggerSingleFrame(performance.now());
    }

    private stateListeners: NestedStateListeners = {
        children: {},
        listeners: undefined,
    };

    /** Listen to state changes on a specific sub property. */
    public addStateListener<Keys extends NestedSequentialKeys<GameState>>(
        keys: Keys,
        listener: GameStateListener<GameState, Keys>,
    ) {
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
    }

    /** Remove the given listener from the given state key array. */
    public removeStateListener<Keys extends NestedSequentialKeys<GameState>>(
        keys: Keys,
        listener: GameStateListener<GameState, Keys>,
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

    private internallyTriggerSingleFrame(frameTimestampMs: number): Promise<unknown> {
        const millisecondsSinceLastFrame: number | undefined =
            this.lastFrameTimestamp == undefined
                ? undefined
                : this.lastFrameTimestamp - frameTimestampMs;
        const orderedStateUpdates: Readonly<GameStateUpdate<GameState>>[] = [];
        this.lastFrameTimestamp = frameTimestampMs;
        this.lastFrameCount++;

        this.modulePipeline.forEach((gameModule) => {
            const moduleInput: GameModuleRunnerInput<GameState> = {
                gameState: this.currentState,
                millisecondsSinceLastFrame,
            };
            const moduleOutput = gameModule.runModule(moduleInput);
            if (moduleOutput) {
                (this.currentState as Writable<GameState>) = mergeDeep(
                    this.currentState,
                    moduleOutput.stateChanges as Partial<GameState>,
                );
            }
            orderedStateUpdates.push({
                fromModule: gameModule.moduleId,
                stateChanges: moduleOutput?.stateChanges,
            });
        });

        if (this.options.debug?.enableFrameHistory_Expensive) {
            const gameFrame: GameFrame<GameState> = {
                orderedStateUpdates,
            };
            this.frameHistory.push(gameFrame);
        }

        return callListeners(
            this.stateListeners,
            mergeDeep(
                ...(orderedStateUpdates.map(
                    (stateUpdate) => stateUpdate.stateChanges,
                ) as GameStateBase[]),
            ),
            this.currentState,
        );
    }
}
