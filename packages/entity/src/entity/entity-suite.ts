import {type ShapeDefinition} from 'object-shape-tester';
import {type Application} from 'pixi.js';
import {BaseEntity, entityPositionParamsShape, EntityStore, ViewEntity} from './entity.js';

/**
 * Output of {@link DefineViewEntity}.
 *
 * @category Internal
 */
export type DefinedViewEntity<
    EntityKey,
    Context,
    Shape extends ShapeDefinition<any, any> | undefined,
> = typeof ViewEntity<
    Context,
    Shape extends ShapeDefinition<any, any> ? Shape['runtimeType'] : undefined
> & {
    entityKey: EntityKey;
    serializationShape: Shape;
};

/**
 * Type for {@link EntitySuite.defineEntity}.
 *
 * @category Internal
 */
export type DefineViewEntity<Context> = <
    const EntityKey extends string,
    const Shape extends ShapeDefinition<any, any> | undefined,
>({
    key,
    serializationShape,
}: {
    /**
     * This key is used for deserialization of entities to track which class needs to be
     * constructed. Do not use duplicate key strings across multiple entity classes.
     */
    key: EntityKey;
    /**
     * This should contain all parameters necessary to reconstruct this entity from scratch so it
     * can be serialized, sent across the network in JSON format, then reconstructed on another
     * device (for multiplayer support).
     *
     * Make sure to include {@link entityPositionParamsShape} if you want to include the base entity
     * position parameters.
     */
    serializationShape: Shape;
}) => DefinedViewEntity<EntityKey, Context, Shape>;

/**
 * Output of {@link DefineLogicEntity}.
 *
 * @category Internal
 */
export type DefinedLogicEntity<
    EntityKey,
    Context,
    Shape extends ShapeDefinition<any, any> | undefined,
> = typeof BaseEntity<
    Context,
    Shape extends ShapeDefinition<any, any> ? Shape['runtimeType'] : undefined
> & {
    entityKey: EntityKey;
    serializationShape: Shape;
};

/**
 * Type for {@link EntitySuite.defineLogicEntity}.
 *
 * @category Internal
 */
export type DefineLogicEntity<Context> = <
    const EntityKey extends string,
    const Shape extends ShapeDefinition<any, any> | undefined,
>({
    key,
    serializationShape,
}: {
    /**
     * This key is used for deserialization of entities to track which class needs to be
     * constructed. Do not use duplicate key strings across multiple entity classes.
     */
    key: EntityKey;
    /**
     * This should contain all parameters necessary to reconstruct this entity from scratch so it
     * can be serialized, sent across the network in JSON format, then reconstructed on another
     * device (for multiplayer support).
     *
     * Make sure to include {@link entityPositionParamsShape} if you want to include the base entity
     * position parameters.
     */
    serializationShape: Shape;
}) => DefinedLogicEntity<EntityKey, Context, Shape>;

/**
 * Output of {@link createEntitySuite}, used to defining and creating entities.
 *
 * @category Internal
 */
export type EntitySuite<Context> = {
    /**
     * The suite's entity store. Use this store to add your first entities.
     *
     * All defined entities will also have a reference to this store so they can add additional
     * entities.
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
     * // use the entity store for adding new entities
     * entityStore.addEntity(Block, {x: 15, y: 20});
     *
     * pixiApp.ticker.add(() => {
     *     // use the entity store for updating all entities
     *     entityStore.updateAllEntities();
     * });
     * ```
     */
    entityStore: EntityStore<Context>;
    /**
     * Define a standard entity (with a view). This is intended to be extended from your entity
     * class.
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
     * // define an entity class
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
     *     entityStore.updateAllEntities();
     * });
     * ```
     */
    defineEntity: DefineViewEntity<Context>;
    /** Define an entity that doesn't have an attached view. These are likely to be rare. */
    defineLogicEntity: DefineLogicEntity<Context>;
    /** Passthrough of the original Pixi.js Application instance given to {@link createEntitySuite}. */
    pixiApp: Application;
};

/**
 * This is the starting point of the @game-vir/entity package. Call this to produce the function
 * needed to define new entities and the store needed to add entity instances.
 *
 * @category Main
 */
export function createEntitySuite<const Context = undefined>(
    pixiApp: Application,
    context?: Context,
): EntitySuite<Context> {
    const entityStore = new EntityStore(pixiApp, context) as EntityStore<Context>;

    function defineEntity({key, serializationShape}: Parameters<DefineViewEntity<Context>>[0]) {
        const classWrapper = {
            // @ts-expect-error: abstract methods are intentionally not implemented here
            [key]: class extends ViewEntity<Context, Shape['runtimeType']> {
                public static override readonly entityKey = key;
                public static override readonly serializationShape =
                    serializationShape || entityPositionParamsShape;
            },
        };

        return classWrapper[key];
    }
    function defineLogicEntity({
        key,
        serializationShape,
    }: Parameters<DefineViewEntity<Context>>[0]) {
        const classWrapper = {
            // @ts-expect-error: abstract methods are intentionally not implemented here
            [key]: class extends BaseEntity<Context, Shape['runtimeType']> {
                public static override readonly entityKey = key;
                public static override readonly serializationShape =
                    serializationShape || entityPositionParamsShape;
            },
        };

        return classWrapper[key];
    }

    return {
        pixiApp,
        entityStore,
        defineEntity: defineEntity as DefineViewEntity<Context>,
        defineLogicEntity: defineLogicEntity as DefineLogicEntity<Context>,
    };
}
