import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {AudioPlayer, type AudioLoadProgressCallbackParams} from './audio-player.js';
import {Codec} from './codecs.js';
import {longerMp3FileUrl, shortMp3FileUrl} from './files.mock.js';
import {makePlayable} from './make-playable.mock.js';

describe(AudioPlayer.name, () => {
    it('rejects a missing file extension', async () => {
        await makePlayable();

        await assert.throws(() =>
            new AudioPlayer({
                myFile: {
                    sources: ['invalid'],
                },
            }).play.myFile(),
        );
    });
    it('allows a specified codec', () => {
        assert.isDefined(
            new AudioPlayer({
                myFile: {
                    sources: [
                        {
                            url: 'invalid',
                            codec: Codec.mp3,
                        },
                    ],
                },
            }),
        );
    });
    it('destroys all files', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: [shortMp3FileUrl],
            },
        });
        await player.loadAll();

        const audioFile = player.audioFiles.myFile;
        assert.isDefined(audioFile);

        assert.isFalse(player.isDestroyed);
        assert.isFalse(audioFile.isDestroyed);

        await player.destroy();

        assert.isTrue(player.isDestroyed);
        assert.isTrue(audioFile.isDestroyed);
        assert.isEmpty(player.audioFiles);
    });
    it('can be destroyed multiple times without error', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: ['invalid.mp3'],
            },
        });

        await player.destroy();
        await player.destroy();
    });
    it('loads a real audio file', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: [longerMp3FileUrl],
            },
        });

        await player.load('myFile');
    });
    it('loads a real audio file', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: [longerMp3FileUrl],
            },
        });

        await player.load('myFile');
    });
    it('sets all isPlayingEnabled', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: [shortMp3FileUrl],
            },
            myFile2: {
                sources: [shortMp3FileUrl],
            },
        });

        await player.loadAll();
        const audioFile = player.audioFiles.myFile;
        const audioFile2 = player.audioFiles.myFile2;
        assert.isDefined(audioFile);
        assert.isDefined(audioFile2);

        await player.play.myFile();

        await makePlayable();

        await player.play.myFile();

        await waitUntil.isTrue(async () => {
            await player.play.myFile();

            return audioFile.isAudioAllowed && audioFile2.isAudioAllowed;
        });
    });
    it('loads all files', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: [shortMp3FileUrl],
            },
            myFile2: {
                sources: [shortMp3FileUrl],
            },
        });

        assert.isEmpty(player.audioCache);

        await player.loadAll();

        assert.hasKey(player.audioCache, shortMp3FileUrl);
        assert.isLengthExactly(Object.keys(player.audioCache), 1);
    });
    it('loads and unloads multiple files', async () => {
        const player = new AudioPlayer({
            myFile: {
                sources: [shortMp3FileUrl],
            },
            myFile2: {
                sources: [shortMp3FileUrl],
            },
            myFile3: {
                sources: [longerMp3FileUrl],
            },
        });
        const progressResults: AudioLoadProgressCallbackParams[] = [];

        await player.load(
            {
                myFile: true,
                myFile2: true,
                myFile3: undefined,
            },
            (progress) => {
                progressResults.push(progress);
            },
        );

        assert.deepEquals(progressResults, [
            {
                finished: false,
                loaded: 1,
                total: 2,
            },
            {
                finished: true,
                loaded: 2,
                total: 2,
            },
        ]);

        assert.hasKeys(player.audioCache, [
            shortMp3FileUrl,
        ]);
        assert.strictEquals((await player.audioCache[shortMp3FileUrl]).using.size, 2);

        await player.load({
            myFile: false,
            myFile3: true,
        });

        assert.hasKeys(
            player.audioCache,
            [
                shortMp3FileUrl,
                longerMp3FileUrl,
            ],
            'short mp3 remains when still in use',
        );

        await player.load({
            myFile2: false,
        });

        assert.lacksKey(
            player.audioCache,
            shortMp3FileUrl,
            'should unload the file when no longer in use',
        );
    });
});
