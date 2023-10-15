import {addPercent, PickDeep, wrapNumber} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {DemoGameState, DemoShapeTypeEnum} from './demo-game-state';

function calculateTrianglePoints(center: {x: number; y: number}, size: number) {
    const radius = size / 2;
    const angles = [
        (Math.PI * (90 + 120)) / 180,
        (Math.PI * (90 + 240)) / 180,
    ] as const;

    return [
        [
            center.x,
            center.y - radius,
        ],
        [
            center.x + radius * Math.cos(angles[0]),
            center.y - radius * Math.sin(angles[0]),
        ],
        [
            center.x + radius * Math.cos(angles[1]),
            center.y - radius * Math.sin(angles[1]),
        ],
    ] as const;
}

export const renderShapeModule: GameModule<
    PickDeep<DemoGameState, ['canvasSize' | 'shape', 'width' | 'height' | 'color' | 'type']>,
    {renderContext: CanvasRenderingContext2D | undefined}
> = {
    moduleId: {
        name: 'render canvas',
        version: 1,
    },
    runModule({gameState, executionContext}) {
        if (!executionContext.renderContext) {
            return undefined;
        }

        const size = Math.min(gameState.canvasSize.width, gameState.canvasSize.height) / 2;

        const colorString = `hsl(${[
            gameState.shape.color.h,
            addPercent(gameState.shape.color.s),
            addPercent(gameState.shape.color.l),
        ].join(' ')})`;

        executionContext.renderContext.fillStyle = 'white';
        executionContext.renderContext.fillRect(
            0,
            0,
            gameState.canvasSize.width,
            gameState.canvasSize.height,
        );
        const canvasCenter = {
            x: gameState.canvasSize.width / 2,
            y: gameState.canvasSize.height / 2,
        };

        executionContext.renderContext.fillStyle = colorString;
        if (gameState.shape.type === DemoShapeTypeEnum.Square) {
            const squareSize = size / Math.sqrt(2);
            const squareStart = {
                x: canvasCenter.x - squareSize / 2,
                y: canvasCenter.y - squareSize / 2,
            };
            executionContext.renderContext.fillRect(
                squareStart.x,
                squareStart.y,
                squareSize,
                squareSize,
            );
        } else if (gameState.shape.type === DemoShapeTypeEnum.Circle) {
            executionContext.renderContext.beginPath();
            executionContext.renderContext.arc(
                canvasCenter.x,
                canvasCenter.y,
                size / 2,
                0,
                Math.PI * 2,
                true,
            );
            executionContext.renderContext.fill();
        } else if (gameState.shape.type === DemoShapeTypeEnum.Triangle) {
            executionContext.renderContext.beginPath();
            const trianglePoints = calculateTrianglePoints(canvasCenter, size);
            executionContext.renderContext.moveTo(trianglePoints[0][0], trianglePoints[0][1]);
            executionContext.renderContext.lineTo(trianglePoints[1][0], trianglePoints[1][1]);
            executionContext.renderContext.lineTo(trianglePoints[2][0], trianglePoints[2][1]);
            executionContext.renderContext.fill();
        }

        return undefined;
    },
};

export const canvasSizeModule: GameModule<
    {canvasSize: {height: number; width: number}},
    {canvas: HTMLCanvasElement | undefined}
> = {
    moduleId: {
        name: 'canvas size',
        version: 1,
    },
    runModule({executionContext}) {
        if (!executionContext.canvas) {
            return undefined;
        }

        return {
            stateChange: {
                canvasSize: {
                    width: executionContext.canvas.width,
                    height: executionContext.canvas.height,
                },
            },
        };
    },
};

export const debugModule: GameModule<DemoGameState> = {
    moduleId: {
        name: 'debug',
        version: 1,
    },
    runModule() {
        console.log('render');
        return undefined;
    },
};

export const rainbowModule: GameModule<
    PickDeep<DemoGameState, ['shape', 'color' | 'huePerMillisecond']>
> = {
    moduleId: {
        name: 'rainbow',
        version: 1,
    },
    runModule({gameState, millisecondsSinceLastFrame}) {
        const newHue = wrapNumber({
            value:
                gameState.shape.color.h +
                millisecondsSinceLastFrame * gameState.shape.huePerMillisecond,
            max: 360,
            min: 0,
        });

        return {
            stateChange: {
                shape: {
                    color: {
                        h: newHue,
                    },
                },
            },
        };
    },
};
