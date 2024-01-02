import {PartialDeep} from 'type-fest';
import {GameStateBase} from './base-pipeline-types';
import {GameModule} from './game-module';

/**
 * The updates from a single pipeline execution are stored in these update objects for easier
 * internal computation.
 */
export type ModuleStateUpdate<GameState extends GameStateBase> = {
    fromModule: Readonly<GameModule<GameState>['moduleId']>;
    stateUpdates: Readonly<PartialDeep<GameState, {recurseIntoArrays: true}>> | undefined;
};

/** Used to store game frame history when that option is enabled. */
export type GameFrame<GameState extends GameStateBase> = Readonly<{
    /** In the order in which they were applied. */
    moduleUpdates: ReadonlyArray<Readonly<ModuleStateUpdate<GameState>>>;
}>;
