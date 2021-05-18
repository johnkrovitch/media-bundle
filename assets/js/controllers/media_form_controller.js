import { Controller } from 'stimulus';
import client from "axios";

export default class extends Controller {
    addMedia() {
    
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
    
    getAddLink() {
        return this.element.querySelector('[data-action="media-form#addMedia"]');
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
}
