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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fRkFJTFVSRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwiTE9HX09VVF9TVUNDRVNTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQU9xQjs7QUFFZCxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLGNBQVksRUFBRSxLQURhO0FBQ047QUFD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TyxlQUFLLEdBQUc7QUFBRUQsY0FBRSxFQUFFbUIsTUFBTSxDQUFDckI7QUFBYixXQUFILHNHQUEyQm9CLEtBQUssQ0FBQ3hCLEVBQU4sQ0FBU08sS0FBcEM7QUFGSjtBQUZIOztBQU9EO0FBQ0MsYUFBT2lCLEtBQVA7QUFuRkY7QUFxRkEsQ0F0RkQ7O0FBdUZlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBmMjQzZTI5NDQ3NWViODEzZDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSxcclxuXHRTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLFxyXG5cdENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0Rk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSxcclxuXHRVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBBRERfUE9TVF9UT19NRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiOyAvLyBwcmV0dGllci1pZ25vcmVcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bG9naW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOuhnOuUqVxyXG5cdGxvZ2luRG9uZTogZmFsc2UsXHJcblx0bG9naW5FcnJvcjogbnVsbCxcclxuXHRsb2dvdXRMb2FkaW5nOiBmYWxzZSwgLy8gIOuhnOq3uOyVhOybgyDroZzrlKlcclxuXHRsb2dvdXREb25lOiBmYWxzZSxcclxuXHRsb2dvdXRFcnJvcjogbnVsbCxcclxuXHRzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8gIO2ajOybkOqwgOyehSDroZzrlKlcclxuXHRzaWduVXBEb25lOiBmYWxzZSxcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSxcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdC4uLmRhdGEsXHJcblx0XHRuaWNrbmFtZTogXCJLU1JcIixcclxuXHRcdGlkOiAxLFxyXG5cdFx0UG9zdHM6IFt7IGlkOiAxIH1dLFxyXG5cdFx0Rm9sbG93aW5nczogW3sgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH1dLFxyXG5cdFx0Rm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfV0sXHJcblx0fTtcclxufTtcclxuLy8gIExPR0lOXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcblx0XHRkYXRhLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuLy9cdExPR09VVFxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHR9O1xyXG59O1xyXG4vL1xyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExPR19JTl9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2luTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dpbkRvbmU6IHRydWUsXHJcblx0XHRcdFx0bWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR19JTl9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2luTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9naW5FcnJvcjogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ291dExvYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0bG9nb3V0RXJyb3I6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dvdXREb25lOiB0cnVlLFxyXG5cdFx0XHRcdG1lOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nb3V0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9nb3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNpZ25VcExvYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0c2lnblVwRG9uZTogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNpZ25VcERvbmU6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVEb25lOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEFERF9QT1NUX1RPX01FOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1lOiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0XHRcdFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9