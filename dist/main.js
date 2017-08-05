(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("babel-runtime/helpers/extends"), require("babel-runtime/helpers/objectWithoutProperties"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("prop-types"), require("invariant"), require("react-dom"), require("babel-runtime/helpers/toConsumableArray"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "babel-runtime/helpers/extends", "babel-runtime/helpers/objectWithoutProperties", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/helpers/inherits", "prop-types", "invariant", "react-dom", "babel-runtime/helpers/toConsumableArray", "react-router-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("babel-runtime/helpers/extends"), require("babel-runtime/helpers/objectWithoutProperties"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("prop-types"), require("invariant"), require("react-dom"), require("babel-runtime/helpers/toConsumableArray"), require("react-router-dom")) : factory(root["react"], root["babel-runtime/helpers/extends"], root["babel-runtime/helpers/objectWithoutProperties"], root["babel-runtime/helpers/classCallCheck"], root["babel-runtime/helpers/createClass"], root["babel-runtime/helpers/possibleConstructorReturn"], root["babel-runtime/helpers/inherits"], root["prop-types"], root["invariant"], root["react-dom"], root["babel-runtime/helpers/toConsumableArray"], root["react-router-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_25__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {".layer":{"width":"100%","height":"100%"},".container":{"position":"absolute","left":"0","top":"0"},".menu":{"display":"flex","webkitBoxOrient":"vertical","webkitBoxDirection":"normal","msFlexDirection":"vertical","flexDirection":"vertical","backgroundColor":"#eee"},".item":{"background":"linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%)","listStyleType":"none"},".item-selected":{},".label":{"fontWeight":"bold"},".button":{"border":"none"},".link":{},".submenu":{}};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MenuWrapper__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ContextMenuItem__ = __webpack_require__(19);











var ContextMenu = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ContextMenu, _Component);

    function ContextMenu() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ContextMenu);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ContextMenu, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                menu = _props.menu,
                others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["menu"]);

            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__MenuWrapper__["a" /* default */],
                others,
                this.props.menu.map(function (menuItem, index) {
                    return (
                        // TODO: Not really anything better to use for a key,
                        // but could allow key as an optional prop, not a lot of
                        // point in this case though....
                        // eslint-disable-next-line react/no-array-index-key
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ContextMenuItem__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ key: index }, menuItem))
                    );
                })
            );
        }
    }]);

    return ContextMenu;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

var _default = ContextMenu;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ContextMenu, "ContextMenu", "D:/projects/downright/source/ContextMenu.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ContextMenu.jsx");
}();

;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);



var _this = this;




var _default = function _default(_ref) {
    var children = _ref.children,
        position = _ref.position,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children", "position"]);

    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.container, {
        left: _this.state.menuPosition.x + "px",
        top: _this.state.menuPosition.y + "px"
    });

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "nav",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: style }, others),
        children
    );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/OuterContainer.jsx");
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContextMenuConnect__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContextMenuProvider__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contextMenu", function() { return __WEBPACK_IMPORTED_MODULE_0__ContextMenuConnect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuProvider", function() { return __WEBPACK_IMPORTED_MODULE_1__ContextMenuProvider__["a"]; });



var _default = __WEBPACK_IMPORTED_MODULE_0__ContextMenuConnect__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/index.js");
}();

;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_invariant__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);










