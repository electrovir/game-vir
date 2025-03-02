import {check} from '@augment-vir/assert';
import {
    defineElementNoInputs,
    html,
    listen,
    nothing,
    renderIf,
    type DeclarativeElementDefinition,
} from 'element-vir';
import {SpaRouter, type FullRoute} from 'spa-router-vir';
import {ViraLink} from 'vira';
import {Demo1App} from './demo-1-room-connection/demo-1-app.element.js';
import {Demo2App} from './demo-2-room-selection/demo-2-app.element.js';
import {Demo3App} from './demo-3-webrtc-speed/demo-3-app.element.js';
import {Demo4App} from './demo-4-multiplayer/demo-4-app.element.js';

const demoList = (
    [
        {
            name: 'Demo 1: Room Connection',
            element: Demo1App,
        },
        {
            name: 'Demo 2: Room Selection',
            element: Demo2App,
        },
        {
            name: 'Demo 3: WebRTC latency',
            element: Demo3App,
        },
        {
            name: 'Demo 4: Multiplayer Controller',
            element: Demo4App,
        },
    ] satisfies {name: string; element: DeclarativeElementDefinition}[]
).map((entry) => {
    return {
        ...entry,
        routeName: entry.name.toLowerCase().replaceAll(':', '').replaceAll(' ', '-'),
    };
});

type DemoPaths = [] | [string];
type DemoSearch = undefined | {child: string[]};
type DemoFullRoute = Required<FullRoute<DemoPaths, DemoSearch, undefined>>;

const defaultRoute: DemoFullRoute = {
    hash: undefined,
    paths: [],
    search: undefined,
};

const demoRouter = new SpaRouter<DemoPaths, DemoSearch, undefined>({
    sanitizeRoute(rawRoute) {
        return {
            paths: [rawRoute.paths[0]].filter(check.isTruthy) as DemoPaths,
            hash: undefined,
            search:
                rawRoute.search && rawRoute.search.child
                    ? {
                          child: rawRoute.search.child,
                      }
                    : undefined,
        };
    },
});

export const VirDemoSelection = defineElementNoInputs({
    tagName: 'vir-demo-selection',
    stateInitStatic: {
        router: demoRouter,
        currentRoute: defaultRoute,
        cleanup: undefined as undefined | (() => void),
    },
    init({state, updateState}) {
        if (!state.cleanup) {
            updateState({
                cleanup: state.router.listen(true, (newRoute) => {
                    updateState({
                        currentRoute: newRoute,
                    });
                }),
            });
        }
    },
    cleanup({state, updateState}) {
        state.cleanup?.();
        updateState({
            cleanup: undefined,
        });
    },
    render({state}) {
        const isChild = !!state.currentRoute.search?.child;

        if (state.currentRoute.paths[0]) {
            const currentDemo = demoList.find(
                (demoEntry) => demoEntry.routeName === state.currentRoute.paths[0],
            );

            if (currentDemo) {
                return html`
                    ${renderIf(
                        !isChild,
                        html`
                            <button
                                ${listen('click', () => {
                                    state.router.setRoute({
                                        paths: [],
                                    });
                                })}
                            >
                                🔙
                            </button>
                        `,
                    )}
                    <${currentDemo.element}></${currentDemo.element}>
                `;
            } else {
                state.router.setRoute(defaultRoute);
                return nothing;
            }
        } else {
            const entries = demoList.map((demoEntry) => {
                return html`
                    <li>
                        <${ViraLink.assign({
                            route: {
                                route: {paths: [demoEntry.routeName]},
                                router: state.router,
                            },
                        })}>
                            ${demoEntry.name}
                        </${ViraLink}>
                    </li>
                `;
            });
            return html`
                <ul>
                    ${entries}
                </ul>
            `;
        }
    },
});
