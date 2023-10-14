import {MaybePromise, callAsynchronously, isRuntimeTypeOf} from '@augment-vir/common';
import {GameStateBase} from './game-state';

type GenericListener = (partialState: any) => MaybePromise<void>;

export type NestedStateListeners = {
    listeners: Set<GenericListener> | undefined;
    children: Partial<{
        [key: string]: NestedStateListeners | undefined;
    }>;
};

const ignoreSymbol = Symbol('ignore');

type ListenersToCallMap = Map<
    NestedStateListeners['listeners'],
    {
        dataValues: (GameStateBase | undefined)[];
        isArray: boolean;
    }
>;

function determineListenersToCall(
    stateListeners: NestedStateListeners,
    updates: GameStateBase | undefined,
    newGameState: GameStateBase | undefined,
    listenerMap: ListenersToCallMap,
    isArray = false,
): ListenersToCallMap {
    const listeners = stateListeners.listeners;
    if (listeners?.size) {
        const currentMapEntry = listenerMap.get(listeners);
        if (isArray || (newGameState as any) !== ignoreSymbol) {
            if (currentMapEntry) {
                currentMapEntry.dataValues.push(newGameState);
            } else {
                listenerMap.set(listeners, {
                    dataValues: [newGameState],
                    isArray,
                });
            }
        }
    }

    Object.entries(stateListeners.children).forEach(
        ([
            key,
            nestedListener,
        ]) => {
            if (isRuntimeTypeOf(updates, 'array')) {
                updates.forEach((updateEntry, updateIndex) => {
                    const nextNewGameState = newGameState?.[updateIndex] as GameStateBase;
                    determineListenersToCall(
                        stateListeners,
                        updateEntry,
                        nextNewGameState,
                        listenerMap,
                        true,
                    );
                });
            } else {
                if (!nestedListener || (!isArray && (!updates || !(key in updates)))) {
                    return;
                }
                const nextUpdates = updates?.[key] as GameStateBase;
                const nextNewGameState = (
                    newGameState ? newGameState[key] : ignoreSymbol
                ) as GameStateBase;
                determineListenersToCall(
                    nestedListener,
                    nextUpdates,
                    nextNewGameState,
                    listenerMap,
                    isArray,
                );
            }
        },
    );

    return listenerMap;
}

export async function callListeners(
    stateListeners: NestedStateListeners,
    updates: GameStateBase,
    newGameState: GameStateBase,
): Promise<unknown> {
    const allPromises: Promise<unknown>[] = [];

    const listenersToCall = determineListenersToCall(
        stateListeners,
        updates,
        newGameState,
        new Map(),
    );

    console.dir(listenersToCall);

    listenersToCall.forEach((valueInfo, listeners) => {
        if (listeners?.size) {
            allPromises.push(
                callAsynchronously(() => {
                    const innerPromises: MaybePromise<unknown>[] = [];
                    listeners.forEach((listener) => {
                        if (!valueInfo.isArray && valueInfo.dataValues.length > 1) {
                            throw new Error('Found non array listener value of length more than 1');
                        }
                        const value = valueInfo.isArray
                            ? valueInfo.dataValues
                            : valueInfo.dataValues[0];
                        innerPromises.push(listener(value));
                    });

                    return innerPromises;
                }),
            );
        }
    });

    return Promise.all(allPromises);
}
