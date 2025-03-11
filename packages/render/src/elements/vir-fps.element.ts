import {css, defineElement, html, testId} from 'element-vir';
import {VirLine, VirLineUpdateRateEvent} from 'vir-line';

/**
 * Test ids for {@link VirFps}.
 *
 * @category Internals
 */
export enum VirFpsTestId {
    fpsDisplay = 'fps-display',
}

/**
 * An element that display the current FPS of a `VirLine` instance.
 *
 * @category Debug
 */
export const VirFps = defineElement<{
    virLine: Readonly<VirLine<any>>;
    /** Defaults to `0`. */
    decimals?: number | undefined;
}>()({
    tagName: 'vir-fps',
    styles: css`
        :host {
            justify-content: center;
            align-items: center;
            display: flex;
        }
    `,
    state() {
        return {
            /** Removes listeners so this element can be garbage collected. */
            cleanup: undefined as undefined | (() => void),
            fps: 0,
        };
    },
    init({updateState, state, inputs}) {
        if (!state.cleanup) {
            updateState({
                cleanup: inputs.virLine.listen(VirLineUpdateRateEvent, (event) => {
                    updateState({fps: event.detail.updatesPerSecond});
                }),
            });
        }
    },
    cleanup({state, updateState}) {
        state.cleanup?.();
        updateState({cleanup: undefined});
    },
    render({state, inputs}) {
        return html`
            <span ${testId(VirFpsTestId.fpsDisplay)}>
                ${state.fps.toFixed(inputs.decimals || 0)}
            </span>
        `;
    },
});
