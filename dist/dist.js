/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(7);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(8);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(17);



__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], null), document.body.appendChild(document.createElement('div')));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0
 react.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(2),p=__webpack_require__(3);__webpack_require__(4);var r=__webpack_require__(1);
function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.1
 react-dom.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0);__webpack_require__(4);var l=__webpack_require__(9),n=__webpack_require__(2),ba=__webpack_require__(10),ca=__webpack_require__(1),da=__webpack_require__(3),ea=__webpack_require__(11),fa=__webpack_require__(12),ha=__webpack_require__(15),ia=__webpack_require__(16);
function w(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}aa?void 0:w("227");
function ja(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var ka={Namespaces:{html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},getIntrinsicNamespace:ja,getChildNamespace:function(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ja(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}},la=null,oa={};
function pa(){if(la)for(var a in oa){var b=oa[a],c=la.indexOf(a);-1<c?void 0:w("96",a);if(!qa.plugins[c]){b.extractEvents?void 0:w("97",a);qa.plugins[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.eventNameDispatchConfigs.hasOwnProperty(h)?w("99",h):void 0;qa.eventNameDispatchConfigs[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:w("98",d,a)}}}}
function ra(a,b,c){qa.registrationNameModules[a]?w("100",a):void 0;qa.registrationNameModules[a]=b;qa.registrationNameDependencies[a]=b.eventTypes[c].dependencies}
var qa={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(a){la?w("101"):void 0;la=Array.prototype.slice.call(a);pa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];oa.hasOwnProperty(c)&&oa[c]===d||(oa[c]?w("102",c):void 0,oa[c]=d,b=!0)}b&&pa()}},sa=qa,ta={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,
innerHTML:!0,suppressContentEditableWarning:!0,style:!0};function ua(a,b){return(a&b)===b}
var wa={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=wa,c=a.Properties||{},d=a.DOMAttributeNamespaces||{},e=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in c){xa.properties.hasOwnProperty(f)?w("48",f):void 0;var g=f.toLowerCase(),h=c[f];g={attributeName:g,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:ua(h,b.MUST_USE_PROPERTY),
hasBooleanValue:ua(h,b.HAS_BOOLEAN_VALUE),hasNumericValue:ua(h,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:ua(h,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:ua(h,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:ua(h,b.HAS_STRING_BOOLEAN_VALUE)};1>=g.hasBooleanValue+g.hasNumericValue+g.hasOverloadedBooleanValue?void 0:w("50",f);e.hasOwnProperty(f)&&(g.attributeName=e[f]);d.hasOwnProperty(f)&&(g.attributeNamespace=d[f]);a.hasOwnProperty(f)&&(g.mutationMethod=a[f]);xa.properties[f]=
g}}},xa={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
properties:{},shouldSetAttribute:function(a,b){if(xa.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return xa.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return xa.properties.hasOwnProperty(a)?xa.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(xa.isReservedProp(a))return!0;var b=xa.getPropertyInfo(a);
if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return ta.hasOwnProperty(a)},injection:wa},A=xa,E={IndeterminateComponent:0,FunctionalComponent:1,ClassComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,CoroutineComponent:7,CoroutineHandlerPhase:8,YieldComponent:9,Fragment:10},F={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_FRAGMENT_NODE:11},
ya=E.HostComponent,za=E.HostText,Aa=F.ELEMENT_NODE,Ba=F.COMMENT_NODE,Ea=A.ID_ATTRIBUTE_NAME,Fa={hasCachedChildNodes:1},Ga=Math.random().toString(36).slice(2),Ha="__reactInternalInstance$"+Ga,Ia="__reactEventHandlers$"+Ga;function La(a){for(var b;b=a._renderedComponent;)a=b;return a}function Ma(a,b){a=La(a);a._hostNode=b;b[Ha]=a}
function Na(a,b){if(!(a._flags&Fa.hasCachedChildNodes)){var c=a._renderedChildren;b=b.firstChild;var d;a:for(d in c)if(c.hasOwnProperty(d)){var e=c[d],f=La(e)._domID;if(0!==f){for(;null!==b;b=b.nextSibling){var g=b,h=f;if(g.nodeType===Aa&&g.getAttribute(Ea)===""+h||g.nodeType===Ba&&g.nodeValue===" react-text: "+h+" "||g.nodeType===Ba&&g.nodeValue===" react-empty: "+h+" "){Ma(e,b);continue a}}w("32",f)}}a._flags|=Fa.hasCachedChildNodes}}
function Oa(a){if(a[Ha])return a[Ha];for(var b=[];!a[Ha];)if(b.push(a),a.parentNode)a=a.parentNode;else return null;var c=a[Ha];if(c.tag===ya||c.tag===za)return c;for(;a&&(c=a[Ha]);a=b.pop()){var d=c;b.length&&Na(c,a)}return d}
var G={getClosestInstanceFromNode:Oa,getInstanceFromNode:function(a){var b=a[Ha];if(b)return b.tag===ya||b.tag===za?b:b._hostNode===a?b:null;b=Oa(a);return null!=b&&b._hostNode===a?b:null},getNodeFromInstance:function(a){if(a.tag===ya||a.tag===za)return a.stateNode;void 0===a._hostNode?w("33"):void 0;if(a._hostNode)return a._hostNode;for(var b=[];!a._hostNode;)b.push(a),a._hostParent?void 0:w("34"),a=a._hostParent;for(;b.length;a=b.pop())Na(a,a._hostNode);return a._hostNode},precacheChildNodes:Na,
precacheNode:Ma,uncacheNode:function(a){var b=a._hostNode;b&&(delete b[Ha],a._hostNode=null)},precacheFiberNode:function(a,b){b[Ha]=a},getFiberCurrentPropsFromNode:function(a){return a[Ia]||null},updateFiberProps:function(a,b){a[Ia]=b}},Pa={remove:function(a){a._reactInternalFiber=void 0},get:function(a){return a._reactInternalFiber},has:function(a){return void 0!==a._reactInternalFiber},set:function(a,b){a._reactInternalFiber=b}},Qa={ReactCurrentOwner:aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner};
function Ra(a){if("function"===typeof a.getName)return a.getName();if("number"===typeof a.tag){a=a.type;if("string"===typeof a)return a;if("function"===typeof a)return a.displayName||a.name}return null}var J={NoEffect:0,PerformedWork:1,Placement:2,Update:4,PlacementAndUpdate:6,Deletion:8,ContentReset:16,Callback:32,Err:64,Ref:128},Sa=E.HostComponent,Ta=E.HostRoot,Ua=E.HostPortal,Va=E.HostText,Wa=J.NoEffect,Xa=J.Placement;
function Za(a){var b=a;if(a.alternate)for(;b["return"];)b=b["return"];else{if((b.effectTag&Xa)!==Wa)return 1;for(;b["return"];)if(b=b["return"],(b.effectTag&Xa)!==Wa)return 1}return b.tag===Ta?2:3}function $a(a){2!==Za(a)?w("188"):void 0}
function ab(a){var b=a.alternate;if(!b)return b=Za(a),3===b?w("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c["return"],f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return $a(e),a;if(g===d)return $a(e),b;g=g.sibling}w("188")}if(c["return"]!==d["return"])c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:w("189")}}c.alternate!==d?w("190"):void 0}c.tag!==Ta?w("188"):void 0;return c.stateNode.current===c?a:b}
var bb={isFiberMounted:function(a){return 2===Za(a)},isMounted:function(a){return(a=Pa.get(a))?2===Za(a):!1},findCurrentFiberUsingSlowPath:ab,findCurrentHostFiber:function(a){a=ab(a);if(!a)return null;for(var b=a;;){if(b.tag===Sa||b.tag===Va)return b;if(b.child)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null},findCurrentHostFiberWithNoPortals:function(a){a=ab(a);
if(!a)return null;for(var b=a;;){if(b.tag===Sa||b.tag===Va)return b;if(b.child&&b.tag!==Ua)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}},K={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(a){"function"!==typeof a.invokeGuardedCallback?w("197"):void 0;cb=a.invokeGuardedCallback}},invokeGuardedCallback:function(a,
b,c,d,e,f,g,h,k){cb.apply(K,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){K.invokeGuardedCallback.apply(this,arguments);if(K.hasCaughtError()){var p=K.clearCaughtError();K._hasRethrowError||(K._hasRethrowError=!0,K._rethrowError=p)}},rethrowCaughtError:function(){return db.apply(K,arguments)},hasCaughtError:function(){return K._hasCaughtError},clearCaughtError:function(){if(K._hasCaughtError){var a=K._caughtError;K._caughtError=null;K._hasCaughtError=!1;return a}w("198")}};
function cb(a,b,c,d,e,f,g,h,k){K._hasCaughtError=!1;K._caughtError=null;var p=Array.prototype.slice.call(arguments,3);try{b.apply(c,p)}catch(x){K._caughtError=x,K._hasCaughtError=!0}}function db(){if(K._hasRethrowError){var a=K._rethrowError;K._rethrowError=null;K._hasRethrowError=!1;throw a;}}var eb=K,fb;function gb(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=hb.getNodeFromInstance(d);eb.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
var hb={isEndish:function(a){return"topMouseUp"===a||"topTouchEnd"===a||"topTouchCancel"===a},isMoveish:function(a){return"topMouseMove"===a||"topTouchMove"===a},isStartish:function(a){return"topMouseDown"===a||"topTouchStart"===a},executeDirectDispatch:function(a){var b=a._dispatchListeners,c=a._dispatchInstances;Array.isArray(b)?w("103"):void 0;a.currentTarget=b?hb.getNodeFromInstance(c):null;b=b?b(a):null;a.currentTarget=null;a._dispatchListeners=null;a._dispatchInstances=null;return b},executeDispatchesInOrder:function(a,
b){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)gb(a,b,c[e],d[e]);else c&&gb(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null},executeDispatchesInOrderStopAtTrue:function(a){a:{var b=a._dispatchListeners;var c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++){if(b[d](a,c[d])){b=c[d];break a}}else if(b&&b(a,c)){b=c;break a}b=null}a._dispatchInstances=null;a._dispatchListeners=
null;return b},hasDispatches:function(a){return!!a._dispatchListeners},getFiberCurrentPropsFromNode:function(a){return fb.getFiberCurrentPropsFromNode(a)},getInstanceFromNode:function(a){return fb.getInstanceFromNode(a)},getNodeFromInstance:function(a){return fb.getNodeFromInstance(a)},injection:{injectComponentTree:function(a){fb=a}}},ib=hb,jb=null,kb=null,lb=null;
function mb(a){if(a=ib.getInstanceFromNode(a))if("number"===typeof a.tag){jb&&"function"===typeof jb.restoreControlledState?void 0:w("194");var b=ib.getFiberCurrentPropsFromNode(a.stateNode);jb.restoreControlledState(a.stateNode,a.type,b)}else"function"!==typeof a.restoreControlledState?w("195"):void 0,a.restoreControlledState()}
var nb={injection:{injectFiberControlledHostComponent:function(a){jb=a}},enqueueStateRestore:function(a){kb?lb?lb.push(a):lb=[a]:kb=a},restoreStateIfNeeded:function(){if(kb){var a=kb,b=lb;lb=kb=null;mb(a);if(b)for(a=0;a<b.length;a++)mb(b[a])}}};function ob(a,b,c,d,e,f){return a(b,c,d,e,f)}function pb(a,b){return a(b)}function qb(a,b){return pb(a,b)}
var rb=!1,sb={batchedUpdates:function(a,b){if(rb)return ob(qb,a,b);rb=!0;try{return ob(qb,a,b)}finally{rb=!1,nb.restoreStateIfNeeded()}},injection:{injectStackBatchedUpdates:function(a){ob=a},injectFiberBatchedUpdates:function(a){pb=a}}},tb=F.TEXT_NODE;function ub(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return a.nodeType===tb?a.parentNode:a}var vb=E.HostRoot,wb=[];
function xb(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c=b;if("number"===typeof c.tag){for(;c["return"];)c=c["return"];c=c.tag!==vb?null:c.stateNode.containerInfo}else{for(;c._hostParent;)c=c._hostParent;c=G.getNodeFromInstance(c).parentNode}if(!c)break;a.ancestors.push(b);b=G.getClosestInstanceFromNode(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],yb._handleTopLevel(a.topLevelType,b,a.nativeEvent,ub(a.nativeEvent))}
var yb={_enabled:!0,_handleTopLevel:null,setHandleTopLevel:function(a){yb._handleTopLevel=a},setEnabled:function(a){yb._enabled=!!a},isEnabled:function(){return yb._enabled},trapBubbledEvent:function(a,b,c){return c?ba.listen(c,b,yb.dispatchEvent.bind(null,a)):null},trapCapturedEvent:function(a,b,c){return c?ba.capture(c,b,yb.dispatchEvent.bind(null,a)):null},dispatchEvent:function(a,b){if(yb._enabled){var c=ub(b);c=G.getClosestInstanceFromNode(c);null===c||"number"!==typeof c.tag||bb.isFiberMounted(c)||
(c=null);if(wb.length){var d=wb.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{sb.batchedUpdates(xb,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>wb.length&&wb.push(a)}}}},L=yb;function Cb(a,b){null==b?w("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function Db(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Eb=null;function Fb(a,b){a&&(ib.executeDispatchesInOrder(a,b),a.isPersistent()||a.constructor.release(a))}function Gb(a){return Fb(a,!0)}function Hb(a){return Fb(a,!1)}
function Ib(a,b,c){switch(a){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":return!(!c.disabled||"button"!==b&&"input"!==b&&"select"!==b&&"textarea"!==b);default:return!1}}
var Jb={injection:{injectEventPluginOrder:sa.injectEventPluginOrder,injectEventPluginsByName:sa.injectEventPluginsByName},getListener:function(a,b){if("number"===typeof a.tag){var c=a.stateNode;if(!c)return null;var d=ib.getFiberCurrentPropsFromNode(c);if(!d)return null;c=d[b];if(Ib(b,a.type,d))return null}else{d=a._currentElement;if("string"===typeof d||"number"===typeof d||!a._rootNodeID)return null;a=d.props;c=a[b];if(Ib(b,d.type,a))return null}c&&"function"!==typeof c?w("231",b,typeof c):void 0;
return c},extractEvents:function(a,b,c,d){for(var e,f=sa.plugins,g=0;g<f.length;g++){var h=f[g];h&&(h=h.extractEvents(a,b,c,d))&&(e=Cb(e,h))}return e},enqueueEvents:function(a){a&&(Eb=Cb(Eb,a))},processEventQueue:function(a){var b=Eb;Eb=null;a?Db(b,Gb):Db(b,Hb);Eb?w("95"):void 0;eb.rethrowCaughtError()}},Kb;l.canUseDOM&&(Kb=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));
function Lb(a,b){if(!l.canUseDOM||b&&!("addEventListener"in document))return!1;b="on"+a;var c=b in document;c||(c=document.createElement("div"),c.setAttribute(b,"return;"),c="function"===typeof c[b]);!c&&Kb&&"wheel"===a&&(c=document.implementation.hasFeature("Events.wheel","3.0"));return c}function Mb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
var Nb={animationend:Mb("Animation","AnimationEnd"),animationiteration:Mb("Animation","AnimationIteration"),animationstart:Mb("Animation","AnimationStart"),transitionend:Mb("Transition","TransitionEnd")},Ob={},Pb={};l.canUseDOM&&(Pb=document.createElement("div").style,"AnimationEvent"in window||(delete Nb.animationend.animation,delete Nb.animationiteration.animation,delete Nb.animationstart.animation),"TransitionEvent"in window||delete Nb.transitionend.transition);
function Qb(a){if(Ob[a])return Ob[a];if(!Nb[a])return a;var b=Nb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Pb)return Ob[a]=b[c];return""}
var Rb={topAbort:"abort",topAnimationEnd:Qb("animationend")||"animationend",topAnimationIteration:Qb("animationiteration")||"animationiteration",topAnimationStart:Qb("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",
topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",
topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",
topTouchStart:"touchstart",topTransitionEnd:Qb("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Sb={},Tb=0,Ub="_reactListenersID"+(""+Math.random()).slice(2);function Vb(a){Object.prototype.hasOwnProperty.call(a,Ub)||(a[Ub]=Tb++,Sb[a[Ub]]={});return Sb[a[Ub]]}
var M=n({},{handleTopLevel:function(a,b,c,d){a=Jb.extractEvents(a,b,c,d);Jb.enqueueEvents(a);Jb.processEventQueue(!1)}},{setEnabled:function(a){L&&L.setEnabled(a)},isEnabled:function(){return!(!L||!L.isEnabled())},listenTo:function(a,b){var c=Vb(b);a=sa.registrationNameDependencies[a];for(var d=0;d<a.length;d++){var e=a[d];c.hasOwnProperty(e)&&c[e]||("topWheel"===e?Lb("wheel")?L.trapBubbledEvent("topWheel","wheel",b):Lb("mousewheel")?L.trapBubbledEvent("topWheel","mousewheel",b):L.trapBubbledEvent("topWheel",
"DOMMouseScroll",b):"topScroll"===e?L.trapCapturedEvent("topScroll","scroll",b):"topFocus"===e||"topBlur"===e?(L.trapCapturedEvent("topFocus","focus",b),L.trapCapturedEvent("topBlur","blur",b),c.topBlur=!0,c.topFocus=!0):"topCancel"===e?(Lb("cancel",!0)&&L.trapCapturedEvent("topCancel","cancel",b),c.topCancel=!0):"topClose"===e?(Lb("close",!0)&&L.trapCapturedEvent("topClose","close",b),c.topClose=!0):Rb.hasOwnProperty(e)&&L.trapBubbledEvent(e,Rb[e],b),c[e]=!0)}},isListeningToAllDependencies:function(a,
b){b=Vb(b);a=sa.registrationNameDependencies[a];for(var c=0;c<a.length;c++){var d=a[c];if(!b.hasOwnProperty(d)||!b[d])return!1}return!0},trapBubbledEvent:function(a,b,c){return L.trapBubbledEvent(a,b,c)},trapCapturedEvent:function(a,b,c){return L.trapCapturedEvent(a,b,c)}}),Wb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,
flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xb=["Webkit","ms","Moz","O"];
Object.keys(Wb).forEach(function(a){Xb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Wb[b]=Wb[a]})});
var Yb={isUnitlessNumber:Wb,shorthandPropertyExpansions:{background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,
borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}}},Zb=Yb.isUnitlessNumber,$b=!1;if(l.canUseDOM){var ac=document.createElement("div").style;try{ac.font=""}catch(a){$b=!0}}
var bc={createDangerousStringForStyles:function(){},setValueForStyles:function(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Zb.hasOwnProperty(e)&&Zb[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");if(d)a.setProperty(c,e);else if(e)a[c]=e;else if(d=$b&&Yb.shorthandPropertyExpansions[c])for(var g in d)a[g]="";else a[c]=""}}},cc=new RegExp("^["+A.ATTRIBUTE_NAME_START_CHAR+
"]["+A.ATTRIBUTE_NAME_CHAR+"]*$"),dc={},ec={};function fc(a){if(ec.hasOwnProperty(a))return!0;if(dc.hasOwnProperty(a))return!1;if(cc.test(a))return ec[a]=!0;dc[a]=!0;return!1}
var gc={setAttributeForID:function(a,b){a.setAttribute(A.ID_ATTRIBUTE_NAME,b)},setAttributeForRoot:function(a){a.setAttribute(A.ROOT_ATTRIBUTE_NAME,"")},getValueForProperty:function(){},getValueForAttribute:function(){},setValueForProperty:function(a,b,c){var d=A.getPropertyInfo(b);if(d&&A.shouldSetAttribute(b,c)){var e=d.mutationMethod;e?e(a,c):null==c||d.hasBooleanValue&&!c||d.hasNumericValue&&isNaN(c)||d.hasPositiveNumericValue&&1>c||d.hasOverloadedBooleanValue&&!1===c?gc.deleteValueForProperty(a,
b):d.mustUseProperty?a[d.propertyName]=c:(b=d.attributeName,(e=d.attributeNamespace)?a.setAttributeNS(e,b,""+c):d.hasBooleanValue||d.hasOverloadedBooleanValue&&!0===c?a.setAttribute(b,""):a.setAttribute(b,""+c))}else gc.setValueForAttribute(a,b,A.shouldSetAttribute(b,c)?c:null)},setValueForAttribute:function(a,b,c){fc(b)&&(null==c?a.removeAttribute(b):a.setAttribute(b,""+c))},deleteValueForAttribute:function(a,b){a.removeAttribute(b)},deleteValueForProperty:function(a,b){var c=A.getPropertyInfo(b);
c?(b=c.mutationMethod)?b(a,void 0):c.mustUseProperty?a[c.propertyName]=c.hasBooleanValue?!1:"":a.removeAttribute(c.attributeName):a.removeAttribute(b)}},hc=gc,ic=Qa.ReactDebugCurrentFrame;function jc(){return null}
var kc={current:null,phase:null,resetCurrentFiber:function(){ic.getCurrentStack=null;kc.current=null;kc.phase=null},setCurrentFiber:function(a,b){ic.getCurrentStack=jc;kc.current=a;kc.phase=b},getCurrentFiberOwnerName:function(){return null},getCurrentFiberStackAddendum:jc},lc=kc,mc={getHostProps:function(a,b){var c=b.value,d=b.checked;return n({type:void 0,step:void 0,min:void 0,max:void 0},b,{defaultChecked:void 0,defaultValue:void 0,value:null!=c?c:a._wrapperState.initialValue,checked:null!=d?
d:a._wrapperState.initialChecked})},initWrapperState:function(a,b){var c=b.defaultValue;a._wrapperState={initialChecked:null!=b.checked?b.checked:b.defaultChecked,initialValue:null!=b.value?b.value:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}},updateWrapper:function(a,b){var c=b.checked;null!=c&&hc.setValueForProperty(a,"checked",c||!1);c=b.value;if(null!=c)if(0===c&&""===a.value)a.value="0";else if("number"===b.type){if(b=parseFloat(a.value)||0,c!=b||c==b&&a.value!=
c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else null==b.value&&null!=b.defaultValue&&a.defaultValue!==""+b.defaultValue&&(a.defaultValue=""+b.defaultValue),null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)},postMountWrapper:function(a,b){switch(b.type){case "submit":case "reset":break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":a.value="";a.value=a.defaultValue;break;default:a.value=a.value}b=a.name;""!==
b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&(a.name=b)},restoreControlledState:function(a,b){mc.updateWrapper(a,b);var c=b.name;if("radio"===b.type&&null!=c){for(b=a;b.parentNode;)b=b.parentNode;c=b.querySelectorAll("input[name\x3d"+JSON.stringify(""+c)+'][type\x3d"radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=G.getFiberCurrentPropsFromNode(d);e?void 0:w("90");mc.updateWrapper(d,e)}}}}},qc=mc;
function rc(a){var b="";aa.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}var sc={validateProps:function(){},postMountWrapper:function(a,b){null!=b.value&&a.setAttribute("value",b.value)},getHostProps:function(a,b){a=n({children:void 0},b);if(b=rc(b.children))a.children=b;return a}};
function tc(a,b,c){a=a.options;if(b){b={};for(var d=0;d<c.length;d++)b["$"+c[d]]=!0;for(c=0;c<a.length;c++)d=b.hasOwnProperty("$"+a[c].value),a[c].selected!==d&&(a[c].selected=d)}else{c=""+c;b=null;for(d=0;d<a.length;d++){if(a[d].value===c){a[d].selected=!0;return}null!==b||a[d].disabled||(b=a[d])}null!==b&&(b.selected=!0)}}
var uc={getHostProps:function(a,b){return n({},b,{value:void 0})},initWrapperState:function(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}},postMountWrapper:function(a,b){a.multiple=!!b.multiple;var c=b.value;null!=c?tc(a,!!b.multiple,c):null!=b.defaultValue&&tc(a,!!b.multiple,b.defaultValue)},postUpdateWrapper:function(a,b){a._wrapperState.initialValue=void 0;var c=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!b.multiple;var d=b.value;
null!=d?tc(a,!!b.multiple,d):c!==!!b.multiple&&(null!=b.defaultValue?tc(a,!!b.multiple,b.defaultValue):tc(a,!!b.multiple,b.multiple?[]:""))},restoreControlledState:function(a,b){var c=b.value;null!=c&&tc(a,!!b.multiple,c)}},vc={getHostProps:function(a,b){null!=b.dangerouslySetInnerHTML?w("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})},initWrapperState:function(a,b){var c=b.value,d=c;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?
w("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:w("93"),b=b[0]),c=""+b),null==c&&(c=""),d=c);a._wrapperState={initialValue:""+d}},updateWrapper:function(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)},postMountWrapper:function(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)},restoreControlledState:function(a,b){vc.updateWrapper(a,b)}},wc=vc,xc=n({menuitem:!0},{area:!0,
base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(a,b){b&&(xc[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?w("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?w("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:w("61")),null!=b.style&&"object"!==typeof b.style?w("62",""):void 0)}
function zc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ac(a){var b=zc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"function"===typeof c.get&&"function"===typeof c.set)return Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:!0,get:function(){return c.get.call(this)},set:function(a){d=""+a;c.set.call(this,a)}}),{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}
var Bc={_getTrackerFromNode:function(a){return a._valueTracker},track:function(a){a._valueTracker||(a._valueTracker=Ac(a))},updateValueIfChanged:function(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=zc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1},stopTracking:function(a){(a=a._valueTracker)&&a.stopTracking()}};
function Cc(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
var Dc=ka.Namespaces,Ec,Fc=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Dc.svg||"innerHTML"in a)a.innerHTML=b;else for(Ec=Ec||document.createElement("div"),Ec.innerHTML="\x3csvg\x3e"+b+"\x3c/svg\x3e",b=Ec.firstChild;b.firstChild;)a.appendChild(b.firstChild)}),Gc=/["'&<>]/,Hc=F.TEXT_NODE;
function Ic(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&c.nodeType===Hc){c.nodeValue=b;return}}a.textContent=b}
l.canUseDOM&&("textContent"in document.documentElement||(Ic=function(a,b){if(a.nodeType===Hc)a.nodeValue=b;else{if("boolean"===typeof b||"number"===typeof b)b=""+b;else{b=""+b;var c=Gc.exec(b);if(c){var d="",e,f=0;for(e=c.index;e<b.length;e++){switch(b.charCodeAt(e)){case 34:c="\x26quot;";break;case 38:c="\x26amp;";break;case 39:c="\x26#x27;";break;case 60:c="\x26lt;";break;case 62:c="\x26gt;";break;default:continue}f!==e&&(d+=b.substring(f,e));f=e+1;d+=c}b=f!==e?d+b.substring(f,e):d}}Fc(a,b)}}));
var Jc=Ic,Kc=lc.getCurrentFiberOwnerName,Lc=F.DOCUMENT_NODE,Mc=F.DOCUMENT_FRAGMENT_NODE,Nc=M.listenTo,Oc=sa.registrationNameModules,Pc=ka.Namespaces.html,Qc=ka.getIntrinsicNamespace;function Rc(a,b){Nc(b,a.nodeType===Lc||a.nodeType===Mc?a:a.ownerDocument)}
var Sc={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",
topWaiting:"waiting"},N={createElement:function(a,b,c,d){c=c.nodeType===Lc?c:c.ownerDocument;d===Pc&&(d=Qc(a));d===Pc?"script"===a?(a=c.createElement("div"),a.innerHTML="\x3cscript\x3e\x3c/script\x3e",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a},createTextNode:function(a,b){return(b.nodeType===Lc?b:b.ownerDocument).createTextNode(a)},setInitialProperties:function(a,b,c,d){var e=Cc(b,c);switch(b){case "iframe":case "object":M.trapBubbledEvent("topLoad",
"load",a);var f=c;break;case "video":case "audio":for(f in Sc)Sc.hasOwnProperty(f)&&M.trapBubbledEvent(f,Sc[f],a);f=c;break;case "source":M.trapBubbledEvent("topError","error",a);f=c;break;case "img":case "image":M.trapBubbledEvent("topError","error",a);M.trapBubbledEvent("topLoad","load",a);f=c;break;case "form":M.trapBubbledEvent("topReset","reset",a);M.trapBubbledEvent("topSubmit","submit",a);f=c;break;case "details":M.trapBubbledEvent("topToggle","toggle",a);f=c;break;case "input":qc.initWrapperState(a,
c);f=qc.getHostProps(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(d,"onChange");break;case "option":sc.validateProps(a,c);f=sc.getHostProps(a,c);break;case "select":uc.initWrapperState(a,c);f=uc.getHostProps(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(d,"onChange");break;case "textarea":wc.initWrapperState(a,c);f=wc.getHostProps(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(d,"onChange");break;default:f=c}yc(b,f,Kc);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===
h?bc.setValueForStyles(a,k):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Fc(a,k)):"children"===h?"string"===typeof k?Jc(a,k):"number"===typeof k&&Jc(a,""+k):"suppressContentEditableWarning"!==h&&(Oc.hasOwnProperty(h)?null!=k&&Rc(d,h):e?hc.setValueForAttribute(a,h,k):null!=k&&hc.setValueForProperty(a,h,k))}switch(b){case "input":Bc.track(a);qc.postMountWrapper(a,c);break;case "textarea":Bc.track(a);wc.postMountWrapper(a,c);break;case "option":sc.postMountWrapper(a,c);break;case "select":uc.postMountWrapper(a,
c);break;default:"function"===typeof f.onClick&&(a.onclick=ca)}},diffProperties:function(a,b,c,d,e){var f=null;switch(b){case "input":c=qc.getHostProps(a,c);d=qc.getHostProps(a,d);f=[];break;case "option":c=sc.getHostProps(a,c);d=sc.getHostProps(a,d);f=[];break;case "select":c=uc.getHostProps(a,c);d=uc.getHostProps(a,d);f=[];break;case "textarea":c=wc.getHostProps(a,c);d=wc.getHostProps(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=ca)}yc(b,d,Kc);
var g,h;a=null;for(g in c)if(!d.hasOwnProperty(g)&&c.hasOwnProperty(g)&&null!=c[g])if("style"===g)for(h in b=c[g],b)b.hasOwnProperty(h)&&(a||(a={}),a[h]="");else"dangerouslySetInnerHTML"!==g&&"children"!==g&&"suppressContentEditableWarning"!==g&&(Oc.hasOwnProperty(g)?f||(f=[]):(f=f||[]).push(g,null));for(g in d){var k=d[g];b=null!=c?c[g]:void 0;if(d.hasOwnProperty(g)&&k!==b&&(null!=k||null!=b))if("style"===g)if(b){for(h in b)!b.hasOwnProperty(h)||k&&k.hasOwnProperty(h)||(a||(a={}),a[h]="");for(h in k)k.hasOwnProperty(h)&&
b[h]!==k[h]&&(a||(a={}),a[h]=k[h])}else a||(f||(f=[]),f.push(g,a)),a=k;else"dangerouslySetInnerHTML"===g?(k=k?k.__html:void 0,b=b?b.__html:void 0,null!=k&&b!==k&&(f=f||[]).push(g,""+k)):"children"===g?b===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(g,""+k):"suppressContentEditableWarning"!==g&&(Oc.hasOwnProperty(g)?(null!=k&&Rc(e,g),f||b===k||(f=[])):(f=f||[]).push(g,k))}a&&(f=f||[]).push("style",a);return f},updateProperties:function(a,b,c,d,e){Cc(c,d);d=Cc(c,e);for(var f=0;f<b.length;f+=
2){var g=b[f],h=b[f+1];"style"===g?bc.setValueForStyles(a,h):"dangerouslySetInnerHTML"===g?Fc(a,h):"children"===g?Jc(a,h):d?null!=h?hc.setValueForAttribute(a,g,h):hc.deleteValueForAttribute(a,g):null!=h?hc.setValueForProperty(a,g,h):hc.deleteValueForProperty(a,g)}switch(c){case "input":qc.updateWrapper(a,e);Bc.updateValueIfChanged(a);break;case "textarea":wc.updateWrapper(a,e);break;case "select":uc.postUpdateWrapper(a,e)}},diffHydratedProperties:function(a,b,c,d,e){switch(b){case "iframe":case "object":M.trapBubbledEvent("topLoad",
"load",a);break;case "video":case "audio":for(var f in Sc)Sc.hasOwnProperty(f)&&M.trapBubbledEvent(f,Sc[f],a);break;case "source":M.trapBubbledEvent("topError","error",a);break;case "img":case "image":M.trapBubbledEvent("topError","error",a);M.trapBubbledEvent("topLoad","load",a);break;case "form":M.trapBubbledEvent("topReset","reset",a);M.trapBubbledEvent("topSubmit","submit",a);break;case "details":M.trapBubbledEvent("topToggle","toggle",a);break;case "input":qc.initWrapperState(a,c);M.trapBubbledEvent("topInvalid",
"invalid",a);Rc(e,"onChange");break;case "option":sc.validateProps(a,c);break;case "select":uc.initWrapperState(a,c);M.trapBubbledEvent("topInvalid","invalid",a);Rc(e,"onChange");break;case "textarea":wc.initWrapperState(a,c),M.trapBubbledEvent("topInvalid","invalid",a),Rc(e,"onChange")}yc(b,c,Kc);d=null;for(var g in c)c.hasOwnProperty(g)&&(f=c[g],"children"===g?"string"===typeof f?a.textContent!==f&&(d=["children",f]):"number"===typeof f&&a.textContent!==""+f&&(d=["children",""+f]):Oc.hasOwnProperty(g)&&
null!=f&&Rc(e,g));switch(b){case "input":Bc.track(a);qc.postMountWrapper(a,c);break;case "textarea":Bc.track(a);wc.postMountWrapper(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=ca)}return d},diffHydratedText:function(a,b){return a.nodeValue!==b},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,
b,c){switch(b){case "input":qc.restoreControlledState(a,c);break;case "textarea":wc.restoreControlledState(a,c);break;case "select":uc.restoreControlledState(a,c)}}},Tc=void 0;
if(l.canUseDOM)if("function"!==typeof requestIdleCallback){var Uc=null,Vc=null,Wc=!1,Xc=!1,Yc=0,Zc=33,$c=33,ad={timeRemaining:"object"===typeof performance&&"function"===typeof performance.now?function(){return Yc-performance.now()}:function(){return Yc-Date.now()}},bd="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){a.source===window&&a.data===bd&&(Wc=!1,a=Vc,Vc=null,null!==a&&a(ad))},!1);var cd=function(a){Xc=!1;var b=a-Yc+$c;b<$c&&Zc<$c?(8>
b&&(b=8),$c=b<Zc?Zc:b):Zc=b;Yc=a+$c;Wc||(Wc=!0,window.postMessage(bd,"*"));b=Uc;Uc=null;null!==b&&b(a)};Tc=function(a){Vc=a;Xc||(Xc=!0,requestAnimationFrame(cd));return 0}}else Tc=requestIdleCallback;else Tc=function(a){setTimeout(function(){a({timeRemaining:function(){return Infinity}})});return 0};
var dd={rIC:Tc},ed={enableAsyncSubtreeAPI:!0},Q={NoWork:0,SynchronousPriority:1,TaskPriority:2,HighPriority:3,LowPriority:4,OffscreenPriority:5},fd=J.Callback,gd=Q.NoWork,hd=Q.SynchronousPriority,id=Q.TaskPriority,jd=E.ClassComponent,kd=E.HostRoot,md=void 0,nd=void 0;function od(a,b){return a!==id&&a!==hd||b!==id&&b!==hd?a===gd&&b!==gd?-255:a!==gd&&b===gd?255:a-b:0}function pd(){return{first:null,last:null,hasForceUpdate:!1,callbackList:null}}
function qd(a,b,c,d){null!==c?c.next=b:(b.next=a.first,a.first=b);null!==d?b.next=d:a.last=b}function rd(a,b){b=b.priorityLevel;var c=null;if(null!==a.last&&0>=od(a.last.priorityLevel,b))c=a.last;else for(a=a.first;null!==a&&0>=od(a.priorityLevel,b);)c=a,a=a.next;return c}
function sd(a,b){var c=a.alternate,d=a.updateQueue;null===d&&(d=a.updateQueue=pd());null!==c?(a=c.updateQueue,null===a&&(a=c.updateQueue=pd())):a=null;md=d;nd=a!==d?a:null;var e=md;c=nd;var f=rd(e,b),g=null!==f?f.next:e.first;if(null===c)return qd(e,b,f,g),null;d=rd(c,b);a=null!==d?d.next:c.first;qd(e,b,f,g);if(g===a&&null!==g||f===d&&null!==f)return null===d&&(c.first=b),null===a&&(c.last=null),null;b={priorityLevel:b.priorityLevel,partialState:b.partialState,callback:b.callback,isReplace:b.isReplace,
isForced:b.isForced,isTopLevelUnmount:b.isTopLevelUnmount,next:null};qd(c,b,d,a);return b}function td(a,b,c,d){a=a.partialState;return"function"===typeof a?a.call(b,c,d):a}
var ud={addUpdate:function(a,b,c,d){sd(a,{priorityLevel:d,partialState:b,callback:c,isReplace:!1,isForced:!1,isTopLevelUnmount:!1,next:null})},addReplaceUpdate:function(a,b,c,d){sd(a,{priorityLevel:d,partialState:b,callback:c,isReplace:!0,isForced:!1,isTopLevelUnmount:!1,next:null})},addForceUpdate:function(a,b,c){sd(a,{priorityLevel:c,partialState:null,callback:b,isReplace:!1,isForced:!0,isTopLevelUnmount:!1,next:null})},getUpdatePriority:function(a){var b=a.updateQueue;return null===b||a.tag!==
jd&&a.tag!==kd?gd:null!==b.first?b.first.priorityLevel:gd},addTopLevelUpdate:function(a,b,c,d){var e=null===b.element;b={priorityLevel:d,partialState:b,callback:c,isReplace:!1,isForced:!1,isTopLevelUnmount:e,next:null};a=sd(a,b);e&&(e=md,c=nd,null!==e&&null!==b.next&&(b.next=null,e.last=b),null!==c&&null!==a&&null!==a.next&&(a.next=null,c.last=b))},beginUpdateQueue:function(a,b,c,d,e,f,g){null!==a&&a.updateQueue===c&&(c=b.updateQueue={first:c.first,last:c.last,callbackList:null,hasForceUpdate:!1});
a=c.callbackList;for(var h=c.hasForceUpdate,k=!0,p=c.first;null!==p&&0>=od(p.priorityLevel,g);){c.first=p.next;null===c.first&&(c.last=null);var x;if(p.isReplace)e=td(p,d,e,f),k=!0;else if(x=td(p,d,e,f))e=k?n({},e,x):n(e,x),k=!1;p.isForced&&(h=!0);null===p.callback||p.isTopLevelUnmount&&null!==p.next||(a=null!==a?a:[],a.push(p.callback),b.effectTag|=fd);p=p.next}c.callbackList=a;c.hasForceUpdate=h;null!==c.first||null!==a||h||(b.updateQueue=null);return e},commitCallbacks:function(a,b,c){a=b.callbackList;
if(null!==a)for(b.callbackList=null,b=0;b<a.length;b++){var d=a[b];"function"!==typeof d?w("191",d):void 0;d.call(c)}}},vd=[],wd=-1,xd={createCursor:function(a){return{current:a}},isEmpty:function(){return-1===wd},pop:function(a){0>wd||(a.current=vd[wd],vd[wd]=null,wd--)},push:function(a,b){wd++;vd[wd]=a.current;a.current=b},reset:function(){for(;-1<wd;)vd[wd]=null,wd--}},yd=bb.isFiberMounted,zd=E.ClassComponent,Ad=E.HostRoot,Bd=xd.createCursor,Cd=xd.pop,Dd=xd.push,Ed=Bd(da),Fd=Bd(!1),Ld=da;
function Md(a,b,c){a=a.stateNode;a.__reactInternalMemoizedUnmaskedChildContext=b;a.__reactInternalMemoizedMaskedChildContext=c}function Nd(a){return a.tag===zd&&null!=a.type.childContextTypes}function Od(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:w("108",Ra(a)||"Unknown",e);return n({},b,c)}
var R={getUnmaskedContext:function(a){return Nd(a)?Ld:Ed.current},cacheContext:Md,getMaskedContext:function(a,b){var c=a.type.contextTypes;if(!c)return da;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&Md(a,b,e);return e},hasContextChanged:function(){return Fd.current},isContextConsumer:function(a){return a.tag===zd&&null!=a.type.contextTypes},isContextProvider:Nd,popContextProvider:function(a){Nd(a)&&
(Cd(Fd,a),Cd(Ed,a))},popTopLevelContextObject:function(a){Cd(Fd,a);Cd(Ed,a)},pushTopLevelContextObject:function(a,b,c){null!=Ed.cursor?w("168"):void 0;Dd(Ed,b,a);Dd(Fd,c,a)},processChildContext:Od,pushContextProvider:function(a){if(!Nd(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||da;Ld=Ed.current;Dd(Ed,b,a);Dd(Fd,Fd.current,a);return!0},invalidateContextProvider:function(a,b){var c=a.stateNode;c?void 0:w("169");if(b){var d=Od(a,Ld,!0);c.__reactInternalMemoizedMergedChildContext=
d;Cd(Fd,a);Cd(Ed,a);Dd(Ed,d,a)}else Cd(Fd,a);Dd(Fd,b,a)},resetContext:function(){Ld=da;Ed.current=da;Fd.current=!1},findCurrentUnmaskedContext:function(a){for(yd(a)&&a.tag===zd?void 0:w("170");a.tag!==Ad;){if(Nd(a))return a.stateNode.__reactInternalMemoizedMergedChildContext;(a=a["return"])?void 0:w("171")}return a.stateNode.context}},Pd={NoContext:0,AsyncUpdates:1},Qd=E.IndeterminateComponent,Rd=E.ClassComponent,Sd=E.HostRoot,Td=E.HostComponent,Ud=E.HostText,Vd=E.HostPortal,Wd=E.CoroutineComponent,
Xd=E.YieldComponent,Yd=E.Fragment,Zd=Q.NoWork,$d=Pd.NoContext,ae=J.NoEffect;function be(a,b,c){this.tag=a;this.key=b;this.stateNode=this.type=null;this.sibling=this.child=this["return"]=null;this.index=0;this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null;this.internalContextTag=c;this.effectTag=ae;this.lastEffect=this.firstEffect=this.nextEffect=null;this.pendingWorkPriority=Zd;this.alternate=null}
function ce(a,b,c){var d=void 0;"function"===typeof a?(d=a.prototype&&a.prototype.isReactComponent?new be(Rd,b,c):new be(Qd,b,c),d.type=a):"string"===typeof a?(d=new be(Td,b,c),d.type=a):"object"===typeof a&&null!==a&&"number"===typeof a.tag?d=a:w("130",null==a?a:typeof a,"");return d}
var de={createWorkInProgress:function(a,b){var c=a.alternate;null===c?(c=new be(a.tag,a.key,a.internalContextTag),c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.effectTag=ae,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.pendingWorkPriority=b;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c},createHostRootFiber:function(){return new be(Sd,null,$d)},
createFiberFromElement:function(a,b,c){b=ce(a.type,a.key,b,null);b.pendingProps=a.props;b.pendingWorkPriority=c;return b},createFiberFromFragment:function(a,b,c){b=new be(Yd,null,b);b.pendingProps=a;b.pendingWorkPriority=c;return b},createFiberFromText:function(a,b,c){b=new be(Ud,null,b);b.pendingProps=a;b.pendingWorkPriority=c;return b},createFiberFromElementType:ce,createFiberFromHostInstanceForDeletion:function(){var a=new be(Td,null,$d);a.type="DELETED";return a},createFiberFromCoroutine:function(a,
b,c){b=new be(Wd,a.key,b);b.type=a.handler;b.pendingProps=a;b.pendingWorkPriority=c;return b},createFiberFromYield:function(a,b){return new be(Xd,null,b)},createFiberFromPortal:function(a,b,c){b=new be(Vd,a.key,b);b.pendingProps=a.children||[];b.pendingWorkPriority=c;b.stateNode={containerInfo:a.containerInfo,implementation:a.implementation};return b},largerPriority:function(a,b){return a!==Zd&&(b===Zd||b>a)?a:b}},ee=de.createHostRootFiber,fe=E.IndeterminateComponent,ge=E.FunctionalComponent,he=E.ClassComponent,
ie=E.HostComponent,je,ke;"function"===typeof Symbol&&Symbol["for"]?(je=Symbol["for"]("react.coroutine"),ke=Symbol["for"]("react.yield")):(je=60104,ke=60105);
var le={createCoroutine:function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:je,key:null==d?null:""+d,children:a,handler:b,props:c}},createYield:function(a){return{$$typeof:ke,value:a}},isCoroutine:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===je},isYield:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===ke},REACT_YIELD_TYPE:ke,REACT_COROUTINE_TYPE:je},me="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.portal")||
60106,ne={createPortal:function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:me,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}},isPortal:function(a){return"object"===typeof a&&null!==a&&a.$$typeof===me},REACT_PORTAL_TYPE:me},oe=le.REACT_COROUTINE_TYPE,pe=le.REACT_YIELD_TYPE,qe=ne.REACT_PORTAL_TYPE,re=de.createWorkInProgress,se=de.createFiberFromElement,te=de.createFiberFromFragment,ue=de.createFiberFromText,ve=de.createFiberFromCoroutine,
we=de.createFiberFromYield,xe=de.createFiberFromPortal,ye=Array.isArray,ze=E.FunctionalComponent,Ae=E.ClassComponent,Be=E.HostText,Ce=E.HostPortal,De=E.CoroutineComponent,Ee=E.YieldComponent,Fe=E.Fragment,Ge=J.NoEffect,He=J.Placement,Ie=J.Deletion,Je="function"===typeof Symbol&&Symbol.iterator,Ke="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;
function Le(a){if(null===a||"undefined"===typeof a)return null;a=Je&&a[Je]||a["@@iterator"];return"function"===typeof a?a:null}
function Me(a,b){var c=b.ref;if(null!==c&&"function"!==typeof c){if(b._owner){b=b._owner;var d=void 0;b&&("number"===typeof b.tag?(b.tag!==Ae?w("110"):void 0,d=b.stateNode):d=b.getPublicInstance());d?void 0:w("147",c);var e=""+c;if(null!==a&&null!==a.ref&&a.ref._stringRef===e)return a.ref;a=function(a){var b=d.refs===da?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};a._stringRef=e;return a}"string"!==typeof c?w("148"):void 0;b._owner?void 0:w("149",c)}return c}
function Ne(a,b){"textarea"!==a.type&&w("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Oe(a,b){function c(c,d){if(b){if(!a){if(null===d.alternate)return;d=d.alternate}var m=c.lastEffect;null!==m?(m.nextEffect=d,c.lastEffect=d):c.firstEffect=c.lastEffect=d;d.nextEffect=null;d.effectTag=Ie}}function d(a,d){if(!b)return null;for(;null!==d;)c(a,d),d=d.sibling;return null}function e(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function f(b,c){if(a)return b=re(b,c),b.index=0,b.sibling=null,b;b.pendingWorkPriority=c;b.effectTag=Ge;
b.index=0;b.sibling=null;return b}function g(a,c,d){a.index=d;if(!b)return c;d=a.alternate;if(null!==d)return d=d.index,d<c?(a.effectTag=He,c):d;a.effectTag=He;return c}function h(a){b&&null===a.alternate&&(a.effectTag=He);return a}function k(a,b,c,d){if(null===b||b.tag!==Be)return c=ue(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function p(a,b,c,d){if(null===b||b.type!==c.type)return d=se(c,a.internalContextTag,d),d.ref=Me(b,c),d["return"]=a,d;d=f(b,
d);d.ref=Me(b,c);d.pendingProps=c.props;d["return"]=a;return d}function x(a,b,c,d){if(null===b||b.tag!==De)return c=ve(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function S(a,b,c,d){if(null===b||b.tag!==Ee)return b=we(c,a.internalContextTag,d),b.type=c.value,b["return"]=a,b;b=f(b,d);b.type=c.value;b["return"]=a;return b}function D(a,b,c,d){if(null===b||b.tag!==Ce||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return c=
xe(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c.children||[];b["return"]=a;return b}function y(a,b,c,d){if(null===b||b.tag!==Fe)return c=te(c,a.internalContextTag,d),c["return"]=a,c;b=f(b,d);b.pendingProps=c;b["return"]=a;return b}function B(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ue(""+b,a.internalContextTag,c),b["return"]=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ke:return c=se(b,a.internalContextTag,c),c.ref=Me(null,b),c["return"]=
a,c;case oe:return b=ve(b,a.internalContextTag,c),b["return"]=a,b;case pe:return c=we(b,a.internalContextTag,c),c.type=b.value,c["return"]=a,c;case qe:return b=xe(b,a.internalContextTag,c),b["return"]=a,b}if(ye(b)||Le(b))return b=te(b,a.internalContextTag,c),b["return"]=a,b;Ne(a,b)}return null}function H(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ke:return c.key===e?p(a,
b,c,d):null;case oe:return c.key===e?x(a,b,c,d):null;case pe:return null===e?S(a,b,c,d):null;case qe:return c.key===e?D(a,b,c,d):null}if(ye(c)||Le(c))return null!==e?null:y(a,b,c,d);Ne(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,k(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ke:return a=a.get(null===d.key?c:d.key)||null,p(b,a,d,e);case oe:return a=a.get(null===d.key?c:d.key)||null,x(b,a,d,e);case pe:return a=a.get(c)||
null,S(b,a,d,e);case qe:return a=a.get(null===d.key?c:d.key)||null,D(b,a,d,e)}if(ye(d)||Le(d))return a=a.get(c)||null,y(b,a,d,e);Ne(b,d)}return null}function Ca(a,f,h,k){for(var m=null,t=null,q=f,r=f=0,p=null;null!==q&&r<h.length;r++){q.index>r?(p=q,q=null):p=q.sibling;var v=H(a,q,h[r],k);if(null===v){null===q&&(q=p);break}b&&q&&null===v.alternate&&c(a,q);f=g(v,f,r);null===t?m=v:t.sibling=v;t=v;q=p}if(r===h.length)return d(a,q),m;if(null===q){for(;r<h.length;r++)if(q=B(a,h[r],k))f=g(q,f,r),null===
t?m=q:t.sibling=q,t=q;return m}for(q=e(a,q);r<h.length;r++)if(p=C(q,a,r,h[r],k)){if(b&&null!==p.alternate)q["delete"](null===p.key?r:p.key);f=g(p,f,r);null===t?m=p:t.sibling=p;t=p}b&&q.forEach(function(b){return c(a,b)});return m}function r(a,f,h,r){var m=Le(h);"function"!==typeof m?w("150"):void 0;h=m.call(h);null==h?w("151"):void 0;for(var t=m=null,q=f,k=f=0,p=null,v=h.next();null!==q&&!v.done;k++,v=h.next()){q.index>k?(p=q,q=null):p=q.sibling;var V=H(a,q,v.value,r);if(null===V){q||(q=p);break}b&&
q&&null===V.alternate&&c(a,q);f=g(V,f,k);null===t?m=V:t.sibling=V;t=V;q=p}if(v.done)return d(a,q),m;if(null===q){for(;!v.done;k++,v=h.next())v=B(a,v.value,r),null!==v&&(f=g(v,f,k),null===t?m=v:t.sibling=v,t=v);return m}for(q=e(a,q);!v.done;k++,v=h.next())if(v=C(q,a,k,v.value,r),null!==v){if(b&&null!==v.alternate)q["delete"](null===v.key?k:v.key);f=g(v,f,k);null===t?m=v:t.sibling=v;t=v}b&&q.forEach(function(b){return c(a,b)});return m}return function(a,b,e,g){var m="object"===typeof e&&null!==e;if(m)switch(e.$$typeof){case Ke:a:{var C=
e.key;for(m=b;null!==m;){if(m.key===C)if(m.type===e.type){d(a,m.sibling);b=f(m,g);b.ref=Me(m,e);b.pendingProps=e.props;b["return"]=a;a=b;break a}else{d(a,m);break}else c(a,m);m=m.sibling}g=se(e,a.internalContextTag,g);g.ref=Me(b,e);g["return"]=a;a=g}return h(a);case oe:a:{for(m=e.key;null!==b;){if(b.key===m)if(b.tag===De){d(a,b.sibling);b=f(b,g);b.pendingProps=e;b["return"]=a;a=b;break a}else{d(a,b);break}else c(a,b);b=b.sibling}e=ve(e,a.internalContextTag,g);e["return"]=a;a=e}return h(a);case pe:a:{if(null!==
b)if(b.tag===Ee){d(a,b.sibling);b=f(b,g);b.type=e.value;b["return"]=a;a=b;break a}else d(a,b);b=we(e,a.internalContextTag,g);b.type=e.value;b["return"]=a;a=b}return h(a);case qe:a:{for(m=e.key;null!==b;){if(b.key===m)if(b.tag===Ce&&b.stateNode.containerInfo===e.containerInfo&&b.stateNode.implementation===e.implementation){d(a,b.sibling);b=f(b,g);b.pendingProps=e.children||[];b["return"]=a;a=b;break a}else{d(a,b);break}else c(a,b);b=b.sibling}e=xe(e,a.internalContextTag,g);e["return"]=a;a=e}return h(a)}if("string"===
typeof e||"number"===typeof e)return e=""+e,null!==b&&b.tag===Be?(d(a,b.sibling),b=f(b,g),b.pendingProps=e,b["return"]=a,a=b):(d(a,b),e=ue(e,a.internalContextTag,g),e["return"]=a,a=e),h(a);if(ye(e))return Ca(a,b,e,g);if(Le(e))return r(a,b,e,g);m&&Ne(a,e);if("undefined"===typeof e)switch(a.tag){case Ae:case ze:e=a.type,w("152",e.displayName||e.name||"Component")}return d(a,b)}}
var Pe=Oe(!0,!0),Qe=Oe(!1,!0),Re=Oe(!1,!1),Se={reconcileChildFibers:Pe,reconcileChildFibersInPlace:Qe,mountChildFibersInPlace:Re,cloneChildFibers:function(a,b){null!==a&&b.child!==a.child?w("153"):void 0;if(null!==b.child){a=b.child;var c=re(a,a.pendingWorkPriority);c.pendingProps=a.pendingProps;b.child=c;for(c["return"]=b;null!==a.sibling;)a=a.sibling,c=c.sibling=re(a,a.pendingWorkPriority),c.pendingProps=a.pendingProps,c["return"]=b;c.sibling=null}}},Te=J.Update,Ue=Pd.AsyncUpdates,Ve=R.cacheContext,
We=R.getMaskedContext,Xe=R.getUnmaskedContext,Ye=R.isContextConsumer,Ze=ud.addUpdate,$e=ud.addReplaceUpdate,af=ud.addForceUpdate,bf=ud.beginUpdateQueue,cf=R.hasContextChanged,df=bb.isMounted;
function ef(a,b,c,d){function e(a,b){b.updater=f;a.stateNode=b;Pa.set(b,a)}var f={isMounted:df,enqueueSetState:function(c,d,e){c=Pa.get(c);var f=b(c,!1);Ze(c,d,void 0===e?null:e,f);a(c,f)},enqueueReplaceState:function(c,d,e){c=Pa.get(c);var f=b(c,!1);$e(c,d,void 0===e?null:e,f);a(c,f)},enqueueForceUpdate:function(c,d){c=Pa.get(c);var e=b(c,!1);af(c,void 0===d?null:d,e);a(c,e)}};return{adoptClassInstance:e,constructClassInstance:function(a,b){var c=a.type,d=Xe(a),f=Ye(a),g=f?We(a,d):da;b=new c(b,g);
e(a,b);f&&Ve(a,d,g);return b},mountClassInstance:function(a,b){var c=a.alternate,d=a.stateNode,e=d.state||null,g=a.pendingProps;g?void 0:w("158");var h=Xe(a);d.props=g;d.state=e;d.refs=da;d.context=We(a,h);ed.enableAsyncSubtreeAPI&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent&&(a.internalContextTag|=Ue);"function"===typeof d.componentWillMount&&(h=d.state,d.componentWillMount(),h!==d.state&&f.enqueueReplaceState(d,d.state,null),h=a.updateQueue,null!==
h&&(d.state=bf(c,a,h,d,e,g,b)));"function"===typeof d.componentDidMount&&(a.effectTag|=Te)},updateClassInstance:function(a,b,e){var g=b.stateNode;g.props=b.memoizedProps;g.state=b.memoizedState;var h=b.memoizedProps,k=b.pendingProps;k||(k=h,null==k?w("159"):void 0);var D=g.context,y=Xe(b);y=We(b,y);"function"!==typeof g.componentWillReceiveProps||h===k&&D===y||(D=g.state,g.componentWillReceiveProps(k,y),g.state!==D&&f.enqueueReplaceState(g,g.state,null));D=b.memoizedState;e=null!==b.updateQueue?bf(a,
b,b.updateQueue,g,D,k,e):D;if(!(h!==k||D!==e||cf()||null!==b.updateQueue&&b.updateQueue.hasForceUpdate))return"function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&D===a.memoizedState||(b.effectTag|=Te),!1;var B=k;if(null===h||null!==b.updateQueue&&b.updateQueue.hasForceUpdate)B=!0;else{var H=b.stateNode,C=b.type;B="function"===typeof H.shouldComponentUpdate?H.shouldComponentUpdate(B,e,y):C.prototype&&C.prototype.isPureReactComponent?!ea(h,B)||!ea(D,e):!0}B?("function"===typeof g.componentWillUpdate&&
g.componentWillUpdate(k,e,y),"function"===typeof g.componentDidUpdate&&(b.effectTag|=Te)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&D===a.memoizedState||(b.effectTag|=Te),c(b,k),d(b,e));g.props=k;g.state=e;g.context=y;return B}}}
var ff=Se.mountChildFibersInPlace,gf=Se.reconcileChildFibers,hf=Se.reconcileChildFibersInPlace,jf=Se.cloneChildFibers,kf=ud.beginUpdateQueue,lf=R.getMaskedContext,mf=R.getUnmaskedContext,nf=R.hasContextChanged,of=R.pushContextProvider,pf=R.pushTopLevelContextObject,qf=R.invalidateContextProvider,rf=E.IndeterminateComponent,sf=E.FunctionalComponent,tf=E.ClassComponent,uf=E.HostRoot,wf=E.HostComponent,xf=E.HostText,yf=E.HostPortal,zf=E.CoroutineComponent,Af=E.CoroutineHandlerPhase,Bf=E.YieldComponent,
Cf=E.Fragment,Df=Q.NoWork,Ef=Q.OffscreenPriority,Ff=J.PerformedWork,Gf=J.Placement,Hf=J.ContentReset,If=J.Err,Jf=J.Ref,Kf=Qa.ReactCurrentOwner;
function Lf(a,b,c,d,e){function f(a,b,c){g(a,b,c,b.pendingWorkPriority)}function g(a,b,c,d){b.child=null===a?ff(b,b.child,c,d):a.child===b.child?gf(b,b.child,c,d):hf(b,b.child,c,d)}function h(a,b){var c=b.ref;null===c||a&&a.ref===c||(b.effectTag|=Jf)}function k(a,b,c,d){h(a,b);if(!c)return d&&qf(b,!1),x(a,b);c=b.stateNode;Kf.current=b;var e=c.render();b.effectTag|=Ff;f(a,b,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&qf(b,!0);return b.child}function p(a){var b=a.stateNode;b.pendingContext?
pf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&pf(a,b.context,!1);C(a,b.containerInfo)}function x(a,b){jf(a,b);return b.child}function S(a,b){switch(b.tag){case uf:p(b);break;case tf:of(b);break;case yf:C(b,b.stateNode.containerInfo)}return null}var D=a.shouldSetTextContent,y=a.useSyncScheduling,B=a.shouldDeprioritizeSubtree,H=b.pushHostContext,C=b.pushHostContainer,Ca=c.enterHydrationState,r=c.resetHydrationState,m=c.tryToClaimNextHydratableInstance;a=ef(d,e,function(a,b){a.memoizedProps=
b},function(a,b){a.memoizedState=b});var t=a.adoptClassInstance,v=a.constructClassInstance,V=a.mountClassInstance,ld=a.updateClassInstance;return{beginWork:function(a,b,c){if(b.pendingWorkPriority===Df||b.pendingWorkPriority>c)return S(a,b);switch(b.tag){case rf:null!==a?w("155"):void 0;var d=b.type,e=b.pendingProps,g=mf(b);g=lf(b,g);d=d(e,g);b.effectTag|=Ff;"object"===typeof d&&null!==d&&"function"===typeof d.render?(b.tag=tf,e=of(b),t(b,d),V(b,c),b=k(a,b,!0,e)):(b.tag=sf,f(a,b,d),b.memoizedProps=
e,b=b.child);return b;case sf:a:{e=b.type;c=b.pendingProps;d=b.memoizedProps;if(nf())null===c&&(c=d);else if(null===c||d===c){b=x(a,b);break a}d=mf(b);d=lf(b,d);e=e(c,d);b.effectTag|=Ff;f(a,b,e);b.memoizedProps=c;b=b.child}return b;case tf:return e=of(b),d=void 0,null===a?b.stateNode?w("153"):(v(b,b.pendingProps),V(b,c),d=!0):d=ld(a,b,c),k(a,b,d,e);case uf:return p(b),d=b.updateQueue,null!==d?(e=b.memoizedState,d=kf(a,b,d,null,e,null,c),e===d?(r(),b=x(a,b)):(e=d.element,null!==a&&null!==a.child||
!Ca(b)?(r(),f(a,b,e)):(b.effectTag|=Gf,b.child=ff(b,b.child,e,c)),b.memoizedState=d,b=b.child)):(r(),b=x(a,b)),b;case wf:H(b);null===a&&m(b);e=b.type;var q=b.memoizedProps;d=b.pendingProps;null===d&&(d=q,null===d?w("154"):void 0);g=null!==a?a.memoizedProps:null;nf()||null!==d&&q!==d?(q=d.children,D(e,d)?q=null:g&&D(e,g)&&(b.effectTag|=Hf),h(a,b),c!==Ef&&!y&&B(e,d)?(b.pendingWorkPriority=Ef,b=null):(f(a,b,q),b.memoizedProps=d,b=b.child)):b=x(a,b);return b;case xf:return null===a&&m(b),a=b.pendingProps,
null===a&&(a=b.memoizedProps),b.memoizedProps=a,null;case Af:b.tag=zf;case zf:c=b.pendingProps;if(nf())null===c&&(c=a&&a.memoizedProps,null===c?w("154"):void 0);else if(null===c||b.memoizedProps===c)c=b.memoizedProps;e=c.children;d=b.pendingWorkPriority;b.stateNode=null===a?ff(b,b.stateNode,e,d):a.child===b.child?gf(b,b.stateNode,e,d):hf(b,b.stateNode,e,d);b.memoizedProps=c;return b.stateNode;case Bf:return null;case yf:a:{C(b,b.stateNode.containerInfo);c=b.pendingWorkPriority;e=b.pendingProps;if(nf())null===
e&&(e=a&&a.memoizedProps,null==e?w("154"):void 0);else if(null===e||b.memoizedProps===e){b=x(a,b);break a}null===a?b.child=hf(b,b.child,e,c):f(a,b,e);b.memoizedProps=e;b=b.child}return b;case Cf:a:{c=b.pendingProps;if(nf())null===c&&(c=b.memoizedProps);else if(null===c||b.memoizedProps===c){b=x(a,b);break a}f(a,b,c);b.memoizedProps=c;b=b.child}return b;default:w("156")}},beginFailedWork:function(a,b,c){switch(b.tag){case tf:of(b);break;case uf:p(b);break;default:w("157")}b.effectTag|=If;null===a?
b.child=null:b.child!==a.child&&(b.child=a.child);if(b.pendingWorkPriority===Df||b.pendingWorkPriority>c)return S(a,b);b.firstEffect=null;b.lastEffect=null;g(a,b,null,c);b.tag===tf&&(a=b.stateNode,b.memoizedProps=a.props,b.memoizedState=a.state);return b.child}}}
var Mf=Se.reconcileChildFibers,Nf=R.popContextProvider,Of=R.popTopLevelContextObject,Pf=E.IndeterminateComponent,Qf=E.FunctionalComponent,Rf=E.ClassComponent,Sf=E.HostRoot,Tf=E.HostComponent,Uf=E.HostText,Vf=E.HostPortal,Wf=E.CoroutineComponent,Xf=E.CoroutineHandlerPhase,Yf=E.YieldComponent,Zf=E.Fragment,ag=J.Placement,bg=J.Ref,cg=J.Update,dg=Q.OffscreenPriority;
function eg(a,b,c){var d=a.createInstance,e=a.createTextInstance,f=a.appendInitialChild,g=a.finalizeInitialChildren,h=a.prepareUpdate,k=b.getRootHostContainer,p=b.popHostContext,x=b.getHostContext,S=b.popHostContainer,D=c.prepareToHydrateHostInstance,y=c.prepareToHydrateHostTextInstance,B=c.popHydrationState;return{completeWork:function(a,b,c){var r=b.pendingProps;if(null===r)r=b.memoizedProps;else if(b.pendingWorkPriority!==dg||c===dg)b.pendingProps=null;switch(b.tag){case Qf:return null;case Rf:return Nf(b),
null;case Sf:S(b);Of(b);r=b.stateNode;r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null);if(null===a||null===a.child)B(b),b.effectTag&=~ag;return null;case Tf:p(b);c=k();var m=b.type;if(null!==a&&null!=b.stateNode){var t=a.memoizedProps,C=b.stateNode,V=x();r=h(C,m,t,r,c,V);if(b.updateQueue=r)b.effectTag|=cg;a.ref!==b.ref&&(b.effectTag|=bg)}else{if(!r)return null===b.stateNode?w("166"):void 0,null;a=x();if(B(b))D(b,c,a)&&(b.effectTag|=cg);else{a=d(m,r,c,a,b);a:for(t=b.child;null!==
t;){if(t.tag===Tf||t.tag===Uf)f(a,t.stateNode);else if(t.tag!==Vf&&null!==t.child){t=t.child;continue}if(t===b)break a;for(;null===t.sibling;){if(null===t["return"]||t["return"]===b)break a;t=t["return"]}t=t.sibling}g(a,m,r,c)&&(b.effectTag|=cg);b.stateNode=a}null!==b.ref&&(b.effectTag|=bg)}return null;case Uf:if(a&&null!=b.stateNode)a.memoizedProps!==r&&(b.effectTag|=cg);else{if("string"!==typeof r)return null===b.stateNode?w("166"):void 0,null;a=k();c=x();B(b)?y(b)&&(b.effectTag|=cg):b.stateNode=
e(r,a,c,b)}return null;case Wf:(r=b.memoizedProps)?void 0:w("165");b.tag=Xf;c=[];a:for((m=b.stateNode)&&(m["return"]=b);null!==m;){if(m.tag===Tf||m.tag===Uf||m.tag===Vf)w("164");else if(m.tag===Yf)c.push(m.type);else if(null!==m.child){m.child["return"]=m;m=m.child;continue}for(;null===m.sibling;){if(null===m["return"]||m["return"]===b)break a;m=m["return"]}m.sibling["return"]=m["return"];m=m.sibling}m=r.handler;r=m(r.props,c);b.child=Mf(b,null!==a?a.child:null,r,b.pendingWorkPriority);return b.child;
case Xf:return b.tag=Wf,null;case Yf:return null;case Zf:return null;case Vf:return b.effectTag|=cg,S(b),null;case Pf:w("167");default:w("156")}}}}var fg=null,gg=null;function hg(a){return function(b){try{return a(b)}catch(c){}}}
var ig={injectInternals:function(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!b.supportsFiber)return!0;try{var c=b.inject(a);fg=hg(function(a){return b.onCommitFiberRoot(c,a)});gg=hg(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0},onCommitRoot:function(a){"function"===typeof fg&&fg(a)},onCommitUnmount:function(a){"function"===typeof gg&&gg(a)}},jg=E.ClassComponent,kg=E.HostRoot,lg=E.HostComponent,mg=E.HostText,ng=
E.HostPortal,og=E.CoroutineComponent,pg=ud.commitCallbacks,qg=ig.onCommitUnmount,rg=J.Placement,sg=J.Update,tg=J.Callback,ug=J.ContentReset;
function vg(a,b){function c(a){var c=a.ref;if(null!==c)try{c(null)}catch(t){b(a,t)}}function d(a){return a.tag===lg||a.tag===kg||a.tag===ng}function e(a){for(var b=a;;)if(g(b),null!==b.child&&b.tag!==ng)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}function f(a){for(var b=a,c=!1,d=void 0,f=void 0;;){if(!c){c=b["return"];a:for(;;){null===c?w("160"):void 0;switch(c.tag){case lg:d=
c.stateNode;f=!1;break a;case kg:d=c.stateNode.containerInfo;f=!0;break a;case ng:d=c.stateNode.containerInfo;f=!0;break a}c=c["return"]}c=!0}if(b.tag===lg||b.tag===mg)e(b),f?C(d,b.stateNode):H(d,b.stateNode);else if(b.tag===ng?d=b.stateNode.containerInfo:g(b),null!==b.child){b.child["return"]=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"];b.tag===ng&&(c=!1)}b.sibling["return"]=b["return"];b=b.sibling}}function g(a){"function"===
typeof qg&&qg(a);switch(a.tag){case jg:c(a);var d=a.stateNode;if("function"===typeof d.componentWillUnmount)try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(t){b(a,t)}break;case lg:c(a);break;case og:e(a.stateNode);break;case ng:f(a)}}var h=a.commitMount,k=a.commitUpdate,p=a.resetTextContent,x=a.commitTextUpdate,S=a.appendChild,D=a.appendChildToContainer,y=a.insertBefore,B=a.insertInContainerBefore,H=a.removeChild,C=a.removeChildFromContainer,Ca=a.getPublicInstance;
return{commitPlacement:function(a){a:{for(var b=a["return"];null!==b;){if(d(b)){var c=b;break a}b=b["return"]}w("160");c=void 0}var e=b=void 0;switch(c.tag){case lg:b=c.stateNode;e=!1;break;case kg:b=c.stateNode.containerInfo;e=!0;break;case ng:b=c.stateNode.containerInfo;e=!0;break;default:w("161")}c.effectTag&ug&&(p(b),c.effectTag&=~ug);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||d(c["return"])){c=null;break a}c=c["return"]}c.sibling["return"]=c["return"];for(c=c.sibling;c.tag!==
lg&&c.tag!==mg;){if(c.effectTag&rg)continue b;if(null===c.child||c.tag===ng)continue b;else c.child["return"]=c,c=c.child}if(!(c.effectTag&rg)){c=c.stateNode;break a}}for(var f=a;;){if(f.tag===lg||f.tag===mg)c?e?B(b,f.stateNode,c):y(b,f.stateNode,c):e?D(b,f.stateNode):S(b,f.stateNode);else if(f.tag!==ng&&null!==f.child){f.child["return"]=f;f=f.child;continue}if(f===a)break;for(;null===f.sibling;){if(null===f["return"]||f["return"]===a)return;f=f["return"]}f.sibling["return"]=f["return"];f=f.sibling}},
commitDeletion:function(a){f(a);a["return"]=null;a.child=null;a.alternate&&(a.alternate.child=null,a.alternate["return"]=null)},commitWork:function(a,b){switch(b.tag){case jg:break;case lg:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&k(c,f,e,a,d,b)}break;case mg:null===b.stateNode?w("162"):void 0;c=b.memoizedProps;x(b.stateNode,null!==a?a.memoizedProps:c,c);break;case kg:break;case ng:break;default:w("163")}},
commitLifeCycles:function(a,b){switch(b.tag){case jg:var c=b.stateNode;if(b.effectTag&sg)if(null===a)c.props=b.memoizedProps,c.state=b.memoizedState,c.componentDidMount();else{var d=a.memoizedProps;a=a.memoizedState;c.props=b.memoizedProps;c.state=b.memoizedState;c.componentDidUpdate(d,a)}b.effectTag&tg&&null!==b.updateQueue&&pg(b,b.updateQueue,c);break;case kg:a=b.updateQueue;null!==a&&pg(b,a,b.child&&b.child.stateNode);break;case lg:c=b.stateNode;null===a&&b.effectTag&sg&&h(c,b.type,b.memoizedProps,
b);break;case mg:break;case ng:break;default:w("163")}},commitAttachRef:function(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case lg:b(Ca(c));break;default:b(c)}}},commitDetachRef:function(a){a=a.ref;null!==a&&a(null)}}}var wg=xd.createCursor,xg=xd.pop,yg=xd.push,zg={};
function Ag(a){function b(a){a===zg?w("174"):void 0;return a}var c=a.getChildHostContext,d=a.getRootHostContext,e=wg(zg),f=wg(zg),g=wg(zg);return{getHostContext:function(){return b(e.current)},getRootHostContainer:function(){return b(g.current)},popHostContainer:function(a){xg(e,a);xg(f,a);xg(g,a)},popHostContext:function(a){f.current===a&&(xg(e,a),xg(f,a))},pushHostContainer:function(a,b){yg(g,b,a);b=d(b);yg(f,a,a);yg(e,b,a)},pushHostContext:function(a){var d=b(g.current),h=b(e.current);d=c(h,a.type,
d);h!==d&&(yg(f,a,a),yg(e,d,a))},resetHostContainer:function(){e.current=zg;g.current=zg}}}var Bg=E.HostComponent,Cg=E.HostText,Dg=E.HostRoot,Eg=J.Deletion,Fg=J.Placement,Gg=de.createFiberFromHostInstanceForDeletion;
function Hg(a){function b(a,b){var c=Gg();c.stateNode=b;c["return"]=a;c.effectTag=Eg;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function c(a,b){switch(a.tag){case Bg:return f(b,a.type,a.pendingProps);case Cg:return g(b,a.pendingProps);default:return!1}}function d(a){for(a=a["return"];null!==a&&a.tag!==Bg&&a.tag!==Dg;)a=a["return"];y=a}var e=a.shouldSetTextContent,f=a.canHydrateInstance,g=a.canHydrateTextInstance,h=a.getNextHydratableSibling,k=a.getFirstHydratableChild,
p=a.hydrateInstance,x=a.hydrateTextInstance,S=a.didNotHydrateInstance,D=a.didNotFindHydratableInstance;a=a.didNotFindHydratableTextInstance;if(!(f&&g&&h&&k&&p&&x&&S&&D&&a))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){w("175")},prepareToHydrateHostTextInstance:function(){w("176")},popHydrationState:function(){return!1}};var y=null,B=null,H=!1;return{enterHydrationState:function(a){B=
k(a.stateNode.containerInfo);y=a;return H=!0},resetHydrationState:function(){B=y=null;H=!1},tryToClaimNextHydratableInstance:function(a){if(H){var d=B;if(d){if(!c(a,d)){d=h(d);if(!d||!c(a,d)){a.effectTag|=Fg;H=!1;y=a;return}b(y,B)}a.stateNode=d;y=a;B=k(d)}else a.effectTag|=Fg,H=!1,y=a}},prepareToHydrateHostInstance:function(a,b,c){b=p(a.stateNode,a.type,a.memoizedProps,b,c,a);a.updateQueue=b;return null!==b?!0:!1},prepareToHydrateHostTextInstance:function(a){return x(a.stateNode,a.memoizedProps,a)},
popHydrationState:function(a){if(a!==y)return!1;if(!H)return d(a),H=!0,!1;var c=a.type;if(a.tag!==Bg||"head"!==c&&"body"!==c&&!e(c,a.memoizedProps))for(c=B;c;)b(a,c),c=h(c);d(a);B=y?h(a.stateNode):null;return!0}}}
var Ig=R.popContextProvider,Jg=xd.reset,Kg=Qa.ReactCurrentOwner,Lg=de.createWorkInProgress,Mg=de.largerPriority,Ng=ig.onCommitRoot,T=Q.NoWork,Og=Q.SynchronousPriority,U=Q.TaskPriority,Pg=Q.HighPriority,Qg=Q.LowPriority,Rg=Q.OffscreenPriority,Sg=Pd.AsyncUpdates,Tg=J.PerformedWork,Ug=J.Placement,Vg=J.Update,Wg=J.PlacementAndUpdate,Xg=J.Deletion,Yg=J.ContentReset,Zg=J.Callback,$g=J.Err,ah=J.Ref,bh=E.HostRoot,ch=E.HostComponent,dh=E.HostPortal,eh=E.ClassComponent,fh=ud.getUpdatePriority,gh=R.resetContext;
function hh(a){function b(){for(;null!==ma&&ma.current.pendingWorkPriority===T;){ma.isScheduled=!1;var a=ma.nextScheduledRoot;ma.nextScheduledRoot=null;if(ma===zb)return zb=ma=null,z=T,null;ma=a}a=ma;for(var b=null,c=T;null!==a;)a.current.pendingWorkPriority!==T&&(c===T||c>a.current.pendingWorkPriority)&&(c=a.current.pendingWorkPriority,b=a),a=a.nextScheduledRoot;null!==b?(z=c,Jg(),gh(),t(),I=Lg(b.current,c),b!==nc&&(oc=0,nc=b)):(z=T,nc=I=null)}function c(c){Hd=!0;na=null;var d=c.stateNode;d.current===
c?w("177"):void 0;z!==Og&&z!==U||oc++;Kg.current=null;if(c.effectTag>Tg)if(null!==c.lastEffect){c.lastEffect.nextEffect=c;var e=c.firstEffect}else e=c;else e=c.firstEffect;Ui();for(u=e;null!==u;){var f=!1,g=void 0;try{for(;null!==u;){var h=u.effectTag;h&Yg&&a.resetTextContent(u.stateNode);if(h&ah){var k=u.alternate;null!==k&&Ph(k)}switch(h&~(Zg|$g|Yg|ah|Tg)){case Ug:q(u);u.effectTag&=~Ug;break;case Wg:q(u);u.effectTag&=~Ug;vf(u.alternate,u);break;case Vg:vf(u.alternate,u);break;case Xg:Id=!0,Mh(u),
Id=!1}u=u.nextEffect}}catch(Jd){f=!0,g=Jd}f&&(null===u?w("178"):void 0,x(u,g),null!==u&&(u=u.nextEffect))}Vi();d.current=c;for(u=e;null!==u;){d=!1;e=void 0;try{for(;null!==u;){var Gd=u.effectTag;Gd&(Vg|Zg)&&Nh(u.alternate,u);Gd&ah&&Oh(u);if(Gd&$g)switch(f=u,g=void 0,null!==P&&(g=P.get(f),P["delete"](f),null==g&&null!==f.alternate&&(f=f.alternate,g=P.get(f),P["delete"](f))),null==g?w("184"):void 0,f.tag){case eh:f.stateNode.componentDidCatch(g.error,{componentStack:g.componentStack});break;case bh:null===
Ja&&(Ja=g.error);break;default:w("157")}var m=u.nextEffect;u.nextEffect=null;u=m}}catch(Jd){d=!0,e=Jd}d&&(null===u?w("178"):void 0,x(u,e),null!==u&&(u=u.nextEffect))}Hd=!1;"function"===typeof Ng&&Ng(c.stateNode);va&&(va.forEach(H),va=null);b()}function d(a){for(;;){var b=Lh(a.alternate,a,z),c=a["return"],d=a.sibling;var e=a;if(!(e.pendingWorkPriority!==T&&e.pendingWorkPriority>z)){for(var f=fh(e),g=e.child;null!==g;)f=Mg(f,g.pendingWorkPriority),g=g.sibling;e.pendingWorkPriority=f}if(null!==b)return b;
null!==c&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),a.effectTag>Tg&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{na=a;break}}return null}function e(a){var b=V(a.alternate,a,z);null===b&&(b=d(a));Kg.current=null;return b}function f(a){var b=ld(a.alternate,a,z);null===b&&(b=d(a));Kg.current=null;return b}
function g(a){p(Rg,a)}function h(){if(null!==P&&0<P.size&&z===U)for(;null!==I;){var a=I;I=null!==P&&(P.has(a)||null!==a.alternate&&P.has(a.alternate))?f(I):e(I);if(null===I&&(null===na?w("179"):void 0,O=U,c(na),O=z,null===P||0===P.size||z!==U))break}}function k(a,d){null!==na?(O=U,c(na),h()):null===I&&b();if(!(z===T||z>a)){O=z;a:do{if(z<=U)for(;null!==I&&!(I=e(I),null===I&&(null===na?w("179"):void 0,O=U,c(na),O=z,h(),z===T||z>a||z>U)););else if(null!==d)for(;null!==I&&!Ab;)if(1<d.timeRemaining()){if(I=
e(I),null===I)if(null===na?w("179"):void 0,1<d.timeRemaining()){if(O=U,c(na),O=z,h(),z===T||z>a||z<Pg)break}else Ab=!0}else Ab=!0;switch(z){case Og:case U:if(z<=a)continue a;break a;case Pg:case Qg:case Rg:if(null===d)break a;if(!Ab&&z<=a)continue a;break a;case T:break a;default:w("181")}}while(1)}}function p(a,b){Da?w("182"):void 0;Da=!0;var c=O,d=!1,e=null;try{k(a,b)}catch(Kd){d=!0,e=Kd}for(;d;){if(Ya){Ja=e;break}var h=I;if(null===h)Ya=!0;else{var p=x(h,e);null===p?w("183"):void 0;if(!Ya){try{d=
p;e=a;p=b;for(var q=d;null!==h;){switch(h.tag){case eh:Ig(h);break;case ch:m(h);break;case bh:r(h);break;case dh:r(h)}if(h===q||h.alternate===q)break;h=h["return"]}I=f(d);k(e,p)}catch(Kd){d=!0;e=Kd;continue}break}}}O=c;null!==b&&(Bb=!1);z>U&&!Bb&&($f(g),Bb=!0);a=Ja;Ya=Ab=Da=!1;nc=Ka=P=Ja=null;oc=0;if(null!==a)throw a;}function x(a,b){var c=Kg.current=null,d=!1,e=!1,f=null;if(a.tag===bh)c=a,S(a)&&(Ya=!0);else for(var g=a["return"];null!==g&&null===c;){g.tag===eh?"function"===typeof g.stateNode.componentDidCatch&&
(d=!0,f=Ra(g),c=g,e=!0):g.tag===bh&&(c=g);if(S(g)){if(Id||null!==va&&(va.has(g)||null!==g.alternate&&va.has(g.alternate)))return null;c=null;e=!1}g=g["return"]}if(null!==c){null===Ka&&(Ka=new Set);Ka.add(c);var h="";g=a;do{a:switch(g.tag){case fe:case ge:case he:case ie:var k=g._debugOwner,m=g._debugSource;var p=Ra(g);var q=null;k&&(q=Ra(k));k=m;p="\n    in "+(p||"Unknown")+(k?" (at "+k.fileName.replace(/^.*[\\\/]/,"")+":"+k.lineNumber+")":q?" (created by "+q+")":"");break a;default:p=""}h+=p;g=g["return"]}while(g);
g=h;a=Ra(a);null===P&&(P=new Map);b={componentName:a,componentStack:g,error:b,errorBoundary:d?c.stateNode:null,errorBoundaryFound:d,errorBoundaryName:f,willRetry:e};P.set(c,b);try{console.error(b.error)}catch(Wi){console.error(Wi)}Hd?(null===va&&(va=new Set),va.add(c)):H(c);return c}null===Ja&&(Ja=b);return null}function S(a){return null!==Ka&&(Ka.has(a)||null!==a.alternate&&Ka.has(a.alternate))}function D(a,b){return y(a,b,!1)}function y(a,b){oc>Xi&&(Ya=!0,w("185"));!Da&&b<=z&&(I=null);for(var c=
!0;null!==a&&c;){c=!1;if(a.pendingWorkPriority===T||a.pendingWorkPriority>b)c=!0,a.pendingWorkPriority=b;null!==a.alternate&&(a.alternate.pendingWorkPriority===T||a.alternate.pendingWorkPriority>b)&&(c=!0,a.alternate.pendingWorkPriority=b);if(null===a["return"])if(a.tag===bh){var d=a.stateNode;b===T||d.isScheduled||(d.isScheduled=!0,zb?zb.nextScheduledRoot=d:ma=d,zb=d);if(!Da)switch(b){case Og:pc?p(Og,null):p(U,null);break;case U:W?void 0:w("186");break;default:Bb||($f(g),Bb=!0)}}else break;a=a["return"]}}
function B(a,b){var c=O;c===T&&(c=!Yi||a.internalContextTag&Sg||b?Qg:Og);return c===Og&&(Da||W)?U:c}function H(a){y(a,U,!0)}var C=Ag(a),Ca=Hg(a),r=C.popHostContainer,m=C.popHostContext,t=C.resetHostContainer,v=Lf(a,C,Ca,D,B),V=v.beginWork,ld=v.beginFailedWork,Lh=eg(a,C,Ca).completeWork;C=vg(a,x);var q=C.commitPlacement,Mh=C.commitDeletion,vf=C.commitWork,Nh=C.commitLifeCycles,Oh=C.commitAttachRef,Ph=C.commitDetachRef,$f=a.scheduleDeferredCallback,Yi=a.useSyncScheduling,Ui=a.prepareForCommit,Vi=a.resetAfterCommit,
O=T,Da=!1,Ab=!1,W=!1,pc=!1,I=null,z=T,u=null,na=null,ma=null,zb=null,Bb=!1,P=null,Ka=null,va=null,Ja=null,Ya=!1,Hd=!1,Id=!1,Xi=1E3,oc=0,nc=null;return{scheduleUpdate:D,getPriorityContext:B,batchedUpdates:function(a,b){var c=W;W=!0;try{return a(b)}finally{W=c,Da||W||p(U,null)}},unbatchedUpdates:function(a){var b=pc,c=W;pc=W;W=!1;try{return a()}finally{W=c,pc=b}},flushSync:function(a){var b=W,c=O;W=!0;O=Og;try{return a()}finally{W=b,O=c,Da?w("187"):void 0,p(U,null)}},deferredUpdates:function(a){var b=
O;O=Qg;try{return a()}finally{O=b}}}}function ih(){w("196")}function jh(a){if(!a)return da;a=Pa.get(a);return"number"===typeof a.tag?ih(a):a._processChildContext(a._context)}jh._injectFiber=function(a){ih=a};var kh=ud.addTopLevelUpdate,lh=R.findCurrentUnmaskedContext,mh=R.isContextProvider,nh=R.processChildContext,oh=E.HostComponent,ph=bb.findCurrentHostFiber,qh=bb.findCurrentHostFiberWithNoPortals;jh._injectFiber(function(a){var b=lh(a);return mh(a)?nh(a,b,!1):b});var rh=F.TEXT_NODE;
function sh(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function th(a,b){var c=sh(a);a=0;for(var d;c;){if(c.nodeType===rh){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=sh(c)}}var uh=null;function vh(){!uh&&l.canUseDOM&&(uh="textContent"in document.documentElement?"textContent":"innerText");return uh}
var wh={getOffsets:function(a){var b=window.getSelection&&window.getSelection();if(!b||0===b.rangeCount)return null;var c=b.anchorNode,d=b.anchorOffset,e=b.focusNode,f=b.focusOffset,g=b.getRangeAt(0);try{g.startContainer.nodeType,g.endContainer.nodeType}catch(k){return null}b=b.anchorNode===b.focusNode&&b.anchorOffset===b.focusOffset?0:g.toString().length;var h=g.cloneRange();h.selectNodeContents(a);h.setEnd(g.startContainer,g.startOffset);a=h.startContainer===h.endContainer&&h.startOffset===h.endOffset?
0:h.toString().length;g=a+b;b=document.createRange();b.setStart(c,d);b.setEnd(e,f);c=b.collapsed;return{start:c?g:a,end:c?a:g}},setOffsets:function(a,b){if(window.getSelection){var c=window.getSelection(),d=a[vh()].length,e=Math.min(b.start,d);b=void 0===b.end?e:Math.min(b.end,d);!c.extend&&e>b&&(d=b,b=e,e=d);d=th(a,e);a=th(a,b);if(d&&a){var f=document.createRange();f.setStart(d.node,d.offset);c.removeAllRanges();e>b?(c.addRange(f),c.extend(a.node,a.offset)):(f.setEnd(a.node,a.offset),c.addRange(f))}}}},
xh=F.ELEMENT_NODE,yh={hasSelectionCapabilities:function(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)},getSelectionInformation:function(){var a=ia();return{focusedElem:a,selectionRange:yh.hasSelectionCapabilities(a)?yh.getSelection(a):null}},restoreSelection:function(a){var b=ia(),c=a.focusedElem;a=a.selectionRange;if(b!==c&&fa(document.documentElement,c)){yh.hasSelectionCapabilities(c)&&yh.setSelection(c,a);b=
[];for(a=c;a=a.parentNode;)a.nodeType===xh&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});ha(c);for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}},getSelection:function(a){return("selectionStart"in a?{start:a.selectionStart,end:a.selectionEnd}:wh.getOffsets(a))||{start:0,end:0}},setSelection:function(a,b){var c=b.start,d=b.end;void 0===d&&(d=c);"selectionStart"in a?(a.selectionStart=c,a.selectionEnd=Math.min(d,a.value.length)):wh.setOffsets(a,b)}},zh=yh,
Ah=F.ELEMENT_NODE;function Bh(){w("211")}function Ch(){w("212")}function Dh(a){if(null==a)return null;if(a.nodeType===Ah)return a;var b=Pa.get(a);if(b)return"number"===typeof b.tag?Bh(b):Ch(b);"function"===typeof a.render?w("188"):w("213",Object.keys(a))}Dh._injectFiber=function(a){Bh=a};Dh._injectStack=function(a){Ch=a};var Eh=E.HostComponent;function Fh(a){if(void 0!==a._hostParent)return a._hostParent;if("number"===typeof a.tag){do a=a["return"];while(a&&a.tag!==Eh);if(a)return a}return null}
function Gh(a,b){for(var c=0,d=a;d;d=Fh(d))c++;d=0;for(var e=b;e;e=Fh(e))d++;for(;0<c-d;)a=Fh(a),c--;for(;0<d-c;)b=Fh(b),d--;for(;c--;){if(a===b||a===b.alternate)return a;a=Fh(a);b=Fh(b)}return null}
var Hh={isAncestor:function(a,b){for(;b;){if(a===b||a===b.alternate)return!0;b=Fh(b)}return!1},getLowestCommonAncestor:Gh,getParentInstance:function(a){return Fh(a)},traverseTwoPhase:function(a,b,c){for(var d=[];a;)d.push(a),a=Fh(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)},traverseEnterLeave:function(a,b,c,d,e){for(var f=a&&b?Gh(a,b):null,g=[];a&&a!==f;)g.push(a),a=Fh(a);for(a=[];b&&b!==f;)a.push(b),b=Fh(b);for(b=0;b<g.length;b++)c(g[b],"bubbled",d);for(b=
a.length;0<b--;)c(a[b],"captured",e)}},Ih=Jb.getListener;function Jh(a,b,c){if(b=Ih(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Cb(c._dispatchListeners,b),c._dispatchInstances=Cb(c._dispatchInstances,a)}function Kh(a){a&&a.dispatchConfig.phasedRegistrationNames&&Hh.traverseTwoPhase(a._targetInst,Jh,a)}function Qh(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?Hh.getParentInstance(b):null;Hh.traverseTwoPhase(b,Jh,a)}}
function Rh(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ih(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Cb(c._dispatchListeners,b),c._dispatchInstances=Cb(c._dispatchInstances,a))}function Sh(a){a&&a.dispatchConfig.registrationName&&Rh(a._targetInst,null,a)}
var Th={accumulateTwoPhaseDispatches:function(a){Db(a,Kh)},accumulateTwoPhaseDispatchesSkipTarget:function(a){Db(a,Qh)},accumulateDirectDispatches:function(a){Db(a,Sh)},accumulateEnterLeaveDispatches:function(a,b,c,d){Hh.traverseEnterLeave(c,d,Rh,a,b)}},X={_root:null,_startText:null,_fallbackText:null},Uh={initialize:function(a){X._root=a;X._startText=Uh.getText();return!0},reset:function(){X._root=null;X._startText=null;X._fallbackText=null},getData:function(){if(X._fallbackText)return X._fallbackText;
var a,b=X._startText,c=b.length,d,e=Uh.getText(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);X._fallbackText=e.slice(a,1<d?1-d:void 0);return X._fallbackText},getText:function(){return"value"in X._root?X._root.value:X._root[vh()]}},Vh=Uh,Wh="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),Xh={type:null,target:null,currentTarget:ca.thatReturnsNull,eventPhase:null,bubbles:null,
cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
function Y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?ca.thatReturnsTrue:ca.thatReturnsFalse;this.isPropagationStopped=ca.thatReturnsFalse;return this}
n(Y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=ca.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=ca.thatReturnsTrue)},persist:function(){this.isPersistent=ca.thatReturnsTrue},isPersistent:ca.thatReturnsFalse,
destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<Wh.length;a++)this[Wh[a]]=null}});Y.Interface=Xh;Y.augmentClass=function(a,b){function c(){}c.prototype=this.prototype;var d=new c;n(d,a.prototype);a.prototype=d;a.prototype.constructor=a;a.Interface=n({},this.Interface,b);a.augmentClass=this.augmentClass;Yh(a)};Yh(Y);function Zh(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function $h(a){a instanceof this?void 0:w("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Yh(a){a.eventPool=[];a.getPooled=Zh;a.release=$h}function ai(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(ai,{data:null});function bi(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(bi,{data:null});var ci=[9,13,27,32],di=l.canUseDOM&&"CompositionEvent"in window,ei=null;l.canUseDOM&&"documentMode"in document&&(ei=document.documentMode);var fi;
if(fi=l.canUseDOM&&"TextEvent"in window&&!ei){var gi=window.opera;fi=!("object"===typeof gi&&"function"===typeof gi.version&&12>=parseInt(gi.version(),10))}
var hi=fi,ii=l.canUseDOM&&(!di||ei&&8<ei&&11>=ei),ji=String.fromCharCode(32),ki={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},li=!1;
function mi(a,b){switch(a){case "topKeyUp":return-1!==ci.indexOf(b.keyCode);case "topKeyDown":return 229!==b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":return!0;default:return!1}}function ni(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var oi=!1;function pi(a,b){switch(a){case "topCompositionEnd":return ni(b);case "topKeyPress":if(32!==b.which)return null;li=!0;return ji;case "topTextInput":return a=b.data,a===ji&&li?null:a;default:return null}}
function qi(a,b){if(oi)return"topCompositionEnd"===a||!di&&mi(a,b)?(a=Vh.getData(),Vh.reset(),oi=!1,a):null;switch(a){case "topPaste":return null;case "topKeyPress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "topCompositionEnd":return ii?null:b.data;default:return null}}
var ri={eventTypes:ki,extractEvents:function(a,b,c,d){var e;if(di)b:{switch(a){case "topCompositionStart":var f=ki.compositionStart;break b;case "topCompositionEnd":f=ki.compositionEnd;break b;case "topCompositionUpdate":f=ki.compositionUpdate;break b}f=void 0}else oi?mi(a,c)&&(f=ki.compositionEnd):"topKeyDown"===a&&229===c.keyCode&&(f=ki.compositionStart);f?(ii&&(oi||f!==ki.compositionStart?f===ki.compositionEnd&&oi&&(e=Vh.getData()):oi=Vh.initialize(d)),f=ai.getPooled(f,b,c,d),e?f.data=e:(e=ni(c),
null!==e&&(f.data=e)),Th.accumulateTwoPhaseDispatches(f),e=f):e=null;(a=hi?pi(a,c):qi(a,c))?(b=bi.getPooled(ki.beforeInput,b,c,d),b.data=a,Th.accumulateTwoPhaseDispatches(b)):b=null;return[e,b]}},si={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ti(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!si[a.type]:"textarea"===b?!0:!1}
var ui={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}};function vi(a,b,c){a=Y.getPooled(ui.change,a,b,c);a.type="change";nb.enqueueStateRestore(c);Th.accumulateTwoPhaseDispatches(a);return a}var wi=null,xi=null;function yi(a){Jb.enqueueEvents(a);Jb.processEventQueue(!1)}
function zi(a){var b=G.getNodeFromInstance(a);if(Bc.updateValueIfChanged(b))return a}function Ai(a,b){if("topChange"===a)return b}var Bi=!1;l.canUseDOM&&(Bi=Lb("input")&&(!document.documentMode||9<document.documentMode));function Ci(){wi&&(wi.detachEvent("onpropertychange",Di),xi=wi=null)}function Di(a){"value"===a.propertyName&&zi(xi)&&(a=vi(xi,a,ub(a)),sb.batchedUpdates(yi,a))}function Ei(a,b,c){"topFocus"===a?(Ci(),wi=b,xi=c,wi.attachEvent("onpropertychange",Di)):"topBlur"===a&&Ci()}
function Fi(a){if("topSelectionChange"===a||"topKeyUp"===a||"topKeyDown"===a)return zi(xi)}function Gi(a,b){if("topClick"===a)return zi(b)}function Hi(a,b){if("topInput"===a||"topChange"===a)return zi(b)}
var Ii={eventTypes:ui,_isInputEventSupported:Bi,extractEvents:function(a,b,c,d){var e=b?G.getNodeFromInstance(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ai;else if(ti(e))if(Bi)g=Hi;else{g=Fi;var h=Ei}else f=e.nodeName,!f||"input"!==f.toLowerCase()||"checkbox"!==e.type&&"radio"!==e.type||(g=Gi);if(g&&(g=g(a,b)))return vi(g,c,d);h&&h(a,e,b);"topBlur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&(a=""+e.value,
e.getAttribute("value")!==a&&e.setAttribute("value",a))}};function Ji(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(Ji,{view:function(a){if(a.view)return a.view;a=ub(a);return a.window===a?a:(a=a.ownerDocument)?a.defaultView||a.parentWindow:window},detail:function(a){return a.detail||0}});var Ki={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Li(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Ki[a])?!!b[a]:!1}function Mi(){return Li}
function Ni(a,b,c,d){return Y.call(this,a,b,c,d)}Ji.augmentClass(Ni,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Mi,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}});
var Oi={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Pi={eventTypes:Oi,extractEvents:function(a,b,c,d){if("topMouseOver"===a&&(c.relatedTarget||c.fromElement)||"topMouseOut"!==a&&"topMouseOver"!==a)return null;var e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;"topMouseOut"===a?(a=b,b=(b=c.relatedTarget||c.toElement)?G.getClosestInstanceFromNode(b):
null):a=null;if(a===b)return null;var f=null==a?e:G.getNodeFromInstance(a);e=null==b?e:G.getNodeFromInstance(b);var g=Ni.getPooled(Oi.mouseLeave,a,c,d);g.type="mouseleave";g.target=f;g.relatedTarget=e;c=Ni.getPooled(Oi.mouseEnter,b,c,d);c.type="mouseenter";c.target=e;c.relatedTarget=f;Th.accumulateEnterLeaveDispatches(g,c,a,b);return[g,c]}},Qi=F.DOCUMENT_NODE,Ri=l.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Si={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},
dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},Ti=null,Zi=null,$i=null,aj=!1,bj=M.isListeningToAllDependencies;
function cj(a,b){if(aj||null==Ti||Ti!==ia())return null;var c=Ti;"selectionStart"in c&&zh.hasSelectionCapabilities(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return $i&&ea($i,c)?null:($i=c,a=Y.getPooled(Si.select,Zi,a,b),a.type="select",a.target=Ti,Th.accumulateTwoPhaseDispatches(a),a)}
var dj={eventTypes:Si,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:d.nodeType===Qi?d:d.ownerDocument;if(!e||!bj("onSelect",e))return null;e=b?G.getNodeFromInstance(b):window;switch(a){case "topFocus":if(ti(e)||"true"===e.contentEditable)Ti=e,Zi=b,$i=null;break;case "topBlur":$i=Zi=Ti=null;break;case "topMouseDown":aj=!0;break;case "topContextMenu":case "topMouseUp":return aj=!1,cj(c,d);case "topSelectionChange":if(Ri)break;case "topKeyDown":case "topKeyUp":return cj(c,d)}return null}};
function ej(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(ej,{animationName:null,elapsedTime:null,pseudoElement:null});function fj(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(fj,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}});function gj(a,b,c,d){return Y.call(this,a,b,c,d)}Ji.augmentClass(gj,{relatedTarget:null});function hj(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;return 32<=a||13===a?a:0}
var ij={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function kj(a,b,c,d){return Y.call(this,a,b,c,d)}
Ji.augmentClass(kj,{key:function(a){if(a.key){var b=ij[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=hj(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?jj[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Mi,charCode:function(a){return"keypress"===a.type?hj(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?hj(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});function lj(a,b,c,d){return Y.call(this,a,b,c,d)}Ni.augmentClass(lj,{dataTransfer:null});function mj(a,b,c,d){return Y.call(this,a,b,c,d)}Ji.augmentClass(mj,{touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Mi});function nj(a,b,c,d){return Y.call(this,a,b,c,d)}Y.augmentClass(nj,{propertyName:null,elapsedTime:null,pseudoElement:null});
function oj(a,b,c,d){return Y.call(this,a,b,c,d)}Ni.augmentClass(oj,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null});var pj={},qj={};
"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(a){var b=a[0].toUpperCase()+
a.slice(1),c="on"+b;b="top"+b;c={phasedRegistrationNames:{bubbled:c,captured:c+"Capture"},dependencies:[b]};pj[a]=c;qj[b]=c});
var rj={eventTypes:pj,extractEvents:function(a,b,c,d){var e=qj[a];if(!e)return null;switch(a){case "topAbort":case "topCancel":case "topCanPlay":case "topCanPlayThrough":case "topClose":case "topDurationChange":case "topEmptied":case "topEncrypted":case "topEnded":case "topError":case "topInput":case "topInvalid":case "topLoad":case "topLoadedData":case "topLoadedMetadata":case "topLoadStart":case "topPause":case "topPlay":case "topPlaying":case "topProgress":case "topRateChange":case "topReset":case "topSeeked":case "topSeeking":case "topStalled":case "topSubmit":case "topSuspend":case "topTimeUpdate":case "topToggle":case "topVolumeChange":case "topWaiting":var f=Y;
break;case "topKeyPress":if(0===hj(c))return null;case "topKeyDown":case "topKeyUp":f=kj;break;case "topBlur":case "topFocus":f=gj;break;case "topClick":if(2===c.button)return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":f=Ni;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":f=lj;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":f=
mj;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":f=ej;break;case "topTransitionEnd":f=nj;break;case "topScroll":f=Ji;break;case "topWheel":f=oj;break;case "topCopy":case "topCut":case "topPaste":f=fj}f?void 0:w("86",a);a=f.getPooled(e,b,c,d);Th.accumulateTwoPhaseDispatches(a);return a}};L.setHandleTopLevel(M.handleTopLevel);Jb.injection.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ib.injection.injectComponentTree(G);Jb.injection.injectEventPluginsByName({SimpleEventPlugin:rj,EnterLeaveEventPlugin:Pi,ChangeEventPlugin:Ii,SelectEventPlugin:dj,BeforeInputEventPlugin:ri});
var sj=A.injection.MUST_USE_PROPERTY,Z=A.injection.HAS_BOOLEAN_VALUE,tj=A.injection.HAS_NUMERIC_VALUE,uj=A.injection.HAS_POSITIVE_NUMERIC_VALUE,vj=A.injection.HAS_STRING_BOOLEAN_VALUE,wj={Properties:{allowFullScreen:Z,allowTransparency:vj,async:Z,autoPlay:Z,capture:Z,checked:sj|Z,cols:uj,contentEditable:vj,controls:Z,"default":Z,defer:Z,disabled:Z,download:A.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:vj,formNoValidate:Z,hidden:Z,loop:Z,multiple:sj|Z,muted:sj|Z,noValidate:Z,open:Z,playsInline:Z,
readOnly:Z,required:Z,reversed:Z,rows:uj,rowSpan:tj,scoped:Z,seamless:Z,selected:sj|Z,size:uj,start:tj,span:uj,spellCheck:vj,style:0,itemScope:Z,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:vj},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&
a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},xj=A.injection.HAS_STRING_BOOLEAN_VALUE,yj={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},zj={Properties:{autoReverse:xj,externalResourcesRequired:xj,preserveAlpha:xj},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:yj.xlink,xlinkArcrole:yj.xlink,xlinkHref:yj.xlink,xlinkRole:yj.xlink,
xlinkShow:yj.xlink,xlinkTitle:yj.xlink,xlinkType:yj.xlink,xmlBase:yj.xml,xmlLang:yj.xml,xmlSpace:yj.xml}},Aj=/[\-\:]([a-z])/g;function Bj(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(Aj,
Bj);zj.Properties[b]=0;zj.DOMAttributeNames[b]=a});A.injection.injectDOMPropertyConfig(wj);A.injection.injectDOMPropertyConfig(zj);
var Cj=ig.injectInternals,Dj=F.ELEMENT_NODE,Ej=F.TEXT_NODE,Fj=F.COMMENT_NODE,Gj=F.DOCUMENT_NODE,Hj=F.DOCUMENT_FRAGMENT_NODE,Ij=A.ROOT_ATTRIBUTE_NAME,Jj=ka.getChildNamespace,Kj=N.createElement,Lj=N.createTextNode,Mj=N.setInitialProperties,Nj=N.diffProperties,Oj=N.updateProperties,Pj=N.diffHydratedProperties,Qj=N.diffHydratedText,Rj=N.warnForDeletedHydratableElement,Sj=N.warnForDeletedHydratableText,Tj=N.warnForInsertedHydratedElement,Uj=N.warnForInsertedHydratedText,Vj=G.precacheFiberNode,Wj=G.updateFiberProps;
nb.injection.injectFiberControlledHostComponent(N);Dh._injectFiber(function(a){return Xj.findHostInstance(a)});var Yj=null,Zj=null;function ak(a){return!(!a||a.nodeType!==Dj&&a.nodeType!==Gj&&a.nodeType!==Hj&&(a.nodeType!==Fj||" react-mount-point-unstable "!==a.nodeValue))}function bk(a){a=a?a.nodeType===Gj?a.documentElement:a.firstChild:null;return!(!a||a.nodeType!==Dj||!a.hasAttribute(Ij))}
var Xj=function(a){var b=a.getPublicInstance;a=hh(a);var c=a.scheduleUpdate,d=a.getPriorityContext;return{createContainer:function(a){var b=ee();a={current:b,containerInfo:a,isScheduled:!1,nextScheduledRoot:null,context:null,pendingContext:null};return b.stateNode=a},updateContainer:function(a,b,g,h){var e=b.current;g=jh(g);null===b.context?b.context=g:b.pendingContext=g;b=h;h=d(e,ed.enableAsyncSubtreeAPI&&null!=a&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent);
a={element:a};kh(e,a,void 0===b?null:b,h);c(e,h)},batchedUpdates:a.batchedUpdates,unbatchedUpdates:a.unbatchedUpdates,deferredUpdates:a.deferredUpdates,flushSync:a.flushSync,getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case oh:return b(a.child.stateNode);default:return a.child.stateNode}},findHostInstance:function(a){a=ph(a);return null===a?null:a.stateNode},findHostInstanceWithNoPortals:function(a){a=qh(a);return null===a?null:a.stateNode}}}({getRootHostContext:function(a){if(a.nodeType===
Gj)a=(a=a.documentElement)?a.namespaceURI:Jj(null,"");else{var b=a.nodeType===Fj?a.parentNode:a;a=b.namespaceURI||null;b=b.tagName;a=Jj(a,b)}return a},getChildHostContext:function(a,b){return Jj(a,b)},getPublicInstance:function(a){return a},prepareForCommit:function(){Yj=M.isEnabled();Zj=zh.getSelectionInformation();M.setEnabled(!1)},resetAfterCommit:function(){zh.restoreSelection(Zj);Zj=null;M.setEnabled(Yj);Yj=null},createInstance:function(a,b,c,d,e){a=Kj(a,b,c,d);Vj(e,a);Wj(a,b);return a},appendInitialChild:function(a,
b){a.appendChild(b)},finalizeInitialChildren:function(a,b,c,d){Mj(a,b,c,d);a:{switch(b){case "button":case "input":case "select":case "textarea":a=!!c.autoFocus;break a}a=!1}return a},prepareUpdate:function(a,b,c,d,e){return Nj(a,b,c,d,e)},commitMount:function(a){a.focus()},commitUpdate:function(a,b,c,d,e){Wj(a,e);Oj(a,b,c,d,e)},shouldSetTextContent:function(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&
"string"===typeof b.dangerouslySetInnerHTML.__html},resetTextContent:function(a){a.textContent=""},shouldDeprioritizeSubtree:function(a,b){return!!b.hidden},createTextInstance:function(a,b,c,d){a=Lj(a,b);Vj(d,a);return a},commitTextUpdate:function(a,b,c){a.nodeValue=c},appendChild:function(a,b){a.appendChild(b)},appendChildToContainer:function(a,b){a.nodeType===Fj?a.parentNode.insertBefore(b,a):a.appendChild(b)},insertBefore:function(a,b,c){a.insertBefore(b,c)},insertInContainerBefore:function(a,
b,c){a.nodeType===Fj?a.parentNode.insertBefore(b,c):a.insertBefore(b,c)},removeChild:function(a,b){a.removeChild(b)},removeChildFromContainer:function(a,b){a.nodeType===Fj?a.parentNode.removeChild(b):a.removeChild(b)},canHydrateInstance:function(a,b){return a.nodeType===Dj&&b===a.nodeName.toLowerCase()},canHydrateTextInstance:function(a,b){return""===b?!1:a.nodeType===Ej},getNextHydratableSibling:function(a){for(a=a.nextSibling;a&&a.nodeType!==Dj&&a.nodeType!==Ej;)a=a.nextSibling;return a},getFirstHydratableChild:function(a){for(a=
a.firstChild;a&&a.nodeType!==Dj&&a.nodeType!==Ej;)a=a.nextSibling;return a},hydrateInstance:function(a,b,c,d,e,f){Vj(f,a);Wj(a,c);return Pj(a,b,c,e,d)},hydrateTextInstance:function(a,b,c){Vj(c,a);return Qj(a,b)},didNotHydrateInstance:function(a,b){1===b.nodeType?Rj(a,b):Sj(a,b)},didNotFindHydratableInstance:function(a,b,c){Tj(a,b,c)},didNotFindHydratableTextInstance:function(a,b){Uj(a,b)},scheduleDeferredCallback:dd.rIC,useSyncScheduling:!0});sb.injection.injectFiberBatchedUpdates(Xj.batchedUpdates);
function ck(a,b,c,d,e){ak(c)?void 0:w("200");var f=c._reactRootContainer;if(f)Xj.updateContainer(b,f,a,e);else{if(!d&&!bk(c))for(d=void 0;d=c.lastChild;)c.removeChild(d);var g=Xj.createContainer(c);f=c._reactRootContainer=g;Xj.unbatchedUpdates(function(){Xj.updateContainer(b,g,a,e)})}return Xj.getPublicRootInstance(f)}function dk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;ak(b)?void 0:w("200");return ne.createPortal(a,b,null,c)}
var ek={createPortal:dk,hydrate:function(a,b,c){return ck(null,a,b,!0,c)},render:function(a,b,c){return ck(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null!=a&&Pa.has(a)?void 0:w("38");return ck(a,b,c,!1,d)},unmountComponentAtNode:function(a){ak(a)?void 0:w("40");return a._reactRootContainer?(Xj.unbatchedUpdates(function(){ck(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},findDOMNode:Dh,unstable_createPortal:dk,unstable_batchedUpdates:sb.batchedUpdates,
unstable_deferredUpdates:Xj.deferredUpdates,flushSync:Xj.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Jb,EventPluginRegistry:sa,EventPropagators:Th,ReactControlledComponent:nb,ReactDOMComponentTree:G,ReactDOMEventListener:L}};Cj({findFiberByHostInstance:G.getClosestInstanceFromNode,findHostInstanceByFiber:Xj.findHostInstance,bundleType:0,version:"16.0.1",rendererPackageName:"react-dom"});module.exports=ek;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var emptyFunction = __webpack_require__(1);

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (false) {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

module.exports = EventListener;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(13);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(14);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * @param {DOMElement} node input/textarea to focus
 */

function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_filesafe_embed__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_filesafe_embed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_filesafe_embed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesafe_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesafe_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_filesafe_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sn_components_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sn_components_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sn_components_api__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BaseHeight = 53;
var MessageHavingHeight = 28;
var PerMessageHeight = 22;
var ExpandedHeight = 305;

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.componentManager = new __WEBPACK_IMPORTED_MODULE_3_sn_components_api___default.a(null, function () {
        // On ready and permissions authorization
        document.documentElement.classList.add(_this2.componentManager.platform);
      });
      this.filesafe = new __WEBPACK_IMPORTED_MODULE_2_filesafe_js___default.a({
        componentManager: this.componentManager
      });
      this.fsObserver = this.filesafe.addDataChangeObserver(function () {
        _this2.recomputeHeight();
      });
      this.componentManager.streamContextItem(function (incomingNote) {
        var itemClass = __WEBPACK_IMPORTED_MODULE_2_filesafe_js___default.a.getSFItemClass();
        var noteModel = new itemClass(incomingNote);

        _this2.filesafe.setCurrentNote(noteModel);
      });
      var delegate = {
        onSelectFile: function onSelectFile(fileDescriptor) {
          if (fileDescriptor) {
            if (!_this2.state.expanded) {
              _this2.expandedFromSelection = true;

              _this2.expandForFileSelection();
            }
          } else {
            if (_this2.expandedFromSelection) {
              _this2.collapse();

              _this2.expandedFromSelection = false;
            }
          }
        }
      };
      var mountPoint = document.getElementById("embed");
      __WEBPACK_IMPORTED_MODULE_1_filesafe_embed___default.a.FilesafeEmbed.renderInElement(mountPoint, this.filesafe, delegate);
      this.recomputeHeight();
    }
  }, {
    key: "recomputeHeight",
    value: function recomputeHeight() {
      var totalHeight = BaseHeight;
      var credentials = this.filesafe.getAllCredentials();

      if (credentials.length == 0) {
        totalHeight += PerMessageHeight;
      }

      var integrations = this.filesafe.getAllIntegrations();

      if (integrations.length == 0) {
        totalHeight += PerMessageHeight;
      }

      if (integrations.length == 0 || credentials.length == 0) {
        totalHeight += MessageHavingHeight;
      }

      if (this.state.expanded) {
        totalHeight = ExpandedHeight;
      }

      this.componentManager.setSize("container", "100%", totalHeight);
    }
  }, {
    key: "toggleHeight",
    value: function toggleHeight() {
      if (this.state.expanded) {
        this.collapse();
      } else {
        this.expand();
      }
    }
  }, {
    key: "expandForFileSelection",
    value: function expandForFileSelection() {
      this.componentManager.setSize("container", "100%", 130);
    }
  }, {
    key: "expand",
    value: function expand() {
      this.setState({
        expanded: true
      }, this.recomputeHeight);
    }
  }, {
    key: "collapse",
    value: function collapse() {
      this.setState({
        expanded: false
      }, this.recomputeHeight);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "root"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "embed"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "expand-button",
        className: "sk-button contrast no-border",
        onClick: this.toggleHeight.bind(this)
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label"
      }, this.state.expanded ? "▲" : "▼")));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(0);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(15);

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(16);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);




var FilesafeManager =
/*#__PURE__*/
function () {
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(FilesafeManager, null, [{
    key: "get",

    /*
      Singleton. `instance` is nulled in the unload function.
     */
    value: function get() {
      if (this.instance == null) {
        this.instance = new FilesafeManager();
      }

      return this.instance;
    }
  }]);

  function FilesafeManager() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, FilesafeManager);

    this.unloadHandlers = [];
    this.dataChangeObservers = [];
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(FilesafeManager, [{
    key: "setFilesafeInstance",
    value: function setFilesafeInstance(filesafe) {
      var _this = this;

      this.filesafe = filesafe;
      this.fsObserver = filesafe.addDataChangeObserver(function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.dataChangeObservers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var observer = _step.value;
            observer();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    }
  }, {
    key: "setDelegate",
    value: function setDelegate(delegate) {
      this.delegate = delegate;
    }
  }, {
    key: "getDelegate",
    value: function getDelegate() {
      return this.delegate || {};
    }
  }, {
    key: "addDataChangeObserver",
    value: function addDataChangeObserver(observer) {
      this.dataChangeObservers.push(observer);
    }
  }, {
    key: "addUnloadHandler",
    value: function addUnloadHandler(handler) {
      this.unloadHandlers.push(handler);
    }
  }, {
    key: "unload",
    value: function unload() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.unloadHandlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var handler = _step2.value;
          handler();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.dataChangeObservers = [];

      if (this.filesafe) {
        this.filesafe.removeDataChangeObserver(this.fsObserver);
      }

      FilesafeManager.instance = null;
    }
  }, {
    key: "defaultRelayServerUrl",
    value: function defaultRelayServerUrl() {
      return window.default_fs_relay_server_url || "https://filesafe.standardnotes.org";
    }
  }]);

  return FilesafeManager;
}();

__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(FilesafeManager, "instance", null);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(5);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__ = __webpack_require__(6);












var FilesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(FilesView, _React$Component);

  function FilesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, FilesView);

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(FilesView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "setStatusForFile", function (file, status, hasSpinner) {
      _this.setState({
        fileStatusFile: file,
        fileStatus: status,
        hasStatusSpinner: hasSpinner
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "decryptFile",
    /*#__PURE__*/
    function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(fileDescriptor) {
        var integration, name;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                integration = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationForFileDescriptor(fileDescriptor);

                if (integration) {
                  _context.next = 4;
                  break;
                }

                alert("Unable to find integration for file. If you have deleted the integration, please re-add it and try again.");
                return _context.abrupt("return");

              case 4:
                name = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);

                _this.setStatusForFile(fileDescriptor, "Downloading from ".concat(name, "..."), true);

                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadFileFromDescriptor(fileDescriptor).then(function (item) {
                  _this.setStatusForFile(fileDescriptor, "Decrypting...", true);

                  return __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.decryptFile({
                    fileDescriptor: fileDescriptor,
                    fileItem: item
                  }).then(function (data) {
                    return {
                      base64Data: data.decryptedData,
                      fileName: fileDescriptor.content.fileName,
                      fileType: fileDescriptor.content.fileType
                    };
                  })["catch"](function (decryptionError) {
                    console.error("filesafe-embed | error decrypting file:", decryptionError);

                    _this.flashError("Error decrypting file.");
                  });
                })["catch"](function (downloadError) {
                  console.log("Error downloading file", downloadError);

                  _this.flashError("Error downloading file.");
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "downloadFile",
    /*#__PURE__*/
    function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(fileDescriptor) {
        var platform, display, fileData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this.isMobile) {
                  _context2.next = 5;
                  break;
                }

                platform = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.getPlatform();
                display = platform == "ios" ? "iOS" : "Android";
                alert("Downloading files is not currently supported on ".concat(display, "."));
                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return _this.decryptFile(fileDescriptor);

              case 7:
                fileData = _context2.sent;
                __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data(fileData);

                _this.setStatusForFile(fileDescriptor, null);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "previewFile",
    /*#__PURE__*/
    function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(fileDescriptor) {
        var fileData, url;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.decryptFile(fileDescriptor);

              case 2:
                fileData = _context3.sent;
                url = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.createTemporaryFileUrl({
                  base64Data: fileData.base64Data,
                  dataType: fileData.fileType
                });

                _this.setStatusForFile(fileDescriptor, null);

                _this.setState({
                  previewUrl: url,
                  previewingFile: fileDescriptor
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "onClickPreview", function () {
      // We'll try revoking here in a timeout, but in browsers, since it opens in another tab, this code may not execute.
      // In that case, we'll revoke again when the current file is collapsed or another is selected.
      // Actually I've found that with a timeout of 100, it doesn't execute, but if you increase to 250-500, it does.
      setTimeout(function () {
        _this.revokePreview();
      }, 500);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "selectFile", function (event, metadata) {
      var element = event.target;
      element.focus();

      if (_this.state.selectedFile == metadata) {
        _this.setState({
          selectedFile: null
        });

        _this.delegate.onSelectFile && _this.delegate.onSelectFile(null);
      } else {
        _this.setState({
          selectedFile: metadata
        });

        _this.delegate.onSelectFile && _this.delegate.onSelectFile(metadata);
      } // We want to release previews after another file is selected or when the current file is collapsed.


      _this.revokePreview();
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "deleteFile", function (fileDescriptor) {
      __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteFileFromDescriptor(fileDescriptor);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "copyInsertionLink", function (fileDescriptor) {
      var text = "[FileSafe:".concat(fileDescriptor.uuid, ":").concat(fileDescriptor.content.fileName, "]");
      __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.copyTextToClipboard(text);

      _this.setState({
        copiedLink: fileDescriptor
      });

      setTimeout(function () {
        _this.setState({
          copiedLink: null
        });
      }, 1000);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "isFileSelected", function (metadata) {
      return _this.state.selectedFile == metadata;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "elementForFile", function (file) {
      var integration = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationForFileDescriptor(file);
      var integrationName;

      if (integration) {
        integrationName = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);
      } else {
        integrationName = "Integration Not Found";
      }

      var path = file.content.serverMetadata.file_path;
      var previewReady = _this.state.previewUrl && _this.state.previewingFile == file; // We should make Files their own component and have their own state but for now we're doing it this way.

      var hasStatus = _this.state.fileStatusFile == file && _this.state.fileStatus;
      var hasSpinner = _this.state.hasStatusSpinner;
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-item-container " + (_this.isFileSelected(file) ? "expanded" : "")
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(event) {
          _this.selectFile(event, file);
        },
        className: "file-item-button sk-button info " + (_this.isFileSelected(file) ? "selected" : undefined)
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label"
      }, file.content.fileName), hasStatus && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-download-status sk-horizontal-group"
      }, hasSpinner && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-spinner x-small"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-status-label"
      }, _this.state.fileStatus)), _this.isFileSelected(file) && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-item-options-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: "sk-app-bar file-item-options"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "center"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.downloadFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast " + (_this.isMobile ? "disabled" : "")
      }, "Download")), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), _this.supportsPreviews && previewReady && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("a", {
        className: "sk-app-bar-item",
        href: _this.state.previewUrl,
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.onClickPreview();
        },
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, "Open Preview")), _this.supportsPreviews && !previewReady && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.previewFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast " + (_this.isMobile ? "disabled" : "")
      }, "Preview")), _this.supportsPreviews && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.copyInsertionLink(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, _this.state.copiedLink == file ? "Copied" : "Copy Insert Link")), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.deleteFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, "Delete")))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-location"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("strong", null, integrationName), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", null, " ", path)))));
    });

    _this.state = {};
    _this.delegate = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().getDelegate();
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(FilesView, [{
    key: "revokePreview",
    value: function revokePreview() {
      if (this.state.previewUrl) {
        __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.revokeTempUrl(this.state.previewUrl);
      }

      this.setState({
        previewUrl: null,
        previewingFile: null
      });
    }
  }, {
    key: "flashError",
    value: function flashError(error) {
      var _this2 = this;

      this.setStatusForFile(error, false);
      setTimeout(function () {
        _this2.setStatusForFile(null);
      }, 2500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.props.files.map(function (file) {
        return _this3.elementForFile(file);
      });
    }
  }, {
    key: "supportsPreviews",
    get: function get() {
      if (this._supportsPreview !== undefined) {
        return this._supportsPreview;
      }

      var env = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.getEnvironment(); // May be undefined if bridge hasn't been established yet.

      if (env == undefined) {
        return false;
      } // Only the web app supports previews, as temporary object urls are created for previews,
      // and temp urls only live in the same browser scope as client. In desktop, the electron scope
      // is different from the the browser scope, and on mobile, the web view scope will be different than
      // the user's browser. On web, since we open the preview in the same browser, it will work.


      this._supportsPreview = env == "web";
    }
  }, {
    key: "isMobile",
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.isMobile();
    }
  }]);

  return FilesView;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FilesafeEmbed__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["default"] = ({
  FilesafeEmbed: __WEBPACK_IMPORTED_MODULE_2__FilesafeEmbed__["a" /* default */],
  React: __WEBPACK_IMPORTED_MODULE_0_react___default.a,
  ReactDOM: __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeEmbed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Root__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__ = __webpack_require__(6);










var FilesafeEmbed =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(FilesafeEmbed, _React$Component);

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(FilesafeEmbed, null, [{
    key: "renderInElement",
    // Called by consumer
    value: function renderInElement(element, filesafe, delegate) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().setFilesafeInstance(filesafe);
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().setDelegate(delegate);
      __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FilesafeEmbed), element);
    } // Called by consumer. Required if embed will appear and disappear multiple times
    // This function will clean up window observers

  }, {
    key: "unload",
    value: function unload(element) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().unload();
      __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.unmountComponentAtNode(element);
    }
  }]);

  function FilesafeEmbed(props) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, FilesafeEmbed);

    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf___default()(FilesafeEmbed).call(this, props));
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(FilesafeEmbed, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "filesafe-embed"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sn-component"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Root__["a" /* default */], null)));
    }
  }]);

  return FilesafeEmbed;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);



/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__KeysView__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UploadFilesView_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AllFilesView__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__IntegrationsView__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__ = __webpack_require__(6);












var Root =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(Root, _React$Component);

  function Root(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Root);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(Root).call(this, props));
    _this.state = {
      messages: []
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Root, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "home",
        className: "sk-panel static"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "main-content",
        className: "sk-panel-content"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__UploadFilesView_js__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__IntegrationsView__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__KeysView__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__AllFilesView__["a" /* default */], null))));
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__ = __webpack_require__(6);










var KeysView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(KeysView, _React$Component);

  function KeysView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, KeysView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(KeysView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "exportCredential", function (credential) {
      var base64Data = btoa(JSON.stringify(credential, null, 2));
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data({
        base64Data: base64Data,
        fileName: "sn-filesafe-keys-".concat(credential.created_at.toISOString(), ".json"),
        fileType: 'text/json'
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "deleteCredential", function (credential) {
      if (_this.numFilesForCredential(credential) != 0) {
        alert("This key has files encrypted with it and cannot be deleted. First delete any associated files, then try again.");
        return;
      }

      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteCredential(credential);
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "createNewKeys", function () {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.createNewCredentials();
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "labelForCredential", function (credential) {
      return credential.created_at.toLocaleString();
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "numFilesForCredential", function (credential) {
      return __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.numberOfFilesEncryptedWithCredential(credential);
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "setCredentialAsDefault", function (credential) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.setCredentialAsDefault(credential);
    });

    _this.state = {
      credentials: __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials() || []
    };
    __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.setState({
        credentials: __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials()
      });
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(KeysView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-h2 sk-bold"
      }, "Keys"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button info no-border",
        onClick: this.createNewKeys
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-label"
      }, "Create New"))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "list-container"
      }, this.state.credentials.map(function (credential) {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "list-item sk-horizontal-group top"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-circle x-small " + (credential.content.isDefault ? "info" : "sk-secondary-contrast")
        }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed sk-bold"
        }, _this2.labelForCredential(credential)), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          style: {
            marginTop: 3
          },
          className: "sk-panel-row condensed"
        }, _this2.numFilesForCredential(credential), " encrypted files"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-horizontal-group"
        }, _this2.state.credentials.length > 1 && !credential.content.isDefault && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.setCredentialAsDefault(credential);
          }
        }, "Make Default"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.exportCredential(credential);
          }
        }, "Export"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "danger",
          onClick: function onClick() {
            _this2.deleteCredential(credential);
          }
        }, "Delete")))));
      })));
    }
  }]);

  return KeysView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_MessagesManager__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MessagesView_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FilesView__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__ = __webpack_require__(6);















var UploadFilesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(UploadFilesView, _React$Component);

  function UploadFilesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, UploadFilesView);

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(UploadFilesView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_preventDefaults", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_highlight", function (e) {
      _this.event_preventDefaults(e);

      _this.rootElement.classList.add('highlight');
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_unhighlight", function (e) {
      _this.event_preventDefaults(e);

      _this.rootElement.classList.remove('highlight');
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_drop", function (e) {
      _this.event_unhighlight(e);

      _this.event_preventDefaults(e);

      var dt = e.dataTransfer;
      var files = dt.files;

      _this.handleDroppedFiles(files);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleDroppedFiles",
    /*#__PURE__*/
    function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(files) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(__WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations().length == 0)) {
                  _context.next = 3;
                  break;
                }

                alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
                return _context.abrupt("return");

              case 3:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = files[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 17;
                  break;
                }

                file = _step.value;

                if (file) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("continue", 14);

              case 12:
                _context.next = 14;
                return _this.readFile(file);

              case 14:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 26:
                _context.prev = 26;

                if (!_didIteratorError) {
                  _context.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context.finish(26);

              case 30:
                return _context.finish(23);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 19, 23, 31], [24,, 26, 30]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.messagesManager = new __WEBPACK_IMPORTED_MODULE_10__lib_MessagesManager__["a" /* default */]({
      credentialManager: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.credentialManager,
      integrationManager: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationManager
    });

    _this.messagesManager.getMessages().then(function (messages) {
      _this.setState({
        messages: messages
      });
    });

    _this.state = {
      noteFiles: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.fileDescriptorsForCurrentNote(),
      messages: []
    };
    __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.reload();
    });
    __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().addUnloadHandler(function () {
      window.removeEventListener('dragenter', _this.event_highlight, false);
      window.removeEventListener('dragover', _this.event_highlight, false);
      window.removeEventListener('dragleave', _this.event_unhighlight, false);
      window.removeEventListener('drop', _this.event_drop, false);
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(UploadFilesView, [{
    key: "reload",
    value: function () {
      var _reload = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var messages;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.messagesManager.getMessages();

              case 2:
                messages = _context2.sent;
                this.setState({
                  noteFiles: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.fileDescriptorsForCurrentNote(),
                  messages: messages
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.configureFileForm();
      window.addEventListener('dragenter', this.event_highlight, false);
      window.addEventListener('dragover', this.event_highlight, false);
      window.addEventListener('dragleave', this.event_unhighlight, false);
      window.addEventListener('drop', this.event_drop, false);
    }
  }, {
    key: "configureFileForm",
    value: function configureFileForm() {
      var _this2 = this;

      var fileInput = this.fileInput;
      var dropContainer = this.dropContainer;

      if (!fileInput) {
        return;
      }

      fileInput.onchange = function (event) {
        // On firefox, this event doesnt get triggered. INstead we handle it on window.addEventListener("drop")
        // Which gets called on all browsers
        var files = event.target.files;

        if (!_this2.handledFiles) {
          _this2.handleDroppedFiles(files);
        }
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        rawData: null,
        decryptedItems: null,
        requestPassword: false
      });
    }
  }, {
    key: "readFile",
    value: function () {
      var _readFile = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(file) {
        var _this3 = this;

        var MegabyteLimit, BytesInMegabyte, ByteLimit;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                MegabyteLimit = 50;
                BytesInMegabyte = 1000000; // 50mb

                ByteLimit = MegabyteLimit * BytesInMegabyte;
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();
                  var decrypt = false;

                  reader.onload =
                  /*#__PURE__*/
                  function () {
                    var _ref2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
                    /*#__PURE__*/
                    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(e) {
                      var data, item, arrayBuffer, bytes, string;
                      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              data = e.target.result;

                              if (!decrypt) {
                                _context3.next = 7;
                                break;
                              }

                              data = JSON.parse(data);
                              item = data.items[0];

                              _this3.decryptDraggedFile(item).then(resolve);

                              _context3.next = 20;
                              break;

                            case 7:
                              arrayBuffer = data;
                              bytes = arrayBuffer.byteLength;

                              if (!(bytes > ByteLimit)) {
                                _context3.next = 14;
                                break;
                              }

                              alert("The maximum upload size is ".concat(MegabyteLimit, " megabytes per file."));

                              _this3.setState({
                                status: null
                              });

                              resolve();
                              return _context3.abrupt("return");

                            case 14:
                              _context3.next = 16;
                              return SFJS.crypto.arrayBufferToBase64(arrayBuffer);

                            case 16:
                              string = _context3.sent;
                              _context3.next = 19;
                              return _this3.encryptFile(string, file.name, file.type);

                            case 19:
                              resolve();

                            case 20:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }();

                  _this3.setState({
                    status: "Reading file..."
                  });

                  if (file.name.endsWith(".sf") || file.name.endsWith(".json")) {
                    decrypt = true;
                    reader.readAsText(file);
                  } else {
                    reader.readAsArrayBuffer(file);
                  }
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function readFile(_x2) {
        return _readFile.apply(this, arguments);
      }

      return readFile;
    }()
  }, {
    key: "decryptDraggedFile",
    value: function () {
      var _decryptDraggedFile = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(fileDescriptor) {
        var _this4 = this;

        var credentials, decryptWithCredential, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, credential, success;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.setState({
                  status: "Decrypting..."
                });
                credentials = __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials();

                decryptWithCredential =
                /*#__PURE__*/
                function () {
                  var _ref3 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(credential) {
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.abrupt("return", new Promise(function (resolve, reject) {
                              __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.decryptFile({
                                fileDescriptor: fileDescriptor,
                                credential: credential
                              }).then(function (data) {
                                var item = data.decryptedItem;
                                __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data({
                                  base64Data: data.decryptedData,
                                  fileName: item.content.fileName,
                                  fileType: item.content.fileType
                                });

                                _this4.setState({
                                  status: null
                                });

                                resolve(true);
                              })["catch"](function (decryptionError) {
                                console.error("Error decrypting:", decryptionError);

                                _this4.flashError("Error decrypting file.");

                                reject(false);
                              });
                            }));

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function decryptWithCredential(_x5) {
                    return _ref3.apply(this, arguments);
                  };
                }(); // Try all credentials until one succeeds


                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context6.prev = 6;
                _iterator2 = credentials[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context6.next = 18;
                  break;
                }

                credential = _step2.value;
                _context6.next = 12;
                return decryptWithCredential(credential);

              case 12:
                success = _context6.sent;

                if (!success) {
                  _context6.next = 15;
                  break;
                }

                return _context6.abrupt("return");

              case 15:
                _iteratorNormalCompletion2 = true;
                _context6.next = 8;
                break;

              case 18:
                _context6.next = 24;
                break;

              case 20:
                _context6.prev = 20;
                _context6.t0 = _context6["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context6.t0;

              case 24:
                _context6.prev = 24;
                _context6.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 27:
                _context6.prev = 27;

                if (!_didIteratorError2) {
                  _context6.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context6.finish(27);

              case 31:
                return _context6.finish(24);

              case 32:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[6, 20, 24, 32], [25,, 27, 31]]);
      }));

      function decryptDraggedFile(_x4) {
        return _decryptDraggedFile.apply(this, arguments);
      }

      return decryptDraggedFile;
    }()
  }, {
    key: "wait",
    value: function () {
      var _wait = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(seconds) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    resolve();
                  }, seconds * 1000.0);
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function wait(_x6) {
        return _wait.apply(this, arguments);
      }

      return wait;
    }()
  }, {
    key: "encryptFile",
    value: function () {
      var _encryptFile = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee9(data, inputFileName, fileType) {
        var _this5 = this;

        var credential, integration;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                credential = __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getDefaultCredentials();

                if (credential) {
                  _context9.next = 5;
                  break;
                }

                this.setState({
                  status: null
                });
                alert("Please set up at least one key before attempting to upload a file. To do this, press Expand, and select Create New in the Keys section.");
                return _context9.abrupt("return");

              case 5:
                integration = __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getDefaultIntegration();

                if (integration) {
                  _context9.next = 10;
                  break;
                }

                this.setState({
                  status: null
                });
                alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
                return _context9.abrupt("return");

              case 10:
                this.setState({
                  status: "Encrypting..."
                });
                return _context9.abrupt("return", __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.encryptFile({
                  data: data,
                  inputFileName: inputFileName,
                  fileType: fileType,
                  credential: credential
                }).then(
                /*#__PURE__*/
                function () {
                  var _ref4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(fileItem) {
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _this5.setState({
                              status: "Uploading to ".concat(__WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration), "...")
                            });

                            _context8.next = 3;
                            return _this5.wait(0.5);

                          case 3:
                            return _context8.abrupt("return", __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.uploadFile({
                              fileItem: fileItem,
                              inputFileName: inputFileName,
                              fileType: fileType,
                              credential: credential
                            }).then(function () {
                              _this5.setState({
                                status: "Upload Success."
                              });

                              setTimeout(function () {
                                _this5.setState({
                                  status: null
                                });
                              }, 2000);
                            })["catch"](function (uploadError) {
                              console.error("fs-embed | error uploading file:", uploadError);

                              _this5.flashError("Error uploading file.");
                            }));

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x10) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function encryptFile(_x7, _x8, _x9) {
        return _encryptFile.apply(this, arguments);
      }

      return encryptFile;
    }()
  }, {
    key: "flashError",
    value: function flashError(error) {
      var _this6 = this;

      this.setState({
        status: error,
        statusClass: "danger"
      });
      setTimeout(function () {
        _this6.setState({
          status: null,
          statusClass: null
        });
      }, 2500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var statusClass = this.state.statusClass ? this.state.statusClass : "info";
      var hasSpinner = statusClass == "info";
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sn-component files-view"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-panel-row align-top"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "files"
      }, this.state.messages.length > 0 && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "messages-container",
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__MessagesView_js__["a" /* default */], {
        messages: this.state.messages
      })), this.state.status && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "file-upload-status",
        className: "sk-horizontal-group"
      }, hasSpinner && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-spinner info small"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: statusClass
      }, this.state.status)), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "add-file-button-container"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file sk-button info"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("label", {
        className: "no-style"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("input", {
        type: "file",
        style: {
          display: "none"
        },
        onChange: function onChange(event) {
          _this7.handleDroppedFiles(event.target.files);
        }
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "attach-file-button-label",
        className: "sk-label"
      }, "Attach File")))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__FilesView__["a" /* default */], {
        files: this.state.noteFiles
      }))));
    }
  }, {
    key: "rootElement",
    get: function get() {
      return document.getElementById("filesafe-embed");
    }
  }, {
    key: "dropContainer",
    get: function get() {
      return document.getElementById("files-view");
    }
  }, {
    key: "fileInput",
    get: function get() {
      return document.getElementById("file-input");
    }
  }]);

  return UploadFilesView;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);





var MessagesManager =
/*#__PURE__*/
function () {
  function MessagesManager(_ref) {
    var credentialManager = _ref.credentialManager,
        integrationManager = _ref.integrationManager;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, MessagesManager);

    this.credentialManager = credentialManager;
    this.integrationManager = integrationManager;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(MessagesManager, [{
    key: "getMessages",
    value: function () {
      var _getMessages = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var messages, credentials, integrations;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messages = [];
                /*
                Display messages if:
                No keys
                No integrations
                */

                _context.next = 3;
                return this.credentialManager.getDefaultCredentials();

              case 3:
                credentials = _context.sent;

                if (!credentials) {
                  messages.push({
                    message: "Create keys by selecting <strong>Create New</strong> under <i>Keys</i>.",
                    css: "sk-base"
                  });
                }

                integrations = this.integrationManager.integrations;

                if (!integrations || integrations.length == 0) {
                  messages.push({
                    message: "Add a new integration by selecting <strong>Add New</strong> under <i>Integrations</i>",
                    css: "sk-base"
                  });
                }

                return _context.abrupt("return", messages);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMessages() {
        return _getMessages.apply(this, arguments);
      }

      return getMessages;
    }()
  }]);

  return MessagesManager;
}();



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var MessagesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(MessagesView, _React$Component);

  function MessagesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, MessagesView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(MessagesView).call(this, props));
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(MessagesView, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "messages"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "title"
      }, "Complete the following steps before uploading your first file:"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("ul", null, this.props.messages.map(function (message) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
          dangerouslySetInnerHTML: {
            __html: message.message
          },
          className: message.css
        });
      })));
    }
  }]);

  return MessagesView;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FilesView__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__ = __webpack_require__(6);











var AllFilesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(AllFilesView, _React$Component);

  function AllFilesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, AllFilesView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(AllFilesView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "toggleVisibility", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    _this.state = {
      expanded: false,
      files: __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllFileDescriptors() || []
    };
    __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.setState({
        files: __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllFileDescriptors()
      });
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(AllFilesView, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "files-view"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row justify-left"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-horizontal-group"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-section-title"
      }, "All Files ", __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", {
        style: {
          fontWeight: "normal"
        }
      }, "(", this.state.files.length, ")")), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        className: "info",
        onClick: this.toggleVisibility
      }, this.state.expanded ? "Hide" : "Show"))), this.state.expanded && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "files"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__FilesView__["a" /* default */], {
        files: this.state.files
      }))));
    }
  }]);

  return AllFilesView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__ = __webpack_require__(6);










var IntegrationsView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(IntegrationsView, _React$Component);

  function IntegrationsView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, IntegrationsView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(IntegrationsView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter') {
        _this.submitIntegrationCode();
      }
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleTextChange", function (event) {
      var text = event.target.value;

      _this.setState({
        integrationCode: text
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "submitIntegrationCode", function () {
      var code = _this.state.integrationCode;

      if (!code || code.length == 0) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.saveIntegrationFromCode(code).then(function () {
        _this.setState({
          integrationCode: null,
          showInputForm: false
        });

        _this.reloadIntegrations();
      })["catch"](function () {
        alert("Invalid integration code. Ensure the correct value is copied and try again.");
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "addNewIntegrationClicked", function () {
      window.open(__WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().defaultRelayServerUrl(), "_blank");

      _this.setState({
        showInputForm: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "cancelIntegrationForm", function () {
      _this.setState({
        showInputForm: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "deleteIntegration", function (integration) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteIntegration(integration);
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "setIntegrationAsDefaultUploadSource", function (integration) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.setIntegrationAsDefault(integration);
    });

    _this.state = {
      integrations: __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations() || []
    };
    __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.reloadIntegrations();
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(IntegrationsView, [{
    key: "reloadIntegrations",
    value: function reloadIntegrations() {
      var integrations = __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations();
      this.setState({
        integrations: integrations
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "displayStringForIntegration",
    value: function displayStringForIntegration(integration) {
      return __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hasMultipleIntegrations = this.state.integrations.length > 1;
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-h2 sk-bold"
      }, "Integrations"), !this.state.showInputForm && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button info no-border",
        onClick: this.addNewIntegrationClicked
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-label"
      }, "Add New"))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        id: "integrations"
      }, this.state.showInputForm && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-notification info"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("strong", null, "New Integration"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("p", {
        className: "sk-p"
      }, "A new tab has opened. After you complete the authentication flow, enter the code you receive below."), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("input", {
        className: "title sk-input contrast",
        type: "text",
        placeholder: "Enter integration code",
        value: this.state.integrationCode,
        onChange: this.handleTextChange,
        onKeyPress: this.handleKeyPress
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button-group",
        style: {
          marginTop: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button neutral",
        onClick: this.cancelIntegrationForm
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        className: "sk-label"
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button sk-base",
        onClick: this.submitIntegrationCode
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        className: "sk-label"
      }, "Submit"))))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "list-container"
      }, this.state.integrations.map(function (integration) {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "list-item sk-horizontal-group top"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-circle x-small " + (integration.content.isDefaultUploadSource ? "info" : "sk-secondary-contrast")
        }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed sk-bold"
        }, _this2.displayStringForIntegration(integration)), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-horizontal-group"
        }, hasMultipleIntegrations && !integration.content.isDefaultUploadSource && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.setIntegrationAsDefaultUploadSource(integration);
          }
        }, "Make Default"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "danger",
          onClick: function onClick() {
            _this2.deleteIntegration(integration);
          }
        }, "Delete")))));
      })));
    }
  }]);

  return IntegrationsView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);



/***/ })
/******/ ]);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function (f) {
  if (true) {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.SF = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return require(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      (function (global) {
        /*
        CryptoJS v3.1.2
        code.google.com/p/crypto-js
        (c) 2009-2013 by Jeff Mott. All rights reserved.
        code.google.com/p/crypto-js/wiki/License
        */
        var CryptoJS = CryptoJS || function (u, p) {
          var d = {},
              l = d.lib = {},
              s = function () {},
              t = l.Base = {
            extend: function (a) {
              s.prototype = this;
              var c = new s();
              a && c.mixIn(a);
              c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments);
              });
              c.init.prototype = c;
              c.$super = this;
              return c;
            },
            create: function () {
              var a = this.extend();
              a.init.apply(a, arguments);
              return a;
            },
            init: function () {},
            mixIn: function (a) {
              for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);

              a.hasOwnProperty("toString") && (this.toString = a.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          },
              r = l.WordArray = t.extend({
            init: function (a, c) {
              a = this.words = a || [];
              this.sigBytes = c != p ? c : 4 * a.length;
            },
            toString: function (a) {
              return (a || v).stringify(this);
            },
            concat: function (a) {
              var c = this.words,
                  e = a.words,
                  j = this.sigBytes;
              a = a.sigBytes;
              this.clamp();
              if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];else c.push.apply(c, e);
              this.sigBytes += a;
              return this;
            },
            clamp: function () {
              var a = this.words,
                  c = this.sigBytes;
              a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
              a.length = u.ceil(c / 4);
            },
            clone: function () {
              var a = t.clone.call(this);
              a.words = this.words.slice(0);
              return a;
            },
            random: function (a) {
              for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);

              return new r.init(c, a);
            }
          }),
              w = d.enc = {},
              v = w.Hex = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16));
              }

              return e.join("");
            },
            parse: function (a) {
              for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);

              return new r.init(e, c / 2);
            }
          },
              b = w.Latin1 = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));

              return e.join("");
            },
            parse: function (a) {
              for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);

              return new r.init(e, c);
            }
          },
              x = w.Utf8 = {
            stringify: function (a) {
              try {
                return decodeURIComponent(escape(b.stringify(a)));
              } catch (c) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (a) {
              return b.parse(unescape(encodeURIComponent(a)));
            }
          },
              q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
              this._data = new r.init();
              this._nDataBytes = 0;
            },
            _append: function (a) {
              "string" == typeof a && (a = x.parse(a));

              this._data.concat(a);

              this._nDataBytes += a.sigBytes;
            },
            _process: function (a) {
              var c = this._data,
                  e = c.words,
                  j = c.sigBytes,
                  k = this.blockSize,
                  b = j / (4 * k),
                  b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
              a = b * k;
              j = u.min(4 * a, j);

              if (a) {
                for (var q = 0; q < a; q += k) this._doProcessBlock(e, q);

                q = e.splice(0, a);
                c.sigBytes -= j;
              }

              return new r.init(q, j);
            },
            clone: function () {
              var a = t.clone.call(this);
              a._data = this._data.clone();
              return a;
            },
            _minBufferSize: 0
          });

          l.Hasher = q.extend({
            cfg: t.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              q.reset.call(this);

              this._doReset();
            },
            update: function (a) {
              this._append(a);

              this._process();

              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (b, e) {
                return new a.init(e).finalize(b);
              };
            },
            _createHmacHelper: function (a) {
              return function (b, e) {
                return new n.HMAC.init(a, e).finalize(b);
              };
            }
          });
          var n = d.algo = {};
          return d;
        }(Math);

        (function () {
          var u = CryptoJS,
              p = u.lib.WordArray;
          u.enc.Base64 = {
            stringify: function (d) {
              var l = d.words,
                  p = d.sigBytes,
                  t = this._map;
              d.clamp();
              d = [];

              for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));

              if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
              return d.join("");
            },
            parse: function (d) {
              var l = d.length,
                  s = this._map,
                  t = s.charAt(64);
              t && (t = d.indexOf(t), -1 != t && (l = t));

              for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                    b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++;
              }

              return p.create(t, r);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
        })();

        (function (u) {
          function p(b, n, a, c, e, j, k) {
            b = b + (n & a | ~n & c) + e + k;
            return (b << j | b >>> 32 - j) + n;
          }

          function d(b, n, a, c, e, j, k) {
            b = b + (n & c | a & ~c) + e + k;
            return (b << j | b >>> 32 - j) + n;
          }

          function l(b, n, a, c, e, j, k) {
            b = b + (n ^ a ^ c) + e + k;
            return (b << j | b >>> 32 - j) + n;
          }

          function s(b, n, a, c, e, j, k) {
            b = b + (a ^ (n | ~c)) + e + k;
            return (b << j | b >>> 32 - j) + n;
          }

          for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;

          r = r.MD5 = v.extend({
            _doReset: function () {
              this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
            },
            _doProcessBlock: function (q, n) {
              for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
              }

              var a = this._hash.words,
                  c = q[n + 0],
                  e = q[n + 1],
                  j = q[n + 2],
                  k = q[n + 3],
                  z = q[n + 4],
                  r = q[n + 5],
                  t = q[n + 6],
                  w = q[n + 7],
                  v = q[n + 8],
                  A = q[n + 9],
                  B = q[n + 10],
                  C = q[n + 11],
                  u = q[n + 12],
                  D = q[n + 13],
                  E = q[n + 14],
                  x = q[n + 15],
                  f = a[0],
                  m = a[1],
                  g = a[2],
                  h = a[3],
                  f = p(f, m, g, h, c, 7, b[0]),
                  h = p(h, f, m, g, e, 12, b[1]),
                  g = p(g, h, f, m, j, 17, b[2]),
                  m = p(m, g, h, f, k, 22, b[3]),
                  f = p(f, m, g, h, z, 7, b[4]),
                  h = p(h, f, m, g, r, 12, b[5]),
                  g = p(g, h, f, m, t, 17, b[6]),
                  m = p(m, g, h, f, w, 22, b[7]),
                  f = p(f, m, g, h, v, 7, b[8]),
                  h = p(h, f, m, g, A, 12, b[9]),
                  g = p(g, h, f, m, B, 17, b[10]),
                  m = p(m, g, h, f, C, 22, b[11]),
                  f = p(f, m, g, h, u, 7, b[12]),
                  h = p(h, f, m, g, D, 12, b[13]),
                  g = p(g, h, f, m, E, 17, b[14]),
                  m = p(m, g, h, f, x, 22, b[15]),
                  f = d(f, m, g, h, e, 5, b[16]),
                  h = d(h, f, m, g, t, 9, b[17]),
                  g = d(g, h, f, m, C, 14, b[18]),
                  m = d(m, g, h, f, c, 20, b[19]),
                  f = d(f, m, g, h, r, 5, b[20]),
                  h = d(h, f, m, g, B, 9, b[21]),
                  g = d(g, h, f, m, x, 14, b[22]),
                  m = d(m, g, h, f, z, 20, b[23]),
                  f = d(f, m, g, h, A, 5, b[24]),
                  h = d(h, f, m, g, E, 9, b[25]),
                  g = d(g, h, f, m, k, 14, b[26]),
                  m = d(m, g, h, f, v, 20, b[27]),
                  f = d(f, m, g, h, D, 5, b[28]),
                  h = d(h, f, m, g, j, 9, b[29]),
                  g = d(g, h, f, m, w, 14, b[30]),
                  m = d(m, g, h, f, u, 20, b[31]),
                  f = l(f, m, g, h, r, 4, b[32]),
                  h = l(h, f, m, g, v, 11, b[33]),
                  g = l(g, h, f, m, C, 16, b[34]),
                  m = l(m, g, h, f, E, 23, b[35]),
                  f = l(f, m, g, h, e, 4, b[36]),
                  h = l(h, f, m, g, z, 11, b[37]),
                  g = l(g, h, f, m, w, 16, b[38]),
                  m = l(m, g, h, f, B, 23, b[39]),
                  f = l(f, m, g, h, D, 4, b[40]),
                  h = l(h, f, m, g, c, 11, b[41]),
                  g = l(g, h, f, m, k, 16, b[42]),
                  m = l(m, g, h, f, t, 23, b[43]),
                  f = l(f, m, g, h, A, 4, b[44]),
                  h = l(h, f, m, g, u, 11, b[45]),
                  g = l(g, h, f, m, x, 16, b[46]),
                  m = l(m, g, h, f, j, 23, b[47]),
                  f = s(f, m, g, h, c, 6, b[48]),
                  h = s(h, f, m, g, w, 10, b[49]),
                  g = s(g, h, f, m, E, 15, b[50]),
                  m = s(m, g, h, f, r, 21, b[51]),
                  f = s(f, m, g, h, u, 6, b[52]),
                  h = s(h, f, m, g, k, 10, b[53]),
                  g = s(g, h, f, m, B, 15, b[54]),
                  m = s(m, g, h, f, e, 21, b[55]),
                  f = s(f, m, g, h, v, 6, b[56]),
                  h = s(h, f, m, g, x, 10, b[57]),
                  g = s(g, h, f, m, t, 15, b[58]),
                  m = s(m, g, h, f, D, 21, b[59]),
                  f = s(f, m, g, h, z, 6, b[60]),
                  h = s(h, f, m, g, C, 10, b[61]),
                  g = s(g, h, f, m, j, 15, b[62]),
                  m = s(m, g, h, f, A, 21, b[63]);
              a[0] = a[0] + f | 0;
              a[1] = a[1] + m | 0;
              a[2] = a[2] + g | 0;
              a[3] = a[3] + h | 0;
            },
            _doFinalize: function () {
              var b = this._data,
                  n = b.words,
                  a = 8 * this._nDataBytes,
                  c = 8 * b.sigBytes;
              n[c >>> 5] |= 128 << 24 - c % 32;
              var e = u.floor(a / 4294967296);
              n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
              n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
              b.sigBytes = 4 * (n.length + 1);

              this._process();

              b = this._hash;
              n = b.words;

              for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;

              return b;
            },
            clone: function () {
              var b = v.clone.call(this);
              b._hash = this._hash.clone();
              return b;
            }
          });
          t.MD5 = v._createHelper(r);
          t.HmacMD5 = v._createHmacHelper(r);
        })(Math);

        (function () {
          var u = CryptoJS,
              p = u.lib,
              d = p.Base,
              l = p.WordArray,
              p = u.algo,
              s = p.EvpKDF = d.extend({
            cfg: d.extend({
              keySize: 4,
              hasher: p.MD5,
              iterations: 1
            }),
            init: function (d) {
              this.cfg = this.cfg.extend(d);
            },
            compute: function (d, r) {
              for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();

                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();

                b.concat(n);
              }

              b.sigBytes = 4 * q;
              return b;
            }
          });

          u.EvpKDF = function (d, l, p) {
            return s.create(p).compute(d, l);
          };
        })();

        CryptoJS.lib.Cipher || function (u) {
          var p = CryptoJS,
              d = p.lib,
              l = d.Base,
              s = d.WordArray,
              t = d.BufferedBlockAlgorithm,
              r = p.enc.Base64,
              w = p.algo.EvpKDF,
              v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
              return this.create(this._ENC_XFORM_MODE, e, a);
            },
            createDecryptor: function (e, a) {
              return this.create(this._DEC_XFORM_MODE, e, a);
            },
            init: function (e, a, b) {
              this.cfg = this.cfg.extend(b);
              this._xformMode = e;
              this._key = a;
              this.reset();
            },
            reset: function () {
              t.reset.call(this);

              this._doReset();
            },
            process: function (e) {
              this._append(e);

              return this._process();
            },
            finalize: function (e) {
              e && this._append(e);
              return this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (e) {
              return {
                encrypt: function (b, k, d) {
                  return ("string" == typeof k ? c : a).encrypt(e, b, k, d);
                },
                decrypt: function (b, k, d) {
                  return ("string" == typeof k ? c : a).decrypt(e, b, k, d);
                }
              };
            }
          });
          d.StreamCipher = v.extend({
            _doFinalize: function () {
              return this._process(!0);
            },
            blockSize: 1
          });

          var b = p.mode = {},
              x = function (e, a, b) {
            var c = this._iv;
            c ? this._iv = u : c = this._prevBlock;

            for (var d = 0; d < b; d++) e[a + d] ^= c[d];
          },
              q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
              return this.Encryptor.create(e, a);
            },
            createDecryptor: function (e, a) {
              return this.Decryptor.create(e, a);
            },
            init: function (e, a) {
              this._cipher = e;
              this._iv = a;
            }
          })).extend();

          q.Encryptor = q.extend({
            processBlock: function (e, a) {
              var b = this._cipher,
                  c = b.blockSize;
              x.call(this, e, a, c);
              b.encryptBlock(e, a);
              this._prevBlock = e.slice(a, a + c);
            }
          });
          q.Decryptor = q.extend({
            processBlock: function (e, a) {
              var b = this._cipher,
                  c = b.blockSize,
                  d = e.slice(a, a + c);
              b.decryptBlock(e, a);
              x.call(this, e, a, c);
              this._prevBlock = d;
            }
          });
          b = b.CBC = q;
          q = (p.pad = {}).Pkcs7 = {
            pad: function (a, b) {
              for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);

              c = s.create(l, c);
              a.concat(c);
            },
            unpad: function (a) {
              a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255;
            }
          };
          d.BlockCipher = v.extend({
            cfg: v.cfg.extend({
              mode: b,
              padding: q
            }),
            reset: function () {
              v.reset.call(this);
              var a = this.cfg,
                  b = a.iv,
                  a = a.mode;
              if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;else c = a.createDecryptor, this._minBufferSize = 1;
              this._mode = c.call(a, this, b && b.words);
            },
            _doProcessBlock: function (a, b) {
              this._mode.processBlock(a, b);
            },
            _doFinalize: function () {
              var a = this.cfg.padding;

              if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);

                var b = this._process(!0);
              } else b = this._process(!0), a.unpad(b);

              return b;
            },
            blockSize: 4
          });
          var n = d.CipherParams = l.extend({
            init: function (a) {
              this.mixIn(a);
            },
            toString: function (a) {
              return (a || this.formatter).stringify(this);
            }
          }),
              b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
              var b = a.ciphertext;
              a = a.salt;
              return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
            },
            parse: function (a) {
              a = r.parse(a);
              var b = a.words;

              if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16;
              }

              return n.create({
                ciphertext: a,
                salt: c
              });
            }
          },
              a = d.SerializableCipher = l.extend({
            cfg: l.extend({
              format: b
            }),
            encrypt: function (a, b, c, d) {
              d = this.cfg.extend(d);
              var l = a.createEncryptor(c, d);
              b = l.finalize(b);
              l = l.cfg;
              return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
              });
            },
            decrypt: function (a, b, c, d) {
              d = this.cfg.extend(d);
              b = this._parse(b, d.format);
              return a.createDecryptor(c, d).finalize(b.ciphertext);
            },
            _parse: function (a, b) {
              return "string" == typeof a ? b.parse(a, this) : a;
            }
          }),
              p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
              d || (d = s.random(8));
              a = w.create({
                keySize: b + c
              }).compute(a, d);
              c = s.create(a.words.slice(b), 4 * c);
              a.sigBytes = 4 * b;
              return n.create({
                key: a,
                iv: c,
                salt: d
              });
            }
          },
              c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
              kdf: p
            }),
            encrypt: function (b, c, d, l) {
              l = this.cfg.extend(l);
              d = l.kdf.execute(d, b.keySize, b.ivSize);
              l.iv = d.iv;
              b = a.encrypt.call(this, b, c, d.key, l);
              b.mixIn(d);
              return b;
            },
            decrypt: function (b, c, d, l) {
              l = this.cfg.extend(l);
              c = this._parse(c, l.format);
              d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
              l.iv = d.iv;
              return a.decrypt.call(this, b, c, d.key, l);
            }
          });
        }();

        (function () {
          for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;

          for (var e = 0, j = 0, c = 0; 256 > c; c++) {
            var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
                k = k >>> 8 ^ k & 255 ^ 99;
            l[e] = k;
            s[k] = e;
            var z = a[e],
                F = a[z],
                G = a[F],
                y = 257 * a[k] ^ 16843008 * k;
            t[e] = y << 24 | y >>> 8;
            r[e] = y << 16 | y >>> 16;
            w[e] = y << 8 | y >>> 24;
            v[e] = y;
            y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
            b[k] = y << 24 | y >>> 8;
            x[k] = y << 16 | y >>> 16;
            q[k] = y << 8 | y >>> 24;
            n[k] = y;
            e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1;
          }

          var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
              d = d.AES = p.extend({
            _doReset: function () {
              for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k;
              }

              c = this._invKeySchedule = [];

              for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]];
            },
            encryptBlock: function (a, b) {
              this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
            },
            decryptBlock: function (a, c) {
              var d = a[c + 1];
              a[c + 1] = a[c + 3];
              a[c + 3] = d;

              this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);

              d = a[c + 1];
              a[c + 1] = a[c + 3];
              a[c + 3] = d;
            },
            _doCryptBlock: function (a, b, c, d, e, j, l, f) {
              for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;

              q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
              s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
              t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
              n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
              a[b] = q;
              a[b + 1] = s;
              a[b + 2] = t;
              a[b + 3] = n;
            },
            keySize: 8
          });
          u.AES = p._createHelper(d);
        })();

        ;
        /*
        CryptoJS v3.1.2
        code.google.com/p/crypto-js
        (c) 2009-2013 by Jeff Mott. All rights reserved.
        code.google.com/p/crypto-js/wiki/License
        */

        var CryptoJS = CryptoJS || function (h, s) {
          var f = {},
              g = f.lib = {},
              q = function () {},
              m = g.Base = {
            extend: function (a) {
              q.prototype = this;
              var c = new q();
              a && c.mixIn(a);
              c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments);
              });
              c.init.prototype = c;
              c.$super = this;
              return c;
            },
            create: function () {
              var a = this.extend();
              a.init.apply(a, arguments);
              return a;
            },
            init: function () {},
            mixIn: function (a) {
              for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);

              a.hasOwnProperty("toString") && (this.toString = a.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          },
              r = g.WordArray = m.extend({
            init: function (a, c) {
              a = this.words = a || [];
              this.sigBytes = c != s ? c : 4 * a.length;
            },
            toString: function (a) {
              return (a || k).stringify(this);
            },
            concat: function (a) {
              var c = this.words,
                  d = a.words,
                  b = this.sigBytes;
              a = a.sigBytes;
              this.clamp();
              if (b % 4) for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);else if (65535 < d.length) for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];else c.push.apply(c, d);
              this.sigBytes += a;
              return this;
            },
            clamp: function () {
              var a = this.words,
                  c = this.sigBytes;
              a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
              a.length = h.ceil(c / 4);
            },
            clone: function () {
              var a = m.clone.call(this);
              a.words = this.words.slice(0);
              return a;
            },
            random: function (a) {
              for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);

              return new r.init(c, a);
            }
          }),
              l = f.enc = {},
              k = l.Hex = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var d = [], b = 0; b < a; b++) {
                var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                d.push((e >>> 4).toString(16));
                d.push((e & 15).toString(16));
              }

              return d.join("");
            },
            parse: function (a) {
              for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);

              return new r.init(d, c / 2);
            }
          },
              n = l.Latin1 = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));

              return d.join("");
            },
            parse: function (a) {
              for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);

              return new r.init(d, c);
            }
          },
              j = l.Utf8 = {
            stringify: function (a) {
              try {
                return decodeURIComponent(escape(n.stringify(a)));
              } catch (c) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (a) {
              return n.parse(unescape(encodeURIComponent(a)));
            }
          },
              u = g.BufferedBlockAlgorithm = m.extend({
            reset: function () {
              this._data = new r.init();
              this._nDataBytes = 0;
            },
            _append: function (a) {
              "string" == typeof a && (a = j.parse(a));

              this._data.concat(a);

              this._nDataBytes += a.sigBytes;
            },
            _process: function (a) {
              var c = this._data,
                  d = c.words,
                  b = c.sigBytes,
                  e = this.blockSize,
                  f = b / (4 * e),
                  f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
              a = f * e;
              b = h.min(4 * a, b);

              if (a) {
                for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);

                g = d.splice(0, a);
                c.sigBytes -= b;
              }

              return new r.init(g, b);
            },
            clone: function () {
              var a = m.clone.call(this);
              a._data = this._data.clone();
              return a;
            },
            _minBufferSize: 0
          });

          g.Hasher = u.extend({
            cfg: m.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              u.reset.call(this);

              this._doReset();
            },
            update: function (a) {
              this._append(a);

              this._process();

              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (c, d) {
                return new a.init(d).finalize(c);
              };
            },
            _createHmacHelper: function (a) {
              return function (c, d) {
                return new t.HMAC.init(a, d).finalize(c);
              };
            }
          });
          var t = f.algo = {};
          return f;
        }(Math);

        (function (h) {
          for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function (a) {
            return 4294967296 * (a - (a | 0)) | 0;
          }, k = 2, n = 0; 64 > n;) {
            var j;

            a: {
              j = k;

              for (var u = h.sqrt(j), t = 2; t <= u; t++) if (!(j % t)) {
                j = !1;
                break a;
              }

              j = !0;
            }

            j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
            k++;
          }

          var a = [],
              f = f.SHA256 = q.extend({
            _doReset: function () {
              this._hash = new g.init(m.slice(0));
            },
            _doProcessBlock: function (c, d) {
              for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
                if (16 > p) a[p] = c[d + p] | 0;else {
                  var k = a[p - 15],
                      l = a[p - 2];
                  a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
                }
                k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                q = n;
                n = m;
                m = h;
                h = j + k | 0;
                j = g;
                g = f;
                f = e;
                e = k + l | 0;
              }

              b[0] = b[0] + e | 0;
              b[1] = b[1] + f | 0;
              b[2] = b[2] + g | 0;
              b[3] = b[3] + j | 0;
              b[4] = b[4] + h | 0;
              b[5] = b[5] + m | 0;
              b[6] = b[6] + n | 0;
              b[7] = b[7] + q | 0;
            },
            _doFinalize: function () {
              var a = this._data,
                  d = a.words,
                  b = 8 * this._nDataBytes,
                  e = 8 * a.sigBytes;
              d[e >>> 5] |= 128 << 24 - e % 32;
              d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
              d[(e + 64 >>> 9 << 4) + 15] = b;
              a.sigBytes = 4 * d.length;

              this._process();

              return this._hash;
            },
            clone: function () {
              var a = q.clone.call(this);
              a._hash = this._hash.clone();
              return a;
            }
          });
          s.SHA256 = q._createHelper(f);
          s.HmacSHA256 = q._createHmacHelper(f);
        })(Math);

        (function () {
          var h = CryptoJS,
              s = h.enc.Utf8;
          h.algo.HMAC = h.lib.Base.extend({
            init: function (f, g) {
              f = this._hasher = new f.init();
              "string" == typeof g && (g = s.parse(g));
              var h = f.blockSize,
                  m = 4 * h;
              g.sigBytes > m && (g = f.finalize(g));
              g.clamp();

              for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;

              r.sigBytes = l.sigBytes = m;
              this.reset();
            },
            reset: function () {
              var f = this._hasher;
              f.reset();
              f.update(this._iKey);
            },
            update: function (f) {
              this._hasher.update(f);

              return this;
            },
            finalize: function (f) {
              var g = this._hasher;
              f = g.finalize(f);
              g.reset();
              return g.finalize(this._oKey.clone().concat(f));
            }
          });
        })();

        ;
        /*
        CryptoJS v3.1.2
        code.google.com/p/crypto-js
        (c) 2009-2013 by Jeff Mott. All rights reserved.
        code.google.com/p/crypto-js/wiki/License
        */

        var CryptoJS = CryptoJS || function (a, j) {
          var c = {},
              b = c.lib = {},
              f = function () {},
              l = b.Base = {
            extend: function (a) {
              f.prototype = this;
              var d = new f();
              a && d.mixIn(a);
              d.hasOwnProperty("init") || (d.init = function () {
                d.$super.init.apply(this, arguments);
              });
              d.init.prototype = d;
              d.$super = this;
              return d;
            },
            create: function () {
              var a = this.extend();
              a.init.apply(a, arguments);
              return a;
            },
            init: function () {},
            mixIn: function (a) {
              for (var d in a) a.hasOwnProperty(d) && (this[d] = a[d]);

              a.hasOwnProperty("toString") && (this.toString = a.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          },
              u = b.WordArray = l.extend({
            init: function (a, d) {
              a = this.words = a || [];
              this.sigBytes = d != j ? d : 4 * a.length;
            },
            toString: function (a) {
              return (a || m).stringify(this);
            },
            concat: function (a) {
              var d = this.words,
                  M = a.words,
                  e = this.sigBytes;
              a = a.sigBytes;
              this.clamp();
              if (e % 4) for (var b = 0; b < a; b++) d[e + b >>> 2] |= (M[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((e + b) % 4);else if (65535 < M.length) for (b = 0; b < a; b += 4) d[e + b >>> 2] = M[b >>> 2];else d.push.apply(d, M);
              this.sigBytes += a;
              return this;
            },
            clamp: function () {
              var D = this.words,
                  d = this.sigBytes;
              D[d >>> 2] &= 4294967295 << 32 - 8 * (d % 4);
              D.length = a.ceil(d / 4);
            },
            clone: function () {
              var a = l.clone.call(this);
              a.words = this.words.slice(0);
              return a;
            },
            random: function (D) {
              for (var d = [], b = 0; b < D; b += 4) d.push(4294967296 * a.random() | 0);

              return new u.init(d, D);
            }
          }),
              k = c.enc = {},
              m = k.Hex = {
            stringify: function (a) {
              var d = a.words;
              a = a.sigBytes;

              for (var b = [], e = 0; e < a; e++) {
                var c = d[e >>> 2] >>> 24 - 8 * (e % 4) & 255;
                b.push((c >>> 4).toString(16));
                b.push((c & 15).toString(16));
              }

              return b.join("");
            },
            parse: function (a) {
              for (var d = a.length, b = [], e = 0; e < d; e += 2) b[e >>> 3] |= parseInt(a.substr(e, 2), 16) << 24 - 4 * (e % 8);

              return new u.init(b, d / 2);
            }
          },
              y = k.Latin1 = {
            stringify: function (a) {
              var b = a.words;
              a = a.sigBytes;

              for (var c = [], e = 0; e < a; e++) c.push(String.fromCharCode(b[e >>> 2] >>> 24 - 8 * (e % 4) & 255));

              return c.join("");
            },
            parse: function (a) {
              for (var b = a.length, c = [], e = 0; e < b; e++) c[e >>> 2] |= (a.charCodeAt(e) & 255) << 24 - 8 * (e % 4);

              return new u.init(c, b);
            }
          },
              z = k.Utf8 = {
            stringify: function (a) {
              try {
                return decodeURIComponent(escape(y.stringify(a)));
              } catch (b) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (a) {
              return y.parse(unescape(encodeURIComponent(a)));
            }
          },
              x = b.BufferedBlockAlgorithm = l.extend({
            reset: function () {
              this._data = new u.init();
              this._nDataBytes = 0;
            },
            _append: function (a) {
              "string" == typeof a && (a = z.parse(a));

              this._data.concat(a);

              this._nDataBytes += a.sigBytes;
            },
            _process: function (b) {
              var d = this._data,
                  c = d.words,
                  e = d.sigBytes,
                  l = this.blockSize,
                  k = e / (4 * l),
                  k = b ? a.ceil(k) : a.max((k | 0) - this._minBufferSize, 0);
              b = k * l;
              e = a.min(4 * b, e);

              if (b) {
                for (var x = 0; x < b; x += l) this._doProcessBlock(c, x);

                x = c.splice(0, b);
                d.sigBytes -= e;
              }

              return new u.init(x, e);
            },
            clone: function () {
              var a = l.clone.call(this);
              a._data = this._data.clone();
              return a;
            },
            _minBufferSize: 0
          });

          b.Hasher = x.extend({
            cfg: l.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              x.reset.call(this);

              this._doReset();
            },
            update: function (a) {
              this._append(a);

              this._process();

              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (b, c) {
                return new a.init(c).finalize(b);
              };
            },
            _createHmacHelper: function (a) {
              return function (b, c) {
                return new ja.HMAC.init(a, c).finalize(b);
              };
            }
          });
          var ja = c.algo = {};
          return c;
        }(Math);

        (function (a) {
          var j = CryptoJS,
              c = j.lib,
              b = c.Base,
              f = c.WordArray,
              j = j.x64 = {};
          j.Word = b.extend({
            init: function (a, b) {
              this.high = a;
              this.low = b;
            }
          });
          j.WordArray = b.extend({
            init: function (b, c) {
              b = this.words = b || [];
              this.sigBytes = c != a ? c : 8 * b.length;
            },
            toX32: function () {
              for (var a = this.words, b = a.length, c = [], m = 0; m < b; m++) {
                var y = a[m];
                c.push(y.high);
                c.push(y.low);
              }

              return f.create(c, this.sigBytes);
            },
            clone: function () {
              for (var a = b.clone.call(this), c = a.words = this.words.slice(0), k = c.length, f = 0; f < k; f++) c[f] = c[f].clone();

              return a;
            }
          });
        })();

        (function () {
          function a() {
            return f.create.apply(f, arguments);
          }

          for (var j = CryptoJS, c = j.lib.Hasher, b = j.x64, f = b.Word, l = b.WordArray, b = j.algo, u = [a(1116352408, 3609767458), a(1899447441, 602891725), a(3049323471, 3964484399), a(3921009573, 2173295548), a(961987163, 4081628472), a(1508970993, 3053834265), a(2453635748, 2937671579), a(2870763221, 3664609560), a(3624381080, 2734883394), a(310598401, 1164996542), a(607225278, 1323610764), a(1426881987, 3590304994), a(1925078388, 4068182383), a(2162078206, 991336113), a(2614888103, 633803317), a(3248222580, 3479774868), a(3835390401, 2666613458), a(4022224774, 944711139), a(264347078, 2341262773), a(604807628, 2007800933), a(770255983, 1495990901), a(1249150122, 1856431235), a(1555081692, 3175218132), a(1996064986, 2198950837), a(2554220882, 3999719339), a(2821834349, 766784016), a(2952996808, 2566594879), a(3210313671, 3203337956), a(3336571891, 1034457026), a(3584528711, 2466948901), a(113926993, 3758326383), a(338241895, 168717936), a(666307205, 1188179964), a(773529912, 1546045734), a(1294757372, 1522805485), a(1396182291, 2643833823), a(1695183700, 2343527390), a(1986661051, 1014477480), a(2177026350, 1206759142), a(2456956037, 344077627), a(2730485921, 1290863460), a(2820302411, 3158454273), a(3259730800, 3505952657), a(3345764771, 106217008), a(3516065817, 3606008344), a(3600352804, 1432725776), a(4094571909, 1467031594), a(275423344, 851169720), a(430227734, 3100823752), a(506948616, 1363258195), a(659060556, 3750685593), a(883997877, 3785050280), a(958139571, 3318307427), a(1322822218, 3812723403), a(1537002063, 2003034995), a(1747873779, 3602036899), a(1955562222, 1575990012), a(2024104815, 1125592928), a(2227730452, 2716904306), a(2361852424, 442776044), a(2428436474, 593698344), a(2756734187, 3733110249), a(3204031479, 2999351573), a(3329325298, 3815920427), a(3391569614, 3928383900), a(3515267271, 566280711), a(3940187606, 3454069534), a(4118630271, 4000239992), a(116418474, 1914138554), a(174292421, 2731055270), a(289380356, 3203993006), a(460393269, 320620315), a(685471733, 587496836), a(852142971, 1086792851), a(1017036298, 365543100), a(1126000580, 2618297676), a(1288033470, 3409855158), a(1501505948, 4234509866), a(1607167915, 987167468), a(1816402316, 1246189591)], k = [], m = 0; 80 > m; m++) k[m] = a();

          b = b.SHA512 = c.extend({
            _doReset: function () {
              this._hash = new l.init([new f.init(1779033703, 4089235720), new f.init(3144134277, 2227873595), new f.init(1013904242, 4271175723), new f.init(2773480762, 1595750129), new f.init(1359893119, 2917565137), new f.init(2600822924, 725511199), new f.init(528734635, 4215389547), new f.init(1541459225, 327033209)]);
            },
            _doProcessBlock: function (a, b) {
              for (var c = this._hash.words, f = c[0], j = c[1], d = c[2], l = c[3], e = c[4], m = c[5], N = c[6], c = c[7], aa = f.high, O = f.low, ba = j.high, P = j.low, ca = d.high, Q = d.low, da = l.high, R = l.low, ea = e.high, S = e.low, fa = m.high, T = m.low, ga = N.high, U = N.low, ha = c.high, V = c.low, r = aa, n = O, G = ba, E = P, H = ca, F = Q, Y = da, I = R, s = ea, p = S, W = fa, J = T, X = ga, K = U, Z = ha, L = V, t = 0; 80 > t; t++) {
                var A = k[t];
                if (16 > t) var q = A.high = a[b + 2 * t] | 0,
                    g = A.low = a[b + 2 * t + 1] | 0;else {
                  var q = k[t - 15],
                      g = q.high,
                      v = q.low,
                      q = (g >>> 1 | v << 31) ^ (g >>> 8 | v << 24) ^ g >>> 7,
                      v = (v >>> 1 | g << 31) ^ (v >>> 8 | g << 24) ^ (v >>> 7 | g << 25),
                      C = k[t - 2],
                      g = C.high,
                      h = C.low,
                      C = (g >>> 19 | h << 13) ^ (g << 3 | h >>> 29) ^ g >>> 6,
                      h = (h >>> 19 | g << 13) ^ (h << 3 | g >>> 29) ^ (h >>> 6 | g << 26),
                      g = k[t - 7],
                      $ = g.high,
                      B = k[t - 16],
                      w = B.high,
                      B = B.low,
                      g = v + g.low,
                      q = q + $ + (g >>> 0 < v >>> 0 ? 1 : 0),
                      g = g + h,
                      q = q + C + (g >>> 0 < h >>> 0 ? 1 : 0),
                      g = g + B,
                      q = q + w + (g >>> 0 < B >>> 0 ? 1 : 0);
                  A.high = q;
                  A.low = g;
                }
                var $ = s & W ^ ~s & X,
                    B = p & J ^ ~p & K,
                    A = r & G ^ r & H ^ G & H,
                    ka = n & E ^ n & F ^ E & F,
                    v = (r >>> 28 | n << 4) ^ (r << 30 | n >>> 2) ^ (r << 25 | n >>> 7),
                    C = (n >>> 28 | r << 4) ^ (n << 30 | r >>> 2) ^ (n << 25 | r >>> 7),
                    h = u[t],
                    la = h.high,
                    ia = h.low,
                    h = L + ((p >>> 14 | s << 18) ^ (p >>> 18 | s << 14) ^ (p << 23 | s >>> 9)),
                    w = Z + ((s >>> 14 | p << 18) ^ (s >>> 18 | p << 14) ^ (s << 23 | p >>> 9)) + (h >>> 0 < L >>> 0 ? 1 : 0),
                    h = h + B,
                    w = w + $ + (h >>> 0 < B >>> 0 ? 1 : 0),
                    h = h + ia,
                    w = w + la + (h >>> 0 < ia >>> 0 ? 1 : 0),
                    h = h + g,
                    w = w + q + (h >>> 0 < g >>> 0 ? 1 : 0),
                    g = C + ka,
                    A = v + A + (g >>> 0 < C >>> 0 ? 1 : 0),
                    Z = X,
                    L = K,
                    X = W,
                    K = J,
                    W = s,
                    J = p,
                    p = I + h | 0,
                    s = Y + w + (p >>> 0 < I >>> 0 ? 1 : 0) | 0,
                    Y = H,
                    I = F,
                    H = G,
                    F = E,
                    G = r,
                    E = n,
                    n = h + g | 0,
                    r = w + A + (n >>> 0 < h >>> 0 ? 1 : 0) | 0;
              }

              O = f.low = O + n;
              f.high = aa + r + (O >>> 0 < n >>> 0 ? 1 : 0);
              P = j.low = P + E;
              j.high = ba + G + (P >>> 0 < E >>> 0 ? 1 : 0);
              Q = d.low = Q + F;
              d.high = ca + H + (Q >>> 0 < F >>> 0 ? 1 : 0);
              R = l.low = R + I;
              l.high = da + Y + (R >>> 0 < I >>> 0 ? 1 : 0);
              S = e.low = S + p;
              e.high = ea + s + (S >>> 0 < p >>> 0 ? 1 : 0);
              T = m.low = T + J;
              m.high = fa + W + (T >>> 0 < J >>> 0 ? 1 : 0);
              U = N.low = U + K;
              N.high = ga + X + (U >>> 0 < K >>> 0 ? 1 : 0);
              V = c.low = V + L;
              c.high = ha + Z + (V >>> 0 < L >>> 0 ? 1 : 0);
            },
            _doFinalize: function () {
              var a = this._data,
                  b = a.words,
                  c = 8 * this._nDataBytes,
                  f = 8 * a.sigBytes;
              b[f >>> 5] |= 128 << 24 - f % 32;
              b[(f + 128 >>> 10 << 5) + 30] = Math.floor(c / 4294967296);
              b[(f + 128 >>> 10 << 5) + 31] = c;
              a.sigBytes = 4 * b.length;

              this._process();

              return this._hash.toX32();
            },
            clone: function () {
              var a = c.clone.call(this);
              a._hash = this._hash.clone();
              return a;
            },
            blockSize: 32
          });
          j.SHA512 = c._createHelper(b);
          j.HmacSHA512 = c._createHmacHelper(b);
        })();

        (function () {
          var a = CryptoJS,
              j = a.enc.Utf8;
          a.algo.HMAC = a.lib.Base.extend({
            init: function (a, b) {
              a = this._hasher = new a.init();
              "string" == typeof b && (b = j.parse(b));
              var f = a.blockSize,
                  l = 4 * f;
              b.sigBytes > l && (b = a.finalize(b));
              b.clamp();

              for (var u = this._oKey = b.clone(), k = this._iKey = b.clone(), m = u.words, y = k.words, z = 0; z < f; z++) m[z] ^= 1549556828, y[z] ^= 909522486;

              u.sigBytes = k.sigBytes = l;
              this.reset();
            },
            reset: function () {
              var a = this._hasher;
              a.reset();
              a.update(this._iKey);
            },
            update: function (a) {
              this._hasher.update(a);

              return this;
            },
            finalize: function (a) {
              var b = this._hasher;
              a = b.finalize(a);
              b.reset();
              return b.finalize(this._oKey.clone().concat(a));
            }
          });
        })();

        ;
        /*
        CryptoJS v3.1.2
        code.google.com/p/crypto-js
        (c) 2009-2013 by Jeff Mott. All rights reserved.
        code.google.com/p/crypto-js/wiki/License
        */

        var CryptoJS = CryptoJS || function (g, j) {
          var e = {},
              d = e.lib = {},
              m = function () {},
              n = d.Base = {
            extend: function (a) {
              m.prototype = this;
              var c = new m();
              a && c.mixIn(a);
              c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments);
              });
              c.init.prototype = c;
              c.$super = this;
              return c;
            },
            create: function () {
              var a = this.extend();
              a.init.apply(a, arguments);
              return a;
            },
            init: function () {},
            mixIn: function (a) {
              for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);

              a.hasOwnProperty("toString") && (this.toString = a.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          },
              q = d.WordArray = n.extend({
            init: function (a, c) {
              a = this.words = a || [];
              this.sigBytes = c != j ? c : 4 * a.length;
            },
            toString: function (a) {
              return (a || l).stringify(this);
            },
            concat: function (a) {
              var c = this.words,
                  p = a.words,
                  f = this.sigBytes;
              a = a.sigBytes;
              this.clamp();
              if (f % 4) for (var b = 0; b < a; b++) c[f + b >>> 2] |= (p[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((f + b) % 4);else if (65535 < p.length) for (b = 0; b < a; b += 4) c[f + b >>> 2] = p[b >>> 2];else c.push.apply(c, p);
              this.sigBytes += a;
              return this;
            },
            clamp: function () {
              var a = this.words,
                  c = this.sigBytes;
              a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
              a.length = g.ceil(c / 4);
            },
            clone: function () {
              var a = n.clone.call(this);
              a.words = this.words.slice(0);
              return a;
            },
            random: function (a) {
              for (var c = [], b = 0; b < a; b += 4) c.push(4294967296 * g.random() | 0);

              return new q.init(c, a);
            }
          }),
              b = e.enc = {},
              l = b.Hex = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var b = [], f = 0; f < a; f++) {
                var d = c[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
                b.push((d >>> 4).toString(16));
                b.push((d & 15).toString(16));
              }

              return b.join("");
            },
            parse: function (a) {
              for (var c = a.length, b = [], f = 0; f < c; f += 2) b[f >>> 3] |= parseInt(a.substr(f, 2), 16) << 24 - 4 * (f % 8);

              return new q.init(b, c / 2);
            }
          },
              k = b.Latin1 = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var b = [], f = 0; f < a; f++) b.push(String.fromCharCode(c[f >>> 2] >>> 24 - 8 * (f % 4) & 255));

              return b.join("");
            },
            parse: function (a) {
              for (var c = a.length, b = [], f = 0; f < c; f++) b[f >>> 2] |= (a.charCodeAt(f) & 255) << 24 - 8 * (f % 4);

              return new q.init(b, c);
            }
          },
              h = b.Utf8 = {
            stringify: function (a) {
              try {
                return decodeURIComponent(escape(k.stringify(a)));
              } catch (b) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (a) {
              return k.parse(unescape(encodeURIComponent(a)));
            }
          },
              u = d.BufferedBlockAlgorithm = n.extend({
            reset: function () {
              this._data = new q.init();
              this._nDataBytes = 0;
            },
            _append: function (a) {
              "string" == typeof a && (a = h.parse(a));

              this._data.concat(a);

              this._nDataBytes += a.sigBytes;
            },
            _process: function (a) {
              var b = this._data,
                  d = b.words,
                  f = b.sigBytes,
                  l = this.blockSize,
                  e = f / (4 * l),
                  e = a ? g.ceil(e) : g.max((e | 0) - this._minBufferSize, 0);
              a = e * l;
              f = g.min(4 * a, f);

              if (a) {
                for (var h = 0; h < a; h += l) this._doProcessBlock(d, h);

                h = d.splice(0, a);
                b.sigBytes -= f;
              }

              return new q.init(h, f);
            },
            clone: function () {
              var a = n.clone.call(this);
              a._data = this._data.clone();
              return a;
            },
            _minBufferSize: 0
          });

          d.Hasher = u.extend({
            cfg: n.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              u.reset.call(this);

              this._doReset();
            },
            update: function (a) {
              this._append(a);

              this._process();

              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (b, d) {
                return new a.init(d).finalize(b);
              };
            },
            _createHmacHelper: function (a) {
              return function (b, d) {
                return new w.HMAC.init(a, d).finalize(b);
              };
            }
          });
          var w = e.algo = {};
          return e;
        }(Math);

        (function () {
          var g = CryptoJS,
              j = g.lib,
              e = j.WordArray,
              d = j.Hasher,
              m = [],
              j = g.algo.SHA1 = d.extend({
            _doReset: function () {
              this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (d, e) {
              for (var b = this._hash.words, l = b[0], k = b[1], h = b[2], g = b[3], j = b[4], a = 0; 80 > a; a++) {
                if (16 > a) m[a] = d[e + a] | 0;else {
                  var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
                  m[a] = c << 1 | c >>> 31;
                }
                c = (l << 5 | l >>> 27) + j + m[a];
                c = 20 > a ? c + ((k & h | ~k & g) + 1518500249) : 40 > a ? c + ((k ^ h ^ g) + 1859775393) : 60 > a ? c + ((k & h | k & g | h & g) - 1894007588) : c + ((k ^ h ^ g) - 899497514);
                j = g;
                g = h;
                h = k << 30 | k >>> 2;
                k = l;
                l = c;
              }

              b[0] = b[0] + l | 0;
              b[1] = b[1] + k | 0;
              b[2] = b[2] + h | 0;
              b[3] = b[3] + g | 0;
              b[4] = b[4] + j | 0;
            },
            _doFinalize: function () {
              var d = this._data,
                  e = d.words,
                  b = 8 * this._nDataBytes,
                  l = 8 * d.sigBytes;
              e[l >>> 5] |= 128 << 24 - l % 32;
              e[(l + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
              e[(l + 64 >>> 9 << 4) + 15] = b;
              d.sigBytes = 4 * e.length;

              this._process();

              return this._hash;
            },
            clone: function () {
              var e = d.clone.call(this);
              e._hash = this._hash.clone();
              return e;
            }
          });
          g.SHA1 = d._createHelper(j);
          g.HmacSHA1 = d._createHmacHelper(j);
        })();

        (function () {
          var g = CryptoJS,
              j = g.enc.Utf8;
          g.algo.HMAC = g.lib.Base.extend({
            init: function (e, d) {
              e = this._hasher = new e.init();
              "string" == typeof d && (d = j.parse(d));
              var g = e.blockSize,
                  n = 4 * g;
              d.sigBytes > n && (d = e.finalize(d));
              d.clamp();

              for (var q = this._oKey = d.clone(), b = this._iKey = d.clone(), l = q.words, k = b.words, h = 0; h < g; h++) l[h] ^= 1549556828, k[h] ^= 909522486;

              q.sigBytes = b.sigBytes = n;
              this.reset();
            },
            reset: function () {
              var e = this._hasher;
              e.reset();
              e.update(this._iKey);
            },
            update: function (e) {
              this._hasher.update(e);

              return this;
            },
            finalize: function (e) {
              var d = this._hasher;
              e = d.finalize(e);
              d.reset();
              return d.finalize(this._oKey.clone().concat(e));
            }
          });
        })();

        (function () {
          var g = CryptoJS,
              j = g.lib,
              e = j.Base,
              d = j.WordArray,
              j = g.algo,
              m = j.HMAC,
              n = j.PBKDF2 = e.extend({
            cfg: e.extend({
              keySize: 4,
              hasher: j.SHA1,
              iterations: 1
            }),
            init: function (d) {
              this.cfg = this.cfg.extend(d);
            },
            compute: function (e, b) {
              for (var g = this.cfg, k = m.create(g.hasher, e), h = d.create(), j = d.create([1]), n = h.words, a = j.words, c = g.keySize, g = g.iterations; n.length < c;) {
                var p = k.update(b).finalize(j);
                k.reset();

                for (var f = p.words, v = f.length, s = p, t = 1; t < g; t++) {
                  s = k.finalize(s);
                  k.reset();

                  for (var x = s.words, r = 0; r < v; r++) f[r] ^= x[r];
                }

                h.concat(p);
                a[0]++;
              }

              h.sigBytes = 4 * c;
              return h;
            }
          });

          g.PBKDF2 = function (d, b, e) {
            return n.create(e).compute(d, b);
          };
        })();

        ;
        /*
        CryptoJS v3.1.2
        code.google.com/p/crypto-js
        (c) 2009-2013 by Jeff Mott. All rights reserved.
        code.google.com/p/crypto-js/wiki/License
        */

        var CryptoJS = CryptoJS || function (e, m) {
          var p = {},
              j = p.lib = {},
              l = function () {},
              f = j.Base = {
            extend: function (a) {
              l.prototype = this;
              var c = new l();
              a && c.mixIn(a);
              c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments);
              });
              c.init.prototype = c;
              c.$super = this;
              return c;
            },
            create: function () {
              var a = this.extend();
              a.init.apply(a, arguments);
              return a;
            },
            init: function () {},
            mixIn: function (a) {
              for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);

              a.hasOwnProperty("toString") && (this.toString = a.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          },
              n = j.WordArray = f.extend({
            init: function (a, c) {
              a = this.words = a || [];
              this.sigBytes = c != m ? c : 4 * a.length;
            },
            toString: function (a) {
              return (a || h).stringify(this);
            },
            concat: function (a) {
              var c = this.words,
                  q = a.words,
                  d = this.sigBytes;
              a = a.sigBytes;
              this.clamp();
              if (d % 4) for (var b = 0; b < a; b++) c[d + b >>> 2] |= (q[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((d + b) % 4);else if (65535 < q.length) for (b = 0; b < a; b += 4) c[d + b >>> 2] = q[b >>> 2];else c.push.apply(c, q);
              this.sigBytes += a;
              return this;
            },
            clamp: function () {
              var a = this.words,
                  c = this.sigBytes;
              a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
              a.length = e.ceil(c / 4);
            },
            clone: function () {
              var a = f.clone.call(this);
              a.words = this.words.slice(0);
              return a;
            },
            random: function (a) {
              for (var c = [], b = 0; b < a; b += 4) c.push(4294967296 * e.random() | 0);

              return new n.init(c, a);
            }
          }),
              b = p.enc = {},
              h = b.Hex = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var b = [], d = 0; d < a; d++) {
                var f = c[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                b.push((f >>> 4).toString(16));
                b.push((f & 15).toString(16));
              }

              return b.join("");
            },
            parse: function (a) {
              for (var c = a.length, b = [], d = 0; d < c; d += 2) b[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);

              return new n.init(b, c / 2);
            }
          },
              g = b.Latin1 = {
            stringify: function (a) {
              var c = a.words;
              a = a.sigBytes;

              for (var b = [], d = 0; d < a; d++) b.push(String.fromCharCode(c[d >>> 2] >>> 24 - 8 * (d % 4) & 255));

              return b.join("");
            },
            parse: function (a) {
              for (var c = a.length, b = [], d = 0; d < c; d++) b[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);

              return new n.init(b, c);
            }
          },
              r = b.Utf8 = {
            stringify: function (a) {
              try {
                return decodeURIComponent(escape(g.stringify(a)));
              } catch (c) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (a) {
              return g.parse(unescape(encodeURIComponent(a)));
            }
          },
              k = j.BufferedBlockAlgorithm = f.extend({
            reset: function () {
              this._data = new n.init();
              this._nDataBytes = 0;
            },
            _append: function (a) {
              "string" == typeof a && (a = r.parse(a));

              this._data.concat(a);

              this._nDataBytes += a.sigBytes;
            },
            _process: function (a) {
              var c = this._data,
                  b = c.words,
                  d = c.sigBytes,
                  f = this.blockSize,
                  h = d / (4 * f),
                  h = a ? e.ceil(h) : e.max((h | 0) - this._minBufferSize, 0);
              a = h * f;
              d = e.min(4 * a, d);

              if (a) {
                for (var g = 0; g < a; g += f) this._doProcessBlock(b, g);

                g = b.splice(0, a);
                c.sigBytes -= d;
              }

              return new n.init(g, d);
            },
            clone: function () {
              var a = f.clone.call(this);
              a._data = this._data.clone();
              return a;
            },
            _minBufferSize: 0
          });

          j.Hasher = k.extend({
            cfg: f.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              k.reset.call(this);

              this._doReset();
            },
            update: function (a) {
              this._append(a);

              this._process();

              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (c, b) {
                return new a.init(b).finalize(c);
              };
            },
            _createHmacHelper: function (a) {
              return function (b, f) {
                return new s.HMAC.init(a, f).finalize(b);
              };
            }
          });
          var s = p.algo = {};
          return p;
        }(Math);

        (function () {
          var e = CryptoJS,
              m = e.lib,
              p = m.WordArray,
              j = m.Hasher,
              l = [],
              m = e.algo.SHA1 = j.extend({
            _doReset: function () {
              this._hash = new p.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (f, n) {
              for (var b = this._hash.words, h = b[0], g = b[1], e = b[2], k = b[3], j = b[4], a = 0; 80 > a; a++) {
                if (16 > a) l[a] = f[n + a] | 0;else {
                  var c = l[a - 3] ^ l[a - 8] ^ l[a - 14] ^ l[a - 16];
                  l[a] = c << 1 | c >>> 31;
                }
                c = (h << 5 | h >>> 27) + j + l[a];
                c = 20 > a ? c + ((g & e | ~g & k) + 1518500249) : 40 > a ? c + ((g ^ e ^ k) + 1859775393) : 60 > a ? c + ((g & e | g & k | e & k) - 1894007588) : c + ((g ^ e ^ k) - 899497514);
                j = k;
                k = e;
                e = g << 30 | g >>> 2;
                g = h;
                h = c;
              }

              b[0] = b[0] + h | 0;
              b[1] = b[1] + g | 0;
              b[2] = b[2] + e | 0;
              b[3] = b[3] + k | 0;
              b[4] = b[4] + j | 0;
            },
            _doFinalize: function () {
              var f = this._data,
                  e = f.words,
                  b = 8 * this._nDataBytes,
                  h = 8 * f.sigBytes;
              e[h >>> 5] |= 128 << 24 - h % 32;
              e[(h + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
              e[(h + 64 >>> 9 << 4) + 15] = b;
              f.sigBytes = 4 * e.length;

              this._process();

              return this._hash;
            },
            clone: function () {
              var e = j.clone.call(this);
              e._hash = this._hash.clone();
              return e;
            }
          });
          e.SHA1 = j._createHelper(m);
          e.HmacSHA1 = j._createHmacHelper(m);
        })();

        ;
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _slicedToArray = function () {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"]) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
          }

          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        function _asyncToGenerator(fn) {
          return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }

                if (info.done) {
                  resolve(value);
                } else {
                  return Promise.resolve(value).then(function (value) {
                    step("next", value);
                  }, function (err) {
                    step("throw", err);
                  });
                }
              }

              return step("next");
            });
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var SFAlertManager = exports.SFAlertManager = function () {
          function SFAlertManager() {
            _classCallCheck(this, SFAlertManager);
          }

          _createClass(SFAlertManager, [{
            key: "alert",
            value: function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(params) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                          window.alert(params.text);
                          resolve();
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function alert(_x) {
                return _ref.apply(this, arguments);
              }

              return alert;
            }()
          }, {
            key: "confirm",
            value: function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(params) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", new Promise(function (resolve, reject) {
                          if (window.confirm(params.text)) {
                            resolve();
                          } else {
                            reject();
                          }
                        }));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              function confirm(_x2) {
                return _ref2.apply(this, arguments);
              }

              return confirm;
            }()
          }]);

          return SFAlertManager;
        }();

        ;

        var SFAuthManager = exports.SFAuthManager = function () {
          function SFAuthManager(storageManager, httpManager, alertManager, timeout) {
            _classCallCheck(this, SFAuthManager);

            SFAuthManager.DidSignOutEvent = "DidSignOutEvent";
            SFAuthManager.WillSignInEvent = "WillSignInEvent";
            SFAuthManager.DidSignInEvent = "DidSignInEvent";
            this.httpManager = httpManager;
            this.storageManager = storageManager;
            this.alertManager = alertManager || new SFAlertManager();
            this.$timeout = timeout || setTimeout.bind(window);
            this.eventHandlers = [];
          }

          _createClass(SFAuthManager, [{
            key: "addEventHandler",
            value: function addEventHandler(handler) {
              this.eventHandlers.push(handler);
              return handler;
            }
          }, {
            key: "removeEventHandler",
            value: function removeEventHandler(handler) {
              _.pull(this.eventHandlers, handler);
            }
          }, {
            key: "notifyEvent",
            value: function notifyEvent(event, data) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.eventHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var handler = _step.value;
                  handler(event, data || {});
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          }, {
            key: "saveKeys",
            value: function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(keys) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this._keys = keys;
                        _context3.next = 3;
                        return this.storageManager.setItem("mk", keys.mk);

                      case 3:
                        _context3.next = 5;
                        return this.storageManager.setItem("ak", keys.ak);

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              function saveKeys(_x3) {
                return _ref3.apply(this, arguments);
              }

              return saveKeys;
            }()
          }, {
            key: "signout",
            value: function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(clearAllData) {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this._keys = null;
                        this._authParams = null;

                        if (!clearAllData) {
                          _context4.next = 6;
                          break;
                        }

                        return _context4.abrupt("return", this.storageManager.clearAllData().then(function () {
                          _this.notifyEvent(SFAuthManager.DidSignOutEvent);
                        }));

                      case 6:
                        this.notifyEvent(SFAuthManager.DidSignOutEvent);

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));

              function signout(_x4) {
                return _ref4.apply(this, arguments);
              }

              return signout;
            }()
          }, {
            key: "keys",
            value: function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5() {
                var mk;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (this._keys) {
                          _context5.next = 11;
                          break;
                        }

                        _context5.next = 3;
                        return this.storageManager.getItem("mk");

                      case 3:
                        mk = _context5.sent;

                        if (mk) {
                          _context5.next = 6;
                          break;
                        }

                        return _context5.abrupt("return", null);

                      case 6:
                        _context5.t0 = mk;
                        _context5.next = 9;
                        return this.storageManager.getItem("ak");

                      case 9:
                        _context5.t1 = _context5.sent;
                        this._keys = {
                          mk: _context5.t0,
                          ak: _context5.t1
                        };

                      case 11:
                        return _context5.abrupt("return", this._keys);

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function keys() {
                return _ref5.apply(this, arguments);
              }

              return keys;
            }()
          }, {
            key: "getAuthParams",
            value: function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6() {
                var data;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (this._authParams) {
                          _context6.next = 5;
                          break;
                        }

                        _context6.next = 3;
                        return this.storageManager.getItem("auth_params");

                      case 3:
                        data = _context6.sent;
                        this._authParams = JSON.parse(data);

                      case 5:
                        if (!(this._authParams && !this._authParams.version)) {
                          _context6.next = 9;
                          break;
                        }

                        _context6.next = 8;
                        return this.defaultProtocolVersion();

                      case 8:
                        this._authParams.version = _context6.sent;

                      case 9:
                        return _context6.abrupt("return", this._authParams);

                      case 10:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              function getAuthParams() {
                return _ref6.apply(this, arguments);
              }

              return getAuthParams;
            }()
          }, {
            key: "defaultProtocolVersion",
            value: function () {
              var _ref7 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee7() {
                var keys;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.keys();

                      case 2:
                        keys = _context7.sent;

                        if (!(keys && keys.ak)) {
                          _context7.next = 7;
                          break;
                        }

                        return _context7.abrupt("return", "002");

                      case 7:
                        return _context7.abrupt("return", "001");

                      case 8:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));

              function defaultProtocolVersion() {
                return _ref7.apply(this, arguments);
              }

              return defaultProtocolVersion;
            }()
          }, {
            key: "protocolVersion",
            value: function () {
              var _ref8 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee8() {
                var authParams;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.getAuthParams();

                      case 2:
                        authParams = _context8.sent;

                        if (!(authParams && authParams.version)) {
                          _context8.next = 5;
                          break;
                        }

                        return _context8.abrupt("return", authParams.version);

                      case 5:
                        return _context8.abrupt("return", this.defaultProtocolVersion());

                      case 6:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));

              function protocolVersion() {
                return _ref8.apply(this, arguments);
              }

              return protocolVersion;
            }()
          }, {
            key: "getAuthParamsForEmail",
            value: function () {
              var _ref9 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee9(url, email, extraParams) {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        return _context9.abrupt("return", new Promise(function (resolve, reject) {
                          var requestUrl = url + "/auth/params";

                          _this2.httpManager.getAbsolute(requestUrl, _.merge({
                            email: email
                          }, extraParams), function (response) {
                            resolve(response);
                          }, function (response) {
                            console.error("Error getting auth params", response);

                            if ((typeof response === "undefined" ? "undefined" : _typeof(response)) !== 'object') {
                              response = {
                                error: {
                                  message: "A server error occurred while trying to sign in. Please try again."
                                }
                              };
                            }

                            resolve(response);
                          });
                        }));

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));

              function getAuthParamsForEmail(_x5, _x6, _x7) {
                return _ref9.apply(this, arguments);
              }

              return getAuthParamsForEmail;
            }()
          }, {
            key: "lock",
            value: function lock() {
              this.locked = true;
            }
          }, {
            key: "unlock",
            value: function unlock() {
              this.locked = false;
            }
          }, {
            key: "isLocked",
            value: function isLocked() {
              return this.locked == true;
            }
          }, {
            key: "unlockAndResolve",
            value: function unlockAndResolve(resolve, param) {
              this.unlock();
              resolve(param);
            }
          }, {
            key: "login",
            value: function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee12(url, email, password, strictSignin, extraParams) {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        return _context12.abrupt("return", new Promise(function () {
                          var _ref11 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee11(resolve, reject) {
                            var existingKeys, authParams, message, _message, abort, _message2, minimum, _message3, latestVersion, _message4, keys, requestUrl, params;

                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    _context11.next = 2;
                                    return _this3.keys();

                                  case 2:
                                    existingKeys = _context11.sent;

                                    if (!(existingKeys != null)) {
                                      _context11.next = 6;
                                      break;
                                    }

                                    resolve({
                                      error: {
                                        message: "Cannot log in because already signed in."
                                      }
                                    });
                                    return _context11.abrupt("return");

                                  case 6:
                                    if (!_this3.isLocked()) {
                                      _context11.next = 9;
                                      break;
                                    }

                                    resolve({
                                      error: {
                                        message: "Login already in progress."
                                      }
                                    });
                                    return _context11.abrupt("return");

                                  case 9:
                                    _this3.lock();

                                    _this3.notifyEvent(SFAuthManager.WillSignInEvent);

                                    _context11.next = 13;
                                    return _this3.getAuthParamsForEmail(url, email, extraParams);

                                  case 13:
                                    authParams = _context11.sent; // SF3 requires a unique identifier in the auth params

                                    authParams.identifier = email;

                                    if (!authParams.error) {
                                      _context11.next = 18;
                                      break;
                                    }

                                    _this3.unlockAndResolve(resolve, authParams);

                                    return _context11.abrupt("return");

                                  case 18:
                                    if (!(!authParams || !authParams.pw_cost)) {
                                      _context11.next = 21;
                                      break;
                                    }

                                    _this3.unlockAndResolve(resolve, {
                                      error: {
                                        message: "Invalid email or password."
                                      }
                                    });

                                    return _context11.abrupt("return");

                                  case 21:
                                    if (SFJS.supportedVersions().includes(authParams.version)) {
                                      _context11.next = 25;
                                      break;
                                    }

                                    if (SFJS.isVersionNewerThanLibraryVersion(authParams.version)) {
                                      // The user has a new account type, but is signing in to an older client.
                                      message = "This version of the application does not support your newer account type. Please upgrade to the latest version of Standard Notes to sign in.";
                                    } else {
                                      // The user has a very old account type, which is no longer supported by this client
                                      message = "The protocol version associated with your account is outdated and no longer supported by this application. Please visit standardnotes.org/help/security for more information.";
                                    }

                                    _this3.unlockAndResolve(resolve, {
                                      error: {
                                        message: message
                                      }
                                    });

                                    return _context11.abrupt("return");

                                  case 25:
                                    if (!SFJS.isProtocolVersionOutdated(authParams.version)) {
                                      _context11.next = 32;
                                      break;
                                    }

                                    _message = "The encryption version for your account, " + authParams.version + ", is outdated and requires upgrade. You may proceed with login, but are advised to perform a security update using the web or desktop application. Please visit standardnotes.org/help/security for more information.";
                                    abort = false;
                                    _context11.next = 30;
                                    return _this3.alertManager.confirm({
                                      title: "Update Needed",
                                      text: _message,
                                      confirmButtonText: "Sign In"
                                    }).catch(function () {
                                      _this3.unlockAndResolve(resolve, {
                                        error: {}
                                      });

                                      abort = true;
                                    });

                                  case 30:
                                    if (!abort) {
                                      _context11.next = 32;
                                      break;
                                    }

                                    return _context11.abrupt("return");

                                  case 32:
                                    if (SFJS.supportsPasswordDerivationCost(authParams.pw_cost)) {
                                      _context11.next = 36;
                                      break;
                                    }

                                    _message2 = "Your account was created on a platform with higher security capabilities than this browser supports. " + "If we attempted to generate your login keys here, it would take hours. " + "Please use a browser with more up to date security capabilities, like Google Chrome or Firefox, to log in.";

                                    _this3.unlockAndResolve(resolve, {
                                      error: {
                                        message: _message2
                                      }
                                    });

                                    return _context11.abrupt("return");

                                  case 36:
                                    minimum = SFJS.costMinimumForVersion(authParams.version);

                                    if (!(authParams.pw_cost < minimum)) {
                                      _context11.next = 41;
                                      break;
                                    }

                                    _message3 = "Unable to login due to insecure password parameters. Please visit standardnotes.org/help/security for more information.";

                                    _this3.unlockAndResolve(resolve, {
                                      error: {
                                        message: _message3
                                      }
                                    });

                                    return _context11.abrupt("return");

                                  case 41:
                                    if (!strictSignin) {
                                      _context11.next = 47;
                                      break;
                                    } // Refuse sign in if authParams.version is anything but the latest version


                                    latestVersion = SFJS.version();

                                    if (!(authParams.version !== latestVersion)) {
                                      _context11.next = 47;
                                      break;
                                    }

                                    _message4 = "Strict sign in refused server sign in parameters. The latest security version is " + latestVersion + ", but your account is reported to have version " + authParams.version + ". If you'd like to proceed with sign in anyway, please disable strict sign in and try again.";

                                    _this3.unlockAndResolve(resolve, {
                                      error: {
                                        message: _message4
                                      }
                                    });

                                    return _context11.abrupt("return");

                                  case 47:
                                    _context11.next = 49;
                                    return SFJS.crypto.computeEncryptionKeysForUser(password, authParams);

                                  case 49:
                                    keys = _context11.sent;
                                    requestUrl = url + "/auth/sign_in";
                                    params = _.merge({
                                      password: keys.pw,
                                      email: email
                                    }, extraParams);

                                    _this3.httpManager.postAbsolute(requestUrl, params, function () {
                                      var _ref12 = _asyncToGenerator(
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(function _callee10(response) {
                                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                          while (1) {
                                            switch (_context10.prev = _context10.next) {
                                              case 0:
                                                _context10.next = 2;
                                                return _this3.handleAuthResponse(response, email, url, authParams, keys);

                                              case 2:
                                                _this3.notifyEvent(SFAuthManager.DidSignInEvent);

                                                _this3.$timeout(function () {
                                                  return _this3.unlockAndResolve(resolve, response);
                                                });

                                              case 4:
                                              case "end":
                                                return _context10.stop();
                                            }
                                          }
                                        }, _callee10, _this3);
                                      }));

                                      return function (_x15) {
                                        return _ref12.apply(this, arguments);
                                      };
                                    }(), function (response) {
                                      console.error("Error logging in", response);

                                      if ((typeof response === "undefined" ? "undefined" : _typeof(response)) !== 'object') {
                                        response = {
                                          error: {
                                            message: "A server error occurred while trying to sign in. Please try again."
                                          }
                                        };
                                      }

                                      _this3.$timeout(function () {
                                        return _this3.unlockAndResolve(resolve, response);
                                      });
                                    });

                                  case 53:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee11, _this3);
                          }));

                          return function (_x13, _x14) {
                            return _ref11.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));

              function login(_x8, _x9, _x10, _x11, _x12) {
                return _ref10.apply(this, arguments);
              }

              return login;
            }()
          }, {
            key: "register",
            value: function register(url, email, password) {
              var _this4 = this;

              return new Promise(function () {
                var _ref13 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee14(resolve, reject) {
                  var results, keys, authParams, requestUrl, params;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          if (!_this4.isLocked()) {
                            _context14.next = 3;
                            break;
                          }

                          resolve({
                            error: {
                              message: "Register already in progress."
                            }
                          });
                          return _context14.abrupt("return");

                        case 3:
                          _this4.lock();

                          _context14.next = 6;
                          return SFJS.crypto.generateInitialKeysAndAuthParamsForUser(email, password);

                        case 6:
                          results = _context14.sent;
                          keys = results.keys;
                          authParams = results.authParams;
                          requestUrl = url + "/auth";
                          params = _.merge({
                            password: keys.pw,
                            email: email
                          }, authParams);

                          _this4.httpManager.postAbsolute(requestUrl, params, function () {
                            var _ref14 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee13(response) {
                              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                while (1) {
                                  switch (_context13.prev = _context13.next) {
                                    case 0:
                                      _context13.next = 2;
                                      return _this4.handleAuthResponse(response, email, url, authParams, keys);

                                    case 2:
                                      _this4.unlockAndResolve(resolve, response);

                                    case 3:
                                    case "end":
                                      return _context13.stop();
                                  }
                                }
                              }, _callee13, _this4);
                            }));

                            return function (_x18) {
                              return _ref14.apply(this, arguments);
                            };
                          }(), function (response) {
                            console.error("Registration error", response);

                            if ((typeof response === "undefined" ? "undefined" : _typeof(response)) !== 'object') {
                              response = {
                                error: {
                                  message: "A server error occurred while trying to register. Please try again."
                                }
                              };
                            }

                            _this4.unlockAndResolve(resolve, response);
                          });

                        case 12:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14, _this4);
                }));

                return function (_x16, _x17) {
                  return _ref13.apply(this, arguments);
                };
              }());
            }
          }, {
            key: "changePassword",
            value: function () {
              var _ref15 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee17(url, email, current_server_pw, newKeys, newAuthParams) {
                var _this5 = this;

                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        return _context17.abrupt("return", new Promise(function () {
                          var _ref16 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee16(resolve, reject) {
                            var newServerPw, requestUrl, params;
                            return regeneratorRuntime.wrap(function _callee16$(_context16) {
                              while (1) {
                                switch (_context16.prev = _context16.next) {
                                  case 0:
                                    if (!_this5.isLocked()) {
                                      _context16.next = 3;
                                      break;
                                    }

                                    resolve({
                                      error: {
                                        message: "Change password already in progress."
                                      }
                                    });
                                    return _context16.abrupt("return");

                                  case 3:
                                    _this5.lock();

                                    newServerPw = newKeys.pw;
                                    requestUrl = url + "/auth/change_pw";
                                    params = _.merge({
                                      new_password: newServerPw,
                                      current_password: current_server_pw
                                    }, newAuthParams);

                                    _this5.httpManager.postAbsolute(requestUrl, params, function () {
                                      var _ref17 = _asyncToGenerator(
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(function _callee15(response) {
                                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                                          while (1) {
                                            switch (_context15.prev = _context15.next) {
                                              case 0:
                                                _context15.next = 2;
                                                return _this5.handleAuthResponse(response, email, null, newAuthParams, newKeys);

                                              case 2:
                                                _this5.unlockAndResolve(resolve, response);

                                              case 3:
                                              case "end":
                                                return _context15.stop();
                                            }
                                          }
                                        }, _callee15, _this5);
                                      }));

                                      return function (_x26) {
                                        return _ref17.apply(this, arguments);
                                      };
                                    }(), function (response) {
                                      if ((typeof response === "undefined" ? "undefined" : _typeof(response)) !== 'object') {
                                        response = {
                                          error: {
                                            message: "Something went wrong while changing your password. Your password was not changed. Please try again."
                                          }
                                        };
                                      }

                                      _this5.unlockAndResolve(resolve, response);
                                    });

                                  case 8:
                                  case "end":
                                    return _context16.stop();
                                }
                              }
                            }, _callee16, _this5);
                          }));

                          return function (_x24, _x25) {
                            return _ref16.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));

              function changePassword(_x19, _x20, _x21, _x22, _x23) {
                return _ref15.apply(this, arguments);
              }

              return changePassword;
            }()
          }, {
            key: "handleAuthResponse",
            value: function () {
              var _ref18 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee18(response, email, url, authParams, keys) {
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        if (!url) {
                          _context18.next = 3;
                          break;
                        }

                        _context18.next = 3;
                        return this.storageManager.setItem("server", url);

                      case 3:
                        this._authParams = authParams;
                        _context18.next = 6;
                        return this.storageManager.setItem("auth_params", JSON.stringify(authParams));

                      case 6:
                        _context18.next = 8;
                        return this.storageManager.setItem("jwt", response.token);

                      case 8:
                        return _context18.abrupt("return", this.saveKeys(keys));

                      case 9:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));

              function handleAuthResponse(_x27, _x28, _x29, _x30, _x31) {
                return _ref18.apply(this, arguments);
              }

              return handleAuthResponse;
            }()
          }]);

          return SFAuthManager;
        }();

        ;
        var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

        var SFHttpManager = exports.SFHttpManager = function () {
          function SFHttpManager(timeout) {
            _classCallCheck(this, SFHttpManager); // calling callbacks in a $timeout allows UI to update


            this.$timeout = timeout || setTimeout.bind(globalScope);
          }

          _createClass(SFHttpManager, [{
            key: "setJWTRequestHandler",
            value: function setJWTRequestHandler(handler) {
              this.jwtRequestHandler = handler;
            }
          }, {
            key: "setAuthHeadersForRequest",
            value: function () {
              var _ref19 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee19(request) {
                var token;
                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return this.jwtRequestHandler();

                      case 2:
                        token = _context19.sent;

                        if (token) {
                          request.setRequestHeader('Authorization', 'Bearer ' + token);
                        }

                      case 4:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, this);
              }));

              function setAuthHeadersForRequest(_x32) {
                return _ref19.apply(this, arguments);
              }

              return setAuthHeadersForRequest;
            }()
          }, {
            key: "postAbsolute",
            value: function () {
              var _ref20 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee20(url, params, onsuccess, onerror) {
                return regeneratorRuntime.wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        return _context20.abrupt("return", this.httpRequest("post", url, params, onsuccess, onerror));

                      case 1:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20, this);
              }));

              function postAbsolute(_x33, _x34, _x35, _x36) {
                return _ref20.apply(this, arguments);
              }

              return postAbsolute;
            }()
          }, {
            key: "patchAbsolute",
            value: function () {
              var _ref21 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee21(url, params, onsuccess, onerror) {
                return regeneratorRuntime.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        return _context21.abrupt("return", this.httpRequest("patch", url, params, onsuccess, onerror));

                      case 1:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21, this);
              }));

              function patchAbsolute(_x37, _x38, _x39, _x40) {
                return _ref21.apply(this, arguments);
              }

              return patchAbsolute;
            }()
          }, {
            key: "getAbsolute",
            value: function () {
              var _ref22 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee22(url, params, onsuccess, onerror) {
                return regeneratorRuntime.wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        return _context22.abrupt("return", this.httpRequest("get", url, params, onsuccess, onerror));

                      case 1:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, this);
              }));

              function getAbsolute(_x41, _x42, _x43, _x44) {
                return _ref22.apply(this, arguments);
              }

              return getAbsolute;
            }()
          }, {
            key: "httpRequest",
            value: function () {
              var _ref23 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee24(verb, url, params, onsuccess, onerror) {
                var _this6 = this;

                return regeneratorRuntime.wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        return _context24.abrupt("return", new Promise(function () {
                          var _ref24 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee23(resolve, reject) {
                            var xmlhttp;
                            return regeneratorRuntime.wrap(function _callee23$(_context23) {
                              while (1) {
                                switch (_context23.prev = _context23.next) {
                                  case 0:
                                    xmlhttp = new XMLHttpRequest();

                                    xmlhttp.onreadystatechange = function () {
                                      if (xmlhttp.readyState == 4) {
                                        var response = xmlhttp.responseText;

                                        if (response) {
                                          try {
                                            response = JSON.parse(response);
                                          } catch (e) {}
                                        }

                                        if (xmlhttp.status >= 200 && xmlhttp.status <= 299) {
                                          _this6.$timeout(function () {
                                            onsuccess(response);
                                            resolve(response);
                                          });
                                        } else {
                                          console.error("Request error:", response);

                                          _this6.$timeout(function () {
                                            onerror(response, xmlhttp.status);
                                            reject(response);
                                          });
                                        }
                                      }
                                    };

                                    if (verb == "get" && Object.keys(params).length > 0) {
                                      url = url + _this6.formatParams(params);
                                    }

                                    xmlhttp.open(verb, url, true);
                                    _context23.next = 6;
                                    return _this6.setAuthHeadersForRequest(xmlhttp);

                                  case 6:
                                    xmlhttp.setRequestHeader('Content-type', 'application/json');

                                    if (verb == "post" || verb == "patch") {
                                      xmlhttp.send(JSON.stringify(params));
                                    } else {
                                      xmlhttp.send();
                                    }

                                  case 8:
                                  case "end":
                                    return _context23.stop();
                                }
                              }
                            }, _callee23, _this6);
                          }));

                          return function (_x50, _x51) {
                            return _ref24.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24, this);
              }));

              function httpRequest(_x45, _x46, _x47, _x48, _x49) {
                return _ref23.apply(this, arguments);
              }

              return httpRequest;
            }()
          }, {
            key: "formatParams",
            value: function formatParams(params) {
              return "?" + Object.keys(params).map(function (key) {
                return key + "=" + encodeURIComponent(params[key]);
              }).join("&");
            }
          }]);

          return SFHttpManager;
        }();

        ;

        var SFMigrationManager = exports.SFMigrationManager = function () {
          function SFMigrationManager(modelManager, syncManager, storageManager, authManager) {
            var _this7 = this;

            _classCallCheck(this, SFMigrationManager);

            this.modelManager = modelManager;
            this.syncManager = syncManager;
            this.storageManager = storageManager;
            this.completionHandlers = [];
            this.loadMigrations(); // The syncManager used to dispatch a param called 'initialSync' in the 'sync:completed' event
            // to let us know of the first sync completion after login.
            // however it was removed as it was deemed to be unreliable (returned wrong value when a single sync request repeats on completion for pagination)
            // We'll now use authManager's events instead

            var didReceiveSignInEvent = false;
            var signInHandler = authManager.addEventHandler(function (event) {
              if (event == SFAuthManager.DidSignInEvent) {
                didReceiveSignInEvent = true;
              }
            });
            this.syncManager.addEventHandler(function () {
              var _ref25 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee25(event, data) {
                var dataLoadedEvent, syncCompleteEvent, completedList, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, migrationName, migration;

                return regeneratorRuntime.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        dataLoadedEvent = event == "local-data-loaded";
                        syncCompleteEvent = event == "sync:completed";

                        if (!(dataLoadedEvent || syncCompleteEvent)) {
                          _context25.next = 40;
                          break;
                        }

                        if (dataLoadedEvent) {
                          _this7.receivedLocalDataEvent = true;
                        } else if (syncCompleteEvent) {
                          _this7.receivedSyncCompletedEvent = true;
                        } // We want to run pending migrations only after local data has been loaded, and a sync has been completed.


                        if (!(_this7.receivedLocalDataEvent && _this7.receivedSyncCompletedEvent)) {
                          _context25.next = 40;
                          break;
                        }

                        if (!didReceiveSignInEvent) {
                          _context25.next = 39;
                          break;
                        } // Reset our collected state about sign in


                        didReceiveSignInEvent = false;
                        authManager.removeEventHandler(signInHandler); // If initial online sync, clear any completed migrations that occurred while offline,
                        // so they can run again now that we have updated user items. Only clear migrations that
                        // don't have `runOnlyOnce` set

                        _context25.next = 10;
                        return _this7.getCompletedMigrations();

                      case 10:
                        completedList = _context25.sent.slice();
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context25.prev = 14;
                        _iterator2 = completedList[Symbol.iterator]();

                      case 16:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                          _context25.next = 25;
                          break;
                        }

                        migrationName = _step2.value;
                        _context25.next = 20;
                        return _this7.migrationForEncodedName(migrationName);

                      case 20:
                        migration = _context25.sent;

                        if (!migration.runOnlyOnce) {
                          _.pull(_this7._completed, migrationName);
                        }

                      case 22:
                        _iteratorNormalCompletion2 = true;
                        _context25.next = 16;
                        break;

                      case 25:
                        _context25.next = 31;
                        break;

                      case 27:
                        _context25.prev = 27;
                        _context25.t0 = _context25["catch"](14);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context25.t0;

                      case 31:
                        _context25.prev = 31;
                        _context25.prev = 32;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }

                      case 34:
                        _context25.prev = 34;

                        if (!_didIteratorError2) {
                          _context25.next = 37;
                          break;
                        }

                        throw _iteratorError2;

                      case 37:
                        return _context25.finish(34);

                      case 38:
                        return _context25.finish(31);

                      case 39:
                        _this7.runPendingMigrations();

                      case 40:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25, _this7, [[14, 27, 31, 39], [32,, 34, 38]]);
              }));

              return function (_x52, _x53) {
                return _ref25.apply(this, arguments);
              };
            }());
          }

          _createClass(SFMigrationManager, [{
            key: "addCompletionHandler",
            value: function addCompletionHandler(handler) {
              this.completionHandlers.push(handler);
            }
          }, {
            key: "removeCompletionHandler",
            value: function removeCompletionHandler(handler) {
              _.pull(this.completionHandlers, handler);
            }
          }, {
            key: "migrationForEncodedName",
            value: function () {
              var _ref26 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee26(name) {
                var decoded;
                return regeneratorRuntime.wrap(function _callee26$(_context26) {
                  while (1) {
                    switch (_context26.prev = _context26.next) {
                      case 0:
                        _context26.next = 2;
                        return this.decode(name);

                      case 2:
                        decoded = _context26.sent;
                        return _context26.abrupt("return", this.migrations.find(function (migration) {
                          return migration.name == decoded;
                        }));

                      case 4:
                      case "end":
                        return _context26.stop();
                    }
                  }
                }, _callee26, this);
              }));

              function migrationForEncodedName(_x54) {
                return _ref26.apply(this, arguments);
              }

              return migrationForEncodedName;
            }()
          }, {
            key: "loadMigrations",
            value: function loadMigrations() {
              this.migrations = this.registeredMigrations();
            }
          }, {
            key: "registeredMigrations",
            value: function registeredMigrations() {// Subclasses should return an array of migrations here.
              // Migrations should have a unique `name`, `content_type`,
              // and `handler`, which is a function that accepts an array of matching items to migration.
            }
          }, {
            key: "runPendingMigrations",
            value: function () {
              var _ref27 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee27() {
                var pending, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, migration, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, handler;

                return regeneratorRuntime.wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        _context27.next = 2;
                        return this.getPendingMigrations();

                      case 2:
                        pending = _context27.sent; // run in pre loop, keeping in mind that a migration may be run twice: when offline then again when signing in.
                        // we need to reset the items to a new array.

                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context27.prev = 6;

                        for (_iterator3 = pending[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                          migration = _step3.value;
                          migration.items = [];
                        }

                        _context27.next = 14;
                        break;

                      case 10:
                        _context27.prev = 10;
                        _context27.t0 = _context27["catch"](6);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context27.t0;

                      case 14:
                        _context27.prev = 14;
                        _context27.prev = 15;

                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                        }

                      case 17:
                        _context27.prev = 17;

                        if (!_didIteratorError3) {
                          _context27.next = 20;
                          break;
                        }

                        throw _iteratorError3;

                      case 20:
                        return _context27.finish(17);

                      case 21:
                        return _context27.finish(14);

                      case 22:
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        _context27.prev = 25;
                        _iterator4 = this.modelManager.allNondummyItems[Symbol.iterator]();

                      case 27:
                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                          _context27.next = 51;
                          break;
                        }

                        item = _step4.value;
                        _iteratorNormalCompletion7 = true;
                        _didIteratorError7 = false;
                        _iteratorError7 = undefined;
                        _context27.prev = 32;

                        for (_iterator7 = pending[Symbol.iterator](); !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                          migration = _step7.value;

                          if (item.content_type == migration.content_type) {
                            migration.items.push(item);
                          }
                        }

                        _context27.next = 40;
                        break;

                      case 36:
                        _context27.prev = 36;
                        _context27.t1 = _context27["catch"](32);
                        _didIteratorError7 = true;
                        _iteratorError7 = _context27.t1;

                      case 40:
                        _context27.prev = 40;
                        _context27.prev = 41;

                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                          _iterator7.return();
                        }

                      case 43:
                        _context27.prev = 43;

                        if (!_didIteratorError7) {
                          _context27.next = 46;
                          break;
                        }

                        throw _iteratorError7;

                      case 46:
                        return _context27.finish(43);

                      case 47:
                        return _context27.finish(40);

                      case 48:
                        _iteratorNormalCompletion4 = true;
                        _context27.next = 27;
                        break;

                      case 51:
                        _context27.next = 57;
                        break;

                      case 53:
                        _context27.prev = 53;
                        _context27.t2 = _context27["catch"](25);
                        _didIteratorError4 = true;
                        _iteratorError4 = _context27.t2;

                      case 57:
                        _context27.prev = 57;
                        _context27.prev = 58;

                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                        }

                      case 60:
                        _context27.prev = 60;

                        if (!_didIteratorError4) {
                          _context27.next = 63;
                          break;
                        }

                        throw _iteratorError4;

                      case 63:
                        return _context27.finish(60);

                      case 64:
                        return _context27.finish(57);

                      case 65:
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context27.prev = 68;
                        _iterator5 = pending[Symbol.iterator]();

                      case 70:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                          _context27.next = 81;
                          break;
                        }

                        migration = _step5.value;

                        if (!(migration.items && migration.items.length > 0 || migration.customHandler)) {
                          _context27.next = 77;
                          break;
                        }

                        _context27.next = 75;
                        return this.runMigration(migration, migration.items);

                      case 75:
                        _context27.next = 78;
                        break;

                      case 77:
                        this.markMigrationCompleted(migration);

                      case 78:
                        _iteratorNormalCompletion5 = true;
                        _context27.next = 70;
                        break;

                      case 81:
                        _context27.next = 87;
                        break;

                      case 83:
                        _context27.prev = 83;
                        _context27.t3 = _context27["catch"](68);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context27.t3;

                      case 87:
                        _context27.prev = 87;
                        _context27.prev = 88;

                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                        }

                      case 90:
                        _context27.prev = 90;

                        if (!_didIteratorError5) {
                          _context27.next = 93;
                          break;
                        }

                        throw _iteratorError5;

                      case 93:
                        return _context27.finish(90);

                      case 94:
                        return _context27.finish(87);

                      case 95:
                        _iteratorNormalCompletion6 = true;
                        _didIteratorError6 = false;
                        _iteratorError6 = undefined;
                        _context27.prev = 98;

                        for (_iterator6 = this.completionHandlers[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                          handler = _step6.value;
                          handler();
                        }

                        _context27.next = 106;
                        break;

                      case 102:
                        _context27.prev = 102;
                        _context27.t4 = _context27["catch"](98);
                        _didIteratorError6 = true;
                        _iteratorError6 = _context27.t4;

                      case 106:
                        _context27.prev = 106;
                        _context27.prev = 107;

                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                          _iterator6.return();
                        }

                      case 109:
                        _context27.prev = 109;

                        if (!_didIteratorError6) {
                          _context27.next = 112;
                          break;
                        }

                        throw _iteratorError6;

                      case 112:
                        return _context27.finish(109);

                      case 113:
                        return _context27.finish(106);

                      case 114:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27, this, [[6, 10, 14, 22], [15,, 17, 21], [25, 53, 57, 65], [32, 36, 40, 48], [41,, 43, 47], [58,, 60, 64], [68, 83, 87, 95], [88,, 90, 94], [98, 102, 106, 114], [107,, 109, 113]]);
              }));

              function runPendingMigrations() {
                return _ref27.apply(this, arguments);
              }

              return runPendingMigrations;
            }()
          }, {
            key: "encode",
            value: function () {
              var _ref28 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee28(text) {
                return regeneratorRuntime.wrap(function _callee28$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        return _context28.abrupt("return", window.btoa(text));

                      case 1:
                      case "end":
                        return _context28.stop();
                    }
                  }
                }, _callee28, this);
              }));

              function encode(_x55) {
                return _ref28.apply(this, arguments);
              }

              return encode;
            }()
          }, {
            key: "decode",
            value: function () {
              var _ref29 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee29(text) {
                return regeneratorRuntime.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        return _context29.abrupt("return", window.atob(text));

                      case 1:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29, this);
              }));

              function decode(_x56) {
                return _ref29.apply(this, arguments);
              }

              return decode;
            }()
          }, {
            key: "getCompletedMigrations",
            value: function () {
              var _ref30 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee30() {
                var rawCompleted;
                return regeneratorRuntime.wrap(function _callee30$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        if (this._completed) {
                          _context30.next = 5;
                          break;
                        }

                        _context30.next = 3;
                        return this.storageManager.getItem("migrations");

                      case 3:
                        rawCompleted = _context30.sent;

                        if (rawCompleted) {
                          this._completed = JSON.parse(rawCompleted);
                        } else {
                          this._completed = [];
                        }

                      case 5:
                        return _context30.abrupt("return", this._completed);

                      case 6:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee30, this);
              }));

              function getCompletedMigrations() {
                return _ref30.apply(this, arguments);
              }

              return getCompletedMigrations;
            }()
          }, {
            key: "getPendingMigrations",
            value: function () {
              var _ref31 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee31() {
                var completed, pending, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, migration;

                return regeneratorRuntime.wrap(function _callee31$(_context31) {
                  while (1) {
                    switch (_context31.prev = _context31.next) {
                      case 0:
                        _context31.next = 2;
                        return this.getCompletedMigrations();

                      case 2:
                        completed = _context31.sent;
                        pending = [];
                        _iteratorNormalCompletion8 = true;
                        _didIteratorError8 = false;
                        _iteratorError8 = undefined;
                        _context31.prev = 7;
                        _iterator8 = this.migrations[Symbol.iterator]();

                      case 9:
                        if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                          _context31.next = 22;
                          break;
                        }

                        migration = _step8.value;
                        _context31.t0 = completed;
                        _context31.next = 14;
                        return this.encode(migration.name);

                      case 14:
                        _context31.t1 = _context31.sent;
                        _context31.t2 = _context31.t0.indexOf.call(_context31.t0, _context31.t1);
                        _context31.t3 = -1;

                        if (!(_context31.t2 == _context31.t3)) {
                          _context31.next = 19;
                          break;
                        }

                        pending.push(migration);

                      case 19:
                        _iteratorNormalCompletion8 = true;
                        _context31.next = 9;
                        break;

                      case 22:
                        _context31.next = 28;
                        break;

                      case 24:
                        _context31.prev = 24;
                        _context31.t4 = _context31["catch"](7);
                        _didIteratorError8 = true;
                        _iteratorError8 = _context31.t4;

                      case 28:
                        _context31.prev = 28;
                        _context31.prev = 29;

                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                          _iterator8.return();
                        }

                      case 31:
                        _context31.prev = 31;

                        if (!_didIteratorError8) {
                          _context31.next = 34;
                          break;
                        }

                        throw _iteratorError8;

                      case 34:
                        return _context31.finish(31);

                      case 35:
                        return _context31.finish(28);

                      case 36:
                        return _context31.abrupt("return", pending);

                      case 37:
                      case "end":
                        return _context31.stop();
                    }
                  }
                }, _callee31, this, [[7, 24, 28, 36], [29,, 31, 35]]);
              }));

              function getPendingMigrations() {
                return _ref31.apply(this, arguments);
              }

              return getPendingMigrations;
            }()
          }, {
            key: "markMigrationCompleted",
            value: function () {
              var _ref32 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee32(migration) {
                var completed;
                return regeneratorRuntime.wrap(function _callee32$(_context32) {
                  while (1) {
                    switch (_context32.prev = _context32.next) {
                      case 0:
                        _context32.next = 2;
                        return this.getCompletedMigrations();

                      case 2:
                        completed = _context32.sent;
                        _context32.t0 = completed;
                        _context32.next = 6;
                        return this.encode(migration.name);

                      case 6:
                        _context32.t1 = _context32.sent;

                        _context32.t0.push.call(_context32.t0, _context32.t1);

                        this.storageManager.setItem("migrations", JSON.stringify(completed));
                        migration.running = false;

                      case 10:
                      case "end":
                        return _context32.stop();
                    }
                  }
                }, _callee32, this);
              }));

              function markMigrationCompleted(_x57) {
                return _ref32.apply(this, arguments);
              }

              return markMigrationCompleted;
            }()
          }, {
            key: "runMigration",
            value: function () {
              var _ref33 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee33(migration, items) {
                var _this8 = this;

                return regeneratorRuntime.wrap(function _callee33$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        if (!migration.running) {
                          _context33.next = 2;
                          break;
                        }

                        return _context33.abrupt("return");

                      case 2:
                        console.log("Running migration:", migration.name);
                        migration.running = true;

                        if (!migration.customHandler) {
                          _context33.next = 8;
                          break;
                        }

                        return _context33.abrupt("return", migration.customHandler().then(function () {
                          _this8.markMigrationCompleted(migration);
                        }));

                      case 8:
                        return _context33.abrupt("return", migration.handler(items).then(function () {
                          _this8.markMigrationCompleted(migration);
                        }));

                      case 9:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee33, this);
              }));

              function runMigration(_x58, _x59) {
                return _ref33.apply(this, arguments);
              }

              return runMigration;
            }()
          }]);

          return SFMigrationManager;
        }();

        ;

        var SFModelManager = exports.SFModelManager = function () {
          function SFModelManager(timeout) {
            _classCallCheck(this, SFModelManager);

            SFModelManager.MappingSourceRemoteRetrieved = "MappingSourceRemoteRetrieved";
            SFModelManager.MappingSourceRemoteSaved = "MappingSourceRemoteSaved";
            SFModelManager.MappingSourceLocalSaved = "MappingSourceLocalSaved";
            SFModelManager.MappingSourceLocalRetrieved = "MappingSourceLocalRetrieved";
            SFModelManager.MappingSourceComponentRetrieved = "MappingSourceComponentRetrieved";
            SFModelManager.MappingSourceDesktopInstalled = "MappingSourceDesktopInstalled"; // When a component is installed by the desktop and some of its values change

            SFModelManager.MappingSourceRemoteActionRetrieved = "MappingSourceRemoteActionRetrieved";
            /* aciton-based Extensions like note history */

            SFModelManager.MappingSourceFileImport = "MappingSourceFileImport";

            SFModelManager.isMappingSourceRetrieved = function (source) {
              return [SFModelManager.MappingSourceRemoteRetrieved, SFModelManager.MappingSourceComponentRetrieved, SFModelManager.MappingSourceRemoteActionRetrieved].includes(source);
            };

            this.$timeout = timeout || setTimeout.bind(window);
            this.itemSyncObservers = [];
            this.itemsPendingRemoval = [];
            this.items = [];
            this.itemsHash = {};
            this.missedReferences = {};
            this.uuidChangeObservers = [];
          }

          _createClass(SFModelManager, [{
            key: "handleSignout",
            value: function handleSignout() {
              this.items.length = 0;
              this.itemsHash = {};
              this.itemsPendingRemoval.length = 0;
              this.missedReferences = {};
            }
          }, {
            key: "addModelUuidChangeObserver",
            value: function addModelUuidChangeObserver(id, callback) {
              this.uuidChangeObservers.push({
                id: id,
                callback: callback
              });
            }
          }, {
            key: "notifyObserversOfUuidChange",
            value: function notifyObserversOfUuidChange(oldItem, newItem) {
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = this.uuidChangeObservers[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var observer = _step9.value;
                  observer.callback(oldItem, newItem);
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }
            }
          }, {
            key: "alternateUUIDForItem",
            value: function () {
              var _ref34 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee34(item) {
                var newItem, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, referencingObject;

                return regeneratorRuntime.wrap(function _callee34$(_context34) {
                  while (1) {
                    switch (_context34.prev = _context34.next) {
                      case 0:
                        // We need to clone this item and give it a new uuid, then delete item with old uuid from db (you can't modify uuid's in our indexeddb setup)
                        newItem = this.createItem(item, true);
                        _context34.next = 3;
                        return SFJS.crypto.generateUUID();

                      case 3:
                        newItem.uuid = _context34.sent; // Update uuids of relationships

                        newItem.informReferencesOfUUIDChange(item.uuid, newItem.uuid);
                        this.informModelsOfUUIDChangeForItem(newItem, item.uuid, newItem.uuid); // the new item should inherit the original's relationships

                        _iteratorNormalCompletion10 = true;
                        _didIteratorError10 = false;
                        _iteratorError10 = undefined;
                        _context34.prev = 9;

                        for (_iterator10 = item.referencingObjects[Symbol.iterator](); !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                          referencingObject = _step10.value;
                          referencingObject.setIsNoLongerBeingReferencedBy(item);
                          item.setIsNoLongerBeingReferencedBy(referencingObject);
                          referencingObject.addItemAsRelationship(newItem);
                          referencingObject.setDirty(true);
                        } // Used to set up referencingObjects for new item (so that other items can now properly reference this new item)


                        _context34.next = 17;
                        break;

                      case 13:
                        _context34.prev = 13;
                        _context34.t0 = _context34["catch"](9);
                        _didIteratorError10 = true;
                        _iteratorError10 = _context34.t0;

                      case 17:
                        _context34.prev = 17;
                        _context34.prev = 18;

                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                          _iterator10.return();
                        }

                      case 20:
                        _context34.prev = 20;

                        if (!_didIteratorError10) {
                          _context34.next = 23;
                          break;
                        }

                        throw _iteratorError10;

                      case 23:
                        return _context34.finish(20);

                      case 24:
                        return _context34.finish(17);

                      case 25:
                        this.resolveReferencesForItem(newItem);
                        console.log(item.uuid, "-->", newItem.uuid); // Set to deleted, then run through mapping function so that observers can be notified

                        item.deleted = true;
                        item.content.references = []; // Don't set dirty, because we don't need to sync old item. alternating uuid only occurs in two cases:
                        // signing in and merging offline data, or when a uuid-conflict occurs. In both cases, the original item never
                        // saves to a server, so doesn't need to be synced.
                        // informModelsOfUUIDChangeForItem may set this object to dirty, but we want to undo that here, so that the item gets deleted
                        // right away through the mapping function.

                        item.setDirty(false);
                        this.mapResponseItemsToLocalModels([item], SFModelManager.MappingSourceLocalSaved); // add new item

                        this.addItem(newItem);
                        newItem.setDirty(true);
                        this.notifyObserversOfUuidChange(item, newItem);
                        return _context34.abrupt("return", newItem);

                      case 35:
                      case "end":
                        return _context34.stop();
                    }
                  }
                }, _callee34, this, [[9, 13, 17, 25], [18,, 20, 24]]);
              }));

              function alternateUUIDForItem(_x60) {
                return _ref34.apply(this, arguments);
              }

              return alternateUUIDForItem;
            }()
          }, {
            key: "informModelsOfUUIDChangeForItem",
            value: function informModelsOfUUIDChangeForItem(newItem, oldUUID, newUUID) {
              // some models that only have one-way relationships might be interested to hear that an item has changed its uuid
              // for example, editors have a one way relationship with notes. When a note changes its UUID, it has no way to inform the editor
              // to update its relationships
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = undefined;

              try {
                for (var _iterator11 = this.items[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var model = _step11.value;
                  model.potentialItemOfInterestHasChangedItsUUID(newItem, oldUUID, newUUID);
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11.return) {
                    _iterator11.return();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }
            }
          }, {
            key: "didSyncModelsOffline",
            value: function didSyncModelsOffline(items) {
              this.notifySyncObserversOfModels(items, SFModelManager.MappingSourceLocalSaved);
            }
          }, {
            key: "mapResponseItemsToLocalModels",
            value: function mapResponseItemsToLocalModels(items, source, sourceKey) {
              return this.mapResponseItemsToLocalModelsWithOptions({
                items: items,
                source: source,
                sourceKey: sourceKey
              });
            }
          }, {
            key: "mapResponseItemsToLocalModelsOmittingFields",
            value: function mapResponseItemsToLocalModelsOmittingFields(items, omitFields, source, sourceKey) {
              return this.mapResponseItemsToLocalModelsWithOptions({
                items: items,
                omitFields: omitFields,
                source: source,
                sourceKey: sourceKey
              });
            }
          }, {
            key: "mapResponseItemsToLocalModelsWithOptions",
            value: function mapResponseItemsToLocalModelsWithOptions(_ref35) {
              var items = _ref35.items,
                  omitFields = _ref35.omitFields,
                  source = _ref35.source,
                  sourceKey = _ref35.sourceKey,
                  options = _ref35.options;
              var models = [],
                  processedObjects = [],
                  modelsToNotifyObserversOf = []; // first loop should add and process items

              var _iteratorNormalCompletion12 = true;
              var _didIteratorError12 = false;
              var _iteratorError12 = undefined;

              try {
                for (var _iterator12 = items[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                  var json_obj = _step12.value;

                  if (!json_obj) {
                    continue;
                  } // content is missing if it has been sucessfullly decrypted but no content


                  var isMissingContent = !json_obj.content && !json_obj.errorDecrypting;
                  var isCorrupt = !json_obj.content_type || !json_obj.uuid;

                  if ((isCorrupt || isMissingContent) && !json_obj.deleted) {
                    // An item that is not deleted should never have empty content
                    console.error("Server response item is corrupt:", json_obj);
                    continue;
                  } // Lodash's _.omit, which was previously used, seems to cause unexpected behavior
                  // when json_obj is an ES6 item class. So we instead manually omit each key.


                  if (Array.isArray(omitFields)) {
                    var _iteratorNormalCompletion15 = true;
                    var _didIteratorError15 = false;
                    var _iteratorError15 = undefined;

                    try {
                      for (var _iterator15 = omitFields[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                        var key = _step15.value;
                        delete json_obj[key];
                      }
                    } catch (err) {
                      _didIteratorError15 = true;
                      _iteratorError15 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion15 && _iterator15.return) {
                          _iterator15.return();
                        }
                      } finally {
                        if (_didIteratorError15) {
                          throw _iteratorError15;
                        }
                      }
                    }
                  }

                  var item = this.findItem(json_obj.uuid);

                  if (item) {
                    item.updateFromJSON(json_obj); // If an item goes through mapping, it can no longer be a dummy.

                    item.dummy = false;
                  }

                  if (this.itemsPendingRemoval.includes(json_obj.uuid)) {
                    _.pull(this.itemsPendingRemoval, json_obj.uuid);

                    continue;
                  }

                  var contentType = json_obj["content_type"] || item && item.content_type;
                  var unknownContentType = this.acceptableContentTypes && !this.acceptableContentTypes.includes(contentType);

                  if (unknownContentType) {
                    continue;
                  }

                  var isDirtyItemPendingDelete = false;

                  if (json_obj.deleted == true) {
                    if (json_obj.dirty) {
                      // Item was marked as deleted but not yet synced
                      // We need to create this item as usual, but just not add it to individual arrays
                      // i.e add to this.items but not this.notes (so that it can be retrieved with getDirtyItems)
                      isDirtyItemPendingDelete = true;
                    } else {
                      if (item) {
                        modelsToNotifyObserversOf.push(item);
                        this.removeItemLocally(item);
                      }

                      continue;
                    }
                  }

                  if (!item) {
                    item = this.createItem(json_obj, true);
                  }

                  this.addItem(item, isDirtyItemPendingDelete); // Observers do not need to handle items that errored while decrypting.

                  if (!item.errorDecrypting) {
                    modelsToNotifyObserversOf.push(item);
                  }

                  models.push(item);
                  processedObjects.push(json_obj);
                } // second loop should process references

              } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion12 && _iterator12.return) {
                    _iterator12.return();
                  }
                } finally {
                  if (_didIteratorError12) {
                    throw _iteratorError12;
                  }
                }
              }

              var _iteratorNormalCompletion13 = true;
              var _didIteratorError13 = false;
              var _iteratorError13 = undefined;

              try {
                for (var _iterator13 = processedObjects.entries()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  var _ref36 = _step13.value;

                  var _ref37 = _slicedToArray(_ref36, 2);

                  var index = _ref37[0];
                  var _json_obj = _ref37[1];
                  var model = models[index];

                  if (_json_obj.content) {
                    this.resolveReferencesForItem(model);
                  }

                  model.didFinishSyncing();
                }
              } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
                    _iterator13.return();
                  }
                } finally {
                  if (_didIteratorError13) {
                    throw _iteratorError13;
                  }
                }
              }

              var missedRefs = this.popMissedReferenceStructsForObjects(processedObjects);

              var _loop = function _loop(ref) {
                var model = models.find(function (candidate) {
                  return candidate.uuid == ref.reference_uuid;
                }); // Model should 100% be defined here, but let's not be too overconfident

                if (model) {
                  var itemWaitingForTheValueInThisCurrentLoop = ref.for_item;
                  itemWaitingForTheValueInThisCurrentLoop.addItemAsRelationship(model);
                }
              };

              var _iteratorNormalCompletion14 = true;
              var _didIteratorError14 = false;
              var _iteratorError14 = undefined;

              try {
                for (var _iterator14 = missedRefs[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                  var ref = _step14.value;

                  _loop(ref);
                }
              } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion14 && _iterator14.return) {
                    _iterator14.return();
                  }
                } finally {
                  if (_didIteratorError14) {
                    throw _iteratorError14;
                  }
                }
              }

              this.notifySyncObserversOfModels(modelsToNotifyObserversOf, source, sourceKey);
              return models;
            }
          }, {
            key: "missedReferenceBuildKey",
            value: function missedReferenceBuildKey(referenceId, objectId) {
              return referenceId + ":" + objectId;
            }
          }, {
            key: "popMissedReferenceStructsForObjects",
            value: function popMissedReferenceStructsForObjects(objects) {
              if (!objects || objects.length == 0) {
                return [];
              }

              var results = [];
              var toDelete = [];
              var uuids = objects.map(function (item) {
                return item.uuid;
              });
              var genericUuidLength = uuids[0].length;
              var keys = Object.keys(this.missedReferences);
              var _iteratorNormalCompletion16 = true;
              var _didIteratorError16 = false;
              var _iteratorError16 = undefined;

              try {
                for (var _iterator16 = keys[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                  var candidateKey = _step16.value;
                  /*
                  We used to do string.split to get at the UUID, but surprisingly,
                  the performance of this was about 20x worse then just getting the substring.
                   let matches = candidateKey.split(":")[0] == object.uuid;
                  */

                  var matches = uuids.includes(candidateKey.substring(0, genericUuidLength));

                  if (matches) {
                    results.push(this.missedReferences[candidateKey]);
                    toDelete.push(candidateKey);
                  }
                } // remove from hash

              } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion16 && _iterator16.return) {
                    _iterator16.return();
                  }
                } finally {
                  if (_didIteratorError16) {
                    throw _iteratorError16;
                  }
                }
              }

              var _iteratorNormalCompletion17 = true;
              var _didIteratorError17 = false;
              var _iteratorError17 = undefined;

              try {
                for (var _iterator17 = toDelete[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                  var key = _step17.value;
                  delete this.missedReferences[key];
                }
              } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion17 && _iterator17.return) {
                    _iterator17.return();
                  }
                } finally {
                  if (_didIteratorError17) {
                    throw _iteratorError17;
                  }
                }
              }

              return results;
            }
          }, {
            key: "resolveReferencesForItem",
            value: function resolveReferencesForItem(item) {
              var markReferencesDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (item.errorDecrypting) {
                return;
              } // console.log("resolveReferencesForItem", item, "references", item.contentObject.references);


              var contentObject = item.contentObject; // If another client removes an item's references, this client won't pick up the removal unless
              // we remove everything not present in the current list of references

              item.updateLocalRelationships();

              if (!contentObject.references) {
                return;
              }

              var references = contentObject.references.slice(); // make copy, references will be modified in array

              var referencesIds = references.map(function (ref) {
                return ref.uuid;
              });
              var includeBlanks = true;
              var referencesObjectResults = this.findItems(referencesIds, includeBlanks);
              var _iteratorNormalCompletion18 = true;
              var _didIteratorError18 = false;
              var _iteratorError18 = undefined;

              try {
                for (var _iterator18 = referencesObjectResults.entries()[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                  var _ref38 = _step18.value;

                  var _ref39 = _slicedToArray(_ref38, 2);

                  var index = _ref39[0];
                  var referencedItem = _ref39[1];

                  if (referencedItem) {
                    item.addItemAsRelationship(referencedItem);

                    if (markReferencesDirty) {
                      referencedItem.setDirty(true);
                    }
                  } else {
                    var missingRefId = referencesIds[index]; // Allows mapper to check when missing reference makes it through the loop,
                    // and then runs resolveReferencesForItem again for the original item.

                    var mappingKey = this.missedReferenceBuildKey(missingRefId, item.uuid);

                    if (!this.missedReferences[mappingKey]) {
                      var missedRef = {
                        reference_uuid: missingRefId,
                        for_item: item
                      };
                      this.missedReferences[mappingKey] = missedRef;
                    }
                  }
                }
              } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion18 && _iterator18.return) {
                    _iterator18.return();
                  }
                } finally {
                  if (_didIteratorError18) {
                    throw _iteratorError18;
                  }
                }
              }
            }
            /* Note that this function is public, and can also be called manually (desktopManager uses it) */

          }, {
            key: "notifySyncObserversOfModels",
            value: function notifySyncObserversOfModels(models, source, sourceKey) {
              var _this9 = this; // Make sure `let` is used in the for loops instead of `var`, as we will be using a timeout below.


              var observers = this.itemSyncObservers.sort(function (a, b) {
                // sort by priority
                return a.priority < b.priority ? -1 : 1;
              });

              var _loop2 = function _loop2(observer) {
                var allRelevantItems = observer.types.includes("*") ? models : models.filter(function (item) {
                  return observer.types.includes(item.content_type);
                });
                var validItems = [],
                    deletedItems = [];
                var _iteratorNormalCompletion20 = true;
                var _didIteratorError20 = false;
                var _iteratorError20 = undefined;

                try {
                  for (var _iterator20 = allRelevantItems[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                    var item = _step20.value;

                    if (item.deleted) {
                      deletedItems.push(item);
                    } else {
                      validItems.push(item);
                    }
                  }
                } catch (err) {
                  _didIteratorError20 = true;
                  _iteratorError20 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion20 && _iterator20.return) {
                      _iterator20.return();
                    }
                  } finally {
                    if (_didIteratorError20) {
                      throw _iteratorError20;
                    }
                  }
                }

                if (allRelevantItems.length > 0) {
                  _this9._callSyncObserverCallbackWithTimeout(observer, allRelevantItems, validItems, deletedItems, source, sourceKey);
                }
              };

              var _iteratorNormalCompletion19 = true;
              var _didIteratorError19 = false;
              var _iteratorError19 = undefined;

              try {
                for (var _iterator19 = observers[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                  var observer = _step19.value;

                  _loop2(observer);
                }
              } catch (err) {
                _didIteratorError19 = true;
                _iteratorError19 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion19 && _iterator19.return) {
                    _iterator19.return();
                  }
                } finally {
                  if (_didIteratorError19) {
                    throw _iteratorError19;
                  }
                }
              }
            }
            /*
              Rather than running this inline in a for loop, which causes problems and requires all variables to be declared with `let`,
              we'll do it here so it's more explicit and less confusing.
             */

          }, {
            key: "_callSyncObserverCallbackWithTimeout",
            value: function _callSyncObserverCallbackWithTimeout(observer, allRelevantItems, validItems, deletedItems, source, sourceKey) {
              this.$timeout(function () {
                observer.callback(allRelevantItems, validItems, deletedItems, source, sourceKey);
              });
            }
          }, {
            key: "createItem",
            value: function createItem(json_obj, dontNotifyObservers) {
              var itemClass = SFModelManager.ContentTypeClassMapping && SFModelManager.ContentTypeClassMapping[json_obj.content_type];

              if (!itemClass) {
                itemClass = SFItem;
              }

              var item = new itemClass(json_obj); // Some observers would be interested to know when an an item is locally created
              // If we don't send this out, these observers would have to wait until MappingSourceRemoteSaved
              // to hear about it, but sometimes, RemoveSaved is explicitly ignored by the observer to avoid
              // recursive callbacks. See componentManager's syncObserver callback.
              // dontNotifyObservers is currently only set true by modelManagers mapResponseItemsToLocalModels

              if (!dontNotifyObservers) {
                this.notifySyncObserversOfModels([item], SFModelManager.MappingSourceLocalSaved);
              }

              return item;
            }
            /*
              Be sure itemResponse is a generic Javascript object, and not an Item.
              An Item needs to collapse its properties into its content object before it can be duplicated.
              Note: the reason we need this function is specificallty for the call to resolveReferencesForItem.
              This method creates but does not add the item to the global inventory. It's used by syncManager
              to check if this prospective duplicate item is identical to another item, including the references.
             */

          }, {
            key: "createConflictedItem",
            value: function () {
              var _ref40 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee35(itemResponse) {
                var uuid, dup;
                return regeneratorRuntime.wrap(function _callee35$(_context35) {
                  while (1) {
                    switch (_context35.prev = _context35.next) {
                      case 0:
                        _context35.next = 2;
                        return SFJS.crypto.generateUUID();

                      case 2:
                        uuid = _context35.sent;
                        itemResponse = _.merge(itemResponse, {
                          uuid: uuid
                        });
                        dup = this.createItem(itemResponse, true);
                        return _context35.abrupt("return", dup);

                      case 6:
                      case "end":
                        return _context35.stop();
                    }
                  }
                }, _callee35, this);
              }));

              function createConflictedItem(_x62) {
                return _ref40.apply(this, arguments);
              }

              return createConflictedItem;
            }()
          }, {
            key: "addConflictedItem",
            value: function addConflictedItem(dup, original) {
              this.addItem(dup); // the duplicate should inherit the original's relationships

              var _iteratorNormalCompletion21 = true;
              var _didIteratorError21 = false;
              var _iteratorError21 = undefined;

              try {
                for (var _iterator21 = original.referencingObjects[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                  var referencingObject = _step21.value;
                  referencingObject.addItemAsRelationship(dup);
                  referencingObject.setDirty(true);
                }
              } catch (err) {
                _didIteratorError21 = true;
                _iteratorError21 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion21 && _iterator21.return) {
                    _iterator21.return();
                  }
                } finally {
                  if (_didIteratorError21) {
                    throw _iteratorError21;
                  }
                }
              }

              this.resolveReferencesForItem(dup);
              dup.content.conflict_of = original.uuid;
              dup.setDirty(true);
            }
          }, {
            key: "duplicateItem",
            value: function duplicateItem(item) {
              var copy = new item.constructor({
                content: item.content
              });
              copy.created_at = item.created_at;
              copy.content_type = item.content_type;
              this.addItem(copy); // the duplicate should inherit the original's relationships

              var _iteratorNormalCompletion22 = true;
              var _didIteratorError22 = false;
              var _iteratorError22 = undefined;

              try {
                for (var _iterator22 = item.referencingObjects[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                  var referencingObject = _step22.value;
                  referencingObject.addItemAsRelationship(copy);
                  referencingObject.setDirty(true);
                }
              } catch (err) {
                _didIteratorError22 = true;
                _iteratorError22 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion22 && _iterator22.return) {
                    _iterator22.return();
                  }
                } finally {
                  if (_didIteratorError22) {
                    throw _iteratorError22;
                  }
                }
              }

              this.resolveReferencesForItem(copy);
              copy.setDirty(true);
              return copy;
            }
          }, {
            key: "addItem",
            value: function addItem(item) {
              var globalOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              this.addItems([item], globalOnly);
            }
          }, {
            key: "addItems",
            value: function addItems(items) {
              var _this10 = this;

              var globalOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              items.forEach(function (item) {
                if (!_this10.itemsHash[item.uuid]) {
                  _this10.itemsHash[item.uuid] = item;

                  _this10.items.push(item);
                }
              });
            }
            /* Notifies observers when an item has been synced or mapped from a remote response */

          }, {
            key: "addItemSyncObserver",
            value: function addItemSyncObserver(id, types, callback) {
              this.addItemSyncObserverWithPriority({
                id: id,
                types: types,
                callback: callback,
                priority: 1
              });
            }
          }, {
            key: "addItemSyncObserverWithPriority",
            value: function addItemSyncObserverWithPriority(_ref41) {
              var id = _ref41.id,
                  priority = _ref41.priority,
                  types = _ref41.types,
                  callback = _ref41.callback;

              if (!Array.isArray(types)) {
                types = [types];
              }

              this.itemSyncObservers.push({
                id: id,
                types: types,
                priority: priority,
                callback: callback
              });
            }
          }, {
            key: "removeItemSyncObserver",
            value: function removeItemSyncObserver(id) {
              _.remove(this.itemSyncObservers, _.find(this.itemSyncObservers, {
                id: id
              }));
            }
          }, {
            key: "getDirtyItems",
            value: function getDirtyItems() {
              return this.items.filter(function (item) {
                // An item that has an error decrypting can be synced only if it is being deleted.
                // Otherwise, we don't want to send corrupt content up to the server.
                return item.dirty == true && !item.dummy && (!item.errorDecrypting || item.deleted);
              });
            }
          }, {
            key: "clearDirtyItems",
            value: function clearDirtyItems(items) {
              var _iteratorNormalCompletion23 = true;
              var _didIteratorError23 = false;
              var _iteratorError23 = undefined;

              try {
                for (var _iterator23 = items[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                  var item = _step23.value;
                  item.setDirty(false);
                }
              } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion23 && _iterator23.return) {
                    _iterator23.return();
                  }
                } finally {
                  if (_didIteratorError23) {
                    throw _iteratorError23;
                  }
                }
              }
            }
          }, {
            key: "setItemToBeDeleted",
            value: function setItemToBeDeleted(item) {
              item.deleted = true;

              if (!item.dummy) {
                item.setDirty(true);
              }

              this.removeAndDirtyAllRelationshipsForItem(item);
            }
          }, {
            key: "removeAndDirtyAllRelationshipsForItem",
            value: function removeAndDirtyAllRelationshipsForItem(item) {
              // Handle direct relationships
              // An item with errorDecrypting will not have valid content field
              if (!item.errorDecrypting) {
                var _iteratorNormalCompletion24 = true;
                var _didIteratorError24 = false;
                var _iteratorError24 = undefined;

                try {
                  for (var _iterator24 = item.content.references[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                    var reference = _step24.value;
                    var relationship = this.findItem(reference.uuid);

                    if (relationship) {
                      item.removeItemAsRelationship(relationship);

                      if (relationship.hasRelationshipWithItem(item)) {
                        relationship.removeItemAsRelationship(item);
                        relationship.setDirty(true);
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError24 = true;
                  _iteratorError24 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion24 && _iterator24.return) {
                      _iterator24.return();
                    }
                  } finally {
                    if (_didIteratorError24) {
                      throw _iteratorError24;
                    }
                  }
                }
              } // Handle indirect relationships


              var _iteratorNormalCompletion25 = true;
              var _didIteratorError25 = false;
              var _iteratorError25 = undefined;

              try {
                for (var _iterator25 = item.referencingObjects[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                  var object = _step25.value;
                  object.removeItemAsRelationship(item);
                  object.setDirty(true);
                }
              } catch (err) {
                _didIteratorError25 = true;
                _iteratorError25 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion25 && _iterator25.return) {
                    _iterator25.return();
                  }
                } finally {
                  if (_didIteratorError25) {
                    throw _iteratorError25;
                  }
                }
              }

              item.referencingObjects = [];
            }
            /* Used when changing encryption key */

          }, {
            key: "setAllItemsDirty",
            value: function setAllItemsDirty() {
              var dontUpdateClientDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
              var relevantItems = this.allItems;
              var _iteratorNormalCompletion26 = true;
              var _didIteratorError26 = false;
              var _iteratorError26 = undefined;

              try {
                for (var _iterator26 = relevantItems[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                  var item = _step26.value;
                  item.setDirty(true, dontUpdateClientDates);
                }
              } catch (err) {
                _didIteratorError26 = true;
                _iteratorError26 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion26 && _iterator26.return) {
                    _iterator26.return();
                  }
                } finally {
                  if (_didIteratorError26) {
                    throw _iteratorError26;
                  }
                }
              }
            }
          }, {
            key: "removeItemLocally",
            value: function () {
              var _ref42 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee36(item) {
                return regeneratorRuntime.wrap(function _callee36$(_context36) {
                  while (1) {
                    switch (_context36.prev = _context36.next) {
                      case 0:
                        _.remove(this.items, {
                          uuid: item.uuid
                        });

                        delete this.itemsHash[item.uuid];
                        item.isBeingRemovedLocally();
                        this.itemsPendingRemoval.push(item.uuid);

                      case 4:
                      case "end":
                        return _context36.stop();
                    }
                  }
                }, _callee36, this);
              }));

              function removeItemLocally(_x66) {
                return _ref42.apply(this, arguments);
              }

              return removeItemLocally;
            }()
            /* Searching */

          }, {
            key: "allItemsMatchingTypes",
            value: function allItemsMatchingTypes(contentTypes) {
              return this.allItems.filter(function (item) {
                return (_.includes(contentTypes, item.content_type) || _.includes(contentTypes, "*")) && !item.dummy;
              });
            }
          }, {
            key: "invalidItems",
            value: function invalidItems() {
              return this.allItems.filter(function (item) {
                return item.errorDecrypting;
              });
            }
          }, {
            key: "validItemsForContentType",
            value: function validItemsForContentType(contentType) {
              return this.allItems.filter(function (item) {
                return item.content_type == contentType && !item.errorDecrypting;
              });
            }
          }, {
            key: "findItem",
            value: function findItem(itemId) {
              return this.itemsHash[itemId];
            }
          }, {
            key: "findItems",
            value: function findItems(ids) {
              var includeBlanks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var results = [];
              var _iteratorNormalCompletion27 = true;
              var _didIteratorError27 = false;
              var _iteratorError27 = undefined;

              try {
                for (var _iterator27 = ids[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                  var id = _step27.value;
                  var item = this.itemsHash[id];

                  if (item || includeBlanks) {
                    results.push(item);
                  }
                }
              } catch (err) {
                _didIteratorError27 = true;
                _iteratorError27 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion27 && _iterator27.return) {
                    _iterator27.return();
                  }
                } finally {
                  if (_didIteratorError27) {
                    throw _iteratorError27;
                  }
                }
              }

              return results;
            }
          }, {
            key: "itemsMatchingPredicate",
            value: function itemsMatchingPredicate(predicate) {
              return this.itemsMatchingPredicates([predicate]);
            }
          }, {
            key: "itemsMatchingPredicates",
            value: function itemsMatchingPredicates(predicates) {
              return this.filterItemsWithPredicates(this.allItems, predicates);
            }
          }, {
            key: "filterItemsWithPredicates",
            value: function filterItemsWithPredicates(items, predicates) {
              var results = items.filter(function (item) {
                var _iteratorNormalCompletion28 = true;
                var _didIteratorError28 = false;
                var _iteratorError28 = undefined;

                try {
                  for (var _iterator28 = predicates[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                    var predicate = _step28.value;

                    if (!item.satisfiesPredicate(predicate)) {
                      return false;
                    }
                  }
                } catch (err) {
                  _didIteratorError28 = true;
                  _iteratorError28 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion28 && _iterator28.return) {
                      _iterator28.return();
                    }
                  } finally {
                    if (_didIteratorError28) {
                      throw _iteratorError28;
                    }
                  }
                }

                return true;
              });
              return results;
            }
            /*
            Archives
            */

          }, {
            key: "importItems",
            value: function () {
              var _ref43 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee37(externalItems) {
                var itemsToBeMapped, _iteratorNormalCompletion29, _didIteratorError29, _iteratorError29, _iterator29, _step29, itemData, existing, dup, items, _iteratorNormalCompletion30, _didIteratorError30, _iteratorError30, _iterator30, _step30, item;

                return regeneratorRuntime.wrap(function _callee37$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        itemsToBeMapped = [];
                        _iteratorNormalCompletion29 = true;
                        _didIteratorError29 = false;
                        _iteratorError29 = undefined;
                        _context37.prev = 4;
                        _iterator29 = externalItems[Symbol.iterator]();

                      case 6:
                        if (_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done) {
                          _context37.next = 21;
                          break;
                        }

                        itemData = _step29.value;
                        existing = this.findItem(itemData.uuid);

                        if (!(existing && !existing.errorDecrypting)) {
                          _context37.next = 16;
                          break;
                        }

                        _context37.next = 12;
                        return this.createConflictedItem(itemData);

                      case 12:
                        dup = _context37.sent;

                        if (!itemData.deleted && !existing.isItemContentEqualWith(dup)) {
                          // Data differs
                          this.addConflictedItem(dup, existing);
                          itemsToBeMapped.push(dup);
                        }

                        _context37.next = 18;
                        break;

                      case 16:
                        // it doesn't exist, push it into items to be mapped
                        itemsToBeMapped.push(itemData);

                        if (existing && existing.errorDecrypting) {
                          existing.errorDecrypting = false;
                        }

                      case 18:
                        _iteratorNormalCompletion29 = true;
                        _context37.next = 6;
                        break;

                      case 21:
                        _context37.next = 27;
                        break;

                      case 23:
                        _context37.prev = 23;
                        _context37.t0 = _context37["catch"](4);
                        _didIteratorError29 = true;
                        _iteratorError29 = _context37.t0;

                      case 27:
                        _context37.prev = 27;
                        _context37.prev = 28;

                        if (!_iteratorNormalCompletion29 && _iterator29.return) {
                          _iterator29.return();
                        }

                      case 30:
                        _context37.prev = 30;

                        if (!_didIteratorError29) {
                          _context37.next = 33;
                          break;
                        }

                        throw _iteratorError29;

                      case 33:
                        return _context37.finish(30);

                      case 34:
                        return _context37.finish(27);

                      case 35:
                        items = this.mapResponseItemsToLocalModels(itemsToBeMapped, SFModelManager.MappingSourceFileImport);
                        _iteratorNormalCompletion30 = true;
                        _didIteratorError30 = false;
                        _iteratorError30 = undefined;
                        _context37.prev = 39;

                        for (_iterator30 = items[Symbol.iterator](); !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                          item = _step30.value;
                          item.setDirty(true, true);
                          item.deleted = false;
                        }

                        _context37.next = 47;
                        break;

                      case 43:
                        _context37.prev = 43;
                        _context37.t1 = _context37["catch"](39);
                        _didIteratorError30 = true;
                        _iteratorError30 = _context37.t1;

                      case 47:
                        _context37.prev = 47;
                        _context37.prev = 48;

                        if (!_iteratorNormalCompletion30 && _iterator30.return) {
                          _iterator30.return();
                        }

                      case 50:
                        _context37.prev = 50;

                        if (!_didIteratorError30) {
                          _context37.next = 53;
                          break;
                        }

                        throw _iteratorError30;

                      case 53:
                        return _context37.finish(50);

                      case 54:
                        return _context37.finish(47);

                      case 55:
                        return _context37.abrupt("return", items);

                      case 56:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee37, this, [[4, 23, 27, 35], [28,, 30, 34], [39, 43, 47, 55], [48,, 50, 54]]);
              }));

              function importItems(_x68) {
                return _ref43.apply(this, arguments);
              }

              return importItems;
            }()
          }, {
            key: "getAllItemsJSONData",
            value: function () {
              var _ref44 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee38(keys, authParams, returnNullIfEmpty) {
                return regeneratorRuntime.wrap(function _callee38$(_context38) {
                  while (1) {
                    switch (_context38.prev = _context38.next) {
                      case 0:
                        return _context38.abrupt("return", this.getJSONDataForItems(this.allItems, keys, authParams, returnNullIfEmpty));

                      case 1:
                      case "end":
                        return _context38.stop();
                    }
                  }
                }, _callee38, this);
              }));

              function getAllItemsJSONData(_x69, _x70, _x71) {
                return _ref44.apply(this, arguments);
              }

              return getAllItemsJSONData;
            }()
          }, {
            key: "getJSONDataForItems",
            value: function () {
              var _ref45 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee39(items, keys, authParams, returnNullIfEmpty) {
                return regeneratorRuntime.wrap(function _callee39$(_context39) {
                  while (1) {
                    switch (_context39.prev = _context39.next) {
                      case 0:
                        return _context39.abrupt("return", Promise.all(items.map(function (item) {
                          var itemParams = new SFItemParams(item, keys, authParams);
                          return itemParams.paramsForExportFile();
                        })).then(function (items) {
                          if (returnNullIfEmpty && items.length == 0) {
                            return null;
                          }

                          var data = {
                            items: items
                          };

                          if (keys) {
                            // auth params are only needed when encrypted with a standard file key
                            data["auth_params"] = authParams;
                          }

                          return JSON.stringify(data, null, 2
                          /* pretty print */
                          );
                        }));

                      case 1:
                      case "end":
                        return _context39.stop();
                    }
                  }
                }, _callee39, this);
              }));

              function getJSONDataForItems(_x72, _x73, _x74, _x75) {
                return _ref45.apply(this, arguments);
              }

              return getJSONDataForItems;
            }()
          }, {
            key: "computeDataIntegrityHash",
            value: function () {
              var _ref46 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee40() {
                var items, dates, string, hash;
                return regeneratorRuntime.wrap(function _callee40$(_context40) {
                  while (1) {
                    switch (_context40.prev = _context40.next) {
                      case 0:
                        _context40.prev = 0;
                        items = this.allNondummyItems.sort(function (a, b) {
                          return b.updated_at - a.updated_at;
                        });
                        dates = items.map(function (item) {
                          return item.updatedAtTimestamp();
                        });
                        string = dates.join(",");
                        _context40.next = 6;
                        return SFJS.crypto.sha256(string);

                      case 6:
                        hash = _context40.sent;
                        return _context40.abrupt("return", hash);

                      case 10:
                        _context40.prev = 10;
                        _context40.t0 = _context40["catch"](0);
                        console.error("Error computing data integrity hash", _context40.t0);
                        return _context40.abrupt("return", null);

                      case 14:
                      case "end":
                        return _context40.stop();
                    }
                  }
                }, _callee40, this, [[0, 10]]);
              }));

              function computeDataIntegrityHash() {
                return _ref46.apply(this, arguments);
              }

              return computeDataIntegrityHash;
            }()
          }, {
            key: "allItems",
            get: function get() {
              return this.items.slice();
            }
          }, {
            key: "allNondummyItems",
            get: function get() {
              return this.items.filter(function (item) {
                return !item.dummy;
              });
            }
          }]);

          return SFModelManager;
        }();

        ;

        var SFPrivilegesManager = exports.SFPrivilegesManager = function () {
          function SFPrivilegesManager(modelManager, syncManager, singletonManager) {
            _classCallCheck(this, SFPrivilegesManager);

            this.modelManager = modelManager;
            this.syncManager = syncManager;
            this.singletonManager = singletonManager;
            this.loadPrivileges();
            SFPrivilegesManager.CredentialAccountPassword = "CredentialAccountPassword";
            SFPrivilegesManager.CredentialLocalPasscode = "CredentialLocalPasscode";
            SFPrivilegesManager.ActionManageExtensions = "ActionManageExtensions";
            SFPrivilegesManager.ActionManageBackups = "ActionManageBackups";
            SFPrivilegesManager.ActionViewProtectedNotes = "ActionViewProtectedNotes";
            SFPrivilegesManager.ActionManagePrivileges = "ActionManagePrivileges";
            SFPrivilegesManager.ActionManagePasscode = "ActionManagePasscode";
            SFPrivilegesManager.ActionDeleteNote = "ActionDeleteNote";
            SFPrivilegesManager.SessionExpiresAtKey = "SessionExpiresAtKey";
            SFPrivilegesManager.SessionLengthKey = "SessionLengthKey";
            SFPrivilegesManager.SessionLengthNone = 0;
            SFPrivilegesManager.SessionLengthFiveMinutes = 300;
            SFPrivilegesManager.SessionLengthOneHour = 3600;
            SFPrivilegesManager.SessionLengthOneWeek = 604800;
            this.availableActions = [SFPrivilegesManager.ActionViewProtectedNotes, SFPrivilegesManager.ActionDeleteNote, SFPrivilegesManager.ActionManagePasscode, SFPrivilegesManager.ActionManageBackups, SFPrivilegesManager.ActionManageExtensions, SFPrivilegesManager.ActionManagePrivileges];
            this.availableCredentials = [SFPrivilegesManager.CredentialAccountPassword, SFPrivilegesManager.CredentialLocalPasscode];
            this.sessionLengths = [SFPrivilegesManager.SessionLengthNone, SFPrivilegesManager.SessionLengthFiveMinutes, SFPrivilegesManager.SessionLengthOneHour, SFPrivilegesManager.SessionLengthOneWeek, SFPrivilegesManager.SessionLengthIndefinite];
          }
          /*
          async delegate.isOffline()
          async delegate.hasLocalPasscode()
          async delegate.saveToStorage(key, value)
          async delegate.getFromStorage(key)
          async delegate.verifyAccountPassword
          async delegate.verifyLocalPasscode
          */


          _createClass(SFPrivilegesManager, [{
            key: "setDelegate",
            value: function setDelegate(delegate) {
              this.delegate = delegate;
            }
          }, {
            key: "getAvailableActions",
            value: function getAvailableActions() {
              return this.availableActions;
            }
          }, {
            key: "getAvailableCredentials",
            value: function getAvailableCredentials() {
              return this.availableCredentials;
            }
          }, {
            key: "netCredentialsForAction",
            value: function () {
              var _ref47 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee41(action) {
                var credentials, netCredentials, _iteratorNormalCompletion31, _didIteratorError31, _iteratorError31, _iterator31, _step31, cred, isOffline, hasLocalPasscode;

                return regeneratorRuntime.wrap(function _callee41$(_context41) {
                  while (1) {
                    switch (_context41.prev = _context41.next) {
                      case 0:
                        _context41.next = 2;
                        return this.getPrivileges();

                      case 2:
                        _context41.t0 = action;
                        credentials = _context41.sent.getCredentialsForAction(_context41.t0);
                        netCredentials = [];
                        _iteratorNormalCompletion31 = true;
                        _didIteratorError31 = false;
                        _iteratorError31 = undefined;
                        _context41.prev = 8;
                        _iterator31 = credentials[Symbol.iterator]();

                      case 10:
                        if (_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done) {
                          _context41.next = 27;
                          break;
                        }

                        cred = _step31.value;

                        if (!(cred == SFPrivilegesManager.CredentialAccountPassword)) {
                          _context41.next = 19;
                          break;
                        }

                        _context41.next = 15;
                        return this.delegate.isOffline();

                      case 15:
                        isOffline = _context41.sent;

                        if (!isOffline) {
                          netCredentials.push(cred);
                        }

                        _context41.next = 24;
                        break;

                      case 19:
                        if (!(cred == SFPrivilegesManager.CredentialLocalPasscode)) {
                          _context41.next = 24;
                          break;
                        }

                        _context41.next = 22;
                        return this.delegate.hasLocalPasscode();

                      case 22:
                        hasLocalPasscode = _context41.sent;

                        if (hasLocalPasscode) {
                          netCredentials.push(cred);
                        }

                      case 24:
                        _iteratorNormalCompletion31 = true;
                        _context41.next = 10;
                        break;

                      case 27:
                        _context41.next = 33;
                        break;

                      case 29:
                        _context41.prev = 29;
                        _context41.t1 = _context41["catch"](8);
                        _didIteratorError31 = true;
                        _iteratorError31 = _context41.t1;

                      case 33:
                        _context41.prev = 33;
                        _context41.prev = 34;

                        if (!_iteratorNormalCompletion31 && _iterator31.return) {
                          _iterator31.return();
                        }

                      case 36:
                        _context41.prev = 36;

                        if (!_didIteratorError31) {
                          _context41.next = 39;
                          break;
                        }

                        throw _iteratorError31;

                      case 39:
                        return _context41.finish(36);

                      case 40:
                        return _context41.finish(33);

                      case 41:
                        return _context41.abrupt("return", netCredentials);

                      case 42:
                      case "end":
                        return _context41.stop();
                    }
                  }
                }, _callee41, this, [[8, 29, 33, 41], [34,, 36, 40]]);
              }));

              function netCredentialsForAction(_x76) {
                return _ref47.apply(this, arguments);
              }

              return netCredentialsForAction;
            }()
          }, {
            key: "loadPrivileges",
            value: function () {
              var _ref48 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee43() {
                var _this11 = this;

                return regeneratorRuntime.wrap(function _callee43$(_context43) {
                  while (1) {
                    switch (_context43.prev = _context43.next) {
                      case 0:
                        if (!this.loadPromise) {
                          _context43.next = 2;
                          break;
                        }

                        return _context43.abrupt("return", this.loadPromise);

                      case 2:
                        this.loadPromise = new Promise(function (resolve, reject) {
                          var privsContentType = SFPrivileges.contentType();
                          var contentTypePredicate = new SFPredicate("content_type", "=", privsContentType);

                          _this11.singletonManager.registerSingleton([contentTypePredicate], function (resolvedSingleton) {
                            _this11.privileges = resolvedSingleton;
                            resolve(resolvedSingleton);
                          }, function () {
                            var _ref49 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee42(valueCallback) {
                              var privs;
                              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                                while (1) {
                                  switch (_context42.prev = _context42.next) {
                                    case 0:
                                      // Safe to create. Create and return object.
                                      privs = new SFPrivileges({
                                        content_type: privsContentType
                                      });

                                      if (SFJS.crypto.generateUUIDSync) {
                                        _context42.next = 4;
                                        break;
                                      }

                                      _context42.next = 4;
                                      return privs.initUUID();

                                    case 4:
                                      _this11.modelManager.addItem(privs);

                                      privs.setDirty(true);

                                      _this11.syncManager.sync();

                                      valueCallback(privs);
                                      resolve(privs);

                                    case 9:
                                    case "end":
                                      return _context42.stop();
                                  }
                                }
                              }, _callee42, _this11);
                            }));

                            return function (_x77) {
                              return _ref49.apply(this, arguments);
                            };
                          }());
                        });
                        return _context43.abrupt("return", this.loadPromise);

                      case 4:
                      case "end":
                        return _context43.stop();
                    }
                  }
                }, _callee43, this);
              }));

              function loadPrivileges() {
                return _ref48.apply(this, arguments);
              }

              return loadPrivileges;
            }()
          }, {
            key: "getPrivileges",
            value: function () {
              var _ref50 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee44() {
                return regeneratorRuntime.wrap(function _callee44$(_context44) {
                  while (1) {
                    switch (_context44.prev = _context44.next) {
                      case 0:
                        if (!this.privileges) {
                          _context44.next = 4;
                          break;
                        }

                        return _context44.abrupt("return", this.privileges);

                      case 4:
                        return _context44.abrupt("return", this.loadPrivileges());

                      case 5:
                      case "end":
                        return _context44.stop();
                    }
                  }
                }, _callee44, this);
              }));

              function getPrivileges() {
                return _ref50.apply(this, arguments);
              }

              return getPrivileges;
            }()
          }, {
            key: "displayInfoForCredential",
            value: function displayInfoForCredential(credential) {
              var metadata = {};
              metadata[SFPrivilegesManager.CredentialAccountPassword] = {
                label: "Account Password",
                prompt: "Please enter your account password."
              };
              metadata[SFPrivilegesManager.CredentialLocalPasscode] = {
                label: "Local Passcode",
                prompt: "Please enter your local passcode."
              };
              return metadata[credential];
            }
          }, {
            key: "displayInfoForAction",
            value: function displayInfoForAction(action) {
              var metadata = {};
              metadata[SFPrivilegesManager.ActionManageExtensions] = {
                label: "Manage Extensions"
              };
              metadata[SFPrivilegesManager.ActionManageBackups] = {
                label: "Download/Import Backups"
              };
              metadata[SFPrivilegesManager.ActionViewProtectedNotes] = {
                label: "View Protected Notes"
              };
              metadata[SFPrivilegesManager.ActionManagePrivileges] = {
                label: "Manage Privileges"
              };
              metadata[SFPrivilegesManager.ActionManagePasscode] = {
                label: "Manage Passcode"
              };
              metadata[SFPrivilegesManager.ActionDeleteNote] = {
                label: "Delete Notes"
              };
              return metadata[action];
            }
          }, {
            key: "getSessionLengthOptions",
            value: function getSessionLengthOptions() {
              return [{
                value: SFPrivilegesManager.SessionLengthNone,
                label: "Don't Remember"
              }, {
                value: SFPrivilegesManager.SessionLengthFiveMinutes,
                label: "5 Minutes"
              }, {
                value: SFPrivilegesManager.SessionLengthOneHour,
                label: "1 Hour"
              }, {
                value: SFPrivilegesManager.SessionLengthOneWeek,
                label: "1 Week"
              }];
            }
          }, {
            key: "setSessionLength",
            value: function () {
              var _ref51 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee45(length) {
                var addToNow, expiresAt;
                return regeneratorRuntime.wrap(function _callee45$(_context45) {
                  while (1) {
                    switch (_context45.prev = _context45.next) {
                      case 0:
                        addToNow = function addToNow(seconds) {
                          var date = new Date();
                          date.setSeconds(date.getSeconds() + seconds);
                          return date;
                        };

                        expiresAt = addToNow(length);
                        return _context45.abrupt("return", Promise.all([this.delegate.saveToStorage(SFPrivilegesManager.SessionExpiresAtKey, JSON.stringify(expiresAt)), this.delegate.saveToStorage(SFPrivilegesManager.SessionLengthKey, JSON.stringify(length))]));

                      case 3:
                      case "end":
                        return _context45.stop();
                    }
                  }
                }, _callee45, this);
              }));

              function setSessionLength(_x78) {
                return _ref51.apply(this, arguments);
              }

              return setSessionLength;
            }()
          }, {
            key: "clearSession",
            value: function () {
              var _ref52 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee46() {
                return regeneratorRuntime.wrap(function _callee46$(_context46) {
                  while (1) {
                    switch (_context46.prev = _context46.next) {
                      case 0:
                        return _context46.abrupt("return", this.setSessionLength(SFPrivilegesManager.SessionLengthNone));

                      case 1:
                      case "end":
                        return _context46.stop();
                    }
                  }
                }, _callee46, this);
              }));

              function clearSession() {
                return _ref52.apply(this, arguments);
              }

              return clearSession;
            }()
          }, {
            key: "getSelectedSessionLength",
            value: function () {
              var _ref53 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee47() {
                var length;
                return regeneratorRuntime.wrap(function _callee47$(_context47) {
                  while (1) {
                    switch (_context47.prev = _context47.next) {
                      case 0:
                        _context47.next = 2;
                        return this.delegate.getFromStorage(SFPrivilegesManager.SessionLengthKey);

                      case 2:
                        length = _context47.sent;

                        if (!length) {
                          _context47.next = 7;
                          break;
                        }

                        return _context47.abrupt("return", JSON.parse(length));

                      case 7:
                        return _context47.abrupt("return", SFPrivilegesManager.SessionLengthNone);

                      case 8:
                      case "end":
                        return _context47.stop();
                    }
                  }
                }, _callee47, this);
              }));

              function getSelectedSessionLength() {
                return _ref53.apply(this, arguments);
              }

              return getSelectedSessionLength;
            }()
          }, {
            key: "getSessionExpirey",
            value: function () {
              var _ref54 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee48() {
                var expiresAt;
                return regeneratorRuntime.wrap(function _callee48$(_context48) {
                  while (1) {
                    switch (_context48.prev = _context48.next) {
                      case 0:
                        _context48.next = 2;
                        return this.delegate.getFromStorage(SFPrivilegesManager.SessionExpiresAtKey);

                      case 2:
                        expiresAt = _context48.sent;

                        if (!expiresAt) {
                          _context48.next = 7;
                          break;
                        }

                        return _context48.abrupt("return", new Date(JSON.parse(expiresAt)));

                      case 7:
                        return _context48.abrupt("return", new Date());

                      case 8:
                      case "end":
                        return _context48.stop();
                    }
                  }
                }, _callee48, this);
              }));

              function getSessionExpirey() {
                return _ref54.apply(this, arguments);
              }

              return getSessionExpirey;
            }()
          }, {
            key: "actionHasPrivilegesConfigured",
            value: function () {
              var _ref55 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee49(action) {
                return regeneratorRuntime.wrap(function _callee49$(_context49) {
                  while (1) {
                    switch (_context49.prev = _context49.next) {
                      case 0:
                        _context49.next = 2;
                        return this.netCredentialsForAction(action);

                      case 2:
                        _context49.t0 = _context49.sent.length;
                        return _context49.abrupt("return", _context49.t0 > 0);

                      case 4:
                      case "end":
                        return _context49.stop();
                    }
                  }
                }, _callee49, this);
              }));

              function actionHasPrivilegesConfigured(_x79) {
                return _ref55.apply(this, arguments);
              }

              return actionHasPrivilegesConfigured;
            }()
          }, {
            key: "actionRequiresPrivilege",
            value: function () {
              var _ref56 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee50(action) {
                var expiresAt, netCredentials;
                return regeneratorRuntime.wrap(function _callee50$(_context50) {
                  while (1) {
                    switch (_context50.prev = _context50.next) {
                      case 0:
                        _context50.next = 2;
                        return this.getSessionExpirey();

                      case 2:
                        expiresAt = _context50.sent;

                        if (!(expiresAt > new Date())) {
                          _context50.next = 5;
                          break;
                        }

                        return _context50.abrupt("return", false);

                      case 5:
                        _context50.next = 7;
                        return this.netCredentialsForAction(action);

                      case 7:
                        netCredentials = _context50.sent;
                        return _context50.abrupt("return", netCredentials.length > 0);

                      case 9:
                      case "end":
                        return _context50.stop();
                    }
                  }
                }, _callee50, this);
              }));

              function actionRequiresPrivilege(_x80) {
                return _ref56.apply(this, arguments);
              }

              return actionRequiresPrivilege;
            }()
          }, {
            key: "savePrivileges",
            value: function () {
              var _ref57 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee51() {
                var privs;
                return regeneratorRuntime.wrap(function _callee51$(_context51) {
                  while (1) {
                    switch (_context51.prev = _context51.next) {
                      case 0:
                        _context51.next = 2;
                        return this.getPrivileges();

                      case 2:
                        privs = _context51.sent;
                        privs.setDirty(true);
                        this.syncManager.sync();

                      case 5:
                      case "end":
                        return _context51.stop();
                    }
                  }
                }, _callee51, this);
              }));

              function savePrivileges() {
                return _ref57.apply(this, arguments);
              }

              return savePrivileges;
            }()
          }, {
            key: "authenticateAction",
            value: function () {
              var _ref58 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee52(action, credentialAuthMapping) {
                var requiredCredentials, successfulCredentials, failedCredentials, _iteratorNormalCompletion32, _didIteratorError32, _iteratorError32, _iterator32, _step32, requiredCredential, passesAuth;

                return regeneratorRuntime.wrap(function _callee52$(_context52) {
                  while (1) {
                    switch (_context52.prev = _context52.next) {
                      case 0:
                        _context52.next = 2;
                        return this.netCredentialsForAction(action);

                      case 2:
                        requiredCredentials = _context52.sent;
                        successfulCredentials = [], failedCredentials = [];
                        _iteratorNormalCompletion32 = true;
                        _didIteratorError32 = false;
                        _iteratorError32 = undefined;
                        _context52.prev = 7;
                        _iterator32 = requiredCredentials[Symbol.iterator]();

                      case 9:
                        if (_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done) {
                          _context52.next = 18;
                          break;
                        }

                        requiredCredential = _step32.value;
                        _context52.next = 13;
                        return this._verifyAuthenticationParameters(requiredCredential, credentialAuthMapping[requiredCredential]);

                      case 13:
                        passesAuth = _context52.sent;

                        if (passesAuth) {
                          successfulCredentials.push(requiredCredential);
                        } else {
                          failedCredentials.push(requiredCredential);
                        }

                      case 15:
                        _iteratorNormalCompletion32 = true;
                        _context52.next = 9;
                        break;

                      case 18:
                        _context52.next = 24;
                        break;

                      case 20:
                        _context52.prev = 20;
                        _context52.t0 = _context52["catch"](7);
                        _didIteratorError32 = true;
                        _iteratorError32 = _context52.t0;

                      case 24:
                        _context52.prev = 24;
                        _context52.prev = 25;

                        if (!_iteratorNormalCompletion32 && _iterator32.return) {
                          _iterator32.return();
                        }

                      case 27:
                        _context52.prev = 27;

                        if (!_didIteratorError32) {
                          _context52.next = 30;
                          break;
                        }

                        throw _iteratorError32;

                      case 30:
                        return _context52.finish(27);

                      case 31:
                        return _context52.finish(24);

                      case 32:
                        return _context52.abrupt("return", {
                          success: failedCredentials.length == 0,
                          successfulCredentials: successfulCredentials,
                          failedCredentials: failedCredentials
                        });

                      case 33:
                      case "end":
                        return _context52.stop();
                    }
                  }
                }, _callee52, this, [[7, 20, 24, 32], [25,, 27, 31]]);
              }));

              function authenticateAction(_x81, _x82) {
                return _ref58.apply(this, arguments);
              }

              return authenticateAction;
            }()
          }, {
            key: "_verifyAuthenticationParameters",
            value: function () {
              var _ref59 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee55(credential, value) {
                var _this12 = this;

                var verifyAccountPassword, verifyLocalPasscode;
                return regeneratorRuntime.wrap(function _callee55$(_context55) {
                  while (1) {
                    switch (_context55.prev = _context55.next) {
                      case 0:
                        verifyAccountPassword = function () {
                          var _ref60 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee53(password) {
                            return regeneratorRuntime.wrap(function _callee53$(_context53) {
                              while (1) {
                                switch (_context53.prev = _context53.next) {
                                  case 0:
                                    return _context53.abrupt("return", _this12.delegate.verifyAccountPassword(password));

                                  case 1:
                                  case "end":
                                    return _context53.stop();
                                }
                              }
                            }, _callee53, _this12);
                          }));

                          return function verifyAccountPassword(_x85) {
                            return _ref60.apply(this, arguments);
                          };
                        }();

                        verifyLocalPasscode = function () {
                          var _ref61 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee54(passcode) {
                            return regeneratorRuntime.wrap(function _callee54$(_context54) {
                              while (1) {
                                switch (_context54.prev = _context54.next) {
                                  case 0:
                                    return _context54.abrupt("return", _this12.delegate.verifyLocalPasscode(passcode));

                                  case 1:
                                  case "end":
                                    return _context54.stop();
                                }
                              }
                            }, _callee54, _this12);
                          }));

                          return function verifyLocalPasscode(_x86) {
                            return _ref61.apply(this, arguments);
                          };
                        }();

                        if (!(credential == SFPrivilegesManager.CredentialAccountPassword)) {
                          _context55.next = 6;
                          break;
                        }

                        return _context55.abrupt("return", verifyAccountPassword(value));

                      case 6:
                        if (!(credential == SFPrivilegesManager.CredentialLocalPasscode)) {
                          _context55.next = 8;
                          break;
                        }

                        return _context55.abrupt("return", verifyLocalPasscode(value));

                      case 8:
                      case "end":
                        return _context55.stop();
                    }
                  }
                }, _callee55, this);
              }));

              function _verifyAuthenticationParameters(_x83, _x84) {
                return _ref59.apply(this, arguments);
              }

              return _verifyAuthenticationParameters;
            }()
          }]);

          return SFPrivilegesManager;
        }();

        ;
        var SessionHistoryPersistKey = "sessionHistory_persist";
        var SessionHistoryRevisionsKey = "sessionHistory_revisions";
        var SessionHistoryAutoOptimizeKey = "sessionHistory_autoOptimize";

        var SFSessionHistoryManager = exports.SFSessionHistoryManager = function () {
          function SFSessionHistoryManager(modelManager, storageManager, keyRequestHandler, contentTypes, timeout) {
            var _this13 = this;

            _classCallCheck(this, SFSessionHistoryManager);

            this.modelManager = modelManager;
            this.storageManager = storageManager;
            this.$timeout = timeout || setTimeout.bind(window); // Required to persist the encrypted form of SFHistorySession

            this.keyRequestHandler = keyRequestHandler;
            this.loadFromDisk().then(function () {
              _this13.modelManager.addItemSyncObserver("session-history", contentTypes, function (allItems, validItems, deletedItems, source, sourceKey) {
                var _iteratorNormalCompletion33 = true;
                var _didIteratorError33 = false;
                var _iteratorError33 = undefined;

                try {
                  for (var _iterator33 = allItems[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                    var item = _step33.value;

                    try {
                      _this13.addHistoryEntryForItem(item);
                    } catch (e) {
                      console.log("Caught exception while trying to add item history entry", e);
                    }
                  }
                } catch (err) {
                  _didIteratorError33 = true;
                  _iteratorError33 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion33 && _iterator33.return) {
                      _iterator33.return();
                    }
                  } finally {
                    if (_didIteratorError33) {
                      throw _iteratorError33;
                    }
                  }
                }
              });
            });
          }

          _createClass(SFSessionHistoryManager, [{
            key: "encryptionParams",
            value: function () {
              var _ref62 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee56() {
                return regeneratorRuntime.wrap(function _callee56$(_context56) {
                  while (1) {
                    switch (_context56.prev = _context56.next) {
                      case 0:
                        return _context56.abrupt("return", this.keyRequestHandler());

                      case 1:
                      case "end":
                        return _context56.stop();
                    }
                  }
                }, _callee56, this);
              }));

              function encryptionParams() {
                return _ref62.apply(this, arguments);
              }

              return encryptionParams;
            }()
          }, {
            key: "addHistoryEntryForItem",
            value: function addHistoryEntryForItem(item) {
              var _this14 = this;

              var persistableItemParams = {
                uuid: item.uuid,
                content_type: item.content_type,
                updated_at: item.updated_at,
                content: item.content
              };
              var entry = this.historySession.addEntryForItem(persistableItemParams);

              if (this.autoOptimize) {
                this.historySession.optimizeHistoryForItem(item);
              }

              if (entry && this.diskEnabled) {
                // Debounce, clear existing timeout
                if (this.diskTimeout) {
                  if (this.$timeout.hasOwnProperty("cancel")) {
                    this.$timeout.cancel(this.diskTimeout);
                  } else {
                    clearTimeout(this.diskTimeout);
                  }
                }

                ;
                this.diskTimeout = this.$timeout(function () {
                  _this14.saveToDisk();
                }, 2000);
              }
            }
          }, {
            key: "historyForItem",
            value: function historyForItem(item) {
              return this.historySession.historyForItem(item);
            }
          }, {
            key: "clearHistoryForItem",
            value: function () {
              var _ref63 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee57(item) {
                return regeneratorRuntime.wrap(function _callee57$(_context57) {
                  while (1) {
                    switch (_context57.prev = _context57.next) {
                      case 0:
                        this.historySession.clearItemHistory(item);
                        return _context57.abrupt("return", this.saveToDisk());

                      case 2:
                      case "end":
                        return _context57.stop();
                    }
                  }
                }, _callee57, this);
              }));

              function clearHistoryForItem(_x87) {
                return _ref63.apply(this, arguments);
              }

              return clearHistoryForItem;
            }()
          }, {
            key: "clearAllHistory",
            value: function () {
              var _ref64 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee58() {
                return regeneratorRuntime.wrap(function _callee58$(_context58) {
                  while (1) {
                    switch (_context58.prev = _context58.next) {
                      case 0:
                        this.historySession.clearAllHistory();
                        return _context58.abrupt("return", this.storageManager.removeItem(SessionHistoryRevisionsKey));

                      case 2:
                      case "end":
                        return _context58.stop();
                    }
                  }
                }, _callee58, this);
              }));

              function clearAllHistory() {
                return _ref64.apply(this, arguments);
              }

              return clearAllHistory;
            }()
          }, {
            key: "toggleDiskSaving",
            value: function () {
              var _ref65 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee59() {
                return regeneratorRuntime.wrap(function _callee59$(_context59) {
                  while (1) {
                    switch (_context59.prev = _context59.next) {
                      case 0:
                        this.diskEnabled = !this.diskEnabled;

                        if (!this.diskEnabled) {
                          _context59.next = 6;
                          break;
                        }

                        this.storageManager.setItem(SessionHistoryPersistKey, JSON.stringify(true));
                        this.saveToDisk();
                        _context59.next = 8;
                        break;

                      case 6:
                        this.storageManager.setItem(SessionHistoryPersistKey, JSON.stringify(false));
                        return _context59.abrupt("return", this.storageManager.removeItem(SessionHistoryRevisionsKey));

                      case 8:
                      case "end":
                        return _context59.stop();
                    }
                  }
                }, _callee59, this);
              }));

              function toggleDiskSaving() {
                return _ref65.apply(this, arguments);
              }

              return toggleDiskSaving;
            }()
          }, {
            key: "saveToDisk",
            value: function () {
              var _ref66 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee60() {
                var _this15 = this;

                var encryptionParams, itemParams;
                return regeneratorRuntime.wrap(function _callee60$(_context60) {
                  while (1) {
                    switch (_context60.prev = _context60.next) {
                      case 0:
                        if (this.diskEnabled) {
                          _context60.next = 2;
                          break;
                        }

                        return _context60.abrupt("return");

                      case 2:
                        _context60.next = 4;
                        return this.encryptionParams();

                      case 4:
                        encryptionParams = _context60.sent;
                        itemParams = new SFItemParams(this.historySession, encryptionParams.keys, encryptionParams.auth_params);
                        itemParams.paramsForSync().then(function (syncParams) {
                          // console.log("Saving to disk", syncParams);
                          _this15.storageManager.setItem(SessionHistoryRevisionsKey, JSON.stringify(syncParams));
                        });

                      case 7:
                      case "end":
                        return _context60.stop();
                    }
                  }
                }, _callee60, this);
              }));

              function saveToDisk() {
                return _ref66.apply(this, arguments);
              }

              return saveToDisk;
            }()
          }, {
            key: "loadFromDisk",
            value: function () {
              var _ref67 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee61() {
                var diskValue, historyValue, encryptionParams, historySession, autoOptimizeValue;
                return regeneratorRuntime.wrap(function _callee61$(_context61) {
                  while (1) {
                    switch (_context61.prev = _context61.next) {
                      case 0:
                        _context61.next = 2;
                        return this.storageManager.getItem(SessionHistoryPersistKey);

                      case 2:
                        diskValue = _context61.sent;

                        if (diskValue) {
                          this.diskEnabled = JSON.parse(diskValue);
                        }

                        _context61.next = 6;
                        return this.storageManager.getItem(SessionHistoryRevisionsKey);

                      case 6:
                        historyValue = _context61.sent;

                        if (!historyValue) {
                          _context61.next = 18;
                          break;
                        }

                        historyValue = JSON.parse(historyValue);
                        _context61.next = 11;
                        return this.encryptionParams();

                      case 11:
                        encryptionParams = _context61.sent;
                        _context61.next = 14;
                        return SFJS.itemTransformer.decryptItem(historyValue, encryptionParams.keys);

                      case 14:
                        historySession = new SFHistorySession(historyValue);
                        this.historySession = historySession;
                        _context61.next = 19;
                        break;

                      case 18:
                        this.historySession = new SFHistorySession();

                      case 19:
                        _context61.next = 21;
                        return this.storageManager.getItem(SessionHistoryAutoOptimizeKey);

                      case 21:
                        autoOptimizeValue = _context61.sent;

                        if (autoOptimizeValue) {
                          this.autoOptimize = JSON.parse(autoOptimizeValue);
                        } else {
                          // default value is true
                          this.autoOptimize = true;
                        }

                      case 23:
                      case "end":
                        return _context61.stop();
                    }
                  }
                }, _callee61, this);
              }));

              function loadFromDisk() {
                return _ref67.apply(this, arguments);
              }

              return loadFromDisk;
            }()
          }, {
            key: "toggleAutoOptimize",
            value: function () {
              var _ref68 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee62() {
                return regeneratorRuntime.wrap(function _callee62$(_context62) {
                  while (1) {
                    switch (_context62.prev = _context62.next) {
                      case 0:
                        this.autoOptimize = !this.autoOptimize;

                        if (this.autoOptimize) {
                          this.storageManager.setItem(SessionHistoryAutoOptimizeKey, JSON.stringify(true));
                        } else {
                          this.storageManager.setItem(SessionHistoryAutoOptimizeKey, JSON.stringify(false));
                        }

                      case 2:
                      case "end":
                        return _context62.stop();
                    }
                  }
                }, _callee62, this);
              }));

              function toggleAutoOptimize() {
                return _ref68.apply(this, arguments);
              }

              return toggleAutoOptimize;
            }()
          }]);

          return SFSessionHistoryManager;
        }();

        ;
        /*
         The SingletonManager allows controllers to register an item as a singleton, which means only one instance of that model
         should exist, both on the server and on the client. When the SingletonManager detects multiple items matching the singleton predicate,
         the oldest ones will be deleted, leaving the newest ones. (See 4/28/18 update. We now choose the earliest created one as the winner.).
          (This no longer fully applies, See 4/28/18 update.) We will treat the model most recently arrived from the server as the most recent one. The reason for this is,
         if you're offline, a singleton can be created, as in the case of UserPreferneces. Then when you sign in, you'll retrieve your actual user preferences.
         In that case, even though the offline singleton has a more recent updated_at, the server retreived value is the one we care more about.
          4/28/18: I'm seeing this issue: if you have the app open in one window, then in another window sign in, and during sign in,
         click Refresh (or autorefresh occurs) in the original signed in window, then you will happen to receive from the server the newly created
         Extensions singleton, and it will be mistaken (it just looks like a regular retrieved item, since nothing is in saved) for a fresh, latest copy, and replace the current instance.
         This has happened to me and many users.
         A puzzling issue, but what if instead of resolving singletons by choosing the one most recently modified, we choose the one with the earliest create date?
         This way, we don't care when it was modified, but we always, always choose the item that was created first. This way, we always deal with the same item.
        */

        var SFSingletonManager = exports.SFSingletonManager = function () {
          function SFSingletonManager(modelManager, syncManager) {
            var _this16 = this;

            _classCallCheck(this, SFSingletonManager);

            this.syncManager = syncManager;
            this.modelManager = modelManager;
            this.singletonHandlers = []; // We use sync observer instead of syncEvent `local-data-incremental-load`, because we want singletons
            // to resolve with the first priority, because they generally dictate app state.
            // If we used local-data-incremental-load, and 1 item was important singleton and 99 were heavy components,
            // then given the random nature of notifiying observers, the heavy components would spend a lot of time loading first,
            // here, we priortize ours loading as most important

            modelManager.addItemSyncObserverWithPriority({
              id: "sf-singleton-manager",
              types: "*",
              priority: -1,
              callback: function callback() {
                _this16.resolveSingletons(modelManager.allNondummyItems, null, true);
              }
            });
            syncManager.addEventHandler(function (syncEvent, data) {
              if (syncEvent == "local-data-loaded") {
                _this16.resolveSingletons(modelManager.allNondummyItems, null, true);

                _this16.initialDataLoaded = true;
              } else if (syncEvent == "sync:completed") {
                // Wait for initial data load before handling any sync. If we don't want for initial data load,
                // then the singleton resolver won't have the proper items to work with to determine whether to resolve or create.
                if (!_this16.initialDataLoaded) {
                  return;
                } // The reason we also need to consider savedItems in consolidating singletons is in case of sync conflicts,
                // a new item can be created, but is never processed through "retrievedItems" since it is only created locally then saved.
                // HOWEVER, by considering savedItems, we are now ruining everything, especially during sign in. A singleton can be created
                // offline, and upon sign in, will sync all items to the server, and by combining retrievedItems & savedItems, and only choosing
                // the latest, you are now resolving to the most recent one, which is in the savedItems list and not retrieved items, defeating
                // the whole purpose of this thing.
                // Updated solution: resolveSingletons will now evaluate both of these arrays separately.


                _this16.resolveSingletons(data.retrievedItems, data.savedItems);
              }
            });
            /*
              If an item alternates its uuid on registration, singletonHandlers might need to update
              their local reference to the object, since the object reference will change on uuid alternation
            */

            modelManager.addModelUuidChangeObserver("singleton-manager", function (oldModel, newModel) {
              var _iteratorNormalCompletion34 = true;
              var _didIteratorError34 = false;
              var _iteratorError34 = undefined;

              try {
                for (var _iterator34 = _this16.singletonHandlers[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                  var handler = _step34.value;

                  if (handler.singleton && SFPredicate.ItemSatisfiesPredicates(newModel, handler.predicates)) {
                    // Reference is now invalid, calling resolveSingleton should update it
                    handler.singleton = null;

                    _this16.resolveSingletons([newModel]);
                  }
                }
              } catch (err) {
                _didIteratorError34 = true;
                _iteratorError34 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion34 && _iterator34.return) {
                    _iterator34.return();
                  }
                } finally {
                  if (_didIteratorError34) {
                    throw _iteratorError34;
                  }
                }
              }
            });
          }

          _createClass(SFSingletonManager, [{
            key: "registerSingleton",
            value: function registerSingleton(predicates, resolveCallback, createBlock) {
              /*
              predicate: a key/value pair that specifies properties that should match in order for an item to be considered a predicate
              resolveCallback: called when one or more items are deleted and a new item becomes the reigning singleton
              createBlock: called when a sync is complete and no items are found. The createBlock should create the item and return it.
              */
              this.singletonHandlers.push({
                predicates: predicates,
                resolutionCallback: resolveCallback,
                createBlock: createBlock
              });
            }
          }, {
            key: "resolveSingletons",
            value: function resolveSingletons(retrievedItems, savedItems, initialLoad) {
              var _this17 = this;

              retrievedItems = retrievedItems || [];
              savedItems = savedItems || [];

              var _loop3 = function _loop3(singletonHandler) {
                var predicates = singletonHandler.predicates.slice();

                var retrievedSingletonItems = _this17.modelManager.filterItemsWithPredicates(retrievedItems, predicates);

                var handleCreation = function handleCreation() {
                  if (singletonHandler.createBlock) {
                    singletonHandler.pendingCreateBlockCallback = true;
                    singletonHandler.createBlock(function (created) {
                      singletonHandler.singleton = created;
                      singletonHandler.pendingCreateBlockCallback = false;
                      singletonHandler.resolutionCallback && singletonHandler.resolutionCallback(created);
                    });
                  }
                }; // We only want to consider saved items count to see if it's more than 0, and do nothing else with it.
                // This way we know there was some action and things need to be resolved. The saved items will come up
                // in filterItemsWithPredicate(this.modelManager.allNondummyItems) and be deleted anyway


                var savedSingletonItemsCount = _this17.modelManager.filterItemsWithPredicates(savedItems, predicates).length;

                if (retrievedSingletonItems.length > 0 || savedSingletonItemsCount > 0) {
                  /*
                    Check local inventory and make sure only 1 similar item exists. If more than 1, delete newest
                    Note that this local inventory will also contain whatever is in retrievedItems.
                  */
                  var allExtantItemsMatchingPredicate = _this17.modelManager.itemsMatchingPredicates(predicates);
                  /*
                    Delete all but the earliest created
                  */


                  if (allExtantItemsMatchingPredicate.length >= 2) {
                    var sorted = allExtantItemsMatchingPredicate.sort(function (a, b) {
                      /*
                        If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
                        If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
                      */
                      if (a.errorDecrypting) {
                        return 1;
                      }

                      if (b.errorDecrypting) {
                        return -1;
                      }

                      return a.created_at < b.created_at ? -1 : 1;
                    }); // The item that will be chosen to be kept

                    var winningItem = sorted[0]; // Items that will be deleted
                    // Delete everything but the first one

                    var toDelete = sorted.slice(1, sorted.length);
                    var _iteratorNormalCompletion36 = true;
                    var _didIteratorError36 = false;
                    var _iteratorError36 = undefined;

                    try {
                      for (var _iterator36 = toDelete[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                        var d = _step36.value;

                        _this17.modelManager.setItemToBeDeleted(d);
                      }
                    } catch (err) {
                      _didIteratorError36 = true;
                      _iteratorError36 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion36 && _iterator36.return) {
                          _iterator36.return();
                        }
                      } finally {
                        if (_didIteratorError36) {
                          throw _iteratorError36;
                        }
                      }
                    }

                    _this17.syncManager.sync(); // Send remaining item to callback


                    singletonHandler.singleton = winningItem;
                    singletonHandler.resolutionCallback && singletonHandler.resolutionCallback(winningItem);
                  } else if (allExtantItemsMatchingPredicate.length == 1) {
                    var singleton = allExtantItemsMatchingPredicate[0];

                    if (singleton.errorDecrypting) {
                      // Delete the current singleton and create a new one
                      _this17.modelManager.setItemToBeDeleted(singleton);

                      handleCreation();
                    } else if (!singletonHandler.singleton || singletonHandler.singleton !== singleton) {
                      // Not yet notified interested parties of object
                      singletonHandler.singleton = singleton;
                      singletonHandler.resolutionCallback && singletonHandler.resolutionCallback(singleton);
                    }
                  }
                } else {
                  // Retrieved items does not include any items of interest. If we don't have a singleton registered to this handler,
                  // we need to create one. Only do this on actual sync completetions and not on initial data load. Because we want
                  // to get the latest from the server before making the decision to create a new item
                  if (!singletonHandler.singleton && !initialLoad && !singletonHandler.pendingCreateBlockCallback) {
                    handleCreation();
                  }
                }
              };

              var _iteratorNormalCompletion35 = true;
              var _didIteratorError35 = false;
              var _iteratorError35 = undefined;

              try {
                for (var _iterator35 = this.singletonHandlers[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                  var singletonHandler = _step35.value;

                  _loop3(singletonHandler);
                }
              } catch (err) {
                _didIteratorError35 = true;
                _iteratorError35 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion35 && _iterator35.return) {
                    _iterator35.return();
                  }
                } finally {
                  if (_didIteratorError35) {
                    throw _iteratorError35;
                  }
                }
              }
            }
          }]);

          return SFSingletonManager;
        }();

        ; // SFStorageManager should be subclassed, and all the methods below overwritten.

        var SFStorageManager = exports.SFStorageManager = function () {
          function SFStorageManager() {
            _classCallCheck(this, SFStorageManager);
          }

          _createClass(SFStorageManager, [{
            key: "setItem",

            /* Simple Key/Value Storage */
            value: function () {
              var _ref69 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee63(key, value) {
                return regeneratorRuntime.wrap(function _callee63$(_context63) {
                  while (1) {
                    switch (_context63.prev = _context63.next) {
                      case 0:
                      case "end":
                        return _context63.stop();
                    }
                  }
                }, _callee63, this);
              }));

              function setItem(_x88, _x89) {
                return _ref69.apply(this, arguments);
              }

              return setItem;
            }()
          }, {
            key: "getItem",
            value: function () {
              var _ref70 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee64(key) {
                return regeneratorRuntime.wrap(function _callee64$(_context64) {
                  while (1) {
                    switch (_context64.prev = _context64.next) {
                      case 0:
                      case "end":
                        return _context64.stop();
                    }
                  }
                }, _callee64, this);
              }));

              function getItem(_x90) {
                return _ref70.apply(this, arguments);
              }

              return getItem;
            }()
          }, {
            key: "removeItem",
            value: function () {
              var _ref71 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee65(key) {
                return regeneratorRuntime.wrap(function _callee65$(_context65) {
                  while (1) {
                    switch (_context65.prev = _context65.next) {
                      case 0:
                      case "end":
                        return _context65.stop();
                    }
                  }
                }, _callee65, this);
              }));

              function removeItem(_x91) {
                return _ref71.apply(this, arguments);
              }

              return removeItem;
            }()
          }, {
            key: "clear",
            value: function () {
              var _ref72 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee66() {
                return regeneratorRuntime.wrap(function _callee66$(_context66) {
                  while (1) {
                    switch (_context66.prev = _context66.next) {
                      case 0:
                      case "end":
                        return _context66.stop();
                    }
                  }
                }, _callee66, this);
              }));

              function clear() {
                return _ref72.apply(this, arguments);
              }

              return clear;
            }()
          }, {
            key: "getAllModels",

            /*
            Model Storage
            */
            value: function () {
              var _ref73 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee67() {
                return regeneratorRuntime.wrap(function _callee67$(_context67) {
                  while (1) {
                    switch (_context67.prev = _context67.next) {
                      case 0:
                      case "end":
                        return _context67.stop();
                    }
                  }
                }, _callee67, this);
              }));

              function getAllModels() {
                return _ref73.apply(this, arguments);
              }

              return getAllModels;
            }()
          }, {
            key: "saveModel",
            value: function () {
              var _ref74 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee68(item) {
                return regeneratorRuntime.wrap(function _callee68$(_context68) {
                  while (1) {
                    switch (_context68.prev = _context68.next) {
                      case 0:
                        return _context68.abrupt("return", this.saveModels([item]));

                      case 1:
                      case "end":
                        return _context68.stop();
                    }
                  }
                }, _callee68, this);
              }));

              function saveModel(_x92) {
                return _ref74.apply(this, arguments);
              }

              return saveModel;
            }()
          }, {
            key: "saveModels",
            value: function () {
              var _ref75 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee69(items) {
                return regeneratorRuntime.wrap(function _callee69$(_context69) {
                  while (1) {
                    switch (_context69.prev = _context69.next) {
                      case 0:
                      case "end":
                        return _context69.stop();
                    }
                  }
                }, _callee69, this);
              }));

              function saveModels(_x93) {
                return _ref75.apply(this, arguments);
              }

              return saveModels;
            }()
          }, {
            key: "deleteModel",
            value: function () {
              var _ref76 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee70(item) {
                return regeneratorRuntime.wrap(function _callee70$(_context70) {
                  while (1) {
                    switch (_context70.prev = _context70.next) {
                      case 0:
                      case "end":
                        return _context70.stop();
                    }
                  }
                }, _callee70, this);
              }));

              function deleteModel(_x94) {
                return _ref76.apply(this, arguments);
              }

              return deleteModel;
            }()
          }, {
            key: "clearAllModels",
            value: function () {
              var _ref77 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee71() {
                return regeneratorRuntime.wrap(function _callee71$(_context71) {
                  while (1) {
                    switch (_context71.prev = _context71.next) {
                      case 0:
                      case "end":
                        return _context71.stop();
                    }
                  }
                }, _callee71, this);
              }));

              function clearAllModels() {
                return _ref77.apply(this, arguments);
              }

              return clearAllModels;
            }()
          }, {
            key: "clearAllData",

            /* General */
            value: function () {
              var _ref78 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee72() {
                return regeneratorRuntime.wrap(function _callee72$(_context72) {
                  while (1) {
                    switch (_context72.prev = _context72.next) {
                      case 0:
                        return _context72.abrupt("return", Promise.all([this.clear(), this.clearAllModels()]));

                      case 1:
                      case "end":
                        return _context72.stop();
                    }
                  }
                }, _callee72, this);
              }));

              function clearAllData() {
                return _ref78.apply(this, arguments);
              }

              return clearAllData;
            }()
          }]);

          return SFStorageManager;
        }();

        ;

        var SFSyncManager = exports.SFSyncManager = function () {
          function SFSyncManager(modelManager, storageManager, httpManager, timeout, interval) {
            _classCallCheck(this, SFSyncManager);

            SFSyncManager.KeyRequestLoadLocal = "KeyRequestLoadLocal";
            SFSyncManager.KeyRequestSaveLocal = "KeyRequestSaveLocal";
            SFSyncManager.KeyRequestLoadSaveAccount = "KeyRequestLoadSaveAccount";
            this.httpManager = httpManager;
            this.modelManager = modelManager;
            this.storageManager = storageManager; // Allows you to et your own interval/timeout function (i.e if you're using angular and want to use $timeout)

            this.$interval = interval || setInterval.bind(window);
            this.$timeout = timeout || setTimeout.bind(window);
            this.syncStatus = {};
            this.syncStatusObservers = [];
            this.eventHandlers = [];
            this.PerSyncItemUploadLimit = 100; // The number of changed items that constitute a major change
            // This is used by the desktop app to create backups

            this.MajorDataChangeThreshold = 15; // Sync integrity checking
            // If X consective sync requests return mismatching hashes, then we officially enter out-of-sync.

            this.MaxDiscordanceBeforeOutOfSync = 5; // How many consective sync results have had mismatching hashes. This value can never exceed this.MaxDiscordanceBeforeOutOfSync.

            this.syncDiscordance = 0;
            this.outOfSync = false;
          }

          _createClass(SFSyncManager, [{
            key: "handleServerIntegrityHash",
            value: function () {
              var _ref79 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee73(serverHash) {
                var localHash;
                return regeneratorRuntime.wrap(function _callee73$(_context73) {
                  while (1) {
                    switch (_context73.prev = _context73.next) {
                      case 0:
                        if (!(!serverHash || serverHash.length == 0)) {
                          _context73.next = 2;
                          break;
                        }

                        return _context73.abrupt("return", true);

                      case 2:
                        _context73.next = 4;
                        return this.modelManager.computeDataIntegrityHash();

                      case 4:
                        localHash = _context73.sent;

                        if (localHash) {
                          _context73.next = 7;
                          break;
                        }

                        return _context73.abrupt("return", true);

                      case 7:
                        if (!(localHash !== serverHash)) {
                          _context73.next = 13;
                          break;
                        }

                        this.syncDiscordance++;

                        if (this.syncDiscordance >= this.MaxDiscordanceBeforeOutOfSync) {
                          if (!this.outOfSync) {
                            this.outOfSync = true;
                            this.notifyEvent("enter-out-of-sync");
                          }
                        }

                        return _context73.abrupt("return", false);

                      case 13:
                        // Integrity matches
                        if (this.outOfSync) {
                          this.outOfSync = false;
                          this.notifyEvent("exit-out-of-sync");
                        }

                        this.syncDiscordance = 0;
                        return _context73.abrupt("return", true);

                      case 16:
                      case "end":
                        return _context73.stop();
                    }
                  }
                }, _callee73, this);
              }));

              function handleServerIntegrityHash(_x95) {
                return _ref79.apply(this, arguments);
              }

              return handleServerIntegrityHash;
            }()
          }, {
            key: "isOutOfSync",
            value: function isOutOfSync() {
              // Once we are outOfSync, it's up to the client to display UI to the user to instruct them
              // to take action. The client should present a reconciliation wizard.
              return this.outOfSync;
            }
          }, {
            key: "getServerURL",
            value: function () {
              var _ref80 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee74() {
                return regeneratorRuntime.wrap(function _callee74$(_context74) {
                  while (1) {
                    switch (_context74.prev = _context74.next) {
                      case 0:
                        _context74.next = 2;
                        return this.storageManager.getItem("server");

                      case 2:
                        _context74.t0 = _context74.sent;

                        if (_context74.t0) {
                          _context74.next = 5;
                          break;
                        }

                        _context74.t0 = window._default_sf_server;

                      case 5:
                        return _context74.abrupt("return", _context74.t0);

                      case 6:
                      case "end":
                        return _context74.stop();
                    }
                  }
                }, _callee74, this);
              }));

              function getServerURL() {
                return _ref80.apply(this, arguments);
              }

              return getServerURL;
            }()
          }, {
            key: "getSyncURL",
            value: function () {
              var _ref81 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee75() {
                return regeneratorRuntime.wrap(function _callee75$(_context75) {
                  while (1) {
                    switch (_context75.prev = _context75.next) {
                      case 0:
                        _context75.next = 2;
                        return this.getServerURL();

                      case 2:
                        _context75.t0 = _context75.sent;
                        return _context75.abrupt("return", _context75.t0 + "/items/sync");

                      case 4:
                      case "end":
                        return _context75.stop();
                    }
                  }
                }, _callee75, this);
              }));

              function getSyncURL() {
                return _ref81.apply(this, arguments);
              }

              return getSyncURL;
            }()
          }, {
            key: "registerSyncStatusObserver",
            value: function registerSyncStatusObserver(callback) {
              var observer = {
                key: new Date(),
                callback: callback
              };
              this.syncStatusObservers.push(observer);
              return observer;
            }
          }, {
            key: "removeSyncStatusObserver",
            value: function removeSyncStatusObserver(observer) {
              _.pull(this.syncStatusObservers, observer);
            }
          }, {
            key: "syncStatusDidChange",
            value: function syncStatusDidChange() {
              var _this18 = this;

              this.syncStatusObservers.forEach(function (observer) {
                observer.callback(_this18.syncStatus);
              });
            }
          }, {
            key: "addEventHandler",
            value: function addEventHandler(handler) {
              /*
              Possible Events:
              sync:completed
              sync:taking-too-long
              sync:updated_token
              sync:error
              major-data-change
              local-data-loaded
              sync-session-invalid
              sync-exception
               */
              this.eventHandlers.push(handler);
              return handler;
            }
          }, {
            key: "removeEventHandler",
            value: function removeEventHandler(handler) {
              _.pull(this.eventHandlers, handler);
            }
          }, {
            key: "notifyEvent",
            value: function notifyEvent(syncEvent, data) {
              var _iteratorNormalCompletion37 = true;
              var _didIteratorError37 = false;
              var _iteratorError37 = undefined;

              try {
                for (var _iterator37 = this.eventHandlers[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                  var handler = _step37.value;
                  handler(syncEvent, data || {});
                }
              } catch (err) {
                _didIteratorError37 = true;
                _iteratorError37 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion37 && _iterator37.return) {
                    _iterator37.return();
                  }
                } finally {
                  if (_didIteratorError37) {
                    throw _iteratorError37;
                  }
                }
              }
            }
          }, {
            key: "setKeyRequestHandler",
            value: function setKeyRequestHandler(handler) {
              this.keyRequestHandler = handler;
            }
          }, {
            key: "getActiveKeyInfo",
            value: function () {
              var _ref82 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee76(request) {
                return regeneratorRuntime.wrap(function _callee76$(_context76) {
                  while (1) {
                    switch (_context76.prev = _context76.next) {
                      case 0:
                        return _context76.abrupt("return", this.keyRequestHandler(request));

                      case 1:
                      case "end":
                        return _context76.stop();
                    }
                  }
                }, _callee76, this);
              }));

              function getActiveKeyInfo(_x96) {
                return _ref82.apply(this, arguments);
              }

              return getActiveKeyInfo;
            }()
          }, {
            key: "initialDataLoaded",
            value: function initialDataLoaded() {
              return this._initialDataLoaded;
            }
          }, {
            key: "loadLocalItems",
            value: function () {
              var _ref83 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee78(incrementalCallback) {
                var _this19 = this;

                var batchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                return regeneratorRuntime.wrap(function _callee78$(_context78) {
                  while (1) {
                    switch (_context78.prev = _context78.next) {
                      case 0:
                        return _context78.abrupt("return", this.storageManager.getAllModels().then(function (items) {
                          // put most recently updated at beginning, sorted by priority
                          items = items.sort(function (a, b) {
                            var dateResult = new Date(b.updated_at) - new Date(a.updated_at);
                            var priorityList = _this19.contentTypeLoadPriority;
                            var aPriority = 0,
                                bPriority = 0;

                            if (priorityList) {
                              aPriority = priorityList.indexOf(a.content_type);
                              bPriority = priorityList.indexOf(b.content_type);

                              if (aPriority == -1) {
                                // Not found in list, not prioritized. Set it to max value
                                aPriority = priorityList.length;
                              }

                              if (bPriority == -1) {
                                // Not found in list, not prioritized. Set it to max value
                                bPriority = priorityList.length;
                              }
                            }

                            if (aPriority == bPriority) {
                              return dateResult;
                            }

                            if (aPriority < bPriority) {
                              return -1;
                            } else {
                              return 1;
                            } // aPriority < bPriority means a should come first


                            return aPriority < bPriority ? -1 : 1;
                          }); // break it up into chunks to make interface more responsive for large item counts

                          var total = items.length;
                          var current = 0;
                          var processed = [];

                          var decryptNext = function () {
                            var _ref84 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee77() {
                              var subitems, processedSubitems;
                              return regeneratorRuntime.wrap(function _callee77$(_context77) {
                                while (1) {
                                  switch (_context77.prev = _context77.next) {
                                    case 0:
                                      subitems = items.slice(current, current + batchSize);
                                      _context77.next = 3;
                                      return _this19.handleItemsResponse(subitems, null, SFModelManager.MappingSourceLocalRetrieved, SFSyncManager.KeyRequestLoadLocal);

                                    case 3:
                                      processedSubitems = _context77.sent;
                                      processed.push(processedSubitems);
                                      current += subitems.length;

                                      if (!(current < total)) {
                                        _context77.next = 10;
                                        break;
                                      }

                                      return _context77.abrupt("return", new Promise(function (innerResolve, innerReject) {
                                        _this19.$timeout(function () {
                                          _this19.notifyEvent("local-data-incremental-load");

                                          incrementalCallback && incrementalCallback(current, total);
                                          decryptNext().then(innerResolve);
                                        });
                                      }));

                                    case 10:
                                      // Completed
                                      _this19.notifyEvent("local-data-loaded");

                                      _this19._initialDataLoaded = true;

                                    case 12:
                                    case "end":
                                      return _context77.stop();
                                  }
                                }
                              }, _callee77, _this19);
                            }));

                            return function decryptNext() {
                              return _ref84.apply(this, arguments);
                            };
                          }();

                          return decryptNext();
                        }));

                      case 1:
                      case "end":
                        return _context78.stop();
                    }
                  }
                }, _callee78, this);
              }));

              function loadLocalItems(_x98) {
                return _ref83.apply(this, arguments);
              }

              return loadLocalItems;
            }()
          }, {
            key: "writeItemsToLocalStorage",
            value: function () {
              var _ref85 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee81(items, offlineOnly) {
                var _this20 = this;

                return regeneratorRuntime.wrap(function _callee81$(_context81) {
                  while (1) {
                    switch (_context81.prev = _context81.next) {
                      case 0:
                        return _context81.abrupt("return", new Promise(function () {
                          var _ref86 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee80(resolve, reject) {
                            var info;
                            return regeneratorRuntime.wrap(function _callee80$(_context80) {
                              while (1) {
                                switch (_context80.prev = _context80.next) {
                                  case 0:
                                    if (!(items.length == 0)) {
                                      _context80.next = 3;
                                      break;
                                    }

                                    resolve();
                                    return _context80.abrupt("return");

                                  case 3:
                                    _context80.next = 5;
                                    return _this20.getActiveKeyInfo(SFSyncManager.KeyRequestSaveLocal);

                                  case 5:
                                    info = _context80.sent;
                                    Promise.all(items.map(function () {
                                      var _ref87 = _asyncToGenerator(
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(function _callee79(item) {
                                        var itemParams;
                                        return regeneratorRuntime.wrap(function _callee79$(_context79) {
                                          while (1) {
                                            switch (_context79.prev = _context79.next) {
                                              case 0:
                                                itemParams = new SFItemParams(item, info.keys, info.auth_params);
                                                _context79.next = 3;
                                                return itemParams.paramsForLocalStorage();

                                              case 3:
                                                itemParams = _context79.sent;

                                                if (offlineOnly) {
                                                  delete itemParams.dirty;
                                                }

                                                return _context79.abrupt("return", itemParams);

                                              case 6:
                                              case "end":
                                                return _context79.stop();
                                            }
                                          }
                                        }, _callee79, _this20);
                                      }));

                                      return function (_x103) {
                                        return _ref87.apply(this, arguments);
                                      };
                                    }())).then(function (params) {
                                      _this20.storageManager.saveModels(params).then(function () {
                                        // on success
                                        if (_this20.syncStatus.localError) {
                                          _this20.syncStatus.localError = null;

                                          _this20.syncStatusDidChange();
                                        }

                                        resolve();
                                      }).catch(function (error) {
                                        // on error
                                        console.error("Error writing items", error);
                                        _this20.syncStatus.localError = error;

                                        _this20.syncStatusDidChange();

                                        reject();
                                      });
                                    }).catch(function (e) {
                                      reject(e);
                                    });

                                  case 7:
                                  case "end":
                                    return _context80.stop();
                                }
                              }
                            }, _callee80, _this20);
                          }));

                          return function (_x101, _x102) {
                            return _ref86.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context81.stop();
                    }
                  }
                }, _callee81, this);
              }));

              function writeItemsToLocalStorage(_x99, _x100) {
                return _ref85.apply(this, arguments);
              }

              return writeItemsToLocalStorage;
            }()
          }, {
            key: "syncOffline",
            value: function () {
              var _ref88 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee82(items) {
                var _this21 = this;

                var _iteratorNormalCompletion38, _didIteratorError38, _iteratorError38, _iterator38, _step38, item;

                return regeneratorRuntime.wrap(function _callee82$(_context82) {
                  while (1) {
                    switch (_context82.prev = _context82.next) {
                      case 0:
                        // Update all items updated_at to now
                        _iteratorNormalCompletion38 = true;
                        _didIteratorError38 = false;
                        _iteratorError38 = undefined;
                        _context82.prev = 3;

                        for (_iterator38 = items[Symbol.iterator](); !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
                          item = _step38.value;
                          item.updated_at = new Date();
                        }

                        _context82.next = 11;
                        break;

                      case 7:
                        _context82.prev = 7;
                        _context82.t0 = _context82["catch"](3);
                        _didIteratorError38 = true;
                        _iteratorError38 = _context82.t0;

                      case 11:
                        _context82.prev = 11;
                        _context82.prev = 12;

                        if (!_iteratorNormalCompletion38 && _iterator38.return) {
                          _iterator38.return();
                        }

                      case 14:
                        _context82.prev = 14;

                        if (!_didIteratorError38) {
                          _context82.next = 17;
                          break;
                        }

                        throw _iteratorError38;

                      case 17:
                        return _context82.finish(14);

                      case 18:
                        return _context82.finish(11);

                      case 19:
                        return _context82.abrupt("return", this.writeItemsToLocalStorage(items, true).then(function (responseItems) {
                          // delete anything needing to be deleted
                          var _iteratorNormalCompletion39 = true;
                          var _didIteratorError39 = false;
                          var _iteratorError39 = undefined;

                          try {
                            for (var _iterator39 = items[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
                              var _item = _step39.value;

                              if (_item.deleted) {
                                _this21.modelManager.removeItemLocally(_item);
                              }
                            }
                          } catch (err) {
                            _didIteratorError39 = true;
                            _iteratorError39 = err;
                          } finally {
                            try {
                              if (!_iteratorNormalCompletion39 && _iterator39.return) {
                                _iterator39.return();
                              }
                            } finally {
                              if (_didIteratorError39) {
                                throw _iteratorError39;
                              }
                            }
                          }

                          _this21.notifyEvent("sync:completed", {
                            savedItems: items
                          }); // Required in order for modelManager to notify sync observers


                          _this21.modelManager.didSyncModelsOffline(items);

                          return {
                            saved_items: items
                          };
                        }));

                      case 20:
                      case "end":
                        return _context82.stop();
                    }
                  }
                }, _callee82, this, [[3, 7, 11, 19], [12,, 14, 18]]);
              }));

              function syncOffline(_x104) {
                return _ref88.apply(this, arguments);
              }

              return syncOffline;
            }()
            /*
              In the case of signing in and merging local data, we alternative UUIDs
              to avoid overwriting data a user may retrieve that has the same UUID.
              Alternating here forces us to to create duplicates of the items instead.
             */

          }, {
            key: "markAllItemsDirtyAndSaveOffline",
            value: function () {
              var _ref89 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee83(alternateUUIDs) {
                var originalItems, _iteratorNormalCompletion40, _didIteratorError40, _iteratorError40, _iterator40, _step40, item, allItems, _iteratorNormalCompletion41, _didIteratorError41, _iteratorError41, _iterator41, _step41, _item2;

                return regeneratorRuntime.wrap(function _callee83$(_context83) {
                  while (1) {
                    switch (_context83.prev = _context83.next) {
                      case 0:
                        // use a copy, as alternating uuid will affect array
                        originalItems = this.modelManager.allNondummyItems.filter(function (item) {
                          return !item.errorDecrypting;
                        }).slice();

                        if (!alternateUUIDs) {
                          _context83.next = 28;
                          break;
                        }

                        _iteratorNormalCompletion40 = true;
                        _didIteratorError40 = false;
                        _iteratorError40 = undefined;
                        _context83.prev = 5;
                        _iterator40 = originalItems[Symbol.iterator]();

                      case 7:
                        if (_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done) {
                          _context83.next = 14;
                          break;
                        }

                        item = _step40.value;
                        _context83.next = 11;
                        return this.modelManager.alternateUUIDForItem(item);

                      case 11:
                        _iteratorNormalCompletion40 = true;
                        _context83.next = 7;
                        break;

                      case 14:
                        _context83.next = 20;
                        break;

                      case 16:
                        _context83.prev = 16;
                        _context83.t0 = _context83["catch"](5);
                        _didIteratorError40 = true;
                        _iteratorError40 = _context83.t0;

                      case 20:
                        _context83.prev = 20;
                        _context83.prev = 21;

                        if (!_iteratorNormalCompletion40 && _iterator40.return) {
                          _iterator40.return();
                        }

                      case 23:
                        _context83.prev = 23;

                        if (!_didIteratorError40) {
                          _context83.next = 26;
                          break;
                        }

                        throw _iteratorError40;

                      case 26:
                        return _context83.finish(23);

                      case 27:
                        return _context83.finish(20);

                      case 28:
                        allItems = this.modelManager.allNondummyItems;
                        _iteratorNormalCompletion41 = true;
                        _didIteratorError41 = false;
                        _iteratorError41 = undefined;
                        _context83.prev = 32;

                        for (_iterator41 = allItems[Symbol.iterator](); !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
                          _item2 = _step41.value;

                          _item2.setDirty(true);
                        }

                        _context83.next = 40;
                        break;

                      case 36:
                        _context83.prev = 36;
                        _context83.t1 = _context83["catch"](32);
                        _didIteratorError41 = true;
                        _iteratorError41 = _context83.t1;

                      case 40:
                        _context83.prev = 40;
                        _context83.prev = 41;

                        if (!_iteratorNormalCompletion41 && _iterator41.return) {
                          _iterator41.return();
                        }

                      case 43:
                        _context83.prev = 43;

                        if (!_didIteratorError41) {
                          _context83.next = 46;
                          break;
                        }

                        throw _iteratorError41;

                      case 46:
                        return _context83.finish(43);

                      case 47:
                        return _context83.finish(40);

                      case 48:
                        return _context83.abrupt("return", this.writeItemsToLocalStorage(allItems, false));

                      case 49:
                      case "end":
                        return _context83.stop();
                    }
                  }
                }, _callee83, this, [[5, 16, 20, 28], [21,, 23, 27], [32, 36, 40, 48], [41,, 43, 47]]);
              }));

              function markAllItemsDirtyAndSaveOffline(_x105) {
                return _ref89.apply(this, arguments);
              }

              return markAllItemsDirtyAndSaveOffline;
            }()
          }, {
            key: "setSyncToken",
            value: function () {
              var _ref90 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee84(token) {
                return regeneratorRuntime.wrap(function _callee84$(_context84) {
                  while (1) {
                    switch (_context84.prev = _context84.next) {
                      case 0:
                        this._syncToken = token;
                        _context84.next = 3;
                        return this.storageManager.setItem("syncToken", token);

                      case 3:
                      case "end":
                        return _context84.stop();
                    }
                  }
                }, _callee84, this);
              }));

              function setSyncToken(_x106) {
                return _ref90.apply(this, arguments);
              }

              return setSyncToken;
            }()
          }, {
            key: "getSyncToken",
            value: function () {
              var _ref91 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee85() {
                return regeneratorRuntime.wrap(function _callee85$(_context85) {
                  while (1) {
                    switch (_context85.prev = _context85.next) {
                      case 0:
                        if (this._syncToken) {
                          _context85.next = 4;
                          break;
                        }

                        _context85.next = 3;
                        return this.storageManager.getItem("syncToken");

                      case 3:
                        this._syncToken = _context85.sent;

                      case 4:
                        return _context85.abrupt("return", this._syncToken);

                      case 5:
                      case "end":
                        return _context85.stop();
                    }
                  }
                }, _callee85, this);
              }));

              function getSyncToken() {
                return _ref91.apply(this, arguments);
              }

              return getSyncToken;
            }()
          }, {
            key: "setCursorToken",
            value: function () {
              var _ref92 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee86(token) {
                return regeneratorRuntime.wrap(function _callee86$(_context86) {
                  while (1) {
                    switch (_context86.prev = _context86.next) {
                      case 0:
                        this._cursorToken = token;

                        if (!token) {
                          _context86.next = 6;
                          break;
                        }

                        _context86.next = 4;
                        return this.storageManager.setItem("cursorToken", token);

                      case 4:
                        _context86.next = 8;
                        break;

                      case 6:
                        _context86.next = 8;
                        return this.storageManager.removeItem("cursorToken");

                      case 8:
                      case "end":
                        return _context86.stop();
                    }
                  }
                }, _callee86, this);
              }));

              function setCursorToken(_x107) {
                return _ref92.apply(this, arguments);
              }

              return setCursorToken;
            }()
          }, {
            key: "getCursorToken",
            value: function () {
              var _ref93 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee87() {
                return regeneratorRuntime.wrap(function _callee87$(_context87) {
                  while (1) {
                    switch (_context87.prev = _context87.next) {
                      case 0:
                        if (this._cursorToken) {
                          _context87.next = 4;
                          break;
                        }

                        _context87.next = 3;
                        return this.storageManager.getItem("cursorToken");

                      case 3:
                        this._cursorToken = _context87.sent;

                      case 4:
                        return _context87.abrupt("return", this._cursorToken);

                      case 5:
                      case "end":
                        return _context87.stop();
                    }
                  }
                }, _callee87, this);
              }));

              function getCursorToken() {
                return _ref93.apply(this, arguments);
              }

              return getCursorToken;
            }()
          }, {
            key: "clearQueuedCallbacks",
            value: function clearQueuedCallbacks() {
              this._queuedCallbacks = [];
            }
          }, {
            key: "callQueuedCallbacks",
            value: function callQueuedCallbacks(response) {
              var allCallbacks = this.queuedCallbacks;

              if (allCallbacks.length) {
                var _iteratorNormalCompletion42 = true;
                var _didIteratorError42 = false;
                var _iteratorError42 = undefined;

                try {
                  for (var _iterator42 = allCallbacks[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
                    var eachCallback = _step42.value;
                    eachCallback(response);
                  }
                } catch (err) {
                  _didIteratorError42 = true;
                  _iteratorError42 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion42 && _iterator42.return) {
                      _iterator42.return();
                    }
                  } finally {
                    if (_didIteratorError42) {
                      throw _iteratorError42;
                    }
                  }
                }

                this.clearQueuedCallbacks();
              }
            }
          }, {
            key: "beginCheckingIfSyncIsTakingTooLong",
            value: function beginCheckingIfSyncIsTakingTooLong() {
              if (this.syncStatus.checker) {
                this.stopCheckingIfSyncIsTakingTooLong();
              }

              this.syncStatus.checker = this.$interval(function () {
                // check to see if the ongoing sync is taking too long, alert the user
                var secondsPassed = (new Date() - this.syncStatus.syncStart) / 1000;
                var warningThreshold = 5.0; // seconds

                if (secondsPassed > warningThreshold) {
                  this.notifyEvent("sync:taking-too-long");
                  this.stopCheckingIfSyncIsTakingTooLong();
                }
              }.bind(this), 500);
            }
          }, {
            key: "stopCheckingIfSyncIsTakingTooLong",
            value: function stopCheckingIfSyncIsTakingTooLong() {
              if (this.$interval.hasOwnProperty("cancel")) {
                this.$interval.cancel(this.syncStatus.checker);
              } else {
                clearInterval(this.syncStatus.checker);
              }

              this.syncStatus.checker = null;
            }
          }, {
            key: "lockSyncing",
            value: function lockSyncing() {
              this.syncLocked = true;
            }
          }, {
            key: "unlockSyncing",
            value: function unlockSyncing() {
              this.syncLocked = false;
            }
          }, {
            key: "sync",
            value: function () {
              var _ref94 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee89() {
                var _this22 = this;

                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return regeneratorRuntime.wrap(function _callee89$(_context89) {
                  while (1) {
                    switch (_context89.prev = _context89.next) {
                      case 0:
                        return _context89.abrupt("return", new Promise(function () {
                          var _ref95 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee88(resolve, reject) {
                            var allDirtyItems, dirtyItemsNotYetSaved, info, isContinuationSync, submitLimit, subItems, params, _iteratorNormalCompletion43, _didIteratorError43, _iteratorError43, _iterator43, _step43, item;

                            return regeneratorRuntime.wrap(function _callee88$(_context88) {
                              while (1) {
                                switch (_context88.prev = _context88.next) {
                                  case 0:
                                    if (!_this22.syncLocked) {
                                      _context88.next = 4;
                                      break;
                                    }

                                    console.log("Sync Locked, Returning;");
                                    resolve();
                                    return _context88.abrupt("return");

                                  case 4:
                                    if (!options) options = {};
                                    allDirtyItems = _this22.modelManager.getDirtyItems();
                                    /*
                                      When it comes to saving to disk before the sync request (both in syncOpInProgress and preSyncSave),
                                      you only want to save items that have a dirty count > 0. That's because, if for example, you're syncing
                                      2000 items, and every sync request handles only 150 items at a time, then every sync request will
                                      be writing the same thousand items to storage every time. Writing a thousand items to storage can take 10s.
                                      So, save to local storage only items with dirtyCount > 0, then, after saving, set dirtyCount to 0.
                                      This way, if an item changes again, it will be saved next sync.
                                    */

                                    dirtyItemsNotYetSaved = allDirtyItems.filter(function (candidate) {
                                      if (candidate.dirtyCount > 0) {
                                        candidate.dirtyCount = 0;
                                        return true;
                                      } else {
                                        return false;
                                      }
                                    }); // When a user hits the physical refresh button, we want to force refresh, in case
                                    // the sync engine is stuck in some inProgress loop.

                                    if (!(_this22.syncStatus.syncOpInProgress && !options.force)) {
                                      _context88.next = 14;
                                      break;
                                    }

                                    _this22.repeatOnCompletion = true;

                                    _this22.queuedCallbacks.push(resolve);

                                    _context88.next = 12;
                                    return _this22.writeItemsToLocalStorage(dirtyItemsNotYetSaved, false);

                                  case 12:
                                    console.log("Sync op in progress; returning.");
                                    return _context88.abrupt("return");

                                  case 14:
                                    _context88.next = 16;
                                    return _this22.getActiveKeyInfo(SFSyncManager.KeyRequestLoadSaveAccount);

                                  case 16:
                                    info = _context88.sent;

                                    if (!info.offline) {
                                      _context88.next = 20;
                                      break;
                                    }

                                    _this22.syncOffline(allDirtyItems).then(function (response) {
                                      _this22.modelManager.clearDirtyItems(allDirtyItems);

                                      resolve(response);
                                    }).catch(function (e) {
                                      _this22.notifyEvent("sync-exception", e);
                                    });

                                    return _context88.abrupt("return");

                                  case 20:
                                    isContinuationSync = _this22.syncStatus.needsMoreSync;
                                    _this22.syncStatus.syncOpInProgress = true;
                                    _this22.syncStatus.syncStart = new Date();

                                    _this22.beginCheckingIfSyncIsTakingTooLong();

                                    submitLimit = _this22.PerSyncItemUploadLimit;
                                    subItems = allDirtyItems.slice(0, submitLimit);

                                    if (subItems.length < allDirtyItems.length) {
                                      // more items left to be synced, repeat
                                      _this22.syncStatus.needsMoreSync = true;
                                    } else {
                                      _this22.syncStatus.needsMoreSync = false;
                                    }

                                    if (!isContinuationSync) {
                                      _this22.syncStatus.total = allDirtyItems.length;
                                      _this22.syncStatus.current = 0;
                                    } // If items are marked as dirty during a long running sync request, total isn't updated
                                    // This happens mostly in the case of large imports and sync conflicts where duplicated items are created


                                    if (_this22.syncStatus.current > _this22.syncStatus.total) {
                                      _this22.syncStatus.total = _this22.syncStatus.current;
                                    }

                                    _this22.syncStatusDidChange(); // Perform save after you've updated all status signals above. Presync save can take several seconds in some cases.
                                    // Write to local storage before beginning sync.
                                    // This way, if they close the browser before the sync request completes, local changes will not be lost


                                    _context88.next = 32;
                                    return _this22.writeItemsToLocalStorage(dirtyItemsNotYetSaved, false);

                                  case 32:
                                    if (options.onPreSyncSave) {
                                      options.onPreSyncSave();
                                    } // when doing a sync request that returns items greater than the limit, and thus subsequent syncs are required,
                                    // we want to keep track of all retreived items, then save to local storage only once all items have been retrieved,
                                    // so that relationships remain intact
                                    // Update 12/18: I don't think we need to do this anymore, since relationships will now retroactively resolve their relationships,
                                    // if an item they were looking for hasn't been pulled in yet.


                                    if (!_this22.allRetreivedItems) {
                                      _this22.allRetreivedItems = [];
                                    } // We also want to do this for savedItems


                                    if (!_this22.allSavedItems) {
                                      _this22.allSavedItems = [];
                                    }

                                    params = {};
                                    params.limit = 150;

                                    if (options.performIntegrityCheck) {
                                      params.compute_integrity = true;
                                    }

                                    _context88.prev = 38;
                                    _context88.next = 41;
                                    return Promise.all(subItems.map(function (item) {
                                      var itemParams = new SFItemParams(item, info.keys, info.auth_params);
                                      itemParams.additionalFields = options.additionalFields;
                                      return itemParams.paramsForSync();
                                    })).then(function (itemsParams) {
                                      params.items = itemsParams;
                                    });

                                  case 41:
                                    _context88.next = 46;
                                    break;

                                  case 43:
                                    _context88.prev = 43;
                                    _context88.t0 = _context88["catch"](38);

                                    _this22.notifyEvent("sync-exception", _context88.t0);

                                  case 46:
                                    _iteratorNormalCompletion43 = true;
                                    _didIteratorError43 = false;
                                    _iteratorError43 = undefined;
                                    _context88.prev = 49;

                                    for (_iterator43 = subItems[Symbol.iterator](); !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
                                      item = _step43.value; // Reset dirty counter to 0, since we're about to sync it.
                                      // This means anyone marking the item as dirty after this will cause it so sync again and not be cleared on sync completion.

                                      item.dirtyCount = 0;
                                    }

                                    _context88.next = 57;
                                    break;

                                  case 53:
                                    _context88.prev = 53;
                                    _context88.t1 = _context88["catch"](49);
                                    _didIteratorError43 = true;
                                    _iteratorError43 = _context88.t1;

                                  case 57:
                                    _context88.prev = 57;
                                    _context88.prev = 58;

                                    if (!_iteratorNormalCompletion43 && _iterator43.return) {
                                      _iterator43.return();
                                    }

                                  case 60:
                                    _context88.prev = 60;

                                    if (!_didIteratorError43) {
                                      _context88.next = 63;
                                      break;
                                    }

                                    throw _iteratorError43;

                                  case 63:
                                    return _context88.finish(60);

                                  case 64:
                                    return _context88.finish(57);

                                  case 65:
                                    _context88.next = 67;
                                    return _this22.getSyncToken();

                                  case 67:
                                    params.sync_token = _context88.sent;
                                    _context88.next = 70;
                                    return _this22.getCursorToken();

                                  case 70:
                                    params.cursor_token = _context88.sent;
                                    _context88.prev = 71;
                                    _context88.t2 = _this22.httpManager;
                                    _context88.next = 75;
                                    return _this22.getSyncURL();

                                  case 75:
                                    _context88.t3 = _context88.sent;
                                    _context88.t4 = params;

                                    _context88.t5 = function (response) {
                                      _this22.handleSyncSuccess(subItems, response, options).then(function () {
                                        resolve(response);
                                      }).catch(function (e) {
                                        console.log("Caught sync success exception:", e);

                                        _this22.handleSyncError(null, null, allDirtyItems).then(function (errorResponse) {
                                          resolve(errorResponse);
                                        });
                                      });
                                    };

                                    _context88.t6 = function (response, statusCode) {
                                      _this22.handleSyncError(response, statusCode, allDirtyItems).then(function (errorResponse) {
                                        resolve(errorResponse);
                                      });
                                    };

                                    _context88.t2.postAbsolute.call(_context88.t2, _context88.t3, _context88.t4, _context88.t5, _context88.t6);

                                    _context88.next = 85;
                                    break;

                                  case 82:
                                    _context88.prev = 82;
                                    _context88.t7 = _context88["catch"](71);
                                    console.log("Sync exception caught:", _context88.t7);

                                  case 85:
                                  case "end":
                                    return _context88.stop();
                                }
                              }
                            }, _callee88, _this22, [[38, 43], [49, 53, 57, 65], [58,, 60, 64], [71, 82]]);
                          }));

                          return function (_x109, _x110) {
                            return _ref95.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context89.stop();
                    }
                  }
                }, _callee89, this);
              }));

              function sync() {
                return _ref94.apply(this, arguments);
              }

              return sync;
            }()
          }, {
            key: "handleSyncSuccess",
            value: function () {
              var _ref96 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee90(syncedItems, response, options) {
                var _this23 = this;

                var itemsToClearAsDirty, _iteratorNormalCompletion44, _didIteratorError44, _iteratorError44, _iterator44, _step44, item, allSavedUUIDs, retrieved, omitFields, saved, unsaved, matches, cursorToken;

                return regeneratorRuntime.wrap(function _callee90$(_context90) {
                  while (1) {
                    switch (_context90.prev = _context90.next) {
                      case 0:
                        // Check to make sure any subItem hasn't been marked as dirty again while a sync was ongoing
                        itemsToClearAsDirty = [];
                        _iteratorNormalCompletion44 = true;
                        _didIteratorError44 = false;
                        _iteratorError44 = undefined;
                        _context90.prev = 4;

                        for (_iterator44 = syncedItems[Symbol.iterator](); !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
                          item = _step44.value;

                          if (item.dirtyCount == 0) {
                            // Safe to clear as dirty
                            itemsToClearAsDirty.push(item);
                          }
                        }

                        _context90.next = 12;
                        break;

                      case 8:
                        _context90.prev = 8;
                        _context90.t0 = _context90["catch"](4);
                        _didIteratorError44 = true;
                        _iteratorError44 = _context90.t0;

                      case 12:
                        _context90.prev = 12;
                        _context90.prev = 13;

                        if (!_iteratorNormalCompletion44 && _iterator44.return) {
                          _iterator44.return();
                        }

                      case 15:
                        _context90.prev = 15;

                        if (!_didIteratorError44) {
                          _context90.next = 18;
                          break;
                        }

                        throw _iteratorError44;

                      case 18:
                        return _context90.finish(15);

                      case 19:
                        return _context90.finish(12);

                      case 20:
                        this.modelManager.clearDirtyItems(itemsToClearAsDirty);
                        this.syncStatus.error = null; // Filter retrieved_items to remove any items that may be in saved_items for this complete sync operation
                        // When signing in, and a user requires many round trips to complete entire retrieval of data, an item may be saved
                        // on the first trip, then on subsequent trips using cursor_token, this same item may be returned, since it's date is
                        // greater than cursor_token. We keep track of all saved items in whole sync operation with this.allSavedItems
                        // We need this because singletonManager looks at retrievedItems as higher precendence than savedItems, but if it comes in both
                        // then that's problematic.

                        allSavedUUIDs = this.allSavedItems.map(function (item) {
                          return item.uuid;
                        });
                        response.retrieved_items = response.retrieved_items.filter(function (candidate) {
                          return !allSavedUUIDs.includes(candidate.uuid);
                        }); // Map retrieved items to local data
                        // Note that deleted items will not be returned

                        _context90.next = 26;
                        return this.handleItemsResponse(response.retrieved_items, null, SFModelManager.MappingSourceRemoteRetrieved, SFSyncManager.KeyRequestLoadSaveAccount);

                      case 26:
                        retrieved = _context90.sent; // Append items to master list of retrieved items for this ongoing sync operation

                        this.allRetreivedItems = this.allRetreivedItems.concat(retrieved);
                        this.syncStatus.retrievedCount = this.allRetreivedItems.length; // Merge only metadata for saved items
                        // we write saved items to disk now because it clears their dirty status then saves
                        // if we saved items before completion, we had have to save them as dirty and save them again on success as clean

                        omitFields = ["content", "auth_hash"]; // Map saved items to local data

                        _context90.next = 32;
                        return this.handleItemsResponse(response.saved_items, omitFields, SFModelManager.MappingSourceRemoteSaved, SFSyncManager.KeyRequestLoadSaveAccount);

                      case 32:
                        saved = _context90.sent; // Append items to master list of saved items for this ongoing sync operation

                        this.allSavedItems = this.allSavedItems.concat(saved); // Create copies of items or alternate their uuids if neccessary

                        unsaved = response.unsaved; // don't `await`. This function calls sync, so if you wait, it will call sync without having completed the sync we're in.
                        // On second thought, calling await will only await the local conflict resolution and not await the sync call.
                        // We do need to wait here for sync duplication to finish. If we don't, there seems to be an issue where if you import a large
                        // backup with uuid-conflcits (from another account), you'll see very confused duplication.

                        _context90.next = 37;
                        return this.handleUnsavedItemsResponse(unsaved);

                      case 37:
                        _context90.next = 39;
                        return this.writeItemsToLocalStorage(saved, false);

                      case 39:
                        _context90.next = 41;
                        return this.writeItemsToLocalStorage(retrieved, false);

                      case 41:
                        this.syncStatus.syncOpInProgress = false;
                        this.syncStatus.current += syncedItems.length;
                        this.syncStatusDidChange(); // set the sync token at the end, so that if any errors happen above, you can resync

                        this.setSyncToken(response.sync_token);
                        this.setCursorToken(response.cursor_token);
                        this.stopCheckingIfSyncIsTakingTooLong(); // if a cursor token is available, dont perform integrity calculation,
                        // as content is still on the server waiting to be downloaded

                        if (!(response.integrity_hash && !response.cursor_token)) {
                          _context90.next = 52;
                          break;
                        }

                        _context90.next = 50;
                        return this.handleServerIntegrityHash(response.integrity_hash);

                      case 50:
                        matches = _context90.sent;

                        if (!matches) {
                          // If the server hash doesn't match our local hash, we want to continue syncing until we reach
                          // the max discordance threshold
                          if (this.syncDiscordance < this.MaxDiscordanceBeforeOutOfSync) {
                            this.repeatOnCompletion = true;
                          }
                        }

                      case 52:
                        _context90.next = 54;
                        return this.getCursorToken();

                      case 54:
                        cursorToken = _context90.sent;

                        if (!(cursorToken || this.syncStatus.needsMoreSync)) {
                          _context90.next = 59;
                          break;
                        }

                        return _context90.abrupt("return", new Promise(function (resolve, reject) {
                          setTimeout(function () {
                            this.sync(options).then(resolve);
                          }.bind(_this23), 10); // wait 10ms to allow UI to update
                        }));

                      case 59:
                        if (!this.repeatOnCompletion) {
                          _context90.next = 64;
                          break;
                        }

                        this.repeatOnCompletion = false;
                        return _context90.abrupt("return", new Promise(function (resolve, reject) {
                          setTimeout(function () {
                            this.sync(options).then(resolve);
                          }.bind(_this23), 10); // wait 10ms to allow UI to update
                        }));

                      case 64:
                        /*
                        // await this.writeItemsToLocalStorage(this.allRetreivedItems, false);
                          We used to do this, but the problem is, if you're saving 2000 items at the end of a sign in,
                          then refresh or close the page, the items will not be saved, and the sync token will be the lastest.
                          So the data won't be downloaded again. Instead, we'll save retrieved as they come.
                        */
                        this.syncStatus.retrievedCount = 0;
                        this.syncStatusDidChange();

                        if (this.allRetreivedItems.length >= this.majorDataChangeThreshold || saved.length >= this.majorDataChangeThreshold || unsaved.length >= this.majorDataChangeThreshold) {
                          this.notifyEvent("major-data-change");
                        }

                        this.callQueuedCallbacks(response);
                        this.notifyEvent("sync:completed", {
                          retrievedItems: this.allRetreivedItems,
                          savedItems: this.allSavedItems,
                          unsavedItems: unsaved
                        });
                        this.allRetreivedItems = [];
                        this.allSavedItems = [];
                        return _context90.abrupt("return", response);

                      case 72:
                      case "end":
                        return _context90.stop();
                    }
                  }
                }, _callee90, this, [[4, 8, 12, 20], [13,, 15, 19]]);
              }));

              function handleSyncSuccess(_x111, _x112, _x113) {
                return _ref96.apply(this, arguments);
              }

              return handleSyncSuccess;
            }()
          }, {
            key: "handleSyncError",
            value: function () {
              var _ref97 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee91(response, statusCode, allDirtyItems) {
                return regeneratorRuntime.wrap(function _callee91$(_context91) {
                  while (1) {
                    switch (_context91.prev = _context91.next) {
                      case 0:
                        console.log("Sync error: ", response);

                        if (statusCode == 401) {
                          this.notifyEvent("sync-session-invalid");
                        }

                        if (!response) {
                          response = {
                            error: {
                              message: "Could not connect to server."
                            }
                          };
                        } else if (typeof response == 'string') {
                          response = {
                            error: {
                              message: response
                            }
                          };
                        }

                        this.syncStatus.syncOpInProgress = false;
                        this.syncStatus.error = response.error;
                        this.syncStatusDidChange();
                        this.writeItemsToLocalStorage(allDirtyItems, false);
                        this.modelManager.didSyncModelsOffline(allDirtyItems);
                        this.stopCheckingIfSyncIsTakingTooLong();
                        this.notifyEvent("sync:error", response.error);
                        this.callQueuedCallbacks({
                          error: "Sync error"
                        });
                        return _context91.abrupt("return", response);

                      case 12:
                      case "end":
                        return _context91.stop();
                    }
                  }
                }, _callee91, this);
              }));

              function handleSyncError(_x114, _x115, _x116) {
                return _ref97.apply(this, arguments);
              }

              return handleSyncError;
            }()
          }, {
            key: "handleItemsResponse",
            value: function () {
              var _ref98 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee92(responseItems, omitFields, source, keyRequest) {
                var keys, items, itemsWithErrorStatusChange;
                return regeneratorRuntime.wrap(function _callee92$(_context92) {
                  while (1) {
                    switch (_context92.prev = _context92.next) {
                      case 0:
                        _context92.next = 2;
                        return this.getActiveKeyInfo(keyRequest);

                      case 2:
                        keys = _context92.sent.keys;
                        _context92.next = 5;
                        return SFJS.itemTransformer.decryptMultipleItems(responseItems, keys);

                      case 5:
                        items = this.modelManager.mapResponseItemsToLocalModelsOmittingFields(responseItems, omitFields, source); // During the decryption process, items may be marked as "errorDecrypting". If so, we want to be sure
                        // to persist this new state by writing these items back to local storage. When an item's "errorDecrypting"
                        // flag is changed, its "errorDecryptingValueChanged" flag will be set, so we can find these items by filtering (then unsetting) below:

                        itemsWithErrorStatusChange = items.filter(function (item) {
                          var valueChanged = item.errorDecryptingValueChanged; // unset after consuming value

                          item.errorDecryptingValueChanged = false;
                          return valueChanged;
                        });

                        if (itemsWithErrorStatusChange.length > 0) {
                          this.writeItemsToLocalStorage(itemsWithErrorStatusChange, false);
                        }

                        return _context92.abrupt("return", items);

                      case 9:
                      case "end":
                        return _context92.stop();
                    }
                  }
                }, _callee92, this);
              }));

              function handleItemsResponse(_x117, _x118, _x119, _x120) {
                return _ref98.apply(this, arguments);
              }

              return handleItemsResponse;
            }()
          }, {
            key: "refreshErroredItems",
            value: function () {
              var _ref99 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee93() {
                var erroredItems;
                return regeneratorRuntime.wrap(function _callee93$(_context93) {
                  while (1) {
                    switch (_context93.prev = _context93.next) {
                      case 0:
                        erroredItems = this.modelManager.allNondummyItems.filter(function (item) {
                          return item.errorDecrypting == true;
                        });

                        if (!(erroredItems.length > 0)) {
                          _context93.next = 3;
                          break;
                        }

                        return _context93.abrupt("return", this.handleItemsResponse(erroredItems, null, SFModelManager.MappingSourceLocalRetrieved, SFSyncManager.KeyRequestLoadSaveAccount));

                      case 3:
                      case "end":
                        return _context93.stop();
                    }
                  }
                }, _callee93, this);
              }));

              function refreshErroredItems() {
                return _ref99.apply(this, arguments);
              }

              return refreshErroredItems;
            }()
          }, {
            key: "handleUnsavedItemsResponse",
            value: function () {
              var _ref100 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee94(unsaved) {
                var _iteratorNormalCompletion45, _didIteratorError45, _iteratorError45, _iterator45, _step45, mapping, itemResponse, item, error, dup;

                return regeneratorRuntime.wrap(function _callee94$(_context94) {
                  while (1) {
                    switch (_context94.prev = _context94.next) {
                      case 0:
                        if (!(unsaved.length == 0)) {
                          _context94.next = 2;
                          break;
                        }

                        return _context94.abrupt("return");

                      case 2:
                        console.log("Handle Conflicted Items:", unsaved);
                        _iteratorNormalCompletion45 = true;
                        _didIteratorError45 = false;
                        _iteratorError45 = undefined;
                        _context94.prev = 6;
                        _iterator45 = unsaved[Symbol.iterator]();

                      case 8:
                        if (_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done) {
                          _context94.next = 35;
                          break;
                        }

                        mapping = _step45.value;
                        itemResponse = mapping.item;
                        _context94.t0 = SFJS.itemTransformer;
                        _context94.t1 = [itemResponse];
                        _context94.next = 15;
                        return this.getActiveKeyInfo(SFSyncManager.KeyRequestLoadSaveAccount);

                      case 15:
                        _context94.t2 = _context94.sent.keys;
                        _context94.next = 18;
                        return _context94.t0.decryptMultipleItems.call(_context94.t0, _context94.t1, _context94.t2);

                      case 18:
                        item = this.modelManager.findItem(itemResponse.uuid); // Could be deleted

                        if (item) {
                          _context94.next = 21;
                          break;
                        }

                        return _context94.abrupt("continue", 32);

                      case 21:
                        error = mapping.error;

                        if (!(error.tag === "uuid_conflict")) {
                          _context94.next = 27;
                          break;
                        }

                        _context94.next = 25;
                        return this.modelManager.alternateUUIDForItem(item);

                      case 25:
                        _context94.next = 32;
                        break;

                      case 27:
                        if (!(error.tag === "sync_conflict")) {
                          _context94.next = 32;
                          break;
                        }

                        _context94.next = 30;
                        return this.modelManager.createConflictedItem(itemResponse);

                      case 30:
                        dup = _context94.sent;

                        if (!itemResponse.deleted && !item.isItemContentEqualWith(dup)) {
                          this.modelManager.addConflictedItem(dup, item);
                        }

                      case 32:
                        _iteratorNormalCompletion45 = true;
                        _context94.next = 8;
                        break;

                      case 35:
                        _context94.next = 41;
                        break;

                      case 37:
                        _context94.prev = 37;
                        _context94.t3 = _context94["catch"](6);
                        _didIteratorError45 = true;
                        _iteratorError45 = _context94.t3;

                      case 41:
                        _context94.prev = 41;
                        _context94.prev = 42;

                        if (!_iteratorNormalCompletion45 && _iterator45.return) {
                          _iterator45.return();
                        }

                      case 44:
                        _context94.prev = 44;

                        if (!_didIteratorError45) {
                          _context94.next = 47;
                          break;
                        }

                        throw _iteratorError45;

                      case 47:
                        return _context94.finish(44);

                      case 48:
                        return _context94.finish(41);

                      case 49:
                        // This will immediately result in "Sync op in progress" and sync will be queued.
                        // That's ok. You actually want a sync op in progress so that the new items are saved to disk right away.
                        // If you add a timeout here of 100ms, you'll avoid sync op in progress, but it will be a few ms before the items
                        // are saved to disk, meaning that the user may see All changes saved a few ms before changes are saved to disk.
                        // You could also just write to disk manually here, but syncing here is 100% sure to trigger sync op in progress as that's
                        // where it's being called from.
                        this.sync(null, {
                          additionalFields: ["created_at", "updated_at"]
                        });

                      case 50:
                      case "end":
                        return _context94.stop();
                    }
                  }
                }, _callee94, this, [[6, 37, 41, 49], [42,, 44, 48]]);
              }));

              function handleUnsavedItemsResponse(_x121) {
                return _ref100.apply(this, arguments);
              }

              return handleUnsavedItemsResponse;
            }()
            /*
              Executes a sync request with a blank sync token and high download limit. It will download all items,
              but won't do anything with them other than decrypting, creating respective objects, and returning them to caller. (it does not map them nor establish their relationships)
              The use case came primarly for clients who had ignored a certain content_type in sync, but later issued an update
              indicated they actually did want to start handling that content type. In that case, they would need to download all items
              freshly from the server.
            */

          }, {
            key: "stateless_downloadAllItems",
            value: function stateless_downloadAllItems() {
              var _this24 = this;

              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return new Promise(function () {
                var _ref101 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee96(resolve, reject) {
                  var params;
                  return regeneratorRuntime.wrap(function _callee96$(_context96) {
                    while (1) {
                      switch (_context96.prev = _context96.next) {
                        case 0:
                          params = {
                            limit: options.limit || 500,
                            sync_token: options.syncToken,
                            cursor_token: options.cursorToken,
                            content_type: options.contentType,
                            event: options.event
                          };
                          _context96.prev = 1;
                          _context96.t0 = _this24.httpManager;
                          _context96.next = 5;
                          return _this24.getSyncURL();

                        case 5:
                          _context96.t1 = _context96.sent;
                          _context96.t2 = params;

                          _context96.t3 = function () {
                            var _ref102 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee95(response) {
                              var incomingItems, keys;
                              return regeneratorRuntime.wrap(function _callee95$(_context95) {
                                while (1) {
                                  switch (_context95.prev = _context95.next) {
                                    case 0:
                                      if (!options.retrievedItems) {
                                        options.retrievedItems = [];
                                      }

                                      incomingItems = response.retrieved_items;
                                      _context95.next = 4;
                                      return _this24.getActiveKeyInfo(SFSyncManager.KeyRequestLoadSaveAccount);

                                    case 4:
                                      keys = _context95.sent.keys;
                                      _context95.next = 7;
                                      return SFJS.itemTransformer.decryptMultipleItems(incomingItems, keys);

                                    case 7:
                                      options.retrievedItems = options.retrievedItems.concat(incomingItems.map(function (incomingItem) {
                                        // Create model classes
                                        return _this24.modelManager.createItem(incomingItem, true
                                        /* dontNotifyObservers */
                                        );
                                      }));
                                      options.syncToken = response.sync_token;
                                      options.cursorToken = response.cursor_token;

                                      if (options.cursorToken) {
                                        _this24.stateless_downloadAllItems(options).then(resolve);
                                      } else {
                                        resolve(options.retrievedItems);
                                      }

                                    case 11:
                                    case "end":
                                      return _context95.stop();
                                  }
                                }
                              }, _callee95, _this24);
                            }));

                            return function (_x125) {
                              return _ref102.apply(this, arguments);
                            };
                          }();

                          _context96.t4 = function (response, statusCode) {
                            reject(response);
                          };

                          _context96.t0.postAbsolute.call(_context96.t0, _context96.t1, _context96.t2, _context96.t3, _context96.t4);

                          _context96.next = 16;
                          break;

                        case 12:
                          _context96.prev = 12;
                          _context96.t5 = _context96["catch"](1);
                          console.log("Download all items exception caught:", _context96.t5);
                          reject(_context96.t5);

                        case 16:
                        case "end":
                          return _context96.stop();
                      }
                    }
                  }, _callee96, _this24, [[1, 12]]);
                }));

                return function (_x123, _x124) {
                  return _ref101.apply(this, arguments);
                };
              }());
            }
          }, {
            key: "resolveOutOfSync",
            value: function () {
              var _ref103 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee98() {
                var _this25 = this;

                return regeneratorRuntime.wrap(function _callee98$(_context98) {
                  while (1) {
                    switch (_context98.prev = _context98.next) {
                      case 0:
                        return _context98.abrupt("return", this.stateless_downloadAllItems({
                          event: "resolve-out-of-sync"
                        }).then(function () {
                          var _ref104 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee97(downloadedItems) {
                            var itemsToMap, _iteratorNormalCompletion46, _didIteratorError46, _iteratorError46, _iterator46, _step46, downloadedItem, existingItem, contentDoesntMatch, duplicate;

                            return regeneratorRuntime.wrap(function _callee97$(_context97) {
                              while (1) {
                                switch (_context97.prev = _context97.next) {
                                  case 0:
                                    itemsToMap = [];
                                    _iteratorNormalCompletion46 = true;
                                    _didIteratorError46 = false;
                                    _iteratorError46 = undefined;
                                    _context97.prev = 4;
                                    _iterator46 = downloadedItems[Symbol.iterator]();

                                  case 6:
                                    if (_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done) {
                                      _context97.next = 20;
                                      break;
                                    }

                                    downloadedItem = _step46.value; // Note that deleted items will not be sent back by the server.

                                    existingItem = _this25.modelManager.findItem(downloadedItem.uuid);

                                    if (!existingItem) {
                                      _context97.next = 16;
                                      break;
                                    } // Check if the content differs. If it does, create a new item, and do not map downloadedItem.


                                    contentDoesntMatch = !downloadedItem.isItemContentEqualWith(existingItem);

                                    if (!contentDoesntMatch) {
                                      _context97.next = 16;
                                      break;
                                    }

                                    _context97.next = 14;
                                    return _this25.modelManager.createConflictedItem(existingItem, existingItem);

                                  case 14:
                                    duplicate = _context97.sent;

                                    _this25.modelManager.addConflictedItem(duplicate, existingItem);

                                  case 16:
                                    // Map the downloadedItem as authoritive content. If client copy at all differed, we would have created a duplicate of it above and synced it.
                                    // This is also neccessary to map the updated_at value from the server
                                    itemsToMap.push(downloadedItem);

                                  case 17:
                                    _iteratorNormalCompletion46 = true;
                                    _context97.next = 6;
                                    break;

                                  case 20:
                                    _context97.next = 26;
                                    break;

                                  case 22:
                                    _context97.prev = 22;
                                    _context97.t0 = _context97["catch"](4);
                                    _didIteratorError46 = true;
                                    _iteratorError46 = _context97.t0;

                                  case 26:
                                    _context97.prev = 26;
                                    _context97.prev = 27;

                                    if (!_iteratorNormalCompletion46 && _iterator46.return) {
                                      _iterator46.return();
                                    }

                                  case 29:
                                    _context97.prev = 29;

                                    if (!_didIteratorError46) {
                                      _context97.next = 32;
                                      break;
                                    }

                                    throw _iteratorError46;

                                  case 32:
                                    return _context97.finish(29);

                                  case 33:
                                    return _context97.finish(26);

                                  case 34:
                                    _this25.modelManager.mapResponseItemsToLocalModelsWithOptions({
                                      items: itemsToMap,
                                      source: SFModelManager.MappingSourceRemoteRetrieved
                                    }); // Save all items locally. Usually sync() would save downloaded items locally, but we're using stateless_sync here, so we have to do it manually


                                    _context97.next = 37;
                                    return _this25.writeItemsToLocalStorage(_this25.modelManager.allNondummyItems);

                                  case 37:
                                    return _context97.abrupt("return", _this25.sync({
                                      performIntegrityCheck: true
                                    }));

                                  case 38:
                                  case "end":
                                    return _context97.stop();
                                }
                              }
                            }, _callee97, _this25, [[4, 22, 26, 34], [27,, 29, 33]]);
                          }));

                          return function (_x126) {
                            return _ref104.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context98.stop();
                    }
                  }
                }, _callee98, this);
              }));

              function resolveOutOfSync() {
                return _ref103.apply(this, arguments);
              }

              return resolveOutOfSync;
            }()
          }, {
            key: "handleSignout",
            value: function () {
              var _ref105 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee99() {
                return regeneratorRuntime.wrap(function _callee99$(_context99) {
                  while (1) {
                    switch (_context99.prev = _context99.next) {
                      case 0:
                        this._syncToken = null;
                        this._cursorToken = null;
                        this._queuedCallbacks = [];
                        this.syncStatus = {};

                      case 4:
                      case "end":
                        return _context99.stop();
                    }
                  }
                }, _callee99, this);
              }));

              function handleSignout() {
                return _ref105.apply(this, arguments);
              }

              return handleSignout;
            }()
          }, {
            key: "clearSyncToken",
            value: function () {
              var _ref106 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee100() {
                return regeneratorRuntime.wrap(function _callee100$(_context100) {
                  while (1) {
                    switch (_context100.prev = _context100.next) {
                      case 0:
                        this._syncToken = null;
                        this._cursorToken = null;
                        return _context100.abrupt("return", this.storageManager.removeItem("syncToken"));

                      case 3:
                      case "end":
                        return _context100.stop();
                    }
                  }
                }, _callee100, this);
              }));

              function clearSyncToken() {
                return _ref106.apply(this, arguments);
              }

              return clearSyncToken;
            }()
          }, {
            key: "queuedCallbacks",
            get: function get() {
              if (!this._queuedCallbacks) {
                this._queuedCallbacks = [];
              }

              return this._queuedCallbacks;
            }
          }]);

          return SFSyncManager;
        }();

        ;
        var dateFormatter;

        var SFItem = exports.SFItem = function () {
          function SFItem() {
            var json_obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, SFItem);

            this.content = {};
            this.referencingObjects = [];
            this.updateFromJSON(json_obj);

            if (!this.uuid) {
              // on React Native, this method will not exist. UUID gen will be handled manually via async methods.
              if (typeof SFJS !== "undefined" && SFJS.crypto.generateUUIDSync) {
                this.uuid = SFJS.crypto.generateUUIDSync();
              }
            }

            if (_typeof(this.content) === 'object' && !this.content.references) {
              this.content.references = [];
            }
          } // On some platforms, syncrounous uuid generation is not available.
          // Those platforms (mobile) must call this function manually.


          _createClass(SFItem, [{
            key: "initUUID",
            value: function () {
              var _ref107 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee101() {
                return regeneratorRuntime.wrap(function _callee101$(_context101) {
                  while (1) {
                    switch (_context101.prev = _context101.next) {
                      case 0:
                        if (this.uuid) {
                          _context101.next = 4;
                          break;
                        }

                        _context101.next = 3;
                        return SFJS.crypto.generateUUID();

                      case 3:
                        this.uuid = _context101.sent;

                      case 4:
                      case "end":
                        return _context101.stop();
                    }
                  }
                }, _callee101, this);
              }));

              function initUUID() {
                return _ref107.apply(this, arguments);
              }

              return initUUID;
            }()
          }, {
            key: "updateFromJSON",
            value: function updateFromJSON(json) {
              // Don't expect this to ever be the case but we're having a crash with Android and this is the only suspect.
              if (!json) {
                return;
              } // Manually merge top level data instead of wholesale merge


              this.created_at = json.created_at;
              this.updated_at = json.updated_at;
              this.deleted = json.deleted;
              this.uuid = json.uuid;
              this.enc_item_key = json.enc_item_key;
              this.auth_hash = json.auth_hash;
              this.auth_params = json.auth_params; // When updating from server response (as opposed to local json response), these keys will be missing.
              // So we only want to update these values if they are explicitly present.

              var clientKeys = ["errorDecrypting", "dirty", "dirtyCount", "dummy"];
              var _iteratorNormalCompletion47 = true;
              var _didIteratorError47 = false;
              var _iteratorError47 = undefined;

              try {
                for (var _iterator47 = clientKeys[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
                  var key = _step47.value;

                  if (json[key] !== undefined) {
                    this[key] = json[key];
                  }
                } // Check if object has getter for content_type, and if so, skip

              } catch (err) {
                _didIteratorError47 = true;
                _iteratorError47 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion47 && _iterator47.return) {
                    _iterator47.return();
                  }
                } finally {
                  if (_didIteratorError47) {
                    throw _iteratorError47;
                  }
                }
              }

              if (!this.content_type) {
                this.content_type = json.content_type;
              } // this.content = json.content will copy it by reference rather than value. So we need to do a deep merge after.
              // json.content can still be a string here. We copy it to this.content, then do a deep merge to transfer over all values.


              if (json.errorDecrypting) {
                this.content = json.content;
              } else {
                try {
                  var parsedContent = typeof json.content === 'string' ? JSON.parse(json.content) : json.content;
                  SFItem.deepMerge(this.contentObject, parsedContent);
                } catch (e) {
                  console.log("Error while updating item from json", e);
                }
              }

              if (this.created_at) {
                this.created_at = new Date(this.created_at);
                this.updated_at = new Date(this.updated_at);
              } else {
                this.created_at = new Date();
                this.updated_at = new Date();
              } // Allows the getter to be re-invoked


              this._client_updated_at = null;

              if (json.content) {
                this.mapContentToLocalProperties(this.contentObject);
              } else if (json.deleted == true) {
                this.handleDeletedContent();
              }
            }
          }, {
            key: "mapContentToLocalProperties",
            value: function mapContentToLocalProperties(contentObj) {}
          }, {
            key: "createContentJSONFromProperties",
            value: function createContentJSONFromProperties() {
              /*
              NOTE: This function does have side effects and WILL modify our content.
               Subclasses will override structureParams, and add their own custom content and properties to the object returned from structureParams
              These are properties that this superclass will not be aware of, like 'title' or 'text'
               When we call createContentJSONFromProperties, we want to update our own inherit 'content' field with the values returned from structureParams,
              so that our content field is up to date.
               Each subclass will call super.structureParams and merge it with its own custom result object.
              Since our own structureParams gets a real-time copy of our content, it should be safe to merge the aggregate value back into our own content field.
              */
              var content = this.structureParams();
              SFItem.deepMerge(this.contentObject, content); // Return the content item copy and not our actual value, as we don't want it to be mutated outside our control.

              return content;
            }
          }, {
            key: "structureParams",
            value: function structureParams() {
              return this.getContentCopy();
            }
            /* Allows the item to handle the case where the item is deleted and the content is null */

          }, {
            key: "handleDeletedContent",
            value: function handleDeletedContent() {// Subclasses can override
            }
          }, {
            key: "setDirty",
            value: function setDirty(dirty, dontUpdateClientDate) {
              this.dirty = dirty; // Allows the syncManager to check if an item has been marked dirty after a sync has been started
              // This prevents it from clearing it as a dirty item after sync completion, if someone else has marked it dirty
              // again after an ongoing sync.

              if (!this.dirtyCount) {
                this.dirtyCount = 0;
              }

              if (dirty) {
                this.dirtyCount++;
              } else {
                this.dirtyCount = 0;
              }

              if (dirty && !dontUpdateClientDate) {
                // Set the client modified date to now if marking the item as dirty
                this.client_updated_at = new Date();
              } else if (!this.hasRawClientUpdatedAtValue()) {
                // copy updated_at
                this.client_updated_at = new Date(this.updated_at);
              }
            }
          }, {
            key: "updateLocalRelationships",
            value: function updateLocalRelationships() {// optional override
            }
          }, {
            key: "addItemAsRelationship",
            value: function addItemAsRelationship(item) {
              item.setIsBeingReferencedBy(this);

              if (this.hasRelationshipWithItem(item)) {
                return;
              }

              var references = this.content.references || [];
              references.push({
                uuid: item.uuid,
                content_type: item.content_type
              });
              this.content.references = references;
            }
          }, {
            key: "removeItemAsRelationship",
            value: function removeItemAsRelationship(item) {
              item.setIsNoLongerBeingReferencedBy(this);
              this.removeReferenceWithUuid(item.uuid);
            } // When another object has a relationship with us, we push that object into memory here.
            // We use this so that when `this` is deleted, we're able to update the references of those other objects.

          }, {
            key: "setIsBeingReferencedBy",
            value: function setIsBeingReferencedBy(item) {
              if (!_.find(this.referencingObjects, {
                uuid: item.uuid
              })) {
                this.referencingObjects.push(item);
              }
            }
          }, {
            key: "setIsNoLongerBeingReferencedBy",
            value: function setIsNoLongerBeingReferencedBy(item) {
              _.remove(this.referencingObjects, {
                uuid: item.uuid
              }); // Legacy two-way relationships should be handled here


              if (this.hasRelationshipWithItem(item)) {
                this.removeReferenceWithUuid(item.uuid); // We really shouldn't have the authority to set this item as dirty, but it's the only way to save this change.

                this.setDirty(true);
              }
            }
          }, {
            key: "removeReferenceWithUuid",
            value: function removeReferenceWithUuid(uuid) {
              var references = this.content.references || [];
              references = references.filter(function (r) {
                return r.uuid != uuid;
              });
              this.content.references = references;
            }
          }, {
            key: "hasRelationshipWithItem",
            value: function hasRelationshipWithItem(item) {
              var target = this.content.references.find(function (r) {
                return r.uuid == item.uuid;
              });
              return target != null;
            }
          }, {
            key: "isBeingRemovedLocally",
            value: function isBeingRemovedLocally() {}
          }, {
            key: "didFinishSyncing",
            value: function didFinishSyncing() {}
          }, {
            key: "informReferencesOfUUIDChange",
            value: function informReferencesOfUUIDChange(oldUUID, newUUID) {// optional override
            }
          }, {
            key: "potentialItemOfInterestHasChangedItsUUID",
            value: function potentialItemOfInterestHasChangedItsUUID(newItem, oldUUID, newUUID) {
              // optional override
              var _iteratorNormalCompletion48 = true;
              var _didIteratorError48 = false;
              var _iteratorError48 = undefined;

              try {
                for (var _iterator48 = this.content.references[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
                  var reference = _step48.value;

                  if (reference.uuid == oldUUID) {
                    reference.uuid = newUUID;
                    this.setDirty(true);
                  }
                }
              } catch (err) {
                _didIteratorError48 = true;
                _iteratorError48 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion48 && _iterator48.return) {
                    _iterator48.return();
                  }
                } finally {
                  if (_didIteratorError48) {
                    throw _iteratorError48;
                  }
                }
              }
            }
          }, {
            key: "doNotEncrypt",
            value: function doNotEncrypt() {
              return false;
            }
            /*
            App Data
            */

          }, {
            key: "setDomainDataItem",
            value: function setDomainDataItem(key, value, domain) {
              if (!domain) {
                console.error("SFItem.AppDomain needs to be set.");
                return;
              }

              if (this.errorDecrypting) {
                return;
              }

              if (!this.content.appData) {
                this.content.appData = {};
              }

              var data = this.content.appData[domain];

              if (!data) {
                data = {};
              }

              data[key] = value;
              this.content.appData[domain] = data;
            }
          }, {
            key: "getDomainDataItem",
            value: function getDomainDataItem(key, domain) {
              if (!domain) {
                console.error("SFItem.AppDomain needs to be set.");
                return;
              }

              if (this.errorDecrypting) {
                return;
              }

              if (!this.content.appData) {
                this.content.appData = {};
              }

              var data = this.content.appData[domain];

              if (data) {
                return data[key];
              } else {
                return null;
              }
            }
          }, {
            key: "setAppDataItem",
            value: function setAppDataItem(key, value) {
              this.setDomainDataItem(key, value, SFItem.AppDomain);
            }
          }, {
            key: "getAppDataItem",
            value: function getAppDataItem(key) {
              return this.getDomainDataItem(key, SFItem.AppDomain);
            }
          }, {
            key: "hasRawClientUpdatedAtValue",
            value: function hasRawClientUpdatedAtValue() {
              return this.getAppDataItem("client_updated_at") != null;
            }
          }, {
            key: "keysToIgnoreWhenCheckingContentEquality",

            /*
              During sync conflicts, when determing whether to create a duplicate for an item, we can omit keys that have no
              meaningful weight and can be ignored. For example, if one component has active = true and another component has active = false,
              it would be silly to duplicate them, so instead we ignore this.
             */
            value: function keysToIgnoreWhenCheckingContentEquality() {
              return [];
            } // Same as above, but keys inside appData[Item.AppDomain]

          }, {
            key: "appDataKeysToIgnoreWhenCheckingContentEquality",
            value: function appDataKeysToIgnoreWhenCheckingContentEquality() {
              return ["client_updated_at"];
            }
          }, {
            key: "getContentCopy",
            value: function getContentCopy() {
              var contentCopy = JSON.parse(JSON.stringify(this.content));
              return contentCopy;
            }
          }, {
            key: "isItemContentEqualWith",
            value: function isItemContentEqualWith(otherItem) {
              var omit = function omit(obj, keys) {
                if (!obj) {
                  return obj;
                }

                var _iteratorNormalCompletion49 = true;
                var _didIteratorError49 = false;
                var _iteratorError49 = undefined;

                try {
                  for (var _iterator49 = keys[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
                    var key = _step49.value;
                    delete obj[key];
                  }
                } catch (err) {
                  _didIteratorError49 = true;
                  _iteratorError49 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion49 && _iterator49.return) {
                      _iterator49.return();
                    }
                  } finally {
                    if (_didIteratorError49) {
                      throw _iteratorError49;
                    }
                  }
                }

                return obj;
              }; // Create copies of objects before running omit as not to modify source values directly.


              var leftContent = this.getContentCopy();

              if (leftContent.appData) {
                omit(leftContent.appData[SFItem.AppDomain], this.appDataKeysToIgnoreWhenCheckingContentEquality());
              }

              leftContent = omit(leftContent, this.keysToIgnoreWhenCheckingContentEquality());
              var rightContent = otherItem.getContentCopy();

              if (rightContent.appData) {
                omit(rightContent.appData[SFItem.AppDomain], otherItem.appDataKeysToIgnoreWhenCheckingContentEquality());
              }

              rightContent = omit(rightContent, otherItem.keysToIgnoreWhenCheckingContentEquality());
              return JSON.stringify(leftContent) === JSON.stringify(rightContent);
            }
          }, {
            key: "satisfiesPredicate",
            value: function satisfiesPredicate(predicate) {
              /*
              Predicate is an SFPredicate having properties:
              {
                keypath: String,
                operator: String,
                value: object
              }
               */
              return SFPredicate.ItemSatisfiesPredicate(this, predicate);
            }
            /*
            Dates
            */

          }, {
            key: "createdAtString",
            value: function createdAtString() {
              return this.dateToLocalizedString(this.created_at);
            }
          }, {
            key: "updatedAtString",
            value: function updatedAtString() {
              return this.dateToLocalizedString(this.client_updated_at);
            }
          }, {
            key: "updatedAtTimestamp",
            value: function updatedAtTimestamp() {
              return this.updated_at.getTime();
            }
          }, {
            key: "dateToLocalizedString",
            value: function dateToLocalizedString(date) {
              if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
                if (!dateFormatter) {
                  var locale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
                  dateFormatter = new Intl.DateTimeFormat(locale, {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    weekday: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                  });
                }

                return dateFormatter.format(date);
              } else {
                // IE < 11, Safari <= 9.0.
                // In English, this generates the string most similar to
                // the toLocaleDateString() result above.
                return date.toDateString() + ' ' + date.toLocaleTimeString();
              }
            }
          }, {
            key: "contentObject",
            get: function get() {
              if (this.errorDecrypting) {
                return this.content;
              }

              if (!this.content) {
                this.content = {};
                return this.content;
              }

              if (this.content !== null && _typeof(this.content) === 'object') {
                // this is the case when mapping localStorage content, in which case the content is already parsed
                return this.content;
              }

              try {
                var content = JSON.parse(this.content);
                this.content = content;
                return this.content;
              } catch (e) {
                console.log("Error parsing json", e, this);
                this.content = {};
                return this.content;
              }
            }
          }, {
            key: "pinned",
            get: function get() {
              return this.getAppDataItem("pinned");
            }
          }, {
            key: "archived",
            get: function get() {
              return this.getAppDataItem("archived");
            }
          }, {
            key: "locked",
            get: function get() {
              return this.getAppDataItem("locked");
            } // May be used by clients to display the human readable type for this item. Should be overriden by subclasses.

          }, {
            key: "displayName",
            get: function get() {
              return "Item";
            }
          }, {
            key: "client_updated_at",
            get: function get() {
              if (!this._client_updated_at) {
                var saved = this.getAppDataItem("client_updated_at");

                if (saved) {
                  this._client_updated_at = new Date(saved);
                } else {
                  this._client_updated_at = new Date(this.updated_at);
                }
              }

              return this._client_updated_at;
            },
            set: function set(date) {
              this._client_updated_at = date;
              this.setAppDataItem("client_updated_at", date);
            }
          }], [{
            key: "deepMerge",
            value: function deepMerge(a, b) {
              // By default _.merge will not merge a full array with an empty one.
              // We want to replace arrays wholesale
              function mergeCopyArrays(objValue, srcValue) {
                if (_.isArray(objValue)) {
                  return srcValue;
                }
              }

              _.mergeWith(a, b, mergeCopyArrays);

              return a;
            }
          }]);

          return SFItem;
        }();

        ;

        var SFItemParams = exports.SFItemParams = function () {
          function SFItemParams(item, keys, auth_params) {
            _classCallCheck(this, SFItemParams);

            this.item = item;
            this.keys = keys;
            this.auth_params = auth_params;

            if (this.keys && !this.auth_params) {
              throw "SFItemParams.auth_params must be supplied if supplying keys.";
            }

            if (this.auth_params && !this.auth_params.version) {
              throw "SFItemParams.auth_params is missing version";
            }
          }

          _createClass(SFItemParams, [{
            key: "paramsForExportFile",
            value: function () {
              var _ref108 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee102(includeDeleted) {
                var result;
                return regeneratorRuntime.wrap(function _callee102$(_context102) {
                  while (1) {
                    switch (_context102.prev = _context102.next) {
                      case 0:
                        this.additionalFields = ["updated_at"];
                        this.forExportFile = true;

                        if (!includeDeleted) {
                          _context102.next = 6;
                          break;
                        }

                        return _context102.abrupt("return", this.__params());

                      case 6:
                        _context102.next = 8;
                        return this.__params();

                      case 8:
                        result = _context102.sent;
                        return _context102.abrupt("return", _.omit(result, ["deleted"]));

                      case 10:
                      case "end":
                        return _context102.stop();
                    }
                  }
                }, _callee102, this);
              }));

              function paramsForExportFile(_x128) {
                return _ref108.apply(this, arguments);
              }

              return paramsForExportFile;
            }()
          }, {
            key: "paramsForExtension",
            value: function () {
              var _ref109 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee103() {
                return regeneratorRuntime.wrap(function _callee103$(_context103) {
                  while (1) {
                    switch (_context103.prev = _context103.next) {
                      case 0:
                        return _context103.abrupt("return", this.paramsForExportFile());

                      case 1:
                      case "end":
                        return _context103.stop();
                    }
                  }
                }, _callee103, this);
              }));

              function paramsForExtension() {
                return _ref109.apply(this, arguments);
              }

              return paramsForExtension;
            }()
          }, {
            key: "paramsForLocalStorage",
            value: function () {
              var _ref110 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee104() {
                return regeneratorRuntime.wrap(function _callee104$(_context104) {
                  while (1) {
                    switch (_context104.prev = _context104.next) {
                      case 0:
                        this.additionalFields = ["updated_at", "dirty", "errorDecrypting"];
                        this.forExportFile = true;
                        return _context104.abrupt("return", this.__params());

                      case 3:
                      case "end":
                        return _context104.stop();
                    }
                  }
                }, _callee104, this);
              }));

              function paramsForLocalStorage() {
                return _ref110.apply(this, arguments);
              }

              return paramsForLocalStorage;
            }()
          }, {
            key: "paramsForSync",
            value: function () {
              var _ref111 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee105() {
                return regeneratorRuntime.wrap(function _callee105$(_context105) {
                  while (1) {
                    switch (_context105.prev = _context105.next) {
                      case 0:
                        return _context105.abrupt("return", this.__params());

                      case 1:
                      case "end":
                        return _context105.stop();
                    }
                  }
                }, _callee105, this);
              }));

              function paramsForSync() {
                return _ref111.apply(this, arguments);
              }

              return paramsForSync;
            }()
          }, {
            key: "__params",
            value: function () {
              var _ref112 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee106() {
                var params, doNotEncrypt, encryptedParams;
                return regeneratorRuntime.wrap(function _callee106$(_context106) {
                  while (1) {
                    switch (_context106.prev = _context106.next) {
                      case 0:
                        params = {
                          uuid: this.item.uuid,
                          content_type: this.item.content_type,
                          deleted: this.item.deleted,
                          created_at: this.item.created_at
                        };

                        if (this.item.errorDecrypting) {
                          _context106.next = 23;
                          break;
                        } // Items should always be encrypted for export files. Only respect item.doNotEncrypt for remote sync params.


                        doNotEncrypt = this.item.doNotEncrypt() && !this.forExportFile;

                        if (!(this.keys && !doNotEncrypt)) {
                          _context106.next = 11;
                          break;
                        }

                        _context106.next = 6;
                        return SFJS.itemTransformer.encryptItem(this.item, this.keys, this.auth_params);

                      case 6:
                        encryptedParams = _context106.sent;

                        _.merge(params, encryptedParams);

                        if (this.auth_params.version !== "001") {
                          params.auth_hash = null;
                        }

                        _context106.next = 21;
                        break;

                      case 11:
                        if (!this.forExportFile) {
                          _context106.next = 15;
                          break;
                        }

                        _context106.t0 = this.item.createContentJSONFromProperties();
                        _context106.next = 19;
                        break;

                      case 15:
                        _context106.next = 17;
                        return SFJS.crypto.base64(JSON.stringify(this.item.createContentJSONFromProperties()));

                      case 17:
                        _context106.t1 = _context106.sent;
                        _context106.t0 = "000" + _context106.t1;

                      case 19:
                        params.content = _context106.t0;

                        if (!this.forExportFile) {
                          params.enc_item_key = null;
                          params.auth_hash = null;
                        }

                      case 21:
                        _context106.next = 26;
                        break;

                      case 23:
                        // Error decrypting, keep "content" and related fields as is (and do not try to encrypt, otherwise that would be undefined behavior)
                        params.content = this.item.content;
                        params.enc_item_key = this.item.enc_item_key;
                        params.auth_hash = this.item.auth_hash;

                      case 26:
                        if (this.additionalFields) {
                          _.merge(params, _.pick(this.item, this.additionalFields));
                        }

                        return _context106.abrupt("return", params);

                      case 28:
                      case "end":
                        return _context106.stop();
                    }
                  }
                }, _callee106, this);
              }));

              function __params() {
                return _ref112.apply(this, arguments);
              }

              return __params;
            }()
          }]);

          return SFItemParams;
        }();

        ;

        var SFPredicate = exports.SFPredicate = function () {
          function SFPredicate(keypath, operator, value) {
            _classCallCheck(this, SFPredicate);

            this.keypath = keypath;
            this.operator = operator;
            this.value = value; // Preprocessing to make predicate evaluation faster.
            // Won't recurse forever, but with arbitrarily large input could get stuck. Hope there are input size limits
            // somewhere else.

            if (SFPredicate.IsRecursiveOperator(this.operator)) {
              this.value = this.value.map(SFPredicate.fromArray);
            }
          }

          _createClass(SFPredicate, null, [{
            key: "fromArray",
            value: function fromArray(array) {
              return new SFPredicate(array[0], array[1], array[2]);
            }
          }, {
            key: "ObjectSatisfiesPredicate",
            value: function ObjectSatisfiesPredicate(object, predicate) {
              // Predicates may not always be created using the official constructor
              // so if it's still an array here, convert to object
              if (Array.isArray(predicate)) {
                predicate = this.fromArray(predicate);
              }

              if (SFPredicate.IsRecursiveOperator(predicate.operator)) {
                if (predicate.operator === "and") {
                  var _iteratorNormalCompletion50 = true;
                  var _didIteratorError50 = false;
                  var _iteratorError50 = undefined;

                  try {
                    for (var _iterator50 = predicate.value[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
                      var subPredicate = _step50.value;

                      if (!this.ObjectSatisfiesPredicate(object, subPredicate)) {
                        return false;
                      }
                    }
                  } catch (err) {
                    _didIteratorError50 = true;
                    _iteratorError50 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion50 && _iterator50.return) {
                        _iterator50.return();
                      }
                    } finally {
                      if (_didIteratorError50) {
                        throw _iteratorError50;
                      }
                    }
                  }

                  return true;
                }

                if (predicate.operator === "or") {
                  var _iteratorNormalCompletion51 = true;
                  var _didIteratorError51 = false;
                  var _iteratorError51 = undefined;

                  try {
                    for (var _iterator51 = predicate.value[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
                      var subPredicate = _step51.value;

                      if (this.ObjectSatisfiesPredicate(object, subPredicate)) {
                        return true;
                      }
                    }
                  } catch (err) {
                    _didIteratorError51 = true;
                    _iteratorError51 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion51 && _iterator51.return) {
                        _iterator51.return();
                      }
                    } finally {
                      if (_didIteratorError51) {
                        throw _iteratorError51;
                      }
                    }
                  }

                  return false;
                }
              }

              var predicateValue = predicate.value;

              if (typeof predicateValue == 'string' && predicateValue.includes(".ago")) {
                predicateValue = this.DateFromString(predicateValue);
              }

              var valueAtKeyPath = predicate.keypath.split('.').reduce(function (previous, current) {
                return previous && previous[current];
              }, object);
              var falseyValues = [false, "", null, undefined, NaN]; // If the value at keyPath is undefined, either because the property is nonexistent or the value is null.

              if (valueAtKeyPath == undefined) {
                if (predicate.operator == "!=") {
                  return !falseyValues.includes(predicate.value);
                } else {
                  return falseyValues.includes(predicate.value);
                }
              }

              if (predicate.operator == "=") {
                // Use array comparison
                if (Array.isArray(valueAtKeyPath)) {
                  return JSON.stringify(valueAtKeyPath) == JSON.stringify(predicateValue);
                } else {
                  return valueAtKeyPath == predicateValue;
                }
              } else if (predicate.operator == "!=") {
                // Use array comparison
                if (Array.isArray(valueAtKeyPath)) {
                  return JSON.stringify(valueAtKeyPath) != JSON.stringify(predicateValue);
                } else {
                  return valueAtKeyPath !== predicateValue;
                }
              } else if (predicate.operator == "<") {
                return valueAtKeyPath < predicateValue;
              } else if (predicate.operator == ">") {
                return valueAtKeyPath > predicateValue;
              } else if (predicate.operator == "<=") {
                return valueAtKeyPath <= predicateValue;
              } else if (predicate.operator == ">=") {
                return valueAtKeyPath >= predicateValue;
              } else if (predicate.operator == "startsWith") {
                return valueAtKeyPath.startsWith(predicateValue);
              } else if (predicate.operator == "in") {
                return predicateValue.indexOf(valueAtKeyPath) != -1;
              } else if (predicate.operator == "includes") {
                return this.resolveIncludesPredicate(valueAtKeyPath, predicateValue);
              } else if (predicate.operator == "matches") {
                var regex = new RegExp(predicateValue);
                return regex.test(valueAtKeyPath);
              }

              return false;
            }
          }, {
            key: "resolveIncludesPredicate",
            value: function resolveIncludesPredicate(valueAtKeyPath, predicateValue) {
              // includes can be a string  or a predicate (in array form)
              if (typeof predicateValue == 'string') {
                // if string, simply check if the valueAtKeyPath includes the predicate value
                return valueAtKeyPath.includes(predicateValue);
              } else {
                // is a predicate array or predicate object
                var innerPredicate;

                if (Array.isArray(predicateValue)) {
                  innerPredicate = SFPredicate.fromArray(predicateValue);
                } else {
                  innerPredicate = predicateValue;
                }

                var _iteratorNormalCompletion52 = true;
                var _didIteratorError52 = false;
                var _iteratorError52 = undefined;

                try {
                  for (var _iterator52 = valueAtKeyPath[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
                    var obj = _step52.value;

                    if (this.ObjectSatisfiesPredicate(obj, innerPredicate)) {
                      return true;
                    }
                  }
                } catch (err) {
                  _didIteratorError52 = true;
                  _iteratorError52 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion52 && _iterator52.return) {
                      _iterator52.return();
                    }
                  } finally {
                    if (_didIteratorError52) {
                      throw _iteratorError52;
                    }
                  }
                }

                return false;
              }
            }
          }, {
            key: "ItemSatisfiesPredicate",
            value: function ItemSatisfiesPredicate(item, predicate) {
              if (Array.isArray(predicate)) {
                predicate = SFPredicate.fromArray(predicate);
              }

              return this.ObjectSatisfiesPredicate(item, predicate);
            }
          }, {
            key: "ItemSatisfiesPredicates",
            value: function ItemSatisfiesPredicates(item, predicates) {
              var _iteratorNormalCompletion53 = true;
              var _didIteratorError53 = false;
              var _iteratorError53 = undefined;

              try {
                for (var _iterator53 = predicates[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
                  var predicate = _step53.value;

                  if (!this.ItemSatisfiesPredicate(item, predicate)) {
                    return false;
                  }
                }
              } catch (err) {
                _didIteratorError53 = true;
                _iteratorError53 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion53 && _iterator53.return) {
                    _iterator53.return();
                  }
                } finally {
                  if (_didIteratorError53) {
                    throw _iteratorError53;
                  }
                }
              }

              return true;
            }
          }, {
            key: "DateFromString",
            value: function DateFromString(string) {
              // x.days.ago, x.hours.ago
              var comps = string.split(".");
              var unit = comps[1];
              var date = new Date();
              var offset = parseInt(comps[0]);

              if (unit == "days") {
                date.setDate(date.getDate() - offset);
              } else if (unit == "hours") {
                date.setHours(date.getHours() - offset);
              }

              return date;
            }
          }, {
            key: "IsRecursiveOperator",
            value: function IsRecursiveOperator(operator) {
              return ["and", "or"].includes(operator);
            }
          }]);

          return SFPredicate;
        }();

        ;

        var SFPrivileges = exports.SFPrivileges = function (_SFItem) {
          _inherits(SFPrivileges, _SFItem);

          _createClass(SFPrivileges, null, [{
            key: "contentType",
            value: function contentType() {
              // It has prefix SN since it was originally imported from SN codebase
              return "SN|Privileges";
            }
          }]);

          function SFPrivileges(json_obj) {
            _classCallCheck(this, SFPrivileges);

            var _this26 = _possibleConstructorReturn(this, (SFPrivileges.__proto__ || Object.getPrototypeOf(SFPrivileges)).call(this, json_obj));

            if (!_this26.content.desktopPrivileges) {
              _this26.content.desktopPrivileges = {};
            }

            return _this26;
          }

          _createClass(SFPrivileges, [{
            key: "setCredentialsForAction",
            value: function setCredentialsForAction(action, credentials) {
              this.content.desktopPrivileges[action] = credentials;
            }
          }, {
            key: "getCredentialsForAction",
            value: function getCredentialsForAction(action) {
              return this.content.desktopPrivileges[action] || [];
            }
          }, {
            key: "toggleCredentialForAction",
            value: function toggleCredentialForAction(action, credential) {
              if (this.isCredentialRequiredForAction(action, credential)) {
                this.removeCredentialForAction(action, credential);
              } else {
                this.addCredentialForAction(action, credential);
              }
            }
          }, {
            key: "removeCredentialForAction",
            value: function removeCredentialForAction(action, credential) {
              _.pull(this.content.desktopPrivileges[action], credential);
            }
          }, {
            key: "addCredentialForAction",
            value: function addCredentialForAction(action, credential) {
              var credentials = this.getCredentialsForAction(action);
              credentials.push(credential);
              this.setCredentialsForAction(action, credentials);
            }
          }, {
            key: "isCredentialRequiredForAction",
            value: function isCredentialRequiredForAction(action, credential) {
              var credentialsRequired = this.getCredentialsForAction(action);
              return credentialsRequired.includes(credential);
            }
          }]);

          return SFPrivileges;
        }(SFItem);

        ;
        /*
         Important: This is the only object in the session history domain that is persistable.
          A history session contains one main content object:
         the itemUUIDToItemHistoryMapping. This is a dictionary whose keys are item uuids,
         and each value is an SFItemHistory object.
          Each SFItemHistory object contains an array called `entires` which contain `SFItemHistory` entries (or subclasses, if the
         `SFItemHistory.HistoryEntryClassMapping` class property value is set.)
        */
        // See default class values at bottom of this file, including `SFHistorySession.LargeItemEntryAmountThreshold`.

        var SFHistorySession = exports.SFHistorySession = function (_SFItem2) {
          _inherits(SFHistorySession, _SFItem2);

          function SFHistorySession(json_obj) {
            _classCallCheck(this, SFHistorySession);
            /*
              Our .content params:
              {
                itemUUIDToItemHistoryMapping
              }
             */


            var _this27 = _possibleConstructorReturn(this, (SFHistorySession.__proto__ || Object.getPrototypeOf(SFHistorySession)).call(this, json_obj));

            if (!_this27.content.itemUUIDToItemHistoryMapping) {
              _this27.content.itemUUIDToItemHistoryMapping = {};
            } // When initializing from a json_obj, we want to deserialize the item history JSON into SFItemHistory objects.


            var uuids = Object.keys(_this27.content.itemUUIDToItemHistoryMapping);
            uuids.forEach(function (itemUUID) {
              var itemHistory = _this27.content.itemUUIDToItemHistoryMapping[itemUUID];
              _this27.content.itemUUIDToItemHistoryMapping[itemUUID] = new SFItemHistory(itemHistory);
            });
            return _this27;
          }

          _createClass(SFHistorySession, [{
            key: "addEntryForItem",
            value: function addEntryForItem(item) {
              var itemHistory = this.historyForItem(item);
              var entry = itemHistory.addHistoryEntryForItem(item);
              return entry;
            }
          }, {
            key: "historyForItem",
            value: function historyForItem(item) {
              var history = this.content.itemUUIDToItemHistoryMapping[item.uuid];

              if (!history) {
                history = this.content.itemUUIDToItemHistoryMapping[item.uuid] = new SFItemHistory();
              }

              return history;
            }
          }, {
            key: "clearItemHistory",
            value: function clearItemHistory(item) {
              this.historyForItem(item).clear();
            }
          }, {
            key: "clearAllHistory",
            value: function clearAllHistory() {
              this.content.itemUUIDToItemHistoryMapping = {};
            }
          }, {
            key: "optimizeHistoryForItem",
            value: function optimizeHistoryForItem(item) {
              // Clean up if there are too many revisions. Note SFHistorySession.LargeItemEntryAmountThreshold is the amount of revisions which above, call
              // for an optimization. An optimization may not remove entries above this threshold. It will determine what it should keep and what it shouldn't.
              // So, it is possible to have a threshold of 60 but have 600 entries, if the item history deems those worth keeping.
              var itemHistory = this.historyForItem(item);

              if (itemHistory.entries.length > SFHistorySession.LargeItemEntryAmountThreshold) {
                itemHistory.optimize();
              }
            }
          }]);

          return SFHistorySession;
        }(SFItem); // See comment in `this.optimizeHistoryForItem`


        SFHistorySession.LargeItemEntryAmountThreshold = 60;
        ; // See default class values at bottom of this file, including `SFItemHistory.LargeEntryDeltaThreshold`.

        var SFItemHistory = exports.SFItemHistory = function () {
          function SFItemHistory() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, SFItemHistory);

            if (!this.entries) {
              this.entries = [];
            } // Deserialize the entries into entry objects.


            if (params.entries) {
              var _iteratorNormalCompletion54 = true;
              var _didIteratorError54 = false;
              var _iteratorError54 = undefined;

              try {
                for (var _iterator54 = params.entries[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
                  var entryParams = _step54.value;
                  var entry = this.createEntryForItem(entryParams.item);
                  entry.setPreviousEntry(this.getLastEntry());
                  this.entries.push(entry);
                }
              } catch (err) {
                _didIteratorError54 = true;
                _iteratorError54 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion54 && _iterator54.return) {
                    _iterator54.return();
                  }
                } finally {
                  if (_didIteratorError54) {
                    throw _iteratorError54;
                  }
                }
              }
            }
          }

          _createClass(SFItemHistory, [{
            key: "createEntryForItem",
            value: function createEntryForItem(item) {
              var historyItemClass = SFItemHistory.HistoryEntryClassMapping && SFItemHistory.HistoryEntryClassMapping[item.content_type];

              if (!historyItemClass) {
                historyItemClass = SFItemHistoryEntry;
              }

              var entry = new historyItemClass(item);
              return entry;
            }
          }, {
            key: "getLastEntry",
            value: function getLastEntry() {
              return this.entries[this.entries.length - 1];
            }
          }, {
            key: "addHistoryEntryForItem",
            value: function addHistoryEntryForItem(item) {
              var prospectiveEntry = this.createEntryForItem(item);
              var previousEntry = this.getLastEntry();
              prospectiveEntry.setPreviousEntry(previousEntry); // Don't add first revision if text length is 0, as this means it's a new note.
              // Actually, nevermind. If we do this, the first character added to a new note
              // will be displayed as "1 characters loaded".
              // if(!previousRevision && prospectiveRevision.textCharDiffLength == 0) {
              //   return;
              // }
              // Don't add if text is the same

              if (prospectiveEntry.isSameAsEntry(previousEntry)) {
                return;
              }

              this.entries.push(prospectiveEntry);
              return prospectiveEntry;
            }
          }, {
            key: "clear",
            value: function clear() {
              this.entries.length = 0;
            }
          }, {
            key: "optimize",
            value: function optimize() {
              var _this28 = this;

              var keepEntries = [];

              var isEntrySignificant = function isEntrySignificant(entry) {
                return entry.deltaSize() > SFItemHistory.LargeEntryDeltaThreshold;
              };

              var processEntry = function processEntry(entry, index, keep) {
                // Entries may be processed retrospectively, meaning it can be decided to be deleted, then an upcoming processing can change that.
                if (keep) {
                  keepEntries.push(entry);
                } else {
                  // Remove if in keep
                  var index = keepEntries.indexOf(entry);

                  if (index !== -1) {
                    keepEntries.splice(index, 1);
                  }
                }

                if (keep && isEntrySignificant(entry) && entry.operationVector() == -1) {
                  // This is a large negative change. Hang on to the previous entry.
                  var previousEntry = _this28.entries[index - 1];

                  if (previousEntry) {
                    keepEntries.push(previousEntry);
                  }
                }
              };

              this.entries.forEach(function (entry, index) {
                if (index == 0 || index == _this28.entries.length - 1) {
                  // Keep the first and last
                  processEntry(entry, index, true);
                } else {
                  var significant = isEntrySignificant(entry);
                  processEntry(entry, index, significant);
                }
              });
              this.entries = this.entries.filter(function (entry, index) {
                return keepEntries.indexOf(entry) !== -1;
              });
            }
          }]);

          return SFItemHistory;
        }(); // The amount of characters added or removed that constitute a keepable entry after optimization.


        SFItemHistory.LargeEntryDeltaThreshold = 15;
        ;

        var SFItemHistoryEntry = exports.SFItemHistoryEntry = function () {
          function SFItemHistoryEntry(item) {
            _classCallCheck(this, SFItemHistoryEntry); // Whatever values `item` has will be persisted, so be sure that the values are picked beforehand.


            this.item = SFItem.deepMerge({}, item); // We'll assume a `text` content value to diff on. If it doesn't exist, no problem.

            this.defaultContentKeyToDiffOn = "text"; // Default value

            this.textCharDiffLength = 0;

            if (typeof this.item.updated_at == 'string') {
              this.item.updated_at = new Date(this.item.updated_at);
            }
          }

          _createClass(SFItemHistoryEntry, [{
            key: "setPreviousEntry",
            value: function setPreviousEntry(previousEntry) {
              this.hasPreviousEntry = previousEntry != null; // we'll try to compute the delta based on an assumed content property of `text`, if it exists.

              if (this.item.content[this.defaultContentKeyToDiffOn]) {
                if (previousEntry) {
                  this.textCharDiffLength = this.item.content[this.defaultContentKeyToDiffOn].length - previousEntry.item.content[this.defaultContentKeyToDiffOn].length;
                } else {
                  this.textCharDiffLength = this.item.content[this.defaultContentKeyToDiffOn].length;
                }
              }
            }
          }, {
            key: "operationVector",
            value: function operationVector() {
              // We'll try to use the value of `textCharDiffLength` to help determine this, if it's set
              if (this.textCharDiffLength != undefined) {
                if (!this.hasPreviousEntry || this.textCharDiffLength == 0) {
                  return 0;
                } else if (this.textCharDiffLength < 0) {
                  return -1;
                } else {
                  return 1;
                }
              } // Otherwise use a default value of 1


              return 1;
            }
          }, {
            key: "deltaSize",
            value: function deltaSize() {
              // Up to the subclass to determine how large the delta was, i.e number of characters changed.
              // But this general class won't be able to determine which property it should diff on, or even its format.
              // We can return the `textCharDiffLength` if it's set, otherwise, just return 1;
              if (this.textCharDiffLength != undefined) {
                return Math.abs(this.textCharDiffLength);
              } // Otherwise return 1 here to constitute a basic positive delta.
              // The value returned should always be positive. override `operationVector` to return the direction of the delta.


              return 1;
            }
          }, {
            key: "isSameAsEntry",
            value: function isSameAsEntry(entry) {
              if (!entry) {
                return false;
              }

              var lhs = new SFItem(this.item);
              var rhs = new SFItem(entry.item);
              return lhs.isItemContentEqualWith(rhs);
            }
          }]);

          return SFItemHistoryEntry;
        }();

        ;
        /* Abstract class. Instantiate an instance of either SFCryptoJS (uses cryptojs) or SFCryptoWeb (uses web crypto) */

        var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

        var SFAbstractCrypto = exports.SFAbstractCrypto = function () {
          function SFAbstractCrypto() {
            _classCallCheck(this, SFAbstractCrypto);

            this.DefaultPBKDF2Length = 768;
          }
          /*
          Our WebCrypto implementation only offers PBKDf2, so any other encryption
          and key generation functions must use CryptoJS in this abstract implementation.
          */


          _createClass(SFAbstractCrypto, [{
            key: "generateUUIDSync",
            value: function generateUUIDSync() {
              var crypto = globalScope.crypto || globalScope.msCrypto;

              if (crypto) {
                var buf = new Uint32Array(4);
                crypto.getRandomValues(buf);
                var idx = -1;
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                  idx++;
                  var r = buf[idx >> 3] >> idx % 8 * 4 & 15;
                  var v = c == 'x' ? r : r & 0x3 | 0x8;
                  return v.toString(16);
                });
              } else {
                var d = new Date().getTime();

                if (globalScope.performance && typeof globalScope.performance.now === "function") {
                  d += performance.now(); //use high-precision timer if available
                }

                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                  var r = (d + Math.random() * 16) % 16 | 0;
                  d = Math.floor(d / 16);
                  return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
                });
                return uuid;
              }
            }
          }, {
            key: "generateUUID",
            value: function () {
              var _ref113 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee107() {
                return regeneratorRuntime.wrap(function _callee107$(_context107) {
                  while (1) {
                    switch (_context107.prev = _context107.next) {
                      case 0:
                        return _context107.abrupt("return", this.generateUUIDSync());

                      case 1:
                      case "end":
                        return _context107.stop();
                    }
                  }
                }, _callee107, this);
              }));

              function generateUUID() {
                return _ref113.apply(this, arguments);
              }

              return generateUUID;
            }()
          }, {
            key: "decryptText",
            value: function () {
              var _ref114 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee108() {
                var _ref115 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    ciphertextToAuth = _ref115.ciphertextToAuth,
                    contentCiphertext = _ref115.contentCiphertext,
                    encryptionKey = _ref115.encryptionKey,
                    iv = _ref115.iv,
                    authHash = _ref115.authHash,
                    authKey = _ref115.authKey;

                var requiresAuth = arguments[1];
                var localAuthHash, keyData, ivData, decrypted;
                return regeneratorRuntime.wrap(function _callee108$(_context108) {
                  while (1) {
                    switch (_context108.prev = _context108.next) {
                      case 0:
                        if (!(requiresAuth && !authHash)) {
                          _context108.next = 3;
                          break;
                        }

                        console.error("Auth hash is required.");
                        return _context108.abrupt("return");

                      case 3:
                        if (!authHash) {
                          _context108.next = 10;
                          break;
                        }

                        _context108.next = 6;
                        return this.hmac256(ciphertextToAuth, authKey);

                      case 6:
                        localAuthHash = _context108.sent;

                        if (!(authHash !== localAuthHash)) {
                          _context108.next = 10;
                          break;
                        }

                        console.error("Auth hash does not match, returning null.");
                        return _context108.abrupt("return", null);

                      case 10:
                        keyData = CryptoJS.enc.Hex.parse(encryptionKey);
                        ivData = CryptoJS.enc.Hex.parse(iv || "");
                        decrypted = CryptoJS.AES.decrypt(contentCiphertext, keyData, {
                          iv: ivData,
                          mode: CryptoJS.mode.CBC,
                          padding: CryptoJS.pad.Pkcs7
                        });
                        return _context108.abrupt("return", decrypted.toString(CryptoJS.enc.Utf8));

                      case 14:
                      case "end":
                        return _context108.stop();
                    }
                  }
                }, _callee108, this);
              }));

              function decryptText() {
                return _ref114.apply(this, arguments);
              }

              return decryptText;
            }()
          }, {
            key: "encryptText",
            value: function () {
              var _ref116 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee109(text, key, iv) {
                var keyData, ivData, encrypted;
                return regeneratorRuntime.wrap(function _callee109$(_context109) {
                  while (1) {
                    switch (_context109.prev = _context109.next) {
                      case 0:
                        keyData = CryptoJS.enc.Hex.parse(key);
                        ivData = CryptoJS.enc.Hex.parse(iv || "");
                        encrypted = CryptoJS.AES.encrypt(text, keyData, {
                          iv: ivData,
                          mode: CryptoJS.mode.CBC,
                          padding: CryptoJS.pad.Pkcs7
                        });
                        return _context109.abrupt("return", encrypted.toString());

                      case 4:
                      case "end":
                        return _context109.stop();
                    }
                  }
                }, _callee109, this);
              }));

              function encryptText(_x131, _x132, _x133) {
                return _ref116.apply(this, arguments);
              }

              return encryptText;
            }()
          }, {
            key: "generateRandomKey",
            value: function () {
              var _ref117 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee110(bits) {
                return regeneratorRuntime.wrap(function _callee110$(_context110) {
                  while (1) {
                    switch (_context110.prev = _context110.next) {
                      case 0:
                        return _context110.abrupt("return", CryptoJS.lib.WordArray.random(bits / 8).toString());

                      case 1:
                      case "end":
                        return _context110.stop();
                    }
                  }
                }, _callee110, this);
              }));

              function generateRandomKey(_x134) {
                return _ref117.apply(this, arguments);
              }

              return generateRandomKey;
            }()
          }, {
            key: "generateItemEncryptionKey",
            value: function () {
              var _ref118 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee111() {
                var length, cost, salt, passphrase;
                return regeneratorRuntime.wrap(function _callee111$(_context111) {
                  while (1) {
                    switch (_context111.prev = _context111.next) {
                      case 0:
                        // Generates a key that will be split in half, each being 256 bits. So total length will need to be 512.
                        length = 512;
                        cost = 1;
                        _context111.next = 4;
                        return this.generateRandomKey(length);

                      case 4:
                        salt = _context111.sent;
                        _context111.next = 7;
                        return this.generateRandomKey(length);

                      case 7:
                        passphrase = _context111.sent;
                        return _context111.abrupt("return", this.pbkdf2(passphrase, salt, cost, length));

                      case 9:
                      case "end":
                        return _context111.stop();
                    }
                  }
                }, _callee111, this);
              }));

              function generateItemEncryptionKey() {
                return _ref118.apply(this, arguments);
              }

              return generateItemEncryptionKey;
            }()
          }, {
            key: "firstHalfOfKey",
            value: function () {
              var _ref119 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee112(key) {
                return regeneratorRuntime.wrap(function _callee112$(_context112) {
                  while (1) {
                    switch (_context112.prev = _context112.next) {
                      case 0:
                        return _context112.abrupt("return", key.substring(0, key.length / 2));

                      case 1:
                      case "end":
                        return _context112.stop();
                    }
                  }
                }, _callee112, this);
              }));

              function firstHalfOfKey(_x135) {
                return _ref119.apply(this, arguments);
              }

              return firstHalfOfKey;
            }()
          }, {
            key: "secondHalfOfKey",
            value: function () {
              var _ref120 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee113(key) {
                return regeneratorRuntime.wrap(function _callee113$(_context113) {
                  while (1) {
                    switch (_context113.prev = _context113.next) {
                      case 0:
                        return _context113.abrupt("return", key.substring(key.length / 2, key.length));

                      case 1:
                      case "end":
                        return _context113.stop();
                    }
                  }
                }, _callee113, this);
              }));

              function secondHalfOfKey(_x136) {
                return _ref120.apply(this, arguments);
              }

              return secondHalfOfKey;
            }()
          }, {
            key: "base64",
            value: function () {
              var _ref121 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee114(text) {
                return regeneratorRuntime.wrap(function _callee114$(_context114) {
                  while (1) {
                    switch (_context114.prev = _context114.next) {
                      case 0:
                        return _context114.abrupt("return", globalScope.btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
                          return String.fromCharCode('0x' + p1);
                        })));

                      case 1:
                      case "end":
                        return _context114.stop();
                    }
                  }
                }, _callee114, this);
              }));

              function base64(_x137) {
                return _ref121.apply(this, arguments);
              }

              return base64;
            }()
          }, {
            key: "base64Decode",
            value: function () {
              var _ref122 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee115(base64String) {
                return regeneratorRuntime.wrap(function _callee115$(_context115) {
                  while (1) {
                    switch (_context115.prev = _context115.next) {
                      case 0:
                        return _context115.abrupt("return", globalScope.atob(base64String));

                      case 1:
                      case "end":
                        return _context115.stop();
                    }
                  }
                }, _callee115, this);
              }));

              function base64Decode(_x138) {
                return _ref122.apply(this, arguments);
              }

              return base64Decode;
            }()
          }, {
            key: "sha256",
            value: function () {
              var _ref123 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee116(text) {
                return regeneratorRuntime.wrap(function _callee116$(_context116) {
                  while (1) {
                    switch (_context116.prev = _context116.next) {
                      case 0:
                        return _context116.abrupt("return", CryptoJS.SHA256(text).toString());

                      case 1:
                      case "end":
                        return _context116.stop();
                    }
                  }
                }, _callee116, this);
              }));

              function sha256(_x139) {
                return _ref123.apply(this, arguments);
              }

              return sha256;
            }()
          }, {
            key: "hmac256",
            value: function () {
              var _ref124 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee117(message, key) {
                var keyData, messageData, result;
                return regeneratorRuntime.wrap(function _callee117$(_context117) {
                  while (1) {
                    switch (_context117.prev = _context117.next) {
                      case 0:
                        keyData = CryptoJS.enc.Hex.parse(key);
                        messageData = CryptoJS.enc.Utf8.parse(message);
                        result = CryptoJS.HmacSHA256(messageData, keyData).toString();
                        return _context117.abrupt("return", result);

                      case 4:
                      case "end":
                        return _context117.stop();
                    }
                  }
                }, _callee117, this);
              }));

              function hmac256(_x140, _x141) {
                return _ref124.apply(this, arguments);
              }

              return hmac256;
            }()
          }, {
            key: "generateSalt",
            value: function () {
              var _ref125 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee118(identifier, version, cost, nonce) {
                var result;
                return regeneratorRuntime.wrap(function _callee118$(_context118) {
                  while (1) {
                    switch (_context118.prev = _context118.next) {
                      case 0:
                        _context118.next = 2;
                        return this.sha256([identifier, "SF", version, cost, nonce].join(":"));

                      case 2:
                        result = _context118.sent;
                        return _context118.abrupt("return", result);

                      case 4:
                      case "end":
                        return _context118.stop();
                    }
                  }
                }, _callee118, this);
              }));

              function generateSalt(_x142, _x143, _x144, _x145) {
                return _ref125.apply(this, arguments);
              }

              return generateSalt;
            }()
            /** Generates two deterministic keys based on one input */

          }, {
            key: "generateSymmetricKeyPair",
            value: function () {
              var _ref126 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee119() {
                var _ref127 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    password = _ref127.password,
                    pw_salt = _ref127.pw_salt,
                    pw_cost = _ref127.pw_cost;

                var output, outputLength, splitLength, firstThird, secondThird, thirdThird;
                return regeneratorRuntime.wrap(function _callee119$(_context119) {
                  while (1) {
                    switch (_context119.prev = _context119.next) {
                      case 0:
                        _context119.next = 2;
                        return this.pbkdf2(password, pw_salt, pw_cost, this.DefaultPBKDF2Length);

                      case 2:
                        output = _context119.sent;
                        outputLength = output.length;
                        splitLength = outputLength / 3;
                        firstThird = output.slice(0, splitLength);
                        secondThird = output.slice(splitLength, splitLength * 2);
                        thirdThird = output.slice(splitLength * 2, splitLength * 3);
                        return _context119.abrupt("return", [firstThird, secondThird, thirdThird]);

                      case 9:
                      case "end":
                        return _context119.stop();
                    }
                  }
                }, _callee119, this);
              }));

              function generateSymmetricKeyPair() {
                return _ref126.apply(this, arguments);
              }

              return generateSymmetricKeyPair;
            }()
          }, {
            key: "computeEncryptionKeysForUser",
            value: function () {
              var _ref128 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee120(password, authParams) {
                var pw_salt;
                return regeneratorRuntime.wrap(function _callee120$(_context120) {
                  while (1) {
                    switch (_context120.prev = _context120.next) {
                      case 0:
                        if (!(authParams.version == "003")) {
                          _context120.next = 9;
                          break;
                        }

                        if (authParams.identifier) {
                          _context120.next = 4;
                          break;
                        }

                        console.error("authParams is missing identifier.");
                        return _context120.abrupt("return");

                      case 4:
                        _context120.next = 6;
                        return this.generateSalt(authParams.identifier, authParams.version, authParams.pw_cost, authParams.pw_nonce);

                      case 6:
                        pw_salt = _context120.sent;
                        _context120.next = 10;
                        break;

                      case 9:
                        // Salt is returned from server
                        pw_salt = authParams.pw_salt;

                      case 10:
                        return _context120.abrupt("return", this.generateSymmetricKeyPair({
                          password: password,
                          pw_salt: pw_salt,
                          pw_cost: authParams.pw_cost
                        }).then(function (keys) {
                          var userKeys = {
                            pw: keys[0],
                            mk: keys[1],
                            ak: keys[2]
                          };
                          return userKeys;
                        }));

                      case 11:
                      case "end":
                        return _context120.stop();
                    }
                  }
                }, _callee120, this);
              }));

              function computeEncryptionKeysForUser(_x147, _x148) {
                return _ref128.apply(this, arguments);
              }

              return computeEncryptionKeysForUser;
            }() // Unlike computeEncryptionKeysForUser, this method always uses the latest SF Version

          }, {
            key: "generateInitialKeysAndAuthParamsForUser",
            value: function () {
              var _ref129 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee121(identifier, password) {
                var version, pw_cost, pw_nonce, pw_salt;
                return regeneratorRuntime.wrap(function _callee121$(_context121) {
                  while (1) {
                    switch (_context121.prev = _context121.next) {
                      case 0:
                        version = this.SFJS.version;
                        pw_cost = this.SFJS.defaultPasswordGenerationCost;
                        _context121.next = 4;
                        return this.generateRandomKey(256);

                      case 4:
                        pw_nonce = _context121.sent;
                        _context121.next = 7;
                        return this.generateSalt(identifier, version, pw_cost, pw_nonce);

                      case 7:
                        pw_salt = _context121.sent;
                        return _context121.abrupt("return", this.generateSymmetricKeyPair({
                          password: password,
                          pw_salt: pw_salt,
                          pw_cost: pw_cost
                        }).then(function (keys) {
                          var authParams = {
                            pw_nonce: pw_nonce,
                            pw_cost: pw_cost,
                            identifier: identifier,
                            version: version
                          };
                          var userKeys = {
                            pw: keys[0],
                            mk: keys[1],
                            ak: keys[2]
                          };
                          return {
                            keys: userKeys,
                            authParams: authParams
                          };
                        }));

                      case 9:
                      case "end":
                        return _context121.stop();
                    }
                  }
                }, _callee121, this);
              }));

              function generateInitialKeysAndAuthParamsForUser(_x149, _x150) {
                return _ref129.apply(this, arguments);
              }

              return generateInitialKeysAndAuthParamsForUser;
            }()
          }]);

          return SFAbstractCrypto;
        }();

        ;

        var SFCryptoJS = exports.SFCryptoJS = function (_SFAbstractCrypto) {
          _inherits(SFCryptoJS, _SFAbstractCrypto);

          function SFCryptoJS() {
            _classCallCheck(this, SFCryptoJS);

            return _possibleConstructorReturn(this, (SFCryptoJS.__proto__ || Object.getPrototypeOf(SFCryptoJS)).apply(this, arguments));
          }

          _createClass(SFCryptoJS, [{
            key: "pbkdf2",
            value: function () {
              var _ref130 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee122(password, pw_salt, pw_cost, length) {
                var params;
                return regeneratorRuntime.wrap(function _callee122$(_context122) {
                  while (1) {
                    switch (_context122.prev = _context122.next) {
                      case 0:
                        params = {
                          keySize: length / 32,
                          hasher: CryptoJS.algo.SHA512,
                          iterations: pw_cost
                        };
                        return _context122.abrupt("return", CryptoJS.PBKDF2(password, pw_salt, params).toString());

                      case 2:
                      case "end":
                        return _context122.stop();
                    }
                  }
                }, _callee122, this);
              }));

              function pbkdf2(_x151, _x152, _x153, _x154) {
                return _ref130.apply(this, arguments);
              }

              return pbkdf2;
            }()
          }]);

          return SFCryptoJS;
        }(SFAbstractCrypto);

        ;
        var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
        var subtleCrypto = globalScope.crypto ? globalScope.crypto.subtle : null;

        var SFCryptoWeb = exports.SFCryptoWeb = function (_SFAbstractCrypto2) {
          _inherits(SFCryptoWeb, _SFAbstractCrypto2);

          function SFCryptoWeb() {
            _classCallCheck(this, SFCryptoWeb);

            return _possibleConstructorReturn(this, (SFCryptoWeb.__proto__ || Object.getPrototypeOf(SFCryptoWeb)).apply(this, arguments));
          }

          _createClass(SFCryptoWeb, [{
            key: "pbkdf2",

            /**
            Public
            */
            value: function () {
              var _ref131 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee123(password, pw_salt, pw_cost, length) {
                var key;
                return regeneratorRuntime.wrap(function _callee123$(_context123) {
                  while (1) {
                    switch (_context123.prev = _context123.next) {
                      case 0:
                        _context123.next = 2;
                        return this.webCryptoImportKey(password, "PBKDF2", ["deriveBits"]);

                      case 2:
                        key = _context123.sent;

                        if (key) {
                          _context123.next = 6;
                          break;
                        }

                        console.log("Key is null, unable to continue");
                        return _context123.abrupt("return", null);

                      case 6:
                        return _context123.abrupt("return", this.webCryptoDeriveBits(key, pw_salt, pw_cost, length));

                      case 7:
                      case "end":
                        return _context123.stop();
                    }
                  }
                }, _callee123, this);
              }));

              function pbkdf2(_x155, _x156, _x157, _x158) {
                return _ref131.apply(this, arguments);
              }

              return pbkdf2;
            }()
          }, {
            key: "generateRandomKey",
            value: function () {
              var _ref132 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee125(bits) {
                var _this31 = this;

                var extractable;
                return regeneratorRuntime.wrap(function _callee125$(_context125) {
                  while (1) {
                    switch (_context125.prev = _context125.next) {
                      case 0:
                        extractable = true;
                        return _context125.abrupt("return", subtleCrypto.generateKey({
                          name: "AES-CBC",
                          length: bits
                        }, extractable, ["encrypt", "decrypt"]).then(function (keyObject) {
                          return subtleCrypto.exportKey("raw", keyObject).then(function () {
                            var _ref133 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee124(keyData) {
                              var key;
                              return regeneratorRuntime.wrap(function _callee124$(_context124) {
                                while (1) {
                                  switch (_context124.prev = _context124.next) {
                                    case 0:
                                      _context124.next = 2;
                                      return _this31.arrayBufferToHexString(new Uint8Array(keyData));

                                    case 2:
                                      key = _context124.sent;
                                      return _context124.abrupt("return", key);

                                    case 4:
                                    case "end":
                                      return _context124.stop();
                                  }
                                }
                              }, _callee124, _this31);
                            }));

                            return function (_x160) {
                              return _ref133.apply(this, arguments);
                            };
                          }()).catch(function (err) {
                            console.error("Error exporting key", err);
                          });
                        }).catch(function (err) {
                          console.error("Error generating key", err);
                        }));

                      case 2:
                      case "end":
                        return _context125.stop();
                    }
                  }
                }, _callee125, this);
              }));

              function generateRandomKey(_x159) {
                return _ref132.apply(this, arguments);
              }

              return generateRandomKey;
            }()
          }, {
            key: "generateItemEncryptionKey",
            value: function () {
              var _ref134 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee126() {
                var length;
                return regeneratorRuntime.wrap(function _callee126$(_context126) {
                  while (1) {
                    switch (_context126.prev = _context126.next) {
                      case 0:
                        // Generates a key that will be split in half, each being 256 bits. So total length will need to be 512.
                        length = 256;
                        return _context126.abrupt("return", Promise.all([this.generateRandomKey(length), this.generateRandomKey(length)]).then(function (values) {
                          return values.join("");
                        }));

                      case 2:
                      case "end":
                        return _context126.stop();
                    }
                  }
                }, _callee126, this);
              }));

              function generateItemEncryptionKey() {
                return _ref134.apply(this, arguments);
              }

              return generateItemEncryptionKey;
            }()
            /* This is a functioning implementation of WebCrypto's encrypt, however, in basic testing, CrpytoJS performs about 30-40% faster, surprisingly. */

          }, {
            key: "encryptText",
            value: function () {
              var _ref135 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee128(text, key, iv) {
                var _this32 = this;

                var ivData, alg, keyBuffer, keyData, textData;
                return regeneratorRuntime.wrap(function _callee128$(_context128) {
                  while (1) {
                    switch (_context128.prev = _context128.next) {
                      case 0:
                        if (!iv) {
                          _context128.next = 6;
                          break;
                        }

                        _context128.next = 3;
                        return this.hexStringToArrayBuffer(iv);

                      case 3:
                        _context128.t0 = _context128.sent;
                        _context128.next = 7;
                        break;

                      case 6:
                        _context128.t0 = new ArrayBuffer(16);

                      case 7:
                        ivData = _context128.t0;
                        alg = {
                          name: 'AES-CBC',
                          iv: ivData
                        };
                        _context128.next = 11;
                        return this.hexStringToArrayBuffer(key);

                      case 11:
                        keyBuffer = _context128.sent;
                        _context128.next = 14;
                        return this.webCryptoImportKey(keyBuffer, alg.name, ["encrypt"]);

                      case 14:
                        keyData = _context128.sent;
                        _context128.next = 17;
                        return this.stringToArrayBuffer(text);

                      case 17:
                        textData = _context128.sent;
                        return _context128.abrupt("return", crypto.subtle.encrypt(alg, keyData, textData).then(function () {
                          var _ref136 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee127(result) {
                            var cipher;
                            return regeneratorRuntime.wrap(function _callee127$(_context127) {
                              while (1) {
                                switch (_context127.prev = _context127.next) {
                                  case 0:
                                    _context127.next = 2;
                                    return _this32.arrayBufferToBase64(result);

                                  case 2:
                                    cipher = _context127.sent;
                                    return _context127.abrupt("return", cipher);

                                  case 4:
                                  case "end":
                                    return _context127.stop();
                                }
                              }
                            }, _callee127, _this32);
                          }));

                          return function (_x164) {
                            return _ref136.apply(this, arguments);
                          };
                        }()));

                      case 19:
                      case "end":
                        return _context128.stop();
                    }
                  }
                }, _callee128, this);
              }));

              function encryptText(_x161, _x162, _x163) {
                return _ref135.apply(this, arguments);
              }

              return encryptText;
            }()
          }, {
            key: "decryptText",
            value: function () {
              var _ref137 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee130() {
                var _this33 = this;

                var _ref138 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    ciphertextToAuth = _ref138.ciphertextToAuth,
                    contentCiphertext = _ref138.contentCiphertext,
                    encryptionKey = _ref138.encryptionKey,
                    iv = _ref138.iv,
                    authHash = _ref138.authHash,
                    authKey = _ref138.authKey;

                var requiresAuth = arguments[1];
                var localAuthHash, ivData, alg, keyBuffer, keyData, textData;
                return regeneratorRuntime.wrap(function _callee130$(_context130) {
                  while (1) {
                    switch (_context130.prev = _context130.next) {
                      case 0:
                        if (!(requiresAuth && !authHash)) {
                          _context130.next = 3;
                          break;
                        }

                        console.error("Auth hash is required.");
                        return _context130.abrupt("return");

                      case 3:
                        if (!authHash) {
                          _context130.next = 10;
                          break;
                        }

                        _context130.next = 6;
                        return this.hmac256(ciphertextToAuth, authKey);

                      case 6:
                        localAuthHash = _context130.sent;

                        if (!(authHash !== localAuthHash)) {
                          _context130.next = 10;
                          break;
                        }

                        console.error("Auth hash does not match, returning null. " + authHash + " != " + localAuthHash);
                        return _context130.abrupt("return", null);

                      case 10:
                        if (!iv) {
                          _context130.next = 16;
                          break;
                        }

                        _context130.next = 13;
                        return this.hexStringToArrayBuffer(iv);

                      case 13:
                        _context130.t0 = _context130.sent;
                        _context130.next = 17;
                        break;

                      case 16:
                        _context130.t0 = new ArrayBuffer(16);

                      case 17:
                        ivData = _context130.t0;
                        alg = {
                          name: 'AES-CBC',
                          iv: ivData
                        };
                        _context130.next = 21;
                        return this.hexStringToArrayBuffer(encryptionKey);

                      case 21:
                        keyBuffer = _context130.sent;
                        _context130.next = 24;
                        return this.webCryptoImportKey(keyBuffer, alg.name, ["decrypt"]);

                      case 24:
                        keyData = _context130.sent;
                        _context130.next = 27;
                        return this.base64ToArrayBuffer(contentCiphertext);

                      case 27:
                        textData = _context130.sent;
                        return _context130.abrupt("return", crypto.subtle.decrypt(alg, keyData, textData).then(function () {
                          var _ref139 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee129(result) {
                            var decoded;
                            return regeneratorRuntime.wrap(function _callee129$(_context129) {
                              while (1) {
                                switch (_context129.prev = _context129.next) {
                                  case 0:
                                    _context129.next = 2;
                                    return _this33.arrayBufferToString(result);

                                  case 2:
                                    decoded = _context129.sent;
                                    return _context129.abrupt("return", decoded);

                                  case 4:
                                  case "end":
                                    return _context129.stop();
                                }
                              }
                            }, _callee129, _this33);
                          }));

                          return function (_x166) {
                            return _ref139.apply(this, arguments);
                          };
                        }()).catch(function (error) {
                          console.error("Error decrypting:", error);
                        }));

                      case 29:
                      case "end":
                        return _context130.stop();
                    }
                  }
                }, _callee130, this);
              }));

              function decryptText() {
                return _ref137.apply(this, arguments);
              }

              return decryptText;
            }()
            /**
            Internal
            */

          }, {
            key: "webCryptoImportKey",
            value: function () {
              var _ref140 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee131(input, alg, actions, hash) {
                var text;
                return regeneratorRuntime.wrap(function _callee131$(_context131) {
                  while (1) {
                    switch (_context131.prev = _context131.next) {
                      case 0:
                        if (!(typeof input === "string")) {
                          _context131.next = 6;
                          break;
                        }

                        _context131.next = 3;
                        return this.stringToArrayBuffer(input);

                      case 3:
                        _context131.t0 = _context131.sent;
                        _context131.next = 7;
                        break;

                      case 6:
                        _context131.t0 = input;

                      case 7:
                        text = _context131.t0;
                        return _context131.abrupt("return", subtleCrypto.importKey("raw", text, {
                          name: alg,
                          hash: hash
                        }, false, actions).then(function (key) {
                          return key;
                        }).catch(function (err) {
                          console.error(err);
                          return null;
                        }));

                      case 9:
                      case "end":
                        return _context131.stop();
                    }
                  }
                }, _callee131, this);
              }));

              function webCryptoImportKey(_x167, _x168, _x169, _x170) {
                return _ref140.apply(this, arguments);
              }

              return webCryptoImportKey;
            }() //

          }, {
            key: "webCryptoDeriveBits",
            value: function () {
              var _ref141 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee133(key, pw_salt, pw_cost, length) {
                var _this34 = this;

                var params;
                return regeneratorRuntime.wrap(function _callee133$(_context133) {
                  while (1) {
                    switch (_context133.prev = _context133.next) {
                      case 0:
                        _context133.next = 2;
                        return this.stringToArrayBuffer(pw_salt);

                      case 2:
                        _context133.t0 = _context133.sent;
                        _context133.t1 = pw_cost;
                        _context133.t2 = {
                          name: "SHA-512"
                        };
                        params = {
                          "name": "PBKDF2",
                          salt: _context133.t0,
                          iterations: _context133.t1,
                          hash: _context133.t2
                        };
                        return _context133.abrupt("return", subtleCrypto.deriveBits(params, key, length).then(function () {
                          var _ref142 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee132(bits) {
                            var key;
                            return regeneratorRuntime.wrap(function _callee132$(_context132) {
                              while (1) {
                                switch (_context132.prev = _context132.next) {
                                  case 0:
                                    _context132.next = 2;
                                    return _this34.arrayBufferToHexString(new Uint8Array(bits));

                                  case 2:
                                    key = _context132.sent;
                                    return _context132.abrupt("return", key);

                                  case 4:
                                  case "end":
                                    return _context132.stop();
                                }
                              }
                            }, _callee132, _this34);
                          }));

                          return function (_x175) {
                            return _ref142.apply(this, arguments);
                          };
                        }()).catch(function (err) {
                          console.error(err);
                          return null;
                        }));

                      case 7:
                      case "end":
                        return _context133.stop();
                    }
                  }
                }, _callee133, this);
              }));

              function webCryptoDeriveBits(_x171, _x172, _x173, _x174) {
                return _ref141.apply(this, arguments);
              }

              return webCryptoDeriveBits;
            }()
          }, {
            key: "stringToArrayBuffer",
            value: function () {
              var _ref143 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee134(string) {
                return regeneratorRuntime.wrap(function _callee134$(_context134) {
                  while (1) {
                    switch (_context134.prev = _context134.next) {
                      case 0:
                        return _context134.abrupt("return", new Promise(function (resolve, reject) {
                          var blob = new Blob([string]);
                          var f = new FileReader();

                          f.onload = function (e) {
                            resolve(e.target.result);
                          };

                          f.readAsArrayBuffer(blob);
                        }));

                      case 1:
                      case "end":
                        return _context134.stop();
                    }
                  }
                }, _callee134, this);
              }));

              function stringToArrayBuffer(_x176) {
                return _ref143.apply(this, arguments);
              }

              return stringToArrayBuffer;
            }()
          }, {
            key: "arrayBufferToString",
            value: function () {
              var _ref144 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee135(arrayBuffer) {
                return regeneratorRuntime.wrap(function _callee135$(_context135) {
                  while (1) {
                    switch (_context135.prev = _context135.next) {
                      case 0:
                        return _context135.abrupt("return", new Promise(function (resolve, reject) {
                          var blob = new Blob([arrayBuffer]);
                          var f = new FileReader();

                          f.onload = function (e) {
                            resolve(e.target.result);
                          };

                          f.readAsText(blob);
                        }));

                      case 1:
                      case "end":
                        return _context135.stop();
                    }
                  }
                }, _callee135, this);
              }));

              function arrayBufferToString(_x177) {
                return _ref144.apply(this, arguments);
              }

              return arrayBufferToString;
            }()
          }, {
            key: "arrayBufferToHexString",
            value: function () {
              var _ref145 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee136(arrayBuffer) {
                var byteArray, hexString, nextHexByte, i;
                return regeneratorRuntime.wrap(function _callee136$(_context136) {
                  while (1) {
                    switch (_context136.prev = _context136.next) {
                      case 0:
                        byteArray = new Uint8Array(arrayBuffer);
                        hexString = "";

                        for (i = 0; i < byteArray.byteLength; i++) {
                          nextHexByte = byteArray[i].toString(16);

                          if (nextHexByte.length < 2) {
                            nextHexByte = "0" + nextHexByte;
                          }

                          hexString += nextHexByte;
                        }

                        return _context136.abrupt("return", hexString);

                      case 4:
                      case "end":
                        return _context136.stop();
                    }
                  }
                }, _callee136, this);
              }));

              function arrayBufferToHexString(_x178) {
                return _ref145.apply(this, arguments);
              }

              return arrayBufferToHexString;
            }()
          }, {
            key: "hexStringToArrayBuffer",
            value: function () {
              var _ref146 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee137(hex) {
                var bytes, c;
                return regeneratorRuntime.wrap(function _callee137$(_context137) {
                  while (1) {
                    switch (_context137.prev = _context137.next) {
                      case 0:
                        for (bytes = [], c = 0; c < hex.length; c += 2) {
                          bytes.push(parseInt(hex.substr(c, 2), 16));
                        }

                        return _context137.abrupt("return", new Uint8Array(bytes));

                      case 2:
                      case "end":
                        return _context137.stop();
                    }
                  }
                }, _callee137, this);
              }));

              function hexStringToArrayBuffer(_x179) {
                return _ref146.apply(this, arguments);
              }

              return hexStringToArrayBuffer;
            }()
          }, {
            key: "base64ToArrayBuffer",
            value: function () {
              var _ref147 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee138(base64) {
                var binary_string, len, bytes, i;
                return regeneratorRuntime.wrap(function _callee138$(_context138) {
                  while (1) {
                    switch (_context138.prev = _context138.next) {
                      case 0:
                        _context138.next = 2;
                        return this.base64Decode(base64);

                      case 2:
                        binary_string = _context138.sent;
                        len = binary_string.length;
                        bytes = new Uint8Array(len);

                        for (i = 0; i < len; i++) {
                          bytes[i] = binary_string.charCodeAt(i);
                        }

                        return _context138.abrupt("return", bytes.buffer);

                      case 7:
                      case "end":
                        return _context138.stop();
                    }
                  }
                }, _callee138, this);
              }));

              function base64ToArrayBuffer(_x180) {
                return _ref147.apply(this, arguments);
              }

              return base64ToArrayBuffer;
            }()
          }, {
            key: "arrayBufferToBase64",
            value: function () {
              var _ref148 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee139(buffer) {
                return regeneratorRuntime.wrap(function _callee139$(_context139) {
                  while (1) {
                    switch (_context139.prev = _context139.next) {
                      case 0:
                        return _context139.abrupt("return", new Promise(function (resolve, reject) {
                          var blob = new Blob([buffer], {
                            type: 'application/octet-binary'
                          });
                          var reader = new FileReader();

                          reader.onload = function (evt) {
                            var dataurl = evt.target.result;
                            resolve(dataurl.substr(dataurl.indexOf(',') + 1));
                          };

                          reader.readAsDataURL(blob);
                        }));

                      case 1:
                      case "end":
                        return _context139.stop();
                    }
                  }
                }, _callee139, this);
              }));

              function arrayBufferToBase64(_x181) {
                return _ref148.apply(this, arguments);
              }

              return arrayBufferToBase64;
            }()
          }, {
            key: "hmac256",
            value: function () {
              var _ref149 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee141(message, key) {
                var _this35 = this;

                var keyHexData, keyData, messageData;
                return regeneratorRuntime.wrap(function _callee141$(_context141) {
                  while (1) {
                    switch (_context141.prev = _context141.next) {
                      case 0:
                        _context141.next = 2;
                        return this.hexStringToArrayBuffer(key);

                      case 2:
                        keyHexData = _context141.sent;
                        _context141.next = 5;
                        return this.webCryptoImportKey(keyHexData, "HMAC", ["sign"], {
                          name: "SHA-256"
                        });

                      case 5:
                        keyData = _context141.sent;
                        _context141.next = 8;
                        return this.stringToArrayBuffer(message);

                      case 8:
                        messageData = _context141.sent;
                        return _context141.abrupt("return", crypto.subtle.sign({
                          name: "HMAC"
                        }, keyData, messageData).then(function () {
                          var _ref150 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee140(signature) {
                            var hash;
                            return regeneratorRuntime.wrap(function _callee140$(_context140) {
                              while (1) {
                                switch (_context140.prev = _context140.next) {
                                  case 0:
                                    _context140.next = 2;
                                    return _this35.arrayBufferToHexString(signature);

                                  case 2:
                                    hash = _context140.sent;
                                    return _context140.abrupt("return", hash);

                                  case 4:
                                  case "end":
                                    return _context140.stop();
                                }
                              }
                            }, _callee140, _this35);
                          }));

                          return function (_x184) {
                            return _ref150.apply(this, arguments);
                          };
                        }()).catch(function (err) {
                          console.error("Error computing hmac", err);
                        }));

                      case 10:
                      case "end":
                        return _context141.stop();
                    }
                  }
                }, _callee141, this);
              }));

              function hmac256(_x182, _x183) {
                return _ref149.apply(this, arguments);
              }

              return hmac256;
            }()
          }]);

          return SFCryptoWeb;
        }(SFAbstractCrypto);

        ;

        var SFItemTransformer = exports.SFItemTransformer = function () {
          function SFItemTransformer(crypto) {
            _classCallCheck(this, SFItemTransformer);

            this.crypto = crypto;
          }

          _createClass(SFItemTransformer, [{
            key: "_private_encryptString",
            value: function () {
              var _ref151 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee142(string, encryptionKey, authKey, uuid, auth_params) {
                var fullCiphertext, contentCiphertext, iv, ciphertextToAuth, authHash, authParamsString;
                return regeneratorRuntime.wrap(function _callee142$(_context142) {
                  while (1) {
                    switch (_context142.prev = _context142.next) {
                      case 0:
                        if (!(auth_params.version === "001")) {
                          _context142.next = 7;
                          break;
                        }

                        _context142.next = 3;
                        return this.crypto.encryptText(string, encryptionKey, null);

                      case 3:
                        contentCiphertext = _context142.sent;
                        fullCiphertext = auth_params.version + contentCiphertext;
                        _context142.next = 21;
                        break;

                      case 7:
                        _context142.next = 9;
                        return this.crypto.generateRandomKey(128);

                      case 9:
                        iv = _context142.sent;
                        _context142.next = 12;
                        return this.crypto.encryptText(string, encryptionKey, iv);

                      case 12:
                        contentCiphertext = _context142.sent;
                        ciphertextToAuth = [auth_params.version, uuid, iv, contentCiphertext].join(":");
                        _context142.next = 16;
                        return this.crypto.hmac256(ciphertextToAuth, authKey);

                      case 16:
                        authHash = _context142.sent;
                        _context142.next = 19;
                        return this.crypto.base64(JSON.stringify(auth_params));

                      case 19:
                        authParamsString = _context142.sent;
                        fullCiphertext = [auth_params.version, authHash, uuid, iv, contentCiphertext, authParamsString].join(":");

                      case 21:
                        return _context142.abrupt("return", fullCiphertext);

                      case 22:
                      case "end":
                        return _context142.stop();
                    }
                  }
                }, _callee142, this);
              }));

              function _private_encryptString(_x185, _x186, _x187, _x188, _x189) {
                return _ref151.apply(this, arguments);
              }

              return _private_encryptString;
            }()
          }, {
            key: "encryptItem",
            value: function () {
              var _ref152 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee143(item, keys, auth_params) {
                var params, item_key, ek, ak, ciphertext, authHash;
                return regeneratorRuntime.wrap(function _callee143$(_context143) {
                  while (1) {
                    switch (_context143.prev = _context143.next) {
                      case 0:
                        params = {}; // encrypt item key

                        _context143.next = 3;
                        return this.crypto.generateItemEncryptionKey();

                      case 3:
                        item_key = _context143.sent;

                        if (!(auth_params.version === "001")) {
                          _context143.next = 10;
                          break;
                        }

                        _context143.next = 7;
                        return this.crypto.encryptText(item_key, keys.mk, null);

                      case 7:
                        params.enc_item_key = _context143.sent;
                        _context143.next = 13;
                        break;

                      case 10:
                        _context143.next = 12;
                        return this._private_encryptString(item_key, keys.mk, keys.ak, item.uuid, auth_params);

                      case 12:
                        params.enc_item_key = _context143.sent;

                      case 13:
                        _context143.next = 15;
                        return this.crypto.firstHalfOfKey(item_key);

                      case 15:
                        ek = _context143.sent;
                        _context143.next = 18;
                        return this.crypto.secondHalfOfKey(item_key);

                      case 18:
                        ak = _context143.sent;
                        _context143.next = 21;
                        return this._private_encryptString(JSON.stringify(item.createContentJSONFromProperties()), ek, ak, item.uuid, auth_params);

                      case 21:
                        ciphertext = _context143.sent;

                        if (!(auth_params.version === "001")) {
                          _context143.next = 27;
                          break;
                        }

                        _context143.next = 25;
                        return this.crypto.hmac256(ciphertext, ak);

                      case 25:
                        authHash = _context143.sent;
                        params.auth_hash = authHash;

                      case 27:
                        params.content = ciphertext;
                        return _context143.abrupt("return", params);

                      case 29:
                      case "end":
                        return _context143.stop();
                    }
                  }
                }, _callee143, this);
              }));

              function encryptItem(_x190, _x191, _x192) {
                return _ref152.apply(this, arguments);
              }

              return encryptItem;
            }()
          }, {
            key: "encryptionComponentsFromString",
            value: function encryptionComponentsFromString(string, encryptionKey, authKey) {
              var encryptionVersion = string.substring(0, 3);

              if (encryptionVersion === "001") {
                return {
                  contentCiphertext: string.substring(3, string.length),
                  encryptionVersion: encryptionVersion,
                  ciphertextToAuth: string,
                  iv: null,
                  authHash: null,
                  encryptionKey: encryptionKey,
                  authKey: authKey
                };
              } else {
                var components = string.split(":");
                return {
                  encryptionVersion: components[0],
                  authHash: components[1],
                  uuid: components[2],
                  iv: components[3],
                  contentCiphertext: components[4],
                  authParams: components[5],
                  ciphertextToAuth: [components[0], components[2], components[3], components[4]].join(":"),
                  encryptionKey: encryptionKey,
                  authKey: authKey
                };
              }
            }
          }, {
            key: "decryptItem",
            value: function () {
              var _ref153 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee144(item, keys) {
                var encryptedItemKey, requiresAuth, keyParams, item_key, ek, ak, itemParams, content;
                return regeneratorRuntime.wrap(function _callee144$(_context144) {
                  while (1) {
                    switch (_context144.prev = _context144.next) {
                      case 0:
                        if (!(typeof item.content != "string")) {
                          _context144.next = 2;
                          break;
                        }

                        return _context144.abrupt("return");

                      case 2:
                        if (!item.content.startsWith("000")) {
                          _context144.next = 14;
                          break;
                        }

                        _context144.prev = 3;
                        _context144.t0 = JSON;
                        _context144.next = 7;
                        return this.crypto.base64Decode(item.content.substring(3, item.content.length));

                      case 7:
                        _context144.t1 = _context144.sent;
                        item.content = _context144.t0.parse.call(_context144.t0, _context144.t1);
                        _context144.next = 13;
                        break;

                      case 11:
                        _context144.prev = 11;
                        _context144.t2 = _context144["catch"](3);

                      case 13:
                        return _context144.abrupt("return");

                      case 14:
                        if (item.enc_item_key) {
                          _context144.next = 17;
                          break;
                        } // This needs to be here to continue, return otherwise


                        console.log("Missing item encryption key, skipping decryption.");
                        return _context144.abrupt("return");

                      case 17:
                        // decrypt encrypted key
                        encryptedItemKey = item.enc_item_key;
                        requiresAuth = true;

                        if (!encryptedItemKey.startsWith("002") && !encryptedItemKey.startsWith("003")) {
                          // legacy encryption type, has no prefix
                          encryptedItemKey = "001" + encryptedItemKey;
                          requiresAuth = false;
                        }

                        keyParams = this.encryptionComponentsFromString(encryptedItemKey, keys.mk, keys.ak); // return if uuid in auth hash does not match item uuid. Signs of tampering.

                        if (!(keyParams.uuid && keyParams.uuid !== item.uuid)) {
                          _context144.next = 26;
                          break;
                        }

                        console.error("Item key params UUID does not match item UUID");

                        if (!item.errorDecrypting) {
                          item.errorDecryptingValueChanged = true;
                        }

                        item.errorDecrypting = true;
                        return _context144.abrupt("return");

                      case 26:
                        _context144.next = 28;
                        return this.crypto.decryptText(keyParams, requiresAuth);

                      case 28:
                        item_key = _context144.sent;

                        if (item_key) {
                          _context144.next = 34;
                          break;
                        }

                        console.log("Error decrypting item", item);

                        if (!item.errorDecrypting) {
                          item.errorDecryptingValueChanged = true;
                        }

                        item.errorDecrypting = true;
                        return _context144.abrupt("return");

                      case 34:
                        _context144.next = 36;
                        return this.crypto.firstHalfOfKey(item_key);

                      case 36:
                        ek = _context144.sent;
                        _context144.next = 39;
                        return this.crypto.secondHalfOfKey(item_key);

                      case 39:
                        ak = _context144.sent;
                        itemParams = this.encryptionComponentsFromString(item.content, ek, ak);
                        _context144.prev = 41;
                        _context144.t3 = JSON;
                        _context144.next = 45;
                        return this.crypto.base64Decode(itemParams.authParams);

                      case 45:
                        _context144.t4 = _context144.sent;
                        item.auth_params = _context144.t3.parse.call(_context144.t3, _context144.t4);
                        _context144.next = 51;
                        break;

                      case 49:
                        _context144.prev = 49;
                        _context144.t5 = _context144["catch"](41);

                      case 51:
                        if (!(itemParams.uuid && itemParams.uuid !== item.uuid)) {
                          _context144.next = 55;
                          break;
                        }

                        if (!item.errorDecrypting) {
                          item.errorDecryptingValueChanged = true;
                        }

                        item.errorDecrypting = true;
                        return _context144.abrupt("return");

                      case 55:
                        if (!itemParams.authHash) {
                          // legacy 001
                          itemParams.authHash = item.auth_hash;
                        }

                        _context144.next = 58;
                        return this.crypto.decryptText(itemParams, true);

                      case 58:
                        content = _context144.sent;

                        if (!content) {
                          if (!item.errorDecrypting) {
                            item.errorDecryptingValueChanged = true;
                          }

                          item.errorDecrypting = true;
                        } else {
                          if (item.errorDecrypting == true) {
                            item.errorDecryptingValueChanged = true;
                          } // Content should only be set if it was successfully decrypted, and should otherwise remain unchanged.


                          item.errorDecrypting = false;
                          item.content = content;
                        }

                      case 60:
                      case "end":
                        return _context144.stop();
                    }
                  }
                }, _callee144, this, [[3, 11], [41, 49]]);
              }));

              function decryptItem(_x193, _x194) {
                return _ref153.apply(this, arguments);
              }

              return decryptItem;
            }()
          }, {
            key: "decryptMultipleItems",
            value: function () {
              var _ref154 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee146(items, keys, throws) {
                var _this36 = this;

                var decrypt;
                return regeneratorRuntime.wrap(function _callee146$(_context146) {
                  while (1) {
                    switch (_context146.prev = _context146.next) {
                      case 0:
                        decrypt = function () {
                          var _ref155 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee145(item) {
                            var isString;
                            return regeneratorRuntime.wrap(function _callee145$(_context145) {
                              while (1) {
                                switch (_context145.prev = _context145.next) {
                                  case 0:
                                    if (item) {
                                      _context145.next = 2;
                                      break;
                                    }

                                    return _context145.abrupt("return");

                                  case 2:
                                    if (!(item.deleted == true && item.content == null)) {
                                      _context145.next = 4;
                                      break;
                                    }

                                    return _context145.abrupt("return");

                                  case 4:
                                    isString = typeof item.content === 'string' || item.content instanceof String;

                                    if (!isString) {
                                      _context145.next = 19;
                                      break;
                                    }

                                    _context145.prev = 6;
                                    _context145.next = 9;
                                    return _this36.decryptItem(item, keys);

                                  case 9:
                                    _context145.next = 19;
                                    break;

                                  case 11:
                                    _context145.prev = 11;
                                    _context145.t0 = _context145["catch"](6);

                                    if (!item.errorDecrypting) {
                                      item.errorDecryptingValueChanged = true;
                                    }

                                    item.errorDecrypting = true;

                                    if (!throws) {
                                      _context145.next = 17;
                                      break;
                                    }

                                    throw _context145.t0;

                                  case 17:
                                    console.error("Error decrypting item", item, _context145.t0);
                                    return _context145.abrupt("return");

                                  case 19:
                                  case "end":
                                    return _context145.stop();
                                }
                              }
                            }, _callee145, _this36, [[6, 11]]);
                          }));

                          return function decrypt(_x198) {
                            return _ref155.apply(this, arguments);
                          };
                        }();

                        return _context146.abrupt("return", Promise.all(items.map(function (item) {
                          return decrypt(item);
                        })));

                      case 2:
                      case "end":
                        return _context146.stop();
                    }
                  }
                }, _callee146, this);
              }));

              function decryptMultipleItems(_x195, _x196, _x197) {
                return _ref154.apply(this, arguments);
              }

              return decryptMultipleItems;
            }()
          }]);

          return SFItemTransformer;
        }();

        ;
        var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

        var StandardFile = exports.StandardFile = function () {
          function StandardFile(cryptoInstance) {
            _classCallCheck(this, StandardFile); // This library runs in native environments as well (react native)


            if (globalScope) {
              // detect IE8 and above, and edge.
              // IE and Edge do not support pbkdf2 in WebCrypto, therefore we need to use CryptoJS
              var IEOrEdge = typeof document !== 'undefined' && document.documentMode || /Edge/.test(navigator.userAgent);

              if (!IEOrEdge && globalScope.crypto && globalScope.crypto.subtle) {
                this.crypto = new SFCryptoWeb();
              } else {
                this.crypto = new SFCryptoJS();
              }
            } // This must be placed outside window check, as it's used in native.


            if (cryptoInstance) {
              this.crypto = cryptoInstance;
            }

            this.itemTransformer = new SFItemTransformer(this.crypto);
            this.crypto.SFJS = {
              version: this.version(),
              defaultPasswordGenerationCost: this.defaultPasswordGenerationCost()
            };
          }

          _createClass(StandardFile, [{
            key: "version",
            value: function version() {
              return "003";
            }
          }, {
            key: "supportsPasswordDerivationCost",
            value: function supportsPasswordDerivationCost(cost) {
              // some passwords are created on platforms with stronger pbkdf2 capabilities, like iOS,
              // which CryptoJS can't handle here (WebCrypto can however).
              // if user has high password cost and is using browser that doesn't support WebCrypto,
              // we want to tell them that they can't login with this browser.
              if (cost > 5000) {
                return this.crypto instanceof SFCryptoWeb;
              } else {
                return true;
              }
            } // Returns the versions that this library supports technically.

          }, {
            key: "supportedVersions",
            value: function supportedVersions() {
              return ["001", "002", "003"];
            }
          }, {
            key: "isVersionNewerThanLibraryVersion",
            value: function isVersionNewerThanLibraryVersion(version) {
              var libraryVersion = this.version();
              return parseInt(version) > parseInt(libraryVersion);
            }
          }, {
            key: "isProtocolVersionOutdated",
            value: function isProtocolVersionOutdated(version) {
              // YYYY-MM-DD
              var expirationDates = {
                "001": Date.parse("2018-01-01"),
                "002": Date.parse("2020-01-01")
              };
              var date = expirationDates[version];

              if (!date) {
                // No expiration date, is active version
                return false;
              }

              var expired = new Date() > date;
              return expired;
            }
          }, {
            key: "costMinimumForVersion",
            value: function costMinimumForVersion(version) {
              return {
                "001": 3000,
                "002": 3000,
                "003": 110000
              }[version];
            }
          }, {
            key: "defaultPasswordGenerationCost",
            value: function defaultPasswordGenerationCost() {
              return this.costMinimumForVersion(this.version());
            }
          }]);

          return StandardFile;
        }();

        if (globalScope) {
          // window is for some reason defined in React Native, but throws an exception when you try to set to it
          try {
            globalScope.StandardFile = StandardFile;
            globalScope.SFJS = new StandardFile();
            globalScope.SFCryptoWeb = SFCryptoWeb;
            globalScope.SFCryptoJS = SFCryptoJS;
            globalScope.SFItemTransformer = SFItemTransformer;
            globalScope.SFModelManager = SFModelManager;
            globalScope.SFItem = SFItem;
            globalScope.SFItemParams = SFItemParams;
            globalScope.SFHttpManager = SFHttpManager;
            globalScope.SFStorageManager = SFStorageManager;
            globalScope.SFSyncManager = SFSyncManager;
            globalScope.SFAuthManager = SFAuthManager;
            globalScope.SFMigrationManager = SFMigrationManager;
            globalScope.SFAlertManager = SFAlertManager;
            globalScope.SFPredicate = SFPredicate;
            globalScope.SFHistorySession = SFHistorySession;
            globalScope.SFSessionHistoryManager = SFSessionHistoryManager;
            globalScope.SFItemHistory = SFItemHistory;
            globalScope.SFItemHistoryEntry = SFItemHistoryEntry;
            globalScope.SFPrivilegesManager = SFPrivilegesManager;
            globalScope.SFPrivileges = SFPrivileges;
            globalScope.SFSingletonManager = SFSingletonManager;
          } catch (e) {
            console.log("Exception while exporting window variables", e);
          }
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}]
  }, {}, [1])(1);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionBridge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js_dist_lodash_min_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js_dist_lodash_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_standard_file_js_dist_lodash_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_standard_file_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_standard_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_standard_file_js__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ExtensionBridge =
/*#__PURE__*/
function () {
  function ExtensionBridge(componentManager) {
    _classCallCheck(this, ExtensionBridge);

    this.componentManager = componentManager;
    this.updateObservers = [];
    this.items = [];
  }

  _createClass(ExtensionBridge, [{
    key: "getPlatform",
    value: function getPlatform() {
      return this.componentManager.platform;
    }
  }, {
    key: "getEnvironment",
    value: function getEnvironment() {
      return this.componentManager.environment;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return this.getEnvironment() == "mobile";
    }
  }, {
    key: "addEventHandler",
    value: function addEventHandler(callback) {
      var observer = {
        id: Math.random,
        callback: callback
      };
      this.updateObservers.push(observer);
      return observer;
    }
  }, {
    key: "removeUpdateObserver",
    value: function removeUpdateObserver(observer) {
      this.updateObservers.splice(this.updateObservers.indexOf(observer), 1);
    }
  }, {
    key: "notifyObserversOfEvent",
    value: function notifyObserversOfEvent(event) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.updateObservers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var observer = _step.value;
          observer.callback(event);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "filterItems",
    value: function filterItems(contentType) {
      return this.items.filter(function (item) {
        return item.content_type == contentType;
      });
    }
  }, {
    key: "getFileDescriptors",
    value: function getFileDescriptors() {
      return this.filterItems(ExtensionBridge.FileDescriptorContentTypeKey);
    }
  }, {
    key: "beginStreamingFiles",
    value: function beginStreamingFiles() {
      var _this = this;

      var contentTypes = [ExtensionBridge.FileDescriptorContentTypeKey, ExtensionBridge.FileSafeCredentialsContentType, ExtensionBridge.FileSafeIntegrationContentTypeKey];
      this.componentManager.streamItems(contentTypes, function (items) {
        _this.handleStreamItemsMessage(items);
      });
    }
  }, {
    key: "handleStreamItemsMessage",
    value: function () {
      var _handleStreamItemsMessage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(items) {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, index;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 3;
                _iterator2 = items[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 18;
                  break;
                }

                item = _step2.value;
                item = new __WEBPACK_IMPORTED_MODULE_2_standard_file_js__["SFItem"](item);

                if (!item.deleted) {
                  _context.next = 11;
                  break;
                }

                this.removeItemFromItems(item);
                return _context.abrupt("continue", 15);

              case 11:
                if (!item.isMetadataUpdate) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("continue", 15);

              case 13:
                index = this.indexOfItem(item);

                if (index >= 0) {
                  this.items[index] = item;
                } else {
                  this.items.push(item);
                }

              case 15:
                _iteratorNormalCompletion2 = true;
                _context.next = 5;
                break;

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](3);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 24:
                _context.prev = 24;
                _context.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 27:
                _context.prev = 27;

                if (!_didIteratorError2) {
                  _context.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context.finish(27);

              case 31:
                return _context.finish(24);

              case 32:
                this.notifyObserversOfEvent(ExtensionBridge.BridgeEventReceivedItems);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 20, 24, 32], [25,, 27, 31]]);
      }));

      function handleStreamItemsMessage(_x) {
        return _handleStreamItemsMessage.apply(this, arguments);
      }

      return handleStreamItemsMessage;
    }()
  }, {
    key: "indexOfItem",
    value: function indexOfItem(item) {
      for (var index in this.items) {
        if (this.items[index].uuid == item.uuid) {
          return index;
        }
      }

      return -1;
    }
  }, {
    key: "removeItemFromItems",
    value: function removeItemFromItems(item) {
      this.items = this.items.filter(function (candidate) {
        return candidate.uuid !== item.uuid;
      });
    }
  }, {
    key: "createItem",
    value: function createItem(item, callback) {
      this.createItems([item], callback);
    }
  }, {
    key: "createItems",
    value: function createItems(items, callback) {
      // Not sure why we're nulling UUIDs here. If this was neccessary, componentManager should be the one to do it.
      // for(var item of items) { item.uuid = null; }
      this.componentManager.createItems(items, function (createdItems) {
        callback && callback(createdItems.map(function (item) {
          return new __WEBPACK_IMPORTED_MODULE_2_standard_file_js__["SFItem"](item);
        }));
      });
    }
  }, {
    key: "saveItem",
    value: function () {
      var _saveItem = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(item) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.saveItems([item]));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function saveItem(_x2) {
        return _saveItem.apply(this, arguments);
      }

      return saveItem;
    }()
  }, {
    key: "saveItems",
    value: function () {
      var _saveItems = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(items) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.componentManager.saveItems(items, function (response) {
                    resolve(response);

                    _this2.notifyObserversOfEvent(ExtensionBridge.BridgeEventSavedItem);
                  });
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function saveItems(_x3) {
        return _saveItems.apply(this, arguments);
      }

      return saveItems;
    }()
  }, {
    key: "indexOfItem",
    value: function indexOfItem(item) {
      for (var index in this.items) {
        if (this.items[index].uuid == item.uuid) {
          return index;
        }
      }

      return -1;
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item, callback) {
      this.deleteItems([item], callback);
    }
  }, {
    key: "deleteItems",
    value: function deleteItems(items, callback) {
      this.componentManager.deleteItems(items, callback);
    }
  }, {
    key: "removeItemFromItems",
    value: function removeItemFromItems(item) {
      this.items = this.items.filter(function (candidate) {
        return candidate.uuid !== item.uuid;
      });
    }
  }]);

  return ExtensionBridge;
}();

_defineProperty(ExtensionBridge, "FileItemContentTypeKey", "SN|FileSafe|File");

_defineProperty(ExtensionBridge, "FileSafeCredentialsContentType", "SN|FileSafe|Credentials");

_defineProperty(ExtensionBridge, "FileDescriptorContentTypeKey", "SN|FileSafe|FileMetadata");

_defineProperty(ExtensionBridge, "FileSafeIntegrationContentTypeKey", "SN|FileSafe|Integration");

_defineProperty(ExtensionBridge, "BridgeEventLoadedCredentials", "BridgeEventLoadedCredentials");

_defineProperty(ExtensionBridge, "BridgeEventReceivedItems", "BridgeEventReceivedItems");

_defineProperty(ExtensionBridge, "BridgeEventSavedItem", "BridgeEventSavedItem");



/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filesafe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_ExtensionBridge__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_RelayManager__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_IntegrationManager__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_CredentialManager__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_FileManager__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_standard_file_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_standard_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_standard_file_js__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Filesafe =
/*#__PURE__*/
function () {
  _createClass(Filesafe, null, [{
    key: "getSFItemClass",
    // Allow consumers to construct these objects without including entire standard-file-js lib
    value: function getSFItemClass() {
      return __WEBPACK_IMPORTED_MODULE_6_standard_file_js__["SFItem"];
    }
  }]);

  function Filesafe(_ref) {
    var _this = this;

    var componentManager = _ref.componentManager;

    _classCallCheck(this, Filesafe);

    this.dataChangeObservers = [];
    this.newFileDescriptorHandlers = [];
    this.extensionBridge = new __WEBPACK_IMPORTED_MODULE_0__lib_ExtensionBridge__["a" /* default */](componentManager);
    this.extensionBridge.addEventHandler(function (eventName) {
      _this.notifyObservers();
    });
    this.relayManager = new __WEBPACK_IMPORTED_MODULE_1__lib_RelayManager__["a" /* default */]();
    this.integrationManager = new __WEBPACK_IMPORTED_MODULE_2__lib_IntegrationManager__["a" /* default */](this.extensionBridge);
    this.credentialManager = new __WEBPACK_IMPORTED_MODULE_3__lib_CredentialManager__["a" /* default */]({
      extensionBridge: this.extensionBridge,
      onCredentialLoad: function onCredentialLoad() {
        _this.relayManager.setCredentials(_this.credentialManager.getDefaultCredentials());
      }
    });
    this.fileManager = new __WEBPACK_IMPORTED_MODULE_4__lib_FileManager__["a" /* default */](this.extensionBridge, this.relayManager, this.integrationManager, this.credentialManager);
    this.extensionBridge.beginStreamingFiles();
  }
  /*
    Observe changes
  */


  _createClass(Filesafe, [{
    key: "addNewFileDescriptorHandler",
    value: function addNewFileDescriptorHandler(handler) {
      this.newFileDescriptorHandlers.push(handler);
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.dataChangeObservers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var observer = _step.value;
          observer();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "addDataChangeObserver",
    value: function addDataChangeObserver(observer) {
      this.dataChangeObservers.push(observer);
      return observer;
    }
  }, {
    key: "removeDataChangeObserver",
    value: function removeDataChangeObserver(observer) {
      this.dataChangeObservers = this.dataChangeObservers.filter(function (candidate) {
        return candidate != observer;
      });
    }
    /* Set current note. Used by filesafe-embed to show files for current note. */

  }, {
    key: "setCurrentNote",
    value: function setCurrentNote(note) {
      this.currentNote = note;
      this.notifyObservers();
    }
    /* Files */

  }, {
    key: "getAllFileDescriptors",
    value: function getAllFileDescriptors() {
      return this.fileManager.getAllFileDescriptors();
    }
  }, {
    key: "findFileDescriptor",
    value: function findFileDescriptor(uuid) {
      return this.fileManager.findFileDescriptor(uuid);
    }
  }, {
    key: "fileDescriptorsForCurrentNote",
    value: function fileDescriptorsForCurrentNote() {
      return this.fileManager.fileDescriptorsForNote(this.currentNote);
    }
  }, {
    key: "fileDescriptorsForNote",
    value: function fileDescriptorsForNote(note) {
      return this.fileManager.fileDescriptorsForNote(note);
    }
  }, {
    key: "fileDescriptorsEncryptedWithCredential",
    value: function fileDescriptorsEncryptedWithCredential(credential) {
      return this.fileManager.fileDescriptorsEncryptedWithCredential(credential);
    }
  }, {
    key: "deleteFileFromDescriptor",
    value: function () {
      var _deleteFileFromDescriptor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fileDescriptor) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.fileManager.deleteFileFromDescriptor(fileDescriptor));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteFileFromDescriptor(_x) {
        return _deleteFileFromDescriptor.apply(this, arguments);
      }

      return deleteFileFromDescriptor;
    }()
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref2) {
        var fileItem, inputFileName, fileType, credential, note, descriptor, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, observer;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fileItem = _ref2.fileItem, inputFileName = _ref2.inputFileName, fileType = _ref2.fileType, credential = _ref2.credential, note = _ref2.note;

                if (!note) {
                  note = this.currentNote;
                }

                _context2.next = 4;
                return this.fileManager.uploadFile({
                  fileItem: fileItem,
                  inputFileName: inputFileName,
                  fileType: fileType,
                  credential: credential,
                  note: note
                });

              case 4:
                descriptor = _context2.sent;

                if (!descriptor) {
                  _context2.next = 25;
                  break;
                }

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 9;

                for (_iterator2 = this.newFileDescriptorHandlers[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  observer = _step2.value;
                  observer(descriptor);
                }

                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](9);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 17:
                _context2.prev = 17;
                _context2.prev = 18;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 20:
                _context2.prev = 20;

                if (!_didIteratorError2) {
                  _context2.next = 23;
                  break;
                }

                throw _iteratorError2;

              case 23:
                return _context2.finish(20);

              case 24:
                return _context2.finish(17);

              case 25:
                return _context2.abrupt("return", descriptor);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[9, 13, 17, 25], [18,, 20, 24]]);
      }));

      function uploadFile(_x2) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "encryptAndUploadJavaScriptFileObject",
    value: function () {
      var _encryptAndUploadJavaScriptFileObject = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(jsFile) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();

                  reader.onload =
                  /*#__PURE__*/
                  function () {
                    var _ref3 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3(e) {
                      var data, arrayBuffer, base64Data, result;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              data = e.target.result;
                              arrayBuffer = data;
                              _context3.next = 4;
                              return SFJS.crypto.arrayBufferToBase64(arrayBuffer);

                            case 4:
                              base64Data = _context3.sent;
                              _context3.next = 7;
                              return _this2.encryptAndUploadData({
                                base64Data: base64Data,
                                inputFileName: jsFile.name,
                                fileType: jsFile.type
                              });

                            case 7:
                              result = _context3.sent;
                              resolve(result);

                            case 9:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x4) {
                      return _ref3.apply(this, arguments);
                    };
                  }();

                  reader.readAsArrayBuffer(jsFile);
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function encryptAndUploadJavaScriptFileObject(_x3) {
        return _encryptAndUploadJavaScriptFileObject.apply(this, arguments);
      }

      return encryptAndUploadJavaScriptFileObject;
    }()
  }, {
    key: "encryptAndUploadData",
    value: function () {
      var _encryptAndUploadData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(_ref4) {
        var _this3 = this;

        var base64Data, inputFileName, fileType, credential;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                base64Data = _ref4.base64Data, inputFileName = _ref4.inputFileName, fileType = _ref4.fileType;
                credential = this.getDefaultCredentials();
                return _context6.abrupt("return", this.encryptFile({
                  data: base64Data,
                  inputFileName: inputFileName,
                  fileType: fileType,
                  credential: credential
                }).then(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5(fileItem) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.abrupt("return", _this3.uploadFile({
                              fileItem: fileItem,
                              inputFileName: inputFileName,
                              fileType: fileType,
                              credential: credential
                            })["catch"](function (uploadError) {
                              console.error("filesafe-js | error uploading file:", uploadError);
                            }));

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x6) {
                    return _ref5.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function encryptAndUploadData(_x5) {
        return _encryptAndUploadData.apply(this, arguments);
      }

      return encryptAndUploadData;
    }()
  }, {
    key: "downloadFileFromDescriptor",
    value: function () {
      var _downloadFileFromDescriptor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(fileDescriptor) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.fileManager.downloadFileFromDescriptor(fileDescriptor));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function downloadFileFromDescriptor(_x7) {
        return _downloadFileFromDescriptor.apply(this, arguments);
      }

      return downloadFileFromDescriptor;
    }()
  }, {
    key: "encryptFile",
    value: function () {
      var _encryptFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(_ref6) {
        var data, inputFileName, fileType, credential;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                data = _ref6.data, inputFileName = _ref6.inputFileName, fileType = _ref6.fileType, credential = _ref6.credential;
                return _context8.abrupt("return", this.fileManager.encryptFile({
                  data: data,
                  inputFileName: inputFileName,
                  fileType: fileType,
                  credential: credential
                }));

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function encryptFile(_x8) {
        return _encryptFile.apply(this, arguments);
      }

      return encryptFile;
    }()
    /*
      if fileDescriptor is available, we'll use that to determine credentials
      otherwise, passed in credential will be used
     */

  }, {
    key: "decryptFile",
    value: function () {
      var _decryptFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(_ref7) {
        var fileDescriptor, fileItem, credential;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                fileDescriptor = _ref7.fileDescriptor, fileItem = _ref7.fileItem, credential = _ref7.credential;
                return _context9.abrupt("return", this.fileManager.decryptFile({
                  fileDescriptor: fileDescriptor,
                  fileItem: fileItem,
                  credential: credential
                }));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function decryptFile(_x9) {
        return _decryptFile.apply(this, arguments);
      }

      return decryptFile;
    }()
  }, {
    key: "downloadBase64Data",
    value: function downloadBase64Data(_ref8) {
      var base64Data = _ref8.base64Data,
          fileName = _ref8.fileName,
          fileType = _ref8.fileType;
      __WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].downloadData(__WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].base64toBinary(base64Data), fileName, fileType);
    }
  }, {
    key: "createTemporaryFileUrl",
    value: function createTemporaryFileUrl(_ref9) {
      var base64Data = _ref9.base64Data,
          dataType = _ref9.dataType;
      return __WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].tempUrlForData(__WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].base64toBinary(base64Data), dataType);
    }
  }, {
    key: "revokeTempUrl",
    value: function revokeTempUrl(url) {
      __WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].revokeTempUrl(url);
    }
    /* Credentials */

  }, {
    key: "createNewCredentials",
    value: function () {
      var _createNewCredentials = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.credentialManager.createNewCredentials());

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function createNewCredentials() {
        return _createNewCredentials.apply(this, arguments);
      }

      return createNewCredentials;
    }()
  }, {
    key: "numberOfFilesEncryptedWithCredential",
    value: function numberOfFilesEncryptedWithCredential(credential) {
      return this.fileManager.fileDescriptorsEncryptedWithCredential(credential).length;
    }
  }, {
    key: "credentialForFileDescriptor",
    value: function credentialForFileDescriptor(fileDescriptor) {
      return this.credentialManager.credentialForFileDescriptor(fileDescriptor);
    }
  }, {
    key: "getAllCredentials",
    value: function getAllCredentials() {
      return this.credentialManager.getAllCredentials();
    }
  }, {
    key: "getDefaultCredentials",
    value: function getDefaultCredentials() {
      return this.credentialManager.getDefaultCredentials();
    }
  }, {
    key: "setCredentialAsDefault",
    value: function setCredentialAsDefault(credential) {
      return this.credentialManager.setCredentialAsDefault(credential);
    }
  }, {
    key: "deleteCredential",
    value: function deleteCredential(credential) {
      return this.credentialManager.deleteCredential(credential);
    }
  }, {
    key: "saveCredential",
    value: function saveCredential(credential) {
      return this.credentialManager.saveCredential(credential);
    }
    /* Integrations */

  }, {
    key: "getAllIntegrations",
    value: function getAllIntegrations() {
      return this.integrationManager.integrations;
    }
  }, {
    key: "integrationForFileDescriptor",
    value: function integrationForFileDescriptor(fileDescriptor) {
      return this.integrationManager.integrationForFileDescriptor(fileDescriptor);
    }
  }, {
    key: "saveIntegrationFromCode",
    value: function saveIntegrationFromCode(code) {
      return this.integrationManager.saveIntegrationFromCode(code);
    }
  }, {
    key: "getDefaultIntegration",
    value: function getDefaultIntegration() {
      return this.integrationManager.getDefaultIntegration();
    }
  }, {
    key: "setIntegrationAsDefault",
    value: function setIntegrationAsDefault(integration) {
      return this.integrationManager.setIntegrationAsDefault(integration);
    }
  }, {
    key: "deleteIntegration",
    value: function deleteIntegration(integration) {
      return this.integrationManager.deleteIntegration(integration);
    }
  }, {
    key: "displayStringForIntegration",
    value: function displayStringForIntegration(integration) {
      return this.integrationManager.displayStringForIntegration(integration);
    }
    /*
      Misc
    */

  }, {
    key: "base64toBinary",
    value: function base64toBinary(base64String) {
      return __WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].base64toBinary(base64String);
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return this.extensionBridge.isMobile();
    }
    /* desktop, web, mobile */

  }, {
    key: "getEnvironment",
    value: function getEnvironment() {
      return this.extensionBridge.getEnvironment();
    }
    /* desktop-{os}, web-{os}, ios, android */

  }, {
    key: "getPlatform",
    value: function getPlatform() {
      return this.extensionBridge.getPlatform();
    }
  }, {
    key: "copyTextToClipboard",
    value: function copyTextToClipboard(text) {
      return __WEBPACK_IMPORTED_MODULE_5__lib_util_Utils__["a" /* default */].copyTextToClipboard(text);
    }
  }]);

  return Filesafe;
}();



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="includes,merge,filter,map,remove,find,omit,pull,cloneDeep,pick,uniq,sortedIndexBy,mergeWith"`
 */
;
(function () {
  function t(t, e) {
    return t.set(e[0], e[1]), t;
  }

  function e(t, e) {
    return t.add(e), t;
  }

  function n(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);

      case 1:
        return t.call(e, n[0]);

      case 2:
        return t.call(e, n[0], n[1]);

      case 3:
        return t.call(e, n[0], n[1], n[2]);
    }

    return t.apply(e, n);
  }

  function r(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && false !== e(t[n], n, t););
  }

  function o(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, o = 0, u = []; ++n < r;) {
      var c = t[n];
      e(c, n, t) && (u[o++] = c);
    }

    return u;
  }

  function u(t, e) {
    return !(null == t || !t.length) && -1 < s(t, e, 0);
  }

  function c(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);

    return o;
  }

  function i(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];

    return t;
  }

  function a(t, e, n) {
    for (var r = -1, o = null == t ? 0 : t.length; ++r < o;) n = e(n, t[r], r, t);

    return n;
  }

  function f(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return true;

    return false;
  }

  function l(t, e, n) {
    var r = t.length;

    for (n += -1; ++n < r;) if (e(t[n], n, t)) return n;

    return -1;
  }

  function s(t, e, n) {
    if (e === e) t: {
      --n;

      for (var r = t.length; ++n < r;) if (t[n] === e) {
        t = n;
        break t;
      }

      t = -1;
    } else t = l(t, b, n);
    return t;
  }

  function b(t) {
    return t !== t;
  }

  function h(t) {
    return function (e) {
      return null == e ? ae : e[t];
    };
  }

  function p(t) {
    return function (e) {
      return t(e);
    };
  }

  function y(t, e) {
    return c(e, function (e) {
      return t[e];
    });
  }

  function j(t, e) {
    return t.has(e);
  }

  function v(t) {
    var e = -1,
        n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [r, t];
    }), n;
  }

  function g(t) {
    var e = Object;
    return function (n) {
      return t(e(n));
    };
  }

  function _(t) {
    var e = -1,
        n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t;
    }), n;
  }

  function d() {}

  function A(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  function w(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  function m(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  function O(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.__data__ = new m(); ++e < n;) this.add(t[e]);
  }

  function S(t) {
    this.size = (this.__data__ = new w(t)).size;
  }

  function k(t, e) {
    var n = Dn(t),
        r = !n && Bn(t),
        o = !n && !r && Pn(t),
        u = !n && !r && !o && Ln(t);

    if (n = n || r || o || u) {
      for (var r = t.length, c = String, i = -1, a = Array(r); ++i < r;) a[i] = c(i);

      r = a;
    } else r = [];

    var f,
        c = r.length;

    for (f in t) !e && !Ne.call(t, f) || n && ("length" == f || o && ("offset" == f || "parent" == f) || u && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || mt(f, c)) || r.push(f);

    return r;
  }

  function z(t, e, n) {
    (n === ae || Bt(t[e], n)) && (n !== ae || e in t) || M(t, e, n);
  }

  function x(t, e, n) {
    var r = t[e];
    Ne.call(t, e) && Bt(r, n) && (n !== ae || e in t) || M(t, e, n);
  }

  function I(t, e) {
    for (var n = t.length; n--;) if (Bt(t[n][0], e)) return n;

    return -1;
  }

  function F(t, e) {
    return t && ut(e, Yt(e), t);
  }

  function E(t, e) {
    return t && ut(e, Zt(e), t);
  }

  function M(t, e, n) {
    "__proto__" == e && tn ? tn(t, e, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : t[e] = n;
  }

  function $(t, e, n, o, u, c) {
    var i,
        a = 1 & e,
        f = 2 & e,
        l = 4 & e;
    if (n && (i = u ? n(t, o, u, c) : n(t)), i !== ae) return i;
    if (!Vt(t)) return t;

    if (o = Dn(t)) {
      if (i = _t(t), !a) return ot(t, i);
    } else {
      var s = Fn(t),
          b = "[object Function]" == s || "[object GeneratorFunction]" == s;
      if (Pn(t)) return et(t, a);

      if ("[object Object]" == s || "[object Arguments]" == s || b && !u) {
        if (i = f || b ? {} : dt(t), !a) return f ? it(t, E(i, t)) : ct(t, F(i, t));
      } else {
        if (!Oe[s]) return u ? t : {};
        i = At(t, s, $, a);
      }
    }

    if (c || (c = new S()), u = c.get(t)) return u;
    c.set(t, i);
    var f = l ? f ? pt : ht : f ? Zt : Yt,
        h = o ? ae : f(t);
    return r(h || t, function (r, o) {
      h && (o = r, r = t[o]), x(i, o, $(r, e, n, o, t, c));
    }), i;
  }

  function U(t, e) {
    var n = [];
    return On(t, function (t, r, o) {
      e(t, r, o) && n.push(t);
    }), n;
  }

  function B(t, e, n, r, o) {
    var u = -1,
        c = t.length;

    for (n || (n = wt), o || (o = []); ++u < c;) {
      var a = t[u];
      0 < e && n(a) ? 1 < e ? B(a, e - 1, n, r, o) : i(o, a) : r || (o[o.length] = a);
    }

    return o;
  }

  function D(t, e) {
    e = tt(e, t);

    for (var n = 0, r = e.length; null != t && n < r;) t = t[xt(e[n++])];

    return n && n == r ? t : ae;
  }

  function P(t, e, n) {
    return e = e(t), Dn(t) ? e : i(e, n(t));
  }

  function L(t) {
    if (null == t) t = t === ae ? "[object Undefined]" : "[object Null]";else if (Ze && Ze in Object(t)) {
      var e = Ne.call(t, Ze),
          n = t[Ze];

      try {
        t[Ze] = ae;
        var r = true;
      } catch (t) {}

      var o = Ce.call(t);
      r && (e ? t[Ze] = n : delete t[Ze]), t = o;
    } else t = Ce.call(t);
    return t;
  }

  function N(t) {
    return Ct(t) && "[object Arguments]" == L(t);
  }

  function V(t, e, n, r, o) {
    if (t === e) e = true;else if (null == t || null == e || !Ct(t) && !Ct(e)) e = t !== t && e !== e;else t: {
      var u = Dn(t),
          c = Dn(e),
          i = u ? "[object Array]" : Fn(t),
          a = c ? "[object Array]" : Fn(e),
          i = "[object Arguments]" == i ? "[object Object]" : i,
          a = "[object Arguments]" == a ? "[object Object]" : a,
          f = "[object Object]" == i,
          c = "[object Object]" == a;

      if ((a = i == a) && Pn(t)) {
        if (!Pn(e)) {
          e = false;
          break t;
        }

        u = true, f = false;
      }

      if (a && !f) o || (o = new S()), e = u || Ln(t) ? lt(t, e, n, r, V, o) : st(t, e, i, n, r, V, o);else {
        if (!(1 & n) && (u = f && Ne.call(t, "__wrapped__"), i = c && Ne.call(e, "__wrapped__"), u || i)) {
          t = u ? t.value() : t, e = i ? e.value() : e, o || (o = new S()), e = V(t, e, n, r, o);
          break t;
        }

        if (a) {
          e: if (o || (o = new S()), u = 1 & n, i = ht(t), c = i.length, a = ht(e).length, c == a || u) {
            for (f = c; f--;) {
              var l = i[f];

              if (!(u ? l in e : Ne.call(e, l))) {
                e = false;
                break e;
              }
            }

            if ((a = o.get(t)) && o.get(e)) e = a == e;else {
              a = true, o.set(t, e), o.set(e, t);

              for (var s = u; ++f < c;) {
                var l = i[f],
                    b = t[l],
                    h = e[l];
                if (r) var p = u ? r(h, b, l, e, t, o) : r(b, h, l, t, e, o);

                if (p === ae ? b !== h && !V(b, h, n, r, o) : !p) {
                  a = false;
                  break;
                }

                s || (s = "constructor" == l);
              }

              a && !s && (n = t.constructor, r = e.constructor, n != r && "constructor" in t && "constructor" in e && !(typeof n == "function" && n instanceof n && typeof r == "function" && r instanceof r) && (a = false)), o.delete(t), o.delete(e), e = a;
            }
          } else e = false;
        } else e = false;
      }
    }
    return e;
  }

  function C(t, e) {
    var n = e.length,
        r = n;
    if (null == t) return !r;

    for (t = Object(t); n--;) {
      var o = e[n];
      if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t)) return false;
    }

    for (; ++n < r;) {
      var o = e[n],
          u = o[0],
          c = t[u],
          i = o[1];

      if (o[2]) {
        if (c === ae && !(u in t)) return false;
      } else if (o = new S(), void 0 === ae ? !V(i, c, 3, void 0, o) : 1) return false;
    }

    return true;
  }

  function R(t) {
    return Ct(t) && Nt(t.length) && !!me[L(t)];
  }

  function T(t) {
    return typeof t == "function" ? t : null == t ? ne : typeof t == "object" ? Dn(t) ? G(t[0], t[1]) : q(t) : ue(t);
  }

  function W(t, e) {
    var n = -1,
        r = Dt(t) ? Array(t.length) : [];
    return On(t, function (t, o, u) {
      r[++n] = e(t, o, u);
    }), r;
  }

  function q(t) {
    var e = vt(t);
    return 1 == e.length && e[0][2] ? kt(e[0][0], e[0][1]) : function (n) {
      return n === t || C(n, e);
    };
  }

  function G(t, e) {
    return Ot(t) && e === e && !Vt(e) ? kt(xt(t), e) : function (n) {
      var r = Qt(n, t);
      return r === ae && r === e ? Xt(n, t) : V(e, r, 3);
    };
  }

  function H(t, e, n, r, o) {
    t !== e && Sn(e, function (u, c) {
      if (Vt(u)) {
        o || (o = new S());
        var i = o,
            a = t[c],
            f = e[c],
            l = i.get(f);
        if (l) z(t, c, l);else {
          var l = r ? r(a, f, c + "", t, e, i) : ae,
              s = l === ae;

          if (s) {
            var b = Dn(f),
                h = !b && Pn(f),
                p = !b && !h && Ln(f),
                l = f;
            b || h || p ? Dn(a) ? l = a : Pt(a) ? l = ot(a) : h ? (s = false, l = et(f, true)) : p ? (s = false, l = rt(f, true)) : l = [] : Rt(f) || Bn(f) ? (l = a, Bn(a) ? l = Jt(a) : (!Vt(a) || n && Lt(a)) && (l = dt(f))) : s = false;
          }

          s && (i.set(f, l), H(l, f, n, r, i), i.delete(f)), z(t, c, l);
        }
      } else i = r ? r(t[c], u, c + "", t, e, o) : ae, i === ae && (i = u), z(t, c, i);
    }, Zt);
  }

  function J(t, e) {
    return K(t, e, function (e, n) {
      return Xt(t, n);
    });
  }

  function K(t, e, n) {
    for (var r = -1, o = e.length, u = {}; ++r < o;) {
      var c = e[r],
          i = D(t, c);

      if (n(i, c)) {
        var a = u,
            c = tt(c, t);
        if (Vt(a)) for (var c = tt(c, a), f = -1, l = c.length, s = l - 1; null != a && ++f < l;) {
          var b = xt(c[f]),
              h = i;

          if (f != s) {
            var p = a[b],
                h = ae;
            h === ae && (h = Vt(p) ? p : mt(c[f + 1]) ? [] : {});
          }

          x(a, b, h), a = a[b];
        }
      }
    }

    return u;
  }

  function Q(t) {
    return function (e) {
      return D(e, t);
    };
  }

  function X(t) {
    return En(zt(t, void 0, ne), t + "");
  }

  function Y(t) {
    if (typeof t == "string") return t;
    if (Dn(t)) return c(t, Y) + "";
    if (Wt(t)) return wn ? wn.call(t) : "";
    var e = t + "";
    return "0" == e && 1 / t == -fe ? "-0" : e;
  }

  function Z(t, e) {
    e = tt(e, t);
    var n;
    if (2 > e.length) n = t;else {
      n = e;
      var r = 0,
          o = -1,
          u = -1,
          c = n.length;

      for (0 > r && (r = -r > c ? 0 : c + r), o = o > c ? c : o, 0 > o && (o += c), c = r > o ? 0 : o - r >>> 0, r >>>= 0, o = Array(c); ++u < c;) o[u] = n[u + r];

      n = D(t, o);
    }
    t = n, null == t || delete t[xt(Mt(e))];
  }

  function tt(t, e) {
    return Dn(t) ? t : Ot(t, e) ? [t] : Mn(Kt(t));
  }

  function et(t, e) {
    if (e) return t.slice();
    var n = t.length,
        n = He ? He(n) : new t.constructor(n);
    return t.copy(n), n;
  }

  function nt(t) {
    var e = new t.constructor(t.byteLength);
    return new Ge(e).set(new Ge(t)), e;
  }

  function rt(t, e) {
    return new t.constructor(e ? nt(t.buffer) : t.buffer, t.byteOffset, t.length);
  }

  function ot(t, e) {
    var n = -1,
        r = t.length;

    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];

    return e;
  }

  function ut(t, e, n) {
    var r = !n;
    n || (n = {});

    for (var o = -1, u = e.length; ++o < u;) {
      var c = e[o],
          i = ae;
      i === ae && (i = t[c]), r ? M(n, c, i) : x(n, c, i);
    }

    return n;
  }

  function ct(t, e) {
    return ut(t, xn(t), e);
  }

  function it(t, e) {
    return ut(t, In(t), e);
  }

  function at(t) {
    return X(function (e, n) {
      var r,
          o = -1,
          u = n.length,
          c = 1 < u ? n[u - 1] : ae,
          i = 2 < u ? n[2] : ae,
          c = 3 < t.length && typeof c == "function" ? (u--, c) : ae;

      if (r = i) {
        r = n[0];
        var a = n[1];

        if (Vt(i)) {
          var f = typeof a;
          r = !!("number" == f ? Dt(i) && mt(a, i.length) : "string" == f && a in i) && Bt(i[a], r);
        } else r = false;
      }

      for (r && (c = 3 > u ? ae : c, u = 1), e = Object(e); ++o < u;) (i = n[o]) && t(e, i, o, c);

      return e;
    });
  }

  function ft(t) {
    return Rt(t) ? ae : t;
  }

  function lt(t, e, n, r, o, u) {
    var c = 1 & n,
        i = t.length,
        a = e.length;
    if (i != a && !(c && a > i)) return false;
    if ((a = u.get(t)) && u.get(e)) return a == e;
    var a = -1,
        l = true,
        s = 2 & n ? new O() : ae;

    for (u.set(t, e), u.set(e, t); ++a < i;) {
      var b = t[a],
          h = e[a];
      if (r) var p = c ? r(h, b, a, e, t, u) : r(b, h, a, t, e, u);

      if (p !== ae) {
        if (p) continue;
        l = false;
        break;
      }

      if (s) {
        if (!f(e, function (t, e) {
          if (!j(s, e) && (b === t || o(b, t, n, r, u))) return s.push(e);
        })) {
          l = false;
          break;
        }
      } else if (b !== h && !o(b, h, n, r, u)) {
        l = false;
        break;
      }
    }

    return u.delete(t), u.delete(e), l;
  }

  function st(t, e, n, r, o, u, c) {
    switch (n) {
      case "[object DataView]":
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
        t = t.buffer, e = e.buffer;

      case "[object ArrayBuffer]":
        if (t.byteLength != e.byteLength || !u(new Ge(t), new Ge(e))) break;
        return true;

      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return Bt(+t, +e);

      case "[object Error]":
        return t.name == e.name && t.message == e.message;

      case "[object RegExp]":
      case "[object String]":
        return t == e + "";

      case "[object Map]":
        var i = v;

      case "[object Set]":
        if (i || (i = _), t.size != e.size && !(1 & r)) break;
        return (n = c.get(t)) ? n == e : (r |= 2, c.set(t, e), e = lt(i(t), i(e), r, o, u, c), c.delete(t), e);

      case "[object Symbol]":
        if (An) return An.call(t) == An.call(e);
    }

    return false;
  }

  function bt(t) {
    return En(zt(t, ae, Et), t + "");
  }

  function ht(t) {
    return P(t, Yt, xn);
  }

  function pt(t) {
    return P(t, Zt, In);
  }

  function yt() {
    var t = d.iteratee || re,
        t = t === re ? T : t;
    return arguments.length ? t(arguments[0], arguments[1]) : t;
  }

  function jt(t, e) {
    var n = t.__data__,
        r = typeof e;
    return ("string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }

  function vt(t) {
    for (var e = Yt(t), n = e.length; n--;) {
      var r = e[n],
          o = t[r];
      e[n] = [r, o, o === o && !Vt(o)];
    }

    return e;
  }

  function gt(t, e) {
    var n = null == t ? ae : t[e];
    return (!Vt(n) || Ve && Ve in n ? 0 : (Lt(n) ? Te : de).test(It(n))) ? n : ae;
  }

  function _t(t) {
    var e = t.length,
        n = t.constructor(e);
    return e && "string" == typeof t[0] && Ne.call(t, "index") && (n.index = t.index, n.input = t.input), n;
  }

  function dt(t) {
    return typeof t.constructor != "function" || St(t) ? {} : mn(Je(t));
  }

  function At(n, r, o, u) {
    var c = n.constructor;

    switch (r) {
      case "[object ArrayBuffer]":
        return nt(n);

      case "[object Boolean]":
      case "[object Date]":
        return new c(+n);

      case "[object DataView]":
        return r = u ? nt(n.buffer) : n.buffer, new n.constructor(r, n.byteOffset, n.byteLength);

      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return rt(n, u);

      case "[object Map]":
        return r = u ? o(v(n), 1) : v(n), a(r, t, new n.constructor());

      case "[object Number]":
      case "[object String]":
        return new c(n);

      case "[object RegExp]":
        return r = new n.constructor(n.source, ve.exec(n)), r.lastIndex = n.lastIndex, r;

      case "[object Set]":
        return r = u ? o(_(n), 1) : _(n), a(r, e, new n.constructor());

      case "[object Symbol]":
        return An ? Object(An.call(n)) : {};
    }
  }

  function wt(t) {
    return Dn(t) || Bn(t) || !!(Ye && t && t[Ye]);
  }

  function mt(t, e) {
    return e = null == e ? 9007199254740991 : e, !!e && (typeof t == "number" || we.test(t)) && -1 < t && 0 == t % 1 && t < e;
  }

  function Ot(t, e) {
    if (Dn(t)) return false;
    var n = typeof t;
    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Wt(t)) || be.test(t) || !se.test(t) || null != e && t in Object(e);
  }

  function St(t) {
    var e = t && t.constructor;
    return t === (typeof e == "function" && e.prototype || De);
  }

  function kt(t, e) {
    return function (n) {
      return null != n && n[t] === e && (e !== ae || t in Object(n));
    };
  }

  function zt(t, e, r) {
    return e = un(e === ae ? t.length - 1 : e, 0), function () {
      for (var o = arguments, u = -1, c = un(o.length - e, 0), i = Array(c); ++u < c;) i[u] = o[e + u];

      for (u = -1, c = Array(e + 1); ++u < e;) c[u] = o[u];

      return c[e] = r(i), n(t, this, c);
    };
  }

  function xt(t) {
    if (typeof t == "string" || Wt(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -fe ? "-0" : e;
  }

  function It(t) {
    if (null != t) {
      try {
        return Le.call(t);
      } catch (t) {}

      return t + "";
    }

    return "";
  }

  function Ft(t, e, n) {
    var r = null == t ? 0 : t.length;
    return r ? (n = null == n ? 0 : Gt(n), 0 > n && (n = un(r + n, 0)), l(t, yt(e, 3), n)) : -1;
  }

  function Et(t) {
    return (null == t ? 0 : t.length) ? B(t, 1) : [];
  }

  function Mt(t) {
    var e = null == t ? 0 : t.length;
    return e ? t[e - 1] : ae;
  }

  function $t(t, e) {
    var n;

    if (t && t.length && e && e.length) {
      n = e;
      var r = s,
          o = -1,
          u = n.length;

      for (t === n && (n = ot(n)); ++o < u;) for (var c = 0, i = n[o]; -1 < (c = r(t, i, c, void 0));) t !== t && Xe.call(t, c, 1), Xe.call(t, c, 1);

      n = t;
    } else n = t;

    return n;
  }

  function Ut(t, e) {
    function n() {
      var r = arguments,
          o = e ? e.apply(this, r) : r[0],
          u = n.cache;
      return u.has(o) ? u.get(o) : (r = t.apply(this, r), n.cache = u.set(o, r) || u, r);
    }

    if (typeof t != "function" || null != e && typeof e != "function") throw new TypeError("Expected a function");
    return n.cache = new (Ut.Cache || m)(), n;
  }

  function Bt(t, e) {
    return t === e || t !== t && e !== e;
  }

  function Dt(t) {
    return null != t && Nt(t.length) && !Lt(t);
  }

  function Pt(t) {
    return Ct(t) && Dt(t);
  }

  function Lt(t) {
    return !!Vt(t) && (t = L(t), "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t);
  }

  function Nt(t) {
    return typeof t == "number" && -1 < t && 0 == t % 1 && 9007199254740991 >= t;
  }

  function Vt(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
  }

  function Ct(t) {
    return null != t && typeof t == "object";
  }

  function Rt(t) {
    return !(!Ct(t) || "[object Object]" != L(t)) && (t = Je(t), null === t || (t = Ne.call(t, "constructor") && t.constructor, typeof t == "function" && t instanceof t && Le.call(t) == Re));
  }

  function Tt(t) {
    return typeof t == "string" || !Dn(t) && Ct(t) && "[object String]" == L(t);
  }

  function Wt(t) {
    return typeof t == "symbol" || Ct(t) && "[object Symbol]" == L(t);
  }

  function qt(t) {
    return t ? (t = Ht(t), t === fe || t === -fe ? 1.7976931348623157e308 * (0 > t ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0;
  }

  function Gt(t) {
    t = qt(t);
    var e = t % 1;
    return t === t ? e ? t - e : t : 0;
  }

  function Ht(t) {
    if (typeof t == "number") return t;
    if (Wt(t)) return le;
    if (Vt(t) && (t = typeof t.valueOf == "function" ? t.valueOf() : t, t = Vt(t) ? t + "" : t), typeof t != "string") return 0 === t ? t : +t;
    t = t.replace(ye, "");

    var e = _e.test(t);

    return e || Ae.test(t) ? ke(t.slice(2), e ? 2 : 8) : ge.test(t) ? le : +t;
  }

  function Jt(t) {
    return ut(t, Zt(t));
  }

  function Kt(t) {
    return null == t ? "" : Y(t);
  }

  function Qt(t, e, n) {
    return t = null == t ? ae : D(t, e), t === ae ? n : t;
  }

  function Xt(t, e) {
    var n;

    if (n = null != t) {
      n = t;
      var r;
      r = tt(e, n);

      for (var o = -1, u = r.length, c = false; ++o < u;) {
        var i = xt(r[o]);
        if (!(c = null != n && null != n && i in Object(n))) break;
        n = n[i];
      }

      c || ++o != u ? n = c : (u = null == n ? 0 : n.length, n = !!u && Nt(u) && mt(i, u) && (Dn(n) || Bn(n)));
    }

    return n;
  }

  function Yt(t) {
    if (Dt(t)) t = k(t);else if (St(t)) {
      var e,
          n = [];

      for (e in Object(t)) Ne.call(t, e) && "constructor" != e && n.push(e);

      t = n;
    } else t = on(t);
    return t;
  }

  function Zt(t) {
    if (Dt(t)) t = k(t, true);else if (Vt(t)) {
      var e,
          n = St(t),
          r = [];

      for (e in t) ("constructor" != e || !n && Ne.call(t, e)) && r.push(e);

      t = r;
    } else {
      if (e = [], null != t) for (n in Object(t)) e.push(n);
      t = e;
    }
    return t;
  }

  function te(t) {
    return null == t ? [] : y(t, Yt(t));
  }

  function ee(t) {
    return function () {
      return t;
    };
  }

  function ne(t) {
    return t;
  }

  function re(t) {
    return T(typeof t == "function" ? t : $(t, 1));
  }

  function oe() {}

  function ue(t) {
    return Ot(t) ? h(xt(t)) : Q(t);
  }

  function ce() {
    return [];
  }

  function ie() {
    return false;
  }

  var ae,
      fe = 1 / 0,
      le = NaN,
      se = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      be = /^\w*$/,
      he = /^\./,
      pe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ye = /^\s+|\s+$/g,
      je = /\\(\\)?/g,
      ve = /\w*$/,
      ge = /^[-+]0x[0-9a-f]+$/i,
      _e = /^0b[01]+$/i,
      de = /^\[object .+?Constructor\]$/,
      Ae = /^0o[0-7]+$/i,
      we = /^(?:0|[1-9]\d*)$/,
      me = {};
  me["[object Float32Array]"] = me["[object Float64Array]"] = me["[object Int8Array]"] = me["[object Int16Array]"] = me["[object Int32Array]"] = me["[object Uint8Array]"] = me["[object Uint8ClampedArray]"] = me["[object Uint16Array]"] = me["[object Uint32Array]"] = true, me["[object Arguments]"] = me["[object Array]"] = me["[object ArrayBuffer]"] = me["[object Boolean]"] = me["[object DataView]"] = me["[object Date]"] = me["[object Error]"] = me["[object Function]"] = me["[object Map]"] = me["[object Number]"] = me["[object Object]"] = me["[object RegExp]"] = me["[object Set]"] = me["[object String]"] = me["[object WeakMap]"] = false;
  var Oe = {};
  Oe["[object Arguments]"] = Oe["[object Array]"] = Oe["[object ArrayBuffer]"] = Oe["[object DataView]"] = Oe["[object Boolean]"] = Oe["[object Date]"] = Oe["[object Float32Array]"] = Oe["[object Float64Array]"] = Oe["[object Int8Array]"] = Oe["[object Int16Array]"] = Oe["[object Int32Array]"] = Oe["[object Map]"] = Oe["[object Number]"] = Oe["[object Object]"] = Oe["[object RegExp]"] = Oe["[object Set]"] = Oe["[object String]"] = Oe["[object Symbol]"] = Oe["[object Uint8Array]"] = Oe["[object Uint8ClampedArray]"] = Oe["[object Uint16Array]"] = Oe["[object Uint32Array]"] = true, Oe["[object Error]"] = Oe["[object Function]"] = Oe["[object WeakMap]"] = false;
  var Se,
      ke = parseInt,
      ze = typeof global == "object" && global && global.Object === Object && global,
      xe = typeof self == "object" && self && self.Object === Object && self,
      Ie = ze || xe || Function("return this")(),
      Fe = typeof exports == "object" && exports && !exports.nodeType && exports,
      Ee = Fe && typeof module == "object" && module && !module.nodeType && module,
      Me = Ee && Ee.exports === Fe,
      $e = Me && ze.process;

  t: {
    try {
      Se = $e && $e.binding && $e.binding("util");
      break t;
    } catch (t) {}

    Se = void 0;
  }

  var Ue = Se && Se.isTypedArray,
      Be = Array.prototype,
      De = Object.prototype,
      Pe = Ie["__core-js_shared__"],
      Le = Function.prototype.toString,
      Ne = De.hasOwnProperty,
      Ve = function () {
    var t = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(),
      Ce = De.toString,
      Re = Le.call(Object),
      Te = RegExp("^" + Le.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      We = Me ? Ie.Buffer : ae,
      qe = Ie.Symbol,
      Ge = Ie.Uint8Array,
      He = We ? We.a : ae,
      Je = g(Object.getPrototypeOf),
      Ke = Object.create,
      Qe = De.propertyIsEnumerable,
      Xe = Be.splice,
      Ye = qe ? qe.isConcatSpreadable : ae,
      Ze = qe ? qe.toStringTag : ae,
      tn = function () {
    try {
      var t = gt(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  }(),
      en = Math.floor,
      nn = Object.getOwnPropertySymbols,
      rn = We ? We.isBuffer : ae,
      on = g(Object.keys),
      un = Math.max,
      cn = Math.min,
      an = Date.now,
      fn = gt(Ie, "DataView"),
      ln = gt(Ie, "Map"),
      sn = gt(Ie, "Promise"),
      bn = gt(Ie, "Set"),
      hn = gt(Ie, "WeakMap"),
      pn = gt(Object, "create"),
      yn = It(fn),
      jn = It(ln),
      vn = It(sn),
      gn = It(bn),
      _n = It(hn),
      dn = qe ? qe.prototype : ae,
      An = dn ? dn.valueOf : ae,
      wn = dn ? dn.toString : ae,
      mn = function () {
    function t() {}

    return function (e) {
      return Vt(e) ? Ke ? Ke(e) : (t.prototype = e, e = new t(), t.prototype = ae, e) : {};
    };
  }();

  A.prototype.clear = function () {
    this.__data__ = pn ? pn(null) : {}, this.size = 0;
  }, A.prototype.delete = function (t) {
    return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t;
  }, A.prototype.get = function (t) {
    var e = this.__data__;
    return pn ? (t = e[t], "__lodash_hash_undefined__" === t ? ae : t) : Ne.call(e, t) ? e[t] : ae;
  }, A.prototype.has = function (t) {
    var e = this.__data__;
    return pn ? e[t] !== ae : Ne.call(e, t);
  }, A.prototype.set = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = pn && e === ae ? "__lodash_hash_undefined__" : e, this;
  }, w.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, w.prototype.delete = function (t) {
    var e = this.__data__;
    return t = I(e, t), !(0 > t) && (t == e.length - 1 ? e.pop() : Xe.call(e, t, 1), --this.size, true);
  }, w.prototype.get = function (t) {
    var e = this.__data__;
    return t = I(e, t), 0 > t ? ae : e[t][1];
  }, w.prototype.has = function (t) {
    return -1 < I(this.__data__, t);
  }, w.prototype.set = function (t, e) {
    var n = this.__data__,
        r = I(n, t);
    return 0 > r ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
  }, m.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new A(),
      map: new (ln || w)(),
      string: new A()
    };
  }, m.prototype.delete = function (t) {
    return t = jt(this, t).delete(t), this.size -= t ? 1 : 0, t;
  }, m.prototype.get = function (t) {
    return jt(this, t).get(t);
  }, m.prototype.has = function (t) {
    return jt(this, t).has(t);
  }, m.prototype.set = function (t, e) {
    var n = jt(this, t),
        r = n.size;
    return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
  }, O.prototype.add = O.prototype.push = function (t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
  }, O.prototype.has = function (t) {
    return this.__data__.has(t);
  }, S.prototype.clear = function () {
    this.__data__ = new w(), this.size = 0;
  }, S.prototype.delete = function (t) {
    var e = this.__data__;
    return t = e.delete(t), this.size = e.size, t;
  }, S.prototype.get = function (t) {
    return this.__data__.get(t);
  }, S.prototype.has = function (t) {
    return this.__data__.has(t);
  }, S.prototype.set = function (t, e) {
    var n = this.__data__;

    if (n instanceof w) {
      var r = n.__data__;
      if (!ln || 199 > r.length) return r.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new m(r);
    }

    return n.set(t, e), this.size = n.size, this;
  };

  var On = function (t, e) {
    return function (n, r) {
      if (null == n) return n;
      if (!Dt(n)) return t(n, r);

      for (var o = n.length, u = e ? o : -1, c = Object(n); (e ? u-- : ++u < o) && false !== r(c[u], u, c););

      return n;
    };
  }(function (t, e) {
    return t && Sn(t, e, Yt);
  }),
      Sn = function (t) {
    return function (e, n, r) {
      var o = -1,
          u = Object(e);
      r = r(e);

      for (var c = r.length; c--;) {
        var i = r[t ? c : ++o];
        if (false === n(u[i], i, u)) break;
      }

      return e;
    };
  }(),
      kn = tn ? function (t, e) {
    return tn(t, "toString", {
      configurable: true,
      enumerable: false,
      value: ee(e),
      writable: true
    });
  } : ne,
      zn = bn && 1 / _(new bn([, -0]))[1] == fe ? function (t) {
    return new bn(t);
  } : oe,
      xn = nn ? function (t) {
    return null == t ? [] : (t = Object(t), o(nn(t), function (e) {
      return Qe.call(t, e);
    }));
  } : ce,
      In = nn ? function (t) {
    for (var e = []; t;) i(e, xn(t)), t = Je(t);

    return e;
  } : ce,
      Fn = L;

  (fn && "[object DataView]" != Fn(new fn(new ArrayBuffer(1))) || ln && "[object Map]" != Fn(new ln()) || sn && "[object Promise]" != Fn(sn.resolve()) || bn && "[object Set]" != Fn(new bn()) || hn && "[object WeakMap]" != Fn(new hn())) && (Fn = function (t) {
    var e = L(t);
    if (t = (t = "[object Object]" == e ? t.constructor : ae) ? It(t) : "") switch (t) {
      case yn:
        return "[object DataView]";

      case jn:
        return "[object Map]";

      case vn:
        return "[object Promise]";

      case gn:
        return "[object Set]";

      case _n:
        return "[object WeakMap]";
    }
    return e;
  });

  var En = function (t) {
    var e = 0,
        n = 0;
    return function () {
      var r = an(),
          o = 16 - (r - n);

      if (n = r, 0 < o) {
        if (800 <= ++e) return arguments[0];
      } else e = 0;

      return t.apply(ae, arguments);
    };
  }(kn),
      Mn = function (t) {
    t = Ut(t, function (t) {
      return 500 === e.size && e.clear(), t;
    });
    var e = t.cache;
    return t;
  }(function (t) {
    var e = [];
    return he.test(t) && e.push(""), t.replace(pe, function (t, n, r, o) {
      e.push(r ? o.replace(je, "$1") : n || t);
    }), e;
  }),
      $n = X($t),
      Un = function (t) {
    return function (e, n, r) {
      var o = Object(e);

      if (!Dt(e)) {
        var u = yt(n, 3);
        e = Yt(e), n = function (t) {
          return u(o[t], t, o);
        };
      }

      return n = t(e, n, r), -1 < n ? o[u ? e[n] : n] : ae;
    };
  }(Ft);

  Ut.Cache = m;
  var Bn = N(function () {
    return arguments;
  }()) ? N : function (t) {
    return Ct(t) && Ne.call(t, "callee") && !Qe.call(t, "callee");
  },
      Dn = Array.isArray,
      Pn = rn || ie,
      Ln = Ue ? p(Ue) : R,
      Nn = at(function (t, e, n) {
    H(t, e, n);
  }),
      Vn = at(function (t, e, n, r) {
    H(t, e, n, r);
  }),
      Cn = bt(function (t, e) {
    var n = {};
    if (null == t) return n;
    var r = false;
    e = c(e, function (e) {
      return e = tt(e, t), r || (r = 1 < e.length), e;
    }), ut(t, pt(t), n), r && (n = $(n, 7, ft));

    for (var o = e.length; o--;) Z(n, e[o]);

    return n;
  }),
      Rn = bt(function (t, e) {
    return null == t ? {} : J(t, e);
  });
  d.constant = ee, d.filter = function (t, e) {
    return (Dn(t) ? o : U)(t, yt(e, 3));
  }, d.flatten = Et, d.iteratee = re, d.keys = Yt, d.keysIn = Zt, d.map = function (t, e) {
    return (Dn(t) ? c : W)(t, yt(e, 3));
  }, d.memoize = Ut, d.merge = Nn, d.mergeWith = Vn, d.omit = Cn, d.pick = Rn, d.property = ue, d.pull = $n, d.pullAll = $t, d.remove = function (t, e) {
    var n = [];
    if (!t || !t.length) return n;
    var r = -1,
        o = [],
        u = t.length;

    for (e = yt(e, 3); ++r < u;) {
      var c = t[r];
      e(c, r, t) && (n.push(c), o.push(r));
    }

    for (r = t ? o.length : 0, u = r - 1; r--;) if (c = o[r], r == u || c !== i) {
      var i = c;
      mt(c) ? Xe.call(t, c, 1) : Z(t, c);
    }

    return n;
  }, d.toPlainObject = Jt, d.uniq = function (t) {
    if (t && t.length) t: {
      var e = -1,
          n = u,
          r = t.length,
          o = true,
          c = [],
          i = c;

      if (200 <= r) {
        if (n = zn(t)) {
          t = _(n);
          break t;
        }

        o = false, n = j, i = new O();
      } else i = c;

      e: for (; ++e < r;) {
        var a = t[e],
            f = a,
            a = 0 !== a ? a : 0;

        if (o && f === f) {
          for (var l = i.length; l--;) if (i[l] === f) continue e;

          c.push(a);
        } else n(i, f, void 0) || (i !== c && i.push(f), c.push(a));
      }

      t = c;
    } else t = [];
    return t;
  }, d.values = te, d.cloneDeep = function (t) {
    return $(t, 5);
  }, d.eq = Bt, d.find = Un, d.findIndex = Ft, d.get = Qt, d.hasIn = Xt, d.identity = ne, d.includes = function (t, e, n, r) {
    return t = Dt(t) ? t : te(t), n = n && !r ? Gt(n) : 0, r = t.length, 0 > n && (n = un(r + n, 0)), Tt(t) ? n <= r && -1 < t.indexOf(e, n) : !!r && -1 < s(t, e, n);
  }, d.isArguments = Bn, d.isArray = Dn, d.isArrayLike = Dt, d.isArrayLikeObject = Pt, d.isBuffer = Pn, d.isFunction = Lt, d.isLength = Nt, d.isObject = Vt, d.isObjectLike = Ct, d.isPlainObject = Rt, d.isString = Tt, d.isSymbol = Wt, d.isTypedArray = Ln, d.last = Mt, d.stubArray = ce, d.stubFalse = ie, d.noop = oe, d.sortedIndexBy = function (t, e, n) {
    n = yt(n, 2), e = n(e);

    for (var r = 0, o = null == t ? 0 : t.length, u = e !== e, c = null === e, i = Wt(e), a = e === ae; r < o;) {
      var f = en((r + o) / 2),
          l = n(t[f]),
          s = l !== ae,
          b = null === l,
          h = l === l,
          p = Wt(l);
      (u ? h : a ? h && s : c ? h && s && !b : i ? h && s && !b && !p : b || p ? 0 : l < e) ? r = f + 1 : o = f;
    }

    return cn(o, 4294967294);
  }, d.toFinite = qt, d.toInteger = Gt, d.toNumber = Ht, d.toString = Kt, d.VERSION = "4.17.4",  true ? (Ie._ = d, !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return d;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : Ee ? ((Ee.exports = d)._ = d, Fe._ = d) : Ie._ = d;
}).call(this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelayManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_standard_file_js__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var RelayManager =
/*#__PURE__*/
function () {
  function RelayManager() {
    _classCallCheck(this, RelayManager);

    this.httpManger = new __WEBPACK_IMPORTED_MODULE_1_standard_file_js__["SFHttpManager"]();
    this.httpManger.setJWTRequestHandler(function () {});
  }

  _createClass(RelayManager, [{
    key: "setCredentials",
    value: function setCredentials(credentials) {
      this.credentials = credentials;
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(name, item, integration) {
        var _this = this;

        var url, params;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(integration.content.relayUrl, "/integrations/save-item");
                params = {
                  file: {
                    name: name,
                    item: item // base64 string of file

                  },
                  source: integration.content.source,
                  authorization: integration.content.authorization
                };
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.httpManger.postAbsolute(url, params, function (response) {
                    resolve(response.metadata);
                  }, function (errorResponse) {
                    var error = errorResponse.error;

                    if (!error) {
                      error = {
                        message: "File upload failed."
                      };
                    }

                    console.log("Upload error response", error);
                    reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function uploadFile(_x, _x2, _x3) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "downloadFile",
    value: function () {
      var _downloadFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(fileDescriptor, integration) {
        var _this2 = this;

        var url, params;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(integration.content.relayUrl, "/integrations/download-item");
                params = {
                  metadata: fileDescriptor.content.serverMetadata,
                  authorization: integration.content.authorization
                };
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.httpManger.postAbsolute(url, params, function (response) {
                    resolve(response);
                  }, function (errorResponse) {
                    var error = errorResponse.error;
                    console.log("Download error response", errorResponse);
                    reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function downloadFile(_x4, _x5) {
        return _downloadFile.apply(this, arguments);
      }

      return downloadFile;
    }()
  }, {
    key: "deleteFile",
    value: function () {
      var _deleteFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(fileDescriptor, integration) {
        var _this3 = this;

        var url, params;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat(integration.content.relayUrl, "/integrations/delete-item");
                params = {
                  metadata: fileDescriptor.content.serverMetadata,
                  authorization: integration.content.authorization
                };
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  _this3.httpManger.postAbsolute(url, params, function (response) {
                    resolve(response);
                  }, function (errorResponse) {
                    var error = errorResponse.error;
                    console.log("Download error response", errorResponse);
                    reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteFile(_x6, _x7) {
        return _deleteFile.apply(this, arguments);
      }

      return deleteFile;
    }()
  }]);

  return RelayManager;
}();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_standard_file_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__ = __webpack_require__(2);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var IntegrationManager =
/*#__PURE__*/
function () {
  function IntegrationManager(extensionBridge) {
    _classCallCheck(this, IntegrationManager);

    this.extensionBridge = extensionBridge;
  }

  _createClass(IntegrationManager, [{
    key: "integrationForFileDescriptor",
    value: function integrationForFileDescriptor(descriptor) {
      return this.integrations.find(function (integration) {
        return descriptor.content.serverMetadata && integration.content.source == descriptor.content.serverMetadata.source;
      });
    }
  }, {
    key: "parseIntegrationCode",
    value: function parseIntegrationCode(code) {
      var jsonString = atob(code);
      var integration = JSON.parse(jsonString);
      integration.rawCode = code;
      return integration;
    }
  }, {
    key: "saveIntegrationFromCode",
    value: function () {
      var _saveIntegrationFromCode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(code) {
        var content, integration;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                content = this.parseIntegrationCode(code);

                if (this.integrations.length == 0) {
                  content.isDefaultUploadSource = true;
                }

                integration = this.createAndSaveIntegrationObject(content);
                return _context.abrupt("return", integration);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveIntegrationFromCode(_x) {
        return _saveIntegrationFromCode.apply(this, arguments);
      }

      return saveIntegrationFromCode;
    }()
  }, {
    key: "createAndSaveIntegrationObject",
    value: function createAndSaveIntegrationObject(content) {
      var integration = new __WEBPACK_IMPORTED_MODULE_1_standard_file_js__["SFItem"]({
        content_type: __WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__["a" /* default */].FileSafeIntegrationContentTypeKey,
        content: content
      });
      this.extensionBridge.createItems([integration]);
      return integration;
    }
  }, {
    key: "getDefaultIntegration",
    value: function getDefaultIntegration() {
      return this.integrations.find(function (integration) {
        return integration.content.isDefaultUploadSource;
      });
    }
  }, {
    key: "setIntegrationAsDefault",
    value: function setIntegrationAsDefault(integration) {
      var saveItems = [integration];
      var currentDefault = this.getDefaultIntegration();

      if (currentDefault) {
        currentDefault.content.isDefaultUploadSource = false;
        saveItems.push(currentDefault);
      }

      integration.content.isDefaultUploadSource = true;
      this.extensionBridge.saveItems(saveItems);
    }
  }, {
    key: "displayStringForIntegration",
    value: function displayStringForIntegration(integration) {
      var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

      var comps = integration.content.source.split("_");
      var result = "";
      var index = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = comps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var comp = _step.value;
          result += capitalizeFirstLetter(comp);

          if (index < comps.length - 1) {
            result += " ";
          }

          index++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }, {
    key: "deleteIntegration",
    value: function deleteIntegration(integrationObject) {
      var _this = this;

      var isDefault = integrationObject.content.isDefaultUploadSource;
      this.extensionBridge.deleteItem(integrationObject, function (response) {
        if (response.deleted && isDefault) {
          if (_this.integrations.length > 0) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this.integrations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var currentIntegration = _step2.value;

                if (currentIntegration != integrationObject) {
                  _this.setIntegrationAsDefault(currentIntegration);

                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }
      });
    }
  }, {
    key: "integrations",
    get: function get() {
      return this.extensionBridge.filterItems(__WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__["a" /* default */].FileSafeIntegrationContentTypeKey);
    }
  }]);

  return IntegrationManager;
}();



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_standard_file_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__ = __webpack_require__(2);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CredentialManager =
/*#__PURE__*/
function () {
  function CredentialManager(_ref) {
    var _this = this;

    var extensionBridge = _ref.extensionBridge,
        onCredentialLoad = _ref.onCredentialLoad;

    _classCallCheck(this, CredentialManager);

    _defineProperty(this, "getDefaultCredentials", function () {
      var defaultCredentials = _this.credentials.find(function (candidate) {
        return candidate.content.isDefault;
      });

      if (!defaultCredentials && _this.credentials.length > 0) {
        defaultCredentials = _this.credentials[0];
      }

      return defaultCredentials;
    });

    _defineProperty(this, "setCredentialAsDefault", function (credential) {
      var currentDefault = _this.getDefaultCredentials();

      if (currentDefault) {
        currentDefault.content.isDefault = false;
      }

      credential.content.isDefault = true;

      _this.extensionBridge.saveItems([currentDefault, credential]);
    });

    _defineProperty(this, "deleteCredential", function (credential) {
      _this.extensionBridge.deleteItem(credential);
    });

    this.extensionBridge = extensionBridge;
    this.onCredentialLoad = onCredentialLoad;
    this.credentials = [];
    this.extensionBridge.addEventHandler(function (event) {
      if (event == __WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__["a" /* default */].BridgeEventReceivedItems) {
        _this.reloadCredentials();
      }
    });
  }

  _createClass(CredentialManager, [{
    key: "reloadCredentials",
    value: function reloadCredentials() {
      // clear current credentials, search results should contain all items and not just new incoming stuff.
      this.credentials = [];
      var searchResults = this.extensionBridge.filterItems(__WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__["a" /* default */].FileSafeCredentialsContentType);

      if (searchResults.length == 0) {
        return;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = searchResults[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var incomingCredentials = _step.value;

          if (!this.credentials.find(function (candidate) {
            return candidate.uuid == incomingCredentials.uuid;
          })) {
            this.credentials.push(incomingCredentials);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.onCredentialLoad();

      if (this.credentials.length > 0) {
        this.didLoadCredentials();
      }
    }
  }, {
    key: "createNewCredentials",
    value: function () {
      var _createNewCredentials = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var bits, identifer, password, credentialParams, credentials;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bits = 256;
                _context.next = 3;
                return SFJS.crypto.generateRandomKey(bits);

              case 3:
                identifer = _context.sent;
                _context.next = 6;
                return SFJS.crypto.generateRandomKey(bits);

              case 6:
                password = _context.sent;
                _context.next = 9;
                return SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);

              case 9:
                credentialParams = _context.sent;
                credentialParams.isDefault = this.credentials.length == 0;
                credentials = new __WEBPACK_IMPORTED_MODULE_1_standard_file_js__["SFItem"]({
                  content_type: __WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__["a" /* default */].FileSafeCredentialsContentType,
                  content: credentialParams
                });
                this.extensionBridge.saveItem(credentials);
                this.didLoadCredentials();
                return _context.abrupt("return", credentials);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createNewCredentials() {
        return _createNewCredentials.apply(this, arguments);
      }

      return createNewCredentials;
    }()
  }, {
    key: "didLoadCredentials",
    value: function didLoadCredentials() {
      this.extensionBridge.notifyObserversOfEvent(__WEBPACK_IMPORTED_MODULE_2__ExtensionBridge__["a" /* default */].BridgeEventLoadedCredentials);
    }
  }, {
    key: "credentialForFileDescriptor",
    value: function credentialForFileDescriptor(fileDescriptor) {
      return this.credentials.find(function (candidate) {
        return fileDescriptor.content.references.find(function (ref) {
          return ref.uuid == candidate.uuid;
        });
      });
    }
  }, {
    key: "getAllCredentials",
    value: function getAllCredentials() {
      return this.credentials;
    }
  }, {
    key: "saveCredential",
    value: function saveCredential(credentials) {
      this.extensionBridge.saveItem(credentials);
    }
  }]);

  return CredentialManager;
}();



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_standard_file_js_dist_regenerator_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_standard_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_standard_file_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_encryption_worker_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_encryption_worker_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_encryption_worker_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ExtensionBridge__ = __webpack_require__(2);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FileManager =
/*#__PURE__*/
function () {
  function FileManager(extensionBridge, relayManager, integrationManager, credentialManager) {
    _classCallCheck(this, FileManager);

    this.extensionBridge = extensionBridge;
    this.relayManager = relayManager;
    this.integrationManager = integrationManager;
    this.credentialManager = credentialManager;
  }

  _createClass(FileManager, [{
    key: "getAllFileDescriptors",
    value: function getAllFileDescriptors() {
      return this.extensionBridge.getFileDescriptors();
    }
  }, {
    key: "fileDescriptorsForNote",
    value: function fileDescriptorsForNote(note) {
      if (!note) {
        return [];
      }

      return this.extensionBridge.getFileDescriptors().filter(function (fileDescriptor) {
        return fileDescriptor.hasRelationshipWithItem(note);
      });
    }
  }, {
    key: "findFileDescriptor",
    value: function findFileDescriptor(uuid) {
      return this.extensionBridge.getFileDescriptors().find(function (fileDescriptor) {
        return fileDescriptor.uuid == uuid;
      });
    }
  }, {
    key: "fileDescriptorsEncryptedWithCredential",
    value: function fileDescriptorsEncryptedWithCredential(credential) {
      var descriptors = this.extensionBridge.getFileDescriptors();
      return descriptors.filter(function (descriptor) {
        return descriptor.content.references.find(function (ref) {
          return ref.uuid == credential.uuid;
        });
      });
    }
  }, {
    key: "deleteFileFromDescriptor",
    value: function () {
      var _deleteFileFromDescriptor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fileDescriptor) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.extensionBridge.deleteItems([fileDescriptor], function (response) {
                    if (response.deleted) {
                      var integration = _this.integrationManager.integrationForFileDescriptor(fileDescriptor);

                      if (integration) {
                        _this.relayManager.deleteFile(fileDescriptor, integration).then(function (relayResponse) {
                          resolve();
                        });
                      }
                    } else {
                      resolve(response);
                    }
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function deleteFileFromDescriptor(_x) {
        return _deleteFileFromDescriptor.apply(this, arguments);
      }

      return deleteFileFromDescriptor;
    }()
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref) {
        var _this2 = this;

        var fileItem, inputFileName, fileType, credential, note, integration, fileExt, outputFileName;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fileItem = _ref.fileItem, inputFileName = _ref.inputFileName, fileType = _ref.fileType, credential = _ref.credential, note = _ref.note;
                integration = this.integrationManager.getDefaultIntegration();
                fileExt = inputFileName.split(".")[1];
                outputFileName = "".concat(fileItem.uuid, ".sf.json");
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var worker = new __WEBPACK_IMPORTED_MODULE_2__util_encryption_worker_js___default.a();
                  worker.addEventListener("message", function (event) {
                    var data = event.data;

                    if (data.error) {
                      console.log("Error uploading file", data.error);
                      reject(data.error);
                      return;
                    }

                    var fileDescriptor = new __WEBPACK_IMPORTED_MODULE_1_standard_file_js__["SFItem"]({
                      content_type: __WEBPACK_IMPORTED_MODULE_3__ExtensionBridge__["a" /* default */].FileDescriptorContentTypeKey,
                      content: {
                        serverMetadata: event.data.metadata,
                        fileName: inputFileName,
                        fileType: fileType
                      }
                    });

                    if (note) {
                      fileDescriptor.addItemAsRelationship(note);
                    }

                    fileDescriptor.addItemAsRelationship(credential);

                    _this2.extensionBridge.createItem(fileDescriptor, function (createdItems) {
                      resolve(createdItems[0]);
                    });
                  });
                  var operation = "upload";
                  var params = {
                    outputFileName: outputFileName,
                    fileItem: fileItem,
                    integration: integration,
                    operation: operation,
                    credentials: _this2.credentialManager.getDefaultCredentials()
                  };
                  worker.postMessage(params);
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploadFile(_x2) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "downloadFileFromDescriptor",
    value: function () {
      var _downloadFileFromDescriptor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(fileDescriptor) {
        var integration, serverMetadata;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                integration = this.integrationManager.integrationForFileDescriptor(fileDescriptor);

                if (integration) {
                  _context3.next = 6;
                  break;
                }

                serverMetadata = fileDescriptor.content.serverMetadata;

                if (serverMetadata) {
                  alert("Unable to find integration named '".concat(serverMetadata.source, "'."));
                } else {
                  alert("Unable to find integration for this file.");
                }

                throw "Unable to find integration";

              case 6:
                return _context3.abrupt("return", this.relayManager.downloadFile(fileDescriptor, integration).then(function (data) {
                  var item = data.items[0];
                  return item;
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function downloadFileFromDescriptor(_x3) {
        return _downloadFileFromDescriptor.apply(this, arguments);
      }

      return downloadFileFromDescriptor;
    }()
  }, {
    key: "encryptFile",
    value: function () {
      var _encryptFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref2) {
        var data, inputFileName, fileType, credential;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _ref2.data, inputFileName = _ref2.inputFileName, fileType = _ref2.fileType, credential = _ref2.credential;
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  var worker = new __WEBPACK_IMPORTED_MODULE_2__util_encryption_worker_js___default.a();
                  worker.addEventListener("message", function (event) {
                    resolve(event.data.fileItem);
                  });
                  worker.postMessage({
                    operation: "encrypt",
                    keys: credential.content.keys,
                    authParams: credential.content.authParams,
                    contentType: __WEBPACK_IMPORTED_MODULE_3__ExtensionBridge__["a" /* default */].FileItemContentTypeKey,
                    fileData: data,
                    fileName: inputFileName,
                    fileType: fileType
                  });
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function encryptFile(_x4) {
        return _encryptFile.apply(this, arguments);
      }

      return encryptFile;
    }()
  }, {
    key: "decryptFile",
    value: function () {
      var _decryptFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_ref3) {
        var fileDescriptor, fileItem, credential;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                fileDescriptor = _ref3.fileDescriptor, fileItem = _ref3.fileItem, credential = _ref3.credential;

                if (!credential) {
                  credential = this.credentialManager.credentialForFileDescriptor(fileDescriptor);
                }

                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  var worker = new __WEBPACK_IMPORTED_MODULE_2__util_encryption_worker_js___default.a();
                  worker.addEventListener("message", function (event) {
                    var data = event.data;

                    if (data.error) {
                      reject(data.error);
                      return;
                    }

                    resolve(data);
                  });
                  worker.postMessage({
                    operation: "decrypt",
                    keys: credential.content.keys,
                    item: fileItem
                  });
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function decryptFile(_x5) {
        return _decryptFile.apply(this, arguments);
      }

      return decryptFile;
    }()
  }]);

  return FileManager;
}();

_defineProperty(FileManager, "FileItemContentTypeKey", "SN|FileSafe|File");

_defineProperty(FileManager, "FileDescriptorContentTypeKey", "SN|FileSafe|FileMetadata");



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Worker(__webpack_require__.p + "filesafe-js/EncryptionWorker.js");
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "base64toBinary",
    value: function base64toBinary(dataURI) {
      var binary = atob(dataURI);
      var array = [];

      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }

      return new Uint8Array(array);
    }
  }, {
    key: "downloadData",
    value: function downloadData(data, fileName, fileType) {
      var _this = this;

      var useNavigation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var link = document.createElement('a');
      link.setAttribute('download', fileName);
      var tempUrl = this.tempUrlForData(data, fileType);
      link.href = tempUrl;
      link.setAttribute("target", "_blank");

      if (useNavigation) {
        window.location.href = link.href;
      } else {
        document.body.appendChild(link);
        link.click();
        link.remove();
      }

      setTimeout(function () {
        _this.revokeTempUrl(tempUrl);
      }, 500);
    }
  }, {
    key: "tempUrlForData",
    value: function tempUrlForData(data, fileType) {
      return window.URL.createObjectURL(new Blob([data], {
        type: fileType ? fileType : 'text/json'
      }));
    }
  }, {
    key: "revokeTempUrl",
    value: function revokeTempUrl(url) {
      window.URL.revokeObjectURL(url);
    }
  }, {
    key: "copyTextToClipboard",
    value: function copyTextToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea;
        var result;

        try {
          textarea = document.createElement('textarea');
          textarea.setAttribute('readonly', true);
          textarea.setAttribute('contenteditable', true);
          textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.

          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          var range = document.createRange();
          range.selectNodeContents(textarea);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          textarea.setSelectionRange(0, textarea.value.length);
          result = document.execCommand('copy');
        } catch (err) {
          console.error(err);
          result = null;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    }
  }]);

  return Utils;
}();



/***/ })
/******/ ]);
//# sourceMappingURL=filesafe.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentManager = function () {
  function ComponentManager(permissions, onReady) {
    _classCallCheck(this, ComponentManager);

    this.sentMessages = [];
    this.messageQueue = [];
    this.loggingEnabled = false;
    this.acceptsThemes = true;
    this.activeThemes = [];

    this.initialPermissions = permissions;
    this.onReadyCallback = onReady;

    this.coallesedSaving = true;
    this.coallesedSavingDelay = 250;

    this.registerMessageHandler();
  }

  _createClass(ComponentManager, [{
    key: "registerMessageHandler",
    value: function registerMessageHandler() {
      var _this = this;

      var messageHandler = function messageHandler(event) {
        if (_this.loggingEnabled) {
          console.log("Components API Message received:", event.data);
        }

        // The first message will be the most reliable one, so we won't change it after any subsequent events,
        // in case you receive an event from another window.
        if (!_this.origin) {
          _this.origin = event.origin;
        }

        // Mobile environment sends data as JSON string
        var data = event.data;
        var parsedData = typeof data === "string" ? JSON.parse(data) : data;
        _this.handleMessage(parsedData);
      };

      /*
        Mobile (React Native) uses `document`, web/desktop uses `window`.addEventListener
        for postMessage API to work properly.
         Update May 2019:
        As part of transitioning React Native webview into the community package,
        we'll now only need to use window.addEventListener.
         However, we want to maintain backward compatibility for Mobile < v3.0.5, so we'll keep document.addEventListener
         Also, even with the new version of react-native-webview, Android may still require document.addEventListener (while iOS still only requires window.addEventListener)
        https://github.com/react-native-community/react-native-webview/issues/323#issuecomment-467767933
       */

      document.addEventListener("message", function (event) {
        messageHandler(event);
      }, false);

      window.addEventListener("message", function (event) {
        messageHandler(event);
      }, false);
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(payload) {
      if (payload.action === "component-registered") {
        this.sessionKey = payload.sessionKey;
        this.componentData = payload.componentData;

        this.onReady(payload.data);

        if (this.loggingEnabled) {
          console.log("Component successfully registered with payload:", payload);
        }
      } else if (payload.action === "themes") {
        if (this.acceptsThemes) {
          this.activateThemes(payload.data.themes);
        }
      } else if (payload.original) {
        // get callback from queue
        var originalMessage = this.sentMessages.filter(function (message) {
          return message.messageId === payload.original.messageId;
        })[0];

        if (!originalMessage) {
          // Connection must have been reset. Alert the user.
          alert("This extension is attempting to communicate with Standard Notes, but an error is preventing it from doing so. Please restart this extension and try again.");
        }

        if (originalMessage.callback) {
          originalMessage.callback(payload.data);
        }
      }
    }
  }, {
    key: "onReady",
    value: function onReady(data) {
      this.environment = data.environment;
      this.platform = data.platform;
      this.uuid = data.uuid;
      this.isMobile = this.environment == "mobile";

      if (this.initialPermissions && this.initialPermissions.length > 0) {
        this.requestPermissions(this.initialPermissions);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.messageQueue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;

          this.postMessage(message.action, message.data, message.callback);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.messageQueue = [];

      if (this.loggingEnabled) {
        console.log("onReadyData", data);
      }

      this.activateThemes(data.activeThemeUrls || []);

      if (this.onReadyCallback) {
        this.onReadyCallback();
      }
    }
  }, {
    key: "getSelfComponentUUID",
    value: function getSelfComponentUUID() {
      return this.uuid;
    }
  }, {
    key: "isRunningInDesktopApplication",
    value: function isRunningInDesktopApplication() {
      return this.environment === "desktop";
    }
  }, {
    key: "setComponentDataValueForKey",
    value: function setComponentDataValueForKey(key, value) {
      this.componentData[key] = value;
      this.postMessage("set-component-data", { componentData: this.componentData }, function (data) {});
    }
  }, {
    key: "clearComponentData",
    value: function clearComponentData() {
      this.componentData = {};
      this.postMessage("set-component-data", { componentData: this.componentData }, function (data) {});
    }
  }, {
    key: "componentDataValueForKey",
    value: function componentDataValueForKey(key) {
      return this.componentData[key];
    }
  }, {
    key: "postMessage",
    value: function postMessage(action, data, callback) {
      if (!this.sessionKey) {
        this.messageQueue.push({
          action: action,
          data: data,
          callback: callback
        });
        return;
      }

      var message = {
        action: action,
        data: data,
        messageId: this.generateUUID(),
        sessionKey: this.sessionKey,
        api: "component"
      };

      var sentMessage = JSON.parse(JSON.stringify(message));
      sentMessage.callback = callback;
      this.sentMessages.push(sentMessage);

      // Mobile (React Native) requires a string for the postMessage API.
      if (this.isMobile) {
        message = JSON.stringify(message);
      }

      if (this.loggingEnabled) {
        console.log("Posting message:", message);
      }

      window.parent.postMessage(message, this.origin);
    }
  }, {
    key: "setSize",
    value: function setSize(type, width, height) {
      this.postMessage("set-size", { type: type, width: width, height: height }, function (data) {});
    }
  }, {
    key: "requestPermissions",
    value: function requestPermissions(permissions, callback) {
      this.postMessage("request-permissions", { permissions: permissions }, function (data) {
        callback && callback();
      }.bind(this));
    }
  }, {
    key: "streamItems",
    value: function streamItems(contentTypes, callback) {
      if (!Array.isArray(contentTypes)) {
        contentTypes = [contentTypes];
      }
      this.postMessage("stream-items", { content_types: contentTypes }, function (data) {
        callback(data.items);
      }.bind(this));
    }
  }, {
    key: "streamContextItem",
    value: function streamContextItem(callback) {
      this.postMessage("stream-context-item", null, function (data) {
        var item = data.item;
        /*
          When an item is saved via saveItem, its updated_at value is set client side to the current date.
          If we make a change locally, then for whatever reason receive an item via streamItems/streamContextItem,
          we want to ignore that change if it was made prior to the latest change we've made.
           Update 1/22/18: However, if a user is restoring a note from version history, this change
          will not pass through this filter and will thus be ignored. Because the client now handles
          this case with isMetadataUpdate, we no longer need the below.
        */
        // if(this.streamedContextItem && this.streamedContextItem.uuid == item.uuid
        //   && this.streamedContextItem.updated_at > item.updated_at) {
        //   return;
        // }
        // this.streamedContextItem = item;
        callback(item);
      });
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.postMessage("select-item", { item: this.jsonObjectForItem(item) });
    }
  }, {
    key: "createItem",
    value: function createItem(item, callback) {
      this.postMessage("create-item", { item: this.jsonObjectForItem(item) }, function (data) {
        var item = data.item;

        // A previous version of the SN app had an issue where the item in the reply to create-item
        // would be nested inside "items" and not "item". So handle both cases here.
        if (!item && data.items && data.items.length > 0) {
          item = data.items[0];
        }

        this.associateItem(item);
        callback && callback(item);
      }.bind(this));
    }
  }, {
    key: "createItems",
    value: function createItems(items, callback) {
      var _this2 = this;

      var mapped = items.map(function (item) {
        return _this2.jsonObjectForItem(item);
      });
      this.postMessage("create-items", { items: mapped }, function (data) {
        callback && callback(data.items);
      }.bind(this));
    }
  }, {
    key: "associateItem",
    value: function associateItem(item) {
      this.postMessage("associate-item", { item: this.jsonObjectForItem(item) });
    }
  }, {
    key: "deassociateItem",
    value: function deassociateItem(item) {
      this.postMessage("deassociate-item", { item: this.jsonObjectForItem(item) });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.postMessage("clear-selection", { content_type: "Tag" });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item, callback) {
      this.deleteItems([item], callback);
    }
  }, {
    key: "deleteItems",
    value: function deleteItems(items, callback) {
      var params = {
        items: items.map(function (item) {
          return this.jsonObjectForItem(item);
        }.bind(this))
      };

      this.postMessage("delete-items", params, function (data) {
        callback && callback(data);
      });
    }
  }, {
    key: "sendCustomEvent",
    value: function sendCustomEvent(action, data, callback) {
      this.postMessage(action, data, function (data) {
        callback && callback(data);
      }.bind(this));
    }
  }, {
    key: "saveItem",
    value: function saveItem(item, callback) {
      var skipDebouncer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.saveItems([item], callback, skipDebouncer);
    }

    /* Presave allows clients to perform any actions last second before the save actually occurs (like setting previews).
       Saves debounce by default, so if a client needs to compute a property on an item before saving, it's best to
       hook into the debounce cycle so that clients don't have to implement their own debouncing.
     */

  }, {
    key: "saveItemWithPresave",
    value: function saveItemWithPresave(item, presave, callback) {
      this.saveItemsWithPresave([item], presave, callback);
    }
  }, {
    key: "saveItemsWithPresave",
    value: function saveItemsWithPresave(items, presave, callback) {
      this.saveItems(items, callback, false, presave);
    }

    /*
    skipDebouncer allows saves to go through right away rather than waiting for timeout.
    This should be used when saving items via other means besides keystrokes.
     */

  }, {
    key: "saveItems",
    value: function saveItems(items, callback) {
      var _this3 = this;

      var skipDebouncer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var presave = arguments[3];

      var saveBlock = function saveBlock(itemsToSave) {
        // presave block allows client to gain the benefit of performing something in the debounce cycle.
        presave && presave();

        var mappedItems = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = itemsToSave[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            item.updated_at = new Date();
            mappedItems.push(_this3.jsonObjectForItem(item));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        _this3.postMessage("save-items", { items: mappedItems }, function (data) {
          callback && callback();
        });
      };

      /*
        Coallesed saving prevents saves from being made after every keystroke, and instead
        waits coallesedSavingDelay before performing action. For example, if a user types a keystroke, and the clienet calls saveItem,
        a 250ms delay will begin. If they type another keystroke within 250ms, the previously pending
        save will be cancelled, and another 250ms delay occurs. If ater 250ms the pending delay is not cleared by a future call,
        the save will finally trigger.
         Note: it's important to modify saving items updated_at immediately and not after delay. If you modify after delay,
        a delayed sync could just be wrapping up, and will send back old data and replace what the user has typed.
       */

      // We also need to make sure that when we clear a pending save timeout, we carry over those pending items into the new save.
      if (!this.pendingSaveItems) {
        this.pendingSaveItems = [];
      }

      if (this.coallesedSaving == true && !skipDebouncer) {
        if (this.pendingSave) {
          clearTimeout(this.pendingSave);
        }

        var incomingIds = items.map(function (item) {
          return item.uuid;
        });

        // Replace any existing save items with incoming values
        // Only keep items here who are not in incomingIds
        this.pendingSaveItems = this.pendingSaveItems.filter(function (item) {
          return !incomingIds.includes(item.uuid);
        });

        // Add new items, now that we've made sure it's cleared of incoming items.
        this.pendingSaveItems = this.pendingSaveItems.concat(items);
        this.pendingSave = setTimeout(function () {
          saveBlock(_this3.pendingSaveItems);
          // Clear pending save items
          _this3.pendingSaveItems = [];
        }, this.coallesedSavingDelay);
      } else {
        saveBlock(items);
      }
    }
  }, {
    key: "jsonObjectForItem",
    value: function jsonObjectForItem(item) {
      var copy = Object.assign({}, item);
      copy.children = null;
      copy.parent = null;
      return copy;
    }
  }, {
    key: "getItemAppDataValue",
    value: function getItemAppDataValue(item, key) {
      var AppDomain = "org.standardnotes.sn";
      var data = item.content.appData && item.content.appData[AppDomain];
      if (data) {
        return data[key];
      } else {
        return null;
      }
    }

    /* Themes */

  }, {
    key: "activateThemes",
    value: function activateThemes(incomingUrls) {
      if (this.loggingEnabled) {
        console.log("Incoming themes", incomingUrls);
      }
      if (this.activeThemes.sort().toString() == incomingUrls.sort().toString()) {
        // incoming are same as active, do nothing
        return;
      }

      var themesToActivate = incomingUrls || [];
      var themesToDeactivate = [];

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.activeThemes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var activeUrl = _step3.value;

          if (!incomingUrls.includes(activeUrl)) {
            // active not present in incoming, deactivate it
            themesToDeactivate.push(activeUrl);
          } else {
            // already present in active themes, remove it from themesToActivate
            themesToActivate = themesToActivate.filter(function (candidate) {
              return candidate != activeUrl;
            });
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (this.loggingEnabled) {
        console.log("Deactivating themes:", themesToDeactivate);
        console.log("Activating themes:", themesToActivate);
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = themesToDeactivate[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var theme = _step4.value;

          this.deactivateTheme(theme);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.activeThemes = incomingUrls;

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = themesToActivate[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var url = _step5.value;

          if (!url) {
            continue;
          }

          var link = document.createElement("link");
          link.id = btoa(url);
          link.href = url;
          link.type = "text/css";
          link.rel = "stylesheet";
          link.media = "screen,print";
          link.className = "custom-theme";
          document.getElementsByTagName("head")[0].appendChild(link);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "themeElementForUrl",
    value: function themeElementForUrl(url) {
      var elements = Array.from(document.getElementsByClassName("custom-theme")).slice();
      return elements.find(function (element) {
        // We used to search here by `href`, but on desktop, with local file:// urls, that didn't work for some reason.
        return element.id == btoa(url);
      });
    }
  }, {
    key: "deactivateTheme",
    value: function deactivateTheme(url) {
      var element = this.themeElementForUrl(url);
      if (element) {
        element.disabled = true;
        element.parentNode.removeChild(element);
      }
    }

    /* Theme caching is currently disabled. Might be enabled in the future if neccessary. */
    /*
    activateCachedThemes() {
      let themes = this.getCachedThemeUrls();
      let writeToCache = false;
      if(this.loggingEnabled) { console.log("Activating cached themes", themes); }
      this.activateThemes(themes, writeToCache);
    }
     cacheThemeUrls(urls) {
      if(this.loggingEnabled) { console.log("Caching theme urls", urls); }
      localStorage.setItem("cachedThemeUrls", JSON.stringify(urls));
    }
     decacheThemeUrls() {
      localStorage.removeItem("cachedThemeUrls");
    }
     getCachedThemeUrls() {
      let urls = localStorage.getItem("cachedThemeUrls");
      if(urls) {
        return JSON.parse(urls);
      } else {
        return [];
      }
    }
    */

    /* Utilities */

  }, {
    key: "generateUUID",
    value: function generateUUID() {
      var crypto = window.crypto || window.msCrypto;
      if (crypto) {
        var buf = new Uint32Array(4);
        crypto.getRandomValues(buf);
        var idx = -1;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          idx++;
          var r = buf[idx >> 3] >> idx % 8 * 4 & 15;
          var v = c == 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      } else {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
          d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
      }
    }
  }]);

  return ComponentManager;
}();

if (typeof module != "undefined" && typeof module.exports != "undefined") {
  module.exports = ComponentManager;
}

if (window) {
  window.ComponentManager = ComponentManager;
}
//# sourceMappingURL=dist.js.map


/***/ })
/******/ ]);