webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostAction, addRemoveAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRemoveAction", function() { return addRemoveAction; });
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
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        nickname: "nero"
      },
      content: "우와 !!"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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
  addCommentError: null,
  removePostLoading: false,
  // Remove POST
  removePostDone: false,
  removePostError: null
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
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
var addRemoveAction = function addRemoveAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"],
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

        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

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

    case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: state.mainPosts.filter(function (v) {
          return v.id !== action.data;
        }),
        removePostLoading: false,
        removePostDone: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: false,
        removePostError: action.error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiYWRkUG9zdEFjdGlvbiIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiYWRkUmVtb3ZlQWN0aW9uIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImFkZENvbW1lbnRBY3Rpb24iLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiZmlsdGVyIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVlPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFFLENBQ1Y7QUFDQ0MsTUFBRSxFQUFFLENBREw7QUFFQ0MsUUFBSSxFQUFFO0FBQ0xELFFBQUUsRUFBRSxDQURDO0FBRUxFLGNBQVEsRUFBRTtBQUZMLEtBRlA7QUFNQ0Ms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LEtBREo7QUFFQy9CLGlCQUFTLEVBQUUrQixLQUFLLENBQUMvQixTQUFOLENBQWdCNEMsTUFBaEIsQ0FBdUIsVUFBQUwsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUN0QyxFQUFGLEtBQVMrQixNQUFNLENBQUNYLElBQXBCO0FBQUEsU0FBeEIsQ0FGWjtBQUdDSix5QkFBaUIsRUFBRSxLQUhwQjtBQUlDQyxzQkFBYyxFQUFFO0FBSmpCOztBQU1ELFNBQUsyQiw0REFBTDtBQUNDLDZDQUNJZCxLQURKO0FBRUNkLHlCQUFpQixFQUFFLEtBRnBCO0FBR0NFLHVCQUFlLEVBQUVhLE1BQU0sQ0FBQ0c7QUFIekI7O0FBS0Q7QUFDQyxhQUFPSixLQUFQO0FBL0RGO0FBaUVBLENBbEVEOztBQW9FZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMDRhYzJhYWY1NGU4NWQxNTEzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG5cdFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmlja25hbWU6IFwi67mE64K066as64qUflwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggIyMj7J217Iqk7ZSE66CI7IqkXCIsXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCIvcHJvZmlsZS5QTkdcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJuZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLsmrDsmYAgISFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcImhlcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuupi+yngOuLpCFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gQUREIFBPU1RcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8gQUREIENPTU1FTlRcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gUmVtb3ZlIFBPU1RcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBkYXRhLmlkLFxyXG5cdGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZW1vdmVBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuXHRcdFx0cG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG5cdFx0XHRjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuXHRcdFx0bWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtYWluUG9zdHMsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHJlbW92ZVBvc3RMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcih2ID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuXHRcdFx0XHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0cmVtb3ZlUG9zdERvbmU6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=