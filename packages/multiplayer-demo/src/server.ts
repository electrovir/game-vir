import {defaultMultiplayerServicePort} from '@game-vir/multiplayer';
import {startMultiplayerServer} from '@game-vir/multiplayer-server';

await startMultiplayerServer({
    games: {
        default(origin) {
            return !!origin?.includes('localhost');
        },
    },
    port: defaultMultiplayerServicePort,
});
