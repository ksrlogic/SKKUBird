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
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchCommentPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);



 // function addPostAPI() {
//   return axios.post("/api/post");
// }
// function removePostAPI() {
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

function removePost(_ref3) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = _ref3.data;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: data //	result.data 고정

          });

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: data
          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            data: _context3.t0.response.data //	err.response.data 고정

          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 10]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchCommentPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchCommentPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRDb21tZW50IiwiYWRkUG9zdCIsInJlbW92ZVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaENvbW1lbnRQb3N0IiwicG9zdFNhZ2EiLCJkYXRhIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJyZXNwb25zZSIsImlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiQUREX1BPU1RfU1VDQ0VTUyIsImNvbnRlbnQiLCJBRERfUE9TVF9UT19NRSIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXdCVUEsVTttR0FlQUMsTzttR0F3QkFDLFU7bUdBb0JBQyxZO21HQUlBQyxlO21HQUlBQyxnQjttR0FHZUMsUTs7QUE5RnpCO0FBQ0E7Q0FnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVVOLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCTyxjQUF2QixRQUF1QkEsSUFBdkI7QUFBQTtBQUFBO0FBR0UsaUJBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUhGO0FBQUE7QUFJRSxpQkFBTUMsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFQyw0REFERztBQUVUSixnQkFBSSxFQUFKQSxJQUZTLENBRUg7O0FBRkcsV0FBRCxDQUFUOztBQUpGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNFLGlCQUFNRSw4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aWMvd2VicGFjay9wYWdlcy9fYXBwLjdkYzFiNTdmZDQxOGEzNWVhNzU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdEFERF9QT1NUX1RPX01FLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRQb3N0QVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIpO1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIik7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KHsgZGF0YSB9KSB7XHJcblx0dHJ5IHtcclxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSk7XHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGEsIC8vXHRyZXN1bHQuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vXHRlcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdCh7IGRhdGEgfSkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEkpO1xyXG5cdFx0eWllbGQgZGVsYXkoMTAwMCk7XHJcblx0XHRjb25zdCBpZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRjb250ZW50OiBkYXRhLFxyXG5cdFx0XHR9LCAvL1x0cmVzdWx0LmRhdGEg6rOg7KCVXHJcblx0XHR9KTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG5cdFx0XHRkYXRhOiBpZCxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vXHRlcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoeyBkYXRhIH0pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJKTtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YSwgLy9cdHJlc3VsdC5kYXRhIOqzoOyglVxyXG5cdFx0fSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuXHRcdFx0ZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vXHRlcnIucmVzcG9uc2UuZGF0YSDqs6DsoJVcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENvbW1lbnRQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbZm9yayh3YXRjaEFkZFBvc3QpLCBmb3JrKHdhdGNoQ29tbWVudFBvc3QpLCBmb3JrKHdhdGNoUmVtb3ZlUG9zdCldKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9