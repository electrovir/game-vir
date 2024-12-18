import {VirFps} from '@game-vir/render';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {VirLine} from 'vir-line';
import {elementsPage} from '../top-level-pages.js';

export const virFpsPage = defineBookPage({
    title: VirFps.tagName,
    parent: elementsPage,
    defineExamples({defineExample}) {
        const virLine = new VirLine([], {});

        defineExample({
            title: 'default',
            render() {
                virLine.startUpdateLoop();
                return html`
                    <${VirFps.assign({
                        virLine,
                    })}></${VirFps}>
                `;
            },
        });
        defineExample({
            title: '2 decimals',
            render() {
                virLine.startUpdateLoop();
                return html`
                    <${VirFps.assign({
                        virLine,
                        decimals: 2,
                    })}></${VirFps}>
                `;
            },
        });
    },
});
