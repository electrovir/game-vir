import {assertWrap} from '@augment-vir/assert';
import {and, defineShape} from 'object-shape-tester';
import {Graphics, GraphicsContext} from 'pixi.js';
import {Angle, createPixi, defineEntitySuite, entityPositionParamsShape, Vector} from '../index.js';

/** Create an entity suite. */
const {defineEntity, defineLogicEntity, EntityStore} = defineEntitySuite<{movementSpeed: number}>();

/** Define entities. */

/** Define a standard entity (with a view) that bounces back and forth. */
class Block extends defineEntity({
    key: 'Block',
    paramsShape: defineShape(
        and(entityPositionParamsShape, {
            direction: 1,
        }),
    ),
}) {
    public static readonly bonkCount = 20;
    public static readonly graphicContext = new GraphicsContext()
        .rect(0, 0, 10, 10)
        .fill('magenta');

    public override update(): void {
        this.params.x += this.context.movementSpeed * this.params.direction;
        this.params.y += this.context.movementSpeed * this.params.direction;

        if (!this.isInBounds({entirely: true})) {
            this.params.direction = -1 * this.params.direction;
            this.createBonk();
        }
    }

    protected createBonk() {
        const degreesPerBonk = 360 / Block.bonkCount;

        for (let i = 0; i < Block.bonkCount; i++) {
            const move = new Vector(
                BlockBonk.moveSpeed,
                new Angle({degrees: degreesPerBonk * i}, {digits: 4}),
                {digits: 4},
            ).toComponents();
            /** Entities can easily create more entities. */
            this.addEntity(BlockBonk, {
                move,
                ticksSinceCreation: 0,
                x: this.view.x,
                y: this.view.y,
            });
        }
    }

    public override createView() {
        const graphic = new Graphics(Block.graphicContext);

        graphic.x = this.params.x;
        graphic.y = this.params.y;

        return {
            view: graphic,
        };
    }
}

/** Define a standard entity (with a view) that emits from Block when it bounces. */
class BlockBonk extends defineEntity({
    key: 'BlockBonk',
    paramsShape: defineShape(
        and(entityPositionParamsShape, {
            move: {
                x: -1,
                y: -1,
            },
            ticksSinceCreation: -1,
        }),
    ),
}) {
    public static readonly moveSpeed = 4;
    public static readonly maxLife = 20;
    public static readonly graphicContext = new GraphicsContext().rect(0, 0, 4, 4).fill('yellow');

    public override update(): void {
        this.params.ticksSinceCreation++;

        if (this.params.ticksSinceCreation > BlockBonk.maxLife) {
            /** Automatically clean up the bounce particles when they reach their end of life. */
            this.destroy();
            return;
        }
        this.view.alpha = Math.min(
            1,
            (BlockBonk.maxLife + 3 - this.params.ticksSinceCreation) / BlockBonk.maxLife,
        );

        this.params.x += this.params.move.x;
        this.params.y += this.params.move.y;
    }

    public override createView() {
        const graphic = new Graphics(BlockBonk.graphicContext);

        graphic.x = this.params.x;
        graphic.y = this.params.y;

        return {
            view: graphic,
        };
    }
}

/** Define a logic entity which doesn't have a Pixi.js view. */
class Fps extends defineLogicEntity({
    key: 'Fps',
    paramsShape: undefined,
}) {
    protected fpsCounts: number[] = [];

    public override update(): void {
        this.fpsCounts.push(this.pixi.ticker.FPS);
        if (this.fpsCounts.length > 100) {
            const averageFps = Math.round(
                this.fpsCounts.reduce((a, b) => a + b) / this.fpsCounts.length,
            );
            this.fpsCounts = [];
            assertWrap.instanceOf(document.body.querySelector('.fps'), HTMLElement).innerText =
                String(averageFps);
        }
    }
}

/** Create the view */

const entityStore = new EntityStore({
    pixi: await createPixi({
        background: 'black',
        height: 500,
        width: 500,
    }),
    context: {
        movementSpeed: 6,
    },
});
document.body.append(entityStore.pixi.canvas);

/** Add entities to the view. */
entityStore.addEntity(Block, {direction: 1, x: 0, y: 0});
entityStore.addEntity(Block, {direction: -1, x: 250, y: 0});
entityStore.addEntity(Block, {direction: 1, x: 0, y: 250});
entityStore.addEntity(Fps);

/** Start updates. */
entityStore.pixi.ticker.add(() => {
    entityStore.updateAllEntities();
});
