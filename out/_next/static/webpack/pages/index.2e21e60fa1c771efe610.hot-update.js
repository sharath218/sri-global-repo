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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#reviews",
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
      columnNumber: 73
    }
  }, "REVIEWS"))), __jsx("button", {
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
  }, "Contact Us"))), __jsx("div", {
    onClick: function onClick() {
      setopenNav(!openNav);
    },
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rect : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flip1),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 18
    }
  }), __jsx("div", {
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rect : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flip2),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 18
    }
  }), __jsx("div", {
    className: "".concat(openNav ? _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rect : _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flip3),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 18
    }
  }))), __jsx("div", {
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
  }, "Mr Ganesh"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "tel:123-456-7890",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.phnnum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 43
    }
  }, "+91 1234567890")))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "--OR--"), __jsx("div", {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formcontainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ContactForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldG1vZGFsSXNPcGVuIiwib3Blbk5hdiIsInNldG9wZW5OYXYiLCJzdHlsZXMiLCJoZWFkZXIiLCJsb2dvY29udGFpbmVyIiwibG9nb2ltYWdlIiwibG9nbyIsIm5hdiIsImJ0bkdyYWQiLCJjb250YWN0QnRuIiwibWVudSIsInJlY3QiLCJmbGlwMSIsImZsaXAyIiwiZmxpcDMiLCJtb2RhbENvbnRhaW5lciIsIm1vZGFsY29udGVudCIsIm92ZXJsYXkiLCJjb250YWluZXIiLCJjYXJkIiwibmFtZSIsInBobm51bSIsImZvcm1jb250YWluZXIiLCJDb250YWN0Rm9ybSIsImNsb3NlYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEtBQUQsQ0FEM0I7QUFBQSxNQUNaQyxXQURZO0FBQUEsTUFDQ0MsY0FERDs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxLQUFELENBRm5CO0FBQUEsTUFFWkcsT0FGWTtBQUFBLE1BRUhDLFVBRkc7O0FBR2pCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFFQyw2REFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELDZEQUFNLENBQUNFLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRjtBQUFLLGFBQVMsRUFBRUYsNkRBQU0sQ0FBQ0csU0FBdkI7QUFBa0MsT0FBRyxFQUFDLDBCQUF0QztBQUFpRSxPQUFHLEVBQUMs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QUNzQixRQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBeEJILENBREgsQ0FyQkksQ0FERjtBQW9ESCxDQXZERDs7R0FBTTVCLE07O0tBQUFBLE07QUF5RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlMjFlNjBmYTFjNzcxZWZlNjEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRtb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb3Blbk5hdiwgc2V0b3Blbk5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvY29udGFpbmVyfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29pbWFnZX0gc3JjPVwiL2ltZy9zcmktZ2xvYmFsLWxvZ28uc3ZnXCIgYWx0PVwiaW1hZ2UxXCI+PC9pbWc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlNSSSBHTE9CQUw8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuR3JhZH0+PExpbmsgaHJlZj1cIi8jc2VydmljZXNcIj48YT5TRVJWSUNFUzwvYT48L0xpbms+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5HcmFkfT48TGluayBocmVmPVwiLyNyZXZpZXdzXCI+PGE+UkVWSUVXUzwvYT48L0xpbms+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0bW9kYWxJc09wZW4odHJ1ZSl9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RCdG59PjxzcGFuPkNvbnRhY3QgVXM8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge3NldG9wZW5OYXYoIW9wZW5OYXYpfX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake29wZW5OYXYgPyBzdHlsZXMucmVjdCA6IHN0eWxlcy5mbGlwMX1gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7b3Blbk5hdiA/IHN0eWxlcy5yZWN0IDogc3R5bGVzLmZsaXAyfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuTmF2ID8gc3R5bGVzLnJlY3QgOiBzdHlsZXMuZmxpcDN9YH0+PC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICA8L2hlYWRlcj5cclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGFpbmVyfSA+XHJcbiAgICAgPE1vZGFsIGNsYXNzTmFtZSA9IHtzdHlsZXMubW9kYWxjb250ZW50fVxyXG4gICAgIG92ZXJsYXlDbGFzc05hbWUgPSB7c3R5bGVzLm92ZXJsYXl9XHJcbiAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9IFxyXG4gICAgIG9uUmVxdWVzdENsb3NlPXsoKT0+e3NldG1vZGFsSXNPcGVuKGZhbHNlKX19PlxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDE+Q2FsbCBVczwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+TXIgR2FuZXNoPC9oMj5cclxuICAgICAgICAgICA8TGluayBocmVmPVwidGVsOjEyMy00NTYtNzg5MFwiPjxoNCAgY2xhc3NOYW1lPXtzdHlsZXMucGhubnVtfT4rOTEgMTIzNDU2Nzg5MDwvaDQ+PC9MaW5rPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5NciBHYW5lc2g8L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwidGVsOjEyMy00NTYtNzg5MFwiPjxoNCAgY2xhc3NOYW1lPXtzdHlsZXMucGhubnVtfT4rOTEgMTIzNDU2Nzg5MDwvaDQ+PC9MaW5rPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4tLU9SLS08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1jb250YWluZXJ9ID5cclxuICAgICAgICA8Q29udGFjdEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuQ29udGFjdEZvcm19Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDMgb25DbGljayA9eygpID0+IHtzZXRtb2RhbElzT3BlbihmYWxzZSkgfX0gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VidG59Plg8L2gzPlxyXG4gICAgIDwvTW9kYWw+XHJcbiAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9