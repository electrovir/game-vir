import {type Howl} from './howl.js';

/** Helper Methods * */
/***/

export const howlerCache: Record<string, AudioBuffer> = {};

/**
 * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
 *
 * @param {Howl} howl
 */
export function loadBuffer(howl: Howl) {
    const url: string = Array.isArray(howl._src) ? howl._src[0]! : howl._src;

    // Check if the buffer has already been cached and use it instead.
    if (howlerCache[url]) {
        // Set the duration from the cache.
        howl._duration = howlerCache[url].duration;

        // Load the sound into this Howl.
        loadSound(howl);

        return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
        // Decode the base64 data URI without XHR, since some browsers don't support it.
        const data = atob(url.split(',')[1]!);
        const dataView = new Uint8Array(data.length);
        for (let i = 0; i < data.length; ++i) {
            dataView[i] = data.codePointAt(i)!;
        }

        decodeAudioData(dataView.buffer, howl);
    } else {
        // Load the buffer from the URL.
        const xhr = new XMLHttpRequest();
        xhr.open(howl._xhr.method, url, true);
        xhr.withCredentials = howl._xhr.withCredentials;
        xhr.responseType = 'arraybuffer';

        Object.entries(howl._xhr.headers).forEach(
            ([
                key,
                value,
            ]) => {
                xhr.setRequestHeader(key, value);
            },
        );

        xhr.onload = function () {
            // Make sure we get a successful response back.
            const code = (xhr.status + '')[0];
            if (code !== '0' && code !== '2' && code !== '3') {
                howl._emit(
                    'loaderror',
                    null,
                    'Failed loading audio file with status: ' + xhr.status + '.',
                );
                return;
            }

            decodeAudioData(xhr.response, howl);
        };
        safeXhrSend(
            Object.assign(xhr, {
                onerror() {
                    // If there is an error, switch to HTML5 Audio.
                    if (howl._webAudio) {
                        howl._html5 = true;
                        howl._webAudio = false;
                        howl._sounds = [];
                        delete howlerCache[url];
                        howl.load();
                    }
                },
            }),
        );
    }
}

/**
 * Send the XHR request wrapped in a try/catch.
 *
 * @param {Object} xhr XHR to send.
 */
function safeXhrSend(xhr: XMLHttpRequest & {onerror(): void}) {
    try {
        xhr.send();
    } catch {
        xhr.onerror();
    }
}

/**
 * Decode audio data from an array buffer.
 *
 * @param {ArrayBuffer} arraybuffer The audio data.
 * @param {Howl} howl
 */
function decodeAudioData(arraybuffer: ArrayBuffer, howl: Howl) {
    // Fire a load error if something broke.
    const error = function () {
        howl._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    const success = function (buffer?: AudioBuffer) {
        const src: string = Array.isArray(howl._src) ? howl._src[0]! : howl._src;

        if (buffer && howl._sounds.length > 0) {
            howlerCache[src] = buffer;
            loadSound(howl, buffer);
        } else {
            error();
        }
    };

    howl.howler.audioContext.decodeAudioData(arraybuffer).then(success).catch(error);
}

/** Sound is now loaded, so finish setting everything up and fire the loaded event. */
function loadSound(
    howl: Howl,
    /** Decoded buffer sound source. */
    buffer?: AudioBuffer,
) {
    // Set the duration.
    if (buffer && !howl._duration) {
        howl._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(howl._sprite).length === 0) {
        howl._sprite = {
            __default: [
                0,
                howl._duration * 1000,
            ],
        };
    }

    // Fire the loaded event.
    if (howl._state !== 'loaded') {
        howl._state = 'loaded';
        howl._emit('load');
        howl._loadQueue();
    }
}
