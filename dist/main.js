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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --bg-color: #fae5d3;\\n  --primary-color: #e67e22;\\n  --secondary-color: #f8ede3;\\n  --border-color: #d0b8a8;\\n  --extra-color: #e26868;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: 'Rubik', sans-serif;\\n  line-height: 1;\\n  font-weight: 400;\\n  background-color: #4d4646;\\n}\\n\\na {\\n  color: #ffc500;\\n  text-decoration: none;\\n  font-weight: 700;\\n  transition: 0.5s;\\n}\\n\\na:hover {\\n  color: #fff;\\n}\\n\\n/* Header */\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\nheader,\\nfooter {\\n  padding: 5px 130px;\\n  background: #bc2c0b;\\n  color: #ffc500 !important;\\n  font-weight: 700;\\n  font-size: 22px;\\n  height: 80px;\\n  box-shadow: 0 15px 0 #6b514bdf;\\n}\\n\\n#header {\\n  position: fixed;\\n  z-index: 1000;\\n  width: 100vw;\\n}\\n\\n.brand {\\n  display: flex;\\n  align-items: center;\\n  gap: 30px;\\n}\\n\\n.nav-links {\\n  display: flex;\\n  align-items: center;\\n  font-size: 22px;\\n  gap: 30px;\\n}\\n\\n/* Main */\\n\\nmain {\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n}\\n\\n.lists {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  margin: 25px auto;\\n  width: 100%;\\n  gap: 20px;\\n  margin-top: 12rem;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  background: #bc2c0b;\\n  width: 280px;\\n  padding: 15px;\\n  gap: 15px;\\n  border-radius: 12px;\\n  box-shadow:\\n    rgba(0, 0, 0, 0.4) 0 2px 4px,\\n    rgba(0, 0, 0, 0.3) 0 7px 13px -3px,\\n    rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\\n  transition: 0.5s;\\n}\\n\\n.card:hover {\\n  box-shadow:\\n    rgba(0, 0, 0, 0.9) 0 2px 4px,\\n    rgba(0, 0, 0, 0.9) 0 7px 13px -3px,\\n    rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\\n}\\n\\n.img {\\n  display: flex;\\n  flex-direction: column;\\n  width: 250px;\\n  height: 325px;\\n  border-radius: 10px;\\n  transition: 0.5s;\\n  box-shadow:\\n    rgba(0, 0, 0, 0.9) 0 2px 4px,\\n    rgba(0, 0, 0, 0.9) 0 7px 13px -3px,\\n    rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\\n  cursor: pointer;\\n  text-align: center;\\n  align-items: center;\\n  overflow: hidden;\\n}\\n\\n.modal-container p {\\n  width: 70%;\\n  margin: 0 auto;\\n}\\n\\n.img p {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  font-size: 16px;\\n  transition: 1.5s;\\n  padding: 10px;\\n  opacity: 0;\\n  color: #fff;\\n  border-radius: 10px;\\n  overflow-y: scroll;\\n}\\n\\n.img p::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.img:hover p {\\n  opacity: 1;\\n  background: rgba(0, 0, 0, 0.8);\\n}\\n\\n.title {\\n  font-size: 22px;\\n  color: #fff;\\n}\\n\\n.likes {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 20px;\\n  gap: 10px;\\n  color: #fff;\\n}\\n\\n.like-icon {\\n  cursor: pointer;\\n  transform: scale(0.8);\\n  transition: 0.5s;\\n}\\n\\n.like-icon:hover {\\n  transform: scale(1);\\n}\\n\\n.like-icon:active {\\n  transform: scale(0.8);\\n}\\n\\n/* buttons */\\nbutton {\\n  border: none;\\n  border-radius: 5px;\\n  background: #fff;\\n  cursor: pointer;\\n}\\n\\n.button-top {\\n  display: block;\\n  box-sizing: border-box;\\n  border: 2px solid #fff;\\n  border-radius: 5px;\\n  padding: 10px 25px;\\n  background: #bc2c0b;\\n  color: #fff;\\n  transform: translateY(-0.2em);\\n  transition: transform 0.3s ease;\\n  font-size: 16px;\\n}\\n\\nbutton:hover .button-top {\\n  transform: translateY(-0.3em);\\n}\\n\\nbutton:active .button-top {\\n  transform: translateY(0);\\n}\\n\\n/* footer */\\n\\n.footer {\\n  padding: 5px 20px;\\n  font-size: 18px;\\n  width: 100%;\\n  display: flex;\\n  justify-content: left;\\n  align-items: center;\\n}\\n\\n.footer-text {\\n  margin: 0 0 0 10rem;\\n}\\n\\n.footer-link {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n\\n.footer-link:hover {\\n  color: #ffc500;\\n  text-decoration: underline;\\n}\\n\\n/* Modal styles */\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  background: rgba(0, 0, 0, 0.8);\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1000;\\n}\\n\\n.modal-container {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 12px;\\n  background: #4d4646;\\n  color: var(--primary-color);\\n  max-width: 50vw;\\n  max-height: 95vh;\\n  overflow-x: hidden;\\n  margin: 25px auto;\\n  z-index: 3;\\n  border: 4px solid var(--border-color);\\n}\\n\\n.close-icon {\\n  position: fixed;\\n  align-self: flex-end;\\n  cursor: pointer;\\n  margin: 5px 10px;\\n  transform: scale(0.9);\\n  transition: 0.5s;\\n  color: red;\\n  font-size: 40px;\\n}\\n\\n.close-icon:hover {\\n  transform: scale(1);\\n}\\n\\n.modal-header {\\n  display: flex;\\n  padding: 30px 0;\\n  justify-content: space-around;\\n  align-items: center;\\n  border-bottom: 4px solid var(--border-color);\\n}\\n\\n.modal-title {\\n  font-size: 30px;\\n  color: #fff;\\n}\\n\\n.modal-genres {\\n  text-decoration: underline;\\n  font-size: 15px;\\n  padding: 10px 0;\\n  color: #fff;\\n}\\n\\n.modal-container h2 {\\n  padding: 10px 0;\\n}\\n\\n.modal-container::-webkit-scrollbar-track,\\n.img span::-webkit-scrollbar-track {\\n  border-radius: 12px;\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n.modal-container::-webkit-scrollbar,\\n.img span::-webkit-scrollbar {\\n  width: 7px;\\n}\\n\\n.modal-container::-webkit-scrollbar-thumb,\\n.img span::-webkit-scrollbar-thumb {\\n  border-radius: 12px;\\n  box-shadow: inset 0 0 6px var(--extra-color);\\n  background-color: var(--extra-color);\\n}\\n\\n.modal-container h4 {\\n  font-style: italic;\\n}\\n\\n.comment-section {\\n  padding: 30px 0;\\n  color: #fff;\\n}\\n\\n.comment-section h2 {\\n  padding: 10px 0;\\n}\\n\\n.no_comment {\\n  font-weight: 500;\\n  font-size: small;\\n  padding: 10px 0;\\n}\\n\\n.comment_paragraph {\\n  font-size: 14px;\\n  font-weight: 500;\\n  padding: 10px 0;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.6rem;\\n  max-width: 70%;\\n  margin: 0 auto;\\n  color: #fff;\\n}\\n\\ninput {\\n  width: 20rem;\\n  height: 40px;\\n  background: transparent;\\n  padding: 0 10px;\\n  color: #fff;\\n  border: none;\\n  margin-bottom: 10px;\\n}\\n\\ninput:focus {\\n  border-bottom: 2px solid var(--extra-color);\\n}\\n\\ninput::placeholder {\\n  font-style: italic;\\n  color: var(--primary-color);\\n}\\n\\n.submit_button {\\n  align-self: center;\\n}\\n\\n.visible {\\n  display: block;\\n}\\n\\n::placeholder {\\n  color: #fff !important;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tvmaze-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _modules_postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_showData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showData.js */ \"./src/modules/showData.js\");\n\n\n\n\n\n\n// logo\nconst logo = new Image();\nconst brand = document.querySelector('.logo');\nlogo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__;\nbrand.appendChild(logo);\n\nwindow.addEventListener('click', (event) => {\n  if (event.target.classList.contains('like-icon')) {\n    const itemId = event.target.id;\n    (0,_modules_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemId);\n    const likes = event.target.nextElementSibling;\n    let numberOfLikes = Number(likes.textContent);\n    numberOfLikes += 1;\n    likes.textContent = String(numberOfLikes);\n  }\n});\n\n(0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_showData_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://tvmaze-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/addCommentCounter.js":
/*!******************************************!*\
  !*** ./src/modules/addCommentCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addCommentCounter = () => {\n  const commentItems = document.querySelectorAll('.comment_paragraph');\n  const numberOfComments = commentItems.length;\n  return numberOfComments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCommentCounter);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/addCommentCounter.js?");

/***/ }),

