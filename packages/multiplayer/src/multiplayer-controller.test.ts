import {waitUntil} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {MultiplayerConnectionState, MultiplayerController} from './multiplayer-controller.js';

describe(MultiplayerController.name, () => {
    it('handles failure to connect to a room with port scanning', async () => {
        let externalState: undefined | MultiplayerConnectionState;

        // eslint-disable-next-line sonarjs/constructor-for-side-effects
        new MultiplayerController({
            listeners: {
                frame() {},
                connectionUpdate(internalState) {
                    externalState = internalState;
                },
            },
            multiplayer: {
                serviceOrigin: 'http://localhost:0',
                portScanOptions: {
                    timeout: {
                        seconds: 5,
                    },
                },
            },
        });

        await waitUntil.strictEquals(
            MultiplayerConnectionState.ServiceFailure,
            () => externalState,
        );
    });
    it('handles failure to connect to a room', async () => {
        let externalState: undefined | MultiplayerConnectionState;

        // eslint-disable-next-line sonarjs/constructor-for-side-effects
        new MultiplayerController({
            listeners: {
                frame() {},
                connectionUpdate(internalState) {
                    externalState = internalState;
                },
            },
            multiplayer: {
                serviceOrigin: 'http://localhost:0',
            },
        });

        await waitUntil.strictEquals(
            MultiplayerConnectionState.ServiceFailure,
            () => externalState,
            {
                timeout: {
                    seconds: 20,
                },
            },
        );
    });
});
