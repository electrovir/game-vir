import {assert} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {GamePipeline} from './game-pipeline';
import {initMockGameState, setupMockGamePipeline} from './game-pipeline.mock';

describe(GamePipeline.name, () => {
    function setupTestGamePipeline() {
        const gamePipeline = setupMockGamePipeline();
        assert.deepStrictEqual(
            gamePipeline.currentState,
            initMockGameState,
            'state should not have changed yet',
        );

        return gamePipeline;
    }

    it('renders a new frame', () => {
        const gamePipeline = setupTestGamePipeline();
        gamePipeline.triggerSingleFrame();

        assert.deepStrictEqual(
            gamePipeline.currentState,
            {
                ...initMockGameState,
                enemies: initMockGameState.enemies.map((enemy) => {
                    return {
                        ...enemy,
                        position: {
                            ...enemy.position,
                            x: 2,
                        },
                    };
                }),
            },
            'state should have updated',
        );
    });

    it.only('fires callbacks asynchronously', async () => {
        const listenerData: number[][] = [];

        const gamePipeline = setupTestGamePipeline();
        gamePipeline.addStateListener(
            [
                'enemies',
                'position',
                'x',
            ],
            (newData) => {
                assertTypeOf(newData).toEqualTypeOf<number[]>();
                listenerData.push(newData);
            },
        );
        const framePromise = gamePipeline.triggerSingleFrame();
        assert.lengthOf(listenerData, 0, 'listener should not have been called synchronously');

        await framePromise;

        assert.deepStrictEqual(listenerData, [
            [
                2,
                1,
                2,
            ],
        ]);
    });

    it('fires does not fire callbacks if no change to listened properties', async () => {
        const listenerData: number[][] = [];

        const gamePipeline = setupTestGamePipeline();
        gamePipeline.addStateListener(
            [
                'enemies',
                'position',
                'y',
            ],
            (newData) => {
                assertTypeOf(newData).toEqualTypeOf<number[]>();
                listenerData.push(newData);
            },
        );
        gamePipeline.addStateListener(
            [
                'enemies',
                'position',
                'x',
            ],
            (newData) => {
                assertTypeOf(newData).toEqualTypeOf<number[]>();
                listenerData.push(newData);
            },
        );
        const framePromise = gamePipeline.triggerSingleFrame();
        assert.lengthOf(listenerData, 0, 'listener should not have been called synchronously');

        await framePromise;

        assert.lengthOf(listenerData, 0, 'listener should not have been fired at all');
    });
});
