import {
    makeWritable,
    type JsonCompatibleValue,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {defineShape, type ShapeDefinition} from 'object-shape-tester';
import {type Application, type ViewContainer} from 'pixi.js';
import {
    type AbstractConstructor,
    type Constructor,
    type IsNever,
    type UnknownArray,
    type Writable,
} from 'type-fest';
import {ConstructorMap} from '../constructor-map.js';

/**
 * Parameters for {@link EntityStore.addEntity}. Flattens itself to an empty array if there are no
 * entity constructor params.
 *
 * @category Internal
 */
export type AddEntityParams<EntityConstructor extends Constructor<BaseEntity>> =
    EntityConstructor extends typeof BaseEntity<any, infer Params extends JsonCompatibleValue>
        ? Params extends undefined
            ? []
            : [Params]
        : [];

/**
 * Parameters for the constructor of {@link EntityStore}.
 *
 * @category Internal
 */
export type EntityStoreConstructorParams<Context> = (IsNever<
    Extract<Context, undefined | null>
> extends true
    ? {
          context: Context;
      }
    : {
          context?: Context;
      }) & {
    pixiApp: Application;
};

/**
 * The top level storage class of all entities. Add entities with {@link EntityStore.addEntity}.
 *
 * @category Internal
 */
export class EntityStore<Context = undefined> {
    /**
     * All current child entities.
     *
     * Instead of modifying this set, use {@link EntityStore.addEntity} or
     * {@link EntityStore.removeEntity}. If you must manually modify this set directly, you'll also
     * need to modify {@link EntityStore.entityMap}.
     */
    public readonly entities = new Set<BaseEntity>();
    /** If true, this entity store should no longer be used or operated upon. */
    public readonly isDestroyed: boolean = false;
    /** An internal mapping of all entity constructors to their instances. */
    public readonly entityMap = new ConstructorMap();
    /** Original pixi app. */
    public readonly pixiApp: Application;
    /** Context given to all entities. This can be undefined. */
    public readonly context: Context;

    constructor(args: Readonly<EntityStoreConstructorParams<Context>>) {
        this.pixiApp = args.pixiApp;
        this.context = args.context as Context;
    }

    /**
     * Run `.update()` on all current entities. If any entity's get marked as destroyed during their
     * update, then they will be removed from the set of entities.
     */
    public updateAllEntities() {
        if (this.isDestroyed) {
            throw new Error('Cannot operate on destroyed entity store.');
        }
        this.entities.forEach((entity) => {
            entity.update();
            if (entity.isDestroyed) {
                this.removeEntity(entity);
            }
        });
    }

    /** Get all current instances of the given entity class constructor. */
    public getEntities<T>(entityClassConstructor: AbstractConstructor<T> | Constructor<T>): Set<T> {
        return this.entityMap.getInstances(entityClassConstructor);
    }

    /** Remove an entity from the store. */
    public removeEntity(entity: BaseEntity) {
        this.entities.delete(entity);
        this.entityMap.remove(entity);
    }

    /** Add a new entity to this entity store. */
    public addEntity<const EntityConstructor extends Constructor<BaseEntity>>(
        entityClass: EntityConstructor,
        ...params: AddEntityParams<EntityConstructor>
    ): InstanceType<EntityConstructor> {
        if (this.isDestroyed) {
            throw new Error('Cannot operate on destroyed entity store.');
        }
        const child = new entityClass({
            entityStore: this,
            pixiApp: this.pixiApp,
            context: this.context,
            params: (params as UnknownArray)[0],
        } satisfies EntityConstructorParams<any, any>);
        this.entities.add(child);
        this.entityMap.add(child);
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
        this.entityMap.destroy();
        delete (this as Writable<Partial<EntityStore>>).pixiApp;
        delete (this as Writable<Partial<EntityStore>>).context;
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
 * @category Internal
 */
export type EntityConstructorParams<Params, Context> = (IsNever<
    Extract<Context, undefined | null>
> extends true
    ? {
          context: Context;
      }
    : {
          context?: Context;
      }) &
    (IsNever<Extract<Params, undefined | null>> extends true
        ? {
              params: Params;
          }
        : {
              params?: Params;
          }) & {
        entityStore: EntityStore<Context>;
        pixiApp: Application;
    };

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
    public static readonly paramsShape: ShapeDefinition<any, any> | undefined =
        entityPositionParamsShape;

    /** If true, this entity should no longer be used or operated upon. */
    public readonly isDestroyed: boolean = false;

    /** The entity store to add all entities to. */
    public readonly entityStore: EntityStore<Context>;
    public readonly context: Context;
    /** Writable entity params. These should be serializable. */
    public params: Params;
    /** Original pixi app. */
    public readonly pixiApp: Application;

    constructor(args: Readonly<EntityConstructorParams<Params, Context>>) {
        this.entityStore = args.entityStore;
        this.context = args.context as Context;
        this.params = args.params as Params;
        this.pixiApp = args.pixiApp;
    }

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
        return this.entityStore.addEntity(entityClass, ...params);
    }

    /** Destroy the current entity, stop its updates, and remove it from the view. */
    public destroy() {
        makeWritable(this).isDestroyed = true;
        this.entityStore.removeEntity(this);
        delete (this as Writable<Partial<BaseEntity>>).entityStore;
        delete (this as Writable<Partial<BaseEntity>>).context;
        delete (this as Writable<Partial<BaseEntity>>).params;
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

    constructor(args: Readonly<EntityConstructorParams<Params, Context>>) {
        super(args);
        this.view = this.createView();
        this.pixiApp.stage.addChild(this.view);
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
        if (this.isDestroyed) {
            throw new Error('Cannot check bounds on destroyed entity.');
        } else if (options.entirely) {
            return this.pixiApp.screen.containsRect(this.view.getBounds().rectangle);
        } else {
            return this.pixiApp.screen.intersects(this.view.getBounds().rectangle);
        }
    }

    /** Destroy the current entity, stop its updates, and remove it from the view. */
    public override destroy() {
        this.view.destroy({children: true});
        super.destroy();
        delete (this as Writable<Partial<ViewEntity>>).view;
    }
}
