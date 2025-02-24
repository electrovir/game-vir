import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {Demo1Child} from './demo-1-child.element.js';
import {Demo1Iframe} from './demo-1-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

export const Demo1App = defineElementNoInputs({
    tagName: 'demo-1-app',
    styles: css`
        :host {
            display: flex;
            width: 100%;
            min-height: 100%;
            box-sizing: border-box;
        }

        :host > * {
            flex-grow: 1;
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
            return html`
                <${Demo1Iframe}></${Demo1Iframe}>
                <${Demo1Iframe}></${Demo1Iframe}>
            `;
        } else {
            return html`
                <${Demo1Child}></${Demo1Child}>
            `;
        }
    },
});