/***/ "./src/modules/addNewComments.js":
/*!***************************************!*\
  !*** ./src/modules/addNewComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _involvementURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvementURL.js */ \"./src/modules/involvementURL.js\");\n\n\n\n\nconst addNewComments = (id) => {\n  const nameInput = document.querySelector('.username');\n  const commentInput = document.querySelector('.comment');\n  const submitBtn = document.querySelector('.submit-btn');\n  submitBtn.addEventListener('click', async () => {\n    if (!nameInput.value) {\n      nameInput.setCustomValidity('Please enter your name');\n      nameInput.reportValidity();\n      setTimeout(() => {\n        nameInput.setCustomValidity('');\n      }, 1500);\n      return;\n    }\n    if (!commentInput.value) {\n      commentInput.setCustomValidity('Please enter your insights');\n      commentInput.reportValidity();\n      setTimeout(() => {\n        commentInput.setCustomValidity('');\n      }, 1500);\n      return;\n    }\n\n    await fetch(`${_involvementURL_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}/comments`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `${Number(id)}`,\n        username: nameInput.value,\n        comment: commentInput.value,\n      }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    await (0,_showComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nameInput.value, commentInput.value);\n\n    nameInput.value = '';\n    commentInput.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewComments);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/addNewComments.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addCommentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCommentCounter.js */ \"./src/modules/addCommentCounter.js\");\n\n\nconst displayComments = (nameInput, commentInput) => {\n  const commentSection = document.querySelector('.comment-section');\n  const paragraphs = document.querySelectorAll('.comment_paragraph');\n  const date = new Date().toISOString().slice(0, 10);\n  if (!paragraphs.length) {\n    const noComment = document.querySelector('.no_comment');\n    noComment.innerHTML = `${date} ${nameInput}: \"${commentInput}\"`;\n  } else {\n    const paragraph = document.createElement('p');\n    paragraph.classList.add('comment_paragraph');\n    paragraph.textContent = `${date} ${nameInput}: \"${commentInput}\"`;\n    commentSection.appendChild(paragraph);\n  }\n\n  const headings = document.querySelector('.comment-heading');\n  headings.innerHTML = `Comments (${(0,_addCommentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayLikes = (data) => {\n  data.forEach((item) => {\n    const likeCount = document.querySelectorAll('.like-count');\n    likeCount.forEach((display) => {\n      if (display.id === item.item_id) {\n        display.textContent = item.likes;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/like.png */ \"./src/assets/like.png\");\n\n\n// display movies\nconst displayMovies = (movies) => {\n  const lists = document.querySelector('.lists');\n  lists.innerHTML = '';\n  movies.forEach((movie, index) => {\n    lists.innerHTML += `\n    <div class=\"card\">\n      <div\n        class=\"img\"\n        style=\"\n              background: url('${movie.image.medium}');\n              background-position: center;\n              background-repeat: no-repeat;\n              background-size: cover;\n            \"\n      >\n        <p class=\"summary\">${movie.summary}</p>\n      </div>\n      <h3 class=\"title\">${movie.name}</h3>\n      <div class=\"likes\">\n        <img src=\"${_assets_like_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"\" class=\"like-icon\" id=\"${movie.id}\" />\n        <p class=\"like-count\" id=\"${movie.id}\">\n          0\n        </p>\n        <p>Likes</p>\n      </div>\n      <button class=\"comment-button\" data-id=\"${index + 1}\">\n        <span class=\"button-top\">Comment</span>\n      </button>\n  </div>;\n    `;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/modules/displayLikes.js\");\n/* harmony import */ var _involvementURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementURL.js */ \"./src/modules/involvementURL.js\");\n\n\n\nconst getLikes = async () => {\n  await fetch(`${_involvementURL_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}/likes`)\n    .then((response) => response.json())\n    .then((response) => (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/involvementURL.js":
