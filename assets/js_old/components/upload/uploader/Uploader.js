export default class Uploader {
    constructor(options) {
        if (!options) {
            options = {};
        }
        this.options = Object.assign({
            selector: '.media-file-upload',
            removeMediaSelector: '.remove-media'
        }, options);

        this.element = document.querySelector(this.options.selector);

        // let fileupload = $('.media-file-upload');
        // let removeMediaLink = $('removeMediaSelector');
        //
        // fileupload.on('change', function () {
        //
        //     alert(this.files[0].name);
        //
        // });
    }

    bind() {
        this.element.addEventListener('change', (event) => {
            this.upload();
        });
    }

    upload() {

    }

    FileUpload(img, file) {
        var reader = new FileReader();
        this.ctrl = createThrobber(img);
        var xhr = new XMLHttpRequest();
        this.xhr = xhr;

        var self = this;
        this.xhr.upload.addEventListener("progress", function(e) {
            if (e.lengthComputable) {
                var percentage = Math.round((e.loaded * 100) / e.total);
                self.ctrl.update(percentage);
            }
        }, false);

        xhr.upload.addEventListener("load", function(e){
            self.ctrl.update(100);
            var canvas = self.ctrl.ctx.canvas;
            canvas.parentNode.removeChild(canvas);
        }, false);
        xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
        xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
        reader.onload = function(evt) {
            xhr.sendAsBinary(evt.target.result);
        };
        reader.readAsBinaryString(file);
    }


    // fileupload.fileupload({
        //     done: function (e, data) {
        //         // ajax response
        //         let result = JSON.parse(data.result);
        //         // file upload
        //         let formInput = $(this).parents('.media-form-container');
        //         // target media id hidden field
        //         let targetMediaIdSelector = $(this).data('target');
        //
        //         // add the new media to the template image src attribute
        //         formInput.find('.media-target').attr('src', result.mediaUrl);
        //         // add the new media id to the target media id field
        //         $(targetMediaIdSelector).val(result.mediaId);
        //         // display the remove media link
        //         removeMediaLink.open();
        //     }
        // });
//         removeMediaLink.on('click', function () {
//             // file upload
//             let formInput = $(this).parents('.media-form-container');
//             // target media id hidden field
//             let targetMediaIdSelector = $(this).data('target');
//
//             // empty the image tag src
//             formInput.find('.media-target').attr('src', '');
//             // empty the hidden id field
//             $(targetMediaIdSelector).val('');
//             // hide the remove media link
//             $(this).hide();
//
//             return false;
//         });
//     }
};
