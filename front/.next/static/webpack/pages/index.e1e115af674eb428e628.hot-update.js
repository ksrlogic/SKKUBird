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

initialState.mainPosts.concat(Array(20).fill().map(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiY29uY2F0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwiaW1hZ2VVcmwiLCJzZW50ZW5jZSIsImFkZFBvc3RBY3Rpb24iLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsInJlbW92ZVBvc3RBY3Rpb24iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudEFjdGlvbiIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJwb3N0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsImZpbHRlciIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDQXlCLGFBQUssQ0FBQzdCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QixhQUFLLENBQUM1QixjQUFOLEdBQXVCLElBQXZCO0FBQ0E7O0FBQ0QsV0FBS3lDLDREQUFMO0FBQ0NiLGFBQUssQ0FBQzdCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QixhQUFLLENBQUMzQixlQUFOLEdBQXdCeUIsTUFBTSxDQUFDTSxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUEzQ0Y7QUE2Q0EsR0E5Q2EsQ0FBZDtBQStDQSxDQWhERDs7QUFrRGVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxZTExNWFmNjc0ZWI0MjhlNjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBwcm9kdWNlIH0gZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG5cdFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmlja25hbWU6IFwi67mE64K066as64qUflwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggIyMj7J217Iqk7ZSE66CI7IqkXCIsXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCIvcHJvZmlsZS5QTkdcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJuZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLsmrDsmYAgISFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcImhlcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuupi+yngOuLpCFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gQUREIFBPU1RcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8gQUREIENPTU1FTlRcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gUmVtb3ZlIFBPU1RcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBkYXRhLmlkLFxyXG5cdGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoXHJcblx0QXJyYXkoMjApXHJcblx0XHQuZmlsbCgpXHJcblx0XHQubWFwKCgpID0+ICh7XHJcblx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG5cdFx0XHRJbWFnZXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlVXJsKCksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0pKSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG5cdFx0XHRcdHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=