webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Nav.module.css */ "./styles/Nav.module.css");
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactForm */ "./components/ContactForm.js");
var _this = undefined,
    _jsxFileName = "D:\\Sharath_Code\\next\\sri-global\\components\\navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Navbar = function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setmodalIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openNav = _useState2[0],
      setopenNav = _useState2[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logocontainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logoimage,
    src: "/img/sri-global-logo.svg",
    alt: "image1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "SRI GLOBAL")), __jsx("nav", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnGrad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 74
    }
  }, "SERVICES"))), __jsx("button", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnGrad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 50
    }
  }, "REVIEWS")), __jsx("button", {
    onClick: function onClick() {
      setmodalIsOpen(true);
    },
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactBtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 45
    }
  }, "Contact Us")))), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modalcontent,
    overlayClassName: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay,
    isOpen: modalIsOpen,
    ariaHideApp: false,
    onRequestClose: function onRequestClose() {
      setmodalIsOpen(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Call Us"), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Mr Ganesh"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "tel:123-456-7890",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }, __jsx("h4", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.phnnum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 42
    }
  }, "+91 1234567890"))), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Mr Ganesh"), __jsx("h4", {
    href: "tel:123-456-7890",
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.phnnum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "+91 1234567890"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "--OR--"), __jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("h3", {
    onClick: function onClick() {
      setmodalIsOpen(false);
    },
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.closebtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "X"))));
};

_s(Navbar, "Adh+u0FfaHY979K+IfdAuwdArSQ=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldG1vZGFsSXNPcGVuIiwib3Blbk5hdiIsInNldG9wZW5OYXYiLCJzdHlsZXMiLCJoZWFkZXIiLCJsb2dvY29udGFpbmVyIiwibG9nb2ltYWdlIiwibG9nbyIsIm5hdiIsImJ0bkdyYWQiLCJjb250YWN0QnRuIiwibW9kYWxDb250YWluZXIiLCJtb2RhbGNvbnRlbnQiLCJvdmVybGF5IiwiY29udGFpbmVyIiwiY2FyZCIsIm5hbWUiLCJwaG5udW0iLCJjbG9zZWJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsS0FBRCxDQUZuQjtBQUFBLE1BRVpHLE9BRlk7QUFBQSxNQUVIQyxVQUZHOztBQUdqQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw2REFBTSxDQUFDRSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Y7QUFBSyxhQUFTLEVBQUVGLDZEQUFNLENBQUNHLFNBQXZCO0FBQWtDLE9BQUcsRUFBQywwQkFBdEM7QUFBaUUsT0FBRyxFQUFDLFFBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERSxFQUVGO0FBQUksYUFBUyxFQUFFSCw2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QUNqQixvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUF1QixLQUE1QztBQUE4QyxhQUFTLEVBQUVHLDZEQUFNLENBQUNlLFFBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F0QkgsQ0FESCxDQXJCSSxDQURGO0FBa0RILENBckREOztHQUFNckIsTTs7S0FBQUEsTTtBQXVEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzcyNjlmMGI1ZDIxMGViNDRmODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi9Db250YWN0Rm9ybSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldG1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtvcGVuTmF2LCBzZXRvcGVuTmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29jb250YWluZXJ9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb2ltYWdlfSBzcmM9XCIvaW1nL3NyaS1nbG9iYWwtbG9nby5zdmdcIiBhbHQ9XCJpbWFnZTFcIj48L2ltZz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+U1JJIEdMT0JBTDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5HcmFkfT48TGluayBocmVmPVwiLyNzZXJ2aWNlc1wiPjxhPlNFUlZJQ0VTPC9hPjwvTGluaz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkdyYWR9PjxzcGFuPlJFVklFV1M8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0bW9kYWxJc09wZW4odHJ1ZSl9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RCdG59PjxzcGFuPkNvbnRhY3QgVXM8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9uYXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjdH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWN0fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlY3R9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgPC9oZWFkZXI+XHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRhaW5lcn0gPlxyXG4gICAgIDxNb2RhbCBjbGFzc05hbWUgPSB7c3R5bGVzLm1vZGFsY29udGVudH1cclxuICAgICBvdmVybGF5Q2xhc3NOYW1lID0ge3N0eWxlcy5vdmVybGF5fVxyXG4gICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfSBcclxuICAgICBvblJlcXVlc3RDbG9zZT17KCk9PntzZXRtb2RhbElzT3BlbihmYWxzZSl9fT5cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGgxPkNhbGwgVXM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pk1yIEdhbmVzaDwvaDI+XHJcbiAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDoxMjMtNDU2LTc4OTBcIj48aDQgIGNsYXNzTmFtZT17c3R5bGVzLnBobm51bX0+KzkxIDEyMzQ1Njc4OTA8L2g0PjwvTGluaz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+TXIgR2FuZXNoPC9oMj5cclxuICAgICAgICAgICAgPGg0IGhyZWY9XCJ0ZWw6MTIzLTQ1Ni03ODkwXCIgY2xhc3NOYW1lPXtzdHlsZXMucGhubnVtfT4rOTEgMTIzNDU2Nzg5MDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+LS1PUi0tPC9kaXY+XHJcbiAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgPGgzIG9uQ2xpY2sgPXsoKSA9PiB7c2V0bW9kYWxJc09wZW4oZmFsc2UpIH19IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlYnRufT5YPC9oMz5cclxuICAgICA8L01vZGFsPlxyXG4gICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==