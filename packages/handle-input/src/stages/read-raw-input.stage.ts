import {check} from '@augment-vir/assert';
import {mapObject, mapObjectValues, type SelectFrom, type Values} from '@augment-vir/common';
import {
    defaultGamepadLayouts,
    defaultGamepadModelMap,
    findMatchingGamepadLayout,
    findMatchingGamepadModel,
    type GamepadBrandMap,
    type GamepadLayout,
    type GamepadModelMap,
} from 'gamepad-type';
import {
    GamepadInputDeviceKey,
    isGamepadDeviceKey,
    type AllDevices,
    type InputDevice,
    type InputDeviceHandler,
    type InputDeviceKey,
    type InputValueWrapper,
} from 'input-device-handler';
import {VirLineStage} from 'vir-line';

/**
 * All possible directions of an input value.
 *
 * @category Input
 */
export enum InputDirection {
    Positive = 'positive',
    /** Right at 0. */
    Flat = 'flat',
    Negative = 'negative',
}

/**
 * Calculate the {@link InputDirection} value of an input value.
 *
 * @category Util
 */
export function calculateInputDirection(inputValue: number): InputDirection {
    if (inputValue === 0) {
        return InputDirection.Flat;
    } else if (inputValue < 0) {
        return InputDirection.Negative;
    } else {
        return InputDirection.Positive;
    }
}

/**
 * An individual raw input. Used in {@link readRawInputStage} and {@link RawInputs}.
 *
 * @category Internal
 */
export type RawInput = Omit<InputValueWrapper<InputDeviceKey, any>, 'details'> & {
    mapped: Pick<
        InputValueWrapper<InputDeviceKey, any>,
        /**
         * `deviceName` is mapped by `gamepadModelMap`. If no mapping exists, this will always be
         * set to the original `deviceName`.
         */
        | 'deviceName'
        /**
         * `deviceKey` is mapped by `deviceKeyMap`. If no mapping exists, this will always be set to
         * the original `deviceKey`.
         */
        | 'deviceKey'
        /**
         * `deviceKey` is mapped by `gamepadLayouts`. If no mapping exists, this will always be set
         * to the original `inputName`.
         */
        | 'inputName'
    > & {
        /** This will only be populated for gamepad devices. */
        gamepadBrand: undefined | string;
    };

    /** The raw input's direction. */
    direction: InputDirection;
    /** How long this input has been held down in the current direction. */
    duration: {
        milliseconds: number;
    };
};

/**
 * All raw inputs for all devices. Used in {@link readRawInputStage} and
 * {@link ReadRawInputStageState}.
 *
 * @category Internal
 */
export type RawInputs = Partial<Record<InputDeviceKey, {[InputName in string]: RawInput}>>;

/**
 * An input device object. A simpler version of `InputDevice` from the [`input-device-handler`
 * package](https://www.npmjs.com/package/input-device-handler). Used in {@link readRawInputStage}
 * and {@link SimpleInputDevicesMap}.
 *
 * @category Internal
 */
export type SimpleInputDevice = Pick<InputDevice, 'deviceKey' | 'deviceName' | 'deviceType'>;
/**
 * A collection of all current simple input devices. Used in {@link readRawInputStage} and
 * {@link ReadRawInputStageState}.
 *
 * @category Internal
 */
export type SimpleInputDevicesMap = Partial<Record<InputDeviceKey, SimpleInputDevice>>;

/**
 * Maps `AllDevices` to {@link SimpleInputDevicesMap}.
 *
 * @category Util
 */
export function mapToSimpleDevicesMap(
    currentDevices: SelectFrom<
        AllDevices,
        {
            [Key in InputDeviceKey]?: {
                deviceName: true;
                deviceType: true;
            };
        }
    >,
): SimpleInputDevicesMap {
    return mapObjectValues(currentDevices, (deviceKey, device): SimpleInputDevice => {
        return {
            deviceKey,
            deviceName: device.deviceName,
            deviceType: device.deviceType,
        };
    });
}

/**
 * A mapping of gamepad keys that simply allows them to be interpreted as different keys. This is
 * useful for mapping a controller in any port to any other port. For example, mapping the
 * controller in port 4 to port 1.
 *
 * @category Internal
 */
export type GamepadKeyMap = Record<GamepadInputDeviceKey, GamepadInputDeviceKey>;

/**
 * Default value for {@link GamepadKeyMap}.
 *
 * @category Internal
 */
export const defaultGamepadKeyMap: Readonly<GamepadKeyMap> = {
    [GamepadInputDeviceKey.Gamepad1]: GamepadInputDeviceKey.Gamepad1,
    [GamepadInputDeviceKey.Gamepad2]: GamepadInputDeviceKey.Gamepad2,
    [GamepadInputDeviceKey.Gamepad3]: GamepadInputDeviceKey.Gamepad3,
    [GamepadInputDeviceKey.Gamepad4]: GamepadInputDeviceKey.Gamepad4,
};

