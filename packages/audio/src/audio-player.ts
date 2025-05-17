import {check} from '@augment-vir/assert';
import {
    clamp,
    makeWritable,
    mapObject,
    mapObjectValues,
    type ExtractKeysWithMatchingValues,
    type MaybePromise,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {ListenTarget} from 'typed-event-target';
import {
    AudioFile,
    PlayingEnabledEvent,
    setupEffects,
    type AllAudioFileEvents,
    type AudioFileCache,
    type AudioFileParams,
} from './audio-file.js';

/**
 * All audio files that an {@link AudioPlayer} instance will include. This base type is extended by
 * the type parameter and constructor argument of {@link AudioPlayer}.
 *
 * @category Internal
 */
export type AudioFiles = Readonly<
    Record<
        string,
        Readonly<Pick<AudioFileParams, 'sources' | 'volume' | 'fetch' | 'createEffects'>>
    >
>;

/**
 * Params for {@link AudioLoadProgressCallback}
 *
 * @category Internal
 */
export type AudioLoadProgressCallbackParams = {
    total: number;
    loaded: number;
    finished: boolean;
};

/**
 * Progress callback used by {@link AudioPlayer.load} when loading multiple files.
 *
 * @category Internal
 */
export type AudioLoadProgressCallback = (
    params: AudioLoadProgressCallbackParams,
) => MaybePromise<void>;

/**
 * Options for {@link AudioPlayer}.
 *
 * @category Internal
 */
export type AudioPlayerOptions = Pick<
    AudioFileParams,
    'fetch' | 'volume' | 'createEffects' | 'loadOnPlay'
>;

/**
 * Base type for the type parameter and main argument of {@link AudioPlayer.load} when loading
 * multiple files.
 *
 * @category Internal
 */
export type BaseFilesToLoad<Files extends Readonly<AudioFiles>> = Partial<
    Record<keyof Files, boolean | undefined>
>;

/**
 * An audio manager which handles keeping track of, loading, and playing multiple audio files.
 *
 * @category Main
 */
export class AudioPlayer<
    const Files extends Readonly<AudioFiles>,
> extends ListenTarget<AllAudioFileEvents> {
    public readonly audioFiles: Partial<Record<keyof Files, AudioFile>> = {};
    public readonly audioContext = new AudioContext();
    public readonly audioCache: AudioFileCache = {};
    public readonly isDestroyed = false as boolean;
    protected readonly outputNode: AudioNode;
    /**
     * If `true`, indicates that an internal {@link AudioFile} instance has detected that the current
     * browser session is allowing audio playback. Most browsers these days block audio on initial
     * page load until the user has interacted with the page.
     */
    public readonly isAudioAllowed = false as boolean;
    /** Controls volume for all audio files. Modify `gain.value` on this to change playback volume. */
    public readonly gainNode: GainNode;

    /** Play a specific audio file. */
    public play: Record<keyof Files, () => Promise<boolean>>;

    constructor(
        protected readonly initFiles: Readonly<Files>,
        protected readonly options: Readonly<PartialWithUndefined<AudioPlayerOptions>> = {},
    ) {
        super();
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.value = clamp(options.volume ?? 1, {min: 0, max: 1});
        this.gainNode.connect(this.audioContext.destination);

        this.outputNode = setupEffects(
            this.audioContext,
            this.gainNode,
            options.createEffects,
        ).outputNode;

        this.play = mapObjectValues(this.initFiles, (playKey) => {
            return () => {
                const audioFile = this.setupAudioFile(playKey);
                return audioFile.play();
            };
        });
    }

    /** Create a new {@link AudioFile} instance at the given `key` and set it up. */
    protected setupAudioFile(key: keyof Files) {
        const existingAudioFile = this.audioFiles[key];
        if (existingAudioFile) {
            return existingAudioFile;
        }

        const params = this.initFiles[key];

        const audioFile = new AudioFile({
            fetch: this.options.fetch,
            loadOnPlay: this.options.loadOnPlay,
            ...params,
            audioCache: this.audioCache,
            audioContext: this.audioContext,
            outputNode: this.outputNode,
        });

        this.audioFiles[key] = audioFile;

        audioFile.listenToAll((event) => {
            if (event instanceof PlayingEnabledEvent && !this.isAudioAllowed) {
                /** If any audio file detects that playing is enabled, notify all audio files. */
                makeWritable(this).isAudioAllowed = true;
                Object.values(this.audioFiles).forEach((audioFile) => {
                    makeWritable(audioFile as AudioFile).isAudioAllowed = true;
                });
            }

            /** Pass all child audio events. */
            this.dispatch(event);
        });

        return audioFile;
    }

    /**
     * Load a batch of audio files, with an optional progress callback. Any file set to `false` will
     * be unloaded (if it has been loaded). Any file that is omitted or set to `undefined` will be
     * left alone (if it's already loaded it'll stay loaded, if it's not loaded, it won't be
     * loaded).
     */
    public load<LoadFiles extends BaseFilesToLoad<Files>>(
        loadKeys: LoadFiles,
        progressCallback?: AudioLoadProgressCallback | undefined,
    ): Promise<Record<ExtractKeysWithMatchingValues<LoadFiles, true>, AudioFile>>;
    /** Load a single audio file. */
    public load(loadKeys: keyof Files): Promise<AudioFile>;
    /** Load audio files. */
    public async load(
        loadKeys: BaseFilesToLoad<Files> | keyof Files,
        progressCallback?: AudioLoadProgressCallback | undefined,
    ): Promise<AudioFile | Record<string, AudioFile>>;
    /** Load audio files. */
    public async load(
        loadKeys: BaseFilesToLoad<Files> | keyof Files,
        progressCallback?: AudioLoadProgressCallback | undefined,
    ): Promise<AudioFile | Record<string, AudioFile>> {
        if (check.isString(loadKeys)) {
            const audioFile = this.setupAudioFile(loadKeys);
            await audioFile.load();
            return audioFile;
        } else {
            let loadedCount = 0;
            const totalCount = Object.values(loadKeys).filter(check.isTruthy).length;
            return mapObject(loadKeys as BaseFilesToLoad<Files>, async (loadKey, enabled) => {
                if (enabled == undefined) {
                    return undefined;
                } else if (enabled === false) {
                    await this.audioFiles[loadKey]?.destroy();
                    delete this.audioFiles[loadKey];
                    return undefined;
                }
                const audioFile = this.setupAudioFile(loadKey);

                await audioFile.load();
                if (progressCallback) {
                    loadedCount++;
                    void progressCallback({
                        finished: loadedCount >= totalCount,
                        loaded: loadedCount,
                        total: totalCount,
                    });
                }
                return {
                    key: loadKey,
                    value: audioFile,
                };
            });
        }
    }

    /** Load all audio files at once. */
    public loadAll(progressCallback?: AudioLoadProgressCallback | undefined) {
        return this.load(
            mapObjectValues(this.initFiles, () => true),
            progressCallback,
        );
    }

    /** Destroy and cleanup this {@link AudioPlayer} and all child {@link AudioFile} instances. */
    public override async destroy() {
        if (this.isDestroyed) {
            return;
        }
        super.destroy();
        await Promise.all(
            Object.values(this.audioFiles).map(async (audioFile) => {
                await audioFile?.destroy();
            }),
        );
        makeWritable(this).audioFiles = {};
        await this.audioContext.close();
        makeWritable(this).audioCache = {};
        makeWritable(this).isDestroyed = true;
    }
}
