import {getObjectTypedEntries, mapObjectValues, PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, html} from 'element-vir';
import {CurrentInputsChangedEvent, InputDeviceHandler, InputDeviceKey} from 'input-device-handler';
import {isMouseMovement} from '../util/is-mouse-movement.js';
import {VirDeviceChip} from './vir-device-chip.element.js';

/** Each timestamp indicates the last time that this device has an input made. */
type DeviceTimestampMap = Partial<Record<InputDeviceKey, {timestamp: number}>>;

/**
 * Lists all currently connected devices and highlights each as they are activated.
 *
 * @category Elements
 */
export const VirDeviceList = defineElement<
    Readonly<
        PartialWithUndefined<{
            inputDeviceHandler: Readonly<InputDeviceHandler>;
            omitDevices: ReadonlyArray<InputDeviceKey>;
            showMouseMovement: boolean;
            /** Use this to override the default glow pulse colors */
            glowColors: ReadonlyArray<string>;
            /**
             * Set this to `true` to disable the devices glow pulses when device activity is
             * detected.
             *
             * @default `false`
             */
            disableGlowPulses: boolean;
        }>
    >
>()({
    tagName: 'vir-device-list',
    styles: css`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }
    `,
    state() {
        return {
            deviceHandler: undefined as undefined | Readonly<InputDeviceHandler>,
            deviceTimestamps: {} as DeviceTimestampMap,
            /** Used to clean up device handler listeners. */
            cleanup: undefined as undefined | (() => void),
        };
    },
    init({inputs, state, updateState}) {
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
                      if (!inputs.showMouseMovement && isMouseMovement(newInput)) {
                          return;
                      }

                      deviceTimestamps[newInput.deviceKey] = {timestamp: Date.now()};
                  });

                  updateState({deviceTimestamps: deviceTimestamps});
              });

        updateState({
            cleanup: unListen,
            deviceTimestamps: readDeviceTimestamps(),
        });
    },
    cleanup({inputs, state, updateState}) {
        state.cleanup?.();

        if (!inputs.inputDeviceHandler) {
            state.deviceHandler?.destroy();
        }

        updateState({
            cleanup: undefined,
            deviceHandler: undefined,
        });
    },
    render({state}) {
        const deviceTemplates = getObjectTypedEntries(state.deviceTimestamps).map(
            ([
                deviceKey,
                deviceTimestamp,
            ]) => {
                return html`
                    <${VirDeviceChip.assign({
                        deviceKey,
                        lastInputTime: deviceTimestamp,
                    })}></${VirDeviceChip}>
                `;
            },
        );

        return deviceTemplates;
    },
});
