/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Light.ttf */ \"./src/fonts/Montserrat-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ \"./src/fonts/Montserrat-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.introduction {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  align-items: center;\n  text-align: center;\n}\n.introduction .title {\n  font-family: montesrratLight;\n  font-size: 64px;\n  margin: 0;\n}\n.introduction .description {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n}\n.introduction .chevronDownButton {\n  width: 74px;\n  height: 74px;\n  background-color: transparent;\n  border: 1px solid black;\n  color: black;\n  padding: 0;\n  margin: 30px 0 0;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 50%;\n}\n.introduction .chevronDownButton:hover {\n  cursor: pointer;\n  background-color: rgba(78, 104, 124, 0.0431372549);\n}\n.introduction .chevronDownButton:active {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.0431372549);\n}\n\ninput[type=text] {\n  position: relative;\n  height: 81px;\n  width: 233px;\n  display: flex;\n  font-size: 34px;\n  border: 1px solid #B9BED1;\n  background-color: #F0F2F7;\n  padding: 0 22px;\n  font-family: montesrratRegular;\n}\ninput[type=text]:focus {\n  outline: none;\n}\n\ninput[type=text]::-webkit-inner-spin-button,\ninput[type=text]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.counter,\n.counter * {\n  box-sizing: border-box;\n}\n\n.counter {\n  position: relative;\n}\n.counter button {\n  outline: none;\n  background-color: transparent;\n  padding: 12px;\n  cursor: pointer;\n  height: 40px;\n  position: absolute;\n  z-index: 1;\n}\n\n.staticText {\n  position: absolute;\n  top: 32px;\n  right: 90px;\n  font-size: 20px;\n  font-family: montesrratRegular;\n}\n\n.temperatureCounter input[type=text] {\n  padding-left: 50px;\n}\n.temperatureCounter .staticText {\n  top: 15px;\n  left: 90px;\n}\n\n.incrementButton {\n  top: 0;\n  right: 10px;\n  border: none;\n  border-bottom: 1px solid #B9BED1;\n}\n\n.decrementButton {\n  bottom: 0;\n  right: 10px;\n  border: none;\n}\n\n.fanButton {\n  outline: none;\n  background-color: #F0F2F7;\n  padding: 0;\n  cursor: pointer;\n  width: 123px;\n  height: 123px;\n  border: 1px solid #E3E8F0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.batterRangeCalculator .fanButton .title {\n  font-family: montesrratLight;\n  font-size: 10px;\n  color: #707070;\n  padding-top: 20px;\n}\n.batterRangeCalculator .fanButton .title:focus, .batterRangeCalculator .fanButton .title:active {\n  color: white;\n}\n\n.innerCircle {\n  width: 104px;\n  height: 104px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 9px;\n}\n.innerCircle:focus, .innerCircle:active {\n  background-color: #008DFF;\n  color: white;\n}\n.innerCircle .hide {\n  display: none;\n}\n\n.batterRangeCalculator .fanButtonFormSection {\n  height: 170px;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: row;\n}\n\n.wheelButton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 35px;\n  cursor: pointer;\n  height: 81px;\n  width: 233px;\n  padding: 12px;\n  outline: none;\n  border: 1px solid #B9BED1;\n  background-color: #F0F2F7;\n  font-size: 20px;\n  font-family: montesrratRegular;\n}\n.wheelButton > * {\n  pointer-events: none;\n}\n.wheelButton:focus, .wheelButton:active {\n  border: 2px solid #008DFF;\n}\n\n.wheelButtons {\n  display: flex;\n  gap: 42px;\n}\n.wheelButtons .selected {\n  border: 2px solid #008DFF;\n}\n\n.batterRangeCalculator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.batterRangeCalculator .title {\n  font-family: montesrratRegular;\n  font-size: 38px;\n}\n\n.carImageContainer {\n  position: relative;\n}\n.carImageContainer .hide {\n  display: none;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(-360deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.carWheelImageFront {\n  position: absolute;\n  bottom: 60px;\n  left: 345px;\n  animation-name: rotate;\n  animation-duration: 1ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n.carWheelImageRear {\n  position: absolute;\n  bottom: 60px;\n  right: 370px;\n  animation-name: rotate;\n  animation-duration: 1ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n.distanceMeterList {\n  width: 50%;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.distancePerModel {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n.kiloMeters {\n  position: relative;\n  color: #008DFF;\n}\n\n.distance {\n  font-size: 46px;\n  font-family: montesrratRegular;\n}\n\n.unit {\n  position: absolute;\n  top: 0;\n  right: -10px;\n  font-size: 20px;\n  font-family: montesrratLight;\n}\n\n.calculatorInnerContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 42px;\n}\n\n.divider {\n  height: 128px;\n  border-left: 1px solid #B9BED1;\n}\n\n.formSection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 23px;\n}\n.formSection .label {\n  font-family: montesrratLight;\n  font-size: 20px;\n  color: #707070;\n}\n.formSection .title {\n  margin: 0;\n}\n\n@font-face {\n  font-family: montesrratLight;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: montesrratRegular;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\nbody {\n  font-family: \"Poppins\", Helvertica, sans-serif;\n  background-color: white;\n  padding: 2rem;\n  min-height: 100vh;\n}\n\n.main {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 60px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/100d.png":
/*!*****************************!*\
  !*** ./src/images/100d.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/100d.png\");\n\n//# sourceURL=webpack:///./src/images/100d.png?");

/***/ }),

/***/ "./src/images/100d@2x.png":
/*!********************************!*\
  !*** ./src/images/100d@2x.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/100d@2x.png\");\n\n//# sourceURL=webpack:///./src/images/100d@2x.png?");

/***/ }),

/***/ "./src/images/car-base.png":
/*!*********************************!*\
  !*** ./src/images/car-base.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/car-base.png\");\n\n//# sourceURL=webpack:///./src/images/car-base.png?");

/***/ }),

