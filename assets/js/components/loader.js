export default class Loader {
    constructor(options) {
        this.options = Object.assign({
            selector: '#media-loader',
            targetSelector: null
        }, options);
        this.element = document.querySelector(this.options.selector);

        if (!this.element) {
            throw new Error('The loader element "' + this.options.selector + '" does not exists');
        }
    }

    show() {
        document.querySelectorAll(this.options.targetSelector).forEach(element => {
            element.innerHTML = this.element.outerHTML;
        });
    }

    hide() {
        document.querySelectorAll(this.options.targetSelector).forEach(element => {
            element.querySelectorAll(this.element.selector, loader => {
                loader.remove();
            });
        });
    }
}
