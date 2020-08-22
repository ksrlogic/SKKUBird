module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\pages\\_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const SkkuBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "SKKUBIRD")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }));
};

SkkuBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_2___default()(SkkuBird)));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const intialState = {
  user: {},
  post: {}
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = intialState, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, addPostAction, removePostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostAction", function() { return removePostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");




const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  addPostLoading: false,
  // ADD POST
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  // ADD COMMENT
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  // Remove POST
  removePostDone: false,
  removePostError: null,
  loadPostsLoading: false,
  // Remove POST
  loadPostsDone: false,
  loadPostsError: null
};

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "KSR"
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "제로초"
  }
});

const generateDummyPost = number => {
  return Array(number).fill().map(() => ({
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  }));
};
const addPostAction = data => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
    data
  };
};
const removePostAction = data => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"],
    data
  };
};
const addCommentAction = () => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]
  };
};

const reducer = (state = initialState, action) => {
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draft => {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostDone = true;
        draft.addPostLoading = false;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
        draft.addPostDone = false;
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.postId);
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
        draft.addCommentLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"]:
        draft.removePostLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"]:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"]:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"]:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"]:
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostsDone = true;
        draft.loadPostsLoading = false;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"]:
        draft.loadPostsDone = false;
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, loginFailureAction, loginSuccessAction, logoutRequestAction, logoutFailureAction, logoutSuccessAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // prettier-ignore

const initialState = {
  loginLoading: false,
  // 로그인 로딩
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  //  로그아웃 로딩
  logoutDone: false,
  logoutError: null,
  signUpLoading: false,
  //  회원가입 로딩
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};

const dummyUser = data => {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "KSR",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }],
    Followers: [{
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }]
  });
}; //  LOGIN


const loginRequestAction = data => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"],
    data
  };
};
const loginFailureAction = data => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
    data
  };
};
const loginSuccessAction = data => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
    data
  };
}; //	LOGOUT

const logoutRequestAction = () => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]
  };
};
const logoutFailureAction = () => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]
  };
};
const logoutSuccessAction = () => {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
  };
}; //

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"]:
        draft.loginLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = dummyUser(action.data);
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
        draft.loginLoading = false;
        draft.loginError = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
        draft.loginLoading = true;
        draft.logoutError = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.me = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
        draft.signUpLoading = true;
        draft.signUpDone = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
        draft.signUpDone = true;
        draft.signUpLoading = false;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_TO_ME"]:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_OF_ME"]:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), //  call
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


 // prettier-ignore

 // function addPostAPI() {
//   return axios.post("/api/post");
// }
// function removePostAPI() {
//   return axios.post("/api/post");
// }

function* addComment({
  data
}) {
  try {
    // const result = yield call(addPostAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data //	result.data 고정

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data //	err.response.data 고정

    });
  }
}

function* addPost({
  data
}) {
  try {
    // const result = yield call(addPostAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: data
      } //	result.data 고정

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data //	err.response.data 고정

    });
  }
}

function* loadPost() {
  try {
    // const result = yield call(loadPostAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data //	err.response.data 고정

    });
  }
}

function* removePost({
  data
}) {
  try {
    // const result = yield call(removePostAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data //	result.data 고정

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data //	err.response.data 고정

    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchCommentPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./actions/index.js");

 // import axios from "axios";
// function loginAPI(data) {
//   return axios.post("/api/login", data);
// }
// function logoutAPI() {
//   return axios.post("/api/logout");
// }
// function signupAPI() {
//   return axios.post("/api/signup")
// }

function* login() {
  try {
    // const result = yield call(loginAPI, action.data); // 그냥 인자로 넘기면 알아서 들어감. 더받고싶으면 더 넣으면 댐
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: {} //	result.data 고정

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: err.response.data //	err.response.data 고정

    });
  }
}

function* logout() {
  try {
    // const result = yield call(logoutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"] //   data: result.data, //result.data 고정

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: err.response.data //  err.response.data 고정

    });
  }
}

function* signup() {
  try {
    // const result = yield call(signupAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"] //   data: result.data,

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: err.data
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], login);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logout);
}

