import { Controller } from 'stimulus';
import events from '../events/events';
import client from 'axios';

export default class extends Controller {
    connect() {
        window.addEventListener(events.MODAL_OPEN, event => {
            this.open(event);
        });
    
        window.addEventListener(events.MODAL_CLOSE, event => {
            this.close(event);
        });
    
        window.addEventListener(events.MODAL_LOAD, event => {
            this.load(event.detail.url);
        });
    }
    
    disconnect() {
        window.removeEventListener(events.MODAL_OPEN, event => {
            this.open(event);
        });
    
        window.removeEventListener(events.MODAL_CLOSE, event => {
            this.close(event);
        });
    
        window.removeEventListener(events.MODAL_LOAD, event => {
            this.load(event.detail.url);
        });
    }
    
    open(event) {
        if (event.detail.url) {
            this.load(event.detail.url);
        } else {
            this.openModal();
        }
    }
    
    load(url) {
        client
            .get(url)
            .then(response => {
                this.element.querySelectorAll('.modal-content').forEach(element => {
                    element.innerHTML = response.data;
                });
                this.openModal();
            })
        ;
    }
    
    openModal() {
        const backdrop = this.element.querySelector('.modal-backdrop');
        backdrop.classList.add('show');
        backdrop.classList.remove('d-none');
        backdrop.addEventListener('click', (event) => {
            window.dispatchEvent(new CustomEvent(events.MODAL_CLOSE));
        });
        this.element.classList.add('show');
        this.bind();
    }
    
    bind() {
        this.element.querySelectorAll('[data-dismiss="modal"]').forEach(element => {
            element.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent(events.MODAL_CLOSE));
            });
        });
    }
    
    close() {
        this.element.classList.remove('show');
        this.element.querySelectorAll('.modal-content').forEach(element => {
            element.innerHTML = '';
        });
        const backdrop = document.querySelector('.modal-backdrop');
        backdrop.classList.remove('show');
        backdrop.classList.add('d-none');
        backdrop.removeEventListener('click', (event) => {
            window.dispatchEvent(new CustomEvent(events.MODAL_CLOSE));
        });
    }
}
