import {
    createTypedReadBindingsStage,
    group,
    InputDirection,
    MenuNavBinding,
    MenuNavController,
    MenuNavState,
    nav,
    readRawInputStage,
} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {css, defineElementNoInputs, html, perInstance} from 'element-vir';
import {InputDeviceHandler, InputDeviceKey} from 'input-device-handler';
import {VirLine, VirLineWithState} from 'vir-line';
import {elementsPage} from '../top-level-pages.js';

const VirMenuNavTest = defineElementNoInputs({
    tagName: 'vir-menu-nav-test',
    styles: css`
        :host {
            display: flex;
            gap: 32px;
        }

        .row {
            display: flex;
            gap: 8px;
        }

        .row > * {
            flex-grow: 1;
        }

        section {
            display: flex;
            gap: 8px;
            flex-direction: column;
            width: 400px;
        }

        .cell {
            border: 2px solid dodgerblue;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `,
    stateInitStatic: {
        menuNavController: undefined as undefined | MenuNavController,
        virLine: undefined as undefined | VirLineWithState<MenuNavState>,
        deviceHandler: perInstance(() => new InputDeviceHandler({disableMouseMovement: true})),
    },
    init({host, state, updateState}) {
        const virLine =
            state.virLine ||
            new VirLine(
                [
                    readRawInputStage,
                    createTypedReadBindingsStage<MenuNavBinding>(),
                ],
                {
                    deviceHandler: state.deviceHandler,
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
            updateState({
                menuNavController: new MenuNavController(host, virLine),
            });
        }
    },
    cleanup({state, updateState}) {
        state.menuNavController?.destroy();
        updateState({menuNavController: undefined});
    },
    render() {
        return html`
            <section ${nav(group)}>
                <div class="cell" ${nav()}>Cell</div>
                <div class="cell" ${nav()}>Cell</div>
            </section>
            <section ${nav(group)}>
                <div class="row">
                    <div class="cell" ${nav(0, 0)}>Cell</div>
                    <div class="cell" ${nav(1, 0)}>Cell</div>
                </div>
                <div class="row">
                    <div class="cell" ${nav(0, 1)}>Cell</div>
                    <div class="cell" ${nav(1, 1)}>Cell</div>
                </div>
            </section>
        `;
    },
});

export const menuNavPage = defineBookPage({
    title: MenuNavController.name,
    parent: elementsPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'example',
            render() {
                return html`
                    (use wasd + qe)
                    <br />
                    <br />
                    <${VirMenuNavTest}></${VirMenuNavTest}>
                `;
            },
        });
    },
});
