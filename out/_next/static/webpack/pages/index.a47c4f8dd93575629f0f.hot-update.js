webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Information.js":
/*!***********************************!*\
  !*** ./components/Information.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Information.module.css */ "./styles/Information.module.css");
/* harmony import */ var _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactForm */ "./components/ContactForm.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Sharath_Code\\next\\sri-global\\components\\Information.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Information() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    latitude: 17.388815,
    longitude: 78.491312,
    width: "100%",
    height: "300px",
    backgrounColor: "black",
    zoom: 15
  }),
      viewport = _useState[0],
      setViewport = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedPark = _useState2[0],
      setSelectedPark = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(e) {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };

    window.addEventListener("keydown", listener);
    return function () {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return __jsx("div", {
    className: _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.informationContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["Parallax"], {
    className: _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.map,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "Sri Global Home Care Services"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, " No.3-3-173 and 173/1, Chappal Bazar, Kachiguda, Hyderabad - 500027, RelianceDigital Back Side")), __jsx("div", {
    className: _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })));
}

_s(Information, "j4eM4HGkpBze7ZREKNfc4ahehsU=");

_c = Information;
/* harmony default export */ __webpack_exports__["default"] = (Information);

var _c;

$RefreshReg$(_c, "Information");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJJbmZvcm1hdGlvbiIsInVzZVN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bkNvbG9yIiwiem9vbSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJzZWxlY3RlZFBhcmsiLCJzZXRTZWxlY3RlZFBhcmsiLCJ1c2VFZmZlY3QiLCJsaXN0ZW5lciIsImUiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImluZm9ybWF0aW9uQ29udGFpbmVyIiwibWFwIiwiZm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQztBQUN2Q0MsWUFBUSxFQUFFLFNBRDZCO0FBRXZDQyxhQUFTLEVBQUUsU0FGNEI7QUFHdkNDLFNBQUssRUFBRSxNQUhnQztBQUl2Q0MsVUFBTSxFQUFFLE9BSitCO0FBS3ZDQyxrQkFBYyxFQUFFLE9BTHVCO0FBTXZDQyxRQUFJLEVBQUU7QUFOaUMsR0FBRCxDQURuQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNKQyxXQURJOztBQUFBLG1CQVNtQlIsc0RBQVEsQ0FBQyxJQUFELENBVDNCO0FBQUEsTUFTZFMsWUFUYztBQUFBLE1BU0FDLGVBVEE7O0FBV3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxDQUFDLEVBQUk7QUFDcEIsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsUUFBZCxFQUF3QjtBQUN0QkosdUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDRDtBQUNGLEtBSkQ7O0FBS0FLLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNKLFFBQW5DO0FBRUEsV0FBTyxZQUFNO0FBQ1hHLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NMLFFBQXRDO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxTQUNFO0FBQUssYUFBUyxFQUFFTSxxRUFBTSxDQUFDQyxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUVELHFFQUFNLENBQUNFLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0F6Q0UsRUE0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzR0E1Q0UsQ0FESixFQStDSTtBQUFLLGFBQVMsRUFBRUYscUVBQU0sQ0FBQ0csYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBL0NKLENBREY7QUFxREQ7O0dBN0VRdEIsVzs7S0FBQUEsVztBQStFTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTQ3YzRmOGRkOTM1NzU2MjlmMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdE1hcEdMLCB7IE1hcmtlciwgUG9wdXAgfSBmcm9tIFwicmVhY3QtbWFwLWdsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0luZm9ybWF0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0Rm9ybVwiO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XHJcbmZ1bmN0aW9uIEluZm9ybWF0aW9uKCkge1xyXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe1xyXG4gICAgbGF0aXR1ZGU6IDE3LjM4ODgxNSxcclxuICAgIGxvbmdpdHVkZTogNzguNDkxMzEyLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5Db2xvcjogXCJibGFja1wiLFxyXG4gICAgem9vbTogMTVcclxuICB9KTtcclxuICBjb25zdCBbc2VsZWN0ZWRQYXJrLCBzZXRTZWxlY3RlZFBhcmtdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IGUgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZFBhcmsobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb3JtYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgIDxQYXJhbGxheCBjbGFzc05hbWU9e3N0eWxlcy5tYXB9PlxyXG4gICAgICB7LyogPFJlYWN0TWFwR0xcclxuICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgLy8gbWFwYm94QXBpQWNjZXNzVG9rZW49e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9UT0tFTn1cclxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXt2aWV3cG9ydCA9PiB7XHJcbiAgICAgICAgICBzZXRWaWV3cG9ydCh2aWV3cG9ydCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICBcclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGF0aXR1ZGU9ezE3LjM4ODgxNX1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlPXs3OC40OTEzMTJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZXItYnRuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUGFyayh2aWV3cG9ydCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9tYXAucG5nXCIgYWx0PVwiU2thdGUgUGFyayBJY29uXCIgIHN0eWxlPXt7aGVpZ2h0OlwiMTBweFwiLHdpZHRoOiBcIjEwcHhcIn19Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L01hcmtlcj5cclxuICAgIFxyXG5cclxuICAgICAgICB7c2VsZWN0ZWRQYXJrID8gKFxyXG4gICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgIGxhdGl0dWRlPXt2aWV3cG9ydC5sYXRpdHVkZX1cclxuICAgICAgICAgICAgbG9uZ2l0dWRlPXt2aWV3cG9ydC5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFBhcmsobnVsbCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPnNyaS1nbG9iYWw8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPmhvbWUgY2FyZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L1JlYWN0TWFwR0w+ICovfVxyXG4gICAgICA8aDE+XHJcbiAgICAgIFNyaSBHbG9iYWwgSG9tZSBDYXJlIFNlcnZpY2VzXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxwPiBOby4zLTMtMTczIGFuZCAxNzMvMSwgQ2hhcHBhbCBCYXphciwgS2FjaGlndWRhLCBIeWRlcmFiYWQgLSA1MDAwMjcsIFJlbGlhbmNlRGlnaXRhbCBCYWNrIFNpZGU8L3A+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPENvbnRhY3RGb3JtLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=