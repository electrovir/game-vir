import {css, defineElementNoInputs, html} from 'element-vir';
import {buildUrl} from 'url-vir';

export const Demo6Iframe = defineElementNoInputs({
    tagName: 'demo-6-iframe',
    styles: css`
        :host {
            display: flex;
            height: 200px;
            width: 200px;
            overflow: hidden;
            box-sizing: border-box;
            border: 2px solid grey;
        }
        iframe {
            border: none;
            flex-grow: 1;
            height: 200px;
            width: 200px;
            overflow: hidden;
            box-sizing: border-box;
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
