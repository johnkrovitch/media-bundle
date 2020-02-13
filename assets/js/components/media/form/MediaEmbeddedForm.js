import OptionsHelper from "../../helpers/OptionsHelper";
import MediaGallery from "../../gallery/MediaGallery";

export default class MediaEmbeddedForm {
    constructor(element) {
        this.element = element;
    }
    
    bind() {
        // Bind media radio buttons to display and hide form parts according to the selected value.
        let choices = this.element.querySelectorAll('.media-choice');
    
        choices.forEach((choice) => {
            choice.addEventListener('change', (event) => {
                this.displayFormParts(event.target.value);
            });
        });
    }
    
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
};
