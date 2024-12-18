import {ElementBookApp} from 'element-book';
import {defineElementNoInputs, html} from 'element-vir';
import {joinUrlPaths} from 'url-vir';
import {allGameVirBookEntries} from './all-book-entries.js';

export const GameVirDemoApp = defineElementNoInputs({
    tagName: 'game-vir-demo-app',
    render() {
        return html`
            <${ElementBookApp.assign({
                internalRouterConfig: {
                    basePath: joinUrlPaths('game-vir', 'book'),
                    useInternalRouter: true,
                },
                pages: allGameVirBookEntries,
                themeColor: '#33ccff',
            })}></${ElementBookApp}>
        `;
    },
});
