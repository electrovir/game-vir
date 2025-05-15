/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

import {type Overwrite} from '@augment-vir/common';
import {type Howl} from './howl.js';

/**
 * Create the global controller. All contained methods and properties apply to all sounds that are
 * currently playing or will be in the future.
 */
export class Howler {
    public declare _counter: number;
    private declare _html5AudioPool: HTMLAudioElement[];
    public declare html5PoolSize: number;
    private declare _codecs: Record<string, boolean>;
    public howls: Howl[] = [];
    public declare _muted: boolean;
    public declare _canPlayEvent: string;
    public declare masterGain: GainNode;
    // always false
    // public declare noAudio: boolean;
    // always true
    // public declare usingWebAudio: boolean;
    public declare autoSuspend: boolean;
    public declare audioContext: Overwrite<
        AudioContext,
        {state: AudioContextState | 'interrupted'}
    >;
    public declare autoUnlock: boolean;
    public declare state: typeof this.audioContext.state | 'suspending';
    private declare _audioUnlocked: boolean;
    private declare _mobileUnloaded: boolean;
    public declare _scratchBuffer: AudioBuffer | undefined;
    private declare _suspendTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
    private declare _resumeAfterSuspend: boolean;

    private _volume = 1;

    constructor() {
        // Create a global ID counter.
        this._counter = 1000;

        // Pool of unlocked HTML5 Audio objects.
        this._html5AudioPool = [];
        this.html5PoolSize = 10;

        // Internal properties.
        this._codecs = {};
        this._muted = false;
        this._canPlayEvent = 'canplaythrough';

        // Public properties.
        this.autoSuspend = true;
        this.audioContext = new AudioContext();

        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        this.masterGain = this.audioContext.createGain();
        this.masterGain?.gain.setValueAtTime(
            this._muted ? 0 : this._volume,
            this.audioContext.currentTime,
        );
        this.masterGain?.connect(this.audioContext.destination);

        // Set to false to disable the auto audio unlocker.
        this.autoUnlock = true;

        // Setup the various state values for global tracking.

        // Keeps track of the suspend/resume state of the AudioContext.
        this.state = this.audioContext.state || 'suspended';

        // Automatically begin the 30-second suspend process
        this._autoSuspend();

        this._setupCodecs();
    }

    public get volume() {
        return this._volume;
    }
    public set volume(
        /** Volume from 0.0 to 1.0. */
        newVolume: number,
    ) {
        this._volume = newVolume;

        // Don't update any of the nodes if we are muted.
        if (this._muted) {
            return;
        }

        this.masterGain?.gain.setValueAtTime(newVolume, this.audioContext.currentTime);

        // Loop through and change volume for all HTML5 audio nodes.
        for (let i = 0; i < this.howls.length; i++) {
            if (!this.howls[i]!._webAudio) {
                // Get all of the sounds in this Howl group.
                const ids = this.howls[i]!._getSoundIds();

                // Loop through all sounds and change the volumes.
                for (const id of ids) {
                    const sound = this.howls[i]!._soundById(id);

                    if (sound && sound._node instanceof HTMLAudioElement) {
                        sound._node.volume = sound._volume * newVolume;
                    }
                }
            }
        }
    }

    public setVolume(
        /** Volume from 0.0 to 1.0. */
        newVolume: number,
    ) {
        this.volume = newVolume;
        return this;
    }

    /**
     * Handle muting and unmuting globally.
     *
     * @param {Boolean} muted Is muted or not.
     */
    mute(muted: boolean) {
        this._muted = muted;

        this.masterGain.gain.setValueAtTime(
            muted ? 0 : this._volume,
            this.audioContext.currentTime,
        );

        // Loop through and mute all HTML5 Audio nodes.
        for (let i = 0; i < this.howls.length; i++) {
            if (!this.howls[i]!._webAudio) {
                // Get all of the sounds in this Howl group.
                const ids = this.howls[i]!._getSoundIds();

                // Loop through all sounds and mark the audio node as muted.
                for (const id of ids) {
                    const sound = this.howls[i]!._soundById(id);

                    if (sound && sound._node instanceof HTMLAudioElement) {
                        sound._node.muted = muted ? true : sound._muted;
                    }
                }
            }
        }

        return this;
    }

    /** Handle stopping all sounds globally. */
    stop() {
        // Loop through all Howls and stop them.
        for (let i = 0; i < this.howls.length; i++) {
            this.howls[i]!.stop();
        }

        return this;
    }

