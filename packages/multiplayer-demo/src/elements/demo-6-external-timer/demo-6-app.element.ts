import {createArray} from '@augment-vir/common';
import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {noNativeSpacing} from 'vira';
import {Demo6Child} from './demo-6-child.element.js';
import {Demo6Iframe} from './demo-6-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

const iframeCount = 18;

export const Demo6App = defineElementNoInputs({
    tagName: 'demo-6-app',
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

                  ${Demo6Child} {
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
                    <${Demo6Iframe}></${Demo6Iframe}>
                `,
            );
            return html`
                <p>${iframeCount} Iframes (Some rejected)</p>
                <main>${frameTemplates}</main>
            `;
        } else {
            return html`
                <${Demo6Child}></${Demo6Child}>
            `;
        }
    },
});
