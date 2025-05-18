# @game-vir/audio

A package for storing, loading, unloading, and playing audio files.

API reference: https://electrovir.github.io/game-vir/audio

# Install

```sh
npm i @game-vir/audio
```

# Usage

The `AudioPlayer` class is the main entry point to this package:

<!-- example-link: src/readme-examples/setup.example.ts -->

```TypeScript
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
```