/***/ "./src/images/car-base@2x.png":
/*!************************************!*\
  !*** ./src/images/car-base@2x.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/car-base@2x.png\");\n\n//# sourceURL=webpack:///./src/images/car-base@2x.png?");

/***/ }),

/***/ "./src/images/car-wheel.png":
/*!**********************************!*\
  !*** ./src/images/car-wheel.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/car-wheel.png\");\n\n//# sourceURL=webpack:///./src/images/car-wheel.png?");

/***/ }),

/***/ "./src/images/car-wheel@2x.png":
/*!*************************************!*\
  !*** ./src/images/car-wheel@2x.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/car-wheel@2x.png\");\n\n//# sourceURL=webpack:///./src/images/car-wheel@2x.png?");

/***/ }),

/***/ "./src/images/hero-image.png":
/*!***********************************!*\
  !*** ./src/images/hero-image.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/hero-image.png\");\n\n//# sourceURL=webpack:///./src/images/hero-image.png?");

/***/ }),

/***/ "./src/images/hero-image@2x.png":
/*!**************************************!*\
  !*** ./src/images/hero-image@2x.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/hero-image@2x.png\");\n\n//# sourceURL=webpack:///./src/images/hero-image@2x.png?");

/***/ }),

/***/ "./src/images/icon-chevron-down.svg":
/*!******************************************!*\
  !*** ./src/images/icon-chevron-down.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-chevron-down.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-chevron-down.svg?");

/***/ }),

/***/ "./src/images/icon-fan-gray.svg":
/*!**************************************!*\
  !*** ./src/images/icon-fan-gray.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-fan-gray.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-fan-gray.svg?");

/***/ }),

/***/ "./src/images/icon-fan-white.svg":
/*!***************************************!*\
  !*** ./src/images/icon-fan-white.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-fan-white.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-fan-white.svg?");

/***/ }),

/***/ "./src/images/icon-thin-chevron-down.svg":
/*!***********************************************!*\
  !*** ./src/images/icon-thin-chevron-down.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-thin-chevron-down.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-thin-chevron-down.svg?");

/***/ }),

/***/ "./src/images/icon-thin-chevron-up.svg":
/*!*********************************************!*\
  !*** ./src/images/icon-thin-chevron-up.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-thin-chevron-up.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-thin-chevron-up.svg?");

/***/ }),

/***/ "./src/images/icon-wave-gray.svg":
/*!***************************************!*\
  !*** ./src/images/icon-wave-gray.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-wave-gray.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-wave-gray.svg?");

/***/ }),

/***/ "./src/images/icon-wave-white.svg":
/*!****************************************!*\
  !*** ./src/images/icon-wave-white.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-wave-white.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-wave-white.svg?");

/***/ }),

/***/ "./src/images/icon-wheel.svg":
/*!***********************************!*\
  !*** ./src/images/icon-wheel.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/icon-wheel.svg\");\n\n//# sourceURL=webpack:///./src/images/icon-wheel.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/logo.png\");\n\n//# sourceURL=webpack:///./src/images/logo.png?");

/***/ }),

/***/ "./src/images/p100d.png":
/*!******************************!*\
  !*** ./src/images/p100d.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/p100d.png\");\n\n//# sourceURL=webpack:///./src/images/p100d.png?");

/***/ }),

/***/ "./src/images/p100d@2x.png":
/*!*********************************!*\
  !*** ./src/images/p100d@2x.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/src/images/p100d@2x.png\");\n\n//# sourceURL=webpack:///./src/images/p100d@2x.png?");

/***/ }),

