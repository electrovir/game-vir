import {InputDeviceType} from 'input-device-handler';
import {InputDirection} from '../stages/read-raw-input.stage.js';

/**
 * Input device types mapped to corresponding emojis (🎮, ⌨️, or 🖱).
 *
 * @category Util
 */
export const deviceEmojis: Readonly<Record<InputDeviceType, string>> = {
    [InputDeviceType.Gamepad]: `🎮`,
    [InputDeviceType.Keyboard]: `⌨️`,
    [InputDeviceType.Mouse]: `🖱`,
};

/**
 * Input directions mapped to corresponding emojis (➖, or ➕).
 *
 * @category Util
 */
export const directionEmojis: Readonly<Record<InputDirection, string>> = {
    [InputDirection.Flat]: '',
    [InputDirection.Negative]: '➖',
    [InputDirection.Positive]: '➕',
};
