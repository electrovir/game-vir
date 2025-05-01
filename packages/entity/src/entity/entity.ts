import {
    makeWritable,
    type JsonCompatibleValue,
    type PartialWithUndefined,
    type RemoveFirstTupleEntry,
} from '@augment-vir/common';
import {defineShape, type ShapeDefinition} from 'object-shape-tester';
import {type Application, type ViewContainer} from 'pixi.js';
import {type Constructor} from 'type-fest';

/**
 * Parameters for {@link EntityStore.addEntity}. Flattens itself to an empty array if there are no
 * entity constructor params.
 *
 * @category Internal
 */
export type AddEntityParams<EntityConstructor extends Constructor<BaseEntity>> =
    RemoveFirstTupleEntry<
        RemoveFirstTupleEntry<RemoveFirstTupleEntry<ConstructorParameters<EntityConstructor>>>
    > extends [undefined]
        ? []
        : RemoveFirstTupleEntry<
              RemoveFirstTupleEntry<RemoveFirstTupleEntry<ConstructorParameters<EntityConstructor>>>
          >;

/**
 * The top level storage class of all entities. Add entities with {@link EntityStore.addEntity}.
 *
 * @category Internal
 */
export class EntityStore<Context> {
    /** All current child entities. */
    public readonly entities = new Set<BaseEntity>();
    /** If true, this entity store should no longer be used or operated upon. */
    public readonly isDestroyed: boolean = false;

    constructor(
        public readonly pixiApp: Application,
        public readonly context: Context,
    ) {}

    /**
     * Run `.update()` on all current entities. If any entity's get marked as destroyed during their
     * update, then they will be removed from the set of entities.
     *
     * @example
     *
     * ```ts
     * import {createEntitySuite, createPixiApp} from '@game-vir/entity';
     *
     * const {defineEntity, entityStore, pixiApp} = createEntitySuite(
     *     await createPixiApp({
     *         background: 'black',
     *         height: 500,
     *         width: 500,
     *     }),
     *     {
     *         movementSpeed: 6,
     *     },
     * );
     *
     * class Block extends defineEntity({
     *     key: 'Block',
     *     serializationShape: entityPositionParamsShape,
     * }) {
     *     public override update(): void {
     *         this.view.x += this.context.movementSpeed;
     *         this.view.y += this.context.movementSpeed;
     *     }
     *
     *     public override createView(): ViewContainer {
     *         const graphic = new Graphics().rect(0, 0, 100, 100).fill('red');
     *
     *         graphic.x = this.params.x;
     *         graphic.y = this.params.y;
     *
     *         return graphic;
     *     }
     * }
     *
     * entityStore.addEntity(Block, {x: 15, y: 20});
     *
     * pixiApp.ticker.add(() => {
     *     // update all entities
     *     entityStore.updateAllEntities();
     * });
     * ```
     */
    public updateAllEntities() {
        if (this.isDestroyed) {
            throw new Error('Cannot operate on destroyed entity store.');
        }
        this.entities.forEach((entity) => {
            entity.update();
            if (entity.isDestroyed) {
                this.entities.delete(entity);
            }
        });
    }

    /**
     * Add a new entity to this entity store.
     *
     * @example
     *
     * ```ts
     * import {createEntitySuite, createPixiApp} from '@game-vir/entity';
     *
     * const {defineEntity, entityStore, pixiApp} = createEntitySuite(
     *     await createPixiApp({
     *         background: 'black',
     *         height: 500,
     *         width: 500,
     *     }),
     *     {
     *         movementSpeed: 6,
     *     },
     * );
     *
     * class Block extends defineEntity({
     *     key: 'Block',
     *     serializationShape: entityPositionParamsShape,
     * }) {
     *     public override update(): void {
     *         this.view.x += this.context.movementSpeed;
     *         this.view.y += this.context.movementSpeed;
     *     }
     *
     *     public override createView(): ViewContainer {
     *         const graphic = new Graphics().rect(0, 0, 100, 100).fill('red');
     *
     *         graphic.x = this.params.x;
     *         graphic.y = this.params.y;
     *
     *         return graphic;
     *     }
     * }
     *
     * // add an entity
     * entityStore.addEntity(Block, {x: 15, y: 20});
     *
     * pixiApp.ticker.add(() => {
     *     entityStore.updateAllEntities();
     * });
     * ```
     */
    public addEntity<const EntityConstructor extends Constructor<BaseEntity>>(
        entityClass: EntityConstructor,
        ...params: AddEntityParams<EntityConstructor>
    ): InstanceType<EntityConstructor> {
        if (this.isDestroyed) {
            throw new Error('Cannot operate on destroyed entity store.');
        }
        const child = new entityClass(this, this.pixiApp, this.context, ...params);
        this.entities.add(child);
        return child as InstanceType<EntityConstructor>;
    }

