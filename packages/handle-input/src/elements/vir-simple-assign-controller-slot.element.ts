import {assert, assertWrap, check, checkWrap} from '@augment-vir/assert';
import {
    arrayToObject,
    filterMap,
    filterOutIndexes,
    getEnumValues,
    getObjectTypedEntries,
    mapObjectValues,
    wrapNumber,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {waitForAnimationFrame} from '@augment-vir/web';
import {group, nav, NavDirection, NavEnterEvent, NavPiblingEvent} from 'device-navigation';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {fancyGamepadModelName, findMatchingGamepadModel} from 'gamepad-type';
import {
    CurrentInputsChangedEvent,
    GamepadInputDeviceKey,
    getGamepads,
    InputDeviceHandler,
    InputDeviceKey,
} from 'input-device-handler';
import {VirLine, type VirLineWithState} from 'vir-line';
import {noNativeFormStyles, noNativeSpacing} from 'vira';
import {
    createTypedReadBindingsStage,
    ReadBindingsStageState,
} from '../stages/read-bindings.stage.js';
import {
    defaultGamepadKeyMap,
    InputDirection,
    readRawInputStage,
    ReadRawInputStageState,
    type GamepadKeyMap,
} from '../stages/read-raw-input.stage.js';
import {MenuNavBinding, MenuNavController} from './menu-nav.js';
import {VirDeviceChip} from './vir-device-chip.element.js';

/** Each timestamp indicates the last time that this device has an input made. */
type DeviceTimestampMap = Partial<Record<InputDeviceKey, {timestamp: number}>>;

/**
 * Assign controllers to different positions. For example, this can be used to assign a controller
 * connected to slot 2 instead to slot 1.
 *
 * @category Elements
 */
export const VirSimpleAssignControllerSlot = defineElement<
    Readonly<
        PartialWithUndefined<
            {
                inputDeviceHandler: Readonly<InputDeviceHandler>;
                /** Use this to override the default glow pulse colors */
                glowColors: ReadonlyArray<string>;
                /**
                 * Set this to `true` to disable the devices glow pulses when device activity is
                 * detected.
                 *
                 * @default `false`
                 */
                disableGlowPulses: boolean;
                virLine: VirLineWithState<
                    ReadRawInputStageState & ReadBindingsStageState<MenuNavBinding>
                >;
            } & Pick<
                ReadRawInputStageState,
                'gamepadKeyMap' | 'gamepadModelMap' | 'gamepadBrandMap'
            >
        >
    >
>()({
    tagName: 'vir-simple-assign-controller-slot',
    styles: css`
        :host {
            display: flex;
        }

        .devices-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

        .device-button {
            ${noNativeFormStyles};

            display: flex;
            gap: 8px;
            border-radius: 16px;
            padding: 16px;
            align-items: center;
            border: 1px solid #eee;
            cursor: pointer;
        }

        p {
            ${noNativeSpacing};
        }
    `,
    events: {
        deviceMapChange: defineElementEvent<GamepadKeyMap>(),
    },
    state() {
        return {
            deviceHandler: undefined as undefined | Readonly<InputDeviceHandler>,
            deviceTimestamps: {} as DeviceTimestampMap,
            /** Used to clean up device handler listeners. */
            cleanup: undefined as undefined | (() => void),
            menuNavController: undefined as undefined | MenuNavController,
            internalVirLine: undefined as
                | undefined
                | VirLineWithState<ReadRawInputStageState & ReadBindingsStageState>,
        };
    },
    init({inputs, state, updateState, host, dispatch, events}) {
        const deviceHandler =
            inputs.inputDeviceHandler || new InputDeviceHandler({startLoopImmediately: true});

        if (!state.deviceHandler) {
            updateState({
                deviceHandler,
            });
        }

        function readDeviceTimestamps(): DeviceTimestampMap {
            return mapObjectValues(deviceHandler.getLastPollResults(), (deviceKey) => {
                return state.deviceTimestamps[deviceKey] || {timestamp: 0};
            });
        }

        const unListen = inputs.disableGlowPulses
            ? undefined
            : deviceHandler.listen(CurrentInputsChangedEvent, (event) => {
                  const deviceTimestamps = readDeviceTimestamps();
                  event.detail.inputs.newInputs.forEach((newInput) => {
                      deviceTimestamps[newInput.deviceKey] = {timestamp: Date.now()};
                  });

                  updateState({deviceTimestamps: deviceTimestamps});
              });

        updateState({
            cleanup: unListen,
            deviceTimestamps: readDeviceTimestamps(),
        });

        const virLine =
            inputs.virLine ||
            state.internalVirLine ||
            new VirLine(
                [
                    readRawInputStage,
                    createTypedReadBindingsStage<MenuNavBinding>(),
                ],

                {
                    deviceHandler,
                    playersBindings: {
                        '1': {
                            [MenuNavBinding.Up]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-KeyW',
                                },
                            ],
                            [MenuNavBinding.Down]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-KeyS',
                                },
                            ],
                            [MenuNavBinding.Right]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-KeyD',
                                },
                            ],
                            [MenuNavBinding.Enter]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-Space',
                                },
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-Enter',
                                },
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-NumpadEnter',
                                },
                            ],
                            [MenuNavBinding.Left]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-KeyA',
                                },
                            ],
                            [MenuNavBinding.SectionNext]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-KeyE',
                                },
                            ],
                            [MenuNavBinding.SectionPrevious]: [
                                {
                                    deviceKey: InputDeviceKey.Keyboard,
                                    direction: InputDirection.Positive,
                                    inputName: 'button-KeyQ',
                                },
                            ],
                        },
                    },
                },
                {
                    init: {
                        startUpdateLoopImmediately: true,
                    },
                },
            );

        if (!state.menuNavController) {
            const menuNavController = new MenuNavController(host, virLine);

            menuNavController.listen(NavEnterEvent, async () => {
                const keys = getFocusedKeys(menuNavController);
                if (!keys) {
                    return;
                }

                await playRumble(keys.originalKey);
            });

            menuNavController.listen(NavPiblingEvent, async ({detail: navResult}) => {
                const keys = getFocusedKeys(menuNavController);
                if (!keys) {
                    return;
                }
                const {mappedKey, originalKey} = keys;

                const up =
                    navResult.direction === NavDirection.Up ||
                    navResult.direction === NavDirection.Left;

                const newMappedKey = wrapNumber(Number(mappedKey) + (up ? -1 : 1), {
                    min: 0,
                    max: 3,
                });

                const gamepadOrder = filterOutIndexes(
                    getObjectTypedEntries(
                        inputs.gamepadKeyMap || {
                            ...defaultGamepadKeyMap,
                        },
                    ),
                    [Number(originalKey)],
                ).sort((a, b) => a[1].localeCompare(b[1]));

                gamepadOrder.splice(newMappedKey, 0, [
                    originalKey,
                    mappedKey,
                ]);

                const newGamepadMap: GamepadKeyMap = arrayToObject(
                    gamepadOrder,
                    (
                        [
                            originalKey,
                        ],
                        index,
                    ) => {
                        return {
                            key: originalKey,
                            value: assertWrap.isEnumValue(String(index), GamepadInputDeviceKey),
                        };
                    },
                ) satisfies Partial<GamepadKeyMap> as GamepadKeyMap;

                dispatch(new events.deviceMapChange(newGamepadMap));
                await waitForAnimationFrame(2);
                checkWrap
                    .instanceOf(
                        host.shadowRoot.querySelector(`[data-original-key="${originalKey}"]`),
                        HTMLElement,
                    )
                    ?.focus();
            });

            updateState({
                menuNavController: new MenuNavController(host, virLine),
            });
        }
    },
    cleanup({inputs, state, updateState}) {
        state.cleanup?.();

        if (!inputs.inputDeviceHandler) {
            state.deviceHandler?.destroy();
        }

        state.menuNavController?.destroy();

        updateState({
            cleanup: undefined,
            deviceHandler: undefined,
            menuNavController: undefined,
        });
    },
    render({state, inputs}) {
        const mappedKeys = filterMap(
            getEnumValues(GamepadInputDeviceKey),
            (deviceKey) => {
                return {
                    originalKey: deviceKey,
                    mappedKey: inputs.gamepadKeyMap?.[deviceKey] || deviceKey,
                };
            },
            ({originalKey}) => {
                return !!state.deviceTimestamps[originalKey];
            },
        ).sort((a, b) => {
            return a.mappedKey.localeCompare(b.mappedKey);
        });

        const rawGamepads = getGamepads();

        const deviceTemplates = mappedKeys.map(({mappedKey, originalKey}) => {
            const deviceTimestamp = state.deviceTimestamps[originalKey];
            const rawGamepad = rawGamepads[originalKey];

            if (!deviceTimestamp || !rawGamepad) {
                return nothing;
            }

            const model = findMatchingGamepadModel({
                gamepad: {
                    deviceName: rawGamepad.id,
                },
                gamepadBrandMap: inputs.gamepadBrandMap,
                gamepadModelMap: inputs.gamepadModelMap,
            });

            const modelNameDisplay =
                (model.gamepadModel && check.isKeyOf(model.gamepadModel, fancyGamepadModelName)
                    ? fancyGamepadModelName[model.gamepadModel]
                    : '') + ` (${originalKey})`;

            return html`
                <button
                    class="device-button"
                    data-original-key=${originalKey}
                    data-mapped-key=${mappedKey}
                    ${listen('mousedown', async () => {
                        await playRumble(originalKey);
                    })}
                    ${nav()}
                >
                    <p>${mappedKey}</p>
                    <${VirDeviceChip.assign({
                        deviceKey: originalKey,
                        lastInputTime: deviceTimestamp,
                        plainStyles: true,
                    })}></${VirDeviceChip}>

                    <p>${modelNameDisplay}</p>
                </button>
            `;
        });

        return html`
            <div class="devices-wrapper" ${nav(group)}>${deviceTemplates}</div>
        `;
    },
});

async function playRumble(gamepadKey: GamepadInputDeviceKey) {
    const gamepad = getGamepads()[gamepadKey];
    await gamepad?.vibrationActuator.playEffect('dual-rumble', {
        duration: 300,
        strongMagnitude: 0.5,
        weakMagnitude: 0.5,
    });
}

function getFocusedKeys(menuNavController: Readonly<MenuNavController>) {
    const element = menuNavController.getCurrentlyFocused()?.node.element;

    if (!element) {
        return undefined;
    }

    const originalKey = element.getAttribute('data-original-key');
    assert.isEnumValue(
        originalKey,
        GamepadInputDeviceKey,
        'Failed to find original device key on nav element.',
    );

    const mappedKey = element.getAttribute('data-mapped-key');
    assert.isEnumValue(
        mappedKey,
        GamepadInputDeviceKey,
        'Failed to find mapped device key on nav element.',
    );

    return {
        originalKey,
        mappedKey,
    };
}
