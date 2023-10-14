import {getEnumTypedValues, wrapNumber} from '@augment-vir/common';
import {css, defineElement, html} from 'element-vir';
import {RemoveListenerCallback} from 'game-vir';
import {DemoGamePipeline, DemoShapeTypeEnum} from '../../demo-pipeline';

const allPossibleShapeTypes = getEnumTypedValues(DemoShapeTypeEnum);
function getNextShape(currentShape: DemoShapeTypeEnum): DemoShapeTypeEnum {
    const currentIndex = allPossibleShapeTypes.indexOf(currentShape);
    const nextIndex = wrapNumber({
        max: allPossibleShapeTypes.length - 1,
        min: 0,
        value: currentIndex + 1,
    });

    return allPossibleShapeTypes[nextIndex] ?? allPossibleShapeTypes[0]!;
}

export const VirControls = defineElement<{pipeline: DemoGamePipeline | undefined}>()({
    hostClasses: {
        'vir-controls-disabled': ({inputs}) => !inputs.pipeline,
    },
    tagName: 'vir-controls',
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            gap: 16px;
        }

        ${hostClasses['vir-controls-disabled'].selector} {
            pointer-events: none;
            opacity: 0.5;
        }
    `,
    stateInitStatic: {
        listenerRemovers: [] as RemoveListenerCallback[],
        isPaused: false,
        currentShapeType: DemoShapeTypeEnum.Circle,
    },
    cleanupCallback({state, updateState}) {
        state.listenerRemovers.forEach((removeListener) => removeListener());
        updateState({listenerRemovers: []});
    },
    renderCallback({inputs, state, updateState}) {
        if (inputs.pipeline && !state.listenerRemovers.length) {
            updateState({
                listenerRemovers: [
                    inputs.pipeline.addPauseListener(true, (isPaused) => {
                        updateState({isPaused});
                    }),
                    inputs.pipeline.addStateListener(
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
        }

        const buttons = [
            {
                text: state.isPaused ? 'Play' : 'Pause',
                action() {
                    if (state.isPaused) {
                        console.log('starting');
                        inputs.pipeline?.startPipelineLoop();
                    } else {
                        console.log('stopping');
                        inputs.pipeline?.stopPipelineLoop();
                    }
                },
            },
            {
                text: 'Change shape',
                action() {
                    const nextShape = getNextShape(state.currentShapeType);
                    console.info(`Changing shape to ${nextShape}`);
                    inputs.pipeline?.updateState({
                        shape: {type: nextShape},
                    });
                },
            },
        ];
        return buttons.map((button) => {
            return html`
                <button
                    @click=${() => {
                        button.action();
                    }}
                >
                    ${button.text}
                </button>
            `;
        });
    },
});
