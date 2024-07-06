import {wait, waitUntilTruthy} from '@augment-vir/common';
import {assert, fixture} from '@open-wc/testing';
import {html, testIdBy} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {VirLine} from 'vir-line';
import {VirFps, VirFpsTestId} from './vir-fps.element';

describe(VirFps.tagName, () => {
    it('renders fps', async () => {
        function extractFps(element: (typeof VirFps)['instanceType']): number {
            const fpsDisplay = element.shadowRoot.querySelector(testIdBy(VirFpsTestId.fpsDisplay));
            return Number(fpsDisplay?.textContent || 0);
        }

        const virLine = new VirLine(
            [],
            {},
            {
                minUpdateRateCalculationInterval: {milliseconds: 0},
            },
        );

        const rootElement = await fixture(html`
            <${VirFps.assign({virLine})}></${VirFps}>
        `);
        assertInstanceOf(rootElement, VirFps);

        const startFps = extractFps(rootElement);

        await virLine.triggerUpdate();
        await virLine.triggerUpdate();
        await wait(50);
        await virLine.triggerUpdate();
        await virLine.triggerUpdate();

        const endFps = await waitUntilTruthy(() => extractFps(rootElement));

        assert.strictEqual(startFps, 0);
        assert.isAbove(endFps, startFps);
    });
});