/*!***************************************!*\
  !*** ./src/modules/involvementURL.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JNsfgJQ37UBE16zOiirg';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementURL);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/involvementURL.js?");

/***/ }),

/***/ "./src/modules/itemsCount.js":
/*!***********************************!*\
  !*** ./src/modules/itemsCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = () => {\n  window.addEventListener('load', () => {\n    const lists = document.querySelector('.lists');\n    const displayNumber = lists.childElementCount;\n    const NumberOfCounts = document.querySelector('#count');\n    NumberOfCounts.textContent = displayNumber;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/itemsCount.js?");

/***/ }),

/***/ "./src/modules/modalHandler.js":
/*!*************************************!*\
  !*** ./src/modules/modalHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _addNewComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewComments.js */ \"./src/modules/addNewComments.js\");\n/* harmony import */ var _addCommentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCommentCounter.js */ \"./src/modules/addCommentCounter.js\");\n\n\n\n\nconst modal = document.querySelector('.modal');\n\nconst modalHandler = (movies) => {\n  const commentBtns = document.querySelectorAll('.comment-button');\n  commentBtns.forEach(async (button) => {\n    button.addEventListener('click', async () => {\n      document.body.style.overflow = 'hidden';\n      const mainButton = movies.find(\n        (movie) => movie.id === Number(button.dataset.id),\n      );\n      modal.classList.add('visible');\n      const comments = await (0,_showComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(button.dataset.id);\n      modal.innerHTML += `\n      <div class=\"modal-container\">\n      <div class=\"modal-header\">\n        <div\n          class=\"img\"\n          style=\"\n            background: url('${mainButton.image.medium}');\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n          \"\n        >\n          <span>${mainButton.summary}</span>\n        </div>\n        <div>\n          <h2 class=\"modal-title\">${mainButton.name}</h2>\n          <h4 class=\"modal-genres\">${mainButton.genres}</h4>\n          <form class=\"form\">\n            <h2 class=\"form-heading\">Add a Comment</h2>\n            <input\n              id=\"pop-user\"\n              type=\"text\"\n              class=\"username\"\n              placeholder=\"Your Name...\"\n            />\n            <input\n            id=\"pop-comment\"\n              type=\"text\"\n              name=\"comment\"\n              class=\"comment\"\n              placeholder=\"Your Insights...\"\n            />\n            <button type=\"button\" class=\"submit-btn\">\n              <span class=\"button-top\">Comment</span>\n            </button>\n          </form>\n        </div>\n      </div>\n      <div class=\"close-icon\">&times;</div>\n      <div>\n        <div class=\"comment-section\">\n        <h2 class='comment-heading'>Comments(${\n  comments.error ? 0 : comments.length\n})<h2/>\n        \n        ${\n  comments.error\n    ? '<p class=\"no_comment\"> No comment for this movie</p>'\n    : ` ${comments\n      .map(\n        (comment, idx) => `\n              <p class='comment_paragraph' key=${idx}>${comment.creation_date} ${comment.username}: \"${comment.comment}\"</p>\n            `,\n      )\n      .join('')} `\n}\n          </div>\n        </div>\n      </div>\n    </div>\n      `;\n\n      document.querySelector('.close-icon').addEventListener('click', () => {\n        modal.classList.remove('visible');\n        modal.innerHTML = '';\n        document.body.style.overflow = 'visible';\n      });\n\n      (0,_addNewComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(button.dataset.id);\n      (0,_addCommentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHandler);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/modalHandler.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementURL.js */ \"./src/modules/involvementURL.js\");\n\n\nconst postLikes = async (id) => {\n  await fetch(`${_involvementURL_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/showComments.js":
