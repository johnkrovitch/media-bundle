import { Controller } from 'stimulus';

export default class extends Controller {
    connect() {
        this.element.querySelectorAll('input[type="submit"]').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
            })
        });
    }
    
    showDataSource(event) {
        this.hideDataSources();
        this.getDataSource(event.currentTarget.dataset.target).classList.remove('hide');
    }
    
    getDataSource(selector) {
        const target = this.element.querySelector(selector);
    
        if (!target) {
            throw new Error('The target ' + selector + ' does not exists');
        }
    
        return target;
    }
    
    getDataSources() {
        const datasources = [];
        this.element.querySelectorAll('[data-action="media-select#showDataSource"]').forEach(element => {
            datasources.push(this.getDataSource(element.dataset.target));
        });
    
        return datasources;
    }
    
    hideDataSources() {
        this.getDataSources().forEach(element => {
            element.classList.add('hide');
        });
    }
};
