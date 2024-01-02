import {MaybePromise, callAsynchronously} from '@augment-vir/common';
import {GameStateBase} from './base-pipeline-types';

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
        /** Indicates whether we're for sure that this listener should be fired. */
        certain: boolean;
    }
>;

function determineListenersToCall(
    stateListeners: NestedStateListeners,
    updates: GameStateBase | undefined,
    newGameState: GameStateBase | undefined,
    listenerMap: ListenersToCallMap,
    isArray = false,
    /** Certain meaning we're sure that this is going to be called. */
    certainFromParent = false,
): boolean {
    const certainList: boolean[] = Object.entries(stateListeners.children).map(
        ([
            key,
            nestedListener,
        ]): boolean => {
            if (Array.isArray(updates)) {
                return updates
                    .map((updateEntry, updateIndex) => {
                        const nextNewGameState = newGameState?.[updateIndex] as GameStateBase;
                        return determineListenersToCall(
                            stateListeners,
                            updateEntry,
                            nextNewGameState,
                            listenerMap,
                            true,
                        );
                    })
                    .some((certain) => certain);
            } else {
                if (!nestedListener || (!isArray && (!updates || !(key in updates)))) {
                    return false;
                }
                const nextUpdates = updates?.[key] as GameStateBase;
                const nextNewGameState = (
                    newGameState ? newGameState[key] : ignoreSymbol
                ) as GameStateBase;
                return determineListenersToCall(
                    nestedListener,
                    nextUpdates,
                    nextNewGameState,
                    listenerMap,
                    isArray,
                    updates && key in updates,
                );
            }
        },
    );

    const certain = certainFromParent || certainList.some((entry) => entry);

    const listeners = stateListeners.listeners;
    if (listeners?.size) {
        const currentMapEntry = listenerMap.get(listeners);
        if (isArray || (newGameState as any) !== ignoreSymbol) {
            if (currentMapEntry) {
                currentMapEntry.dataValues.push(newGameState);
                if (!currentMapEntry.certain && certain) {
                    currentMapEntry.certain = true;
                }
            } else {
                listenerMap.set(listeners, {
                    dataValues: [newGameState],
                    isArray,
                    certain,
                });
            }
        }
    }

    return certain;
}

export async function callListeners(
    stateListeners: NestedStateListeners,
    updates: GameStateBase,
    newGameState: GameStateBase,
): Promise<unknown> {
    const allPromises: Promise<unknown>[] = [];

    const listenersToCall: ListenersToCallMap = new Map();
    if (Object.keys(updates).length) {
        determineListenersToCall(
            {children: {root: stateListeners}, listeners: undefined},
            {root: updates},
            {root: newGameState},
            listenersToCall,
        );
    }

    listenersToCall.forEach((valueInfo, listeners) => {
        if (valueInfo.certain && listeners?.size) {
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
