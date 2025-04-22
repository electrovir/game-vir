import {type PulseTimestamp, VirGlowPulse} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {noUserSelect} from 'vira';
import {elementsPage} from '../top-level-pages.js';

const VirGlowPulseBookWrapper = defineElement<{
    milliseconds: number;
    colors?: ReadonlyArray<string>;
}>()({
    tagName: 'vir-glow-pulse-book-wrapper',
    state() {
        return {
            intervalId: undefined as undefined | number,
            animation: undefined as undefined | Readonly<PulseTimestamp>,
        };
    },
    init({state, updateState, inputs}) {
        if (state.intervalId == undefined) {
            updateState({
                intervalId: window.setInterval(() => {
                    updateState({animation: {timestamp: Date.now()}});
                }, inputs.milliseconds),
            });
        }
    },
    cleanup({state, updateState}) {
        if (state.intervalId != undefined) {
            window.clearInterval(state.intervalId);
            updateState({intervalId: undefined});
        }
    },
    render({state, inputs}) {
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
    defineExamples({defineExample}) {
        defineExample({
            title: 'automatic',
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            render() {
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
            render() {
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
            state() {
                return {
                    animation: undefined as undefined | Readonly<PulseTimestamp>,
                };
            },
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            render({state, updateState}) {
                return html`
                    <${VirGlowPulse.assign({
                        pulse: state.animation,
                    })}
                        style=${css`
                            cursor: pointer;
                        `}
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
