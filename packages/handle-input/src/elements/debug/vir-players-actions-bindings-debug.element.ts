import {getObjectTypedEntries} from '@augment-vir/common';
import {css, defineElement, html} from 'element-vir';
import {ActionsBindingsMap, PlayersActionsBindingsMap} from '../../stages/read-actions.stage';

/**
 * An element for debugging that displays all given action bindings for all players.
 *
 * @category Debug
 */
export const VirPlayersActionsBindingsDebug = defineElement<{
    playersActionsBindingsMap: PlayersActionsBindingsMap;
}>()({
    tagName: 'vir-players-actions-bindings-debug',
    styles: css`
        h3 {
            margin: 4px;
        }
    `,
    renderCallback({inputs}) {
        console.log('2', inputs.playersActionsBindingsMap);

        return getObjectTypedEntries(inputs.playersActionsBindingsMap).map(
            ([
                playerPosition,
                actionsBindingsMap,
            ]) => {
                return html`
                    <h3>Player ${playerPosition}</h3>
                    <${VirActionsBindingsDebug.assign({
                        actionsBindingsMap,
                    })}></${VirActionsBindingsDebug}>
                `;
            },
        );
    },
});

/**
 * An element for debugging that displays all given action bindings for a single player.
 *
 * Used within {@link VirPlayersActionsBindingsDebug}
 *
 * @category Debug
 */
export const VirActionsBindingsDebug = defineElement<{
    actionsBindingsMap: ActionsBindingsMap;
}>()({
    tagName: 'vir-actions-bindings-debug',
    styles: css`
        h4 {
            margin: 4px;
        }
    `,
    renderCallback({inputs}) {
        return Object.entries(inputs.actionsBindingsMap).map(
            ([
                actionName,
                bindings,
            ]) => {
                const bindingsRows = bindings.map((binding) => {
                    return html`
                        <tr>
                            <td>${binding.deviceKey}:</td>
                            <td>${binding.inputName}</td>
                        </tr>
                    `;
                });

                return html`
                    <section class="binding">
                        <h4>${actionName}</h4>
                        <table><tbody>${bindingsRows}</tbody></table>
                    </section>
                `;
            },
        );
    },
});
