import Modal from '../../modal/Modal';
import $ from "axios";
import MediaGallery from "../MediaGallery";

export default class GalleryModal extends Modal{
    loadSuccess(response) {
        this.setContent(response.data.toString());
        this.createMediaGallery();
        
        this.bind();
        this.show();
    }
    
    bind() {
        super.bind();
        
        this.form = this.element.querySelector('form');
        
        if (this.form) {
            this.form.addEventListener('submit', (event) => {
                $
                    .post(this.form.action, new FormData(this.form))
                    .then((response) => {
                        const event = new Event('jk_media.gallery.media-selected');
                        event.htmlContent = response.data.toString();
                        
                        document.dispatchEvent(event);
                        this.hide();
                    })
                    .catch((error) => {
                        throw new Error(error);
                    });
                event.stopPropagation();
                event.preventDefault();
            });
        }
    }
    
    createMediaGallery() {
        this.gallery = new MediaGallery({
            multiple: true,
            limit: 3
        });
        this.gallery.load();
        this.gallery.bind();
    }
}
