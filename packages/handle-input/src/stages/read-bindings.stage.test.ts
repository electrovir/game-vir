import {omitObjectKeys, wait} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {InputDeviceKey, InputDeviceType} from 'input-device-handler';
import {stageIdToString, StagesToFullState, VirLine} from 'vir-line';
import {BindingsMap, createTypedReadBindingsStage, readBindingsStage} from './read-bindings.stage';
import {InputDirection} from './read-raw-input.stage';

enum TestBinding {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',

    Submit = 'submit',
    Reject = 'reject',
    Pause = 'pause',
}

describe(stageIdToString(readBindingsStage.stageId), () => {
    it('maps inputs to active bindings', async () => {
        const virLine = new VirLine([readBindingsStage], {
            playersBindings: {
                '1': {
                    heldBinding: [
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-ArrowUp',
                        },
                    ],
                    unboundBinding: [],
                    unusedBinding: [
                        {
                            deviceKey: InputDeviceKey.Gamepad1,
                            direction: InputDirection.Positive,
                            inputName: 'button-4',
                        },
                    ],
                    instantBinding: [
                        {
                            deviceKey: InputDeviceKey.Gamepad2,
                            direction: InputDirection.Positive,
                            inputName: 'button-1',
                        },
                    ],
                    mappedDeviceBinding: [
                        {
                            deviceKey: InputDeviceKey.Gamepad1,
                            direction: InputDirection.Positive,
                            inputName: 'button-3',
                        },
                    ],
                    cumulativeBinding: [
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-KeyA',
                        },
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-KeyB',
                        },
                    ],
                },
            },
            playersActiveBindings: {
                '1': {
                    heldBinding: {
                        holdDuration: {
                            milliseconds: 1000,
                        },
                        value: 1,
                        actCount: 0,
                        lastActDuration: {milliseconds: 0},
                    },
                },
            },
            deviceKeyMap: {
                '0': '1',
            },
            rawInputs: {
                '0': {
                    'button-3': {
                        deviceKey: '0',
                        deviceName: 'test gamepad',
                        deviceType: InputDeviceType.Gamepad,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-3',
                        inputValue: 2,
                    },
                    'button-1': {
                        deviceKey: '0',
                        deviceName: 'test gamepad',
                        deviceType: InputDeviceType.Gamepad,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-1',
                        inputValue: 0.5,
                    },
                },
                keyboard: {
                    'button-KeyA': {
                        deviceKey: 'keyboard',
                        deviceName: 'keyboard',
                        deviceType: InputDeviceType.Keyboard,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-KeyA',
                        inputValue: 0.5,
                    },
                    'button-KeyB': {
                        deviceKey: 'keyboard',
                        deviceName: 'keyboard',
                        deviceType: InputDeviceType.Keyboard,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-KeyA',
                        inputValue: 1,
                    },
                    'button-ArrowUp': {
                        deviceKey: 'keyboard',
                        deviceName: 'keyboard',
                        deviceType: InputDeviceType.Keyboard,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-ArrowUp',
                        inputValue: 1,
                    },
                },
            },
        });

        await wait(100);
        await virLine.triggerUpdate();

        assert.deepStrictEqual(
            omitObjectKeys(virLine.currentState.playersActiveBindings!['1']!, ['heldBinding']),
            {
                instantBinding: {
                    holdDuration: {milliseconds: 0},
                    value: 0.5,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
                mappedDeviceBinding: {
                    holdDuration: {milliseconds: 0},
                    value: 2,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
                cumulativeBinding: {
                    holdDuration: {milliseconds: 0},
                    value: 1.5,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
            },
        );
        assert.isAbove(
            virLine.currentState.playersActiveBindings?.['1']?.['heldBinding']?.holdDuration
                .milliseconds || 0,
            1080,
        );
    });

    it('wipes all active bindings if there are no inputs', async () => {
        const virLine = new VirLine([readBindingsStage], {
            playersBindings: {
                '1': {
                    heldBinding: [
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-ArrowUp',
                        },
                    ],
                },
            },
            playersActiveBindings: {
                '1': {
                    heldBinding: {
                        holdDuration: {
                            milliseconds: 1000,
                        },
                        value: 1,
                        actCount: 0,
                        lastActDuration: {milliseconds: 0},
                    },
                },
            },
            rawInputs: {},
        });

        await virLine.triggerUpdate();

        assert.deepStrictEqual(virLine.currentState.playersActiveBindings, {});
    });

    it('works without a device map', async () => {
        const virLine = new VirLine([readBindingsStage], {
            playersBindings: {
                '1': {
                    myBinding: [
                        {
                            deviceKey: '0',
                            direction: InputDirection.Positive,
                            inputName: 'button-3',
                        },
                    ],
                },
            },
            playersActiveBindings: {},
            rawInputs: {
                '0': {
                    'button-3': {
                        deviceKey: '0',
                        deviceName: 'test gamepad',
                        deviceType: InputDeviceType.Gamepad,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-3',
                        inputValue: 2,
                    },
                },
            },
        });

        await virLine.triggerUpdate();

        assert.deepStrictEqual(virLine.currentState.playersActiveBindings, {
            '1': {
                myBinding: {
                    holdDuration: {milliseconds: 0},
                    value: 2,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
            },
        });
    });

    it('maintains duration when the binding trigger changes', async () => {
        const virLine = new VirLine([readBindingsStage], {
            playersBindings: {
                '1': {
                    left: [
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-KeyA',
                        },
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-ArrowLeft',
                        },
                    ],
                },
            },
            playersActiveBindings: {},
            rawInputs: {
                keyboard: {
                    'button-ArrowLeft': {
                        deviceKey: 'keyboard',
                        deviceName: 'keyboard',
                        deviceType: InputDeviceType.Keyboard,
                        direction: InputDirection.Positive,
                        duration: {milliseconds: 0},
                        inputName: 'button-ArrowLeft',
                        inputValue: 1,
                    },
                },
            },
        });

        await virLine.triggerUpdate();

        assert.deepStrictEqual(virLine.currentState.playersActiveBindings, {
            '1': {
                left: {
                    holdDuration: {milliseconds: 0},
                    value: 1,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
            },
        });

        await wait(100);

        await virLine.triggerUpdate();

        const firstDuration: number =
            virLine.currentState.playersActiveBindings?.['1']?.left?.holdDuration.milliseconds || 0;

        assert.isAbove(firstDuration, 0);

        await wait(100);

        virLine.currentState.rawInputs = {
            keyboard: {
                'button-KeyA': {
                    deviceKey: 'keyboard',
                    deviceName: 'keyboard',
                    deviceType: InputDeviceType.Keyboard,
                    direction: InputDirection.Positive,
                    duration: {milliseconds: 0},
                    inputName: 'button-KeyA',
                    inputValue: 1,
                },
            },
        };
        await virLine.triggerUpdate();

        const secondDuration: number =
            virLine.currentState.playersActiveBindings?.['1']?.left?.holdDuration.milliseconds || 0;

        assert.isAbove(secondDuration, firstDuration);
    });
});

describe('BindingsMap', () => {
    it('allows any binding names by default', () => {
        const bindings: BindingsMap = {};

        bindings['my binding'] = [];
        bindings['my binding 2'] = [];
    });
    it('restricts binding names', () => {
        const bindings: BindingsMap<TestBinding> = {};

        // @ts-expect-error: not an allowed binding name
        bindings['my binding'] = [];
        bindings[TestBinding.Down] = [];
    });
});

describe(createTypedReadBindingsStage.name, () => {
    it('restricts binding names', () => {
        const myStage = createTypedReadBindingsStage<TestBinding>();

        type State = StagesToFullState<[typeof myStage]>;

        const myState: State = {
            playersActiveBindings: {
                [InputDeviceKey.Gamepad1]: {
                    [TestBinding.Down]: {
                        holdDuration: {milliseconds: 1},
                        value: 1,
                        actCount: 0,
                        lastActDuration: {milliseconds: 0},
                    },
                    // @ts-expect-error: this is not an allowed binding name
                    invalid: {
                        duration: {milliseconds: 1},
                        value: 1,
                        actCount: 0,
                        lastActDuration: {milliseconds: 0},
                    },
                },
            },
        };
    });
});