function makeComponentWrapper(buildMenu) {
    return function (WrappedComponent) {
        var _class, _temp2;

        return _temp2 = _class = function (_Component) {
            __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ContextMenuConnect, _Component);

            function ContextMenuConnect() {
                var _ref;

                var _temp, _this, _ret;

                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ContextMenuConnect);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ContextMenuConnect.__proto__ || Object.getPrototypeOf(ContextMenuConnect)).call.apply(_ref, [this].concat(args))), _this), _this.onContextMenu = function () {
                    var _this2;

                    return (_this2 = _this).__onContextMenu__REACT_HOT_LOADER__.apply(_this2, arguments);
                }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
            }

            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ContextMenuConnect, [{
                key: "appendContextMenu",
                value: function appendContextMenu() {
                    var localItems = buildMenu(this.props);
                    var context = this.context.contextMenuContext;
                    context.addMenuItems(localItems);
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.nearestNode = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this.innerNode);
                    __WEBPACK_IMPORTED_MODULE_7_invariant___default()(this.nearestNode, "Could not find a DOM node to attach contextMenu to");
                    this.nearestNode.addEventListener("contextmenu", this.onContextMenu);
                }
            }, {
                key: "__onContextMenu__REACT_HOT_LOADER__",
                value: function __onContextMenu__REACT_HOT_LOADER__() {
                    // Default will be prevented by the ContextMenuProvider, after the event bubbles.
                    // Other nodes have the opportunity to capture. All we need to do here is
                    // build the menu.
                    this.appendContextMenu();
                }
            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    if (this.nearestNode) {
                        this.nearestNode.removeEventListener("contextmenu", this.onContextMenu);
                    }
                }
            }, {
                key: "render",
                value: function render() {
                    var _this3 = this;

                    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                        ref: function ref(el) {
                            _this3.innerNode = el;
                        }
                    }, this.props, this.state));
                }
            }]);

            return ContextMenuConnect;
        }(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]), _class.contextTypes = {
            contextMenuContext: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.shape({
                addMenuItems: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func
            })
        }, _temp2;
    };
}

var _default = makeComponentWrapper;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp3 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(makeComponentWrapper, "makeComponentWrapper", "D:/projects/downright/source/ContextMenuConnect.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ContextMenuConnect.jsx");
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_invariant__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ContextMenu__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__OuterContainer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_menu_css__);













var ContextMenuProvider = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ContextMenuProvider, _Component);

    function ContextMenuProvider(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ContextMenuProvider);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContextMenuProvider.__proto__ || Object.getPrototypeOf(ContextMenuProvider)).call(this, props));

        _this.onContextMenuCapture = function () {
            return _this.__onContextMenuCapture__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onContextMenu = function () {
            return _this.__onContextMenu__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onMenuClick = function () {
            return _this.__onMenuClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onClick = function () {
            return _this.__onClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.closeMenu = function () {
            return _this.__closeMenu__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            menuIsOpen: false,
            menu: [],
            menuPosition: null
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ContextMenuProvider, [{
        key: "getChildContext",
        value: function getChildContext() {
            var _this2 = this;

            return {
                // TODO: Horrible pyramid approaching, refactor this
                contextMenuContext: {
                    addMenuItems: function addMenuItems(rawItems) {
                        var items = rawItems.map(function (item) {
                            if (item.constructor === Array) {
                                if (item.length === 1) {
                                    return { type: "label", content: item[0] };
                                } else if (item.length === 2) {
                                    if (typeof item[1] === "string") {
                                        return { type: "link", content: item[0], to: item[1] };
                                    } else if (typeof item[1] === "function") {
                                        return { type: "button", content: item[0], onClick: item[1] };
                                    }
                                    __WEBPACK_IMPORTED_MODULE_7_invariant___default()(false, "Second element of menu item array should be a string or function, got: " + item[1]);
                                } else {
                                    __WEBPACK_IMPORTED_MODULE_7_invariant___default()(false, "Menu item array can have 1 or 2 elements, this one had " + item.length);
                                }
                            }
                            // TODO: Validate this item
                            return item;
                        });
                        // Items further down the DOM tree get inserted in front
                        _this2.setState({
                            menu: _this2.state.menu.length ? [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this2.state.menu), [{ type: "separator" }], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(items)) : items
                        });
                    },
                    closeMenu: this.closeMenu
                }
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            // this.nearestNode = ReactDOM.findDOMNode(this.innerNode);
            // invariant(this.nearestNode, 'Could not find a DOM node to attach
            // ContextMenuProvider to');
            // Capture the event at the highest level to initialise the array
            this.nearestNode.addEventListener("contextmenu", this.onContextMenuCapture, true);
            // Catch the event again on the way back up once the context is populated
            this.nearestNode.addEventListener("contextmenu", this.onContextMenu);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.nearestNode) {
                this.nearestNode.removeEventListener("contextmenu", this.onContextMenu);
                this.nearestNode.removeEventListener("contextmenu", this.onContextMenuCapture, true);
            }
        }
    }, {
        key: "__onContextMenuCapture__REACT_HOT_LOADER__",
        value: function __onContextMenuCapture__REACT_HOT_LOADER__() {
            // Clear the menu before the 'capture' phase - it will get filled up when the event travels
            // down and then back up the DOM tree.
            this.setState({
                menu: []
            });
        }
    }, {
        key: "__onContextMenu__REACT_HOT_LOADER__",
        value: function __onContextMenu__REACT_HOT_LOADER__(event) {
            // The menu should have already been built up via the context handler while the event was
            // bubbling up. If the menu was empty then it's possible the user right-clicked on something
            // that wasn't context menu connected, therefore we need to close the menu.
            if (this.state.menu.length === 0) {
                this.closeMenu();
            } else {
                event.preventDefault();
                event.stopPropagation();
                this.setState({
                    menuIsOpen: true,
                    menuPosition: { x: event.clientX, y: event.clientY }
                });
            }
        }
    }, {
        key: "__onMenuClick__REACT_HOT_LOADER__",
        value: function __onMenuClick__REACT_HOT_LOADER__(event) {
            // Prevent clicks from the menu propagating up to the onClick handler, so they don't
            // automatically trigger the menu closing
            event.stopPropagation();
        }
    }, {
        key: "__onClick__REACT_HOT_LOADER__",
        value: function __onClick__REACT_HOT_LOADER__() {
            // An ordinary click that wasn't on our menu or a right-click should just close the menu
            if (this.state.menuIsOpen) {
                this.closeMenu();
            }
        }
    }, {
        key: "__closeMenu__REACT_HOT_LOADER__",
        value: function __closeMenu__REACT_HOT_LOADER__() {
            this.setState({
                menuIsOpen: false,
                menu: [],
                menuPosition: null
            });
        }
    }, {
        key: "renderMenu",
        value: function renderMenu() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9__OuterContainer__["a" /* default */],
                { position: this.state.menuPosition },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ContextMenu__["a" /* default */], { onClick: this.onMenuClick, menu: this.state.menu })
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                {
                    style: __WEBPACK_IMPORTED_MODULE_10__styles_menu_css___default.a.layer,
                    ref: function ref(_ref) {
                        _this3.nearestNode = _ref;
                    },
                    onClick: this.onClick
                },
                this.proasdps.children,
                this.state.menuIsOpen ? this.renderMenu() : null
            );
        }
    }]);

    return ContextMenuProvider;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ContextMenuProvider.propTypes = {
    children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node]).isRequired
};
ContextMenuProvider.childContextTypes = {
    contextMenuContext: __WEBPACK_IMPORTED_MODULE_5_react___default.a.PropTypes.shape({
        addMenuItems: __WEBPACK_IMPORTED_MODULE_5_react___default.a.PropTypes.func,
        closeMenu: __WEBPACK_IMPORTED_MODULE_5_react___default.a.PropTypes.func
    })
};
var _default = ContextMenuProvider;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ContextMenuProvider, "ContextMenuProvider", "D:/projects/downright/source/ContextMenuProvider.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ContextMenuProvider.jsx");
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);



