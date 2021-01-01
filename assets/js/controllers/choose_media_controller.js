import { Controller } from 'stimulus';
import client from 'axios';
import Modal from '../components/modal';

export default class extends Controller {
    connect() {
        this.element.querySelectorAll('[data-target-container]').forEach(element => {
            if (element.checked) {
                this.displayParts(element);
            }
        });
    }

    display(event) {
        this.displayParts(event.target);
    }

    displayParts(source) {
        this.element.querySelectorAll('.media-collapse').forEach(element => {
            element.classList.add('d-none');
        });
        const targetSelector = source.dataset.targetContainer;
        const target = this.element.querySelector(targetSelector);

        if (!target) {
            throw new Error('The target element "' + targetSelector + '" does not exists');
        }
        target.classList.remove('d-none');

        if (source.value === 'gallery') {
            this.gallery(source);
        }
    }

    gallery(source) {
        const containerSelector = source.dataset.targetContentContainer;
        const container = document.querySelector(containerSelector);

        if (!container) {
            throw new Error('The target element "' + containerSelector + '" does not exists');
        }
        container.innerHTML = document.querySelector('#media-loader').outerHTML;
        const url = source.dataset.url;

        if (!url) {
            throw new Error('Missing the media gallery data-url attribute');
        }
        client.get(url).then(response => {
            container.innerHTML = response.data;
        });
    }

    submit(event) {
        client.post(this.element.action, new FormData(this.element)).then(response => {
            if (response.status === 200) {
                document.dispatchEvent(new CustomEvent('tinymce-insert-content', {
                    detail: response.data
                }));
                (new Modal('media-modal')).close();
            } else {
                this.element.outerHTML = response.data;
            }
        }).catch(error => {
            this.element.outerHTML = error.response.data;
        });
        event.preventDefault();
    }
}
