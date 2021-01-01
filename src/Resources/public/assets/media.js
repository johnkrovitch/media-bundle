/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundles/jkmedia/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/media.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/components/client.js":
/*!****************************************!*\
  !*** ./assets/js/components/client.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loader */ "./assets/js/components/loader.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Client = /*#__PURE__*/function () {
  function Client() {
    _classCallCheck(this, Client);
  }

  _createClass(Client, null, [{
    key: "get",
    value: function get(url, options) {
      options = Object.assign({
        targetSelector: null
      }, options);
      var targets = document.querySelectorAll(options.targetSelector);
      var loader = new _components_loader__WEBPACK_IMPORTED_MODULE_5__["default"]({
        targetSelector: options.targetSelector
      });
      loader.show();
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(function (response) {
        loader.hide();
        targets.forEach(function (target) {
          target.innerHTML = response.data;
        });
      });
    }
  }]);

  return Client;
}();



/***/ }),

/***/ "./assets/js/components/loader.js":
/*!****************************************!*\
  !*** ./assets/js/components/loader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Loader = /*#__PURE__*/function () {
  function Loader(options) {
    _classCallCheck(this, Loader);

    this.options = Object.assign({
      selector: '#media-loader',
      targetSelector: null
    }, options);
    this.element = document.querySelector(this.options.selector);

    if (!this.element) {
      throw new Error('The loader element "' + this.options.selector + '" does not exists');
    }
  }

  _createClass(Loader, [{
    key: "show",
    value: function show() {
      var _this = this;

      document.querySelectorAll(this.options.targetSelector).forEach(function (element) {
        element.innerHTML = _this.element.outerHTML;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      document.querySelectorAll(this.options.targetSelector).forEach(function (element) {
        element.querySelectorAll(_this2.element.selector, function (loader) {
          loader.remove();
        });
      });
    }
  }]);

  return Loader;
}();



/***/ }),

/***/ "./assets/js/components/modal.js":
/*!***************************************!*\
  !*** ./assets/js/components/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Modal = /*#__PURE__*/function () {
  function Modal(selector, options) {
    _classCallCheck(this, Modal);

    this.options = Object.assign({
      show: true,
      contentUrl: null,
      loaderSelector: '#media-loader',
      contentSelector: '.modal__container'
    }, options);
    this.selector = selector;
    this.element = document.querySelector('#' + selector);

    if (!this.element) {
      throw new Error('The element "#' + selector + '" does not exists');
    }

    if (this.options.show) {
      this.open();
    }
  }

  _createClass(Modal, [{
    key: "load",
    value: function load() {
      var _this = this;

      if (this.options.loaderSelector && this.options.contentSelector) {
        var loader = document.querySelector(this.options.loaderSelector);
        var loaderTarget = this.element.querySelector(this.options.contentSelector);

        if (loader && loaderTarget) {
          loaderTarget.innerHTML = loader.outerHTML;
        }
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.options.contentUrl).then(function (response) {
        _this.element.querySelector(_this.options.contentSelector).innerHTML = response.data;
      });
    }
  }, {
    key: "open",
    value: function open() {
      if (this.options.contentUrl) {
        this.load();
      }

      micromodal__WEBPACK_IMPORTED_MODULE_3__["default"].show(this.selector, this.options);
    }
  }, {
    key: "close",
    value: function close() {
      micromodal__WEBPACK_IMPORTED_MODULE_3__["default"].close(this.selector);
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./assets/js/controllers sync recursive \\.js$":
/*!******************************************!*\
  !*** ./assets/js/controllers sync \.js$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./choose_media_controller.js": "./assets/js/controllers/choose_media_controller.js",
	"./gallery_modal_controller.js": "./assets/js/controllers/gallery_modal_controller.js",
	"./media_dropzone_controller.js": "./assets/js/controllers/media_dropzone_controller.js",
	"./media_tinymce_controller.js": "./assets/js/controllers/media_tinymce_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/js/controllers sync recursive \\.js$";

/***/ }),

/***/ "./assets/js/controllers/choose_media_controller.js":
/*!**********************************************************!*\
  !*** ./assets/js/controllers/choose_media_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal */ "./assets/js/components/modal.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.element.querySelectorAll('[data-target-container]').forEach(function (element) {
        if (element.checked) {
          _this.displayParts(element);
        }
      });
    }
  }, {
    key: "display",
    value: function display(event) {
      this.displayParts(event.target);
    }
  }, {
    key: "displayParts",
    value: function displayParts(source) {
      this.element.querySelectorAll('.media-collapse').forEach(function (element) {
        element.classList.add('d-none');
      });
      var targetSelector = source.dataset.targetContainer;
      var target = this.element.querySelector(targetSelector);

      if (!target) {
        throw new Error('The target element "' + targetSelector + '" does not exists');
      }

      target.classList.remove('d-none');

      if (source.value === 'gallery') {
        this.gallery(source);
      }
    }
  }, {
    key: "gallery",
    value: function gallery(source) {
      var containerSelector = source.dataset.targetContentContainer;
      var container = document.querySelector(containerSelector);

      if (!container) {
        throw new Error('The target element "' + containerSelector + '" does not exists');
      }

      container.innerHTML = document.querySelector('#media-loader').outerHTML;
      var url = source.dataset.url;

      if (!url) {
        throw new Error('Missing the media gallery data-url attribute');
      }

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url).then(function (response) {
        container.innerHTML = response.data;
      });
    }
  }, {
    key: "submit",
    value: function submit(event) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(this.element.action, new FormData(this.element)).then(function (response) {
        if (response.status === 200) {
          document.dispatchEvent(new CustomEvent('tinymce-insert-content', {
            detail: response.data
          }));
          new _components_modal__WEBPACK_IMPORTED_MODULE_6__["default"]('media-modal').close();
        } else {
          _this2.element.outerHTML = response.data;
        }
      })["catch"](function (error) {
        _this2.element.outerHTML = error.response.data;
      });
      event.preventDefault();
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_4__["Controller"]);



/***/ }),

/***/ "./assets/js/controllers/gallery_modal_controller.js":
/*!***********************************************************!*\
  !*** ./assets/js/controllers/gallery_modal_controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _components_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/client */ "./assets/js/components/client.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var containerSelector = this.element.dataset.targetContainer;
      this.container = document.querySelector(containerSelector);

      if (!this.container) {
        throw new Error('The media gallery container ' + containerSelector + ' does not exists');
      }

      this.element.querySelectorAll('.pagination a').forEach(function (element) {
        element.addEventListener('click', function (event) {
          _components_client__WEBPACK_IMPORTED_MODULE_5__["default"].get(element.href, {
            targetSelector: containerSelector
          }).then();
          event.preventDefault();
        });
      });
    }
  }, {
    key: "select",
    value: function select(event) {
      var mediaId = event.target.dataset.mediaId;

      if (!mediaId) {
        throw new Error('The attribute mediaId is missing on the gallery element');
      }

      document.querySelectorAll(this.element.dataset.targetInput).forEach(function (element) {
        element.value = mediaId;
      });
      event.preventDefault();
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      this.container.classList.remove('d-none');
      this.element.querySelectorAll('.gallery-show-link').forEach(function (element) {
        element.classList.add('d-none');
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.container.classList.add('d-none');
      this.element.querySelectorAll('.gallery-show-link').forEach(function (element) {
        element.classList.remove('d-none');
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_4__["Controller"]);



/***/ }),

/***/ "./assets/js/controllers/media_dropzone_controller.js":
/*!************************************************************!*\
  !*** ./assets/js/controllers/media_dropzone_controller.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 //const Dropzone = require('dropzone/dist/dropzone-amd-module');

window.Dropzone = __webpack_require__(/*! dropzone/dist/min/dropzone.min */ "./node_modules/dropzone/dist/min/dropzone.min.js");
Dropzone.options.autoDropzone = false;

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var input = this.element.querySelector('input[type="file"]');

      if (!input) {
        throw new Error('No input of type "file" found in the dropzone "' + this.element.id + '"');
      }

      this.dropzone = new Dropzone('#' + this.element.id, {
        paramName: input.name,
        url: this.element.dataset.url
      });
      console.log('dropzone', this.dropzone);
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_3__["Controller"]);



/***/ }),

/***/ "./assets/js/controllers/media_tinymce_controller.js":
/*!***********************************************************!*\
  !*** ./assets/js/controllers/media_tinymce_controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal */ "./assets/js/components/modal.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var dataset = this.element.dataset;
      window.addEventListener('tinymce-initialize', function (event) {
        event.detail.setup = function (editor) {
          editor.ui.registry.addButton('add_media', {
            text: dataset.addMediaText,
            icon: 'image',
            onAction: function onAction() {
              new _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]('media-modal', {
                contentUrl: dataset.addMediaUrl
              });
            }
          });
          editor.ui.registry.addButton('add_media_gallery', {
            text: dataset.addMediaGalleryText,
            icon: 'image',
            onAction: function onAction() {
              new _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]('media-modal', {
                contentUrl: dataset.addGalleryUrl
              });
            }
          });
        };
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_2__["Controller"]);



/***/ }),

/***/ "./assets/js/media.js":
/*!****************************!*\
  !*** ./assets/js/media.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_media_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/media.scss */ "./assets/scss/media.scss");
/* harmony import */ var _scss_media_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_media_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");



var application = stimulus__WEBPACK_IMPORTED_MODULE_1__["Application"].start();

var context = __webpack_require__("./assets/js/controllers sync recursive \\.js$");

application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_2__["definitionsFromContext"])(context));

/***/ }),

/***/ "./assets/scss/media.scss":
/*!********************************!*\
  !*** ./assets/scss/media.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/action.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/action.js ***!
  \****************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/action_descriptor.js");

var Action = /** @class */ (function () {
    function Action(element, index, descriptor) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    Action.forToken = function (token) {
        return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseActionDescriptorString"])(token.content));
    };
    Action.prototype.toString = function () {
        var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
        return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
    };
    Object.defineProperty(Action.prototype, "eventTargetName", {
        get: function () {
            return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
        },
        enumerable: false,
        configurable: true
    });
    return Action;
}());

var defaultEventNames = {
    "a": function (e) { return "click"; },
    "button": function (e) { return "click"; },
    "form": function (e) { return "submit"; },
    "input": function (e) { return e.getAttribute("type") == "submit" ? "click" : "input"; },
    "select": function (e) { return "change"; },
    "textarea": function (e) { return "input"; }
};
function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
        return defaultEventNames[tagName](element);
    }
}
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/action_descriptor.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/action_descriptor.js ***!
  \***************************************************************/
/*! exports provided: parseActionDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseActionDescriptorString", function() { return parseActionDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7      768 9  98
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
function parseActionDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
        return window;
    }
    else if (eventTargetName == "document") {
        return document;
    }
}
function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce(function (options, token) {
        var _a;
        return Object.assign(options, (_a = {}, _a[token.replace(/^!/, "")] = !/^!/.test(token), _a));
    }, {});
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
        return "window";
    }
    else if (eventTarget == document) {
        return "document";
    }
}
//# sourceMappingURL=action_descriptor.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/application.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/application.js ***!
  \*********************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/schema.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var Application = /** @class */ (function () {
    function Application(element, schema) {
        if (element === void 0) { element = document.documentElement; }
        if (schema === void 0) { schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"]; }
        this.logger = console;
        this.element = element;
        this.schema = schema;
        this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
        this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
    }
    Application.start = function (element, schema) {
        var application = new Application(element, schema);
        application.start();
        return application;
    };
    Application.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, domReady()];
                    case 1:
                        _a.sent();
                        this.dispatcher.start();
                        this.router.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    Application.prototype.stop = function () {
        this.dispatcher.stop();
        this.router.stop();
    };
    Application.prototype.register = function (identifier, controllerConstructor) {
        this.load({ identifier: identifier, controllerConstructor: controllerConstructor });
    };
    Application.prototype.load = function (head) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var definitions = Array.isArray(head) ? head : __spreadArrays([head], rest);
        definitions.forEach(function (definition) { return _this.router.loadDefinition(definition); });
    };
    Application.prototype.unload = function (head) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var identifiers = Array.isArray(head) ? head : __spreadArrays([head], rest);
        identifiers.forEach(function (identifier) { return _this.router.unloadIdentifier(identifier); });
    };
    Object.defineProperty(Application.prototype, "controllers", {
        // Controllers
        get: function () {
            return this.router.contexts.map(function (context) { return context.controller; });
        },
        enumerable: false,
        configurable: true
    });
    Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
        var context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    };
    // Error handling
    Application.prototype.handleError = function (error, message, detail) {
        this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
    };
    return Application;
}());

function domReady() {
    return new Promise(function (resolve) {
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", resolve);
        }
        else {
            resolve();
        }
    });
}
//# sourceMappingURL=application.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/binding.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/binding.js ***!
  \*****************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding = /** @class */ (function () {
    function Binding(context, action) {
        this.context = context;
        this.action = action;
    }
    Object.defineProperty(Binding.prototype, "index", {
        get: function () {
            return this.action.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventTarget", {
        get: function () {
            return this.action.eventTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventOptions", {
        get: function () {
            return this.action.eventOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Binding.prototype.handleEvent = function (event) {
        if (this.willBeInvokedByEvent(event)) {
            this.invokeWithEvent(event);
        }
    };
    Object.defineProperty(Binding.prototype, "eventName", {
        get: function () {
            return this.action.eventName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "method", {
        get: function () {
            var method = this.controller[this.methodName];
            if (typeof method == "function") {
                return method;
            }
            throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
        },
        enumerable: false,
        configurable: true
    });
    Binding.prototype.invokeWithEvent = function (event) {
        try {
            this.method.call(this.controller, event);
        }
        catch (error) {
            var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element, index = _a.index;
            var detail = { identifier: identifier, controller: controller, element: element, index: index, event: event };
            this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
        }
    };
    Binding.prototype.willBeInvokedByEvent = function (event) {
        var eventTarget = event.target;
        if (this.element === eventTarget) {
            return true;
        }
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
            return this.scope.containsElement(eventTarget);
        }
        else {
            return this.scope.containsElement(this.action.element);
        }
    };
    Object.defineProperty(Binding.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "methodName", {
        get: function () {
            return this.action.methodName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    return Binding;
}());

//# sourceMappingURL=binding.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/binding_observer.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/binding_observer.js ***!
  \**************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");



var BindingObserver = /** @class */ (function () {
    function BindingObserver(context, delegate) {
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map;
    }
    BindingObserver.prototype.start = function () {
        if (!this.valueListObserver) {
            this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    };
    BindingObserver.prototype.stop = function () {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    };
    Object.defineProperty(BindingObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
        get: function () {
            return this.schema.actionAttribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "schema", {
        get: function () {
            return this.context.schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "bindings", {
        get: function () {
            return Array.from(this.bindingsByAction.values());
        },
        enumerable: false,
        configurable: true
    });
    BindingObserver.prototype.connectAction = function (action) {
        var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    };
    BindingObserver.prototype.disconnectAction = function (action) {
        var binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    };
    BindingObserver.prototype.disconnectAllActions = function () {
        var _this = this;
        this.bindings.forEach(function (binding) { return _this.delegate.bindingDisconnected(binding); });
        this.bindingsByAction.clear();
    };
    // Value observer delegate
    BindingObserver.prototype.parseValueForToken = function (token) {
        var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);
        if (action.identifier == this.identifier) {
            return action;
        }
    };
    BindingObserver.prototype.elementMatchedValue = function (element, action) {
        this.connectAction(action);
    };
    BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
        this.disconnectAction(action);
    };
    return BindingObserver;
}());

//# sourceMappingURL=binding_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/blessing.js":
/*!******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/blessing.js ***!
  \******************************************************/
/*! exports provided: bless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bless", function() { return bless; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

/** @hidden */
function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    var shadowConstructor = extend(constructor);
    var shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    var blessings = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "blessings");
    return blessings.reduce(function (blessedProperties, blessing) {
        var properties = blessing(constructor);
        for (var key in properties) {
            var descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce(function (shadowProperties, key) {
        var _a;
        var descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) {
            Object.assign(shadowProperties, (_a = {}, _a[key] = descriptor, _a));
        }
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
var getOwnKeys = (function () {
    if (typeof Object.getOwnPropertySymbols == "function") {
        return function (object) { return __spreadArrays(Object.getOwnPropertyNames(object), Object.getOwnPropertySymbols(object)); };
    }
    else {
        return Object.getOwnPropertyNames;
    }
})();
var extend = (function () {
    function extendWithReflect(constructor) {
        function extended() {
            var _newTarget = this && this instanceof extended ? this.constructor : void 0;
            return Reflect.construct(constructor, arguments, _newTarget);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: { value: extended }
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
    }
    function testReflectExtension() {
        var a = function () { this.a.call(this); };
        var b = extendWithReflect(a);
        b.prototype.a = function () { };
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    }
    catch (error) {
        return function (constructor) { return /** @class */ (function (_super) {
            __extends(extended, _super);
            function extended() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return extended;
        }(constructor)); };
    }
})();
//# sourceMappingURL=blessing.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/class_map.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/class_map.js ***!
  \*******************************************************/
/*! exports provided: ClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMap", function() { return ClassMap; });
var ClassMap = /** @class */ (function () {
    function ClassMap(scope) {
        this.scope = scope;
    }
    ClassMap.prototype.has = function (name) {
        return this.data.has(this.getDataKey(name));
    };
    ClassMap.prototype.get = function (name) {
        return this.data.get(this.getDataKey(name));
    };
    ClassMap.prototype.getAttributeName = function (name) {
        return this.data.getAttributeNameForKey(this.getDataKey(name));
    };
    ClassMap.prototype.getDataKey = function (name) {
        return name + "-class";
    };
    Object.defineProperty(ClassMap.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: false,
        configurable: true
    });
    return ClassMap;
}());

//# sourceMappingURL=class_map.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/class_properties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/class_properties.js ***!
  \**************************************************************/
/*! exports provided: ClassPropertiesBlessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPropertiesBlessing", function() { return ClassPropertiesBlessing; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */
function ClassPropertiesBlessing(constructor) {
    var classes = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "classes");
    return classes.reduce(function (properties, classDefinition) {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    var _a;
    var name = key + "Class";
    return _a = {},
        _a[name] = {
            get: function () {
                var classes = this.classes;
                if (classes.has(key)) {
                    return classes.get(key);
                }
                else {
                    var attribute = classes.getAttributeName(key);
                    throw new Error("Missing attribute \"" + attribute + "\"");
                }
            }
        },
        _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)] = {
            get: function () {
                return this.classes.has(key);
            }
        },
        _a;
}
//# sourceMappingURL=class_properties.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/context.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/context.js ***!
  \*****************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/binding_observer.js");
/* harmony import */ var _value_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value_observer */ "./node_modules/@stimulus/core/dist/value_observer.js");


var Context = /** @class */ (function () {
    function Context(module, scope) {
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);
        this.valueObserver = new _value_observer__WEBPACK_IMPORTED_MODULE_1__["ValueObserver"](this, this.controller);
        try {
            this.controller.initialize();
        }
        catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    Context.prototype.connect = function () {
        this.bindingObserver.start();
        this.valueObserver.start();
        try {
            this.controller.connect();
        }
        catch (error) {
            this.handleError(error, "connecting controller");
        }
    };
    Context.prototype.disconnect = function () {
        try {
            this.controller.disconnect();
        }
        catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.valueObserver.stop();
        this.bindingObserver.stop();
    };
    Object.defineProperty(Context.prototype, "application", {
        get: function () {
            return this.module.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "identifier", {
        get: function () {
            return this.module.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "dispatcher", {
        get: function () {
            return this.application.dispatcher;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "parentElement", {
        get: function () {
            return this.element.parentElement;
        },
        enumerable: false,
        configurable: true
    });
    // Error handling
    Context.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
        this.application.handleError(error, "Error " + message, detail);
    };
    return Context;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/controller.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/controller.js ***!
  \********************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _class_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_properties */ "./node_modules/@stimulus/core/dist/class_properties.js");
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/target_properties.js");
/* harmony import */ var _value_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value_properties */ "./node_modules/@stimulus/core/dist/value_properties.js");



var Controller = /** @class */ (function () {
    function Controller(context) {
        this.context = context;
    }
    Object.defineProperty(Controller.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "classes", {
        get: function () {
            return this.scope.classes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: false,
        configurable: true
    });
    Controller.prototype.initialize = function () {
        // Override in your subclass to set up initial controller state
    };
    Controller.prototype.connect = function () {
        // Override in your subclass to respond when the controller is connected to the DOM
    };
    Controller.prototype.disconnect = function () {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    };
    Controller.blessings = [_class_properties__WEBPACK_IMPORTED_MODULE_0__["ClassPropertiesBlessing"], _target_properties__WEBPACK_IMPORTED_MODULE_1__["TargetPropertiesBlessing"], _value_properties__WEBPACK_IMPORTED_MODULE_2__["ValuePropertiesBlessing"]];
    Controller.targets = [];
    Controller.values = {};
    return Controller;
}());

//# sourceMappingURL=controller.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/data_map.js":
/*!******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/data_map.js ***!
  \******************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");

var DataMap = /** @class */ (function () {
    function DataMap(scope) {
        this.scope = scope;
    }
    Object.defineProperty(DataMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    DataMap.prototype.get = function (key) {
        var name = this.getAttributeNameForKey(key);
        return this.element.getAttribute(name);
    };
    DataMap.prototype.set = function (key, value) {
        var name = this.getAttributeNameForKey(key);
        this.element.setAttribute(name, value);
        return this.get(key);
    };
    DataMap.prototype.has = function (key) {
        var name = this.getAttributeNameForKey(key);
        return this.element.hasAttribute(name);
    };
    DataMap.prototype.delete = function (key) {
        if (this.has(key)) {
            var name_1 = this.getAttributeNameForKey(key);
            this.element.removeAttribute(name_1);
            return true;
        }
        else {
            return false;
        }
    };
    DataMap.prototype.getAttributeNameForKey = function (key) {
        return "data-" + this.identifier + "-" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_0__["dasherize"])(key);
    };
    return DataMap;
}());

//# sourceMappingURL=data_map.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/definition.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/definition.js ***!
  \********************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
/* harmony import */ var _blessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blessing */ "./node_modules/@stimulus/core/dist/blessing.js");

/** @hidden */
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: Object(_blessing__WEBPACK_IMPORTED_MODULE_0__["bless"])(definition.controllerConstructor)
    };
}
//# sourceMappingURL=definition.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/dispatcher.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/dispatcher.js ***!
  \********************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/event_listener.js");

var Dispatcher = /** @class */ (function () {
    function Dispatcher(application) {
        this.application = application;
        this.eventListenerMaps = new Map;
        this.started = false;
    }
    Dispatcher.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach(function (eventListener) { return eventListener.connect(); });
        }
    };
    Dispatcher.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach(function (eventListener) { return eventListener.disconnect(); });
        }
    };
    Object.defineProperty(Dispatcher.prototype, "eventListeners", {
        get: function () {
            return Array.from(this.eventListenerMaps.values())
                .reduce(function (listeners, map) { return listeners.concat(Array.from(map.values())); }, []);
        },
        enumerable: false,
        configurable: true
    });
    // Binding observer delegate
    /** @hidden */
    Dispatcher.prototype.bindingConnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    };
    /** @hidden */
    Dispatcher.prototype.bindingDisconnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    };
    // Error handling
    Dispatcher.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        this.application.handleError(error, "Error " + message, detail);
    };
    Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
        var eventTarget = binding.eventTarget, eventName = binding.eventName, eventOptions = binding.eventOptions;
        return this.fetchEventListener(eventTarget, eventName, eventOptions);
    };
    Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName, eventOptions) {
        var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        var cacheKey = this.cacheKey(eventName, eventOptions);
        var eventListener = eventListenerMap.get(cacheKey);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
            eventListenerMap.set(cacheKey, eventListener);
        }
        return eventListener;
    };
    Dispatcher.prototype.createEventListener = function (eventTarget, eventName, eventOptions) {
        var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName, eventOptions);
        if (this.started) {
            eventListener.connect();
        }
        return eventListener;
    };
    Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
        var eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map;
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    };
    Dispatcher.prototype.cacheKey = function (eventName, eventOptions) {
        var parts = [eventName];
        Object.keys(eventOptions).sort().forEach(function (key) {
            parts.push("" + (eventOptions[key] ? "" : "!") + key);
        });
        return parts.join(":");
    };
    return Dispatcher;
}());

//# sourceMappingURL=dispatcher.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/event_listener.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/event_listener.js ***!
  \************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener = /** @class */ (function () {
    function EventListener(eventTarget, eventName, eventOptions) {
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.eventOptions = eventOptions;
        this.unorderedBindings = new Set();
    }
    EventListener.prototype.connect = function () {
        this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    };
    EventListener.prototype.disconnect = function () {
        this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    };
    // Binding observer delegate
    /** @hidden */
    EventListener.prototype.bindingConnected = function (binding) {
        this.unorderedBindings.add(binding);
    };
    /** @hidden */
    EventListener.prototype.bindingDisconnected = function (binding) {
        this.unorderedBindings.delete(binding);
    };
    EventListener.prototype.handleEvent = function (event) {
        var extendedEvent = extendEvent(event);
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var binding = _a[_i];
            if (extendedEvent.immediatePropagationStopped) {
                break;
            }
            else {
                binding.handleEvent(extendedEvent);
            }
        }
    };
    Object.defineProperty(EventListener.prototype, "bindings", {
        get: function () {
            return Array.from(this.unorderedBindings).sort(function (left, right) {
                var leftIndex = left.index, rightIndex = right.index;
                return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
            });
        },
        enumerable: false,
        configurable: true
    });
    return EventListener;
}());

function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
        return event;
    }
    else {
        var stopImmediatePropagation_1 = event.stopImmediatePropagation;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation: function () {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation_1.call(this);
            }
        });
    }
}
//# sourceMappingURL=event_listener.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/guide.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/guide.js ***!
  \***************************************************/
/*! exports provided: Guide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guide", function() { return Guide; });
var Guide = /** @class */ (function () {
    function Guide(logger) {
        this.warnedKeysByObject = new WeakMap;
        this.logger = logger;
    }
    Guide.prototype.warn = function (object, key, message) {
        var warnedKeys = this.warnedKeysByObject.get(object);
        if (!warnedKeys) {
            warnedKeys = new Set;
            this.warnedKeysByObject.set(object, warnedKeys);
        }
        if (!warnedKeys.has(key)) {
            warnedKeys.add(key);
            this.logger.warn(message, object);
        }
    };
    return Guide;
}());

//# sourceMappingURL=guide.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./node_modules/@stimulus/core/dist/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./node_modules/@stimulus/core/dist/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/inheritable_statics.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/inheritable_statics.js ***!
  \*****************************************************************/
/*! exports provided: readInheritableStaticArrayValues, readInheritableStaticObjectPairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInheritableStaticArrayValues", function() { return readInheritableStaticArrayValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInheritableStaticObjectPairs", function() { return readInheritableStaticObjectPairs; });
function readInheritableStaticArrayValues(constructor, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce(function (values, constructor) {
        getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) { return values.add(name); });
        return values;
    }, new Set));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
    var ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce(function (pairs, constructor) {
        pairs.push.apply(pairs, getOwnStaticObjectPairs(constructor, propertyName));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    var definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    var definition = constructor[propertyName];
    return definition ? Object.keys(definition).map(function (key) { return [key, definition[key]]; }) : [];
}
//# sourceMappingURL=inheritable_statics.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/module.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/module.js ***!
  \****************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/definition.js");


var Module = /** @class */ (function () {
    function Module(application, definition) {
        this.application = application;
        this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
    Object.defineProperty(Module.prototype, "identifier", {
        get: function () {
            return this.definition.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "controllerConstructor", {
        get: function () {
            return this.definition.controllerConstructor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "contexts", {
        get: function () {
            return Array.from(this.connectedContexts);
        },
        enumerable: false,
        configurable: true
    });
    Module.prototype.connectContextForScope = function (scope) {
        var context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    };
    Module.prototype.disconnectContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    };
    Module.prototype.fetchContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (!context) {
            context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    };
    return Module;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/router.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/router.js ***!
  \****************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/scope.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/scope_observer.js");




var Router = /** @class */ (function () {
    function Router(application) {
        this.application = application;
        this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_3__["ScopeObserver"](this.element, this.schema, this);
        this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"];
        this.modulesByIdentifier = new Map;
    }
    Object.defineProperty(Router.prototype, "element", {
        get: function () {
            return this.application.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "logger", {
        get: function () {
            return this.application.logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "modules", {
        get: function () {
            return Array.from(this.modulesByIdentifier.values());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "contexts", {
        get: function () {
            return this.modules.reduce(function (contexts, module) { return contexts.concat(module.contexts); }, []);
        },
        enumerable: false,
        configurable: true
    });
    Router.prototype.start = function () {
        this.scopeObserver.start();
    };
    Router.prototype.stop = function () {
        this.scopeObserver.stop();
    };
    Router.prototype.loadDefinition = function (definition) {
        this.unloadIdentifier(definition.identifier);
        var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
        this.connectModule(module);
    };
    Router.prototype.unloadIdentifier = function (identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            this.disconnectModule(module);
        }
    };
    Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            return module.contexts.find(function (context) { return context.element == element; });
        }
    };
    // Error handler delegate
    /** @hidden */
    Router.prototype.handleError = function (error, message, detail) {
        this.application.handleError(error, message, detail);
    };
    // Scope observer delegate
    /** @hidden */
    Router.prototype.createScopeForElementAndIdentifier = function (element, identifier) {
        return new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](this.schema, element, identifier, this.logger);
    };
    /** @hidden */
    Router.prototype.scopeConnected = function (scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.connectContextForScope(scope);
        }
    };
    /** @hidden */
    Router.prototype.scopeDisconnected = function (scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.disconnectContextForScope(scope);
        }
    };
    // Modules
    Router.prototype.connectModule = function (module) {
        this.modulesByIdentifier.set(module.identifier, module);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.connectContextForScope(scope); });
    };
    Router.prototype.disconnectModule = function (module) {
        this.modulesByIdentifier.delete(module.identifier);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.disconnectContextForScope(scope); });
    };
    return Router;
}());

//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/schema.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/schema.js ***!
  \****************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target"
};
//# sourceMappingURL=schema.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/scope.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/scope.js ***!
  \***************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _class_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_map */ "./node_modules/@stimulus/core/dist/class_map.js");
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/data_map.js");
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide */ "./node_modules/@stimulus/core/dist/guide.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/selectors.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/target_set.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var Scope = /** @class */ (function () {
    function Scope(schema, element, identifier, logger) {
        var _this = this;
        this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_4__["TargetSet"](this);
        this.classes = new _class_map__WEBPACK_IMPORTED_MODULE_0__["ClassMap"](this);
        this.data = new _data_map__WEBPACK_IMPORTED_MODULE_1__["DataMap"](this);
        this.containsElement = function (element) {
            return element.closest(_this.controllerSelector) === _this.element;
        };
        this.schema = schema;
        this.element = element;
        this.identifier = identifier;
        this.guide = new _guide__WEBPACK_IMPORTED_MODULE_2__["Guide"](logger);
    }
    Scope.prototype.findElement = function (selector) {
        return this.element.matches(selector)
            ? this.element
            : this.queryElements(selector).find(this.containsElement);
    };
    Scope.prototype.findAllElements = function (selector) {
        return __spreadArrays(this.element.matches(selector) ? [this.element] : [], this.queryElements(selector).filter(this.containsElement));
    };
    Scope.prototype.queryElements = function (selector) {
        return Array.from(this.element.querySelectorAll(selector));
    };
    Object.defineProperty(Scope.prototype, "controllerSelector", {
        get: function () {
            return Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
        },
        enumerable: false,
        configurable: true
    });
    return Scope;
}());

//# sourceMappingURL=scope.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/scope_observer.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/scope_observer.js ***!
  \************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");

var ScopeObserver = /** @class */ (function () {
    function ScopeObserver(element, schema, delegate) {
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__["ValueListObserver"](this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
    ScopeObserver.prototype.start = function () {
        this.valueListObserver.start();
    };
    ScopeObserver.prototype.stop = function () {
        this.valueListObserver.stop();
    };
    Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: false,
        configurable: true
    });
    // Value observer delegate
    /** @hidden */
    ScopeObserver.prototype.parseValueForToken = function (token) {
        var element = token.element, identifier = token.content;
        var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        var scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    };
    /** @hidden */
    ScopeObserver.prototype.elementMatchedValue = function (element, value) {
        var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) {
            this.delegate.scopeConnected(value);
        }
    };
    /** @hidden */
    ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
        var referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) {
                this.delegate.scopeDisconnected(value);
            }
        }
    };
    ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
        var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map;
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    };
    return ScopeObserver;
}());

//# sourceMappingURL=scope_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/selectors.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/selectors.js ***!
  \*******************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
    return "[" + attributeName + "~=\"" + token + "\"]";
}
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/string_helpers.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/string_helpers.js ***!
  \************************************************************/
/*! exports provided: camelize, capitalize, dasherize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dasherize", function() { return dasherize; });
function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) { return char.toUpperCase(); });
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });
}
//# sourceMappingURL=string_helpers.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/target_properties.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/target_properties.js ***!
  \***************************************************************/
/*! exports provided: TargetPropertiesBlessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetPropertiesBlessing", function() { return TargetPropertiesBlessing; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */
function TargetPropertiesBlessing(constructor) {
    var targets = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "targets");
    return targets.reduce(function (properties, targetDefinition) {
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    var _a;
    return _a = {},
        _a[name + "Target"] = {
            get: function () {
                var target = this.targets.find(name);
                if (target) {
                    return target;
                }
                else {
                    throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
                }
            }
        },
        _a[name + "Targets"] = {
            get: function () {
                return this.targets.findAll(name);
            }
        },
        _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name) + "Target"] = {
            get: function () {
                return this.targets.has(name);
            }
        },
        _a;
}
//# sourceMappingURL=target_properties.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/target_set.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/target_set.js ***!
  \********************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/selectors.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var TargetSet = /** @class */ (function () {
    function TargetSet(scope) {
        this.scope = scope;
    }
    Object.defineProperty(TargetSet.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "schema", {
        get: function () {
            return this.scope.schema;
        },
        enumerable: false,
        configurable: true
    });
    TargetSet.prototype.has = function (targetName) {
        return this.find(targetName) != null;
    };
    TargetSet.prototype.find = function () {
        var _this = this;
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        return targetNames.reduce(function (target, targetName) {
            return target
                || _this.findTarget(targetName)
                || _this.findLegacyTarget(targetName);
        }, undefined);
    };
    TargetSet.prototype.findAll = function () {
        var _this = this;
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        return targetNames.reduce(function (targets, targetName) { return __spreadArrays(targets, _this.findAllTargets(targetName), _this.findAllLegacyTargets(targetName)); }, []);
    };
    TargetSet.prototype.findTarget = function (targetName) {
        var selector = this.getSelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAllTargets = function (targetName) {
        var selector = this.getSelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getSelectorForTargetName = function (targetName) {
        var attributeName = "data-" + this.identifier + "-target";
        return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(attributeName, targetName);
    };
    TargetSet.prototype.findLegacyTarget = function (targetName) {
        var selector = this.getLegacySelectorForTargetName(targetName);
        return this.deprecate(this.scope.findElement(selector), targetName);
    };
    TargetSet.prototype.findAllLegacyTargets = function (targetName) {
        var _this = this;
        var selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findAllElements(selector).map(function (element) { return _this.deprecate(element, targetName); });
    };
    TargetSet.prototype.getLegacySelectorForTargetName = function (targetName) {
        var targetDescriptor = this.identifier + "." + targetName;
        return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
    };
    TargetSet.prototype.deprecate = function (element, targetName) {
        if (element) {
            var identifier = this.identifier;
            var attributeName = this.schema.targetAttribute;
            this.guide.warn(element, "target:" + targetName, "Please replace " + attributeName + "=\"" + identifier + "." + targetName + "\" with data-" + identifier + "-target=\"" + targetName + "\". " +
                ("The " + attributeName + " attribute is deprecated and will be removed in a future version of Stimulus."));
        }
        return element;
    };
    Object.defineProperty(TargetSet.prototype, "guide", {
        get: function () {
            return this.scope.guide;
        },
        enumerable: false,
        configurable: true
    });
    return TargetSet;
}());

//# sourceMappingURL=target_set.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/value_observer.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/value_observer.js ***!
  \************************************************************/
/*! exports provided: ValueObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueObserver", function() { return ValueObserver; });
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");

var ValueObserver = /** @class */ (function () {
    function ValueObserver(context, receiver) {
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__["StringMapObserver"](this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
        this.invokeChangedCallbacksForDefaultValues();
    }
    ValueObserver.prototype.start = function () {
        this.stringMapObserver.start();
    };
    ValueObserver.prototype.stop = function () {
        this.stringMapObserver.stop();
    };
    Object.defineProperty(ValueObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueObserver.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: false,
        configurable: true
    });
    // String map observer delegate
    ValueObserver.prototype.getStringMapKeyForAttribute = function (attributeName) {
        if (attributeName in this.valueDescriptorMap) {
            return this.valueDescriptorMap[attributeName].name;
        }
    };
    ValueObserver.prototype.stringMapValueChanged = function (attributeValue, name) {
        this.invokeChangedCallbackForValue(name);
    };
    ValueObserver.prototype.invokeChangedCallbacksForDefaultValues = function () {
        for (var _i = 0, _a = this.valueDescriptors; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b.key, name_1 = _b.name, defaultValue = _b.defaultValue;
            if (defaultValue != undefined && !this.controller.data.has(key)) {
                this.invokeChangedCallbackForValue(name_1);
            }
        }
    };
    ValueObserver.prototype.invokeChangedCallbackForValue = function (name) {
        var methodName = name + "Changed";
        var method = this.receiver[methodName];
        if (typeof method == "function") {
            var value = this.receiver[name];
            method.call(this.receiver, value);
        }
    };
    Object.defineProperty(ValueObserver.prototype, "valueDescriptors", {
        get: function () {
            var valueDescriptorMap = this.valueDescriptorMap;
            return Object.keys(valueDescriptorMap).map(function (key) { return valueDescriptorMap[key]; });
        },
        enumerable: false,
        configurable: true
    });
    return ValueObserver;
}());

//# sourceMappingURL=value_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/value_properties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/value_properties.js ***!
  \**************************************************************/
/*! exports provided: ValuePropertiesBlessing, propertiesForValueDefinitionPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuePropertiesBlessing", function() { return ValuePropertiesBlessing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertiesForValueDefinitionPair", function() { return propertiesForValueDefinitionPair; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */
function ValuePropertiesBlessing(constructor) {
    var valueDefinitionPairs = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticObjectPairs"])(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptorMap: {
            get: function () {
                var _this = this;
                return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
                    var _a;
                    var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);
                    var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
/** @hidden */
function propertiesForValueDefinitionPair(valueDefinitionPair) {
    var _a;
    var definition = parseValueDefinitionPair(valueDefinitionPair);
    var type = definition.type, key = definition.key, name = definition.name;
    var read = readers[type], write = writers[type] || writers.default;
    return _a = {},
        _a[name] = {
            get: function () {
                var value = this.data.get(key);
                if (value !== null) {
                    return read(value);
                }
                else {
                    return definition.defaultValue;
                }
            },
            set: function (value) {
                if (value === undefined) {
                    this.data.delete(key);
                }
                else {
                    this.data.set(key, write(value));
                }
            }
        },
        _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)] = {
            get: function () {
                return this.data.has(key);
            }
        },
        _a;
}
function parseValueDefinitionPair(_a) {
    var token = _a[0], typeConstant = _a[1];
    var type = parseValueTypeConstant(typeConstant);
    return valueDescriptorForTokenAndType(token, type);
}
function parseValueTypeConstant(typeConstant) {
    switch (typeConstant) {
        case Array: return "array";
        case Boolean: return "boolean";
        case Number: return "number";
        case Object: return "object";
        case String: return "string";
    }
    throw new Error("Unknown value type constant \"" + typeConstant + "\"");
}
function valueDescriptorForTokenAndType(token, type) {
    var key = Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["dasherize"])(token) + "-value";
    return {
        type: type,
        key: key,
        name: Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["camelize"])(key),
        get defaultValue() { return defaultValuesByType[type]; }
    };
}
var defaultValuesByType = {
    get array() { return []; },
    boolean: false,
    number: 0,
    get object() { return {}; },
    string: ""
};
var readers = {
    array: function (value) {
        var array = JSON.parse(value);
        if (!Array.isArray(array)) {
            throw new TypeError("Expected array");
        }
        return array;
    },
    boolean: function (value) {
        return !(value == "0" || value == "false");
    },
    number: function (value) {
        return parseFloat(value);
    },
    object: function (value) {
        var object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) {
            throw new TypeError("Expected object");
        }
        return object;
    },
    string: function (value) {
        return value;
    }
};
var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return "" + value;
}
//# sourceMappingURL=value_properties.js.map

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: IndexedMultimap, Multimap, add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexed_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed_multimap */ "./node_modules/@stimulus/multimap/dist/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _indexed_multimap__WEBPACK_IMPORTED_MODULE_0__["IndexedMultimap"]; });

