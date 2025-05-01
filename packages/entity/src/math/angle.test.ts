import {round} from '@augment-vir/common';
import {describe, itCases} from '@augment-vir/test';
import {Angle} from './angle.js';

describe(Angle.name, () => {
    function testAngle(value: ConstructorParameters<typeof Angle>[0]) {
        return new Angle(value, {digits: 4});
    }

    itCases(testAngle, [
        {
            it: 'works with a radian input',
            input: {
                radians: Math.PI,
            },
            expect: {
                degrees: 180,
                radians: round(Math.PI, {digits: 4}),
                options: {
                    digits: 4,
                },
            },
        },
        {
            it: 'works with a degree input',
            input: {
                degrees: 180,
            },
            expect: {
                degrees: 180,
                radians: round(Math.PI, {digits: 4}),
                options: {
                    digits: 4,
                },
            },
        },
    ]);
});
