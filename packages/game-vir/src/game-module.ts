import {PartialDeep} from 'type-fest';
import {GameStateBase} from './game-state';

/** The output from a GameModule execution. Return undefined for the module's output to be ignored. */
export type GameModuleRunnerOutput<GameState extends GameStateBase> =
    | Readonly<{
          stateChanges: Readonly<PartialDeep<GameState, {recurseIntoArrays: true}>>;
      }>
    | undefined;

/** Input for game module execution. */
export type GameModuleRunnerInput<GameState extends GameStateBase> = Readonly<{
    gameState: Readonly<GameState>;
    millisecondsSinceLastFrame: number | undefined;
}>;

/** The function inside a game module which is executed during each frame. */
export type GameModuleRunner<GameState extends GameStateBase> = (
    GameModuleInput: GameModuleRunnerInput<GameState>,
) => GameModuleRunnerOutput<GameState>;

/** The heart of the game pipeline; the pipeline is simply an array of GameModules. */
export type GameModule<GameState extends GameStateBase> = Readonly<{
    /**
     * Used to identify a game module. This isn't currently used for anything beyond identification
     * purposes for human legibility and debugging.
     */
    moduleId: Readonly<{
        name: string;
        version: number;
    }>;
    /** The function that will be called on each frame. */
    runModule: GameModuleRunner<GameState>;
}>;
