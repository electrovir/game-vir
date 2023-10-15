import {defineShape} from 'object-shape-tester';

export enum DemoShapeTypeEnum {
    Circle = 'circle',
    Square = 'square',
    Triangle = 'triangle',
}

export const demoGameStateShape = defineShape({
    shape: {
        color: {
            h: 0,
            s: 100,
            l: 50,
        },
        huePerMillisecond: 0.1,
        type: DemoShapeTypeEnum.Triangle,
    },
    canvasSize: {
        height: 0,
        width: 0,
    },
});

export type DemoGameState = typeof demoGameStateShape.runTimeType;

export type DemoExecutionContext = {
    canvas: HTMLCanvasElement | undefined;
    renderContext: CanvasRenderingContext2D | undefined;
};
