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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJkdW1teUNvbW1lbnQiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJBRERfQ09NTUVOVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMRCxRQUFFLEVBQUUsQ0FEQztBQUVMRSxjQUFRLEVBQUU7QUFGTCxLQUZQO0FBTUNDLFdBQU8sRUFBRSx5QkFOVjtBQU9DQyxVQUFNLEVBQUUsQ0FDUDtBQUNDQyxTQUFHLEVBQUU7QUFETixLQURPLEVBSVA7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FKTyxFQU9QO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBUE8sQ0FQVDtBQWtCQ0MsWUFBUSxFQUFFLENBQ1Q7QUFDQ04sUUFBRSxFQUFFTyw4Q0FBTyxDQUFDQyxRQUFSLEVBREw7QUFFQ1AsVUFBSSxFQUFFO0FBQ0xDLGdCQUFRLEVBQUU7QUFETCxPQUZQO0FBS0NDLGFBQU8sRUFBRTtBQUxWLEtBRFMsRUFRVDtBQUNDSCxRQUFFLEVBQUVPLDhDQUFPLENBQUNDLFFBQVIsRUFETDtBQUVDUCxVQUFJLEVBQUU7QUFDTEMsZ0JBQVEsRUFBRTtBQURMLE9BRlA7QUFLQ0MsYUFBTyxFQUFFO0FBTFYsS0FSUztBQWxCWCxHQURVLENBRGdCO0FBc0MzQk0sWUFBVSxFQUFFLEVBdENlO0FBdUMzQkMsZ0JBQWMsRUFBRSxLQXZDVztBQXVDSjtBQUN2QkMsYUFBVyxFQUFFLEtBeENjO0FBeUMzQkMsY0FBWSxFQUFFLElBekNhO0FBMEMzQkMsbUJBQWlCLEVBQUUsS0ExQ1E7QUEwQ0Q7QUFDMUJDLGdCQUFjLEVBQUUsS0EzQ1c7QUE0QzNCQyxpQkFBZSxFQUFFO0FBNUNVLENBQXJCOztBQStDUCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxJQUFJO0FBQUEsU0FBSztBQUMxQmpCLE1BQUUsRUFBRWlCLElBQUksQ0FBQ2pCLEVBRGlCO0FBRTFCRyxXQUFPLEVBQUVjLElBQUksQ0FBQ2QsT0FGWTtBQUcxQkYsUUFBSSxFQUFFO0FBQ0xELFFBQUUsRUFBRSxDQURDO0FBRUxFLGNBQVEsRUFBRTtBQUZMLEtBSG9CO0FBTzFCRSxVQUFNLEVBQUUsRUFQa0I7QUFRMUJFLFlBQVEsRUFBRTtBQVJnQixHQUFMO0FBQUEsQ0FBdEI7O0FBV0EsSUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUQsSUFBSTtBQUFBLFNBQUs7QUFDN0JqQixNQUFFLEVBQUVPLDhDQUFPLENBQUNDLFFBQVIsRUFEeUI7QUFFN0JMLFdBQU8sRUFBRWMsSUFGb0I7QUFHN0JoQixRQUFJLEVBQUU7QUFDTEQsUUFBRSxFQUFFLENBREM7QUFFTEUsY0FBUSxFQUFFO0FBRkw7QUFIdUIsR0FBTDtBQUFBLENBQXpCOztBQVNPLElBQU1pQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLElBQUksRUFBSTtBQUNwQyxTQUFPO0FBQ05HLFFBQUksRUFBRUMseURBREE7QUFFTkosUUFBSSxFQUFKQTtBQUZNLEdBQVA7QUFJQSxDQUxNO0FBTUEsSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ3JDLFNBQU87QUFDTkYsUUFBSSxFQUFFRyw0REFBbUJBO0FBRG5CLEdBQVA7QUFHQSxDQUpNOztBQU1QLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QjNCLFlBQXlCO0FBQUEsTUFBWDRCLE1BQVc7O0FBQ2pELFVBQVFBLE1BQU0sQ0FBQ04sSUFBZjtBQUNDLFNBQUtDLHlEQUFMO0FBQ0MsNkNBQ0lJLEtBREo7QUFFQ2Ysc0JBQWMsRUFBRTtBQUZqQjs7QUFJRCxTQUFLaUIseURBQUw7QUFDQyw2Q0FDSUYsS0FESjtBQUVDMUIsaUJBQVMsR0FBR2lCLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDVCxJQUFSLENBQVosc0dBQThCUSxLQUFLLENBQUMxQixTQUFwQyxFQUZWO0FBR0NZLG1CQUFXLEVBQUUsSUFIZDtBQUlDRCxzQkFBYyxFQUFFO0FBSmpCOztBQU1ELFNBQUtrQix5REFBTDtBQUNDLDZDQUNJSCxLQURKO0FBRUNkLG1CQUFXLEVBQUUsS0FGZDtBQUdDRCxzQkFBYyxFQUFFLEtBSGpCO0FBSUNFLG9CQUFZLEVBQUVjLE1BQU0sQ0FBQ0c7QUFKdEI7O0FBTUQsU0FBS04sNERBQUw7QUFDQyw2Q0FDSUUsS0FESjtBQUVDWix5QkFBaUIsRUFBRTtBQUZwQjs7QUFJRCxTQUFLaUIsNERBQUw7QUFBMEI7QUFDekIsWUFBTUMsU0FBUyxHQUFHTixLQUFLLENBQUMxQixTQUFOLENBQWdCaUMsU0FBaEIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNqQyxFQUFGLEtBQVMwQixNQUFNLENBQUNULElBQVAsQ0FBWWlCLE1BQXpCO0FBQUEsU0FBM0IsQ0FBbEI7O0FBQ0EsWUFBTUMsSUFBSSxxQkFBUVYsS0FBSyxDQUFDMUIsU0FBTixDQUFnQmdDLFNBQWhCLENBQVIsQ0FBVjs7QUFDQUksWUFBSSxDQUFDN0IsUUFBTCxJQUFpQlksWUFBWSxDQUFDUSxNQUFNLENBQUNULElBQVAsQ0FBWWQsT0FBYixDQUE3QixzR0FBdURnQyxJQUFJLENBQUM3QixRQUE1RDs7QUFDQSxZQUFNUCxTQUFTLEdBQUcsNkZBQUkwQixLQUFLLENBQUMxQixTQUFiLENBQWY7O0FBQ0FBLGlCQUFTLENBQUNnQyxTQUFELENBQVQsR0FBdUJJLElBQXZCO0FBQ0EsK0NBQ0lWLEtBREo7QUFFQ1osMkJBQWlCLEVBQUUsS0FGcEI7QUFHQ0Msd0JBQWMsRUFBRSxJQUhqQjtBQUlDZixtQkFBUyxFQUFUQTtBQUpEO0FBTUE7O0FBQ0QsU0FBS3FDLDREQUFMO0FBQ0MsNkNBQ0lYLEtBREo7QUFFQ1oseUJBQWlCLEVBQUUsS0FGcEI7QUFHQ0Qsb0JBQVksRUFBRWMsTUFBTSxDQUFDRztBQUh0Qjs7QUFLRDtBQUNDLGFBQU9KLEtBQVA7QUE3Q0Y7QUErQ0EsQ0FoREQ7O0FBa0RlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzkwNjg5M2M3NTk2YjY5Yzk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmlja25hbWU6IFwi67mE64K066as64qUflwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggIyMj7J217Iqk7ZSE66CI7IqkXCIsXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCIvcHJvZmlsZS5QTkdcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJuZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLsmrDsmYAgISFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcImhlcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuupi+yngOuLpCFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gQUREIFBPU1RcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8gQUREIENPTU1FTlRcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBkYXRhLmlkLFxyXG5cdGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cdFx0XHRcdGFkZFBvc3REb25lOiB0cnVlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG5cdFx0XHRjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG5cdFx0XHRwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcblx0XHRcdGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG5cdFx0XHRtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG5cdFx0XHRcdG1haW5Qb3N0cyxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==