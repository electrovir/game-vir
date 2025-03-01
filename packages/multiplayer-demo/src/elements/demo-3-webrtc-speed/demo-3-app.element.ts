import {createArray} from '@augment-vir/common';
import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {noNativeSpacing} from 'vira';
import {Demo3Child} from './demo-3-child.element.js';
import {Demo3Iframe} from './demo-3-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

const iframeCount = 16;

export const Demo3App = defineElementNoInputs({
    tagName: 'demo-3-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            min-height: 100%;
            box-sizing: border-box;
        }

        p {
            ${noNativeSpacing};
        }

        main {
            display: flex;
            width: 100%;
            min-height: 100%;
            box-sizing: border-box;
            flex-wrap: wrap;
        }

        main > * {
            flex-grow: 1;
            flex-shrink: 0;
        }

        ${isParent
            ? css`
                  :host {
                      padding: 64px;
                  }

                  main {
                      justify-content: space-evenly;
                      gap: 64px;
                  }
              `
            : css`
                  :host {
                      flex-direction: column;
                      padding: 16px;
                  }
              `}
    `,
    render() {
        if (isParent) {
            const frameTemplates = createArray(
                iframeCount,
                () => html`
                    <${Demo3Iframe}></${Demo3Iframe}>
                `,
            );
            return html`
                <p>${iframeCount} Iframes</p>
                <main>${frameTemplates}</main>
            `;
        } else {
            return html`
                <${Demo3Child}></${Demo3Child}>
            `;
        }
    },
});
