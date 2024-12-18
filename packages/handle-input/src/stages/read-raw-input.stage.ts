import {mapObjectValues, type PartialWithUndefined, type SelectFrom} from '@augment-vir/common';
import {
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
 * @category Types
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
 * @category Types
 */
export type RawInput = Omit<InputValueWrapper<InputDeviceKey, any>, 'details'> & {
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
 * @category Types
 */
export type RawInputs = PartialWithUndefined<
    Record<InputDeviceKey, {[InputName in string]: RawInput}>
>;

/**
 * An input device object. A simpler version of `InputDevice` from the [`input-device-handler`
 * package](https://www.npmjs.com/package/input-device-handler). Used in {@link readRawInputStage}
 * and {@link SimpleInputDevicesMap}.
 *
 * @category Types
 */
export type SimpleInputDevice = Pick<InputDevice, 'deviceKey' | 'deviceName' | 'deviceType'>;
/**
 * A collection of all current simple input devices. Used in {@link readRawInputStage} and
 * {@link ReadRawInputStageState}.
 *
 * @category Types
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
 * All state used by and set by {@link readRawInputStage}.
 *
 * @category Types
 */
export type ReadRawInputStageState = {
    deviceHandler: Pick<InputDeviceHandler, 'readAllDevices'>;
    rawInputs?: RawInputs | undefined;
    currentInputDevices?: SimpleInputDevicesMap | undefined;
};

/**
 * This stage reads all current devices and device inputs and sets both on the state.
 *
 * @category Stages
 */
export const readRawInputStage: VirLineStage<ReadRawInputStageState> = {
    stageId: {
        name: 'read raw input',
    },
    executor({state, timeSinceLastUpdate}) {
        const currentDevices = state.deviceHandler.readAllDevices();

        const rawInputs: RawInputs = mapObjectValues(
            currentDevices,
            (deviceKey: InputDeviceKey, rawDevice) => {
                /**
                 * {@link mapObjectValues} thinks that `rawDevice` is potentially `undefined` but it
                 * is wrong because the input type uses `Partial`, not `| undefined`.
                 */
                const device = rawDevice;

                return mapObjectValues(
                    device.currentInputs,
                    (inputName, currentInput): RawInput => {
                        const direction = calculateInputDirection(currentInput.inputValue);

                        const previousRawInput = state.rawInputs?.[deviceKey]?.[inputName];

                        const duration =
                            previousRawInput?.direction === direction
                                ? {
                                      milliseconds:
                                          previousRawInput.duration.milliseconds +
                                          timeSinceLastUpdate.milliseconds,
                                  }
                                : {milliseconds: 0};

                        return {
                            deviceKey,
                            deviceName: device.deviceName,
                            deviceType: device.deviceType,
                            direction,
                            duration,
                            inputName,
                            inputValue: currentInput.inputValue,
                        };
                    },
                );
            },
        );

        const simpleDevices: SimpleInputDevicesMap = mapToSimpleDevicesMap(currentDevices);

        state.rawInputs = rawInputs;
        state.currentInputDevices = simpleDevices;
    },
};
