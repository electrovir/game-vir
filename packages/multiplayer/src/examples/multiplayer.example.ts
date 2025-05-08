import {MultiplayerController} from '../index.js';

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
