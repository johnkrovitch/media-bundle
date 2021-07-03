import { Controller } from 'stimulus';
import client from 'axios';
import events from "../events/events";

export default class extends Controller {
    upload(event) {
        const source = event.currentTarget;
        const progress = this.element.querySelector('.progress');
        const progressBar = progress.querySelector('.progress-bar');
        const errorMessage = this.element.querySelector('.error-message');
        const file = source.files[0];
        
        const config = {
            onUploadProgress: event => {
                const percentage = Math.round((event.loaded * 100) / event.total);
                progressBar.style = 'width: ' + percentage + '%';
                progressBar.setAttribute('aria-valuenow', percentage.toString());
                progressBar.innerHTML = percentage + '%';
            }
        };
        const formData = new FormData();
        formData.append('file', file);
    
        source.classList.add('hide');
        progress.classList.remove('hide');
        
        client.post(this.element.dataset.target, formData, config)
            .then(response => {
                window.dispatchEvent(new CustomEvent(events.MEDIA_SELECT, {
                    detail: response.data
                }));
            })
            .catch(error => {
                if (error.response.status === 422) {
                    errorMessage.innerHTML = '';
                    error.response.data.errors.forEach(formError => {
                        errorMessage.innerHTML += formError.message;
                    });
                } else {
                    errorMessage.innerHTML = error.response.data;
                }
                errorMessage.classList.remove('hide');
                source.classList.remove('hide');
                progress.classList.add('hide');
            })
        ;
    }
}
