import {Graphics} from 'pixi.js';
import {defineEntitySuite, entityPositionParamsShape} from '../index.js';

const {defineEntity} = defineEntitySuite<{
    /** Optionally provide a Context type. */
    movementSpeed: number;
}>();

export class Block extends defineEntity({
    key: 'Block',
    paramsShape: entityPositionParamsShape,
    paramsMap: {
        hitbox: {
            x: true,
            y: true,
        },
        view: {
            x: true,
            y: true,
        },
    },
}) {
    public override update(): void {
        this.params.x += this.context.movementSpeed;
        this.params.y += this.context.movementSpeed;
    }

    public override createView() {
        /**
         * View and hitbox position don't need to be manually set their counterparts from params;
         * they will be updated to match them because of the above `paramsMap` definition.
         */
        return {
            view: new Graphics().rect(0, 0, 100, 100).fill('red'),
            /** Hitboxes are optional. */
            hitbox: this.hitboxSystem.createBox({}, 100, 100),
        };
    }
}
