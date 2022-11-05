/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/calc.js */ \"./src/utils/calc.js\");\n/* harmony import */ var _utils_greet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/greet.js */ \"./src/utils/greet.js\");\n\r\n\r\n\r\nconsole.log(`20 + 10 = ${(0,_utils_calc_js__WEBPACK_IMPORTED_MODULE_0__.add)(20, 10)}`);\r\nconsole.log(`20 * 10 = ${(0,_utils_calc_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(20, 10)}`);\r\nconsole.log(`20 - 10 = ${(0,_utils_calc_js__WEBPACK_IMPORTED_MODULE_0__.subtract)(20, 10)}`);\r\nconsole.log(`20 / 10 = ${(0,_utils_calc_js__WEBPACK_IMPORTED_MODULE_0__.divide)(20, 10)}`);\r\n\r\nconsole.log(_utils_greet_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack://build-your-own-webpack/./src/index.js?");

/***/ }),

/***/ "./src/utils/calc.js":
/*!***************************!*\
  !*** ./src/utils/calc.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"divide\": () => (/* binding */ divide),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"subtract\": () => (/* binding */ subtract)\n/* harmony export */ });\nfunction add(x, y) {\r\n  return x + y;\r\n}\r\n\r\nfunction subtract(x, y) {\r\n  return x - y;\r\n}\r\n\r\nfunction multiply(x, y) {\r\n  return x * y;\r\n}\r\n\r\nfunction divide(x, y) {\r\n  return x / y;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://build-your-own-webpack/./src/utils/calc.js?");

/***/ }),

/***/ "./src/utils/greet.js":
/*!****************************!*\
  !*** ./src/utils/greet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name.js */ \"./src/utils/name.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`Hello ${_name_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`);\r\n\n\n//# sourceURL=webpack://build-your-own-webpack/./src/utils/greet.js?");

/***/ }),

/***/ "./src/utils/name.js":
/*!***************************!*\
  !*** ./src/utils/name.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Swapnadeep\");\r\n\n\n//# sourceURL=webpack://build-your-own-webpack/./src/utils/name.js?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;