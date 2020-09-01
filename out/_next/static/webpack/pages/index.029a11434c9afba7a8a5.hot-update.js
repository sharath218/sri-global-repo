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
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.slide),
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
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 74
    }
  }, "SERVICES"))), __jsx("button", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnGrad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#reviews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 73
    }
  }, "REVIEWS"))), __jsx("button", {
    onClick: function onClick() {
      setmodalIsOpen(true), setopenNav(!openNav);
    },
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactBtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 45
    }
  }, "Contact Us"))), __jsx("div", {
    onClick: function onClick() {
      return setopenNav(!openNav);
    },
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rect1 : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flip1),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 18
    }
  }), __jsx("div", {
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rect2 : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flip2),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 18
    }
  }), __jsx("div", {
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rect3 : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flip3),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 18
    }
  }))), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Call Us"), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Mr Ganesh"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "tel:123-456-7890",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }, __jsx("h4", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.phnnum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 42
    }
  }, "+91 1234567890"))), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Mr Ganesh"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "tel:123-456-7890",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.phnnum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 43
    }
  }, "+91 1234567890")))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "--OR--"), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formcontainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ContactForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx("h3", {
    onClick: function onClick() {
      setmodalIsOpen(false);
    },
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.closebtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldG1vZGFsSXNPcGVuIiwib3Blbk5hdiIsInNldG9wZW5OYXYiLCJzdHlsZXMiLCJoZWFkZXIiLCJsb2dvY29udGFpbmVyIiwibG9nb2ltYWdlIiwibG9nbyIsIm5hdiIsInNsaWRlIiwiYnRuR3JhZCIsImNvbnRhY3RCdG4iLCJtZW51IiwicmVjdDEiLCJmbGlwMSIsInJlY3QyIiwiZmxpcDIiLCJyZWN0MyIsImZsaXAzIiwibW9kYWxDb250YWluZXIiLCJtb2RhbGNvbnRlbnQiLCJvdmVybGF5IiwiY29udGFpbmVyIiwiY2FyZCIsIm5hbWUiLCJwaG5udW0iLCJmb3JtY29udGFpbmVyIiwiQ29udGFjdEZvcm0iLCJjbG9zZWJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsS0FBRCxDQUZuQjtBQUFBLE1BRVpHLE9BRlk7QUFBQSxNQUVIQyxVQUZHOztBQUdqQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw2REFBTSxDQUFDRSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Y7QUFBSyxhQUFTLEVBQUVGLDZEQUFNLENBQUNHLFNBQXZCO0FBQWtDLE9BQUcsRUFB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REEsQ0FyQkgsRUF3Qkc7QUFBSSxXQUFPLEVBQUcsbUJBQU07QUFBQzNCLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQXVCLEtBQTVDO0FBQThDLGFBQVMsRUFBRUcsNkRBQU0sQ0FBQ3lCLFFBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F4QkgsQ0FESCxDQXRCSSxDQURGO0FBcURILENBeEREOztHQUFNL0IsTTs7S0FBQUEsTTtBQTBEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDI5YTExNDM0YzlhZmJhN2E4YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi9Db250YWN0Rm9ybSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldG1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtvcGVuTmF2LCBzZXRvcGVuTmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29jb250YWluZXJ9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb2ltYWdlfSBzcmM9XCIvaW1nL3NyaS1nbG9iYWwtbG9nby5zdmdcIiBhbHQ9XCJpbWFnZTFcIj48L2ltZz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+U1JJIEdMT0JBTDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtvcGVuTmF2ID8gc3R5bGVzLm5hdiA6IHN0eWxlcy5zbGlkZX1gfT4gXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuR3JhZH0+PExpbmsgaHJlZj1cIi8jc2VydmljZXNcIj48YT5TRVJWSUNFUzwvYT48L0xpbms+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5HcmFkfT48TGluayBocmVmPVwiLyNyZXZpZXdzXCI+PGE+UkVWSUVXUzwvYT48L0xpbms+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0bW9kYWxJc09wZW4odHJ1ZSksIHNldG9wZW5OYXYoIW9wZW5OYXYpIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEJ0bn0+PHNwYW4+Q29udGFjdCBVczwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0b3Blbk5hdighb3Blbk5hdil9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuTmF2ID8gc3R5bGVzLnJlY3QxIDogc3R5bGVzLmZsaXAxfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuTmF2ID8gc3R5bGVzLnJlY3QyIDogc3R5bGVzLmZsaXAyfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuTmF2ID8gc3R5bGVzLnJlY3QzIDogc3R5bGVzLmZsaXAzfWB9PjwvZGl2PiBcclxuICAgICAgPC9kaXY+XHJcbiAgPC9oZWFkZXI+XHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRhaW5lcn0gPlxyXG4gICAgIDxNb2RhbCBjbGFzc05hbWUgPSB7c3R5bGVzLm1vZGFsY29udGVudH1cclxuICAgICBvdmVybGF5Q2xhc3NOYW1lID0ge3N0eWxlcy5vdmVybGF5fVxyXG4gICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfSBcclxuICAgICBvblJlcXVlc3RDbG9zZT17KCk9PntzZXRtb2RhbElzT3BlbihmYWxzZSl9fT5cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGgxPkNhbGwgVXM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pk1yIEdhbmVzaDwvaDI+XHJcbiAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDoxMjMtNDU2LTc4OTBcIj48aDQgIGNsYXNzTmFtZT17c3R5bGVzLnBobm51bX0+KzkxIDEyMzQ1Njc4OTA8L2g0PjwvTGluaz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+TXIgR2FuZXNoPC9oMj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDoxMjMtNDU2LTc4OTBcIj48aDQgIGNsYXNzTmFtZT17c3R5bGVzLnBobm51bX0+KzkxIDEyMzQ1Njc4OTA8L2g0PjwvTGluaz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+LS1PUi0tPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtY29udGFpbmVyfSA+XHJcbiAgICAgICAgPENvbnRhY3RGb3JtIGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhY3RGb3JtfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzIG9uQ2xpY2sgPXsoKSA9PiB7c2V0bW9kYWxJc09wZW4oZmFsc2UpIH19IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlYnRufT5YPC9oMz5cclxuICAgICA8L01vZGFsPlxyXG4gICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==