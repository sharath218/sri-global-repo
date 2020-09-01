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
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
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
      setmodalIsOpen(true);
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
  }, "Contact Us")))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldG1vZGFsSXNPcGVuIiwib3Blbk5hdiIsInNldG9wZW5OYXYiLCJzdHlsZXMiLCJoZWFkZXIiLCJsb2dvY29udGFpbmVyIiwibG9nb2ltYWdlIiwibG9nbyIsIm5hdiIsInNsaWRlIiwiYnRuR3JhZCIsImNvbnRhY3RCdG4iLCJtZW51IiwicmVjdDEiLCJmbGlwMSIsInJlY3QyIiwiZmxpcDIiLCJyZWN0MyIsImZsaXAzIiwibW9kYWxDb250YWluZXIiLCJtb2RhbGNvbnRlbnQiLCJvdmVybGF5IiwiY29udGFpbmVyIiwiY2FyZCIsIm5hbWUiLCJwaG5udW0iLCJmb3JtY29udGFpbmVyIiwiQ29udGFjdEZvcm0iLCJjbG9zZWJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsS0FBRCxDQUZuQjtBQUFBLE1BRVpHLE9BRlk7QUFBQSxNQUVIQyxVQUZHOztBQUdqQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw2REFBTSxDQUFDRSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Y7QUFBSyxhQUFTLEVBQUVGLDZEQUFNLENBQUNHLFNBQXZCO0FBQWtDLE9BQUcsRUFBQywwQkFBdEM7QUFBaUUsT0FBRyxFQUFDLFFBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERSxFQUVGO0FBQUksYUFBUyxFQUFFSCw2REFBTSxDQUFDSSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZFLENBREYsRUFLRjtBQUFLLGFBQVMsWUFBS04sT0FBTyxHQUFHRSw2REFBTSxDQUFDSyxHQUFWLEdBQWdCTCw2REFBTSxDQUFDTSxLQUFuQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUVOLDZEQUFNLENBQUNPLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBeEIsQ0FBbkMsQ0FEQSxFQUVBO0FBQVEsYUFBUyxFQUFFUCw2REFBTSxDQUFDTyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkIsQ0FBbkMsQ0FGQSxFQUdBO0FBQ0EsV0FBTyxFQUFFLG1CQUFNO0FBQUNWLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQXFCLEtBRHJDO0FBRUEsYUFBUyxFQUFFRyw2REFBTSxDQUFDUSxVQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRjlCLENBSEEsQ0FGUixDQUxFLEVBZUY7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNVCxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLEtBQWQ7QUFBMEMsYUFBUyxFQUFFRSw2REFBTSxDQUFDUyxJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1c7QUFBSyxhQUFTLFlBQUtYLE9BQU8sR0FBR0UsNkRBQU0sQ0FBQ1UsS0FBVixHQUFrQlYsNkRBQU0sQ0FBQ1csS0FBckMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFgsRUFFVztBQUFLLGFBQVMsWUFBS2IsT0FBTyxHQUFHRSw2REFBTSxDQUFDWSxLQUFWLEdBQWtCWiw2REFBTSxDQUFDYSxLQUFyQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGWCxFQUdXO0FBQUssYUFBUyxZQUFLZixPQUFPLEdBQUdFLDZEQUFNLENBQUNjLEtBQVYsR0FBa0JkLDZEQUFNLENBQUNlLEtBQXJDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhYLENBZkUsQ0FERixFQXNCSjtBQUFLLGFBQVMsRUFBRWYsNkRBQU0sQ0FBQ2dCLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLGtEQUFEO0FBQU8sYUFBUyxFQUFJaEIsNkRBQU0sQ0FBQ2lCLFlBQTNCO0FBQ0Esb0JBQWdCLEVBQUlqQiw2REFBTSxDQUFDa0IsT0FEM0I7QUFFQSxVQUFNLEVBQUV0QixXQUZSO0FBR0EsZUFBVyxFQUFFLEtBSGI7QUFJQSxrQkFBYyxFQUFFLDBCQUFJO0FBQUNDLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQXNCLEtBSjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRztBQUFLLGFBQVMsRUFBRUcsNkRBQU0sQ0FBQ21CLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFSTtBQUFLLGFBQVMsRUFBRW5CLDZEQUFNLENBQUNvQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBSSxhQUFTLEVBQUVwQiw2REFBTSxDQUFDcUIsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxFQUdELE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QjtBQUFLLGFBQVMsRUFBRXJCLDZEQUFNLENBQUNzQixNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE5QixDQUhDLENBRkosRUFPSTtBQUFLLGFBQVMsRUFBRXRCLDZEQUFNLENBQUNvQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBSSxhQUFTLEVBQUVwQiw2REFBTSxDQUFDcUIsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxFQUdBLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QjtBQUFLLGFBQVMsRUFBRXJCLDZEQUFNLENBQUNzQixNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE5QixDQUhBLENBUEosQ0FQSCxFQW9CRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJILEVBcUJHO0FBQUssYUFBUyxFQUFFdEIsNkRBQU0sQ0FBQ3VCLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG9EQUFEO0FBQWEsYUFBUyxFQUFFdkIsNkRBQU0sQ0FBQ3dCLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQXJCSCxFQXdCRztBQUFJLFdBQU8sRUFBRyxtQkFBTTtBQUFDM0Isb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFBdUIsS0FBNUM7QUFBOEMsYUFBUyxFQUFFRyw2REFBTSxDQUFDeUIsUUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXhCSCxDQURILENBdEJJLENBREY7QUFxREgsQ0F4REQ7O0dBQU0vQixNOztLQUFBQSxNO0FBMERTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjQxODU2OWEyMjQ2YjIxMThiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXYubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL0NvbnRhY3RGb3JtJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0bW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29wZW5OYXYsIHNldG9wZW5OYXZdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvaW1hZ2V9IHNyYz1cIi9pbWcvc3JpLWdsb2JhbC1sb2dvLnN2Z1wiIGFsdD1cImltYWdlMVwiPjwvaW1nPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5TUkkgR0xPQkFMPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake29wZW5OYXYgPyBzdHlsZXMubmF2IDogc3R5bGVzLnNsaWRlfWB9PiBcclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkdyYWR9PjxMaW5rIGhyZWY9XCIvI3NlcnZpY2VzXCI+PGE+U0VSVklDRVM8L2E+PC9MaW5rPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuR3JhZH0+PExpbmsgaHJlZj1cIi8jcmV2aWV3c1wiPjxhPlJFVklFV1M8L2E+PC9MaW5rPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldG1vZGFsSXNPcGVuKHRydWUpfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0QnRufT48c3Bhbj5Db250YWN0IFVzPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRvcGVuTmF2KCFvcGVuTmF2KX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake29wZW5OYXYgPyBzdHlsZXMucmVjdDEgOiBzdHlsZXMuZmxpcDF9YH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake29wZW5OYXYgPyBzdHlsZXMucmVjdDIgOiBzdHlsZXMuZmxpcDJ9YH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake29wZW5OYXYgPyBzdHlsZXMucmVjdDMgOiBzdHlsZXMuZmxpcDN9YH0+PC9kaXY+IFxyXG4gICAgICA8L2Rpdj5cclxuICA8L2hlYWRlcj5cclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGFpbmVyfSA+XHJcbiAgICAgPE1vZGFsIGNsYXNzTmFtZSA9IHtzdHlsZXMubW9kYWxjb250ZW50fVxyXG4gICAgIG92ZXJsYXlDbGFzc05hbWUgPSB7c3R5bGVzLm92ZXJsYXl9XHJcbiAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9IFxyXG4gICAgIG9uUmVxdWVzdENsb3NlPXsoKT0+e3NldG1vZGFsSXNPcGVuKGZhbHNlKX19PlxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDE+Q2FsbCBVczwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+TXIgR2FuZXNoPC9oMj5cclxuICAgICAgICAgICA8TGluayBocmVmPVwidGVsOjEyMy00NTYtNzg5MFwiPjxoNCAgY2xhc3NOYW1lPXtzdHlsZXMucGhubnVtfT4rOTEgMTIzNDU2Nzg5MDwvaDQ+PC9MaW5rPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5NciBHYW5lc2g8L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwidGVsOjEyMy00NTYtNzg5MFwiPjxoNCAgY2xhc3NOYW1lPXtzdHlsZXMucGhubnVtfT4rOTEgMTIzNDU2Nzg5MDwvaDQ+PC9MaW5rPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4tLU9SLS08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1jb250YWluZXJ9ID5cclxuICAgICAgICA8Q29udGFjdEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuQ29udGFjdEZvcm19Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDMgb25DbGljayA9eygpID0+IHtzZXRtb2RhbElzT3BlbihmYWxzZSkgfX0gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VidG59Plg8L2gzPlxyXG4gICAgIDwvTW9kYWw+XHJcbiAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9