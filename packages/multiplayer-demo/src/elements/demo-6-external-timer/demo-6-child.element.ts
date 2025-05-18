import {assert} from '@augment-vir/assert';
import {createUuidV4, extractErrorMessage, randomInteger} from '@augment-vir/common';
import {
    defaultMultiplayerServiceOrigin,
    emptyServiceAndRoomConnectionState,
    MultiplayerConnectionState,
    MultiplayerController,
} from '@game-vir/multiplayer';
import {css, defineElementNoInputs, html, listen, renderIf, unsafeCSS} from 'element-vir';
import {demoColors} from './demo-6-colors.js';

type DemoAction = {
    color: string;
    x: number;
    y: number;
};

export const Demo6Child = defineElementNoInputs({
    tagName: 'demo-6-child',
    styles: () => css`
        :host {
            display: flex;
            flex-direction: column;
        }

        button {
            align-self: flex-start;
        }

        .game-wrapper {
            width: 100%;
            flex-grow: 1;
            height: 100%;
            align-self: stretch;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .item {
            position: absolute;
            width: 20px;
            height: 20px;
        }
        .error {
            font-weight: bold;
            color: red;
            text-align: center;
        }
    `,
    state() {
        return {
            multiplayerController: undefined as undefined | MultiplayerController<DemoAction>,
            items: [] as (DemoAction & {timestamp: number})[],
            connectionState: emptyServiceAndRoomConnectionState,
            color: 'black',
            fps: 0,
        };
    },
    init({state, updateState}) {
        /** Always clear the item array on init. */
        updateState({
            items: [],
            connectionState: emptyServiceAndRoomConnectionState,
            color: demoColors[randomInteger({min: 0, max: demoColors.length - 1})] || 'black',
        });

        if (!state.multiplayerController) {
            const controller = new MultiplayerController<DemoAction>({
                gameId: 'demo-6',
                acceptConnection(clientId, controller) {
                    return controller.getAllClientIds().length < 16;
                },
            });
            controller.listen(controller.events.ControllerConnectionEvent, ({detail: state}) => {
                updateState({
                    connectionState: state,
                });
            });
            controller.listen(
                controller.events.ControllerRoomListEvent,
                async ({detail: rooms}) => {
                    const firstRoom = Object.values(rooms)[0];
                    if (firstRoom && !(controller.roomConnectionState instanceof Error)) {
                        await controller.joinOrCreateRoom({
                            roomId: firstRoom.roomId,
                            roomName: firstRoom.roomName,
                            /** No passwords in the demo. */
                            roomPassword: '',
                        });
                    }
                },
            );
            controller.listen(controller.events.ControllerFrameEvent, ({detail: actions}) => {
                const newItems = actions.map((action) => {
                    assert.tsType(action).equals<DemoAction>();
                    return {
                        ...action,
                        timestamp: Date.now(),
                    };
                });
                updateState({
                    fps: Math.round(controller.getFps()),
                });

                if (newItems.length) {
                    updateState({
                        items: [
                            ...state.items,
                            ...newItems,
                        ],
                    });
                }
            });
            controller.startMultiplayer({
                portScanOptions: {
                    maxScanDistance: 10,
                },
                backendOrigin: defaultMultiplayerServiceOrigin,
                roomUpdateInterval: {milliseconds: 500},
            });
            function runFrame() {
                controller.runFrame();
                globalThis.requestAnimationFrame(() => runFrame);
            }
            runFrame();

            updateState({
                multiplayerController: controller,
            });
        }
    },
    render({state}) {
        const controller = state.multiplayerController;

        if (!controller) {
            return html`
                Loading...
            `;
        } else if (state.connectionState.room === MultiplayerConnectionState.Disconnected) {
            return html`
                <button
                    ${listen('click', async () => {
                        await controller.joinOrCreateRoom({
                            roomId: createUuidV4(),
                            roomName: 'Demo 4 Room',
                            roomPassword: '',
                        });
                    })}
                >
                    Create Room
                </button>
            `;
        } else if (state.connectionState.service === MultiplayerConnectionState.Disconnected) {
            return html`
                Disconnected.
            `;
        } else if (state.connectionState.service instanceof Error) {
            controller.enableRoomUpdates = false;
            return html`
                <p class="error">${extractErrorMessage(state.connectionState.service)}</p>
            `;
        } else if (state.connectionState.room instanceof Error) {
            controller.enableRoomUpdates = false;
            return html`
                <p class="error">${extractErrorMessage(state.connectionState.room)}</p>
            `;
        } else if (
            state.connectionState.room === MultiplayerConnectionState.Connecting ||
            state.connectionState.service === MultiplayerConnectionState.Connecting
        ) {
            return html`
                Connecting...
            `;
        }

        return html`
            <div
                class="game-wrapper"
                ${listen('mousedown', (event) => {
                    controller.act({
                        color: state.color,
                        x: event.x,
                        y: event.y,
                    });
                })}
            >
                Click to play
                ${renderIf(
                    controller.isHost(),
                    `(host ${controller.getConnectedClientIds().length})`,
                )}
                <br />
                ${state.fps} FPS
                ${state.items.map((item) => {
                    return html`
                        <div
                            class="item"
                            style=${css`
                                top: ${item.y - 10}px;
                                left: ${item.x - 10}px;
                                background-color: ${unsafeCSS(item.color)};
                            `}
                        ></div>
                    `;
                })}
            </div>
        `;
    },
});
