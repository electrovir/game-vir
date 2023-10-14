import {PickDeep, addPercent, wrapNumber} from '@augment-vir/common';
import {GameModule, GamePipeline} from 'game-vir';
import {defineShape} from 'object-shape-tester';

export enum DemoShapeTypeEnum {
    Circle = 'circle',
    Square = 'square',
    Triangle = 'triangle',
}

const demoGameStateShape = defineShape({
    shape: {
        color: {
            h: 0,
            s: 100,
            l: 50,
        },
        type: DemoShapeTypeEnum.Triangle,
    },
    canvasSize: {
        height: 0,
        width: 0,
    },
});

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

export type DemoGameState = typeof demoGameStateShape.runTimeType;
export type DemoGamePipeline = GamePipeline<DemoGameState>;

export type DemoPipelineInputs = {
    renderContext: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
};

export function createDemoPipeline({canvas, renderContext}: DemoPipelineInputs): DemoGamePipeline {
    const renderShapeModule: GameModule<DemoGameState> = {
        moduleId: {
            name: 'render canvas',
            version: 1,
        },
        runModule({gameState}) {
            const size = Math.min(gameState.canvasSize.width, gameState.canvasSize.height) / 2;

            const colorString = `hsl(${[
                gameState.shape.color.h,
                addPercent(gameState.shape.color.s),
                addPercent(gameState.shape.color.l),
            ].join(' ')})`;

            renderContext.fillStyle = 'white';
            renderContext.fillRect(0, 0, gameState.canvasSize.width, gameState.canvasSize.height);
            const canvasCenter = {
                x: gameState.canvasSize.width / 2,
                y: gameState.canvasSize.height / 2,
            };

            renderContext.fillStyle = colorString;
            if (gameState.shape.type === DemoShapeTypeEnum.Square) {
                const squareSize = size / Math.sqrt(2);
                const squareStart = {
                    x: canvasCenter.x - squareSize / 2,
                    y: canvasCenter.y - squareSize / 2,
                };
                renderContext.fillRect(squareStart.x, squareStart.y, squareSize, squareSize);
            } else if (gameState.shape.type === DemoShapeTypeEnum.Circle) {
                renderContext.beginPath();
                renderContext.arc(canvasCenter.x, canvasCenter.y, size / 2, 0, Math.PI * 2, true);
                renderContext.fill();
            } else if (gameState.shape.type === DemoShapeTypeEnum.Triangle) {
                renderContext.beginPath();
                const trianglePoints = calculateTrianglePoints(canvasCenter, size);
                renderContext.moveTo(trianglePoints[0][0], trianglePoints[0][1]);
                renderContext.lineTo(trianglePoints[1][0], trianglePoints[1][1]);
                renderContext.lineTo(trianglePoints[2][0], trianglePoints[2][1]);
                renderContext.fill();
            }

            return undefined;
        },
    };

    const canvasSizeModule: GameModule<Pick<DemoGameState, 'canvasSize'>> = {
        moduleId: {
            name: 'canvas size',
            version: 1,
        },
        runModule() {
            return {
                stateChanges: {
                    canvasSize: {
                        width: canvas.width,
                        height: canvas.height,
                    },
                },
            };
        },
    };

    const debugModule: GameModule<DemoGameState> = {
        moduleId: {
            name: 'debug',
            version: 1,
        },
        runModule() {
            console.log('render');
            return undefined;
        },
    };

    const huePerMillisecond = 0.1;

    const rainbowModule: GameModule<PickDeep<DemoGameState, ['shape', 'color']>> = {
        moduleId: {
            name: 'rainbow',
            version: 1,
        },
        runModule({gameState, millisecondsSinceLastFrame}) {
            const newHue = wrapNumber({
                value: gameState.shape.color.h + millisecondsSinceLastFrame * huePerMillisecond,
                max: 360,
                min: 0,
            });

            return {
                stateChanges: {
                    shape: {
                        color: {
                            h: newHue,
                        },
                    },
                },
            };
        },
    };

    console.log(demoGameStateShape.defaultValue);

    return new GamePipeline(
        [
            canvasSizeModule,
            renderShapeModule,
            // debugModule,
            rainbowModule,
        ],
        demoGameStateShape.defaultValue,
    );
}
