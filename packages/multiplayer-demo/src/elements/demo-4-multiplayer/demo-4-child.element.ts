import {createUuidV4, randomInteger} from '@augment-vir/common';
import {defaultMultiplayerServiceOrigin} from '@game-vir/multiplayer';
import {
    MultiplayerConnectionState,
    MultiplayerController,
} from '@game-vir/multiplayer/src/multiplayer-controller.js';
import {css, defineElementNoInputs, html, listen, renderIf, unsafeCSS} from 'element-vir';
import {demoColors} from './demo-4-colors.js';

type DemoAction = {
    color: string;
    x: number;
    y: number;
};

export const Demo4Child = defineElementNoInputs({
    tagName: 'demo-4-child',
    styles: () => css`
        :host {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
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
    `,
    stateInitStatic: {
        multiplayerController: undefined as undefined | MultiplayerController<DemoAction>,
        items: [] as (DemoAction & {timestamp: number})[],
        connectionState: undefined as undefined | MultiplayerConnectionState,
        color: 'black',
        fps: 0,
    },
    init({state, updateState}) {
        /** Always clear the item array on init. */
        updateState({
            items: [],
            connectionState: undefined,
            color: demoColors[randomInteger({min: 0, max: demoColors.length - 1})] || 'black',
        });

        if (!state.multiplayerController) {
            const controller = new MultiplayerController<DemoAction>({
                listeners: {
                    frame(actions) {
                        const newItems = actions.map((action) => {
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
                    },
                    async roomListUpdate(rooms) {
                        const firstRoom = Object.values(rooms)[0];
                        if (firstRoom) {
                            await controller.joinOrCreateRoom({
                                roomId: firstRoom.roomId,
                                roomName: firstRoom.roomName,
                                /** No passwords in the demo. */
                                roomPassword: '',
                            });
                        }
                    },
                    connectionUpdate(state) {
                        updateState({
                            connectionState: state,
                        });
                    },
                },
                multiplayer: {
                    portScanOptions: {
                        maxScanDistance: 10,
                    },
                    serviceOrigin: defaultMultiplayerServiceOrigin,
                    roomUpdateInterval: {milliseconds: 500},
                },
                // // use longer frame durations for debugging
                // frameDuration: {seconds: 1},
            });
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
        } else if (!state.connectionState) {
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
        } else if (
            state.connectionState === MultiplayerConnectionState.ServiceFailure ||
            state.connectionState === MultiplayerConnectionState.DisconnectedFromService ||
            state.connectionState === MultiplayerConnectionState.DisconnectedFromRoom
        ) {
            return html`
                Disconnected.
            `;
        } else if (
            state.connectionState === MultiplayerConnectionState.ConnectingToRoom ||
            state.connectionState === MultiplayerConnectionState.ConnectingToService
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
                Click to play ${renderIf(controller.isHost(), '(host)')}
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
