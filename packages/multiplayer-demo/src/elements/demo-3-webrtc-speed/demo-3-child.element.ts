import {waitUntil} from '@augment-vir/assert';
import {createUuidV4, DeferredPromise, log, wait, type AnyObject} from '@augment-vir/common';
import {
    createNewRoom,
    defineMultiplayerService,
    WebrtcMessageEvent,
    WebrtcMultiplayerController,
    type RoomInput,
} from '@game-vir/multiplayer';
import {generateApi, mapServiceDevPort} from '@rest-vir/define-service';
import {convertDuration, type Duration, type DurationUnit} from 'date-vir';
import {
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    isAsyncError,
    isResolved,
    nothing,
} from 'element-vir';

export const Demo3Child = defineElementNoInputs({
    tagName: 'demo-3-child',
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
    `,
    stateInitStatic: {
        webrtcController: asyncProp<WebrtcMultiplayerController | undefined>({
            defaultValue: undefined,
        }),
        lastLatency: undefined as undefined | Duration<DurationUnit.Milliseconds>,
    },
    init({state, host, updateState}) {
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

                await webrtcController.initConnection();
                await waitUntil.isTrue(() => webrtcController.isConnected());

                const firstRoom = await waitUntil.isDefined(async () => {
                    const {data} = await api.endpoints['/rooms'].fetch();
                    const firstRoom = Object.values(data)[0];
                    return firstRoom;
                });

                if (firstRoom.roomId !== initRoom.roomId) {
                    webrtcController.destroy();
                    webrtcController = new WebrtcMultiplayerController(api, [], {
                        ...initRoom,
                        roomId: firstRoom.roomId,
                    });
                    await webrtcController.initConnection();

                    await waitUntil.isTrue(() => webrtcController.isConnected());
                }

                webrtcController.listen(WebrtcMessageEvent, (message) => {
                    const data: AnyObject = message.detail || {};
                    if (data.type === 'latency-test') {
                        webrtcController.sendMessage({id: data.id, type: 'latency-response'});
                    }
                });

                void detectWebrtcLatency(webrtcController, host, updateState);

                return webrtcController;
            }),
        );
    },
    render({state}) {
        if (!state.webrtcController.value || !isResolved(state.webrtcController.value)) {
            return html`
                <p>Loading...</p>
            `;
        } else if (isAsyncError(state.webrtcController.value)) {
            return html`
                <p>Failed to connect to multiplayer server.</p>
            `;
        }

        return html`
            Client ${state.webrtcController.value.clientId}
            <br />
            Connected to ${state.webrtcController.value.multiplayerRoom.roomName}
            (${state.webrtcController.value.multiplayerRoom.roomId})
            <br />
            ${state.webrtcController.value.isHost() ? 'Host Client' : 'Member Client'}
            <br />
            ${state.lastLatency
                ? html`
                      <p class="latency">
                          Round-trip latency: ${state.lastLatency.milliseconds} ms
                      </p>
                  `
                : nothing}
        `;
    },
});

async function detectWebrtcLatency(
    webrtcController: WebrtcMultiplayerController,
    host: HTMLElement,
    updateState: (params: {lastLatency: {milliseconds: number}}) => void,
) {
    if (!webrtcController.isConnected() || !host.isConnected) {
        return;
    }

    if (webrtcController.getConnectedClientIds().length) {
        const latencyReceived = new DeferredPromise();

        const messageId = createUuidV4();

        const removeListener = webrtcController.listen(WebrtcMessageEvent, (message) => {
            const data: AnyObject = message.detail || {};
            if (data.id === messageId && data.type === 'latency-response') {
                latencyReceived.resolve();
            }
        });

        const start = Date.now();
        webrtcController.sendMessage({
            type: 'latency-test',
            id: messageId,
        });

        await latencyReceived.promise;
        updateState({
            lastLatency: convertDuration({milliseconds: Date.now() - start}, {milliseconds: true}),
        });
        removeListener();
    } else {
        log.warning(`No clients to get latency from in ${webrtcController.clientId}`);
    }

    window.setTimeout(
        () => void detectWebrtcLatency(webrtcController, host, updateState),
        /**
         * Decreasing this value clogs up the duplex stream very quickly, preventing the host from
         * detecting its own latency. Is this going to be a problem for gaming?
         */
        500,
    );
}
