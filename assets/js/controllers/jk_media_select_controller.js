import { Controller } from 'stimulus'
import client from 'axios';

export default class extends Controller {
    connect() {
        this.element.querySelector('.media-upload-link').addEventListener('click', (event) => {
            event.preventDefault()
            this.element.dispatchEvent(new CustomEvent('showUpload'))
        })
        this.element.addEventListener('showUpload', () => {
            this.showTab('.jk-media-upload-tab')
            this.activeLink('.media-upload-link')
        })
        
        this.element.querySelector('.media-gallery-link').addEventListener('click', (event) => {
            event.preventDefault()
            this.element.dispatchEvent(new CustomEvent('showGallery'))
        })
        this.element.addEventListener('showGallery', () => {
            this.showTab('.jk-media-gallery-tab')
            this.activeLink('.media-gallery-link')
        })
        
        const form = this.element.querySelector('form')
        form.addEventListener('submit', event => {
            event.preventDefault()
        
            client
                .post(form.action, new FormData(form))
                .then(response => {
                    this.element.dispatchEvent(new CustomEvent('mediaSelected', {
                        detail: {
                            mediaCollection: response.data.members
                        }
                    }))
                })
                .catch(error => {
                    this.element.outerHTML = error.response.data.toString()
                })
        })
    }
    
    showTab(selector) {
        this.element.querySelectorAll('.jk-tab').forEach(element => {
            element.classList.add('hide')
        })
        this.element.querySelectorAll('.nav-link').forEach(element => {
            element.classList.remove('active')
        })
        this.element.querySelectorAll(selector).forEach(tab => {
            tab.classList.remove('hide')
        })
    }
    
    activeLink(selector) {
        this.element.querySelector(selector).classList.add('active')
    }
};
