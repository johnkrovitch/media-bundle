import { Controller } from 'stimulus';
import events from '../events/events';
import client from 'axios';

export default class extends Controller {
    open(options) {
        if (options.url) {
            return this
                .load(options.url)
                
        } else {
            return new Promise(() => {
                this.show()
            })
        }
    }
    
    async load(url) {
        return client.get(url).then(response => {
            this.modal().querySelector('.modal-content').innerHTML = response.data
            this.show()
        })
    }
    
    show() {
        const backdrop = this.modal().querySelector('.modal-backdrop');
        backdrop.classList.add('show');
        backdrop.classList.remove('d-none');
        backdrop.addEventListener('click', (event) => {
            this.close()
        });
        this.modal().classList.add('show');
        this.bind();
    }
    
    modal() {
        return document.querySelector('.modal.media-modal')
    }
    
    bind() {
        this.modal().querySelectorAll('[data-dismiss="modal"]').forEach(element => {
            element.addEventListener('click', () => {
                this.close()
            });
        });
    }
    
    close() {
        this.modal().classList.remove('show');
        this.modal().querySelectorAll('.modal-content').forEach(element => {
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
