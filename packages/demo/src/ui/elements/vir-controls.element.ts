import {getEnumTypedValues, wrapNumber} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html} from 'element-vir';
import {DemoShapeTypeEnum} from '../../demo-pipeline/demo-game-state';

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

export const VirControls = defineElement<{
    isPaused: boolean;
    currentShapeType: DemoShapeTypeEnum;
}>()({
    tagName: 'vir-controls',
    events: {
        playPipeline: defineElementEvent<boolean>(),
        newShape: defineElementEvent<DemoShapeTypeEnum>(),
    },
    styles: css`
        :host {
            display: flex;
            gap: 16px;
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        const buttons = [
            {
                text: inputs.isPaused ? 'Play' : 'Pause',
                action() {
                    if (inputs.isPaused) {
                        console.log('starting');
                        dispatch(new events.playPipeline(true));
                    } else {
                        console.log('stopping');
                        dispatch(new events.playPipeline(false));
                    }
                },
            },
            {
                text: 'Change shape',
                action() {
                    const nextShape = getNextShape(inputs.currentShapeType);
                    console.info(`Changing shape to ${nextShape}`);
                    dispatch(new events.newShape(nextShape));
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
