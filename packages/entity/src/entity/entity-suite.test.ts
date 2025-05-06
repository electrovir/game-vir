import {assert} from '@augment-vir/assert';
import {SeededRandom} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {Graphics} from 'pixi.js';
import {defineTypedCustomEvent} from 'typed-event-target';
import {createMockPixi} from '../pixi.js';
import {createMockEntitySuite, defineEntitySuite, type DefineViewEntity} from './entity-suite.js';
import {
    BaseEntity,
    EntityDestroyEvent,
    entityPositionParamsShape,
    ViewEntity,
    type EntityPositionParams,
    type EntityStore,
} from './entity.js';

describe(defineEntitySuite.name, () => {
    it('infers defined context type', () => {
        const context = {
            digits: 4,
            random: SeededRandom.fromSeed('test seed'),
        };

        const {defineEntity, EntityStore} = defineEntitySuite<typeof context>();

        assert.tsType(defineEntity).equals<DefineViewEntity<typeof context>>();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: entityPositionParamsShape,
        }) {
            public update(): void {
                assert.strictEquals(this.context, context);
                assert.tsType(MyEntity.entityKey).equals<'MyEntity'>();
                assert.tsType(this.context).equals<typeof context>();
            }

            public createView() {
                assert.tsType(this.context).equals<typeof context>();
                assert.strictEquals(this.context, context);
                assert.tsType(this.params).equals<EntityPositionParams>();
                const rect = new Graphics().rect(0, 0, 20, 20).fill('magenta');
                rect.x = this.params.x;
                rect.y = this.params.y;
                return {
                    view: rect,
                };
            }
        }

        assert.tsType(MyEntity.entityKey).equals<'MyEntity'>();
        assert.strictEquals(MyEntity.entityKey, 'MyEntity');

        const entityStore = new EntityStore({pixi: createMockPixi(), context});
        assert.tsType(entityStore).equals<EntityStore<typeof context>>();
    });
    it('defaults to undefined context', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        assert.tsType(defineEntity).equals<DefineViewEntity<undefined>>();

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: entityPositionParamsShape,
        }) {
            public update(): void {
                assert.isUndefined(this.context);
                assert.tsType(MyEntity.entityKey).equals<'MyEntity'>();
                assert.tsType(this.context).equals<undefined>();
            }

            public createView() {
                assert.tsType(this.context).equals<undefined>();
                assert.isUndefined(this.context);
                assert.tsType(this.params).equals<EntityPositionParams>();
                const rect = new Graphics().rect(0, 0, 20, 20).fill('magenta');
                rect.x = this.params.x;
                rect.y = this.params.y;
                return {
                    view: rect,
                };
            }
        }

        assert.tsType(MyEntity.entityKey).equals<'MyEntity'>();
        assert.strictEquals(MyEntity.entityKey, 'MyEntity');

        const entityStore = new EntityStore({pixi: createMockPixi()});
        assert.tsType(entityStore).equals<EntityStore>();
    });
    it('assigns the events type parameter', () => {
        const {defineEntity, EntityStore} = defineEntitySuite();

        class MyEvent extends defineTypedCustomEvent<{value: number}>()('my-event') {}

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: undefined,
            events: [MyEvent],
        }) {
            public override update(): void {
                // do nothing
            }
            public override createView() {
                this.events.dispatch(
                    new MyEvent({
                        detail: {
                            value: 5,
                        },
                    }),
                );
                return {
                    view: new Graphics().rect(0, 0, 20, 20).fill('magenta'),
                };
            }
        }
        class MyEntity2 extends defineEntity({
            key: 'MyEntity',
            paramsShape: undefined,
        }) {
            public override update(): void {
                // do nothing
            }
            public override createView() {
                this.events.dispatch(
                    // @ts-expect-error: this event is not part of this entity
                    new MyEvent({
                        detail: {
                            value: 5,
                        },
                    }),
                );
                return {
                    view: new Graphics().rect(0, 0, 20, 20).fill('red'),
                };
            }
        }
        const entityStore = new EntityStore({
            pixi: createMockPixi(),
        });

        const instance = entityStore.addEntity(MyEntity);

        assert.instanceOf(instance, MyEntity);
        assert.instanceOf(instance, BaseEntity);
        assert.instanceOf(instance, ViewEntity);

        instance.events.listen(EntityDestroyEvent, () => {});
        instance.events.listen(MyEvent, (event) => {
            assert.tsType(event.detail).equals<{value: number}>();
        });
        // @ts-expect-error: invalid event to listen to
        instance.events.listen(Error, () => {});

        const instance2 = entityStore.addEntity(MyEntity2);

        instance2.events.listen(EntityDestroyEvent, () => {});
        // @ts-expect-error: invalid event to listen to
        instance2.events.listen(MyEvent, (event) => {
            // @ts-expect-error: invalid event to listen to
            assert.tsType(event.detail).equals<{value: number}>();
        });
        // @ts-expect-error: invalid event to listen to
        instance2.events.listen(Error, () => {});
    });
    it('allows logic entity definition', () => {
        const {defineLogicEntity, entityStore} = createMockEntitySuite();

        class MyLogicEntity extends defineLogicEntity({
            key: 'MyLogicEntity',
            paramsShape: undefined,
        }) {
            public override update(): void {
                // do nothing
            }
        }

        assert.tsType(MyLogicEntity.entityKey).equals<'MyLogicEntity'>();
        assert.strictEquals(MyLogicEntity.entityKey, 'MyLogicEntity');
        const instance = entityStore.addEntity(MyLogicEntity);

        assert.instanceOf(instance, MyLogicEntity);
        assert.instanceOf(instance, BaseEntity);
    });
});
