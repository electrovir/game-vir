import {assertWrap} from '@augment-vir/assert';
import {and, defineShape} from 'object-shape-tester';
import {Graphics, GraphicsContext, type ViewContainer} from 'pixi.js';
import {createEntitySuite} from '../entity/entity-suite.js';
import {entityPositionParamsShape} from '../entity/entity.js';
import {Angle} from '../math/angle.js';
import {Vector} from '../math/vector.js';
import {createPixiApp} from '../pixi.js';

/** Create an entity suite. */
const {defineEntity, entityStore, defineLogicEntity, pixiApp} = createEntitySuite(
    await createPixiApp({
        background: 'black',
        height: 500,
        width: 500,
    }),
    /**
     * Optional: Provide a context variable. This can be a primitive or an object or whatever you
     * want.
     */
    {
        movementSpeed: 6,
    },
);
document.body.append(pixiApp.canvas);

/** Define entities. */

/** Define a standard entity (with a view) that bounces back and forth. */
class Block extends defineEntity({
    key: 'Block',
    serializationShape: defineShape(
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
        this.view.x += this.context.movementSpeed * this.params.direction;
        this.view.y += this.context.movementSpeed * this.params.direction;

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

    public override createView(): ViewContainer {
        const graphic = new Graphics(Block.graphicContext);

        graphic.x = this.params.x;
        graphic.y = this.params.y;

        return graphic;
    }
}

/** Define a standard entity (with a view) that emits from Block when it bounces. */
class BlockBonk extends defineEntity({
    key: 'BlockBonk',
    serializationShape: defineShape(
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

        this.view.x += this.params.move.x;
        this.view.y += this.params.move.y;
    }

    public override createView(): ViewContainer {
        const graphic = new Graphics(BlockBonk.graphicContext);

        graphic.x = this.params.x;
        graphic.y = this.params.y;

        return graphic;
    }
}

/** Define a logic entity which doesn't have a Pixi.js view. */
class Fps extends defineLogicEntity({
    key: 'Fps',
    serializationShape: undefined,
}) {
    protected fpsCounts: number[] = [];

    public override update(): void {
        this.fpsCounts.push(this.pixiApp.ticker.FPS);
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

/** Add entities to the view. */
entityStore.addEntity(Block, {direction: 1, x: 0, y: 0});
entityStore.addEntity(Block, {direction: -1, x: 250, y: 0});
entityStore.addEntity(Block, {direction: 1, x: 0, y: 250});
entityStore.addEntity(Fps);

/** Start updates. */
pixiApp.ticker.add(() => {
    entityStore.updateAllEntities();
});
