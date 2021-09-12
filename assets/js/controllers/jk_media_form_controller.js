import { Controller } from 'stimulus'

export default class extends Controller {
    connect() {
        const value = this.getValue()
        
        if (!value) {
            this.hideRemoveLink()
            this.showAddLink()
        } else {
            this.showRemoveLink()
            this.hideAddLink()
        }
    }
    
    openMediaModal(event) {
        event.preventDefault()
        this
            .modalController()
            .open({
                url: this.element.dataset.url
            })
            .then(() => {
                this.bindForm()
            })
    }
    
    modal() {
        return document.querySelector('.modal.media-modal')
    }
    
    selectController() {
        return this.modal().querySelector('[data-controller="jk-media-select"]')
    }
    
    modalController() {
        return this
            .application
            .getControllerForElementAndIdentifier(this.modal(), 'jk-media-modal')
    }
    
    bindForm() {
        this
            .selectController()
            .addEventListener('mediaSelected', event => {
                if (event.detail.mediaCollection.length > 0) {
                    this.setMedia(event.detail.mediaCollection[0])
                    this.hideAddLink()
                    this.showRemoveLink()
                    this.modalController().close()
                }
            })
    }
    
    setMedia(media)
    {
        this.setValue(media.id)
        this.setImagePath(media.path)
    }
    
    removeMedia(event) {
        event.preventDefault()
        this.setValue('')
        this.getImage().classList.add('hide')
        this.hideRemoveLink()
        this.showAddLink()
    }
    
    setImagePath(path) {
        const image = this.getImage()
        image.src = path
        image.classList.remove('hide')
    }
    
    getImage() {
        return this.element.querySelector('.media-target')
    }
    
    getTarget() {
        const target = this.element.querySelector(this.element.dataset.target)
    
        if (!target) {
            throw new Error('The target does not exists')
        }
    
        return target
    }
    
    setValue(value) {
        const target = this.getTarget()
        target.dataset.previousValue = target.value
        target.value = value
    }
    
    getValue() {
        return this.getTarget().value
    }
    
    getRemoveLink() {
        return this.element.querySelector('[data-action="jk-media-form#removeMedia"]')
    }
    
    showRemoveLink() {
        this.getRemoveLink().classList.remove('hide')
    }
    
    hideRemoveLink() {
        this.getRemoveLink().classList.add('hide')
    }
    
    getAddLink() {
        return this.element.querySelector('[data-action="jk-media-form#openMediaModal"]')
    }
    
    showAddLink() {
        this.getAddLink().classList.remove('hide')
    }
    
    hideAddLink() {
        this.getAddLink().classList.add('hide')
    }
}