    /** Destroys the entity store and all entities contained inside it. */
    public destroy() {
        if (this.isDestroyed) {
            throw new Error('Entity store is already destroyed.');
        }
        makeWritable(this).isDestroyed = true;
        this.entities.forEach((entity) => entity.destroy());
        this.entities.clear();
    }
}

/**
 * Shape definition for {@link EntityPositionParams}.
 *
 * @category Util
 */
export const entityPositionParamsShape = defineShape({
    x: -1,
    y: -1,
});

/**
 * Base entity serialization. All entities should at least include these properties.
 *
 * @category Internal
 */
export type EntityPositionParams = typeof entityPositionParamsShape.runtimeType;

/**
 * Parameters for an entity's constructor.
 *
 * @category Util
 */
export type EntityConstructorParams<Serialized, Context> = [
    entityStore: EntityStore<Context>,
    pixiApp: Application,
    context: Context,
    params: Serialized,
];

/**
 * Base entity class, types, and functionality.
 *
 * @category Internal
 */
export abstract class BaseEntity<Context = any, Params extends JsonCompatibleValue = any> {
    /**
     * This key is used for deserialization of entities to track which class needs to be
     * constructed.
     *
     * Override this with your entity's key. You cannot have duplicate keys loaded at the same time.
     */
    public static readonly entityKey: string = 'BaseEntity';
    /** Shape definition of this entity's parameters. */
    public static readonly serializationShape: ShapeDefinition<any, any> | undefined =
        entityPositionParamsShape;

    /** If true, this entity should no longer be used or operated upon. */
    public get isDestroyed() {
        return !this.entityStore.entities.has(this);
    }

    constructor(
        public readonly entityStore: EntityStore<Context>,
        public readonly pixiApp: Application,
        public readonly context: Context,
        public params: Params,
    ) {}

    /**
     * Called every game tick. Run all entity updates in here. This should be overridden in all
     * entity definition classes.
     */
    public abstract update(): void;

    /** Add a new entity to the entity store. */
    public addEntity<const EntityConstructor extends Constructor<BaseEntity>>(
        entityClass: EntityConstructor,
        ...params: AddEntityParams<EntityConstructor>
    ): InstanceType<EntityConstructor> {
        if (this.isDestroyed) {
            throw new Error('Cannot add entity through destroyed entity.');
        }
        const child = new entityClass(this.entityStore, this.pixiApp, this.context, ...params);
        this.entityStore.entities.add(child);
        return child as InstanceType<EntityConstructor>;
    }

    /** Destroy the current entity, stop its updates, and remove it from the view. */
    public destroy() {
        this.entityStore.entities.delete(this);
    }
}

/**
 * Base view entity class, types, and functionality.
 *
 * @category Internal
 */
export abstract class ViewEntity<
    Context = any,
    Params extends JsonCompatibleValue = any,
> extends BaseEntity<Context, Params> {
    /** The entity's PixiJS view. */
    public view: ViewContainer;

    constructor(
        entityStore: EntityStore<Context>,
        pixiApp: Application,
        context: Context,
        params: Params,
    ) {
        super(entityStore, pixiApp, context, params);
        this.view = this.createView();
        pixiApp.stage.addChild(this.view);
    }

    /**
     * Creates the entity's PixiJS view. This will be called on entity construction and added to the
     * PixiJS application stage.
     */
    public abstract createView(): ViewContainer;

    /** Detects if the current entity is still within the bounds of the render canvas. */
    public isInBounds(
        options: PartialWithUndefined<{
            /**
             * If `true`, the entire entity's bounds must be within the canvas's bounds. If `false`,
             * any portion of the entity being within the canvas bounds is counted.
             *
             * @default false
             */
            entirely?: boolean;
        }> = {},
    ): boolean {
        if (options.entirely) {
            return this.pixiApp.screen.containsRect(this.view.getBounds().rectangle);
        } else {
            return this.pixiApp.screen.intersects(this.view.getBounds().rectangle);
        }
    }

    /** Destroy the current entity, stop its updates, and remove it from the view. */
    public override destroy() {
        super.destroy();
        this.view.destroy({children: true});
    }
}
