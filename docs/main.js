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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  font-family: 'Inter', sans-serif;\r\n  background-color: #ffffff;\r\n  color: #202020;\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-top: 48px;\r\n  display: flex;\r\n  height: calc(100vh - 48px);\r\n}\r\n\r\n#app-header {\r\n  background-color: #db4c3f;\r\n  height: 48px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 24px;\r\n  color: white;\r\n  font-weight: 700;\r\n  font-size: 1.1rem;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n}\r\n\r\n#sidebar {\r\n  width: 280px !important;\r\n  background-color: #fafafa !important;\r\n  border-right: 1px solid #f0f0f0;\r\n  padding: 30px 16px !important;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n  padding: 40px 60px !important;\r\n  max-width: 800px;\r\n  overflow-y: auto;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.sidebar-heading {\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  color: #555;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  margin-bottom: 12px;\r\n  padding-left: 8px;\r\n}\r\n\r\n#project-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 15px 0;\r\n}\r\n\r\n#project-list li {\r\n  padding: 10px 12px;\r\n  margin-bottom: 3px;\r\n  border-radius: 6px;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  color: #333;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: background-color 0.15s ease, color 0.15s ease;\r\n}\r\n\r\n#project-list li:hover {\r\n  background-color: #eeeeee;\r\n}\r\n\r\n#project-list li.active-project {\r\n  background-color: #ffefe5 !important;\r\n  color: #db4c3f !important;\r\n  font-weight: 600;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.6rem;\r\n  font-weight: 700;\r\n  margin-top: 0;\r\n  margin-bottom: 24px;\r\n  color: #202020;\r\n}\r\n\r\n.task-row {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  padding: 14px 4px;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background-color 0.15s ease;\r\n  gap: 14px;\r\n}\r\n\r\n.task-row:hover {\r\n  background-color: #fafafa;\r\n}\r\n\r\n.task-row.task-complete {\r\n  opacity: 0.55;\r\n}\r\n\r\n.task-row.task-complete .task-title {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.custom-checkbox {\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 2px solid #666;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 3px;\r\n  transition: all 0.2s ease;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.custom-checkbox:checked {\r\n  background-color: #db4c3f;\r\n  border-color: #db4c3f;\r\n}\r\n\r\n.custom-checkbox:checked::after {\r\n  content: '✓';\r\n  color: white;\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n}\r\n\r\n.prio-Critical { border-color: #dc3545 !important; }\r\n.prio-High { border-color: #ff9800 !important; }\r\n.prio-Medium { border-color: #2196f3 !important; }\r\n.prio-Low { border-color: #9e9e9e !important; }\r\n\r\n.task-main-info {\r\n  flex: 1;\r\n}\r\n\r\n.task-title {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  margin: 0 0 4px 0;\r\n  color: #202020;\r\n}\r\n\r\n.task-description {\r\n  font-size: 0.88rem;\r\n  color: #666;\r\n  margin: 0 0 6px 0;\r\n  line-height: 1.4;\r\n}\r\n\r\n.task-meta-info {\r\n  font-size: 0.78rem;\r\n  color: #808080;\r\n  display: flex;\r\n  gap: 12px;\r\n  align-items: center;\r\n}\r\n\r\n.tag-priority {\r\n  padding: 2px 6px;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  font-size: 0.72rem;\r\n  text-transform: uppercase;\r\n}\r\n.tag-Critical { background: #ffebee; color: #c62828; }\r\n.tag-High { background: #fff3e0; color: #ef6c00; }\r\n.tag-Medium { background: #e3f2fd; color: #1565c0; }\r\n.tag-Low { background: #f5f5f5; color: #424242; }\r\n\r\ninput[type=\"text\"], select, input[type=\"date\"] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  padding: 8px 12px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  transition: border-color 0.2s;\r\n}\r\n\r\ninput[type=\"text\"]:focus, select:focus, input[type=\"date\"]:focus {\r\n  border-color: #db4c3f;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/displayController.js"
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderApp: () => (/* binding */ renderApp)\n/* harmony export */ });\nfunction renderApp(projectsArray, activeProjectIndex, onProjectSelect, onProjectCreate, onTodoCreate, onTodoToggle, onTodoDelete, onProjectDelete) {\r\n  \r\n  // --- 1. ENSURE APP HEADER BANNER EXISTS ---\r\n  if (!document.getElementById('app-header')) {\r\n    const banner = document.createElement('header');\r\n    banner.id = 'app-header';\r\n    \r\n    const bannerIcon = document.createElement('span');\r\n    bannerIcon.textContent = '📋 \\u00A0 ToDoers List';\r\n    banner.appendChild(bannerIcon);\r\n    \r\n    document.body.insertBefore(banner, document.body.firstChild);\r\n  }\r\n\r\n  const projectListUI = document.getElementById('project-list');\r\n  const contentDiv = document.getElementById('content');\r\n\r\n  projectListUI.innerHTML = '';\r\n  contentDiv.innerHTML = '';\r\n\r\n  // Ensure heading label sits atop the sidebar projects list\r\n  if (!document.getElementById('sidebar-label')) {\r\n    const label = document.createElement('div');\r\n    label.id = 'sidebar-label';\r\n    label.className = 'sidebar-heading';\r\n    label.textContent = 'Projects';\r\n    projectListUI.parentNode.insertBefore(label, projectListUI);\r\n  }\r\n\r\n  // --- 2. RENDER SIDEBAR PROJECTS ---\r\n  projectsArray.forEach((project, index) => {\r\n    const projectLi = document.createElement('li');\r\n    if (index === activeProjectIndex) {\r\n      projectLi.className = 'active-project';\r\n    }\r\n\r\n    const projectText = document.createElement('span');\r\n    projectText.textContent = '#  ' + project.name;\r\n    projectText.style.flex = '1';\r\n    projectLi.appendChild(projectText);\r\n\r\n    projectLi.addEventListener('click', () => {\r\n      onProjectSelect(index);\r\n    });\r\n\r\n    if (projectsArray.length > 1) {\r\n      const deleteProjBtn = document.createElement('button');\r\n      deleteProjBtn.textContent = '×';\r\n      deleteProjBtn.style.cssText = 'background:none; border:none; color:inherit; font-size:1.2rem; cursor:pointer; font-weight:bold; opacity: 0.6; padding: 0 4px;';\r\n      \r\n      deleteProjBtn.addEventListener('mouseenter', () => deleteProjBtn.style.opacity = '1');\r\n      deleteProjBtn.addEventListener('mouseleave', () => deleteProjBtn.style.opacity = '0.6');\r\n      \r\n      deleteProjBtn.addEventListener('click', (e) => {\r\n        e.stopPropagation();\r\n        if (confirm('Remove project \"' + project.name + '\" and all its internal tasks?')) {\r\n          onProjectDelete(index);\r\n        }\r\n      });\r\n\r\n      projectLi.appendChild(deleteProjBtn);\r\n    }\r\n\r\n    projectListUI.appendChild(projectLi);\r\n  });\r\n\r\n  // --- 3. INLINE MODULAR PROJECT ADD FORM ---\r\n  const newProjectBtn = document.getElementById('new-project-btn');\r\n  const clearBtn = newProjectBtn.cloneNode(true);\r\n  newProjectBtn.parentNode.replaceChild(clearBtn, newProjectBtn);\r\n  \r\n  clearBtn.style.cssText = 'background:none; border:none; color:#db4c3f; text-align:left; font-weight:600; font-size:0.95rem; cursor:pointer; padding: 10px 12px; border-radius:6px; display:block; width:100%;';\r\n  clearBtn.textContent = '+ Add Project';\r\n  clearBtn.addEventListener('mouseenter', () => clearBtn.style.backgroundColor = '#eeeeee');\r\n  clearBtn.addEventListener('mouseleave', () => clearBtn.style.backgroundColor = 'transparent');\r\n\r\n  clearBtn.addEventListener('click', () => {\r\n    clearBtn.style.display = 'none';\r\n    \r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.style.cssText = 'display:flex; flex-direction:column; gap:8px; padding:10px 12px;';\r\n\r\n    const inputField = document.createElement('input');\r\n    inputField.type = 'text';\r\n    inputField.id = 'new-project-input';\r\n    inputField.placeholder = 'Project name...';\r\n    inputField.style.cssText = 'width:100%; box-sizing:border-box;';\r\n\r\n    const btnGroup = document.createElement('div');\r\n    btnGroup.style.cssText = 'display:flex; gap:6px;';\r\n\r\n    const saveBtn = document.createElement('button');\r\n    saveBtn.id = 'save-project-btn';\r\n    saveBtn.textContent = 'Add';\r\n    saveBtn.style.cssText = 'padding:6px 12px; background-color:#db4c3f; color:white; border:none; border-radius:4px; font-weight:600; cursor:pointer; font-size:0.85rem;';\r\n\r\n    const cancelBtn = document.createElement('button');\r\n    cancelBtn.id = 'cancel-project-btn';\r\n    cancelBtn.textContent = 'Cancel';\r\n    cancelBtn.style.cssText = 'padding:6px 12px; background-color:transparent; border:none; color:#555; font-weight:600; cursor:pointer; font-size:0.85rem;';\r\n\r\n    btnGroup.appendChild(saveBtn);\r\n    btnGroup.appendChild(cancelBtn);\r\n    inputContainer.appendChild(inputField);\r\n    inputContainer.appendChild(btnGroup);\r\n    clearBtn.parentNode.appendChild(inputContainer);\r\n\r\n    inputField.focus();\r\n\r\n    const submitProject = () => {\r\n      const name = inputField.value.trim();\r\n      if (name !== \"\") onProjectCreate(name);\r\n      else renderApp(projectsArray, activeProjectIndex, onProjectSelect, onProjectCreate, onTodoCreate, onTodoToggle, onTodoDelete, onProjectDelete);\r\n    };\r\n\r\n    saveBtn.addEventListener('click', submitProject);\r\n    cancelBtn.addEventListener('click', () => {\r\n      renderApp(projectsArray, activeProjectIndex, onProjectSelect, onProjectCreate, onTodoCreate, onTodoToggle, onTodoDelete, onProjectDelete);\r\n    });\r\n    inputField.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitProject(); });\r\n  });\r\n\r\n  // --- 4. MAIN HEADER & ELEVATED TASK FORM ---\r\n  const activeProject = projectsArray[activeProjectIndex];\r\n  \r\n  const projectTitle = document.createElement('h1');\r\n  projectTitle.textContent = activeProject.name;\r\n  contentDiv.appendChild(projectTitle);\r\n\r\n  const taskFormContainer = document.createElement('div');\r\n  taskFormContainer.style.marginBottom = '20px';\r\n  \r\n  const showFormBtn = document.createElement('button');\r\n  showFormBtn.id = 'show-task-form-btn';\r\n  showFormBtn.style.cssText = 'background:none; border:none; color:#db4c3f; font-weight:600; font-size:0.95rem; cursor:pointer; display:flex; align-items:center; gap:8px; padding:6px 0;';\r\n  \r\n  const plusSpan = document.createElement('span');\r\n  plusSpan.style.cssText = 'font-size:1.3rem; line-height:1;';\r\n  plusSpan.textContent = '+';\r\n  showFormBtn.appendChild(plusSpan);\r\n  showFormBtn.appendChild(document.createTextNode(' Add Task'));\r\n  \r\n  const todoForm = document.createElement('form');\r\n  todoForm.id = 'todo-form';\r\n  todoForm.style.cssText = 'display: none; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff; margin-top:10px; box-shadow:0 4px 12px rgba(0,0,0,0.05);';\r\n\r\n  const taskTitleInput = document.createElement('input');\r\n  taskTitleInput.type = 'text';\r\n  taskTitleInput.id = 'task-title';\r\n  taskTitleInput.placeholder = 'e.g., Renew gym membership';\r\n  taskTitleInput.required = true;\r\n  taskTitleInput.style.fontWeight = '500';\r\n\r\n  const taskDescInput = document.createElement('input');\r\n  taskDescInput.type = 'text';\r\n  taskDescInput.id = 'task-desc';\r\n  taskDescInput.placeholder = 'Description';\r\n  taskDescInput.style.cssText = 'font-size:0.88rem; color:#666;';\r\n\r\n  const rowGrid = document.createElement('div');\r\n  rowGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 10px;';\r\n\r\n  const taskDateInput = document.createElement('input');\r\n  taskDateInput.type = 'date';\r\n  taskDateInput.id = 'task-date';\r\n  taskDateInput.required = true;\r\n\r\n  const taskPrioritySelect = document.createElement('select');\r\n  taskPrioritySelect.id = 'task-priority';\r\n  \r\n  const priorities = ['Low', 'Medium', 'High', 'Critical'];\r\n  priorities.forEach((prio) => {\r\n    const opt = document.createElement('option');\r\n    opt.value = prio;\r\n    opt.textContent = prio + ' Priority';\r\n    if (prio === 'Medium') opt.selected = true;\r\n    taskPrioritySelect.appendChild(opt);\r\n  });\r\n\r\n  rowGrid.appendChild(taskDateInput);\r\n  rowGrid.appendChild(taskPrioritySelect);\r\n\r\n  const formActions = document.createElement('div');\r\n  formActions.style.cssText = 'display: flex; gap: 8px; margin-top: 4px;';\r\n\r\n  const submitTaskBtn = document.createElement('button');\r\n  submitTaskBtn.type = 'submit';\r\n  submitTaskBtn.style.cssText = 'padding: 7px 14px; background-color: #db4c3f; color: white; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size:0.88rem;';\r\n  submitTaskBtn.textContent = 'Add Task';\r\n\r\n  const cancelTaskBtn = document.createElement('button');\r\n  cancelTaskBtn.type = 'button';\r\n  cancelTaskBtn.id = 'cancel-task-btn';\r\n  cancelTaskBtn.style.cssText = 'padding: 7px 14px; background-color: #f5f5f5; color: #444; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size:0.88rem;';\r\n  cancelTaskBtn.textContent = 'Cancel';\r\n\r\n  formActions.appendChild(submitTaskBtn);\r\n  formActions.appendChild(cancelTaskBtn);\r\n\r\n  todoForm.appendChild(taskTitleInput);\r\n  todoForm.appendChild(taskDescInput);\r\n  todoForm.appendChild(rowGrid);\r\n  todoForm.appendChild(formActions);\r\n\r\n  taskFormContainer.appendChild(showFormBtn);\r\n  taskFormContainer.appendChild(todoForm);\r\n  contentDiv.appendChild(taskFormContainer);\r\n\r\n  showFormBtn.addEventListener('click', () => {\r\n    showFormBtn.style.display = 'none';\r\n    todoForm.style.display = 'flex';\r\n    taskTitleInput.focus();\r\n  });\r\n\r\n  cancelTaskBtn.addEventListener('click', () => {\r\n    showFormBtn.style.display = 'flex';\r\n    todoForm.style.display = 'none';\r\n  });\r\n\r\n  todoForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const title = taskTitleInput.value.trim();\r\n    const desc = taskDescInput.value.trim();\r\n    const date = taskDateInput.value;\r\n    const priority = taskPrioritySelect.value;\r\n\r\n    if (title !== \"\") onTodoCreate(title, desc, date, priority);\r\n  });\r\n\r\n  // --- 5. RENDER THE POLISHED ROW-BASED TASK ITEMS ---\r\n  const todoContainer = document.createElement('div');\r\n  todoContainer.style.display = 'flex';\r\n  todoContainer.style.flexDirection = 'column';\r\n\r\n  activeProject.todos.forEach((todo, todoIndex) => {\r\n    const row = document.createElement('div');\r\n    row.className = 'task-row ' + (todo.complete ? 'task-complete' : '');\r\n\r\n    // Left Circular Checkbox\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.className = 'custom-checkbox prio-' + todo.priority;\r\n    checkbox.checked = todo.complete || false;\r\n    checkbox.addEventListener('change', () => onTodoToggle(todoIndex));\r\n\r\n    // Middle Workspace Texts\r\n    const mainInfo = document.createElement('div');\r\n    mainInfo.className = 'task-main-info';\r\n\r\n    const titleEl = document.createElement('h3');\r\n    titleEl.className = 'task-title';\r\n    titleEl.textContent = todo.title;\r\n    mainInfo.appendChild(titleEl);\r\n\r\n    if (todo.description) {\r\n      const descEl = document.createElement('p');\r\n      descEl.className = 'task-description';\r\n      descEl.textContent = todo.description;\r\n      mainInfo.appendChild(descEl);\r\n    }\r\n\r\n    // Meta Tags Layout (Date and Priority Tag)\r\n    const metaEl = document.createElement('div');\r\n    metaEl.className = 'task-meta-info';\r\n    \r\n    const dateSpan = document.createElement('span');\r\n    dateSpan.textContent = '📅 ' + todo.dueDate;\r\n    \r\n    const prioSpan = document.createElement('span');\r\n    prioSpan.className = 'tag-priority tag-' + todo.priority;\r\n    prioSpan.textContent = todo.priority;\r\n    \r\n    metaEl.appendChild(dateSpan);\r\n    metaEl.appendChild(prioSpan);\r\n    mainInfo.appendChild(metaEl);\r\n\r\n    // Right Action Delete Controls\r\n    const deleteBtn = document.createElement('button');\r\n    deleteBtn.textContent = '🗑';\r\n    deleteBtn.style.cssText = 'background:none; border:none; cursor:pointer; font-size:1.1rem; filter: grayscale(1); opacity:0.4; transition: opacity 0.2s; padding:4px 8px;';\r\n    \r\n    row.addEventListener('mouseenter', () => deleteBtn.style.opacity = '1');\r\n    row.addEventListener('mouseleave', () => deleteBtn.style.opacity = '0.4');\r\n    deleteBtn.addEventListener('click', () => onTodoDelete(todoIndex));\r\n\r\n    // Assembly\r\n    row.appendChild(checkbox);\r\n    row.appendChild(mainInfo);\r\n    row.appendChild(deleteBtn);\r\n    todoContainer.appendChild(row);\r\n  });\r\n\r\n  contentDiv.appendChild(todoContainer);\r\n}\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./src/displayController.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\r\n\r\n\r\n\r\n\r\nlet myProjects = [];\r\nlet currentProjectIndex = 0;\r\n\r\nfunction saveToLocalStorage() {\r\n  localStorage.setItem('myTodoListProjects', JSON.stringify(myProjects));\r\n}\r\n\r\nfunction loadFromLocalStorage() {\r\n  const savedData = localStorage.getItem('myTodoListProjects');\r\n  \r\n  if (savedData) {\r\n    const rawProjects = JSON.parse(savedData);\r\n    myProjects = rawProjects.map(rawProj => {\r\n      const reconstructedProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project(rawProj.name);\r\n      rawProj.todos.forEach(rawTodo => {\r\n        const reconstructedTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(\r\n          rawTodo.title,\r\n          rawTodo.description,\r\n          rawTodo.dueDate,\r\n          rawTodo.priority\r\n        );\r\n        reconstructedTodo.complete = rawTodo.complete;\r\n        reconstructedProject.addTodo(reconstructedTodo);\r\n      });\r\n      return reconstructedProject;\r\n    });\r\n  } else {\r\n    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project('Personal List');\r\n    defaultProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo('Buy Groceries', 'Milk, Eggs, Bread', '2026-07-10', 'High'));\r\n    myProjects.push(defaultProject);\r\n\r\n    const workProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project('Work Tasks');\r\n    workProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo('Finish Odin Project', 'Complete the Todo List architecture', '2026-07-15', 'Critical'));\r\n    myProjects.push(workProject);\r\n    \r\n    saveToLocalStorage();\r\n  }\r\n}\r\n\r\nfunction handleProjectSelection(index) {\r\n  currentProjectIndex = index;\r\n  initializeApp();\r\n}\r\n\r\nfunction handleProjectCreation(name) {\r\n  const newProj = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project(name);\r\n  myProjects.push(newProj);\r\n  currentProjectIndex = myProjects.length - 1; \r\n  saveToLocalStorage();\r\n  initializeApp();\r\n}\r\n\r\n// 1. ADD THE PROJECT DELETION LOGIC HERE 👇\r\nfunction handleProjectDeletion(index) {\r\n  // Remove the project from our array\r\n  myProjects.splice(index, 1);\r\n\r\n  // Safety recalculation: If we just deleted the active project or the last item,\r\n  // shift our active view index backward so we don't look at blank space\r\n  if (currentProjectIndex >= myProjects.length) {\r\n    currentProjectIndex = myProjects.length - 1;\r\n  }\r\n  if (currentProjectIndex < 0) currentProjectIndex = 0;\r\n\r\n  saveToLocalStorage();\r\n  initializeApp();\r\n}\r\n\r\nfunction handleTodoCreation(title, desc, date, priority) {\r\n  const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, desc, date, priority);\r\n  myProjects[currentProjectIndex].addTodo(newTodo);\r\n  saveToLocalStorage();\r\n  initializeApp();\r\n}\r\n\r\nfunction handleTodoToggle(todoIndex) {\r\n  const targetTodo = myProjects[currentProjectIndex].todos[todoIndex];\r\n  targetTodo.complete = !targetTodo.complete;\r\n  saveToLocalStorage();\r\n  initializeApp();\r\n}\r\n\r\nfunction handleTodoDelete(todoIndex) {\r\n  myProjects[currentProjectIndex].todos.splice(todoIndex, 1);\r\n  saveToLocalStorage();\r\n  initializeApp();\r\n}\r\n\r\nfunction initializeApp() {\r\n  (0,_displayController_js__WEBPACK_IMPORTED_MODULE_3__.renderApp)(\r\n    myProjects, \r\n    currentProjectIndex, \r\n    handleProjectSelection, \r\n    handleProjectCreation, \r\n    handleTodoCreation,\r\n    handleTodoToggle,\r\n    handleTodoDelete,\r\n    handleProjectDeletion // 👈 Passed down to the UI\r\n  );\r\n}\r\n\r\nloadFromLocalStorage();\r\ninitializeApp();\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./src/index.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todos = []; // This array will hold our Todo objects\r\n  }\r\n\r\n  addTodo(todoObject) {\r\n    this.todos.push(todoObject);\r\n  }\r\n\r\n  removeTodo(todoTitle) {\r\n    this.todos = this.todos.filter(todo => todo.title !== todoTitle);\r\n  }\r\n}\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./src/project.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.complete = false; // All todos start unfinished\r\n  }\r\n\r\n  toggleComplete() {\r\n    this.complete = !this.complete;\r\n  }\r\n}\n\n//# sourceURL=webpack://top-project-todo-list-solutions/./src/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;