/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]; });

/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["fetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["prune"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/indexed_multimap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/indexed_multimap.js ***!
  \******************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IndexedMultimap = /** @class */ (function (_super) {
    __extends(IndexedMultimap, _super);
    function IndexedMultimap() {
        var _this = _super.call(this) || this;
        _this.keysByValue = new Map;
        return _this;
    }
    Object.defineProperty(IndexedMultimap.prototype, "values", {
        get: function () {
            return Array.from(this.keysByValue.keys());
        },
        enumerable: false,
        configurable: true
    });
    IndexedMultimap.prototype.add = function (key, value) {
        _super.prototype.add.call(this, key, value);
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.delete = function (key, value) {
        _super.prototype.delete.call(this, key, value);
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.hasValue = function (value) {
        return this.keysByValue.has(value);
    };
    IndexedMultimap.prototype.getKeysForValue = function (value) {
        var set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    };
    return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]));

//# sourceMappingURL=indexed_multimap.js.map

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/multimap.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/multimap.js ***!
  \**********************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");

var Multimap = /** @class */ (function () {
    function Multimap() {
        this.valuesByKey = new Map();
    }
    Object.defineProperty(Multimap.prototype, "values", {
        get: function () {
            var sets = Array.from(this.valuesByKey.values());
            return sets.reduce(function (values, set) { return values.concat(Array.from(set)); }, []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Multimap.prototype, "size", {
        get: function () {
            var sets = Array.from(this.valuesByKey.values());
            return sets.reduce(function (size, set) { return size + set.size; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Multimap.prototype.add = function (key, value) {
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
    };
    Multimap.prototype.delete = function (key, value) {
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
    };
    Multimap.prototype.has = function (key, value) {
        var values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    };
    Multimap.prototype.hasKey = function (key) {
        return this.valuesByKey.has(key);
    };
    Multimap.prototype.hasValue = function (value) {
        var sets = Array.from(this.valuesByKey.values());
        return sets.some(function (set) { return set.has(value); });
    };
    Multimap.prototype.getValuesForKey = function (key) {
        var values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    };
    Multimap.prototype.getKeysForValue = function (value) {
        return Array.from(this.valuesByKey)
            .filter(function (_a) {
            var key = _a[0], values = _a[1];
            return values.has(value);
        })
            .map(function (_a) {
            var key = _a[0], values = _a[1];
            return key;
        });
    };
    return Multimap;
}());

//# sourceMappingURL=multimap.js.map

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/set_operations.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/set_operations.js ***!
  \****************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    var values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    var values = map.get(key);
    if (values != null && values.size == 0) {
        map.delete(key);
    }
}
//# sourceMappingURL=set_operations.js.map

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js ***!
  \******************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js");

var AttributeObserver = /** @class */ (function () {
    function AttributeObserver(element, attributeName, delegate) {
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
    }
    Object.defineProperty(AttributeObserver.prototype, "element", {
        get: function () {
            return this.elementObserver.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AttributeObserver.prototype, "selector", {
        get: function () {
            return "[" + this.attributeName + "]";
        },
        enumerable: false,
        configurable: true
    });
    AttributeObserver.prototype.start = function () {
        this.elementObserver.start();
    };
    AttributeObserver.prototype.stop = function () {
        this.elementObserver.stop();
    };
    AttributeObserver.prototype.refresh = function () {
        this.elementObserver.refresh();
    };
    Object.defineProperty(AttributeObserver.prototype, "started", {
        get: function () {
            return this.elementObserver.started;
        },
        enumerable: false,
        configurable: true
    });
    // Element observer delegate
    AttributeObserver.prototype.matchElement = function (element) {
        return element.hasAttribute(this.attributeName);
    };
    AttributeObserver.prototype.matchElementsInTree = function (tree) {
        var match = this.matchElement(tree) ? [tree] : [];
        var matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    };
    AttributeObserver.prototype.elementMatched = function (element) {
        if (this.delegate.elementMatchedAttribute) {
            this.delegate.elementMatchedAttribute(element, this.attributeName);
        }
    };
    AttributeObserver.prototype.elementUnmatched = function (element) {
        if (this.delegate.elementUnmatchedAttribute) {
            this.delegate.elementUnmatchedAttribute(element, this.attributeName);
        }
    };
    AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
            this.delegate.elementAttributeValueChanged(element, attributeName);
        }
    };
    return AttributeObserver;
}());

//# sourceMappingURL=attribute_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/element_observer.js ***!
  \****************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver = /** @class */ (function () {
    function ElementObserver(element, delegate) {
        var _this = this;
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set;
        this.mutationObserver = new MutationObserver(function (mutations) { return _this.processMutations(mutations); });
    }
    ElementObserver.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, { attributes: true, childList: true, subtree: true });
            this.refresh();
        }
    };
    ElementObserver.prototype.stop = function () {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    };
    ElementObserver.prototype.refresh = function () {
        if (this.started) {
            var matches = new Set(this.matchElementsInTree());
            for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
                var element = _a[_i];
                if (!matches.has(element)) {
                    this.removeElement(element);
                }
            }
            for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
                var element = _c[_b];
                this.addElement(element);
            }
        }
    };
    // Mutation record processing
    ElementObserver.prototype.processMutations = function (mutations) {
        if (this.started) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                this.processMutation(mutation);
            }
        }
    };
    ElementObserver.prototype.processMutation = function (mutation) {
        if (mutation.type == "attributes") {
            this.processAttributeChange(mutation.target, mutation.attributeName);
        }
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    };
    ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
        var element = node;
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
                this.delegate.elementAttributeChanged(element, attributeName);
            }
            else {
                this.removeElement(element);
            }
        }
        else if (this.matchElement(element)) {
            this.addElement(element);
        }
    };
    ElementObserver.prototype.processRemovedNodes = function (nodes) {
        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
            var node = _a[_i];
            var element = this.elementFromNode(node);
            if (element) {
                this.processTree(element, this.removeElement);
            }
        }
    };
    ElementObserver.prototype.processAddedNodes = function (nodes) {
        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
            var node = _a[_i];
            var element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) {
                this.processTree(element, this.addElement);
            }
        }
    };
    // Element matching
    ElementObserver.prototype.matchElement = function (element) {
        return this.delegate.matchElement(element);
    };
    ElementObserver.prototype.matchElementsInTree = function (tree) {
        if (tree === void 0) { tree = this.element; }
        return this.delegate.matchElementsInTree(tree);
    };
    ElementObserver.prototype.processTree = function (tree, processor) {
        for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
            var element = _a[_i];
            processor.call(this, element);
        }
    };
    ElementObserver.prototype.elementFromNode = function (node) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            return node;
        }
    };
    ElementObserver.prototype.elementIsActive = function (element) {
        if (element.isConnected != this.element.isConnected) {
            return false;
        }
        else {
            return this.element.contains(element);
        }
    };
    // Element tracking
    ElementObserver.prototype.addElement = function (element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) {
                    this.delegate.elementMatched(element);
                }
            }
        }
    };
    ElementObserver.prototype.removeElement = function (element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) {
                this.delegate.elementUnmatched(element);
            }
        }
    };
    return ElementObserver;
}());

//# sourceMappingURL=element_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, StringMapObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _string_map_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string_map_observer */ "./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return _string_map_observer__WEBPACK_IMPORTED_MODULE_2__["StringMapObserver"]; });

/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _token_list_observer__WEBPACK_IMPORTED_MODULE_3__["TokenListObserver"]; });

/* harmony import */ var _value_list_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _value_list_observer__WEBPACK_IMPORTED_MODULE_4__["ValueListObserver"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js ***!
  \*******************************************************************************/
/*! exports provided: StringMapObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
var StringMapObserver = /** @class */ (function () {
    function StringMapObserver(element, delegate) {
        var _this = this;
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map;
        this.mutationObserver = new MutationObserver(function (mutations) { return _this.processMutations(mutations); });
    }
    StringMapObserver.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, { attributes: true });
            this.refresh();
        }
    };
    StringMapObserver.prototype.stop = function () {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    };
    StringMapObserver.prototype.refresh = function () {
        if (this.started) {
            for (var _i = 0, _a = this.knownAttributeNames; _i < _a.length; _i++) {
                var attributeName = _a[_i];
                this.refreshAttribute(attributeName);
            }
        }
    };
    // Mutation record processing
    StringMapObserver.prototype.processMutations = function (mutations) {
        if (this.started) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                this.processMutation(mutation);
            }
        }
    };
    StringMapObserver.prototype.processMutation = function (mutation) {
        var attributeName = mutation.attributeName;
        if (attributeName) {
            this.refreshAttribute(attributeName);
        }
    };
    // State tracking
    StringMapObserver.prototype.refreshAttribute = function (attributeName) {
        var key = this.delegate.getStringMapKeyForAttribute(attributeName);
        if (key != null) {
            if (!this.stringMap.has(attributeName)) {
                this.stringMapKeyAdded(key, attributeName);
            }
            var value = this.element.getAttribute(attributeName);
            if (this.stringMap.get(attributeName) != value) {
                this.stringMapValueChanged(value, key);
            }
            if (value == null) {
                this.stringMap.delete(attributeName);
                this.stringMapKeyRemoved(key, attributeName);
            }
            else {
                this.stringMap.set(attributeName, value);
            }
        }
    };
    StringMapObserver.prototype.stringMapKeyAdded = function (key, attributeName) {
        if (this.delegate.stringMapKeyAdded) {
            this.delegate.stringMapKeyAdded(key, attributeName);
        }
    };
    StringMapObserver.prototype.stringMapValueChanged = function (value, key) {
        if (this.delegate.stringMapValueChanged) {
            this.delegate.stringMapValueChanged(value, key);
        }
    };
    StringMapObserver.prototype.stringMapKeyRemoved = function (key, attributeName) {
        if (this.delegate.stringMapKeyRemoved) {
            this.delegate.stringMapKeyRemoved(key, attributeName);
        }
    };
    Object.defineProperty(StringMapObserver.prototype, "knownAttributeNames", {
        get: function () {
            return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringMapObserver.prototype, "currentAttributeNames", {
        get: function () {
            return Array.from(this.element.attributes).map(function (attribute) { return attribute.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringMapObserver.prototype, "recordedAttributeNames", {
        get: function () {
            return Array.from(this.stringMap.keys());
        },
        enumerable: false,
        configurable: true
    });
    return StringMapObserver;
}());

//# sourceMappingURL=string_map_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js ***!
  \*******************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");


var TokenListObserver = /** @class */ (function () {
    function TokenListObserver(element, attributeName, delegate) {
        this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"];
    }
    Object.defineProperty(TokenListObserver.prototype, "started", {
        get: function () {
            return this.attributeObserver.started;
        },
        enumerable: false,
        configurable: true
    });
    TokenListObserver.prototype.start = function () {
        this.attributeObserver.start();
    };
    TokenListObserver.prototype.stop = function () {
        this.attributeObserver.stop();
    };
    TokenListObserver.prototype.refresh = function () {
        this.attributeObserver.refresh();
    };
    Object.defineProperty(TokenListObserver.prototype, "element", {
        get: function () {
            return this.attributeObserver.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenListObserver.prototype, "attributeName", {
        get: function () {
            return this.attributeObserver.attributeName;
        },
        enumerable: false,
        configurable: true
    });
    // Attribute observer delegate
    TokenListObserver.prototype.elementMatchedAttribute = function (element) {
        this.tokensMatched(this.readTokensForElement(element));
    };
    TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
        var _a = this.refreshTokensForElement(element), unmatchedTokens = _a[0], matchedTokens = _a[1];
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    };
    TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    };
    TokenListObserver.prototype.tokensMatched = function (tokens) {
        var _this = this;
        tokens.forEach(function (token) { return _this.tokenMatched(token); });
    };
    TokenListObserver.prototype.tokensUnmatched = function (tokens) {
        var _this = this;
        tokens.forEach(function (token) { return _this.tokenUnmatched(token); });
    };
    TokenListObserver.prototype.tokenMatched = function (token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    };
    TokenListObserver.prototype.tokenUnmatched = function (token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    };
    TokenListObserver.prototype.refreshTokensForElement = function (element) {
        var previousTokens = this.tokensByElement.getValuesForKey(element);
        var currentTokens = this.readTokensForElement(element);
        var firstDifferingIndex = zip(previousTokens, currentTokens)
            .findIndex(function (_a) {
            var previousToken = _a[0], currentToken = _a[1];
            return !tokensAreEqual(previousToken, currentToken);
        });
        if (firstDifferingIndex == -1) {
            return [[], []];
        }
        else {
            return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
        }
    };
    TokenListObserver.prototype.readTokensForElement = function (element) {
        var attributeName = this.attributeName;
        var tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    };
    return TokenListObserver;
}());

function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter(function (content) { return content.length; })
        .map(function (content, index) { return ({ element: element, attributeName: attributeName, content: content, index: index }); });
}
function zip(left, right) {
    var length = Math.max(left.length, right.length);
    return Array.from({ length: length }, function (_, index) { return [left[index], right[index]]; });
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
//# sourceMappingURL=token_list_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js ***!
  \*******************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js");

var ValueListObserver = /** @class */ (function () {
    function ValueListObserver(element, attributeName, delegate) {
        this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
    Object.defineProperty(ValueListObserver.prototype, "started", {
        get: function () {
            return this.tokenListObserver.started;
        },
        enumerable: false,
        configurable: true
    });
    ValueListObserver.prototype.start = function () {
        this.tokenListObserver.start();
    };
    ValueListObserver.prototype.stop = function () {
        this.tokenListObserver.stop();
    };
    ValueListObserver.prototype.refresh = function () {
        this.tokenListObserver.refresh();
    };
    Object.defineProperty(ValueListObserver.prototype, "element", {
        get: function () {
            return this.tokenListObserver.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueListObserver.prototype, "attributeName", {
        get: function () {
            return this.tokenListObserver.attributeName;
        },
        enumerable: false,
        configurable: true
    });
    ValueListObserver.prototype.tokenMatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.tokenUnmatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.fetchParseResultForToken = function (token) {
        var parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    };
    ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
        var valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map;
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    };
    ValueListObserver.prototype.parseToken = function (token) {
        try {
            var value = this.delegate.parseValueForToken(token);
            return { value: value };
        }
        catch (error) {
            return { error: error };
        }
    };
    return ValueListObserver;
}());

//# sourceMappingURL=value_list_observer.js.map

/***/ }),

/***/ "./node_modules/@stimulus/webpack-helpers/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
function definitionsFromContext(context) {
    return context.keys()
        .map(function (key) { return definitionForModuleWithContextAndKey(context, key); })
        .filter(function (value) { return value; });
}
function definitionForModuleWithContextAndKey(context, key) {
    var identifier = identifierForContextKey(key);
    if (identifier) {
        return definitionForModuleAndIdentifier(context(key), identifier);
    }
}
function definitionForModuleAndIdentifier(module, identifier) {
    var controllerConstructor = module.default;
    if (typeof controllerConstructor == "function") {
        return { identifier: identifier, controllerConstructor: controllerConstructor };
    }
}
function identifierForContextKey(key) {
    var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
    if (logicalName) {
        return logicalName.replace(/_/g, "-").replace(/\//g, "--");
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.css":
/*!*************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/dropzone/dist/min/dropzone.min.js":
/*!********************************************************!*\
  !*** ./node_modules/dropzone/dist/min/dropzone.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(i){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(i);if(r){var n=_getPrototypeOf(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Emitter=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var n=arguments.length,i=new Array(1<n?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o,a=_createForOfIteratorHelper(t);try{for(a.s();!(o=a.n()).done;){o.value.apply(this,i)}}catch(e){a.e(e)}finally{a.f()}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var i=0;i<n.length;i++){if(n[i]===t){n.splice(i,1);break}}return this}}]),e}(),Dropzone=function(){_inherits(b,Emitter);var a=_createSuper(b);function b(e,t){var n,i,r;if(_classCallCheck(this,b),(n=a.call(this)).element=e,n.version=b.version,n.defaultOptions.previewTemplate=n.defaultOptions.previewTemplate.replace(/\n*/g,""),n.clickableElements=[],n.listeners=[],n.files=[],"string"==typeof n.element&&(n.element=document.querySelector(n.element)),!n.element||null==n.element.nodeType)throw new Error("Invalid dropzone element.");if(n.element.dropzone)throw new Error("Dropzone already attached.");b.instances.push(_assertThisInitialized(n)),n.element.dropzone=_assertThisInitialized(n);var o=null!=(r=b.optionsForElement(n.element))?r:{};if(n.options=b.extend({},n.defaultOptions,o,null!=t?t:{}),n.options.forceFallback||!b.isBrowserSupported())return _possibleConstructorReturn(n,n.options.fallback.call(_assertThisInitialized(n)));if(null==n.options.url&&(n.options.url=n.element.getAttribute("action")),!n.options.url)throw new Error("No URL provided.");if(n.options.acceptedFiles&&n.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(n.options.uploadMultiple&&n.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return n.options.acceptedMimeTypes&&(n.options.acceptedFiles=n.options.acceptedMimeTypes,delete n.options.acceptedMimeTypes),null!=n.options.renameFilename&&(n.options.renameFile=function(e){return n.options.renameFilename.call(_assertThisInitialized(n),e.name,e)}),"string"==typeof n.options.method&&(n.options.method=n.options.method.toUpperCase()),(i=n.getExistingFallback())&&i.parentNode&&i.parentNode.removeChild(i),!1!==n.options.previewsContainer&&(n.options.previewsContainer?n.previewsContainer=b.getElement(n.options.previewsContainer,"previewsContainer"):n.previewsContainer=n.element),n.options.clickable&&(!0===n.options.clickable?n.clickableElements=[n.element]:n.clickableElements=b.getElements(n.options.clickable,"clickable")),n.init(),n}return _createClass(b,null,[{key:"initClass",value:function(){this.prototype.Emitter=Emitter,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,n){if(n)return{dzuuid:n.file.upload.uuid,dzchunkindex:n.index,dztotalfilesize:n.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:n.file.upload.totalChunkCount,dzchunkbyteoffset:n.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e;this.element.className="".concat(this.element.className," dz-browser-not-supported");var t,n=_createForOfIteratorHelper(this.element.getElementsByTagName("div"));try{for(n.s();!(t=n.n()).done;){var i=t.value;if(/(^| )dz-message($| )/.test(i.className)){(e=i).className="dz-message";break}}}catch(e){n.e(e)}finally{n.f()}e||(e=b.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var r=e.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,n,i){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==n?(t=r.srcWidth,n=r.srcHeight):null==t?t=n*o:null==n&&(n=t/o);var a=(t=Math.min(t,r.srcWidth))/(n=Math.min(n,r.srcHeight));if(r.srcWidth>t||r.srcHeight>n)if("crop"===i)a<o?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*a):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/a);else{if("contain"!==i)throw new Error("Unknown resizeMethod '".concat(i,"'"));a<o?n=t/o:t=n*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=n,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:function(){},dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:function(){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(t){var n=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){t.previewElement=b.createElement(this.options.previewTemplate.trim()),t.previewTemplate=t.previewElement,this.previewsContainer.appendChild(t.previewElement);var e,i=_createForOfIteratorHelper(t.previewElement.querySelectorAll("[data-dz-name]"));try{for(i.s();!(e=i.n()).done;){var r=e.value;r.textContent=t.name}}catch(e){i.e(e)}finally{i.f()}var o,a=_createForOfIteratorHelper(t.previewElement.querySelectorAll("[data-dz-size]"));try{for(a.s();!(o=a.n()).done;)(r=o.value).innerHTML=this.filesize(t.size)}catch(e){a.e(e)}finally{a.f()}this.options.addRemoveLinks&&(t._removeLink=b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile,"</a>")),t.previewElement.appendChild(t._removeLink));var l,s=function(e){return e.preventDefault(),e.stopPropagation(),t.status===b.UPLOADING?b.confirm(n.options.dictCancelUploadConfirmation,function(){return n.removeFile(t)}):n.options.dictRemoveFileConfirmation?b.confirm(n.options.dictRemoveFileConfirmation,function(){return n.removeFile(t)}):n.removeFile(t)},u=_createForOfIteratorHelper(t.previewElement.querySelectorAll("[data-dz-remove]"));try{for(u.s();!(l=u.n()).done;){l.value.addEventListener("click",s)}}catch(e){u.e(e)}finally{u.f()}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");var n,i=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-thumbnail]"));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.alt=e.name,r.src=t}}catch(e){i.e(e)}finally{i.f()}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"string"!=typeof t&&t.error&&(t=t.error);var n,i=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-errormessage]"));try{for(i.s();!(n=i.n()).done;){n.value.textContent=t}}catch(e){i.e(e)}finally{i.f()}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t){if(e.previewElement){var n,i=_createForOfIteratorHelper(e.previewElement.querySelectorAll("[data-dz-uploadprogress]"));try{for(i.s();!(n=i.n()).done;){var r=n.value;"PROGRESS"===r.nodeName?r.value=t:r.style.width="".concat(t,"%")}}catch(e){i.e(e)}finally{i.f()}}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=0,o=n;r<o.length;r++){var a=o[r];for(var l in a){var s=a[l];e[l]=s}}return e}}]),_createClass(b,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(t){return this.files.filter(function(e){return e.status===t}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(b.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(b.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(b.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===b.UPLOADING||e.status===b.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var o=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(b.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage,"</button></div>"))),this.clickableElements.length){!function r(){return o.hiddenFileInput&&o.hiddenFileInput.parentNode.removeChild(o.hiddenFileInput),o.hiddenFileInput=document.createElement("input"),o.hiddenFileInput.setAttribute("type","file"),(null===o.options.maxFiles||1<o.options.maxFiles)&&o.hiddenFileInput.setAttribute("multiple","multiple"),o.hiddenFileInput.className="dz-hidden-input",null!==o.options.acceptedFiles&&o.hiddenFileInput.setAttribute("accept",o.options.acceptedFiles),null!==o.options.capture&&o.hiddenFileInput.setAttribute("capture",o.options.capture),o.hiddenFileInput.style.visibility="hidden",o.hiddenFileInput.style.position="absolute",o.hiddenFileInput.style.top="0",o.hiddenFileInput.style.left="0",o.hiddenFileInput.style.height="0",o.hiddenFileInput.style.width="0",b.getElement(o.options.hiddenInputContainer,"hiddenInputContainer").appendChild(o.hiddenFileInput),o.hiddenFileInput.addEventListener("change",function(){var e=o.hiddenFileInput.files;if(e.length){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;o.addFile(i)}}catch(e){n.e(e)}finally{n.f()}}return o.emit("addedfiles",e),r()})}()}this.URL=null!==window.URL?window.URL:window.webkitURL;var e,t=_createForOfIteratorHelper(this.events);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.on(n,this.options[n])}}catch(e){t.e(e)}finally{t.f()}this.on("uploadprogress",function(){return o.updateTotalUploadProgress()}),this.on("removedfile",function(){return o.updateTotalUploadProgress()}),this.on("canceled",function(e){return o.emit("complete",e)}),this.on("complete",function(e){if(0===o.getAddedFiles().length&&0===o.getUploadingFiles().length&&0===o.getQueuedFiles().length)return setTimeout(function(){return o.emit("queuecomplete")},0)});function i(e){return function(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"===e.dataTransfer.types[t])return!0;return!1}(e)&&(e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1)}return this.listeners=[{element:this.element,events:{dragstart:function(e){return o.emit("dragstart",e)},dragenter:function(e){return i(e),o.emit("dragenter",e)},dragover:function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}return e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",i(e),o.emit("dragover",e)},dragleave:function(e){return o.emit("dragleave",e)},drop:function(e){return i(e),o.drop(e)},dragend:function(e){return o.emit("dragend",e)}}}],this.clickableElements.forEach(function(t){return o.listeners.push({element:t,events:{click:function(e){return t===o.element&&e.target!==o.element&&!b.elementInside(e.target,o.element.querySelector(".dz-message"))||o.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),null!=this.hiddenFileInput&&this.hiddenFileInput.parentNode&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,b.instances.splice(b.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e,t=0,n=0;if(this.getActiveFiles().length){var i,r=_createForOfIteratorHelper(this.getActiveFiles());try{for(r.s();!(i=r.n()).done;){var o=i.value;t+=o.upload.bytesSent,n+=o.upload.total}}catch(e){r.e(e)}finally{r.f()}e=100*t/n}else e=100;return this.emit("totaluploadprogress",e,n,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):"".concat(this.options.paramName).concat(this.options.uploadMultiple?"[".concat(e,"]"):"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t;if(e=this.getExistingFallback())return e;var n='<div class="dz-fallback">';this.options.dictFallbackText&&(n+="<p>".concat(this.options.dictFallbackText,"</p>")),n+='<input type="file" name="'.concat(this._getParamName(0),'" ').concat(this.options.uploadMultiple?'multiple="multiple"':void 0,' /><input type="submit" value="Upload!"></div>');var i=b.createElement(n);return"FORM"!==this.element.tagName?(t=b.createElement('<form action="'.concat(this.options.url,'" enctype="multipart/form-data" method="').concat(this.options.method,'"></form>'))).appendChild(i):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:i}},{key:"getExistingFallback",value:function(){for(var e=function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(/(^| )fallback($| )/.test(i.className))return i}}catch(e){n.e(e)}finally{n.f()}},t=0,n=["div","form"];t<n.length;t++){var i,r=n[t];if(i=e(this.element.getElementsByTagName(r)))return i}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(i){return function(){var e=[];for(var t in i.events){var n=i.events[t];e.push(i.element.addEventListener(t,n,!1))}return e}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(i){return function(){var e=[];for(var t in i.events){var n=i.events[t];e.push(i.element.removeEventListener(t,n,!1))}return e}()})}},{key:"disable",value:function(){var t=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.disabled=!0,this.files.map(function(e){return t.cancelUpload(e)})}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,n="b";if(0<e){for(var i=["tb","gb","mb","kb","b"],r=0;r<i.length;r++){var o=i[r];if(Math.pow(this.options.filesizeBase,4-r)/10<=e){t=e/Math.pow(this.options.filesizeBase,4-r),n=o;break}}t=Math.round(10*t)/10}return"<strong>".concat(t,"</strong> ").concat(this.options.dictFileSizeUnits[n])}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],n=0;n<e.dataTransfer.files.length;n++)t[n]=e.dataTransfer.files[n];if(t.length){var i=e.dataTransfer.items;i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)}this.emit("addedfiles",t)}}},{key:"paste",value:function(e){if(null!=__guard__(null!=e?e.clipboardData:void 0,function(e){return e.items})){this.emit("paste",e);var t=e.clipboardData.items;return t.length?this._addFilesFromItems(t):void 0}}},{key:"handleFiles",value:function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this.addFile(i)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_addFilesFromItems",value:function(o){var a=this;return function(){var e,t=[],n=_createForOfIteratorHelper(o);try{for(n.s();!(e=n.n()).done;){var i,r=e.value;null!=r.webkitGetAsEntry&&(i=r.webkitGetAsEntry())?i.isFile?t.push(a.addFile(r.getAsFile())):i.isDirectory?t.push(a._addFilesFromDirectory(i,i.name)):t.push(void 0):null!=r.getAsFile&&(null==r.kind||"file"===r.kind)?t.push(a.addFile(r.getAsFile())):t.push(void 0)}}catch(e){n.e(e)}finally{n.f()}return t}()}},{key:"_addFilesFromDirectory",value:function(e,o){function t(t){return __guardMethod__(console,"log",function(e){return e.log(t)})}var a=this,n=e.createReader();return function r(){return n.readEntries(function(e){if(0<e.length){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.isFile?i.file(function(e){if(!a.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath="".concat(o,"/").concat(e.name),a.addFile(e)}):i.isDirectory&&a._addFilesFromDirectory(i,"".concat(o,"/").concat(i.name))}}catch(e){n.e(e)}finally{n.f()}r()}return null},t)}()}},{key:"accept",value:function(e,t){this.options.maxFilesize&&e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):b.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(t){var n=this;t.upload={uuid:b.uuidv4(),progress:0,total:t.size,bytesSent:0,filename:this._renameFile(t)},this.files.push(t),t.status=b.ADDED,this.emit("addedfile",t),this._enqueueThumbnail(t),this.accept(t,function(e){e?(t.accepted=!1,n._errorProcessing([t],e)):(t.accepted=!0,n.options.autoQueue&&n.enqueueFile(t)),n._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this.enqueueFile(i)}}catch(e){n.e(e)}finally{n.f()}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==b.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=b.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var t=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var n=this._thumbnailQueue.shift();return this.createThumbnail(n,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(e){return t.emit("thumbnail",n,e),t._processingThumbnail=!1,t._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===b.UPLOADING&&this.cancelUpload(e),this.files=without(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);var t,n=_createForOfIteratorHelper(this.files.slice());try{for(n.s();!(t=n.n()).done;){var i=t.value;i.status===b.UPLOADING&&!e||this.removeFile(i)}}catch(e){n.e(e)}finally{n.f()}return null}},{key:"resizeImage",value:function(r,e,t,n,o){var a=this;return this.createThumbnail(r,e,t,n,!0,function(e,t){if(null==t)return o(r);var n=a.options.resizeMimeType;null==n&&(n=r.type);var i=t.toDataURL(n,a.options.resizeQuality);return"image/jpeg"!==n&&"image/jpg"!==n||(i=ExifRestore.restore(r.dataURL,i)),o(b.dataURItoBlob(i))})}},{key:"createThumbnail",value:function(e,t,n,i,r,o){var a=this,l=new FileReader;l.onload=function(){e.dataURL=l.result,"image/svg+xml"!==e.type?a.createThumbnailFromUrl(e,t,n,i,r,o):null!=o&&o(l.result)},l.readAsDataURL(e)}},{key:"displayExistingFile",value:function(t,e,n,i,r){var o=this,a=!(4<arguments.length&&void 0!==r)||r;if(this.emit("addedfile",t),this.emit("complete",t),a){t.dataURL=e,this.createThumbnailFromUrl(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.resizeMethod,this.options.fixOrientation,function(e){o.emit("thumbnail",t,e),n&&n()},i)}else this.emit("thumbnail",t,e),n&&n()}},{key:"createThumbnailFromUrl",value:function(o,a,l,s,t,u,e){var c=this,d=document.createElement("img");return e&&(d.crossOrigin=e),t="from-image"!=getComputedStyle(document.body).imageOrientation&&t,d.onload=function(){var e=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&t&&(e=function(e){return EXIF.getData(d,function(){return e(EXIF.getTag(this,"Orientation"))})}),e(function(e){o.width=d.width,o.height=d.height;var t=c.options.resize.call(c,o,a,l,s),n=document.createElement("canvas"),i=n.getContext("2d");switch(n.width=t.trgWidth,n.height=t.trgHeight,4<e&&(n.width=t.trgHeight,n.height=t.trgWidth),e){case 2:i.translate(n.width,0),i.scale(-1,1);break;case 3:i.translate(n.width,n.height),i.rotate(Math.PI);break;case 4:i.translate(0,n.height),i.scale(1,-1);break;case 5:i.rotate(.5*Math.PI),i.scale(1,-1);break;case 6:i.rotate(.5*Math.PI),i.translate(0,-n.width);break;case 7:i.rotate(.5*Math.PI),i.translate(n.height,-n.width),i.scale(-1,1);break;case 8:i.rotate(-.5*Math.PI),i.translate(-n.height,0)}drawImageIOSFix(i,d,null!=t.srcX?t.srcX:0,null!=t.srcY?t.srcY:0,t.srcWidth,t.srcHeight,null!=t.trgX?t.trgX:0,null!=t.trgY?t.trgY:0,t.trgWidth,t.trgHeight);var r=n.toDataURL("image/png");if(null!=u)return u(r,n)})},null!=u&&(d.onerror=u),d.src=o.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,n=t;if(!(e<=t)){var i=this.getQueuedFiles();if(0<i.length){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,e-t));for(;n<e;){if(!i.length)return;this.processFile(i.shift()),n++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.processing=!0,i.status=b.UPLOADING,this.emit("processing",i)}}catch(e){n.e(e)}finally{n.f()}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(t){return this.files.filter(function(e){return e.xhr===t}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===b.UPLOADING){var t,n=this._getFilesWithXhr(e.xhr),i=_createForOfIteratorHelper(n);try{for(i.s();!(t=i.n()).done;){t.value.status=b.CANCELED}}catch(e){i.e(e)}finally{i.f()}void 0!==e.xhr&&e.xhr.abort();var r,o=_createForOfIteratorHelper(n);try{for(o.s();!(r=o.n()).done;){var a=r.value;this.emit("canceled",a)}}catch(e){o.e(e)}finally{o.f()}this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else e.status!==b.ADDED&&e.status!==b.QUEUED||(e.status=b.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"!=typeof e)return e;for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.apply(this,n)}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(s){var u=this;this._transformFiles(s,function(e){if(u.options.chunking){var t=e[0];s[0].upload.chunked=u.options.chunking&&(u.options.forceChunking||t.size>u.options.chunkSize),s[0].upload.totalChunkCount=Math.ceil(t.size/u.options.chunkSize)}if(s[0].upload.chunked){var r=s[0],o=e[0];r.upload.chunks=[];var i=function(){for(var e=0;void 0!==r.upload.chunks[e];)e++;if(!(e>=r.upload.totalChunkCount)){0;var t=e*u.options.chunkSize,n=Math.min(t+u.options.chunkSize,o.size),i={name:u._getParamName(0),data:o.webkitSlice?o.webkitSlice(t,n):o.slice(t,n),filename:r.upload.filename,chunkIndex:e};r.upload.chunks[e]={file:r,index:e,dataBlock:i,status:b.UPLOADING,progress:0,retries:0},u._uploadData(s,[i])}};if(r.upload.finishedChunkUpload=function(e){var t=!0;e.status=b.SUCCESS,e.dataBlock=null,e.xhr=null;for(var n=0;n<r.upload.totalChunkCount;n++){if(void 0===r.upload.chunks[n])return i();r.upload.chunks[n].status!==b.SUCCESS&&(t=!1)}t&&u.options.chunksUploaded(r,function(){u._finished(s,"",null)})},u.options.parallelChunkUploads)for(var n=0;n<r.upload.totalChunkCount;n++)i();else i()}else{for(var a=[],l=0;l<s.length;l++)a[l]={name:u._getParamName(l),data:e[l],filename:s[l].upload.filename};u._uploadData(s,a)}})}},{key:"_getChunk",value:function(e,t){for(var n=0;n<e.upload.totalChunkCount;n++)if(void 0!==e.upload.chunks[n]&&e.upload.chunks[n].xhr===t)return e.upload.chunks[n]}},{key:"_uploadData",value:function(t,e){var n,i=this,r=new XMLHttpRequest,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){n.value.xhr=r}}catch(e){o.e(e)}finally{o.f()}t[0].upload.chunked&&(t[0].upload.chunks[e[0].chunkIndex].xhr=r);var a=this.resolveOption(this.options.method,t),l=this.resolveOption(this.options.url,t);r.open(a,l,!0),r.timeout=this.resolveOption(this.options.timeout,t),r.withCredentials=!!this.options.withCredentials,r.onload=function(e){i._finishedUploading(t,r,e)},r.ontimeout=function(){i._handleUploadError(t,r,"Request timedout after ".concat(i.options.timeout/1e3," seconds"))},r.onerror=function(){i._handleUploadError(t,r)},(null!=r.upload?r.upload:r).onprogress=function(e){return i._updateFilesUploadProgress(t,r,e)};var s={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var u in this.options.headers&&b.extend(s,this.options.headers),s){var c=s[u];c&&r.setRequestHeader(u,c)}var d=new FormData;if(this.options.params){var p=this.options.params;for(var h in"function"==typeof p&&(p=p.call(this,t,r,t[0].upload.chunked?this._getChunk(t[0],r):null)),p){var f=p[h];if(Array.isArray(f))for(var m=0;m<f.length;m++)d.append(h,f[m]);else d.append(h,f)}}var v,g=_createForOfIteratorHelper(t);try{for(g.s();!(v=g.n()).done;){var y=v.value;this.emit("sending",y,r,d)}}catch(e){g.e(e)}finally{g.f()}this.options.uploadMultiple&&this.emit("sendingmultiple",t,r,d),this._addFormElementData(d);for(var F=0;F<e.length;F++){var k=e[F];d.append(k.name,k.data,k.filename)}this.submitRequest(r,d,t)}},{key:"_transformFiles",value:function(n,i){for(var e=this,r=[],o=0,t=function(t){e.options.transformFile.call(e,n[t],function(e){r[t]=e,++o===n.length&&i(r)})},a=0;a<n.length;a++)t(a)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName){var t,n=_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"));try{for(n.s();!(t=n.n()).done;){var i=t.value,r=i.getAttribute("name"),o=i.getAttribute("type");if(o=o&&o.toLowerCase(),null!=r)if("SELECT"===i.tagName&&i.hasAttribute("multiple")){var a,l=_createForOfIteratorHelper(i.options);try{for(l.s();!(a=l.n()).done;){var s=a.value;s.selected&&e.append(r,s.value)}}catch(e){l.e(e)}finally{l.f()}}else(!o||"checkbox"!==o&&"radio"!==o||i.checked)&&e.append(r,i.value)}}catch(e){n.e(e)}finally{n.f()}}}},{key:"_updateFilesUploadProgress",value:function(e,t,n){var i;if(void 0!==n){if(i=100*n.loaded/n.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t);o.progress=i,o.total=n.total,o.bytesSent=n.loaded;r.upload.progress=0,r.upload.total=0;for(var a=r.upload.bytesSent=0;a<r.upload.totalChunkCount;a++)void 0!==r.upload.chunks[a]&&void 0!==r.upload.chunks[a].progress&&(r.upload.progress+=r.upload.chunks[a].progress,r.upload.total+=r.upload.chunks[a].total,r.upload.bytesSent+=r.upload.chunks[a].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else{var l,s=_createForOfIteratorHelper(e);try{for(s.s();!(l=s.n()).done;){var u=l.value;u.upload.progress=i,u.upload.total=n.total,u.upload.bytesSent=n.loaded}}catch(e){s.e(e)}finally{s.f()}}var c,d=_createForOfIteratorHelper(e);try{for(d.s();!(c=d.n()).done;){var p=c.value;this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}catch(e){d.e(e)}finally{d.f()}}else{var h=!0;i=100;var f,m=_createForOfIteratorHelper(e);try{for(m.s();!(f=m.n()).done;){var v=f.value;100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=i,v.upload.bytesSent=v.upload.total}}catch(e){m.e(e)}finally{m.f()}if(h)return;var g,y=_createForOfIteratorHelper(e);try{for(y.s();!(g=y.n()).done;){var F=g.value;this.emit("uploadprogress",F,i,F.upload.bytesSent)}}catch(e){y.e(e)}finally{y.f()}}}},{key:"_finishedUploading",value:function(e,t,n){var i;if(e[0].status!==b.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(i=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{i=JSON.parse(i)}catch(e){n=e,i="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,i,n):this._handleUploadError(e,t,i)}}},{key:"_handleUploadError",value:function(e,t,n){if(e[0].status!==b.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var i=this._getChunk(e[0],t);if(i.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[i.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,n||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}},{key:"submitRequest",value:function(e,t){e.send(t)}},{key:"_finished",value:function(e,t,n){var i,r=_createForOfIteratorHelper(e);try{for(r.s();!(i=r.n()).done;){var o=i.value;o.status=b.SUCCESS,this.emit("success",o,t,n),this.emit("complete",o)}}catch(e){r.e(e)}finally{r.f()}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,n){var i,r=_createForOfIteratorHelper(e);try{for(r.s();!(i=r.n()).done;){var o=i.value;o.status=b.ERROR,this.emit("error",o,t,n),this.emit("complete",o)}}catch(e){r.e(e)}finally{r.f()}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),b}();Dropzone.initClass(),Dropzone.version="5.7.2",Dropzone.options={},Dropzone.optionsForElement=function(e){return e.getAttribute("id")?Dropzone.options[camelize(e.getAttribute("id"))]:void 0},Dropzone.instances=[],Dropzone.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},Dropzone.autoDiscover=!0,Dropzone.discover=function(){var o;if(document.querySelectorAll)o=document.querySelectorAll(".dropzone");else{o=[];var e=function(r){return function(){var e,t=[],n=_createForOfIteratorHelper(r);try{for(n.s();!(e=n.n()).done;){var i=e.value;/(^| )dropzone($| )/.test(i.className)?t.push(o.push(i)):t.push(void 0)}}catch(e){n.e(e)}finally{n.f()}return t}()};e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))}return function(){var e,t=[],n=_createForOfIteratorHelper(o);try{for(n.s();!(e=n.n()).done;){var i=e.value;!1!==Dropzone.optionsForElement(i)?t.push(new Dropzone(i)):t.push(void 0)}}catch(e){n.e(e)}finally{n.f()}return t}()},Dropzone.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],Dropzone.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a")){var t,n=_createForOfIteratorHelper(Dropzone.blacklistedBrowsers);try{for(n.s();!(t=n.n()).done;){t.value.test(navigator.userAgent)&&(e=!1)}}catch(e){n.e(e)}finally{n.f()}}else e=!1;else e=!1;return e},Dropzone.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),r=new Uint8Array(i),o=0,a=t.length,l=0<=a;l?o<=a:a<=o;l?o++:o--)r[o]=t.charCodeAt(o);return new Blob([i],{type:n})};var without=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},camelize=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};Dropzone.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},Dropzone.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},Dropzone.getElement=function(e,t){var n;if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector or a plain HTML element."));return n},Dropzone.getElements=function(e,t){var n,i;if(e instanceof Array){i=[];try{var r,o=_createForOfIteratorHelper(e);try{for(o.s();!(r=o.n()).done;)n=r.value,i.push(this.getElement(n,t))}catch(e){o.e(e)}finally{o.f()}}catch(e){i=null}}else if("string"==typeof e){i=[];var a,l=_createForOfIteratorHelper(document.querySelectorAll(e));try{for(l.s();!(a=l.n()).done;)n=a.value,i.push(n)}catch(e){l.e(e)}finally{l.f()}}else null!=e.nodeType&&(i=[e]);if(null==i||!i.length)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));return i},Dropzone.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},Dropzone.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");var n,i=e.type,r=i.replace(/\/.*$/,""),o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;if("."===(a=a.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(a.toLowerCase(),e.name.length-a.length))return!0}else if(/\/\*$/.test(a)){if(r===a.replace(/\/.*$/,""))return!0}else if(i===a)return!0}}catch(e){o.e(e)}finally{o.f()}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new Dropzone(this,e)})}), true&&null!==module?module.exports=Dropzone:window.Dropzone=Dropzone,Dropzone.ADDED="added",Dropzone.QUEUED="queued",Dropzone.ACCEPTED=Dropzone.QUEUED,Dropzone.UPLOADING="uploading",Dropzone.PROCESSING=Dropzone.UPLOADING,Dropzone.CANCELED="canceled",Dropzone.ERROR="error",Dropzone.SUCCESS="success";var detectVerticalSquash=function(e){e.naturalWidth;var t=e.naturalHeight,n=document.createElement("canvas");n.width=1,n.height=t;var i=n.getContext("2d");i.drawImage(e,0,0);for(var r=i.getImageData(1,0,1,t).data,o=0,a=t,l=t;o<l;){0===r[4*(l-1)+3]?a=l:o=l,l=a+o>>1}var s=l/t;return 0==s?1:s},drawImageIOSFix=function(e,t,n,i,r,o,a,l,s,u){var c=detectVerticalSquash(t);return e.drawImage(t,n,i,r,o,a,l,s,u/c)},ExifRestore=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",n=void 0,i=void 0,r="",o=void 0,a=void 0,l=void 0,s="",u=0;o=(n=e[u++])>>2,a=(3&n)<<4|(i=e[u++])>>4,l=(15&i)<<2|(r=e[u++])>>6,s=63&r,isNaN(i)?l=s=64:isNaN(r)&&(s=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l)+this.KEY_STR.charAt(s),n=i=r="",o=a=l=s="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var n=this.decode64(e.replace("data:image/jpeg;base64,","")),i=this.slice2Segments(n),r=this.exifManipulation(t,i);return"data:image/jpeg;base64,".concat(this.encode64(r))}},{key:"exifManipulation",value:function(e,t){var n=this.getExifArray(t),i=this.insertExif(e,n);return new Uint8Array(i)}},{key:"getExifArray",value:function(e){for(var t=void 0,n=0;n<e.length;){if(255===(t=e[n])[0]&225===t[1])return t;n++}return[]}},{key:"insertExif",value:function(e,t){var n=e.replace("data:image/jpeg;base64,",""),i=this.decode64(n),r=i.indexOf(255,3),o=i.slice(0,r),a=i.slice(r),l=o;return l=(l=l.concat(t)).concat(a)}},{key:"slice2Segments",value:function(e){for(var t=0,n=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var i=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,i);n.push(r),t=i}if(t>e.length)break}return n}},{key:"decode64",value:function(e){var t=void 0,n=void 0,i="",r=void 0,o=void 0,a="",l=0,s=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(l++))<<2|(r=this.KEY_STR.indexOf(e.charAt(l++)))>>4,n=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(l++)))>>2,i=(3&o)<<6|(a=this.KEY_STR.indexOf(e.charAt(l++))),s.push(t),64!==o&&s.push(n),64!==a&&s.push(i),t=n=i="",r=o=a="",l<e.length;);return s}}]),e}();ExifRestore.initClass();var contentLoaded=function(t,n){function i(e){if("readystatechange"!==e.type||"complete"===o.readyState)return("load"===e.type?t:o)[s](u+e.type,i,!1),!r&&(r=!0)?n.call(t,e.type||e):void 0}var r=!1,e=!0,o=t.document,a=o.documentElement,l=o.addEventListener?"addEventListener":"attachEvent",s=o.addEventListener?"removeEventListener":"detachEvent",u=o.addEventListener?"":"on";if("complete"!==o.readyState){if(o.createEventObject&&a.doScroll){try{e=!t.frameElement}catch(e){}e&&!function t(){try{a.doScroll("left")}catch(e){return void setTimeout(t,50)}return i("poll")}()}return o[l](u+"DOMContentLoaded",i,!1),o[l](u+"readystatechange",i,!1),t[l](u+"load",i,!1)}};function __guard__(e,t){return null!=e?t(e):void 0}function __guardMethod__(e,t,n){return null!=e&&"function"==typeof e[t]?n(e,t):void 0}Dropzone._autoDiscoverFunction=function(){if(Dropzone.autoDiscover)return Dropzone.discover()},contentLoaded(window,Dropzone._autoDiscoverFunction);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {

  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();
