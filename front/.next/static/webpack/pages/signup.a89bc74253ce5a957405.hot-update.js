webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/AppLayout */ "./Components/AppLayout.jsx");
/* harmony import */ var _Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Hooks/useInput */ "./Hooks/useInput.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\pages\\signup.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmargin-top: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tcolor: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = ErrorMessage;
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"])(_templateObject2());
_c2 = StyledButton;

var Signup = function Signup() {
  _s();

  var _useInput = Object(_Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useInput5 = Object(_Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      nickname = _useInput6[0],
      onChangeNickname = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      termError = _useState3[0],
      setTermError = _useState3[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpLoading = _useSelector.signUpLoading,
      signUpDone = _useSelector.signUpDone,
      signUpError = _useSelector.signUpError;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
      dispatch({
        type: "SIGN_UP_RESET"
      });
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (signUpError) {
      alert(signUpError);
      dispatch({
        type: "SIGN_UP_RESET"
      });
    }
  }, [signUpError]);
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      term = _useState4[0],
      setTerm = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onsubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordCheck(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch({
      type: _actions__WEBPACK_IMPORTED_MODULE_10__["SIGN_UP_REQUEST"],
      data: {
        email: email,
        password: password,
        nickname: nickname
      }
    });
  }, [email, password, passwordCheck, term]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Components_AppLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }, "\uD68C\uC6D0\uAC00\uC785 | SkkuBird")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onsubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx("label", {
    htmlFor: "user-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-email",
    type: "email",
    value: email,
    required: true,
    onChange: onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-nick",
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 6
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "\uB098\uB294 \uC131\uADE0\uAD00\uB300 \uD559\uC0DD\uC785\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, " \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx(StyledButton, {
    loading: signUpLoading,
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 6
    }
  }, "\uAC00\uC785\uD558\uAE30"))));
};

