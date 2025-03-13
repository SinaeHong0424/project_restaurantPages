/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: #f8f8f8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 1rem;
}

.tab-btn {
    padding: 0.5rem 1rem;
    border: none;
    background: none;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s;
}

.tab-btn:hover {
    color: #e63946;
}

.tab-btn.active {
    color: #e63946;
    border-bottom: 2px solid #e63946;
}

#content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Home page styles */
.hero {
    height: 70vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero p {
    font-size: 1.2rem;
    max-width: 600px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.feature {
    text-align: center;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.feature h2 {
    margin-bottom: 1rem;
    color: #333;
}

/* Menu page styles */
.menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.menu-category {
    margin-bottom: 2rem;
}

.menu-category h2 {
    margin-bottom: 1rem;
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e63946;
}

.menu-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.menu-item h3 {
    margin-bottom: 0.5rem;
    color: #333;
}

.menu-item p {
    color: #666;
    margin-bottom: 0.5rem;
}

.menu-item .price {
    font-weight: bold;
    color: #e63946;
}

/* About page styles */
.about-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.about-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about-section h2 {
    color: #333;
    border-bottom: 2px solid #e63946;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

/* Contact page styles */
.contact-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.contact-info {
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
    margin-bottom: 1rem;
    color: #333;
    border-bottom: 2px solid #e63946;
    padding-bottom: 0.5rem;
}

.contact-form {
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
    margin-bottom: 1rem;
    color: #333;
    border-bottom: 2px solid #e63946;
    padding-bottom: 0.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

button[type="submit"] {
    background-color: #e63946;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #c1121f;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;IACzB,wCAAwC;AAC5C;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,aAAa;AACjB;;AAEA,qBAAqB;AACrB;IACI,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,gCAAgC;IAChC,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,wBAAwB;AACxB;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,WAAW;AACf;;AAEA;;IAEI,WAAW;IACX,eAAe;IACf,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Arial', sans-serif;\r\n    line-height: 1.6;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1rem 5%;\r\n    background-color: #f8f8f8;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.tab-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n    transition: color 0.3s;\r\n}\r\n\r\n.tab-btn:hover {\r\n    color: #e63946;\r\n}\r\n\r\n.tab-btn.active {\r\n    color: #e63946;\r\n    border-bottom: 2px solid #e63946;\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 2rem;\r\n}\r\n\r\n/* Home page styles */\r\n.hero {\r\n    height: 70vh;\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.hero h1 {\r\n    font-size: 3rem;\r\n    margin-bottom: 1rem;\r\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.hero p {\r\n    font-size: 1.2rem;\r\n    max-width: 600px;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.features {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.feature {\r\n    text-align: center;\r\n    padding: 1.5rem;\r\n    border-radius: 8px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.feature h2 {\r\n    margin-bottom: 1rem;\r\n    color: #333;\r\n}\r\n\r\n/* Menu page styles */\r\n.menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 2rem;\r\n}\r\n\r\n.menu-category {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.menu-category h2 {\r\n    margin-bottom: 1rem;\r\n    text-align: center;\r\n    padding-bottom: 0.5rem;\r\n    border-bottom: 2px solid #e63946;\r\n}\r\n\r\n.menu-item {\r\n    margin-bottom: 1.5rem;\r\n    padding: 1rem;\r\n    border-radius: 8px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.menu-item h3 {\r\n    margin-bottom: 0.5rem;\r\n    color: #333;\r\n}\r\n\r\n.menu-item p {\r\n    color: #666;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.menu-item .price {\r\n    font-weight: bold;\r\n    color: #e63946;\r\n}\r\n\r\n/* About page styles */\r\n.about-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.about-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.about-section h2 {\r\n    color: #333;\r\n    border-bottom: 2px solid #e63946;\r\n    padding-bottom: 0.5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* Contact page styles */\r\n.contact-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 2rem;\r\n}\r\n\r\n.contact-info {\r\n    padding: 1.5rem;\r\n    border-radius: 8px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.contact-info h2 {\r\n    margin-bottom: 1rem;\r\n    color: #333;\r\n    border-bottom: 2px solid #e63946;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.contact-form {\r\n    padding: 1.5rem;\r\n    border-radius: 8px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.contact-form h2 {\r\n    margin-bottom: 1rem;\r\n    color: #333;\r\n    border-bottom: 2px solid #e63946;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-group label {\r\n    display: block;\r\n    margin-bottom: 0.5rem;\r\n    color: #333;\r\n}\r\n\r\n.form-group input,\r\n.form-group textarea {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n}\r\n\r\n.form-group textarea {\r\n    resize: vertical;\r\n    min-height: 100px;\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n    background-color: #e63946;\r\n    color: white;\r\n    border: none;\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\nbutton[type=\"submit\"]:hover {\r\n    background-color: #c1121f;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aboutUs_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUs.png */ "./src/aboutUs.png");
// about.js


function createAbout() {
    const content = document.createElement('div');
    content.classList.add('about-page');

    content.style.background = `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url(${_aboutUs_png__WEBPACK_IMPORTED_MODULE_0__}) no-repeat center center
    `;
    content.style.backgroundSize = 'cover';
    content.style.color = '#fff';
    content.style.padding = '2rem';
    content.style.minHeight = '100vh'; 

    const title = document.createElement('h1');
    title.textContent = 'About Us';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    content.appendChild(title);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    aboutContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    aboutContainer.style.borderRadius = '8px';
    aboutContainer.style.padding = '2rem';
    aboutContainer.style.maxWidth = '800px';
    aboutContainer.style.margin = '0 auto';

    const storySection = document.createElement('div');
    storySection.classList.add('about-section');
    storySection.style.marginBottom = '2rem'; 

    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    storyTitle.style.marginBottom = '1rem';

    const storyPara1 = document.createElement('p');
    storyPara1.textContent =
      'Golden Dragon Restaurant was founded in 1985 by Chef Li Wei, who brought his culinary expertise from Shanghai to share the authentic flavors of Chinese cuisine with our city.';

    const storyPara2 = document.createElement('p');
    storyPara2.textContent =
      'What started as a small family restaurant has grown into a beloved establishment, thanks to our commitment to quality and the support of our loyal customers.';

    storySection.appendChild(storyTitle);
    storySection.appendChild(storyPara1);
    storySection.appendChild(storyPara2);
    aboutContainer.appendChild(storySection);

    const philosophySection = document.createElement('div');
    philosophySection.classList.add('about-section');
    philosophySection.style.marginBottom = '2rem';

    const philosophyTitle = document.createElement('h2');
    philosophyTitle.textContent = 'Our Philosophy';
    philosophyTitle.style.marginBottom = '1rem';

    const philosophyPara = document.createElement('p');
    philosophyPara.textContent =
      "At Golden Dragon, we believe that great food brings people together. Our philosophy is simple: use the freshest ingredients, follow traditional cooking methods, and serve with love and care. We're committed to providing not just a meal, but an experience that honors the rich culinary heritage of China.";

    philosophySection.appendChild(philosophyTitle);
    philosophySection.appendChild(philosophyPara);
    aboutContainer.appendChild(philosophySection);

    const teamSection = document.createElement('div');
    teamSection.classList.add('about-section');

    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Our Team';
    teamTitle.style.marginBottom = '1rem';

    const teamPara = document.createElement('p');
    teamPara.textContent =
      "Our kitchen is led by Executive Chef Zhang Min, who brings over 25 years of experience in traditional Chinese cooking. Our team of chefs and staff are like family, working together to create memorable dining experiences for our guests.";

    teamSection.appendChild(teamTitle);
    teamSection.appendChild(teamPara);
    aboutContainer.appendChild(teamSection);

    content.appendChild(aboutContainer);

    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);


/***/ }),

/***/ "./src/aboutUs.png":
/*!*************************!*\
  !*** ./src/aboutUs.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d99822a4cceab1e6ac5f.png";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// contact.js
function createContact() {
    const content = document.createElement('div');
    content.classList.add('contact-page');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    content.appendChild(title);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Contact Information
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Restaurant Information';
    
    const address = document.createElement('p');
    address.innerHTML = '<strong>Address:</strong> 123 Dragon Street, Chinatown, CA 90001';
    
    const phone = document.createElement('p');
    phone.innerHTML = '<strong>Phone:</strong> (555) 123-4567';
    
    const email = document.createElement('p');
    email.innerHTML = '<strong>Email:</strong> info@goldendragon.com';
    
    const hours = document.createElement('p');
    hours.innerHTML = '<strong>Hours:</strong><br>Monday - Thursday: 11:00 AM - 9:30 PM<br>Friday - Saturday: 11:00 AM - 10:30 PM<br>Sunday: 12:00 PM - 9:00 PM';
    
    contactInfo.appendChild(infoTitle);
    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    contactInfo.appendChild(hours);
    contactContainer.appendChild(contactInfo);

    // Contact Form
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Send Us a Message';
    
    const form = document.createElement('form');
    
    // Name field
    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', true);
    
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    form.appendChild(nameGroup);
    
    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', true);
    
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    form.appendChild(emailGroup);
    
    // Message field
    const messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');
    
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';
    
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('required', true);
    
    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageInput);
    form.appendChild(messageGroup);
    
    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Send Message';
    
    form.appendChild(submitBtn);
    contactForm.appendChild(formTitle);
    contactForm.appendChild(form);
    contactContainer.appendChild(contactForm);

    content.appendChild(contactContainer);

    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/goldenDragon.jpg":
/*!******************************!*\
  !*** ./src/goldenDragon.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f51fd5c12749f71b97c3.jpg";

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _goldenDragon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goldenDragon.jpg */ "./src/goldenDragon.jpg");
// home.js



function createHome() {
    const content = document.createElement('div');
    content.classList.add('home-page');

    // Hero Section
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${_goldenDragon_jpg__WEBPACK_IMPORTED_MODULE_0__})
  `;
     hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Golden Dragon Restaurant';

    const heroText = document.createElement('p');
    heroText.textContent = 'Experience the authentic taste of traditional Chinese cuisine with our handcrafted dishes made from family recipes passed down through generations.';

    hero.appendChild(heroTitle);
    hero.appendChild(heroText);
    content.appendChild(hero);

    // Features section
    const features = document.createElement('div');
    features.classList.add('features');

    // Feature 1
    const feature1 = document.createElement('div');
    feature1.classList.add('feature');
    
    const feature1Title = document.createElement('h2');
    feature1Title.textContent = 'Authentic Taste';
    
    const feature1Text = document.createElement('p');
    feature1Text.textContent = 'Our chefs bring over 30 years of experience in traditional Chinese cooking techniques.';
    
    feature1.appendChild(feature1Title);
    feature1.appendChild(feature1Text);
    features.appendChild(feature1);

    // Feature 2
    const feature2 = document.createElement('div');
    feature2.classList.add('feature');
    
    const feature2Title = document.createElement('h2');
    feature2Title.textContent = 'Fresh Ingredients';
    
    const feature2Text = document.createElement('p');
    feature2Text.textContent = 'We source our ingredients daily from local markets to ensure the freshest flavors in every dish.';
    
    feature2.appendChild(feature2Title);
    feature2.appendChild(feature2Text);
    features.appendChild(feature2);

    // Feature 3
    const feature3 = document.createElement('div');
    feature3.classList.add('feature');
    
    const feature3Title = document.createElement('h2');
    feature3Title.textContent = 'Award Winning';
    
    const feature3Text = document.createElement('p');
    feature3Text.textContent = 'Proudly recognized as the best Chinese restaurant in the city for three consecutive years.';
    
    feature3.appendChild(feature3Title);
    feature3.appendChild(feature3Text);
    features.appendChild(feature3);

    content.appendChild(features);

    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// menu.js
function createMenu() {
    const content = document.createElement('div');
    content.classList.add('menu-page');

    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    content.appendChild(title);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Appetizers
    const appetizers = document.createElement('div');
    appetizers.classList.add('menu-category');
    
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = 'Appetizers';
    appetizers.appendChild(appetizersTitle);

    const appetizerItems = [
        {
            name: 'Steamed Soup Dumplings',
            description: 'Traditional Shanghainese soup dumplings filled with pork',
            price: '$12.99'
        },
        {
            name: 'Spring Rolls',
            description: 'Crispy rolls filled with vegetables and served with sweet sauce',
            price: '$8.99'
        },
        {
            name: 'Scallion Pancake',
            description: 'Traditional Chinese flatbread with scallions',
            price: '$9.99'
        }
    ];

    appetizerItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        appetizers.appendChild(menuItem);
    });

    menuContainer.appendChild(appetizers);

    // Main Dishes
    const mainDishes = document.createElement('div');
    mainDishes.classList.add('menu-category');
    
    const mainDishesTitle = document.createElement('h2');
    mainDishesTitle.textContent = 'Main Dishes';
    mainDishes.appendChild(mainDishesTitle);

    const mainDishItems = [
        {
            name: 'Kung Pao Chicken',
            description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers',
            price: '$18.99'
        },
        {
            name: 'Peking Duck',
            description: 'Roasted duck served with pancakes, spring onions, and hoisin sauce',
            price: '$32.99'
        },
        {
            name: 'Mapo Tofu',
            description: 'Spicy tofu dish with minced pork in a flavorful sauce',
            price: '$16.99'
        }
    ];

    mainDishItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        mainDishes.appendChild(menuItem);
    });

    menuContainer.appendChild(mainDishes);

    // Noodles & Rice
    const noodlesRice = document.createElement('div');
    noodlesRice.classList.add('menu-category');
    
    const noodlesRiceTitle = document.createElement('h2');
    noodlesRiceTitle.textContent = 'Noodles & Rice';
    noodlesRice.appendChild(noodlesRiceTitle);

    const noodlesRiceItems = [
        {
            name: 'Dan Dan Noodles',
            description: 'Spicy Sichuan noodles topped with preserved vegetables and minced pork',
            price: '$14.99'
        },
        {
            name: 'Yangzhou Fried Rice',
            description: 'Classic fried rice with shrimp, pork, and vegetables',
            price: '$13.99'
        },
        {
            name: 'Shanghai Fried Noodles',
            description: 'Stir-fried thick noodles with beef and vegetables in a sweet soy sauce',
            price: '$15.99'
        }
    ];

    noodlesRiceItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        noodlesRice.appendChild(menuItem);
    });

    menuContainer.appendChild(noodlesRice);

    content.appendChild(menuContainer);

    return content;
}

function createMenuItem(name, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price');
    itemPrice.textContent = price;
    
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);
    
    return menuItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
// index.js






function initializeWebsite() {
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    const contactBtn = document.getElementById('contact-btn');
    
    // Set active button
    function setActiveButton(button) {
        // Remove active class from all buttons
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to selected button
        button.classList.add('active');
    }
    
    // Clear content
    function clearContent() {
        content.innerHTML = '';
    }
    
    // Load home page
    function loadHome() {
        clearContent();
        setActiveButton(homeBtn);
        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }
    
    // Load menu page
    function loadMenu() {
        clearContent();
        setActiveButton(menuBtn);
        content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    }
    
    // Load about page
    function loadAbout() {
        clearContent();
        setActiveButton(aboutBtn);
        content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
    }
    
    // Load contact page
    function loadContact() {
        clearContent();
        setActiveButton(contactBtn);
        content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
    
    // Event listeners for buttons
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    aboutBtn.addEventListener('click', loadAbout);
    contactBtn.addEventListener('click', loadContact);
    
    // Load home page by default
    loadHome();
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FB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QUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlDQUFZLENBQUM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEYzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckg1QjtBQUNBO0FBQzZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4Q0FBWSxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQy9FekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi50YWItYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi50YWItYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZTYzOTQ2O1xyXG59XHJcblxyXG4udGFiLWJ0bi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNlNjM5NDY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2Mzk0NjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLyogSG9tZSBwYWdlIHN0eWxlcyAqL1xyXG4uaGVybyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uaGVybyBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmhlcm8gcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZmVhdHVyZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmZlYXR1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mZWF0dXJlIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyogTWVudSBwYWdlIHN0eWxlcyAqL1xyXG4ubWVudS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubWVudS1jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubWVudS1jYXRlZ29yeSBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTYzOTQ2O1xyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm1lbnUtaXRlbSBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLm1lbnUtaXRlbSBwIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIC5wcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZTYzOTQ2O1xyXG59XHJcblxyXG4vKiBBYm91dCBwYWdlIHN0eWxlcyAqL1xyXG4uYWJvdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uYWJvdXQtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmFib3V0LXNlY3Rpb24gaDIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2Mzk0NjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4vKiBDb250YWN0IHBhZ2Ugc3R5bGVzICovXHJcbi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8ge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNjM5NDY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTYzOTQ2O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXQsXHJcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMTEyMWY7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNlNjM5NDY7XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuLmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiAjZTYzOTQ2O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2Mzk0NjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lIHBhZ2Ugc3R5bGVzICovXFxyXFxuLmhlcm8ge1xcclxcbiAgICBoZWlnaHQ6IDcwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHBhZ2Ugc3R5bGVzICovXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2F0ZWdvcnkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXRlZ29yeSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNjM5NDY7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gaDMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHAge1xcclxcbiAgICBjb2xvcjogIzY2NjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIC5wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogI2U2Mzk0NjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWJvdXQgcGFnZSBzdHlsZXMgKi9cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXNlY3Rpb24gaDIge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNjM5NDY7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QgcGFnZSBzdHlsZXMgKi9cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTYzOTQ2O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1mb3JtIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTYzOTQ2O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGlucHV0LFxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ2O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMTEyMWY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBhYm91dC5qc1xyXG5pbXBvcnQgYWJvdXRVc0ltYWdlIGZyb20gJy4vYWJvdXRVcy5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UnKTtcclxuXHJcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBgXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIFxyXG4gICAgICB1cmwoJHthYm91dFVzSW1hZ2V9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlclxyXG4gICAgYDtcclxuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG4gICAgY29udGVudC5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICAgIGNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcycmVtJztcclxuICAgIGNvbnRlbnQuc3R5bGUubWluSGVpZ2h0ID0gJzEwMHZoJzsgXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xyXG4gICAgdGl0bGUuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICB0aXRsZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMnJlbSc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGFpbmVyJyk7XHJcblxyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC40KSc7XHJcbiAgICBhYm91dENvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnOHB4JztcclxuICAgIGFib3V0Q29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMnJlbSc7XHJcbiAgICBhYm91dENvbnRhaW5lci5zdHlsZS5tYXhXaWR0aCA9ICc4MDBweCc7XHJcbiAgICBhYm91dENvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAnMCBhdXRvJztcclxuXHJcbiAgICBjb25zdCBzdG9yeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN0b3J5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1zZWN0aW9uJyk7XHJcbiAgICBzdG9yeVNlY3Rpb24uc3R5bGUubWFyZ2luQm90dG9tID0gJzJyZW0nOyBcclxuXHJcbiAgICBjb25zdCBzdG9yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHN0b3J5VGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcclxuICAgIHN0b3J5VGl0bGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzFyZW0nO1xyXG5cclxuICAgIGNvbnN0IHN0b3J5UGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdG9yeVBhcmExLnRleHRDb250ZW50ID1cclxuICAgICAgJ0dvbGRlbiBEcmFnb24gUmVzdGF1cmFudCB3YXMgZm91bmRlZCBpbiAxOTg1IGJ5IENoZWYgTGkgV2VpLCB3aG8gYnJvdWdodCBoaXMgY3VsaW5hcnkgZXhwZXJ0aXNlIGZyb20gU2hhbmdoYWkgdG8gc2hhcmUgdGhlIGF1dGhlbnRpYyBmbGF2b3JzIG9mIENoaW5lc2UgY3Vpc2luZSB3aXRoIG91ciBjaXR5Lic7XHJcblxyXG4gICAgY29uc3Qgc3RvcnlQYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHN0b3J5UGFyYTIudGV4dENvbnRlbnQgPVxyXG4gICAgICAnV2hhdCBzdGFydGVkIGFzIGEgc21hbGwgZmFtaWx5IHJlc3RhdXJhbnQgaGFzIGdyb3duIGludG8gYSBiZWxvdmVkIGVzdGFibGlzaG1lbnQsIHRoYW5rcyB0byBvdXIgY29tbWl0bWVudCB0byBxdWFsaXR5IGFuZCB0aGUgc3VwcG9ydCBvZiBvdXIgbG95YWwgY3VzdG9tZXJzLic7XHJcblxyXG4gICAgc3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKHN0b3J5VGl0bGUpO1xyXG4gICAgc3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKHN0b3J5UGFyYTEpO1xyXG4gICAgc3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKHN0b3J5UGFyYTIpO1xyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcnlTZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBwaGlsb3NvcGh5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGhpbG9zb3BoeVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtc2VjdGlvbicpO1xyXG4gICAgcGhpbG9zb3BoeVNlY3Rpb24uc3R5bGUubWFyZ2luQm90dG9tID0gJzJyZW0nO1xyXG5cclxuICAgIGNvbnN0IHBoaWxvc29waHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwaGlsb3NvcGh5VGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIFBoaWxvc29waHknO1xyXG4gICAgcGhpbG9zb3BoeVRpdGxlLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxcmVtJztcclxuXHJcbiAgICBjb25zdCBwaGlsb3NvcGh5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBoaWxvc29waHlQYXJhLnRleHRDb250ZW50ID1cclxuICAgICAgXCJBdCBHb2xkZW4gRHJhZ29uLCB3ZSBiZWxpZXZlIHRoYXQgZ3JlYXQgZm9vZCBicmluZ3MgcGVvcGxlIHRvZ2V0aGVyLiBPdXIgcGhpbG9zb3BoeSBpcyBzaW1wbGU6IHVzZSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIGZvbGxvdyB0cmFkaXRpb25hbCBjb29raW5nIG1ldGhvZHMsIGFuZCBzZXJ2ZSB3aXRoIGxvdmUgYW5kIGNhcmUuIFdlJ3JlIGNvbW1pdHRlZCB0byBwcm92aWRpbmcgbm90IGp1c3QgYSBtZWFsLCBidXQgYW4gZXhwZXJpZW5jZSB0aGF0IGhvbm9ycyB0aGUgcmljaCBjdWxpbmFyeSBoZXJpdGFnZSBvZiBDaGluYS5cIjtcclxuXHJcbiAgICBwaGlsb3NvcGh5U2VjdGlvbi5hcHBlbmRDaGlsZChwaGlsb3NvcGh5VGl0bGUpO1xyXG4gICAgcGhpbG9zb3BoeVNlY3Rpb24uYXBwZW5kQ2hpbGQocGhpbG9zb3BoeVBhcmEpO1xyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocGhpbG9zb3BoeVNlY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IHRlYW1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZWFtU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1zZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgdGVhbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRlYW1UaXRsZS50ZXh0Q29udGVudCA9ICdPdXIgVGVhbSc7XHJcbiAgICB0ZWFtVGl0bGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzFyZW0nO1xyXG5cclxuICAgIGNvbnN0IHRlYW1QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGVhbVBhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIk91ciBraXRjaGVuIGlzIGxlZCBieSBFeGVjdXRpdmUgQ2hlZiBaaGFuZyBNaW4sIHdobyBicmluZ3Mgb3ZlciAyNSB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRyYWRpdGlvbmFsIENoaW5lc2UgY29va2luZy4gT3VyIHRlYW0gb2YgY2hlZnMgYW5kIHN0YWZmIGFyZSBsaWtlIGZhbWlseSwgd29ya2luZyB0b2dldGhlciB0byBjcmVhdGUgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlcyBmb3Igb3VyIGd1ZXN0cy5cIjtcclxuXHJcbiAgICB0ZWFtU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZWFtVGl0bGUpO1xyXG4gICAgdGVhbVNlY3Rpb24uYXBwZW5kQ2hpbGQodGVhbVBhcmEpO1xyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVhbVNlY3Rpb24pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dDtcclxuIiwiLy8gY29udGFjdC5qc1xyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhZ2UnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcclxuICAgIHRpdGxlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgdGl0bGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzJyZW0nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIENvbnRhY3QgSW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGluZm9UaXRsZS50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50IEluZm9ybWF0aW9uJztcclxuICAgIFxyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzxzdHJvbmc+QWRkcmVzczo8L3N0cm9uZz4gMTIzIERyYWdvbiBTdHJlZXQsIENoaW5hdG93biwgQ0EgOTAwMDEnO1xyXG4gICAgXHJcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBob25lLmlubmVySFRNTCA9ICc8c3Ryb25nPlBob25lOjwvc3Ryb25nPiAoNTU1KSAxMjMtNDU2Nyc7XHJcbiAgICBcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZW1haWwuaW5uZXJIVE1MID0gJzxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IGluZm9AZ29sZGVuZHJhZ29uLmNvbSc7XHJcbiAgICBcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG91cnMuaW5uZXJIVE1MID0gJzxzdHJvbmc+SG91cnM6PC9zdHJvbmc+PGJyPk1vbmRheSAtIFRodXJzZGF5OiAxMTowMCBBTSAtIDk6MzAgUE08YnI+RnJpZGF5IC0gU2F0dXJkYXk6IDExOjAwIEFNIC0gMTA6MzAgUE08YnI+U3VuZGF5OiAxMjowMCBQTSAtIDk6MDAgUE0nO1xyXG4gICAgXHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChwaG9uZSk7XHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChlbWFpbCk7XHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcclxuXHJcbiAgICAvLyBDb250YWN0IEZvcm1cclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWZvcm0nKTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdTZW5kIFVzIGEgTWVzc2FnZSc7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBcclxuICAgIC8vIE5hbWUgZmllbGRcclxuICAgIGNvbnN0IG5hbWVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmFtZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICBcclxuICAgIG5hbWVHcm91cC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZUdyb3VwLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVHcm91cCk7XHJcbiAgICBcclxuICAgIC8vIEVtYWlsIGZpZWxkXHJcbiAgICBjb25zdCBlbWFpbEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcclxuICAgIFxyXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XHJcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsOic7XHJcbiAgICBcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgXHJcbiAgICBlbWFpbEdyb3VwLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xyXG4gICAgZW1haWxHcm91cC5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxHcm91cCk7XHJcbiAgICBcclxuICAgIC8vIE1lc3NhZ2UgZmllbGRcclxuICAgIGNvbnN0IG1lc3NhZ2VHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVzc2FnZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJyk7XHJcbiAgICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZTonO1xyXG4gICAgXHJcbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xyXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XHJcbiAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgXHJcbiAgICBtZXNzYWdlR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcclxuICAgIG1lc3NhZ2VHcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlR3JvdXApO1xyXG4gICAgXHJcbiAgICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VuZCBNZXNzYWdlJztcclxuICAgIFxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCIvLyBob21lLmpzXHJcblxyXG5pbXBvcnQgZ29sZGVuRHJhZ29uIGZyb20nLi9nb2xkZW5EcmFnb24uanBnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xyXG5cclxuICAgIC8vIEhlcm8gU2VjdGlvblxyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XHJcbiAgICBoZXJvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBcclxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIFxyXG4gICAgdXJsKCR7Z29sZGVuRHJhZ29ufSlcclxuICBgO1xyXG4gICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG4gICAgICBoZXJvLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG5cclxuICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSAnR29sZGVuIERyYWdvbiBSZXN0YXVyYW50JztcclxuXHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gJ0V4cGVyaWVuY2UgdGhlIGF1dGhlbnRpYyB0YXN0ZSBvZiB0cmFkaXRpb25hbCBDaGluZXNlIGN1aXNpbmUgd2l0aCBvdXIgaGFuZGNyYWZ0ZWQgZGlzaGVzIG1hZGUgZnJvbSBmYW1pbHkgcmVjaXBlcyBwYXNzZWQgZG93biB0aHJvdWdoIGdlbmVyYXRpb25zLic7XHJcblxyXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xyXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm8pO1xyXG5cclxuICAgIC8vIEZlYXR1cmVzIHNlY3Rpb25cclxuICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmZWF0dXJlcy5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlcycpO1xyXG5cclxuICAgIC8vIEZlYXR1cmUgMVxyXG4gICAgY29uc3QgZmVhdHVyZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZlYXR1cmUxLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcclxuICAgIFxyXG4gICAgY29uc3QgZmVhdHVyZTFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBmZWF0dXJlMVRpdGxlLnRleHRDb250ZW50ID0gJ0F1dGhlbnRpYyBUYXN0ZSc7XHJcbiAgICBcclxuICAgIGNvbnN0IGZlYXR1cmUxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZlYXR1cmUxVGV4dC50ZXh0Q29udGVudCA9ICdPdXIgY2hlZnMgYnJpbmcgb3ZlciAzMCB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRyYWRpdGlvbmFsIENoaW5lc2UgY29va2luZyB0ZWNobmlxdWVzLic7XHJcbiAgICBcclxuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZlYXR1cmUxVGl0bGUpO1xyXG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmVhdHVyZTFUZXh0KTtcclxuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUxKTtcclxuXHJcbiAgICAvLyBGZWF0dXJlIDJcclxuICAgIGNvbnN0IGZlYXR1cmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmZWF0dXJlMi5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZlYXR1cmUyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZmVhdHVyZTJUaXRsZS50ZXh0Q29udGVudCA9ICdGcmVzaCBJbmdyZWRpZW50cyc7XHJcbiAgICBcclxuICAgIGNvbnN0IGZlYXR1cmUyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZlYXR1cmUyVGV4dC50ZXh0Q29udGVudCA9ICdXZSBzb3VyY2Ugb3VyIGluZ3JlZGllbnRzIGRhaWx5IGZyb20gbG9jYWwgbWFya2V0cyB0byBlbnN1cmUgdGhlIGZyZXNoZXN0IGZsYXZvcnMgaW4gZXZlcnkgZGlzaC4nO1xyXG4gICAgXHJcbiAgICBmZWF0dXJlMi5hcHBlbmRDaGlsZChmZWF0dXJlMlRpdGxlKTtcclxuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGZlYXR1cmUyVGV4dCk7XHJcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMik7XHJcblxyXG4gICAgLy8gRmVhdHVyZSAzXHJcbiAgICBjb25zdCBmZWF0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmVhdHVyZTMuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmZWF0dXJlM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZlYXR1cmUzVGl0bGUudGV4dENvbnRlbnQgPSAnQXdhcmQgV2lubmluZyc7XHJcbiAgICBcclxuICAgIGNvbnN0IGZlYXR1cmUzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZlYXR1cmUzVGV4dC50ZXh0Q29udGVudCA9ICdQcm91ZGx5IHJlY29nbml6ZWQgYXMgdGhlIGJlc3QgQ2hpbmVzZSByZXN0YXVyYW50IGluIHRoZSBjaXR5IGZvciB0aHJlZSBjb25zZWN1dGl2ZSB5ZWFycy4nO1xyXG4gICAgXHJcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZChmZWF0dXJlM1RpdGxlKTtcclxuICAgIGZlYXR1cmUzLmFwcGVuZENoaWxkKGZlYXR1cmUzVGV4dCk7XHJcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmZWF0dXJlcyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiLy8gbWVudS5qc1xyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XHJcbiAgICB0aXRsZS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHRpdGxlLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcycmVtJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcclxuXHJcbiAgICAvLyBBcHBldGl6ZXJzXHJcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhcHBldGl6ZXJzLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2F0ZWdvcnknKTtcclxuICAgIFxyXG4gICAgY29uc3QgYXBwZXRpemVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFwcGV0aXplcnNUaXRsZS50ZXh0Q29udGVudCA9ICdBcHBldGl6ZXJzJztcclxuICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc1RpdGxlKTtcclxuXHJcbiAgICBjb25zdCBhcHBldGl6ZXJJdGVtcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGVhbWVkIFNvdXAgRHVtcGxpbmdzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUcmFkaXRpb25hbCBTaGFuZ2hhaW5lc2Ugc291cCBkdW1wbGluZ3MgZmlsbGVkIHdpdGggcG9yaycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDEyLjk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU3ByaW5nIFJvbGxzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDcmlzcHkgcm9sbHMgZmlsbGVkIHdpdGggdmVnZXRhYmxlcyBhbmQgc2VydmVkIHdpdGggc3dlZXQgc2F1Y2UnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQ4Ljk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU2NhbGxpb24gUGFuY2FrZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVHJhZGl0aW9uYWwgQ2hpbmVzZSBmbGF0YnJlYWQgd2l0aCBzY2FsbGlvbnMnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQ5Ljk5J1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgYXBwZXRpemVySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGl0ZW0ubmFtZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5wcmljZSk7XHJcbiAgICAgICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGV0aXplcnMpO1xyXG5cclxuICAgIC8vIE1haW4gRGlzaGVzXHJcbiAgICBjb25zdCBtYWluRGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluRGlzaGVzLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2F0ZWdvcnknKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbkRpc2hlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1haW5EaXNoZXNUaXRsZS50ZXh0Q29udGVudCA9ICdNYWluIERpc2hlcyc7XHJcbiAgICBtYWluRGlzaGVzLmFwcGVuZENoaWxkKG1haW5EaXNoZXNUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgbWFpbkRpc2hJdGVtcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdLdW5nIFBhbyBDaGlja2VuJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTcGljeSBzdGlyLWZyaWVkIGNoaWNrZW4gd2l0aCBwZWFudXRzLCB2ZWdldGFibGVzLCBhbmQgY2hpbGkgcGVwcGVycycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE4Ljk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUGVraW5nIER1Y2snLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JvYXN0ZWQgZHVjayBzZXJ2ZWQgd2l0aCBwYW5jYWtlcywgc3ByaW5nIG9uaW9ucywgYW5kIGhvaXNpbiBzYXVjZScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDMyLjk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWFwbyBUb2Z1JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTcGljeSB0b2Z1IGRpc2ggd2l0aCBtaW5jZWQgcG9yayBpbiBhIGZsYXZvcmZ1bCBzYXVjZScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE2Ljk5J1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgbWFpbkRpc2hJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oaXRlbS5uYW1lLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLnByaWNlKTtcclxuICAgICAgICBtYWluRGlzaGVzLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRpc2hlcyk7XHJcblxyXG4gICAgLy8gTm9vZGxlcyAmIFJpY2VcclxuICAgIGNvbnN0IG5vb2RsZXNSaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub29kbGVzUmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWNhdGVnb3J5Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IG5vb2RsZXNSaWNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbm9vZGxlc1JpY2VUaXRsZS50ZXh0Q29udGVudCA9ICdOb29kbGVzICYgUmljZSc7XHJcbiAgICBub29kbGVzUmljZS5hcHBlbmRDaGlsZChub29kbGVzUmljZVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBub29kbGVzUmljZUl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0RhbiBEYW4gTm9vZGxlcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3BpY3kgU2ljaHVhbiBub29kbGVzIHRvcHBlZCB3aXRoIHByZXNlcnZlZCB2ZWdldGFibGVzIGFuZCBtaW5jZWQgcG9yaycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE0Ljk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnWWFuZ3pob3UgRnJpZWQgUmljZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBmcmllZCByaWNlIHdpdGggc2hyaW1wLCBwb3JrLCBhbmQgdmVnZXRhYmxlcycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDEzLjk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU2hhbmdoYWkgRnJpZWQgTm9vZGxlcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3Rpci1mcmllZCB0aGljayBub29kbGVzIHdpdGggYmVlZiBhbmQgdmVnZXRhYmxlcyBpbiBhIHN3ZWV0IHNveSBzYXVjZScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE1Ljk5J1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgbm9vZGxlc1JpY2VJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oaXRlbS5uYW1lLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLnByaWNlKTtcclxuICAgICAgICBub29kbGVzUmljZS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vb2RsZXNSaWNlKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgXHJcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XHJcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcclxuICAgIFxyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBtZW51SXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGluZGV4LmpzXHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vYWJvdXQnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcclxuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LWJ0bicpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xyXG4gICAgXHJcbiAgICAvLyBTZXQgYWN0aXZlIGJ1dHRvblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWJ0bicpO1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdGVkIGJ1dHRvblxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2xlYXIgY29udGVudFxyXG4gICAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIExvYWQgaG9tZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ0bik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBMb2FkIG1lbnUgcGFnZVxyXG4gICAgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdG4pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTG9hZCBhYm91dCBwYWdlXHJcbiAgICBmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGFib3V0QnRuKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0KCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBMb2FkIGNvbnRhY3QgcGFnZVxyXG4gICAgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdG4pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBidXR0b25zXHJcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcclxuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFib3V0KTtcclxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdCk7XHJcbiAgICBcclxuICAgIC8vIExvYWQgaG9tZSBwYWdlIGJ5IGRlZmF1bHRcclxuICAgIGxvYWRIb21lKCk7XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgd2Vic2l0ZSB3aGVuIERPTSBpcyBsb2FkZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVXZWJzaXRlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=