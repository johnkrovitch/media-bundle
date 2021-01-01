import { Controller } from 'stimulus';
import Client from '../components/client';

export default class extends Controller {
    connect() {
        const containerSelector = this.element.dataset.targetContainer;
        this.container = document.querySelector(containerSelector);

        if (!this.container) {
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
        this.hide();
    }

    show() {
        this.container.classList.remove('d-none');
        this.element.querySelectorAll('.gallery-show-link').forEach(element => {
            element.classList.add('d-none');
        });
    }

    hide() {
        this.container.classList.add('d-none');
        this.element.querySelectorAll('.gallery-show-link').forEach(element => {
            element.classList.remove('d-none');
        });
    }
}
