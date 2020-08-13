webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchCommentPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);



 // function addPostAPI() {
//   return axios.post("/api/post");
// }

function addComment(_ref) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: data //	result.data 고정

          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            data: _context.t0.response.data //	err.response.data 고정

          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
}

function addPost(_ref2) {
  var data, id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref2.data;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: {
              id: id,
              content: data
            } //	result.data 고정

          });

        case 7:
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
            data: id
          });

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            data: _context2.t0.response.data //	err.response.data 고정

          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 11]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchCommentPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchCommentPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchCommentPost)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRDb21tZW50IiwiYWRkUG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoQ29tbWVudFBvc3QiLCJwb3N0U2FnYSIsImRhdGEiLCJkZWxheSIsInB1dCIsInR5cGUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInJlc3BvbnNlIiwiaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiY29udGVudCIsIkFERF9QT1NUX1RPX01FIiwiQUREX1BPU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWlCVUEsVTttR0FlQUMsTzttR0F3QkFDLFk7bUdBSUFDLGdCO21HQUdlQyxROztBQS9EekI7QUFDQTtDQVlBO0FBQ0E7QUFDQTs7QUFFQSxTQUFVSixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QkssY0FBdkIsUUFBdUJBLElBQXZCO0FBQUE7QUFBQTtBQUdFLGlCQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFIRjtBQUFBO0FBSUUsaUJBQU1DLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRUMsNERBREc7QUFFVEosZ0JBQUksRUFBSkEsSUFGUyxDQUVIOztBQUZHLFdBQUQsQ0FBVDs7QUFKRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTRSxpQkFBTUUsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFRSw0REFERztBQUVUTCxnQkFBSSxFQUFFLFlBQUlNLFFBQUosQ0FBYU4sSUFGVixDQUVnQjs7QUFGaEIsV0FBRCxDQUFUOztBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVBLFNBQVVKLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9CSSxjQUFwQixTQUFvQkEsSUFBcEI7QUFBQTtBQUFBO0FBR0UsaUJBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUhGO0FBSVFNLFlBSlIsR0FJYUMsOENBQU8sQ0FBQ0MsUUFBUixFQUpiO0FBQUE7QUFLRSxpQkFBTVAsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFTyx5REFERztBQUVUVixnQkFBSSxFQUFFO0FBQ0xPLGdCQUFFLEVBQUZBLEVBREs7QUFFTEkscUJBQU8sRUFBRVg7QUFGSixhQUZHLENBS047O0FBTE0sV0FBRCxDQUFUOztBQUxGO0FBQUE7QUFZRSxpQkFBTUUsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFUyx1REFERztBQUVUWixnQkFBSSxFQUFFTztBQUZHLFdBQUQsQ0FBVDs7QUFaRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkUsaUJBQU1MLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRVUseURBREc7QUFFVGIsZ0JBQUksRUFBRSxhQUFJTSxRQUFKLENBQWFOLElBRlYsQ0FFZ0I7O0FBRmhCLFdBQUQsQ0FBVDs7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVVILFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU1pQixxRUFBVSxDQUFDQyx5REFBRCxFQUFtQm5CLE9BQW5CLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVFLGdCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNZ0IscUVBQVUsQ0FBQ0UsNERBQUQsRUFBc0JyQixVQUF0QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHZSxTQUFVSSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNa0IsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDckIsWUFBRCxDQUFMLEVBQXFCcUIsK0RBQUksQ0FBQ3BCLGdCQUFELENBQXpCLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhjZDAwYTVkNDY3ZWM1Mjg1MGM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdEFERF9QT1NUX1RPX01FLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRQb3N0QVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudCh7IGRhdGEgfSkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEkpO1xyXG5cdFx0eWllbGQgZGVsYXkoMTAwMCk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhLCAvL1x0cmVzdWx0LmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLCAvL1x0ZXJyLnJlc3BvbnNlLmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoeyBkYXRhIH0pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0Y29uc3QgaWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0Y29udGVudDogZGF0YSxcclxuXHRcdFx0fSwgLy9cdHJlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuXHRcdFx0ZGF0YTogaWQsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLCAvL1x0ZXJyLnJlc3BvbnNlLmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ29tbWVudFBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hDb21tZW50UG9zdCldKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9