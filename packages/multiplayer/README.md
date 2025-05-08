# @game-vir/multiplayer

A multiplayer service definition that uses WebSockets to connect to a room host and then WebRTC to connect the host to each of its clients.

Game state is synced between all room clients using a [lock-step](https://en.wikipedia.org/wiki/Lockstep_%28computing%29) architecture.

Single player game state updates are also supported.

Reference docs: https://electrovir.github.io/game-vir/multiplayer

See the multiplayer connection server here: https://www.npmjs.com/package/@game-vir/multiplayer-server

## Install

```sh
npm i @game-vir/multiplayer
```

## Usage

<!-- example-link: src/examples/multiplayer.example.ts -->

```TypeScript
import {MultiplayerController} from '@game-vir/multiplayer';

type GameAction =
    | {
          action: 'jump';
      }
    | {
          action: 'move';
          direction: 'right' | 'left';
      };

const myController = new MultiplayerController<GameAction>({
    gameId: 'multi',
    listeners: {
        frame(actions) {
            /** Take the list of `actions` and apply them to your game state here. */
        },
        roomListUpdate(rooms) {
            /**
             * Render a list of available multiplayer rooms to your user so they can select one to
             * join.
             */
        },
    },
    multiplayer: {
        /** The origin of your multiplayer connection server. */
        backendOrigin: 'http://localhost:3000',
    },
});

await myController.joinOrCreateRoom({
    /**
     * If the given room id already exists on the server, this will join it.
     *
     * If not, this will create a new room with the given room id, name, and password requirement.
     */
    roomId: 'some-room-id-goes-here',
    /**
     * Name of the room. This is only used for displaying a human friendly name to clients browsing
     * the current room list.
     */
    roomName: 'name of room',
    /** Set to empty string if there is no password. */
    roomPassword: '',
});

/** Apply actions to your local state and propagate them to all other room clients. */
myController.act({
    action: 'jump',
});
```

For single player, simply set `singleplayer` to `true`:

<!-- example-link: src/examples/singleplayer.example.ts -->

```TypeScript
import {MultiplayerController} from '@game-vir/multiplayer';

type GameAction =
    | {
          action: 'jump';
      }
    | {
          action: 'move';
          direction: 'right' | 'left';
      };

const myController = new MultiplayerController<GameAction>({
    gameId: 'single',
    listeners: {
        frame(actions) {
            /** Take the list of `actions` and apply them to your game state here. */
        },
        roomListUpdate(rooms) {
            /**
             * Render a list of available multiplayer rooms to your user so they can select one to
             * join.
             */
        },
    },
    singleplayer: true,
});

/** Apply actions to your local state. */
myController.act({
    action: 'jump',
});
```
