import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
        this.element.querySelector('.media-upload-type').addEventListener('change', event => {
            console.log('trace', event);
        });
    }
}
