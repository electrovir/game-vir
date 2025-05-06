import {Graphics} from 'pixi.js';
import {defineEntitySuite, entityPositionParamsShape} from '../index.js';

const {defineEntity} = defineEntitySuite<{movementSpeed: number}>();

export class Block extends defineEntity({
    key: 'Block',
    paramsShape: entityPositionParamsShape,
}) {
    public override update(): void {
        this.params.x += this.context.movementSpeed;
        this.params.y += this.context.movementSpeed;
    }

    public override createView() {
        /**
         * View and hitbox position don't need to be manually set, as they will be updated to match
         * `this.params` automatically.
         */

        return {
            view: new Graphics().rect(0, 0, 100, 100).fill('red'),
            hitbox: this.hitboxSystem.createBox({}, 100, 100),
        };
    }
}
