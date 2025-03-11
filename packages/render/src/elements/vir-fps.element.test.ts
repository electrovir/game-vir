import {assert, waitUntil} from '@augment-vir/assert';
import {wait} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, testIdSelector} from 'element-vir';
import {VirLine} from 'vir-line';
import {VirFps, VirFpsTestId} from './vir-fps.element.js';

describe(VirFps.tagName, () => {
    it('renders fps', async () => {
        function extractFps(element: (typeof VirFps)['InstanceType']): number {
            const fpsDisplay = element.shadowRoot.querySelector(
                testIdSelector(VirFpsTestId.fpsDisplay),
            );
            return Number(fpsDisplay?.textContent || 0);
        }

        const virLine = new VirLine(
            [],
            {},
            {
                minUpdateRateCalculationInterval: {milliseconds: 0},
            },
        );

        const rootElement = await testWeb.render(html`
            <${VirFps.assign({virLine})}></${VirFps}>
        `);
        assert.instanceOf(rootElement, VirFps);

        const startFps = extractFps(rootElement);

        await virLine.triggerUpdate();
        await virLine.triggerUpdate();
        await wait({milliseconds: 50});
        await virLine.triggerUpdate();
        await virLine.triggerUpdate();

        const endFps = await waitUntil.isTruthy(() => extractFps(rootElement));

        assert.strictEquals(startFps, 0);
        assert.isAbove(endFps, startFps);
    });
});
