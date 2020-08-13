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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJkdW1teUNvbW1lbnQiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJBRERfQ09NTUVOVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMRCxRQUFFLEVBQUUsQ0FEQztBQUVMRSxjQUFRLEVBQUU7QUFGTCxLQUZQO0FBTUNDLFdBQU8sRUFBRSx5QkFOVjtBQU9DQyxVQUFNLEVBQUUsQ0FDUDtBQUNDQyxTQUFHLEVBQUU7QUFETixLQURPLEVBSVA7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FKTyxFQU9QO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBUE8sQ0FQVDtBQWtCQ0MsWUFBUSxFQUFFLENB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LFlBQU1DLElBQUkscUJBQVFWLEtBQUssQ0FBQzFCLFNBQU4sQ0FBZ0JnQyxTQUFoQixDQUFSLENBQVY7O0FBQ0FJLFlBQUksQ0FBQzdCLFFBQUwsSUFBaUJZLFlBQVksQ0FBQ1EsTUFBTSxDQUFDVCxJQUFQLENBQVlkLE9BQWIsQ0FBN0Isc0dBQXVEZ0MsSUFBSSxDQUFDN0IsUUFBNUQ7O0FBQ0EsWUFBTVAsU0FBUyxHQUFHLDZGQUFJMEIsS0FBSyxDQUFDMUIsU0FBYixDQUFmOztBQUNBQSxpQkFBUyxDQUFDZ0MsU0FBRCxDQUFULEdBQXVCSSxJQUF2QjtBQUNBLCtDQUNJVixLQURKO0FBRUNaLDJCQUFpQixFQUFFLEtBRnBCO0FBR0NDLHdCQUFjLEVBQUUsSUFIakI7QUFJQ2YsbUJBQVMsRUFBVEE7QUFKRDtBQU1BOztBQUNELFNBQUtxQyw0REFBTDtBQUNDLDZDQUNJWCxLQURKO0FBRUNaLHlCQUFpQixFQUFFLEtBRnBCO0FBR0NELG9CQUFZLEVBQUVjLE1BQU0sQ0FBQ0c7QUFIdEI7O0FBS0Q7QUFDQyxhQUFPSixLQUFQO0FBN0NGO0FBK0NBLENBaEREOztBQWtEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDg5ZDdlNWNiNDFlOTY3MjZjMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogMSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiBcIuu5hOuCtOumrOuKlH5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICMjI+ydteyKpO2UhOugiOyKpFwiLFxyXG5cdFx0XHRJbWFnZXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3Byb2ZpbGUuUE5HXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwibmVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi7Jqw7JmAICEhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJoZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLrqYvsp4Dri6QhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIEFERCBQT1NUXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIEFERCBDT01NRU5UXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuXHRcdFx0cG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG5cdFx0XHRjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuXHRcdFx0bWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtYWluUG9zdHMsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=