/***/ "./src/data/metric-100D.json":
/*!***********************************!*\
  !*** ./src/data/metric-100D.json ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = [{\"temp\":-10,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":798},{\"kmh\":80,\"kilometers\":710},{\"kmh\":90,\"kilometers\":627},{\"kmh\":100,\"kilometers\":555},{\"kmh\":110,\"kilometers\":491},{\"kmh\":120,\"kilometers\":435},{\"kmh\":130,\"kilometers\":386},{\"kmh\":140,\"kilometers\":338}]},{\"temp\":-10,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":618},{\"kmh\":80,\"kilometers\":575},{\"kmh\":90,\"kilometers\":526},{\"kmh\":100,\"kilometers\":478},{\"kmh\":110,\"kilometers\":433},{\"kmh\":120,\"kilometers\":390},{\"kmh\":130,\"kilometers\":351},{\"kmh\":140,\"kilometers\":311}]},{\"temp\":-10,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":788},{\"kmh\":80,\"kilometers\":698},{\"kmh\":90,\"kilometers\":616},{\"kmh\":100,\"kilometers\":543},{\"kmh\":110,\"kilometers\":480},{\"kmh\":120,\"kilometers\":424},{\"kmh\":130,\"kilometers\":376},{\"kmh\":140,\"kilometers\":329}]},{\"temp\":-10,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":611},{\"kmh\":80,\"kilometers\":566},{\"kmh\":90,\"kilometers\":517},{\"kmh\":100,\"kilometers\":468},{\"kmh\":110,\"kilometers\":423},{\"kmh\":120,\"kilometers\":380},{\"kmh\":130,\"kilometers\":342},{\"kmh\":140,\"kilometers\":302}]},{\"temp\":0,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":818},{\"kmh\":80,\"kilometers\":725},{\"kmh\":90,\"kilometers\":642},{\"kmh\":100,\"kilometers\":568},{\"kmh\":110,\"kilometers\":504},{\"kmh\":120,\"kilometers\":447},{\"kmh\":130,\"kilometers\":397},{\"kmh\":140,\"kilometers\":352}]},{\"temp\":0,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":659},{\"kmh\":80,\"kilometers\":609},{\"kmh\":90,\"kilometers\":555},{\"kmh\":100,\"kilometers\":503},{\"kmh\":110,\"kilometers\":455},{\"kmh\":120,\"kilometers\":410},{\"kmh\":130,\"kilometers\":368},{\"kmh\":140,\"kilometers\":329}]},{\"temp\":0,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":808},{\"kmh\":80,\"kilometers\":714},{\"kmh\":90,\"kilometers\":630},{\"kmh\":100,\"kilometers\":556},{\"kmh\":110,\"kilometers\":492},{\"kmh\":120,\"kilometers\":436},{\"kmh\":130,\"kilometers\":387},{\"kmh\":140,\"kilometers\":342}]},{\"temp\":0,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":652},{\"kmh\":80,\"kilometers\":599},{\"kmh\":90,\"kilometers\":545},{\"kmh\":100,\"kilometers\":493},{\"kmh\":110,\"kilometers\":444},{\"kmh\":120,\"kilometers\":399},{\"kmh\":130,\"kilometers\":358},{\"kmh\":140,\"kilometers\":320}]},{\"temp\":10,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":833},{\"kmh\":80,\"kilometers\":740},{\"kmh\":90,\"kilometers\":655},{\"kmh\":100,\"kilometers\":581},{\"kmh\":110,\"kilometers\":516},{\"kmh\":120,\"kilometers\":459},{\"kmh\":130,\"kilometers\":409},{\"kmh\":140,\"kilometers\":362}]},{\"temp\":10,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":748},{\"kmh\":80,\"kilometers\":679},{\"kmh\":90,\"kilometers\":611},{\"kmh\":100,\"kilometers\":548},{\"kmh\":110,\"kilometers\":491},{\"kmh\":120,\"kilometers\":441},{\"kmh\":130,\"kilometers\":394},{\"kmh\":140,\"kilometers\":351}]},{\"temp\":10,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":823},{\"kmh\":80,\"kilometers\":729},{\"kmh\":90,\"kilometers\":643},{\"kmh\":100,\"kilometers\":569},{\"kmh\":110,\"kilometers\":504},{\"kmh\":120,\"kilometers\":448},{\"kmh\":130,\"kilometers\":398},{\"kmh\":140,\"kilometers\":352}]},{\"temp\":10,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":739},{\"kmh\":80,\"kilometers\":668},{\"kmh\":90,\"kilometers\":599},{\"kmh\":100,\"kilometers\":537},{\"kmh\":110,\"kilometers\":480},{\"kmh\":120,\"kilometers\":430},{\"kmh\":130,\"kilometers\":384},{\"kmh\":140,\"kilometers\":341}]},{\"temp\":20,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":849},{\"kmh\":80,\"kilometers\":756},{\"kmh\":90,\"kilometers\":669},{\"kmh\":100,\"kilometers\":594},{\"kmh\":110,\"kilometers\":529},{\"kmh\":120,\"kilometers\":471},{\"kmh\":130,\"kilometers\":421},{\"kmh\":140,\"kilometers\":372}]},{\"temp\":20,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":744},{\"kmh\":80,\"kilometers\":678},{\"kmh\":90,\"kilometers\":612},{\"kmh\":100,\"kilometers\":551},{\"kmh\":110,\"kilometers\":496},{\"kmh\":120,\"kilometers\":446},{\"kmh\":130,\"kilometers\":402},{\"kmh\":140,\"kilometers\":358}]},{\"temp\":20,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":839},{\"kmh\":80,\"kilometers\":744},{\"kmh\":90,\"kilometers\":657},{\"kmh\":100,\"kilometers\":582},{\"kmh\":110,\"kilometers\":517},{\"kmh\":120,\"kilometers\":459},{\"kmh\":130,\"kilometers\":409},{\"kmh\":140,\"kilometers\":362}]},{\"temp\":20,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":735},{\"kmh\":80,\"kilometers\":667},{\"kmh\":90,\"kilometers\":601},{\"kmh\":100,\"kilometers\":540},{\"kmh\":110,\"kilometers\":484},{\"kmh\":120,\"kilometers\":435},{\"kmh\":130,\"kilometers\":391},{\"kmh\":140,\"kilometers\":348}]},{\"temp\":30,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":865},{\"kmh\":80,\"kilometers\":771},{\"kmh\":90,\"kilometers\":684},{\"kmh\":100,\"kilometers\":605},{\"kmh\":110,\"kilometers\":537},{\"kmh\":120,\"kilometers\":480},{\"kmh\":130,\"kilometers\":430},{\"kmh\":140,\"kilometers\":382}]},{\"temp\":30,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":760},{\"kmh\":80,\"kilometers\":694},{\"kmh\":90,\"kilometers\":625},{\"kmh\":100,\"kilometers\":563},{\"kmh\":110,\"kilometers\":508},{\"kmh\":120,\"kilometers\":458},{\"kmh\":130,\"kilometers\":413},{\"kmh\":140,\"kilometers\":370}]},{\"temp\":30,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":855},{\"kmh\":80,\"kilometers\":759},{\"kmh\":90,\"kilometers\":672},{\"kmh\":100,\"kilometers\":592},{\"kmh\":110,\"kilometers\":524},{\"kmh\":120,\"kilometers\":468},{\"kmh\":130,\"kilometers\":419},{\"kmh\":140,\"kilometers\":371}]},{\"temp\":30,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":751},{\"kmh\":80,\"kilometers\":683},{\"kmh\":90,\"kilometers\":614},{\"kmh\":100,\"kilometers\":552},{\"kmh\":110,\"kilometers\":496},{\"kmh\":120,\"kilometers\":447},{\"kmh\":130,\"kilometers\":402},{\"kmh\":140,\"kilometers\":360}]},{\"temp\":30,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":833},{\"kmh\":80,\"kilometers\":736},{\"kmh\":90,\"kilometers\":649},{\"kmh\":100,\"kilometers\":571},{\"kmh\":110,\"kilometers\":504},{\"kmh\":120,\"kilometers\":449},{\"kmh\":130,\"kilometers\":400},{\"kmh\":140,\"kilometers\":354}]},{\"temp\":40,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":853},{\"kmh\":80,\"kilometers\":763},{\"kmh\":90,\"kilometers\":683},{\"kmh\":100,\"kilometers\":613},{\"kmh\":110,\"kilometers\":550},{\"kmh\":120,\"kilometers\":494},{\"kmh\":130,\"kilometers\":444},{\"kmh\":140,\"kilometers\":393}]},{\"temp\":40,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":714},{\"kmh\":80,\"kilometers\":660},{\"kmh\":90,\"kilometers\":605},{\"kmh\":100,\"kilometers\":548},{\"kmh\":110,\"kilometers\":500},{\"kmh\":120,\"kilometers\":454},{\"kmh\":130,\"kilometers\":411},{\"kmh\":140,\"kilometers\":368}]},{\"temp\":40,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":842},{\"kmh\":80,\"kilometers\":751},{\"kmh\":90,\"kilometers\":670},{\"kmh\":100,\"kilometers\":600},{\"kmh\":110,\"kilometers\":538},{\"kmh\":120,\"kilometers\":482},{\"kmh\":130,\"kilometers\":432},{\"kmh\":140,\"kilometers\":382}]},{\"temp\":40,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":705},{\"kmh\":80,\"kilometers\":650},{\"kmh\":90,\"kilometers\":594},{\"kmh\":100,\"kilometers\":537},{\"kmh\":110,\"kilometers\":489},{\"kmh\":120,\"kilometers\":443},{\"kmh\":130,\"kilometers\":400},{\"kmh\":140,\"kilometers\":358}]}]\n\n//# sourceURL=webpack:///./src/data/metric-100D.json?");

/***/ }),

