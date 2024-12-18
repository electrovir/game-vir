import {check} from '@augment-vir/assert';
import {
    filterMap,
    getObjectTypedEntries,
    mapObjectValues,
    PartialWithUndefined,
} from '@augment-vir/common';
import {Duration, DurationUnit} from 'date-vir';
import {InputDeviceKey} from 'input-device-handler';
import {VirLineStage} from 'vir-line';
import {reverseObjectKeyValue} from '../augments/object.js';
import {
    InputDirection,
    RawInputs,
    readRawInputStage,
    ReadRawInputStageState,
} from './read-raw-input.stage.js';

/**
 * An individual binding assignment. Used in {@link readBindingsStage} and {@link BindingsMap}.
 *
 * @category Types
 */
export type Binding = {
    deviceKey: InputDeviceKey;
    inputName: string;
    direction: InputDirection;
};

/** Starts at `'1'`. */
export type PlayerPosition = `${number}`;

/**
 * A collection of bindings for a single player. Used in {@link readBindingsStage} and
 * {@link PlayersBindingsMap}.
 *
 * @category Types
 */
export type BindingsMap<BindingNames extends string = string> = Partial<
    Record<BindingNames, Binding[]>
>;

/**
 * A collection of bindings for all players. Used in {@link readBindingsStage} and
 * {@link ReadBindingsStageState}.
 *
 * @category Types
 */
export type PlayersBindingsMap<BindingNames extends string = string> = Record<
    PlayerPosition,
    BindingsMap<BindingNames>
>;

/**
 * A mapping from `InputDeviceKey` to `InputDeviceKey` that simply allows devices to be interpreted
 * as different devices. This is mostly only useful for mapping a controller in any port to any
 * player. For example, mapping the controller in port 4 to player 1. Used in
 * {@link readBindingsStage} and {@link ReadBindingsStageState}.
 *
 * @category Types
 */
export type DeviceKeyMap = Partial<Record<InputDeviceKey, InputDeviceKey>>;

/**
 * An individual active binding. Used in {@link readBindingsStage} and {@link ActiveBindingsMap}.
 *
 * @category Types
 */
export type ActiveBinding = {
    /**
     * The full duration for which the current binding has been active in its current direction.
     * When an active is first pressed, this will be 0 milliseconds.
     *
     * @default {milliseconds: 0}
     */
    holdDuration: {milliseconds: number};
    value: number;
    /**
     * The hold duration at which the last time this binding was acted upon. When the binding hasn't
     * been acted on yet, this contain 0 milliseconds.
     *
     * This must be set by whatever process is acting on this binding, whenever it does so.
     *
     * @default {milliseconds: 0}
     */
    lastActDuration: {milliseconds: number};
    /**
     * The number of times which this binding has been acted upon for the current hold. When a
     * binding is first activated, this will be `0`.
     *
     * This must be incremented by whatever process is acting on this binding, whenever it does so.
     *
     * @default 0
     */
    actCount: number;
};

/**
 * A collection of all active bindings for an individual player. Used in {@link readBindingsStage}
 * and {@link PlayersActiveBindingsMap}.
 *
 * @category Types
 */
export type ActiveBindingsMap<BindingNames extends string = string> = Partial<
    Record<BindingNames, ActiveBinding>
>;

/**
 * A collection of all active bindings for all players. Used in {@link readBindingsStage} and
 * {@link ReadBindingsStageState}.
 *
 * @category Types
 */
export type PlayersActiveBindingsMap<BindingNames extends string = string> = Record<
    PlayerPosition,
    ActiveBindingsMap<BindingNames>
>;

/**
 * All state used and set by {@link readBindingsStage}.
 *
 * @category Types
 */
export type ReadBindingsStageState<BindingNames extends string = string> = Pick<
    ReadRawInputStageState,
    'rawInputs'
> &
    PartialWithUndefined<{
        /** Maps devices to different devices. See {@link DeviceKeyMap} for more information. */
        deviceKeyMap: DeviceKeyMap;
        /** Bindings for all players. */
        playersBindings: PlayersBindingsMap<BindingNames>;
        /** All active bindings for all players. */
        playersActiveBindings: PlayersActiveBindingsMap<BindingNames>;
    }>;

