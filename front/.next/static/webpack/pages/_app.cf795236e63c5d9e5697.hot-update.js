webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick-theme.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/slick-carousel/slick/slick-theme.css ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./ajax-loader.gif */ "./node_modules/slick-carousel/slick/ajax-loader.gif");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fonts/slick.eot */ "./node_modules/slick-carousel/slick/fonts/slick.eot");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./fonts/slick.woff */ "./node_modules/slick-carousel/slick/fonts/slick.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./fonts/slick.ttf */ "./node_modules/slick-carousel/slick/fonts/slick.ttf");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./fonts/slick.svg */ "./node_modules/slick-carousel/slick/fonts/slick.svg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#slick" });
// Module
exports.push([module.i, "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('embedded-opentype'), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n", "",{"version":3,"sources":["C:/Users/winco/Desktop/javascripts/SKKUBird/front/node_modules/slick-carousel/slick/slick-theme.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,WAAW;AACX;;IAEI,gFAAiE;AACrE;;AAEA,UAAU;AACV;;IAEI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;;IAElB,4CAA6B;IAC7B,mPAAqM;AACzM;AACA,WAAW;AACX;;;IAGI,YAAY;IACZ,cAAc;;IAEd,kBAAkB;IAClB,QAAQ;;IAER,cAAc;;IAEd,WAAW;IACX,YAAY;IACZ,UAAU;IAGV,6BAA6B;;IAE7B,eAAe;;IAEf,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;;;;;IAKI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;;;;;IAKI,UAAU;AACd;AACA;;;IAGI,YAAY;AAChB;;AAEA;;;IAGI,oBAAoB;IACpB,eAAe;IACf,cAAc;;IAEd,YAAY;IACZ,YAAY;;IAEZ,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;;IAEI,WAAW;AACf;AACA;;IAEI,YAAY;IACZ,UAAU;AACd;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,YAAY;AAChB;;AAEA;;IAEI,YAAY;AAChB;AACA;;IAEI,WAAW;IACX,WAAW;AACf;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,YAAY;AAChB;;AAEA,SAAS;AACT;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;;IAEb,cAAc;;IAEd,WAAW;IACX,UAAU;IACV,SAAS;;IAET,gBAAgB;;IAEhB,kBAAkB;AACtB;AACA;;IAEI,kBAAkB;;IAElB,qBAAqB;;IAErB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,UAAU;;IAEV,eAAe;AACnB;AACA;;IAEI,YAAY;IACZ,cAAc;;IAEd,cAAc;;IAEd,WAAW;IACX,YAAY;IACZ,YAAY;;IAEZ,eAAe;;IAEf,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,uBAAuB;AAC3B;AACA;;;IAGI,aAAa;AACjB;AACA;;;IAGI,UAAU;AACd;AACA;;IAEI,oBAAoB;IACpB,cAAc;IACd,iBAAiB;;IAEjB,kBAAkB;IAClB,MAAM;IACN,OAAO;;IAEP,WAAW;IACX,YAAY;;IAEZ,YAAY;IACZ,kBAAkB;;IAElB,YAAY;IACZ,YAAY;;IAEZ,mCAAmC;IACnC,kCAAkC;AACtC;AACA;;IAEI,YAAY;IACZ,YAAY;AAChB","file":"slick-theme.css","sourcesContent":["@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('./fonts/slick.eot');\n    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/slick-carousel/slick/slick.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n", "",{"version":3,"sources":["C:/Users/winco/Desktop/javascripts/SKKUBird/front/node_modules/slick-carousel/slick/slick.css"],"names":[],"mappings":"AAAA,WAAW;AACX;;IAEI,kBAAkB;;IAElB,cAAc;IACd,sBAAsB;;IAEtB,yBAAyB;OACtB,sBAAsB;QACrB,qBAAqB;YACjB,iBAAiB;;IAEzB,2BAA2B;IAC3B,wBAAwB;IAEpB,mBAAmB;IACvB,wCAAwC;AAC5C;;AAEA;;IAEI,kBAAkB;;IAElB,cAAc;IACd,gBAAgB;;IAEhB,SAAS;IACT,UAAU;AACd;AACA;;IAEI,aAAa;AACjB;AACA;;IAEI,eAAe;IACf,YAAY;AAChB;;AAEA;;;IAOY,+BAA+B;AAC3C;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,OAAO;;IAEP,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;IAGI,cAAc;;IAEd,WAAW;AACf;AACA;;IAEI,WAAW;AACf;AACA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,WAAW;;IAEX,YAAY;IACZ,eAAe;AACnB;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,cAAc;AAClB;AACA;;IAEI,aAAa;AACjB;AACA;;IAEI,oBAAoB;AACxB;AACA;;IAEI,cAAc;AAClB;AACA;;IAEI,kBAAkB;AACtB;AACA;;IAEI,cAAc;;IAEd,YAAY;;IAEZ,6BAA6B;AACjC;AACA;IACI,aAAa;AACjB","file":"slick.css","sourcesContent":["/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/slick-carousel/slick/ajax-loader.gif":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/ajax-loader.gif ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.eot":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.eot ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.svg":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.ttf":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.ttf ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.woff":
/*!************************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.woff ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.295183786cd8a138986521d9f388a286.woff");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./slick-theme.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick-theme.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./slick-theme.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick-theme.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./slick-theme.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick-theme.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./slick.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./slick.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./slick.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/slick-carousel/slick/slick.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var SkkuBird = function SkkuBird(_ref) {
  var Component = _ref.Component;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "SKKUBIRD")), __jsx(Component, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

_c = SkkuBird;
SkkuBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"].withRedux(SkkuBird));

var _c, _c2;

$RefreshReg$(_c, "SkkuBird");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2FqYXgtbG9hZGVyLmdpZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLmVvdCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLnR0ZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLndvZmYiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3M/Mjg3NCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcz83N2NiIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlNra3VCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywy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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDhRQUFpSTtBQUN2STtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDhRQUFpSTs7QUFFM0o7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDbEMsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsQ0FERixFQUtFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNELENBVkQ7O0tBQU1ELFE7QUFZTkEsUUFBUSxDQUFDRSxTQUFULEdBQXFCO0FBQ25CRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGQsQ0FBckI7QUFJZSxxRUFBQUMsNkRBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsUUFBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNmNzk1MjM2ZTYzYzVkOWU1Njk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2FqYXgtbG9hZGVyLmdpZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL3NsaWNrLmVvdFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL3NsaWNrLndvZmZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLi9mb250cy9zbGljay50dGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLi9mb250cy9zbGljay5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNzbGlja1wiIH0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCAnVVRGLTgnO1xcbi8qIFNsaWRlciAqL1xcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0XFxue1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxufVxcblxcbi8qIEljb25zICovXFxuQGZvbnQtZmFjZVxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdzbGljayc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpO1xcbn1cXG4vKiBBcnJvd3MgKi9cXG4uc2xpY2stcHJldixcXG4uc2xpY2stbmV4dFxcbntcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnNsaWNrLXByZXY6aG92ZXIsXFxuLnNsaWNrLXByZXY6Zm9jdXMsXFxuLnNsaWNrLW5leHQ6aG92ZXIsXFxuLnNsaWNrLW5leHQ6Zm9jdXNcXG57XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSxcXG4uc2xpY2stcHJldjpmb2N1czpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6aG92ZXI6YmVmb3JlLFxcbi5zbGljay1uZXh0OmZvY3VzOmJlZm9yZVxcbntcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcbi5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZVxcbntcXG4gICAgb3BhY2l0eTogLjI1O1xcbn1cXG5cXG4uc2xpY2stcHJldjpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6YmVmb3JlXFxue1xcbiAgICBmb250LWZhbWlseTogJ3NsaWNrJztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG5cXG4gICAgb3BhY2l0eTogLjc1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uc2xpY2stcHJldlxcbntcXG4gICAgbGVmdDogLTI1cHg7XFxufVxcbltkaXI9J3J0bCddIC5zbGljay1wcmV2XFxue1xcbiAgICByaWdodDogLTI1cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxufVxcbi5zbGljay1wcmV2OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogJ+KGkCc7XFxufVxcbltkaXI9J3J0bCddIC5zbGljay1wcmV2OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogJ+KGkic7XFxufVxcblxcbi5zbGljay1uZXh0XFxue1xcbiAgICByaWdodDogLTI1cHg7XFxufVxcbltkaXI9J3J0bCddIC5zbGljay1uZXh0XFxue1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogLTI1cHg7XFxufVxcbi5zbGljay1uZXh0OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogJ+KGkic7XFxufVxcbltkaXI9J3J0bCddIC5zbGljay1uZXh0OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogJ+KGkCc7XFxufVxcblxcbi8qIERvdHMgKi9cXG4uc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlclxcbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNsaWNrLWRvdHNcXG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMjVweDtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNsaWNrLWRvdHMgbGlcXG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvblxcbntcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlcixcXG4uc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXNcXG57XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlcjpiZWZvcmUsXFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzOmJlZm9yZVxcbntcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZVxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdzbGljayc7XFxuICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuXFxuICAgIGNvbnRlbnQ6ICfigKInO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG9wYWNpdHk6IC4yNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbjpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IC43NTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy93aW5jby9EZXNrdG9wL2phdmFzY3JpcHRzL1NLS1VCaXJkL2Zyb250L25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDs7SUFFSSxnRkFBaUU7QUFDckU7O0FBRUEsVUFBVTtBQUNWOztJQUVJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQiw0Q0FBNkI7SUFDN0IsbVBBQXFNO0FBQ3pNO0FBQ0EsV0FBVztBQUNYOzs7SUFHSSxZQUFZO0lBQ1osY0FBYzs7SUFFZCxrQkFBa0I7SUFDbEIsUUFBUTs7SUFFUixjQUFjOztJQUVkLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUdWLDZCQUE2Qjs7SUFFN0IsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTs7Ozs7SUFLSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBOzs7OztJQUtJLFVBQVU7QUFDZDtBQUNBOzs7SUFHSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGNBQWM7O0lBRWQsWUFBWTtJQUNaLFlBQVk7O0lBRVosbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjs7QUFFQSxTQUFTO0FBQ1Q7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLGNBQWM7O0lBRWQsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTOztJQUVULGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksa0JBQWtCOztJQUVsQixxQkFBcUI7O0lBRXJCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7O0lBRVYsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFlBQVk7SUFDWixjQUFjOztJQUVkLGNBQWM7O0lBRWQsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZOztJQUVaLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7OztJQUdJLGFBQWE7QUFDakI7QUFDQTs7O0lBR0ksVUFBVTtBQUNkO0FBQ0E7O0lBRUksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7O0lBRWpCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCxXQUFXO0lBQ1gsWUFBWTs7SUFFWixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixZQUFZO0lBQ1osWUFBWTs7SUFFWixtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEJcIixcImZpbGVcIjpcInNsaWNrLXRoZW1lLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcbi8qIFNsaWRlciAqL1xcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0XFxue1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi9hamF4LWxvYWRlci5naWYnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG59XFxuXFxuLyogSWNvbnMgKi9cXG5AZm9udC1mYWNlXFxue1xcbiAgICBmb250LWZhbWlseTogJ3NsaWNrJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbiAgICBzcmM6IHVybCgnLi9mb250cy9zbGljay5lb3QnKTtcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvc2xpY2suZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuL2ZvbnRzL3NsaWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuL2ZvbnRzL3NsaWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuL2ZvbnRzL3NsaWNrLnN2ZyNzbGljaycpIGZvcm1hdCgnc3ZnJyk7XFxufVxcbi8qIEFycm93cyAqL1xcbi5zbGljay1wcmV2LFxcbi5zbGljay1uZXh0XFxue1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5zbGljay1wcmV2OmhvdmVyLFxcbi5zbGljay1wcmV2OmZvY3VzLFxcbi5zbGljay1uZXh0OmhvdmVyLFxcbi5zbGljay1uZXh0OmZvY3VzXFxue1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uc2xpY2stcHJldjpob3ZlcjpiZWZvcmUsXFxuLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcbi5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpmb2N1czpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5zbGljay1wcmV2LnNsaWNrLWRpc2FibGVkOmJlZm9yZSxcXG4uc2xpY2stbmV4dC5zbGljay1kaXNhYmxlZDpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IC4yNTtcXG59XFxuXFxuLnNsaWNrLXByZXY6YmVmb3JlLFxcbi5zbGljay1uZXh0OmJlZm9yZVxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdzbGljayc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuXFxuICAgIG9wYWNpdHk6IC43NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLnNsaWNrLXByZXZcXG57XFxuICAgIGxlZnQ6IC0yNXB4O1xcbn1cXG5bZGlyPSdydGwnXSAuc2xpY2stcHJldlxcbntcXG4gICAgcmlnaHQ6IC0yNXB4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbn1cXG4uc2xpY2stcHJldjpiZWZvcmVcXG57XFxuICAgIGNvbnRlbnQ6ICfihpAnO1xcbn1cXG5bZGlyPSdydGwnXSAuc2xpY2stcHJldjpiZWZvcmVcXG57XFxuICAgIGNvbnRlbnQ6ICfihpInO1xcbn1cXG5cXG4uc2xpY2stbmV4dFxcbntcXG4gICAgcmlnaHQ6IC0yNXB4O1xcbn1cXG5bZGlyPSdydGwnXSAuc2xpY2stbmV4dFxcbntcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IC0yNXB4O1xcbn1cXG4uc2xpY2stbmV4dDpiZWZvcmVcXG57XFxuICAgIGNvbnRlbnQ6ICfihpInO1xcbn1cXG5bZGlyPSdydGwnXSAuc2xpY2stbmV4dDpiZWZvcmVcXG57XFxuICAgIGNvbnRlbnQ6ICfihpAnO1xcbn1cXG5cXG4vKiBEb3RzICovXFxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXJcXG57XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zbGljay1kb3RzXFxue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTI1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zbGljay1kb3RzIGxpXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b25cXG57XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsXFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzXFxue1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXI6YmVmb3JlLFxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1czpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmVcXG57XFxuICAgIGZvbnQtZmFtaWx5OiAnc2xpY2snO1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcblxcbiAgICBjb250ZW50OiAn4oCiJztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBvcGFjaXR5OiAuMjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlXFxue1xcbiAgICBvcGFjaXR5OiAuNzU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTbGlkZXIgKi9cXG4uc2xpY2stc2xpZGVyXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNsaWNrLWxpc3RcXG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLnNsaWNrLWxpc3Q6Zm9jdXNcXG57XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1saXN0LmRyYWdnaW5nXFxue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGN1cnNvcjogaGFuZDtcXG59XFxuXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdFxcbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLnNsaWNrLXRyYWNrXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5zbGljay10cmFjazpiZWZvcmUsXFxuLnNsaWNrLXRyYWNrOmFmdGVyXFxue1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG5cXG4gICAgY29udGVudDogJyc7XFxufVxcbi5zbGljay10cmFjazphZnRlclxcbntcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay10cmFja1xcbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2xpY2stc2xpZGVcXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDFweDtcXG59XFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXNsaWRlXFxue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcbi5zbGljay1zbGlkZSBpbWdcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWdcXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWdcXG57XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlXFxue1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGVcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvd2luY28vRGVza3RvcC9qYXZhc2NyaXB0cy9TS0tVQmlyZC9mcm9udC9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDs7SUFFSSxrQkFBa0I7O0lBRWxCLGNBQWM7SUFDZCxzQkFBc0I7O0lBRXRCLHlCQUF5QjtPQUN0QixzQkFBc0I7UUFDckIscUJBQXFCO1lBQ2pCLGlCQUFpQjs7SUFFekIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUVwQixtQkFBbUI7SUFDdkIsd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLGtCQUFrQjs7SUFFbEIsY0FBYztJQUNkLGdCQUFnQjs7SUFFaEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7O0lBT1ksK0JBQStCO0FBQzNDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBOzs7SUFHSSxjQUFjOztJQUVkLFdBQVc7QUFDZjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVzs7SUFFWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLG9CQUFvQjtBQUN4QjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxjQUFjOztJQUVkLFlBQVk7O0lBRVosNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJmaWxlXCI6XCJzbGljay5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU2xpZGVyICovXFxuLnNsaWNrLXNsaWRlclxcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNsaWNrLWxpc3RcXG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLnNsaWNrLWxpc3Q6Zm9jdXNcXG57XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGljay1saXN0LmRyYWdnaW5nXFxue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGN1cnNvcjogaGFuZDtcXG59XFxuXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdFxcbntcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5zbGljay10cmFja1xcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uc2xpY2stdHJhY2s6YmVmb3JlLFxcbi5zbGljay10cmFjazphZnRlclxcbntcXG4gICAgZGlzcGxheTogdGFibGU7XFxuXFxuICAgIGNvbnRlbnQ6ICcnO1xcbn1cXG4uc2xpY2stdHJhY2s6YWZ0ZXJcXG57XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stdHJhY2tcXG57XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNsaWNrLXNsaWRlXFxue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbG9hdDogbGVmdDtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxcHg7XFxufVxcbltkaXI9J3J0bCddIC5zbGljay1zbGlkZVxcbntcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uc2xpY2stc2xpZGUgaW1nXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLXNsaWRlLnNsaWNrLWxvYWRpbmcgaW1nXFxue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2xpY2stc2xpZGUuZHJhZ2dpbmcgaW1nXFxue1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZVxcbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay1zbGlkZVxcbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2xpY2stdmVydGljYWwgLnNsaWNrLXNsaWRlXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLnNsaWNrLWFycm93LnNsaWNrLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvYWpheC1sb2FkZXIuZmI2ZjNjMjMwY2I4NDZlMjUyNDdkZmFhMWRhOTRkOGYuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay5hNGU5N2Y1YTJhNjRmMGFiMTMyMzIzZmJlYjMzYWUyOS5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3NsaWNrLjI2MzBhM2UzZWFiMjFjNjA3ZTIxNTc2NTcxYjk1YjlkLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvc2xpY2suYzk0Zjc2NzFkY2M5OWRjZTQzZTIyYTg5ZjQ4NmY3YzIudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay4yOTUxODM3ODZjZDhhMTM4OTg2NTIxZDlmMzg4YTI4Ni53b2ZmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vc2xpY2stdGhlbWUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3NsaWNrLXRoZW1lLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zbGljay10aGVtZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vc2xpY2suY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3NsaWNrLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zbGljay5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcblxyXG5jb25zdCBTa2t1QmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPlNLS1VCSVJEPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuU2trdUJpcmQucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChTa2t1QmlyZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=