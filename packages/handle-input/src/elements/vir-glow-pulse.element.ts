import {shuffleArray} from '@augment-vir/browser';
import {wrapNumber} from '@augment-vir/common';
import {AnyDuration, convertDuration, DurationUnit} from 'date-vir';
import {css, defineElement, html} from 'element-vir';

/**
 * A timestamp used to trigger a pulse in {@link VirGlowPulse}.
 *
 * @category Types
 */
export type PulseTimestamp = {
    timestamp: number;
};

/** CSS Colors. */
const rainbowColors: string[] = shuffleArray([
    'red',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'purple',
    'magenta',
]);

/**
 * Wraps its children in a glow that pulses any time the given pulse timestamp changes. Defaults to
 * cycling through a rainbow of colors but can be customized to cycle through any colors you want.
 *
 * @category Elements
 */
export const VirGlowPulse = defineElement<{
    pulse: undefined | Readonly<PulseTimestamp>;
    /**
     * An optional array of CSS colors to cycle through for the glow animation.
     *
     * @default // a rainbow of colors
     */
    glowColors?: undefined | ReadonlyArray<string>;
    /**
     * Control the duration of the animation.
     *
     * @default {milliseconds: 350}
     */
    animationDuration?: AnyDuration | undefined;
}>()({
    tagName: 'vir-glow-pulse',
    styles: css`
        :host {
            display: inline-flex;
        }
    `,
    stateInitStatic: {
        lastTimestamp: 0,
        colorIndex: 0,
    },
    renderCallback({inputs, host, state, updateState}) {
        const colors =
            inputs.glowColors && inputs.glowColors.length ? inputs.glowColors : rainbowColors;

        const animationDuration = inputs.animationDuration
            ? convertDuration(inputs.animationDuration, DurationUnit.Milliseconds)
            : {milliseconds: 350};

        const timestampCutoff = state.lastTimestamp + animationDuration.milliseconds / 2;

        const validAnimation =
            inputs.pulse && inputs.pulse.timestamp > timestampCutoff ? inputs.pulse : undefined;

        if (validAnimation) {
            updateState({
                colorIndex: wrapNumber({
                    min: 0,
                    max: colors.length - 1,
                    value: state.colorIndex + 1,
                }),
            });
        }

        const color = colors[state.colorIndex];

        if (!color) {
            throw new Error(`Exceeded colors array size somehow.`);
        }

        if (
            validAnimation &&
            validAnimation.timestamp !== state.lastTimestamp &&
            color != undefined
        ) {
            host.getAnimations().forEach((animation) => animation.cancel());
            host.animate(
                [
                    {
                        filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 6px ${color}) drop-shadow(0 0 6px ${color})`,
                    },
                    {
                        filter: `drop-shadow(0 0 0 ${color}) drop-shadow(0 0 0 ${color})`,
                    },
                ],
                {
                    duration: animationDuration.milliseconds,
                    iterations: 1,
                },
            );
            updateState({lastTimestamp: validAnimation.timestamp});
        }

        return html`
            <slot></slot>
        `;
    },
});
