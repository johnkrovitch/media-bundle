import { Controller } from 'stimulus';
import client from 'axios';

export default class extends Controller {
    display(event) {
        this.element.querySelectorAll('.admin-collapse').forEach(element => {
            element.classList.add('d-none');
        });
        const targetSelector = event.target.dataset.targetContainer;
        const target = this.element.querySelector(targetSelector);

        if (!target) {
            throw new Error('The target element "' + targetSelector + '" does not exists');
        }
        target.classList.remove('d-none');
    }

    gallery(event) {
        const containerSelector = event.target.dataset.targetContentContainer;
        const container = document.querySelector(containerSelector);

        if (!container) {
            throw new Error('The target element "' + containerSelector + '" does not exists');
        }
        container.innerHTML = document.querySelector('#media-loader').outerHTML;
        const url = event.target.dataset.url;

        if (!url) {
            throw new Error('Missing the media gallery data-url attribute');
        }
        client.get(url).then(response => {
            container.innerHTML = response.data;
        });
    }
}
