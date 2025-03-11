import {defaultGamepadKeyMap, VirSimpleAssignControllerSlot} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {elementsPage} from '../top-level-pages.js';

export const virSimpleAssignControllerSlotPage = defineBookPage({
    title: VirSimpleAssignControllerSlot.tagName,
    parent: elementsPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'example',
            state() {
                return {
                    gamepadMap: defaultGamepadKeyMap,
                };
            },
            render({updateState, state}) {
                return html`
                    <p>
                        Press a button on a connected controller to show the list.
                        <br />
                        Use wasd to navigate the list.
                        <br />
                        Use qe to move slot assignments.
                        <br />
                        Click or press enter to rumble the selected controller.
                    </p>
                    <${VirSimpleAssignControllerSlot.assign({
                        gamepadKeyMap: state.gamepadMap,
                    })}
                        ${listen(VirSimpleAssignControllerSlot.events.deviceMapChange, (event) => {
                            updateState({
                                gamepadMap: event.detail,
                            });
                        })}
                    ></${VirSimpleAssignControllerSlot}>
                `;
            },
        });
    },
});
