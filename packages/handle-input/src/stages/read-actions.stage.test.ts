import {omitObjectKeys, wait} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {InputDeviceKey, InputDeviceType} from 'input-device-handler';
import {stageIdToString, StagesToFullState, VirLine} from 'vir-line';
import {
    ActionsBindingsMap,
    createTypedReadActionsStage,
    readActionsStage,
} from './read-actions.stage';
import {InputDirection} from './read-raw-input.stage';

enum TestAction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',

    Submit = 'submit',
    Reject = 'reject',
    Pause = 'pause',
}

describe(stageIdToString(readActionsStage.stageId), () => {
    it('maps inputs to actions', async () => {
        const virLine = new VirLine([readActionsStage], {
            playersActionsBindings: {
                '1': {
                    heldAction: [
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-ArrowUp',
                        },
                    ],
                    unboundAction: [],
                    unusedAction: [
                        {
                            deviceKey: InputDeviceKey.Gamepad1,
                            direction: InputDirection.Positive,
                            inputName: 'button-4',
                        },
                    ],
                    instantAction: [
                        {
                            deviceKey: InputDeviceKey.Gamepad2,
                            direction: InputDirection.Positive,
                            inputName: 'button-1',
                        },
                    ],
                    mappedDeviceAction: [
                        {
                            deviceKey: InputDeviceKey.Gamepad1,
                            direction: InputDirection.Positive,
                            inputName: 'button-3',
                        },
                    ],
                    cumulativeAction: [
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
            playersActiveActions: {
                '1': {
                    heldAction: {
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
            omitObjectKeys(virLine.currentState.playersActiveActions!['1']!, ['heldAction']),
            {
                instantAction: {
                    holdDuration: {milliseconds: 0},
                    value: 0.5,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
                mappedDeviceAction: {
                    holdDuration: {milliseconds: 0},
                    value: 2,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
                cumulativeAction: {
                    holdDuration: {milliseconds: 0},
                    value: 1.5,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
            },
        );
        assert.isAbove(
            virLine.currentState.playersActiveActions?.['1']?.['heldAction']?.holdDuration
                .milliseconds || 0,
            1080,
        );
    });

    it('wipes all actions if there are no inputs', async () => {
        const virLine = new VirLine([readActionsStage], {
            playersActionsBindings: {
                '1': {
                    heldAction: [
                        {
                            deviceKey: 'keyboard',
                            direction: InputDirection.Positive,
                            inputName: 'button-ArrowUp',
                        },
                    ],
                },
            },
            playersActiveActions: {
                '1': {
                    heldAction: {
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

        assert.deepStrictEqual(virLine.currentState.playersActiveActions, {});
    });

    it('works without a device map', async () => {
        const virLine = new VirLine([readActionsStage], {
            playersActionsBindings: {
                '1': {
                    myAction: [
                        {
                            deviceKey: '0',
                            direction: InputDirection.Positive,
                            inputName: 'button-3',
                        },
                    ],
                },
            },
            playersActiveActions: {},
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

        assert.deepStrictEqual(virLine.currentState.playersActiveActions, {
            '1': {
                myAction: {
                    holdDuration: {milliseconds: 0},
                    value: 2,
                    actCount: 0,
                    lastActDuration: {milliseconds: 0},
                },
            },
        });
    });

    it('maintains duration when the action trigger changes', async () => {
        const virLine = new VirLine([readActionsStage], {
            playersActionsBindings: {
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
            playersActiveActions: {},
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

        assert.deepStrictEqual(virLine.currentState.playersActiveActions, {
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
            virLine.currentState.playersActiveActions?.['1']?.left?.holdDuration.milliseconds || 0;

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
            virLine.currentState.playersActiveActions?.['1']?.left?.holdDuration.milliseconds || 0;

        assert.isAbove(secondDuration, firstDuration);
    });
});

describe('ActionsBindingsMap', () => {
    it('allows any action names by default', () => {
        const actions: ActionsBindingsMap = {};

        actions['my action'] = [];
        actions['my action 2'] = [];
    });
    it('restricts action names', () => {
        const actions: ActionsBindingsMap<TestAction> = {};

        // @ts-expect-error: not `TestAction`
        actions['my action'] = [];
        actions[TestAction.Down] = [];
    });
});

describe(createTypedReadActionsStage.name, () => {
    it('restricts action names', () => {
        const myStage = createTypedReadActionsStage<TestAction>();

        type State = StagesToFullState<[typeof myStage]>;

        const myState: State = {
            playersActiveActions: {
                [InputDeviceKey.Gamepad1]: {
                    [TestAction.Down]: {
                        holdDuration: {milliseconds: 1},
                        value: 1,
                        actCount: 0,
                        lastActDuration: {milliseconds: 0},
                    },
                    // @ts-expect-error: this is not an allowed action name
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
