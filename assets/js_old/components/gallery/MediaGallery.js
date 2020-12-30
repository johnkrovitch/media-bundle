import $ from 'axios';

export default class MediaGallery {
    constructor(options) {
        if (!options) {
            options = {};
        }
        this.options = Object.assign({
            selector: '.media-gallery-container',
            inputSelector: '.media-gallery-input',
            paginationSelector: '.pagination',
            multiple: false,
            limit: 3
        }, options);

        this.element = document.querySelector(this.options.selector);
    
        if (!this.element) {
            throw new Error('No media gallery with selector "' + this.options.selector + '" found');
        }

        // An url to get media should be set
        if (!this.options.url) {
            if (!this.element.dataset.url) {
                throw new Error('No data-attribute "url" found for the media gallery "' + this.options.selector + '"');
            }
            this.options.url = this.element.dataset.url;
        }
    }

    bind() {
        this.element.querySelectorAll('.cms-media-image').forEach((element) => {
            element.addEventListener('click', () => {
                if (!this.options.multiple) {
                    if (element.classList.contains('selected')) {
                        this.unselect();
                        element.classList.remove('selected');
                        
                        this.setInputValue(null);
                    } else {
                        this.unselect();
                        element.classList.add('selected');
                        this.setInputValue(element.dataset.mediaId);
                    }
                } else {
                    let selectedImages = this.element.querySelectorAll('.cms-media-image.selected');
                    let inputValue = this.getInputValue().split(',');
                    
                    if (element.classList.contains('selected')) {
                        element.classList.remove('selected');
                        inputValue.splice(inputValue.indexOf(element.dataset.mediaId), 1);
                    } else {
                        if (selectedImages.length < this.options.limit) {
                            element.classList.add('selected');
                            inputValue.push(element.dataset.mediaId);
                        }
                    }
                    this.setInputValue(inputValue.join(','));
                }
            });
        });
    
        this.element.querySelectorAll(this.options.paginationSelector).forEach((element) => {
            element.addEventListener('click', (event) => {
                this.load(event.target.href);
                
                event.stopPropagation();
                event.preventDefault();
            });
        });
    }

    load(url) {
        if (!url) {
            url = this.options.url;
        }
        
        $.get(url).then((response) => {
            this.element.innerHTML = response.data.toString();
            this.bind();
        }).catch((error) => {
            throw error;
        });
    }
    
    unselect() {
        this.element.querySelectorAll('.cms-media-image').forEach((image) => {
            image.classList.remove('selected');
        });
    }
    
    setInputValue(value) {
        document.querySelector(this.options.inputSelector).value = value;
    }
    
    getInputValue() {
        return document.querySelector(this.options.inputSelector).value;
    }
}
