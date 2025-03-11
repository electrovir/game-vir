import {check, waitUntil} from '@augment-vir/assert';
import {log, wait, type Uuid} from '@augment-vir/common';
import {
    createNewRoom,
    defineMultiplayerService,
    WebrtcMultiplayerConnectionUpdateEvent,
    WebrtcMultiplayerController,
    WebrtcMultiplayerMessageEvent,
    type RoomInput,
} from '@game-vir/multiplayer';
import {generateApi, mapServiceDevPort} from '@rest-vir/define-service';
import {type Duration, type DurationUnit} from 'date-vir';
import {asyncProp, css, defineElementNoInputs, html, nothing, renderIf} from 'element-vir';
import {noNativeSpacing} from 'vira';
import {calculateMedian} from '../../augments/median.js';

export const Demo3Child = defineElementNoInputs({
    tagName: 'demo-3-child',
    state() {
        return {
            webrtcController: asyncProp<WebrtcMultiplayerController | undefined>({
                defaultValue: undefined,
            }),
            lastLatency: undefined as undefined | Duration<DurationUnit.Milliseconds>,
            currentFrame: undefined as undefined | number,
            clientCount: 0,
            medianLatency: undefined as undefined | Duration<DurationUnit.Milliseconds>,
            lastMedianUpdate: Date.now(),
            lastFrameCount: 0,
            framesPerSecond: 0,
        };
    },
    hostClasses: {
        'demo-3-child-big-latency': ({state}) => (state.lastLatency?.milliseconds || 0) >= 10,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: block;
        }

        .latency {
            color: green;
        }

        ${hostClasses['demo-3-child-big-latency'].selector} .latency {
            color: red;
            font-weight: bold;
        }

        p {
            ${noNativeSpacing};
        }
    `,
    init({state, updateState}) {
        let latencies: number[] = [];

        function updateMedianLatency(newLatency: Duration<DurationUnit.Milliseconds>) {
            latencies.push(newLatency.milliseconds);
            if (Date.now() > state.lastMedianUpdate + 1000) {
                updateState({
                    medianLatency: {milliseconds: calculateMedian(latencies) || 0},
                    lastMedianUpdate: Date.now(),
                    lastFrameCount: state.currentFrame || 0,
                    framesPerSecond: (state.currentFrame || 0) - state.lastFrameCount,
                });
                latencies = [];
            }
        }

        state.webrtcController.setValue(
            mapServiceDevPort(defineMultiplayerService(), {
                maxScanDistance: 10,
                timeout: {
                    seconds: 5,
                },
            }).then(async (service) => {
                /** Give the server time to clear out the last room. */
                await wait({seconds: 1});
                const initRoom: RoomInput = createNewRoom({roomName: 'Demo Room'});

                const api = generateApi(service);

                let webrtcController = new WebrtcMultiplayerController(api, [], initRoom);

                startLockStep(webrtcController, (newState) => {
                    if ('lastLatency' in newState) {
                        updateMedianLatency(newState.lastLatency);
                    }

                    updateState(newState);
                });

                await webrtcController.initConnection();
                await waitUntil.isTrue(() => webrtcController.isConnected());

                const firstRoom = await waitUntil.isDefined(async () => {
                    const {ok, data} = await api.endpoints['/rooms'].fetch();
                    if (!ok) {
                        throw new Error('fetch failed');
                    }
                    const firstRoom = Object.values(data)[0];
                    return firstRoom;
                });

                if (firstRoom.roomId !== initRoom.roomId) {
                    webrtcController.destroy();
                    webrtcController = new WebrtcMultiplayerController(api, [], {
                        ...initRoom,
                        roomId: firstRoom.roomId,
                    });
                    let lastFrameStart = Date.now();

                    webrtcController.listen(
                        WebrtcMultiplayerMessageEvent,
                        ({detail: frameIndex}) => {
                            const newFrameStart = Date.now();
                            webrtcController.sendMessage(frameIndex);
                            const lastLatency = {milliseconds: newFrameStart - lastFrameStart};
                            updateState({
                                lastLatency,
                                currentFrame: frameIndex,
                            });

                            updateMedianLatency(lastLatency);
                            lastFrameStart = newFrameStart;
                        },
                    );
                    await webrtcController.initConnection();

                    await waitUntil.isTrue(() => webrtcController.isConnected());
                }

                return webrtcController;
            }),
        );
    },
    render({state}) {
        if (!state.webrtcController.value || !state.webrtcController.settledValue) {
            return html`
                <p>Loading...</p>
            `;
        } else if (state.webrtcController.settledValue instanceof Error) {
            return html`
                <p>Failed to connect to multiplayer server.</p>
            `;
        }

        return html`
            Client ${state.webrtcController.settledValue.clientId}
            <br />
            Connected to ${state.webrtcController.settledValue.multiplayerRoom.roomName}
            (${state.webrtcController.settledValue.multiplayerRoom.roomId})
            <br />
            ${state.webrtcController.settledValue.isHost() ? 'Host Client' : 'Member Client'}
            <br />
            Frame: ${state.currentFrame || 0}
            <br />
            FPS: ${state.framesPerSecond}
            <br />
            ${renderIf(
                !!state.clientCount,
                html`
                    Client count: ${state.clientCount}
                    <br />
                `,
            )}
            ${state.medianLatency
                ? html`
                      <p>Median Latency: ${state.medianLatency.milliseconds} ms</p>
                  `
                : nothing}
            ${state.lastLatency
                ? html`
                      <p class="latency">Latency: ${state.lastLatency.milliseconds} ms</p>
                  `
                : nothing}
        `;
    },
});

function startLockStep(
    webrtcController: WebrtcMultiplayerController,
    updateState: (
        newState: Partial<{
            lastLatency: Duration<DurationUnit.Milliseconds>;
            currentFrame: number;
            clientCount: number;
        }>,
    ) => void,
) {
    let clientMessages: Record<Uuid, unknown> = {};
    let frameIndex = 0;
    let frameStart = Date.now();

    function maybeStartNextFrame() {
        if (!webrtcController.isHost()) {
            return;
        }

        if (check.hasKeys(clientMessages, webrtcController.getConnectedClientIds())) {
            const newFrameStart = Date.now();

            updateState({
                lastLatency: {milliseconds: newFrameStart - frameStart},
                currentFrame: frameIndex,
            });
            frameStart = newFrameStart;

            ++frameIndex;
            if (frameIndex > 1_000_000_000) {
                frameIndex = 0;
            }

            webrtcController.sendMessage(frameIndex as any);
            clientMessages = {};
        }
    }

    webrtcController.listen(WebrtcMultiplayerMessageEvent, ({sourceClientId, detail: message}) => {
        if (sourceClientId in clientMessages) {
            log.error(
                new Error(
                    `Already received message from client '${sourceClientId}' for frame '${frameIndex}'.`,
                ),
            );
            return;
        } else if (message !== frameIndex) {
            log.error(
                new Error(
                    `Received wrong frame ('${message}') from '${sourceClientId}'. Expected frame '${frameIndex}'.`,
                ),
            );
            return;
        }

        clientMessages[sourceClientId] = message;

        maybeStartNextFrame();
    });

    webrtcController.listen(WebrtcMultiplayerConnectionUpdateEvent, ({detail}) => {
        maybeStartNextFrame();

        updateState({
            clientCount: webrtcController.getConnectedClientIds().length,
        });

        if (detail.newMember) {
            webrtcController.sendToOnlyOneClient(detail.newMember, frameIndex as any);
        }
    });
}
