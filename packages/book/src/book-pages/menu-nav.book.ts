import {
    createTypedReadBindingsStage,
    InputDirection,
    MenuNavBinding,
    MenuNavController,
    nav,
    readRawInputStage,
} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {css, defineElementNoInputs, html} from 'element-vir';
import {InputDeviceHandler, InputDeviceKey} from 'input-device-handler';
import {VirLine} from 'vir-line';
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
    state({host}) {
        const deviceHandler = new InputDeviceHandler({disableMouseMovement: true});
        const virLine = new VirLine(
            [
                readRawInputStage,
                createTypedReadBindingsStage<MenuNavBinding>(),
            ],
            {
                deviceHandler,
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

        return {
            menuNavController: new MenuNavController(host, virLine),
            virLine,
            deviceHandler,
        };
    },
    cleanup({state}) {
        state.menuNavController.destroy();
    },
    render({state}) {
        return html`
            <section ${nav(state.menuNavController, {group: true})}>
                <div class="cell" ${nav(state.menuNavController)}>Cell</div>
                <div class="cell" ${nav(state.menuNavController)}>Cell</div>
            </section>
            <section ${nav(state.menuNavController, {group: true})}>
                <div class="row">
                    <div class="cell" ${nav(state.menuNavController, {x: 0, y: 0})}>Cell</div>
                    <div class="cell" ${nav(state.menuNavController, {x: 1, y: 0})}>Cell</div>
                </div>
                <div class="row">
                    <div class="cell" ${nav(state.menuNavController, {x: 0, y: 1})}>Cell</div>
                    <div class="cell" ${nav(state.menuNavController, {x: 1, y: 1})}>Cell</div>
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
