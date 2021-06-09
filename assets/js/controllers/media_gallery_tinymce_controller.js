import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
        window.addEventListener(events.MEDIA_GALLERY_MODAL_OPEN, () => {
            this.openModal();
        });
    }
    
    openModal() {
        const event = new CustomEvent(events.MODAL_OPEN, {
            detail: {
                url: this.element.dataset.galleryUrl
            }
        });
        window.dispatchEvent(event);
    }
}
