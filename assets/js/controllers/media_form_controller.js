import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
        const value = this.getValue();
        
        if (!value) {
            this.hideRemoveLink();
            this.hideRestoreLink();
            this.showAddLink();
        }}
    
    addMedia(event) {
        window.dispatchEvent(new CustomEvent(events.MODAL_OPEN, {
            detail: {url: this.element.dataset.url}
        }));
        window.addEventListener(events.MEDIA_SELECT, event => {
            this.setValue(event.detail.id);
            this.hideAddLink();
            this.showRemoveLink();
            this.setImagePath(event.detail.path);
            window.dispatchEvent(new CustomEvent(events.MODAL_CLOSE));
        });
        event.preventDefault();
    }
    
    removeMedia() {
        this.setValue('');
        this.hideRemoveLink();
    }
    
    setImagePath(path) {
        const image = this.getImage()
        image.src = path;
        image.classList.remove('hide');
    }
    
    getImage() {
        return this.element.querySelector('.media-target');
    }
    
    getTarget() {
        const target = this.element.querySelector(this.element.dataset.target);
    
        if (!target) {
            throw new Error('The target does not exists');
        }
    
        return target;
    }
    
    setValue(value) {
        const target = this.getTarget();
        target.dataset.previousValue = target.value;
        target.value = value;
    }
    
    getValue() {
        return this.getTarget().value;
    }
    
    getRemoveLink() {
        return this.element.querySelector('[data-action="media-form#removeMedia"]');
    }
    
    showRemoveLink() {
        this.getRemoveLink().classList.remove('hide');
    }
    
    hideRemoveLink() {
        this.getRemoveLink().classList.add('hide');
    }
    
    getRestoreLink() {
        return this.element.querySelector('[data-action="media-form#restoreMedia"]');
    }
    
    showRestoreLink() {
        this.getRestoreLink().classList.remove('hide');
    }
    
    hideRestoreLink() {
        this.getRestoreLink().classList.add('hide');
    }
    
    getAddLink() {
        return this.element.querySelector('[data-action="media-form#addMedia"]');
    }
    
    showAddLink() {
        this.getAddLink().classList.remove('hide');
    }
    
    hideAddLink() {
        this.getAddLink().classList.add('hide');
    }
}
