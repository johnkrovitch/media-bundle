import '../scss/media.scss';

import MediaGallery from "./components/gallery/MediaGallery";
import UploadModal from "./components/upload/modal/UploadModal";
import GalleryModal from "./components/gallery/modal/GalleryModal";

const Events = {
    UPLOAD_MODAL_SHOW: 'jk_media.upload-modal.show',
    GALLERY_SHOW: 'jk_media.gallery.show',
    GALLERY_MODAL_SHOW: 'jk_media.gallery-modal.show'
};

document.addEventListener(Events.GALLERY_SHOW, () => {
    const gallery = new MediaGallery();
    gallery.bind();
});

document.addEventListener(Events.UPLOAD_MODAL_SHOW, (event) => {
    const modal = new UploadModal({
        selector: '#media-modal',
        url: event.url
    });
    modal.bind();
    modal.load();
});

document.addEventListener(Events.GALLERY_MODAL_SHOW, (event) => {
    const modal = new GalleryModal({
        selector: '#media-modal',
        url: event.url
    });
    modal.bind();
    modal.load();
});
