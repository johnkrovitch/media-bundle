import { Controller } from 'stimulus';
import client from 'axios';

export default class extends Controller {
    connect() {
        this.input = this.element.querySelector('input[type="file"]');
        this.media = this.element.querySelector('input[type="hidden"]');
        this.progress = this.element.querySelector('.progress');
        this.image = this.element.querySelector('.upload-image');
        this.widget = this.element.querySelector('.upload-widget');
        this.removeLink = this.element.querySelector('.upload-remove-link');
        this.change(this.input);
    }

    change(input) {
        input.addEventListener('change', () => {
            this.showProgress();
            const formData = new FormData();
            formData.append('file', input.files[0]);

            client.post(this.element.dataset.endpoint, formData, {
                onUploadProgress: progressEvent => {
                    this.setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                }
            }).then(response => {
                this.hideProgress();
                this.hideWidget();
                this.showImage(response.data);
                this.setMedia(response.data.id);
            }).catch(error => {
                this.hideProgress();
                this.showWidget();
                this.element.querySelector('.upload-error').classList.remove('d-none');
                throw new Error(error);
            });
        });
    }

    showImage(data) {
        this.image.classList.remove('d-none');
        this.image.innerHTML = '<img id="media-' + data.id + '" class="media-image-thumbnail" src="' + data.path + '" alt="' + data.name +'" height="100" />';
    }

    hideImage() {
        this.image.classList.add('d-none');
    }

    showWidget() {
        this.widget.classList.remove('d-none');
    }

    hideWidget() {
        this.widget.classList.add('d-none');
    }

    showProgress() {
        this.progress.classList.remove('d-none');
    }

    hideProgress() {
        this.progress.classList.add('d-none');
    }

    setProgress(progress) {
        this.progress.querySelector('.progress-bar').setAttribute('aria-valuenow', progress);
    }

    setMedia(value) {
        this.media.value = value;
        this.showRemoveLink();
    }

    removeMedia(event) {
        event.preventDefault();
        this.media.value = '';
        this.showWidget();
        this.hideImage();
        this.hideRemoveLink();
    }

    showRemoveLink() {
        this.removeLink.classList.remove('d-none');
    }

    hideRemoveLink() {
        this.removeLink.classList.add('d-none');
    }
}
