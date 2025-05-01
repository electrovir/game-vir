import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {Graphics, type ViewContainer} from 'pixi.js';
import {createMockPixiApp} from '../pixi.js';
import {EntityStore, ViewEntity} from './entity.js';

describe(ViewEntity.name, () => {
    it("can detect if it's in screen bounds", () => {
        class MyViewEntity extends ViewEntity {
            public override createView(): ViewContainer {
                const rect = new Graphics().rect(0, 0, 10, 10).fill('red');
                rect.x = -5;
                rect.y = -5;

                return rect;
            }
            public override update(): void {
                // do nothing
            }
        }

        const pixiApp = createMockPixiApp();

        const instance = new MyViewEntity(
            new EntityStore(pixiApp, undefined),
            pixiApp,
            undefined,
            undefined,
        );

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
    it('can add a new entity', () => {
        class MyViewEntity extends ViewEntity<any, undefined> {
            public override createView(): ViewContainer {
                return new Graphics().rect(0, 0, 10, 10).fill('red');
            }
            public override update(): void {
                // do nothing
            }
        }

        const pixiApp = createMockPixiApp();

        const store = new EntityStore(pixiApp, undefined);

        const instance = store.addEntity(MyViewEntity);

        assert.strictEquals(store.entities.size, 1 as number);

        instance.addEntity(MyViewEntity);

        assert.strictEquals(store.entities.size, 2);
    });
    it('cannot add an entity through a destroyed entity', () => {
        class MyViewEntity extends ViewEntity<any, undefined> {
            public override createView(): ViewContainer {
                return new Graphics().rect(0, 0, 10, 10).fill('red');
            }
            public override update(): void {
                // do nothing
            }
        }

        const pixiApp = createMockPixiApp();

        const store = new EntityStore(pixiApp, undefined);

        const instance = store.addEntity(MyViewEntity);

        assert.strictEquals(store.entities.size, 1 as number);

        instance.destroy();
        assert.throws(() => instance.addEntity(MyViewEntity));
    });
});

describe(EntityStore.name, () => {
    it("can't operate on a destroyed store", () => {
        const store = new EntityStore({} as any, undefined);

        store.destroy();

        assert.throws(() => store.updateAllEntities());
        assert.throws(() => store.addEntity({} as any));
        assert.throws(() => store.destroy());
    });
    it('cleans up a destroyed entity', () => {
        class Dummy {
            public isDestroyed = false;

            public update() {}
        }

        const store = new EntityStore({} as any, undefined);
        assert.strictEquals(store.entities.size, 0 as number);
        const instance = store.addEntity(Dummy as any) as Dummy;
        assert.strictEquals(store.entities.size, 1 as number);
        store.updateAllEntities();
        assert.strictEquals(store.entities.size, 1 as number);
        instance.isDestroyed = true;
        assert.strictEquals(store.entities.size, 1 as number);
        store.updateAllEntities();
        assert.strictEquals(store.entities.size, 0);
    });
    it('destroys all children', () => {
        class Dummy {
            public isDestroyed = false;

            public destroy() {
                this.isDestroyed = true;
            }
        }

        const store = new EntityStore({} as any, undefined);
        assert.strictEquals(store.entities.size, 0 as number);
        const instance = store.addEntity(Dummy as any);
        assert.strictEquals(store.entities.size, 1 as number);
        store.destroy();
        assert.strictEquals(store.entities.size, 0);
        assert.isTrue(instance.isDestroyed);
    });
});
