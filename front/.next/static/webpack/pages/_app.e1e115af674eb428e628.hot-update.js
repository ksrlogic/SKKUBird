webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiY29uY2F0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwiaW1hZ2VVcmwiLCJzZW50ZW5jZSIsImFkZFBvc3RBY3Rpb24iLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsInJlbW92ZVBvc3RBY3Rpb24iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudEFjdGlvbiIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJwb3N0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsImZpbHRlciIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDQXlCLGFBQUssQ0FBQzdCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QixhQUFLLENBQUM1QixjQUFOLEdBQXVCLElBQXZCO0FBQ0E7O0FBQ0QsV0FBS3lDLDREQUFMO0FBQ0NiLGFBQUssQ0FBQzdCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QixhQUFLLENBQUMzQixlQUFOLEdBQXdCeUIsTUFBTSxDQUFDTSxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUEzQ0Y7QUE2Q0EsR0E5Q2EsQ0FBZDtBQStDQSxDQWhERDs7QUFrRGVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTFlMTE1YWY2NzRlYjQyOGU2MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7IHByb2R1Y2UgfSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG5cdFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcblx0UkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRuaWNrbmFtZTogXCLruYTrgrTrpqzripR+XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjIyPsnbXsiqTtlITroIjsiqRcIixcclxuXHRcdFx0SW1hZ2VzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcIi9wcm9maWxlLlBOR1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRDb21tZW50czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcIm5lcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuyasOyZgCAhIVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwiaGVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi66mL7KeA64ukIVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0aW1hZ2VQYXRoczogW10sXHJcblx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyBBREQgUE9TVFxyXG5cdGFkZFBvc3REb25lOiBmYWxzZSxcclxuXHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCAvLyBBREQgQ09NTUVOVFxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblx0cmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyBSZW1vdmUgUE9TVFxyXG5cdHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuXHRyZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSBkYXRhID0+ICh7XHJcblx0aWQ6IGRhdGEuaWQsXHJcblx0Y29udGVudDogZGF0YS5jb250ZW50LFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6IFwiS1NSXCIsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSBkYXRhID0+ICh7XHJcblx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcblx0fSxcclxufSk7XHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuXHRBcnJheSgyMClcclxuXHRcdC5maWxsKClcclxuXHRcdC5tYXAoKCkgPT4gKHtcclxuXHRcdFx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRDb21tZW50czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSkpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0cmV0dXJuIHByb2R1Y2Uoc3RhdGUsIGRyYWZ0ID0+IHtcclxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcblx0XHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcih2ID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==