/*!*************************************!*\
  !*** ./src/modules/showComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementURL.js */ \"./src/modules/involvementURL.js\");\n\n\nconst showComments = async (id) => {\n  const response = await fetch(`${_involvementURL_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/comments?item_id=${id}`);\n  const allComments = await response.json();\n  return allComments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/showComments.js?");

/***/ }),

/***/ "./src/modules/showData.js":
/*!*********************************!*\
  !*** ./src/modules/showData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMovies.js */ \"./src/modules/displayMovies.js\");\n/* harmony import */ var _modalHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalHandler.js */ \"./src/modules/modalHandler.js\");\n/* harmony import */ var _itemsCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsCount.js */ \"./src/modules/itemsCount.js\");\n\n\n\n\nconst showsData = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const movies = await response.json();\n  const latestMovies = movies.slice(0, 16);\n  (0,_displayMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(latestMovies);\n  (0,_modalHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(latestMovies);\n  (0,_itemsCount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showsData);\n\n\n//# sourceURL=webpack://tvmaze-app/./src/modules/showData.js?");

/***/ }),

/***/ "./src/assets/like.png":
/*!*****************************!*\
  !*** ./src/assets/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c07cff029176502b988.png\";\n\n//# sourceURL=webpack://tvmaze-app/./src/assets/like.png?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86e66bc25d0abb2b3fc8.svg\";\n\n//# sourceURL=webpack://tvmaze-app/./src/assets/logo.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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