import {itCases} from '@augment-vir/browser-testing';
import {awaitedForEach, mergeDeep} from '@augment-vir/common';
import {PartialDeep} from 'type-fest';
import {NestedStateListeners, callListeners} from './state-listeners';

describe(callListeners.name, () => {
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

    async function runUpdatesTest(updates: TestStateUpdate[]) {
        const {callTestListeners, getListenerData} = setupListenersTest();
        await awaitedForEach(updates, async (update) => {
            await callTestListeners(update);
        });

        const listenerData = getListenerData();

        return listenerData;
    }

    itCases(runUpdatesTest, [
        {
            it: 'only triggers updated property and higher listeners',
            input: [
                {
                    sibling: 'new value',
                },
            ],
            expect: {
                'top-level-1-result': [
                    {sibling: 'new value'},
                ],
                'top-level-2-result': [
                    {sibling: 'new value'},
                ],
                'sibling-result': [
                    'new value',
                ],
            },
        },
        {
            it: 'calls nothing if no updates are given',
            input: [],
            expect: {},
        },
        {
            it: 'calls nothing if an empty update was given',
            input: [{}],
            expect: {},
        },
        {
            it: 'only calls top level listeners',
            input: [
                {
                    topLevelProperty: 32,
                },
            ],
            expect: {
                'top-level-1-result': [
                    {topLevelProperty: 32},
                ],
                'top-level-2-result': [
                    {topLevelProperty: 32},
                ],
            },
        },
        {
            it: 'combines multiple updates',
            input: [
                {
                    topLevelProperty: 32,
                },
                {
                    notInListeners: {
                        nothing: 'second entry',
                    },
                },
            ],
            expect: {
                'top-level-1-result': [
                    {
                        topLevelProperty: 32,
                    },
                    {
                        notInListeners: {
                            nothing: 'second entry',
                        },
                    },
                ],
                'top-level-2-result': [
                    {
                        topLevelProperty: 32,
                    },
                    {
                        notInListeners: {
                            nothing: 'second entry',
                        },
                    },
                ],
            },
        },
        {
            it: 'fires top level listeners for child with no listeners',
            input: [
                {
                    notInListeners: {
                        nothing: 'nothing burger',
                    },
                },
            ],
            expect: {
                'top-level-1-result': [
                    {
                        notInListeners: {
                            nothing: 'nothing burger',
                        },
                    },
                ],
                'top-level-2-result': [
                    {
                        notInListeners: {
                            nothing: 'nothing burger',
                        },
                    },
                ],
            },
        },
        {
            it: 'calls deep listeners',
            input: [
                {
                    noListeners: {
                        emptySet: {
                            noChildren: 101,
                        },
                    },
                },
            ],
            expect: {
                'top-level-1-result': [
                    {
                        noListeners: {
                            emptySet: {
                                noChildren: 101,
                            },
                        },
                    },
                ],
                'top-level-2-result': [
                    {
                        noListeners: {
                            emptySet: {
                                noChildren: 101,
                            },
                        },
                    },
                ],
                'no-children-result': [
                    101,
                ],
            },
        },
    ]);
});
