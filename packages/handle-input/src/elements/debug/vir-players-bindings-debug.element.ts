import {getObjectTypedEntries} from '@augment-vir/common';
import {css, defineElement, html} from 'element-vir';
import {BindingsMap, PlayersBindingsMap} from '../../stages/read-bindings.stage';

/**
 * An element for debugging that displays all given bindings for all players.
 *
 * @category Debug
 */
export const VirPlayersBindingsDebug = defineElement<{
    playersBindingsMap: PlayersBindingsMap;
}>()({
    tagName: 'vir-players-bindings-debug',
    styles: css`
        h3 {
            margin: 4px;
        }
    `,
    renderCallback({inputs}) {
        return getObjectTypedEntries(inputs.playersBindingsMap).map(
            ([
                playerPosition,
                bindingsMap,
            ]) => {
                return html`
                    <h3>Player ${playerPosition}</h3>
                    <${VirBindingsDebug.assign({
                        bindingsMap: bindingsMap,
                    })}></${VirBindingsDebug}>
                `;
            },
        );
    },
});

/**
 * An element for debugging that displays all given bindings for a single player.
 *
 * Used within {@link VirPlayersBindingsDebug}
 *
 * @category Debug
 */
export const VirBindingsDebug = defineElement<{
    bindingsMap: BindingsMap;
}>()({
    tagName: 'vir-bindings-debug',
    styles: css`
        h4 {
            margin: 4px;
        }
    `,
    renderCallback({inputs}) {
        return getObjectTypedEntries(inputs.bindingsMap).map(
            ([
                bindingName,
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
                        <h4>${bindingName}</h4>
                        <table><tbody>${bindingsRows}</tbody></table>
                    </section>
                `;
            },
        );
    },
});
