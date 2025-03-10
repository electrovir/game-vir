import {readBindingsStage, VirReadBindingsStageDebug} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {stagesPage} from '../top-level-pages.js';

export const readBindingsStagePage = defineBookPage({
    parent: stagesPage,
    title: readBindingsStage.stageId.name,
    defineExamples({defineExample}) {
        defineExample({
            title: 'Debugging',
            render() {
                return html`
                    <p>Using stage readBindingsStage and element VirReadBindingsStageDebug.</p>
                    <${VirReadBindingsStageDebug}></${VirReadBindingsStageDebug}>
                `;
            },
        });
    },
});
