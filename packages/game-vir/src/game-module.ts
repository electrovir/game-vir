import {PartialAndUndefined} from '@augment-vir/common';
import {PartialDeep} from 'type-fest';
import {ExecutionContextBase, GameStateBase} from './base-pipeline-types';

/** The output from a GameModule execution. Return undefined for the module's output to be ignored. */
export type GameModuleRunnerOutput<
    GameState extends GameStateBase,
    ExecutionContext extends ExecutionContextBase,
> = Readonly<
    PartialAndUndefined<{
        stateChange: Readonly<PartialDeep<GameState, {recurseIntoArrays: true}>>;
        executionContextChange: Readonly<Partial<ExecutionContext>>;
    }>
>;

/** Input for game module execution. */
export type GameModuleRunnerInput<
    GameState extends GameStateBase,
    ExecutionContext extends ExecutionContextBase,
> = Readonly<{
    gameState: Readonly<GameState>;
    executionContext: Readonly<ExecutionContext>;
    millisecondsSinceLastFrame: number;
}>;

/** The function inside a game module which is executed during each frame. */
export type GameModuleRunner<
    GameState extends GameStateBase,
    ExecutionContext extends ExecutionContextBase,
> = (
    GameModuleInput: GameModuleRunnerInput<GameState, ExecutionContext>,
) => GameModuleRunnerOutput<GameState, ExecutionContext> | undefined;

/** The heart of the game pipeline; the pipeline is simply an array of GameModules. */
export type GameModule<
    GameState extends GameStateBase,
    ExecutionContext extends ExecutionContextBase = {},
> = Readonly<{
    /**
     * Used to identify a game module. This isn't currently used for anything beyond identification
     * purposes for human legibility and debugging.
     */
    moduleId: Readonly<{
        name: string;
        version: number;
    }>;
    /** The function that will be called on each frame. */
    runModule: GameModuleRunner<GameState, ExecutionContext>;
}>;
