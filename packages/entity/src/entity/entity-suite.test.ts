import {assert} from '@augment-vir/assert';
import {SeededRandom} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {Graphics} from 'pixi.js';
import {createMockPixiApp} from '../pixi.js';
import {defineEntitySuite, type DefineViewEntity} from './entity-suite.js';
import {entityPositionParamsShape, type EntityPositionParams, type EntityStore} from './entity.js';

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
                return rect;
            }
        }

        assert.tsType(MyEntity.entityKey).equals<'MyEntity'>();
        assert.strictEquals(MyEntity.entityKey, 'MyEntity');

        const entityStore = new EntityStore({pixiApp: createMockPixiApp(), context});
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
                return rect;
            }
        }

        assert.tsType(MyEntity.entityKey).equals<'MyEntity'>();
        assert.strictEquals(MyEntity.entityKey, 'MyEntity');

        const entityStore = new EntityStore({pixiApp: createMockPixiApp()});
        assert.tsType(entityStore).equals<EntityStore>();
    });
    it('allows logic entity definition', () => {
        const {defineLogicEntity} = defineEntitySuite();

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
    });
});