/***/ "./src/data/metric-P100D.json":
/*!************************************!*\
  !*** ./src/data/metric-P100D.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = [{\"temp\":-10,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":760},{\"kmh\":80,\"kilometers\":678},{\"kmh\":90,\"kilometers\":602},{\"kmh\":100,\"kilometers\":533},{\"kmh\":110,\"kilometers\":471},{\"kmh\":120,\"kilometers\":417},{\"kmh\":130,\"kilometers\":369},{\"kmh\":140,\"kilometers\":326}]},{\"temp\":-10,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":592},{\"kmh\":80,\"kilometers\":552},{\"kmh\":90,\"kilometers\":506},{\"kmh\":100,\"kilometers\":461},{\"kmh\":110,\"kilometers\":416},{\"kmh\":120,\"kilometers\":374},{\"kmh\":130,\"kilometers\":336},{\"kmh\":140,\"kilometers\":301}]},{\"temp\":-10,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":717},{\"kmh\":80,\"kilometers\":643},{\"kmh\":90,\"kilometers\":573},{\"kmh\":100,\"kilometers\":509},{\"kmh\":110,\"kilometers\":451},{\"kmh\":120,\"kilometers\":400},{\"kmh\":130,\"kilometers\":355},{\"kmh\":140,\"kilometers\":315}]},{\"temp\":-10,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":559},{\"kmh\":80,\"kilometers\":523},{\"kmh\":90,\"kilometers\":482},{\"kmh\":100,\"kilometers\":440},{\"kmh\":110,\"kilometers\":398},{\"kmh\":120,\"kilometers\":360},{\"kmh\":130,\"kilometers\":324},{\"kmh\":140,\"kilometers\":291}]},{\"temp\":0,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":783},{\"kmh\":80,\"kilometers\":698},{\"kmh\":90,\"kilometers\":618},{\"kmh\":100,\"kilometers\":546},{\"kmh\":110,\"kilometers\":484},{\"kmh\":120,\"kilometers\":428},{\"kmh\":130,\"kilometers\":380},{\"kmh\":140,\"kilometers\":338}]},{\"temp\":0,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":635},{\"kmh\":80,\"kilometers\":588},{\"kmh\":90,\"kilometers\":536},{\"kmh\":100,\"kilometers\":485},{\"kmh\":110,\"kilometers\":437},{\"kmh\":120,\"kilometers\":393},{\"kmh\":130,\"kilometers\":354},{\"kmh\":140,\"kilometers\":315}]},{\"temp\":0,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":739},{\"kmh\":80,\"kilometers\":662},{\"kmh\":90,\"kilometers\":588},{\"kmh\":100,\"kilometers\":522},{\"kmh\":110,\"kilometers\":463},{\"kmh\":120,\"kilometers\":411},{\"kmh\":130,\"kilometers\":366},{\"kmh\":140,\"kilometers\":326}]},{\"temp\":0,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":599},{\"kmh\":80,\"kilometers\":557},{\"kmh\":90,\"kilometers\":510},{\"kmh\":100,\"kilometers\":464},{\"kmh\":110,\"kilometers\":419},{\"kmh\":120,\"kilometers\":377},{\"kmh\":130,\"kilometers\":340},{\"kmh\":140,\"kilometers\":304}]},{\"temp\":10,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":802},{\"kmh\":80,\"kilometers\":713},{\"kmh\":90,\"kilometers\":632},{\"kmh\":100,\"kilometers\":559},{\"kmh\":110,\"kilometers\":496},{\"kmh\":120,\"kilometers\":440},{\"kmh\":130,\"kilometers\":391},{\"kmh\":140,\"kilometers\":347}]},{\"temp\":10,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":722},{\"kmh\":80,\"kilometers\":655},{\"kmh\":90,\"kilometers\":590},{\"kmh\":100,\"kilometers\":528},{\"kmh\":110,\"kilometers\":473},{\"kmh\":120,\"kilometers\":423},{\"kmh\":130,\"kilometers\":377},{\"kmh\":140,\"kilometers\":337}]},{\"temp\":10,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":757},{\"kmh\":80,\"kilometers\":676},{\"kmh\":90,\"kilometers\":601},{\"kmh\":100,\"kilometers\":534},{\"kmh\":110,\"kilometers\":475},{\"kmh\":120,\"kilometers\":423},{\"kmh\":130,\"kilometers\":376},{\"kmh\":140,\"kilometers\":335}]},{\"temp\":10,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":681},{\"kmh\":80,\"kilometers\":621},{\"kmh\":90,\"kilometers\":561},{\"kmh\":100,\"kilometers\":505},{\"kmh\":110,\"kilometers\":453},{\"kmh\":120,\"kilometers\":406},{\"kmh\":130,\"kilometers\":363},{\"kmh\":140,\"kilometers\":325}]},{\"temp\":20,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":819},{\"kmh\":80,\"kilometers\":729},{\"kmh\":90,\"kilometers\":646},{\"kmh\":100,\"kilometers\":572},{\"kmh\":110,\"kilometers\":508},{\"kmh\":120,\"kilometers\":452},{\"kmh\":130,\"kilometers\":402},{\"kmh\":140,\"kilometers\":359}]},{\"temp\":20,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":720},{\"kmh\":80,\"kilometers\":656},{\"kmh\":90,\"kilometers\":592},{\"kmh\":100,\"kilometers\":531},{\"kmh\":110,\"kilometers\":477},{\"kmh\":120,\"kilometers\":428},{\"kmh\":130,\"kilometers\":384},{\"kmh\":140,\"kilometers\":343}]},{\"temp\":20,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":773},{\"kmh\":80,\"kilometers\":691},{\"kmh\":90,\"kilometers\":615},{\"kmh\":100,\"kilometers\":547},{\"kmh\":110,\"kilometers\":487},{\"kmh\":120,\"kilometers\":434},{\"kmh\":130,\"kilometers\":387},{\"kmh\":140,\"kilometers\":346}]},{\"temp\":20,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":679},{\"kmh\":80,\"kilometers\":622},{\"kmh\":90,\"kilometers\":563},{\"kmh\":100,\"kilometers\":508},{\"kmh\":110,\"kilometers\":457},{\"kmh\":120,\"kilometers\":411},{\"kmh\":130,\"kilometers\":370},{\"kmh\":140,\"kilometers\":331}]},{\"temp\":30,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":834},{\"kmh\":80,\"kilometers\":744},{\"kmh\":90,\"kilometers\":660},{\"kmh\":100,\"kilometers\":580},{\"kmh\":110,\"kilometers\":515},{\"kmh\":120,\"kilometers\":460},{\"kmh\":130,\"kilometers\":411},{\"kmh\":140,\"kilometers\":364}]},{\"temp\":30,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":735},{\"kmh\":80,\"kilometers\":671},{\"kmh\":90,\"kilometers\":606},{\"kmh\":100,\"kilometers\":543},{\"kmh\":110,\"kilometers\":488},{\"kmh\":120,\"kilometers\":440},{\"kmh\":130,\"kilometers\":396},{\"kmh\":140,\"kilometers\":355}]},{\"temp\":30,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":787},{\"kmh\":80,\"kilometers\":706},{\"kmh\":90,\"kilometers\":628},{\"kmh\":100,\"kilometers\":554},{\"kmh\":110,\"kilometers\":493},{\"kmh\":120,\"kilometers\":442},{\"kmh\":130,\"kilometers\":396},{\"kmh\":140,\"kilometers\":351}]},{\"temp\":30,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":693},{\"kmh\":80,\"kilometers\":636},{\"kmh\":90,\"kilometers\":577},{\"kmh\":100,\"kilometers\":519},{\"kmh\":110,\"kilometers\":468},{\"kmh\":120,\"kilometers\":422},{\"kmh\":130,\"kilometers\":381},{\"kmh\":140,\"kilometers\":342}]},{\"temp\":40,\"wheelsize\":19,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":822},{\"kmh\":80,\"kilometers\":736},{\"kmh\":90,\"kilometers\":659},{\"kmh\":100,\"kilometers\":592},{\"kmh\":110,\"kilometers\":529},{\"kmh\":120,\"kilometers\":474},{\"kmh\":130,\"kilometers\":424},{\"kmh\":140,\"kilometers\":377}]},{\"temp\":40,\"wheelsize\":19,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":691},{\"kmh\":80,\"kilometers\":639},{\"kmh\":90,\"kilometers\":584},{\"kmh\":100,\"kilometers\":533},{\"kmh\":110,\"kilometers\":482},{\"kmh\":120,\"kilometers\":436},{\"kmh\":130,\"kilometers\":393},{\"kmh\":140,\"kilometers\":352}]},{\"temp\":40,\"wheelsize\":21,\"ac\":\"off\",\"hwy\":[{\"kmh\":70,\"kilometers\":776},{\"kmh\":80,\"kilometers\":698},{\"kmh\":90,\"kilometers\":627},{\"kmh\":100,\"kilometers\":565},{\"kmh\":110,\"kilometers\":507},{\"kmh\":120,\"kilometers\":455},{\"kmh\":130,\"kilometers\":408},{\"kmh\":140,\"kilometers\":363}]},{\"temp\":40,\"wheelsize\":21,\"ac\":\"on\",\"hwy\":[{\"kmh\":70,\"kilometers\":652},{\"kmh\":80,\"kilometers\":606},{\"kmh\":90,\"kilometers\":556},{\"kmh\":100,\"kilometers\":509},{\"kmh\":110,\"kilometers\":462},{\"kmh\":120,\"kilometers\":419},{\"kmh\":130,\"kilometers\":378},{\"kmh\":140,\"kilometers\":339}]}]\n\n//# sourceURL=webpack:///./src/data/metric-P100D.json?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$":
/*!********************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png%7Cjpe?g%7Cgif%7Csvg)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./100d.png\": \"./src/images/100d.png\",\n\t\"./100d@2x.png\": \"./src/images/100d@2x.png\",\n\t\"./car-base.png\": \"./src/images/car-base.png\",\n\t\"./car-base@2x.png\": \"./src/images/car-base@2x.png\",\n\t\"./car-wheel.png\": \"./src/images/car-wheel.png\",\n\t\"./car-wheel@2x.png\": \"./src/images/car-wheel@2x.png\",\n\t\"./hero-image.png\": \"./src/images/hero-image.png\",\n\t\"./hero-image@2x.png\": \"./src/images/hero-image@2x.png\",\n\t\"./icon-chevron-down.svg\": \"./src/images/icon-chevron-down.svg\",\n\t\"./icon-fan-gray.svg\": \"./src/images/icon-fan-gray.svg\",\n\t\"./icon-fan-white.svg\": \"./src/images/icon-fan-white.svg\",\n\t\"./icon-thin-chevron-down.svg\": \"./src/images/icon-thin-chevron-down.svg\",\n\t\"./icon-thin-chevron-up.svg\": \"./src/images/icon-thin-chevron-up.svg\",\n\t\"./icon-wave-gray.svg\": \"./src/images/icon-wave-gray.svg\",\n\t\"./icon-wave-white.svg\": \"./src/images/icon-wave-white.svg\",\n\t\"./icon-wheel.svg\": \"./src/images/icon-wheel.svg\",\n\t\"./logo.png\": \"./src/images/logo.png\",\n\t\"./p100d.png\": \"./src/images/p100d.png\",\n\t\"./p100d@2x.png\": \"./src/images/p100d@2x.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\";\n\n//# sourceURL=webpack:///./src/images/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _scripts_imageImporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/imageImporter.js */ \"./src/scripts/imageImporter.js\");\n/* harmony import */ var _scripts_imageImporter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_imageImporter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_batterRangeCalculator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/batterRangeCalculator.js */ \"./src/scripts/batterRangeCalculator.js\");\n\n\n\n\nconst batterRangeCalculator = new _scripts_batterRangeCalculator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nbatterRangeCalculator.setupEvents();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/batterRangeCalculator.js":
/*!**********************************************!*\
  !*** ./src/scripts/batterRangeCalculator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./src/scripts/counter.js\");\n/* harmony import */ var _fan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fan */ \"./src/scripts/fan.js\");\n/* harmony import */ var _temperatureCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temperatureCounter */ \"./src/scripts/temperatureCounter.js\");\n/* harmony import */ var _wheels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wheels */ \"./src/scripts/wheels.js\");\n/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distance */ \"./src/scripts/distance.js\");\n/* harmony import */ var _data_metric_100D_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/metric-100D.json */ \"./src/data/metric-100D.json\");\n/* harmony import */ var _data_metric_100D_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_metric_100D_json__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_metric_P100D_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/metric-P100D.json */ \"./src/data/metric-P100D.json\");\n/* harmony import */ var _data_metric_P100D_json__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_metric_P100D_json__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nclass BatterRangeCalculator {\n  speed;\n\n  outsideTemperature;\n\n  fan;\n\n  wheels;\n\n  setupEvents() {\n    const setupSpeedEvents = () => {\n      const speedCounterElement = document.querySelector(\n        \".counter.speedCounter\",\n      );\n      const initialValue = speedCounterElement.querySelector(\"input\")?.value;\n      this.speed = new _counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        Number(initialValue) ?? 70,\n        70,\n        140,\n        speedCounterElement,\n      );\n\n      this.speed.addEventListeners();\n    };\n\n    const setupTemperatureEvents = () => {\n      const temperatureCounterElement = document.querySelector(\n        \".counter.temperatureCounter\",\n      );\n      const initialValue =\n        temperatureCounterElement.querySelector(\"input\")?.value;\n      this.outsideTemperature = new _temperatureCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n        Number(initialValue) ?? -10,\n        -10,\n        40,\n        this.fan,\n        temperatureCounterElement,\n      );\n\n      this.outsideTemperature.addEventListeners();\n    };\n\n    const setupFanEvents = () => {\n      const fan = document.querySelector(\".fanButton\");\n      this.fan = new _fan__WEBPACK_IMPORTED_MODULE_1__[\"default\"](fan);\n\n      this.fan.addEventListeners();\n    };\n\n    const setupWheelEvents = () => {\n      const wheels = document.querySelector(\".wheelButtons\");\n      this.wheels = new _wheels__WEBPACK_IMPORTED_MODULE_3__[\"default\"](wheels);\n\n      this.wheels.addEventListeners();\n    };\n\n    const setupDistanceEvents = () => {\n      const model100D = document.querySelector(\"[data-model='100D']\");\n      const distanceModel100D = new _distance__WEBPACK_IMPORTED_MODULE_4__[\"default\"]((_data_metric_100D_json__WEBPACK_IMPORTED_MODULE_5___default()), model100D);\n\n      const modelP100D = document.querySelector(\"[data-model='P100D']\");\n      const distanceModelP100D = new _distance__WEBPACK_IMPORTED_MODULE_4__[\"default\"]((_data_metric_P100D_json__WEBPACK_IMPORTED_MODULE_6___default()), modelP100D);\n\n      const updateWheelAnimation = (speed, distance, wheelSize) => {\n        const time = distance / (speed * 10);\n\n        const frontWheel = document.querySelector(\n          `.carWheelImageFront[data-size=\"${wheelSize}\"]`,\n        );\n        frontWheel.style.animationDuration = `${time}s`;\n\n        const rearWheel = document.querySelector(\n          `.carWheelImageRear[data-size=\"${wheelSize}\"]`,\n        );\n        rearWheel.style.animationDuration = `${time}s`;\n      };\n\n      const updateDistanceForModels = () => {\n        const ac = this.fan.getSwitched() ? \"on\" : \"off\";\n        const temp = this.outsideTemperature.getCount();\n        const kmh = this.speed.getCount();\n        const wheelSize = this.wheels.getSelectedWheel() ?? 19;\n\n        distanceModel100D.computeDistance(kmh, temp, ac, wheelSize);\n        distanceModelP100D.computeDistance(kmh, temp, ac, wheelSize);\n\n        const distance1 = distanceModel100D.getDistance();\n        const distance2 = distanceModelP100D.getDistance();\n\n        const avgDistance = (distance1 + distance2) / 2;\n\n        updateWheelAnimation(kmh, Math.round(avgDistance), wheelSize);\n      };\n\n      window.addEventListener(\"load\", () => {\n        updateDistanceForModels();\n      });\n\n      document.addEventListener(\"kiloMetersChangedEvent\", () => {\n        updateDistanceForModels();\n      });\n    };\n\n    setupSpeedEvents();\n    setupTemperatureEvents();\n    setupFanEvents();\n    setupWheelEvents();\n    setupDistanceEvents();\n  }\n\n  getSpeed() {\n    this.speed.getCount();\n  }\n\n  getOutsideTemperature() {\n    this.outsideTemperature.getCount();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatterRangeCalculator);\n\n\n//# sourceURL=webpack:///./src/scripts/batterRangeCalculator.js?");

