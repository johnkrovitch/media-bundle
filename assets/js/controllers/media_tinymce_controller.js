import {Controller} from "stimulus";
import Modal from '../components/modal';

export default class extends Controller {
    connect() {
        const dataset = this.element.dataset;
        window.addEventListener('tinymce-initialize', event => {
            event.detail.setup = function (editor) {
                editor.ui.registry.addButton('add_media', {
                    text: dataset.addMediaText,
                    icon: 'image',
                    onAction: () => {
                        new Modal('media-modal', {
                            contentUrl: dataset.addMediaUrl
                        });
                    }
                });
                editor.ui.registry.addButton('add_media_gallery', {
                    text: dataset.addMediaGalleryText,
                    icon: 'image',
                    onAction: () => {
                        new Modal('media-modal', {
                            contentUrl: dataset.addGalleryUrl
                        });
                    }
                });
            };
        });
    }
}