function* watchSignup() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signup);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), //  call
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiU2trdUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSIsImludGlhbFN0YXRlIiwidXNlciIsInBvc3QiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJpZCIsImNvbnRlbnQiLCJVc2VyIiwibmlja25hbWUiLCJJbWFnZXMiLCJDb21tZW50cyIsImR1bW15Q29tbWVudCIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsInNyYyIsImltYWdlIiwic2VudGVuY2UiLCJhZGRQb3N0QWN0aW9uIiwicmVtb3ZlUG9zdEFjdGlvbiIsImFkZENvbW1lbnRBY3Rpb24iLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVycm9yIiwiZmluZCIsInYiLCJwb3N0SWQiLCJmaWx0ZXIiLCJsZW5ndGgiLCJjb25jYXQiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9naW5GYWlsdXJlQWN0aW9uIiwibG9naW5TdWNjZXNzQWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZENvbW1lbnQiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwiYWRkUG9zdCIsImxvYWRQb3N0IiwicmVtb3ZlUG9zdCIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hDb21tZW50UG9zdCIsImxvZ2luIiwibG9nb3V0Iiwic2lnbnVwIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0Iiwid2F0Y2hTaWdudXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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T3NDLEtBQVA7QUFDRCxDQVZEOztBQVlBLE1BQU1uSSxPQUFPLEdBQUd1SSx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzVDYSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWV4SSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuY29uc3QgU2trdUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG5cdFx0XHRcdDx0aXRsZT5TS0tVQklSRDwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PENvbXBvbmVudCAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcblNra3VCaXJkLnByb3BUeXBlcyA9IHtcclxuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShTa2t1QmlyZCkpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuY29uc3QgaW50aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjoge30sXHJcbiAgcG9zdDoge30sXHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IGludGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcblx0TE9BRF9QT1NUU19GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW10sXHJcblx0aW1hZ2VQYXRoczogW10sXHJcblx0aGFzTW9yZVBvc3RzOiB0cnVlLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gQUREIFBPU1RcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8gQUREIENPTU1FTlRcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gUmVtb3ZlIFBPU1RcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cdGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyBSZW1vdmUgUE9TVFxyXG5cdGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG5cdGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBkYXRhLmlkLFxyXG5cdGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gbnVtYmVyID0+IHtcclxuXHRyZXR1cm4gQXJyYXkobnVtYmVyKVxyXG5cdFx0LmZpbGwoKVxyXG5cdFx0Lm1hcCgoKSA9PiAoe1xyXG5cdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRcdFx0SW1hZ2VzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRyZXR1cm4gcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xyXG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuXHRcdFx0XHRwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKHYgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcblx0XHRcdFx0ZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuXHRcdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0TE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLFxyXG5cdFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsXHJcblx0Q0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLFxyXG5cdFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiOyAvLyBwcmV0dGllci1pZ25vcmVcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bG9naW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOuhnOuUqVxyXG5cdGxvZ2luRG9uZTogZmFsc2UsXHJcblx0bG9naW5FcnJvcjogbnVsbCxcclxuXHRsb2dvdXRMb2FkaW5nOiBmYWxzZSwgLy8gIOuhnOq3uOyVhOybgyDroZzrlKlcclxuXHRsb2dvdXREb25lOiBmYWxzZSxcclxuXHRsb2dvdXRFcnJvcjogbnVsbCxcclxuXHRzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8gIO2ajOybkOqwgOyehSDroZzrlKlcclxuXHRzaWduVXBEb25lOiBmYWxzZSxcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSxcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdC4uLmRhdGEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHRcdGlkOiAxLFxyXG5cdFx0UG9zdHM6IFt7IGlkOiAxIH1dLFxyXG5cdFx0Rm9sbG93aW5nczogW3sgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH1dLFxyXG5cdFx0Rm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfV0sXHJcblx0fTtcclxufTtcclxuLy8gIExPR0lOXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuLy9cdExPR09VVFxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHR9O1xyXG59O1xyXG4vL1xyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRyZXR1cm4gcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xyXG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0XHRjYXNlIExPR19JTl9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LmxvZ2luTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQubG9naW5Eb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcblx0XHRcdFx0ZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQubG9naW5FcnJvciA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LmxvZ2luTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQubG9nb3V0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQubG9nb3V0RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQubWUgPSBudWxsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQubG9nb3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSBudWxsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9QT1NUX1RPX01FOlxyXG5cdFx0XHRcdGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdFx0ZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsocG9zdFNhZ2EpLCAvLyAgY2FsbFxyXG5cdFx0Zm9yayh1c2VyU2FnYSksXHJcblx0XSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0QUREX1BPU1RfVE9fTUUsXHJcblx0UkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRSRU1PVkVfUE9TVF9PRl9NRSxcclxuXHRMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG5pbXBvcnQgeyBnZW5lcmF0ZUR1bW15UG9zdCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRQb3N0QVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiByZW1vdmVQb3N0QVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudCh7IGRhdGEgfSkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEkpO1xyXG5cdFx0eWllbGQgZGVsYXkoMTAwMCk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhLCAvL1x0cmVzdWx0LmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLCAvL1x0ZXJyLnJlc3BvbnNlLmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoeyBkYXRhIH0pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0Y29uc3QgaWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0Y29udGVudDogZGF0YSxcclxuXHRcdFx0fSwgLy9cdHJlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuXHRcdFx0ZGF0YTogaWQsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLCAvL1x0ZXJyLnJlc3BvbnNlLmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0KCkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vXHRlcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoeyBkYXRhIH0pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YSwgLy9cdHJlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuXHRcdFx0ZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vXHRlcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb21tZW50UG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaEFkZFBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hDb21tZW50UG9zdCksXHJcblx0XHRmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcblx0XSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdExPR19JTl9TVUNDRVNTLFxyXG5cdExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19PVVRfU1VDQ0VTUyxcclxuXHRMT0dfT1VUX0ZBSUxVUkUsXHJcblx0TE9HX0lOX1JFUVVFU1QsXHJcblx0TE9HX09VVF9SRVFVRVNULFxyXG5cdFNJR05fVVBfUkVRVUVTVCxcclxuXHRTSUdOX1VQX1NVQ0NFU1MsXHJcblx0U0lHTl9VUF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpIHtcclxuLy8gICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGxvZ291dEFQSSgpIHtcclxuLy8gICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzaWdudXBBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3NpZ251cFwiKVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogbG9naW4oKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g6re464OlIOyduOyekOuhnCDrhJjquLDrqbQg7JWM7JWE7IScIOuTpOyWtOqwkC4g642U67Cb6rOg7Iu27Jy866m0IOuNlCDrhKPsnLzrqbQg64yQXHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiB7fSwgLy9cdHJlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLCAvL1x0ZXJyLnJlc3BvbnNlLmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdFx0XHQvLyAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvL3Jlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSwgLy8gIGVyci5yZXNwb25zZS5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uKiBzaWdudXAoKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnbnVwQVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG5cdFx0XHQvLyAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnbnVwKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaExvZ2luKSwgLy8gIGNhbGxcclxuXHRcdGZvcmsod2F0Y2hMb2dvdXQpLFxyXG5cdFx0Zm9yayh3YXRjaFNpZ251cCksXHJcblx0XSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=