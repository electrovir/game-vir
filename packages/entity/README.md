# @game-vir/entity

An entity system for Pixi.js graphics that lends itself well to game use. Also included are some helpful entity maths.

Reference docs: https://electrovir.github.io/game-vir/entity/

## Install

```sh
npm i @game-vir/entity
```

## Usage

Use [`defineEntitySuite`](https://electrovir.github.io/game-vir/entity/functions/defineEntitySuite.html) to get a `defineEntity` method for defining entities and an `entityStore` instance for storing entity instances.

-   [`defineEntity`](https://electrovir.github.io/game-vir/entity/types/EntitySuite.html#defineentity): use this as the super class of a new entity class definition.

    <!-- example-link: src/readme-examples/define-entity.example.ts -->

    ```TypeScript
    import {Graphics} from 'pixi.js';
    import {defineEntitySuite, entityPositionParamsShape} from '@game-vir/entity';

    const {defineEntity} = defineEntitySuite<{
        /** Optionally provide a Context type. */
        movementSpeed: number;
    }>();

    export class Block extends defineEntity({
        key: 'Block',
        paramsShape: entityPositionParamsShape,
        paramsMap: {
            hitbox: {
                x: true,
                y: true,
            },
            view: {
                x: true,
                y: true,
            },
        },
    }) {
        public override update(): void {
            this.params.x += this.context.movementSpeed;
            this.params.y += this.context.movementSpeed;
        }

        public override createView() {
            /**
             * View and hitbox position don't need to be manually set their counterparts from params;
             * they will be updated to match them because of the above `paramsMap` definition.
             */
            return {
                view: new Graphics().rect(0, 0, 100, 100).fill('red'),
                /** Hitboxes are optional. */
                hitbox: this.hitboxSystem.createBox({}, 100, 100),
            };
        }
    }
    ```

-   `entityStore` is primarily interacted with via the [`addEntity`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#addentity) and [`updateAllEntities`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#updateallentities) methods.

    -   [`addEntity`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#addentity): construct a new instance of the given entity class and adds it to the entity store. This is the easies way to construct new entities.
        <!-- example-link: src/readme-examples/add-entity.example.ts -->

        ```TypeScript
        import {createPixi, defineEntitySuite} from '@game-vir/entity';
        import {Block} from './define-entity.example.js';

        const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

        const entityStore = new EntityStore({
            pixi: await createPixi(),
            context: {movementSpeed: 6},
            registeredEntities: [Block],
        });

        entityStore.addEntity(Block, {x: 15, y: 20});
        ```

    -   [`updateAllEntities`](https://electrovir.github.io/game-vir/entity/classes/EntityStore.html#updateallentities): update all entities. This calls the `update()` method on every entity instance currently within the entity store. This should be called on every game tick or animation frame.
        <!-- example-link: src/readme-examples/update-entities.example.ts -->

        ```TypeScript
        import {createPixi, defineEntitySuite} from '@game-vir/entity';

        const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

        const entityStore = new EntityStore({
            pixi: await createPixi(),
            context: {movementSpeed: 6},
            registeredEntities: [],
        });

        entityStore.pixi.ticker.add(() => {
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
import {Graphics, GraphicsContext} from 'pixi.js';
import {Angle, createPixi, defineEntitySuite, entityPositionParamsShape, Vector} from '@game-vir/entity';

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
    paramsMap: {
        view: {
            x: true,
            y: true,
        },
    },
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
    paramsMap: {
        view: {
            x: true,
            y: true,
        },
    },
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
    registeredEntities: [
        Block,
        Fps,
        BlockBonk,
    ],
});
document.body.append(entityStore.pixi.canvas);

/** Add entities to the view. */
entityStore.addEntity(Block, {direction: 1, x: 0, y: 0});
entityStore.addEntity(Block, {direction: -1, x: 490, y: 240});
entityStore.addEntity(Block, {direction: 1, x: 2, y: 252});
entityStore.addEntity(Fps);

/** Start updates. */
entityStore.pixi.ticker.add(() => {
    entityStore.updateAllEntities();
});
```

## Common footguns

1. When updating an entity's position, update it by modifying `this.view.x` or `this.view.y`. Do not update the position `this.hitbox` (unless you really know what you're doing and you set `preventAutomaticHitboxUpdates` to `true`).
2. Do not set
