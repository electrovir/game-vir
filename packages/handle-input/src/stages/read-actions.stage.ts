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
export type ActionsBindingsMap<AllowedActions extends string = string> = Partial<{
    [ActionName in AllowedActions]: ActionBinding[];
}>;

/**
 * A collection of action bindings for all players. Used in {@link readActionsStage} and
 * {@link ReadActionsStageState}.
 *
 * @category Types
 */
export type PlayersActionsBindingsMap<AllowedActions extends string = string> = {
    [PlayerPosition in `${number}`]: ActionsBindingsMap<AllowedActions>;
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
    /**
     * The full duration for which the current action has been active in its current direction. When
     * an active is first pressed, this will contain 0 milliseconds.
     *
     * @default {milliseconds: 0}
     */
    holdDuration: {milliseconds: number};
    value: number;
    /**
     * The hold duration at which the last time this current action hold was performed. When the
     * action hasn't been performed yet, this contain 0 milliseconds.
     *
     * This must be set by whatever process is reading this value.
     *
     * @default {milliseconds: 0}
     */
    lastActDuration: {milliseconds: number};
    /**
     * The number of times which this action has been performed for the current hold. When an action
     * is first pressed, this will be `0`.
     *
     * This must be incremented by whatever process is reading this value.
     *
     * @default 0
     */
    actCount: number;
};

/**
 * A collection of all active actions for an individual player. Used in {@link readActionsStage} and
 * {@link PlayersActiveActionsMap}.
 *
 * @category Types
 */
export type ActiveActionsMap<AllowedActions extends string = string> = Partial<{
    [ActionName in AllowedActions]: ActiveAction;
}>;

/**
 * A collection of all active actions for all players. Used in {@link readActionsStage} and
 * {@link ReadActionsStageState}.
 *
 * @category Types
 */
export type PlayersActiveActionsMap<AllowedActions extends string = string> = {
    [PlayerPosition in `${number}`]: ActiveActionsMap<AllowedActions>;
};

/**
 * All state used and set by {@link readActionsStage}.
 *
 * @category Types
 */
export type ReadActionsStageState<AllowedActions extends string = string> = Pick<
    ReadRawInputStageState,
    'rawInputs'
> &
    PartialAndUndefined<{
        /** Maps devices to different devices. See {@link DeviceKeyMap} for more information. */
        deviceKeyMap: DeviceKeyMap;
        /** Action bindings for all players. */
        playersActionsBindings: PlayersActionsBindingsMap<AllowedActions>;
        /** All active actions for all players. */
        playersActiveActions: PlayersActiveActionsMap<AllowedActions>;
    }>;

/**
 * Wraps {@link readActionsStage} in type parameters that require specific action name strings
 * (rather than _any_ action name strings).
 */
export function createTypedReadActionsStage<const AllowedActions extends string>(): VirLineStage<
    ReadActionsStageState<AllowedActions>
> {
    return readActionsStage;
}

/**
 * This stage reads all current action bindings (set externally) and all current raw inputs (set by
 * {@link readRawInputStage}) and then determines and sets the currently active actions.
 *
 * By default, this stage allows any strings as action names. Use {@link createTypedReadActionsStage}
 * to define this stage with a specific set of allowed action names.
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

function readPlayerActions<AllowedActions extends string>({
    actionsBindingsMap,
    activeActionsMap,
    reversedDeviceKeyMap,
    rawInputs,
    timeSinceLastUpdate,
}: {
    actionsBindingsMap: Readonly<ActionsBindingsMap<AllowedActions>>;
    activeActionsMap: Readonly<ActiveActionsMap<AllowedActions>> | undefined;
    reversedDeviceKeyMap: Readonly<Partial<Record<InputDeviceKey, InputDeviceKey>>>;
    rawInputs: Readonly<RawInputs> | undefined;
    timeSinceLastUpdate: Duration<DurationUnit.Milliseconds>;
}): ActiveActionsMap<AllowedActions> {
    return getObjectTypedEntries(actionsBindingsMap).reduce(
        (
            accum: ActiveActionsMap<AllowedActions>,
            [
                actionName,
                bindings,
            ],
        ) => {
            const matchingInputs = filterMap(
                bindings as ActionBinding[],
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

                const previousActiveAction = activeActionsMap?.[actionName];

                const previousActionDuration = previousActiveAction?.holdDuration;
                const durationMs = previousActionDuration
                    ? previousActionDuration.milliseconds + timeSinceLastUpdate.milliseconds
                    : 0;

                const newActiveAction: ActiveAction = {
                    holdDuration: {
                        milliseconds: Math.round(durationMs),
                    },
                    value,
                    actCount: previousActiveAction?.actCount || 0,
                    lastActDuration: previousActiveAction?.lastActDuration || {milliseconds: 0},
                };

                accum[actionName] = newActiveAction;
            }

            return accum;
        },
        {},
    );
}