window.MicroModal = MicroModal;

/* harmony default export */ __webpack_exports__["default"] = (MicroModal);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });




/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/webpack-helpers */ "./node_modules/@stimulus/webpack-helpers/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });




/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY2xpZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29udHJvbGxlcnMgc3luYyBcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL2Nob29zZV9tZWRpYV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb250cm9sbGVycy9nYWxsZXJ5X21vZGFsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL21lZGlhX2Ryb3B6b25lX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL21lZGlhX3RpbnltY2VfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvbWVkaWEuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvYWN0aW9uX2Rlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvYmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9iaW5kaW5nX29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L2JsZXNzaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L2NsYXNzX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9jbGFzc19wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9kYXRhX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvZXZlbnRfbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvZ3VpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvaW5oZXJpdGFibGVfc3RhdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3Qvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zY29wZV9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3Qvc3RyaW5nX2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvdGFyZ2V0X3Byb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvdGFyZ2V0X3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC92YWx1ZV9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC92YWx1ZV9wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXVsdGltYXAvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211bHRpbWFwL2Rpc3QvaW5kZXhlZF9tdWx0aW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211bHRpbWFwL2Rpc3QvbXVsdGltYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9tdWx0aW1hcC9kaXN0L3NldF9vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXV0YXRpb24tb2JzZXJ2ZXJzL2Rpc3QvYXR0cmlidXRlX29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXV0YXRpb24tb2JzZXJ2ZXJzL2Rpc3QvZWxlbWVudF9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211dGF0aW9uLW9ic2VydmVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXV0YXRpb24tb2JzZXJ2ZXJzL2Rpc3Qvc3RyaW5nX21hcF9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211dGF0aW9uLW9ic2VydmVycy9kaXN0L3Rva2VuX2xpc3Rfb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9tdXRhdGlvbi1vYnNlcnZlcnMvZGlzdC92YWx1ZV9saXN0X29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvd2VicGFjay1oZWxwZXJzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJvcHpvbmUvZGlzdC9taW4vZHJvcHpvbmUubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdGltdWx1cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RpbXVsdXMvd2VicGFjay1oZWxwZXJzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJDbGllbnQiLCJ1cmwiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGVyIiwiTG9hZGVyIiwic2hvdyIsImNsaWVudCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImhpZGUiLCJmb3JFYWNoIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiZGF0YSIsInNlbGVjdG9yIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJFcnJvciIsIm91dGVySFRNTCIsInJlbW92ZSIsIk1vZGFsIiwiY29udGVudFVybCIsImxvYWRlclNlbGVjdG9yIiwiY29udGVudFNlbGVjdG9yIiwib3BlbiIsImxvYWRlclRhcmdldCIsImxvYWQiLCJNaWNyb01vZGFsIiwiY2xvc2UiLCJjaGVja2VkIiwiZGlzcGxheVBhcnRzIiwiZXZlbnQiLCJzb3VyY2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwidGFyZ2V0Q29udGFpbmVyIiwidmFsdWUiLCJnYWxsZXJ5IiwiY29udGFpbmVyU2VsZWN0b3IiLCJ0YXJnZXRDb250ZW50Q29udGFpbmVyIiwiY29udGFpbmVyIiwicG9zdCIsImFjdGlvbiIsIkZvcm1EYXRhIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsIkNvbnRyb2xsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaHJlZiIsIm1lZGlhSWQiLCJ0YXJnZXRJbnB1dCIsIndpbmRvdyIsIkRyb3B6b25lIiwicmVxdWlyZSIsImF1dG9Ecm9wem9uZSIsImlucHV0IiwiaWQiLCJkcm9wem9uZSIsInBhcmFtTmFtZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0dXAiLCJlZGl0b3IiLCJ1aSIsInJlZ2lzdHJ5IiwiYWRkQnV0dG9uIiwidGV4dCIsImFkZE1lZGlhVGV4dCIsImljb24iLCJvbkFjdGlvbiIsImFkZE1lZGlhVXJsIiwiYWRkTWVkaWFHYWxsZXJ5VGV4dCIsImFkZEdhbGxlcnlVcmwiLCJhcHBsaWNhdGlvbiIsIkFwcGxpY2F0aW9uIiwic3RhcnQiLCJjb250ZXh0IiwiZGVmaW5pdGlvbnNGcm9tQ29udGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVDOzs7Ozs7Ozs7Ozs7QUNqSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ2tCO0FBQ25CLG1DOzs7Ozs7Ozs7Ozs7QUM3R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNFO0FBQzZCO0FBQ2pFO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZEQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNxQjtBQUN0QixzQzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ3dCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEM7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZ0I7QUFDakIsaUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNSO0FBQ007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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEs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QTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7OztBQ3hiMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7Ozs7Ozs7Ozs7Ozs7QUNBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDOzs7Ozs7Ozs7Ozs7QUNBekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVuZGxlcy9qa21lZGlhL2Fzc2V0cy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvbWVkaWEuanNcIik7XG4iLCJpbXBvcnQgY2xpZW50IGZyb20gJ2F4aW9zJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHN0YXRpYyBnZXQodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yOiBudWxsXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcih7XG4gICAgICAgICAgICB0YXJnZXRTZWxlY3Rvcjogb3B0aW9ucy50YXJnZXRTZWxlY3RvclxuICAgICAgICB9KVxuICAgICAgICBsb2FkZXIuc2hvdygpO1xuXG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0KHVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNtZWRpYS1sb2FkZXInLFxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3I6IG51bGxcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLnNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbG9hZGVyIGVsZW1lbnQgXCInICsgdGhpcy5vcHRpb25zLnNlbGVjdG9yICsgJ1wiIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLnRhcmdldFNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZWxlbWVudC5zZWxlY3RvciwgbG9hZGVyID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNsaWVudCBmcm9tICdheGlvcyc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tIFwibWljcm9tb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgY29udGVudFVybDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRlclNlbGVjdG9yOiAnI21lZGlhLWxvYWRlcicsXG4gICAgICAgICAgICBjb250ZW50U2VsZWN0b3I6ICcubW9kYWxfX2NvbnRhaW5lcidcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGVsZW1lbnQgXCIjJyArIHNlbGVjdG9yICsgJ1wiIGRvZXMgbm90IGV4aXN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93KSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZGVyU2VsZWN0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRlbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubG9hZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgY29uc3QgbG9hZGVyVGFyZ2V0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmNvbnRlbnRTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGlmIChsb2FkZXIgJiYgbG9hZGVyVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyVGFyZ2V0LmlubmVySFRNTCA9IGxvYWRlci5vdXRlckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50LmdldCh0aGlzLm9wdGlvbnMuY29udGVudFVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuY29udGVudFNlbGVjdG9yKS5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRVcmwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLnNlbGVjdG9yLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBNaWNyb01vZGFsLmNsb3NlKHRoaXMuc2VsZWN0b3IpO1xuICAgIH1cbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jaG9vc2VfbWVkaWFfY29udHJvbGxlci5qc1wiOiBcIi4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL2Nob29zZV9tZWRpYV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9nYWxsZXJ5X21vZGFsX2NvbnRyb2xsZXIuanNcIjogXCIuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9nYWxsZXJ5X21vZGFsX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL21lZGlhX2Ryb3B6b25lX2NvbnRyb2xsZXIuanNcIjogXCIuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9tZWRpYV9kcm9wem9uZV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tZWRpYV90aW55bWNlX2NvbnRyb2xsZXIuanNcIjogXCIuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9tZWRpYV90aW55bWNlX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvanMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuaW1wb3J0IGNsaWVudCBmcm9tICdheGlvcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhcmdldC1jb250YWluZXJdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlQYXJ0cyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzcGxheShldmVudCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlQYXJ0cyhldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIGRpc3BsYXlQYXJ0cyhzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWRpYS1jb2xsYXBzZScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBzb3VyY2UuZGF0YXNldC50YXJnZXRDb250YWluZXI7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdGFyZ2V0IGVsZW1lbnQgXCInICsgdGFyZ2V0U2VsZWN0b3IgKyAnXCIgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuXG4gICAgICAgIGlmIChzb3VyY2UudmFsdWUgPT09ICdnYWxsZXJ5Jykge1xuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5KHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYWxsZXJ5KHNvdXJjZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXJTZWxlY3RvciA9IHNvdXJjZS5kYXRhc2V0LnRhcmdldENvbnRlbnRDb250YWluZXI7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0YXJnZXQgZWxlbWVudCBcIicgKyBjb250YWluZXJTZWxlY3RvciArICdcIiBkb2VzIG5vdCBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lZGlhLWxvYWRlcicpLm91dGVySFRNTDtcbiAgICAgICAgY29uc3QgdXJsID0gc291cmNlLmRhdGFzZXQudXJsO1xuXG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGhlIG1lZGlhIGdhbGxlcnkgZGF0YS11cmwgYXR0cmlidXRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50LmdldCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1Ym1pdChldmVudCkge1xuICAgICAgICBjbGllbnQucG9zdCh0aGlzLmVsZW1lbnQuYWN0aW9uLCBuZXcgRm9ybURhdGEodGhpcy5lbGVtZW50KSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndGlueW1jZS1pbnNlcnQtY29udGVudCcsIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIChuZXcgTW9kYWwoJ21lZGlhLW1vZGFsJykpLmNsb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vdXRlckhUTUwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub3V0ZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNlbGVjdG9yID0gdGhpcy5lbGVtZW50LmRhdGFzZXQudGFyZ2V0Q29udGFpbmVyO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1lZGlhIGdhbGxlcnkgY29udGFpbmVyICcgKyBjb250YWluZXJTZWxlY3RvciArICcgZG9lcyBub3QgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdpbmF0aW9uIGEnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBDbGllbnQuZ2V0KGVsZW1lbnQuaHJlZiwge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvcjogY29udGFpbmVyU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB9KS50aGVuKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdChldmVudCkge1xuICAgICAgICBjb25zdCBtZWRpYUlkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQubWVkaWFJZDtcblxuICAgICAgICBpZiAoIW1lZGlhSWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGF0dHJpYnV0ZSBtZWRpYUlkIGlzIG1pc3Npbmcgb24gdGhlIGdhbGxlcnkgZWxlbWVudCcpXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmVsZW1lbnQuZGF0YXNldC50YXJnZXRJbnB1dCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBtZWRpYUlkO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeS1zaG93LWxpbmsnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeS1zaG93LWxpbmsnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCAnZHJvcHpvbmUvZGlzdC9kcm9wem9uZS5jc3MnO1xuLy9jb25zdCBEcm9wem9uZSA9IHJlcXVpcmUoJ2Ryb3B6b25lL2Rpc3QvZHJvcHpvbmUtYW1kLW1vZHVsZScpO1xud2luZG93LkRyb3B6b25lID0gcmVxdWlyZSgnZHJvcHpvbmUvZGlzdC9taW4vZHJvcHpvbmUubWluJyk7XG5Ecm9wem9uZS5vcHRpb25zLmF1dG9Ecm9wem9uZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XG5cbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbnB1dCBvZiB0eXBlIFwiZmlsZVwiIGZvdW5kIGluIHRoZSBkcm9wem9uZSBcIicgKyB0aGlzLmVsZW1lbnQuaWQgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3B6b25lID0gbmV3IERyb3B6b25lKCcjJyArIHRoaXMuZWxlbWVudC5pZCwge1xuICAgICAgICAgICAgcGFyYW1OYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgdXJsOiB0aGlzLmVsZW1lbnQuZGF0YXNldC51cmxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcm9wem9uZScsIHRoaXMuZHJvcHpvbmUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSBcInN0aW11bHVzXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGlueW1jZS1pbml0aWFsaXplJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuZGV0YWlsLnNldHVwID0gZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgICAgIGVkaXRvci51aS5yZWdpc3RyeS5hZGRCdXR0b24oJ2FkZF9tZWRpYScsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YXNldC5hZGRNZWRpYVRleHQsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTW9kYWwoJ21lZGlhLW1vZGFsJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRVcmw6IGRhdGFzZXQuYWRkTWVkaWFVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZEJ1dHRvbignYWRkX21lZGlhX2dhbGxlcnknLCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGFzZXQuYWRkTWVkaWFHYWxsZXJ5VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNb2RhbCgnbWVkaWEtbW9kYWwnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFVybDogZGF0YXNldC5hZGRHYWxsZXJ5VXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi9zY3NzL21lZGlhLnNjc3MnO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwic3RpbXVsdXNcIjtcbmltcG9ydCB7IGRlZmluaXRpb25zRnJvbUNvbnRleHQgfSBmcm9tIFwic3RpbXVsdXMvd2VicGFjay1oZWxwZXJzXCI7XG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gQXBwbGljYXRpb24uc3RhcnQoKTtcbmNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCIuL2NvbnRyb2xsZXJzXCIsIHRydWUsIC9cXC5qcyQvKTtcbmFwcGxpY2F0aW9uLmxvYWQoZGVmaW5pdGlvbnNGcm9tQ29udGV4dChjb250ZXh0KSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBwYXJzZUFjdGlvbkRlc2NyaXB0b3JTdHJpbmcsIHN0cmluZ2lmeUV2ZW50VGFyZ2V0IH0gZnJvbSBcIi4vYWN0aW9uX2Rlc2NyaXB0b3JcIjtcbnZhciBBY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWN0aW9uKGVsZW1lbnQsIGluZGV4LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IGRlc2NyaXB0b3IuZXZlbnRUYXJnZXQgfHwgZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBkZXNjcmlwdG9yLmV2ZW50TmFtZSB8fCBnZXREZWZhdWx0RXZlbnROYW1lRm9yRWxlbWVudChlbGVtZW50KSB8fCBlcnJvcihcIm1pc3NpbmcgZXZlbnQgbmFtZVwiKTtcbiAgICAgICAgdGhpcy5ldmVudE9wdGlvbnMgPSBkZXNjcmlwdG9yLmV2ZW50T3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gZGVzY3JpcHRvci5pZGVudGlmaWVyIHx8IGVycm9yKFwibWlzc2luZyBpZGVudGlmaWVyXCIpO1xuICAgICAgICB0aGlzLm1ldGhvZE5hbWUgPSBkZXNjcmlwdG9yLm1ldGhvZE5hbWUgfHwgZXJyb3IoXCJtaXNzaW5nIG1ldGhvZCBuYW1lXCIpO1xuICAgIH1cbiAgICBBY3Rpb24uZm9yVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHRva2VuLmVsZW1lbnQsIHRva2VuLmluZGV4LCBwYXJzZUFjdGlvbkRlc2NyaXB0b3JTdHJpbmcodG9rZW4uY29udGVudCkpO1xuICAgIH07XG4gICAgQWN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZVN1ZmZpeCA9IHRoaXMuZXZlbnRUYXJnZXROYW1lID8gXCJAXCIgKyB0aGlzLmV2ZW50VGFyZ2V0TmFtZSA6IFwiXCI7XG4gICAgICAgIHJldHVybiBcIlwiICsgdGhpcy5ldmVudE5hbWUgKyBldmVudE5hbWVTdWZmaXggKyBcIi0+XCIgKyB0aGlzLmlkZW50aWZpZXIgKyBcIiNcIiArIHRoaXMubWV0aG9kTmFtZTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBY3Rpb24ucHJvdG90eXBlLCBcImV2ZW50VGFyZ2V0TmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmeUV2ZW50VGFyZ2V0KHRoaXMuZXZlbnRUYXJnZXQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBBY3Rpb24gfTtcbnZhciBkZWZhdWx0RXZlbnROYW1lcyA9IHtcbiAgICBcImFcIjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIFwiY2xpY2tcIjsgfSxcbiAgICBcImJ1dHRvblwiOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gXCJjbGlja1wiOyB9LFxuICAgIFwiZm9ybVwiOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gXCJzdWJtaXRcIjsgfSxcbiAgICBcImlucHV0XCI6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT0gXCJzdWJtaXRcIiA/IFwiY2xpY2tcIiA6IFwiaW5wdXRcIjsgfSxcbiAgICBcInNlbGVjdFwiOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gXCJjaGFuZ2VcIjsgfSxcbiAgICBcInRleHRhcmVhXCI6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBcImlucHV0XCI7IH1cbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEV2ZW50TmFtZUZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHZhciB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRhZ05hbWUgaW4gZGVmYXVsdEV2ZW50TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRFdmVudE5hbWVzW3RhZ05hbWVdKGVsZW1lbnQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb24uanMubWFwIiwiLy8gY2FwdHVyZSBub3MuOiAgICAgICAgICAgIDEyICAgMjMgNCAgICAgICAgICAgICAgIDQzICAgMSA1ICAgNTYgNyAgICAgIDc2OCA5ICA5OFxudmFyIGRlc2NyaXB0b3JQYXR0ZXJuID0gL14oKC4rPykoQCh3aW5kb3d8ZG9jdW1lbnQpKT8tPik/KC4rPykoIyhbXjpdKz8pKSg6KC4rKSk/JC87XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBY3Rpb25EZXNjcmlwdG9yU3RyaW5nKGRlc2NyaXB0b3JTdHJpbmcpIHtcbiAgICB2YXIgc291cmNlID0gZGVzY3JpcHRvclN0cmluZy50cmltKCk7XG4gICAgdmFyIG1hdGNoZXMgPSBzb3VyY2UubWF0Y2goZGVzY3JpcHRvclBhdHRlcm4pIHx8IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50VGFyZ2V0OiBwYXJzZUV2ZW50VGFyZ2V0KG1hdGNoZXNbNF0pLFxuICAgICAgICBldmVudE5hbWU6IG1hdGNoZXNbMl0sXG4gICAgICAgIGV2ZW50T3B0aW9uczogbWF0Y2hlc1s5XSA/IHBhcnNlRXZlbnRPcHRpb25zKG1hdGNoZXNbOV0pIDoge30sXG4gICAgICAgIGlkZW50aWZpZXI6IG1hdGNoZXNbNV0sXG4gICAgICAgIG1ldGhvZE5hbWU6IG1hdGNoZXNbN11cbiAgICB9O1xufVxuZnVuY3Rpb24gcGFyc2VFdmVudFRhcmdldChldmVudFRhcmdldE5hbWUpIHtcbiAgICBpZiAoZXZlbnRUYXJnZXROYW1lID09IFwid2luZG93XCIpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRUYXJnZXROYW1lID09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2VFdmVudE9wdGlvbnMoZXZlbnRPcHRpb25zKSB7XG4gICAgcmV0dXJuIGV2ZW50T3B0aW9ucy5zcGxpdChcIjpcIikucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zLCB0b2tlbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9wdGlvbnMsIChfYSA9IHt9LCBfYVt0b2tlbi5yZXBsYWNlKC9eIS8sIFwiXCIpXSA9ICEvXiEvLnRlc3QodG9rZW4pLCBfYSkpO1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlFdmVudFRhcmdldChldmVudFRhcmdldCkge1xuICAgIGlmIChldmVudFRhcmdldCA9PSB3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIFwid2luZG93XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50VGFyZ2V0ID09IGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBcImRvY3VtZW50XCI7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWN0aW9uX2Rlc2NyaXB0b3IuanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuaW1wb3J0IHsgRGlzcGF0Y2hlciB9IGZyb20gXCIuL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IHsgZGVmYXVsdFNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xudmFyIEFwcGxpY2F0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwcGxpY2F0aW9uKGVsZW1lbnQsIHNjaGVtYSkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7IGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IH1cbiAgICAgICAgaWYgKHNjaGVtYSA9PT0gdm9pZCAwKSB7IHNjaGVtYSA9IGRlZmF1bHRTY2hlbWE7IH1cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIodGhpcyk7XG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcih0aGlzKTtcbiAgICB9XG4gICAgQXBwbGljYXRpb24uc3RhcnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgc2NoZW1hKSB7XG4gICAgICAgIHZhciBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbihlbGVtZW50LCBzY2hlbWEpO1xuICAgICAgICBhcHBsaWNhdGlvbi5zdGFydCgpO1xuICAgICAgICByZXR1cm4gYXBwbGljYXRpb247XG4gICAgfTtcbiAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZG9tUmVhZHkoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgQXBwbGljYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGlkZW50aWZpZXIsIGNvbnRyb2xsZXJDb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLmxvYWQoeyBpZGVudGlmaWVyOiBpZGVudGlmaWVyLCBjb250cm9sbGVyQ29uc3RydWN0b3I6IGNvbnRyb2xsZXJDb25zdHJ1Y3RvciB9KTtcbiAgICB9O1xuICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGhlYWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmluaXRpb25zID0gQXJyYXkuaXNBcnJheShoZWFkKSA/IGhlYWQgOiBfX3NwcmVhZEFycmF5cyhbaGVhZF0sIHJlc3QpO1xuICAgICAgICBkZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBfdGhpcy5yb3V0ZXIubG9hZERlZmluaXRpb24oZGVmaW5pdGlvbik7IH0pO1xuICAgIH07XG4gICAgQXBwbGljYXRpb24ucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uIChoZWFkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICByZXN0W19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZGVudGlmaWVycyA9IEFycmF5LmlzQXJyYXkoaGVhZCkgPyBoZWFkIDogX19zcHJlYWRBcnJheXMoW2hlYWRdLCByZXN0KTtcbiAgICAgICAgaWRlbnRpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoaWRlbnRpZmllcikgeyByZXR1cm4gX3RoaXMucm91dGVyLnVubG9hZElkZW50aWZpZXIoaWRlbnRpZmllcik7IH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcGxpY2F0aW9uLnByb3RvdHlwZSwgXCJjb250cm9sbGVyc1wiLCB7XG4gICAgICAgIC8vIENvbnRyb2xsZXJzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNvbnRleHRzLm1hcChmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gY29udGV4dC5jb250cm9sbGVyOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5nZXRDb250cm9sbGVyRm9yRWxlbWVudEFuZElkZW50aWZpZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMucm91dGVyLmdldENvbnRleHRGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPyBjb250ZXh0LmNvbnRyb2xsZXIgOiBudWxsO1xuICAgIH07XG4gICAgLy8gRXJyb3IgaGFuZGxpbmdcbiAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIiVzXFxuXFxuJW9cXG5cXG4lb1wiLCBtZXNzYWdlLCBlcnJvciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHBsaWNhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBBcHBsaWNhdGlvbiB9O1xuZnVuY3Rpb24gZG9tUmVhZHkoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwbGljYXRpb24uanMubWFwIiwidmFyIEJpbmRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZyhjb250ZXh0LCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCaW5kaW5nLnByb3RvdHlwZSwgXCJpbmRleFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLmluZGV4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcImV2ZW50VGFyZ2V0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnRUYXJnZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZy5wcm90b3R5cGUsIFwiZXZlbnRPcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnRPcHRpb25zO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcImlkZW50aWZpZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWRlbnRpZmllcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJpbmRpbmcucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLndpbGxCZUludm9rZWRCeUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5pbnZva2VXaXRoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZy5wcm90b3R5cGUsIFwiZXZlbnROYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcIm1ldGhvZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMuY29udHJvbGxlclt0aGlzLm1ldGhvZE5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGlvbiBcXFwiXCIgKyB0aGlzLmFjdGlvbiArIFwiXFxcIiByZWZlcmVuY2VzIHVuZGVmaW5lZCBtZXRob2QgXFxcIlwiICsgdGhpcy5tZXRob2ROYW1lICsgXCJcXFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmluZGluZy5wcm90b3R5cGUuaW52b2tlV2l0aEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZC5jYWxsKHRoaXMuY29udHJvbGxlciwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgaWRlbnRpZmllciA9IF9hLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIgPSBfYS5jb250cm9sbGVyLCBlbGVtZW50ID0gX2EuZWxlbWVudCwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSB7IGlkZW50aWZpZXI6IGlkZW50aWZpZXIsIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsIGVsZW1lbnQ6IGVsZW1lbnQsIGluZGV4OiBpbmRleCwgZXZlbnQ6IGV2ZW50IH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuaGFuZGxlRXJyb3IoZXJyb3IsIFwiaW52b2tpbmcgYWN0aW9uIFxcXCJcIiArIHRoaXMuYWN0aW9uICsgXCJcXFwiXCIsIGRldGFpbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJpbmRpbmcucHJvdG90eXBlLndpbGxCZUludm9rZWRCeUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCA9PT0gZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50VGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5jb250YWluc0VsZW1lbnQoZXZlbnRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuY29udGFpbnNFbGVtZW50KHRoaXMuYWN0aW9uLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZy5wcm90b3R5cGUsIFwiY29udHJvbGxlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jb250cm9sbGVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcIm1ldGhvZE5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5tZXRob2ROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcImVsZW1lbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZy5wcm90b3R5cGUsIFwic2NvcGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQmluZGluZztcbn0oKSk7XG5leHBvcnQgeyBCaW5kaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5kaW5nLmpzLm1hcCIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCIuL2FjdGlvblwiO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gXCIuL2JpbmRpbmdcIjtcbmltcG9ydCB7IFZhbHVlTGlzdE9ic2VydmVyIH0gZnJvbSBcIkBzdGltdWx1cy9tdXRhdGlvbi1vYnNlcnZlcnNcIjtcbnZhciBCaW5kaW5nT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZ09ic2VydmVyKGNvbnRleHQsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5iaW5kaW5nc0J5QWN0aW9uID0gbmV3IE1hcDtcbiAgICB9XG4gICAgQmluZGluZ09ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlTGlzdE9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyID0gbmV3IFZhbHVlTGlzdE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5hY3Rpb25BdHRyaWJ1dGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlTGlzdE9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0b3AoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlTGlzdE9ic2VydmVyO1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0QWxsQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZ09ic2VydmVyLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZ09ic2VydmVyLnByb3RvdHlwZSwgXCJpZGVudGlmaWVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlkZW50aWZpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZ09ic2VydmVyLnByb3RvdHlwZSwgXCJhY3Rpb25BdHRyaWJ1dGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5hY3Rpb25BdHRyaWJ1dGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZ09ic2VydmVyLnByb3RvdHlwZSwgXCJzY2hlbWFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NoZW1hO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUsIFwiYmluZGluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuYmluZGluZ3NCeUFjdGlvbi52YWx1ZXMoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLmNvbm5lY3RBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5jb250ZXh0LCBhY3Rpb24pO1xuICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uc2V0KGFjdGlvbiwgYmluZGluZyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZ2V0KGFjdGlvbik7XG4gICAgICAgIGlmIChiaW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZGVsZXRlKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmJpbmRpbmdEaXNjb25uZWN0ZWQoYmluZGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdEFsbEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChmdW5jdGlvbiAoYmluZGluZykgeyByZXR1cm4gX3RoaXMuZGVsZWdhdGUuYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nKTsgfSk7XG4gICAgICAgIHRoaXMuYmluZGluZ3NCeUFjdGlvbi5jbGVhcigpO1xuICAgIH07XG4gICAgLy8gVmFsdWUgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICBCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLnBhcnNlVmFsdWVGb3JUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB2YXIgYWN0aW9uID0gQWN0aW9uLmZvclRva2VuKHRva2VuKTtcbiAgICAgICAgaWYgKGFjdGlvbi5pZGVudGlmaWVyID09IHRoaXMuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmluZGluZ09ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50TWF0Y2hlZFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3RBY3Rpb24oYWN0aW9uKTtcbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuZWxlbWVudFVubWF0Y2hlZFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBY3Rpb24oYWN0aW9uKTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgQmluZGluZ09ic2VydmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5kaW5nX29ic2VydmVyLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5pbXBvcnQgeyByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyB9IGZyb20gXCIuL2luaGVyaXRhYmxlX3N0YXRpY3NcIjtcbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZnVuY3Rpb24gYmxlc3MoY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gc2hhZG93KGNvbnN0cnVjdG9yLCBnZXRCbGVzc2VkUHJvcGVydGllcyhjb25zdHJ1Y3RvcikpO1xufVxuZnVuY3Rpb24gc2hhZG93KGNvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHNoYWRvd0NvbnN0cnVjdG9yID0gZXh0ZW5kKGNvbnN0cnVjdG9yKTtcbiAgICB2YXIgc2hhZG93UHJvcGVydGllcyA9IGdldFNoYWRvd1Byb3BlcnRpZXMoY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wZXJ0aWVzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzaGFkb3dDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHNoYWRvd1Byb3BlcnRpZXMpO1xuICAgIHJldHVybiBzaGFkb3dDb25zdHJ1Y3Rvcjtcbn1cbmZ1bmN0aW9uIGdldEJsZXNzZWRQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yKSB7XG4gICAgdmFyIGJsZXNzaW5ncyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcImJsZXNzaW5nc1wiKTtcbiAgICByZXR1cm4gYmxlc3NpbmdzLnJlZHVjZShmdW5jdGlvbiAoYmxlc3NlZFByb3BlcnRpZXMsIGJsZXNzaW5nKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxlc3NpbmcoY29uc3RydWN0b3IpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBibGVzc2VkUHJvcGVydGllc1trZXldIHx8IHt9O1xuICAgICAgICAgICAgYmxlc3NlZFByb3BlcnRpZXNba2V5XSA9IE9iamVjdC5hc3NpZ24oZGVzY3JpcHRvciwgcHJvcGVydGllc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxlc3NlZFByb3BlcnRpZXM7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0U2hhZG93UHJvcGVydGllcyhwcm90b3R5cGUsIHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gZ2V0T3duS2V5cyhwcm9wZXJ0aWVzKS5yZWR1Y2UoZnVuY3Rpb24gKHNoYWRvd1Byb3BlcnRpZXMsIGtleSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0U2hhZG93ZWREZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcGVydGllcywga2V5KTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2hhZG93UHJvcGVydGllcywgKF9hID0ge30sIF9hW2tleV0gPSBkZXNjcmlwdG9yLCBfYSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dQcm9wZXJ0aWVzO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldFNoYWRvd2VkRGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3BlcnRpZXMsIGtleSkge1xuICAgIHZhciBzaGFkb3dpbmdEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgdmFyIHNoYWRvd2VkQnlWYWx1ZSA9IHNoYWRvd2luZ0Rlc2NyaXB0b3IgJiYgXCJ2YWx1ZVwiIGluIHNoYWRvd2luZ0Rlc2NyaXB0b3I7XG4gICAgaWYgKCFzaGFkb3dlZEJ5VmFsdWUpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIGtleSkudmFsdWU7XG4gICAgICAgIGlmIChzaGFkb3dpbmdEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9IHNoYWRvd2luZ0Rlc2NyaXB0b3IuZ2V0IHx8IGRlc2NyaXB0b3IuZ2V0O1xuICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSBzaGFkb3dpbmdEZXNjcmlwdG9yLnNldCB8fCBkZXNjcmlwdG9yLnNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9XG59XG52YXIgZ2V0T3duS2V5cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gX19zcHJlYWRBcnJheXMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSwgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpKTsgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgICB9XG59KSgpO1xudmFyIGV4dGVuZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZXh0ZW5kV2l0aFJlZmxlY3QoY29uc3RydWN0b3IpIHtcbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kZWQoKSB7XG4gICAgICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMgJiYgdGhpcyBpbnN0YW5jZW9mIGV4dGVuZGVkID8gdGhpcy5jb25zdHJ1Y3RvciA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmNvbnN0cnVjdChjb25zdHJ1Y3RvciwgYXJndW1lbnRzLCBfbmV3VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbmRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IGV4dGVuZGVkIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YoZXh0ZW5kZWQsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZGVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmVmbGVjdEV4dGVuc2lvbigpIHtcbiAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiAoKSB7IHRoaXMuYS5jYWxsKHRoaXMpOyB9O1xuICAgICAgICB2YXIgYiA9IGV4dGVuZFdpdGhSZWZsZWN0KGEpO1xuICAgICAgICBiLnByb3RvdHlwZS5hID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICByZXR1cm4gbmV3IGI7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHRlc3RSZWZsZWN0RXh0ZW5zaW9uKCk7XG4gICAgICAgIHJldHVybiBleHRlbmRXaXRoUmVmbGVjdDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHsgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgICAgIF9fZXh0ZW5kcyhleHRlbmRlZCwgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGV4dGVuZGVkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICAgICAgfShjb25zdHJ1Y3RvcikpOyB9O1xuICAgIH1cbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibGVzc2luZy5qcy5tYXAiLCJ2YXIgQ2xhc3NNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xhc3NNYXAoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBDbGFzc01hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYXModGhpcy5nZXREYXRhS2V5KG5hbWUpKTtcbiAgICB9O1xuICAgIENsYXNzTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldCh0aGlzLmdldERhdGFLZXkobmFtZSkpO1xuICAgIH07XG4gICAgQ2xhc3NNYXAucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkodGhpcy5nZXREYXRhS2V5KG5hbWUpKTtcbiAgICB9O1xuICAgIENsYXNzTWFwLnByb3RvdHlwZS5nZXREYXRhS2V5ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgKyBcIi1jbGFzc1wiO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXNzTWFwLnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENsYXNzTWFwO1xufSgpKTtcbmV4cG9ydCB7IENsYXNzTWFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGFzc19tYXAuanMubWFwIiwiaW1wb3J0IHsgcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMgfSBmcm9tIFwiLi9pbmhlcml0YWJsZV9zdGF0aWNzXCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSBcIi4vc3RyaW5nX2hlbHBlcnNcIjtcbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZnVuY3Rpb24gQ2xhc3NQcm9wZXJ0aWVzQmxlc3NpbmcoY29uc3RydWN0b3IpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcImNsYXNzZXNcIik7XG4gICAgcmV0dXJuIGNsYXNzZXMucmVkdWNlKGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBjbGFzc0RlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgcHJvcGVydGllc0ZvckNsYXNzRGVmaW5pdGlvbihjbGFzc0RlZmluaXRpb24pKTtcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0aWVzRm9yQ2xhc3NEZWZpbml0aW9uKGtleSkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgbmFtZSA9IGtleSArIFwiQ2xhc3NcIjtcbiAgICByZXR1cm4gX2EgPSB7fSxcbiAgICAgICAgX2FbbmFtZV0gPSB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3Nlcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3Nlcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGUgPSBjbGFzc2VzLmdldEF0dHJpYnV0ZU5hbWUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhdHRyaWJ1dGUgXFxcIlwiICsgYXR0cmlidXRlICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJoYXNcIiArIGNhcGl0YWxpemUobmFtZSldID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5oYXMoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2E7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGFzc19wcm9wZXJ0aWVzLmpzLm1hcCIsImltcG9ydCB7IEJpbmRpbmdPYnNlcnZlciB9IGZyb20gXCIuL2JpbmRpbmdfb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IFZhbHVlT2JzZXJ2ZXIgfSBmcm9tIFwiLi92YWx1ZV9vYnNlcnZlclwiO1xudmFyIENvbnRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udGV4dChtb2R1bGUsIHNjb3BlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBtb2R1bGUuY29udHJvbGxlckNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLmJpbmRpbmdPYnNlcnZlciA9IG5ldyBCaW5kaW5nT2JzZXJ2ZXIodGhpcywgdGhpcy5kaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy52YWx1ZU9ic2VydmVyID0gbmV3IFZhbHVlT2JzZXJ2ZXIodGhpcywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBcImluaXRpYWxpemluZyBjb250cm9sbGVyXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRleHQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ09ic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMudmFsdWVPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIFwiY29ubmVjdGluZyBjb250cm9sbGVyXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb250ZXh0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIFwiZGlzY29ubmVjdGluZyBjb250cm9sbGVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWVPYnNlcnZlci5zdG9wKCk7XG4gICAgICAgIHRoaXMuYmluZGluZ09ic2VydmVyLnN0b3AoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250ZXh0LnByb3RvdHlwZSwgXCJhcHBsaWNhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmFwcGxpY2F0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRleHQucHJvdG90eXBlLCBcImlkZW50aWZpZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5pZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRleHQucHJvdG90eXBlLCBcInNjaGVtYVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uc2NoZW1hO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRleHQucHJvdG90eXBlLCBcImRpc3BhdGNoZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmRpc3BhdGNoZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGV4dC5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250ZXh0LnByb3RvdHlwZSwgXCJwYXJlbnRFbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBFcnJvciBoYW5kbGluZ1xuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcbiAgICAgICAgaWYgKGRldGFpbCA9PT0gdm9pZCAwKSB7IGRldGFpbCA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGlkZW50aWZpZXIgPSBfYS5pZGVudGlmaWVyLCBjb250cm9sbGVyID0gX2EuY29udHJvbGxlciwgZWxlbWVudCA9IF9hLmVsZW1lbnQ7XG4gICAgICAgIGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBpZGVudGlmaWVyOiBpZGVudGlmaWVyLCBjb250cm9sbGVyOiBjb250cm9sbGVyLCBlbGVtZW50OiBlbGVtZW50IH0sIGRldGFpbCk7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uaGFuZGxlRXJyb3IoZXJyb3IsIFwiRXJyb3IgXCIgKyBtZXNzYWdlLCBkZXRhaWwpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRleHQ7XG59KCkpO1xuZXhwb3J0IHsgQ29udGV4dCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC5qcy5tYXAiLCJpbXBvcnQgeyBDbGFzc1Byb3BlcnRpZXNCbGVzc2luZyB9IGZyb20gXCIuL2NsYXNzX3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IFRhcmdldFByb3BlcnRpZXNCbGVzc2luZyB9IGZyb20gXCIuL3RhcmdldF9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBWYWx1ZVByb3BlcnRpZXNCbGVzc2luZyB9IGZyb20gXCIuL3ZhbHVlX3Byb3BlcnRpZXNcIjtcbnZhciBDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbGxlci5wcm90b3R5cGUsIFwiYXBwbGljYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuYXBwbGljYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbGxlci5wcm90b3R5cGUsIFwic2NvcGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbGxlci5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sbGVyLnByb3RvdHlwZSwgXCJpZGVudGlmaWVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5pZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRyb2xsZXIucHJvdG90eXBlLCBcInRhcmdldHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnRhcmdldHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbGxlci5wcm90b3R5cGUsIFwiY2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuY2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sbGVyLnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgaW4geW91ciBzdWJjbGFzcyB0byBzZXQgdXAgaW5pdGlhbCBjb250cm9sbGVyIHN0YXRlXG4gICAgfTtcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBPdmVycmlkZSBpbiB5b3VyIHN1YmNsYXNzIHRvIHJlc3BvbmQgd2hlbiB0aGUgY29udHJvbGxlciBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgIH07XG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgaW4geW91ciBzdWJjbGFzcyB0byByZXNwb25kIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIERPTVxuICAgIH07XG4gICAgQ29udHJvbGxlci5ibGVzc2luZ3MgPSBbQ2xhc3NQcm9wZXJ0aWVzQmxlc3NpbmcsIFRhcmdldFByb3BlcnRpZXNCbGVzc2luZywgVmFsdWVQcm9wZXJ0aWVzQmxlc3NpbmddO1xuICAgIENvbnRyb2xsZXIudGFyZ2V0cyA9IFtdO1xuICAgIENvbnRyb2xsZXIudmFsdWVzID0ge307XG4gICAgcmV0dXJuIENvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgQ29udHJvbGxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udHJvbGxlci5qcy5tYXAiLCJpbXBvcnQgeyBkYXNoZXJpemUgfSBmcm9tIFwiLi9zdHJpbmdfaGVscGVyc1wiO1xudmFyIERhdGFNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF0YU1hcChzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEYXRhTWFwLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERhdGFNYXAucHJvdG90eXBlLCBcImlkZW50aWZpZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBEYXRhTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH07XG4gICAgRGF0YU1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH07XG4gICAgRGF0YU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZUZvcktleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTtcbiAgICB9O1xuICAgIERhdGFNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZV8xKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRhTWFwLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gXCJkYXRhLVwiICsgdGhpcy5pZGVudGlmaWVyICsgXCItXCIgKyBkYXNoZXJpemUoa2V5KTtcbiAgICB9O1xuICAgIHJldHVybiBEYXRhTWFwO1xufSgpKTtcbmV4cG9ydCB7IERhdGFNYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFfbWFwLmpzLm1hcCIsImltcG9ydCB7IGJsZXNzIH0gZnJvbSBcIi4vYmxlc3NpbmdcIjtcbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZnVuY3Rpb24gYmxlc3NEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZGVudGlmaWVyOiBkZWZpbml0aW9uLmlkZW50aWZpZXIsXG4gICAgICAgIGNvbnRyb2xsZXJDb25zdHJ1Y3RvcjogYmxlc3MoZGVmaW5pdGlvbi5jb250cm9sbGVyQ29uc3RydWN0b3IpXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmluaXRpb24uanMubWFwIiwiaW1wb3J0IHsgRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2V2ZW50X2xpc3RlbmVyXCI7XG52YXIgRGlzcGF0Y2hlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXNwYXRjaGVyKGFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyTWFwcyA9IG5ldyBNYXA7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TGlzdGVuZXIpIHsgcmV0dXJuIGV2ZW50TGlzdGVuZXIuY29ubmVjdCgpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TGlzdGVuZXIpIHsgcmV0dXJuIGV2ZW50TGlzdGVuZXIuZGlzY29ubmVjdCgpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERpc3BhdGNoZXIucHJvdG90eXBlLCBcImV2ZW50TGlzdGVuZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmV2ZW50TGlzdGVuZXJNYXBzLnZhbHVlcygpKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGxpc3RlbmVycywgbWFwKSB7IHJldHVybiBsaXN0ZW5lcnMuY29uY2F0KEFycmF5LmZyb20obWFwLnZhbHVlcygpKSk7IH0sIFtdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIEJpbmRpbmcgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmRpbmdDb25uZWN0ZWQgPSBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lckZvckJpbmRpbmcoYmluZGluZykuYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICB9O1xuICAgIC8qKiBAaGlkZGVuICovXG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuYmluZGluZ0Rpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hFdmVudExpc3RlbmVyRm9yQmluZGluZyhiaW5kaW5nKS5iaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcpO1xuICAgIH07XG4gICAgLy8gRXJyb3IgaGFuZGxpbmdcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgbWVzc2FnZSwgZGV0YWlsKSB7XG4gICAgICAgIGlmIChkZXRhaWwgPT09IHZvaWQgMCkgeyBkZXRhaWwgPSB7fTsgfVxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmhhbmRsZUVycm9yKGVycm9yLCBcIkVycm9yIFwiICsgbWVzc2FnZSwgZGV0YWlsKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmZldGNoRXZlbnRMaXN0ZW5lckZvckJpbmRpbmcgPSBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBiaW5kaW5nLmV2ZW50VGFyZ2V0LCBldmVudE5hbWUgPSBiaW5kaW5nLmV2ZW50TmFtZSwgZXZlbnRPcHRpb25zID0gYmluZGluZy5ldmVudE9wdGlvbnM7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZmV0Y2hFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucykge1xuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lck1hcCA9IHRoaXMuZmV0Y2hFdmVudExpc3RlbmVyTWFwRm9yRXZlbnRUYXJnZXQoZXZlbnRUYXJnZXQpO1xuICAgICAgICB2YXIgY2FjaGVLZXkgPSB0aGlzLmNhY2hlS2V5KGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcbiAgICAgICAgdmFyIGV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVyTWFwLmdldChjYWNoZUtleSk7XG4gICAgICAgIGlmICghZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lck1hcC5zZXQoY2FjaGVLZXksIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY3JlYXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGV2ZW50TGlzdGVuZXIgPSBuZXcgRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmZldGNoRXZlbnRMaXN0ZW5lck1hcEZvckV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIHZhciBldmVudExpc3RlbmVyTWFwID0gdGhpcy5ldmVudExpc3RlbmVyTWFwcy5nZXQoZXZlbnRUYXJnZXQpO1xuICAgICAgICBpZiAoIWV2ZW50TGlzdGVuZXJNYXApIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJNYXAgPSBuZXcgTWFwO1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyTWFwcy5zZXQoZXZlbnRUYXJnZXQsIGV2ZW50TGlzdGVuZXJNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyTWFwO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY2FjaGVLZXkgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gW2V2ZW50TmFtZV07XG4gICAgICAgIE9iamVjdC5rZXlzKGV2ZW50T3B0aW9ucykuc29ydCgpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcGFydHMucHVzaChcIlwiICsgKGV2ZW50T3B0aW9uc1trZXldID8gXCJcIiA6IFwiIVwiKSArIGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIjpcIik7XG4gICAgfTtcbiAgICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0oKSk7XG5leHBvcnQgeyBEaXNwYXRjaGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXNwYXRjaGVyLmpzLm1hcCIsInZhciBFdmVudExpc3RlbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBldmVudFRhcmdldDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgIHRoaXMuZXZlbnRPcHRpb25zID0gZXZlbnRPcHRpb25zO1xuICAgICAgICB0aGlzLnVub3JkZXJlZEJpbmRpbmdzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBFdmVudExpc3RlbmVyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMsIHRoaXMuZXZlbnRPcHRpb25zKTtcbiAgICB9O1xuICAgIEV2ZW50TGlzdGVuZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcywgdGhpcy5ldmVudE9wdGlvbnMpO1xuICAgIH07XG4gICAgLy8gQmluZGluZyBvYnNlcnZlciBkZWxlZ2F0ZVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgRXZlbnRMaXN0ZW5lci5wcm90b3R5cGUuYmluZGluZ0Nvbm5lY3RlZCA9IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMudW5vcmRlcmVkQmluZGluZ3MuYWRkKGJpbmRpbmcpO1xuICAgIH07XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBFdmVudExpc3RlbmVyLnByb3RvdHlwZS5iaW5kaW5nRGlzY29ubmVjdGVkID0gZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy51bm9yZGVyZWRCaW5kaW5ncy5kZWxldGUoYmluZGluZyk7XG4gICAgfTtcbiAgICBFdmVudExpc3RlbmVyLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXh0ZW5kZWRFdmVudCA9IGV4dGVuZEV2ZW50KGV2ZW50KTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuYmluZGluZ3M7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmluZGluZyA9IF9hW19pXTtcbiAgICAgICAgICAgIGlmIChleHRlbmRlZEV2ZW50LmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5oYW5kbGVFdmVudChleHRlbmRlZEV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50TGlzdGVuZXIucHJvdG90eXBlLCBcImJpbmRpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVub3JkZXJlZEJpbmRpbmdzKS5zb3J0KGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0SW5kZXggPSBsZWZ0LmluZGV4LCByaWdodEluZGV4ID0gcmlnaHQuaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRJbmRleCA8IHJpZ2h0SW5kZXggPyAtMSA6IGxlZnRJbmRleCA+IHJpZ2h0SW5kZXggPyAxIDogMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEV2ZW50TGlzdGVuZXI7XG59KCkpO1xuZXhwb3J0IHsgRXZlbnRMaXN0ZW5lciB9O1xuZnVuY3Rpb24gZXh0ZW5kRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoXCJpbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWRcIiBpbiBldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXzEgPSBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGV2ZW50LCB7XG4gICAgICAgICAgICBpbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbl8xLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50X2xpc3RlbmVyLmpzLm1hcCIsInZhciBHdWlkZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHdWlkZShsb2dnZXIpIHtcbiAgICAgICAgdGhpcy53YXJuZWRLZXlzQnlPYmplY3QgPSBuZXcgV2Vha01hcDtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIEd1aWRlLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciB3YXJuZWRLZXlzID0gdGhpcy53YXJuZWRLZXlzQnlPYmplY3QuZ2V0KG9iamVjdCk7XG4gICAgICAgIGlmICghd2FybmVkS2V5cykge1xuICAgICAgICAgICAgd2FybmVkS2V5cyA9IG5ldyBTZXQ7XG4gICAgICAgICAgICB0aGlzLndhcm5lZEtleXNCeU9iamVjdC5zZXQob2JqZWN0LCB3YXJuZWRLZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhcm5lZEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHdhcm5lZEtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKG1lc3NhZ2UsIG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBHdWlkZTtcbn0oKSk7XG5leHBvcnQgeyBHdWlkZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VpZGUuanMubWFwIiwiZXhwb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiLi9hcHBsaWNhdGlvblwiO1xuZXhwb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmV4cG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0U2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBhbmNlc3RvcnMgPSBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYW5jZXN0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsdWVzLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBnZXRPd25TdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgcHJvcGVydHlOYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiB2YWx1ZXMuYWRkKG5hbWUpOyB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9LCBuZXcgU2V0KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVhZEluaGVyaXRhYmxlU3RhdGljT2JqZWN0UGFpcnMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBhbmNlc3RvcnMgPSBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGFuY2VzdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHBhaXJzLCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBwYWlycy5wdXNoLmFwcGx5KHBhaXJzLCBnZXRPd25TdGF0aWNPYmplY3RQYWlycyhjb25zdHJ1Y3RvciwgcHJvcGVydHlOYW1lKSk7XG4gICAgICAgIHJldHVybiBwYWlycztcbiAgICB9LCBbXSk7XG59XG5mdW5jdGlvbiBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHZhciBhbmNlc3RvcnMgPSBbXTtcbiAgICB3aGlsZSAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgYW5jZXN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgICAgICBjb25zdHJ1Y3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBhbmNlc3RvcnMucmV2ZXJzZSgpO1xufVxuZnVuY3Rpb24gZ2V0T3duU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBkZWZpbml0aW9uID0gY29uc3RydWN0b3JbcHJvcGVydHlOYW1lXTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSA/IGRlZmluaXRpb24gOiBbXTtcbn1cbmZ1bmN0aW9uIGdldE93blN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IGNvbnN0cnVjdG9yW3Byb3BlcnR5TmFtZV07XG4gICAgcmV0dXJuIGRlZmluaXRpb24gPyBPYmplY3Qua2V5cyhkZWZpbml0aW9uKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgZGVmaW5pdGlvbltrZXldXTsgfSkgOiBbXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaGVyaXRhYmxlX3N0YXRpY3MuanMubWFwIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IGJsZXNzRGVmaW5pdGlvbiB9IGZyb20gXCIuL2RlZmluaXRpb25cIjtcbnZhciBNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kdWxlKGFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gYmxlc3NEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgICAgICB0aGlzLmNvbnRleHRzQnlTY29wZSA9IG5ldyBXZWFrTWFwO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENvbnRleHRzID0gbmV3IFNldDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZHVsZS5wcm90b3R5cGUsIFwiaWRlbnRpZmllclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5pZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZHVsZS5wcm90b3R5cGUsIFwiY29udHJvbGxlckNvbnN0cnVjdG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2R1bGUucHJvdG90eXBlLCBcImNvbnRleHRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNvbm5lY3RlZENvbnRleHRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1vZHVsZS5wcm90b3R5cGUuY29ubmVjdENvbnRleHRGb3JTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZmV0Y2hDb250ZXh0Rm9yU2NvcGUoc2NvcGUpO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENvbnRleHRzLmFkZChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5jb25uZWN0KCk7XG4gICAgfTtcbiAgICBNb2R1bGUucHJvdG90eXBlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRzQnlTY29wZS5nZXQoc2NvcGUpO1xuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDb250ZXh0cy5kZWxldGUoY29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9kdWxlLnByb3RvdHlwZS5mZXRjaENvbnRleHRGb3JTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dHNCeVNjb3BlLmdldChzY29wZSk7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMsIHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNCeVNjb3BlLnNldChzY29wZSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IE1vZHVsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gXCIuL21vZHVsZVwiO1xuaW1wb3J0IHsgTXVsdGltYXAgfSBmcm9tIFwiQHN0aW11bHVzL211bHRpbWFwXCI7XG5pbXBvcnQgeyBTY29wZSB9IGZyb20gXCIuL3Njb3BlXCI7XG5pbXBvcnQgeyBTY29wZU9ic2VydmVyIH0gZnJvbSBcIi4vc2NvcGVfb2JzZXJ2ZXJcIjtcbnZhciBSb3V0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGVyKGFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5zY29wZU9ic2VydmVyID0gbmV3IFNjb3BlT2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLnNjaGVtYSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyID0gbmV3IE11bHRpbWFwO1xuICAgICAgICB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIgPSBuZXcgTWFwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm91dGVyLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5lbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJvdXRlci5wcm90b3R5cGUsIFwic2NoZW1hXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zY2hlbWE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm91dGVyLnByb3RvdHlwZSwgXCJsb2dnZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmxvZ2dlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSb3V0ZXIucHJvdG90eXBlLCBcImNvbnRyb2xsZXJBdHRyaWJ1dGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb250cm9sbGVyQXR0cmlidXRlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJvdXRlci5wcm90b3R5cGUsIFwibW9kdWxlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLnZhbHVlcygpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSb3V0ZXIucHJvdG90eXBlLCBcImNvbnRleHRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAoY29udGV4dHMsIG1vZHVsZSkgeyByZXR1cm4gY29udGV4dHMuY29uY2F0KG1vZHVsZS5jb250ZXh0cyk7IH0sIFtdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJvdXRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYnNlcnZlci5zdGFydCgpO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3BlT2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5sb2FkRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIHRoaXMudW5sb2FkSWRlbnRpZmllcihkZWZpbml0aW9uLmlkZW50aWZpZXIpO1xuICAgICAgICB2YXIgbW9kdWxlID0gbmV3IE1vZHVsZSh0aGlzLmFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0TW9kdWxlKG1vZHVsZSk7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnVubG9hZElkZW50aWZpZXIgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xuICAgICAgICB2YXIgbW9kdWxlID0gdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLmdldChpZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0TW9kdWxlKG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlci5wcm90b3R5cGUuZ2V0Q29udGV4dEZvckVsZW1lbnRBbmRJZGVudGlmaWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuY29udGV4dHMuZmluZChmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gY29udGV4dC5lbGVtZW50ID09IGVsZW1lbnQ7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBFcnJvciBoYW5kbGVyIGRlbGVnYXRlXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5oYW5kbGVFcnJvcihlcnJvciwgbWVzc2FnZSwgZGV0YWlsKTtcbiAgICB9O1xuICAgIC8vIFNjb3BlIG9ic2VydmVyIGRlbGVnYXRlXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLmNyZWF0ZVNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gbmV3IFNjb3BlKHRoaXMuc2NoZW1hLCBlbGVtZW50LCBpZGVudGlmaWVyLCB0aGlzLmxvZ2dlcik7XG4gICAgfTtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIFJvdXRlci5wcm90b3R5cGUuc2NvcGVDb25uZWN0ZWQgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXIuYWRkKHNjb3BlLmlkZW50aWZpZXIsIHNjb3BlKTtcbiAgICAgICAgdmFyIG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoc2NvcGUuaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIG1vZHVsZS5jb25uZWN0Q29udGV4dEZvclNjb3BlKHNjb3BlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLnNjb3BlRGlzY29ubmVjdGVkID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmRlbGV0ZShzY29wZS5pZGVudGlmaWVyLCBzY29wZSk7XG4gICAgICAgIHZhciBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KHNjb3BlLmlkZW50aWZpZXIpO1xuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGUuZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIE1vZHVsZXNcbiAgICBSb3V0ZXIucHJvdG90eXBlLmNvbm5lY3RNb2R1bGUgPSBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5zZXQobW9kdWxlLmlkZW50aWZpZXIsIG1vZHVsZSk7XG4gICAgICAgIHZhciBzY29wZXMgPSB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5nZXRWYWx1ZXNGb3JLZXkobW9kdWxlLmlkZW50aWZpZXIpO1xuICAgICAgICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbiAoc2NvcGUpIHsgcmV0dXJuIG1vZHVsZS5jb25uZWN0Q29udGV4dEZvclNjb3BlKHNjb3BlKTsgfSk7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RNb2R1bGUgPSBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5kZWxldGUobW9kdWxlLmlkZW50aWZpZXIpO1xuICAgICAgICB2YXIgc2NvcGVzID0gdGhpcy5zY29wZXNCeUlkZW50aWZpZXIuZ2V0VmFsdWVzRm9yS2V5KG1vZHVsZS5pZGVudGlmaWVyKTtcbiAgICAgICAgc2NvcGVzLmZvckVhY2goZnVuY3Rpb24gKHNjb3BlKSB7IHJldHVybiBtb2R1bGUuZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFJvdXRlcjtcbn0oKSk7XG5leHBvcnQgeyBSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJleHBvcnQgdmFyIGRlZmF1bHRTY2hlbWEgPSB7XG4gICAgY29udHJvbGxlckF0dHJpYnV0ZTogXCJkYXRhLWNvbnRyb2xsZXJcIixcbiAgICBhY3Rpb25BdHRyaWJ1dGU6IFwiZGF0YS1hY3Rpb25cIixcbiAgICB0YXJnZXRBdHRyaWJ1dGU6IFwiZGF0YS10YXJnZXRcIlxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVtYS5qcy5tYXAiLCJ2YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbmltcG9ydCB7IENsYXNzTWFwIH0gZnJvbSBcIi4vY2xhc3NfbWFwXCI7XG5pbXBvcnQgeyBEYXRhTWFwIH0gZnJvbSBcIi4vZGF0YV9tYXBcIjtcbmltcG9ydCB7IEd1aWRlIH0gZnJvbSBcIi4vZ3VpZGVcIjtcbmltcG9ydCB7IGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbiB9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgVGFyZ2V0U2V0IH0gZnJvbSBcIi4vdGFyZ2V0X3NldFwiO1xudmFyIFNjb3BlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjb3BlKHNjaGVtYSwgZWxlbWVudCwgaWRlbnRpZmllciwgbG9nZ2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IG5ldyBUYXJnZXRTZXQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IG5ldyBDbGFzc01hcCh0aGlzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGFNYXAodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGFpbnNFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoX3RoaXMuY29udHJvbGxlclNlbGVjdG9yKSA9PT0gX3RoaXMuZWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgICAgIHRoaXMuZ3VpZGUgPSBuZXcgR3VpZGUobG9nZ2VyKTtcbiAgICB9XG4gICAgU2NvcGUucHJvdG90eXBlLmZpbmRFbGVtZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcilcbiAgICAgICAgICAgID8gdGhpcy5lbGVtZW50XG4gICAgICAgICAgICA6IHRoaXMucXVlcnlFbGVtZW50cyhzZWxlY3RvcikuZmluZCh0aGlzLmNvbnRhaW5zRWxlbWVudCk7XG4gICAgfTtcbiAgICBTY29wZS5wcm90b3R5cGUuZmluZEFsbEVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyh0aGlzLmVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgPyBbdGhpcy5lbGVtZW50XSA6IFtdLCB0aGlzLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpLmZpbHRlcih0aGlzLmNvbnRhaW5zRWxlbWVudCkpO1xuICAgIH07XG4gICAgU2NvcGUucHJvdG90eXBlLnF1ZXJ5RWxlbWVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY29wZS5wcm90b3R5cGUsIFwiY29udHJvbGxlclNlbGVjdG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGUsIHRoaXMuaWRlbnRpZmllcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2NvcGU7XG59KCkpO1xuZXhwb3J0IHsgU2NvcGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjb3BlLmpzLm1hcCIsImltcG9ydCB7IFZhbHVlTGlzdE9ic2VydmVyIH0gZnJvbSBcIkBzdGltdWx1cy9tdXRhdGlvbi1vYnNlcnZlcnNcIjtcbnZhciBTY29wZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjb3BlT2JzZXJ2ZXIoZWxlbWVudCwgc2NoZW1hLCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyID0gbmV3IFZhbHVlTGlzdE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5jb250cm9sbGVyQXR0cmlidXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXJCeUVsZW1lbnQgPSBuZXcgV2Vha01hcDtcbiAgICAgICAgdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cyA9IG5ldyBXZWFrTWFwO1xuICAgIH1cbiAgICBTY29wZU9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgIH07XG4gICAgU2NvcGVPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdG9wKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NvcGVPYnNlcnZlci5wcm90b3R5cGUsIFwiY29udHJvbGxlckF0dHJpYnV0ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBWYWx1ZSBvYnNlcnZlciBkZWxlZ2F0ZVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgU2NvcGVPYnNlcnZlci5wcm90b3R5cGUucGFyc2VWYWx1ZUZvclRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdG9rZW4uZWxlbWVudCwgaWRlbnRpZmllciA9IHRva2VuLmNvbnRlbnQ7XG4gICAgICAgIHZhciBzY29wZXNCeUlkZW50aWZpZXIgPSB0aGlzLmZldGNoU2NvcGVzQnlJZGVudGlmaWVyRm9yRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgdmFyIHNjb3BlID0gc2NvcGVzQnlJZGVudGlmaWVyLmdldChpZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKCFzY29wZSkge1xuICAgICAgICAgICAgc2NvcGUgPSB0aGlzLmRlbGVnYXRlLmNyZWF0ZVNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzY29wZXNCeUlkZW50aWZpZXIuc2V0KGlkZW50aWZpZXIsIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfTtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIFNjb3BlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRNYXRjaGVkVmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUNvdW50ID0gKHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuZ2V0KHZhbHVlKSB8fCAwKSArIDE7XG4gICAgICAgIHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuc2V0KHZhbHVlLCByZWZlcmVuY2VDb3VudCk7XG4gICAgICAgIGlmIChyZWZlcmVuY2VDb3VudCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnNjb3BlQ29ubmVjdGVkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBTY29wZU9ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50VW5tYXRjaGVkVmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUNvdW50ID0gdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5nZXQodmFsdWUpO1xuICAgICAgICBpZiAocmVmZXJlbmNlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuc2V0KHZhbHVlLCByZWZlcmVuY2VDb3VudCAtIDEpO1xuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnNjb3BlRGlzY29ubmVjdGVkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NvcGVPYnNlcnZlci5wcm90b3R5cGUuZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNjb3Blc0J5SWRlbnRpZmllciA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKCFzY29wZXNCeUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHNjb3Blc0J5SWRlbnRpZmllciA9IG5ldyBNYXA7XG4gICAgICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllckJ5RWxlbWVudC5zZXQoZWxlbWVudCwgc2NvcGVzQnlJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGVzQnlJZGVudGlmaWVyO1xuICAgIH07XG4gICAgcmV0dXJuIFNjb3BlT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NvcGVPYnNlcnZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NvcGVfb2JzZXJ2ZXIuanMubWFwIiwiLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVWYWx1ZUNvbnRhaW5zVG9rZW4oYXR0cmlidXRlTmFtZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gXCJbXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCJ+PVxcXCJcIiArIHRva2VuICsgXCJcXFwiXVwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VsZWN0b3JzLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oPzpbXy1dKShbYS16MC05XSkvZywgZnVuY3Rpb24gKF8sIGNoYXIpIHsgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hlcml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChfLCBjaGFyKSB7IHJldHVybiBcIi1cIiArIGNoYXIudG9Mb3dlckNhc2UoKTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJpbmdfaGVscGVycy5qcy5tYXAiLCJpbXBvcnQgeyByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyB9IGZyb20gXCIuL2luaGVyaXRhYmxlX3N0YXRpY3NcIjtcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tIFwiLi9zdHJpbmdfaGVscGVyc1wiO1xuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUYXJnZXRQcm9wZXJ0aWVzQmxlc3NpbmcoY29uc3RydWN0b3IpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcInRhcmdldHNcIik7XG4gICAgcmV0dXJuIHRhcmdldHMucmVkdWNlKGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCB0YXJnZXREZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JUYXJnZXREZWZpbml0aW9uKHRhcmdldERlZmluaXRpb24pKTtcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0aWVzRm9yVGFyZ2V0RGVmaW5pdGlvbihuYW1lKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBfYSA9IHt9LFxuICAgICAgICBfYVtuYW1lICsgXCJUYXJnZXRcIl0gPSB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXRzLmZpbmQobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyB0YXJnZXQgZWxlbWVudCBcXFwiXCIgKyB0aGlzLmlkZW50aWZpZXIgKyBcIi5cIiArIG5hbWUgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfYVtuYW1lICsgXCJUYXJnZXRzXCJdID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5maW5kQWxsKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImhhc1wiICsgY2FwaXRhbGl6ZShuYW1lKSArIFwiVGFyZ2V0XCJdID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5oYXMobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9hO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFyZ2V0X3Byb3BlcnRpZXMuanMubWFwIiwidmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5pbXBvcnQgeyBhdHRyaWJ1dGVWYWx1ZUNvbnRhaW5zVG9rZW4gfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbnZhciBUYXJnZXRTZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFyZ2V0U2V0KHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhcmdldFNldC5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYXJnZXRTZXQucHJvdG90eXBlLCBcImlkZW50aWZpZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFyZ2V0U2V0LnByb3RvdHlwZSwgXCJzY2hlbWFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnNjaGVtYTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRhcmdldFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHRhcmdldE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZCh0YXJnZXROYW1lKSAhPSBudWxsO1xuICAgIH07XG4gICAgVGFyZ2V0U2V0LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdGFyZ2V0TmFtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHRhcmdldE5hbWVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldE5hbWVzLnJlZHVjZShmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfHwgX3RoaXMuZmluZFRhcmdldCh0YXJnZXROYW1lKVxuICAgICAgICAgICAgICAgIHx8IF90aGlzLmZpbmRMZWdhY3lUYXJnZXQodGFyZ2V0TmFtZSk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBUYXJnZXRTZXQucHJvdG90eXBlLmZpbmRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0YXJnZXROYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdGFyZ2V0TmFtZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0TmFtZXMucmVkdWNlKGZ1bmN0aW9uICh0YXJnZXRzLCB0YXJnZXROYW1lKSB7IHJldHVybiBfX3NwcmVhZEFycmF5cyh0YXJnZXRzLCBfdGhpcy5maW5kQWxsVGFyZ2V0cyh0YXJnZXROYW1lKSwgX3RoaXMuZmluZEFsbExlZ2FjeVRhcmdldHModGFyZ2V0TmFtZSkpOyB9LCBbXSk7XG4gICAgfTtcbiAgICBUYXJnZXRTZXQucHJvdG90eXBlLmZpbmRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0TmFtZSkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZmluZEVsZW1lbnQoc2VsZWN0b3IpO1xuICAgIH07XG4gICAgVGFyZ2V0U2V0LnByb3RvdHlwZS5maW5kQWxsVGFyZ2V0cyA9IGZ1bmN0aW9uICh0YXJnZXROYW1lKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5maW5kQWxsRWxlbWVudHMoc2VsZWN0b3IpO1xuICAgIH07XG4gICAgVGFyZ2V0U2V0LnByb3RvdHlwZS5nZXRTZWxlY3RvckZvclRhcmdldE5hbWUgPSBmdW5jdGlvbiAodGFyZ2V0TmFtZSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IFwiZGF0YS1cIiArIHRoaXMuaWRlbnRpZmllciArIFwiLXRhcmdldFwiO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKGF0dHJpYnV0ZU5hbWUsIHRhcmdldE5hbWUpO1xuICAgIH07XG4gICAgVGFyZ2V0U2V0LnByb3RvdHlwZS5maW5kTGVnYWN5VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldE5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5nZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUodGFyZ2V0TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcHJlY2F0ZSh0aGlzLnNjb3BlLmZpbmRFbGVtZW50KHNlbGVjdG9yKSwgdGFyZ2V0TmFtZSk7XG4gICAgfTtcbiAgICBUYXJnZXRTZXQucHJvdG90eXBlLmZpbmRBbGxMZWdhY3lUYXJnZXRzID0gZnVuY3Rpb24gKHRhcmdldE5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5nZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUodGFyZ2V0TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmZpbmRBbGxFbGVtZW50cyhzZWxlY3RvcikubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBfdGhpcy5kZXByZWNhdGUoZWxlbWVudCwgdGFyZ2V0TmFtZSk7IH0pO1xuICAgIH07XG4gICAgVGFyZ2V0U2V0LnByb3RvdHlwZS5nZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUgPSBmdW5jdGlvbiAodGFyZ2V0TmFtZSkge1xuICAgICAgICB2YXIgdGFyZ2V0RGVzY3JpcHRvciA9IHRoaXMuaWRlbnRpZmllciArIFwiLlwiICsgdGFyZ2V0TmFtZTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbih0aGlzLnNjaGVtYS50YXJnZXRBdHRyaWJ1dGUsIHRhcmdldERlc2NyaXB0b3IpO1xuICAgIH07XG4gICAgVGFyZ2V0U2V0LnByb3RvdHlwZS5kZXByZWNhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGFyZ2V0TmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXI7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuc2NoZW1hLnRhcmdldEF0dHJpYnV0ZTtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUud2FybihlbGVtZW50LCBcInRhcmdldDpcIiArIHRhcmdldE5hbWUsIFwiUGxlYXNlIHJlcGxhY2UgXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCI9XFxcIlwiICsgaWRlbnRpZmllciArIFwiLlwiICsgdGFyZ2V0TmFtZSArIFwiXFxcIiB3aXRoIGRhdGEtXCIgKyBpZGVudGlmaWVyICsgXCItdGFyZ2V0PVxcXCJcIiArIHRhcmdldE5hbWUgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICAgICAgICAoXCJUaGUgXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCIgYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIFN0aW11bHVzLlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFyZ2V0U2V0LnByb3RvdHlwZSwgXCJndWlkZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZ3VpZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVGFyZ2V0U2V0O1xufSgpKTtcbmV4cG9ydCB7IFRhcmdldFNldCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFyZ2V0X3NldC5qcy5tYXAiLCJpbXBvcnQgeyBTdHJpbmdNYXBPYnNlcnZlciB9IGZyb20gXCJAc3RpbXVsdXMvbXV0YXRpb24tb2JzZXJ2ZXJzXCI7XG52YXIgVmFsdWVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWYWx1ZU9ic2VydmVyKGNvbnRleHQsIHJlY2VpdmVyKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgdGhpcy5zdHJpbmdNYXBPYnNlcnZlciA9IG5ldyBTdHJpbmdNYXBPYnNlcnZlcih0aGlzLmVsZW1lbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcCA9IHRoaXMuY29udHJvbGxlci52YWx1ZURlc2NyaXB0b3JNYXA7XG4gICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrc0ZvckRlZmF1bHRWYWx1ZXMoKTtcbiAgICB9XG4gICAgVmFsdWVPYnNlcnZlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nTWFwT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9O1xuICAgIFZhbHVlT2JzZXJ2ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nTWFwT2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZhbHVlT2JzZXJ2ZXIucHJvdG90eXBlLCBcImVsZW1lbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWYWx1ZU9ic2VydmVyLnByb3RvdHlwZSwgXCJjb250cm9sbGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNvbnRyb2xsZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBTdHJpbmcgbWFwIG9ic2VydmVyIGRlbGVnYXRlXG4gICAgVmFsdWVPYnNlcnZlci5wcm90b3R5cGUuZ2V0U3RyaW5nTWFwS2V5Rm9yQXR0cmlidXRlID0gZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgaW4gdGhpcy52YWx1ZURlc2NyaXB0b3JNYXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcFthdHRyaWJ1dGVOYW1lXS5uYW1lO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWYWx1ZU9ic2VydmVyLnByb3RvdHlwZS5zdHJpbmdNYXBWYWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAoYXR0cmlidXRlVmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2tGb3JWYWx1ZShuYW1lKTtcbiAgICB9O1xuICAgIFZhbHVlT2JzZXJ2ZXIucHJvdG90eXBlLmludm9rZUNoYW5nZWRDYWxsYmFja3NGb3JEZWZhdWx0VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy52YWx1ZURlc2NyaXB0b3JzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYi5rZXksIG5hbWVfMSA9IF9iLm5hbWUsIGRlZmF1bHRWYWx1ZSA9IF9iLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT0gdW5kZWZpbmVkICYmICF0aGlzLmNvbnRyb2xsZXIuZGF0YS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrRm9yVmFsdWUobmFtZV8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVmFsdWVPYnNlcnZlci5wcm90b3R5cGUuaW52b2tlQ2hhbmdlZENhbGxiYWNrRm9yVmFsdWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgbWV0aG9kTmFtZSA9IG5hbWUgKyBcIkNoYW5nZWRcIjtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMucmVjZWl2ZXJbbWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5yZWNlaXZlcltuYW1lXTtcbiAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMucmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZhbHVlT2JzZXJ2ZXIucHJvdG90eXBlLCBcInZhbHVlRGVzY3JpcHRvcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZURlc2NyaXB0b3JNYXAgPSB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcDtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZURlc2NyaXB0b3JNYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZURlc2NyaXB0b3JNYXBba2V5XTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmFsdWVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBWYWx1ZU9ic2VydmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWx1ZV9vYnNlcnZlci5qcy5tYXAiLCJpbXBvcnQgeyByZWFkSW5oZXJpdGFibGVTdGF0aWNPYmplY3RQYWlycyB9IGZyb20gXCIuL2luaGVyaXRhYmxlX3N0YXRpY3NcIjtcbmltcG9ydCB7IGNhbWVsaXplLCBjYXBpdGFsaXplLCBkYXNoZXJpemUgfSBmcm9tIFwiLi9zdHJpbmdfaGVscGVyc1wiO1xuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBWYWx1ZVByb3BlcnRpZXNCbGVzc2luZyhjb25zdHJ1Y3Rvcikge1xuICAgIHZhciB2YWx1ZURlZmluaXRpb25QYWlycyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBcInZhbHVlc1wiKTtcbiAgICB2YXIgcHJvcGVydHlEZXNjcmlwdG9yTWFwID0ge1xuICAgICAgICB2YWx1ZURlc2NyaXB0b3JNYXA6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlRGVmaW5pdGlvblBhaXJzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZURlZmluaXRpb25QYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlRGVzY3JpcHRvciA9IHBhcnNlVmFsdWVEZWZpbml0aW9uUGFpcih2YWx1ZURlZmluaXRpb25QYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBfdGhpcy5kYXRhLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkodmFsdWVEZXNjcmlwdG9yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJlc3VsdCwgKF9hID0ge30sIF9hW2F0dHJpYnV0ZU5hbWVdID0gdmFsdWVEZXNjcmlwdG9yLCBfYSkpO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlRGVmaW5pdGlvblBhaXJzLnJlZHVjZShmdW5jdGlvbiAocHJvcGVydGllcywgdmFsdWVEZWZpbml0aW9uUGFpcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzRm9yVmFsdWVEZWZpbml0aW9uUGFpcih2YWx1ZURlZmluaXRpb25QYWlyKSk7XG4gICAgfSwgcHJvcGVydHlEZXNjcmlwdG9yTWFwKTtcbn1cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0ZvclZhbHVlRGVmaW5pdGlvblBhaXIodmFsdWVEZWZpbml0aW9uUGFpcikge1xuICAgIHZhciBfYTtcbiAgICB2YXIgZGVmaW5pdGlvbiA9IHBhcnNlVmFsdWVEZWZpbml0aW9uUGFpcih2YWx1ZURlZmluaXRpb25QYWlyKTtcbiAgICB2YXIgdHlwZSA9IGRlZmluaXRpb24udHlwZSwga2V5ID0gZGVmaW5pdGlvbi5rZXksIG5hbWUgPSBkZWZpbml0aW9uLm5hbWU7XG4gICAgdmFyIHJlYWQgPSByZWFkZXJzW3R5cGVdLCB3cml0ZSA9IHdyaXRlcnNbdHlwZV0gfHwgd3JpdGVycy5kZWZhdWx0O1xuICAgIHJldHVybiBfYSA9IHt9LFxuICAgICAgICBfYVtuYW1lXSA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb24uZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB3cml0ZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJoYXNcIiArIGNhcGl0YWxpemUobmFtZSldID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYXMoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2E7XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlRGVmaW5pdGlvblBhaXIoX2EpIHtcbiAgICB2YXIgdG9rZW4gPSBfYVswXSwgdHlwZUNvbnN0YW50ID0gX2FbMV07XG4gICAgdmFyIHR5cGUgPSBwYXJzZVZhbHVlVHlwZUNvbnN0YW50KHR5cGVDb25zdGFudCk7XG4gICAgcmV0dXJuIHZhbHVlRGVzY3JpcHRvckZvclRva2VuQW5kVHlwZSh0b2tlbiwgdHlwZSk7XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlVHlwZUNvbnN0YW50KHR5cGVDb25zdGFudCkge1xuICAgIHN3aXRjaCAodHlwZUNvbnN0YW50KSB7XG4gICAgICAgIGNhc2UgQXJyYXk6IHJldHVybiBcImFycmF5XCI7XG4gICAgICAgIGNhc2UgQm9vbGVhbjogcmV0dXJuIFwiYm9vbGVhblwiO1xuICAgICAgICBjYXNlIE51bWJlcjogcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICAgIGNhc2UgT2JqZWN0OiByZXR1cm4gXCJvYmplY3RcIjtcbiAgICAgICAgY2FzZSBTdHJpbmc6IHJldHVybiBcInN0cmluZ1wiO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHZhbHVlIHR5cGUgY29uc3RhbnQgXFxcIlwiICsgdHlwZUNvbnN0YW50ICsgXCJcXFwiXCIpO1xufVxuZnVuY3Rpb24gdmFsdWVEZXNjcmlwdG9yRm9yVG9rZW5BbmRUeXBlKHRva2VuLCB0eXBlKSB7XG4gICAgdmFyIGtleSA9IGRhc2hlcml6ZSh0b2tlbikgKyBcIi12YWx1ZVwiO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBuYW1lOiBjYW1lbGl6ZShrZXkpLFxuICAgICAgICBnZXQgZGVmYXVsdFZhbHVlKCkgeyByZXR1cm4gZGVmYXVsdFZhbHVlc0J5VHlwZVt0eXBlXTsgfVxuICAgIH07XG59XG52YXIgZGVmYXVsdFZhbHVlc0J5VHlwZSA9IHtcbiAgICBnZXQgYXJyYXkoKSB7IHJldHVybiBbXTsgfSxcbiAgICBib29sZWFuOiBmYWxzZSxcbiAgICBudW1iZXI6IDAsXG4gICAgZ2V0IG9iamVjdCgpIHsgcmV0dXJuIHt9OyB9LFxuICAgIHN0cmluZzogXCJcIlxufTtcbnZhciByZWFkZXJzID0ge1xuICAgIGFycmF5OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhcnJheVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSxcbiAgICBib29sZWFuOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICEodmFsdWUgPT0gXCIwXCIgfHwgdmFsdWUgPT0gXCJmYWxzZVwiKTtcbiAgICB9LFxuICAgIG51bWJlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9LFxuICAgIG9iamVjdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0ICE9IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSxcbiAgICBzdHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcbnZhciB3cml0ZXJzID0ge1xuICAgIGRlZmF1bHQ6IHdyaXRlU3RyaW5nLFxuICAgIGFycmF5OiB3cml0ZUpTT04sXG4gICAgb2JqZWN0OiB3cml0ZUpTT05cbn07XG5mdW5jdGlvbiB3cml0ZUpTT04odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufVxuZnVuY3Rpb24gd3JpdGVTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsdWVfcHJvcGVydGllcy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9pbmRleGVkX211bHRpbWFwXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tdWx0aW1hcFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2V0X29wZXJhdGlvbnNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgTXVsdGltYXAgfSBmcm9tIFwiLi9tdWx0aW1hcFwiO1xuaW1wb3J0IHsgYWRkLCBkZWwgfSBmcm9tIFwiLi9zZXRfb3BlcmF0aW9uc1wiO1xudmFyIEluZGV4ZWRNdWx0aW1hcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW5kZXhlZE11bHRpbWFwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEluZGV4ZWRNdWx0aW1hcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMua2V5c0J5VmFsdWUgPSBuZXcgTWFwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbmRleGVkTXVsdGltYXAucHJvdG90eXBlLCBcInZhbHVlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5rZXlzQnlWYWx1ZS5rZXlzKCkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSW5kZXhlZE11bHRpbWFwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICBhZGQodGhpcy5rZXlzQnlWYWx1ZSwgdmFsdWUsIGtleSk7XG4gICAgfTtcbiAgICBJbmRleGVkTXVsdGltYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVsZXRlLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIGRlbCh0aGlzLmtleXNCeVZhbHVlLCB2YWx1ZSwga2V5KTtcbiAgICB9O1xuICAgIEluZGV4ZWRNdWx0aW1hcC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c0J5VmFsdWUuaGFzKHZhbHVlKTtcbiAgICB9O1xuICAgIEluZGV4ZWRNdWx0aW1hcC5wcm90b3R5cGUuZ2V0S2V5c0ZvclZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzZXQgPSB0aGlzLmtleXNCeVZhbHVlLmdldCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBzZXQgPyBBcnJheS5mcm9tKHNldCkgOiBbXTtcbiAgICB9O1xuICAgIHJldHVybiBJbmRleGVkTXVsdGltYXA7XG59KE11bHRpbWFwKSk7XG5leHBvcnQgeyBJbmRleGVkTXVsdGltYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4ZWRfbXVsdGltYXAuanMubWFwIiwiaW1wb3J0IHsgYWRkLCBkZWwgfSBmcm9tIFwiLi9zZXRfb3BlcmF0aW9uc1wiO1xudmFyIE11bHRpbWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11bHRpbWFwKCkge1xuICAgICAgICB0aGlzLnZhbHVlc0J5S2V5ID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTXVsdGltYXAucHJvdG90eXBlLCBcInZhbHVlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNldHMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWVzQnlLZXkudmFsdWVzKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHNldHMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZXMsIHNldCkgeyByZXR1cm4gdmFsdWVzLmNvbmNhdChBcnJheS5mcm9tKHNldCkpOyB9LCBbXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTXVsdGltYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZXRzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5LnZhbHVlcygpKTtcbiAgICAgICAgICAgIHJldHVybiBzZXRzLnJlZHVjZShmdW5jdGlvbiAoc2l6ZSwgc2V0KSB7IHJldHVybiBzaXplICsgc2V0LnNpemU7IH0sIDApO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTXVsdGltYXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGFkZCh0aGlzLnZhbHVlc0J5S2V5LCBrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIE11bHRpbWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBkZWwodGhpcy52YWx1ZXNCeUtleSwga2V5LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBNdWx0aW1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzQnlLZXkuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMuaGFzKHZhbHVlKTtcbiAgICB9O1xuICAgIE11bHRpbWFwLnByb3RvdHlwZS5oYXNLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc0J5S2V5LmhhcyhrZXkpO1xuICAgIH07XG4gICAgTXVsdGltYXAucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzZXRzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5LnZhbHVlcygpKTtcbiAgICAgICAgcmV0dXJuIHNldHMuc29tZShmdW5jdGlvbiAoc2V0KSB7IHJldHVybiBzZXQuaGFzKHZhbHVlKTsgfSk7XG4gICAgfTtcbiAgICBNdWx0aW1hcC5wcm90b3R5cGUuZ2V0VmFsdWVzRm9yS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXNCeUtleS5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyA/IEFycmF5LmZyb20odmFsdWVzKSA6IFtdO1xuICAgIH07XG4gICAgTXVsdGltYXAucHJvdG90eXBlLmdldEtleXNGb3JWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWVzID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmhhcyh2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZXMgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpbWFwO1xufSgpKTtcbmV4cG9ydCB7IE11bHRpbWFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tdWx0aW1hcC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gYWRkKG1hcCwga2V5LCB2YWx1ZSkge1xuICAgIGZldGNoKG1hcCwga2V5KS5hZGQodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbChtYXAsIGtleSwgdmFsdWUpIHtcbiAgICBmZXRjaChtYXAsIGtleSkuZGVsZXRlKHZhbHVlKTtcbiAgICBwcnVuZShtYXAsIGtleSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2gobWFwLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVzID0gbWFwLmdldChrZXkpO1xuICAgIGlmICghdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgbWFwLnNldChrZXksIHZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUobWFwLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVzID0gbWFwLmdldChrZXkpO1xuICAgIGlmICh2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMuc2l6ZSA9PSAwKSB7XG4gICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXRfb3BlcmF0aW9ucy5qcy5tYXAiLCJpbXBvcnQgeyBFbGVtZW50T2JzZXJ2ZXIgfSBmcm9tIFwiLi9lbGVtZW50X29ic2VydmVyXCI7XG52YXIgQXR0cmlidXRlT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXR0cmlidXRlT2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlciA9IG5ldyBFbGVtZW50T2JzZXJ2ZXIoZWxlbWVudCwgdGhpcyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLCBcInNlbGVjdG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJbXCIgKyB0aGlzLmF0dHJpYnV0ZU5hbWUgKyBcIl1cIjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEF0dHJpYnV0ZU9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9O1xuICAgIEF0dHJpYnV0ZU9ic2VydmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5zdG9wKCk7XG4gICAgfTtcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIucmVmcmVzaCgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF0dHJpYnV0ZU9ic2VydmVyLnByb3RvdHlwZSwgXCJzdGFydGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIEVsZW1lbnQgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUubWF0Y2hFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSk7XG4gICAgfTtcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUubWF0Y2hFbGVtZW50c0luVHJlZSA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHRoaXMubWF0Y2hFbGVtZW50KHRyZWUpID8gW3RyZWVdIDogW107XG4gICAgICAgIHZhciBtYXRjaGVzID0gQXJyYXkuZnJvbSh0cmVlLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcikpO1xuICAgICAgICByZXR1cm4gbWF0Y2guY29uY2F0KG1hdGNoZXMpO1xuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRNYXRjaGVkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRVbm1hdGNoZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkQXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCAmJiB0aGlzLmF0dHJpYnV0ZU5hbWUgPT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50QXR0cmlidXRlVmFsdWVDaGFuZ2VkKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXR0cmlidXRlT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgQXR0cmlidXRlT2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF0dHJpYnV0ZV9vYnNlcnZlci5qcy5tYXAiLCJ2YXIgRWxlbWVudE9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVsZW1lbnRPYnNlcnZlcihlbGVtZW50LCBkZWxlZ2F0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gbmV3IFNldDtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykgeyByZXR1cm4gX3RoaXMucHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpOyB9KTtcbiAgICB9XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBuZXcgU2V0KHRoaXMubWF0Y2hFbGVtZW50c0luVHJlZSgpKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKHRoaXMuZWxlbWVudHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBBcnJheS5mcm9tKG1hdGNoZXMpOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX2NbX2JdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gTXV0YXRpb24gcmVjb3JkIHByb2Nlc3NpbmdcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLnByb2Nlc3NNdXRhdGlvbnMgPSBmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbXV0YXRpb25zXzEgPSBtdXRhdGlvbnM7IF9pIDwgbXV0YXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uID0gbXV0YXRpb25zXzFbX2ldO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5wcm9jZXNzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0F0dHJpYnV0ZUNoYW5nZShtdXRhdGlvbi50YXJnZXQsIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVtb3ZlZE5vZGVzKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NBZGRlZE5vZGVzKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLnByb2Nlc3NBdHRyaWJ1dGVDaGFuZ2UgPSBmdW5jdGlvbiAobm9kZSwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IG5vZGU7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQgJiYgdGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWF0Y2hFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUucHJvY2Vzc1JlbW92ZWROb2RlcyA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbShub2Rlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50RnJvbU5vZGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1RyZWUoZWxlbWVudCwgdGhpcy5yZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5wcm9jZXNzQWRkZWROb2RlcyA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbShub2Rlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50RnJvbU5vZGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0aGlzLmVsZW1lbnRJc0FjdGl2ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1RyZWUoZWxlbWVudCwgdGhpcy5hZGRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gRWxlbWVudCBtYXRjaGluZ1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUubWF0Y2hFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUubWF0Y2hFbGVtZW50KGVsZW1lbnQpO1xuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5tYXRjaEVsZW1lbnRzSW5UcmVlID0gZnVuY3Rpb24gKHRyZWUpIHtcbiAgICAgICAgaWYgKHRyZWUgPT09IHZvaWQgMCkgeyB0cmVlID0gdGhpcy5lbGVtZW50OyB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLm1hdGNoRWxlbWVudHNJblRyZWUodHJlZSk7XG4gICAgfTtcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLnByb2Nlc3NUcmVlID0gZnVuY3Rpb24gKHRyZWUsIHByb2Nlc3Nvcikge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5tYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfYVtfaV07XG4gICAgICAgICAgICBwcm9jZXNzb3IuY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50RnJvbU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUuZWxlbWVudElzQWN0aXZlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQgIT0gdGhpcy5lbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBFbGVtZW50IHRyYWNraW5nXG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudElzQWN0aXZlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50TWF0Y2hlZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRWxlbWVudE9ic2VydmVyO1xufSgpKTtcbmV4cG9ydCB7IEVsZW1lbnRPYnNlcnZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWxlbWVudF9vYnNlcnZlci5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9hdHRyaWJ1dGVfb2JzZXJ2ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VsZW1lbnRfb2JzZXJ2ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3N0cmluZ19tYXBfb2JzZXJ2ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Rva2VuX2xpc3Rfb2JzZXJ2ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3ZhbHVlX2xpc3Rfb2JzZXJ2ZXJcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBTdHJpbmdNYXBPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHJpbmdNYXBPYnNlcnZlcihlbGVtZW50LCBkZWxlZ2F0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0cmluZ01hcCA9IG5ldyBNYXA7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHsgcmV0dXJuIF90aGlzLnByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKTsgfSk7XG4gICAgfVxuICAgIFN0cmluZ01hcE9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdHJpbmdNYXBPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0cmluZ01hcE9ic2VydmVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5rbm93bkF0dHJpYnV0ZU5hbWVzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gTXV0YXRpb24gcmVjb3JkIHByb2Nlc3NpbmdcbiAgICBTdHJpbmdNYXBPYnNlcnZlci5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9ucyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtdXRhdGlvbnNfMSA9IG11dGF0aW9uczsgX2kgPCBtdXRhdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb24gPSBtdXRhdGlvbnNfMVtfaV07XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdHJpbmdNYXBPYnNlcnZlci5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3RhdGUgdHJhY2tpbmdcbiAgICBTdHJpbmdNYXBPYnNlcnZlci5wcm90b3R5cGUucmVmcmVzaEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmRlbGVnYXRlLmdldFN0cmluZ01hcEtleUZvckF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RyaW5nTWFwLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwS2V5QWRkZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpbmdNYXAuZ2V0KGF0dHJpYnV0ZU5hbWUpICE9IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdNYXBWYWx1ZUNoYW5nZWQodmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwLmRlbGV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcEtleVJlbW92ZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwLnNldChhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0cmluZ01hcE9ic2VydmVyLnByb3RvdHlwZS5zdHJpbmdNYXBLZXlBZGRlZCA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwS2V5QWRkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwS2V5QWRkZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3RyaW5nTWFwT2JzZXJ2ZXIucHJvdG90eXBlLnN0cmluZ01hcFZhbHVlQ2hhbmdlZCA9IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLnN0cmluZ01hcFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBWYWx1ZUNoYW5nZWQodmFsdWUsIGtleSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN0cmluZ01hcE9ic2VydmVyLnByb3RvdHlwZS5zdHJpbmdNYXBLZXlSZW1vdmVkID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlSZW1vdmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnN0cmluZ01hcEtleVJlbW92ZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZ01hcE9ic2VydmVyLnByb3RvdHlwZSwgXCJrbm93bkF0dHJpYnV0ZU5hbWVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuY3VycmVudEF0dHJpYnV0ZU5hbWVzLmNvbmNhdCh0aGlzLnJlY29yZGVkQXR0cmlidXRlTmFtZXMpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nTWFwT2JzZXJ2ZXIucHJvdG90eXBlLCBcImN1cnJlbnRBdHRyaWJ1dGVOYW1lc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LmF0dHJpYnV0ZXMpLm1hcChmdW5jdGlvbiAoYXR0cmlidXRlKSB7IHJldHVybiBhdHRyaWJ1dGUubmFtZTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nTWFwT2JzZXJ2ZXIucHJvdG90eXBlLCBcInJlY29yZGVkQXR0cmlidXRlTmFtZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RyaW5nTWFwLmtleXMoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU3RyaW5nTWFwT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgU3RyaW5nTWFwT2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZ19tYXBfb2JzZXJ2ZXIuanMubWFwIiwiaW1wb3J0IHsgQXR0cmlidXRlT2JzZXJ2ZXIgfSBmcm9tIFwiLi9hdHRyaWJ1dGVfb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IE11bHRpbWFwIH0gZnJvbSBcIkBzdGltdWx1cy9tdWx0aW1hcFwiO1xudmFyIFRva2VuTGlzdE9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRva2VuTGlzdE9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIgPSBuZXcgQXR0cmlidXRlT2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy50b2tlbnNCeUVsZW1lbnQgPSBuZXcgTXVsdGltYXA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUsIFwic3RhcnRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuc3RhcnRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5zdGFydCgpO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIucmVmcmVzaCgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5lbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLy8gQXR0cmlidXRlIG9ic2VydmVyIGRlbGVnYXRlXG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRNYXRjaGVkQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50b2tlbnNNYXRjaGVkKHRoaXMucmVhZFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCkpO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRBdHRyaWJ1dGVWYWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnJlZnJlc2hUb2tlbnNGb3JFbGVtZW50KGVsZW1lbnQpLCB1bm1hdGNoZWRUb2tlbnMgPSBfYVswXSwgbWF0Y2hlZFRva2VucyA9IF9hWzFdO1xuICAgICAgICB0aGlzLnRva2Vuc1VubWF0Y2hlZCh1bm1hdGNoZWRUb2tlbnMpO1xuICAgICAgICB0aGlzLnRva2Vuc01hdGNoZWQobWF0Y2hlZFRva2Vucyk7XG4gICAgfTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUuZWxlbWVudFVubWF0Y2hlZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMudG9rZW5zVW5tYXRjaGVkKHRoaXMudG9rZW5zQnlFbGVtZW50LmdldFZhbHVlc0ZvcktleShlbGVtZW50KSk7XG4gICAgfTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUudG9rZW5zTWF0Y2hlZCA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7IHJldHVybiBfdGhpcy50b2tlbk1hdGNoZWQodG9rZW4pOyB9KTtcbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS50b2tlbnNVbm1hdGNoZWQgPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikgeyByZXR1cm4gX3RoaXMudG9rZW5Vbm1hdGNoZWQodG9rZW4pOyB9KTtcbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS50b2tlbk1hdGNoZWQgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS50b2tlbk1hdGNoZWQodG9rZW4pO1xuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudC5hZGQodG9rZW4uZWxlbWVudCwgdG9rZW4pO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnRva2VuVW5tYXRjaGVkID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudG9rZW5Vbm1hdGNoZWQodG9rZW4pO1xuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudC5kZWxldGUodG9rZW4uZWxlbWVudCwgdG9rZW4pO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnJlZnJlc2hUb2tlbnNGb3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzVG9rZW5zID0gdGhpcy50b2tlbnNCeUVsZW1lbnQuZ2V0VmFsdWVzRm9yS2V5KGVsZW1lbnQpO1xuICAgICAgICB2YXIgY3VycmVudFRva2VucyA9IHRoaXMucmVhZFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIHZhciBmaXJzdERpZmZlcmluZ0luZGV4ID0gemlwKHByZXZpb3VzVG9rZW5zLCBjdXJyZW50VG9rZW5zKVxuICAgICAgICAgICAgLmZpbmRJbmRleChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1Rva2VuID0gX2FbMF0sIGN1cnJlbnRUb2tlbiA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0dXJuICF0b2tlbnNBcmVFcXVhbChwcmV2aW91c1Rva2VuLCBjdXJyZW50VG9rZW4pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpcnN0RGlmZmVyaW5nSW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBbW10sIFtdXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbcHJldmlvdXNUb2tlbnMuc2xpY2UoZmlyc3REaWZmZXJpbmdJbmRleCksIGN1cnJlbnRUb2tlbnMuc2xpY2UoZmlyc3REaWZmZXJpbmdJbmRleCldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUucmVhZFRva2Vuc0ZvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZTtcbiAgICAgICAgdmFyIHRva2VuU3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgfHwgXCJcIjtcbiAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5TdHJpbmcodG9rZW5TdHJpbmcsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIFRva2VuTGlzdE9ic2VydmVyO1xufSgpKTtcbmV4cG9ydCB7IFRva2VuTGlzdE9ic2VydmVyIH07XG5mdW5jdGlvbiBwYXJzZVRva2VuU3RyaW5nKHRva2VuU3RyaW5nLCBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIHRva2VuU3RyaW5nLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkgeyByZXR1cm4gY29udGVudC5sZW5ndGg7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGNvbnRlbnQsIGluZGV4KSB7IHJldHVybiAoeyBlbGVtZW50OiBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGVOYW1lLCBjb250ZW50OiBjb250ZW50LCBpbmRleDogaW5kZXggfSk7IH0pO1xufVxuZnVuY3Rpb24gemlwKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGxlZnQubGVuZ3RoLCByaWdodC5sZW5ndGgpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBsZW5ndGggfSwgZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBbbGVmdFtpbmRleF0sIHJpZ2h0W2luZGV4XV07IH0pO1xufVxuZnVuY3Rpb24gdG9rZW5zQXJlRXF1YWwobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gbGVmdCAmJiByaWdodCAmJiBsZWZ0LmluZGV4ID09IHJpZ2h0LmluZGV4ICYmIGxlZnQuY29udGVudCA9PSByaWdodC5jb250ZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9rZW5fbGlzdF9vYnNlcnZlci5qcy5tYXAiLCJpbXBvcnQgeyBUb2tlbkxpc3RPYnNlcnZlciB9IGZyb20gXCIuL3Rva2VuX2xpc3Rfb2JzZXJ2ZXJcIjtcbnZhciBWYWx1ZUxpc3RPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWYWx1ZUxpc3RPYnNlcnZlcihlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyID0gbmV3IFRva2VuTGlzdE9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMucGFyc2VSZXN1bHRzQnlUb2tlbiA9IG5ldyBXZWFrTWFwO1xuICAgICAgICB0aGlzLnZhbHVlc0J5VG9rZW5CeUVsZW1lbnQgPSBuZXcgV2Vha01hcDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZSwgXCJzdGFydGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydGVkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBWYWx1ZUxpc3RPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdG9wKCk7XG4gICAgfTtcbiAgICBWYWx1ZUxpc3RPYnNlcnZlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5yZWZyZXNoKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLCBcImVsZW1lbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VuTGlzdE9ic2VydmVyLmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLCBcImF0dHJpYnV0ZU5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VuTGlzdE9ic2VydmVyLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBWYWx1ZUxpc3RPYnNlcnZlci5wcm90b3R5cGUudG9rZW5NYXRjaGVkID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdG9rZW4uZWxlbWVudDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5mZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXNCeVRva2VuRm9yRWxlbWVudChlbGVtZW50KS5zZXQodG9rZW4sIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRWYWx1ZShlbGVtZW50LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZS50b2tlblVubWF0Y2hlZCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRva2VuLmVsZW1lbnQ7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZmV0Y2hQYXJzZVJlc3VsdEZvclRva2VuKHRva2VuKS52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoVmFsdWVzQnlUb2tlbkZvckVsZW1lbnQoZWxlbWVudCkuZGVsZXRlKHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZFZhbHVlKGVsZW1lbnQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLmZldGNoUGFyc2VSZXN1bHRGb3JUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB2YXIgcGFyc2VSZXN1bHQgPSB0aGlzLnBhcnNlUmVzdWx0c0J5VG9rZW4uZ2V0KHRva2VuKTtcbiAgICAgICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgICAgICAgcGFyc2VSZXN1bHQgPSB0aGlzLnBhcnNlVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5wYXJzZVJlc3VsdHNCeVRva2VuLnNldCh0b2tlbiwgcGFyc2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZVJlc3VsdDtcbiAgICB9O1xuICAgIFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZS5mZXRjaFZhbHVlc0J5VG9rZW5Gb3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHZhbHVlc0J5VG9rZW4gPSB0aGlzLnZhbHVlc0J5VG9rZW5CeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoIXZhbHVlc0J5VG9rZW4pIHtcbiAgICAgICAgICAgIHZhbHVlc0J5VG9rZW4gPSBuZXcgTWFwO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNCeVRva2VuQnlFbGVtZW50LnNldChlbGVtZW50LCB2YWx1ZXNCeVRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzQnlUb2tlbjtcbiAgICB9O1xuICAgIFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZS5wYXJzZVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRlbGVnYXRlLnBhcnNlVmFsdWVGb3JUb2tlbih0b2tlbik7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvciB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVmFsdWVMaXN0T2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgVmFsdWVMaXN0T2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlX2xpc3Rfb2JzZXJ2ZXIuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LmtleXMoKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGRlZmluaXRpb25Gb3JNb2R1bGVXaXRoQ29udGV4dEFuZEtleShjb250ZXh0LCBrZXkpOyB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH0pO1xufVxuZnVuY3Rpb24gZGVmaW5pdGlvbkZvck1vZHVsZVdpdGhDb250ZXh0QW5kS2V5KGNvbnRleHQsIGtleSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gaWRlbnRpZmllckZvckNvbnRleHRLZXkoa2V5KTtcbiAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbkZvck1vZHVsZUFuZElkZW50aWZpZXIoY29udGV4dChrZXkpLCBpZGVudGlmaWVyKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZpbml0aW9uRm9yTW9kdWxlQW5kSWRlbnRpZmllcihtb2R1bGUsIGlkZW50aWZpZXIpIHtcbiAgICB2YXIgY29udHJvbGxlckNvbnN0cnVjdG9yID0gbW9kdWxlLmRlZmF1bHQ7XG4gICAgaWYgKHR5cGVvZiBjb250cm9sbGVyQ29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB7IGlkZW50aWZpZXI6IGlkZW50aWZpZXIsIGNvbnRyb2xsZXJDb25zdHJ1Y3RvcjogY29udHJvbGxlckNvbnN0cnVjdG9yIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGb3JDb250ZXh0S2V5KGtleSkge1xuICAgIHZhciBsb2dpY2FsTmFtZSA9IChrZXkubWF0Y2goL14oPzpcXC5cXC8pPyguKykoPzpbXy1dY29udHJvbGxlclxcLi4rPykkLykgfHwgW10pWzFdO1xuICAgIGlmIChsb2dpY2FsTmFtZSkge1xuICAgICAgICByZXR1cm4gbG9naWNhbE5hbWUucmVwbGFjZSgvXy9nLCBcIi1cIikucmVwbGFjZSgvXFwvL2csIFwiLS1cIik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICghU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEgpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyT3V0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIElTX0ZJTFRFUl9PVVQgPSBUWVBFID09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfT1VUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJPdXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJPdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcbiAgZmlsdGVyT3V0OiBjcmVhdGVNZXRob2QoNylcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjYWNoZSA9IHt9O1xuXG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIG9wdGlvbnMpIHtcbiAgaWYgKGhhcyhjYWNoZSwgTUVUSE9EX05BTUUpKSByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgdmFyIEFDQ0VTU09SUyA9IGhhcyhvcHRpb25zLCAnQUNDRVNTT1JTJykgPyBvcHRpb25zLkFDQ0VTU09SUyA6IGZhbHNlO1xuICB2YXIgYXJndW1lbnQwID0gaGFzKG9wdGlvbnMsIDApID8gb3B0aW9uc1swXSA6IHRocm93ZXI7XG4gIHZhciBhcmd1bWVudDEgPSBoYXMob3B0aW9ucywgMSkgPyBvcHRpb25zWzFdIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV0gPSAhIW1ldGhvZCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIGlmIChBQ0NFU1NPUlMgJiYgIURFU0NSSVBUT1JTKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgTyA9IHsgbGVuZ3RoOiAtMSB9O1xuXG4gICAgaWYgKEFDQ0VTU09SUykgZGVmaW5lUHJvcGVydHkoTywgMSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IHRocm93ZXIgfSk7XG4gICAgZWxzZSBPWzFdID0gMTtcblxuICAgIG1ldGhvZC5jYWxsKE8sIGFyZ3VtZW50MCwgYXJndW1lbnQxKTtcbiAgfSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGAzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmIG5hdGl2ZUFzc2lnbih7IGI6IDEgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICB9XG4gICAgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFzdGF0ZS5zb3VyY2UpIHtcbiAgICAgIHN0YXRlLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgICB9XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjguMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgZWxzZSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1hc3NpZ24nKTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gYXNzaWduIH0sIHtcbiAgYXNzaWduOiBhc3NpZ25cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnR5OiBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZS5mXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRQcm90b3R5cGVPZigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTLCBzaGFtOiAhQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSIH0sIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICBzZXRQcm90b3R5cGVPZjogc2V0UHJvdG90eXBlT2Zcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF90eXBlb2YoZSl7cmV0dXJuKF90eXBlb2Y9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIF9pbmhlcml0cyhlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmX3NldFByb3RvdHlwZU9mKGUsdCl9ZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKGUsdCl7cmV0dXJuKF9zZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9ZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKGkpe3ZhciByPV9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZSx0PV9nZXRQcm90b3R5cGVPZihpKTtpZihyKXt2YXIgbj1fZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7ZT1SZWZsZWN0LmNvbnN0cnVjdCh0LGFyZ3VtZW50cyxuKX1lbHNlIGU9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsZSl9fWZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKGUsdCl7cmV0dXJuIXR8fFwib2JqZWN0XCIhPT1fdHlwZW9mKHQpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P19hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoZSk6dH1mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGUpe2lmKHZvaWQgMD09PWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlfWZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsW10sZnVuY3Rpb24oKXt9KSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihlKXtyZXR1cm4oX2dldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSl9KShlKX1mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlLHQpe3ZhciBuO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fG51bGw9PWVbU3ltYm9sLml0ZXJhdG9yXSl7aWYoQXJyYXkuaXNBcnJheShlKXx8KG49X3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGUpKXx8dCYmZSYmXCJudW1iZXJcIj09dHlwZW9mIGUubGVuZ3RoKXtuJiYoZT1uKTt2YXIgaT0wLHI9ZnVuY3Rpb24oKXt9O3JldHVybntzOnIsbjpmdW5jdGlvbigpe3JldHVybiBpPj1lLmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6ZVtpKytdfX0sZTpmdW5jdGlvbihlKXt0aHJvdyBlfSxmOnJ9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgbyxhPSEwLGw9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtuPWVbU3ltYm9sLml0ZXJhdG9yXSgpfSxuOmZ1bmN0aW9uKCl7dmFyIGU9bi5uZXh0KCk7cmV0dXJuIGE9ZS5kb25lLGV9LGU6ZnVuY3Rpb24oZSl7bD0hMCxvPWV9LGY6ZnVuY3Rpb24oKXt0cnl7YXx8bnVsbD09bi5yZXR1cm58fG4ucmV0dXJuKCl9ZmluYWxseXtpZihsKXRocm93IG99fX19ZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9fYXJyYXlMaWtlVG9BcnJheShlLHQpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxpPW5ldyBBcnJheSh0KTtuPHQ7bisrKWlbbl09ZVtuXTtyZXR1cm4gaX1mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkua2V5LGkpfX1mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSx0LG4pe3JldHVybiB0JiZfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSx0KSxuJiZfZGVmaW5lUHJvcGVydGllcyhlLG4pLGV9dmFyIEVtaXR0ZXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7X2NsYXNzQ2FsbENoZWNrKHRoaXMsZSl9cmV0dXJuIF9jcmVhdGVDbGFzcyhlLFt7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLl9jYWxsYmFja3M9dGhpcy5fY2FsbGJhY2tzfHx7fSx0aGlzLl9jYWxsYmFja3NbZV18fCh0aGlzLl9jYWxsYmFja3NbZV09W10pLHRoaXMuX2NhbGxiYWNrc1tlXS5wdXNoKHQpLHRoaXN9fSx7a2V5OlwiZW1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX2NhbGxiYWNrcz10aGlzLl9jYWxsYmFja3N8fHt9O3ZhciB0PXRoaXMuX2NhbGxiYWNrc1tlXTtpZih0KXtmb3IodmFyIG49YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSgxPG4/bi0xOjApLHI9MTtyPG47cisrKWlbci0xXT1hcmd1bWVudHNbcl07dmFyIG8sYT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0KTt0cnl7Zm9yKGEucygpOyEobz1hLm4oKSkuZG9uZTspe28udmFsdWUuYXBwbHkodGhpcyxpKX19Y2F0Y2goZSl7YS5lKGUpfWZpbmFsbHl7YS5mKCl9fXJldHVybiB0aGlzfX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoIXRoaXMuX2NhbGxiYWNrc3x8MD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX2NhbGxiYWNrcz17fSx0aGlzO3ZhciBuPXRoaXMuX2NhbGxiYWNrc1tlXTtpZighbilyZXR1cm4gdGhpcztpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tlXSx0aGlzO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXtpZihuW2ldPT09dCl7bi5zcGxpY2UoaSwxKTticmVha319cmV0dXJuIHRoaXN9fV0pLGV9KCksRHJvcHpvbmU9ZnVuY3Rpb24oKXtfaW5oZXJpdHMoYixFbWl0dGVyKTt2YXIgYT1fY3JlYXRlU3VwZXIoYik7ZnVuY3Rpb24gYihlLHQpe3ZhciBuLGkscjtpZihfY2xhc3NDYWxsQ2hlY2sodGhpcyxiKSwobj1hLmNhbGwodGhpcykpLmVsZW1lbnQ9ZSxuLnZlcnNpb249Yi52ZXJzaW9uLG4uZGVmYXVsdE9wdGlvbnMucHJldmlld1RlbXBsYXRlPW4uZGVmYXVsdE9wdGlvbnMucHJldmlld1RlbXBsYXRlLnJlcGxhY2UoL1xcbiovZyxcIlwiKSxuLmNsaWNrYWJsZUVsZW1lbnRzPVtdLG4ubGlzdGVuZXJzPVtdLG4uZmlsZXM9W10sXCJzdHJpbmdcIj09dHlwZW9mIG4uZWxlbWVudCYmKG4uZWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4uZWxlbWVudCkpLCFuLmVsZW1lbnR8fG51bGw9PW4uZWxlbWVudC5ub2RlVHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRyb3B6b25lIGVsZW1lbnQuXCIpO2lmKG4uZWxlbWVudC5kcm9wem9uZSl0aHJvdyBuZXcgRXJyb3IoXCJEcm9wem9uZSBhbHJlYWR5IGF0dGFjaGVkLlwiKTtiLmluc3RhbmNlcy5wdXNoKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQobikpLG4uZWxlbWVudC5kcm9wem9uZT1fYXNzZXJ0VGhpc0luaXRpYWxpemVkKG4pO3ZhciBvPW51bGwhPShyPWIub3B0aW9uc0ZvckVsZW1lbnQobi5lbGVtZW50KSk/cjp7fTtpZihuLm9wdGlvbnM9Yi5leHRlbmQoe30sbi5kZWZhdWx0T3B0aW9ucyxvLG51bGwhPXQ/dDp7fSksbi5vcHRpb25zLmZvcmNlRmFsbGJhY2t8fCFiLmlzQnJvd3NlclN1cHBvcnRlZCgpKXJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihuLG4ub3B0aW9ucy5mYWxsYmFjay5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQobikpKTtpZihudWxsPT1uLm9wdGlvbnMudXJsJiYobi5vcHRpb25zLnVybD1uLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpKSwhbi5vcHRpb25zLnVybCl0aHJvdyBuZXcgRXJyb3IoXCJObyBVUkwgcHJvdmlkZWQuXCIpO2lmKG4ub3B0aW9ucy5hY2NlcHRlZEZpbGVzJiZuLm9wdGlvbnMuYWNjZXB0ZWRNaW1lVHlwZXMpdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHByb3ZpZGUgYm90aCAnYWNjZXB0ZWRGaWxlcycgYW5kICdhY2NlcHRlZE1pbWVUeXBlcycuICdhY2NlcHRlZE1pbWVUeXBlcycgaXMgZGVwcmVjYXRlZC5cIik7aWYobi5vcHRpb25zLnVwbG9hZE11bHRpcGxlJiZuLm9wdGlvbnMuY2h1bmtpbmcpdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBzZXQgYm90aDogdXBsb2FkTXVsdGlwbGUgYW5kIGNodW5raW5nLlwiKTtyZXR1cm4gbi5vcHRpb25zLmFjY2VwdGVkTWltZVR5cGVzJiYobi5vcHRpb25zLmFjY2VwdGVkRmlsZXM9bi5vcHRpb25zLmFjY2VwdGVkTWltZVR5cGVzLGRlbGV0ZSBuLm9wdGlvbnMuYWNjZXB0ZWRNaW1lVHlwZXMpLG51bGwhPW4ub3B0aW9ucy5yZW5hbWVGaWxlbmFtZSYmKG4ub3B0aW9ucy5yZW5hbWVGaWxlPWZ1bmN0aW9uKGUpe3JldHVybiBuLm9wdGlvbnMucmVuYW1lRmlsZW5hbWUuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKG4pLGUubmFtZSxlKX0pLFwic3RyaW5nXCI9PXR5cGVvZiBuLm9wdGlvbnMubWV0aG9kJiYobi5vcHRpb25zLm1ldGhvZD1uLm9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkpLChpPW4uZ2V0RXhpc3RpbmdGYWxsYmFjaygpKSYmaS5wYXJlbnROb2RlJiZpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksITEhPT1uLm9wdGlvbnMucHJldmlld3NDb250YWluZXImJihuLm9wdGlvbnMucHJldmlld3NDb250YWluZXI/bi5wcmV2aWV3c0NvbnRhaW5lcj1iLmdldEVsZW1lbnQobi5vcHRpb25zLnByZXZpZXdzQ29udGFpbmVyLFwicHJldmlld3NDb250YWluZXJcIik6bi5wcmV2aWV3c0NvbnRhaW5lcj1uLmVsZW1lbnQpLG4ub3B0aW9ucy5jbGlja2FibGUmJighMD09PW4ub3B0aW9ucy5jbGlja2FibGU/bi5jbGlja2FibGVFbGVtZW50cz1bbi5lbGVtZW50XTpuLmNsaWNrYWJsZUVsZW1lbnRzPWIuZ2V0RWxlbWVudHMobi5vcHRpb25zLmNsaWNrYWJsZSxcImNsaWNrYWJsZVwiKSksbi5pbml0KCksbn1yZXR1cm4gX2NyZWF0ZUNsYXNzKGIsbnVsbCxbe2tleTpcImluaXRDbGFzc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wcm90b3R5cGUuRW1pdHRlcj1FbWl0dGVyLHRoaXMucHJvdG90eXBlLmV2ZW50cz1bXCJkcm9wXCIsXCJkcmFnc3RhcnRcIixcImRyYWdlbmRcIixcImRyYWdlbnRlclwiLFwiZHJhZ292ZXJcIixcImRyYWdsZWF2ZVwiLFwiYWRkZWRmaWxlXCIsXCJhZGRlZGZpbGVzXCIsXCJyZW1vdmVkZmlsZVwiLFwidGh1bWJuYWlsXCIsXCJlcnJvclwiLFwiZXJyb3JtdWx0aXBsZVwiLFwicHJvY2Vzc2luZ1wiLFwicHJvY2Vzc2luZ211bHRpcGxlXCIsXCJ1cGxvYWRwcm9ncmVzc1wiLFwidG90YWx1cGxvYWRwcm9ncmVzc1wiLFwic2VuZGluZ1wiLFwic2VuZGluZ211bHRpcGxlXCIsXCJzdWNjZXNzXCIsXCJzdWNjZXNzbXVsdGlwbGVcIixcImNhbmNlbGVkXCIsXCJjYW5jZWxlZG11bHRpcGxlXCIsXCJjb21wbGV0ZVwiLFwiY29tcGxldGVtdWx0aXBsZVwiLFwicmVzZXRcIixcIm1heGZpbGVzZXhjZWVkZWRcIixcIm1heGZpbGVzcmVhY2hlZFwiLFwicXVldWVjb21wbGV0ZVwiXSx0aGlzLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucz17dXJsOm51bGwsbWV0aG9kOlwicG9zdFwiLHdpdGhDcmVkZW50aWFsczohMSx0aW1lb3V0OjNlNCxwYXJhbGxlbFVwbG9hZHM6Mix1cGxvYWRNdWx0aXBsZTohMSxjaHVua2luZzohMSxmb3JjZUNodW5raW5nOiExLGNodW5rU2l6ZToyZTYscGFyYWxsZWxDaHVua1VwbG9hZHM6ITEscmV0cnlDaHVua3M6ITEscmV0cnlDaHVua3NMaW1pdDozLG1heEZpbGVzaXplOjI1NixwYXJhbU5hbWU6XCJmaWxlXCIsY3JlYXRlSW1hZ2VUaHVtYm5haWxzOiEwLG1heFRodW1ibmFpbEZpbGVzaXplOjEwLHRodW1ibmFpbFdpZHRoOjEyMCx0aHVtYm5haWxIZWlnaHQ6MTIwLHRodW1ibmFpbE1ldGhvZDpcImNyb3BcIixyZXNpemVXaWR0aDpudWxsLHJlc2l6ZUhlaWdodDpudWxsLHJlc2l6ZU1pbWVUeXBlOm51bGwscmVzaXplUXVhbGl0eTouOCxyZXNpemVNZXRob2Q6XCJjb250YWluXCIsZmlsZXNpemVCYXNlOjFlMyxtYXhGaWxlczpudWxsLGhlYWRlcnM6bnVsbCxjbGlja2FibGU6ITAsaWdub3JlSGlkZGVuRmlsZXM6ITAsYWNjZXB0ZWRGaWxlczpudWxsLGFjY2VwdGVkTWltZVR5cGVzOm51bGwsYXV0b1Byb2Nlc3NRdWV1ZTohMCxhdXRvUXVldWU6ITAsYWRkUmVtb3ZlTGlua3M6ITEscHJldmlld3NDb250YWluZXI6bnVsbCxoaWRkZW5JbnB1dENvbnRhaW5lcjpcImJvZHlcIixjYXB0dXJlOm51bGwscmVuYW1lRmlsZW5hbWU6bnVsbCxyZW5hbWVGaWxlOm51bGwsZm9yY2VGYWxsYmFjazohMSxkaWN0RGVmYXVsdE1lc3NhZ2U6XCJEcm9wIGZpbGVzIGhlcmUgdG8gdXBsb2FkXCIsZGljdEZhbGxiYWNrTWVzc2FnZTpcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGRyYWcnbidkcm9wIGZpbGUgdXBsb2Fkcy5cIixkaWN0RmFsbGJhY2tUZXh0OlwiUGxlYXNlIHVzZSB0aGUgZmFsbGJhY2sgZm9ybSBiZWxvdyB0byB1cGxvYWQgeW91ciBmaWxlcyBsaWtlIGluIHRoZSBvbGRlbiBkYXlzLlwiLGRpY3RGaWxlVG9vQmlnOlwiRmlsZSBpcyB0b28gYmlnICh7e2ZpbGVzaXplfX1NaUIpLiBNYXggZmlsZXNpemU6IHt7bWF4RmlsZXNpemV9fU1pQi5cIixkaWN0SW52YWxpZEZpbGVUeXBlOlwiWW91IGNhbid0IHVwbG9hZCBmaWxlcyBvZiB0aGlzIHR5cGUuXCIsZGljdFJlc3BvbnNlRXJyb3I6XCJTZXJ2ZXIgcmVzcG9uZGVkIHdpdGgge3tzdGF0dXNDb2RlfX0gY29kZS5cIixkaWN0Q2FuY2VsVXBsb2FkOlwiQ2FuY2VsIHVwbG9hZFwiLGRpY3RVcGxvYWRDYW5jZWxlZDpcIlVwbG9hZCBjYW5jZWxlZC5cIixkaWN0Q2FuY2VsVXBsb2FkQ29uZmlybWF0aW9uOlwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCB0aGlzIHVwbG9hZD9cIixkaWN0UmVtb3ZlRmlsZTpcIlJlbW92ZSBmaWxlXCIsZGljdFJlbW92ZUZpbGVDb25maXJtYXRpb246bnVsbCxkaWN0TWF4RmlsZXNFeGNlZWRlZDpcIllvdSBjYW4gbm90IHVwbG9hZCBhbnkgbW9yZSBmaWxlcy5cIixkaWN0RmlsZVNpemVVbml0czp7dGI6XCJUQlwiLGdiOlwiR0JcIixtYjpcIk1CXCIsa2I6XCJLQlwiLGI6XCJiXCJ9LGluaXQ6ZnVuY3Rpb24oKXt9LHBhcmFtczpmdW5jdGlvbihlLHQsbil7aWYobilyZXR1cm57ZHp1dWlkOm4uZmlsZS51cGxvYWQudXVpZCxkemNodW5raW5kZXg6bi5pbmRleCxkenRvdGFsZmlsZXNpemU6bi5maWxlLnNpemUsZHpjaHVua3NpemU6dGhpcy5vcHRpb25zLmNodW5rU2l6ZSxkenRvdGFsY2h1bmtjb3VudDpuLmZpbGUudXBsb2FkLnRvdGFsQ2h1bmtDb3VudCxkemNodW5rYnl0ZW9mZnNldDpuLmluZGV4KnRoaXMub3B0aW9ucy5jaHVua1NpemV9fSxhY2NlcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCgpfSxjaHVua3NVcGxvYWRlZDpmdW5jdGlvbihlLHQpe3QoKX0sZmFsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHRoaXMuZWxlbWVudC5jbGFzc05hbWUsXCIgZHotYnJvd3Nlci1ub3Qtc3VwcG9ydGVkXCIpO3ZhciB0LG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpKTt0cnl7Zm9yKG4ucygpOyEodD1uLm4oKSkuZG9uZTspe3ZhciBpPXQudmFsdWU7aWYoLyhefCApZHotbWVzc2FnZSgkfCApLy50ZXN0KGkuY2xhc3NOYW1lKSl7KGU9aSkuY2xhc3NOYW1lPVwiZHotbWVzc2FnZVwiO2JyZWFrfX19Y2F0Y2goZSl7bi5lKGUpfWZpbmFsbHl7bi5mKCl9ZXx8KGU9Yi5jcmVhdGVFbGVtZW50KCc8ZGl2IGNsYXNzPVwiZHotbWVzc2FnZVwiPjxzcGFuPjwvc3Bhbj48L2Rpdj4nKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZSkpO3ZhciByPWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpWzBdO3JldHVybiByJiYobnVsbCE9ci50ZXh0Q29udGVudD9yLnRleHRDb250ZW50PXRoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tNZXNzYWdlOm51bGwhPXIuaW5uZXJUZXh0JiYoci5pbm5lclRleHQ9dGhpcy5vcHRpb25zLmRpY3RGYWxsYmFja01lc3NhZ2UpKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRGYWxsYmFja0Zvcm0oKSl9LHJlc2l6ZTpmdW5jdGlvbihlLHQsbixpKXt2YXIgcj17c3JjWDowLHNyY1k6MCxzcmNXaWR0aDplLndpZHRoLHNyY0hlaWdodDplLmhlaWdodH0sbz1lLndpZHRoL2UuaGVpZ2h0O251bGw9PXQmJm51bGw9PW4/KHQ9ci5zcmNXaWR0aCxuPXIuc3JjSGVpZ2h0KTpudWxsPT10P3Q9bipvOm51bGw9PW4mJihuPXQvbyk7dmFyIGE9KHQ9TWF0aC5taW4odCxyLnNyY1dpZHRoKSkvKG49TWF0aC5taW4obixyLnNyY0hlaWdodCkpO2lmKHIuc3JjV2lkdGg+dHx8ci5zcmNIZWlnaHQ+bilpZihcImNyb3BcIj09PWkpYTxvPyhyLnNyY0hlaWdodD1lLmhlaWdodCxyLnNyY1dpZHRoPXIuc3JjSGVpZ2h0KmEpOihyLnNyY1dpZHRoPWUud2lkdGgsci5zcmNIZWlnaHQ9ci5zcmNXaWR0aC9hKTtlbHNle2lmKFwiY29udGFpblwiIT09aSl0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHJlc2l6ZU1ldGhvZCAnXCIuY29uY2F0KGksXCInXCIpKTthPG8/bj10L286dD1uKm99cmV0dXJuIHIuc3JjWD0oZS53aWR0aC1yLnNyY1dpZHRoKS8yLHIuc3JjWT0oZS5oZWlnaHQtci5zcmNIZWlnaHQpLzIsci50cmdXaWR0aD10LHIudHJnSGVpZ2h0PW4scn0sdHJhbnNmb3JtRmlsZTpmdW5jdGlvbihlLHQpe3JldHVybih0aGlzLm9wdGlvbnMucmVzaXplV2lkdGh8fHRoaXMub3B0aW9ucy5yZXNpemVIZWlnaHQpJiZlLnR5cGUubWF0Y2goL2ltYWdlLiovKT90aGlzLnJlc2l6ZUltYWdlKGUsdGhpcy5vcHRpb25zLnJlc2l6ZVdpZHRoLHRoaXMub3B0aW9ucy5yZXNpemVIZWlnaHQsdGhpcy5vcHRpb25zLnJlc2l6ZU1ldGhvZCx0KTp0KGUpfSxwcmV2aWV3VGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJkei1wcmV2aWV3IGR6LWZpbGUtcHJldmlld1wiPlxcbiAgPGRpdiBjbGFzcz1cImR6LWltYWdlXCI+PGltZyBkYXRhLWR6LXRodW1ibmFpbCAvPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImR6LWRldGFpbHNcIj5cXG4gICAgPGRpdiBjbGFzcz1cImR6LXNpemVcIj48c3BhbiBkYXRhLWR6LXNpemU+PC9zcGFuPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZHotZmlsZW5hbWVcIj48c3BhbiBkYXRhLWR6LW5hbWU+PC9zcGFuPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZHotcHJvZ3Jlc3NcIj48c3BhbiBjbGFzcz1cImR6LXVwbG9hZFwiIGRhdGEtZHotdXBsb2FkcHJvZ3Jlc3M+PC9zcGFuPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImR6LWVycm9yLW1lc3NhZ2VcIj48c3BhbiBkYXRhLWR6LWVycm9ybWVzc2FnZT48L3NwYW4+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZHotc3VjY2Vzcy1tYXJrXCI+XFxuICAgIDxzdmcgd2lkdGg9XCI1NHB4XCIgaGVpZ2h0PVwiNTRweFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxcbiAgICAgIDx0aXRsZT5DaGVjazwvdGl0bGU+XFxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cXG4gICAgICAgIDxwYXRoIGQ9XCJNMjMuNSwzMS44NDMxNDU4IEwxNy41ODUyNDE5LDI1LjkyODM4NzcgQzE2LjAyNDgyNTMsMjQuMzY3OTcxMSAxMy40OTEwMjk0LDI0LjM2NjgzNSAxMS45Mjg5MzIyLDI1LjkyODkzMjIgQzEwLjM3MDAxMzYsMjcuNDg3ODUwOCAxMC4zNjY1OTEyLDMwLjAyMzQ0NTUgMTEuOTI4Mzg3NywzMS41ODUyNDE5IEwyMC40MTQ3NTgxLDQwLjA3MTYxMjMgQzIwLjUxMzM5OTksNDAuMTcwMjU0MSAyMC42MTU5MzE1LDQwLjI2MjY2NDkgMjAuNzIxODYxNSw0MC4zNDg4NDM1IEMyMi4yODM1NjY5LDQxLjg3MjU2NTEgMjQuNzk0MjM0LDQxLjg2MjYyMDIgMjYuMzQ2MTU2NCw0MC4zMTA2OTc4IEw0My4zMTA2OTc4LDIzLjM0NjE1NjQgQzQ0Ljg3NzEwMjEsMjEuNzc5NzUyMSA0NC44NzU4MDU3LDE5LjI0ODM4ODcgNDMuMzEzNzA4NSwxNy42ODYyOTE1IEM0MS43NTQ3ODk5LDE2LjEyNzM3MjkgMzkuMjE3NjAzNSwxNi4xMjU1NDIyIDM3LjY1Mzg0MzYsMTcuNjg5MzAyMiBMMjMuNSwzMS44NDMxNDU4IFogTTI3LDUzIEM0MS4zNTk0MDM1LDUzIDUzLDQxLjM1OTQwMzUgNTMsMjcgQzUzLDEyLjY0MDU5NjUgNDEuMzU5NDAzNSwxIDI3LDEgQzEyLjY0MDU5NjUsMSAxLDEyLjY0MDU5NjUgMSwyNyBDMSw0MS4zNTk0MDM1IDEyLjY0MDU5NjUsNTMgMjcsNTMgWlwiIHN0cm9rZS1vcGFjaXR5PVwiMC4xOTg3OTQxNThcIiBzdHJva2U9XCIjNzQ3NDc0XCIgZmlsbC1vcGFjaXR5PVwiMC44MTY1MTk0NzVcIiBmaWxsPVwiI0ZGRkZGRlwiPjwvcGF0aD5cXG4gICAgICA8L2c+XFxuICAgIDwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZHotZXJyb3ItbWFya1wiPlxcbiAgICA8c3ZnIHdpZHRoPVwiNTRweFwiIGhlaWdodD1cIjU0cHhcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cXG4gICAgICA8dGl0bGU+RXJyb3I8L3RpdGxlPlxcbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XFxuICAgICAgICA8ZyBzdHJva2U9XCIjNzQ3NDc0XCIgc3Ryb2tlLW9wYWNpdHk9XCIwLjE5ODc5NDE1OFwiIGZpbGw9XCIjRkZGRkZGXCIgZmlsbC1vcGFjaXR5PVwiMC44MTY1MTk0NzVcIj5cXG4gICAgICAgICAgPHBhdGggZD1cIk0zMi42NTY4NTQyLDI5IEwzOC4zMTA2OTc4LDIzLjM0NjE1NjQgQzM5Ljg3NzEwMjEsMjEuNzc5NzUyMSAzOS44NzU4MDU3LDE5LjI0ODM4ODcgMzguMzEzNzA4NSwxNy42ODYyOTE1IEMzNi43NTQ3ODk5LDE2LjEyNzM3MjkgMzQuMjE3NjAzNSwxNi4xMjU1NDIyIDMyLjY1Mzg0MzYsMTcuNjg5MzAyMiBMMjcsMjMuMzQzMTQ1OCBMMjEuMzQ2MTU2NCwxNy42ODkzMDIyIEMxOS43ODIzOTY1LDE2LjEyNTU0MjIgMTcuMjQ1MjEwMSwxNi4xMjczNzI5IDE1LjY4NjI5MTUsMTcuNjg2MjkxNSBDMTQuMTI0MTk0MywxOS4yNDgzODg3IDE0LjEyMjg5NzksMjEuNzc5NzUyMSAxNS42ODkzMDIyLDIzLjM0NjE1NjQgTDIxLjM0MzE0NTgsMjkgTDE1LjY4OTMwMjIsMzQuNjUzODQzNiBDMTQuMTIyODk3OSwzNi4yMjAyNDc5IDE0LjEyNDE5NDMsMzguNzUxNjExMyAxNS42ODYyOTE1LDQwLjMxMzcwODUgQzE3LjI0NTIxMDEsNDEuODcyNjI3MSAxOS43ODIzOTY1LDQxLjg3NDQ1NzggMjEuMzQ2MTU2NCw0MC4zMTA2OTc4IEwyNywzNC42NTY4NTQyIEwzMi42NTM4NDM2LDQwLjMxMDY5NzggQzM0LjIxNzYwMzUsNDEuODc0NDU3OCAzNi43NTQ3ODk5LDQxLjg3MjYyNzEgMzguMzEzNzA4NSw0MC4zMTM3MDg1IEMzOS44NzU4MDU3LDM4Ljc1MTYxMTMgMzkuODc3MTAyMSwzNi4yMjAyNDc5IDM4LjMxMDY5NzgsMzQuNjUzODQzNiBMMzIuNjU2ODU0MiwyOSBaIE0yNyw1MyBDNDEuMzU5NDAzNSw1MyA1Myw0MS4zNTk0MDM1IDUzLDI3IEM1MywxMi42NDA1OTY1IDQxLjM1OTQwMzUsMSAyNywxIEMxMi42NDA1OTY1LDEgMSwxMi42NDA1OTY1IDEsMjcgQzEsNDEuMzU5NDAzNSAxMi42NDA1OTY1LDUzIDI3LDUzIFpcIj48L3BhdGg+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9nPlxcbiAgICA8L3N2Zz5cXG4gIDwvZGl2PlxcbjwvZGl2PicsZHJvcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWRyYWctaG92ZXJcIil9LGRyYWdzdGFydDpmdW5jdGlvbigpe30sZHJhZ2VuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWRyYWctaG92ZXJcIil9LGRyYWdlbnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWRyYWctaG92ZXJcIil9LGRyYWdvdmVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotZHJhZy1ob3ZlclwiKX0sZHJhZ2xlYXZlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotZHJhZy1ob3ZlclwiKX0scGFzdGU6ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotc3RhcnRlZFwiKX0sYWRkZWRmaWxlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7aWYodGhpcy5lbGVtZW50PT09dGhpcy5wcmV2aWV3c0NvbnRhaW5lciYmdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1zdGFydGVkXCIpLHRoaXMucHJldmlld3NDb250YWluZXIpe3QucHJldmlld0VsZW1lbnQ9Yi5jcmVhdGVFbGVtZW50KHRoaXMub3B0aW9ucy5wcmV2aWV3VGVtcGxhdGUudHJpbSgpKSx0LnByZXZpZXdUZW1wbGF0ZT10LnByZXZpZXdFbGVtZW50LHRoaXMucHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQodC5wcmV2aWV3RWxlbWVudCk7dmFyIGUsaT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0LnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei1uYW1lXVwiKSk7dHJ5e2ZvcihpLnMoKTshKGU9aS5uKCkpLmRvbmU7KXt2YXIgcj1lLnZhbHVlO3IudGV4dENvbnRlbnQ9dC5uYW1lfX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX12YXIgbyxhPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHQucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LXNpemVdXCIpKTt0cnl7Zm9yKGEucygpOyEobz1hLm4oKSkuZG9uZTspKHI9by52YWx1ZSkuaW5uZXJIVE1MPXRoaXMuZmlsZXNpemUodC5zaXplKX1jYXRjaChlKXthLmUoZSl9ZmluYWxseXthLmYoKX10aGlzLm9wdGlvbnMuYWRkUmVtb3ZlTGlua3MmJih0Ll9yZW1vdmVMaW5rPWIuY3JlYXRlRWxlbWVudCgnPGEgY2xhc3M9XCJkei1yZW1vdmVcIiBocmVmPVwiamF2YXNjcmlwdDp1bmRlZmluZWQ7XCIgZGF0YS1kei1yZW1vdmU+Jy5jb25jYXQodGhpcy5vcHRpb25zLmRpY3RSZW1vdmVGaWxlLFwiPC9hPlwiKSksdC5wcmV2aWV3RWxlbWVudC5hcHBlbmRDaGlsZCh0Ll9yZW1vdmVMaW5rKSk7dmFyIGwscz1mdW5jdGlvbihlKXtyZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdC5zdGF0dXM9PT1iLlVQTE9BRElORz9iLmNvbmZpcm0obi5vcHRpb25zLmRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb24sZnVuY3Rpb24oKXtyZXR1cm4gbi5yZW1vdmVGaWxlKHQpfSk6bi5vcHRpb25zLmRpY3RSZW1vdmVGaWxlQ29uZmlybWF0aW9uP2IuY29uZmlybShuLm9wdGlvbnMuZGljdFJlbW92ZUZpbGVDb25maXJtYXRpb24sZnVuY3Rpb24oKXtyZXR1cm4gbi5yZW1vdmVGaWxlKHQpfSk6bi5yZW1vdmVGaWxlKHQpfSx1PV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHQucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LXJlbW92ZV1cIikpO3RyeXtmb3IodS5zKCk7IShsPXUubigpKS5kb25lOyl7bC52YWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzKX19Y2F0Y2goZSl7dS5lKGUpfWZpbmFsbHl7dS5mKCl9fX0scmVtb3ZlZGZpbGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUucHJldmlld0VsZW1lbnQmJm51bGwhPWUucHJldmlld0VsZW1lbnQucGFyZW50Tm9kZSYmZS5wcmV2aWV3RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUucHJldmlld0VsZW1lbnQpLHRoaXMuX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzKCl9LHRodW1ibmFpbDpmdW5jdGlvbihlLHQpe2lmKGUucHJldmlld0VsZW1lbnQpe2UucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWZpbGUtcHJldmlld1wiKTt2YXIgbixpPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LXRodW1ibmFpbF1cIikpO3RyeXtmb3IoaS5zKCk7IShuPWkubigpKS5kb25lOyl7dmFyIHI9bi52YWx1ZTtyLmFsdD1lLm5hbWUsci5zcmM9dH19Y2F0Y2goZSl7aS5lKGUpfWZpbmFsbHl7aS5mKCl9cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZS5wcmV2aWV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotaW1hZ2UtcHJldmlld1wiKX0sMSl9fSxlcnJvcjpmdW5jdGlvbihlLHQpe2lmKGUucHJldmlld0VsZW1lbnQpe2UucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWVycm9yXCIpLFwic3RyaW5nXCIhPXR5cGVvZiB0JiZ0LmVycm9yJiYodD10LmVycm9yKTt2YXIgbixpPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LWVycm9ybWVzc2FnZV1cIikpO3RyeXtmb3IoaS5zKCk7IShuPWkubigpKS5kb25lOyl7bi52YWx1ZS50ZXh0Q29udGVudD10fX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX19fSxlcnJvcm11bHRpcGxlOmZ1bmN0aW9uKCl7fSxwcm9jZXNzaW5nOmZ1bmN0aW9uKGUpe2lmKGUucHJldmlld0VsZW1lbnQmJihlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1wcm9jZXNzaW5nXCIpLGUuX3JlbW92ZUxpbmspKXJldHVybiBlLl9yZW1vdmVMaW5rLmlubmVySFRNTD10aGlzLm9wdGlvbnMuZGljdENhbmNlbFVwbG9hZH0scHJvY2Vzc2luZ211bHRpcGxlOmZ1bmN0aW9uKCl7fSx1cGxvYWRwcm9ncmVzczpmdW5jdGlvbihlLHQpe2lmKGUucHJldmlld0VsZW1lbnQpe3ZhciBuLGk9X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZHotdXBsb2FkcHJvZ3Jlc3NdXCIpKTt0cnl7Zm9yKGkucygpOyEobj1pLm4oKSkuZG9uZTspe3ZhciByPW4udmFsdWU7XCJQUk9HUkVTU1wiPT09ci5ub2RlTmFtZT9yLnZhbHVlPXQ6ci5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdCh0LFwiJVwiKX19Y2F0Y2goZSl7aS5lKGUpfWZpbmFsbHl7aS5mKCl9fX0sdG90YWx1cGxvYWRwcm9ncmVzczpmdW5jdGlvbigpe30sc2VuZGluZzpmdW5jdGlvbigpe30sc2VuZGluZ211bHRpcGxlOmZ1bmN0aW9uKCl7fSxzdWNjZXNzOmZ1bmN0aW9uKGUpe2lmKGUucHJldmlld0VsZW1lbnQpcmV0dXJuIGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LXN1Y2Nlc3NcIil9LHN1Y2Nlc3NtdWx0aXBsZTpmdW5jdGlvbigpe30sY2FuY2VsZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsZSx0aGlzLm9wdGlvbnMuZGljdFVwbG9hZENhbmNlbGVkKX0sY2FuY2VsZWRtdWx0aXBsZTpmdW5jdGlvbigpe30sY29tcGxldGU6ZnVuY3Rpb24oZSl7aWYoZS5fcmVtb3ZlTGluayYmKGUuX3JlbW92ZUxpbmsuaW5uZXJIVE1MPXRoaXMub3B0aW9ucy5kaWN0UmVtb3ZlRmlsZSksZS5wcmV2aWV3RWxlbWVudClyZXR1cm4gZS5wcmV2aWV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotY29tcGxldGVcIil9LGNvbXBsZXRlbXVsdGlwbGU6ZnVuY3Rpb24oKXt9LG1heGZpbGVzZXhjZWVkZWQ6ZnVuY3Rpb24oKXt9LG1heGZpbGVzcmVhY2hlZDpmdW5jdGlvbigpe30scXVldWVjb21wbGV0ZTpmdW5jdGlvbigpe30sYWRkZWRmaWxlczpmdW5jdGlvbigpe319LHRoaXMucHJvdG90eXBlLl90aHVtYm5haWxRdWV1ZT1bXSx0aGlzLnByb3RvdHlwZS5fcHJvY2Vzc2luZ1RodW1ibmFpbD0hMX19LHtrZXk6XCJleHRlbmRcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSgxPHQ/dC0xOjApLGk9MTtpPHQ7aSsrKW5baS0xXT1hcmd1bWVudHNbaV07Zm9yKHZhciByPTAsbz1uO3I8by5sZW5ndGg7cisrKXt2YXIgYT1vW3JdO2Zvcih2YXIgbCBpbiBhKXt2YXIgcz1hW2xdO2VbbF09c319cmV0dXJuIGV9fV0pLF9jcmVhdGVDbGFzcyhiLFt7a2V5OlwiZ2V0QWNjZXB0ZWRGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFjY2VwdGVkfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9fSx7a2V5OlwiZ2V0UmVqZWN0ZWRGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFlLmFjY2VwdGVkfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9fSx7a2V5OlwiZ2V0RmlsZXNXaXRoU3RhdHVzXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnN0YXR1cz09PXR9KS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX19LHtrZXk6XCJnZXRRdWV1ZWRGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0RmlsZXNXaXRoU3RhdHVzKGIuUVVFVUVEKX19LHtrZXk6XCJnZXRVcGxvYWRpbmdGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0RmlsZXNXaXRoU3RhdHVzKGIuVVBMT0FESU5HKX19LHtrZXk6XCJnZXRBZGRlZEZpbGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRGaWxlc1dpdGhTdGF0dXMoYi5BRERFRCl9fSx7a2V5OlwiZ2V0QWN0aXZlRmlsZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5zdGF0dXM9PT1iLlVQTE9BRElOR3x8ZS5zdGF0dXM9PT1iLlFVRVVFRH0pLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pfX0se2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBvPXRoaXM7aWYoXCJmb3JtXCI9PT10aGlzLmVsZW1lbnQudGFnTmFtZSYmdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImVuY3R5cGVcIixcIm11bHRpcGFydC9mb3JtLWRhdGFcIiksdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B6b25lXCIpJiYhdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotbWVzc2FnZVwiKSYmdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudCgnPGRpdiBjbGFzcz1cImR6LWRlZmF1bHQgZHotbWVzc2FnZVwiPjxidXR0b24gY2xhc3M9XCJkei1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+Jy5jb25jYXQodGhpcy5vcHRpb25zLmRpY3REZWZhdWx0TWVzc2FnZSxcIjwvYnV0dG9uPjwvZGl2PlwiKSkpLHRoaXMuY2xpY2thYmxlRWxlbWVudHMubGVuZ3RoKXshZnVuY3Rpb24gcigpe3JldHVybiBvLmhpZGRlbkZpbGVJbnB1dCYmby5oaWRkZW5GaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvLmhpZGRlbkZpbGVJbnB1dCksby5oaWRkZW5GaWxlSW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLG8uaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImZpbGVcIiksKG51bGw9PT1vLm9wdGlvbnMubWF4RmlsZXN8fDE8by5vcHRpb25zLm1heEZpbGVzKSYmby5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIixcIm11bHRpcGxlXCIpLG8uaGlkZGVuRmlsZUlucHV0LmNsYXNzTmFtZT1cImR6LWhpZGRlbi1pbnB1dFwiLG51bGwhPT1vLm9wdGlvbnMuYWNjZXB0ZWRGaWxlcyYmby5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwiYWNjZXB0XCIsby5vcHRpb25zLmFjY2VwdGVkRmlsZXMpLG51bGwhPT1vLm9wdGlvbnMuY2FwdHVyZSYmby5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2FwdHVyZVwiLG8ub3B0aW9ucy5jYXB0dXJlKSxvLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsby5oaWRkZW5GaWxlSW5wdXQuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLG8uaGlkZGVuRmlsZUlucHV0LnN0eWxlLnRvcD1cIjBcIixvLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5sZWZ0PVwiMFwiLG8uaGlkZGVuRmlsZUlucHV0LnN0eWxlLmhlaWdodD1cIjBcIixvLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS53aWR0aD1cIjBcIixiLmdldEVsZW1lbnQoby5vcHRpb25zLmhpZGRlbklucHV0Q29udGFpbmVyLFwiaGlkZGVuSW5wdXRDb250YWluZXJcIikuYXBwZW5kQ2hpbGQoby5oaWRkZW5GaWxlSW5wdXQpLG8uaGlkZGVuRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPW8uaGlkZGVuRmlsZUlucHV0LmZpbGVzO2lmKGUubGVuZ3RoKXt2YXIgdCxuPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUpO3RyeXtmb3Iobi5zKCk7ISh0PW4ubigpKS5kb25lOyl7dmFyIGk9dC52YWx1ZTtvLmFkZEZpbGUoaSl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfX1yZXR1cm4gby5lbWl0KFwiYWRkZWRmaWxlc1wiLGUpLHIoKX0pfSgpfXRoaXMuVVJMPW51bGwhPT13aW5kb3cuVVJMP3dpbmRvdy5VUkw6d2luZG93LndlYmtpdFVSTDt2YXIgZSx0PV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuZXZlbnRzKTt0cnl7Zm9yKHQucygpOyEoZT10Lm4oKSkuZG9uZTspe3ZhciBuPWUudmFsdWU7dGhpcy5vbihuLHRoaXMub3B0aW9uc1tuXSl9fWNhdGNoKGUpe3QuZShlKX1maW5hbGx5e3QuZigpfXRoaXMub24oXCJ1cGxvYWRwcm9ncmVzc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIG8udXBkYXRlVG90YWxVcGxvYWRQcm9ncmVzcygpfSksdGhpcy5vbihcInJlbW92ZWRmaWxlXCIsZnVuY3Rpb24oKXtyZXR1cm4gby51cGRhdGVUb3RhbFVwbG9hZFByb2dyZXNzKCl9KSx0aGlzLm9uKFwiY2FuY2VsZWRcIixmdW5jdGlvbihlKXtyZXR1cm4gby5lbWl0KFwiY29tcGxldGVcIixlKX0pLHRoaXMub24oXCJjb21wbGV0ZVwiLGZ1bmN0aW9uKGUpe2lmKDA9PT1vLmdldEFkZGVkRmlsZXMoKS5sZW5ndGgmJjA9PT1vLmdldFVwbG9hZGluZ0ZpbGVzKCkubGVuZ3RoJiYwPT09by5nZXRRdWV1ZWRGaWxlcygpLmxlbmd0aClyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBvLmVtaXQoXCJxdWV1ZWNvbXBsZXRlXCIpfSwwKX0pO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKGUuZGF0YVRyYW5zZmVyLnR5cGVzKWZvcih2YXIgdD0wO3Q8ZS5kYXRhVHJhbnNmZXIudHlwZXMubGVuZ3RoO3QrKylpZihcIkZpbGVzXCI9PT1lLmRhdGFUcmFuc2Zlci50eXBlc1t0XSlyZXR1cm4hMDtyZXR1cm4hMX0oZSkmJihlLnN0b3BQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITEpfXJldHVybiB0aGlzLmxpc3RlbmVycz1be2VsZW1lbnQ6dGhpcy5lbGVtZW50LGV2ZW50czp7ZHJhZ3N0YXJ0OmZ1bmN0aW9uKGUpe3JldHVybiBvLmVtaXQoXCJkcmFnc3RhcnRcIixlKX0sZHJhZ2VudGVyOmZ1bmN0aW9uKGUpe3JldHVybiBpKGUpLG8uZW1pdChcImRyYWdlbnRlclwiLGUpfSxkcmFnb3ZlcjpmdW5jdGlvbihlKXt2YXIgdDt0cnl7dD1lLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkfWNhdGNoKGUpe31yZXR1cm4gZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdD1cIm1vdmVcIj09PXR8fFwibGlua01vdmVcIj09PXQ/XCJtb3ZlXCI6XCJjb3B5XCIsaShlKSxvLmVtaXQoXCJkcmFnb3ZlclwiLGUpfSxkcmFnbGVhdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIG8uZW1pdChcImRyYWdsZWF2ZVwiLGUpfSxkcm9wOmZ1bmN0aW9uKGUpe3JldHVybiBpKGUpLG8uZHJvcChlKX0sZHJhZ2VuZDpmdW5jdGlvbihlKXtyZXR1cm4gby5lbWl0KFwiZHJhZ2VuZFwiLGUpfX19XSx0aGlzLmNsaWNrYWJsZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIG8ubGlzdGVuZXJzLnB1c2goe2VsZW1lbnQ6dCxldmVudHM6e2NsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0PT09by5lbGVtZW50JiZlLnRhcmdldCE9PW8uZWxlbWVudCYmIWIuZWxlbWVudEluc2lkZShlLnRhcmdldCxvLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1tZXNzYWdlXCIpKXx8by5oaWRkZW5GaWxlSW5wdXQuY2xpY2soKSwhMH19fSl9KSx0aGlzLmVuYWJsZSgpLHRoaXMub3B0aW9ucy5pbml0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGlzYWJsZSgpLHRoaXMucmVtb3ZlQWxsRmlsZXMoITApLG51bGwhPXRoaXMuaGlkZGVuRmlsZUlucHV0JiZ0aGlzLmhpZGRlbkZpbGVJbnB1dC5wYXJlbnROb2RlJiYodGhpcy5oaWRkZW5GaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCksdGhpcy5oaWRkZW5GaWxlSW5wdXQ9bnVsbCksZGVsZXRlIHRoaXMuZWxlbWVudC5kcm9wem9uZSxiLmluc3RhbmNlcy5zcGxpY2UoYi5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwxKX19LHtrZXk6XCJ1cGRhdGVUb3RhbFVwbG9hZFByb2dyZXNzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj0wO2lmKHRoaXMuZ2V0QWN0aXZlRmlsZXMoKS5sZW5ndGgpe3ZhciBpLHI9X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5nZXRBY3RpdmVGaWxlcygpKTt0cnl7Zm9yKHIucygpOyEoaT1yLm4oKSkuZG9uZTspe3ZhciBvPWkudmFsdWU7dCs9by51cGxvYWQuYnl0ZXNTZW50LG4rPW8udXBsb2FkLnRvdGFsfX1jYXRjaChlKXtyLmUoZSl9ZmluYWxseXtyLmYoKX1lPTEwMCp0L259ZWxzZSBlPTEwMDtyZXR1cm4gdGhpcy5lbWl0KFwidG90YWx1cGxvYWRwcm9ncmVzc1wiLGUsbix0KX19LHtrZXk6XCJfZ2V0UGFyYW1OYW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLnBhcmFtTmFtZT90aGlzLm9wdGlvbnMucGFyYW1OYW1lKGUpOlwiXCIuY29uY2F0KHRoaXMub3B0aW9ucy5wYXJhbU5hbWUpLmNvbmNhdCh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGU/XCJbXCIuY29uY2F0KGUsXCJdXCIpOlwiXCIpfX0se2tleTpcIl9yZW5hbWVGaWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpcy5vcHRpb25zLnJlbmFtZUZpbGU/ZS5uYW1lOnRoaXMub3B0aW9ucy5yZW5hbWVGaWxlKGUpfX0se2tleTpcImdldEZhbGxiYWNrRm9ybVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGUsdDtpZihlPXRoaXMuZ2V0RXhpc3RpbmdGYWxsYmFjaygpKXJldHVybiBlO3ZhciBuPSc8ZGl2IGNsYXNzPVwiZHotZmFsbGJhY2tcIj4nO3RoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tUZXh0JiYobis9XCI8cD5cIi5jb25jYXQodGhpcy5vcHRpb25zLmRpY3RGYWxsYmFja1RleHQsXCI8L3A+XCIpKSxuKz0nPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cIicuY29uY2F0KHRoaXMuX2dldFBhcmFtTmFtZSgwKSwnXCIgJykuY29uY2F0KHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZT8nbXVsdGlwbGU9XCJtdWx0aXBsZVwiJzp2b2lkIDAsJyAvPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQhXCI+PC9kaXY+Jyk7dmFyIGk9Yi5jcmVhdGVFbGVtZW50KG4pO3JldHVyblwiRk9STVwiIT09dGhpcy5lbGVtZW50LnRhZ05hbWU/KHQ9Yi5jcmVhdGVFbGVtZW50KCc8Zm9ybSBhY3Rpb249XCInLmNvbmNhdCh0aGlzLm9wdGlvbnMudXJsLCdcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cIicpLmNvbmNhdCh0aGlzLm9wdGlvbnMubWV0aG9kLCdcIj48L2Zvcm0+JykpKS5hcHBlbmRDaGlsZChpKToodGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImVuY3R5cGVcIixcIm11bHRpcGFydC9mb3JtLWRhdGFcIiksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLHRoaXMub3B0aW9ucy5tZXRob2QpKSxudWxsIT10P3Q6aX19LHtrZXk6XCJnZXRFeGlzdGluZ0ZhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9ZnVuY3Rpb24oZSl7dmFyIHQsbj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlKTt0cnl7Zm9yKG4ucygpOyEodD1uLm4oKSkuZG9uZTspe3ZhciBpPXQudmFsdWU7aWYoLyhefCApZmFsbGJhY2soJHwgKS8udGVzdChpLmNsYXNzTmFtZSkpcmV0dXJuIGl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfX0sdD0wLG49W1wiZGl2XCIsXCJmb3JtXCJdO3Q8bi5sZW5ndGg7dCsrKXt2YXIgaSxyPW5bdF07aWYoaT1lKHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShyKSkpcmV0dXJuIGl9fX0se2tleTpcInNldHVwRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxpc3RlbmVycy5tYXAoZnVuY3Rpb24oaSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9W107Zm9yKHZhciB0IGluIGkuZXZlbnRzKXt2YXIgbj1pLmV2ZW50c1t0XTtlLnB1c2goaS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxuLCExKSl9cmV0dXJuIGV9KCl9KX19LHtrZXk6XCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGlzdGVuZXJzLm1hcChmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1bXTtmb3IodmFyIHQgaW4gaS5ldmVudHMpe3ZhciBuPWkuZXZlbnRzW3RdO2UucHVzaChpLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sITEpKX1yZXR1cm4gZX0oKX0pfX0se2tleTpcImRpc2FibGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuY2xpY2thYmxlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHotY2xpY2thYmxlXCIpfSksdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpLHRoaXMuZGlzYWJsZWQ9ITAsdGhpcy5maWxlcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FuY2VsVXBsb2FkKGUpfSl9fSx7a2V5OlwiZW5hYmxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZGVsZXRlIHRoaXMuZGlzYWJsZWQsdGhpcy5jbGlja2FibGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTGlzdC5hZGQoXCJkei1jbGlja2FibGVcIil9KSx0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKX19LHtrZXk6XCJmaWxlc2l6ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1cImJcIjtpZigwPGUpe2Zvcih2YXIgaT1bXCJ0YlwiLFwiZ2JcIixcIm1iXCIsXCJrYlwiLFwiYlwiXSxyPTA7cjxpLmxlbmd0aDtyKyspe3ZhciBvPWlbcl07aWYoTWF0aC5wb3codGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZSw0LXIpLzEwPD1lKXt0PWUvTWF0aC5wb3codGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZSw0LXIpLG49bzticmVha319dD1NYXRoLnJvdW5kKDEwKnQpLzEwfXJldHVyblwiPHN0cm9uZz5cIi5jb25jYXQodCxcIjwvc3Ryb25nPiBcIikuY29uY2F0KHRoaXMub3B0aW9ucy5kaWN0RmlsZVNpemVVbml0c1tuXSl9fSx7a2V5OlwiX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9dGhpcy5vcHRpb25zLm1heEZpbGVzJiZ0aGlzLmdldEFjY2VwdGVkRmlsZXMoKS5sZW5ndGg+PXRoaXMub3B0aW9ucy5tYXhGaWxlcz8odGhpcy5nZXRBY2NlcHRlZEZpbGVzKCkubGVuZ3RoPT09dGhpcy5vcHRpb25zLm1heEZpbGVzJiZ0aGlzLmVtaXQoXCJtYXhmaWxlc3JlYWNoZWRcIix0aGlzLmZpbGVzKSx0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LW1heC1maWxlcy1yZWFjaGVkXCIpKTp0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LW1heC1maWxlcy1yZWFjaGVkXCIpfX0se2tleTpcImRyb3BcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLmRhdGFUcmFuc2Zlcil7dGhpcy5lbWl0KFwiZHJvcFwiLGUpO2Zvcih2YXIgdD1bXSxuPTA7bjxlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7bisrKXRbbl09ZS5kYXRhVHJhbnNmZXIuZmlsZXNbbl07aWYodC5sZW5ndGgpe3ZhciBpPWUuZGF0YVRyYW5zZmVyLml0ZW1zO2kmJmkubGVuZ3RoJiZudWxsIT1pWzBdLndlYmtpdEdldEFzRW50cnk/dGhpcy5fYWRkRmlsZXNGcm9tSXRlbXMoaSk6dGhpcy5oYW5kbGVGaWxlcyh0KX10aGlzLmVtaXQoXCJhZGRlZGZpbGVzXCIsdCl9fX0se2tleTpcInBhc3RlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYobnVsbCE9X19ndWFyZF9fKG51bGwhPWU/ZS5jbGlwYm9hcmREYXRhOnZvaWQgMCxmdW5jdGlvbihlKXtyZXR1cm4gZS5pdGVtc30pKXt0aGlzLmVtaXQoXCJwYXN0ZVwiLGUpO3ZhciB0PWUuY2xpcGJvYXJkRGF0YS5pdGVtcztyZXR1cm4gdC5sZW5ndGg/dGhpcy5fYWRkRmlsZXNGcm9tSXRlbXModCk6dm9pZCAwfX19LHtrZXk6XCJoYW5kbGVGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZSk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgaT10LnZhbHVlO3RoaXMuYWRkRmlsZShpKX19Y2F0Y2goZSl7bi5lKGUpfWZpbmFsbHl7bi5mKCl9fX0se2tleTpcIl9hZGRGaWxlc0Zyb21JdGVtc1wiLHZhbHVlOmZ1bmN0aW9uKG8pe3ZhciBhPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGUsdD1bXSxuPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pO3RyeXtmb3Iobi5zKCk7IShlPW4ubigpKS5kb25lOyl7dmFyIGkscj1lLnZhbHVlO251bGwhPXIud2Via2l0R2V0QXNFbnRyeSYmKGk9ci53ZWJraXRHZXRBc0VudHJ5KCkpP2kuaXNGaWxlP3QucHVzaChhLmFkZEZpbGUoci5nZXRBc0ZpbGUoKSkpOmkuaXNEaXJlY3Rvcnk/dC5wdXNoKGEuX2FkZEZpbGVzRnJvbURpcmVjdG9yeShpLGkubmFtZSkpOnQucHVzaCh2b2lkIDApOm51bGwhPXIuZ2V0QXNGaWxlJiYobnVsbD09ci5raW5kfHxcImZpbGVcIj09PXIua2luZCk/dC5wdXNoKGEuYWRkRmlsZShyLmdldEFzRmlsZSgpKSk6dC5wdXNoKHZvaWQgMCl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfXJldHVybiB0fSgpfX0se2tleTpcIl9hZGRGaWxlc0Zyb21EaXJlY3RvcnlcIix2YWx1ZTpmdW5jdGlvbihlLG8pe2Z1bmN0aW9uIHQodCl7cmV0dXJuIF9fZ3VhcmRNZXRob2RfXyhjb25zb2xlLFwibG9nXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGUubG9nKHQpfSl9dmFyIGE9dGhpcyxuPWUuY3JlYXRlUmVhZGVyKCk7cmV0dXJuIGZ1bmN0aW9uIHIoKXtyZXR1cm4gbi5yZWFkRW50cmllcyhmdW5jdGlvbihlKXtpZigwPGUubGVuZ3RoKXt2YXIgdCxuPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUpO3RyeXtmb3Iobi5zKCk7ISh0PW4ubigpKS5kb25lOyl7dmFyIGk9dC52YWx1ZTtpLmlzRmlsZT9pLmZpbGUoZnVuY3Rpb24oZSl7aWYoIWEub3B0aW9ucy5pZ25vcmVIaWRkZW5GaWxlc3x8XCIuXCIhPT1lLm5hbWUuc3Vic3RyaW5nKDAsMSkpcmV0dXJuIGUuZnVsbFBhdGg9XCJcIi5jb25jYXQobyxcIi9cIikuY29uY2F0KGUubmFtZSksYS5hZGRGaWxlKGUpfSk6aS5pc0RpcmVjdG9yeSYmYS5fYWRkRmlsZXNGcm9tRGlyZWN0b3J5KGksXCJcIi5jb25jYXQobyxcIi9cIikuY29uY2F0KGkubmFtZSkpfX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX1yKCl9cmV0dXJuIG51bGx9LHQpfSgpfX0se2tleTpcImFjY2VwdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5vcHRpb25zLm1heEZpbGVzaXplJiZlLnNpemU+MTAyNCp0aGlzLm9wdGlvbnMubWF4RmlsZXNpemUqMTAyND90KHRoaXMub3B0aW9ucy5kaWN0RmlsZVRvb0JpZy5yZXBsYWNlKFwie3tmaWxlc2l6ZX19XCIsTWF0aC5yb3VuZChlLnNpemUvMTAyNC8xMC4yNCkvMTAwKS5yZXBsYWNlKFwie3ttYXhGaWxlc2l6ZX19XCIsdGhpcy5vcHRpb25zLm1heEZpbGVzaXplKSk6Yi5pc1ZhbGlkRmlsZShlLHRoaXMub3B0aW9ucy5hY2NlcHRlZEZpbGVzKT9udWxsIT10aGlzLm9wdGlvbnMubWF4RmlsZXMmJnRoaXMuZ2V0QWNjZXB0ZWRGaWxlcygpLmxlbmd0aD49dGhpcy5vcHRpb25zLm1heEZpbGVzPyh0KHRoaXMub3B0aW9ucy5kaWN0TWF4RmlsZXNFeGNlZWRlZC5yZXBsYWNlKFwie3ttYXhGaWxlc319XCIsdGhpcy5vcHRpb25zLm1heEZpbGVzKSksdGhpcy5lbWl0KFwibWF4ZmlsZXNleGNlZWRlZFwiLGUpKTp0aGlzLm9wdGlvbnMuYWNjZXB0LmNhbGwodGhpcyxlLHQpOnQodGhpcy5vcHRpb25zLmRpY3RJbnZhbGlkRmlsZVR5cGUpfX0se2tleTpcImFkZEZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzO3QudXBsb2FkPXt1dWlkOmIudXVpZHY0KCkscHJvZ3Jlc3M6MCx0b3RhbDp0LnNpemUsYnl0ZXNTZW50OjAsZmlsZW5hbWU6dGhpcy5fcmVuYW1lRmlsZSh0KX0sdGhpcy5maWxlcy5wdXNoKHQpLHQuc3RhdHVzPWIuQURERUQsdGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsdCksdGhpcy5fZW5xdWV1ZVRodW1ibmFpbCh0KSx0aGlzLmFjY2VwdCh0LGZ1bmN0aW9uKGUpe2U/KHQuYWNjZXB0ZWQ9ITEsbi5fZXJyb3JQcm9jZXNzaW5nKFt0XSxlKSk6KHQuYWNjZXB0ZWQ9ITAsbi5vcHRpb25zLmF1dG9RdWV1ZSYmbi5lbnF1ZXVlRmlsZSh0KSksbi5fdXBkYXRlTWF4RmlsZXNSZWFjaGVkQ2xhc3MoKX0pfX0se2tleTpcImVucXVldWVGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZSk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgaT10LnZhbHVlO3RoaXMuZW5xdWV1ZUZpbGUoaSl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfXJldHVybiBudWxsfX0se2tleTpcImVucXVldWVGaWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZihlLnN0YXR1cyE9PWIuQURERUR8fCEwIT09ZS5hY2NlcHRlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZpbGUgY2FuJ3QgYmUgcXVldWVkIGJlY2F1c2UgaXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgb3Igd2FzIHJlamVjdGVkLlwiKTtpZihlLnN0YXR1cz1iLlFVRVVFRCx0aGlzLm9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSlyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiB0LnByb2Nlc3NRdWV1ZSgpfSwwKX19LHtrZXk6XCJfZW5xdWV1ZVRodW1ibmFpbFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYodGhpcy5vcHRpb25zLmNyZWF0ZUltYWdlVGh1bWJuYWlscyYmZS50eXBlLm1hdGNoKC9pbWFnZS4qLykmJmUuc2l6ZTw9MTAyNCp0aGlzLm9wdGlvbnMubWF4VGh1bWJuYWlsRmlsZXNpemUqMTAyNClyZXR1cm4gdGhpcy5fdGh1bWJuYWlsUXVldWUucHVzaChlKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQuX3Byb2Nlc3NUaHVtYm5haWxRdWV1ZSgpfSwwKX19LHtrZXk6XCJfcHJvY2Vzc1RodW1ibmFpbFF1ZXVlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2lmKCF0aGlzLl9wcm9jZXNzaW5nVGh1bWJuYWlsJiYwIT09dGhpcy5fdGh1bWJuYWlsUXVldWUubGVuZ3RoKXt0aGlzLl9wcm9jZXNzaW5nVGh1bWJuYWlsPSEwO3ZhciBuPXRoaXMuX3RodW1ibmFpbFF1ZXVlLnNoaWZ0KCk7cmV0dXJuIHRoaXMuY3JlYXRlVGh1bWJuYWlsKG4sdGhpcy5vcHRpb25zLnRodW1ibmFpbFdpZHRoLHRoaXMub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsdGhpcy5vcHRpb25zLnRodW1ibmFpbE1ldGhvZCwhMCxmdW5jdGlvbihlKXtyZXR1cm4gdC5lbWl0KFwidGh1bWJuYWlsXCIsbixlKSx0Ll9wcm9jZXNzaW5nVGh1bWJuYWlsPSExLHQuX3Byb2Nlc3NUaHVtYm5haWxRdWV1ZSgpfSl9fX0se2tleTpcInJlbW92ZUZpbGVcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnN0YXR1cz09PWIuVVBMT0FESU5HJiZ0aGlzLmNhbmNlbFVwbG9hZChlKSx0aGlzLmZpbGVzPXdpdGhvdXQodGhpcy5maWxlcyxlKSx0aGlzLmVtaXQoXCJyZW1vdmVkZmlsZVwiLGUpLDA9PT10aGlzLmZpbGVzLmxlbmd0aClyZXR1cm4gdGhpcy5lbWl0KFwicmVzZXRcIil9fSx7a2V5OlwicmVtb3ZlQWxsRmlsZXNcIix2YWx1ZTpmdW5jdGlvbihlKXtudWxsPT1lJiYoZT0hMSk7dmFyIHQsbj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0aGlzLmZpbGVzLnNsaWNlKCkpO3RyeXtmb3Iobi5zKCk7ISh0PW4ubigpKS5kb25lOyl7dmFyIGk9dC52YWx1ZTtpLnN0YXR1cz09PWIuVVBMT0FESU5HJiYhZXx8dGhpcy5yZW1vdmVGaWxlKGkpfX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX1yZXR1cm4gbnVsbH19LHtrZXk6XCJyZXNpemVJbWFnZVwiLHZhbHVlOmZ1bmN0aW9uKHIsZSx0LG4sbyl7dmFyIGE9dGhpcztyZXR1cm4gdGhpcy5jcmVhdGVUaHVtYm5haWwocixlLHQsbiwhMCxmdW5jdGlvbihlLHQpe2lmKG51bGw9PXQpcmV0dXJuIG8ocik7dmFyIG49YS5vcHRpb25zLnJlc2l6ZU1pbWVUeXBlO251bGw9PW4mJihuPXIudHlwZSk7dmFyIGk9dC50b0RhdGFVUkwobixhLm9wdGlvbnMucmVzaXplUXVhbGl0eSk7cmV0dXJuXCJpbWFnZS9qcGVnXCIhPT1uJiZcImltYWdlL2pwZ1wiIT09bnx8KGk9RXhpZlJlc3RvcmUucmVzdG9yZShyLmRhdGFVUkwsaSkpLG8oYi5kYXRhVVJJdG9CbG9iKGkpKX0pfX0se2tleTpcImNyZWF0ZVRodW1ibmFpbFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkscixvKXt2YXIgYT10aGlzLGw9bmV3IEZpbGVSZWFkZXI7bC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmRhdGFVUkw9bC5yZXN1bHQsXCJpbWFnZS9zdmcreG1sXCIhPT1lLnR5cGU/YS5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKGUsdCxuLGkscixvKTpudWxsIT1vJiZvKGwucmVzdWx0KX0sbC5yZWFkQXNEYXRhVVJMKGUpfX0se2tleTpcImRpc3BsYXlFeGlzdGluZ0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0LGUsbixpLHIpe3ZhciBvPXRoaXMsYT0hKDQ8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09cil8fHI7aWYodGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsdCksdGhpcy5lbWl0KFwiY29tcGxldGVcIix0KSxhKXt0LmRhdGFVUkw9ZSx0aGlzLmNyZWF0ZVRodW1ibmFpbEZyb21VcmwodCx0aGlzLm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsdGhpcy5vcHRpb25zLnRodW1ibmFpbEhlaWdodCx0aGlzLm9wdGlvbnMucmVzaXplTWV0aG9kLHRoaXMub3B0aW9ucy5maXhPcmllbnRhdGlvbixmdW5jdGlvbihlKXtvLmVtaXQoXCJ0aHVtYm5haWxcIix0LGUpLG4mJm4oKX0saSl9ZWxzZSB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIix0LGUpLG4mJm4oKX19LHtrZXk6XCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsXCIsdmFsdWU6ZnVuY3Rpb24obyxhLGwscyx0LHUsZSl7dmFyIGM9dGhpcyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7cmV0dXJuIGUmJihkLmNyb3NzT3JpZ2luPWUpLHQ9XCJmcm9tLWltYWdlXCIhPWdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuaW1hZ2VPcmllbnRhdGlvbiYmdCxkLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBlPWZ1bmN0aW9uKGUpe3JldHVybiBlKDEpfTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgRVhJRiYmbnVsbCE9PUVYSUYmJnQmJihlPWZ1bmN0aW9uKGUpe3JldHVybiBFWElGLmdldERhdGEoZCxmdW5jdGlvbigpe3JldHVybiBlKEVYSUYuZ2V0VGFnKHRoaXMsXCJPcmllbnRhdGlvblwiKSl9KX0pLGUoZnVuY3Rpb24oZSl7by53aWR0aD1kLndpZHRoLG8uaGVpZ2h0PWQuaGVpZ2h0O3ZhciB0PWMub3B0aW9ucy5yZXNpemUuY2FsbChjLG8sYSxsLHMpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxpPW4uZ2V0Q29udGV4dChcIjJkXCIpO3N3aXRjaChuLndpZHRoPXQudHJnV2lkdGgsbi5oZWlnaHQ9dC50cmdIZWlnaHQsNDxlJiYobi53aWR0aD10LnRyZ0hlaWdodCxuLmhlaWdodD10LnRyZ1dpZHRoKSxlKXtjYXNlIDI6aS50cmFuc2xhdGUobi53aWR0aCwwKSxpLnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgMzppLnRyYW5zbGF0ZShuLndpZHRoLG4uaGVpZ2h0KSxpLnJvdGF0ZShNYXRoLlBJKTticmVhaztjYXNlIDQ6aS50cmFuc2xhdGUoMCxuLmhlaWdodCksaS5zY2FsZSgxLC0xKTticmVhaztjYXNlIDU6aS5yb3RhdGUoLjUqTWF0aC5QSSksaS5zY2FsZSgxLC0xKTticmVhaztjYXNlIDY6aS5yb3RhdGUoLjUqTWF0aC5QSSksaS50cmFuc2xhdGUoMCwtbi53aWR0aCk7YnJlYWs7Y2FzZSA3Omkucm90YXRlKC41Kk1hdGguUEkpLGkudHJhbnNsYXRlKG4uaGVpZ2h0LC1uLndpZHRoKSxpLnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgODppLnJvdGF0ZSgtLjUqTWF0aC5QSSksaS50cmFuc2xhdGUoLW4uaGVpZ2h0LDApfWRyYXdJbWFnZUlPU0ZpeChpLGQsbnVsbCE9dC5zcmNYP3Quc3JjWDowLG51bGwhPXQuc3JjWT90LnNyY1k6MCx0LnNyY1dpZHRoLHQuc3JjSGVpZ2h0LG51bGwhPXQudHJnWD90LnRyZ1g6MCxudWxsIT10LnRyZ1k/dC50cmdZOjAsdC50cmdXaWR0aCx0LnRyZ0hlaWdodCk7dmFyIHI9bi50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7aWYobnVsbCE9dSlyZXR1cm4gdShyLG4pfSl9LG51bGwhPXUmJihkLm9uZXJyb3I9dSksZC5zcmM9by5kYXRhVVJMfX0se2tleTpcInByb2Nlc3NRdWV1ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcHRpb25zLnBhcmFsbGVsVXBsb2Fkcyx0PXRoaXMuZ2V0VXBsb2FkaW5nRmlsZXMoKS5sZW5ndGgsbj10O2lmKCEoZTw9dCkpe3ZhciBpPXRoaXMuZ2V0UXVldWVkRmlsZXMoKTtpZigwPGkubGVuZ3RoKXtpZih0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpcmV0dXJuIHRoaXMucHJvY2Vzc0ZpbGVzKGkuc2xpY2UoMCxlLXQpKTtmb3IoO248ZTspe2lmKCFpLmxlbmd0aClyZXR1cm47dGhpcy5wcm9jZXNzRmlsZShpLnNoaWZ0KCkpLG4rK319fX19LHtrZXk6XCJwcm9jZXNzRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnByb2Nlc3NGaWxlcyhbZV0pfX0se2tleTpcInByb2Nlc3NGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZSk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgaT10LnZhbHVlO2kucHJvY2Vzc2luZz0hMCxpLnN0YXR1cz1iLlVQTE9BRElORyx0aGlzLmVtaXQoXCJwcm9jZXNzaW5nXCIsaSl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfXJldHVybiB0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUmJnRoaXMuZW1pdChcInByb2Nlc3NpbmdtdWx0aXBsZVwiLGUpLHRoaXMudXBsb2FkRmlsZXMoZSl9fSx7a2V5OlwiX2dldEZpbGVzV2l0aFhoclwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS54aHI9PT10fSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9fSx7a2V5OlwiY2FuY2VsVXBsb2FkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdGF0dXM9PT1iLlVQTE9BRElORyl7dmFyIHQsbj10aGlzLl9nZXRGaWxlc1dpdGhYaHIoZS54aHIpLGk9X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobik7dHJ5e2ZvcihpLnMoKTshKHQ9aS5uKCkpLmRvbmU7KXt0LnZhbHVlLnN0YXR1cz1iLkNBTkNFTEVEfX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX12b2lkIDAhPT1lLnhociYmZS54aHIuYWJvcnQoKTt2YXIgcixvPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG4pO3RyeXtmb3Ioby5zKCk7IShyPW8ubigpKS5kb25lOyl7dmFyIGE9ci52YWx1ZTt0aGlzLmVtaXQoXCJjYW5jZWxlZFwiLGEpfX1jYXRjaChlKXtvLmUoZSl9ZmluYWxseXtvLmYoKX10aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUmJnRoaXMuZW1pdChcImNhbmNlbGVkbXVsdGlwbGVcIixuKX1lbHNlIGUuc3RhdHVzIT09Yi5BRERFRCYmZS5zdGF0dXMhPT1iLlFVRVVFRHx8KGUuc3RhdHVzPWIuQ0FOQ0VMRUQsdGhpcy5lbWl0KFwiY2FuY2VsZWRcIixlKSx0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUmJnRoaXMuZW1pdChcImNhbmNlbGVkbXVsdGlwbGVcIixbZV0pKTtpZih0aGlzLm9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSlyZXR1cm4gdGhpcy5wcm9jZXNzUXVldWUoKX19LHtrZXk6XCJyZXNvbHZlT3B0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4gZTtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSgxPHQ/dC0xOjApLGk9MTtpPHQ7aSsrKW5baS0xXT1hcmd1bWVudHNbaV07cmV0dXJuIGUuYXBwbHkodGhpcyxuKX19LHtrZXk6XCJ1cGxvYWRGaWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudXBsb2FkRmlsZXMoW2VdKX19LHtrZXk6XCJ1cGxvYWRGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKHMpe3ZhciB1PXRoaXM7dGhpcy5fdHJhbnNmb3JtRmlsZXMocyxmdW5jdGlvbihlKXtpZih1Lm9wdGlvbnMuY2h1bmtpbmcpe3ZhciB0PWVbMF07c1swXS51cGxvYWQuY2h1bmtlZD11Lm9wdGlvbnMuY2h1bmtpbmcmJih1Lm9wdGlvbnMuZm9yY2VDaHVua2luZ3x8dC5zaXplPnUub3B0aW9ucy5jaHVua1NpemUpLHNbMF0udXBsb2FkLnRvdGFsQ2h1bmtDb3VudD1NYXRoLmNlaWwodC5zaXplL3Uub3B0aW9ucy5jaHVua1NpemUpfWlmKHNbMF0udXBsb2FkLmNodW5rZWQpe3ZhciByPXNbMF0sbz1lWzBdO3IudXBsb2FkLmNodW5rcz1bXTt2YXIgaT1mdW5jdGlvbigpe2Zvcih2YXIgZT0wO3ZvaWQgMCE9PXIudXBsb2FkLmNodW5rc1tlXTspZSsrO2lmKCEoZT49ci51cGxvYWQudG90YWxDaHVua0NvdW50KSl7MDt2YXIgdD1lKnUub3B0aW9ucy5jaHVua1NpemUsbj1NYXRoLm1pbih0K3Uub3B0aW9ucy5jaHVua1NpemUsby5zaXplKSxpPXtuYW1lOnUuX2dldFBhcmFtTmFtZSgwKSxkYXRhOm8ud2Via2l0U2xpY2U/by53ZWJraXRTbGljZSh0LG4pOm8uc2xpY2UodCxuKSxmaWxlbmFtZTpyLnVwbG9hZC5maWxlbmFtZSxjaHVua0luZGV4OmV9O3IudXBsb2FkLmNodW5rc1tlXT17ZmlsZTpyLGluZGV4OmUsZGF0YUJsb2NrOmksc3RhdHVzOmIuVVBMT0FESU5HLHByb2dyZXNzOjAscmV0cmllczowfSx1Ll91cGxvYWREYXRhKHMsW2ldKX19O2lmKHIudXBsb2FkLmZpbmlzaGVkQ2h1bmtVcGxvYWQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ITA7ZS5zdGF0dXM9Yi5TVUNDRVNTLGUuZGF0YUJsb2NrPW51bGwsZS54aHI9bnVsbDtmb3IodmFyIG49MDtuPHIudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDtuKyspe2lmKHZvaWQgMD09PXIudXBsb2FkLmNodW5rc1tuXSlyZXR1cm4gaSgpO3IudXBsb2FkLmNodW5rc1tuXS5zdGF0dXMhPT1iLlNVQ0NFU1MmJih0PSExKX10JiZ1Lm9wdGlvbnMuY2h1bmtzVXBsb2FkZWQocixmdW5jdGlvbigpe3UuX2ZpbmlzaGVkKHMsXCJcIixudWxsKX0pfSx1Lm9wdGlvbnMucGFyYWxsZWxDaHVua1VwbG9hZHMpZm9yKHZhciBuPTA7bjxyLnVwbG9hZC50b3RhbENodW5rQ291bnQ7bisrKWkoKTtlbHNlIGkoKX1lbHNle2Zvcih2YXIgYT1bXSxsPTA7bDxzLmxlbmd0aDtsKyspYVtsXT17bmFtZTp1Ll9nZXRQYXJhbU5hbWUobCksZGF0YTplW2xdLGZpbGVuYW1lOnNbbF0udXBsb2FkLmZpbGVuYW1lfTt1Ll91cGxvYWREYXRhKHMsYSl9fSl9fSx7a2V5OlwiX2dldENodW5rXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPGUudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDtuKyspaWYodm9pZCAwIT09ZS51cGxvYWQuY2h1bmtzW25dJiZlLnVwbG9hZC5jaHVua3Nbbl0ueGhyPT09dClyZXR1cm4gZS51cGxvYWQuY2h1bmtzW25dfX0se2tleTpcIl91cGxvYWREYXRhXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbixpPXRoaXMscj1uZXcgWE1MSHR0cFJlcXVlc3Qsbz1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0KTt0cnl7Zm9yKG8ucygpOyEobj1vLm4oKSkuZG9uZTspe24udmFsdWUueGhyPXJ9fWNhdGNoKGUpe28uZShlKX1maW5hbGx5e28uZigpfXRbMF0udXBsb2FkLmNodW5rZWQmJih0WzBdLnVwbG9hZC5jaHVua3NbZVswXS5jaHVua0luZGV4XS54aHI9cik7dmFyIGE9dGhpcy5yZXNvbHZlT3B0aW9uKHRoaXMub3B0aW9ucy5tZXRob2QsdCksbD10aGlzLnJlc29sdmVPcHRpb24odGhpcy5vcHRpb25zLnVybCx0KTtyLm9wZW4oYSxsLCEwKSxyLnRpbWVvdXQ9dGhpcy5yZXNvbHZlT3B0aW9uKHRoaXMub3B0aW9ucy50aW1lb3V0LHQpLHIud2l0aENyZWRlbnRpYWxzPSEhdGhpcy5vcHRpb25zLndpdGhDcmVkZW50aWFscyxyLm9ubG9hZD1mdW5jdGlvbihlKXtpLl9maW5pc2hlZFVwbG9hZGluZyh0LHIsZSl9LHIub250aW1lb3V0PWZ1bmN0aW9uKCl7aS5faGFuZGxlVXBsb2FkRXJyb3IodCxyLFwiUmVxdWVzdCB0aW1lZG91dCBhZnRlciBcIi5jb25jYXQoaS5vcHRpb25zLnRpbWVvdXQvMWUzLFwiIHNlY29uZHNcIikpfSxyLm9uZXJyb3I9ZnVuY3Rpb24oKXtpLl9oYW5kbGVVcGxvYWRFcnJvcih0LHIpfSwobnVsbCE9ci51cGxvYWQ/ci51cGxvYWQ6cikub25wcm9ncmVzcz1mdW5jdGlvbihlKXtyZXR1cm4gaS5fdXBkYXRlRmlsZXNVcGxvYWRQcm9ncmVzcyh0LHIsZSl9O3ZhciBzPXtBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uXCIsXCJDYWNoZS1Db250cm9sXCI6XCJuby1jYWNoZVwiLFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOlwiWE1MSHR0cFJlcXVlc3RcIn07Zm9yKHZhciB1IGluIHRoaXMub3B0aW9ucy5oZWFkZXJzJiZiLmV4dGVuZChzLHRoaXMub3B0aW9ucy5oZWFkZXJzKSxzKXt2YXIgYz1zW3VdO2MmJnIuc2V0UmVxdWVzdEhlYWRlcih1LGMpfXZhciBkPW5ldyBGb3JtRGF0YTtpZih0aGlzLm9wdGlvbnMucGFyYW1zKXt2YXIgcD10aGlzLm9wdGlvbnMucGFyYW1zO2Zvcih2YXIgaCBpblwiZnVuY3Rpb25cIj09dHlwZW9mIHAmJihwPXAuY2FsbCh0aGlzLHQscix0WzBdLnVwbG9hZC5jaHVua2VkP3RoaXMuX2dldENodW5rKHRbMF0scik6bnVsbCkpLHApe3ZhciBmPXBbaF07aWYoQXJyYXkuaXNBcnJheShmKSlmb3IodmFyIG09MDttPGYubGVuZ3RoO20rKylkLmFwcGVuZChoLGZbbV0pO2Vsc2UgZC5hcHBlbmQoaCxmKX19dmFyIHYsZz1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0KTt0cnl7Zm9yKGcucygpOyEodj1nLm4oKSkuZG9uZTspe3ZhciB5PXYudmFsdWU7dGhpcy5lbWl0KFwic2VuZGluZ1wiLHkscixkKX19Y2F0Y2goZSl7Zy5lKGUpfWZpbmFsbHl7Zy5mKCl9dGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlJiZ0aGlzLmVtaXQoXCJzZW5kaW5nbXVsdGlwbGVcIix0LHIsZCksdGhpcy5fYWRkRm9ybUVsZW1lbnREYXRhKGQpO2Zvcih2YXIgRj0wO0Y8ZS5sZW5ndGg7RisrKXt2YXIgaz1lW0ZdO2QuYXBwZW5kKGsubmFtZSxrLmRhdGEsay5maWxlbmFtZSl9dGhpcy5zdWJtaXRSZXF1ZXN0KHIsZCx0KX19LHtrZXk6XCJfdHJhbnNmb3JtRmlsZXNcIix2YWx1ZTpmdW5jdGlvbihuLGkpe2Zvcih2YXIgZT10aGlzLHI9W10sbz0wLHQ9ZnVuY3Rpb24odCl7ZS5vcHRpb25zLnRyYW5zZm9ybUZpbGUuY2FsbChlLG5bdF0sZnVuY3Rpb24oZSl7clt0XT1lLCsrbz09PW4ubGVuZ3RoJiZpKHIpfSl9LGE9MDthPG4ubGVuZ3RoO2ErKyl0KGEpfX0se2tleTpcIl9hZGRGb3JtRWxlbWVudERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihcIkZPUk1cIj09PXRoaXMuZWxlbWVudC50YWdOYW1lKXt2YXIgdCxuPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvblwiKSk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgaT10LnZhbHVlLHI9aS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLG89aS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO2lmKG89byYmby50b0xvd2VyQ2FzZSgpLG51bGwhPXIpaWYoXCJTRUxFQ1RcIj09PWkudGFnTmFtZSYmaS5oYXNBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKSl7dmFyIGEsbD1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihpLm9wdGlvbnMpO3RyeXtmb3IobC5zKCk7IShhPWwubigpKS5kb25lOyl7dmFyIHM9YS52YWx1ZTtzLnNlbGVjdGVkJiZlLmFwcGVuZChyLHMudmFsdWUpfX1jYXRjaChlKXtsLmUoZSl9ZmluYWxseXtsLmYoKX19ZWxzZSghb3x8XCJjaGVja2JveFwiIT09byYmXCJyYWRpb1wiIT09b3x8aS5jaGVja2VkKSYmZS5hcHBlbmQocixpLnZhbHVlKX19Y2F0Y2goZSl7bi5lKGUpfWZpbmFsbHl7bi5mKCl9fX19LHtrZXk6XCJfdXBkYXRlRmlsZXNVcGxvYWRQcm9ncmVzc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtpZih2b2lkIDAhPT1uKXtpZihpPTEwMCpuLmxvYWRlZC9uLnRvdGFsLGVbMF0udXBsb2FkLmNodW5rZWQpe3ZhciByPWVbMF0sbz10aGlzLl9nZXRDaHVuayhyLHQpO28ucHJvZ3Jlc3M9aSxvLnRvdGFsPW4udG90YWwsby5ieXRlc1NlbnQ9bi5sb2FkZWQ7ci51cGxvYWQucHJvZ3Jlc3M9MCxyLnVwbG9hZC50b3RhbD0wO2Zvcih2YXIgYT1yLnVwbG9hZC5ieXRlc1NlbnQ9MDthPHIudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDthKyspdm9pZCAwIT09ci51cGxvYWQuY2h1bmtzW2FdJiZ2b2lkIDAhPT1yLnVwbG9hZC5jaHVua3NbYV0ucHJvZ3Jlc3MmJihyLnVwbG9hZC5wcm9ncmVzcys9ci51cGxvYWQuY2h1bmtzW2FdLnByb2dyZXNzLHIudXBsb2FkLnRvdGFsKz1yLnVwbG9hZC5jaHVua3NbYV0udG90YWwsci51cGxvYWQuYnl0ZXNTZW50Kz1yLnVwbG9hZC5jaHVua3NbYV0uYnl0ZXNTZW50KTtyLnVwbG9hZC5wcm9ncmVzcz1yLnVwbG9hZC5wcm9ncmVzcy9yLnVwbG9hZC50b3RhbENodW5rQ291bnR9ZWxzZXt2YXIgbCxzPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUpO3RyeXtmb3Iocy5zKCk7IShsPXMubigpKS5kb25lOyl7dmFyIHU9bC52YWx1ZTt1LnVwbG9hZC5wcm9ncmVzcz1pLHUudXBsb2FkLnRvdGFsPW4udG90YWwsdS51cGxvYWQuYnl0ZXNTZW50PW4ubG9hZGVkfX1jYXRjaChlKXtzLmUoZSl9ZmluYWxseXtzLmYoKX19dmFyIGMsZD1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlKTt0cnl7Zm9yKGQucygpOyEoYz1kLm4oKSkuZG9uZTspe3ZhciBwPWMudmFsdWU7dGhpcy5lbWl0KFwidXBsb2FkcHJvZ3Jlc3NcIixwLHAudXBsb2FkLnByb2dyZXNzLHAudXBsb2FkLmJ5dGVzU2VudCl9fWNhdGNoKGUpe2QuZShlKX1maW5hbGx5e2QuZigpfX1lbHNle3ZhciBoPSEwO2k9MTAwO3ZhciBmLG09X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZSk7dHJ5e2ZvcihtLnMoKTshKGY9bS5uKCkpLmRvbmU7KXt2YXIgdj1mLnZhbHVlOzEwMD09PXYudXBsb2FkLnByb2dyZXNzJiZ2LnVwbG9hZC5ieXRlc1NlbnQ9PT12LnVwbG9hZC50b3RhbHx8KGg9ITEpLHYudXBsb2FkLnByb2dyZXNzPWksdi51cGxvYWQuYnl0ZXNTZW50PXYudXBsb2FkLnRvdGFsfX1jYXRjaChlKXttLmUoZSl9ZmluYWxseXttLmYoKX1pZihoKXJldHVybjt2YXIgZyx5PV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUpO3RyeXtmb3IoeS5zKCk7IShnPXkubigpKS5kb25lOyl7dmFyIEY9Zy52YWx1ZTt0aGlzLmVtaXQoXCJ1cGxvYWRwcm9ncmVzc1wiLEYsaSxGLnVwbG9hZC5ieXRlc1NlbnQpfX1jYXRjaChlKXt5LmUoZSl9ZmluYWxseXt5LmYoKX19fX0se2tleTpcIl9maW5pc2hlZFVwbG9hZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtpZihlWzBdLnN0YXR1cyE9PWIuQ0FOQ0VMRUQmJjQ9PT10LnJlYWR5U3RhdGUpe2lmKFwiYXJyYXlidWZmZXJcIiE9PXQucmVzcG9uc2VUeXBlJiZcImJsb2JcIiE9PXQucmVzcG9uc2VUeXBlJiYoaT10LnJlc3BvbnNlVGV4dCx0LmdldFJlc3BvbnNlSGVhZGVyKFwiY29udGVudC10eXBlXCIpJiZ+dC5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSkpdHJ5e2k9SlNPTi5wYXJzZShpKX1jYXRjaChlKXtuPWUsaT1cIkludmFsaWQgSlNPTiByZXNwb25zZSBmcm9tIHNlcnZlci5cIn10aGlzLl91cGRhdGVGaWxlc1VwbG9hZFByb2dyZXNzKGUpLDIwMDw9dC5zdGF0dXMmJnQuc3RhdHVzPDMwMD9lWzBdLnVwbG9hZC5jaHVua2VkP2VbMF0udXBsb2FkLmZpbmlzaGVkQ2h1bmtVcGxvYWQodGhpcy5fZ2V0Q2h1bmsoZVswXSx0KSk6dGhpcy5fZmluaXNoZWQoZSxpLG4pOnRoaXMuX2hhbmRsZVVwbG9hZEVycm9yKGUsdCxpKX19fSx7a2V5OlwiX2hhbmRsZVVwbG9hZEVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2lmKGVbMF0uc3RhdHVzIT09Yi5DQU5DRUxFRCl7aWYoZVswXS51cGxvYWQuY2h1bmtlZCYmdGhpcy5vcHRpb25zLnJldHJ5Q2h1bmtzKXt2YXIgaT10aGlzLl9nZXRDaHVuayhlWzBdLHQpO2lmKGkucmV0cmllcysrPHRoaXMub3B0aW9ucy5yZXRyeUNodW5rc0xpbWl0KXJldHVybiB2b2lkIHRoaXMuX3VwbG9hZERhdGEoZSxbaS5kYXRhQmxvY2tdKTtjb25zb2xlLndhcm4oXCJSZXRyaWVkIHRoaXMgY2h1bmsgdG9vIG9mdGVuLiBHaXZpbmcgdXAuXCIpfXRoaXMuX2Vycm9yUHJvY2Vzc2luZyhlLG58fHRoaXMub3B0aW9ucy5kaWN0UmVzcG9uc2VFcnJvci5yZXBsYWNlKFwie3tzdGF0dXNDb2RlfX1cIix0LnN0YXR1cyksdCl9fX0se2tleTpcInN1Ym1pdFJlcXVlc3RcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2Uuc2VuZCh0KX19LHtrZXk6XCJfZmluaXNoZWRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGkscj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlKTt0cnl7Zm9yKHIucygpOyEoaT1yLm4oKSkuZG9uZTspe3ZhciBvPWkudmFsdWU7by5zdGF0dXM9Yi5TVUNDRVNTLHRoaXMuZW1pdChcInN1Y2Nlc3NcIixvLHQsbiksdGhpcy5lbWl0KFwiY29tcGxldGVcIixvKX19Y2F0Y2goZSl7ci5lKGUpfWZpbmFsbHl7ci5mKCl9aWYodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlJiYodGhpcy5lbWl0KFwic3VjY2Vzc211bHRpcGxlXCIsZSx0LG4pLHRoaXMuZW1pdChcImNvbXBsZXRlbXVsdGlwbGVcIixlKSksdGhpcy5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWUpcmV0dXJuIHRoaXMucHJvY2Vzc1F1ZXVlKCl9fSx7a2V5OlwiX2Vycm9yUHJvY2Vzc2luZ1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGUpO3RyeXtmb3Ioci5zKCk7IShpPXIubigpKS5kb25lOyl7dmFyIG89aS52YWx1ZTtvLnN0YXR1cz1iLkVSUk9SLHRoaXMuZW1pdChcImVycm9yXCIsbyx0LG4pLHRoaXMuZW1pdChcImNvbXBsZXRlXCIsbyl9fWNhdGNoKGUpe3IuZShlKX1maW5hbGx5e3IuZigpfWlmKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSYmKHRoaXMuZW1pdChcImVycm9ybXVsdGlwbGVcIixlLHQsbiksdGhpcy5lbWl0KFwiY29tcGxldGVtdWx0aXBsZVwiLGUpKSx0aGlzLm9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSlyZXR1cm4gdGhpcy5wcm9jZXNzUXVldWUoKX19XSxbe2tleTpcInV1aWR2NFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csZnVuY3Rpb24oZSl7dmFyIHQ9MTYqTWF0aC5yYW5kb20oKXwwO3JldHVybihcInhcIj09PWU/dDozJnR8OCkudG9TdHJpbmcoMTYpfSl9fV0pLGJ9KCk7RHJvcHpvbmUuaW5pdENsYXNzKCksRHJvcHpvbmUudmVyc2lvbj1cIjUuNy4yXCIsRHJvcHpvbmUub3B0aW9ucz17fSxEcm9wem9uZS5vcHRpb25zRm9yRWxlbWVudD1mdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT9Ecm9wem9uZS5vcHRpb25zW2NhbWVsaXplKGUuZ2V0QXR0cmlidXRlKFwiaWRcIikpXTp2b2lkIDB9LERyb3B6b25lLmluc3RhbmNlcz1bXSxEcm9wem9uZS5mb3JFbGVtZW50PWZ1bmN0aW9uKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpKSxudWxsPT0obnVsbCE9ZT9lLmRyb3B6b25lOnZvaWQgMCkpdGhyb3cgbmV3IEVycm9yKFwiTm8gRHJvcHpvbmUgZm91bmQgZm9yIGdpdmVuIGVsZW1lbnQuIFRoaXMgaXMgcHJvYmFibHkgYmVjYXVzZSB5b3UncmUgdHJ5aW5nIHRvIGFjY2VzcyBpdCBiZWZvcmUgRHJvcHpvbmUgaGFkIHRoZSB0aW1lIHRvIGluaXRpYWxpemUuIFVzZSB0aGUgYGluaXRgIG9wdGlvbiB0byBzZXR1cCBhbnkgYWRkaXRpb25hbCBvYnNlcnZlcnMgb24geW91ciBEcm9wem9uZS5cIik7cmV0dXJuIGUuZHJvcHpvbmV9LERyb3B6b25lLmF1dG9EaXNjb3Zlcj0hMCxEcm9wem9uZS5kaXNjb3Zlcj1mdW5jdGlvbigpe3ZhciBvO2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3B6b25lXCIpO2Vsc2V7bz1bXTt2YXIgZT1mdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZSx0PVtdLG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIocik7dHJ5e2ZvcihuLnMoKTshKGU9bi5uKCkpLmRvbmU7KXt2YXIgaT1lLnZhbHVlOy8oXnwgKWRyb3B6b25lKCR8ICkvLnRlc3QoaS5jbGFzc05hbWUpP3QucHVzaChvLnB1c2goaSkpOnQucHVzaCh2b2lkIDApfX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX1yZXR1cm4gdH0oKX07ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSksZShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIikpfXJldHVybiBmdW5jdGlvbigpe3ZhciBlLHQ9W10sbj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKTt0cnl7Zm9yKG4ucygpOyEoZT1uLm4oKSkuZG9uZTspe3ZhciBpPWUudmFsdWU7ITEhPT1Ecm9wem9uZS5vcHRpb25zRm9yRWxlbWVudChpKT90LnB1c2gobmV3IERyb3B6b25lKGkpKTp0LnB1c2godm9pZCAwKX19Y2F0Y2goZSl7bi5lKGUpfWZpbmFsbHl7bi5mKCl9cmV0dXJuIHR9KCl9LERyb3B6b25lLmJsYWNrbGlzdGVkQnJvd3NlcnM9Wy9vcGVyYS4qKE1hY2ludG9zaHxXaW5kb3dzIFBob25lKS4qdmVyc2lvblxcLzEyL2ldLERyb3B6b25lLmlzQnJvd3NlclN1cHBvcnRlZD1mdW5jdGlvbigpe3ZhciBlPSEwO2lmKHdpbmRvdy5GaWxlJiZ3aW5kb3cuRmlsZVJlYWRlciYmd2luZG93LkZpbGVMaXN0JiZ3aW5kb3cuQmxvYiYmd2luZG93LkZvcm1EYXRhJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yKWlmKFwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSl7dmFyIHQsbj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihEcm9wem9uZS5ibGFja2xpc3RlZEJyb3dzZXJzKTt0cnl7Zm9yKG4ucygpOyEodD1uLm4oKSkuZG9uZTspe3QudmFsdWUudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmKGU9ITEpfX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX19ZWxzZSBlPSExO2Vsc2UgZT0hMTtyZXR1cm4gZX0sRHJvcHpvbmUuZGF0YVVSSXRvQmxvYj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9YXRvYihlLnNwbGl0KFwiLFwiKVsxXSksbj1lLnNwbGl0KFwiLFwiKVswXS5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCI7XCIpWzBdLGk9bmV3IEFycmF5QnVmZmVyKHQubGVuZ3RoKSxyPW5ldyBVaW50OEFycmF5KGkpLG89MCxhPXQubGVuZ3RoLGw9MDw9YTtsP288PWE6YTw9bztsP28rKzpvLS0pcltvXT10LmNoYXJDb2RlQXQobyk7cmV0dXJuIG5ldyBCbG9iKFtpXSx7dHlwZTpufSl9O3ZhciB3aXRob3V0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlIT09dH0pLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pfSxjYW1lbGl6ZT1mdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9bXFwtX10oXFx3KS9nLGZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpfSl9O0Ryb3B6b25lLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5pbm5lckhUTUw9ZSx0LmNoaWxkTm9kZXNbMF19LERyb3B6b25lLmVsZW1lbnRJbnNpZGU9ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4hMDtmb3IoO2U9ZS5wYXJlbnROb2RlOylpZihlPT09dClyZXR1cm4hMDtyZXR1cm4hMX0sRHJvcHpvbmUuZ2V0RWxlbWVudD1mdW5jdGlvbihlLHQpe3ZhciBuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlP249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTpudWxsIT1lLm5vZGVUeXBlJiYobj1lKSxudWxsPT1uKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYFwiLmNvbmNhdCh0LFwiYCBvcHRpb24gcHJvdmlkZWQuIFBsZWFzZSBwcm92aWRlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgcGxhaW4gSFRNTCBlbGVtZW50LlwiKSk7cmV0dXJuIG59LERyb3B6b25lLmdldEVsZW1lbnRzPWZ1bmN0aW9uKGUsdCl7dmFyIG4saTtpZihlIGluc3RhbmNlb2YgQXJyYXkpe2k9W107dHJ5e3ZhciByLG89X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZSk7dHJ5e2ZvcihvLnMoKTshKHI9by5uKCkpLmRvbmU7KW49ci52YWx1ZSxpLnB1c2godGhpcy5nZXRFbGVtZW50KG4sdCkpfWNhdGNoKGUpe28uZShlKX1maW5hbGx5e28uZigpfX1jYXRjaChlKXtpPW51bGx9fWVsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2k9W107dmFyIGEsbD1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpKTt0cnl7Zm9yKGwucygpOyEoYT1sLm4oKSkuZG9uZTspbj1hLnZhbHVlLGkucHVzaChuKX1jYXRjaChlKXtsLmUoZSl9ZmluYWxseXtsLmYoKX19ZWxzZSBudWxsIT1lLm5vZGVUeXBlJiYoaT1bZV0pO2lmKG51bGw9PWl8fCFpLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGBcIi5jb25jYXQodCxcImAgb3B0aW9uIHByb3ZpZGVkLiBQbGVhc2UgcHJvdmlkZSBhIENTUyBzZWxlY3RvciwgYSBwbGFpbiBIVE1MIGVsZW1lbnQgb3IgYSBsaXN0IG9mIHRob3NlLlwiKSk7cmV0dXJuIGl9LERyb3B6b25lLmNvbmZpcm09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB3aW5kb3cuY29uZmlybShlKT90KCk6bnVsbCE9bj9uKCk6dm9pZCAwfSxEcm9wem9uZS5pc1ZhbGlkRmlsZT1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiEwO3Q9dC5zcGxpdChcIixcIik7dmFyIG4saT1lLnR5cGUscj1pLnJlcGxhY2UoL1xcLy4qJC8sXCJcIiksbz1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0KTt0cnl7Zm9yKG8ucygpOyEobj1vLm4oKSkuZG9uZTspe3ZhciBhPW4udmFsdWU7aWYoXCIuXCI9PT0oYT1hLnRyaW0oKSkuY2hhckF0KDApKXtpZigtMSE9PWUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYS50b0xvd2VyQ2FzZSgpLGUubmFtZS5sZW5ndGgtYS5sZW5ndGgpKXJldHVybiEwfWVsc2UgaWYoL1xcL1xcKiQvLnRlc3QoYSkpe2lmKHI9PT1hLnJlcGxhY2UoL1xcLy4qJC8sXCJcIikpcmV0dXJuITB9ZWxzZSBpZihpPT09YSlyZXR1cm4hMH19Y2F0Y2goZSl7by5lKGUpfWZpbmFsbHl7by5mKCl9cmV0dXJuITF9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkmJm51bGwhPT1qUXVlcnkmJihqUXVlcnkuZm4uZHJvcHpvbmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3JldHVybiBuZXcgRHJvcHpvbmUodGhpcyxlKX0pfSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbnVsbCE9PW1vZHVsZT9tb2R1bGUuZXhwb3J0cz1Ecm9wem9uZTp3aW5kb3cuRHJvcHpvbmU9RHJvcHpvbmUsRHJvcHpvbmUuQURERUQ9XCJhZGRlZFwiLERyb3B6b25lLlFVRVVFRD1cInF1ZXVlZFwiLERyb3B6b25lLkFDQ0VQVEVEPURyb3B6b25lLlFVRVVFRCxEcm9wem9uZS5VUExPQURJTkc9XCJ1cGxvYWRpbmdcIixEcm9wem9uZS5QUk9DRVNTSU5HPURyb3B6b25lLlVQTE9BRElORyxEcm9wem9uZS5DQU5DRUxFRD1cImNhbmNlbGVkXCIsRHJvcHpvbmUuRVJST1I9XCJlcnJvclwiLERyb3B6b25lLlNVQ0NFU1M9XCJzdWNjZXNzXCI7dmFyIGRldGVjdFZlcnRpY2FsU3F1YXNoPWZ1bmN0aW9uKGUpe2UubmF0dXJhbFdpZHRoO3ZhciB0PWUubmF0dXJhbEhlaWdodCxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7bi53aWR0aD0xLG4uaGVpZ2h0PXQ7dmFyIGk9bi5nZXRDb250ZXh0KFwiMmRcIik7aS5kcmF3SW1hZ2UoZSwwLDApO2Zvcih2YXIgcj1pLmdldEltYWdlRGF0YSgxLDAsMSx0KS5kYXRhLG89MCxhPXQsbD10O288bDspezA9PT1yWzQqKGwtMSkrM10/YT1sOm89bCxsPWErbz4+MX12YXIgcz1sL3Q7cmV0dXJuIDA9PXM/MTpzfSxkcmF3SW1hZ2VJT1NGaXg9ZnVuY3Rpb24oZSx0LG4saSxyLG8sYSxsLHMsdSl7dmFyIGM9ZGV0ZWN0VmVydGljYWxTcXVhc2godCk7cmV0dXJuIGUuZHJhd0ltYWdlKHQsbixpLHIsbyxhLGwscyx1L2MpfSxFeGlmUmVzdG9yZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyxlKX1yZXR1cm4gX2NyZWF0ZUNsYXNzKGUsbnVsbCxbe2tleTpcImluaXRDbGFzc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5LRVlfU1RSPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIn19LHtrZXk6XCJlbmNvZGU2NFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1cIlwiLG49dm9pZCAwLGk9dm9pZCAwLHI9XCJcIixvPXZvaWQgMCxhPXZvaWQgMCxsPXZvaWQgMCxzPVwiXCIsdT0wO289KG49ZVt1KytdKT4+MixhPSgzJm4pPDw0fChpPWVbdSsrXSk+PjQsbD0oMTUmaSk8PDJ8KHI9ZVt1KytdKT4+NixzPTYzJnIsaXNOYU4oaSk/bD1zPTY0OmlzTmFOKHIpJiYocz02NCksdD10K3RoaXMuS0VZX1NUUi5jaGFyQXQobykrdGhpcy5LRVlfU1RSLmNoYXJBdChhKSt0aGlzLktFWV9TVFIuY2hhckF0KGwpK3RoaXMuS0VZX1NUUi5jaGFyQXQocyksbj1pPXI9XCJcIixvPWE9bD1zPVwiXCIsdTxlLmxlbmd0aDspO3JldHVybiB0fX0se2tleTpcInJlc3RvcmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCFlLm1hdGNoKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIikpcmV0dXJuIHQ7dmFyIG49dGhpcy5kZWNvZGU2NChlLnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLFwiXCIpKSxpPXRoaXMuc2xpY2UyU2VnbWVudHMobikscj10aGlzLmV4aWZNYW5pcHVsYXRpb24odCxpKTtyZXR1cm5cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIuY29uY2F0KHRoaXMuZW5jb2RlNjQocikpfX0se2tleTpcImV4aWZNYW5pcHVsYXRpb25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuZ2V0RXhpZkFycmF5KHQpLGk9dGhpcy5pbnNlcnRFeGlmKGUsbik7cmV0dXJuIG5ldyBVaW50OEFycmF5KGkpfX0se2tleTpcImdldEV4aWZBcnJheVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD12b2lkIDAsbj0wO248ZS5sZW5ndGg7KXtpZigyNTU9PT0odD1lW25dKVswXSYyMjU9PT10WzFdKXJldHVybiB0O24rK31yZXR1cm5bXX19LHtrZXk6XCJpbnNlcnRFeGlmXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLFwiXCIpLGk9dGhpcy5kZWNvZGU2NChuKSxyPWkuaW5kZXhPZigyNTUsMyksbz1pLnNsaWNlKDAsciksYT1pLnNsaWNlKHIpLGw9bztyZXR1cm4gbD0obD1sLmNvbmNhdCh0KSkuY29uY2F0KGEpfX0se2tleTpcInNsaWNlMlNlZ21lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj1bXTs7KXtpZigyNTU9PT1lW3RdJjIxOD09PWVbdCsxXSlicmVhaztpZigyNTU9PT1lW3RdJjIxNj09PWVbdCsxXSl0Kz0yO2Vsc2V7dmFyIGk9dCsoMjU2KmVbdCsyXStlW3QrM10pKzIscj1lLnNsaWNlKHQsaSk7bi5wdXNoKHIpLHQ9aX1pZih0PmUubGVuZ3RoKWJyZWFrfXJldHVybiBufX0se2tleTpcImRlY29kZTY0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwLG49dm9pZCAwLGk9XCJcIixyPXZvaWQgMCxvPXZvaWQgMCxhPVwiXCIsbD0wLHM9W107Zm9yKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZy5leGVjKGUpJiZjb25zb2xlLndhcm4oXCJUaGVyZSB3ZXJlIGludmFsaWQgYmFzZTY0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0IHRleHQuXFxuVmFsaWQgYmFzZTY0IGNoYXJhY3RlcnMgYXJlIEEtWiwgYS16LCAwLTksICcrJywgJy8nLGFuZCAnPSdcXG5FeHBlY3QgZXJyb3JzIGluIGRlY29kaW5nLlwiKSxlPWUucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csXCJcIik7dD10aGlzLktFWV9TVFIuaW5kZXhPZihlLmNoYXJBdChsKyspKTw8Mnwocj10aGlzLktFWV9TVFIuaW5kZXhPZihlLmNoYXJBdChsKyspKSk+PjQsbj0oMTUmcik8PDR8KG89dGhpcy5LRVlfU1RSLmluZGV4T2YoZS5jaGFyQXQobCsrKSkpPj4yLGk9KDMmbyk8PDZ8KGE9dGhpcy5LRVlfU1RSLmluZGV4T2YoZS5jaGFyQXQobCsrKSkpLHMucHVzaCh0KSw2NCE9PW8mJnMucHVzaChuKSw2NCE9PWEmJnMucHVzaChpKSx0PW49aT1cIlwiLHI9bz1hPVwiXCIsbDxlLmxlbmd0aDspO3JldHVybiBzfX1dKSxlfSgpO0V4aWZSZXN0b3JlLmluaXRDbGFzcygpO3ZhciBjb250ZW50TG9hZGVkPWZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gaShlKXtpZihcInJlYWR5c3RhdGVjaGFuZ2VcIiE9PWUudHlwZXx8XCJjb21wbGV0ZVwiPT09by5yZWFkeVN0YXRlKXJldHVybihcImxvYWRcIj09PWUudHlwZT90Om8pW3NdKHUrZS50eXBlLGksITEpLCFyJiYocj0hMCk/bi5jYWxsKHQsZS50eXBlfHxlKTp2b2lkIDB9dmFyIHI9ITEsZT0hMCxvPXQuZG9jdW1lbnQsYT1vLmRvY3VtZW50RWxlbWVudCxsPW8uYWRkRXZlbnRMaXN0ZW5lcj9cImFkZEV2ZW50TGlzdGVuZXJcIjpcImF0dGFjaEV2ZW50XCIscz1vLmFkZEV2ZW50TGlzdGVuZXI/XCJyZW1vdmVFdmVudExpc3RlbmVyXCI6XCJkZXRhY2hFdmVudFwiLHU9by5hZGRFdmVudExpc3RlbmVyP1wiXCI6XCJvblwiO2lmKFwiY29tcGxldGVcIiE9PW8ucmVhZHlTdGF0ZSl7aWYoby5jcmVhdGVFdmVudE9iamVjdCYmYS5kb1Njcm9sbCl7dHJ5e2U9IXQuZnJhbWVFbGVtZW50fWNhdGNoKGUpe31lJiYhZnVuY3Rpb24gdCgpe3RyeXthLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBzZXRUaW1lb3V0KHQsNTApfXJldHVybiBpKFwicG9sbFwiKX0oKX1yZXR1cm4gb1tsXSh1K1wiRE9NQ29udGVudExvYWRlZFwiLGksITEpLG9bbF0odStcInJlYWR5c3RhdGVjaGFuZ2VcIixpLCExKSx0W2xdKHUrXCJsb2FkXCIsaSwhMSl9fTtmdW5jdGlvbiBfX2d1YXJkX18oZSx0KXtyZXR1cm4gbnVsbCE9ZT90KGUpOnZvaWQgMH1mdW5jdGlvbiBfX2d1YXJkTWV0aG9kX18oZSx0LG4pe3JldHVybiBudWxsIT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlW3RdP24oZSx0KTp2b2lkIDB9RHJvcHpvbmUuX2F1dG9EaXNjb3ZlckZ1bmN0aW9uPWZ1bmN0aW9uKCl7aWYoRHJvcHpvbmUuYXV0b0Rpc2NvdmVyKXJldHVybiBEcm9wem9uZS5kaXNjb3ZlcigpfSxjb250ZW50TG9hZGVkKHdpbmRvdyxEcm9wem9uZS5fYXV0b0Rpc2NvdmVyRnVuY3Rpb24pOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgTWljcm9Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXTtcblxuICB2YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZGFsKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IF9yZWYudGFyZ2V0TW9kYWwsXG4gICAgICAgICAgX3JlZiR0cmlnZ2VycyA9IF9yZWYudHJpZ2dlcnMsXG4gICAgICAgICAgdHJpZ2dlcnMgPSBfcmVmJHRyaWdnZXJzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkdHJpZ2dlcnMsXG4gICAgICAgICAgX3JlZiRvblNob3cgPSBfcmVmLm9uU2hvdyxcbiAgICAgICAgICBvblNob3cgPSBfcmVmJG9uU2hvdyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uU2hvdyxcbiAgICAgICAgICBfcmVmJG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2UsXG4gICAgICAgICAgb25DbG9zZSA9IF9yZWYkb25DbG9zZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcmVmJG9uQ2xvc2UsXG4gICAgICAgICAgX3JlZiRvcGVuVHJpZ2dlciA9IF9yZWYub3BlblRyaWdnZXIsXG4gICAgICAgICAgb3BlblRyaWdnZXIgPSBfcmVmJG9wZW5UcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLXRyaWdnZXInIDogX3JlZiRvcGVuVHJpZ2dlcixcbiAgICAgICAgICBfcmVmJGNsb3NlVHJpZ2dlciA9IF9yZWYuY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIGNsb3NlVHJpZ2dlciA9IF9yZWYkY2xvc2VUcmlnZ2VyID09PSB2b2lkIDAgPyAnZGF0YS1taWNyb21vZGFsLWNsb3NlJyA6IF9yZWYkY2xvc2VUcmlnZ2VyLFxuICAgICAgICAgIF9yZWYkb3BlbkNsYXNzID0gX3JlZi5vcGVuQ2xhc3MsXG4gICAgICAgICAgb3BlbkNsYXNzID0gX3JlZiRvcGVuQ2xhc3MgPT09IHZvaWQgMCA/ICdpcy1vcGVuJyA6IF9yZWYkb3BlbkNsYXNzLFxuICAgICAgICAgIF9yZWYkZGlzYWJsZVNjcm9sbCA9IF9yZWYuZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gX3JlZiRkaXNhYmxlU2Nyb2xsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgICBfcmVmJGRpc2FibGVGb2N1cyA9IF9yZWYuZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIGRpc2FibGVGb2N1cyA9IF9yZWYkZGlzYWJsZUZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGlzYWJsZUZvY3VzLFxuICAgICAgICAgIF9yZWYkYXdhaXRDbG9zZUFuaW1hdCA9IF9yZWYuYXdhaXRDbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uID0gX3JlZiRhd2FpdENsb3NlQW5pbWF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXdhaXRDbG9zZUFuaW1hdCxcbiAgICAgICAgICBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPSBfcmVmLmF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgICBhd2FpdE9wZW5BbmltYXRpb24gPSBfcmVmJGF3YWl0T3BlbkFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhd2FpdE9wZW5BbmltYXRpLFxuICAgICAgICAgIF9yZWYkZGVidWdNb2RlID0gX3JlZi5kZWJ1Z01vZGUsXG4gICAgICAgICAgZGVidWdNb2RlID0gX3JlZiRkZWJ1Z01vZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1Z01vZGU7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIG1vZGFsXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpOyAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXNzZWQgY29uZmlnXG5cbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBkZWJ1Z01vZGU6IGRlYnVnTW9kZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZGlzYWJsZVNjcm9sbCxcbiAgICAgICAgb3BlblRyaWdnZXI6IG9wZW5UcmlnZ2VyLFxuICAgICAgICBjbG9zZVRyaWdnZXI6IGNsb3NlVHJpZ2dlcixcbiAgICAgICAgb3BlbkNsYXNzOiBvcGVuQ2xhc3MsXG4gICAgICAgIG9uU2hvdzogb25TaG93LFxuICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICBhd2FpdENsb3NlQW5pbWF0aW9uOiBhd2FpdENsb3NlQW5pbWF0aW9uLFxuICAgICAgICBhd2FpdE9wZW5BbmltYXRpb246IGF3YWl0T3BlbkFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZUZvY3VzOiBkaXNhYmxlRm9jdXNcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGNsaWNrIGV2ZW50cyBvbmx5IGlmIHByZSBiaW5kaW5nIGV2ZW50TGlzdGVuZXJzXG5cbiAgICAgIGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KHRyaWdnZXJzKSk7IC8vIHByZSBiaW5kIGZ1bmN0aW9ucyBmb3IgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb29wcyB0aHJvdWdoIGFsbCBvcGVuVHJpZ2dlcnMgYW5kIGJpbmRzIGNsaWNrIGV2ZW50XG4gICAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzIFtBcnJheSBvZiBub2RlIGVsZW1lbnRzXVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJyZWdpc3RlclRyaWdnZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJUcmlnZ2VycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJpZ2dlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgdHJpZ2dlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2Vycy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93TW9kYWwoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2hvd01vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvdXIoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBfdGhpczIubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uU2hvdyh0aGlzLm1vZGFsLCB0aGlzLmFjdGl2ZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgICAgdmFyIG1vZGFsID0gdGhpcy5tb2RhbDtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW91cignZW5hYmxlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UodGhpcy5tb2RhbCwgdGhpcy5hY3RpdmVFbGVtZW50LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pIHtcbiAgICAgICAgICB2YXIgb3BlbkNsYXNzID0gdGhpcy5jb25maWcub3BlbkNsYXNzOyAvLyA8LSBvbGQgc2Nob29sIGZ0d1xuXG4gICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VNb2RhbEJ5SWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0TW9kYWwpO1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbEJlaGF2aW91clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJlaGF2aW91cih0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIHN3aXRjaCAodG9nZ2xlKSB7XG4gICAgICAgICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYm9keS5zdHlsZSwge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSh0aGlzLmNvbmZpZy5jbG9zZVRyaWdnZXIpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpOyAvLyBlc2NcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkgdGhpcy5yZXRhaW5Gb2N1cyhldmVudCk7IC8vIHRhYlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGb2N1c2FibGVOb2Rlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzKSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFRyaWVzIHRvIHNldCBmb2N1cyBvbiBhIG5vZGUgd2hpY2ggaXMgbm90IGEgY2xvc2UgdHJpZ2dlclxuICAgICAgICogaWYgbm8gb3RoZXIgbm9kZXMgZXhpc3QgdGhlbiBmb2N1c2VzIG9uIGZpcnN0IGNsb3NlIHRyaWdnZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEZvY3VzVG9GaXJzdE5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c1RvRmlyc3ROb2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGlzYWJsZUZvY3VzKSByZXR1cm47XG4gICAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTsgLy8gbm8gZm9jdXNhYmxlIG5vZGVzXG5cbiAgICAgICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyByZW1vdmUgbm9kZXMgb24gd2hvc2UgY2xpY2ssIHRoZSBtb2RhbCBjbG9zZXNcbiAgICAgICAgLy8gY291bGQgbm90IHRoaW5rIG9mIGEgYmV0dGVyIG5hbWUgOihcblxuICAgICAgICB2YXIgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cyA9IGZvY3VzYWJsZU5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiAhbm9kZS5oYXNBdHRyaWJ1dGUoX3RoaXMzLmNvbmZpZy5jbG9zZVRyaWdnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGVzV2hpY2hBcmVOb3RDbG9zZVRhcmdldHMubGVuZ3RoID4gMCkgbm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0c1swXS5mb2N1cygpO1xuICAgICAgICBpZiAobm9kZXNXaGljaEFyZU5vdENsb3NlVGFyZ2V0cy5sZW5ndGggPT09IDApIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJldGFpbkZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmV0YWluRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpOyAvLyBubyBmb2N1c2FibGUgbm9kZXNcblxuICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIG5vZGVzIHdoaWNoIGFyZSBoaWRkZW4gdG8gcHJldmVudFxuICAgICAgICAgKiBmb2N1cyBsZWFrIG91dHNpZGUgbW9kYWxcbiAgICAgICAgICovXG5cbiAgICAgICAgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGVOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgICAgIH0pOyAvLyBpZiBkaXNhYmxlRm9jdXMgaXMgdHJ1ZVxuXG4gICAgICAgIGlmICghdGhpcy5tb2RhbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNhYmxlTm9kZXMubGVuZ3RoID4gMCAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIE1vZGFsIHByb3RvdHlwZSBlbmRzLlxuICAgKiBIZXJlIG9uIGNvZGUgaXMgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBhbmRcbiAgICogYXV0byBiaW5kaW5nIGV2ZW50IGhhbmRsZXJzIG9uIG1vZGFsIHRyaWdnZXJzXG4gICAqL1xuICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcGVuZWQgbW9kYWxcblxuXG4gIHZhciBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2YgbW9kYWxzIGFuZCBpdCdzXG4gICAqIHJlc3BlY3RpdmUgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7YXJyYXl9IHRyaWdnZXJzICAgICBBbiBhcnJheSBvZiBhbGwgdHJpZ2dlcnNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0cmlnZ2VyQXR0ciBUaGUgZGF0YS1hdHRyaWJ1dGUgd2hpY2ggdHJpZ2dlcnMgdGhlIG1vZHVsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG5cbiAgdmFyIGdlbmVyYXRlVHJpZ2dlck1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlck1hcCh0cmlnZ2VycywgdHJpZ2dlckF0dHIpIHtcbiAgICB2YXIgdHJpZ2dlck1hcCA9IFtdO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RhbCA9IHRyaWdnZXIuYXR0cmlidXRlc1t0cmlnZ2VyQXR0cl0udmFsdWU7XG4gICAgICBpZiAodHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPT09IHVuZGVmaW5lZCkgdHJpZ2dlck1hcFt0YXJnZXRNb2RhbF0gPSBbXTtcbiAgICAgIHRyaWdnZXJNYXBbdGFyZ2V0TW9kYWxdLnB1c2godHJpZ2dlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyaWdnZXJNYXA7XG4gIH07XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciBhIG1vZGFsIG9mIHRoZSBnaXZlbiBpZCBleGlzdHNcbiAgICogaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkICBUaGUgaWQgb2YgdGhlIG1vZGFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlTW9kYWxQcmVzZW5jZSA9IGZ1bmN0aW9uIHZhbGlkYXRlTW9kYWxQcmVzZW5jZShpZCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiBcXHUyNzU3U2VlbXMgbGlrZSB5b3UgaGF2ZSBtaXNzZWQgJWMnXCIuY29uY2F0KGlkLCBcIidcIiksICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsICdJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGlkPVxcXCJcIi5jb25jYXQoaWQsIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiB0aGVyZSBhcmUgbW9kYWwgdHJpZ2dlcnMgcHJlc2VudFxuICAgKiBpbiB0aGUgRE9NXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VycyBBbiBhcnJheSBvZiBkYXRhLXRyaWdnZXJzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkYXRlVHJpZ2dlclByZXNlbmNlID0gZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpIHtcbiAgICBpZiAodHJpZ2dlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IFxcdTI3NTdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLCAnYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDsnLCAnZGF0YSBhdHRyaWJ1dGUuJyk7XG4gICAgICBjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkOycsIFwiPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1taWNyb21vZGFsLXRyaWdnZXI9XFxcIm15LW1vZGFsXFxcIj48L2E+XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0cmlnZ2VycyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBtb2RhbHNcbiAgICogYXJlIHByZXNlbnQgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gIHthcnJheX0gdHJpZ2dlcnMgICBBcnJheSBvZiBET00gbm9kZXMgd2hpY2ggaGF2ZSBkYXRhLXRyaWdnZXJzXG4gICAqIEBwYXJhbSAge2FycmF5fSB0cmlnZ2VyTWFwIEFzc29jaWF0aXZlIGFycmF5IG9mIG1vZGFscyBhbmQgdGhlaXIgdHJpZ2dlcnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICB2YXIgdmFsaWRhdGVBcmdzID0gZnVuY3Rpb24gdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSB7XG4gICAgdmFsaWRhdGVUcmlnZ2VyUHJlc2VuY2UodHJpZ2dlcnMpO1xuICAgIGlmICghdHJpZ2dlck1hcCkgcmV0dXJuIHRydWU7XG5cbiAgICBmb3IgKHZhciBpZCBpbiB0cmlnZ2VyTWFwKSB7XG4gICAgICB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogQmluZHMgY2xpY2sgaGFuZGxlcnMgdG8gYWxsIG1vZGFsIHRyaWdnZXJzXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAgIC8vIENyZWF0ZSBhbiBjb25maWcgb2JqZWN0IHdpdGggZGVmYXVsdCBvcGVuVHJpZ2dlclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgb3BlblRyaWdnZXI6ICdkYXRhLW1pY3JvbW9kYWwtdHJpZ2dlcidcbiAgICB9LCBjb25maWcpOyAvLyBDb2xsZWN0cyBhbGwgdGhlIG5vZGVzIHdpdGggdGhlIHRyaWdnZXJcblxuICAgIHZhciB0cmlnZ2VycyA9IF90b0NvbnN1bWFibGVBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvcHRpb25zLm9wZW5UcmlnZ2VyLCBcIl1cIikpKTsgLy8gTWFrZXMgYSBtYXBwaW5ncyBvZiBtb2RhbHMgd2l0aCB0aGVpciB0cmlnZ2VyIG5vZGVzXG5cblxuICAgIHZhciB0cmlnZ2VyTWFwID0gZ2VuZXJhdGVUcmlnZ2VyTWFwKHRyaWdnZXJzLCBvcHRpb25zLm9wZW5UcmlnZ2VyKTsgLy8gQ2hlY2tzIGlmIG1vZGFscyBhbmQgdHJpZ2dlcnMgZXhpc3QgaW4gZG9tXG5cbiAgICBpZiAob3B0aW9ucy5kZWJ1Z01vZGUgPT09IHRydWUgJiYgdmFsaWRhdGVBcmdzKHRyaWdnZXJzLCB0cmlnZ2VyTWFwKSA9PT0gZmFsc2UpIHJldHVybjsgLy8gRm9yIGV2ZXJ5IHRhcmdldCBtb2RhbCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpZ2dlck1hcFtrZXldO1xuICAgICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IGtleTtcbiAgICAgIG9wdGlvbnMudHJpZ2dlcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkodmFsdWUpO1xuICAgICAgYWN0aXZlTW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvd3MgYSBwYXJ0aWN1bGFyIG1vZGFsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0TW9kYWwgW1RoZSBpZCBvZiB0aGUgbW9kYWwgdG8gZGlzcGxheV1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgW1RoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwYXNzXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyh0YXJnZXRNb2RhbCwgY29uZmlnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb25maWcgfHwge307XG4gICAgb3B0aW9ucy50YXJnZXRNb2RhbCA9IHRhcmdldE1vZGFsOyAvLyBDaGVja3MgaWYgbW9kYWxzIGFuZCB0cmlnZ2VycyBleGlzdCBpbiBkb21cblxuICAgIGlmIChvcHRpb25zLmRlYnVnTW9kZSA9PT0gdHJ1ZSAmJiB2YWxpZGF0ZU1vZGFsUHJlc2VuY2UodGFyZ2V0TW9kYWwpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBjbGVhciBldmVudHMgaW4gY2FzZSBwcmV2aW91cyBtb2RhbCB3YXNuJ3QgY2xvc2VcblxuICAgIGlmIChhY3RpdmVNb2RhbCkgYWN0aXZlTW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTsgLy8gc3RvcmVzIHJlZmVyZW5jZSB0byBhY3RpdmUgbW9kYWxcblxuICAgIGFjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgYWN0aXZlTW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldE1vZGFsIFtUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGNsb3NlXVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cblxuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKHRhcmdldE1vZGFsKSB7XG4gICAgdGFyZ2V0TW9kYWwgPyBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsQnlJZCh0YXJnZXRNb2RhbCkgOiBhY3RpdmVNb2RhbC5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIHNob3c6IHNob3csXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59KCk7XG53aW5kb3cuTWljcm9Nb2RhbCA9IE1pY3JvTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IE1pY3JvTW9kYWw7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiZXhwb3J0ICogZnJvbSBcIkBzdGltdWx1cy9jb3JlXCJcbiIsImV4cG9ydCAqIGZyb20gXCJAc3RpbXVsdXMvd2VicGFjay1oZWxwZXJzXCJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=