import {createPixiApp, defineEntitySuite} from '../index.js';

const {EntityStore} = defineEntitySuite<{movementSpeed: number}>();

const entityStore = new EntityStore(await createPixiApp(), {movementSpeed: 6});

entityStore.pixiApp.ticker.add(() => {
    entityStore.updateAllEntities();
});
