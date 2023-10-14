import {css, defineElementNoInputs, html, listen} from 'element-vir';
import {DemoGamePipeline, createDemoPipeline} from '../../demo-pipeline';
import {VirCanvas} from './vir-canvas.element';
import {VirControls} from './vir-controls.element';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
            overflow: hidden;
            gap: 32px;
        }

        ${VirCanvas} {
            border: 1px solid black;
            flex-grow: 1;
        }
    `,
    stateInitStatic: {
        gamePipeline: undefined as undefined | DemoGamePipeline,
    },
    renderCallback({updateState, state}) {
        return html`
            <${VirControls.assign({pipeline: state.gamePipeline})}></${VirControls}>
            <${VirCanvas}
                ${listen(VirCanvas.events.canvasContextCreate, (event) => {
                    const newPipeline = createDemoPipeline(event.detail);
                    updateState({gamePipeline: newPipeline});
                    newPipeline.startPipelineLoop();
                })}
            ></${VirCanvas}>
        `;
    },
});
