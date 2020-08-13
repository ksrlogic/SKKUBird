webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PostForm.jsx":
/*!*********************************!*\
  !*** ./Components/PostForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Hooks/useInput */ "./Hooks/useInput.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\Components\\PostForm.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var _useInput = Object(_Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  var onsubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_5__["addPostAction"])(text));
  }, [text]);
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  return __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      marginTop: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onsubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    style: {
      "float": "right"
    },
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, imagePaths.map(function (y) {
    return __jsx("div", {
      key: y,
      style: {
        display: "flex",
        justifyContent: "center"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
      }
    }, __jsx("img", {
      src: y,
      style: {
        width: "200px"
      },
      alt: y,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 8
      }
    }, "\uC81C\uAC70")));
  })));
};

_s(PostForm, "vtZ+ZBNRMt0EBG873z+8tjmDBVc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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

/***/ }),

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
        var post = state.mainPosts[postIndex];
        post.Comments = [dummyComment(action.data.context)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: false,
          addCommentDone: true,
          mainPosts: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Rm9ybS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VJbnB1dCIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0Iiwib25zdWJtaXQiLCJ1c2VDYWxsYmFjayIsImFkZFBvc3RBY3Rpb24iLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwibWFyZ2luVG9wIiwibWFwIiwieSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJhY3Rpb24iLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJjb250ZXh0IiwiQUREX0NPTU1FTlRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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RWMsTUFBTSxDQUFDRztBQUh0Qjs7QUFLRDtBQUNDLGFBQU9sRCxLQUFQO0FBN0NGO0FBK0NBLENBaEREOztBQWtEZThDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQwMTkxZmRkMGYwZDU3NWVhMzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJhbnRkL2xpYi9mb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRQb3N0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9Ib29rcy91c2VJbnB1dFwiO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG5cdGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoYWRkUG9zdERvbmUpIHtcclxuXHRcdFx0c2V0VGV4dChcIlwiKTtcclxuXHRcdH1cclxuXHR9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcblx0Y29uc3Qgb25zdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChhZGRQb3N0QWN0aW9uKHRleHQpKTtcclxuXHR9LCBbdGV4dF0pO1xyXG5cdGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuXHR9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweCAwIDIwcHhcIiB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvbnN1Ym1pdH0+XHJcblx0XHRcdDxJbnB1dC5UZXh0QXJlYVxyXG5cdFx0XHRcdHZhbHVlPXt0ZXh0fVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XHJcblx0XHRcdFx0bWF4TGVuZ3RoPXsxNDB9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSAvPlxyXG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdOynueynuVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7aW1hZ2VQYXRocy5tYXAoeSA9PiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGtleT17eX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17eX0gc3R5bGU9e3sgd2lkdGg6IGAyMDBweGAgfX0gYWx0PXt5fSAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Gb3JtPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIiwiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmlja25hbWU6IFwi67mE64K066as64qUflwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggIyMj7J217Iqk7ZSE66CI7IqkXCIsXHJcblx0XHRcdEltYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCIvcHJvZmlsZS5QTkdcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcIm5lcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuyasOyZgCAhIVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogXCJoZXJvXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLrqYvsp4Dri6QhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIEFERCBQT1NUXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIEFERCBDT01NRU5UXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IGRhdGEgPT4gKHtcclxuXHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG5cdFx0XHRwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZXh0KSwgLi4ucG9zdC5Db21tZW50c107XHJcblx0XHRcdGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG5cdFx0XHRtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG5cdFx0XHRcdG1haW5Qb3N0czogW10sXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=