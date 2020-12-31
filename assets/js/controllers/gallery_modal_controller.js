import { Controller } from 'stimulus';
import Client from '../components/client';

export default class extends Controller {
    connect() {
        const containerSelector = this.element.dataset.targetContainer;
        const container = document.querySelector(containerSelector);

        if (!container) {
            throw new Error('The media gallery container ' + containerSelector + ' does not exists');
        }
        this.element.querySelectorAll('.pagination a').forEach(element => {
            element.addEventListener('click', event => {
                Client.get(element.href, {
                    targetSelector: containerSelector
                }).then();
                event.preventDefault();
            })
        });
    }

    select(event) {
        const mediaId = event.target.dataset.mediaId;

        if (!mediaId) {
            throw new Error('The attribute mediaId is missing on the gallery element')
        }
        document.querySelectorAll(this.element.dataset.targetInput).forEach(element => {
            element.value = mediaId;
        });
        event.preventDefault();
    }
}