/**
 * Wraps {@link readBindingsStage} in type parameters that require specific binding names (rather
 * than any string).
 *
 * @category Stages
 */
export function createTypedReadBindingsStage<const BindingNames extends string>(): VirLineStage<
    ReadBindingsStageState<BindingNames>
> {
    return readBindingsStage;
}

/**
 * This stage reads all current bindings (set externally) and all current raw inputs (set by
 * {@link readRawInputStage}) and then determines and sets the currently active bindings.
 *
 * By default, this stage allows any strings as binding names. Use
 * {@link createTypedReadBindingsStage} to define this stage with a specific set of allowed binding
 * names.
 *
 * @category Stages
 */
export const readBindingsStage = new VirLineStage<ReadBindingsStageState>(
    {
        name: 'read bindings',
    },
    ({state, timeSinceLastUpdate}) => {
        if (
            !state.playersBindings ||
            !Object.keys(state.playersBindings).length ||
            !state.rawInputs ||
            !Object.keys(state.rawInputs).length
        ) {
            state.playersActiveBindings = {};
            /** Nothing to do if there are no bindings or inputs. */
            return;
        }

        const reversedDeviceKeyMap: Partial<Record<InputDeviceKey, InputDeviceKey>> =
            reverseObjectKeyValue(state.deviceKeyMap || {});

        const newPlayersActiveBindingsMap = mapObjectValues(
            state.playersBindings,
            (playerPosition, bindingsMap) => {
                return readPlayerBindings({
                    bindingsMap,
                    activeBindingsMap: state.playersActiveBindings?.[playerPosition],
                    rawInputs: state.rawInputs,
                    reversedDeviceKeyMap,
                    timeSinceLastUpdate,
                });
            },
        );

        state.playersActiveBindings = newPlayersActiveBindingsMap;
    },
);

function readPlayerBindings<BindingNames extends string>({
    bindingsMap: bindingsMap,
    activeBindingsMap,
    reversedDeviceKeyMap,
    rawInputs,
    timeSinceLastUpdate,
}: {
    bindingsMap: Readonly<BindingsMap<BindingNames>>;
    activeBindingsMap: Readonly<ActiveBindingsMap<BindingNames>> | undefined;
    reversedDeviceKeyMap: Readonly<Partial<Record<InputDeviceKey, InputDeviceKey>>>;
    rawInputs: Readonly<RawInputs> | undefined;
    timeSinceLastUpdate: Duration<DurationUnit.Milliseconds>;
}): ActiveBindingsMap<BindingNames> {
    return getObjectTypedEntries(bindingsMap).reduce(
        (
            accum: ActiveBindingsMap<BindingNames>,
            [
                bindingName,
                bindings,
            ],
        ) => {
            const matchingInputs = filterMap(
                bindings as Binding[],
                (binding) => {
                    const deviceKey = reversedDeviceKeyMap[binding.deviceKey] ?? binding.deviceKey;

                    const matchingInput = rawInputs?.[deviceKey]?.[binding.inputName];

                    if (matchingInput?.direction === binding.direction) {
                        return matchingInput;
                    } else {
                        return undefined;
                    }
                },
                check.isTruthy,
            );

            if (matchingInputs.length) {
                const value = matchingInputs.reduce((accum, matchingInput) => {
                    return accum + matchingInput.inputValue;
                }, 0);

                const previousActiveBinding = activeBindingsMap?.[bindingName];

                const previousBindingDuration = previousActiveBinding?.holdDuration;
                const durationMs = previousBindingDuration
                    ? previousBindingDuration.milliseconds + timeSinceLastUpdate.milliseconds
                    : 0;

                const newActiveBinding: ActiveBinding = {
                    holdDuration: {
                        milliseconds: Math.round(durationMs),
                    },
                    value,
                    actCount: previousActiveBinding?.actCount || 0,
                    lastActDuration: previousActiveBinding?.lastActDuration || {milliseconds: 0},
                };

                accum[bindingName] = newActiveBinding;
            }

            return accum;
        },
        {},
    );
}
