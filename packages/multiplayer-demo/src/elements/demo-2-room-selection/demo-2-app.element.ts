import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {Demo2Child} from './demo-2-child.element.js';
import {Demo2Iframe} from './demo-2-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

export const Demo2App = defineElementNoInputs({
    tagName: 'demo-2-app',
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
                <${Demo2Iframe}></${Demo2Iframe}>
                <${Demo2Iframe}></${Demo2Iframe}>
                <${Demo2Iframe}></${Demo2Iframe}>
                <${Demo2Iframe}></${Demo2Iframe}>
            `;
        } else {
            return html`
                <${Demo2Child}></${Demo2Child}>
            `;
        }
    },
});
