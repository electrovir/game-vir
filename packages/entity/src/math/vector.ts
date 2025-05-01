import {type Coords, round} from '@augment-vir/common';
import {Angle} from './angle.js';

/**
 * A vector (combination of magnitude and angle) definition. This can be defined in the following
 * ways:
 *
 * - `Vector.fromPoints()`
 * - `Vector.fromComponents()`
 * - `new Vector()`
 *
 * @category Math
 */
export class Vector {
    /** Create a new Vector instance by calculating the distance and angle between two points. */
    public static fromPoints(
        point1: Coords,
        point2: Coords,
        options:
            | {
                  /**
                   * Number of digits to round all values to. Set to `undefined` to disable
                   * rounding.
                   */
                  digits: number | undefined;
              }
            | undefined,
    ) {
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        return Vector.fromComponents({x: dx, y: dy}, options);
    }
    /** Create a new Vector instance from its X and Y components. */
    public static fromComponents(
        {x, y}: Coords,
        options:
            | {
                  /**
                   * Number of digits to round all values to. Set to `undefined` to disable
                   * rounding.
                   */
                  digits: number | undefined;
              }
            | undefined,
    ) {
        const radians = Math.atan2(y, x);

        return new Vector(Math.hypot(x, y), new Angle({radians}, options), options);
    }

    /** The vector's distance in its given angle. (This can be modified after Vector construction.) */
    public magnitude: number;

    constructor(
        /** The vector's original magnitude. (This can be modified after Vector construction.) */
        magnitude: number,
        /** The vector's original angle. (This can be modified after Vector construction.) */
        public angle: Angle,
        /** Vector options. Set to `undefined` to disable all options. */
        public readonly options:
            | {
                  /**
                   * Number of digits to round all values to. Set to `undefined` to disable
                   * rounding.
                   */
                  digits: number | undefined;
              }
            | undefined,
    ) {
        this.magnitude = round(magnitude, {digits: options?.digits});
    }

    /** Splits the vector into its X and Y components. */
    public toComponents() {
        const x = round(
            round(Math.cos(this.angle.radians), {digits: this.options?.digits}) * this.magnitude,
            {
                digits: this.options?.digits,
            },
        );
        const y = round(
            round(Math.sin(this.angle.radians), {digits: this.options?.digits}) * this.magnitude,
            {
                digits: this.options?.digits,
            },
        );

        return {x, y};
    }
}