/**
 * All state used by and set by {@link readRawInputStage}.
 *
 * @category Internal
 */
export type ReadRawInputStageState = {
    deviceHandler: Pick<InputDeviceHandler, 'readAllDevices'>;
    rawInputs?: RawInputs | undefined;
    currentInputDevices?: SimpleInputDevicesMap | undefined;
    /**
     * If no model map is provided, the built-in defaults from
     * [gamepad-type](https://www.npmjs.com/package/gamepad-type) are used. If a model map is
     * provided, make sure to also include the default model map (`defaultGamepadModelMap` from
     * gamepad-type) if you want it (as it will not be automatically appended to your provided
     * map).
     */
    gamepadModelMap?: GamepadModelMap | undefined;
    /** Maps gamepads to different gamepad slots. See {@link GamepadKeyMap} for more information. */
    gamepadKeyMap?: GamepadKeyMap | undefined;
    /**
     * If no gamepad layouts are provided, the built-in defaults from
     * [gamepad-type](https://www.npmjs.com/package/gamepad-type) are used. If layouts are provided,
     * make sure to also include the default layouts (`defaultGamepadLayouts` from gamepad-type) if
     * you want them (as they will not be automatically appended to your provided layouts).
     */
    gamepadLayouts?: GamepadLayout[] | undefined;
    /**
     * If no brand map is provided, the built-in defaults from
     * [gamepad-type](https://www.npmjs.com/package/gamepad-type) are used. If a brand map is
     * provided, make sure to also include the default brand map (`defaultGamepadBrandMap` from
     * gamepad-type) if you want it (as it will not be automatically appended to your provided
     * map).
     */
    gamepadBrandMap?: GamepadBrandMap | undefined;
};

/**
 * This stage reads all current devices and device inputs and sets both on the state.
 *
 * @category Stages
 */
export const readRawInputStage = new VirLineStage<ReadRawInputStageState>(
    {
        name: 'read raw input',
    },
    ({state, timeSinceLastUpdate}) => {
        const currentDevices = state.deviceHandler.readAllDevices();

        const rawInputs: RawInputs = mapObject(
            currentDevices,
            (deviceKey: InputDeviceKey, rawDevice) => {
                /**
                 * {@link mapObject} thinks that `rawDevice` is potentially `undefined` but it is
                 * wrong because the input type uses `Partial`, not `| undefined`.
                 */
                const device = rawDevice as NonNullable<typeof rawDevice>;

                const mappedDeviceKey =
                    state.gamepadKeyMap && check.hasKey(state.gamepadKeyMap, deviceKey)
                        ? state.gamepadKeyMap[deviceKey]
                        : deviceKey;

                const deviceInputs: Values<RawInputs> = {};

                Object.values(device.currentInputs).forEach((currentInput) => {
                    const direction = calculateInputDirection(currentInput.inputValue);

                    const previousRawInput = state.rawInputs?.[deviceKey]?.[currentInput.inputName];

                    const duration =
                        previousRawInput?.direction === direction
                            ? {
                                  milliseconds: Math.round(
                                      previousRawInput.duration.milliseconds +
                                          timeSinceLastUpdate.milliseconds,
                                  ),
                              }
                            : {milliseconds: 0};

                    const layout = isGamepadDeviceKey(deviceKey)
                        ? findMatchingGamepadLayout({
                              layouts: state.gamepadLayouts || defaultGamepadLayouts,
                              gamepad: {
                                  deviceName: device.deviceName,
                              },
                              gamepadModelMap: state.gamepadModelMap || defaultGamepadModelMap,
                          })
                        : undefined;

                    const model = isGamepadDeviceKey(deviceKey)
                        ? findMatchingGamepadModel({
                              gamepad: {
                                  deviceName: device.deviceName,
                              },
                              gamepadBrandMap: state.gamepadBrandMap,
                              gamepadModelMap: state.gamepadModelMap,
                          })
                        : undefined;

                    const mappedInputName: string | undefined =
                        layout?.inputMappings[currentInput.inputName];

                    const rawInput: RawInput = {
                        mapped: {
                            deviceKey: mappedDeviceKey,
                            deviceName: model?.gamepadModel || device.deviceName,
                            gamepadBrand: model?.gamepadBrand,
                            inputName: mappedInputName || currentInput.inputName,
                        },
                        deviceKey,
                        deviceName: device.deviceName,
                        deviceType: device.deviceType,
                        direction,
                        duration,
                        inputName: currentInput.inputName,
                        inputValue: currentInput.inputValue,
                    };

                    if (mappedInputName) {
                        deviceInputs[mappedInputName] = rawInput;
                    }

                    deviceInputs[currentInput.inputName] = rawInput;
                });

                return {
                    key: mappedDeviceKey,
                    value: deviceInputs,
                };
            },
        );

        const simpleDevices: SimpleInputDevicesMap = mapToSimpleDevicesMap(currentDevices);

        state.rawInputs = rawInputs;
        state.currentInputDevices = simpleDevices;
    },
);
