import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, html, nothing} from 'element-vir';
import {GamepadInputDeviceKey, InputDeviceHandler} from 'input-device-handler';
import {VirLine} from 'vir-line';
import {
    type PlayersActiveBindingsMap,
    type PlayersBindingsMap,
    readBindingsStage,
} from '../../stages/read-bindings.stage.js';
import {InputDirection, readRawInputStage} from '../../stages/read-raw-input.stage.js';
import {VirPlayersBindingsDebug} from './vir-players-bindings-debug.element.js';

const defaultBindings: Readonly<PlayersBindingsMap> = {
    '1': {
        jump: [
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-Space',
            },
            {
                deviceKey: GamepadInputDeviceKey.Gamepad1,
                direction: InputDirection.Positive,
                /** PlayStation */
                inputName: 'X',
            },
            {
                deviceKey: GamepadInputDeviceKey.Gamepad1,
                direction: InputDirection.Positive,
                /** Xbox and Nintendo */
                inputName: 'A',
            },
        ],
        left: [
            {
                deviceKey: GamepadInputDeviceKey.Gamepad1,
                direction: InputDirection.Positive,
                inputName: 'd-pad-left',
            },
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-KeyA',
            },
            {
                deviceKey: GamepadInputDeviceKey.Gamepad1,
                direction: InputDirection.Positive,
                inputName: 'button-KeyA',
            },
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-KeyJ',
            },
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-ArrowLeft',
            },
        ],
        right: [
            {
                deviceKey: GamepadInputDeviceKey.Gamepad1,
                direction: InputDirection.Positive,
                inputName: 'd-pad-right',
            },
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-KeyD',
            },
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-KeyL',
            },
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-ArrowRight',
            },
        ],
    },
};

/**
 * An element for debugging {@link readBindingsStage} that displays the given bindings as well as all
 * currently active bindings.
 *
 * @category Debug
 */
export const VirReadBindingsStageDebug = defineElement<
    PartialWithUndefined<{
        inputDeviceHandler: InputDeviceHandler;
        bindingsMap: PlayersBindingsMap;
    }>
>()({
    tagName: 'vir-read-bindings-stage-debug',
    styles: css`
        :host {
            display: flex;
            gap: 16px;
            flex-direction: column;
        }

        h2 {
            margin: 4px;
        }

        .no-bindings {
            opacity: 0.3;
            font-weight: bold;
        }
    `,
    state() {
        return {
            deviceHandler: undefined as undefined | InputDeviceHandler,
            pipeline: undefined as
                | undefined
                | VirLine<[typeof readRawInputStage, typeof readBindingsStage]>,
            activeBindings: {} as PlayersActiveBindingsMap,
        };
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
                [
                    readRawInputStage,
                    readBindingsStage,
                ],
                {
                    deviceHandler,
                    playersBindings: inputs.bindingsMap || defaultBindings,
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

        pipeline.listenToState(true, {playersActiveBindings: true}, (activeBindings) => {
            updateState({
                activeBindings: activeBindings || {},
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

        const activeBindingTemplates = Object.entries(state.activeBindings).map(
            ([
                bindingName,
                activeBinding,
            ]) => {
                return html`
                    <section class="binding">
                        <h3>${bindingName}</h3>
                        <pre>${JSON.stringify(activeBinding, null, 4)}</pre>
                    </section>
                `;
            },
        );

        const noBindings = !activeBindingTemplates.length;

        const playersBindingsMap = state.pipeline.currentState.playersBindings || {};

        return html`
            <h2>Bindings</h2>
            <${VirPlayersBindingsDebug.assign({
                playersBindingsMap: playersBindingsMap,
            })}></${VirPlayersBindingsDebug}>
            <h2>Active Bindings</h2>
            ${noBindings
                ? html`
                      <p class="no-bindings">No inputs</p>
                  `
                : activeBindingTemplates}
        `;
    },
});
