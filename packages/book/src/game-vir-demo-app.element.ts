import {ElementBookApp} from 'element-book';
import {defineElementNoInputs, html} from 'element-vir';
import {joinUrlParts} from 'url-vir';
import {allGameVirBookEntries} from './all-book-entries';

export const GameVirDemoApp = defineElementNoInputs({
    tagName: 'game-vir-demo-app',
    renderCallback() {
        return html`
            <${ElementBookApp.assign({
                internalRouterConfig: {
                    basePath: joinUrlParts('game-vir', 'book'),
                    useInternalRouter: true,
                },
                entries: allGameVirBookEntries,
                themeColor: '#33ccff',
            })}></${ElementBookApp}>
        `;
    },
});
