webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


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
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"],
    data: data
  };
};
var loginFailureAction = function loginFailureAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
    data: data
  };
};
var loginSuccessAction = function loginSuccessAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
    data: data
  };
}; //	LOGOUT

var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"]
  };
};
var logoutFailureAction = function logoutFailureAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"]
  };
};
var logoutSuccessAction = function logoutSuccessAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
  };
}; //

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"]:
        draft.loginLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = dummyUser(action.data);
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]:
        draft.loginLoading = false;
        draft.loginError = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"]:
        draft.loginLoading = true;
        draft.logoutError = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.me = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"]:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"]:
        draft.signUpLoading = true;
        draft.signUpDone = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]:
        draft.signUpDone = true;
        draft.signUpLoading = false;
        draft.signUpError = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = null;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"]:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"]:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case "SIGN_UP_RESET":
        draft.signUpDone = false;
        draft.signUpError = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fRkFJTFVSRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwiTE9HX09VVF9TVUNDRVNTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInVuc2hpZnQiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLLENBQUM3QixrQkFBTixHQUEyQixJQUEzQjtBQUNBOztBQUNELFdBQUttQyxnRUFBTDtBQUNDTixhQUFLLENBQUM5QixxQkFBTixHQUE4QixLQUE5QjtBQUNBOEIsYUFBSyxDQUFDN0Isa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTs7QUFDRCxXQUFLb0MsZ0VBQUw7QUFDQ1AsYUFBSyxDQUFDOUIscUJBQU4sR0FBOEIsS0FBOUI7QUFDQThCLGFBQUssQ0FBQzVCLG1CQUFOLEdBQTRCMEIsTUFBTSxDQUFDRyxLQUFuQztBQUNBOztBQUNELFdBQUtPLHVEQUFMO0FBQ0NSLGFBQUssQ0FBQzNCLEVBQU4sQ0FBU08sS0FBVCxDQUFlNkIsT0FBZixDQUF1QjtBQUFFOUIsWUFBRSxFQUFFbUIsTUFBTSxDQUFDckI7QUFBYixTQUF2QjtBQUNBOztBQUNELFdBQUtpQywwREFBTDtBQUNDVixhQUFLLENBQUMzQixFQUFOLENBQVNPLEtBQVQsR0FBaUJvQixLQUFLLENBQUMzQixFQUFOLENBQVNPLEtBQVQsQ0FBZStCLE1BQWYsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNqQyxFQUFGLEtBQVNtQixNQUFNLENBQUNyQixJQUFwQjtBQUFBLFNBQXZCLENBQWpCO0FBQ0E7O0FBQ0QsV0FBSyxlQUFMO0FBQ0N1QixhQUFLLENBQUNoQyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FnQyxhQUFLLENBQUMvQixXQUFOLEdBQW9CLElBQXBCO0FBQ0E7O0FBQ0Q7QUFDQztBQTlERjtBQWdFQSxHQWpFYSxDQUFkO0FBa0VBLENBbkVEOztBQW9FZTJCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTFiZDcwODFjMjAyMmU2MjIxOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSxcclxuXHRDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsXHJcblx0VU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsb2dpbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg66Gc65SpXHJcblx0bG9naW5Eb25lOiBmYWxzZSxcclxuXHRsb2dpbkVycm9yOiBudWxsLFxyXG5cdGxvZ291dExvYWRpbmc6IGZhbHNlLCAvLyAg66Gc6re47JWE7JuDIOuhnOuUqVxyXG5cdGxvZ291dERvbmU6IGZhbHNlLFxyXG5cdGxvZ291dEVycm9yOiBudWxsLFxyXG5cdHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyAg7ZqM7JuQ6rCA7J6FIOuhnOuUqVxyXG5cdHNpZ25VcERvbmU6IGZhbHNlLFxyXG5cdHNpZ25VcEVycm9yOiBudWxsLFxyXG5cdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcblx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuXHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LFxyXG5cdGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Li4uZGF0YSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdFx0aWQ6IDEsXHJcblx0XHRQb3N0czogW3sgaWQ6IDEgfV0sXHJcblx0XHRGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfV0sXHJcblx0XHRGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9XSxcclxuXHR9O1xyXG59O1xyXG4vLyAgTE9HSU5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG4vL1x0TE9HT1VUXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdH07XHJcbn07XHJcbi8vXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQubG9naW5Mb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0XHRkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5sb2dpbkRvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5sb2dpbkVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQubG9naW5Mb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5sb2dvdXRFcnJvciA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG5cdFx0XHRcdGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5sb2dvdXREb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRkcmFmdC5tZSA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5sb2dvdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcblx0XHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuXHRcdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEFERF9QT1NUX1RPX01FOlxyXG5cdFx0XHRcdGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdFx0ZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTSUdOX1VQX1JFU0VUXCI6XHJcblx0XHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==