import {PartialDeep} from 'type-fest';
import {GameStateBase} from './base-pipeline-types';
import {GameModule, GameModuleRunnerOutput} from './game-module';

/**
 * The updates from a single module's pipeline execution are stored in these update objects for
 * easier internal consumption.
 */
export type ModuleStateUpdate<GameState extends GameStateBase> = {
    fromModule: Readonly<GameModule<GameState>['moduleId']>;
    updateDiff: Readonly<PartialDeep<GameState, {recurseIntoArrays: false}>> | undefined;
} & Pick<GameModuleRunnerOutput<GameState, any>, 'stateUpdate'>;

/** Used to store game frame history when that option is enabled. */
export type GameFrame<GameState extends GameStateBase> = Readonly<{
    /** In the order in which they were applied. */
    moduleUpdates: ReadonlyArray<Readonly<ModuleStateUpdate<GameState>>>;
}>;
