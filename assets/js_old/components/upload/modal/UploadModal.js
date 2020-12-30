import $ from 'axios';
import 'popper.js';

import UploadModalForm from './UploadModalForm'
import FileUploader from '../uploader/Uploader'

export default class UploadModal {
    constructor(options) {
        if (!options) {
            options = {};
        }
        this.options = Object.assign({
            selector: '#media-modal',
            formSelector: '.media-upload-form',
            closeOnBackdropClick: true
        }, options);
        
        this.element = document.querySelector(this.options.selector);
        
        if (!this.element) {
            throw new Error('The upload modal with the selector "' + this.options.selector + '" has no DOM element found');
        }
        
        if (!this.options.url) {
            throw new Error('The url for the upload modal is invalid. Excepted an url, got ' + this.options.url);
        }
        this.uploader = new FileUploader();
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
            document.querySelectorAll('.modal-backdrop').forEach((element) => {
                element.addEventListener('click', () => {
                    this.hide();
                })
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
        $.get(this.options.url)
            .then((response) => {
                this.setContent(response.data.toString());
                this.createForm();
                
                this.bind();
                this.show();
            })
            .catch((error) => {
                throw new Error(error);
            })
        ;
    }
    
    setContent(content) {
        this.element.querySelector('.modal-content').innerHTML = content;
    }
    
    createForm() {
        this.form = new UploadModalForm({
            selector: this.options.selector + ' form'
        }, this);
        this.form.bind();
    }
};

