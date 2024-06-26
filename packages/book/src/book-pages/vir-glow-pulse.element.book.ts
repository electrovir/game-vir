import {PulseTimestamp, VirGlowPulse} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {noUserSelect} from 'vira';
import {elementsPage} from '../top-level-pages';

const VirGlowPulseBookWrapper = defineElement<{
    milliseconds: number;
    colors?: ReadonlyArray<string>;
}>()({
    tagName: 'vir-glow-pulse-book-wrapper',
    stateInitStatic: {
        intervalId: undefined as undefined | number,
        animation: undefined as undefined | Readonly<PulseTimestamp>,
    },
    initCallback({state, updateState, inputs}) {
        if (state.intervalId == undefined) {
            updateState({
                intervalId: window.setInterval(() => {
                    updateState({animation: {timestamp: Date.now()}});
                }, inputs.milliseconds),
            });
        }
    },
    cleanupCallback({state, updateState}) {
        if (state.intervalId != undefined) {
            window.clearInterval(state.intervalId);
            updateState({intervalId: undefined});
        }
    },
    renderCallback({state, inputs}) {
        return html`
            <${VirGlowPulse.assign({
                pulse: state.animation,
                glowColors: inputs.colors,
            })}>
                ⚪️
            </${VirGlowPulse}>
        `;
    },
});

export const virGlowPulseBookPage = defineBookPage({
    parent: elementsPage,
    title: VirGlowPulse.tagName,
    descriptionParagraphs: [
        'Used to give repeated emphasis to an element. In particular, this is used for showing controller activity in vir-device-list.',
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'automatic',
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            renderCallback() {
                return html`
                    <${VirGlowPulseBookWrapper.assign({
                        milliseconds: 500,
                    })}></${VirGlowPulseBookWrapper}>
                `;
            },
        });
        defineExample({
            title: 'custom colors',
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            renderCallback() {
                return html`
                    <${VirGlowPulseBookWrapper.assign({
                        milliseconds: 500,
                        colors: [
                            'blue',
                            'navy',
                            'dodgerblue',
                            'skyblue',
                            'lightblue',
                        ],
                    })}></${VirGlowPulseBookWrapper}>
                `;
            },
        });
        defineExample({
            title: 'on click',
            stateInitStatic: {
                animation: undefined as undefined | Readonly<PulseTimestamp>,
            },
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${VirGlowPulse.assign({
                        pulse: state.animation,
                    })}
                        ${listen('click', () => {
                            updateState({
                                animation: {
                                    timestamp: Date.now(),
                                },
                            });
                        })}
                    >
                        ⚪️
                    </${VirGlowPulse}>
                `;
            },
        });
    },
});
