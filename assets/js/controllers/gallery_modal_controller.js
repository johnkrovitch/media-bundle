import { Controller } from 'stimulus';

export default class extends Controller {
    initialize() {
        //window.addEventListener('gallery-modal-hide', this.hide)
    }

    select(event) {
        const mediaId = event.target.dataset.mediaId;

        if (!mediaId) {
            throw new Error('The attribute mediaId is missing on the gallery element')
        }
        document.querySelectorAll(this.element.dataset.target).forEach(element => {
            element.value = mediaId;
        });
        event.preventDefault();
    }

    hide() {
        console.log('hide');
    }
}
