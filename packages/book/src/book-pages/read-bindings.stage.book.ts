import {readBindingsStage, VirReadBindingsStageDebug} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {stagesPage} from '../top-level-pages';

export const readBindingsStagePage = defineBookPage({
    parent: stagesPage,
    title: readBindingsStage.stageId.name,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Debugging',
            renderCallback() {
                return html`
                    <${VirReadBindingsStageDebug}></${VirReadBindingsStageDebug}>
                `;
            },
        });
    },
});
