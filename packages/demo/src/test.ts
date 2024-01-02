import {areJsonEqual} from '@augment-vir/common';
import {WholeGameStateChangeEvent, initMockGameState, setupMockGamePipeline} from 'game-vir';
import {assertTypeOf} from 'run-time-assertions';

/** Import this in index.html to test it directly in the browser. */

function setupTestGamePipeline() {
    const gamePipeline = setupMockGamePipeline();
    console.assert(
        areJsonEqual(gamePipeline.currentState, initMockGameState),
        'state should not have changed yet',
    );

    return gamePipeline;
}

async function main() {
    const listenerData: (typeof gamePipeline.currentState)[] = [];

    const gamePipeline = setupTestGamePipeline();
    gamePipeline.listen(WholeGameStateChangeEvent, (event) => {
        assertTypeOf(event.detail).toEqualTypeOf<typeof gamePipeline.currentState>();
        listenerData.push(event.detail);
    });
    const framePromise = gamePipeline.triggerSingleFrame();
    console.assert(listenerData.length === 0, 'listener should not have been called synchronously');

    await framePromise;

    console.assert(
        areJsonEqual(listenerData, [
            {
                enemies: [
                    {
                        name: 'enemy 1',
                        position: {
                            x: 2,
                            y: 1,
                        },
                    },
                    {
                        name: 'enemy 2',
                        position: {
                            x: 1,
                            y: 1,
                        },
                    },
                    {
                        name: 'enemy 3',
                        position: {
                            x: 2,
                            y: 1,
                        },
                    },
                ],
                player: {
                    energy: 100,
                    hp: 100,
                    name: 'test player',
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            },
        ]),
    );
}

main();