    /**
     * Unload and destroy all currently loaded Howl objects.
     *
     * @returns {HowlerGlobal}
     */
    unload() {
        for (let i = this.howls.length - 1; i >= 0; i--) {
            this.howls[i]!.unload();
        }

        this.audioContext.close();
        this.audioContext = new AudioContext();

        return this;
    }

    /**
     * Check for codec support of specific extension.
     *
     * @param {String} ext Audio file extention.
     * @returns {Boolean}
     */
    codecs(ext: string) {
        return this._codecs[ext.replace(/^x-/, '')];
    }

    /**
     * Check for browser support for various codecs and cache the results.
     *
     * @returns {HowlerGlobal}
     */
    _setupCodecs() {
        const audioTest = new Audio();

        const mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

        // Opera version <33 has mixed MP3 support, so we need to check for and block it.
        const ua = globalThis.navigator.userAgent;
        const checkOpera = ua.match(/OPR\/(\d+)/g);
        const isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1]!, 10) < 33;
        const checkSafari = ua.includes('Safari') && !ua.includes('Chrome');
        const safariVersion = ua.match(/Version\/(.*?) /);
        const isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1]!, 10) < 15;

        this._codecs = {
            mp3: !!(
                !isOldOpera &&
                (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))
            ),
            mpeg: !!mpegTest,
            opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
            ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
            oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
            wav: !!(
                audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')
            ).replace(/^no$/, ''),
            aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
            caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
            m4a: !!(
                audioTest.canPlayType('audio/x-m4a;') ||
                audioTest.canPlayType('audio/m4a;') ||
                audioTest.canPlayType('audio/aac;')
            ).replace(/^no$/, ''),
            m4b: !!(
                audioTest.canPlayType('audio/x-m4b;') ||
                audioTest.canPlayType('audio/m4b;') ||
                audioTest.canPlayType('audio/aac;')
            ).replace(/^no$/, ''),
            mp4: !!(
                audioTest.canPlayType('audio/x-mp4;') ||
                audioTest.canPlayType('audio/mp4;') ||
                audioTest.canPlayType('audio/aac;')
            ).replace(/^no$/, ''),
            weba: !!(
                !isOldSafari &&
                audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
            ),
            webm: !!(
                !isOldSafari &&
                audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
            ),
            dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
            flac: !!(
                audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')
            ).replace(/^no$/, ''),
        };

        return this;
    }

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction. Attempt to
     * automatically unlock audio on the first user interaction. Concept from:
     * http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     *
     * @returns {HowlerGlobal}
     */
    _unlockAudio() {
        // Only run this if Web Audio is supported and it hasn't already been unlocked.
        if (this._audioUnlocked || !this.audioContext) {
            return;
        }

        this._audioUnlocked = false;
        this.autoUnlock = false;

        // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
        // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
        // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
        if (!this._mobileUnloaded && this.audioContext.sampleRate !== 44_100) {
            this._mobileUnloaded = true;
            this.unload();
        }

        // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
        // http://stackoverflow.com/questions/24119684
        this._scratchBuffer = this.audioContext.createBuffer(1, 1, 22_050);

        // Call this method on touch start to create and play a buffer,
        // then check if the audio actually played to determine if
        // audio has now been unlocked on iOS, Android, etc.
        const unlock = () => {
            // Create a pool of unlocked HTML5 Audio objects that can
            // be used for playing sounds without user interaction. HTML5
            // Audio objects must be individually unlocked, as opposed
            // to the WebAudio API which only needs a single activation.
            // This must occur before WebAudio setup or the source.onended
            // event will not fire.
            while (this._html5AudioPool.length < this.html5PoolSize) {
                const audioNode: HTMLAudioElement & {_unlocked?: boolean} = new Audio();

                // Mark this Audio object as unlocked to ensure it can get returned
                // to the unlocked pool when released.
                audioNode._unlocked = true;

                // Add the audio node to the pool.
                this._releaseHtml5Audio(audioNode);
            }

            // Loop through any assigned audio nodes and unlock them.
            for (let i = 0; i < this.howls.length; i++) {
                if (!this.howls[i]!._webAudio) {
                    // Get all of the sounds in this Howl group.
                    const ids = this.howls[i]!._getSoundIds();

                    // Loop through all sounds and unlock the audio nodes.
                    for (const id of ids) {
                        const sound = this.howls[i]!._soundById(id);

                        if (
                            sound &&
                            sound._node instanceof HTMLAudioElement &&
                            !sound._node._unlocked
                        ) {
                            sound._node._unlocked = true;
                            sound._node.load();
                        }
                    }
                }
            }

            // Fix Android can not play in suspend state.
            this._autoResume();

            // Create an empty buffer.
            const source = this.audioContext.createBufferSource();
            source.buffer = this._scratchBuffer || null;
            source.connect(this.audioContext.destination);

            source.start(0);

            this.audioContext.resume();

            // Setup a timeout to check that we are unlocked on the next event loop.
            source.onended = () => {
                source.disconnect(0);

                // Update the unlocked state and prevent this check from happening again.
                this._audioUnlocked = true;

                // Remove the touch start listener.
                document.removeEventListener('touchstart', unlock, true);
                document.removeEventListener('touchend', unlock, true);
                document.removeEventListener('click', unlock, true);
                document.removeEventListener('keydown', unlock, true);

                // Let all sounds know that audio has been unlocked.
                for (let i = 0; i < this.howls.length; i++) {
                    this.howls[i]!._emit('unlock');
                }
            };
        };

        // Setup a touch start listener to attempt an unlock in.
        document.addEventListener('touchstart', unlock, true);
        document.addEventListener('touchend', unlock, true);
        document.addEventListener('click', unlock, true);
        document.addEventListener('keydown', unlock, true);

        return this;
    }

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left, return a new Audio object
     * and throw a warning.
     *
     * @returns {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio(): HTMLAudioElement {
        // Return the next object from the pool if one exists.
        if (this._html5AudioPool.length) {
            return this._html5AudioPool.pop()!;
        }

        // Check if the audio is locked and throw a warning.
        new Audio().play().catch(function () {
            console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });

        return new Audio();
    }

    /**
     * Return an activated HTML5 Audio object to the pool.
     *
     * @returns {HowlerGlobal}
     */
    _releaseHtml5Audio(audio: HTMLAudioElement & {_unlocked?: boolean}) {
        // Don't add audio to the pool if we don't know if it has been unlocked.
        if (audio._unlocked) {
            this._html5AudioPool.push(audio);
        }

        return this;
    }

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting
     * stuck.
     *
     * @returns {HowlerGlobal}
     */
    _autoSuspend() {
        if (!this.autoSuspend) {
            return;
        }

        // Check if any sounds are playing.
        for (let i = 0; i < this.howls.length; i++) {
            if (this.howls[i]!._webAudio) {
                for (let j = 0; j < this.howls[i]!._sounds.length; j++) {
                    if (!this.howls[i]!._sounds[j]!._paused) {
                        return this;
                    }
                }
            }
        }

        if (this._suspendTimer) {
            globalThis.clearTimeout(this._suspendTimer);
        }

        // If no sound has played after 30 seconds, suspend the context.
        this._suspendTimer = globalThis.setTimeout(() => {
            if (!this.autoSuspend) {
                return;
            }

            this._suspendTimer = undefined;
            this.state = 'suspending';

            // Handle updating the state of the audio context after suspending.
            const handleSuspension = () => {
                this.state = 'suspended';

                if (this._resumeAfterSuspend) {
                    this._resumeAfterSuspend = false;
                    this._autoResume();
                }
            };

            // Either the state gets suspended or it is interrupted.
            // Either way, we need to update the state to suspended.
            this.audioContext.suspend().then(handleSuspension, handleSuspension);
        }, 30_000);

        return this;
    }

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     *
     * @returns {HowlerGlobal}
     */
    _autoResume() {
        if (
            this.state === 'running' &&
            this.audioContext.state !== 'interrupted' &&
            this._suspendTimer
        ) {
            clearTimeout(this._suspendTimer);
            this._suspendTimer = undefined;
        } else if (
            this.state === 'suspended' ||
            (this.state === 'running' && this.audioContext.state === 'interrupted')
        ) {
            this.audioContext.resume().then(() => {
                this.state = 'running';

                // Emit to all Howls that the audio has resumed.
                for (let i = 0; i < this.howls.length; i++) {
                    this.howls[i]!._emit('resume');
                }
            });

            if (this._suspendTimer) {
                clearTimeout(this._suspendTimer);
                this._suspendTimer = undefined;
            }
        } else if (this.state === 'suspending') {
            this._resumeAfterSuspend = true;
        }

        return this;
    }
}
