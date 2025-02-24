import {css, defineElementNoInputs, html} from 'element-vir';
import {buildUrl} from 'url-vir';

export const Demo3Iframe = defineElementNoInputs({
    tagName: 'demo-3-iframe',
    styles: css`
        :host {
            display: flex;
            height: 180px;
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
