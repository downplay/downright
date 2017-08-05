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
                onMenuClick = _props.onMenuClick,
                others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["menu", "onMenuClick"]);

            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__MenuWrapper__["a" /* default */],
                others,
                this.props.menu.map(function (menuItem, index) {
                    return (
                        // TODO: Not really anything better to use for a key,
                        // but could allow key as an optional prop, not a lot of
                        // point in this case though....
                        // eslint-disable-next-line react/no-array-index-key
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ContextMenuItem__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ key: index, onMenuClick: onMenuClick }, menuItem))
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
        key: "__closeMenu__REACT_HOT_LOADER__",
        value: function __closeMenu__REACT_HOT_LOADER__() {
            // An ordinary click that wasn't on our menu or a right-click should just close the menu
            if (this.state.menuIsOpen) {
                this.setState({
                    menuIsOpen: false,
                    menu: [],
                    menuPosition: null
                });
            }
        }
    }, {
        key: "renderMenu",
        value: function renderMenu() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9__OuterContainer__["a" /* default */],
                { position: this.state.menuPosition },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ContextMenu__["a" /* default */], { onMenuClick: this.onMenuClick, menu: this.state.menu })
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
            console.log(this);
            // For links there is no button handler (although consumers
            // can still provide one, e.g. to preventDefault or whatever)
            if (this.props.onClick) {
                // Execute the click handler
                this.props.onClick(event);
            }
            // Trigger provider to close the menu
            this.props.onMenuClick(event);
        }
    }, {
        key: "renderInnerElement",
        value: function renderInnerElement() {
            var _props = this.props,
                type = _props.type,
                content = _props.content,
                onClick = _props.onClick,
                onMenuClick = _props.onMenuClick,
                menu = _props.menu,
                others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["type", "content", "onClick", "onMenuClick", "menu"]);

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
                        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ menu: menu, onMenuClick: onMenuClick }, others),
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
    onMenuClick: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
    menu: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object)
};
ContextMenuItem.defaultProps = {
    type: "label",
    content: null,
    onClick: null,
    onMenuClick: null,
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
                onMenuClick = _props.onMenuClick;

            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__SubmenuElement__["a" /* default */],
                null,
                this.props.content,
                this.state.submenuVisible ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6__OuterContainer__["a" /* default */],
                    { position: this.props.position },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ContextMenu__["a" /* default */], { menu: menu, onMenuClick: onMenuClick })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNDY5YzE0NjQzYzgxZTBlOTZkMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZhcmlhbnRcIiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvQ29udGV4dE1lbnUuanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9PdXRlckNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0TWVudUNvbm5lY3QuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0TWVudVByb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvTWVudVdyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9Db250ZXh0U3VibWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL1N1Ym1lbnVFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvQnV0dG9uRWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0xhYmVsRWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0xpbmtFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL1NlcGFyYXRvckVsZW1lbnQuanN4Iiwid2VicGFjazovLy8uL3NvdXJjZS9JdGVtV3JhcHBlci5qc3giXSwibmFtZXMiOlsiQ29udGV4dE1lbnUiLCJwcm9wcyIsIm1lbnUiLCJvbk1lbnVDbGljayIsIm90aGVycyIsIm1hcCIsIm1lbnVJdGVtIiwiaW5kZXgiLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJsZWZ0IiwieCIsInRvcCIsInkiLCJtYWtlQ29tcG9uZW50V3JhcHBlciIsImJ1aWxkTWVudSIsIm9uQ29udGV4dE1lbnUiLCJsb2NhbEl0ZW1zIiwiY29udGV4dCIsImNvbnRleHRNZW51Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhZGRNZW51SXRlbXMiLCJuZWFyZXN0Tm9kZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJpbm5lck5vZGUiLCJpbnZhcmlhbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ29udGV4dE1lbnUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWwiLCJzdGF0ZSIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiZnVuYyIsIkNvbnRleHRNZW51UHJvdmlkZXIiLCJvbkNvbnRleHRNZW51Q2FwdHVyZSIsImNsb3NlTWVudSIsIm1lbnVJc09wZW4iLCJtZW51UG9zaXRpb24iLCJyYXdJdGVtcyIsIml0ZW1zIiwiaXRlbSIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJsZW5ndGgiLCJ0eXBlIiwiY29udGVudCIsInRvIiwib25DbGljayIsInNldFN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsaWVudFgiLCJjbGllbnRZIiwibGF5ZXIiLCJyZWYiLCJyZW5kZXJNZW51IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibm9kZSIsImlzUmVxdWlyZWQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlJlYWN0IiwiQ29udGV4dE1lbnVJdGVtIiwib25TdWJtZW51TW91c2VFbnRlciIsIm9uU3VibWVudU1vdXNlTGVhdmUiLCJvbkJ1dHRvbkNsaWNrIiwic3VibWVudVZpc2libGUiLCJyZW5kZXJJbm5lckVsZW1lbnQiLCJvbmVPZiIsImFycmF5T2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJDb250ZXh0U3VibWVudSIsInN1Ym1lbnUiLCJidXR0b24iLCJsYWJlbCIsImxpbmsiLCJzZXBhcmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FB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S0FEVztBQUFBLEM7O0FBQWYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJpbnZhcmlhbnRcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiksIHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiLCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiLCBcInByb3AtdHlwZXNcIiwgXCJpbnZhcmlhbnRcIiwgXCJyZWFjdC1kb21cIiwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiwgXCJyZWFjdC1yb3V0ZXItZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiksIHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwiaW52YXJpYW50XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpLCByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpLCByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCJdLCByb290W1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCJdLCByb290W1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCJdLCByb290W1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCJdLCByb290W1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIl0sIHJvb3RbXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIl0sIHJvb3RbXCJwcm9wLXR5cGVzXCJdLCByb290W1wiaW52YXJpYW50XCJdLCByb290W1wicmVhY3QtZG9tXCJdLCByb290W1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCJdLCByb290W1wicmVhY3Qtcm91dGVyLWRvbVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNDY5YzE0NjQzYzgxZTBlOTZkMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCIubGF5ZXJcIjp7XCJ3aWR0aFwiOlwiMTAwJVwiLFwiaGVpZ2h0XCI6XCIxMDAlXCJ9LFwiLmNvbnRhaW5lclwiOntcInBvc2l0aW9uXCI6XCJhYnNvbHV0ZVwiLFwibGVmdFwiOlwiMFwiLFwidG9wXCI6XCIwXCJ9LFwiLm1lbnVcIjp7XCJkaXNwbGF5XCI6XCJmbGV4XCIsXCJ3ZWJraXRCb3hPcmllbnRcIjpcInZlcnRpY2FsXCIsXCJ3ZWJraXRCb3hEaXJlY3Rpb25cIjpcIm5vcm1hbFwiLFwibXNGbGV4RGlyZWN0aW9uXCI6XCJ2ZXJ0aWNhbFwiLFwiZmxleERpcmVjdGlvblwiOlwidmVydGljYWxcIixcImJhY2tncm91bmRDb2xvclwiOlwiI2VlZVwifSxcIi5pdGVtXCI6e1wiYmFja2dyb3VuZFwiOlwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwjZTVlNWU1IDEwMCUpXCIsXCJsaXN0U3R5bGVUeXBlXCI6XCJub25lXCJ9LFwiLml0ZW0tc2VsZWN0ZWRcIjp7fSxcIi5sYWJlbFwiOntcImZvbnRXZWlnaHRcIjpcImJvbGRcIn0sXCIuYnV0dG9uXCI6e1wiYm9yZGVyXCI6XCJub25lXCJ9LFwiLmxpbmtcIjp7fSxcIi5zdWJtZW51XCI6e319O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL3N0eWxlcy9tZW51LmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbnZhcmlhbnRcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNZW51V3JhcHBlciBmcm9tIFwiLi9NZW51V3JhcHBlclwiO1xuaW1wb3J0IENvbnRleHRNZW51SXRlbSBmcm9tIFwiLi9Db250ZXh0TWVudUl0ZW1cIjtcblxuY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG1lbnUsIG9uTWVudUNsaWNrLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudVdyYXBwZXIgey4uLm90aGVyc30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVudS5tYXAoKG1lbnVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBOb3QgcmVhbGx5IGFueXRoaW5nIGJldHRlciB0byB1c2UgZm9yIGEga2V5LFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgY291bGQgYWxsb3cga2V5IGFzIGFuIG9wdGlvbmFsIHByb3AsIG5vdCBhIGxvdCBvZlxuICAgICAgICAgICAgICAgICAgICAvLyBwb2ludCBpbiB0aGlzIGNhc2UgdGhvdWdoLi4uLlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZXh0TWVudUl0ZW0ga2V5PXtpbmRleH0gb25NZW51Q2xpY2s9e29uTWVudUNsaWNrfSB7Li4ubWVudUl0ZW19IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01lbnVXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9Db250ZXh0TWVudS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgcG9zaXRpb24sIC4uLm90aGVycyB9KSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC4uLnN0eWxlcy5jb250YWluZXIsXG4gICAgICAgIGxlZnQ6IGAke3Bvc2l0aW9uLnh9cHhgLFxuICAgICAgICB0b3A6IGAke3Bvc2l0aW9uLnl9cHhgLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IHN0eWxlPXtzdHlsZX0gey4uLm90aGVyc30+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL091dGVyQ29udGFpbmVyLmpzeCIsImltcG9ydCBDb250ZXh0TWVudUNvbm5lY3QgZnJvbSBcIi4vQ29udGV4dE1lbnVDb25uZWN0XCI7XG5pbXBvcnQgQ29udGV4dE1lbnVQcm92aWRlciBmcm9tIFwiLi9Db250ZXh0TWVudVByb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51Q29ubmVjdDtcbmV4cG9ydCB7IENvbnRleHRNZW51Q29ubmVjdCBhcyBjb250ZXh0TWVudSwgQ29udGV4dE1lbnVQcm92aWRlciB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcImludmFyaWFudFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5mdW5jdGlvbiBtYWtlQ29tcG9uZW50V3JhcHBlcihidWlsZE1lbnUpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudCA9PiAoXG4gICAgICAgIGNsYXNzIENvbnRleHRNZW51Q29ubmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAgICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnVDb250ZXh0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBhZGRNZW51SXRlbXM6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcHBlbmRDb250ZXh0TWVudSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbEl0ZW1zID0gYnVpbGRNZW51KHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQuY29udGV4dE1lbnVDb250ZXh0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsSXRlbXMpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYWRkTWVudUl0ZW1zKGxvY2FsSXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3ROb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5pbm5lck5vZGUpO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCh0aGlzLm5lYXJlc3ROb2RlLCBcIkNvdWxkIG5vdCBmaW5kIGEgRE9NIG5vZGUgdG8gYXR0YWNoIGNvbnRleHRNZW51IHRvXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMub25Db250ZXh0TWVudSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9uQ29udGV4dE1lbnUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB3aWxsIGJlIHByZXZlbnRlZCBieSB0aGUgQ29udGV4dE1lbnVQcm92aWRlciwgYWZ0ZXIgdGhlIGV2ZW50IGJ1YmJsZXMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXIgbm9kZXMgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gY2FwdHVyZS4gQWxsIHdlIG5lZWQgdG8gZG8gaGVyZSBpc1xuICAgICAgICAgICAgICAgIC8vIGJ1aWxkIHRoZSBtZW51LlxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGV4dE1lbnUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmVhcmVzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgdGhpcy5vbkNvbnRleHRNZW51KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IHsgdGhpcy5pbm5lck5vZGUgPSBlbDsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNvbXBvbmVudFdyYXBwZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvQ29udGV4dE1lbnVDb25uZWN0LmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJpbnZhcmlhbnRcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuaW1wb3J0IE91dGVyQ29udGFpbmVyIGZyb20gXCIuL091dGVyQ29udGFpbmVyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL21lbnUuY3NzXCI7XG5cbmNsYXNzIENvbnRleHRNZW51UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIGNvbnRleHRNZW51Q29udGV4dDogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGFkZE1lbnVJdGVtczogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgICAgICBjbG9zZU1lbnU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICB9KSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIG1lbnU6IFtdLFxuICAgICAgICAgICAgbWVudVBvc2l0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEhvcnJpYmxlIHB5cmFtaWQgYXBwcm9hY2hpbmcsIHJlZmFjdG9yIHRoaXNcbiAgICAgICAgICAgIGNvbnRleHRNZW51Q29udGV4dDoge1xuICAgICAgICAgICAgICAgIGFkZE1lbnVJdGVtczogKHJhd0l0ZW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcmF3SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBpdGVtWzBdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBpdGVtWzFdKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJsaW5rXCIsIGNvbnRlbnQ6IGl0ZW1bMF0sIHRvOiBpdGVtWzFdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW1bMV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJidXR0b25cIiwgY29udGVudDogaXRlbVswXSwgb25DbGljazogaXRlbVsxXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgYFNlY29uZCBlbGVtZW50IG9mIG1lbnUgaXRlbSBhcnJheSBzaG91bGQgYmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24sIGdvdDogJHtpdGVtWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgYE1lbnUgaXRlbSBhcnJheSBjYW4gaGF2ZSAxIG9yIDIgZWxlbWVudHMsIHRoaXMgb25lIGhhZCAke2l0ZW0ubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFZhbGlkYXRlIHRoaXMgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtcyBmdXJ0aGVyIGRvd24gdGhlIERPTSB0cmVlIGdldCBpbnNlcnRlZCBpbiBmcm9udFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1lbnUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnU6ICh0aGlzLnN0YXRlLm1lbnUubGVuZ3RoKSA/IFsuLi50aGlzLnN0YXRlLm1lbnUsIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LCAuLi5pdGVtc10gOiBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZU1lbnU6IHRoaXMuY2xvc2VNZW51LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy5uZWFyZXN0Tm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuaW5uZXJOb2RlKTtcbiAgICAgICAgLy8gaW52YXJpYW50KHRoaXMubmVhcmVzdE5vZGUsICdDb3VsZCBub3QgZmluZCBhIERPTSBub2RlIHRvIGF0dGFjaFxuICAgICAgICAvLyBDb250ZXh0TWVudVByb3ZpZGVyIHRvJyk7XG4gICAgICAgIC8vIENhcHR1cmUgdGhlIGV2ZW50IGF0IHRoZSBoaWdoZXN0IGxldmVsIHRvIGluaXRpYWxpc2UgdGhlIGFycmF5XG4gICAgICAgIHRoaXMubmVhcmVzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMub25Db250ZXh0TWVudUNhcHR1cmUsIHRydWUpO1xuICAgICAgICAvLyBDYXRjaCB0aGUgZXZlbnQgYWdhaW4gb24gdGhlIHdheSBiYWNrIHVwIG9uY2UgdGhlIGNvbnRleHQgaXMgcG9wdWxhdGVkXG4gICAgICAgIHRoaXMubmVhcmVzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMub25Db250ZXh0TWVudSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5lYXJlc3ROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5lYXJlc3ROb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB0aGlzLm9uQ29udGV4dE1lbnUpO1xuICAgICAgICAgICAgdGhpcy5uZWFyZXN0Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgdGhpcy5vbkNvbnRleHRNZW51Q2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbnRleHRNZW51Q2FwdHVyZSA9ICgpID0+IHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIG1lbnUgYmVmb3JlIHRoZSAnY2FwdHVyZScgcGhhc2UgLSBpdCB3aWxsIGdldCBmaWxsZWQgdXAgd2hlbiB0aGUgZXZlbnQgdHJhdmVsc1xuICAgICAgICAvLyBkb3duIGFuZCB0aGVuIGJhY2sgdXAgdGhlIERPTSB0cmVlLlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbnU6IFtdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvbnRleHRNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFRoZSBtZW51IHNob3VsZCBoYXZlIGFscmVhZHkgYmVlbiBidWlsdCB1cCB2aWEgdGhlIGNvbnRleHQgaGFuZGxlciB3aGlsZSB0aGUgZXZlbnQgd2FzXG4gICAgICAgIC8vIGJ1YmJsaW5nIHVwLiBJZiB0aGUgbWVudSB3YXMgZW1wdHkgdGhlbiBpdCdzIHBvc3NpYmxlIHRoZSB1c2VyIHJpZ2h0LWNsaWNrZWQgb24gc29tZXRoaW5nXG4gICAgICAgIC8vIHRoYXQgd2Fzbid0IGNvbnRleHQgbWVudSBjb25uZWN0ZWQsIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGNsb3NlIHRoZSBtZW51LlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lbnVJc09wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgbWVudVBvc2l0aW9uOiB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25NZW51Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCBjbGlja3MgZnJvbSB0aGUgbWVudSBwcm9wYWdhdGluZyB1cCB0byB0aGUgb25DbGljayBoYW5kbGVyLCBzbyB0aGV5IGRvbid0XG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciB0aGUgbWVudSBjbG9zaW5nXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGNsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgLy8gQW4gb3JkaW5hcnkgY2xpY2sgdGhhdCB3YXNuJ3Qgb24gb3VyIG1lbnUgb3IgYSByaWdodC1jbGljayBzaG91bGQganVzdCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51SXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZW51OiBbXSxcbiAgICAgICAgICAgICAgICBtZW51UG9zaXRpb246IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8T3V0ZXJDb250YWluZXIgcG9zaXRpb249e3RoaXMuc3RhdGUubWVudVBvc2l0aW9ufT5cbiAgICAgICAgICAgICAgICA8Q29udGV4dE1lbnUgb25NZW51Q2xpY2s9e3RoaXMub25NZW51Q2xpY2t9IG1lbnU9e3RoaXMuc3RhdGUubWVudX0gLz5cbiAgICAgICAgICAgIDwvT3V0ZXJDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGF5ZXJ9XG4gICAgICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7IHRoaXMubmVhcmVzdE5vZGUgPSByZWY7IH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lbnVJc09wZW4gPyB0aGlzLnJlbmRlck1lbnUoKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dE1lbnVQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9Db250ZXh0TWVudVByb3ZpZGVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pID0+IChcbiAgICA8dWwgc3R5bGU9e3N0eWxlcy5tZW51fSByb2xlPVwibWVudVwiIHsuLi5vdGhlcnN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvTWVudVdyYXBwZXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgQ29udGV4dFN1Ym1lbnUgZnJvbSBcIi4vQ29udGV4dFN1Ym1lbnVcIjtcblxuaW1wb3J0IEJ1dHRvbkVsZW1lbnQgZnJvbSBcIi4vQnV0dG9uRWxlbWVudFwiO1xuaW1wb3J0IExhYmVsRWxlbWVudCBmcm9tIFwiLi9MYWJlbEVsZW1lbnRcIjtcbmltcG9ydCBMaW5rRWxlbWVudCBmcm9tIFwiLi9MaW5rRWxlbWVudFwiO1xuaW1wb3J0IFNlcGFyYXRvckVsZW1lbnQgZnJvbSBcIi4vU2VwYXJhdG9yRWxlbWVudFwiO1xuaW1wb3J0IEl0ZW1XcmFwcGVyIGZyb20gXCIuL0l0ZW1XcmFwcGVyXCI7XG5cbmNsYXNzIENvbnRleHRNZW51SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1wibGFiZWxcIiwgXCJidXR0b25cIiwgXCJsaW5rXCIsIFwic2VwYXJhdG9yXCIsIFwic3VibWVudVwiXSksXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25NZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBtZW51OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0eXBlOiBcImxhYmVsXCIsXG4gICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgICAgIG9uTWVudUNsaWNrOiBudWxsLFxuICAgICAgICBtZW51OiBbXSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdWJtZW51VmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVE9ETzogT24gcmVjZWl2ZSBwcm9wcyAvIHdpbGwgcmVjZWl2ZSBwcm9wcywgdmVyaWZ5IGNvcnJlY3QgYWN0aW9uIGlzIHRoZXJlIGUuZy4gaGFuZGxlci90b1xuXG4gICAgb25TdWJtZW51TW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtZW51VmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtZW51TW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtZW51VmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIC8vIEZvciBsaW5rcyB0aGVyZSBpcyBubyBidXR0b24gaGFuZGxlciAoYWx0aG91Z2ggY29uc3VtZXJzXG4gICAgICAgIC8vIGNhbiBzdGlsbCBwcm92aWRlIG9uZSwgZS5nLiB0byBwcmV2ZW50RGVmYXVsdCBvciB3aGF0ZXZlcilcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGUgY2xpY2sgaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmlnZ2VyIHByb3ZpZGVyIHRvIGNsb3NlIHRoZSBtZW51XG4gICAgICAgIHRoaXMucHJvcHMub25NZW51Q2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcklubmVyRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50LCBvbkNsaWNrLCBvbk1lbnVDbGljaywgbWVudSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICBjYXNlIFwibGFiZWxcIjpcbiAgICAgICAgICAgIHJldHVybiA8TGFiZWxFbGVtZW50IHsuLi5vdGhlcnN9Pntjb250ZW50fTwvTGFiZWxFbGVtZW50PjtcbiAgICAgICAgY2FzZSBcInNlcGFyYXRvclwiOlxuICAgICAgICAgICAgcmV0dXJuIDxTZXBhcmF0b3JFbGVtZW50IHsuLi5vdGhlcnN9IC8+O1xuICAgICAgICBjYXNlIFwic3VibWVudVwiOlxuICAgICAgICAgICAgLy8gQSBiaXQgb2YgYSBzcGVjaWFsIGNhc2VcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbnRleHRTdWJtZW51IG1lbnU9e21lbnV9IG9uTWVudUNsaWNrPXtvbk1lbnVDbGlja30gey4uLm90aGVyc30+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvQ29udGV4dFN1Ym1lbnU+XG4gICAgICAgICAgICApO1xuICAgICAgICBjYXNlIFwibGlua1wiOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlua0VsZW1lbnQgey4uLm90aGVyc30gb25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L0xpbmtFbGVtZW50Pik7XG4gICAgICAgIGNhc2UgXCJidXR0b25cIjpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkVsZW1lbnQgey4uLm90aGVyc30gb25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9CdXR0b25FbGVtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJdGVtV3JhcHBlcj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbm5lckVsZW1lbnQoKX1cbiAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51SXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9Db250ZXh0TWVudUl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU3VibWVudUVsZW1lbnQgZnJvbSBcIi4vU3VibWVudUVsZW1lbnRcIjtcbmltcG9ydCBPdXRlckNvbnRhaW5lciBmcm9tIFwiLi9PdXRlckNvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5cbmNsYXNzIENvbnRleHRTdWJtZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtZW51LCBvbk1lbnVDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdWJtZW51RWxlbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Ym1lbnVWaXNpYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8T3V0ZXJDb250YWluZXIgcG9zaXRpb249e3RoaXMucHJvcHMucG9zaXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRleHRNZW51IG1lbnU9e21lbnV9IG9uTWVudUNsaWNrPXtvbk1lbnVDbGlja30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9PdXRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvU3VibWVudUVsZW1lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuICAgIC8qXG4gICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLm9uU3VibWVudU1vdXNlRW50ZXJ9XG4gICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub25TdWJtZW51TW91c2VMZWF2ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDwvZGl2PlxuICAgICovXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFN1Ym1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvQ29udGV4dFN1Ym1lbnUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBvbkNsaWNrLCAuLi5vdGhlcnMgfSkgPT4gKFxuICAgIDxuYXYgc3R5bGU9e3N0eWxlcy5zdWJtZW51fSB7Li4ub3RoZXJzfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgPC9uYXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL1N1Ym1lbnVFbGVtZW50LmpzeCIsIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIC4uLm90aGVycyB9KSA9PlxuICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IHsuLi5vdGhlcnN9PntjaGlsZHJlbn08L2J1dHRvbj47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvQnV0dG9uRWxlbWVudC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgLi4ub3RoZXJzIH0pID0+IDxoMiBzdHlsZT17c3R5bGVzLmxhYmVsfSB7Li4ub3RoZXJzfT57Y2hpbGRyZW59PC9oMj47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvTGFiZWxFbGVtZW50LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuXG4vLyBUT0RPOiBCeSBkZWZhdWx0IHJlbmRlciBhIHBsYWluIDxhPiB0YWcuIENvbnN1bWVycyBjYW4gcGFzcyBpbiByZWFjdC1kb20tcm91dGVyJ3Ncbi8vIExpbmsgaWYgdGhleSB3YW50LiBDb3VsZCBleHBvcnQgdGhlIGRlZmF1bHQgc3R5bGVzIHRvIHVzZSB0aGVtIG9uIHJlYWN0LWRvbS1yb3V0ZXI/XG4vLyBPciBwYXNzIHRoZW0gYWxsIGluIGZyb20gdGhlIHRvcD9cblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIC4uLm90aGVycyB9KSA9PiA8TGluayBzdHlsZT17c3R5bGVzLmxpbmt9IHsuLi5vdGhlcnN9PntjaGlsZHJlbn08L0xpbms+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL0xpbmtFbGVtZW50LmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL21lbnUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IC4uLm90aGVycyB9KSA9PiA8aHIgc3R5bGU9e3N0eWxlcy5zZXBhcmF0b3J9IHsuLi5vdGhlcnN9IC8+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL1NlcGFyYXRvckVsZW1lbnQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIC4uLm90aGVycyB9KSA9PiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZXMuaXRlbX0gey4uLm90aGVyc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9JdGVtV3JhcHBlci5qc3giXSwic291cmNlUm9vdCI6IiJ9