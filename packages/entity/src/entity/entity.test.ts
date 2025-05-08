/* eslint-disable sonarjs/constructor-for-side-effects */

import {assert} from '@augment-vir/assert';
import {makeWritable, type AnyObject, type Coords} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {Box} from 'detect-collisions';
import {and, defineShape} from 'object-shape-tester';
import {Graphics} from 'pixi.js';
import {type SetOptional} from 'type-fest';
import {Angle} from '../math/angle.js';
import {Vector} from '../math/vector.js';
import {createMockPixi} from '../pixi.js';
import {defineEntitySuite} from './entity-suite.js';
import {
    BaseEntity,
    EntityDestroyEvent,
    entityPositionParamsShape,
    EntityStore,
    ViewEntity,
    type EntityConstructorParams,
} from './entity.js';

describe(ViewEntity.name, () => {
    it('removes hitbox on destruction', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: undefined,
        }) {
            public override update(): void {}
            public override createView() {
                return {
                    view: new Graphics(),
                    hitbox: new Box({}, 10, 10),
                };
            }
        }
        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [MyEntity],
        });

        assert.isEmpty(entityStore.hitboxSystem.all());

        const instance = entityStore.addEntity(MyEntity);

        assert.isLengthExactly(entityStore.hitboxSystem.all(), 1);

        instance.immediatelyDestroy();

        assert.isEmpty(entityStore.hitboxSystem.all());
    });
    it('has a collide method', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: undefined,
        }) {
            public override update(): void {}
            public override createView() {
                return {
                    view: new Graphics().fill('#721'),
                    hitbox: new Box({}, 10, 10),
                };
            }
        }
        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [MyEntity],
        });

        const instance = entityStore.addEntity(MyEntity);
        instance.collide({} as any, {} as any);
    });
    it("can detect if it's in screen bounds", () => {
        class MyViewEntity extends ViewEntity {
            public override createView() {
                const rect = new Graphics().rect(0, 0, 10, 10).fill('red');
                rect.x = -5;
                rect.y = -5;

                return {
                    view: rect,
                };
            }
            public override update(): void {
                // do nothing
            }
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [],
        });

        const instance = new MyViewEntity({
            entityStore,
            hitboxSystem: entityStore.hitboxSystem,
            pixi: entityStore.pixi,
        });

        assert.isTrue(instance.isInBounds(), 'should be in bounds');
        assert.isFalse(
            instance.isInBounds({entirely: true}),
            'should not be entirely within bounds',
        );
        instance.view.x = 0;
        instance.view.y = 0;
        assert.isTrue(instance.isInBounds(), 'should still be in bounds');
        assert.isTrue(
            instance.isInBounds({entirely: true}),
            'should now be entirely within bounds',
        );
    });
    it('respected constructor param overrides', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        const enemyBulletParamsShape = defineShape(
            and(entityPositionParamsShape, {
                move: {
                    x: -1,
                    y: -1,
                },
            }),
        );

        class EnemyBullet extends defineEntity({
            key: 'EnemyBullet',
            paramsShape: enemyBulletParamsShape,
        }) {
            public static readonly moveSpeed = 5;
            public static readonly size = 2;

            constructor(
                args: EntityConstructorParams<
                    SetOptional<typeof enemyBulletParamsShape.runtimeType, 'move'>
                >,
            ) {
                super({
                    ...args,
                    params: {
                        ...args.params,
                        move: {
                            x: 0,
                            y: 0,
                        },
                    },
                });
            }

            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('red'),
                };
            }

            public override update() {
                // do nothing
            }
        }

        const enemyParamsShape = defineShape(
            and(entityPositionParamsShape, {
                ticksSinceShoot: -1,
                move: {
                    x: -1,
                    y: -1,
                },
            }),
        );

        class EnemyEntity extends defineEntity({
            key: 'EnemyEntity',
            paramsShape: enemyParamsShape,
        }) {
            public static readonly size = 72;
            public static readonly moveSpeed = 3.5;
            public static readonly ticksBetweenShots = 100;

            constructor(
                args: EntityConstructorParams<
                    SetOptional<typeof enemyParamsShape.runtimeType, 'move' | 'ticksSinceShoot'>
                >,
            ) {
                super({
                    ...args,
                    params: {
                        ...args.params,
                        move: {
                            x: 0,
                            y: 0,
                        },
                        ticksSinceShoot: 0,
                    },
                });
            }

            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('orange'),
                };
            }

            public override update() {
                this.addEntity(EnemyBullet, {
                    x: this.params.x + this.view.width / 2,
                    y: this.params.y + this.view.height,
                });
            }
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [EnemyEntity],
        });

        entityStore.addEntity(EnemyEntity, {x: 0, y: 0});
    });
    it('requires context and params when defined', () => {
        class WithNothing extends ViewEntity<undefined, undefined> {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('yellow'),
                };
            }
            public override update(): void {
                // do nothing
            }
        }
        class WithContext extends ViewEntity<AnyObject, undefined> {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('green'),
                };
            }
            public override update(): void {
                // do nothing
            }
        }
        class WithParams extends ViewEntity<undefined, AnyObject> {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('blue'),
                };
            }
            public override update(): void {
                // do nothing
            }
        }
        class WithContextAndParams extends ViewEntity<AnyObject, AnyObject> {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('purple'),
                };
            }
            public override update(): void {
                // do nothing
            }
        }

        const entityStore = new EntityStore<any>({
            pixi: createMockPixi(),
            registeredEntities: [],
        });

        const pixi = createMockPixi();
        const baseArgs = {
            entityStore,
            pixi,
            hitboxSystem: entityStore.hitboxSystem,
        };

        new WithNothing({
            ...baseArgs,
        });
        new WithNothing({
            ...baseArgs,
            context: undefined,
            params: undefined,
        });

        // @ts-expect-error: missing context
        new WithContext({
            ...baseArgs,
        });
        // @ts-expect-error: missing context
        new WithContext({
            ...baseArgs,
            params: undefined,
        });
        new WithContext({
            ...baseArgs,
            // @ts-expect-error: missing context
            context: undefined,
            params: undefined,
        });
        new WithContext({
            ...baseArgs,
            context: {},
        });
        new WithContext({
            ...baseArgs,
            context: {},
            params: undefined,
        });

        // @ts-expect-error: missing params
        new WithParams({
            ...baseArgs,
        });
        // @ts-expect-error: missing params
        new WithParams({
            ...baseArgs,
            context: undefined,
        });
        new WithParams({
            ...baseArgs,
            context: undefined,
            // @ts-expect-error: missing params
            params: undefined,
        });
        new WithParams({
            ...baseArgs,
            params: {},
        });
        new WithParams({
            ...baseArgs,
            context: undefined,
            params: {},
        });

        // @ts-expect-error: missing context and params
        new WithContextAndParams({
            ...baseArgs,
        });
        new WithContextAndParams({
            ...baseArgs,
            // @ts-expect-error: missing context and params
            context: undefined,
        });
        new WithContextAndParams({
            ...baseArgs,
            // @ts-expect-error: missing context and params
            params: undefined,
        });
        new WithContextAndParams({
            ...baseArgs,
            // @ts-expect-error: missing context
            context: undefined,
            // @ts-expect-error: missing params
            params: undefined,
        });
        new WithContextAndParams({
            ...baseArgs,
            context: {},
            params: {},
        });
        new WithContextAndParams({
            ...baseArgs,
            context: {},
            // @ts-expect-error: missing params
            params: undefined,
        });
        new WithContextAndParams({
            ...baseArgs,
            // @ts-expect-error: missing context
            context: undefined,
            params: {},
        });
    });
    it('can add a new entity', () => {
        class MyViewEntity extends ViewEntity<any, undefined> {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('indigo'),
                };
            }
            public override update(): void {
                // do nothing
            }
        }

        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [
                MyViewEntity,
            ],
        });

        const instance = store.addEntity(MyViewEntity);

        assert.strictEquals(store.currentEntityInstances.size, 1 as number);

        instance.addEntity(MyViewEntity);

        assert.strictEquals(store.currentEntityInstances.size, 2);
    });
    it('cannot operate on a destroyed view entity', () => {
        class MyViewEntity extends ViewEntity<any, undefined> {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('violet'),
                };
            }
            public override update(): void {
                // do nothing
            }
        }

        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [
                MyViewEntity,
            ],
        });

        const instance = store.addEntity(MyViewEntity);

        assert.strictEquals(store.currentEntityInstances.size, 1 as number);

        const events: Event[] = [];

        store.events.listen(EntityDestroyEvent, (event, removeSelf) => {
            events.push(event);
            removeSelf();
        });
        instance.immediatelyDestroy();
        assert.isLengthExactly(events, 1);
        assert.instanceOf(events[0], EntityDestroyEvent);
        assert.throws(() => instance.addEntity(MyViewEntity));
        assert.throws(() => instance.isInBounds());
    });
});

