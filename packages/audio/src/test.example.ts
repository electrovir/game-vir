import {AudioPlayer} from './audio-player.js';

const player = new AudioPlayer(
    {
        confirm: {
            sources: ['/confirmation_002.mp3'],
            createEffects(audioContext) {
                const wave1 = audioContext.createWaveShaper();
                const wave2 = audioContext.createWaveShaper();
                wave1.curve = makeDistortionCurve(20);
                wave2.curve = makeDistortionCurve(100);
                return [
                    wave1,
                    wave2,
                ];
            },
        },
        die: {
            sources: ['/powerUp3.mp3'],
        },
    },
    {
        volume: 0.4,
    },
);

const audioFile = await player.load('confirm');

setInterval(() => playSound(), 1000);

async function playSound() {
    console.info('playing');
    await player.play.confirm();
}

function makeDistortionCurve(amount: number): Float32Array {
    const samples = 44_100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; i++) {
        const x = (i * 2) / samples - 1;
        curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
}
