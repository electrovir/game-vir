import {type DeviceInputValue, InputDeviceKey} from 'input-device-handler';

/**
 * Determines if the given device input is for mouse movement or not.
 *
 * @category Util
 */
export function isMouseMovement(
    deviceInput: Readonly<Pick<DeviceInputValue, 'deviceKey' | 'inputName'>>,
): boolean {
    return (
        deviceInput.deviceKey === InputDeviceKey.Mouse &&
        (deviceInput.inputName === 'axe-x' || deviceInput.inputName === 'axe-y')
    );
}
