import {PartialDeep} from 'type-fest';
import {GameModule} from './game-module';
import {GameStateBase} from './game-state';

/**
 * The updates from a single pipeline execution are stored in these update objects for easier
 * internal computation.
 */
export type GameStateUpdate<GameState extends GameStateBase> = {
    fromModule: Readonly<GameModule<GameState>['moduleId']>;
    stateChanges: Readonly<PartialDeep<GameState>> | undefined;
};

/** Used to store game frame history when that option is enabled. */
export type GameFrame<GameState extends GameStateBase> = Readonly<{
    orderedStateUpdates: ReadonlyArray<Readonly<GameStateUpdate<GameState>>>;
}>;
