import {createArray} from '@augment-vir/common';
import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {Demo3Child} from './demo-3-child.element.js';
import {Demo3Iframe} from './demo-3-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

const iframeCount = 2;

export const Demo3App = defineElementNoInputs({
    tagName: 'demo-3-app',
    styles: css`
        :host {
            display: flex;
            width: 100%;
            min-height: 100%;
            box-sizing: border-box;
            flex-wrap: wrap;
        }

        :host > * {
            flex-grow: 1;
            flex-shrink: 0;
        }

        ${isParent
            ? css`
                  :host {
                      justify-content: space-evenly;
                      padding: 64px;
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
            return createArray(
                iframeCount,
                () => html`
                    <${Demo3Iframe}></${Demo3Iframe}>
                `,
            );
        } else {
            return html`
                <${Demo3Child}></${Demo3Child}>
            `;
        }
    },
});
