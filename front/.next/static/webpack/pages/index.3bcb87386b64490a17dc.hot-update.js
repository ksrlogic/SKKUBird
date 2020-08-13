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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");




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

initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  };
}));
var addPostAction = function addPostAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
    data: data
  };
};
var removePostAction = function removePostAction(data) {
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, function (draft) {
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
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiY29uY2F0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwiaW1hZ2VVcmwiLCJzZW50ZW5jZSIsImFkZFBvc3RBY3Rpb24iLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsInJlbW92ZVBvc3RBY3Rpb24iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudEFjdGlvbiIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJwb3N0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsImZpbHRlciIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LENBQUN2QixJQUFwQjtBQUFBLFNBQXhCLENBQWxCO0FBQ0F5QixhQUFLLENBQUM3QixpQkFBTixHQUEwQixLQUExQjtBQUNBNkIsYUFBSyxDQUFDNUIsY0FBTixHQUF1QixJQUF2QjtBQUNBOztBQUNELFdBQUt5Qyw0REFBTDtBQUNDYixhQUFLLENBQUM3QixpQkFBTixHQUEwQixLQUExQjtBQUNBNkIsYUFBSyxDQUFDM0IsZUFBTixHQUF3QnlCLE1BQU0sQ0FBQ00sS0FBL0I7QUFDQTs7QUFDRDtBQUNDO0FBM0NGO0FBNkNBLEdBOUNhLENBQWQ7QUErQ0EsQ0FoREQ7O0FBa0RlUixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYmNiODczODZiNjQ0OTBhMTdkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogMSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiBcIuu5hOuCtOumrOuKlH5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICMjI+ydteyKpO2UhOugiOyKpFwiLFxyXG5cdFx0XHRJbWFnZXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3Byb2ZpbGUuUE5HXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwibmVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi7Jqw7JmAICEhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJoZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLrqYvsp4Dri6QhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIEFERCBQT1NUXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIEFERCBDT01NRU5UXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIFJlbW92ZSBQT1NUXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IGRhdGEgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuXHR9LFxyXG59KTtcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuXHRBcnJheSgyMClcclxuXHRcdC5maWxsKClcclxuXHRcdC5tYXAoKCkgPT4gKHtcclxuXHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRDb21tZW50czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSkpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHByb2R1Y2Uoc3RhdGUsIGRyYWZ0ID0+IHtcclxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcblx0XHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcih2ID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==