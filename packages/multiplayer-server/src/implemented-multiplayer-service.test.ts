import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {createUuidV4, extractErrorMessage, type MaybePromise, type Uuid} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {MultiplayerService, MultiplayerWebSocketMessageType} from '@game-vir/multiplayer';
import {ClientWebSocket, CommonWebSocketState} from '@rest-vir/define-service';
import {testService, type FetchTestService} from '@rest-vir/run-service';
import {
    ImplementedMultiplayerService,
    implementMultiplayerService,
    type MultiplayerServerState,
} from './implemented-multiplayer-service.js';

function testMultiplayerService(
    description: string,
    callback: (
        params: Readonly<{
            serverState: MultiplayerServerState;
            fetchEndpoint: FetchTestService<ImplementedMultiplayerService>;
            createWebSocket: (name: string) => Promise<{
                webSocket: ClientWebSocket<MultiplayerService['webSockets']['/connect']>;
                clientId: Uuid;
                name: string;
            }>;
            webSocketMessages: Record<
                string,
                MultiplayerService['webSockets']['/connect']['MessageFromHostType'][]
            >;
            logs: {
                info: unknown[];
                error: string[];
            };
        }>,
    ) => MaybePromise<void>,
) {
    it(description, async () => {
        const logs = {
            info: [] as unknown[],
            error: [] as string[],
        };

        const {service, serverState} = implementMultiplayerService({
            logger: {
                error(error) {
                    logs.error.push(extractErrorMessage(error));
                },
                info(...args) {
                    logs.info.push(...args);
                },
            },
        });

        const webSocketMessages: Record<
            string,
            MultiplayerService['webSockets']['/connect']['MessageFromHostType'][]
        > = {};

        async function createWebSocket(name: string) {
            const webSocket = await connectWebSocket['/connect']({
                listeners: {
                    open() {
                        console.log('opened', name);
                        webSocketMessages[name] = [];
                    },
                    message({message}) {
                        console.log('inserting message to', name);
                        assertWrap.isDefined(webSocketMessages[name]).push(message);
                    },
                },
            });

            console.log(webSocket.readyState, CommonWebSocketState);

            return {
                webSocket,
                clientId: createUuidV4(),
                name,
            };
        }

        const {connectWebSocket, fetchEndpoint, kill} = await testService(service);

        try {
            await callback({serverState, createWebSocket, fetchEndpoint, logs, webSocketMessages});
        } finally {
            await kill();
        }
    });
}

async function setupRooms(
    rooms: [
        /** Client names. The first client will become the host. */
        string[],
    ],
) {}

describe('multiplayer service', () => {
    testMultiplayerService(
        'hosts multiple room connections',
        async ({createWebSocket, webSocketMessages, fetchEndpoint}) => {
            assert.isTrue((await fetchEndpoint['/health']()).ok, 'server health should be okay');
            assert.deepEquals(
                await (await fetchEndpoint['/rooms']()).json(),
                {},
                'rooms should be empty on server init',
            );

            const roomAHostClient = await createWebSocket('a-host');
            const roomBHostClient = await createWebSocket('b-host');
            const roomBMember1Client = await createWebSocket('b-member-1');

            const roomAId = createUuidV4();
            const roomBId = createUuidV4();

            roomAHostClient.webSocket.send({
                clientId: roomAHostClient.clientId,
                clientName: 'a-host',
                data: {
                    sdp: 'test',
                    type: MultiplayerWebSocketMessageType.Offer,
                },
                roomId: roomAId,
                roomName: 'Room A',
                type: MultiplayerWebSocketMessageType.Offer,
                roomPassword: '',
            });

            await waitUntil.hasKey(
                roomAId,
                async () => await (await fetchEndpoint['/rooms']()).json(),
            );

            roomBHostClient.webSocket.send({
                clientId: roomBHostClient.clientId,
                clientName: 'b-host',
                data: {
                    sdp: 'test',
                    type: MultiplayerWebSocketMessageType.Offer,
                },
                roomId: roomBId,
                roomName: 'Room B',
                type: MultiplayerWebSocketMessageType.Offer,
                roomPassword: '',
            });

            await waitUntil.hasKeys(
                [
                    roomAId,
                    roomBId,
                ],
                async () => await (await fetchEndpoint['/rooms']()).json(),
            );

            roomBMember1Client.webSocket.send({
                clientId: roomBMember1Client.clientId,
                clientName: 'b-member 1',
                data: {
                    sdp: 'test',
                    type: MultiplayerWebSocketMessageType.Offer,
                },
                roomId: roomBId,
                roomName: '',
                type: MultiplayerWebSocketMessageType.Offer,
                roomPassword: '',
            });

            await waitUntil.deepEquals(
                {
                    [roomAHostClient.name]: [],
                    [roomBHostClient.name]: [
                        {
                            clientId: roomBMember1Client.clientId,
                            clientName: 'b-member 1',
                            data: {
                                sdp: 'test',
                                type: MultiplayerWebSocketMessageType.Offer,
                            },
                            roomId: roomBId,
                            roomName: '',
                            type: MultiplayerWebSocketMessageType.Offer,
                            roomPassword: '',
                        },
                    ],
                    [roomBMember1Client.name]: [],
                },
                () => webSocketMessages,
                undefined,
                "Room B host should have received Room B member 1's offer message",
            );

            await waitUntil.deepEquals(
                {
                    [roomAId]: {
                        roomName: 'Room A',
                        roomId: roomAId,
                        clientCount: 1,
                    },
                    [roomBId]: {
                        roomName: 'Room B',
                        roomId: roomBId,
                        clientCount: 2,
                    },
                },
                async () => await (await fetchEndpoint['/rooms']()).json(),
                undefined,
                'Rooms should have appropriate members',
            );

            await roomAHostClient.webSocket.close();
            await roomBHostClient.webSocket.close();
            await roomBMember1Client.webSocket.close();

            await waitUntil.isEmpty(
                async () => await (await fetchEndpoint['/rooms']()).json(),
                undefined,
                'Rooms should empty out when their clients have all closed.',
            );
        },
    );
});
