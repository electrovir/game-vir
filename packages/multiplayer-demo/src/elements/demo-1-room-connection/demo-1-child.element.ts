import {waitUntil} from '@augment-vir/assert';
import {
    createNewRoom,
    defineMultiplayerService,
    WebrtcMultiplayerController,
    type RoomInput,
} from '@game-vir/multiplayer';
import {generateApi, mapServiceDevPort} from '@rest-vir/define-service';
import {asyncProp, css, defineElementNoInputs, html} from 'element-vir';

const demo1GameId = 'demo-1';

export const Demo1Child = defineElementNoInputs({
    tagName: 'demo-1-child',
    styles: css`
        :host {
            display: flex;
        }
    `,
    state() {
        return {
            webrtcController: asyncProp<WebrtcMultiplayerController | undefined>({
                defaultValue: undefined,
            }),
        };
    },
    init({state}) {
        state.webrtcController.setValue(
            mapServiceDevPort(defineMultiplayerService(), {
                maxScanDistance: 10,
                timeout: {
                    seconds: 5,
                },
            }).then(async (service) => {
                const initRoom: RoomInput = createNewRoom({roomName: 'Demo Room'});

                const api = generateApi(service);

                let webrtcController = new WebrtcMultiplayerController(
                    demo1GameId,
                    api,
                    [],
                    initRoom,
                );

                await webrtcController.initConnection();
                await waitUntil.isTrue(() => webrtcController.isConnected());

                const firstRoom = await waitUntil.isDefined(async () => {
                    const {ok, data} = await api.endpoints['/rooms'].fetch({
                        searchParams: {
                            gameId: [demo1GameId],
                        },
                    });
                    if (!ok) {
                        throw new Error(`Fetch failed.`);
                    }
                    const firstRoom = Object.values(data)[0];
                    return firstRoom;
                });

                if (firstRoom.roomId !== initRoom.roomId) {
                    webrtcController.destroy();
                    webrtcController = new WebrtcMultiplayerController(demo1GameId, api, [], {
                        ...initRoom,
                        roomId: firstRoom.roomId,
                    });
                    await webrtcController.initConnection();

                    await waitUntil.isTrue(() => webrtcController.isConnected());
                }

                return webrtcController;
            }),
        );
    },
    render({state}) {
        if (!state.webrtcController.settledValue) {
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
        `;
    },
});
