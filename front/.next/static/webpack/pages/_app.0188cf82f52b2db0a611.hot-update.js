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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginDone: true,
        me: dummyUser(action.data)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginError: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: true,
        logoutError: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutDone: true,
        me: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(function (v) {
            return v.id !== action.data;
          })
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fRkFJTFVSRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwiTE9HX09VVF9TVUNDRVNTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQU9xQjs7QUFFZCxJQUFNQSxZQUFZLEdB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QUFFLGtDQUNFd0IsS0FBSyxDQUFDeEIsRUFEUjtBQUVETyxlQUFLLEdBQUc7QUFBRUQsY0FBRSxFQUFFbUIsTUFBTSxDQUFDckI7QUFBYixXQUFILHNHQUEyQm9CLEtBQUssQ0FBQ3hCLEVBQU4sQ0FBU08sS0FBcEM7QUFGSjtBQUZIOztBQU9ELFNBQUsyQiwwREFBTDtBQUNDLDZDQUNJVixLQURKO0FBRUN4QixVQUFFLGtDQUNFd0IsS0FBSyxDQUFDeEIsRUFEUjtBQUVETyxlQUFLLEVBQUVpQixLQUFLLENBQUN4QixFQUFOLENBQVNPLEtBQVQsQ0FBZTRCLE1BQWYsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLG1CQUFJQSxDQUFDLENBQUM5QixFQUFGLEtBQVNtQixNQUFNLENBQUNyQixJQUFwQjtBQUFBLFdBQXZCO0FBRk47QUFGSDs7QUFPRDtBQUNDLGFBQU9vQixLQUFQO0FBM0ZGO0FBNkZBLENBOUZEOztBQStGZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMTg4Y2Y4MmY1MmIyZGIwYTYxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSxcclxuXHRDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsXHJcblx0VU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsb2dpbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg66Gc65SpXHJcblx0bG9naW5Eb25lOiBmYWxzZSxcclxuXHRsb2dpbkVycm9yOiBudWxsLFxyXG5cdGxvZ291dExvYWRpbmc6IGZhbHNlLCAvLyAg66Gc6re47JWE7JuDIOuhnOuUqVxyXG5cdGxvZ291dERvbmU6IGZhbHNlLFxyXG5cdGxvZ291dEVycm9yOiBudWxsLFxyXG5cdHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyAg7ZqM7JuQ6rCA7J6FIOuhnOuUqVxyXG5cdHNpZ25VcERvbmU6IGZhbHNlLFxyXG5cdHNpZ25VcEVycm9yOiBudWxsLFxyXG5cdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcblx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuXHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LFxyXG5cdGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Li4uZGF0YSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdFx0aWQ6IDEsXHJcblx0XHRQb3N0czogW3sgaWQ6IDEgfV0sXHJcblx0XHRGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfV0sXHJcblx0XHRGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9XSxcclxuXHR9O1xyXG59O1xyXG4vLyAgTE9HSU5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG4vL1x0TE9HT1VUXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdH07XHJcbn07XHJcbi8vXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9naW5Mb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvZ2luRG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dpbkVycm9yOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nb3V0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRsb2dvdXRFcnJvcjogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvZ291dERvbmU6IHRydWUsXHJcblx0XHRcdFx0bWU6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dvdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRzaWduVXBEb25lOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0c2lnblVwRG9uZTogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZURvbmU6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWU6IHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHRcdFx0UG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWU6IHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHRcdFx0UG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcih2ID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==