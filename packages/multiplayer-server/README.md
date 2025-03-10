# @game-vir/multiplayer-server

The backend counterpart of https://www.npmjs.com/package/@game-vir/multiplayer. This server facilitates multiplayer client connections (handled via WebSocket but then handed off to WebRTC) and multiplayer room lobbies.

Reference docs: https://electrovir.github.io/game-vir/multiplayer-server

## Install

```sh
npm i @game-vir/multiplayer-server
```

## Usage

<!-- example-link: src/start-server.example.ts -->

```TypeScript
import {startMultiplayerServer} from '@game-vir/multiplayer-server';

await startMultiplayerServer({
    port: 3000,
});
```

For more options, see the type definitions or reference docs.
