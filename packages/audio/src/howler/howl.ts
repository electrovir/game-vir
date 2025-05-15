import {type Howler} from './howler.js';
import {type HowlCallback, type HowlOptions, type SoundSpriteDefinitions} from './options.js';
import {howlerCache, loadBuffer} from './util.js';

/** Group Methods * */
/***/

export type XhrOptions = {
    method: string;
    headers: Record<string, string>;
    withCredentials: boolean;
};

type HowlListener = {id?: number | undefined; fn: HowlCallback; once?: boolean | undefined};

/**
 * Create an audio group controller.
 *
 * @param {Object} o Passed in properties for this group.
 */
export class Howl {
    private declare _autoplay: boolean;
    private declare _format: string | undefined | string[];
    public declare _html5: boolean;
    public declare _muted: boolean;
    public declare _loop: boolean;
    private declare _pool: number;
    public declare _preload: boolean | 'metadata';
    public declare _rate: number;
    public declare _sprite: SoundSpriteDefinitions;
    public declare _src: string[] | string;
    public declare _volume: number;
    public declare _xhr: XhrOptions;
    public declare _duration: number;
    public declare _state: string;
    public declare _sounds: Sound[];
    private declare _endTimers: Record<
        string,
        (() => void) | ReturnType<typeof globalThis.setTimeout>
    >;
    private declare _queue: {event: unknown; action: () => void}[];
    private declare _playLock: boolean;
    private declare _onend: HowlListener[];
    private declare _onfade: HowlListener[];
    private declare _onload: HowlListener[];
    private declare _onloaderror: HowlListener[];
    private declare _onplayerror: HowlListener[];
    private declare _onpause: HowlListener[];
    private declare _onplay: HowlListener[];
    private declare _onstop: HowlListener[];
    private declare _onmute: HowlListener[];
    private declare _onvolume: HowlListener[];
    private declare _onrate: HowlListener[];
    private declare _onseek: HowlListener[];
    private declare _onunlock: HowlListener[];
    private declare _onresume: HowlListener[];
    // todo: remove this, use sound.node class type as the indicator of web type
    public declare _webAudio: boolean;

    constructor(
        options: Readonly<HowlOptions>,
        public readonly howler: Howler,
    ) {
        // Throw an error if no source is provided.
        if (!options.src || options.src.length === 0) {
            console.error('An array of source files must be passed with any new Howl.');
            return;
        }

        // Setup user-defined default properties.
        this._autoplay = options.autoplay || false;
        this._format = typeof options.format === 'string' ? [options.format] : options.format;
        this._html5 = options.html5 || false;
        this._muted = options.mute || false;
        this._loop = options.loop || false;
        this._pool = options.pool || 5;
        this._preload =
            typeof options.preload === 'boolean' || options.preload === 'metadata'
                ? options.preload
                : true;
        this._rate = options.rate || 1;
        this._sprite = options.sprite || {};
        this._src = typeof options.src === 'string' ? [options.src] : options.src;
        this._volume = options.volume === undefined ? 1 : options.volume;
        this._xhr = {
            method: options.xhr && options.xhr.method ? options.xhr.method : 'GET',
            headers: options.xhr && options.xhr.headers ? options.xhr.headers : {},
            withCredentials:
                options.xhr && options.xhr.withCredentials ? options.xhr.withCredentials : false,
        };

        // Setup all other default properties.
        this._duration = 0;
        this._state = 'unloaded';
        this._sounds = [];
        this._endTimers = {};
        this._queue = [];
        this._playLock = false;

        // Setup event listeners.
        this._onend = options.onend ? [{fn: options.onend}] : [];
        this._onfade = options.onfade ? [{fn: options.onfade}] : [];
        this._onload = options.onload ? [{fn: options.onload}] : [];
        this._onloaderror = options.onloaderror ? [{fn: options.onloaderror}] : [];
        this._onplayerror = options.onplayerror ? [{fn: options.onplayerror}] : [];
        this._onpause = options.onpause ? [{fn: options.onpause}] : [];
        this._onplay = options.onplay ? [{fn: options.onplay}] : [];
        this._onstop = options.onstop ? [{fn: options.onstop}] : [];
        this._onmute = options.onmute ? [{fn: options.onmute}] : [];
        this._onvolume = options.onvolume ? [{fn: options.onvolume}] : [];
        this._onrate = options.onrate ? [{fn: options.onrate}] : [];
        this._onseek = options.onseek ? [{fn: options.onseek}] : [];
        this._onunlock = options.onunlock ? [{fn: options.onunlock}] : [];
        this._onresume = [];

        // Web Audio or HTML5 Audio?
        this._webAudio = !this._html5;

        // Automatically try to enable audio.
        if (this.howler.autoUnlock) {
            this.howler._unlockAudio();
        }

        // Keep track of this Howl group in the global controller.
        this.howler.howls.push(this);

        // If they selected autoplay, add a play event to the load queue.
        if (this._autoplay) {
            this._queue.push({
                event: 'play',
                action: () => {
                    this.play();
                },
            });
        }

        // Load the source file unless otherwise specified.
        if (this._preload) {
            this.load();
        }

        return this;
    }

    /** Load the audio file. */
    public load(): this {
        let url = null;

        if (typeof this._src === 'string') {
            this._src = [this._src];
        }

        // Loop through the sources and pick the first one that is compatible.
        for (let i = 0; i < this._src.length; i++) {
            let ext;
            let str: string | undefined;

            if (this._format && this._format[i]) {
                // If an extension was specified, use that instead.
                ext = this._format[i];
            } else {
                // Make sure the source is a string.
                str = this._src[i];
                if (typeof str !== 'string') {
                    this._emit(
                        'loaderror',
                        undefined,
                        'Non-string found in selected audio sources - ignoring.',
                    );
                    continue;
                }

                // Extract the file extension from the URL or base64 data URI.
                ext = /^data:audio\/([^;,]+);/i.exec(str);
                if (!ext) {
                    ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]!);
                }

                if (ext) {
                    ext = ext[1]!.toLowerCase();
                }
            }

            // Log a warning if no extension was found.
            if (!ext) {
                console.warn(
                    'No file extension was found. Consider using the "format" property or specify an extension.',
                );
            }

