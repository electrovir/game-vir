import {waitUntil} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    MultiplayerController,
    type ServiceAndRoomConnectionState,
} from './multiplayer-controller.js';

describe(MultiplayerController.name, () => {
    it('handles failure to connect to a room with port scanning', async () => {
        let externalState: undefined | ServiceAndRoomConnectionState;

        // eslint-disable-next-line sonarjs/constructor-for-side-effects
        new MultiplayerController({
            listeners: {
                frame() {},
                connectionUpdate(internalState) {
                    externalState = internalState;
                },
            },
            multiplayer: {
                backendOrigin: 'http://localhost:0',
                portScanOptions: {
                    timeout: {
                        seconds: 5,
                    },
                },
            },
        });

        await waitUntil.instanceOf(Error, () => externalState?.service);
    });
    it('handles failure to connect to a room', async () => {
        let externalState: undefined | ServiceAndRoomConnectionState;

        // eslint-disable-next-line sonarjs/constructor-for-side-effects
        new MultiplayerController({
            listeners: {
                frame() {},
                connectionUpdate(internalState) {
                    externalState = internalState;
                },
            },
            multiplayer: {
                backendOrigin: 'http://localhost:0',
            },
        });

        await waitUntil.instanceOf(Error, () => externalState?.service, {
            timeout: {
                seconds: 20,
            },
        });
    });
});
