import {css, defineElementNoInputs, html} from 'element-vir';
import {parseUrl} from 'url-vir';
import {Demo5Child} from './demo-5-child.element.js';
import {Demo5Iframe} from './demo-5-iframe.element.js';

const isParent = !parseUrl(window.location.href).searchParams.child;

export const Demo5App = defineElementNoInputs({
    tagName: 'demo-5-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            min-height: 100%;
            box-sizing: border-box;
        }

        ${Demo5Iframe} {
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

                  ${Demo5Child} {
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
            return html`
                <${Demo5Iframe}></${Demo5Iframe}>
            `;
        } else {
            return html`
                <${Demo5Child}></${Demo5Child}>
            `;
        }
    },
});