/***/ }),

/***/ "./src/scripts/counter.js":
/*!********************************!*\
  !*** ./src/scripts/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Counter {\n  constructor(initialCount, min, max, element = null) {\n    this.count = initialCount;\n    this.element = element;\n    this.min = min;\n    this.max = max;\n  }\n\n  #increment() {\n    if (this.count <= this.max) {\n      this.count += 10;\n    }\n  }\n\n  #decrement() {\n    if (this.count >= this.min) {\n      this.count -= 10;\n    }\n  }\n\n  getCount() {\n    return this.count;\n  }\n\n  addEventListeners() {\n    const counterInput = this.element.querySelector(\"input\");\n    const incrementButton = this.element.querySelector(\".incrementButton\");\n    const decrementButton = this.element.querySelector(\".decrementButton\");\n\n    if (!counterInput || !incrementButton || !decrementButton) {\n      throw new Error(\"Counter element not found!\");\n    }\n\n    const updateCounterValue = () => {\n      const newValue = this.getCount();\n      counterInput.value = newValue;\n    };\n\n    const updateButtonColor = (counterButton, isDisabled) => {\n      const svg = counterButton.querySelector(\"object\").contentDocument;\n      const svgPath = svg.querySelector(\"path\");\n      if (svgPath) {\n        svgPath.setAttribute(\"stroke\", isDisabled ? \"#707070\" : \"#008dff\");\n      }\n    };\n\n    const disableButton = (button) => {\n      if (!button) {\n        return;\n      }\n      const counterButton = button;\n      counterButton.disabled = true;\n\n      this.isDisabled = true;\n\n      updateButtonColor(counterButton, true);\n    };\n\n    const enableButton = (button) => {\n      if (!button) {\n        return;\n      }\n      const counterButton = button;\n      counterButton.disabled = false;\n\n      this.isDisabled = false;\n\n      updateButtonColor(counterButton, false);\n    };\n\n    incrementButton.addEventListener(\"click\", () => {\n      this.#increment();\n      updateCounterValue();\n      if (this.count === this.max) {\n        disableButton(incrementButton);\n      }\n\n      if (this.count > this.min) {\n        enableButton(decrementButton);\n      }\n\n      document.dispatchEvent(new CustomEvent(\"kiloMetersChangedEvent\"));\n    });\n\n    decrementButton.addEventListener(\"click\", () => {\n      this.#decrement();\n      updateCounterValue();\n      if (this.count === this.min) {\n        disableButton(decrementButton);\n      }\n      if (this.count < this.max) {\n        enableButton(incrementButton);\n      }\n      document.dispatchEvent(new CustomEvent(\"kiloMetersChangedEvent\"));\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n\n//# sourceURL=webpack:///./src/scripts/counter.js?");

/***/ }),

