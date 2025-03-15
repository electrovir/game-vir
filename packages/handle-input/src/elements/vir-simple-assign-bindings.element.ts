import {check} from '@augment-vir/assert';
import {filterOutIndexes, mapObjectValues, PartialWithUndefined} from '@augment-vir/common';
import {classMap, css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {
    CurrentInputsChangedEvent,
    DeviceInputType,
    DevicesRemovedEvent,
    InputDeviceHandler,
    InputDeviceHandlerOptions,
    InputDeviceKey,
    inputDeviceKeyToInputDeviceType,
    InputDeviceType,
    NewDevicesAddedEvent,
    parseInputTypeFromInputName,
} from 'input-device-handler';
import {noUserSelect, viraAnimationDurations, ViraButton, viraDisabledStyles} from 'vira';
import {
    Binding,
    BindingsMap,
    PlayersBindingsMap,
    ReadBindingsStageState,
} from '../stages/read-bindings.stage.js';
import {calculateInputDirection, SimpleInputDevice} from '../stages/read-raw-input.stage.js';
import {isMouseMovement} from '../util/is-mouse-movement.js';
import {deviceEmojis, directionEmojis} from './emoji.js';

/**
 * Inputs for {@link VirSimplePlayerAssignBindings}.
 *
 * @category Internal
 */
export type VirSimpleAssignBindingsInputs = Readonly<
    PartialWithUndefined<
        {
            inputDeviceHandler: Readonly<
                Pick<InputDeviceHandler, 'readAllDevices' | 'listen' | 'destroy'>
            >;
            /**
             * If set to `true`, mouse movement is allowed as an input binding. Mouse movement often
             * requires special handling, so by default this is not enabled.
             *
             * @default `false`
             */
            allowMouseMovement: boolean;
        } & Pick<InputDeviceHandlerOptions, 'globalDeadZone' | 'gamepadDeadZoneSettings'> &
            Pick<ReadBindingsStageState, 'playersBindings'>
    > & {
        /**
         * The names of each control to bind to.
         *
         * @example ['up', 'down', 'left', 'right', 'jump'];
         */
        bindingNames: ReadonlyArray<string>;
        supportedPlayerCount: number;
    }
>;

const virBindingChipHeight = 52;

/**
 * An opinionated and inflexible binding assignment element that supports the {@link BindingsMap}
 * type for a _single_ player. Used in {@link VirSimpleAssignBindings}.
 *
 * This is intended to be simple for use in initial game development for the sake of quickness.
 *
 * @category Elements
 */
export const VirSimplePlayerAssignBindings = defineElement<
    Readonly<
        Pick<VirSimpleAssignBindingsInputs, 'bindingNames' | 'playersBindings'> & {
            playerPosition: number;
            listeningToInput: boolean;
            deviceHandler: Pick<InputDeviceHandler, 'listen'>;
            allowMouseMovement: boolean;
        }
    >
>()({
    tagName: 'vir-simple-player-assign-bindings',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        th {
            text-align: right;
            height: ${virBindingChipHeight}px;
            padding: 8px 0;
            padding-right: 16px;
        }

        .bindings {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            border: 1px solid #eee;
            min-height: ${virBindingChipHeight + 18}px;
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            position: relative;
        }

        td:last-of-type {
            width: 100%;
        }

        table {
            max-width: 100%;
        }

        .add {
            margin-right: 32px;
        }

        .fade .fadable {
            pointer-events: none;
            opacity: 0.3;
        }

        .listening-overlay {
            z-index: 100;
            opacity: 1;
            position: absolute;
            height: 100%;
            width: 100%;
            top: -1px;
            left: -1px;
            background-color: rgba(249, 252, 255, 0.9);
            border: 2px solid #ccc;
            border-radius: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p.empty-bindings {
            ${viraDisabledStyles};
        }
        .empty-bindings {
            display: flex;
            justify-content: center;
        }
    `,
    events: {
        /**
         * Contains a boolean indicating whether the listening is starting (`true`) or stopping
         * (`false`).
         */
        inputListen: defineElementEvent<boolean>(),
        bindingsUpdate: defineElementEvent<BindingsMap>(),
    },
    state() {
        return {
            listeningForBinding: undefined as undefined | string,
        };
    },
    render({inputs, dispatch, events, state, updateState}) {
        const rowTemplates = inputs.bindingNames.map((bindingName) => {
            const currentPlayerBindings =
                inputs.playersBindings?.[`${inputs.playerPosition}`] || {};

            const currentBindings = currentPlayerBindings[bindingName] || [];

            const bindingTemplates = currentBindings.length
                ? currentBindings.map((binding, bindingIndex) => {
                      return html`
                          <${VirBindingChip.assign({
                              ...binding,
                          })}
                              ${listen(VirBindingChip.events.removeBinding, () => {
                                  const newBindingsMap = {
                                      ...currentPlayerBindings,
                                      [bindingName]: filterOutIndexes(currentBindings, [
                                          bindingIndex,
                                      ]),
                                  };

                                  dispatch(new events.bindingsUpdate(newBindingsMap));
                              })}
                          ></${VirBindingChip}>
                      `;
                  })
                : html`
                      <p class="empty-bindings">Empty</p>
                  `;

            const isListeningForCurrentBinding = state.listeningForBinding === bindingName;

            const listeningOverlay =
                isListeningForCurrentBinding && inputs.listeningToInput
                    ? html`
                          <div class="listening-overlay"><span>Listening for input...</span></div>
                      `
                    : nothing;

            return html`
                <tr
                    class=${classMap({
                        fade: inputs.listeningToInput,
                    })}
                >
                    <td class="fadable">
                        <${ViraButton.assign({
                            text: '+',
                            disabled: inputs.listeningToInput,
                        })}
                            class="add"
                            ${listen('click', () => {
                                dispatch(new events.inputListen(true));
                                updateState({
                                    listeningForBinding: bindingName,
                                });

                                inputs.deviceHandler.listen(
                                    CurrentInputsChangedEvent,
                                    (event, removeSelf) => {
                                        const newInput = event.detail.inputs.newInputs[0];

                                        if (!newInput) {
                                            return;
                                        }

                                        const newBinding: Binding = {
                                            deviceKey: newInput.deviceKey,
                                            direction: calculateInputDirection(newInput.inputValue),
                                            inputName: newInput.inputName,
                                        };

                                        const isBlockedMouseInput: boolean =
                                            !inputs.allowMouseMovement && isMouseMovement(newInput);

                                        if (isBlockedMouseInput) {
                                            return;
                                        }

                                        const bindingAlreadyExists = currentBindings.some(
                                            (binding) => check.jsonEquals(newBinding, binding),
                                        );

                                        if (!bindingAlreadyExists) {
                                            const newBindings: BindingsMap = {
                                                ...currentPlayerBindings,
                                                [bindingName]: [
                                                    ...currentBindings,
                                                    newBinding,
                                                ],
                                            };

                                            dispatch(new events.bindingsUpdate(newBindings));
                                        }
                                        removeSelf();
                                        dispatch(new events.inputListen(false));
                                        updateState({
                                            listeningForBinding: undefined,
                                        });
                                    },
                                );
                            })}
                        ></${ViraButton}>
                    </td>
                    <th class=${classMap({fadable: !isListeningForCurrentBinding})}>
                        ${bindingName}:
                    </th>
                    <td class=${classMap({fadable: !isListeningForCurrentBinding})}>
                        <div
                            class="bindings ${classMap({
                                'empty-bindings': !currentBindings.length,
                            })}"
                        >
                            ${listeningOverlay}${bindingTemplates}
                        </div>
                    </td>
                </tr>
            `;
        });
        return html`
            <table><tbody>${rowTemplates}</tbody></table>
        `;
    },
});

/**
 * An simple chip that shows an individual binding. Clicking on one of these triggers a deletion
 * event so that they can be removed.
 *
 * @category Elements
 */
export const VirBindingChip = defineElement<Readonly<Binding>>()({
    tagName: 'vir-binding-chip',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 8px;
            font-size: 0.8em;
            height: ${virBindingChipHeight}px;
            box-sizing: border-box;
            position: relative;
        }

        .remove-overlay {
            position: absolute;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            border: 3px solid #aa0000;
            background-color: rgba(255, 0, 0, 0.6);
            border-radius: inherit;
            display: flex;
            -webkit-text-stroke: 1px black;
            color: white;
            font-weight: bold;
            justify-content: center;
            align-items: flex-end;
            font-weight: bold;
            padding-bottom: 4px;
            opacity: 0;
            cursor: pointer;
            font-size: 1.9em;
            ${noUserSelect};
            transition: opacity
                ${viraAnimationDurations['vira-interaction-animation-duration'].value};
        }
        :host(:hover) .remove-overlay {
            opacity: 1;
        }
    `,
    events: {
        removeBinding: defineElementEvent<void>(),
    },
    render({inputs, dispatch, events}) {
        const deviceType = inputDeviceKeyToInputDeviceType[inputs.deviceKey];
        const deviceEmoji = deviceEmojis[deviceType];
        const controllerSlot = Number(inputs.deviceKey) + 1;
        const deviceKeyTemplate =
            deviceType === InputDeviceType.Gamepad
                ? html`
                      <span>${controllerSlot}</span>
                  `
                : nothing;
        const directionTemplate =
            parseInputTypeFromInputName(inputs.inputName) === DeviceInputType.Axe
                ? html`
                      <span>${directionEmojis[inputs.direction]}</span>
                  `
                : nothing;

        const deviceExplanation =
            deviceType === InputDeviceType.Gamepad
                ? `controller in slot ${controllerSlot}`
                : inputs.deviceKey;

        return html`
            <div
                class="remove-overlay"
                ${listen('click', () => {
                    dispatch(new events.removeBinding());
                })}
            >
                <span>×</span>
            </div>
            <div>${inputs.inputName} ${directionTemplate}</div>
            <div title=${deviceExplanation}>${deviceEmoji} ${deviceKeyTemplate}</div>
        `;
    },
});

