import {assert} from '@augment-vir/assert';
import {wait} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {sendKeys} from '@web/test-runner-commands';
import {InputDeviceHandler, InputDeviceType} from 'input-device-handler';
import {stageIdToString, VirLine} from 'vir-line';
import {
    calculateInputDirection,
    InputDirection,
    RawInputs,
    readRawInputStage,
} from './read-raw-input.stage.js';

describe(stageIdToString(readRawInputStage.stageId), () => {
    it('reads keyboard inputs', async () => {
        const virLine = new VirLine([readRawInputStage], {
            deviceHandler: new InputDeviceHandler({disableMouseMovement: true}),
        });

        const frames: RawInputs['keyboard'][] = [];

        await virLine.triggerUpdate();
        frames.push(virLine.currentState.rawInputs?.keyboard);

        await sendKeys({
            down: 'ArrowUp',
        });

        await virLine.triggerUpdate();
        frames.push(virLine.currentState.rawInputs?.keyboard);

        await wait({milliseconds: 100});

        await virLine.triggerUpdate();
        const heldDuration =
            virLine.currentState.rawInputs?.keyboard?.['button-ArrowUp']?.duration.milliseconds;

        await sendKeys({
            up: 'ArrowUp',
        });

        await virLine.triggerUpdate();
        frames.push(virLine.currentState.rawInputs?.keyboard);

        assert.deepEquals(frames, [
            {},
            {
                'button-ArrowUp': {
                    deviceKey: 'keyboard',
                    deviceName: 'keyboard',
                    deviceType: InputDeviceType.Keyboard,
                    direction: InputDirection.Positive,
                    duration: {
                        /**
                         * The duration should always be 0 for the first frame wherein an input is
                         * activated.
                         */
                        milliseconds: 0,
                    },
                    inputName: 'button-ArrowUp',
                    inputValue: 1,
                },
            },
            {},
        ]);

        assert.isAbove(heldDuration || 0, 0);
    });
});

describe(calculateInputDirection.name, () => {
    itCases(calculateInputDirection, [
        {
            it: 'maps to flat',
            input: 0,
            expect: InputDirection.Flat,
        },
        {
            it: 'maps to positive',
            input: 1_000_000,
            expect: InputDirection.Positive,
        },
        {
            it: 'maps to negative',
            input: -1_000_000,
            expect: InputDirection.Negative,
        },
    ]);
});
