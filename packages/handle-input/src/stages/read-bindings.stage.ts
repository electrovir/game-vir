import {check} from '@augment-vir/assert';
import {
    filterMap,
    getObjectTypedEntries,
    mapObjectValues,
    PartialWithUndefined,
    type EnumBaseType,
} from '@augment-vir/common';
import {Duration, DurationUnit} from 'date-vir';
import {InputDeviceKey} from 'input-device-handler';
import {defineShape, enumShape, indexedKeys, optional, or} from 'object-shape-tester';
import {VirLineStage} from 'vir-line';
import {
    InputDirection,
    RawInputs,
    readRawInputStage,
    ReadRawInputStageState,
} from './read-raw-input.stage.js';

/**
 * A shape definition corresponding to the {@link Binding} type.
 *
 * @category Internal
 */
export const bindingShape = defineShape({
    deviceKey: enumShape(InputDeviceKey),
    /**
     * The raw input key or button (like `'button-keyW'` for keyboard buttons or `'button-12'` for
     * gamepads).
     */
    inputName: '',
    /** The optional mapped input name, only relevant to gamepads (like `'d-pad-left'` or `'X'`). */
    mappedInputName: optional(or(undefined, '')),
    direction: enumShape(InputDirection),
});

/**
 * An individual binding assignment. Used in {@link readBindingsStage} and {@link BindingsMap}.
 *
 * @category Internal
 */
export type Binding = typeof bindingShape.runtimeType;

/**
 * Starts at `'1'`.
 *
 * @category Internal
 */
export type PlayerPosition = `${number}`;

/**
 * Generates a shape definition for {@link BindingsMap} with your specific set of allowed binding
 * names.
 *
 * @category Binding
 */
export function generateBindingsMapShape(bindingNamesEnum: EnumBaseType) {
    return defineShape(
        indexedKeys({
            keys: enumShape(bindingNamesEnum),
            values: bindingShape,
            required: false,
        }),
    );
}

/**
 * A collection of bindings for a single player. Used in {@link readBindingsStage} and
 * {@link PlayersBindingsMap}.
 *
 * @category Internal
 */
export type BindingsMap<BindingNames extends string = string> = Partial<
    Record<BindingNames, Binding[]>
>;

/**
 * Generates a shape definition for {@link PlayersBindingsMap} with your specific set of allowed
 * binding names.
 *
 * @category Binding
 */
export function createPlayersBindingsMapShape(bindingNamesEnum: EnumBaseType) {
    return defineShape(
        indexedKeys({
            keys: '' as `${number}`,
            values: generateBindingsMapShape(bindingNamesEnum),
            required: false,
        }),
    );
}

/**
 * A collection of bindings for all players. Used in {@link readBindingsStage} and
 * {@link ReadBindingsStageState}.
 *
 * @category Internal
 */
export type PlayersBindingsMap<BindingNames extends string = string> = Record<
    PlayerPosition,
    BindingsMap<BindingNames>
>;

/**
 * An individual active binding. Used in {@link readBindingsStage} and {@link ActiveBindingsMap}.
 *
 * @category Internal
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
 * @category Internal
 */
export type ActiveBindingsMap<BindingNames extends string = string> = Partial<
    Record<BindingNames, ActiveBinding>
>;

/**
 * A collection of all active bindings for all players. Used in {@link readBindingsStage} and
 * {@link ReadBindingsStageState}.
 *
 * @category Internal
 */
export type PlayersActiveBindingsMap<BindingNames extends string = string> = Record<
    PlayerPosition,
    ActiveBindingsMap<BindingNames>
>;

/**
 * All state used and set by {@link readBindingsStage}.
 *
 * @category Internal
 */
export type ReadBindingsStageState<BindingNames extends string = string> = Pick<
    ReadRawInputStageState,
    'rawInputs'
> &
    PartialWithUndefined<{
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

        const newPlayersActiveBindingsMap = mapObjectValues(
            state.playersBindings,
            (playerPosition, bindingsMap) => {
                return readPlayerBindings({
                    bindingsMap,
                    activeBindingsMap: state.playersActiveBindings?.[playerPosition],
                    rawInputs: state.rawInputs,
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
    rawInputs,
    timeSinceLastUpdate,
}: {
    bindingsMap: Readonly<BindingsMap<BindingNames>>;
    activeBindingsMap: Readonly<ActiveBindingsMap<BindingNames>> | undefined;
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
                    const matchingInput = rawInputs?.[binding.deviceKey]?.[binding.inputName];

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
