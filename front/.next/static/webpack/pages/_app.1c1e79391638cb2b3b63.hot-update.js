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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJBRERfQ09NTUVOVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMRCxRQUFFLEVBQUUsQ0FEQztBQUVMRSxjQUFRLEVBQUU7QUFGTCxLQUZQO0FBTUNDLFdBQU8sRUFBRSx5QkFOVjtBQU9DQyxVQUFNLEVBQUUsQ0FDUDtBQUNDQyxTQUFHLEVBQUU7QUFETixLQURPLEVBSVA7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FKTyxFQU9QO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBUE8sQ0FQVDtBQWtCQ0MsWUFBUSxFQUFFLENB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LFFBQUwsSUFBaUJZLFlBQVksQ0FBQ1EsTUFBTSxDQUFDWCxJQUFQLENBQVlaLE9BQWIsQ0FBN0Isc0dBQXVEZ0MsSUFBSSxDQUFDN0IsUUFBNUQ7O0FBQ0EsWUFBTVAsU0FBUyxHQUFHLDZGQUFJMEIsS0FBSyxDQUFDMUIsU0FBYixDQUFmOztBQUNBQSxpQkFBUyxDQUFDZ0MsU0FBRCxDQUFULEdBQXVCSSxJQUF2QjtBQUNBLCtDQUNJVixLQURKO0FBRUNkLDJCQUFpQixFQUFFLEtBRnBCO0FBR0NDLHdCQUFjLEVBQUUsSUFIakI7QUFJQ2IsbUJBQVMsRUFBVEE7QUFKRDtBQU1BOztBQUNELFNBQUtxQyw0REFBTDtBQUNDLDZDQUNJWCxLQURKO0FBRUNkLHlCQUFpQixFQUFFLEtBRnBCO0FBR0NELG9CQUFZLEVBQUVnQixNQUFNLENBQUNHO0FBSHRCOztBQUtEO0FBQ0MsYUFBT0osS0FBUDtBQTdDRjtBQStDQSxDQWhERDs7QUFrRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWMxZTc5MzkxNjM4Y2IyYjNiNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogMSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiBcIuu5hOuCtOumrOuKlH5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICMjI+ydteyKpO2UhOugiOyKpFwiLFxyXG5cdFx0XHRJbWFnZXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3Byb2ZpbGUuUE5HXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJuZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLsmrDsmYAgISFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwiaGVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi66mL7KeA64ukIVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0aW1hZ2VQYXRoczogW10sXHJcblx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyBBREQgUE9TVFxyXG5cdGFkZFBvc3REb25lOiBmYWxzZSxcclxuXHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCAvLyBBREQgQ09NTUVOVFxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSBkYXRhID0+ICh7XHJcblx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6IFwiS1NSXCIsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSBkYXRhID0+ICh7XHJcblx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IHRydWUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZFBvc3REb25lOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0Y29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcblx0XHRcdGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcblx0XHRcdHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuXHRcdFx0Y29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcblx0XHRcdG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkQ29tbWVudERvbmU6IHRydWUsXHJcblx0XHRcdFx0bWFpblBvc3RzLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9