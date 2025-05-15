/**
 * These types were taking from
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/40c08cbf9d9dc84d216bbc992a7711c2e27a6681/types/howler/index.d.ts
 * and modified to remove the global types and overall improve their ergonomics.
 *
 * The original code has the following license:
 *
 *         MIT License
 *
 *     Copyright (c) Microsoft Corporation.
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a copy
 *     of this software and associated documentation files (the "Software"), to deal
 *     in the Software without restriction, including without limitation the rights
 *     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *     copies of the Software, and to permit persons to whom the Software is
 *     furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in all
 *     copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *     SOFTWARE
 *
 *     ```
 */
import {type PartialWithUndefined} from '@augment-vir/common';

// @ts-expect-error: howler is not natively typed
import {Howl as HowlConstructor} from 'howler';

export type HowlCallback = (soundId: number) => void;
export type HowlErrorCallback = (soundId: number, error: unknown) => void;
export type SpatialOrientation = [number, number, number];
export type SpatialPosition = [number, number, number];

export type SoundSpriteDefinitions = {
    [name: string]: [number, number] | [number, number, boolean];
};

export type PannerAttributes = {
    coneInnerAngle?: number | undefined;
    coneOuterAngle?: number | undefined;
    coneOuterGain?: number | undefined;
    distanceModel?: 'inverse' | 'linear';
    maxDistance?: number;
    panningModel?: 'HRTF' | 'equalpower';
    refDistance?: number;
    rolloffFactor?: number;
};

export type HowlListeners = PartialWithUndefined<{
    /** Fires when the sound has been stopped. The first parameter is the ID of the sound. */
    onstop: HowlCallback;

    /** Fires when the sound has been paused. The first parameter is the ID of the sound. */
    onpause: HowlCallback;

    /** Fires when the sound is loaded. */
    onload: HowlCallback;

    /** Fires when the sound has been muted/unmuted. The first parameter is the ID of the sound. */
    onmute: HowlCallback;

    /** Fires when the sound's volume has changed. The first parameter is the ID of the sound. */
    onvolume: HowlCallback;

    /** Fires when the sound's playback rate has changed. The first parameter is the ID of the sound. */
    onrate: HowlCallback;

    /** Fires when the sound has been seeked. The first parameter is the ID of the sound. */
    onseek: HowlCallback;

    /**
     * Fires when the current sound finishes fading in/out. The first parameter is the ID of the
     * sound.
     */
    onfade: HowlCallback;

    /** Fires when audio has been automatically unlocked through a touch/click event. */
    onunlock: HowlCallback;

    /**
     * Fires when the sound finishes playing (if it is looping, it'll fire at the end of each loop).
     * The first parameter is the ID of the sound.
     */
    onend: HowlCallback;

    /** Fires when the sound begins playing. The first parameter is the ID of the sound. */
    onplay: HowlCallback;

    /**
     * Fires when the sound is unable to load. The first parameter is the ID of the sound (if it
     * exists) and the second is the error message/code.
     */
    onloaderror: HowlErrorCallback;

    /**
     * Fires when the sound is unable to play. The first parameter is the ID of the sound and the
     * second is the error message/code.
     */
    onplayerror: HowlErrorCallback;
}>;

export type HowlOptions = HowlListeners & BaseHowlOptions;

export type BaseHowlOptions = {
    /**
     * The sources to the track(s) to be loaded for the sound (URLs or base64 data URIs). These
     * should be in order of preference, howler.js will automatically load the first one that is
     * compatible with the current browser. If your files have no extensions, you will need to
     * explicitly specify the extension using the format property.
     */
    src: string | string[];
} & PartialWithUndefined<{
    /**
     * The volume of the specific track, from 0.0 to 1.0.
     *
     * @default 1.0
     */
    volume: number;

    /**
     * Set to true to force HTML5 Audio. This should be used for large audio files so that you don't
     * have to wait for the full file to be downloaded and decoded before playing.
     *
     * @default false
     */
    html5: boolean;

    /**
     * Set to true to automatically loop the sound forever.
     *
     * @default false
     */
    loop: boolean;

    /**
     * Automatically begin downloading the audio file when the Howl is defined. If using HTML5
     * Audio, you can set this to 'metadata' to only preload the file's metadata (to get its
     * duration without download the entire file, for example).
     *
     * @default true
     */
    preload: boolean | 'metadata';

    /**
     * Set to true to automatically start playback when sound is loaded.
     *
     * @default false
     */
    autoplay: boolean;

    /**
     * Set to true to load the audio muted.
     *
     * @default false
     */
    mute: boolean;

    /**
     * Define a sound sprite for the sound. The offset and duration are defined in milliseconds. A
     * third (optional) parameter is available to set a sprite as looping. An easy way to generate
     * compatible sound sprites is with audiosprite.
     */
    sprite: SoundSpriteDefinitions;

    /**
     * The rate of playback. 0.5 to 4.0, with 1.0 being normal speed.
     *
     * @default 1.0
     */
    rate: number;

    /**
     * The size of the inactive sounds pool. Once sounds are stopped or finish playing, they are
     * marked as ended and ready for cleanup. We keep a pool of these to recycle for improved
     * performance. Generally this doesn't need to be changed. It is important to keep in mind that
     * when a sound is paused, it won't be removed from the pool and will still be considered active
     * so that it can be resumed later.
     *
     * @default 5
     */
    pool: number;

    /**
     * Howler.js automatically detects your file format from the extension, but you may also specify
     * a format in situations where extraction won't work (such as with a SoundCloud stream).
     */
    format: string | string[];

    /**
     * When using Web Audio, howler.js uses an XHR request to load the audio files. If you need to
     * send custom headers, set the HTTP method or enable withCredentials (see reference), include
     * them with this parameter. Each is optional (method defaults to GET, headers default to null
     * and withCredentials defaults to false).
     */
    xhr: PartialWithUndefined<{
        method: string;
        headers: Record<string, string>;
        withCredentials: boolean;
    }>;
}>;

