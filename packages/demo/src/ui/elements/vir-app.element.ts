import {defineElementNoInputs, html} from 'element-vir';
import {setupMockGamePipeline} from 'game-vir';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    initCallback() {
        doPipelineStuff();
    },
    renderCallback() {
        return html`
            demo
        `;
    },
});

async function doPipelineStuff() {
    const listenerData: number[][] = [];
    const wrongData: number[] = [];

    const gamePipeline = setupMockGamePipeline();
    gamePipeline.addStateListener(
        [
            'enemies',
            'position',
            'x',
        ],
        (newData) => {
            listenerData.push(newData);
        },
    );
    gamePipeline.addStateListener(
        [
            'player',
            'position',
            'x',
        ],
        (newData) => {
            wrongData.push(newData);
        },
    );
    const callbackPromise = gamePipeline.triggerSingleFrame();

    await callbackPromise;

    if (wrongData.length) {
        throw new Error('player listener should not have fired');
    }

    if (listenerData[0]?.[0] !== 2) {
        throw new Error('WRONG');
    }
    console.log('RIGHT');
}
