import {css, defineElementNoInputs, html} from 'element-vir';
import {buildUrl} from 'url-vir';

export const Demo2Iframe = defineElementNoInputs({
    tagName: 'demo-2-iframe',
    styles: css`
        :host {
            display: flex;
        }
        iframe {
            flex-grow: 1;
            border: 2px solid grey;
        }
    `,
    render() {
        const iframeUrl = buildUrl(window.location.href, {
            search: {
                child: true,
            },
        }).href;

        return html`
            <iframe src=${iframeUrl} />
        `;
    },
});
