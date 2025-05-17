import {waitUntil} from '@augment-vir/assert';
import {testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {isPlayingEnabled} from './detect-play.js';

export async function makePlayable() {
    const fixture = await testWeb.render(html`
        <button></button>
    `);
    await testWeb.click(fixture);

    await waitUntil.isTrue(() => isPlayingEnabled());
}
