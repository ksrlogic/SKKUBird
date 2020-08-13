webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "비내리는~"
    },
    content: "첫 번째 게시글 #해시태그 ###익스프레스",
    Images: [{
      src: "/profile.PNG"
    }, {
      src: "https://picsum.photos/seed/picsum/200/300"
    }, {
      src: "https://picsum.photos/seed/picsum/200/300"
    }],
    Comments: [{
      User: {
        nickname: "nero"
      },
      content: "우와 !!"
    }, {
      User: {
        nickname: "hero"
      },
      content: "멋지다!"
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  // ADD POST
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  // ADD COMMENT
  addCommentDone: false,
  addCommentError: null
};

var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "KSR"
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "제로초"
    }
  };
};

var addPostAction = function addPostAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
    data: data
  };
};
var addCommentAction = function addCommentAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostDone: true,
        addPostLoading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostDone: false,
        addPostLoading: false,
        addPostError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"]:
      {
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });
        var post = state.mainPosts[postIndex];
        post.Comments = [dummyComment(action.data.context)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: false,
          addCommentDone: true,
          mainPosts: []
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addPostError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchCommentPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);


 // function addPostAPI() {
//   return axios.post("/api/post");
// }

function addComment(_ref) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
            data: data //	result.data 고정

          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            data: _context.t0.response.data //	err.response.data 고정

          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
}

function addPost(_ref2) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref2.data;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: data //	result.data 고정

          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            data: _context2.t0.response.data //	err.response.data 고정

          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 8]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchCommentPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchCommentPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchCommentPost)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJjb250ZXh0IiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZENvbW1lbnQiLCJhZGRQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hDb21tZW50UG9zdCIsInBvc3RTYWdhIiwiZGVsYXkiLCJwdXQiLCJyZXNwb25zZSIsInRha2VMYXRlc3QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMRCxRQUFFLEVBQUUsQ0FEQztBQUVMRSxjQUFRLEVBQUU7QUFG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UUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTUssOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDUixZQUFELENBQUwsRUFBcUJRLCtEQUFJLENBQUNQLGdCQUFELENBQXpCLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQwMTkxZmRkMGYwZDU3NWVhMzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRuaWNrbmFtZTogXCLruYTrgrTrpqzripR+XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjIyPsnbXsiqTtlITroIjsiqRcIixcclxuXHRcdFx0SW1hZ2VzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcIi9wcm9maWxlLlBOR1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRDb21tZW50czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwibmVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi7Jqw7JmAICEhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcImhlcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuupi+yngOuLpCFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gQUREIFBPU1RcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8gQUREIENPTU1FTlRcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cdFx0XHRcdGFkZFBvc3REb25lOiB0cnVlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG5cdFx0XHRjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcblx0XHRcdHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRleHQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuXHRcdFx0Y29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcblx0XHRcdG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkQ29tbWVudERvbmU6IHRydWUsXHJcblx0XHRcdFx0bWFpblBvc3RzOiBbXSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuLy8gZnVuY3Rpb24gYWRkUG9zdEFQSSgpIHtcclxuLy8gICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoeyBkYXRhIH0pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YSwgLy9cdHJlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFx0XHRkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSwgLy9cdGVyci5yZXNwb25zZS5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uKiBhZGRQb3N0KHsgZGF0YSB9KSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSk7XHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGEsIC8vXHRyZXN1bHQuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vXHRlcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb21tZW50UG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaENvbW1lbnRQb3N0KV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=