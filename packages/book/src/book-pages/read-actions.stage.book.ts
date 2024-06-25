import {readActionsStage, VirReadActionsStageDebug} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {stagesPage} from '../top-level-pages';

export const readActionsStagePage = defineBookPage({
    parent: stagesPage,
    title: readActionsStage.stageId.name,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Debugging',
            renderCallback() {
                return html`
                    <${VirReadActionsStageDebug}></${VirReadActionsStageDebug}>
                `;
            },
        });
    },
});
