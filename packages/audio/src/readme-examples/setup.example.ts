import {AudioPlayer} from '../audio-player.js';

export const audioPlayer = new AudioPlayer({
    sound1: {
        /**
         * An array of possible source file URLs. The first one that is supported by the current
         * browser will be used.
         */
        sources: [
            '/sound1.flac',
            '/sound1.mp3',
        ],
    },
    sound2: {
        sources: [
            '/sound2.mp3',
        ],
    },
});

await audioPlayer.loadAll();

await audioPlayer.play.sound1();
