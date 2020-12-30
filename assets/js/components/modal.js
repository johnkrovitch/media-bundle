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
            this.show();
        }
        // MicroModal.init();
        // options = options || {};
        // options.show = false;
        //
        // this.element = document.querySelector(selector);
        // this.modal = $(selector).modal(options);
        // this.loader = document.querySelector('#admin-loader');
        //
        // if (contentUrl) {
        //     const modal = this.modal;
        //     this.element.querySelector('div.modal-body').innerHTML = this.loader.outerHTML;
        //     this
        //         .modal
        //         .off('show.bs.modal')
        //         .on('show.bs.modal', function () {
        //             client
        //                 .get(contentUrl)
        //                 .then(response => {
        //                     modal.html(response.data);
        //                 })
        //                 .catch(error => alert(error))
        //             ;
        //         })
        //     ;
        // }
        // this.modal.modal('show');
    }

    show() {
        if (this.options.contentUrl) {
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
        } else {
        }
        MicroModal.show(this.selector, this.options);
    }
}
