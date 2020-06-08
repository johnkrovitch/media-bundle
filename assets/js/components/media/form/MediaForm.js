import OptionsHelper from '../../utils/OptionsHelper';
import Modal from "../../modal/Modal";

export default class MediaForm {
    constructor(element, options) {
        this.options = OptionsHelper.merge({
            mediaIdSelector: element.dataset.mediaIdSelector || '.cms-media-id',
            mediaImageSelector: element.dataset.mediaImageSelector || '.cms-media-image-container'
        }, options);
        this.element = element;
    }
    
    bind() {
        if (!this.element) {
            return;
        }
        this.mediaIdElement = this.element.querySelector(this.options.mediaIdSelector);
        this.mediaImageElement = this.element.querySelector(this.options.mediaImageSelector);
        this.mediaImage = this.mediaImageElement.querySelector('img');
        this.thumbnailInput = this.element.querySelector('.fileupload-input');
        
        let choiceDivs = this.element.querySelector('.cms-media-choice');
        
        this.element.querySelector('.cms-media-restore').addEventListener('click', (event) => {
            this.toggle(true);
            event.preventDefault();
        });
        
        this.element.querySelector('.cms-media-clear').addEventListener('click', (event) => {
            this.clear();
            this.toggle(false);
            event.preventDefault();
        });
        
        this.element.querySelector('.cms-add-media').addEventListener('click', function (event) {
            choiceDivs.classList.remove('d-none');
            event.preventDefault();
        });
        
        let mediaForm = this;
        let modal = new Modal(document.querySelector('.cms-media-modal-link'));
        
        modal.bind(function () {
            let gallery = modal.getElement().find('.cms-media-gallery');
            
            if (gallery) {
                let mediaCollection = gallery.find('.cms-media-image');
                
                if (mediaCollection.length) {
                    mediaCollection.each(function () {
                        $(this).on('click', function () {
                            let mediaId = $(this).data('media-id');
                            let mediaPath = $(this).find('img').attr('src');
                            let mediaName = $(this).find('img').attr('title');
                            
                            modal.close();
                            
                            if (!mediaId) {
                                return;
                            }
                            mediaForm.setMedia(mediaId, mediaPath, mediaName);
                            mediaForm.toggle(true);
                        });
                    });
                }
            }
        });
        
        let progress = this.element.querySelector('.progress');
        let _this = this;
        
        this.thumbnailInput.addEventListener('change', function () {
            let xhr = new XMLHttpRequest();
            let data = new FormData();
            
            data.append('file', this.files[0]);
            data.append('type', 'article_thumbnail');
            xhr.open('POST', this.dataset.uploadUrl);
            
            xhr.upload.addEventListener('progress', function(e) {
                progress.classList.remove('d-none');
                progress.value = e.loaded;
                progress.max = e.total;
            });
            
            xhr.addEventListener('load', function() {
                progress.classList.add('d-none');
                let data = JSON.parse(this.responseText);
                _this.setMedia(data.id, data.path, data.name);
                _this.toggle(true);
                alert('Upload terminé !');
            });
            
            xhr.send(data);
        });
    }
    
    clear() {
        this.mediaIdElement.value = 0;
    }
    
    setMedia(mediaId, mediaPath, name) {
        this.mediaIdElement.value = mediaId;
        this.mediaImageElement.dataset.target += mediaId;
        this.mediaImage.setAttribute('src', mediaPath);
        this.mediaImage.setAttribute('title', name);
        this.mediaImage.textContent = 'Image';
        this.mediaImage.classList.remove('d-none');
    }
    
    toggle(hasMedia) {
        let addMediaLinks = this.element.querySelector('.cms-add-media');
        let restoreLinks = this.element.querySelector('.cms-media-restore');
        let clearLinks = this.element.querySelector('.cms-media-clear');
        
        if (!hasMedia) {
            // Display the add media link and hide the remove link and images
            addMediaLinks.classList.remove('d-none');
            restoreLinks.classList.remove('d-none');
            this.mediaImageElement.classList.add('d-none');
            clearLinks.classList.add('d-none');
        } else {
            this.mediaImageElement.classList.remove('d-none');
            clearLinks.classList.remove('d-none');
            addMediaLinks.classList.add('d-none');
            restoreLinks.classList.add('d-none');
        }
    }
};
