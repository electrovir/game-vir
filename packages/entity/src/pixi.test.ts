import {assert} from '@augment-vir/assert';
import {extractErrorMessage, log} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {Application, Container, Graphics} from 'pixi.js';
import {defineEntitySuite} from './entity/entity-suite.js';
import {createMockPixi, createPixi} from './pixi.js';

describe(createMockPixi.name, () => {
    it('creates a mock', () => {
        const mock = createMockPixi();
        const mockChild = new Container();

        assert.isLengthExactly(mock.stage.children, 0 as number);
        mock.stage.addChild(mockChild);
        assert.isLengthExactly(mock.stage.children, 1 as number);
        assert.strictEquals(mock.stage.children[0], mockChild);
    });
    it('inits a size', () => {
        const mock = createMockPixi({options: {width: 100, height: 50}});
        assert.strictEquals(mock.screen.width, 100);
        assert.strictEquals(mock.screen.height, 50);
    });
    it('supports additional mocking', () => {
        assert.isUndefined(createMockPixi().canvas);
        assert.isDefined(createMockPixi({mocks: {canvas: {} as any}}).canvas);
    });
    it('allows a view child to be destroyed', () => {
        const {EntityStore, defineEntity} = defineEntitySuite();
        let updateCount = 0;

        class MyEntity extends defineEntity({
            key: 'MyEntity',
            paramsShape: undefined,
        }) {
            public override update(): void {
                updateCount++;
            }
            public override createView() {
                return {
                    view: new Graphics().rect(0, 0, 10, 10).fill('red'),
                };
            }
        }
        const entityStore = new EntityStore({
            pixi: createMockPixi(),
            registeredEntities: [MyEntity],
        });

        const instance = entityStore.addEntity(MyEntity);

        entityStore.updateAllEntities();
        entityStore.updateAllEntities();
        assert.strictEquals(updateCount, 2);

        instance.destroy();
    });
});

describe(createPixi.name, () => {
    it('creates a real pixi app', async () => {
        try {
            const dimensions = {
                width: 100,
                height: 100,
            };
            const pixi = await createPixi({
                ...dimensions,
                preference: 'webgpu',
            });
            assert.instanceOf(pixi, Application);
            assert.instanceOf(pixi.canvas, HTMLCanvasElement);
            assert.deepEquals(
                {
                    width: pixi.canvas.width,
                    height: pixi.canvas.height,
                },
                dimensions,
            );
        } catch (error) {
            if (
                extractErrorMessage(error)
                    .toLowerCase()
                    .includes('CanvasRenderer is not yet implemented'.toLowerCase())
            ) {
                log.warning('Pixi cannot be tested in this environment.');
            } else {
                throw error;
            }
        }
    });
});