_s(Signup, "CJrxgjr16PJFdEDjbp8AwP+dNRY=", false, function () {
  return [_Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"], _Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"], _Hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c3 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2, _c3;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "StyledButton");
$RefreshReg$(_c3, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzeCJdLCJuYW1lcyI6WyJFcnJvck1lc3NhZ2UiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRCdXR0b24iLCJCdXR0b24iLCJTaWdudXAiLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwidHlwZSIsImFsZXJ0Iiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvbnN1Ym1pdCIsIlNJR05fVVBfUkVRVUVTVCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbEI7S0FBTUYsWTtBQUdOLElBQU1HLFlBQVksR0FBR0YsaUVBQU0sQ0FBQ0csMkNBQUQsQ0FBVCxvQkFBbEI7TUFBTUQsWTs7QUFJTixJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLCtEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLGFBRE07O0FBQUEsbUJBRWlCRiwrREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQTtBQUFBLE1BRWJHLFFBRmE7QUFBQSxNQUVIQyxnQkFGRzs7QUFBQSxtQkFHaUJKLCtEQUFRLENBQUMsRUFBRCxDQUh6QjtBQUFBO0FBQUEsTUFHYkssUUFIYTtBQUFBLE1BR0hDLGdCQUhHOztBQUFBLGtCQUlzQkMsc0RBQVEsQ0FBQyxFQUFELENBSjlCO0FBQUEsTUFJYkMsYUFKYTtBQUFBLE1BSUVDLGdCQUpGOztBQUFBLG1CQUtzQkYsc0RBQVEsQ0FBQyxLQUFELENBTDlCO0FBQUEsTUFLYkcsYUFMYTtBQUFBLE1BS0VDLGdCQUxGOztBQUFBLG1CQU1jSixzREFBUSxDQUFDLEtBQUQsQ0FOdEI7QUFBQSxNQU1iSyxTQU5hO0FBQUEsTUFNRkMsWUFORTs7QUFRcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFSb0IscUJBVStCQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBVjFDO0FBQUEsTUFVWkMsYUFWWSxnQkFVWkEsYUFWWTtBQUFBLE1BVUdDLFVBVkgsZ0JBVUdBLFVBVkg7QUFBQSxNQVVlQyxXQVZmLGdCQVVlQSxXQVZmOztBQVdwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSUYsVUFBSixFQUFnQjtBQUNmRyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNBVixjQUFRLENBQUM7QUFDUlcsWUFBSSxFQUFFO0FBREUsT0FBRCxDQUFSO0FBR0E7QUFDRCxHQVBRLEVBT04sQ0FBQ0wsVUFBRCxDQVBNLENBQVQ7QUFRQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSUQsV0FBSixFQUFpQjtBQUNoQkssV0FBSyxDQUFDTCxXQUFELENBQUw7QUFDQVAsY0FBUSxDQUFDO0FBQ1JXLFlBQUksRUFBRTtBQURFLE9BQUQsQ0FBUjtBQUdBO0FBQ0QsR0FQUSxFQU9OLENBQUNKLFdBQUQsQ0FQTSxDQUFUO0FBU0EsTUFBTU0scUJBQXFCLEdBQUdDLHlEQUFXLENBQ3hDLFVBQUFDLENBQUMsRUFBSTtBQUNKcEIsb0JBQWdCLENBQUNvQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUNBcEIsb0JBQWdCLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQjVCLFFBQXBCLENBQWhCO0FBQ0EsR0FKdUMsRUFLeEMsQ0FBQ0EsUUFBRCxDQUx3QyxDQUF6Qzs7QUE1Qm9CLG1CQW9DSUksc0RBQVEsQ0FBQyxFQUFELENBcENaO0FBQUEsTUFvQ2J5QixJQXBDYTtBQUFBLE1Bb0NQQyxPQXBDTzs7QUFzQ3BCLE1BQU1DLFlBQVksR0FBR04seURBQVcsQ0FBQyxVQUFBQyxDQUFDLEVBQUk7QUFDckNJLFdBQU8sQ0FBQ0osQ0FBQyxDQUFDQyxNQUFGLENBQVNLLE9BQVYsQ0FBUDtBQUNBdEIsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQSxHQUgrQixFQUc3QixFQUg2QixDQUFoQztBQUtBLE1BQU11QixRQUFRLEdBQUdSLHlEQUFXLENBQUMsWUFBTTtBQUNsQyxRQUFJekIsUUFBUSxLQUFLSyxhQUFqQixFQUFnQztBQUMvQixhQUFPQyxnQkFBZ0IsQ0FBQyxJQUFELENBQXZCO0FBQ0E7O0FBQ0QsUUFBSSxDQUFDdUIsSUFBTCxFQUFXO0FBQ1YsYUFBT25CLFlBQVksQ0FBQyxJQUFELENBQW5CO0FBQ0E7O0FBQ0RDLFlBQVEsQ0FBQztBQUNSVyxVQUFJLEVBQUVZLHlEQURFO0FBRVJDLFVBQUksRUFBRTtBQUFFckMsYUFBSyxFQUFMQSxLQUFGO0FBQVNFLGdCQUFRLEVBQVJBLFFBQVQ7QUFBbUJFLGdCQUFRLEVBQVJBO0FBQW5CO0FBRkUsS0FBRCxDQUFSO0FBSUEsR0FYMkIsRUFXekIsQ0FBQ0osS0FBRCxFQUFRRSxRQUFSLEVBQWtCSyxhQUFsQixFQUFpQ3dCLElBQWpDLENBWHlCLENBQTVCO0FBYUEsU0FDQyxtRUFDQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQURELENBREQsRUFJQyxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFSSxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sV0FBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsMENBQUQ7QUFBTyxRQUFJLEVBQUMsWUFBWjtBQUF5QixRQUFJLEVBQUMsT0FBOUI7QUFBc0MsU0FBSyxFQUFFbkMsS0FBN0M7QUFBb0QsWUFBUSxNQUE1RDtBQUE2RCxZQUFRLEVBQUVDLGFBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQURELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsMENBQUQ7QUFBTyxRQUFJLEVBQUMsV0FBWjtBQUF3QixTQUFLLEVBQUVHLFFBQS9CO0FBQXlDLFlBQVEsTUFBakQ7QUFBa0QsWUFBUSxFQUFFQyxnQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBTkQsRUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxXQUFPLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQywwQ0FBRDtBQUNDLFFBQUksRUFBQyxlQUROO0FBRUMsUUFBSSxFQUFDLFVBRk47QUFHQyxTQUFLLEVBQUVILFFBSFI7QUFJQyxZQUFRLE1BSlQ7QUFLQyxZQUFRLEVBQUVDLGdCQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQVhELEVBc0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLFdBQU8sRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQywwQ0FBRDtBQUNDLFFBQUksRUFBQyxxQkFETjtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsU0FBSyxFQUFFSSxhQUhSO0FBSUMsWUFBUSxNQUpUO0FBS0MsWUFBUSxFQUFFbUIscUJBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBVUVqQixhQUFhLElBQUksTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUZBVm5CLENBdEJELEVBa0NDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZDQUFEO0FBQVUsUUFBSSxFQUFDLFdBQWY7QUFBMkIsV0FBTyxFQUFFc0IsSUFBcEM7QUFBMEMsWUFBUSxFQUFFRSxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQURELEVBSUV0QixTQUFTLElBQUksTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEVBSmYsQ0FsQ0QsRUF5Q0MsTUFBQyxZQUFEO0FBQWMsV0FBTyxFQUFFTyxhQUF2QjtBQUFzQyxRQUFJLEVBQUMsU0FBM0M7QUFBcUQsWUFBUSxFQUFDLFFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBekNELENBSkQsQ0FERCxDQUREO0FBc0RBLENBOUdEOztHQUFNcEIsTTtVQUMwQkMsdUQsRUFDTUEsdUQsRUFDQUEsdUQsRUFLcEJlLHVELEVBRWtDQyx1RDs7O01BVjlDakIsTTtBQWdIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmE4OWJjNzQyNTNjZTVhOTU3NDA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIENoZWNrYm94LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vQ29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9Ib29rcy91c2VJbnB1dFwiO1xyXG5cclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcblx0Y29sb3I6IHJlZDtcclxuYDtcclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuXHRjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcblx0Y29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG5cdGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHRjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHRjb25zdCB7IHNpZ25VcExvYWRpbmcsIHNpZ25VcERvbmUsIHNpZ25VcEVycm9yIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHNpZ25VcERvbmUpIHtcclxuXHRcdFx0Um91dGVyLnB1c2goXCIvXCIpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogXCJTSUdOX1VQX1JFU0VUXCIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sIFtzaWduVXBEb25lXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChzaWduVXBFcnJvcikge1xyXG5cdFx0XHRhbGVydChzaWduVXBFcnJvcik7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBcIlNJR05fVVBfUkVTRVRcIixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSwgW3NpZ25VcEVycm9yXSk7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0ZSA9PiB7XHJcblx0XHRcdHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcblx0XHR9LFxyXG5cdFx0W3Bhc3N3b3JkXSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soZSA9PiB7XHJcblx0XHRzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG5cdFx0c2V0VGVybUVycm9yKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IG9uc3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0aWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENoZWNrKSB7XHJcblx0XHRcdHJldHVybiBzZXRQYXNzd29yZENoZWNrKHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0ZXJtKSB7XHJcblx0XHRcdHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lIH0sXHJcblx0XHR9KTtcclxuXHR9LCBbZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZENoZWNrLCB0ZXJtXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QXBwTGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PHRpdGxlPu2ajOybkOqwgOyehSB8IFNra3VCaXJkPC90aXRsZT5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PEZvcm0gb25GaW5pc2g9e29uc3VibWl0fT5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlci1lbWFpbFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXQgbmFtZT1cInVzZXItZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja1wiPuuLieuEpOyehDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXQgbmFtZT1cInVzZXItbmlja1wiIHZhbHVlPXtuaWNrbmFtZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkLWNoZWNrXCI+67mE67CA67KI7Zi4IO2ZleyduDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmRDaGVja31cclxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdHtwYXNzd29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8Q2hlY2tib3ggbmFtZT1cInVzZXItdGVybVwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PlxyXG5cdFx0XHRcdFx0XHRcdOuCmOuKlCDshLHqt6DqtIDrjIAg7ZWZ7IOd7J6F64uI64ukLlxyXG5cdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHR7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+IOyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxTdHlsZWRCdXR0b24gbG9hZGluZz17c2lnblVwTG9hZGluZ30gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHTqsIDsnoXtlZjquLBcclxuXHRcdFx0XHRcdDwvU3R5bGVkQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0PC9BcHBMYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9