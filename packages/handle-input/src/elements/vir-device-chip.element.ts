import {css, defineElement, html, nothing} from 'element-vir';
import {
    InputDeviceKey,
    inputDeviceKeyToInputDeviceType,
    InputDeviceType,
} from 'input-device-handler';
import {deviceEmojis} from './emoji.js';
import {VirGlowPulse} from './vir-glow-pulse.element.js';

/**
 * Shows a single device and, for gamepads, their port number.
 *
 * @category Elements
 */
export const VirDeviceChip = defineElement<{
    deviceKey: InputDeviceKey;
    /** Used to trigger glowing animations. */
    lastInputTime: Readonly<{timestamp: number}> | undefined;
    hideGamepadPort?: boolean | undefined;
    activityColors?: ReadonlyArray<string> | undefined;
}>()({
    tagName: 'vir-device-chip',
    styles: css`
        :host {
            height: 80px;
            box-sizing: border-box;
            border: 1px solid #eee;
            border-radius: 16px;
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .device-emoji {
            font-size: 2em;
        }
    `,
    render({inputs, host}) {
        const deviceType = inputDeviceKeyToInputDeviceType[inputs.deviceKey];
        const deviceEmoji = deviceEmojis[deviceType];
        /** Only relevant to gamepads. */
        const devicePort = Number(inputs.deviceKey) + 1;
        const labelTemplate =
            deviceType === InputDeviceType.Gamepad && !inputs.hideGamepadPort
                ? html`
                      <span>${devicePort}</span>
                  `
                : nothing;

        const titleText =
            deviceType === InputDeviceType.Gamepad ? `gamepad ${devicePort}` : deviceType;

        if (host.getAttribute('title') !== titleText) {
            host.setAttribute('title', titleText);
        }

        const deviceEmojiTemplate = html`
            <span class="device-emoji">${deviceEmoji}</span>
        `;

        if (inputs.lastInputTime) {
            return html`
                <${VirGlowPulse.assign({
                    pulse: inputs.lastInputTime,
                    glowColors: inputs.activityColors,
                })}>
                    ${deviceEmojiTemplate}
                </${VirGlowPulse}>
                ${labelTemplate}
            `;
        } else {
            return html`
                ${deviceEmojiTemplate} ${labelTemplate}
            `;
        }
    },
});
