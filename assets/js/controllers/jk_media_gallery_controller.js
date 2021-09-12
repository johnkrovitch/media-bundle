import { Controller } from 'stimulus';
import events from "../events/events";
import client from "axios";

export default class extends Controller {
    connect() {
        this.element.querySelectorAll('.pagination a').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault();
                this.element.dispatchEvent(new CustomEvent('load', {
                    detail: {
                        url: element.href
                    }
                }))
            });
        });
    }
    
    load(url) {
        client.get(url).then(response => {
            this.element.innerHTML = response.data
        })
    }
    
    select(event) {
        if (!this.isMultiple()) {
            this.element.querySelectorAll('.card').forEach(element => element.classList.remove('selected'));
        }
    
        const input = event.currentTarget.querySelector('input');
        input.checked = !input.checked
    
        if (input.checked) {
            event.currentTarget.classList.add('selected');
        } else {
            event.currentTarget.classList.remove('selected');
        }
    }
    
    unselect(event) {
        event.currentTarget.classList.remove('selected');
        let ids = this.getMediaIds(event.currentTarget);
        ids = ids.filter(value => {
            return value !== event.currentTarget.dataset.id;
        });
        this.setMediaIds(ids);
    }
    
    isMultiple() {
        return this.element.dataset.multiple || false;
    }
    
    insertContent(event) {
        event.preventDefault();
        const ids = this.getMediaIds();
        
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
}
