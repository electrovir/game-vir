import {GamePipeline} from 'game-vir';
import {GamePipelineStates} from '../../../game-vir/src/game-pipeline';
import {
    DemoShapeTypeEnum,
    canvasSizeModule,
    rainbowModule,
    renderShapeModule,
    stutterModule,
} from './demo-game-modules';

export type DemoGamePipeline = ReturnType<typeof createDemoPipeline>;

export type DemoGameState = GamePipelineStates<DemoGamePipeline>['state'];
export type DemoExecutionContext = GamePipelineStates<DemoGamePipeline>['executionContext'];

export function createDemoPipeline() {
    return new GamePipeline(
        [
            canvasSizeModule,
            renderShapeModule,
            // debugModule,
            rainbowModule,
            stutterModule,
        ],
        {
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
                width: 0,
                height: 0,
            },
            shouldStutter: false,
        },
        {
            canvas: undefined,
            renderContext: undefined,
        },
    );
}
