import {awaitedForEach, mergeDeep} from '@augment-vir/common';
import {assertTypeOf} from 'run-time-assertions';
import {PartialDeep} from 'type-fest';
import {setupMockGamePipeline} from './game-pipeline.mock';
import {NestedStateListeners, callListeners} from './state-listeners';

async function main1() {
    const listenerData: any[] = [];

    const gamePipeline = setupMockGamePipeline();
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
    debugger;
    const framePromise = gamePipeline.triggerSingleFrame();
    console.log(listenerData.length, 'should be 0');

    await framePromise;

    console.log(listenerData.length, 'should be 0');
}

async function main2() {
    type TestGameState = {
        noListeners: {
            emptySet: {
                noChildren: number;
            };
        };
        sibling: string;
        notInListeners: {
            nothing: string;
        };
        topLevelProperty: number;
    };

    type TestStateUpdate = PartialDeep<TestGameState>;

    async function runUpdatesTest(updates: TestStateUpdate[]) {
        function setupListenersTest() {
            const listenerData: Record<string, unknown[]> = {};
            function addListenerData(key: string, data: unknown) {
                const dataArray = listenerData[key] ?? [];

                if (!(key in listenerData)) {
                    listenerData[key] = dataArray;
                }

                dataArray.push(data);
            }

            function createListener(key: string) {
                return (data: unknown) => {
                    addListenerData(key, data);
                };
            }

            const listeners: NestedStateListeners = {
                listeners: new Set([
                    createListener('top-level-1-result'),
                    createListener('top-level-2-result'),
                ]),
                children: {
                    noListeners: {
                        listeners: undefined,
                        children: {
                            emptySet: {
                                children: {
                                    noChildren: {
                                        children: {},
                                        listeners: new Set([
                                            createListener('no-children-result'),
                                        ]),
                                    },
                                },
                                listeners: new Set(),
                            },
                        },
                    },
                    sibling: {
                        listeners: new Set([createListener('sibling-result')]),
                        children: {},
                    },
                },
            };

            function getListenerData() {
                return listenerData;
            }

            return {
                async callTestListeners(updates: TestStateUpdate) {
                    await callListeners(listeners, updates, mergeDeep(updates));

                    return getListenerData();
                },
                getListenerData,
            };
        }

        const {callTestListeners, getListenerData} = setupListenersTest();
        debugger;
        await awaitedForEach(updates, async (update) => {
            await callTestListeners(update);
        });

        const listenerData = getListenerData();

        return listenerData;
    }

    await runUpdatesTest([
        {},
    ]);
}

// main1();

main2();
