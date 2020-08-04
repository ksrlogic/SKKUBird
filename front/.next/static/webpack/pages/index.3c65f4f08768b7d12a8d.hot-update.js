webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PostCard/PostCardContent.js":
/*!************************************************!*\
  !*** ./Components/PostCard/PostCardContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\Components\\PostCard\\PostCardContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var HashDivide = function HashDivide(data) {
  var splited = data.split(/(#[^\s#]+)/g);
  console.log(splited);
  var result = splited.map(function (data, index) {
    console.log(data);

    if (data[0] === "#") {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: index,
        href: "/hashtag/".concat(data.slice(1)),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, data));
    }

    return data;
  });
  return result;
};

_c = HashDivide;

var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, HashDivide(postData));
};

_c2 = PostCardContent;
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c, _c2;

$RefreshReg$(_c, "HashDivide");
$RefreshReg$(_c2, "PostCardContent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC9Qb3N0Q2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiSGFzaERpdmlkZSIsImRhdGEiLCJzcGxpdGVkIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwibWFwIiwiaW5kZXgiLCJzbGljZSIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixNQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLGFBQVgsQ0FBaEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFDQSxNQUFNSSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUNOLElBQUQsRUFBT08sS0FBUCxFQUFpQjtBQUMxQ0osV0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLEdBQWhCLEVBQXFCO0FBQ25CLGFBQ0UsTUFBQyxnREFBRDtBQUFNLFdBQUcsRUFBRU8sS0FBWDtBQUFrQixZQUFJLHFCQUFjUCxJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLENBQWQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSVIsSUFBSixDQURGLENBREY7QUFLRDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0FWYyxDQUFmO0FBV0EsU0FBT0ssTUFBUDtBQUNELENBZkQ7O0tBQU1OLFU7O0FBaUJOLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDeEMsU0FBTyxtRUFBR1gsVUFBVSxDQUFDVyxRQUFELENBQWIsQ0FBUDtBQUNELENBRkQ7O01BQU1ELGU7QUFJTkEsZUFBZSxDQUFDRSxTQUFoQixHQUE0QjtBQUMxQkQsVUFBUSxFQUFFRSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURELENBQTVCO0FBSWVMLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjNjVmNGYwODc2OGI3ZDEyYThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEhhc2hEaXZpZGUgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHNwbGl0ZWQgPSBkYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKTtcclxuICBjb25zb2xlLmxvZyhzcGxpdGVkKTtcclxuICBjb25zdCByZXN1bHQgPSBzcGxpdGVkLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYgKGRhdGFbMF0gPT09IFwiI1wiKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17YC9oYXNodGFnLyR7ZGF0YS5zbGljZSgxKX1gfT5cclxuICAgICAgICAgIDxhPntkYXRhfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHsgcG9zdERhdGEgfSkgPT4ge1xyXG4gIHJldHVybiA8PntIYXNoRGl2aWRlKHBvc3REYXRhKX08Lz47XHJcbn07XHJcblxyXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3REYXRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=