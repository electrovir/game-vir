import {ensureType} from '@augment-vir/common';
import {InputDirection, PlayersBindingsMap, VirSimpleAssignBindings} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {elementsPage} from '../top-level-pages.js';

export const virSimpleAssignBindingsPage = defineBookPage({
    parent: elementsPage,
    title: VirSimpleAssignBindings.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'Default',
            styles: css`
                .size {
                    width: 1000px;
                    max-width: 100%;
                }
            `,
            state() {
                return {
                    playersBindings: ensureType<PlayersBindingsMap>({
                        '1': {
                            up: [
                                {
                                    deviceKey: '0',
                                    direction: InputDirection.Positive,
                                    inputName: 'button-2',
                                },
                                {
                                    deviceKey: 'keyboard',
                                    direction: InputDirection.Positive,
                                    inputName: 'button-ArrowUp',
                                },
                            ],
                            down: [
                                {
                                    deviceKey: '0',
                                    direction: InputDirection.Positive,
                                    inputName: 'axe-1',
                                },
                            ],
                        },
                    }),
                };
            },
            render({state, updateState}) {
                return html`
                    <div class="size">
                        <${VirSimpleAssignBindings.assign({
                            bindingNames: [
                                'up',
                                'down',
                                'left',
                                'right',
                                'jump',
                                'pause',
                            ],
                            supportedPlayerCount: 2,
                            playersBindings: state.playersBindings,
                        })}
                            ${listen(
                                VirSimpleAssignBindings.events.playersBindingsUpdate,
                                (event) => {
                                    updateState({
                                        playersBindings: event.detail,
                                    });
                                },
                            )}
                        ></${VirSimpleAssignBindings}>
                    </div>
                `;
            },
        });
    },
});
