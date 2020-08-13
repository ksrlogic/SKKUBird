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

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.me;
  }),
      id = _useSelector2.id,
      nickname = _useSelector2.nickname;

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
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 4
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 45,
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
        lineNumber: 46,
        columnNumber: 7
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 8
      }
    }, "\uC81C\uAC70")));
  })));
};

_s(PostForm, "G+rwVmTp6AaZagp+hdMwE8NgU8k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Rm9ybS5qc3giXSwibmFtZXMiOlsiUG9zdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VyIiwibWUiLCJpZCIsIm5pY2tuYW1lIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsInVzZUVmZmVjdCIsIm9uc3VibWl0IiwidXNlQ2FsbGJhY2siLCJhZGRQb3N0QWN0aW9uIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm1hcmdpblRvcCIsIm1hcCIsInkiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEc0IscUJBRWNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FGekI7QUFBQSxNQUVkQyxVQUZjLGdCQUVkQSxVQUZjO0FBQUEsTUFFRkMsV0FGRSxnQkFFRkEsV0FGRTs7QUFBQSxzQkFHR0osK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSSxJQUFOLENBQVdDLEVBQWY7QUFBQSxHQUFOLENBSGQ7QUFBQSxNQUdkQyxFQUhjLGlCQUdkQSxFQUhjO0FBQUEsTUFHVkMsUUFIVSxpQkFHVkEsUUFIVTs7QUFBQSxrQkFJZ0JDLCtEQUFRLENBQUMsRUFBRCxDQUp4QjtBQUFBO0FBQUEsTUFJZkMsSUFKZTtBQUFBLE1BSVRDLFlBSlM7QUFBQSxNQUlLQyxPQUpMOztBQU10QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSVQsV0FBSixFQUFpQjtBQUNoQlEsYUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBO0FBQ0QsR0FKUSxFQUlOLENBQUNSLFdBQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTVUsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbENqQixZQUFRLENBQUNrQixvRUFBYSxDQUFDTixJQUFELENBQWQsQ0FBUjtBQUNBLEdBRjJCLEVBRXpCLENBQUNBLElBQUQsQ0FGeUIsQ0FBNUI7QUFHQSxNQUFNTyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUM1Q0UsY0FBVSxDQUFDRyxPQUFYLENBQW1CQyxLQUFuQjtBQUNBLEdBRnFDLEVBRW5DLENBQUNKLFVBQVUsQ0FBQ0csT0FBWixDQUZtQyxDQUF0QztBQUlBLFNBQ0MsTUFBQyx5REFBRDtBQUFNLFNBQUssRUFBRTtBQUFFRSxlQUFTLEVBQUU7QUFBYixLQUFiO0FBQTJDLFdBQU8sRUFBQyxxQkFBbkQ7QUFBeUUsWUFBUSxFQUFFUixRQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDQyxTQUFLLEVBQUVKLElBRFI7QUFFQyxZQUFRLEVBQUVDLFlBRlg7QUFHQyxhQUFTLEVBQUUsR0FIWjtBQUlDLGVBQVcsRUFBQyx3RUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFRLE1BQTNCO0FBQTRCLFVBQU0sTUFBbEM7QUFBbUMsT0FBRyxFQUFFTSxVQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFRSxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FGRCxFQUdDLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixTQUFLLEVBQUU7QUFBRSxlQUFPO0FBQVQsS0FBOUI7QUFBa0QsWUFBUSxFQUFDLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQsQ0FQRCxFQWNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRWhCLFVBQVUsQ0FBQ29CLEdBQVgsQ0FBZSxVQUFBQyxDQUFDO0FBQUEsV0FDaEI7QUFBSyxTQUFHLEVBQUVBLENBQVY7QUFBYSxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHNCQUFjLEVBQUU7QUFBbkMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUssU0FBRyxFQUFFRixDQUFWO0FBQWEsV0FBSyxFQUFFO0FBQUVHLGFBQUs7QUFBUCxPQUFwQjtBQUF3QyxTQUFHLEVBQUVILENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsQ0FGRCxDQURnQjtBQUFBLEdBQWhCLENBREYsQ0FkRCxDQUREO0FBMkJBLENBL0NEOztHQUFNM0IsUTtVQUNZRSx1RCxFQUNtQkMsdUQsRUFDWEEsdUQsRUFDYVMsdUQ7OztLQUpqQ1osUTtBQWlEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNThiNTU1MDZjYmQ5YWM1NTY3NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcImFudGQvbGliL2Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFBvc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL0hvb2tzL3VzZUlucHV0XCI7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcblx0Y29uc3QgeyBpZCwgbmlja25hbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG5cdGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoYWRkUG9zdERvbmUpIHtcclxuXHRcdFx0c2V0VGV4dChcIlwiKTtcclxuXHRcdH1cclxuXHR9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcblx0Y29uc3Qgb25zdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChhZGRQb3N0QWN0aW9uKHRleHQpKTtcclxuXHR9LCBbdGV4dF0pO1xyXG5cdGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuXHR9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweCAwIDIwcHhcIiB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvbnN1Ym1pdH0+XHJcblx0XHRcdDxJbnB1dC5UZXh0QXJlYVxyXG5cdFx0XHRcdHZhbHVlPXt0ZXh0fVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XHJcblx0XHRcdFx0bWF4TGVuZ3RoPXsxNDB9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSAvPlxyXG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdOynueynuVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7aW1hZ2VQYXRocy5tYXAoeSA9PiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGtleT17eX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17eX0gc3R5bGU9e3sgd2lkdGg6IGAyMDBweGAgfX0gYWx0PXt5fSAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Gb3JtPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==