import {round} from '@augment-vir/common';
import {type RequireExactlyOne} from 'type-fest';

/**
 * An angle definition defined in either radians or degrees, with accessors for both radians and
 * degrees. Values are rounded according to the given `digits` option. An instance of this class is
 * readonly: to get updated values, construct a new instance.
 *
 * @category Math
 */
export class Angle {
    /** The angle's value expressed in radians. */
    public readonly radians: number;
    /** The angle's value expressed in degrees. */
    public readonly degrees: number;

    constructor(
        /** Original angle value, either in radians or degrees. */
        originalValue: RequireExactlyOne<{
            radians: number;
            degrees: number;
        }>,
        /** Angle options. Set to `undefined` to disable all options. */
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
        this.radians = round(originalValue.radians ?? (Math.PI * originalValue.degrees) / 180, {
            digits: options?.digits,
        });
        this.degrees = round(originalValue.degrees ?? (originalValue.radians * 180) / Math.PI, {
            digits: options?.digits,
        });
    }
}