var _this = this;




var _default = function _default(_ref) {
    var children = _ref.children,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "ul",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.menu, role: "menu" }, others),
        _this.props.children
    );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/MenuWrapper.jsx");
}();

;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ContextSubmenu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ButtonElement__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LabelElement__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__LinkElement__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SeparatorElement__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ItemWrapper__ = __webpack_require__(27);

















var ContextMenuItem = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ContextMenuItem, _Component);

    function ContextMenuItem(props) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ContextMenuItem);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContextMenuItem.__proto__ || Object.getPrototypeOf(ContextMenuItem)).call(this, props));

        _this.onSubmenuMouseEnter = function () {
            return _this.__onSubmenuMouseEnter__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onSubmenuMouseLeave = function () {
            return _this.__onSubmenuMouseLeave__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onButtonClick = function () {
            return _this.__onButtonClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            submenuVisible: false
        };
        return _this;
    }

    // TODO: On receive props / will receive props, verify correct action is there e.g. handler/to

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ContextMenuItem, [{
        key: "__onSubmenuMouseEnter__REACT_HOT_LOADER__",
        value: function __onSubmenuMouseEnter__REACT_HOT_LOADER__() {
            this.setState({
                submenuVisible: true
            });
        }
    }, {
        key: "__onSubmenuMouseLeave__REACT_HOT_LOADER__",
        value: function __onSubmenuMouseLeave__REACT_HOT_LOADER__() {
            this.setState({
                submenuVisible: false
            });
        }
    }, {
        key: "__onButtonClick__REACT_HOT_LOADER__",
        value: function __onButtonClick__REACT_HOT_LOADER__(event) {
            // For links there is no button handler (although consumers
            // can still provide one, e.g. to preventDefault or whatever)
            if (this.props.onClick) {
                // Execute the click handler
                this.props.onClick(event);
            }
            // Trigger provider to close the menu
            this.props.onCloseMenu();
        }
    }, {
        key: "renderInnerElement",
        value: function renderInnerElement() {
            var _props = this.props,
                type = _props.type,
                content = _props.content,
                others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["type", "content"]);

            switch (this.props.type) {
                case "label":
                    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_10__LabelElement__["a" /* default */],
                        others,
                        content
                    );
                case "separator":
                    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SeparatorElement__["a" /* default */], others);
                case "submenu":
                    // A bit of a special case
                    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__ContextSubmenu__["a" /* default */],
                        others,
                        content
                    );
                case "link":
                    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_11__LinkElement__["a" /* default */],
                        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, others, { onClick: this.onButtonClick }),
                        this.props.content
                    );
                case "button":
                default:
                    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_9__ButtonElement__["a" /* default */],
                        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, others, { onClick: this.onButtonClick }),
                        content
                    );
            }
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_13__ItemWrapper__["a" /* default */],
                null,
                this.renderInnerElement()
            );
        }
    }]);

    return ContextMenuItem;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

