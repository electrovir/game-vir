import {assert, checkWrap} from '@augment-vir/assert';
import {randomString, type Uuid} from '@augment-vir/common';
import {
    createMultiplayerApi,
    createNewRoom,
    MultiplayerClientRooms,
    WebrtcMultiplayerConnectionUpdateEvent,
    WebrtcMultiplayerController,
    type MultiplayerApi,
    type RoomInput,
} from '@game-vir/multiplayer';
import {
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    isAsyncError,
    isResolved,
    listen,
    resolvedOrUndefined,
} from 'element-vir';
import {noNativeSpacing} from 'vira';

export const Demo2Child = defineElementNoInputs({
    tagName: 'demo-2-child',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
        }

        table {
            width: 100%;
        }

        p {
            ${noNativeSpacing};
        }

        table,
        th,
        td {
            border: 2px solid green;
        }
    `,
    stateInitStatic: {
        webrtcController: asyncProp<WebrtcMultiplayerController | undefined>({
            defaultValue: undefined,
        }),
        multiplayerApi: asyncProp({
            defaultValue: createMultiplayerApi({
                devScanOptions: {
                    maxScanDistance: 10,
                    timeout: {
                        seconds: 5,
                    },
                },
            }),
        }),
        rooms: asyncProp<MultiplayerClientRooms>({
            defaultValue: {},
        }),
        cleanup: undefined as undefined | (() => void),
        connectedClients: [] as Uuid[],
    },
    init({state, updateState}) {
        if (!state.cleanup) {
            const intervalId = window.setInterval(async () => {
                const api = state.multiplayerApi.value;

                if (!isResolved(api) || isAsyncError(api) || state.webrtcController.value) {
                    return;
                }

                const {data} = await api.endpoints['/rooms'].fetch();
                state.rooms.setValue(data);
            }, 1000);

            updateState({
                cleanup: () => {
                    window.clearInterval(intervalId);
                },
            });
        }
    },
    cleanup({state, updateState}) {
        state.cleanup?.();
        updateState({
            cleanup: undefined,
        });
    },
    render({state, updateState}) {
        function createController(api: MultiplayerApi | undefined, room: RoomInput) {
            if (api && !state.webrtcController.value) {
                const webrtcController = new WebrtcMultiplayerController(api, [], {
                    roomId: room.roomId,
                    roomName: room.roomName,
                    roomPassword: '',
                });
                webrtcController.listen(WebrtcMultiplayerConnectionUpdateEvent, (event) => {
                    const connectedClients = webrtcController.getConnectedClientIds();
                    updateState({
                        connectedClients,
                    });
                });

                state.webrtcController.setValue(
                    webrtcController.initConnection().then(() => webrtcController),
                );
            }
        }
        const api = resolvedOrUndefined(state.multiplayerApi.value);
        if (isAsyncError(api)) {
            return html`
                <p>Failed to connect to multiplayer server.</p>
            `;
        }

        const rooms: MultiplayerClientRooms =
            checkWrap.notInstanceOf(resolvedOrUndefined(state.rooms.value), Error) || {};

        const roomTemplates = Object.values(rooms).map((room) => {
            assert.isDefined(room);
            return html`
                <tr>
                    <th>${room.roomName}</th>
                    <td>${room.clientCount}</td>
                    <td>
                        <button
                            ${listen('click', () => {
                                createController(api, {
                                    roomId: room.roomId,
                                    roomName: room.roomName,
                                    roomPassword: '',
                                });
                            })}
                        >
                            Join
                        </button>
                    </td>
                </tr>
            `;
        });

        const webrtcController = state.webrtcController.value;

        if (webrtcController) {
            if (!isResolved(webrtcController)) {
                return html`
                    <p>Connecting to room...</p>
                `;
            } else if (isAsyncError(webrtcController)) {
                return html`
                    <p>Failed to connect to room.</p>
                `;
            }

            return html`
                <button
                    ${listen('click', () => {
                        state.webrtcController.setValue(undefined);
                        webrtcController.destroy();
                    })}
                >
                    Leave
                </button>
                <br>
                <p>Client id: ${webrtcController.clientId}</p>
                <br />
                <p>Connected to room: ${webrtcController.multiplayerRoom.roomName}</p>
                <br />
                <p>${webrtcController.isHost() ? 'You are the host.' : 'You are a member client.'}</p>
                <br />
                <p>
                    Connected clients
                    <table><tbody>${state.connectedClients.map(
                        (clientId) => html`
                            <tr><td>${clientId}</td></tr>
                        `,
                    )}</tbody></table>
                </p>
            `;
        } else {
            return html`
                <button
                    ${listen('click', () => {
                        createController(
                            api,
                            createNewRoom({
                                roomName: `My Room ${randomString(4)}`,
                            }),
                        );
                    })}
                >
                    Create Room
                </button>
                <p>Rooms</p>
                <table>
                    <tbody>${roomTemplates}</tbody>
                </table>
            `;
        }
    },
});
