import {addPercent, wait, wrapNumber} from '@augment-vir/common';
import {GameModule} from 'game-vir';

export enum DemoShapeTypeEnum {
    Circle = 'circle',
    Square = 'square',
    Triangle = 'triangle',
}

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
    {
        canvasSize: {
            width: number;
            height: number;
        };
        shape: {
            color: {
                h: number;
                s: number;
                l: number;
            };
            type: DemoShapeTypeEnum;
        };
    },
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

/** Intentionally cause a render stuff. */
export const stutterModule: GameModule<{shouldStutter: boolean}> = {
    moduleId: {
        name: 'stutter',
        version: 1,
    },
    async runModule({gameState}) {
        if (!gameState.shouldStutter) {
            return undefined;
        }

        await wait(1000);

        return {
            stateUpdate: {
                shouldStutter: false,
            },
        };
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
            stateUpdate: {
                canvasSize: {
                    width: executionContext.canvas.width,
                    height: executionContext.canvas.height,
                },
            },
        };
    },
};

export const debugModule: GameModule = {
    moduleId: {
        name: 'debug',
        version: 1,
    },
    runModule() {
        console.log('render');
        return undefined;
    },
};

export const rainbowModule: GameModule<{
    shape: {
        color: {
            h: number;
            s: number;
            l: number;
        };
        huePerMillisecond: number;
    };
}> = {
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
            stateUpdate: {
                shape: {
                    color: {
                        h: newHue,
                    },
                },
            },
        };
    },
};
