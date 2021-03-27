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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./source/_patterns/main.js\");\n/* harmony import */ var _templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/carousel/carousel.js */ \"./source/_patterns/templates/carousel/carousel.js\");\n/* harmony import */ var _templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1__);\nconsole.log('main');\n  let modules = [_main_js__WEBPACK_IMPORTED_MODULE_0__, _templates_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_1__];\n\n//# sourceURL=webpack:///./source/_patterns/main.js?");

/***/ }),

/***/ "./source/_patterns/templates/carousel/carousel.js":
/*!*********************************************************!*\
  !*** ./source/_patterns/templates/carousel/carousel.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Carousel {\n    constructor(element) {\n        this.currentSlide = {position: 1};\n        this.element = element;\n        this.id = element.id;\n        this.links = this.element.querySelectorAll('.c-carousel__dot');\n        this.next = this.element.querySelector('.c-carousel__next');\n        this.prev = this.element.querySelector('.c-carousel__prev');\n        this.carouselItems = this.element.querySelectorAll('.c-carousel__item');\n        this.init();\n    }\n\n    init () {\n        this.next.addEventListener('click', (ev) => { this.updateCurrentSlide(ev, true)});\n        this.prev.addEventListener('click',  (ev) => { this.updateCurrentSlide(ev, false)});\n        this.handleDotModifier();\n    }\n\n    updateCurrentSlide(ev, isNext) {\n        if(isNext) {\n            if(this.currentSlide.position < this.carouselItems.length){\n                this.currentSlide.position += 1;\n            } else {\n                this.currentSlide.position = 1;\n            }\n        } else {\n            if(this.currentSlide.position > 1){\n                this.currentSlide.position -= 1;\n            } else {\n                this.currentSlide.position = this.carouselItems.length;\n            }\n        }\n\n        this.handleDotModifier();\n        this.triggerDotClick();\n    }\n\n    handleDotModifier() {\n        this.links.forEach( (elem, ind) => {\n            elem.classList.remove('c-carousel__dot--active');\n        })\n        this.links[this.currentSlide.position - 1].classList.add('c-carousel__dot--active');\n    }\n    \n    triggerDotClick() {\n        console.log(this.links[this.currentSlide.position - 1]);\n        this.links[this.currentSlide.position - 1].click(); \n    }\n}\n\nwindow.onload = function() {\n    document.querySelectorAll('.c-carousel').forEach( (elem) => {\n        new Carousel(elem);\n    });\n};\n\n\n//# sourceURL=webpack:///./source/_patterns/templates/carousel/carousel.js?");

/***/ })

/******/ });