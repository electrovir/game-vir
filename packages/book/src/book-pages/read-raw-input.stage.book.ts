import {readRawInputStage, VirReadRawInputStageDebug} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {stagesPage} from '../top-level-pages.js';

export const readRawInputStagePage = defineBookPage({
    parent: stagesPage,
    title: readRawInputStage.stageId.name,
    defineExamples({defineExample}) {
        defineExample({
            title: 'Debugging',
            render() {
                return html`
                    <p>Using stage readRawInputStage and element VirReadRawInputStageDebug.</p>
                    <${VirReadRawInputStageDebug}></${VirReadRawInputStageDebug}>
                `;
            },
        });
    },
});
