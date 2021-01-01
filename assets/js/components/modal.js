import client from 'axios';
import MicroModal from "micromodal";

export default class Modal {
    constructor(selector, options) {
        this.options = Object.assign({
            show: true,
            contentUrl: null,
            loaderSelector: '#media-loader',
            contentSelector: '.modal__container'
        }, options);
        this.selector = selector;
        this.element = document.querySelector('#' + selector);

        if (!this.element) {
            throw new Error('The element "#' + selector + '" does not exists');
        }

        if (this.options.show) {
            this.open();
        }
    }

    load() {
        if (this.options.loaderSelector && this.options.contentSelector) {
            const loader = document.querySelector(this.options.loaderSelector);
            const loaderTarget = this.element.querySelector(this.options.contentSelector);

            if (loader && loaderTarget) {
                loaderTarget.innerHTML = loader.outerHTML;
            }
        }
        client.get(this.options.contentUrl).then(response => {
            this.element.querySelector(this.options.contentSelector).innerHTML = response.data;
        });
    }

    open() {
        if (this.options.contentUrl) {
            this.load();
        }
        MicroModal.show(this.selector, this.options);
    }

    close() {
        MicroModal.close(this.selector);
    }
}
