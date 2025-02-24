import {check} from '@augment-vir/assert';
import {generateApi, mapServiceDevPort} from '@rest-vir/define-service';
import {defaultMultiplayerServiceOrigin, defineMultiplayerService} from './multiplayer-service.js';

/**
 * The output from {@link createMultiplayerApi}, regardless of what the given `serverOrigin` is.
 *
 * @category Main
 */
export type MultiplayerApi = Awaited<ReturnType<typeof createMultiplayerApi>>;

/**
 * Creates an API for accessing the multiplayer server at the given origin.
 *
 * @category Main
 */
export async function createMultiplayerApi({
    serviceOrigin = defaultMultiplayerServiceOrigin,
    devScanOptions,
}: {
    serviceOrigin?: string;
    devScanOptions: undefined | Parameters<typeof mapServiceDevPort>[1] | true;
}) {
    const initialService = defineMultiplayerService(serviceOrigin);

    const service = devScanOptions
        ? await mapServiceDevPort(
              initialService,
              check.isBoolean(devScanOptions) ? undefined : devScanOptions,
          )
        : initialService;

    return generateApi(service);
}