ContextMenuItem.propTypes = {
    type: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(["label", "button", "link", "separator", "submenu"]),
    caption: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,
    onClick: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    onCloseMenu: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    menu: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object)
};
ContextMenuItem.defaultProps = {
    type: "label",
    caption: null,
    onClick: null,
    onCloseMenu: null,
    menu: []
};
var _default = ContextMenuItem;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ContextMenuItem, "ContextMenuItem", "D:/projects/downright/source/ContextMenuItem.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ContextMenuItem.jsx");
}();

;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SubmenuElement__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OuterContainer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ContextMenu__ = __webpack_require__(10);










var ContextSubmenu = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(ContextSubmenu, _Component);

    function ContextSubmenu() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ContextSubmenu);

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContextSubmenu.__proto__ || Object.getPrototypeOf(ContextSubmenu)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ContextSubmenu, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                menu = _props.menu,
                onClick = _props.onClick;

            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__SubmenuElement__["a" /* default */],
                null,
                this.props.content,
                this.state.submenuVisible ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6__OuterContainer__["a" /* default */],
                    { position: this.props.position },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ContextMenu__["a" /* default */], { menu: menu, onClick: onClick })
                ) : null
            );
        }
        /*
            <div onMouseEnter={this.onSubmenuMouseEnter}
             onMouseLeave={this.onSubmenuMouseLeave} style={{ position: 'relative' }}>
            </div>
        */

    }]);

    return ContextSubmenu;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var _default = ContextSubmenu;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ContextSubmenu, "ContextSubmenu", "D:/projects/downright/source/ContextSubmenu.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ContextSubmenu.jsx");
}();

;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);



var _this = this;




// eslint-disable-next-line react/prop-types

var _default = function _default(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children", "onClick"]);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "nav",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.submenu }, others),
        _this.props.children
    );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/SubmenuElement.jsx");
}();

;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);






var _default = function _default(_ref) {
    var children = _ref.children,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "button",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.button }, others),
        children
    );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ButtonElement.jsx");
}();

;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);





var _default = function _default(_ref) {
  var children = _ref.children,
      others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    "h2",
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.label }, others),
    children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/LabelElement.jsx");
}();

;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_menu_css__);







// TODO: By default render a plain <a> tag. Consumers can pass in react-dom-router's
// Link if they want. Could export the default styles to use them on react-dom-router?
// Or pass them all in from the top?

var _default = function _default(_ref) {
  var children = _ref.children,
      others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_4__styles_menu_css___default.a.link }, others),
    children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/LinkElement.jsx");
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);





var _default = function _default(_ref) {
  var others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, []);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.separator }, others));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/SeparatorElement.jsx");
}();

;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_menu_css__);



var _this = this;




var _default = function _default(_ref) {
    var children = _ref.children,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "li",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.item }, others),
        _this.props.children
    );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "D:/projects/downright/source/ItemWrapper.jsx");
}();

;

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map