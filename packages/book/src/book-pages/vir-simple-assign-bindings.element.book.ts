import {ensureType} from '@augment-vir/common';
import {
    InputDirection,
    PlayersActionsBindingsMap,
    VirSimpleAssignBindings,
} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {elementsPage} from '../top-level-pages';

export const virSimpleAssignBindingsPage = defineBookPage({
    parent: elementsPage,
    title: VirSimpleAssignBindings.tagName,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Default',
            styles: css`
                .size {
                    width: 1000px;
                    max-width: 100%;
                }
            `,
            stateInitStatic: {
                playersActionsBindings: ensureType<PlayersActionsBindingsMap>({
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
            },
            renderCallback({state, updateState}) {
                return html`
                    <div class="size">
                        <${VirSimpleAssignBindings.assign({
                            actionNames: [
                                'up',
                                'down',
                                'left',
                                'right',
                                'jump',
                                'pause',
                            ],
                            supportedPlayerCount: 2,
                            playersActionsBindings: state.playersActionsBindings,
                        })}
                            ${listen(
                                VirSimpleAssignBindings.events.playersActionsBindingsUpdate,
                                (event) => {
                                    updateState({
                                        playersActionsBindings: event.detail,
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
