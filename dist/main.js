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





var _default = function _default(_ref) {
    var children = _ref.children,
        position = _ref.position,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children", "position"]);

    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.container, {
        left: position.x + "px",
        top: position.y + "px"
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
                    console.log(localItems);
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
                        console.log(_this2.state.menu);
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
                this.props.children,
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





var _default = function _default(_ref) {
    var children = _ref.children,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "ul",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.menu, role: "menu" }, others),
        children
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
                onClick = _props.onClick,
                onCloseMenu = _props.onCloseMenu,
                menu = _props.menu,
                others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["type", "content", "onClick", "onCloseMenu", "menu"]);

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
                        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ menu: menu, onCloseMenu: onCloseMenu }, others),
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
    content: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,
    onClick: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    onCloseMenu: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    menu: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object)
};
ContextMenuItem.defaultProps = {
    type: "label",
    content: null,
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





var _default = function _default(_ref) {
    var children = _ref.children,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "li",
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: __WEBPACK_IMPORTED_MODULE_3__styles_menu_css___default.a.item }, others),
        children
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YTYwNjk2MWY2NWI2YzZlOGEyMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZhcmlhbnRcIiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvQ29udGV4dE1lbnUuanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9PdXRlckNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0TWVudUNvbm5lY3QuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0TWVudVByb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvTWVudVdyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0U3VibWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL1N1Ym1lbnVFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvQnV0dG9uRWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0xhYmVsRWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0xpbmtFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL1NlcGFyYXRvckVsZW1lbnQuanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9JdGVtV3JhcHBlci5qc3giXSwibmFtZXMiOlsiQ29udGV4dE1lbnUiLCJwcm9wcyIsIm1lbnUiLCJvdGhlcnMiLCJtYXAiLCJtZW51SXRlbSIsImluZGV4IiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibGVmdCIsIngiLCJ0b3AiLCJ5IiwibWFrZUNvbXBvbmVudFdyYXBwZXIiLCJidWlsZE1lbnUiLCJvbkNvbnRleHRNZW51IiwibG9jYWxJdGVtcyIsImNvbnRleHQiLCJjb250ZXh0TWVudUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYWRkTWVudUl0ZW1zIiwibmVhcmVzdE5vZGUiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwiaW5uZXJOb2RlIiwiaW52YXJpYW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENvbnRleHRNZW51IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsIiwic3RhdGUiLCJjb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImZ1bmMiLCJDb250ZXh0TWVudVByb3ZpZGVyIiwib25Db250ZXh0TWVudUNhcHR1cmUiLCJvbk1lbnVDbGljayIsIm9uQ2xpY2siLCJjbG9zZU1lbnUiLCJtZW51SXNPcGVuIiwibWVudVBvc2l0aW9uIiwicmF3SXRlbXMiLCJpdGVtcyIsIml0ZW0iLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwibGVuZ3RoIiwidHlwZSIsImNvbnRlbnQiLCJ0byIsInNldFN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsaWVudFgiLCJjbGllbnRZIiwibGF5ZXIiLCJyZWYiLCJyZW5kZXJNZW51IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibm9kZSIsImlzUmVxdWlyZWQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlJlYWN0IiwiQ29udGV4dE1lbnVJdGVtIiwib25TdWJtZW51TW91c2VFbnRlciIsIm9uU3VibWVudU1vdXNlTGVhdmUiLCJvbkJ1dHRvbkNsaWNrIiwic3VibWVudVZpc2libGUiLCJvbkNsb3NlTWVudSIsInJlbmRlcklubmVyRWxlbWVudCIsIm9uZU9mIiwiYXJyYXlPZiIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIkNvbnRleHRTdWJtZW51Iiwic3VibWVudSIsImJ1dHRvbiIsImxhYmVsIiwibGluayIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7O0FDQUEsMEQ7Ozs7OztBQ0FBLDBFOzs7Ozs7QUNBQSxrQkFBa0IsVUFBVSwrQkFBK0IsZUFBZSwyQ0FBMkMsVUFBVSw2SkFBNkosVUFBVSwwRkFBMEYsb0JBQW9CLFdBQVcsb0JBQW9CLFlBQVksZ0JBQWdCLFdBQVcsZ0I7Ozs7OztBQ0ExZCxpRTs7Ozs7O0FDQUEsOEQ7Ozs7OztBQ0FBLDRFOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7O2lDQUVPO0FBQUEseUJBQ3VCLEtBQUtDLEtBRDVCO0FBQUEsZ0JBQ0dDLElBREgsVUFDR0EsSUFESDtBQUFBLGdCQUNZQyxNQURaOztBQUVMLG1CQUNJO0FBQUMsNkVBQUQ7QUFBaUJBLHNCQUFqQjtBQUNLLHFCQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JFLEdBQWhCLENBQW9CLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQUMsaUVBQUQsMEVBQWlCLEtBQUtBLEtBQXRCLElBQWlDRCxRQUFqQztBQUxpQjtBQUFBLGlCQUFwQjtBQURMLGFBREo7QUFXSDs7OztFQWZxQixnRDs7ZUFtQlhMLFc7OztBQUFmOzs7Ozs7OztrQ0FuQk1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTjtBQUNBOztlQUVlLHdCQUF1QztBQUFBLFFBQXBDTyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxRQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsUUFBYkwsTUFBYTs7QUFDbEQsUUFBTU0sUUFBQSxxRUFBQUEsS0FDQyx3REFBQUMsQ0FBT0MsU0FEUjtBQUVGQyxjQUFTSixTQUFTSyxDQUFsQixPQUZFO0FBR0ZDLGFBQVFOLFNBQVNPLENBQWpCO0FBSEUsTUFBTjs7QUFNQSxXQUNJO0FBQUE7QUFBQSxnRkFBSyxPQUFPTixLQUFaLElBQXVCTixNQUF2QjtBQUNLSTtBQURMLEtBREo7QUFLSCxDOztBQVpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOztlQUVlLG9FO0FBQWY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTUyxvQkFBVCxDQUE4QkMsU0FBOUIsRUFBeUM7QUFDckMsV0FBTztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsdVJBc0JDQyxhQXRCRDtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0RBU3FCO0FBQ2hCLHdCQUFNQyxhQUFhRixVQUFVLEtBQUtoQixLQUFmLENBQW5CO0FBQ0Esd0JBQU1tQixVQUFVLEtBQUtBLE9BQUwsQ0FBYUMsa0JBQTdCO0FBQ0FDLDRCQUFRQyxHQUFSLENBQVlKLFVBQVo7QUFDQUMsNEJBQVFJLFlBQVIsQ0FBcUJMLFVBQXJCO0FBQ0g7QUFkRjtBQUFBO0FBQUEsb0RBZ0JxQjtBQUNoQix5QkFBS00sV0FBTCxHQUFtQixpREFBQUMsQ0FBU0MsV0FBVCxDQUFxQixLQUFLQyxTQUExQixDQUFuQjtBQUNBQyxvQkFBQSxpREFBQUEsQ0FBVSxLQUFLSixXQUFmLEVBQTRCLG9EQUE1QjtBQUNBLHlCQUFLQSxXQUFMLENBQWlCSyxnQkFBakIsQ0FBa0MsYUFBbEMsRUFBaUQsS0FBS1osYUFBdEQ7QUFDSDtBQXBCRjtBQUFBO0FBQUEsc0VBc0J1QjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSx5QkFBS2EsaUJBQUw7QUFDSDtBQTNCRjtBQUFBO0FBQUEsdURBNkJ3QjtBQUNuQix3QkFBSSxLQUFLTixXQUFULEVBQXNCO0FBQ2xCLDZCQUFLQSxXQUFMLENBQWlCTyxtQkFBakIsQ0FBcUMsYUFBckMsRUFBb0QsS0FBS2QsYUFBekQ7QUFDSDtBQUNKO0FBakNGO0FBQUE7QUFBQSx5Q0FtQ1U7QUFBQTs7QUFDTCwyQkFDSSw0REFBQyxnQkFBRDtBQUNJLDZCQUFLLGFBQUNlLEVBQUQsRUFBUTtBQUFFLG1DQUFLTCxTQUFMLEdBQWlCSyxFQUFqQjtBQUFzQjtBQUR6Qyx1QkFFUSxLQUFLaEMsS0FGYixFQUdRLEtBQUtpQyxLQUhiLEVBREo7QUFPSDtBQTNDRjs7QUFBQTtBQUFBLFVBQzhCLGdEQUQ5QixVQUdRQyxZQUhSLEdBR3VCO0FBQ2xCZCxnQ0FBb0Isa0RBQUFlLENBQVVDLEtBQVYsQ0FBZ0I7QUFDaENiLDhCQUFjLGtEQUFBWSxDQUFVRTtBQURRLGFBQWhCO0FBREYsU0FIdkI7QUFBQSxLQUFQO0FBK0NIOztlQUVjdEIsb0I7QUFBZjs7Ozs7Ozs7a0NBbERTQSxvQjs7Ozs7Ozs7Ozs7QUNMVCxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztJQUVNdUIsbUI7OztBQWFGLGlDQUFZdEMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJNQUNUQSxLQURTOztBQUFBLGNBNERuQnVDLG9CQTVEbUI7QUFBQTtBQUFBOztBQUFBLGNBb0VuQnRCLGFBcEVtQjtBQUFBO0FBQUE7O0FBQUEsY0FvRm5CdUIsV0FwRm1CO0FBQUE7QUFBQTs7QUFBQSxjQTBGbkJDLE9BMUZtQjtBQUFBO0FBQUE7O0FBQUEsY0FpR25CQyxTQWpHbUI7QUFBQTtBQUFBOztBQUVmLGNBQUtULEtBQUwsR0FBYTtBQUNUVSx3QkFBWSxLQURIO0FBRVQxQyxrQkFBTSxFQUZHO0FBR1QyQywwQkFBYztBQUhMLFNBQWI7QUFGZTtBQU9sQjs7OzswQ0FFaUI7QUFBQTs7QUFDZCxtQkFBTztBQUNIO0FBQ0F4QixvQ0FBb0I7QUFDaEJHLGtDQUFjLHNCQUFDc0IsUUFBRCxFQUFjO0FBQ3hCLDRCQUFNQyxRQUFRRCxTQUFTMUMsR0FBVCxDQUFhLFVBQUM0QyxJQUFELEVBQVU7QUFDakMsZ0NBQUlBLEtBQUtDLFdBQUwsS0FBcUJDLEtBQXpCLEVBQWdDO0FBQzVCLG9DQUFJRixLQUFLRyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CLDJDQUFPLEVBQUVDLE1BQU0sT0FBUixFQUFpQkMsU0FBU0wsS0FBSyxDQUFMLENBQTFCLEVBQVA7QUFDSCxpQ0FGRCxNQUVPLElBQUlBLEtBQUtHLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDMUIsd0NBQUssT0FBT0gsS0FBSyxDQUFMLENBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDL0IsK0NBQU8sRUFBRUksTUFBTSxNQUFSLEVBQWdCQyxTQUFTTCxLQUFLLENBQUwsQ0FBekIsRUFBa0NNLElBQUlOLEtBQUssQ0FBTCxDQUF0QyxFQUFQO0FBQ0gscUNBRkQsTUFFTyxJQUFJLE9BQU9BLEtBQUssQ0FBTCxDQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ3RDLCtDQUFPLEVBQUVJLE1BQU0sUUFBUixFQUFrQkMsU0FBU0wsS0FBSyxDQUFMLENBQTNCLEVBQW9DTixTQUFTTSxLQUFLLENBQUwsQ0FBN0MsRUFBUDtBQUNIO0FBQ0RuQixvQ0FBQSxpREFBQUEsQ0FBVSxLQUFWLDhFQUEyRm1CLEtBQUssQ0FBTCxDQUEzRjtBQUNILGlDQVBNLE1BT0E7QUFDSG5CLG9DQUFBLGlEQUFBQSxDQUFVLEtBQVYsOERBQTJFbUIsS0FBS0csTUFBaEY7QUFDSDtBQUNKO0FBQ0Q7QUFDQSxtQ0FBT0gsSUFBUDtBQUNILHlCQWpCYSxDQUFkO0FBa0JBO0FBQ0ExQixnQ0FBUUMsR0FBUixDQUFZLE9BQUtXLEtBQUwsQ0FBV2hDLElBQXZCO0FBQ0EsK0JBQUtxRCxRQUFMLENBQWM7QUFDVnJELGtDQUFPLE9BQUtnQyxLQUFMLENBQVdoQyxJQUFYLENBQWdCaUQsTUFBakIsNkZBQStCLE9BQUtqQixLQUFMLENBQVdoQyxJQUExQyxJQUFnRCxFQUFFa0QsTUFBTSxXQUFSLEVBQWhELG1GQUEwRUwsS0FBMUUsS0FBbUZBO0FBRC9FLHlCQUFkO0FBR0gscUJBekJlO0FBMEJoQkosK0JBQVcsS0FBS0E7QUExQkE7QUFGakIsYUFBUDtBQStCSDs7OzRDQUVtQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLbEIsV0FBTCxDQUFpQkssZ0JBQWpCLENBQWtDLGFBQWxDLEVBQWlELEtBQUtVLG9CQUF0RCxFQUE0RSxJQUE1RTtBQUNBO0FBQ0EsaUJBQUtmLFdBQUwsQ0FBaUJLLGdCQUFqQixDQUFrQyxhQUFsQyxFQUFpRCxLQUFLWixhQUF0RDtBQUNIOzs7K0NBRXNCO0FBQ25CLGdCQUFJLEtBQUtPLFdBQVQsRUFBc0I7QUFDbEIscUJBQUtBLFdBQUwsQ0FBaUJPLG1CQUFqQixDQUFxQyxhQUFyQyxFQUFvRCxLQUFLZCxhQUF6RDtBQUNBLHFCQUFLTyxXQUFMLENBQWlCTyxtQkFBakIsQ0FBcUMsYUFBckMsRUFBb0QsS0FBS1Esb0JBQXpELEVBQStFLElBQS9FO0FBQ0g7QUFDSjs7O3FFQUU0QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQUtlLFFBQUwsQ0FBYztBQUNWckQsc0JBQU07QUFESSxhQUFkO0FBR0g7Ozs0REFFZ0JzRCxLLEVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsZ0JBQUksS0FBS3RCLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JpRCxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUM5QixxQkFBS1IsU0FBTDtBQUNILGFBRkQsTUFFTztBQUNIYSxzQkFBTUMsY0FBTjtBQUNBRCxzQkFBTUUsZUFBTjtBQUNBLHFCQUFLSCxRQUFMLENBQWM7QUFDVlgsZ0NBQVksSUFERjtBQUVWQyxrQ0FBYyxFQUFFaEMsR0FBRzJDLE1BQU1HLE9BQVgsRUFBb0I1QyxHQUFHeUMsTUFBTUksT0FBN0I7QUFGSixpQkFBZDtBQUlIO0FBQ0o7OzswREFFY0osSyxFQUFVO0FBQ3JCO0FBQ0E7QUFDQUEsa0JBQU1FLGVBQU47QUFDSDs7O3dEQUVlO0FBQ1o7QUFDQSxnQkFBSSxLQUFLeEIsS0FBTCxDQUFXVSxVQUFmLEVBQTJCO0FBQ3ZCLHFCQUFLRCxTQUFMO0FBQ0g7QUFDSjs7OzBEQUVpQjtBQUNkLGlCQUFLWSxRQUFMLENBQWM7QUFDVlgsNEJBQVksS0FERjtBQUVWMUMsc0JBQU0sRUFGSTtBQUdWMkMsOEJBQWM7QUFISixhQUFkO0FBS0g7OztxQ0FFWTtBQUNULG1CQUNJO0FBQUMsZ0ZBQUQ7QUFBQSxrQkFBZ0IsVUFBVSxLQUFLWCxLQUFMLENBQVdXLFlBQXJDO0FBQ0ksNEVBQUMsNkRBQUQsSUFBYSxTQUFTLEtBQUtKLFdBQTNCLEVBQXdDLE1BQU0sS0FBS1AsS0FBTCxDQUFXaEMsSUFBekQ7QUFESixhQURKO0FBS0g7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLDJCQUFPLHlEQUFBUSxDQUFPbUQsS0FEbEI7QUFFSSx5QkFBSyxhQUFDQyxJQUFELEVBQVM7QUFBRSwrQkFBS3JDLFdBQUwsR0FBbUJxQyxJQUFuQjtBQUF5QixxQkFGN0M7QUFHSSw2QkFBUyxLQUFLcEI7QUFIbEI7QUFLSyxxQkFBS3pDLEtBQUwsQ0FBV00sUUFMaEI7QUFNSyxxQkFBSzJCLEtBQUwsQ0FBV1UsVUFBWCxHQUF3QixLQUFLbUIsVUFBTCxFQUF4QixHQUE0QztBQU5qRCxhQURKO0FBVUg7Ozs7RUF6STZCLGdEOztBQUE1QnhCLG1CLENBRUt5QixTLEdBQVk7QUFDZnpELGNBQVUsa0RBQUE2QixDQUFVNkIsU0FBVixDQUFvQixDQUFDLGtEQUFBN0IsQ0FBVThCLElBQVgsQ0FBcEIsRUFBc0NDO0FBRGpDLEM7QUFGakI1QixtQixDQU1LNkIsaUIsR0FBb0I7QUFDdkIvQyx3QkFBb0IsNkNBQUFnRCxDQUFNakMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0I7QUFDdENiLHNCQUFjLDZDQUFBNkMsQ0FBTWpDLFNBQU4sQ0FBZ0JFLElBRFE7QUFFdENLLG1CQUFXLDZDQUFBMEIsQ0FBTWpDLFNBQU4sQ0FBZ0JFO0FBRlcsS0FBdEI7QUFERyxDO2VBdUloQkMsbUI7OztBQUFmOzs7Ozs7OztrQ0E3SU1BLG1COzs7Ozs7Ozs7OztBQ1JOLG9FOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O2VBRWU7QUFBQSxRQUFHaEMsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBZ0JKLE1BQWhCOztBQUFBLFdBQ1g7QUFBQTtBQUFBLGdGQUFJLE9BQU8sd0RBQUFPLENBQU9SLElBQWxCLEVBQXdCLE1BQUssTUFBN0IsSUFBd0NDLE1BQXhDO0FBQ0tJO0FBREwsS0FEVztBQUFBLEM7O0FBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU0rRCxlOzs7QUFrQkYsNkJBQVlyRSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbU1BQ1RBLEtBRFM7O0FBQUEsY0FTbkJzRSxtQkFUbUI7QUFBQTtBQUFBOztBQUFBLGNBZW5CQyxtQkFmbUI7QUFBQTtBQUFBOztBQUFBLGNBcUJuQkMsYUFyQm1CO0FBQUE7QUFBQTs7QUFFZixjQUFLdkMsS0FBTCxHQUFhO0FBQ1R3Qyw0QkFBZ0I7QUFEUCxTQUFiO0FBRmU7QUFLbEI7O0FBRUQ7Ozs7b0VBRTRCO0FBQ3hCLGlCQUFLbkIsUUFBTCxDQUFjO0FBQ1ZtQixnQ0FBZ0I7QUFETixhQUFkO0FBR0g7OztvRUFFMkI7QUFDeEIsaUJBQUtuQixRQUFMLENBQWM7QUFDVm1CLGdDQUFnQjtBQUROLGFBQWQ7QUFHSDs7OzREQUVnQmxCLEssRUFBVTtBQUN2QjtBQUNBO0FBQ0EsZ0JBQUksS0FBS3ZELEtBQUwsQ0FBV3lDLE9BQWYsRUFBd0I7QUFDcEI7QUFDQSxxQkFBS3pDLEtBQUwsQ0FBV3lDLE9BQVgsQ0FBbUJjLEtBQW5CO0FBQ0g7QUFDRDtBQUNBLGlCQUFLdkQsS0FBTCxDQUFXMEUsV0FBWDtBQUNIOzs7NkNBRW9CO0FBQUEseUJBQ2dELEtBQUsxRSxLQURyRDtBQUFBLGdCQUNUbUQsSUFEUyxVQUNUQSxJQURTO0FBQUEsZ0JBQ0hDLE9BREcsVUFDSEEsT0FERztBQUFBLGdCQUNNWCxPQUROLFVBQ01BLE9BRE47QUFBQSxnQkFDZWlDLFdBRGYsVUFDZUEsV0FEZjtBQUFBLGdCQUM0QnpFLElBRDVCLFVBQzRCQSxJQUQ1QjtBQUFBLGdCQUNxQ0MsTUFEckM7O0FBRWpCLG9CQUFRLEtBQUtGLEtBQUwsQ0FBV21ELElBQW5CO0FBQ0EscUJBQUssT0FBTDtBQUNJLDJCQUFPO0FBQUMsdUZBQUQ7QUFBa0JqRCw4QkFBbEI7QUFBMkJrRDtBQUEzQixxQkFBUDtBQUNKLHFCQUFLLFdBQUw7QUFDSSwyQkFBTyw0REFBQyxtRUFBRCxFQUFzQmxELE1BQXRCLENBQVA7QUFDSixxQkFBSyxTQUFMO0FBQ0k7QUFDQSwyQkFDSTtBQUFDLHdGQUFEO0FBQUEsZ0dBQWdCLE1BQU1ELElBQXRCLEVBQTRCLGFBQWF5RSxXQUF6QyxJQUEwRHhFLE1BQTFEO0FBQ0trRDtBQURMLHFCQURKO0FBS0oscUJBQUssTUFBTDtBQUNJLDJCQUNJO0FBQUMsc0ZBQUQ7QUFBQSxrR0FBaUJsRCxNQUFqQixJQUF5QixTQUFTLEtBQUtzRSxhQUF2QztBQUNLLDZCQUFLeEUsS0FBTCxDQUFXb0Q7QUFEaEIscUJBREo7QUFJSixxQkFBSyxRQUFMO0FBQ0E7QUFDSSwyQkFDSTtBQUFDLHVGQUFEO0FBQUEsa0dBQW1CbEQsTUFBbkIsSUFBMkIsU0FBUyxLQUFLc0UsYUFBekM7QUFDS3BCO0FBREwscUJBREo7QUFuQko7QUF5Qkg7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUMsOEVBQUQ7QUFBQTtBQUNLLHFCQUFLdUIsa0JBQUw7QUFETCxhQURKO0FBS0g7Ozs7RUFyRnlCLGdEOztBQUF4Qk4sZSxDQUVLTixTLEdBQVk7QUFDZlosVUFBTSxrREFBQWhCLENBQVV5QyxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEIsV0FBNUIsRUFBeUMsU0FBekMsQ0FBaEIsQ0FEUztBQUVmeEIsYUFBUyxrREFBQWpCLENBQVU4QixJQUZKO0FBR2Z4QixhQUFTLGtEQUFBTixDQUFVRSxJQUhKO0FBSWZxQyxpQkFBYSxrREFBQXZDLENBQVVFLElBSlI7QUFLZnBDLFVBQU0sa0RBQUFrQyxDQUFVMEMsT0FBVixDQUFrQixrREFBQTFDLENBQVUyQyxNQUE1QjtBQUxTLEM7QUFGakJULGUsQ0FVS1UsWSxHQUFlO0FBQ2xCNUIsVUFBTSxPQURZO0FBRWxCQyxhQUFTLElBRlM7QUFHbEJYLGFBQVMsSUFIUztBQUlsQmlDLGlCQUFhLElBSks7QUFLbEJ6RSxVQUFNO0FBTFksQztlQStFWG9FLGU7OztBQUFmOzs7Ozs7OztrQ0F6Rk1BLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWE47O0FBRUE7QUFDQTtBQUNBOztJQUVNVyxjOzs7Ozs7Ozs7OztpQ0FFTztBQUFBLHlCQUNxQixLQUFLaEYsS0FEMUI7QUFBQSxnQkFDR0MsSUFESCxVQUNHQSxJQURIO0FBQUEsZ0JBQ1N3QyxPQURULFVBQ1NBLE9BRFQ7O0FBRUwsbUJBQ0k7QUFBQyxnRkFBRDtBQUFBO0FBQ0sscUJBQUt6QyxLQUFMLENBQVdvRCxPQURoQjtBQUVLLHFCQUFLbkIsS0FBTCxDQUFXd0MsY0FBWCxHQUNHO0FBQUMsb0ZBQUQ7QUFBQSxzQkFBZ0IsVUFBVSxLQUFLekUsS0FBTCxDQUFXTyxRQUFyQztBQUNJLGdGQUFDLDZEQUFELElBQWEsTUFBTU4sSUFBbkIsRUFBeUIsU0FBU3dDLE9BQWxDO0FBREosaUJBREgsR0FJRztBQU5SLGFBREo7QUFVSDtBQUNEOzs7Ozs7Ozs7RUFmeUIsZ0Q7O2VBdUJkdUMsYzs7O0FBQWY7Ozs7Ozs7O2tDQXZCTUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05OO0FBQ0E7O0FBRUE7O2VBQ2U7QUFBQSxRQUFHMUUsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBYW1DLE9BQWIsUUFBYUEsT0FBYjtBQUFBLFFBQXlCdkMsTUFBekI7O0FBQUEsV0FDWDtBQUFBO0FBQUEsZ0ZBQUssT0FBTyx3REFBQU8sQ0FBT3dFLE9BQW5CLElBQWdDL0UsTUFBaEM7QUFDSyxjQUFLRixLQUFMLENBQVdNO0FBRGhCLEtBRFc7QUFBQSxDOztBQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7O2VBRWU7QUFBQSxRQUFHQSxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFnQkosTUFBaEI7O0FBQUEsV0FDWDtBQUFBO0FBQUEsZ0ZBQVEsT0FBTyx3REFBQU8sQ0FBT3lFLE1BQXRCLElBQWtDaEYsTUFBbEM7QUFBMkNJO0FBQTNDLEtBRFc7QUFBQSxDOztBQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7ZUFFZTtBQUFBLE1BQUdBLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCSixNQUFoQjs7QUFBQSxTQUE2QjtBQUFBO0FBQUEsNEVBQUksT0FBTyx3REFBQU8sQ0FBTzBFLEtBQWxCLElBQTZCakYsTUFBN0I7QUFBc0NJO0FBQXRDLEdBQTdCO0FBQUEsQzs7QUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O2VBRWU7QUFBQSxNQUFHQSxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFnQkosTUFBaEI7O0FBQUEsU0FBNkI7QUFBQywwREFBRDtBQUFBLDRFQUFNLE9BQU8sd0RBQUFPLENBQU8yRSxJQUFwQixJQUE4QmxGLE1BQTlCO0FBQXVDSTtBQUF2QyxHQUE3QjtBQUFBLEM7O0FBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7ZUFFZTtBQUFBLE1BQU1KLE1BQU47O0FBQUEsU0FBbUIsMElBQUksT0FBTyx3REFBQU8sQ0FBTzRFLFNBQWxCLElBQWlDbkYsTUFBakMsRUFBbkI7QUFBQSxDOztBQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7ZUFFZTtBQUFBLFFBQUdJLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWdCSixNQUFoQjs7QUFBQSxXQUNYO0FBQUE7QUFBQSxnRkFBSSxPQUFPLHdEQUFBTyxDQUFPc0MsSUFBbEIsSUFBNEI3QyxNQUE1QjtBQUNLSTtBQURMLEtBRFc7QUFBQSxDOztBQUFmIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwiaW52YXJpYW50XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpLCByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiwgXCJwcm9wLXR5cGVzXCIsIFwiaW52YXJpYW50XCIsIFwicmVhY3QtZG9tXCIsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcImludmFyaWFudFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSwgcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIikpIDogZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiXSwgcm9vdFtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiXSwgcm9vdFtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiXSwgcm9vdFtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiXSwgcm9vdFtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCJdLCByb290W1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCJdLCByb290W1wicHJvcC10eXBlc1wiXSwgcm9vdFtcImludmFyaWFudFwiXSwgcm9vdFtcInJlYWN0LWRvbVwiXSwgcm9vdFtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiXSwgcm9vdFtcInJlYWN0LXJvdXRlci1kb21cIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWE2MDY5NjFmNjViNmM2ZThhMjAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiLmxheWVyXCI6e1wid2lkdGhcIjpcIjEwMCVcIixcImhlaWdodFwiOlwiMTAwJVwifSxcIi5jb250YWluZXJcIjp7XCJwb3NpdGlvblwiOlwiYWJzb2x1dGVcIixcImxlZnRcIjpcIjBcIixcInRvcFwiOlwiMFwifSxcIi5tZW51XCI6e1wiZGlzcGxheVwiOlwiZmxleFwiLFwid2Via2l0Qm94T3JpZW50XCI6XCJ2ZXJ0aWNhbFwiLFwid2Via2l0Qm94RGlyZWN0aW9uXCI6XCJub3JtYWxcIixcIm1zRmxleERpcmVjdGlvblwiOlwidmVydGljYWxcIixcImZsZXhEaXJlY3Rpb25cIjpcInZlcnRpY2FsXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiNlZWVcIn0sXCIuaXRlbVwiOntcImJhY2tncm91bmRcIjpcImxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsI2U1ZTVlNSAxMDAlKVwiLFwibGlzdFN0eWxlVHlwZVwiOlwibm9uZVwifSxcIi5pdGVtLXNlbGVjdGVkXCI6e30sXCIubGFiZWxcIjp7XCJmb250V2VpZ2h0XCI6XCJib2xkXCJ9LFwiLmJ1dHRvblwiOntcImJvcmRlclwiOlwibm9uZVwifSxcIi5saW5rXCI6e30sXCIuc3VibWVudVwiOnt9fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9zdHlsZXMvbWVudS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW52YXJpYW50XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTWVudVdyYXBwZXIgZnJvbSBcIi4vTWVudVdyYXBwZXJcIjtcbmltcG9ydCBDb250ZXh0TWVudUl0ZW0gZnJvbSBcIi4vQ29udGV4dE1lbnVJdGVtXCI7XG5cbmNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtZW51LCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudVdyYXBwZXIgey4uLm90aGVyc30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVudS5tYXAoKG1lbnVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBOb3QgcmVhbGx5IGFueXRoaW5nIGJldHRlciB0byB1c2UgZm9yIGEga2V5LFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgY291bGQgYWxsb3cga2V5IGFzIGFuIG9wdGlvbmFsIHByb3AsIG5vdCBhIGxvdCBvZlxuICAgICAgICAgICAgICAgICAgICAvLyBwb2ludCBpbiB0aGlzIGNhc2UgdGhvdWdoLi4uLlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZXh0TWVudUl0ZW0ga2V5PXtpbmRleH0gey4uLm1lbnVJdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9NZW51V3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dE1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvQ29udGV4dE1lbnUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHBvc2l0aW9uLCAuLi5vdGhlcnMgfSkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAuLi5zdHlsZXMuY29udGFpbmVyLFxuICAgICAgICBsZWZ0OiBgJHtwb3NpdGlvbi54fXB4YCxcbiAgICAgICAgdG9wOiBgJHtwb3NpdGlvbi55fXB4YCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBzdHlsZT17c3R5bGV9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L25hdj5cbiAgICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9PdXRlckNvbnRhaW5lci5qc3giLCJpbXBvcnQgQ29udGV4dE1lbnVDb25uZWN0IGZyb20gXCIuL0NvbnRleHRNZW51Q29ubmVjdFwiO1xuaW1wb3J0IENvbnRleHRNZW51UHJvdmlkZXIgZnJvbSBcIi4vQ29udGV4dE1lbnVQcm92aWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudUNvbm5lY3Q7XG5leHBvcnQgeyBDb250ZXh0TWVudUNvbm5lY3QgYXMgY29udGV4dE1lbnUsIENvbnRleHRNZW51UHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJpbnZhcmlhbnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuZnVuY3Rpb24gbWFrZUNvbXBvbmVudFdyYXBwZXIoYnVpbGRNZW51KSB7XG4gICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQgPT4gKFxuICAgICAgICBjbGFzcyBDb250ZXh0TWVudUNvbm5lY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51Q29udGV4dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTWVudUl0ZW1zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwZW5kQ29udGV4dE1lbnUoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxJdGVtcyA9IGJ1aWxkTWVudSh0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0LmNvbnRleHRNZW51Q29udGV4dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFkZE1lbnVJdGVtcyhsb2NhbEl0ZW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0Tm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuaW5uZXJOb2RlKTtcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQodGhpcy5uZWFyZXN0Tm9kZSwgXCJDb3VsZCBub3QgZmluZCBhIERPTSBub2RlIHRvIGF0dGFjaCBjb250ZXh0TWVudSB0b1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB0aGlzLm9uQ29udGV4dE1lbnUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvbkNvbnRleHRNZW51ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgd2lsbCBiZSBwcmV2ZW50ZWQgYnkgdGhlIENvbnRleHRNZW51UHJvdmlkZXIsIGFmdGVyIHRoZSBldmVudCBidWJibGVzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyIG5vZGVzIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIGNhcHR1cmUuIEFsbCB3ZSBuZWVkIHRvIGRvIGhlcmUgaXNcbiAgICAgICAgICAgICAgICAvLyBidWlsZCB0aGUgbWVudS5cbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRleHRNZW51KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5lYXJlc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMub25Db250ZXh0TWVudSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7IHRoaXMuaW5uZXJOb2RlID0gZWw7IH19XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb21wb25lbnRXcmFwcGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL0NvbnRleHRNZW51Q29ubmVjdC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwiaW52YXJpYW50XCI7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcbmltcG9ydCBPdXRlckNvbnRhaW5lciBmcm9tIFwiLi9PdXRlckNvbnRhaW5lclwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuXG5jbGFzcyBDb250ZXh0TWVudVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZV0pLmlzUmVxdWlyZWQsXG4gICAgfVxuXG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICBjb250ZXh0TWVudUNvbnRleHQ6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBhZGRNZW51SXRlbXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICAgICAgY2xvc2VNZW51OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgfSksXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVudUlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBtZW51OiBbXSxcbiAgICAgICAgICAgIG1lbnVQb3NpdGlvbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBIb3JyaWJsZSBweXJhbWlkIGFwcHJvYWNoaW5nLCByZWZhY3RvciB0aGlzXG4gICAgICAgICAgICBjb250ZXh0TWVudUNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBhZGRNZW51SXRlbXM6IChyYXdJdGVtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IHJhd0l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwibGFiZWxcIiwgY29udGVudDogaXRlbVswXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgaXRlbVsxXSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwibGlua1wiLCBjb250ZW50OiBpdGVtWzBdLCB0bzogaXRlbVsxXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtWzFdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IGl0ZW1bMF0sIG9uQ2xpY2s6IGl0ZW1bMV0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIGBTZWNvbmQgZWxlbWVudCBvZiBtZW51IGl0ZW0gYXJyYXkgc2hvdWxkIGJlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLCBnb3Q6ICR7aXRlbVsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIGBNZW51IGl0ZW0gYXJyYXkgY2FuIGhhdmUgMSBvciAyIGVsZW1lbnRzLCB0aGlzIG9uZSBoYWQgJHtpdGVtLmxlbmd0aH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBWYWxpZGF0ZSB0aGlzIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlbXMgZnVydGhlciBkb3duIHRoZSBET00gdHJlZSBnZXQgaW5zZXJ0ZWQgaW4gZnJvbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tZW51KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51OiAodGhpcy5zdGF0ZS5tZW51Lmxlbmd0aCkgPyBbLi4udGhpcy5zdGF0ZS5tZW51LCB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSwgLi4uaXRlbXNdIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2VNZW51OiB0aGlzLmNsb3NlTWVudSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHRoaXMubmVhcmVzdE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmlubmVyTm9kZSk7XG4gICAgICAgIC8vIGludmFyaWFudCh0aGlzLm5lYXJlc3ROb2RlLCAnQ291bGQgbm90IGZpbmQgYSBET00gbm9kZSB0byBhdHRhY2hcbiAgICAgICAgLy8gQ29udGV4dE1lbnVQcm92aWRlciB0bycpO1xuICAgICAgICAvLyBDYXB0dXJlIHRoZSBldmVudCBhdCB0aGUgaGlnaGVzdCBsZXZlbCB0byBpbml0aWFsaXNlIHRoZSBhcnJheVxuICAgICAgICB0aGlzLm5lYXJlc3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB0aGlzLm9uQ29udGV4dE1lbnVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgLy8gQ2F0Y2ggdGhlIGV2ZW50IGFnYWluIG9uIHRoZSB3YXkgYmFjayB1cCBvbmNlIHRoZSBjb250ZXh0IGlzIHBvcHVsYXRlZFxuICAgICAgICB0aGlzLm5lYXJlc3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB0aGlzLm9uQ29udGV4dE1lbnUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5uZWFyZXN0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5uZWFyZXN0Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgdGhpcy5vbkNvbnRleHRNZW51KTtcbiAgICAgICAgICAgIHRoaXMubmVhcmVzdE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMub25Db250ZXh0TWVudUNhcHR1cmUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db250ZXh0TWVudUNhcHR1cmUgPSAoKSA9PiB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBtZW51IGJlZm9yZSB0aGUgJ2NhcHR1cmUnIHBoYXNlIC0gaXQgd2lsbCBnZXQgZmlsbGVkIHVwIHdoZW4gdGhlIGV2ZW50IHRyYXZlbHNcbiAgICAgICAgLy8gZG93biBhbmQgdGhlbiBiYWNrIHVwIHRoZSBET00gdHJlZS5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtZW51OiBbXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Db250ZXh0TWVudSA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBUaGUgbWVudSBzaG91bGQgaGF2ZSBhbHJlYWR5IGJlZW4gYnVpbHQgdXAgdmlhIHRoZSBjb250ZXh0IGhhbmRsZXIgd2hpbGUgdGhlIGV2ZW50IHdhc1xuICAgICAgICAvLyBidWJibGluZyB1cC4gSWYgdGhlIG1lbnUgd2FzIGVtcHR5IHRoZW4gaXQncyBwb3NzaWJsZSB0aGUgdXNlciByaWdodC1jbGlja2VkIG9uIHNvbWV0aGluZ1xuICAgICAgICAvLyB0aGF0IHdhc24ndCBjb250ZXh0IG1lbnUgY29ubmVjdGVkLCB0aGVyZWZvcmUgd2UgbmVlZCB0byBjbG9zZSB0aGUgbWVudS5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtZW51SXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lbnVQb3NpdGlvbjogeyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWVudUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFByZXZlbnQgY2xpY2tzIGZyb20gdGhlIG1lbnUgcHJvcGFnYXRpbmcgdXAgdG8gdGhlIG9uQ2xpY2sgaGFuZGxlciwgc28gdGhleSBkb24ndFxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlIG1lbnUgY2xvc2luZ1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAvLyBBbiBvcmRpbmFyeSBjbGljayB0aGF0IHdhc24ndCBvbiBvdXIgbWVudSBvciBhIHJpZ2h0LWNsaWNrIHNob3VsZCBqdXN0IGNsb3NlIHRoZSBtZW51XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVudUlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBtZW51OiBbXSxcbiAgICAgICAgICAgIG1lbnVQb3NpdGlvbjogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxPdXRlckNvbnRhaW5lciBwb3NpdGlvbj17dGhpcy5zdGF0ZS5tZW51UG9zaXRpb259PlxuICAgICAgICAgICAgICAgIDxDb250ZXh0TWVudSBvbkNsaWNrPXt0aGlzLm9uTWVudUNsaWNrfSBtZW51PXt0aGlzLnN0YXRlLm1lbnV9IC8+XG4gICAgICAgICAgICA8L091dGVyQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxheWVyfVxuICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4geyB0aGlzLm5lYXJlc3ROb2RlID0gcmVmOyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51SXNPcGVuID8gdGhpcy5yZW5kZXJNZW51KCkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51UHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvQ29udGV4dE1lbnVQcm92aWRlci5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIC4uLm90aGVycyB9KSA9PiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZXMubWVudX0gcm9sZT1cIm1lbnVcIiB7Li4ub3RoZXJzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL01lbnVXcmFwcGVyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IENvbnRleHRTdWJtZW51IGZyb20gXCIuL0NvbnRleHRTdWJtZW51XCI7XG5cbmltcG9ydCBCdXR0b25FbGVtZW50IGZyb20gXCIuL0J1dHRvbkVsZW1lbnRcIjtcbmltcG9ydCBMYWJlbEVsZW1lbnQgZnJvbSBcIi4vTGFiZWxFbGVtZW50XCI7XG5pbXBvcnQgTGlua0VsZW1lbnQgZnJvbSBcIi4vTGlua0VsZW1lbnRcIjtcbmltcG9ydCBTZXBhcmF0b3JFbGVtZW50IGZyb20gXCIuL1NlcGFyYXRvckVsZW1lbnRcIjtcbmltcG9ydCBJdGVtV3JhcHBlciBmcm9tIFwiLi9JdGVtV3JhcHBlclwiO1xuXG5jbGFzcyBDb250ZXh0TWVudUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImxhYmVsXCIsIFwiYnV0dG9uXCIsIFwibGlua1wiLCBcInNlcGFyYXRvclwiLCBcInN1Ym1lbnVcIl0pLFxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uQ2xvc2VNZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWVudTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHlwZTogXCJsYWJlbFwiLFxuICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICBvbkNsaWNrOiBudWxsLFxuICAgICAgICBvbkNsb3NlTWVudTogbnVsbCxcbiAgICAgICAgbWVudTogW10sXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3VibWVudVZpc2libGU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIFRPRE86IE9uIHJlY2VpdmUgcHJvcHMgLyB3aWxsIHJlY2VpdmUgcHJvcHMsIHZlcmlmeSBjb3JyZWN0IGFjdGlvbiBpcyB0aGVyZSBlLmcuIGhhbmRsZXIvdG9cblxuICAgIG9uU3VibWVudU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWVudVZpc2libGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3VibWVudU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWVudVZpc2libGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIEZvciBsaW5rcyB0aGVyZSBpcyBubyBidXR0b24gaGFuZGxlciAoYWx0aG91Z2ggY29uc3VtZXJzXG4gICAgICAgIC8vIGNhbiBzdGlsbCBwcm92aWRlIG9uZSwgZS5nLiB0byBwcmV2ZW50RGVmYXVsdCBvciB3aGF0ZXZlcilcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGUgY2xpY2sgaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmlnZ2VyIHByb3ZpZGVyIHRvIGNsb3NlIHRoZSBtZW51XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZU1lbnUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJJbm5lckVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCwgb25DbGljaywgb25DbG9zZU1lbnUsIG1lbnUsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImxhYmVsXCI6XG4gICAgICAgICAgICByZXR1cm4gPExhYmVsRWxlbWVudCB7Li4ub3RoZXJzfT57Y29udGVudH08L0xhYmVsRWxlbWVudD47XG4gICAgICAgIGNhc2UgXCJzZXBhcmF0b3JcIjpcbiAgICAgICAgICAgIHJldHVybiA8U2VwYXJhdG9yRWxlbWVudCB7Li4ub3RoZXJzfSAvPjtcbiAgICAgICAgY2FzZSBcInN1Ym1lbnVcIjpcbiAgICAgICAgICAgIC8vIEEgYml0IG9mIGEgc3BlY2lhbCBjYXNlXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb250ZXh0U3VibWVudSBtZW51PXttZW51fSBvbkNsb3NlTWVudT17b25DbG9zZU1lbnV9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICA8L0NvbnRleHRTdWJtZW51PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgY2FzZSBcImxpbmtcIjpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtFbGVtZW50IHsuLi5vdGhlcnN9IG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9MaW5rRWxlbWVudD4pO1xuICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b25FbGVtZW50IHsuLi5vdGhlcnN9IG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uRWxlbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SXRlbVdyYXBwZXI+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5uZXJFbGVtZW50KCl9XG4gICAgICAgICAgICA8L0l0ZW1XcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudUl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvQ29udGV4dE1lbnVJdGVtLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFN1Ym1lbnVFbGVtZW50IGZyb20gXCIuL1N1Ym1lbnVFbGVtZW50XCI7XG5pbXBvcnQgT3V0ZXJDb250YWluZXIgZnJvbSBcIi4vT3V0ZXJDb250YWluZXJcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuXG5jbGFzcyBDb250ZXh0U3VibWVudSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbWVudSwgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdWJtZW51RWxlbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Ym1lbnVWaXNpYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8T3V0ZXJDb250YWluZXIgcG9zaXRpb249e3RoaXMucHJvcHMucG9zaXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRleHRNZW51IG1lbnU9e21lbnV9IG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvT3V0ZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L1N1Ym1lbnVFbGVtZW50PlxuICAgICAgICApO1xuICAgIH1cbiAgICAvKlxuICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17dGhpcy5vblN1Ym1lbnVNb3VzZUVudGVyfVxuICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLm9uU3VibWVudU1vdXNlTGVhdmV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8L2Rpdj5cbiAgICAqL1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRTdWJtZW51O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL0NvbnRleHRTdWJtZW51LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL21lbnUuY3NzXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgb25DbGljaywgLi4ub3RoZXJzIH0pID0+IChcbiAgICA8bmF2IHN0eWxlPXtzdHlsZXMuc3VibWVudX0gey4uLm90aGVyc30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgIDwvbmF2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9TdWJtZW51RWxlbWVudC5qc3giLCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL21lbnUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkgPT5cbiAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9idXR0b24+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL0J1dHRvbkVsZW1lbnQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIC4uLm90aGVycyB9KSA9PiA8aDIgc3R5bGU9e3N0eWxlcy5sYWJlbH0gey4uLm90aGVyc30+e2NoaWxkcmVufTwvaDI+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL0xhYmVsRWxlbWVudC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuLy8gVE9ETzogQnkgZGVmYXVsdCByZW5kZXIgYSBwbGFpbiA8YT4gdGFnLiBDb25zdW1lcnMgY2FuIHBhc3MgaW4gcmVhY3QtZG9tLXJvdXRlcidzXG4vLyBMaW5rIGlmIHRoZXkgd2FudC4gQ291bGQgZXhwb3J0IHRoZSBkZWZhdWx0IHN0eWxlcyB0byB1c2UgdGhlbSBvbiByZWFjdC1kb20tcm91dGVyP1xuLy8gT3IgcGFzcyB0aGVtIGFsbCBpbiBmcm9tIHRoZSB0b3A/XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkgPT4gPExpbmsgc3R5bGU9e3N0eWxlcy5saW5rfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9MaW5rPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9MaW5rRWxlbWVudC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyAuLi5vdGhlcnMgfSkgPT4gPGhyIHN0eWxlPXtzdHlsZXMuc2VwYXJhdG9yfSB7Li4ub3RoZXJzfSAvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9TZXBhcmF0b3JFbGVtZW50LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL21lbnUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkgPT4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGVzLml0ZW19IHsuLi5vdGhlcnN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvSXRlbVdyYXBwZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==