import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {GameModule} from './game-module';
import {GamePipeline, GamePipelineStates} from './game-pipeline';
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

    it('renders a new frame', async () => {
        const gamePipeline = setupTestGamePipeline();
        await gamePipeline.triggerSingleFrame();

        assert.deepStrictEqual(
            gamePipeline.currentState,
            {
                ...initMockGameState,
                enemies: initMockGameState.enemies.map((enemy, index) => {
                    if (index === 1) {
                        return enemy;
                    }
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

    it('fires callbacks asynchronously', async () => {
        const listenerData: number[][] = [];

        const gamePipeline = setupTestGamePipeline();
        gamePipeline.addStateListener(
            false,
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

    it('does not fire callbacks if no change to listened properties', async () => {
        const listenerData: any[] = [];

        const gamePipeline = setupTestGamePipeline();
        gamePipeline.addStateListener(
            false,
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
            false,
            [
                'player',
                'position',
                'x',
            ],
            (newData) => {
                assertTypeOf(newData).toEqualTypeOf<number>();
                listenerData.push(newData);
            },
        );
        const framePromise = gamePipeline.triggerSingleFrame();
        assert.lengthOf(listenerData, 0, 'listener should not have been called synchronously');

        await framePromise;

        assert.lengthOf(listenerData, 0, 'listener should not have been fired at all');
    });

    it('infers pipeline state from modules', () => {
        const test1Module: GameModule<{prop1: string}, {prop2: number}> = {
            moduleId: {
                name: 'test-1',
                version: 1,
            },
            runModule() {
                return undefined;
            },
        };

        const test2Module: GameModule<{prop3: string}, {prop4: boolean}> = {
            moduleId: {
                name: 'test-2',
                version: 1,
            },
            runModule() {
                return undefined;
            },
        };

        new GamePipeline(
            [
                test1Module,
                test2Module,
            ],
            {
                prop1: 'hi',
                prop3: 'bye',
            },
            {
                prop2: 32,
                prop4: true,
                // this prop was not in any of the game modules
                // @ts-expect-error
                extraProp2: 'yo',
            },
        );

        new GamePipeline(
            [
                test1Module,
                test2Module,
            ],
            {
                prop1: 'hi',
                prop3: 'bye',
            },
            // missing prop
            // @ts-expect-error
            {
                prop2: 32,
            },
        );

        new GamePipeline(
            [
                test1Module,
                test2Module,
            ],
            // missing prop
            // @ts-expect-error
            {
                prop3: 'bye',
            },
            {
                prop2: 32,
                prop4: false,
            },
        );

        const gamePipeline = new GamePipeline(
            [
                test1Module,
                test2Module,
            ],
            {
                prop1: 'hi',
                prop3: 'bye',
                // this prop was not in any of the game modules
                // @ts-expect-error
                extraProp1: 'yo',
            },
            {
                prop2: 32,
                prop4: true,
            },
        );

        assertTypeOf<GamePipelineStates<typeof gamePipeline>>().toEqualTypeOf<
            Readonly<{
                state: Readonly<{prop1: string; prop3: string}>;
                executionContext: Readonly<{prop2: number; prop4: boolean}>;
            }>
        >();
    });

    it('waits for async game modules', async () => {
        const deferredAsyncModulePromise = createDeferredPromiseWrapper();
        let nextModuleFired = false;

        const testPipeline = new GamePipeline(
            [
                {
                    moduleId: {
                        name: 'async module',
                        version: 1,
                    },
                    async runModule() {
                        await deferredAsyncModulePromise.promise;
                        return undefined;
                    },
                },
                {
                    moduleId: {
                        name: 'next module',
                        version: 1,
                    },
                    runModule() {
                        nextModuleFired = true;
                        return undefined;
                    },
                },
            ],
            {},
            {},
        );

        const firstFrame = testPipeline.triggerSingleFrame();
        assert.isFalse(nextModuleFired);
        await testPipeline.triggerSingleFrame();
        assert.isFalse(nextModuleFired);
        assert.strictEqual(testPipeline.lastFrameCount, 1);

        deferredAsyncModulePromise.resolve();
        await firstFrame;
        assert.isTrue(nextModuleFired);
        await testPipeline.triggerSingleFrame();
        assert.strictEqual(testPipeline.lastFrameCount, 2);
    });
});
