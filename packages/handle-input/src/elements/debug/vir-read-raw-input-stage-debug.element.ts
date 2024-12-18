import {PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, html, nothing} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {VirLine} from 'vir-line';
import {RawInputs, readRawInputStage} from '../../stages/read-raw-input.stage.js';

/**
 * An element for debugging {@link readRawInputStage} that displays all current inputs.
 *
 * @category Debug
 */
export const VirReadRawInputStageDebug = defineElement<
    PartialWithUndefined<{
        inputDeviceHandler: InputDeviceHandler;
    }>
>()({
    tagName: 'vir-read-raw-input-stage-debug',
    styles: css`
        :host {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .device {
            min-width: 500px;
        }

        .no-inputs {
            opacity: 0.3;
            font-weight: bold;
        }
    `,
    stateInitStatic: {
        deviceHandler: undefined as undefined | InputDeviceHandler,
        pipeline: undefined as undefined | VirLine<[typeof readRawInputStage]>,
        rawInputs: {} as RawInputs,
    },
    init({state, updateState, inputs}) {
        const deviceHandler =
            state.deviceHandler || inputs.inputDeviceHandler || new InputDeviceHandler();

        if (!state.deviceHandler) {
            updateState({
                deviceHandler,
            });
        }

        const pipeline =
            state.pipeline ||
            new VirLine(
                [readRawInputStage],
                {
                    deviceHandler,
                },
                {
                    init: {
                        startUpdateLoopImmediately: true,
                    },
                },
            );

        if (!state.pipeline) {
            updateState({
                pipeline,
            });
        }

        pipeline.listenToState(true, {rawInputs: true}, (rawInputs) => {
            updateState({
                rawInputs: rawInputs || {},
            });
        });
    },
    cleanup({inputs, state, updateState}) {
        if (!inputs.inputDeviceHandler) {
            /** Only destroy the device handler if it was internally constructed. */
            state.deviceHandler?.destroy();
        }
        state.pipeline?.destroy();

        updateState({
            deviceHandler: undefined,
            pipeline: undefined,
        });
    },
    render({state}) {
        if (!state.deviceHandler || !state.pipeline) {
            return nothing;
        }

        return Object.entries(state.rawInputs).map(
            ([
                deviceKey,
                values,
            ]) => {
                const hasNoValues = !values || Object.keys(values).length === 0;

                const valuesTemplate = hasNoValues
                    ? html`
                          <p class="no-inputs">No inputs</p>
                      `
                    : html`
                          <pre>${JSON.stringify(values, null, 4)}</pre>
                      `;

                return html`
                    <section class="device">
                        <b>${deviceKey}</b>
                        ${valuesTemplate}
                    </section>
                `;
            },
        );
    },
    options: {
        ignoreUnsetInputs: true,
    },
});