describe(EntityStore.name, () => {
    it('fails to add an unregistered entity', () => {
        const {EntityStore, defineEntity} = defineEntitySuite();

        class UnregisteredEntity extends defineEntity({
            key: 'unregistered-entity',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('pink'),
                };
            }
            public override update(): void {}
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [],
        });

        assert.throws(() =>
            // @ts-expect-error: this entity class was not registered.
            entityStore.addEntity(UnregisteredEntity),
        );
    });
    it('restricts params map type', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        const entities = [
            class extends defineEntity({
                key: '1',
                paramsShape: defineShape({
                    x: -1,
                    sign: 'hello',
                }),
                paramsMap: {
                    view: {
                        // @ts-expect-error: `false` is not allowed
                        _zIndex: false,
                    },
                    hitbox: {
                        //@ts-expect-error: cannot map hello to x because of value mismatch
                        x: 'hello',
                    },
                },
            })
            {
                public override update(): void {}
                public override createView() {
                    return {
                        view: new Graphics().fill('something'),
                    };
                }
            },
            class extends defineEntity({
                key: '2',
                paramsShape: defineShape({
                    x: -1,
                    sign: 'hello',
                }),
                paramsMap: {
                    view: {
                        // @ts-expect-error: cannot use `true` here because this property is not in params
                        _didChangeId: true,
                    },
                    hitbox: {
                        height: 'x',
                    },
                },
            })
            {
                public override update(): void {}
                public override createView() {
                    return {
                        view: new Graphics().fill('another'),
                    };
                }
            },
        ];
    });
    it('maps params', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class Mapped extends defineEntity({
            key: 'Mapped',
            paramsShape: defineShape({
                x: -1,
                top: -1,
            }),
            paramsMap: {
                view: {
                    x: true,
                    y: 'top',
                },
                hitbox: {
                    x: 'top',
                    y: 'x',
                },
            },
        }) {
            public override update(): void {}
            public override createView() {
                return {
                    view: new Graphics().fill('#543'),
                    hitbox: new Box({}, 10, 10),
                };
            }
        }
        class NotMapped extends defineEntity({
            key: 'NotMapped',
            paramsShape: defineShape({
                x: -1,
                top: -1,
            }),
            paramsMap: {},
        }) {
            public override update(): void {}
            public override createView() {
                return {
                    view: new Graphics().fill('#123'),
                    hitbox: new Box({}, 10, 10),
                };
            }
        }
        class NotMappedToHitbox extends defineEntity({
            key: 'NotMappedToHitbox',
            paramsShape: defineShape({
                x: -1,
                top: -1,
            }),
            paramsMap: {
                view: {
                    x: true,
                    y: 'top',
                },
            },
        }) {
            public override update(): void {}
            public override createView() {
                return {
                    view: new Graphics().fill('#987'),
                    hitbox: new Box({}, 10, 10),
                };
            }
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [
                Mapped,
                NotMapped,
                NotMappedToHitbox,
            ],
        });

        const instance = entityStore.addEntity(Mapped, {top: 10, x: -5});
        assert.strictEquals(instance.view.x, -5 as number);
        assert.strictEquals(instance.view.y, 10 as number);
        assert.strictEquals(instance.hitbox?.x, 10 as number);
        assert.strictEquals(instance.hitbox.y, -5 as number);

        instance.params.x = 20;
        instance.params.top = 100;

        assert.strictEquals(instance.view.x, 20);
        assert.strictEquals(instance.view.y, 100);
        assert.strictEquals(instance.hitbox.x, 100);
        assert.strictEquals(instance.hitbox.y, 20);

        const instance2 = entityStore.addEntity(NotMapped, {top: 10, x: -5});
        assert.strictEquals(instance2.view.x, 0);
        assert.strictEquals(instance2.view.y, 0);
        assert.strictEquals(instance2.hitbox?.x, 0);
        assert.strictEquals(instance2.hitbox.y, 0);

        instance2.params.x = 20;
        instance2.params.top = 100;

        assert.strictEquals(instance2.view.x, 0);
        assert.strictEquals(instance2.view.y, 0);
        assert.strictEquals(instance2.hitbox.x, 0);
        assert.strictEquals(instance2.hitbox.y, 0);

        const instance3 = entityStore.addEntity(NotMappedToHitbox, {top: 10, x: -5});
        assert.strictEquals(instance3.view.x, -5 as number);
        assert.strictEquals(instance3.view.y, 10 as number);
        assert.strictEquals(instance3.hitbox?.x, 0);
        assert.strictEquals(instance3.hitbox.y, 0);

        instance3.params.x = 20;
        instance3.params.top = 100;

        assert.strictEquals(instance3.view.x, 20);
        assert.strictEquals(instance3.view.y, 100);
        assert.strictEquals(instance3.hitbox.x, 0);
        assert.strictEquals(instance3.hitbox.y, 0);
    });
    it('detects collisions', () => {
        const {EntityStore, defineEntity} = defineEntitySuite();

        let collisions = 0;

        class BoxEntity extends defineEntity({
            key: 'Box',
            paramsShape: defineShape(
                and(entityPositionParamsShape, {
                    angleDegrees: -1,
                }),
            ),
            paramsMap: {
                hitbox: {
                    x: true,
                    y: true,
                },
            },
        }) {
            protected declare move: Coords;

            public override createView() {
                this.move = new Vector(
                    1,
                    new Angle(
                        {
                            degrees: this.params.angleDegrees,
                        },
                        {digits: 2},
                    ),
                    {digits: 2},
                ).toComponents();

                const hitbox = new Box({x: this.params.x, y: this.params.y}, 10, 10);

                return {
                    view: new Graphics({
                        x: this.params.x,
                        y: this.params.y,
                    })
                        .rect(0, 0, 10, 10)
                        .fill('red'),
                    hitbox,
                };
            }

            public override update(): void {
                this.params.x += this.move.x;
                this.params.y += this.move.y;
            }

            public override collide(otherEntity: BaseEntity): void {
                assert.instanceOf(otherEntity, BaseEntity);
                collisions++;
            }
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [BoxEntity],
        });

        entityStore.addEntity(BoxEntity, {angleDegrees: 45, x: 0, y: 0});
        entityStore.addEntity(BoxEntity, {angleDegrees: 225, x: 13, y: 13});

        entityStore.updateAllEntities();
        assert.strictEquals(collisions, 0 as number);
        entityStore.updateAllEntities();
        assert.strictEquals(collisions, 0 as number);
        entityStore.updateAllEntities();
        /** Each entity will get the call. */
        assert.strictEquals(collisions, 2);
    });
    it("can't operate on a destroyed store", () => {
        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [],
        });

        store.destroy();

        assert.throws(() => store.updateAllEntities(), {
            matchMessage: 'Cannot operate on a destroyed entity store.',
        });
        // @ts-expect-error: intentionally not giving a valid entity constructor
        assert.throws(() => store.addEntity({} as any), {
            matchMessage: 'Cannot operate on a destroyed entity store.',
        });
        assert.throws(() => store.destroy(), {
            matchMessage: 'Entity store is already destroyed.',
        });
        assert.throws(() => store.removeEntity({} as any), {
            matchMessage: 'Cannot operate on a destroyed entity store.',
        });
        assert.throws(() => store.deserializeEntity('' as any, {} as any), {
            matchMessage: 'Cannot operate on a destroyed entity store.',
        });
    });
    it('removes a non-destroyed child', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();
        class Dummy extends defineEntity({
            key: 'Dummy',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('#195'),
                    hitbox: new Box({}, 10, 10),
                };
            }

            public update() {}
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [Dummy],
        });

        const instance = entityStore.addEntity(Dummy);

        assert.deepEquals(entityStore.pixi.stage.children, [instance.view]);
        assert.deepEquals(entityStore.hitboxSystem.all(), [instance.hitbox]);

        entityStore.removeEntity(instance);

        assert.isEmpty(entityStore.pixi.stage.children);
        assert.isEmpty(entityStore.hitboxSystem.all());
        assert.isFalse(instance.isDestroyed);
    });
    it('requires context when defined', () => {
        // @ts-expect-error: missing context
        new EntityStore<AnyObject>({
            pixi: createMockPixi(),
            registeredEntities: [],
        });
        // context can be omitted if it is nullable
        new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [],
        });
        // defaults to `undefined`
        new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [],
        });
    });
    it('cleans up a destroyed entity', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class Dummy extends defineEntity({
            key: 'Dummy',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('black'),
                };
            }

            public update() {}
        }

        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [Dummy],
        });
        assert.strictEquals(store.currentEntityInstances.size, 0 as number);
        const instance = store.addEntity(Dummy);
        assert.strictEquals(store.currentEntityInstances.size, 1 as number);
        store.updateAllEntities();
        assert.strictEquals(store.currentEntityInstances.size, 1 as number);
        makeWritable(instance).isDestroyed = true;
        assert.strictEquals(store.currentEntityInstances.size, 1 as number);
        store.updateAllEntities();
        assert.strictEquals(store.currentEntityInstances.size, 0);
    });
    it('can be destroyed multiple times without issue', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class Dummy extends defineEntity({
            key: 'Dummy',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('#999'),
                };
            }

            public update() {}
        }

        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [Dummy],
        });
        const instance = store.addEntity(Dummy);

        instance.destroy();
        instance.destroy();
        instance.immediatelyDestroy();
        instance.immediatelyDestroy();
        instance.destroy();
        instance.destroy();
    });
    it('handles a entity that destroys itself in an update', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class Dummy extends defineEntity({
            key: 'Dummy',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('#555'),
                };
            }

            public update() {
                this.destroy();
            }
        }

        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [Dummy],
        });
        const instance = store.addEntity(Dummy);

        store.updateAllEntities();
        assert.isTrue(instance.isDestroyed);
        assert.isUndefined(instance.entityStore);
    });
    it('destroys all children', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class Dummy extends defineEntity({
            key: 'Dummy',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('white'),
                };
            }

            public update() {}
        }

        const store = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [Dummy],
        });
        assert.strictEquals(store.currentEntityInstances.size, 0 as number);
        const instance = store.addEntity(Dummy);
        assert.strictEquals(store.currentEntityInstances.size, 1 as number);
        store.destroy();
        assert.strictEquals(store.currentEntityInstances.size, 0);
        assert.isTrue(instance.isDestroyed);
    });
    it('supports paramsMap', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: defineShape(
                and(entityPositionParamsShape, {
                    allowChildren: false,
                    step: -1,
                }),
            ),
            paramsMap: {
                hitbox: {
                    x: true,
                    y: true,
                    /** This is not allowed on all hitbox types, but it should still be allowed here. */
                    step: true,
                    // @ts-expect-error: while this is in the entity params, it is not a valid hitbox property so should be blocked here.
                    allowChildren: true,
                },
                view: {
                    x: true,
                    y: true,
                    allowChildren: true,
                    // @ts-expect-error: while this is in the entity params, it is not a valid view property so should be blocked here.
                    step: true,
                },
            },
        }) {
            public override createView() {
                return {
                    view: new Graphics().fill('teal'),
                    hitbox: new Box({}, 10, 10),
                };
            }
            public override update(): void {}
        }
        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [MyEntity],
        });

        const instance = entityStore.addEntity(MyEntity, {
            allowChildren: false,
            step: 15,
            x: 5,
            y: 10,
        });

        assert.isDefined(instance.hitbox);

        function assertEqualProperties(prop: PropertyKey, value: unknown) {
            assert.strictEquals(
                (instance.hitbox as AnyObject)[prop],
                (instance.view as AnyObject)[prop],
                `prop '${String(prop)}' mismatch in hitbox`,
            );
            assert.strictEquals(
                (instance.view as AnyObject)[prop],
                value,
                `prop '${String(prop)}' mismatch in view`,
            );
        }

        assertEqualProperties('x', 5);
        assertEqualProperties('y', 10);
        assertEqualProperties('step', 15);
        assertEqualProperties('allowChildren', false);

        instance.params.x = 7;
        instance.params.y = 8;
        instance.params.step = 9;
        instance.params.allowChildren = true;

        assertEqualProperties('x', 7);
        assertEqualProperties('y', 8);
        assertEqualProperties('step', 9);
        assertEqualProperties('allowChildren', true);
    });
    it('fails to deserialize a missing constructor', () => {
        const {EntityStore} = defineEntitySuite();

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [],
        });

        assert.throws(
            () =>
                // @ts-expect-error: this store has no registered entities so the key is wrong
                entityStore.deserializeEntity('', ''),
            {
                matchMessage: 'No entity registered for key',
            },
        );
    });
    it('serializes and deserializes', () => {
        const {EntityStore, defineEntity} = defineEntitySuite();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: entityPositionParamsShape,
        }) {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('lime'),
                };
            }

            public override update(): void {
                // do nothing
            }
        }

        class MyEntity2 extends defineEntity({
            key: 'MyEntity2',
            paramsShape: undefined,
        }) {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('grey'),
                };
            }

            public override update(): void {
                // do nothing
            }
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [
                MyEntity,
                MyEntity2,
            ],
        });

        const instance = entityStore.addEntity(MyEntity, {
            x: 2,
            y: 3,
        });

        const serialized = instance.serialize();
        assert.strictEquals(serialized, '{"x":2,"y":3}');
        MyEntity.entityKey;
        const deserialized = MyEntity.deserialize('{"x":2,"y":3}');
        assert.deepEquals(deserialized, {x: 2, y: 3});

        const instance2 = entityStore.deserializeEntity(MyEntity.entityKey, serialized);
        assert.tsType(instance2).equals<MyEntity>();
        assert.instanceOf(instance2, MyEntity);
        assert.strictEquals(instance2.serialize(), '{"x":2,"y":3}');

        const instance3 = entityStore.deserializeEntity(MyEntity2.entityKey, undefined);
        assert.isUndefined(instance3.serialize());
        assert.tsType(instance3).equals<MyEntity2>();
        assert.instanceOf(instance3, MyEntity2);
        assert.throws(() => entityStore.deserializeEntity(MyEntity.entityKey, undefined));
    });
    it('gets entities by their constructor', () => {
        const {EntityStore, defineEntity} = defineEntitySuite();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: entityPositionParamsShape,
        }) {
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('aquamarine'),
                };
            }

            public override update(): void {
                // do nothing
            }
        }

        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [MyEntity],
        });
        const instance = entityStore.addEntity(MyEntity, {x: 1, y: 1});

        const myEntityInstances = entityStore.getEntities(MyEntity);
        assert.tsType(myEntityInstances).equals<Set<MyEntity>>();
        assert.tsType(myEntityInstances).notEquals<Set<BaseEntity>>();
        const baseEntityInstances = entityStore.getEntities(BaseEntity);
        assert.tsType(baseEntityInstances).notEquals<Set<MyEntity>>();
        assert.tsType(baseEntityInstances).matches<Set<BaseEntity>>();

        const myEntityArray = Array.from(myEntityInstances.values());
        const baseEntityArray = Array.from(baseEntityInstances.values());

        assert.isEmpty(entityStore.getEntities(RegExp));

        ((values: MyEntity[]) => {})(myEntityArray);
        ((values: BaseEntity[]) => {})(myEntityArray);
        // @ts-expect-error: cannot assign super class to sub class
        ((values: MyEntity[]) => {})(baseEntityArray);
        ((values: BaseEntity[]) => {})(baseEntityArray);

        assert.deepEquals(myEntityArray, [instance]);
        assert.deepEquals(baseEntityArray, [instance]);
    });
});