/***/ "./src/scripts/distance.js":
/*!*********************************!*\
  !*** ./src/scripts/distance.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Distance {\n  constructor(data, element = null) {\n    this.data = data;\n    this.element = element;\n  }\n\n  #kilometers;\n\n  computeDistance(speed, outsideTemperature, fan, wheel) {\n    this.#kilometers =\n      this.data\n        .find(\n          (item) =>\n            item.ac === fan &&\n            item.temp === outsideTemperature &&\n            item.wheelsize === wheel,\n        )\n        ?.hwy.find((hwyItem) => hwyItem.kmh === speed)?.kilometers ?? \"-\";\n\n    this.#updateDistance();\n  }\n\n  getDistance() {\n    return this.#kilometers;\n  }\n\n  #updateDistance() {\n    const distanceElement = this.element.querySelector(\".kiloMeters .distance\");\n    distanceElement.textContent = this.getDistance();\n    distanceElement.setAttribute(\"kms\", this.getDistance());\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Distance);\n\n\n//# sourceURL=webpack:///./src/scripts/distance.js?");

/***/ }),

/***/ "./src/scripts/fan.js":
/*!****************************!*\
  !*** ./src/scripts/fan.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Fan {\n  #airConditioner = true;\n\n  #isSwitchedOn = false;\n\n  constructor(element = null) {\n    this.element = element;\n  }\n\n  #setSwitched() {\n    this.#isSwitchedOn = !this.#isSwitchedOn;\n  }\n\n  getSwitched() {\n    return this.#isSwitchedOn;\n  }\n\n  #updateAirConditionerTitle(title) {\n    const fanTitle = title;\n    fanTitle.textContent = this.#isSwitchedOn ? \"AC ON\" : \"AC OFF\";\n  }\n\n  #updateHeaterTitle(title) {\n    const fanTitle = title;\n    fanTitle.textContent = this.#isSwitchedOn ? \"HEATER ON\" : \"HEATER OFF\";\n  }\n\n  #updateTitle(title) {\n    if (this.#airConditioner) {\n      this.#updateAirConditionerTitle(title);\n    } else {\n      this.#updateHeaterTitle(title);\n    }\n  }\n\n  #updateStyling(element) {\n    const innerElement = element.querySelector(\".innerCircle\");\n    const title = this.element.querySelector(\".title\");\n\n    if (this.#isSwitchedOn) {\n      title.style.color = \"#FFFFFF\";\n    } else {\n      title.style.color = \"#707070\";\n    }\n\n    if (this.#airConditioner) {\n      innerElement.style.backgroundColor = this.#isSwitchedOn\n        ? \"#008DFF\"\n        : \"#FFFFFF\";\n    } else {\n      innerElement.style.backgroundColor = this.#isSwitchedOn\n        ? \"#EC1C24\"\n        : \"#FFFFFF\";\n    }\n  }\n\n  #setFanType(temperature) {\n    this.#airConditioner = temperature > 10;\n  }\n\n  #updateFanType(temperature) {\n    this.#setFanType(temperature);\n\n    const airConditioner = this.element.querySelector(\".airConditioner\");\n    const heater = this.element.querySelector(\".heater\");\n    const title = this.element.querySelector(\".title\");\n\n    if (this.#airConditioner) {\n      heater.classList.add(\"hide\");\n      airConditioner.classList.remove(\"hide\");\n\n      this.#updateAirConditionerTitle(title);\n    } else {\n      airConditioner.classList.add(\"hide\");\n      heater.classList.remove(\"hide\");\n\n      this.#updateHeaterTitle(title);\n    }\n  }\n\n  addEventListeners() {\n    const title = this.element.querySelector(\".title\");\n\n    this.element.addEventListener(\"click\", () => {\n      this.#setSwitched();\n\n      this.#updateTitle(title);\n      this.#updateStyling(this.element);\n\n      document.dispatchEvent(new CustomEvent(\"kiloMetersChangedEvent\"));\n    });\n\n    document.addEventListener(\"temperatureChangedEvent\", (e) => {\n      const { detail } = e;\n\n      this.#updateFanType(detail.temperature);\n      this.#updateStyling(this.element);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fan);\n\n\n//# sourceURL=webpack:///./src/scripts/fan.js?");

/***/ }),

