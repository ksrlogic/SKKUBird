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
    Posts: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fRkFJTFVSRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwiTE9HX09VVF9TVUNDRVNTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBT3FCOztBQUVkLElBQU1BLFlBQVksR0FBRztBQUMzQkMsY0FBWSxFQUFFLEtBRGE7QUFDTjtBQUNyQkMsV0FBUyxFQUFFLEtBRmdC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REo7QUFFQ2pDLHFCQUFhLEVBQUUsSUFGaEI7QUFHQ0UsbUJBQVcsRUFBRTtBQUhkOztBQUtELFNBQUs2Qix3REFBTDtBQUNDLDZDQUNJRSxLQURKO0FBRUNqQyxxQkFBYSxFQUFFLEtBRmhCO0FBR0NDLGtCQUFVLEVBQUUsSUFIYjtBQUlDUSxVQUFFLEVBQUU7QUFKTDs7QUFNRCxTQUFLb0Isd0RBQUw7QUFDQyw2Q0FDSUksS0FESjtBQUVDakMscUJBQWEsRUFBRSxLQUZoQjtBQUdDRSxtQkFBVyxFQUFFZ0MsTUFBTSxDQUFDQztBQUhyQjs7QUFLRCxTQUFLQyx3REFBTDtBQUNDLDZDQUNJSCxLQURKO0FBRUM5QixxQkFBYSxFQUFFLElBRmhCO0FBR0NDLGtCQUFVLEVBQUU7QUFIYjs7QUFLRCxTQUFLaUMsd0RBQUw7QUFDQyw2Q0FDSUosS0FESjtBQUVDOUIscUJBQWEsRUFBRSxLQUZoQjtBQUdDQyxrQkFBVSxFQUFFO0FBSGI7O0FBS0QsU0FBS2tDLHdEQUFMO0FBQ0MsNkNBQ0lMLEtBREo7QUFFQzlCLHFCQUFhLEVBQUUsS0FGaEI7QUFHQ0UsbUJBQVcsRUFBRTZCLE1BQU0sQ0FBQ0M7QUFIckI7O0FBS0QsU0FBS0ksZ0VBQUw7QUFDQyw2Q0FDSU4sS0FESjtBQUVDM0IsNkJBQXFCLEVBQUUsSUFGeEI7QUFHQ0MsMEJBQWtCLEVBQUU7QUFIckI7O0FBS0QsU0FBS2lDLGdFQUFMO0FBQ0MsNkNBQ0lQLEtBREo7QUFFQzNCLDZCQUFxQixFQUFFLEtBRnhCO0FBR0NDLDBCQUFrQixFQUFFO0FBSHJCOztBQUtELFNBQUtrQyxnRUFBTDtBQUNDLDZDQUNJUixLQURKO0FBRUMzQiw2QkFBcUIsRUFBRSxLQUZ4QjtBQUdDRSwyQkFBbUIsRUFBRTBCLE1BQU0sQ0FBQ0M7QUFIN0I7O0FBS0Q7QUFDQyxhQUFPRixLQUFQO0FBM0VGO0FBNkVBLENBOUVEOztBQStFZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzk4N2U4YzE2ZWY2YzMzYzAwOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0TE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLFxyXG5cdFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsXHJcblx0Q0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLFxyXG5cdFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjsgLy8gcHJldHRpZXItaWdub3JlXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGxvZ2luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDroZzrlKlcclxuXHRsb2dpbkRvbmU6IGZhbHNlLFxyXG5cdGxvZ2luRXJyb3I6IG51bGwsXHJcblx0bG9nb3V0TG9hZGluZzogZmFsc2UsIC8vICDroZzqt7jslYTsm4Mg66Gc65SpXHJcblx0bG9nb3V0RG9uZTogZmFsc2UsXHJcblx0bG9nb3V0RXJyb3I6IG51bGwsXHJcblx0c2lnblVwTG9hZGluZzogZmFsc2UsIC8vICDtmozsm5DqsIDsnoUg66Gc65SpXHJcblx0c2lnblVwRG9uZTogZmFsc2UsXHJcblx0c2lnblVwRXJyb3I6IG51bGwsXHJcblx0Y2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuXHRjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG5cdGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcblx0bWU6IG51bGwsXHJcblx0c2lnblVwRGF0YToge30sXHJcblx0bG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHQuLi5kYXRhLFxyXG5cdFx0bmlja25hbWU6IFwiS1NSXCIsXHJcblx0XHRpZDogMSxcclxuXHRcdFBvc3RzOiBbXSxcclxuXHRcdEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH0sIHsgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9XSxcclxuXHRcdEZvbGxvd2VyczogW3sgbmlja25hbWU6IFwi65GY66asXCIgfSwgeyBuaWNrbmFtZTogXCLrkZjrpqxcIiB9LCB7IG5pY2tuYW1lOiBcIuuRmOumrFwiIH1dLFxyXG5cdH07XHJcbn07XHJcbi8vICBMT0dJTlxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gZGF0YSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG5cdFx0ZGF0YSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbiA9IGRhdGEgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbi8vXHRMT0dPVVRcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcblx0fTtcclxufTtcclxuLy9cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dpbkxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR19JTl9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2luTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9naW5Eb25lOiB0cnVlLFxyXG5cdFx0XHRcdG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvZ2luRXJyb3I6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dvdXRMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHRcdGxvZ291dEVycm9yOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nb3V0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9nb3V0RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtZTogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGxvZ291dEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaWduVXBMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHRcdHNpZ25VcERvbmU6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRzaWduVXBEb25lOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0c2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lRG9uZTogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZURvbmU6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==