import $ from "axios";
import OptionsHelper from "../utils/OptionsHelper";

export default class Modal {
    constructor(element, options) {
        if (!options) {
            options = {};
        }
        this.element = element;
        this.options = OptionsHelper.merge({
            selector: '#media-modal',
            closeOnBackdropClick: true,
            url: false,
            load: (options.hasOwnProperty('url')),
        }, options);
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
    
    getContent() {
        return this.element.querySelector('.modal-content').innerHTML;
    }
    
    getElement() {
        return this.element;
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
