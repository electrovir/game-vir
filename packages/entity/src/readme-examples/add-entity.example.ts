import {createPixi, defineEntitySuite} from '../index.js';
import {Block} from './define-entity.example.js';

const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

const entityStore = new EntityStore({
    pixi: await createPixi(),
    context: {movementSpeed: 6},
});

entityStore.addEntity(Block, {x: 15, y: 20});
