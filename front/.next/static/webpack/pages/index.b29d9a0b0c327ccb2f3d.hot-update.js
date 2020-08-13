webpackHotUpdate_N_E("pages/index",{

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

        var post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.context)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: false,
          addCommentDone: true,
          mainPosts: mainPosts
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJjb250ZXh0IiwiQUREX0NPTU1FTlRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBU08sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUUsQ0FDVjtBQUNDQyxNQUFFLEVBQUUsQ0FETDtBQUVDQyxRQUFJLEVBQUU7QUFDTEQsUUFBRSxFQUFFLENBREM7QUFFTEUsY0FBUSxFQUFFO0FBRkwsS0FGUDtBQU1DQyxXQUFPLEVBQUUseUJBTlY7QUFPQ0MsVUFBTSxFQUFFLENBQ1A7QUFDQ0MsU0FBRyxFQUFFO0FBRE4sS0FETyxFQUlQO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBSk8sRUFPUDtBQUNDQSxTQUFHLEVBQUU7QUFETixLQVBPLENBUFQ7QUFrQkNDLFlB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QUFJLENBQUM3QixRQUFMLElBQWlCWSxZQUFZLENBQUNRLE1BQU0sQ0FBQ1gsSUFBUCxDQUFZcUIsT0FBYixDQUE3QixzR0FBdURELElBQUksQ0FBQzdCLFFBQTVEOztBQUNBLFlBQU1QLFNBQVMsR0FBRyw2RkFBSTBCLEtBQUssQ0FBQzFCLFNBQWIsQ0FBZjs7QUFDQUEsaUJBQVMsQ0FBQ2dDLFNBQUQsQ0FBVCxHQUF1QkksSUFBdkI7QUFDQSwrQ0FDSVYsS0FESjtBQUVDZCwyQkFBaUIsRUFBRSxLQUZwQjtBQUdDQyx3QkFBYyxFQUFFLElBSGpCO0FBSUNiLG1CQUFTLEVBQVRBO0FBSkQ7QUFNQTs7QUFDRCxTQUFLc0MsNERBQUw7QUFDQyw2Q0FDSVosS0FESjtBQUVDZCx5QkFBaUIsRUFBRSxLQUZwQjtBQUdDRCxvQkFBWSxFQUFFZ0IsTUFBTSxDQUFDRztBQUh0Qjs7QUFLRDtBQUNDLGFBQU9KLEtBQVA7QUE3Q0Y7QUErQ0EsQ0FoREQ7O0FBa0RlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjlkOWEwYjBjMzI3Y2NiMmYzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmlja25hbWU6IFwi67mE64K066as64qUflwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggIyMj7J217Iqk7ZSE66CI7IqkXCIsXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCIvcHJvZmlsZS5QTkdcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcIm5lcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuyasOyZgCAhIVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJoZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLrqYvsp4Dri6QhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIEFERCBQT1NUXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIEFERCBDT01NRU5UXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuXHRcdFx0cG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGV4dCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG5cdFx0XHRjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuXHRcdFx0bWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtYWluUG9zdHMsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=