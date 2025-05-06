import {System} from 'detect-collisions';
import {type ShapeDefinition} from 'object-shape-tester';
import {type Constructor} from 'type-fest';
import {type ListenTarget} from 'typed-event-target';
import {createMockPixi} from '../pixi.js';
import {
    BaseEntity,
    type EntityConstructorParams,
    type EntityDestroyEvent,
    type EntityOptions,
    entityPositionParamsShape,
    EntityStore,
    type EntityStoreConstructorParams,
    ViewEntity,
} from './entity.js';

/**
 * Output of {@link DefineViewEntity}.
 *
 * @category Internal
 */
export type DefinedViewEntity<
    EntityKey,
    Context,
    Shape extends ShapeDefinition<any, any> | undefined,
    Events extends Readonly<Event>,
> = Constructor<
    ViewEntity<
        Context,
        Shape extends ShapeDefinition<any, any> ? Shape['runtimeType'] : undefined
    > & {
        events: ListenTarget<Events>;
    },
    ConstructorParameters<
        typeof ViewEntity<
            Context,
            Shape extends ShapeDefinition<any, any> ? Shape['runtimeType'] : undefined
        >
    >
> & {
    entityKey: EntityKey;
    paramsShape: Shape;
};

/**
 * Params for both {@link EntitySuite.defineEntity} and {@link EntitySuite.defineLogicEntity}.
 *
 * @category Internal
 */
export type DefineEntityParams<EntityKey, Shape, Events> = {
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
    events?: Constructor<Events>[];
    options?: Readonly<EntityOptions>;
};

/**
 * Type for {@link EntitySuite.defineEntity}.
 *
 * @category Internal
 */
export type DefineViewEntity<Context> = <
    const EntityKey extends string,
    const Shape extends ShapeDefinition<any, any> | undefined,
    const Events extends Readonly<Event> = EntityDestroyEvent,
>(
    params: DefineEntityParams<EntityKey, Shape, Events>,
) => DefinedViewEntity<EntityKey, Context, Shape, Events>;

/**
 * Output of {@link DefineLogicEntity}.
 *
 * @category Internal
 */
export type DefinedLogicEntity<
    EntityKey,
    Context,
    Shape extends ShapeDefinition<any, any> | undefined,
    Events extends Readonly<Event>,
> = Constructor<
    BaseEntity<
        Context,
        Shape extends ShapeDefinition<any, any> ? Shape['runtimeType'] : undefined
    > & {
        events: ListenTarget<Events>;
    },
    ConstructorParameters<
        typeof BaseEntity<
            Context,
            Shape extends ShapeDefinition<any, any> ? Shape['runtimeType'] : undefined
        >
    >
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
    const Events extends Readonly<Event> = EntityDestroyEvent,
>(
    params: DefineEntityParams<EntityKey, Shape, Events>,
) => DefinedLogicEntity<EntityKey, Context, Shape, Events>;

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
    /**
     * A set of entity keys used within this entity suite. This will only be populated by all
     * classes that are defined with `defineEntity` or `defineLogicEntity` (so this will miss any
     * not-yet-resolved dynamic imports). This will be populated even before the classes are ever
     * instantiated.
     */
    entityKeys: Set<string>;
};

/**
 * Defines an entity suite and, at the same time, constructs the entity store with mock inputs.
 *
 * @category Mock
 */
export function createMockEntitySuite<Context = undefined>(context?: Context | undefined) {
    const {EntityStore, defineEntity, defineLogicEntity} = defineEntitySuite<Context>();

    const entityStore = new EntityStore({
        hitboxSystem: new System(),
        pixi: createMockPixi(),
        context,
    } satisfies EntityStoreConstructorParams<any> as EntityStoreConstructorParams<Context>);

    return {
        entityStore,
        defineEntity,
        defineLogicEntity,
    };
}

/**
 * This is the starting point of the @game-vir/entity package. Call this to produce the function
 * needed to define new entities and the store needed to add entity instances.
 *
 * @category Main
 */
export function defineEntitySuite<Context = undefined>(): EntitySuite<Context> {
    const entityKeys = new Set<string>();

    function createDefiner(entityParent: typeof BaseEntity) {
        return (params: DefineEntityParams<any, any, any>) => {
            return defineEntity(entityParent, params);
        };
    }

    function defineEntity(
        entityParent: typeof BaseEntity,
        {key, paramsShape, options}: DefineEntityParams<any, any, any>,
    ) {
        if (entityKeys.has(key)) {
            throw new Error(`Entity key '${key}' has already been attached to an entity class.`);
        }
        entityKeys.add(key);

        const classWrapper = {
            // @ts-expect-error: abstract methods are intentionally not implemented here
            [key]: class extends entityParent {
                public static override readonly entityKey = key;
                public static override readonly paramsShape =
                    paramsShape || entityPositionParamsShape;

                constructor(args: Readonly<EntityConstructorParams<any, any>>) {
                    super({
                        options,
                        ...args,
                    });
                }
            },
        };

        return classWrapper[key];
    }

    return {
        EntityStore: EntityStore as typeof EntityStore<Context>,
        defineEntity: createDefiner(ViewEntity) as DefineViewEntity<Context>,
        defineLogicEntity: createDefiner(BaseEntity) as DefineLogicEntity<Context>,
        entityKeys,
    };
}
