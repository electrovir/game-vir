import {
    makeWritable,
    type JsonCompatibleValue,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {System, type Body, type Response} from 'detect-collisions';
import {defineShape, type ShapeDefinition} from 'object-shape-tester';
import {type Application, type ViewContainer} from 'pixi.js';
import {
    type AbstractConstructor,
    type Constructor,
    type IsNever,
    type UnknownArray,
    type Writable,
} from 'type-fest';
import {defineTypedEvent, ListenTarget} from 'typed-event-target';
import {ConstructorMap} from '../constructor-map.js';

/**
 * Options for an entity.
 *
 * @category Internal
 */
export type EntityOptions = PartialWithUndefined<{
    /**
     * - When `false` (the default), view entities with a hitbox will automatically update their
     *   hitbox coordinates to match their view coordinates on each entity update (inside
     *   {@link EntityStore.updateAllEntities}).
     * - When `true`, view entities with a hitbox will _not_ automatically update their hitbox
     *   coordinates in each update. This will require you to provide additional code within the
     *   entity's {@link BaseEntity.update} method to update the hitbox position.
     *
     * @default false
     */
    preventAutomaticHitboxPositionUpdates: boolean;
    /**
     * - When `false` (the default), view entities will automatically update their
     *   {@link ViewEntity.view} position to match the entity's params object if it contains an `x`
     *   or `y` property (inside {@link EntityStore.updateAllEntities}).
     * - When `true`, view entities will _not_ automatically update their {@link ViewEntity.view}
     *   position. This will require you to provide additional code within the entity's
     *   {@link BaseEntity.update} method to update the view position.
     *
     * @default false
     */
    preventAutomaticViewPositionUpdates: boolean;
}>;

/**
 * Parameters for {@link EntityStore.addEntity}. Flattens itself to an empty array if there are no
 * entity constructor params.
 *
 * @category Internal
 */
export type AddEntityParams<EntityConstructor extends Constructor<BaseEntity>> =
    ConstructorParameters<EntityConstructor>[0] extends infer Args extends EntityConstructorParams<
        any,
        any
    >
        ? Args['params'] extends undefined
            ? []
            : [Args['params']]
        : ['no'];

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
    /**
     * An [`Application`](https://pixijs.download/release/docs/app.Application.html) instance from
     * the [`pixi.js`](https://www.npmjs.com/package/pixi.js) package.
     */
    pixi: Application;
    /**
     * A `System` instance from the
     * [`detect-collisions`](https://www.npmjs.com/package/detect-collisions) package. If this
     * property is omitted, the EntityStore will create its own instance.
     */
    hitboxSystem?: System | undefined;
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
    public readonly pixi: Application;
    /** Context given to all entities. This can be undefined. */
    public readonly context: Context;
    /** Collision detection system. */
    public readonly hitboxSystem: System;

    constructor(args: Readonly<EntityStoreConstructorParams<Context>>) {
        this.pixi = args.pixi;
        this.context = args.context as Context;
        this.hitboxSystem = args.hitboxSystem || new System();
    }

    /**
     * Runs `.update()` on all current entities and runs collision detection for all hitboxes. If
     * any entities get marked as destroyed during their update, then they will be removed from the
     * set of entities.
     *
     * @returns All detected hitbox collisions (if any).
     */
    public updateAllEntities(): Set<Response> {
        if (this.isDestroyed) {
            throw new Error('Cannot operate on destroyed entity store.');
        }
        this.entities.forEach((entity) => {
            entity.update();
            /** Check if the entity was destroyed after the update. */
            if (entity.isDestroyed) {
                this.removeEntity(entity);
                return;
            }
            if (entity instanceof ViewEntity) {
                if (!entity.options?.preventAutomaticViewPositionUpdates) {
                    if ('x' in entity.params) {
                        entity.view.x = entity.params.x;
                    }
                    if ('y' in entity.params) {
                        entity.view.y = entity.params.y;
                    }
                }
                if (entity.hitbox && !entity.options?.preventAutomaticHitboxPositionUpdates) {
                    entity.hitbox.setPosition(entity.view.x, entity.view.y);
                }
            }
        });
        const allCollisions = new Set<Response>();

        /**
         * This `checkAll` method is synchronous, so even though its using a callback it'll still
         * finish before this `updateAllEntities` method exits.
         */
        this.hitboxSystem.checkAll((response) => {
            allCollisions.add(response);
        });

        return allCollisions;
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
            pixi: this.pixi,
            context: this.context,
            params: (params as UnknownArray)[0],
            hitboxSystem: this.hitboxSystem,
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
        delete (this as Writable<Partial<EntityStore>>).pixi;
        delete (this as Writable<Partial<EntityStore>>).hitboxSystem;
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
export type EntityConstructorParams<Params = undefined, Context = undefined> = (IsNever<
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
        pixi: Application;
        hitboxSystem: System;
        options?: Readonly<EntityOptions> | undefined;
    };

/**
 * Event emitted by all entities when they are destroyed.
 *
 * @category Internal
 */
export class EntityDestroyEvent extends defineTypedEvent('entity-destroy-event') {}

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
    public readonly events = new ListenTarget<EntityDestroyEvent>();

    /** The entity store to add all entities to. */
    public readonly entityStore: EntityStore<Context>;
    public readonly context: Context;
    /** Writable entity params. These should be serializable. */
    public params: Params;
    /** Original pixi app. */
    public readonly pixi: Application;
    /** Collision detection system. */
    public readonly hitboxSystem: System;
    public options: EntityOptions | undefined;

    constructor(args: Readonly<EntityConstructorParams<NoInfer<Params>, NoInfer<Context>>>) {
        this.entityStore = args.entityStore;
        this.context = args.context as Context;
        this.params = args.params as Params;
        this.pixi = args.pixi;
        this.hitboxSystem = args.hitboxSystem;
        this.options = args.options;
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
        this.events.dispatch(new EntityDestroyEvent());
        this.events.destroy();
    }

    /**
     * Serialize the entity for sharing across the network (for multiplayer play). You will need to
     * override this if your view is the position source of truth.
     */
    public serialize() {
        return this.params;
    }
}

export type ViewCreation = {
    /**
     * A view for rendering. Create with, for example, [`new
     * AnimatedSprite`](https://pixijs.download/release/docs/scene.AnimatedSprite.html) or [`new
     * Graphics`](https://pixijs.download/release/docs/scene.Graphics.html), etc. imported from the
     * [`pixi.js`](https://www.npmjs.com/package/pixi.js) package.
     */
    view: ViewContainer;
    /**
     * A Body instance for hitbox collision detection. Create one with, for example,
     * `this.hitboxSystem.createBox()` or import directly from the
     * [`detect-collisions`](https://www.npmjs.com/package/detect-collisions) package, like with
     * [`new Circle`](https://prozi.github.io/detect-collisions/classes/Circle.html#constructor).
     *
     * This property optional, if a hitbox is not provided, collision detection will not be
     * calculated for this entity.
     */
    hitbox?: Body | undefined;
};

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
    public hitbox: Body<this> | undefined;

    constructor(args: Readonly<EntityConstructorParams<NoInfer<Params>, NoInfer<Context>>>) {
        super(args);
        const {view, hitbox} = this.createView();
        this.view = view;
        this.pixi.stage.addChild(this.view);
        this.hitbox = hitbox;
        if (this.hitbox) {
            this.hitbox.userData = this;
            this.hitboxSystem.insert(this.hitbox);
        }
    }

    /**
     * Creates the entity's PixiJS view. This will be called on entity construction and added to the
     * PixiJS application stage.
     */
    public abstract createView(): ViewCreation;

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
            return this.pixi.screen.containsRect(this.view.getBounds().rectangle);
        } else {
            return this.pixi.screen.intersects(this.view.getBounds().rectangle);
        }
    }

    /** Destroy the current entity, stop its updates, and remove it from the view. */
    public override destroy() {
        this.view.destroy({children: true});
        if (this.hitbox) {
            this.hitboxSystem.remove(this.hitbox);
        }
        super.destroy();
        delete (this as Writable<Partial<ViewEntity>>).view;
    }
}
