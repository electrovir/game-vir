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
