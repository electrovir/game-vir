import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {Angle} from './angle.js';
import {Vector} from './vector.js';

describe(Vector.name, () => {
    it('works from constructor', () => {
        const vector = new Vector(7, new Angle({degrees: 70}, {digits: 4}), {digits: 4});

        assert.isApproximately(vector.toComponents().x, 2.394, 0.01, 'x component mismatch');
        assert.isApproximately(vector.toComponents().y, 6.5779, 0.01, 'y component mismatch');
        assert.isApproximately(vector.angle.degrees, 70, 0.01, 'angle mismatch');
        assert.isApproximately(vector.magnitude, 7, 0.01, 'magnitude mismatch');
    });
    it('works from points', () => {
        const vector = Vector.fromPoints(
            {
                x: 10,
                y: 13,
            },
            {
                x: 12.394,
                y: 19.5779,
            },
            {
                digits: 4,
            },
        );

        assert.isApproximately(vector.toComponents().x, 2.394, 0.01, 'x component mismatch');
        assert.isApproximately(vector.toComponents().y, 6.5779, 0.01, 'y component mismatch');
        assert.isApproximately(vector.angle.degrees, 70, 0.01, 'angle mismatch');
        assert.isApproximately(vector.magnitude, 7, 0.01, 'magnitude mismatch');
    });
    it('works from components', () => {
        const vector = Vector.fromComponents(
            {
                x: 2.394,
                y: 6.5779,
            },
            {
                digits: 4,
            },
        );

        assert.isApproximately(vector.toComponents().x, 2.394, 0.01, 'x component mismatch');
        assert.isApproximately(vector.toComponents().y, 6.5779, 0.01, 'y component mismatch');
        assert.isApproximately(vector.angle.degrees, 70, 0.01, 'angle mismatch');
        assert.isApproximately(vector.magnitude, 7, 0.01, 'magnitude mismatch');
    });
    it('works on 45 degrees', () => {
        const vector = new Vector(
            7,
            new Angle(
                {
                    degrees: 45,
                },
                {
                    digits: 4,
                },
            ),
            {
                digits: 4,
            },
        );

        assert.deepEquals(vector.toComponents(), {
            x: 4.9497,
            y: 4.9497,
        });
    });
});
