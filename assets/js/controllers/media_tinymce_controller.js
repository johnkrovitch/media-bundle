import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
        window.addEventListener(events.TINYMCE_GALLERY_ADD, () => {
            window.dispatchEvent(new CustomEvent(events.MEDIA_GALLERY_MODAL_OPEN));
        });
    }
}
