import {ControllerFrameEvent, MultiplayerController} from '../index.js';

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
});

myController.listen(ControllerFrameEvent, (event) => {
    const actions = event.detail;
    /** Take the list of `actions` and apply them to your game state here. */
});
myController.startSingleplayer();

/** Apply actions to your local state. */
myController.act({
    action: 'jump',
});