export interface Howl {
    play(spriteOrId?: string | number): number; // .play() is not chainable; the other methods are
    pause(id?: number): this;
    stop(id?: number): this;

    mute(): boolean;
    mute(muted: boolean, id?: number): this;

    volume(): number;
    volume(idOrSetVolume: number): this | number;
    volume(volume: number, id: number): this;

    fade(from: number, to: number, duration: number, id?: number): this;

    rate(id?: number): number;
    rate(rate: number, id?: number): this;

    seek(id?: number): number;
    seek(seek: number, id?: number): this;

    loop(id?: number): boolean;
    loop(loop: boolean, id?: number): this;

    playing(id?: number): boolean;
    duration(id?: number): number;
    state(): 'unloaded' | 'loading' | 'loaded';
    load(): this;
    unload(): null;

    on(event: 'load', callback: () => void, id?: number): this;
    on(event: 'loaderror' | 'playerror', callback: HowlErrorCallback, id?: number): this;
    on(
        event:
            | 'play'
            | 'end'
            | 'pause'
            | 'stop'
            | 'mute'
            | 'volume'
            | 'rate'
            | 'seek'
            | 'fade'
            | 'unlock',
        callback: HowlCallback,
        id?: number,
    ): this;
    on(event: string, callback: HowlCallback | HowlErrorCallback, id?: number): this;

    once(event: 'load', callback: () => void, id?: number): this;
    once(event: 'loaderror' | 'playerror', callback: HowlErrorCallback, id?: number): this;
    once(
        event:
            | 'play'
            | 'end'
            | 'pause'
            | 'stop'
            | 'mute'
            | 'volume'
            | 'rate'
            | 'seek'
            | 'fade'
            | 'unlock',
        callback: HowlCallback,
        id?: number,
    ): this;
    once(event: string, callback: HowlCallback | HowlErrorCallback, id?: number): this;

    off(event: 'load', callback?: () => void, id?: number): this;
    off(event: 'loaderror' | 'playerror', callback?: HowlErrorCallback, id?: number): this;
    off(
        event:
            | 'play'
            | 'end'
            | 'pause'
            | 'stop'
            | 'mute'
            | 'volume'
            | 'rate'
            | 'seek'
            | 'fade'
            | 'unlock',
        callback?: HowlCallback,
        id?: number,
    ): this;
    // off() also supports passing id as second argument: internally it is type checked and treated as an id if it is a number
    off(
        event:
            | 'load'
            | 'loaderror'
            | 'playerror'
            | 'play'
            | 'end'
            | 'pause'
            | 'stop'
            | 'mute'
            | 'volume'
            | 'rate'
            | 'seek'
            | 'fade'
            | 'unlock',
        id: number,
    ): this;
    off(event?: string, callback?: HowlCallback | HowlErrorCallback, id?: number): this;

    stereo(): number;
    stereo(pan: number, id?: number): number | this;

    pos(): SpatialPosition;
    pos(x: number, y?: number, z?: number, id?: number): this;

    orientation(): SpatialOrientation;
    orientation(x: number, y?: number, z?: number, id?: number): this;

    pannerAttr(id?: number): PannerAttributes;
    pannerAttr(options: PannerAttributes, id?: number): this;
}

export const Howl = HowlConstructor as {
    new (options: HowlOptions): Howl;
};

export declare class Howler {
    public mute(muted: boolean): this;
    public stop(): this;

    public volume(): number;
    public volume(volume: number): this;

    public codecs(ext: string): boolean;
    public unload(): this;
    public usingWebAudio: boolean;
    public html5PoolSize: number;
    public noAudio: boolean;
    public autoUnlock: boolean;
    public autoSuspend: boolean;
    public ctx: AudioContext;
    public masterGain: GainNode;

    public stereo(pan: number): this;

    public pos(): SpatialPosition;
    public pos(x: number, y?: number, z?: number): this;

    public orientation(): SpatialOrientation;
    public orientation(
        x: number,
        y?: number,
        z?: number,
        xUp?: number,
        yUp?: number,
        zUp?: number,
    ): this;
}
