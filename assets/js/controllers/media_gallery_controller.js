import { Controller } from 'stimulus';
import events from "../events/events";
import client from "axios";

export default class extends Controller {
    connect() {
        this.element.querySelectorAll('.pagination a').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault();
                this.load(element.href);
            });
        });
    }
    
    load(url) {
        window.dispatchEvent(new CustomEvent(events.MODAL_LOAD, {
           detail: {
               url: url,
           }
        }));
    }
    
    select(event) {
        const mediaId = event.currentTarget.dataset.id;
        let ids = this.getMediaIds();
        this.hideError();
    
        if (ids.indexOf(mediaId) !== -1) {
            return this.unselect(event);
        }
        ids.push(mediaId);
        event.currentTarget.classList.add('selected');
        this.setMediaIds(ids);
    }
    
    unselect(event) {
        event.currentTarget.classList.remove('selected');
        let ids = this.getMediaIds(event.currentTarget);
        ids = ids.filter(value => {
            return value !== event.currentTarget.dataset.id;
        });
        this.setMediaIds(ids);
    }
    
    insertContent(event) {
        event.preventDefault();
        const ids = this.getMediaIds();
    
        if (ids.length === 0) {
            return this.showError();
        }
        client.get(this.element.dataset.renderUrl + '?ids=' + ids.join(',')).then(response => {
            window.dispatchEvent(new CustomEvent(events.TINYMCE_INSERT_CONTENT, {
                detail: response.data
            }));
            window.dispatchEvent(new CustomEvent(events.MODAL_CLOSE));
        });
    }
    
    getMediaIds() {
        let ids = this.element.dataset.mediaIds;
    
        if (!ids) {
            ids = [];
        } else {
            ids = ids.split(',');
        }
    
        return ids;
    }
    
    setMediaIds(ids) {
        this.element.dataset.mediaIds = ids.join(',');
    }
    
    showError() {
        console.log('show ?');
        this.element.querySelector('.error-message').classList.remove('d-none');
    }
    
    hideError() {
        this.element.querySelector('.error-message').classList.add('d-none');
    }
}
