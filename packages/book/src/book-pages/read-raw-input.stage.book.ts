import {readRawInputStage, VirReadRawInputStageDebug} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {stagesPage} from '../top-level-pages';

export const readRawInputStagePage = defineBookPage({
    parent: stagesPage,
    title: readRawInputStage.stageId.name,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Debugging',
            renderCallback() {
                return html`
                    <${VirReadRawInputStageDebug}></${VirReadRawInputStageDebug}>
                `;
            },
        });
    },
});
