import {copyThroughJson} from '@augment-vir/common';
import {GameModule} from './game-module';
import {GamePipeline} from './game-pipeline';

/**
 * Mock initial game state for testing purposes.
 *
 * @category Mocks
 */
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

/**
 * Mock game state type for testing purposes.
 *
 * @category Mocks
 */
export type MockGameState = typeof initMockGameState;

/**
 * Mock game modules for testing purposes.
 *
 * @category Mocks
 */
export const mockGameModules = [
    {
        moduleId: {
            name: 'move enemies',
            version: 1,
        },
        /** Run the mock module. */
        runModule({gameState}) {
            return {
                stateUpdate: {
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

/**
 * Setup a mock GamePipeline for testing purposes.
 *
 * @category Mocks
 */
export function setupMockGamePipeline() {
    const gamePipeline = new GamePipeline(mockGameModules, copyThroughJson(initMockGameState), {});

    return gamePipeline;
}
