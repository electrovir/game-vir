import {VirDeviceList} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {elementsPage} from '../top-level-pages';

export const virDeviceListPage = defineBookPage({
    title: VirDeviceList.tagName,
    parent: elementsPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example',
            renderCallback() {
                return html`
                    <${VirDeviceList}></${VirDeviceList}>
                `;
            },
        });
    },
});
