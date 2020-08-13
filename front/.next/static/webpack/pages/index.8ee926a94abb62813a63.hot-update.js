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
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "icons_wrapper",
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 30
      }
    }),
    actions: [__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
      key: "heart",
      twoToneColor: "#eb2f96",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 8
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 8
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 12
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 12
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 8
      }
    })))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 14
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  })), CommentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
          lineNumber: 87,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 18
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIkNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVuZEZvcm1PcGVuZWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwicmVtb3ZlUG9zdEFjdGlvbiIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QixNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBOztBQUFBLDZCQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBZixtREFBSSxlQUFlSixFQUFuQjtBQUFBLEdBQU4sQ0FBdEI7O0FBRDhCLHFCQUVBQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNILElBQVY7QUFBQSxHQUFOLENBRlg7QUFBQSxNQUV0Qk0saUJBRnNCLGdCQUV0QkEsaUJBRnNCOztB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O0FBQUEsS0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBMUNGLENBREQ7QUErREEsQ0FsRkQ7O0dBQU14QixRO1VBQ01HLHVELEVBQ21CQSx1RCxFQUdiVyx1RDs7O0tBTFpkLFE7QUFvRk5BLFFBQVEsQ0FBQzRCLFNBQVQsR0FBcUI7QUFDcEIzQixNQUFJLEVBQUU0QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3JCNUIsTUFBRSxFQUFFMkIsaURBQVMsQ0FBQ0UsTUFETztBQUVyQlQsUUFBSSxFQUFFTyxpREFBUyxDQUFDRyxNQUZLO0FBR3JCUixXQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEU7QUFJckJDLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKQTtBQUtyQlAsWUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxXO0FBTXJCWCxVQUFNLEVBQUVRLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCO0FBTmEsR0FBaEIsRUFPSEk7QUFSaUIsQ0FBckI7QUFXZXBDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlZTkyNmE5NGFiYjYyODEzYTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG5cdFJldHdlZXRPdXRsaW5lZCxcclxuXHRIZWFydE91dGxpbmVkLFxyXG5cdE1lc3NhZ2VPdXRsaW5lZCxcclxuXHRFbGxpcHNpc091dGxpbmVkLFxyXG5cdEhlYXJ0VHdvVG9uZSxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuL1Bvc3RDYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgeyByZW1vdmVQb3N0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcblx0Y29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcblx0Y29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcblx0Y29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW0NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW5kRm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHRjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRMaWtlZChwcmV2ID0+ICFwcmV2KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldENvbW1lbmRGb3JtT3BlbmVkKHByZXYgPT4gIXByZXYpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2gocmVtb3ZlUG9zdEFjdGlvbihwb3N0LmlkKSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PENhcmRcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJpY29uc193cmFwcGVyXCJcclxuXHRcdFx0XHRjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcblx0XHRcdFx0YWN0aW9ucz17W1xyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz5cclxuXHRcdFx0XHRcdFx0e2xpa2VkID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxIZWFydFR3b1RvbmUga2V5PVwiaGVhcnRcIiB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+XHJcblx0XHRcdFx0XHRcdDxQb3BvdmVyXHJcblx0XHRcdFx0XHRcdFx0a2V5PVwibW9yZVwiXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudD17XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTsgq3soJxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG5cdFx0XHRcdFx0XHQ8L1BvcG92ZXI+XHJcblx0XHRcdFx0XHQ8Lz4sXHJcblx0XHRcdFx0XX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxDYXJkLk1ldGFcclxuXHRcdFx0XHRcdGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuXHRcdFx0XHRcdHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdHtDb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG5cdFx0XHRcdFx0PExpc3RcclxuXHRcdFx0XHRcdFx0aGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuXHRcdFx0XHRcdFx0aXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG5cdFx0XHRcdFx0XHRkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG5cdFx0XHRcdFx0XHRyZW5kZXJJdGVtPXtpdGVtID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuXHRwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0aWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuXHRcdENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0fSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9