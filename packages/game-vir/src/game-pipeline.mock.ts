import {copyThroughJson} from '@augment-vir/common';
import {GameModule} from './game-module';
import {GamePipeline} from './game-pipeline';

/** Mock initial game state for testing purposes. */
export const initMockGameState = {
    player: {
        position: {
            x: 0,
            y: 0,
        },
        hp: 100,
        energy: 100,
        name: 'test player',
    },
    enemies: [
        {
            name: 'enemy 1',
            position: {x: 1, y: 1},
        },
        {
            name: 'enemy 2',
            position: {x: 1, y: 1},
        },
        {
            name: 'enemy 3',
            position: {x: 1, y: 1},
        },
    ] as {
        name: string;
        position: {
            x: number;
            y: number;
        };
    }[],
};

/** Mock game state type for testing purposes. */
export type MockGameState = typeof initMockGameState;

/** Mock modules for testing purposes. */
export const mockModules = [
    {
        moduleId: {
            name: 'move enemies',
            version: 1,
        },
        /** Run the mock module. */
        runModule({gameState}) {
            return {
                stateChanges: {
                    enemies: [
                        {
                            position: {
                                x: (gameState.enemies[0]?.position?.x ?? 0) + 1,
                            },
                        },
                        {},
                        {
                            position: {
                                x: (gameState.enemies[2]?.position?.x ?? 0) + 1,
                            },
                        },
                    ],
                },
            };
        },
    },
] as const satisfies ReadonlyArray<GameModule<MockGameState>>;

/** Setup a mock GamePipeline for testing purposes. */
export function setupMockGamePipeline() {
    const gamePipeline = new GamePipeline(mockModules, copyThroughJson(initMockGameState));

    return gamePipeline;
}
