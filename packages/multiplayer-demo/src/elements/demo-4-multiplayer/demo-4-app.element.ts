import {createArray} from '@augment-vir/common';
import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {noNativeSpacing} from 'vira';
import {Demo4Child} from './demo-4-child.element.js';
import {Demo4Iframe} from './demo-4-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

const iframeCount = 16;

export const Demo4App = defineElementNoInputs({
    tagName: 'demo-4-app',
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
            justify-content: flex-start;
            min-height: 100%;
            box-sizing: border-box;
            flex-wrap: wrap;
        }

        main > * {
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
                  }

                  ${Demo4Child} {
                      flex-grow: 1;
                      align-self: stretch;
                      height: 100%;
                      width: 100%;
                      min-height: 100%;
                      min-height: 100%;
                      max-height: 100%;
                      max-height: 100%;
                  }
              `}
    `,
    render() {
        if (isParent) {
            const frameTemplates = createArray(
                iframeCount,
                () => html`
                    <${Demo4Iframe}></${Demo4Iframe}>
                `,
            );
            return html`
                <p>${iframeCount} Iframes</p>
                <main>${frameTemplates}</main>
            `;
        } else {
            return html`
                <${Demo4Child}></${Demo4Child}>
            `;
        }
    },
});