            // Check if this extension is available.
            if (ext && this.howler.codecs(ext)) {
                url = this._src[i];
                break;
            }
        }

        if (!url) {
            this._emit('loaderror', undefined, 'No codec support for selected audio sources.');
            throw new Error('No codec support for selected audio sources.');
        }

        this._src = url;
        this._state = 'loading';

        // If the hosting page is HTTPS and the source isn't,
        // drop down to HTML5 Audio to avoid Mixed Content errors.
        if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
            this._html5 = true;
            this._webAudio = false;
        }

        // Create a new sound object and add it to the pool.
        new Sound(this);

        // Load and decode the audio data for playback.
        if (this._webAudio) {
            loadBuffer(this);
        }

        return this;
    }

    /**
     * Play a sound or resume previous playback.
     *
     * @param {String/Number} sprite Sprite name for sprite playback or sound id to continue
     *   previous.
     * @param {Boolean} internal Internal Use: true prevents event firing.
     * @returns {Number} Sound ID.
     */
    public play(sprite?: string | number | undefined, internal?: boolean): number | undefined {
        let id = null;

        // Determine if a sprite, sound id or nothing was passed
        if (typeof sprite === 'number') {
            id = sprite;
            sprite = undefined;
        } else if (
            typeof sprite === 'string' &&
            this._state === 'loaded' &&
            !this._sprite[sprite]
        ) {
            // If the passed sprite doesn't exist, do nothing.
            return undefined;
        } else if (typeof sprite === 'undefined') {
            // Use the default sound sprite (plays the full audio length).
            sprite = '__default';

            // Check if there is a single paused sound that isn't ended.
            // If there is, play that sound. If not, continue as usual.
            if (!this._playLock) {
                let num = 0;
                for (let i = 0; i < this._sounds.length; i++) {
                    if (this._sounds[i]!._paused && !this._sounds[i]!._ended) {
                        num++;
                        id = this._sounds[i]!._id;
                    }
                }

                if (num === 1) {
                    sprite = undefined;
                } else {
                    id = null;
                }
            }
        }

        // Get the selected node, or get one from the pool.
        const sound = id ? this._soundById(id) : this._inactiveSound();

        // If the sound doesn't exist, do nothing.
        if (!sound) {
            return undefined;
        }

        // Select the sprite definition.
        if (id && !sprite) {
            sprite = sound._sprite || '__default';
        }

        // If the sound hasn't loaded, we must wait to get the audio's duration.
        // We also need to wait to make sure we don't run into race conditions with
        // the order of function calls.
        if (this._state !== 'loaded') {
            // Set the sprite value on this sound.
            sound._sprite = sprite!;

            // Mark this sound as not ended in case another sound is played before this one loads.
            sound._ended = false;

            // Add the sound to the queue to be played on load.
            const soundId = sound._id;
            this._queue.push({
                event: 'play',
                action: () => {
                    this.play(soundId);
                },
            });

            return soundId;
        }

        // Don't play the sound if an id was passed and it is already playing.
        if (id && !sound._paused) {
            // Trigger the play event, in order to keep iterating through queue.
            if (!internal) {
                this._loadQueue('play');
            }

            return sound._id;
        }

        // Make sure the AudioContext isn't suspended, and resume it if it is.
        if (this._webAudio) {
            this.howler._autoResume();
        }

        // Determine how long to play for and where to start playing.
        const seek = Math.max(0, sound._seek > 0 ? sound._seek : this._sprite[sprite!]![0] / 1000);
        const duration = Math.max(
            0,
            (this._sprite[sprite!]![0] + this._sprite[sprite!]![1]) / 1000 - seek,
        );
        const timeout = (duration * 1000) / Math.abs(sound._rate);
        const start = this._sprite[sprite!]![0] / 1000;
        const stop = (this._sprite[sprite!]![0] + this._sprite[sprite!]![1]) / 1000;
        sound._sprite = sprite!;

        // Mark the sound as ended instantly so that this async playback
        // doesn't get grabbed by another call to play while this one waits to start.
        sound._ended = false;

        // Update the parameters of the sound.
        const setParams = () => {
            sound._paused = false;
            sound._seek = seek;
            sound._start = start;
            sound._stop = stop;
            sound._loop = !!(sound._loop || this._sprite[sprite!]![2]);
        };

        // End the sound instantly if seek is at the end.
        if (seek >= stop) {
            this._ended(sound);
            return undefined;
        }

        // Begin the actual playback.
        const node = sound._node;
        if (this._webAudio) {
            // Fire this when the sound is ready to play to begin Web Audio playback.
            const playWebAudio = () => {
                if (!(node instanceof GainNode) || !node.bufferSource) {
                    return;
                }

                this._playLock = false;
                setParams();
                this._refreshBuffer(sound);

                // Setup the playback params.
                const vol = sound._muted || this._muted ? 0 : sound._volume;
                node.gain.setValueAtTime(vol, this.howler.audioContext.currentTime);
                sound._playStart = this.howler.audioContext.currentTime;

                sound._loop
                    ? node.bufferSource.start(0, seek, 86_400)
                    : node.bufferSource.start(0, seek, duration);

                // Start a new timer if none is present.
                if (timeout !== Infinity) {
                    this._endTimers[sound._id] = setTimeout(this._ended.bind(this, sound), timeout);
                }

                if (!internal) {
                    setTimeout(() => {
                        this._emit('play', sound._id);
                        this._loadQueue();
                    }, 0);
                }
            };

            if (
                this.howler.state === 'running' &&
                this.howler.audioContext.state !== 'interrupted'
            ) {
                playWebAudio();
            } else {
                this._playLock = true;

                // Wait for the audio context to resume before playing.
                this.once('resume', playWebAudio);

                // Cancel the end timer.
                this._clearTimer(sound._id);
            }
        } else {
            // Fire this when the sound is ready to play to begin HTML5 Audio playback.
            const playHtml5 = () => {
                if (!(node instanceof HTMLAudioElement)) {
                    return;
                }

                node.currentTime = seek;
                node.muted = sound._muted || this._muted || this.howler._muted || node.muted;
                node.volume = sound._volume * this.howler.volume;
                node.playbackRate = sound._rate;

                // Some browsers will throw an error if this is called without user interaction.
                try {
                    const play = node.play();

                    // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                    this._playLock = true;

                    // Set param values immediately.
                    setParams();

                    // Releases the lock and executes queued actions.
                    play.then(() => {
                        this._playLock = false;
                        node._unlocked = true;
                        if (internal) {
                            this._loadQueue();
                        } else {
                            this._emit('play', sound._id);
                        }
                    }).catch(() => {
                        this._playLock = false;
                        this._emit(
                            'playerror',
                            sound._id,
                            'Playback was unable to start. This is most commonly an issue ' +
                                'on mobile devices and Chrome where playback was not within a user interaction.',
                        );

                        // Reset the ended and paused values.
                        sound._ended = true;
                        sound._paused = true;
                    });

                    // Setting rate before playing won't work in IE, so we set it again here.
                    node.playbackRate = sound._rate;

                    // If the node is still paused, then we can assume there was a playback issue.
                    if (node.paused) {
                        this._emit(
                            'playerror',
                            sound._id,
                            'Playback was unable to start. This is most commonly an issue ' +
                                'on mobile devices and Chrome where playback was not within a user interaction.',
                        );
                        return;
                    }

                    // Setup the end timer on sprites or listen for the ended event.
                    if (sprite !== '__default' || sound._loop) {
                        this._endTimers[sound._id] = globalThis.setTimeout(
                            this._ended.bind(this, sound),
                            timeout,
                        );
                    } else {
                        const listener = () => {
                            // Fire ended on this audio node.
                            this._ended(sound);

                            // Clear this listener.
                            node.removeEventListener('ended', listener, false);
                        };
                        this._endTimers[sound._id] = listener;
                        node.addEventListener('ended', listener, false);
                    }
                } catch (error) {
                    this._emit('playerror', sound._id, error);
                }
            };

            // If this is streaming audio, make sure the src is set and load again.
            if (
                node instanceof HTMLAudioElement &&
                node.src ===
                    'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'
            ) {
                node.src = Array.isArray(this._src) ? this._src[0]! : this._src;
                node.load();
            }

            // Play immediately if ready, or wait for the 'canplaythrough'e vent.
            const loadedNoReadyState =
                (globalThis as typeof globalThis & {ejecta: any}).ejecta ||
                (!(!('readyState' in node) || node.readyState) &&
                    (globalThis.navigator as Navigator & {isCocoonJS: unknown}).isCocoonJS);
            if (('readyState' in node && node.readyState >= 3) || loadedNoReadyState) {
                playHtml5();
            } else {
                this._playLock = true;
                this._state = 'loading';

                const listener = () => {
                    this._state = 'loaded';

                    // Begin playback.
                    playHtml5();

                    // Clear this listener.
                    node.removeEventListener(this.howler._canPlayEvent, listener, false);
                };
                node.addEventListener(this.howler._canPlayEvent, listener, false);

                // Cancel the end timer.
                this._clearTimer(sound._id);
            }
        }

        return sound._id;
    }

    /**
     * Pause playback and save current position.
     *
     * @param {Number} id The sound ID (empty to pause all in group).
     * @returns {Howl}
     */
    pause(id?: number, internal?: boolean) {
        // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
        if (this._state !== 'loaded' || this._playLock) {
            this._queue.push({
                event: 'pause',
                action: () => {
                    this.pause(id);
                },
            });

            return this;
        }

        // If no id is passed, get all ID's to be paused.
        const ids = this._getSoundIds(id);

        for (const id_ of ids) {
            // Clear the end timer.
            this._clearTimer(id_);

            // Get the sound.
            const sound = this._soundById(id_);

            if (sound && !sound._paused) {
                // Reset the seek position.
                sound._seek = this.seek(id_);
                sound._rateSeek = 0;
                sound._paused = true;

                // Stop currently running fades.
                this._stopFade(id_);

                if (sound._node) {
                    if (sound._node instanceof GainNode) {
                        // Make sure the sound has been created.
                        if (!sound._node.bufferSource) {
                            continue;
                        }

                        sound._node.bufferSource.stop(0);

                        // Clean up the buffer source.
                        this._cleanBuffer(sound._node);
                    } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                        sound._node.pause();
                    }
                }
            }

            // Fire the pause event, unless `true` is passed as the 2nd argument.
            if (!internal) {
                this._emit('pause', sound ? sound._id : undefined);
            }
        }

        return this;
    }

    /**
     * Stop playback and reset to start.
     *
     * @param {Number} id The sound ID (empty to stop all in group).
     * @param {Boolean} internal Internal Use: true prevents event firing.
     * @returns {Howl}
     */
    stop(id?: number, internal?: boolean) {
        // If the sound hasn't loaded, add it to the load queue to stop when capable.
        if (this._state !== 'loaded' || this._playLock) {
            this._queue.push({
                event: 'stop',
                action: () => {
                    this.stop(id);
                },
            });

            return this;
        }

        // If no id is passed, get all ID's to be stopped.
        const ids = this._getSoundIds(id);

        for (const id_ of ids) {
            // Clear the end timer.
            this._clearTimer(id_);

            // Get the sound.
            const sound = this._soundById(id_);

            if (sound) {
                // Reset the seek position.
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._paused = true;
                sound._ended = true;

                // Stop currently running fades.
                this._stopFade(id_);

                if (sound._node) {
                    if (sound._node instanceof GainNode) {
                        // Make sure the sound's AudioBufferSourceNode has been created.
                        if (sound._node.bufferSource) {
                            sound._node.bufferSource.stop(0);

                            // Clean up the buffer source.
                            this._cleanBuffer(sound._node);
                        }
                    } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                        sound._node.currentTime = sound._start || 0;
                        sound._node.pause();

                        // If this is a live stream, stop download once the audio is stopped.
                        if (sound._node.duration === Infinity) {
                            this.clearSound(sound._node);
                        }
                    }
                }

                if (!internal) {
                    this._emit('stop', sound._id);
                }
            }
        }

        return this;
    }

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     *
     * @param {Boolean} muted Set to true to mute and false to unmute.
     * @param {Number} id The sound ID to update (omit to mute/unmute all).
     * @returns {Howl}
     */
    mute(muted: boolean, id?: number) {
        // If the sound hasn't loaded, add it to the load queue to mute when capable.
        if (this._state !== 'loaded' || this._playLock) {
            this._queue.push({
                event: 'mute',
                action: () => {
                    this.mute(muted, id);
                },
            });

            return this;
        }

        // If applying mute/unmute to all sounds, update the group's value.
        if (typeof id === 'undefined') {
            if (typeof muted === 'boolean') {
                this._muted = muted;
            } else {
                return this._muted;
            }
        }

        // If no id is passed, get all ID's to be muted.
        const ids = this._getSoundIds(id);

        for (const id_ of ids) {
            // Get the sound.
            const sound = this._soundById(id_);

            if (sound) {
                sound._muted = muted;

                // Cancel active fade and set the volume to the end value.
                if (sound._interval) {
                    this._stopFade(sound._id);
                }

                if (sound._node instanceof GainNode) {
                    sound._node.gain.setValueAtTime(
                        muted ? 0 : sound._volume,
                        this.howler.audioContext.currentTime,
                    );
                } else if (sound._node) {
                    sound._node.muted = this.howler._muted ? true : muted;
                }

                this._emit('mute', sound._id);
            }
        }

        return this;
    }

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1
     * or 2 arguments. volume() -> Returns the group's volume value. volume(id) -> Returns the sound
     * id's current volume. volume(vol) -> Sets the volume of all sounds in this Howl group.
     * volume(vol, id) -> Sets the volume of passed sound id.
     *
     * @returns {Howl/Number} Returns self or current volume.
     */
    volume() {
        const args = arguments;
        let vol, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
            // Return the value of the groups' volume.
            return this._volume;
        } else if (args.length === 1 || (args.length === 2 && typeof args[1] === 'undefined')) {
            // First check if this is an ID, and if not, assume it is a new volume.
            const ids = this._getSoundIds();
            const index = ids.indexOf(args[0]);
            if (index >= 0) {
                id = parseInt(args[0], 10);
            } else {
                vol = parseFloat(args[0]);
            }
        } else if (args.length >= 2) {
            vol = parseFloat(args[0]);
            id = parseInt(args[1], 10);
        }

        // Update the volume or return the current volume.
        let sound;
        if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
            // If the sound hasn't loaded, add it to the load queue to change volume when capable.
            if (this._state !== 'loaded' || this._playLock) {
                this._queue.push({
                    event: 'volume',
                    action: () => {
                        this.volume.apply(this, args);
                    },
                });

                return this;
            }

            // Set the group volume.
            if (typeof id === 'undefined') {
                this._volume = vol;
            }

            // Update one or all volumes.
            const soundIds = this._getSoundIds(id); // Renamed to avoid conflict with 'sound' variable
            for (const element of soundIds) {
                // Get the sound.
                sound = this._soundById(element);

                if (sound) {
                    sound._volume = vol;

                    // Stop currently running fades.
                    if (!args[2]) {
                        this._stopFade(element);
                    }

                    if (this._webAudio && sound._node instanceof GainNode && !sound._muted) {
                        sound._node.gain.setValueAtTime(vol, this.howler.audioContext.currentTime);
                    } else if (
                        sound._node &&
                        !sound._muted &&
                        sound._node instanceof HTMLAudioElement
                    ) {
                        sound._node.volume = vol * this.howler.volume;
                    }

                    this._emit('volume', sound._id);
                }
            }
        } else {
            sound = id ? this._soundById(id) : this._sounds[0];
            return sound ? sound._volume : 0;
        }

        return this;
    }

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will
     * fade).
     *
     * @param {Number} from The value to fade from (0.0 to 1.0).
     * @param {Number} to The volume to fade to (0.0 to 1.0).
     * @param {Number} duration Time in milliseconds to fade.
     * @param {Number} id The sound id (omit to fade all sounds).
     * @returns {Howl}
     */
    fade(from: number, to: number, duration: number, id?: number) {
        // If the sound hasn't loaded, add it to the load queue to fade when capable.
        if (this._state !== 'loaded' || this._playLock) {
            this._queue.push({
                event: 'fade',
                action: () => {
                    this.fade(from, to, duration, id);
                },
            });

            return this;
        }

        from = Math.min(Math.max(0, from), 1);
        to = Math.min(Math.max(0, to), 1);

        // Set the volume to the start position.
        this.volume(from, id);

        // Fade the volume of one or all sounds.
        const ids = this._getSoundIds(id);
        for (const id_ of ids) {
            // Get the sound.
            const sound = this._soundById(id_);

            // Create a linear fade or fall back to timeouts with HTML5 Audio.
            if (sound) {
                // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                if (!id) {
                    this._stopFade(id_);
                }

                // If we are using Web Audio, let the native methods do the actual fade.
                if (sound._node instanceof GainNode && !sound._muted) {
                    const currentTime = this.howler.audioContext.currentTime;
                    const end = currentTime + duration / 1000;
                    sound._volume = from;
                    sound._node.gain.setValueAtTime(from, currentTime);
                    sound._node.gain.linearRampToValueAtTime(to, end);
                }

                this._startFadeInterval(sound, from, to, duration, id_, typeof id === 'undefined');
            }
        }

        return this;
    }

    /**
     * Starts the internal interval to fade a sound.
     *
     * @param {Object} sound Reference to sound to fade.
     * @param {Number} from The value to fade from (0.0 to 1.0).
     * @param {Number} to The volume to fade to (0.0 to 1.0).
     * @param {Number} len Time in milliseconds to fade.
     * @param {Number} id The sound id to fade.
     * @param {Boolean} isGroup If true, set the volume on the group.
     */
    _startFadeInterval(
        sound: Sound,
        from: number,
        to: number,
        len: number,
        id: number,
        isGroup: boolean,
    ) {
        let vol = from;
        const diff = to - from;
        const steps = Math.abs(diff / 0.01);
        const stepLen = Math.max(4, steps > 0 ? len / steps : len);
        let lastTick = Date.now();

        // Store the value being faded to.
        sound._fadeTo = to;

        // Update the volume value on each interval tick.
        sound._interval = setInterval(() => {
            // Update the volume based on the time since the last tick.
            const tick = (Date.now() - lastTick) / len;
            lastTick = Date.now();
            vol += diff * tick;

            // Round to within 2 decimal points.
            vol = Math.round(vol * 100) / 100;

            // Make sure the volume is in the right bounds.
            if (diff < 0) {
                vol = Math.max(to, vol);
            } else {
                vol = Math.min(to, vol);
            }

            // Change the volume.
            if (this._webAudio) {
                sound._volume = vol;
            } else {
                this.volume(vol, sound._id, true);
            }

            // Set the group's volume.
            if (isGroup) {
                this._volume = vol;
            }

            // When the fade is complete, stop it and fire event.
            if ((to < from && vol <= to) || (to > from && vol >= to)) {
                clearInterval(sound._interval);
                sound._interval = undefined;
                sound._fadeTo = undefined;
                this.volume(to, sound._id);
                this._emit('fade', sound._id);
            }
        }, stepLen);
    }

    /**
     * Internal method that stops the currently playing fade when a new fade starts, volume is
     * changed or the sound is stopped.
     */
    _stopFade(id: number): this {
        const sound = this._soundById(id);

        if (sound && sound._interval) {
            if (sound._node instanceof GainNode) {
                sound._node.gain.cancelScheduledValues(this.howler.audioContext.currentTime);
            }

            clearInterval(sound._interval);
            sound._interval = undefined;
            this.volume(sound._fadeTo, id);
            sound._fadeTo = undefined;
            this._emit('fade', id);
        }

        return this;
    }

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     * loop() -> Returns the group's loop value. loop(id) -> Returns the sound id's loop value.
     * loop(loop) -> Sets the loop value for all sounds in this Howl group. loop(loop, id) -> Sets
     * the loop value of passed sound id.
     *
     * @returns {Howl/Boolean} Returns self or current loop value.
     */
    loop() {
        const args = arguments;
        let loop, id, sound;

        // Determine the values for loop and id.
        if (args.length === 0) {
            // Return the grou's loop value.
            return this._loop;
        } else if (args.length === 1) {
            if (typeof args[0] === 'boolean') {
                loop = args[0];
                this._loop = loop;
            } else {
                // Return this sound's loop value.
                sound = this._soundById(parseInt(args[0], 10));
                return sound ? sound._loop : false;
            }
        } else if (args.length === 2) {
            loop = args[0];
            id = parseInt(args[1], 10);
        }

        // If no id is passed, get all ID's to be looped.
        const ids = this._getSoundIds(id);
        for (const id_ of ids) {
            sound = this._soundById(id_);

            if (sound) {
                sound._loop = loop;
                if (this._webAudio && sound._node && sound._node.bufferSource) {
                    sound._node.bufferSource.loop = loop;
                    if (loop) {
                        sound._node.bufferSource.loopStart = sound._start || 0;
                        sound._node.bufferSource.loopEnd = sound._stop;

                        // If playing, restart playback to ensure looping updates.
                        if (this.playing(id_)) {
                            this.pause(id_, true);
                            this.play(id_, true);
                        }
                    }
                }
            }
        }

        return this;
    }

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     * rate() -> Returns the first sound node's current playback rate. rate(id) -> Returns the sound
     * id's current playback rate. rate(rate) -> Sets the playback rate of all sounds in this Howl
     * group. rate(rate, id) -> Sets the playback rate of passed sound id.
     *
     * @returns {Howl/Number} Returns self or the current playback rate.
     */
    rate() {
        const args = arguments;
        let rate, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
            // We will simply return the current rate of the first node.
            id = this._sounds[0]!._id;
        } else if (args.length === 1) {
            // First check if this is an ID, and if not, assume it is a new rate value.
            const ids = this._getSoundIds();
            const index = ids.indexOf(args[0]);
            if (index >= 0) {
                id = parseInt(args[0], 10);
            } else {
                rate = parseFloat(args[0]);
            }
        } else if (args.length === 2) {
            rate = parseFloat(args[0]);
            id = parseInt(args[1], 10);
        }

        // Update the playback rate or return the current value.
        let sound;
        if (typeof rate === 'number') {
            // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
            if (this._state !== 'loaded' || this._playLock) {
                this._queue.push({
                    event: 'rate',
                    action: () => {
                        this.rate.apply(this, args);
                    },
                });

                return this;
            }

            // Set the group rate.
            if (typeof id === 'undefined') {
                this._rate = rate;
            }

            // Update one or all volumes.
            const soundIds = this._getSoundIds(id); // Renamed to avoid conflict
            for (const element of soundIds) {
                // Get the sound.
                sound = this._soundById(element);

                if (sound) {
                    // Keep track of our position when the rate changed and update the playback
                    // start position so we can properly adjust the seek position for time elapsed.
                    if (this.playing(element)) {
                        sound._rateSeek = this.seek(element);
                        sound._playStart = this._webAudio
                            ? this.howler.audioContext.currentTime
                            : sound._playStart;
                    }
                    sound._rate = rate;

                    // Change the playback rate.
                    if (this._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.playbackRate.setValueAtTime(
                            rate,
                            this.howler.audioContext.currentTime,
                        );
                    } else if (sound._node && sound._node instanceof HTMLAudioElement) {
                        sound._node.playbackRate = rate;
                    }

                    // Reset the timers.
                    const seek: number = this.seek(element);
                    const duration =
                        (this._sprite[sound._sprite]![0] + this._sprite[sound._sprite]![1]) / 1000 -
                        seek;
                    const timeout = (duration * 1000) / Math.abs(sound._rate);

                    // Start a new end timer if sound is already playing.
                    if (this._endTimers[element] || !sound._paused) {
                        this._clearTimer(element);
                        this._endTimers[element] = setTimeout(
                            this._ended.bind(this, sound),
                            timeout,
                        );
                    }

                    this._emit('rate', sound._id);
                }
            }
        } else {
            sound = this._soundById(id);
            return sound ? sound._rate : this._rate;
        }

        return this;
    }

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     * seek() -> Returns the first sound node's current seek position. seek(id) -> Returns the sound
     * id's current seek position. seek(seek) -> Sets the seek position of the first sound node.
     * seek(seek, id) -> Sets the seek position of passed sound id.
     */
    seek(): this | number {
        const args = arguments;
        let seek, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
            // We will simply return the current position of the first node.
            if (this._sounds.length) {
                id = this._sounds[0]!._id;
            }
        } else if (args.length === 1) {
            // First check if this is an ID, and if not, assume it is a new seek position.
            const ids = this._getSoundIds();
            const index = ids.indexOf(args[0]);
            if (index >= 0) {
                id = parseInt(args[0], 10);
            } else if (this._sounds.length) {
                id = this._sounds[0]!._id;
                seek = parseFloat(args[0]);
            }
        } else if (args.length === 2) {
            seek = parseFloat(args[0]);
            id = parseInt(args[1], 10);
        }

        // If there is no ID, bail out.
        if (typeof id === 'undefined') {
            return 0;
        }

        // If the sound hasn't loaded, add it to the load queue to seek when capable.
        if (typeof seek === 'number' && (this._state !== 'loaded' || this._playLock)) {
            this._queue.push({
                event: 'seek',
                action: () => {
                    this.seek.apply(this, args);
                },
            });

            return this;
        }

        // Get the sound.
        const sound = this._soundById(id);

        if (sound) {
            if (typeof seek === 'number' && seek >= 0) {
                // Pause the sound and update position for restarting playback.
                const playing = this.playing(id);
                if (playing) {
                    this.pause(id, true);
                }

                // Move the position of the track and cancel timer.
                sound._seek = seek;
                sound._ended = false;
                this._clearTimer(id);

                // Update the seek position for HTML5 Audio.
                if (
                    !this._webAudio &&
                    sound._node instanceof HTMLAudioElement &&
                    !isNaN(sound._node.duration)
                ) {
                    sound._node.currentTime = seek;
                }

                // Seek and emit when ready.
                const seekAndEmit = () => {
                    // Restart the playback if the sound was playing.
                    if (playing) {
                        this.play(id, true);
                    }

                    this._emit('seek', id);
                };

                // Wait for the play lock to be unset before emitting (HTML5 Audio).
                if (playing && !this._webAudio) {
                    const emitSeek = () => {
                        if (this._playLock) {
                            setTimeout(emitSeek, 0);
                        } else {
                            seekAndEmit();
                        }
                    };
                    setTimeout(emitSeek, 0);
                } else {
                    seekAndEmit();
                }
            } else if (sound._node instanceof GainNode) {
                const realTime = this.playing(id)
                    ? this.howler.audioContext.currentTime - sound._playStart
                    : 0;
                const rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
            } else {
                return sound._node.currentTime;
            }
        }

        return this;
    }

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at
     * least one of the sounds in the group is playing or not.
     *
     * @param {Number} id The sound id to check. If none is passed, the whole sound group is
     *   checked.
     * @returns {Boolean} True if playing and false if not.
     */
    playing(id?: number) {
        // Check the passed sound ID (if any).
        if (typeof id === 'number') {
            const sound = this._soundById(id);
            return sound ? !sound._paused : false;
        }

        // Otherwise, loop through all sounds and check if any are playing.
        for (let i = 0; i < this._sounds.length; i++) {
            if (!this._sounds[i]!._paused) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     *
     * @param {Number} id The sound id to check. If none is passed, return full source duration.
     * @returns {Number} Audio duration in seconds.
     */
    duration(id?: number) {
        let duration = this._duration;

        // If we pass an ID, get the sound and return the sprite length.
        const sound = this._soundById(id);
        if (sound) {
            duration = this._sprite[sound._sprite]![1] / 1000;
        }

        return duration;
    }

    /**
     * Returns the current loaded state of this Howl.
     *
     * @returns {String} 'unloaded', 'loading', 'loaded'
     */
    state() {
        return this._state;
    }

    /**
     * Unload and destroy the current Howl object. This will immediately stop all sound instances
     * attached to this group.
     */
    unload() {
        // Stop playing any active sounds.
        const sounds = this._sounds;
        for (const sound of sounds) {
            // Stop the sound if it is currently playing.
            if (!sound._paused) {
                this.stop(sound._id);
            }

            // Remove the source or disconnect.
            if (!this._webAudio && sound._node instanceof HTMLAudioElement) {
                // Set the source to 0-second silence to stop any downloading (except in IE).
                this.clearSound(sound._node);

                // Remove any event listeners.
                sound._node.removeEventListener('error', sound._errorFn, false);
                sound._node.removeEventListener(this.howler._canPlayEvent, sound._loadFn, false);
                sound._node.removeEventListener('ended', sound._endFn, false);

                // Release the Audio object back to the pool.
                this.howler._releaseHtml5Audio(sound._node);
            }

            // Empty out all of the nodes.
            delete (sound as Partial<typeof sound>)._node;

            // Make sure all timers are cleared out.
            this._clearTimer(sound._id);
        }

        // Remove the references in the global Howler object.
        const index = this.howler.howls.indexOf(this);
        if (index >= 0) {
            this.howler.howls.splice(index, 1);
        }

        // Delete this sound from the cache (if no other Howl is using it).
        let remCache = true;
        for (let i = 0; i < this.howler.howls.length; i++) {
            if (
                this.howler.howls[i]!._src === this._src ||
                this._src.includes(this.howler.howls[i]!._src as string)
            ) {
                remCache = false;
                break;
            }
        }

        if (howlerCache && remCache) {
            delete howlerCache[this._src as string];
        }

        // Clear out `this`.
        this._state = 'unloaded';
        this._sounds = [];

        return undefined;
    }

    /**
     * Listen to a custom event.
     *
     * @param {String} event Event name.
     * @param {Function} fn Listener to call.
     * @param {Number} id (optional) Only listen to events for this sound.
     * @param {Number} once (INTERNAL) Marks event to fire only once.
     * @returns {Howl}
     */
    on(event: string, fn: HowlCallback, id?: number, once?: boolean) {
        const events = this[
            ('_on' + event) as Extract<keyof Howl, `_on${string}`>
        ] as typeof this._onend;

        if (typeof fn === 'function') {
            events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
        }

        return this;
    }

    /**
     * Remove a custom event. Call without parameters to remove all events.
     *
     * @param {String} event Event name.
     * @param {Function} fn Listener to remove. Leave empty to remove all.
     * @param {Number} id (optional) Only remove events for this sound.
     * @returns {Howl}
     */
    off(event: string, fnOrId: HowlCallback | number, id?: number): this {
        const events = this[
            ('_on' + event) as Extract<keyof Howl, `_on${string}`>
        ] as typeof this._onend;
        let i = 0;
        let fn: HowlCallback | undefined;

        // Allow passing just an event and ID.
        if (typeof fnOrId === 'number') {
            id = fnOrId;
            fn = undefined;
        }

        if (fn || id) {
            // Loop through event store and remove the passed function.
            for (i = 0; i < events.length; i++) {
                const isId = id === events[i]!.id;
                if ((fn === events[i]!.fn && isId) || (!fn && isId)) {
                    events.splice(i, 1);
                    break;
                }
            }
        } else if (event) {
            // Clear out all events of this type.
            (this[('_on' + event) as Extract<keyof Howl, `_on${string}`>] as typeof this._onend) =
                [];
        } else {
            // Clear out all events of every type.
            const keys = Object.keys(this);
            for (i = 0; i < keys.length; i++) {
                if (
                    keys[i]!.indexOf('_on') === 0 &&
                    Array.isArray(this[keys[i]! as keyof typeof this])
                ) {
                    this[keys[i]! as '_onend'] = [];
                }
            }
        }

        return this;
    }

    /**
     * Listen to a custom event and remove it once fired.
     *
     * @param {String} event Event name.
     * @param {Function} fn Listener to call.
     * @param {Number} id (optional) Only listen to events for this sound.
     * @returns {Howl}
     */
    once(event: string, fn: HowlCallback, id?: number) {
        // Setup the event listener.
        this.on(event, fn, id, true);

        return this;
    }

    /**
     * Emit all events of a specific type and pass the sound id.
     *
     * @param {String} event Event name.
     * @param {Number} id Sound ID.
     * @param {Number} msg Message to go with event.
     * @returns {Howl}
     */
    _emit(event: string, id?: number | undefined, msg?: unknown) {
        const events = this[
            ('_on' + event) as Extract<keyof Howl, `_on${string}`>
        ] as typeof this._onend;

        // Loop through event store and fire all functions.
        for (let i = events.length - 1; i >= 0; i--) {
            // Only fire the listener if the correct ID is used.
            if (!events[i]!.id || events[i]!.id === id || event === 'load') {
                setTimeout(() => {
                    events[i]!.fn.call(this, id, msg);
                }, 0);

                // If this event was setup with `once`, remove it.
                if (events[i]!.once) {
                    this.off(event, events[i]!.fn, events[i]!.id);
                }
            }
        }

        // Pass the event type into load queue so that it can continue stepping.
        this._loadQueue(event);

        return this;
    }

    /**
     * Queue of actions initiated before the sound has loaded. These will be called in sequence,
     * with the next only firing after the previous has finished executing (even if async like
     * play).
     *
     * @returns {Howl}
     */
    _loadQueue(event?: unknown | undefined) {
        if (this._queue.length > 0) {
            const task = this._queue[0]!;

            // Remove this task if a matching event was passed.
            if (task.event === event) {
                this._queue.shift();
                this._loadQueue();
            }

            // Run the task if no event type is passed.
            if (!event) {
                task.action();
            }
        }

        return this;
    }

    /**
     * Fired when playback ends at the end of the duration.
     *
     * @param {Sound} sound The sound object to work with.
     * @returns {Howl}
     */
    _ended(sound: Sound) {
        const sprite = sound._sprite;

        // If we are using IE and there was network latency we may be clipping
        // audio before it completes playing. Lets check the node to make sure it
        // believes it has completed, before ending the playback.
        if (
            !this._webAudio &&
            sound._node instanceof HTMLAudioElement &&
            sound._node &&
            !sound._node.paused &&
            !sound._node.ended &&
            sound._node.currentTime < sound._stop
        ) {
            setTimeout(this._ended.bind(this, sound), 100);
            return this;
        }

        // Should this sound loop?
        const loop = !!(sound._loop || this._sprite[sprite]![2]);

        // Fire the ended event.
        this._emit('end', sound._id);

        // Restart the playback for HTML5 Audio loop.
        if (!this._webAudio && loop) {
            this.stop(sound._id, true).play(sound._id);
        }

        // Restart this timer if on a Web Audio loop.
        if (this._webAudio && loop) {
            this._emit('play', sound._id);
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            sound._playStart = this.howler.audioContext.currentTime;

            const timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
            this._endTimers[sound._id] = setTimeout(this._ended.bind(this, sound), timeout);
        }

        // Mark the node as paused.
        if (this._webAudio && !loop) {
            sound._paused = true;
            sound._ended = true;
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            this._clearTimer(sound._id);

            // Clean up the buffer source.
            this._cleanBuffer(sound._node);

            // Attempt to auto-suspend AudioContext if no sounds are still playing.
            this.howler._autoSuspend();
        }

        // When using a sprite, end the track.
        if (!this._webAudio && !loop) {
            this.stop(sound._id, true);
        }

        return this;
    }

    /**
     * Clear the end timer for a sound playback.
     *
     * @param {Number} id The sound ID.
     * @returns {Howl}
     */
    _clearTimer(id: number) {
        if (this._endTimers[id]) {
            // Clear the timeout or remove the ended listener.
            if (typeof this._endTimers[id] === 'function') {
                const sound = this._soundById(id);
                if (sound && sound._node) {
                    sound._node.removeEventListener('ended', this._endTimers[id], false);
                }
            } else {
                clearTimeout(this._endTimers[id]);
            }

            delete this._endTimers[id];
        }

        return this;
    }

    /**
     * Return the sound identified by this ID, or return undefined.
     *
     * @param {Number} id Sound ID
     * @returns {Object} Sound object or null.
     */
    _soundById(id?: number) {
        // Loop through all sounds and find the one with this ID.
        for (let i = 0; i < this._sounds.length; i++) {
            if (id === this._sounds[i]!._id) {
                return this._sounds[i];
            }
        }

        return undefined;
    }

    /**
     * Return an inactive sound from the pool or create a new one.
     *
     * @returns {Sound} Sound playback object.
     */
    _inactiveSound() {
        this._drain();

        // Find the first inactive node to recycle.
        for (let i = 0; i < this._sounds.length; i++) {
            if (this._sounds[i]!._ended) {
                return this._sounds[i]!.reset();
            }
        }

        // If no inactive node was found, create a new one.
        return new Sound(this);
    }

    /** Drain excess inactive sounds from the pool. */
    _drain() {
        const limit = this._pool;
        let cnt = 0;
        let i = 0;

        // If there are less sounds than the max pool size, we are done.
        if (this._sounds.length < limit) {
            return;
        }

        // Count the number of inactive sounds.
        for (i = 0; i < this._sounds.length; i++) {
            if (this._sounds[i]!._ended) {
                cnt++;
            }
        }

        // Remove excess inactive sounds, going in reverse order.
        for (i = this._sounds.length - 1; i >= 0; i--) {
            if (cnt <= limit) {
                return;
            }
            const node = this._sounds[i]!;

            if (node._ended) {
                // Disconnect the audio source when using Web Audio.
                if (this._webAudio && node._node instanceof GainNode) {
                    node._node.disconnect(0);
                }

                // Remove sounds until we have the pool size.
                this._sounds.splice(i, 1);
                cnt--;
            }
        }
    }

    /**
     * Get all ID's from the sounds pool.
     *
     * @param {Number} id Only return one ID if one is passed.
     * @returns {Array} Array of IDs.
     */
    _getSoundIds(id?: number | undefined) {
        if (typeof id === 'undefined') {
            const ids = [];
            for (let i = 0; i < this._sounds.length; i++) {
                ids.push(this._sounds[i]!._id);
            }

            return ids;
        } else {
            return [id];
        }
    }

    /** Load the sound back into the buffer source. */
    public _refreshBuffer(sound: Sound): this {
        if (!(sound._node instanceof GainNode)) {
            return this;
        }

        // Setup the buffer source for playback.
        sound._node.bufferSource = this.howler.audioContext.createBufferSource();
        sound._node.bufferSource.buffer =
            howlerCache[Array.isArray(this._src) ? this._src[0]! : this._src]!;

        // Connect to the correct node.
        if (sound._panner) {
            sound._node.bufferSource.connect(sound._panner);
        } else {
            sound._node.bufferSource.connect(sound._node);
        }

        // Setup looping and playback rate.
        sound._node.bufferSource.loop = sound._loop;
        if (sound._loop) {
            sound._node.bufferSource.loopStart = sound._start || 0;
            sound._node.bufferSource.loopEnd = sound._stop || 0;
        }
        sound._node.bufferSource.playbackRate.setValueAtTime(
            sound._rate,
            this.howler.audioContext.currentTime,
        );

        return this;
    }

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     *
     * @param {Object} node Sound's audio node containing the buffer source.
     * @returns {Howl}
     */
    _cleanBuffer(node: {bufferSource?: undefined | AudioBufferSourceNode}) {
        const isIOS = globalThis.navigator.vendor.includes('Apple');

        if (!node.bufferSource) {
            return this;
        }

        if (this.howler._scratchBuffer) {
            node.bufferSource.onended = null;
            node.bufferSource.disconnect(0);
            if (isIOS) {
                try {
                    node.bufferSource.buffer = this.howler._scratchBuffer;
                } catch {}
            }
        }
        node.bufferSource = undefined;

        return this;
    }

    /** Set the source to a 0-second silence to stop any downloading (except in IE). */
    private clearSound(node: HTMLAudioElement) {
        node.src =
            'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
    }
}

/** Single Sound Methods * */
/***/

/**
 * Setup the sound object, which each node attached to a Howl group is contained in.
 *
 * @param {Object} howl The Howl parent group.
 */
export class Sound {
    public declare _node: (GainNode | HTMLAudioElement) & {
        bufferSource?: undefined | AudioBufferSourceNode;
        _unlocked?: boolean;
        paused?: boolean;
    };
    public declare _fadeTo: number | undefined;
    public declare _interval: ReturnType<typeof globalThis.setTimeout> | undefined;
    public declare _muted: boolean;
    public declare _loop: boolean;
    public declare _volume: number;
    public declare _rate: number;
    public declare _seek: number;
    public declare _rateSeek: number;
    public declare _paused: unknown;
    public declare _ended: unknown;
    public declare _sprite: string;
    public declare _id: number;
    public declare _loadFn: () => void;
    public declare _endFn: () => void;
    public declare _errorFn: () => void;
    public declare _start: number;
    public declare _stop: number;
    public declare _playStart: number;
    public declare _panner: undefined | PannerNode;

    constructor(public readonly howl: Howl) {
        // Setup the default parameters.
        this._muted = this.howl._muted;
        this._loop = this.howl._loop;
        this._volume = this.howl._volume;
        this._rate = this.howl._rate;
        this._seek = 0;
        this._paused = true;
        this._ended = true;
        this._sprite = '__default';

        // Generate a unique ID for this sound.
        this._id = ++this.howl.howler._counter;

        // Add itself to the parent's pool.
        this.howl._sounds.push(this);

        // Create the new node.
        this.create();
    }

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     *
     * @returns {Sound}
     */
    public create() {
        const volume =
            this.howl.howler._muted || this._muted || this.howl._muted ? 0 : this._volume;

        if (this.howl._webAudio) {
            // Create the gain node for controlling volume (the source will connect to this).
            this._node = this.howl.howler.audioContext.createGain();
            this._node.gain.setValueAtTime(volume, this.howl.howler.audioContext.currentTime);
            this._node.paused = true;
            this._node.connect(this.howl.howler.masterGain);
        } else {
            // Get an unlocked Audio object from the pool.
            this._node = this.howl.howler._obtainHtml5Audio();

            // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
            this._errorFn = this._errorListener.bind(this);
            this._node.addEventListener('error', this._errorFn, false);

            // Listen for 'canplaythrough' event to let us know the sound is ready.
            this._loadFn = this._loadListener.bind(this);
            this._node.addEventListener(this.howl.howler._canPlayEvent, this._loadFn, false);

            // Listen for the 'ended' event on the sound to account for edge-case where
            // a finite sound has a duration of Infinity.
            this._endFn = this._endListener.bind(this);
            this._node.addEventListener('ended', this._endFn, false);

            // Setup the new audio node.
            this._node.src = Array.isArray(this.howl._src) ? this.howl._src[0]! : this.howl._src;
            this._node.preload = this.howl._preload === true ? 'auto' : this.howl._preload || '';
            this._node.volume = volume * this.howl.howler.volume;

            // Begin loading the source.
            this._node.load();
        }

        return this;
    }

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     *
     * @returns {Sound}
     */
    reset() {
        const parent = this.howl;

        // Reset all of the parameters of this sound.
        this._muted = parent._muted;
        this._loop = parent._loop;
        this._volume = parent._volume;
        this._rate = parent._rate;
        this._seek = 0;
        this._rateSeek = 0;
        this._paused = true;
        this._ended = true;
        this._sprite = '__default';

        // Generate a new ID so that it isn't confused with the previous sound.
        this._id = ++this.howl.howler._counter;

        return this;
    }

    /** HTML5 Audio error listener callback. */
    _errorListener() {
        if (!(this._node instanceof HTMLAudioElement)) {
            return;
        }
        // Fire an error event and pass back the code.
        this.howl._emit('loaderror', this._id, this._node.error ? this._node.error.code : 0);

        // Clear the event listener.
        this._node.removeEventListener('error', this._errorFn, false);
    }

    /** HTML5 Audio canplaythrough listener callback. */
    _loadListener() {
        if (!(this._node instanceof HTMLAudioElement)) {
            return;
        }

        // Round up the duration to account for the lower precision in HTML5 Audio.
        this.howl._duration = Math.ceil(this._node.duration * 10) / 10;

        // Setup a sprite if none is defined.
        if (Object.keys(this.howl._sprite).length === 0) {
            this.howl._sprite = {
                __default: [
                    0,
                    this.howl._duration * 1000,
                ],
            };
        }

        if (this.howl._state !== 'loaded') {
            this.howl._state = 'loaded';
            this.howl._emit('load');
            this.howl._loadQueue();
        }

        // Clear the event listener.
        this._node.removeEventListener(this.howl.howler._canPlayEvent, this._loadFn, false);
    }

    /** HTML5 Audio ended listener callback. */
    _endListener() {
        if (!(this._node instanceof HTMLAudioElement)) {
            return;
        }

        // Only handle the `ended`` event if the duration is Infinity.
        if (this.howl._duration === Infinity) {
            // Update the this.howl duration to match the real audio duration.
            // Round up the duration to account for the lower precision in HTML5 Audio.
            this.howl._duration = Math.ceil(this._node.duration * 10) / 10;

            // Update the sprite that corresponds to the real duration.
            if (this.howl._sprite.__default![1] === Infinity) {
                this.howl._sprite.__default![1] = this.howl._duration * 1000;
            }

            // Run the regular ended method.
            this.howl._ended(this);
        }

        // Clear the event listener since the duration is now correct.
        this._node.removeEventListener('ended', this._endFn, false);
    }
}
