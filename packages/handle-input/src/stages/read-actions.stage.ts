import {
    filterMap,
    getObjectTypedEntries,
    isTruthy,
    mapObjectValues,
    PartialAndUndefined,
} from '@augment-vir/common';
import {Duration, DurationUnit} from 'date-vir';
import {InputDeviceKey} from 'input-device-handler';
import {VirLineStage} from 'vir-line';
import {reverseObjectKeyValue} from '../augments/object';
import {
    InputDirection,
    RawInputs,
    readRawInputStage,
    ReadRawInputStageState,
} from './read-raw-input.stage';

/**
 * An individual binding assignment for any action. Used in {@link readActionsStage} and
 * {@link ActionsBindingsMap}.
 *
 * @category Types
 */
export type ActionBinding = {
    deviceKey: InputDeviceKey;
    inputName: string;
    direction: InputDirection;
};

/**
 * A collection of action bindings for a single player. Used in {@link readActionsStage} and
 * {@link PlayersActionsBindingsMap}.
 *
 * @category Types
 */
export type ActionsBindingsMap = {[ActionName in string]: ActionBinding[]};

/**
 * A collection of action bindings for all players. Used in {@link readActionsStage} and
 * {@link ReadActionsStageState}.
 *
 * @category Types
 */
export type PlayersActionsBindingsMap = {
    [PlayerPosition in `${number}`]: ActionsBindingsMap;
};

/**
 * A mapping from {@link InputDeviceKey} to {@link InputDeviceKey} that simply allows devices to be
 * interpreted as different devices. This is mostly only useful for mapping a controller in any port
 * to any player. For example, mapping the controller in port 4 to player 1. Used in
 * {@link readActionsStage} and {@link ReadActionsStageState}.
 *
 * @category Types
 */
export type DeviceKeyMap = Partial<Record<InputDeviceKey, InputDeviceKey>>;

/**
 * An individual active action. Used in {@link readActionsStage} and {@link ActiveActionsMap}.
 *
 * @category Types
 */
export type ActiveAction = {
    duration: {milliseconds: number};
    value: number;
};

/**
 * A collection of all active actions for an individual player. Used in {@link readActionsStage} and
 * {@link PlayersActiveActionsMap}.
 *
 * @category Types
 */
export type ActiveActionsMap = {[ActionName in string]: ActiveAction};

/**
 * A collection of all active actions for all players. Used in {@link readActionsStage} and
 * {@link ReadActionsStageState}.
 *
 * @category Types
 */
export type PlayersActiveActionsMap = {
    [PlayerPosition in `${number}`]: ActiveActionsMap;
};

/**
 * All state used and set by {@link readActionsStage}.
 *
 * @category Types
 */
export type ReadActionsStageState = Pick<ReadRawInputStageState, 'rawInputs'> &
    PartialAndUndefined<{
        /** Maps devices to different devices. See {@link DeviceKeyMap} for more information. */
        deviceKeyMap: DeviceKeyMap;
        /** Action bindings for all players. */
        playersActionsBindings: PlayersActionsBindingsMap;
        /** All active actions for all players. */
        playersActiveActions: PlayersActiveActionsMap;
    }>;

/**
 * This stage reads all current action bindings (set externally) and all current raw inputs (set by
 * {@link readRawInputStage}) and then determines and sets the currently active actions.
 *
 * @category Stages
 */
export const readActionsStage: VirLineStage<ReadActionsStageState> = {
    stageId: {
        name: 'read actions',
    },
    executor({state, timeSinceLastUpdate}) {
        if (
            !state.playersActionsBindings ||
            !Object.keys(state.playersActionsBindings).length ||
            !state.rawInputs ||
            !Object.keys(state.rawInputs).length
        ) {
            state.playersActiveActions = {};
            /** Nothing to do if there are no bindings or inputs. */
            return;
        }

        const reversedDeviceKeyMap: Partial<Record<InputDeviceKey, InputDeviceKey>> =
            reverseObjectKeyValue(state.deviceKeyMap || {});

        const newPlayersActiveActionsMap = mapObjectValues(
            state.playersActionsBindings,
            (playerPosition, actionsBindingsMap) => {
                return readPlayerActions({
                    actionsBindingsMap,
                    activeActionsMap: state.playersActiveActions?.[playerPosition],
                    rawInputs: state.rawInputs,
                    reversedDeviceKeyMap,
                    timeSinceLastUpdate,
                });
            },
        );

        state.playersActiveActions = newPlayersActiveActionsMap;
    },
};

function readPlayerActions({
    actionsBindingsMap,
    activeActionsMap,
    reversedDeviceKeyMap,
    rawInputs,
    timeSinceLastUpdate,
}: {
    actionsBindingsMap: Readonly<ActionsBindingsMap>;
    activeActionsMap: Readonly<ActiveActionsMap> | undefined;
    reversedDeviceKeyMap: Readonly<Partial<Record<InputDeviceKey, InputDeviceKey>>>;
    rawInputs: Readonly<RawInputs> | undefined;
    timeSinceLastUpdate: Duration<DurationUnit.Milliseconds>;
}): ActiveActionsMap {
    return getObjectTypedEntries(actionsBindingsMap).reduce(
        (
            accum: ActiveActionsMap,
            [
                actionName,
                bindings,
            ],
        ) => {
            const matchingInputs = filterMap(
                bindings,
                (binding) => {
                    const deviceKey = reversedDeviceKeyMap[binding.deviceKey] ?? binding.deviceKey;

                    const matchingInput = rawInputs?.[deviceKey]?.[binding.inputName];

                    if (matchingInput?.direction === binding.direction) {
                        return matchingInput;
                    } else {
                        return undefined;
                    }
                },
                isTruthy,
            );

            if (matchingInputs.length) {
                const value = matchingInputs.reduce((accum, matchingInput) => {
                    return accum + matchingInput.inputValue;
                }, 0);

                const previousActionDuration = activeActionsMap?.[actionName]?.duration;
                const durationMs = previousActionDuration
                    ? previousActionDuration.milliseconds + timeSinceLastUpdate.milliseconds
                    : 0;

                accum[actionName] = {
                    duration: {
                        milliseconds: Math.round(durationMs),
                    },
                    value,
                };
            }

            return accum;
        },
        {},
    );
}
