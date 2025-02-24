import {defaultMultiplayerServicePort} from '@game-vir/multiplayer';
import {startMultiplayerServer} from '@game-vir/multiplayer-server';

await startMultiplayerServer({
    port: defaultMultiplayerServicePort,
});
