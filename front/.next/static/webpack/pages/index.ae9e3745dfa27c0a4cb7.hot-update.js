webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, loginFailureAction, loginSuccessAction, logoutRequestAction, logoutFailureAction, logoutSuccessAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // prettier-ignore

var initialState = {
  loginLoading: false,
  // 로그인 로딩
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  //  로그아웃 로딩
  logoutDone: false,
  logoutError: null,
  signUpLoading: false,
  //  회원가입 로딩
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "KSR",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }],
    Followers: [{
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }, {
      nickname: "둘리"
    }]
  });
}; //  LOGIN


var loginRequestAction = function loginRequestAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"],
    data: data
  };
};
var loginFailureAction = function loginFailureAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
    data: data
  };
};
var loginSuccessAction = function loginSuccessAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
    data: data
  };
}; //	LOGOUT

var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]
  };
};
var logoutFailureAction = function logoutFailureAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]
  };
};
var logoutSuccessAction = function logoutSuccessAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
  };
}; //

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginDone: true,
        me: dummyUser(action.data)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginError: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: true,
        logoutError: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutDone: true,
        me: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fRkFJTFVSRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwiTE9HX09VVF9TVUNDRVNTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBT3FCOztBQUVkLElBQU1BLFlBQVksR0FBRztBQUMzQkMsY0FBWSxFQUFFLEtBRGE7QUFDTjtBQUNyQkMsV0FBUyxFQUFFLEtBRmdC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NzQ1ZGZhMjdjMGE0Y2I3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSxcclxuXHRTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLFxyXG5cdENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0Rk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSxcclxuXHRVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsb2dpbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg66Gc65SpXHJcblx0bG9naW5Eb25lOiBmYWxzZSxcclxuXHRsb2dpbkVycm9yOiBudWxsLFxyXG5cdGxvZ291dExvYWRpbmc6IGZhbHNlLCAvLyAg66Gc6re47JWE7JuDIOuhnOuUqVxyXG5cdGxvZ291dERvbmU6IGZhbHNlLFxyXG5cdGxvZ291dEVycm9yOiBudWxsLFxyXG5cdHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyAg7ZqM7JuQ6rCA7J6FIOuhnOuUqVxyXG5cdHNpZ25VcERvbmU6IGZhbHNlLFxyXG5cdHNpZ25VcEVycm9yOiBudWxsLFxyXG5cdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcblx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuXHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LFxyXG5cdGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Li4uZGF0YSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdFx0aWQ6IDEsXHJcblx0XHRQb3N0czogW3sgaWQ6IDEgfV0sXHJcblx0XHRGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfV0sXHJcblx0XHRGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9XSxcclxuXHR9O1xyXG59O1xyXG4vLyAgTE9HSU5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG4vL1x0TE9HT1VUXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdH07XHJcbn07XHJcbi8vXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9naW5Mb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvZ2luRG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dpbkVycm9yOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nb3V0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRsb2dvdXRFcnJvcjogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvZ291dERvbmU6IHRydWUsXHJcblx0XHRcdFx0bWU6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dvdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRzaWduVXBEb25lOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0c2lnblVwRG9uZTogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZURvbmU6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=