/***/ "./src/scripts/imageImporter.js":
/*!**************************************!*\
  !*** ./src/scripts/imageImporter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const importAll = (r) => r.keys().map(r);\n\nimportAll(__webpack_require__(\"./src/images sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\"));\n\n\n//# sourceURL=webpack:///./src/scripts/imageImporter.js?");

/***/ }),

/***/ "./src/scripts/temperatureCounter.js":
/*!*******************************************!*\
  !*** ./src/scripts/temperatureCounter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./src/scripts/counter.js\");\n\n\nclass TemperatureCounter extends _counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(initialCount, min, max, fan, element = null) {\n    super(initialCount, min, max, element);\n    this.fan = fan;\n  }\n\n  addEventListeners() {\n    const incrementButton = this.element.querySelector(\".incrementButton\");\n    const decrementButton = this.element.querySelector(\".decrementButton\");\n\n    super.addEventListeners();\n\n    incrementButton.addEventListener(\"click\", () => {\n      document.dispatchEvent(\n        new CustomEvent(\"temperatureChangedEvent\", {\n          detail: { temperature: this.count },\n        }),\n      );\n    });\n\n    decrementButton.addEventListener(\"click\", () => {\n      document.dispatchEvent(\n        new CustomEvent(\"temperatureChangedEvent\", {\n          detail: { temperature: this.count },\n        }),\n      );\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemperatureCounter);\n\n\n//# sourceURL=webpack:///./src/scripts/temperatureCounter.js?");

/***/ }),

