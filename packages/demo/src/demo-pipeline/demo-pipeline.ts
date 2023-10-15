import {GamePipeline} from 'game-vir';
import {canvasSizeModule, rainbowModule, renderShapeModule} from './demo-game-modules';
import {DemoExecutionContext, DemoGameState, demoGameStateShape} from './demo-game-state';

export type DemoGamePipeline = ReturnType<typeof createDemoPipeline>;

export function createDemoPipeline() {
    console.log(demoGameStateShape.defaultValue);

    return new GamePipeline<DemoGameState, DemoExecutionContext>(
        [
            canvasSizeModule,
            renderShapeModule,
            // debugModule,
            rainbowModule,
        ],
        demoGameStateShape.defaultValue,
        {
            canvas: undefined,
            renderContext: undefined,
        },
    );
}
