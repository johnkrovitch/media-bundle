import '../scss/media.scss';

import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));


//
// import MediaGallery from "./components/gallery/MediaGallery";
// import UploadModal from "./components/upload/modal/UploadModal";
// import GalleryModal from "./components/gallery/modal/GalleryModal";
// import MediaEmbeddedForm from "./components/media/form/MediaEmbeddedForm";
// import MediaForm from "./components/media/form/MediaForm";
//
// const Events = {
//     UPLOAD_MODAL_SHOW: 'jk_media.upload-modal.show',
//     GALLERY_SHOW: 'jk_media.gallery.show',
//     GALLERY_MODAL_SHOW: 'jk_media.gallery-modal.show'
// };
//
// document.addEventListener(Events.GALLERY_SHOW, () => {
//     const gallery = new MediaGallery();
//     gallery.bind();
// });
//
// document.addEventListener(Events.UPLOAD_MODAL_SHOW, (event) => {
//     const modal = new UploadModal({
//         selector: '#media-modal',
//         url: event.url
//     });
//     modal.bind();
//     modal.load();
// });
//
// document.addEventListener(Events.GALLERY_MODAL_SHOW, (event) => {
//     const modal = new GalleryModal({
//         selector: '#media-modal',
//         url: event.url
//     });
//     modal.bind();
//     modal.load();
// });
//
// document.querySelectorAll('.media-embed-form').forEach((element) => {
//     (new MediaEmbeddedForm(element)).bind();
// });
//
// // Initialize media forms
// document.querySelectorAll('.cms-media-form').forEach((element) => {
//     let mediaForm = new MediaForm(element);
//     mediaForm.bind();
// })

