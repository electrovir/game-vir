import {waitUntil} from '@augment-vir/assert';
import {
    createNewRoom,
    defineMultiplayerService,
    WebrtcMultiplayerController,
    type RoomInput,
} from '@game-vir/multiplayer';
import {generateApi, mapServiceDevPort} from '@rest-vir/define-service';
import {asyncProp, css, defineElementNoInputs, html, isAsyncError, isResolved} from 'element-vir';

export const Demo1Child = defineElementNoInputs({
    tagName: 'demo-1-child',
    styles: css`
        :host {
            display: flex;
        }
    `,
    stateInitStatic: {
        webrtcController: asyncProp<WebrtcMultiplayerController | undefined>({
            defaultValue: undefined,
        }),
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

                let webrtcController = new WebrtcMultiplayerController(api, [], initRoom);

                await webrtcController.initConnection();
                await waitUntil.isTrue(() => webrtcController.isConnected());

                const firstRoom = await waitUntil.isDefined(async () => {
                    const {ok, data} = await api.endpoints['/rooms'].fetch();
                    if (!ok) {
                        throw new Error(`Fetch failed.`);
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
                    await webrtcController.initConnection();

                    await waitUntil.isTrue(() => webrtcController.isConnected());
                }

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
        `;
    },
});
