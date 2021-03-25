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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/_patterns/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/_patterns/main.js":
/*!**********************************!*\
  !*** ./source/_patterns/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./source/_patterns/main.js\");\n/* harmony import */ var _templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/carousel/carousel.js */ \"./source/_patterns/templates/carousel/carousel.js\");\n/* harmony import */ var _templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1__);\nconsole.log('main');\r\n  let modules = [_main_js__WEBPACK_IMPORTED_MODULE_0__, _templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1__];\n\n//# sourceURL=webpack:///./source/_patterns/main.js?");

/***/ }),

/***/ "./source/_patterns/templates/carousel/carousel.js":
/*!*********************************************************!*\
  !*** ./source/_patterns/templates/carousel/carousel.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Carousel {\r\n    constructor(element) {\r\n        this.currentSlide = {position: 1};\r\n        this.element = element;\r\n        this.id = element.id;\r\n        this.links = this.element.querySelectorAll('.c-carousel__dot');\r\n        this.next = this.element.querySelector('.c-carousel__next');\r\n        this.prev = this.element.querySelector('.c-carousel__prev');\r\n        this.carouselItems = this.element.querySelectorAll('.c-carousel__item');\r\n        this.init();\r\n    }\r\n\r\n    init () {\r\n        this.next.addEventListener('click', (ev) => { this.updateCurrentSlide(ev, true)});\r\n        this.prev.addEventListener('click',  (ev) => { this.updateCurrentSlide(ev, false)});\r\n        this.handleDotModifier();\r\n    }\r\n\r\n    updateCurrentSlide(ev, isNext) {\r\n        if(isNext) {\r\n            if(this.currentSlide.position < this.carouselItems.length){\r\n                this.currentSlide.position += 1;\r\n            } else {\r\n                this.currentSlide.position = 1;\r\n            }\r\n        } else {\r\n            if(this.currentSlide.position > 1){\r\n                this.currentSlide.position -= 1;\r\n            } else {\r\n                this.currentSlide.position = this.carouselItems.length;\r\n            }\r\n        }\r\n\r\n        this.handleDotModifier();\r\n        this.triggerDotClick();\r\n    }\r\n\r\n    handleDotModifier() {\r\n        this.links.forEach( (elem, ind) => {\r\n            elem.classList.remove('c-carousel__dot--active');\r\n        })\r\n        this.links[this.currentSlide.position - 1].classList.add('c-carousel__dot--active');\r\n    }\r\n    \r\n    triggerDotClick() {\r\n        console.log(this.links[this.currentSlide.position - 1]);\r\n        this.links[this.currentSlide.position - 1].click(); \r\n    }\r\n}\r\n\r\nwindow.onload = function() {\r\n    document.querySelectorAll('.c-carousel').forEach( (elem) => {\r\n        new Carousel(elem);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./source/_patterns/templates/carousel/carousel.js?");

/***/ })

/******/ });