/***/ "./src/scripts/wheels.js":
/*!*******************************!*\
  !*** ./src/scripts/wheels.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Wheels {\n  constructor(element = null) {\n    this.element = element;\n  }\n\n  #wheel;\n\n  getSelectedWheel() {\n    return this.#wheel;\n  }\n\n  addEventListeners() {\n    const updateSelection = (selectedElement) => {\n      const wheelSize = selectedElement.getAttribute(\"data-size\");\n      this.#wheel = Number(wheelSize);\n    };\n\n    const updateSelectedButton = (prevSelection, currentSelection) => {\n      prevSelection.classList.remove(\"selected\");\n      currentSelection.classList.add(\"selected\");\n    };\n\n    const updateFrontWheel = (previous) => {\n      const currentSelection = document.querySelector(\n        `.carWheelImageFront[data-size='${this.getSelectedWheel()}']`,\n      );\n      currentSelection.classList.remove(\"hide\");\n      const previousSelection = document.querySelector(\n        `.carWheelImageFront[data-size='${previous}']`,\n      );\n\n      previousSelection.classList.add(\"hide\");\n    };\n\n    const updateRearWheel = (previous) => {\n      const currentSelection = document.querySelector(\n        `.carWheelImageRear[data-size='${this.getSelectedWheel()}']`,\n      );\n      currentSelection.classList.remove(\"hide\");\n      const previousSelection = document.querySelector(\n        `.carWheelImageRear[data-size='${previous}']`,\n      );\n\n      previousSelection.classList.add(\"hide\");\n    };\n\n    window.onload = () => {\n      const defaultSelectedWheel = this.element.querySelector(\n        \".wheelButton.selected\",\n      );\n      updateSelection(defaultSelectedWheel);\n    };\n\n    this.element.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n\n      const previousWheelSize = this.getSelectedWheel();\n      const prevSelection = e.target.parentElement.querySelector(\n        \".wheelButton.selected\",\n      );\n      const currentSelection = e.target.closest(\".wheelButton\");\n\n      updateSelection(currentSelection);\n      updateFrontWheel(previousWheelSize);\n      updateRearWheel(previousWheelSize);\n      updateSelectedButton(prevSelection, currentSelection);\n\n      document.dispatchEvent(new CustomEvent(\"kiloMetersChangedEvent\"));\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wheels);\n\n\n//# sourceURL=webpack:///./src/scripts/wheels.js?");

/***/ }),

/***/ "./src/fonts/Montserrat-Light.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Montserrat-Light.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"34270926ef09970234f5.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/Montserrat-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2a2d37bf7680d86811db.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/Montserrat-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1cd4d0024fef9e3179a3")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;