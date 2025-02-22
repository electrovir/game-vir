import {generateApi} from '@rest-vir/define-service';
import {defineMultiplayerService} from './multiplayer-service.js';

/**
 * The output from {@link createMultiplayerApi}, regardless of what the given `serverOrigin` is.
 *
 * @category Main
 */
export type MultiplayerApi = ReturnType<typeof createMultiplayerApi>;

/**
 * Creates an API for accessing the multiplayer server at the given origin.
 *
 * @category Main
 */
export function createMultiplayerApi(serverOrigin: string) {
    return generateApi(defineMultiplayerService(serverOrigin));
}
