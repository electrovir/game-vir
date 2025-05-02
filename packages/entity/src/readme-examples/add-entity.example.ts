import {createPixiApp, defineEntitySuite} from '../index.js';
import {Block} from './define-entity.example.js';

const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

const entityStore = new EntityStore({
    pixiApp: await createPixiApp(),
    context: {movementSpeed: 6},
});

entityStore.addEntity(Block, {x: 15, y: 20});
