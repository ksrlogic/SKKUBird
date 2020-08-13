webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PostCard/CommentForm.js":
/*!********************************************!*\
  !*** ./Components/PostCard/CommentForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Hooks/useInput */ "./Hooks/useInput.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\winco\\Desktop\\javascripts\\SKKUBird\\front\\Components\\PostCard\\CommentForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      addCommentDone = _useSelector.addCommentDone;

  var _useInput = Object(_Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(" "),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1],
      setCommentText = _useInput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(post.id + commentText);
    dispatch({
      type: _actions__WEBPACK_IMPORTED_MODULE_7__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onFinish: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, "\uC090\uC57D"));
};

_s(CommentForm, "mM6CS628luhUq9CAqU3Lfmbq6g4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _Hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiYWRkQ29tbWVudERvbmUiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlRWZmZWN0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwiVXNlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsIkNvbW1lbnRzIiwiYXJyYXlPZiIsIkltYWdlcyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNqQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSw2QkFBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQWYsbURBQUksZUFBZUosRUFBbkI7QUFBQSxHQUFOLENBQXRCOztBQUZpQyxxQkFHTkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDTCxJQUFWO0FBQUEsR0FBTixDQUhMO0FBQUEsTUFHekJRLGNBSHlCLGdCQUd6QkEsY0FIeUI7O0FBQUEsa0JBSTBCQywrREFBUSxDQUFDLEdBQUQsQ0FKbEM7QUFBQTtBQUFBLE1BSTFCQyxXQUowQjtBQUFBLE1BSWJDLG1CQUphO0FBQUEsTUFJUUMsY0FKUjs7QUFNakNDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUlMLGNBQUosRUFBb0I7QUFDbkJJLG9CQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ0osY0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNTSxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlqQixJQUFJLENBQUNHLEVBQUwsR0FBVU8sV0FBdEI7QUFDQVQsWUFBUSxDQUFDO0FBQ1JpQixVQUFJLEVBQUVDLDREQURFO0FBRVJDLFVBQUksRUFBRTtBQUNMQyxlQUFPLEVBQUVYLFdBREo7QUFFTFksY0FBTSxFQUFFdEIsSUFBSSxDQUFDRyxFQUZSO0FBR0xvQixjQUFNLEVBQUVwQjtBQUhIO0FBRkUsS0FBRCxDQUFSO0FBUUEsR0FWa0MsRUFVaEMsQ0FBQ08sV0FBRCxFQUFjUCxFQUFkLENBVmdDLENBQW5DO0FBWUEsU0FDQyxNQUFDLHlEQUFEO0FBQU0sWUFBUSxFQUFFVyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBSyxFQUFFSixXQUF2QjtBQUFvQyxZQUFRLEVBQUVDLG1CQUE5QztBQUFtRSxRQUFJLEVBQUUsQ0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFlBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZELENBREQ7QUFRQSxDQWhDRDs7R0FBTVosVztVQUNZRyx1RCxFQUNORSx1RCxFQUNnQkEsdUQsRUFDZ0NLLHVEOzs7S0FKdERWLFc7QUFrQ05BLFdBQVcsQ0FBQ3lCLFNBQVosR0FBd0I7QUFDdkJ4QixNQUFJLEVBQUV5QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3JCdkIsTUFBRSxFQUFFc0IsaURBQVMsQ0FBQ0UsTUFETztBQUVyQkMsUUFBSSxFQUFFSCxpREFBUyxDQUFDSSxNQUZLO0FBR3JCUixXQUFPLEVBQUVJLGlEQUFTLENBQUNLLE1BSEU7QUFJckJDLGFBQVMsRUFBRU4saURBQVMsQ0FBQ0ksTUFKQTtBQUtyQkcsWUFBUSxFQUFFUCxpREFBUyxDQUFDUSxPQUFWLENBQWtCUixpREFBUyxDQUFDSSxNQUE1QixDQUxXO0FBTXJCSyxVQUFNLEVBQUVULGlEQUFTLENBQUNRLE9BQVYsQ0FBa0JSLGlEQUFTLENBQUNJLE1BQTVCO0FBTmEsR0FBaEIsRUFPSE07QUFSb0IsQ0FBeEI7QUFXZXBDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxNzdkZDQ3OTdmZWFiNTU1NDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiYW50ZC9saWIvZm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi9Ib29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IGlkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG5cdGNvbnN0IHsgYWRkQ29tbWVudERvbmUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG5cdGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoXCIgXCIpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGFkZENvbW1lbnREb25lKSB7XHJcblx0XHRcdHNldENvbW1lbnRUZXh0KFwiXCIpO1xyXG5cdFx0fVxyXG5cdH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhwb3N0LmlkICsgY29tbWVudFRleHQpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29udGVudDogY29tbWVudFRleHQsXHJcblx0XHRcdFx0cG9zdElkOiBwb3N0LmlkLFxyXG5cdFx0XHRcdHVzZXJJZDogaWQsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9LCBbY29tbWVudFRleHQsIGlkXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuXHRcdFx0PElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJvd3M9ezR9IC8+XHJcblx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdOyCkOyVvVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvRm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG5cdHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRpZDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Y3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cdFx0Q29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHR9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=