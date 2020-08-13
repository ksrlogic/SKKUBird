webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PostCard/PostCard.js":
/*!*****************************************!*\
  !*** ./Components/PostCard/PostCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./Components/PostCard/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./Components/PostCard/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./Components/PostCard/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\Components\\PostCard\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // prettier-ignore







var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      CommentFormOpened = _useState2[0],
      setCommendFormOpened = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommendFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_8__["removePostAction"])(post.id));
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "icons_wrapper",
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 30
      }
    }),
    actions: [__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
      key: "heart",
      twoToneColor: "#eb2f96",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 12
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 12
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 8
      }
    })))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 14
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  })), CommentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 18
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  })));
};

_s(PostCard, "uXApcD8ZofLsReMj5gx0b33j+Xk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIkNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVuZEZvcm1PcGVuZWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwicmVtb3ZlUG9zdEFjdGlvbiIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJNEI7O0FBQzVCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QixNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBOztBQUFBLDZCQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBZixtREFBSSxlQUFlSixFQUFuQjtBQUFBLEdBQU4sQ0FBdEI7O0FBRDhCLHFCQUVBQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNILElBQVY7QUFBQSxHQUFOLENBRlg7QUFBQSxNQUV0Qk0saUJBRnNCLGdCQUV0QkEsaUJBRnNC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QURlO0FBQUEsS0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBMUNGLENBREQ7QUErREEsQ0FsRkQ7O0dBQU14QixRO1VBQ01HLHVELEVBQ21CQSx1RCxFQUdiVyx1RDs7O0tBTFpkLFE7QUFvRk5BLFFBQVEsQ0FBQzRCLFNBQVQsR0FBcUI7QUFDcEIzQixNQUFJLEVBQUU0QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3JCNUIsTUFBRSxFQUFFMkIsaURBQVMsQ0FBQ0UsTUFETztBQUVyQlQsUUFBSSxFQUFFTyxpREFBUyxDQUFDRyxNQUZLO0FBR3JCUixXQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEU7QUFJckJDLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKQTtBQUtyQlAsWUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxXO0FBTXJCWCxVQUFNLEVBQUVRLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCO0FBTmEsR0FBaEIsRUFPSEk7QUFSaUIsQ0FBckI7QUFXZXBDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhNjBkNTFmYzkxNDM5NWNhZGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG5cdFJldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLFxyXG4gICBFbGxpcHNpc091dGxpbmVkLCBIZWFydFR3b1RvbmUsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7IHJlbW92ZVBvc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuXHRjb25zdCBpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuXHRjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuXHRjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbQ29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbmRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldExpa2VkKHByZXYgPT4gIXByZXYpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0Q29tbWVuZEZvcm1PcGVuZWQocHJldiA9PiAhcHJldik7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChyZW1vdmVQb3N0QWN0aW9uKHBvc3QuaWQpKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImljb25zX3dyYXBwZXJcIlxyXG5cdFx0XHRcdGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuXHRcdFx0XHRhY3Rpb25zPXtbXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPlxyXG5cdFx0XHRcdFx0XHR7bGlrZWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0PEhlYXJ0VHdvVG9uZSBrZXk9XCJoZWFydFwiIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz5cclxuXHRcdFx0XHRcdFx0PFBvcG92ZXJcclxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtb3JlXCJcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50PXtcclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOyCreygnFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxFbGxpcHNpc091dGxpbmVkIC8+XHJcblx0XHRcdFx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdFx0XHRcdDwvPixcclxuXHRcdFx0XHRdfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PENhcmQuTWV0YVxyXG5cdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0dGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0e0NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcblx0XHRcdFx0XHQ8TGlzdFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG5cdFx0XHRcdFx0XHRpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcblx0XHRcdFx0XHRcdGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcblx0XHRcdFx0XHRcdHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG5cdHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRpZDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Y3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cdFx0Q29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHR9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=