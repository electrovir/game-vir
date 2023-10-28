import {GameModule, GamePipeline} from '..';

function drawCircle(renderContext: CanvasRenderingContext2D) {
    renderContext.fillStyle = 'blue';
    renderContext.beginPath();
    renderContext.arc(100, 100, 50, 0, Math.PI * 2);
    renderContext.fill();
}

const circleAndCounterModule: GameModule<
    {counter: number},
    {
        /** Render contexts cannot be serialized, so they must go here: in the execution context. */
        renderContext: CanvasRenderingContext2D;
    }
> = {
    moduleId: {
        name: 'circle counter',
        version: 1,
    },
    runModule({gameState, executionContext}) {
        drawCircle(executionContext.renderContext);

        return {
            stateChange: {
                counter: gameState.counter + 1,
            },
        };
    },
};

export function setupGamePipeline(canvasElement: HTMLCanvasElement) {
    const renderContext = canvasElement.getContext('2d');

    if (!renderContext) {
        throw new Error('Failed to get render context from canvas element.');
    }

    const myPipeline = new GamePipeline(
        /** GameModule list */
        [circleAndCounterModule],
        /** Initial state. */
        {counter: 0},
        /** Initial execution context. */
        {renderContext},
    );

    myPipeline.startPipelineLoop();
}
