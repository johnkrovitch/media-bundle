import { Controller } from 'stimulus';
import 'dropzone/dist/dropzone.css';
//const Dropzone = require('dropzone/dist/dropzone-amd-module');
window.Dropzone = require('dropzone/dist/min/dropzone.min');
Dropzone.options.autoDropzone = false;

export default class extends Controller {
    connect() {
        const input = this.element.querySelector('input[type="file"]');

        if (!input) {
            throw new Error('No input of type "file" found in the dropzone "' + this.element.id + '"');
        }
        this.dropzone = new Dropzone('#' + this.element.id, {
            paramName: input.name,
            url: this.element.dataset.url
        });
        console.log('dropzone', this.dropzone);
    }
}
