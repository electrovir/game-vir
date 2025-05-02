# @game-vir/entity

An entity system for Pixi.js graphics that lends itself well to game use. Also included are some helpful entity maths.

Reference docs: https://electrovir.github.io/game-vir/entity/

## Install

```sh
npm i @game-vir/entity
```

## Usage

Use [`defineEntitySuite`](https://electrovir.github.io/game-vir/entity/functions/defineEntitySuite.html) to get an `entityStore` instance to storing entities and a `defineEntity` method for defining entities.

-   [`defineEntity`](https://electrovir.github.io/game-vir/entity/types/EntitySuite.html#defineentity): use this as the super class of a new entity class definition.

    <!-- example-link: src/readme-examples/define-entity.example.ts -->

    ```TypeScript
    import {Graphics, type ViewContainer} from 'pixi.js';
    import {defineEntitySuite, entityPositionParamsShape} from '@game-vir/entity';

    const {defineEntity} = defineEntitySuite<{movementSpeed: number}>();

    export class Block extends defineEntity({
        key: 'Block',
        paramsShape: entityPositionParamsShape,
    }) {
        public override update(): void {
            this.view.x += this.context.movementSpeed;
            this.view.y += this.context.movementSpeed;
        }

        public override createView(): ViewContainer {
            const graphic = new Graphics().rect(0, 0, 100, 100).fill('red');

            graphic.x = this.params.x;
            graphic.y = this.params.y;

            return graphic;
        }
    }
    ```

-   `entityStore` is primarily interacted with via the [`addEntity`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#addentity) and [`updateAllEntities`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#updateallentities) methods.

    -   [`addEntity`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#addentity): construct a new instance of the given entity class and add it to the entity store. This should be called to construct new entities.
        <!-- example-link: src/readme-examples/add-entity.example.ts -->

        ```TypeScript
        import {createPixiApp, defineEntitySuite} from '@game-vir/entity';
        import {Block} from './define-entity.example.js';

        const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

        const entityStore = new EntityStore({
            pixiApp: await createPixiApp(),
            context: {movementSpeed: 6},
        });

        entityStore.addEntity(Block, {x: 15, y: 20});
        ```

    -   [`updateAllEntities`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#updateallentities): update all entities. This should be called on every game tick or animation frame.
        <!-- example-link: src/readme-examples/update-entities.example.ts -->

        ```TypeScript
        import {createPixiApp, defineEntitySuite} from '@game-vir/entity';

        const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

        const entityStore = new EntityStore({
            pixiApp: await createPixiApp(),
            context: {movementSpeed: 6},
        });

        entityStore.pixiApp.ticker.add(() => {
            entityStore.updateAllEntities();
        });
        ```

## Example

Here's a full usage example. This can be seen in action through the following steps:

1. Clone the repo.
2. Run `npm ci`..
3. Run `cd packages/entity`.
4. Run `npm start`.
5. Open the browser link logged to your console.

<!-- example-link: src/readme-examples/entity.example.ts -->

```TypeScript
import {assertWrap} from '@augment-vir/assert';
import {and, defineShape} from 'object-shape-tester';
import {Graphics, GraphicsContext, type ViewContainer} from 'pixi.js';
import {
    Angle,
    createPixiApp,
    defineEntitySuite,
    entityPositionParamsShape,
    Vector,
} from '@game-vir/entity';

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
    paramsShape: undefined,
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

/** Create the view */

const entityStore = new EntityStore({
    pixiApp: await createPixiApp({
        background: 'black',
        height: 500,
        width: 500,
    }),
    context: {
        movementSpeed: 6,
    },
});
document.body.append(entityStore.pixiApp.canvas);

/** Add entities to the view. */
entityStore.addEntity(Block, {direction: 1, x: 0, y: 0});
entityStore.addEntity(Block, {direction: -1, x: 250, y: 0});
entityStore.addEntity(Block, {direction: 1, x: 0, y: 250});
entityStore.addEntity(Fps);

/** Start updates. */
entityStore.pixiApp.ticker.add(() => {
    entityStore.updateAllEntities();
});
```
