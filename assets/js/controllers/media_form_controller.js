import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
        const value = this.getValue();
    
        if (!value) {
            this.hideRemoveLink();
            this.hideRestoreLink();
            this.showAddLink();
        }
    }
    
    addMedia() {
        window.dispatchEvent(new CustomEvent(events.MODAL_OPEN, {
            detail: {url: this.element.dataset.targetUrl}
        }));
    }
    
    removeMedia() {
        this.setValue('');
        this.hideRemoveLink();
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
