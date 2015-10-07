module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _routes2 = __webpack_require__(15);

	var _routes3 = _interopRequireDefault(_routes2);

	exports.routes = _routes3['default'];

	var _store = __webpack_require__(16);

	exports.configureStore = _store.configureStore;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(17)["default"];

	var _Object$setPrototypeOf = __webpack_require__(19)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(5)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(4)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(8);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _componentsAppAppCss = __webpack_require__(34);

	var _componentsAppAppCss2 = _interopRequireDefault(_componentsAppAppCss);

	__webpack_require__(33);

	__webpack_require__(32);

	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, _App);

	    _React$Component.apply(this, arguments);
	  }

	  App.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      { styleName: 'container' },
	      _react2['default'].createElement(
	        'h1',
	        { styleName: 'greeting' },
	        'Hello, ',
	        _react2['default'].createElement('i', { className: 'fa fa-globe' }),
	        '!'
	      ),
	      this.props.children
	    );
	  };

	  _createClass(App, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.any
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      store: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  var _App = App;
	  App = _reactCssModules2['default'](_componentsAppAppCss2['default'])(App) || App;
	  return App;
	})(_react2['default'].Component);

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _componentsAppApp = __webpack_require__(9);

	var _componentsAppApp2 = _interopRequireDefault(_componentsAppApp);

	exports['default'] = _componentsAppApp2['default'];
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = app;

	var initialState = {
	  counter: 0
	};

	function app(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    default:
	      return state;
	  }
	}

	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _app = __webpack_require__(11);

	var _app2 = _interopRequireDefault(_app);

	exports.app = _app2['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(5)['default'];

	var _classCallCheck = __webpack_require__(4)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(8);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _HomeRouteCss = __webpack_require__(35);

	var _HomeRouteCss2 = _interopRequireDefault(_HomeRouteCss);

	var HomeRoute = (function (_React$Component) {
	  _inherits(HomeRoute, _React$Component);

	  function HomeRoute() {
	    _classCallCheck(this, _HomeRoute);

	    _React$Component.apply(this, arguments);
	  }

	  HomeRoute.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      { styleName: 'container' },
	      _react2['default'].createElement('i', { className: 'fa fa-home' })
	    );
	  };

	  var _HomeRoute = HomeRoute;
	  HomeRoute = _reactCssModules2['default'](_HomeRouteCss2['default'])(HomeRoute) || HomeRoute;
	  return HomeRoute;
	})(_react2['default'].Component);

	exports['default'] = HomeRoute;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _routesHomeRouteHomeRoute = __webpack_require__(13);

	var _routesHomeRouteHomeRoute2 = _interopRequireDefault(_routesHomeRouteHomeRoute);

	exports['default'] = _routesHomeRouteHomeRoute2['default'];
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(36);

	var _componentsApp = __webpack_require__(10);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _routesHomeRoute = __webpack_require__(14);

	var _routesHomeRoute2 = _interopRequireDefault(_routesHomeRoute);

	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { component: _componentsApp2['default'], path: '/' },
	  _react2['default'].createElement(_reactRouter.IndexRoute, { component: _routesHomeRoute2['default'] })
	);
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(21)['default'];

	exports.__esModule = true;
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(37);

	var _reduxDevtools = __webpack_require__(38);

	var _reduxThunk = __webpack_require__(39);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(12);

	var reducers = _interopRequireWildcard(_reducers);

	var createStoreWithMiddleware = undefined;
	var rootReducer = undefined;

	if (true) {
	  createStoreWithMiddleware = _redux.compose(_reduxDevtools.devTools(), _redux.applyMiddleware(_reduxThunk2['default']))(_redux.createStore);
	} else {
	  createStoreWithMiddleware = _redux.createStore;
	}

	function configureStore(initialState) {
	  if (!createStoreWithMiddleware) {
	    throw new Error('No store creator configured.');
	  }
	  rootReducer = _redux.combineReducers(reducers);
	  var store = createStoreWithMiddleware(rootReducer, initialState);

	  if (false) {
	    module.hot.accept('../reducers/index', function () {
	      var nextRootReducer = _redux.combineReducers(require('../reducers/index'));
	      store.replaceReducer(nextRootReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(18)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(6).Object.setPrototypeOf;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(7);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(6)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 29 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(2).getDesc
	  , isObject = __webpack_require__(7)
	  , anObject = __webpack_require__(26);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(27)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(28);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(30).set});

/***/ },
/* 32 */
/***/ function(module, exports) {

	

/***/ },
/* 33 */
32,
/* 34 */
/***/ function(module, exports) {

	module.exports = {
		"container": "App__container___15nQ-",
		"greeting": "App__greeting___POB0k"
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
		"container": "HomeRoute__container___13abZ"
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ])));