/**
 * An opinionated and inflexible binding assignment element that supports the
 * {@link PlayersBindingsMap} type and also an arbitrary number of players.
 *
 * This is intended to be simple for use in initial game development for the sake of quickness.
 *
 * @category Elements
 */
export const VirSimpleAssignBindings = defineElement<VirSimpleAssignBindingsInputs>()({
    tagName: 'vir-simple-assign-bindings',
    styles: css`
        :host {
            display: flex;
            gap: 32px;
        }

        ${VirSimplePlayerAssignBindings} {
            min-width: 300px;
        }

        .player-assignment {
            flex-grow: 1;
        }
    `,
    events: {
        playersBindingsUpdate: defineElementEvent<PlayersBindingsMap>(),
    },
    state() {
        return {
            deviceHandler: undefined as VirSimpleAssignBindingsInputs['inputDeviceHandler'],
            /** Removes device handler listers. */
            cleanup: undefined as undefined | (() => void),
            currentDevices: {} as Partial<Record<InputDeviceKey, SimpleInputDevice>>,
            listeningToInput: false,
        };
    },
    init({inputs, state, updateState}) {
        const deviceHandler =
            state.deviceHandler ||
            inputs.inputDeviceHandler ||
            new InputDeviceHandler({
                startLoopImmediately: true,
                ...(inputs.globalDeadZone ? {globalDeadZone: inputs.globalDeadZone} : {}),
                ...(inputs.gamepadDeadZoneSettings
                    ? {gamepadDeadZoneSettings: inputs.gamepadDeadZoneSettings}
                    : {}),
            });

        if (!state.deviceHandler) {
            updateState({
                deviceHandler,
            });
        }

        function updateDevices() {
            const currentDevices = mapObjectValues(
                deviceHandler.readAllDevices(),
                (deviceKey, device): SimpleInputDevice => {
                    return {
                        deviceKey,
                        deviceName: device.deviceName,
                        deviceType: device.deviceType,
                    };
                },
            );

            updateState({currentDevices});
        }

        const unlistenNewDevices = deviceHandler.listen(NewDevicesAddedEvent, updateDevices);
        const unlistenRemovedDevices = deviceHandler.listen(DevicesRemovedEvent, updateDevices);

        updateState({
            cleanup() {
                unlistenNewDevices();
                unlistenRemovedDevices();
            },
        });

        updateDevices();
    },
    cleanup({inputs, state, updateState}) {
        if (!inputs.inputDeviceHandler) {
            /** Only destroy the device handler if it was internally constructed. */
            state.deviceHandler?.destroy();
        }

        state.cleanup?.();

        updateState({
            deviceHandler: undefined,
            cleanup: undefined,
        });
    },
    render({state, inputs, updateState, dispatch, events}) {
        const deviceHandler = state.deviceHandler;

        if (!deviceHandler) {
            return nothing;
        } else if (inputs.supportedPlayerCount < 1) {
            throw new Error('Cannot support < 1 players.');
        }

        const shouldShowPlayerPosition: boolean = inputs.supportedPlayerCount > 1;

        return new Array(inputs.supportedPlayerCount).fill(0).map((_, playerIndex) => {
            const playerPosition = playerIndex + 1;

            const playerHeaderTemplate = shouldShowPlayerPosition
                ? html`
                      <h3>Player ${playerPosition}</h3>
                  `
                : nothing;

            return html`
                <section class="player-assignment">
                    ${playerHeaderTemplate}
                    <${VirSimplePlayerAssignBindings.assign({
                        bindingNames: inputs.bindingNames,
                        playerPosition,
                        playersBindings: inputs.playersBindings,
                        listeningToInput: state.listeningToInput,
                        deviceHandler,
                        allowMouseMovement: inputs.allowMouseMovement || false,
                    })}
                        ${listen(VirSimplePlayerAssignBindings.events.inputListen, (event) => {
                            updateState({
                                listeningToInput: event.detail,
                            });
                        })}
                        ${listen(VirSimplePlayerAssignBindings.events.bindingsUpdate, (event) => {
                            const newBindings: PlayersBindingsMap = {
                                ...inputs.playersBindings,
                                [String(playerPosition)]: event.detail,
                            };

                            dispatch(new events.playersBindingsUpdate(newBindings));
                        })}
                    ></${VirSimplePlayerAssignBindings}>
                </section>
            `;
        });
    },
});
