import MediaGallery from "../../gallery/MediaGallery";
import $ from "axios";

export default class UploadModalForm {
    constructor(options, modal) {
        if (!options) {
            options = {};
        }
        this.options = Object.assign({
            selector: '#media-modal-form',
            itemSelector: ''
        }, options);
        this.element = document.querySelector(this.options.selector);
        this.modal = modal;
    
        if (!this.element) {
            throw new Error('The upload modal form with the selector "' + this.options.selector + '" has no DOM element found');
        }
    }

    bind() {
        // Bind media radio buttons to display and hide form parts according to the selected value.
        let choices = this.element.querySelectorAll('.media-choice');

        choices.forEach((choice) => {
            choice.addEventListener('change', (event) => {
                this.displayFormParts(event.target.value);
            });
        });
    
        this.element.addEventListener('submit', (event) => {
            $
                .post(this.element.action, new FormData(this.element))
                .then((response) => {
                    const event = new Event('jk_media.response');
                    event.htmlContent = response.data.toString();
                    
                    // The response is valid, an image has been returned and will be inserted in the Tinymce content
                    document.dispatchEvent(event);
    
                    this.modal.hide();
                })
                .catch((error) => {
                    throw new Error(error);
                });
            
            event.stopPropagation();
            event.preventDefault();
        });
    }

    /**
     * Display form parts according to the selected value.
     */
    displayFormParts (value) {
    
        this
            .element
            .querySelectorAll('.media-choice-item')
            .forEach((element) => {
                if (element.dataset.src === value) {
                    element.classList.remove('hidden');
    
                    if (value === 'choose_from_collection') {
                        this.createMediaGallery();
                    }
                } else {
                    element.classList.add('hidden');
                }
            })
        ;
    }
    
    createMediaGallery() {
        this.gallery = new MediaGallery();
        this.gallery.bind();
        this.gallery.load();
    }
}
;
