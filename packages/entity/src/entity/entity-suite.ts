import {type ShapeDefinition} from 'object-shape-tester';
import {type Constructor} from 'type-fest';
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
    paramsShape: Shape;
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
    paramsShape,
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
    paramsShape: Shape;
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
    paramsShape: Shape;
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
    paramsShape,
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
    paramsShape: Shape;
}) => DefinedLogicEntity<EntityKey, Context, Shape>;

/**
 * Output of {@link defineEntitySuite}, used to defining and creating entities.
 *
 * @category Internal
 */
export type EntitySuite<Context> = {
    /**
     * The suite's entity store constructor. Instantiate this and to add your first entities.
     *
     * All defined entities will also have a reference to this store so they can add additional
     * entities by themselves.
     */
    EntityStore: Constructor<
        EntityStore<Context>,
        ConstructorParameters<typeof EntityStore<Context>>
    >;
    /**
     * Define a standard entity (with a view). This is intended to be extended from your entity
     * class.
     */
    defineEntity: DefineViewEntity<Context>;
    /** Define an entity that doesn't have an attached view. These are likely to be rare. */
    defineLogicEntity: DefineLogicEntity<Context>;
};

/**
 * This is the starting point of the @game-vir/entity package. Call this to produce the function
 * needed to define new entities and the store needed to add entity instances.
 *
 * @category Main
 */
export function defineEntitySuite<Context = undefined>(): EntitySuite<Context> {
    function defineEntity({key, paramsShape}: Parameters<DefineViewEntity<Context>>[0]) {
        const classWrapper = {
            // @ts-expect-error: abstract methods are intentionally not implemented here
            [key]: class extends ViewEntity<Context, Shape['runtimeType']> {
                public static override readonly entityKey = key;
                public static override readonly paramsShape =
                    paramsShape || entityPositionParamsShape;
            },
        };

        return classWrapper[key];
    }
    function defineLogicEntity({
        key,
        paramsShape: paramsShape,
    }: Parameters<DefineViewEntity<Context>>[0]) {
        const classWrapper = {
            // @ts-expect-error: abstract methods are intentionally not implemented here
            [key]: class extends BaseEntity<Context, Shape['runtimeType']> {
                public static override readonly entityKey = key;
                public static override readonly paramsShape =
                    paramsShape || entityPositionParamsShape;
            },
        };

        return classWrapper[key];
    }

    return {
        EntityStore: EntityStore as typeof EntityStore<Context>,
        defineEntity: defineEntity as DefineViewEntity<Context>,
        defineLogicEntity: defineLogicEntity as DefineLogicEntity<Context>,
    };
}
