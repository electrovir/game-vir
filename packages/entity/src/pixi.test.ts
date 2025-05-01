import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {Application, Container, Graphics, type ViewContainer} from 'pixi.js';
import {defineEntitySuite} from './entity/entity-suite.js';
import {createMockPixiApp, createPixiApp} from './pixi.js';

describe(createMockPixiApp.name, () => {
    it('creates a mock', () => {
        const mock = createMockPixiApp();
        const mockChild = new Container();

        assert.isLengthExactly(mock.stage.children, 0 as number);
        mock.stage.addChild(mockChild);
        assert.isLengthExactly(mock.stage.children, 1 as number);
        assert.strictEquals(mock.stage.children[0], mockChild);
    });
    it('inits a size', () => {
        const mock = createMockPixiApp({options: {width: 100, height: 50}});
        assert.strictEquals(mock.screen.width, 100);
        assert.strictEquals(mock.screen.height, 50);
    });
    it('supports additional mocking', () => {
        assert.isUndefined(createMockPixiApp().canvas);
        assert.isDefined(createMockPixiApp({mocks: {canvas: {} as any}}).canvas);
    });
    it('allows a view child to be destroyed', () => {
        const {EntityStore, defineEntity} = defineEntitySuite();
        const entityStore = new EntityStore(createMockPixiApp(), undefined);

        let updateCount = 0;

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            serializationShape: undefined,
        }) {
            public override update(): void {
                updateCount++;
            }
            public override createView(): ViewContainer {
                return new Graphics().rect(0, 0, 10, 10).fill('red');
            }
        }

        const instance = entityStore.addEntity(MyEntity);

        entityStore.updateAllEntities();
        entityStore.updateAllEntities();
        assert.strictEquals(updateCount, 2);

        instance.destroy();
    });
});

describe(createPixiApp.name, () => {
    it('creates a real pixi app', async () => {
        const dimensions = {
            width: 100,
            height: 100,
        };
        const pixi = await createPixiApp(dimensions);
        assert.instanceOf(pixi, Application);
        assert.instanceOf(pixi.canvas, HTMLCanvasElement);
        assert.deepEquals(
            {
                width: pixi.canvas.width,
                height: pixi.canvas.height,
            },
            dimensions,
        );
    });
});
