webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/login", data);
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/logout");
}

function addPostAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/post");
}

function login(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_IN_SUCCESS",
            data: result.data //result.data 고정

          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_IN_FAILURE",
            data: _context.t0.response.data //err.response.data 고정

          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function logout() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logoutAPI);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_OUT_SUCCESS",
            data: result.data //result.data 고정

          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_OUT_FAILURE",
            data: _context2.t0.response.data //err.response.data 고정

          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function addPost() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "ADD_POST_SUCCESS",
            data: result.data //result.data 고정

          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "ADD_POST_FAILURE",
            data: _context3.t0.response.data //err.response.data 고정

          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])("LOG_IN_REQUEST", login);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])("LOG_OUT_REQUEST", logout);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])("ADD_POST_REQUEST", addPost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), //call
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsibG9naW4iLCJsb2dvdXQiLCJhZGRQb3N0Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0Iiwid2F0Y2hBZGRQb3N0Iiwicm9vdFNhZ2EiLCJsb2dpbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJsb2dvdXRBUEkiLCJhZGRQb3N0QVBJIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJyZXNwb25zZSIsInRha2VFdmVyeSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBZVVBLEs7bUdBZUFDLE07bUdBZUFDLE87bUdBZUFDLFU7bUdBSUFDLFc7bUdBSUFDLFk7bUdBSWVDLFE7O0FBeEV6QjtBQUNBOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3RCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0csU0FBVCxHQUFxQjtBQUNuQixTQUFPRiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsVUFBVCxHQUFzQjtBQUNwQixTQUFPSCw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsV0FBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBVVYsS0FBVixDQUFnQmEsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVtQixpQkFBTUMsK0RBQUksQ0FBQ1AsUUFBRCxFQUFXTSxNQUFNLENBQUNMLElBQWxCLENBQVY7O0FBRm5CO0FBRVVPLGdCQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGdCQURFO0FBRVJULGdCQUFJLEVBQUVPLE1BQU0sQ0FBQ1AsSUFGTCxDQUVXOztBQUZYLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRSSxpQkFBTVEsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGdCQURFO0FBRVJULGdCQUFJLEVBQUUsWUFBSVUsUUFBSixDQUFhVixJQUZYLENBRWlCOztBQUZqQixXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBVVAsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNYSwrREFBSSxDQUFDSCxTQUFELENBQVY7O0FBRm5CO0FBRVVJLGdCQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGlCQURFO0FBRVJULGdCQUFJLEVBQUVPLE1BQU0sQ0FBQ1AsSUFGTCxDQUVXOztBQUZYLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRSSxpQkFBTVEsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGlCQURFO0FBRVJULGdCQUFJLEVBQUUsYUFBSVUsUUFBSixDQUFhVixJQUZYLENBRWlCOztBQUZqQixXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBVU4sT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNWSwrREFBSSxDQUFDRixVQUFELENBQVY7O0FBRm5CO0FBRVVHLGdCQUZWO0FBQUE7QUFHSSxpQkFBTUMsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGtCQURFO0FBRVJULGdCQUFJLEVBQUVPLE1BQU0sQ0FBQ1AsSUFGTCxDQUVXOztBQUZYLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRSSxpQkFBTVEsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFLGtCQURFO0FBRVJULGdCQUFJLEVBQUUsYUFBSVUsUUFBSixDQUFhVixJQUZYLENBRWlCOztBQUZqQixXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBVUwsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTWdCLG9FQUFTLENBQUMsZ0JBQUQsRUFBbUJuQixLQUFuQixDQUFmOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVJLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1lLG9FQUFTLENBQUMsaUJBQUQsRUFBb0JsQixNQUFwQixDQUFmOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVJLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1jLG9FQUFTLENBQUMsa0JBQUQsRUFBcUJqQixPQUFyQixDQUFmOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVJLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU1jLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ2xCLFVBQUQsQ0FESSxFQUNVO0FBQ2xCa0IseUVBQUksQ0FBQ2pCLFdBQUQsQ0FGSSxFQUdSaUIsK0RBQUksQ0FBQ2hCLFlBQUQsQ0FISSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMDBiMDFjNTU0YjBlZWU4NDI1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyDqt7jrg6Ug7J247J6Q66GcIOuEmOq4sOuptCDslYzslYTshJwg65Ok7Ja06rCQLiDrjZTrsJvqs6Dsi7bsnLzrqbQg642UIOuEo+ycvOuptCDrjJBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX1NVQ0NFU1NcIixcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vcmVzdWx0LmRhdGEg6rOg7KCVXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX0ZBSUxVUkVcIixcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vZXJyLnJlc3BvbnNlLmRhdGEg6rOg7KCVXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX09VVF9TVUNDRVNTXCIsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvL3Jlc3VsdC5kYXRhIOqzoOyglVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBcIkxPR19PVVRfRkFJTFVSRVwiLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSwgLy9lcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBcIkFERF9QT1NUX1NVQ0NFU1NcIixcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vcmVzdWx0LmRhdGEg6rOg7KCVXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX1BPU1RfRkFJTFVSRVwiLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSwgLy9lcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFwiTE9HX0lOX1JFUVVFU1RcIiwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFwiTE9HX09VVF9SRVFVRVNUXCIsIGxvZ291dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9naW4pLCAvL2NhbGxcclxuICAgIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=