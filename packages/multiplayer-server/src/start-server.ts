import {
    startService,
    type StartServiceOutput,
    type StartServiceUserOptions,
} from '@rest-vir/run-service';
import {
    implementMultiplayerService,
    MultiplayerServerOptions,
} from './implemented-multiplayer-service.js';

/**
 * Starts the multiplayer server.
 *
 * @category Main
 */
export async function startMultiplayerServer(
    options: Readonly<
        MultiplayerServerOptions &
            Pick<StartServiceUserOptions, 'debug' | 'host' | 'lockPort' | 'port'>
    >,
) {
    const {service, serverState} = implementMultiplayerService(options);
    const startOutput = (await startService(service, {
        /** This server cannot currently be distributed. */
        workerCount: 1,
    })) as Required<Omit<StartServiceOutput, 'cluster' | 'worker'>>;

    return {
        ...startOutput,
        serverState,
    };
}
