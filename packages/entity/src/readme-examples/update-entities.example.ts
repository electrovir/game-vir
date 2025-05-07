import {createPixi, defineEntitySuite} from '../index.js';

const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

const entityStore = new EntityStore({
    pixi: await createPixi(),
    context: {movementSpeed: 6},
    registeredEntities: [],
});

entityStore.pixi.ticker.add(() => {
    entityStore.updateAllEntities();
});
