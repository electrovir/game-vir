import {ensureError, extractErrorMessage} from '@augment-vir/common';
import {css, defineElementNoInputs, html, listen, perInstance} from 'element-vir';
import {RemoveListenerCallback} from 'game-vir';
import {PipelineFramerateEvent, PipelinePauseEvent} from 'game-vir/src/pipeline-events';
import {DemoShapeTypeEnum} from '../../demo-pipeline/demo-game-modules';
import {createDemoPipeline} from '../../demo-pipeline/demo-pipeline';
import {VirCanvas} from './vir-canvas.element';
import {VirControls} from './vir-controls.element';

export const VirGameVirDemo = defineElementNoInputs({
    tagName: 'vir-game-vir-demo',
    styles: css`
        :host {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
            overflow: hidden;
            gap: 32px;
            max-width: 100%;
            max-height: 100%;
        }

        ${VirCanvas} {
            border: 1px solid black;
            flex-grow: 1;
        }

        .error {
            color: red;
            font-weight: bold;
        }
    `,
    stateInitStatic: {
        gamePipeline: perInstance(createDemoPipeline),
        pipelineListenerRemovers: [] as RemoveListenerCallback[],
        isPaused: true,
        currentShapeType: DemoShapeTypeEnum.Circle,
        error: undefined as Error | undefined,
        framerate: 0,
    },
    initCallback({state, updateState}) {
        updateState({
            pipelineListenerRemovers: [
                state.gamePipeline.addEventListener(PipelinePauseEvent.type, (event) => {
                    updateState({isPaused: event.detail});
                }),
                state.gamePipeline.addEventListener(PipelineFramerateEvent.type, (event) => {
                    updateState({framerate: event.detail});
                }),
                state.gamePipeline.addStateListener(
                    true,
                    [
                        'shape',
                        'type',
                    ],
                    (shapeType) => {
                        console.info('state changed shape');
                        updateState({currentShapeType: shapeType});
                    },
                ),
            ],
        });
    },
    cleanupCallback({state}) {
        state.pipelineListenerRemovers.forEach((remover) => remover());
    },
    renderCallback({state, updateState}) {
        if (state.error) {
            return html`
                <p class="error">${extractErrorMessage(state.error)}</p>
            `;
        }

        return html`
            <${VirControls.assign({
                currentShapeType: state.currentShapeType,
                isPaused: state.isPaused,
            })}
                ${listen(VirControls.events.newShape, (event) => {
                    state.gamePipeline.update({stateChange: {shape: {type: event.detail}}});
                })}
                ${listen(VirControls.events.stutter, () => {
                    state.gamePipeline.update({stateChange: {shouldStutter: true}});
                })}
                ${listen(VirControls.events.playPipeline, (event) => {
                    if (event.detail) {
                        state.gamePipeline.startPipelineLoop();
                    } else {
                        state.gamePipeline.stopPipelineLoop();
                    }
                })}
            ></${VirControls}>
            <p>FPS: ${state.framerate}</p>
            <${VirCanvas}
                ${listen(VirCanvas.events.canvasCreate, (event) => {
                    try {
                        const canvas = event.detail;
                        const renderContext = canvas.getContext('2d');
                        if (!renderContext) {
                            throw new Error('Failed to get 2d render context from canvas element.');
                        }
                        state.gamePipeline.update({
                            executionContextChange: {canvas, renderContext},
                        });
                        state.gamePipeline.startPipelineLoop();
                    } catch (caught) {
                        updateState({error: ensureError(caught)});
                    }
                })}
            ></${VirCanvas}>
        `;
    },
});
