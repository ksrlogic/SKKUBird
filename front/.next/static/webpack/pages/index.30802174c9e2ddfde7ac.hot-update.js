webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostAction, removePostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostAction", function() { return removePostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



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
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        nickname: "nero"
      },
      content: "우와 !!"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
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
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "제로초"
    }
  };
};

var addPostAction = function addPostAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
    data: data
  };
};
var removePostAction = function removePostAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"],
    data: data
  };
};
var addCommentAction = function addCommentAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"]
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, function (draft) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"]:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"]:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostDone = true;
        draft.addPostLoading = false;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"]:
        draft.addPostDone = false;
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"]:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"]:
        draft.addCommentLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"]:
        draft.removePostLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"]:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"]:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiYWRkUG9zdEFjdGlvbiIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwicmVtb3ZlUG9zdEFjdGlvbiIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJ1bnNoaWZ0IiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsInBvc3QiLCJmaW5kIiwidiIsInBvc3RJZCIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiZmlsdGVyIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQVlPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFFLENBQ1Y7QUFDQ0MsTUFBRSxFQUFFLENBREw7QUFFQ0MsUUFBSSxFQUFFO0FBQ0xELFFB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Q0QsV0FBSzRCLDREQUFMO0FBQ0NYLGFBQUssQ0FBQ2xDLFNBQU4sR0FBa0JrQyxLQUFLLENBQUNsQyxTQUFOLENBQWdCOEMsTUFBaEIsQ0FBdUIsVUFBQUosQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUN6QyxFQUFGLEtBQVMrQixNQUFNLENBQUNYLElBQXBCO0FBQUEsU0FBeEIsQ0FBbEI7QUFDQWEsYUFBSyxDQUFDakIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWlCLGFBQUssQ0FBQ2hCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTs7QUFDRCxXQUFLNkIsNERBQUw7QUFDQ2IsYUFBSyxDQUFDakIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWlCLGFBQUssQ0FBQ2YsZUFBTixHQUF3QmEsTUFBTSxDQUFDTSxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUEzQ0Y7QUE2Q0EsR0E5Q2EsQ0FBZDtBQStDQSxDQWhERDs7QUFrRGVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMwODAyMTc0YzllMmRkZmRlN2FjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBwcm9kdWNlIH0gZnJvbSBcImltbWVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogMSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiBcIuu5hOuCtOumrOuKlH5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICMjI+ydteyKpO2UhOugiOyKpFwiLFxyXG5cdFx0XHRJbWFnZXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3Byb2ZpbGUuUE5HXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwibmVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi7Jqw7JmAICEhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJoZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLrqYvsp4Dri6QhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIEFERCBQT1NUXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIEFERCBDT01NRU5UXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIFJlbW92ZSBQT1NUXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IGRhdGEgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG5cdFx0XHRcdHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=