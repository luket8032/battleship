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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Page structure  */\n* {\n    margin: 0;\n    display: 0;\n    font-family: 'Black Ops One', cursive;\n}\n\nbody {\n    background-color: #181818;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nh1 {\n    color: white;\n    font-size: 4em;\n    text-align: center;\n}\n\n.instructions {\n    color: white;\n    display: none;\n    font-size: 1.5em;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.main h1 {\n    margin-top: 50px;\n}\n\n.rotate-button {\n    border-radius: 20px;\n    display: none;\n    font-size: 1em;\n    margin: 15px auto;\n    padding: 15px 30px;\n    transition: .2s;\n    width: fit-content;\n}\n\n.rotate-button:hover {\n    scale: 1.02;\n}\n\n.place-buttons-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin: 0 auto;\n    width: fit-content;\n}\n\n/* Board Styles */\n.board-container {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n}\n\n.board-title {\n    font-size: 2.5em;\n}\n\n.boards-wrapper {\n    display: none;\n    justify-content: space-around;\n    margin: 0 10% 0 10%;\n}\n\n.cell {\n    align-items: center;\n    background-color: lightblue;\n    border: 1px solid blue;\n    display: flex;\n    justify-content: center;\n}\n\n.cell.has-ship {\n    background-color: grey;\n}\n\n.hit {\n    align-items: center;\n    background-color: lightcoral;\n    border: 1px solid blue;\n    display: flex;\n    justify-content: center;\n}\n\n.miss {\n    align-items: center;\n    background-color: lightgreen;\n    border: 1px solid blue;\n    display: flex;\n    justify-content: center;\n}\n\n.preview {\n    align-items: center;\n    background-color: lightgreen;\n    border: 1px solid blue;\n    display: flex;\n    justify-content: center;\n}\n\n/* Start Page */\n.start-button {\n    border-radius: 20px;\n    padding: 25px 50px;\n    font-size: 2em;\n    transition: .2s;\n}\n\n.start-button:hover {\n    scale: 1.02;\n}\n\n.start-screen {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    height: 100%;\n    justify-content: center;\n    position: relative;\n}\n\n.start-screen p {\n    color: white;\n    font-size: 1.5em;\n    margin-bottom: 25px;\n}\n\n/* End Page */\n.end-message {\n    font-size: 1.2em;\n    text-align: center;\n}\n.end-screen {\n    background: white;\n    border-radius: 25px;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: fit-content;\n    width: 600px;\n}\n\n.end-screen h1{\n    color: black;\n    padding: 10px;\n}\n\n.end-buttons {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n}\n\n.end-buttons button {\n    border-radius: 15px;\n    font-size: 1.2em;\n    margin: 25px;\n    padding: 15px 25px;\n    transition: .2s;\n}\n\n.end-buttons button:hover {\n    scale: 1.05;\n}\n\n.end-wrapper {\n    display: none;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n/* Footer Styles */\n.footer {\n    color: white;\n    font-size: 1.2em;\n    text-align: center;\n    margin: 15px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((module) => {

eval("const domStuff = () => {\n    const boardsWrapper = document.getElementById('boardsWrapper');\n    const startScreen = document.getElementById('startScreen');\n    const endWrapper = document.getElementById('endWrapper');\n    const instructions = document.getElementById('instructions');\n    const title = document.getElementById('title');\n    const rotateBtn = document.getElementById('rotateBtn');\n    const randomBtn = document.getElementById('randomBtn');\n\n    const renderBoard = (board) => {\n        const boardContainer = document.createElement('div');\n        const boardGrid = document.createElement('div');\n        const boardTitle = document.createElement('h1');\n        boardGrid.className = 'board-container';\n        boardTitle.className = 'board-title';\n        if(board.isPlayer) {\n            boardGrid.setAttribute('data-owner', 'player');\n            boardTitle.textContent = 'Your Board';\n        } else {\n            boardGrid.setAttribute('data-owner', 'computer');\n            boardTitle.textContent = 'Enemy Board';\n        }\n        board.locations.forEach((cell) => {\n            const newCell = document.createElement('div');\n            newCell.classList.add('cell');\n            newCell.setAttribute('data-location', cell.id);\n            if(cell.shipName) {\n                if(board.isPlayer) newCell.classList.add('has-ship');\n                newCell.setAttribute('data-ship', cell.shipName);\n            }\n\n            if(cell.isHit) {\n                newCell.className = 'hit';\n            }\n\n            if(cell.isHit && !cell.shipName) {\n                newCell.className = 'miss';\n            }\n            boardGrid.append(newCell);\n        });\n        boardContainer.append(boardTitle, boardGrid);\n        boardsWrapper.append(boardContainer);\n    }\n    \n    const updateBoard = (playerBoard, computerBoard) => {\n        boardsWrapper.innerHTML = '';\n        renderBoard(playerBoard);\n        renderBoard(computerBoard);\n    }\n\n    const renderEnd = () => {\n        const end = document.getElementById('endWrapper');\n        end.style.display = 'block';\n    }\n\n    const hideStart = () => {\n        startScreen.style.display = 'none';\n        title.style.display = 'none';\n    }\n\n    const showGame = () => {\n        boardsWrapper.style.display = 'flex';\n        instructions.style.display = 'block';\n        instructions.textContent = 'Click a spot on your board to place your ships.';\n        rotateBtn.style.display = 'block';\n        randomBtn.style.display = 'block';\n    }\n\n    const hideEnd = () => {\n        endWrapper.style.display = 'none';\n    }\n\n    const showEnd = () => {\n        endWrapper.style.display = 'block';\n    }\n\n    const showStart = () => {\n        startScreen.style.display = 'flex';\n        title.style.display = 'block';\n    }\n\n    const hideGame = () => {\n        boardsWrapper.style.display = 'none';\n        instructions.style.display = 'none';\n        rotateBtn.style.display = 'none';\n        randomBtn.style.display = 'none';\n    }\n\n    const changeInstructions = (newInstructions) => {\n        instructions.textContent = newInstructions;\n    }\n\n    const hideRotate = () => {\n        rotateBtn.style.display = 'none';\n        randomBtn.style.display = 'none';\n    }\n\n    return { \n        renderBoard, \n        updateBoard, \n        renderEnd, \n        hideStart, \n        showGame, \n        hideEnd, \n        showStart, \n        hideGame, \n        showEnd,\n        changeInstructions,\n        hideRotate\n    }\n}\n\nmodule.exports = domStuff;\n\n//# sourceURL=webpack://battleship/./src/domStuff.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const domStuff = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\")\nconst Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nconst dom = domStuff();\n\nconst game = () => {\n    const player = new Player('human');\n\n    let playerBoard = new Gameboard(true);\n    let computerBoard = new Gameboard();\n    \n    let currentShip = 0;\n\n    playerBoard.init();\n    computerBoard.init();\n\n    computerBoard.placeRandom();\n\n    function doTurn(e) { \n        const target = e.target;\n        let targetLocation;\n        \n        if(target.classList.contains('cell') || target.classList.contains('miss')) {\n            targetLocation = target.dataset.location\n        }\n\n        if(!computerBoard.locations[targetLocation].isHit) {\n            player.attack(computerBoard, targetLocation);\n            player.autoAttack(playerBoard)\n            dom.updateBoard(playerBoard, computerBoard)\n        }\n\n        if(playerBoard.checkAllSunk() || computerBoard.checkAllSunk()) {\n            const endMessage = document.getElementById('endMessage');\n            if(playerBoard.checkAllSunk()) {\n                endMessage.textContent = 'You lost...';\n                endMessage.style.color = 'red';\n            }\n            if(computerBoard.checkAllSunk()) {\n                endMessage.textContent = 'Victory is yours!';\n                endMessage.style.color = 'green';\n            }\n            dom.renderEnd();\n        } else {\n            addBoardListener();\n        }\n    }\n\n    function handleRandom() {\n        playerBoard.placeRandom();\n        dom.updateBoard(playerBoard, computerBoard);\n        addBoardListener();\n        dom.changeInstructions('Click a spot on the board to take a shot at the enemy.');\n        dom.hideRotate();\n    }\n\n    function startPlacement() {\n        const board = document.querySelector(`.board-container[data-owner=\"player\"]`);\n        const cells = board.querySelectorAll('.cell');\n        const rotateBtn = document.getElementById('rotateBtn');\n        const randomBtn = document.getElementById('randomBtn');\n        const shipDirection = playerBoard.ships[currentShip].direction;\n\n        rotateBtn.addEventListener('click', () => {\n            if(shipDirection === 'x') {\n                playerBoard.ships[currentShip].direction = 'y'\n            } else {\n                playerBoard.ships[currentShip].direction = 'x'\n            }\n            startPlacement();\n        });\n\n        randomBtn.addEventListener('click', handleRandom);\n\n        cells.forEach(cell => {\n            cell.addEventListener('mouseover', showPreview);\n            cell.addEventListener('mouseleave', () => {\n                cells.forEach(cell => {\n                    if(cell.className !== \"cell has-ship\") {\n                        cell.className = 'cell';\n                    }\n                });\n            });\n        });\n        board.addEventListener('click', doPlace)\n    }\n\n    function doPlace(e) {\n        const target = e.target;\n        const remaining = playerBoard.ships[currentShip].shipLength;\n        const shipDirection = playerBoard.ships[currentShip].direction;\n        const currentLocation = parseInt(target.dataset.location);\n        let canPlace = true;\n        // check if overlap with already placed ship\n        for(let i = 0; i < remaining; i++) {\n            if(shipDirection === 'x') {\n                const lastLocation = currentLocation + playerBoard.ships[currentShip].shipLength;\n                const nextLocation = currentLocation + i + 1;\n                if(nextLocation % 10 === 0 && nextLocation !== lastLocation) {\n                    canPlace = false;\n                    break;\n                }\n\n                if(playerBoard.locations[currentLocation + i].shipName) {\n                    canPlace = false;\n                    break;\n                }\n            } else {\n                // check for direction 'y'\n                const lastLocation = currentLocation + (playerBoard.ships[currentShip].shipLength * 10);\n                const nextLocation = currentLocation + ((i + 1) * 10);\n                if(nextLocation >= 100 && nextLocation !== lastLocation) {\n                    canPlace = false;\n                    break;\n                }\n\n                if(playerBoard.locations[currentLocation + (i * 10)].shipName) {\n                    canPlace = false;\n                    break;\n                }    \n            }\n        }\n\n        // check if placement is valid, if so place ship, else do nothing\n        if(canPlace) {\n            playerBoard.placeShip(playerBoard.ships[currentShip], currentLocation);\n            currentShip++;\n            dom.updateBoard(playerBoard, computerBoard);\n            if(currentShip !== 5) {\n                startPlacement();\n            } else {\n                addBoardListener();\n                dom.changeInstructions('Click a spot on the board to take a shot at the enemy.');\n                dom.hideRotate();\n            }\n        }\n\n    }\n\n    function showPreview(e) {\n        const remaining = playerBoard.ships[currentShip].shipLength;\n        const target = e.target;\n        const shipDirection = playerBoard.ships[currentShip].direction;\n        const currentLocation = parseInt(target.dataset.location);\n\n        if (target.classList.contains('has-ship')) {\n            return;\n        }\n\n        if (shipDirection === 'x') {\n            if(currentLocation % 10 === 9) {\n                target.className = 'preview';\n            } else {\n                target.className = 'preview';\n                for(let i = 0; i < remaining; i++) {\n                    const nextLocation = currentLocation + i;\n                    const nextCell = document.querySelector(`[data-location=\"${nextLocation}\"]`)\n                    if (!nextCell.classList.contains('has-ship')) {\n                        nextCell.className = 'preview';\n                    }\n                    if (nextLocation % 10 === 9 ) {\n                        break;\n                    }\n                }\n            }\n        } else {\n            for(let i = 0; i < remaining; i++) {\n                const nextLocation = currentLocation + i * 10;\n                if (nextLocation >= 100) {\n                    break;\n                }\n                const nextCell = document.querySelector(`[data-location=\"${nextLocation}\"]`);\n                if (!nextCell.classList.contains('has-ship')) {\n                    nextCell.className = 'preview';\n                }\n            }\n        }\n    }\n\n    function addBoardListener() {\n        const randomBtn = document.getElementById('randomBtn')\n        const board = document.querySelector(`.board-container[data-owner=\"computer\"]`);\n        board.addEventListener('click', doTurn);\n        randomBtn.removeEventListener('click', handleRandom);\n    }\n\n    function startGame() {\n        renderBoards();\n        startPlacement();\n    }\n\n    function renderBoards() {\n        dom.renderBoard(playerBoard);\n        dom.renderBoard(computerBoard);\n    }\n\n    function resetGame() {\n        const boardsWrapper = document.getElementById('boardsWrapper');\n        playerBoard = new Gameboard(true);\n        computerBoard = new Gameboard();\n        currentShip = 0;\n        playerBoard.init();\n        computerBoard.init();\n\n        computerBoard.placeRandom();\n\n        boardsWrapper.innerHTML = '';\n        startGame();\n    }\n\n    return { startGame, resetGame, startPlacement }\n}\n\nmodule.exports = game;\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst shipData = __webpack_require__(/*! ./shipData.json */ \"./src/shipData.json\");\n\nclass Gameboard {\n    constructor(isPlayer = false) {\n        this.locations = [];\n        this.missedShots = [];\n        this.ships = [];\n        this.cantPlace = [];\n        this.isPlayer = isPlayer;\n        this.numShips = 0;\n    }\n\n    init() {\n        for(let i = 0; i < 100; i++) {\n            this.locations.push({\n                id: i,\n                isHit: false,\n                shipName: null\n            });\n        }\n        \n        shipData.ships.forEach(ship => {\n            const newShip = new Ship(ship.shipName, ship.shipLength);\n            this.ships.push(newShip);\n        });\n    }\n\n    placeShip(ship, location) {\n        for(let i = 0; i < ship.shipLength; i++) {\n            if(ship.direction === 'x') {\n                this.locations[location + i].shipName = ship.shipName;\n            } else {\n                this.locations[location + i * 10].shipName = ship.shipName;\n            }\n        }\n    }\n\n    placeRandom() {\n        let currentShip = 0;\n\n        while(currentShip !== 5) {\n            const randomLocation = Math.floor(Math.random() * 99);\n            if(Math.random() * 2 >= 1) {\n                this.ships[currentShip].direction = 'y';\n            }\n            \n            if(this.checkValidPlacement(this.ships[currentShip], randomLocation)) {\n                this.placeShip(this.ships[currentShip], randomLocation)\n                currentShip++;\n            }\n        }\n    }\n\n    checkValidPlacement(ship, location) {\n        const remaining = ship.shipLength;\n        const shipDirection = ship.direction;\n        const currentLocation = parseInt(location);\n        let canPlace = true;\n        // check if overlap with already placed ship\n        for(let i = 0; i < remaining; i++) {\n            if(shipDirection === 'x') {\n                const lastLocation = currentLocation + ship.shipLength;\n                const nextLocation = currentLocation + i + 1;\n                if(nextLocation % 10 === 0 && nextLocation !== lastLocation) {\n                    canPlace = false;\n                    break;\n                }\n\n                if(this.locations[currentLocation + i].shipName) {\n                    canPlace = false;\n                    break;\n                }\n            } else {\n                // check for direction 'y'\n                const lastLocation = currentLocation + (ship.shipLength * 10);\n                const nextLocation = currentLocation + ((i + 1) * 10);\n                if(nextLocation >= 100 && nextLocation !== lastLocation) {\n                    canPlace = false;\n                    break;\n                }\n\n                if(this.locations[currentLocation + (i * 10)].shipName) {\n                    canPlace = false;\n                    break;\n                }    \n            }\n        }\n        return canPlace;\n    }\n\n    recieveAttack(location) {\n        this.locations[location].isHit = true;\n        if(this.locations[location].shipName) {\n            this.ships.forEach(ship => {\n                if(ship.shipName === this.locations[location].shipName) {\n                    ship.hit();\n                }\n            });\n        } else {\n            this.missedShots.push(this.locations[location].id)\n        }\n    }\n\n    checkAllSunk() {\n        let allSunk = true;\n        this.ships.forEach(ship => {\n            if(ship.sunk === false) {\n                allSunk = false\n            }\n        })\n        return allSunk;\n    }\n\n    getCantPlace() {\n        this.locations.forEach(location => {\n            if(location.shipName) {\n                if(!this.cantPlace.includes(location.id)) this.cantPlace.push(location.id);\n                if(!this.cantPlace.includes(location.id + 1)) this.cantPlace.push(location.id + 1);\n                if(!this.cantPlace.includes(location.id - 1)) this.cantPlace.push(location.id - 1);\n                if(!this.cantPlace.includes(location.id + 10)) this.cantPlace.push(location.id + 10);\n                if(!this.cantPlace.includes(location.id - 10)) this.cantPlace.push(location.id - 10);\n            }\n        })\n    }\n\n}\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nconst gameFns = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst domStuff = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\n\nconst game = gameFns();\nconst dom = domStuff();\nconst startBtn = document.getElementById('startButton');\nconst againBtn = document.getElementById('playAgain');\nconst menuBtn = document.getElementById('mainMenu');\n\ngame.startGame();\n\nstartBtn.addEventListener('click', () => {\n    dom.hideStart();\n    dom.showGame();\n});\n\nagainBtn.addEventListener('click', () => {\n    // reset and play again\n    game.resetGame();\n    dom.showGame();\n    dom.hideEnd();\n});\n\nmenuBtn.addEventListener('click', () => {\n    // reset and go to menu\n    game.resetGame();\n    dom.showStart();\n    dom.hideGame();\n    dom.hideEnd();\n});\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("class Player {\n    constructor(playerName) {\n        this.playerName = playerName\n    }\n\n    attack(targetBoard, location) {\n        targetBoard.recieveAttack(location);\n    }\n\n    autoAttack(targetBoard) {\n        const randomLocation = Math.floor(Math.random() * 99)\n        if(targetBoard.locations[randomLocation].isHit) {\n            this.autoAttack(targetBoard)\n        } else {\n            targetBoard.recieveAttack(randomLocation);\n        }\n    }\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n    constructor(shipName ,shipLength, numHit = 0, sunk = false, direction = 'x') {\n        this.shipName = shipName;\n        this.shipLength = shipLength;\n        this.numHit = numHit;\n        this.sunk = sunk;\n        this.direction = direction;\n    }\n\n    hit() {\n        if(!this.sunk) {\n            this.numHit++;\n            this.sunk = this.isSunk();\n        }\n    }\n\n    isSunk() {\n        return (this.shipLength === this.numHit)\n    }\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/shipData.json":
/*!***************************!*\
  !*** ./src/shipData.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"ships\":[{\"shipName\":\"Destroyer\",\"shipLength\":2},{\"shipName\":\"Submarine\",\"shipLength\":3},{\"shipName\":\"Cruiser\",\"shipLength\":3},{\"shipName\":\"Battleship\",\"shipLength\":4},{\"shipName\":\"Carrier\",\"shipLength\":5}]}');\n\n//# sourceURL=webpack://battleship/./src/shipData.json?");

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