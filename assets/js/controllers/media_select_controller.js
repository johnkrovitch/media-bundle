import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
        this.element.querySelectorAll('input[type="submit"]').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault()
                event.stopPropagation()
            })
        })
    }
    
    showDataSource(event) {
        this.hideDataSources()
        
        this.getDataSource(event.currentTarget.dataset.target).classList.remove('hide');
        window.dispatchEvent(new CustomEvent(events.MEDIA_DATASOURCE_SHOW, {
            details: {datasource: event.currentTarget.value}
        }))
    }
    
    getDataSource(selector) {
        const target = this.element.querySelector(selector);
    
        if (!target) {
            throw new Error('The target ' + selector + ' does not exists')
        }
    
        return target
    }
    
    getDataSources() {
        return this.element.querySelectorAll('.media-datasource')
    }
    
    hideDataSources() {
        this.getDataSources().forEach(element => {
            element.classList.add('hide')
        });
    }
};
