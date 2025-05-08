import {startMultiplayerServer} from './index.js';

await startMultiplayerServer({
    games: {
        byId: {
            myGame: 'https://my-frontend.example.com',
        },
    },
    port: 3000,
});
