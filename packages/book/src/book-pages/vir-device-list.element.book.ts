import {VirDeviceList} from '@game-vir/handle-input';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {elementsPage} from '../top-level-pages.js';

export const virDeviceListPage = defineBookPage({
    title: VirDeviceList.tagName,
    parent: elementsPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'example',
            render() {
                return html`
                    <${VirDeviceList}></${VirDeviceList}>
                `;
            },
        });
    },
});
