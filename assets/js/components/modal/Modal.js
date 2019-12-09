import $ from "axios";

export default class Modal {
    constructor(options) {
        if (!options) {
            options = {};
        }
        this.options = Object.assign({
            selector: '#media-modal',
            closeOnBackdropClick: true,
            url: false,
            bind: true,
            load: (options.hasOwnProperty('url')),
        }, options);
        
        this.element = document.querySelector(this.options.selector);
        
        if (!this.element) {
            throw new Error('No DOM element found for modal with the selector "' + this.options.selector + '"');
        }
    
        if (this.options.bind) {
            this.bind();
        }
    }
    
    /**
     * Bind the media upload modal form.
     */
    bind() {
        this.element.querySelectorAll('[data-dismiss="modal"]').forEach((element) => {
            element.addEventListener('click', () => {
                this.hide();
            });
        });
        
        if (this.options.closeOnBackdropClick) {
            this.element.addEventListener('click', () => {
                //this.hide();
            });
            
        }
    }
    
    show() {
        this.element.classList.add('modal', 'show', 'fade', 'in');
    
        const backdrop = document.createElement('div');
        backdrop.classList.add('modal-backdrop');
    
        document
            .querySelector('body')
            .appendChild(backdrop)
        ;
        // TODO close when clicking on backdrop
    }
    
    hide() {
        this.element.classList.remove('show');
        document
            .querySelector('body')
            .querySelector('.modal-backdrop')
            .remove()
        ;
    }
    
    load() {
        return $.get(this.options.url)
            .then((response) => {
                this.loadSuccess(response);
            })
            .catch((error) => {
                this.loadError(error);
            })
        ;
    }
    
    setContent(content) {
        this.element.querySelector('.modal-content').innerHTML = content;
    }
    
    loadSuccess(response) {
        this.setContent(response.data.toString());
        this.bind();
        this.show();
    }
    
    loadError(error) {
        throw new Error(error);
    }
}
