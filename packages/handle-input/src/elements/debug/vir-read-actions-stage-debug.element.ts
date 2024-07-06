import {PartialAndUndefined} from '@augment-vir/common';
import {css, defineElement, html, nothing} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {VirLine} from 'vir-line';
import {
    PlayersActionsBindingsMap,
    PlayersActiveActionsMap,
    readActionsStage,
} from '../../stages/read-actions.stage';
import {InputDirection, readRawInputStage} from '../../stages/read-raw-input.stage';
import {VirPlayersActionsBindingsDebug} from './vir-players-actions-bindings-debug.element';

const defaultActionBindings: Readonly<PlayersActionsBindingsMap> = {
    '1': {
        jump: [
            {
                deviceKey: 'keyboard',
                direction: InputDirection.Positive,
                inputName: 'button-Space',
            },
        ],
        left: [
            {
                deviceKey: 'keyboard',
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
 * An element for debugging {@link readActionsStage} that displays the given action bindings as well
 * as all currently active actions.
 *
 * @category Debug
 */
export const VirReadActionsStageDebug = defineElement<
    PartialAndUndefined<{
        inputDeviceHandler: InputDeviceHandler;
        actionBindings: PlayersActionsBindingsMap;
    }>
>()({
    tagName: 'vir-read-actions-stage-debug',
    styles: css`
        :host {
            display: flex;
            gap: 16px;
            flex-direction: column;
        }

        h2 {
            margin: 4px;
        }

        .no-actions {
            opacity: 0.3;
            font-weight: bold;
        }
    `,
    stateInitStatic: {
        deviceHandler: undefined as undefined | InputDeviceHandler,
        pipeline: undefined as
            | undefined
            | VirLine<[typeof readRawInputStage, typeof readActionsStage]>,
        activeActions: {} as PlayersActiveActionsMap,
    },
    initCallback({state, updateState, inputs}) {
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
                    readActionsStage,
                ],
                {
                    deviceHandler,
                    playersActionsBindings: inputs.actionBindings || defaultActionBindings,
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

        pipeline.listenToState(true, {playersActiveActions: true}, (activeActions) => {
            updateState({
                activeActions: activeActions || {},
            });
        });
    },
    cleanupCallback({inputs, state, updateState}) {
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
    renderCallback({state}) {
        if (!state.deviceHandler || !state.pipeline) {
            return nothing;
        }

        const activeActionTemplates = Object.entries(state.activeActions).map(
            ([
                actionName,
                activeAction,
            ]) => {
                return html`
                    <section class="action">
                        <h3>${actionName}</h3>
                        <pre>${JSON.stringify(activeAction, null, 4)}</pre>
                    </section>
                `;
            },
        );

        const noActions = !activeActionTemplates.length;

        const playersActionsBindingsMap = state.pipeline.currentState.playersActionsBindings || {};

        return html`
            <h2>Action Bindings</h2>
            <${VirPlayersActionsBindingsDebug.assign({
                playersActionsBindingsMap,
            })}></${VirPlayersActionsBindingsDebug}>
            <h2>Active Actions</h2>
            ${noActions
                ? html`
                      <p class="no-actions">No inputs</p>
                  `
                : activeActionTemplates}
        `;
    },
    options: {
        ignoreUnsetInputs: true,
    },
});
