import {Graphics, type ViewContainer} from 'pixi.js';
import {defineEntitySuite, entityPositionParamsShape} from '../index.js';

const {defineEntity} = defineEntitySuite<{movementSpeed: number}>();

export class Block extends defineEntity({
    key: 'Block',
    serializationShape: entityPositionParamsShape,
}) {
    public override update(): void {
        this.view.x += this.context.movementSpeed;
        this.view.y += this.context.movementSpeed;
    }

    public override createView(): ViewContainer {
        const graphic = new Graphics().rect(0, 0, 100, 100).fill('red');

        graphic.x = this.params.x;
        graphic.y = this.params.y;

        return graphic;
    }
}
