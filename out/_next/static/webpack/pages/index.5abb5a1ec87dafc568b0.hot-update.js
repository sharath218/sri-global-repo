webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Information.js":
/*!***********************************!*\
  !*** ./components/Information.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Information.module.css */ "./styles/Information.module.css");
/* harmony import */ var _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Information_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactForm */ "./components/ContactForm.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Sharath_Code\\next\\sri-global\\components\\Information.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Information() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    latitude: 17.388815,
    longitude: 78.491312,
    width: "100%",
    height: "300px",
    backgrounColor: "black",
    zoom: 15
  }),
      viewport = _useState[0],
      setViewport = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedPark = _useState2[0],
      setSelectedPark = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
    className: _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.informationContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["Parallax"], {
    y: [20, -30],
    className: _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.map,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    // mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    onViewportChange: function onViewportChange(viewport) {
      setViewport(viewport);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    latitude: 17.388815,
    longitude: 78.491312,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "marker-btn",
    onClick: function onClick(e) {
      e.preventDefault();
      setSelectedPark(viewport);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/map.png",
    alt: "Skate Park Icon",
    style: {
      height: "10px",
      width: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }))), selectedPark ? __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
    latitude: viewport.latitude,
    longitude: viewport.longitude,
    onClose: function onClose() {
      setSelectedPark(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "sri-global"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "home care"))) : null), __jsx("h1", {
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
  }, " No.3-3-173 and 173/1, Chappal Bazar, Kachiguda, Hyderabad - 500027, RelianceDigital Back Side")), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["Parallax"], {
    y: [-20, 20],
    className: _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJJbmZvcm1hdGlvbiIsInVzZVN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bkNvbG9yIiwiem9vbSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJzZWxlY3RlZFBhcmsiLCJzZXRTZWxlY3RlZFBhcmsiLCJ1c2VFZmZlY3QiLCJsaXN0ZW5lciIsImUiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImluZm9ybWF0aW9uQ29udGFpbmVyIiwibWFwIiwicHJldmVudERlZmF1bHQiLCJmb3JtQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDO0FBQ3ZDQyxZQUFRLEVBQUUsU0FENkI7QUFFdkNDLGFBQVMsRUFBRSxTQUY0QjtBQUd2Q0MsU0FBSyxFQUFFLE1BSGdDO0FBSXZDQyxVQUFNLEVBQUUsT0FKK0I7QUFLdkNDLGtCQUFjLEVBQUUsT0FMdUI7QUFNdkNDLFFBQUksRUFBRTtBQU5pQyxHQUFELENBRG5CO0FBQUEsTUFDZEMsUUFEYztBQUFBLE1BQ0pDLFdBREk7O0FBQUEsbUJBU21CUixzREFBUSxDQUFDLElBQUQsQ0FUM0I7QUFBQSxNQVNkUyxZQVRjO0FBQUEsTUFTQUMsZUFUQTs7QUFXckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLENBQUMsRUFBSTtBQUNwQixVQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxRQUFkLEVBQXdCO0FBQ3RCSix1QkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNEO0FBQ0YsS0FKRDs7QUFLQUssVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ0osUUFBbkM7QUFFQSxXQUFPLFlBQU07QUFDWEcsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ0wsUUFBdEM7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQ0U7QUFBSyxhQUFTLEVBQUVNLHFFQUFNLENBQUNDLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFVLEtBQUMsRUFBRSxDQUFDLEVBQUQsRUFBSSxDQUFDLEVBQUwsQ0FBYjtBQUF1QixhQUFTLEVBQUVELHFFQUFNLENBQUNFLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRixNQUFDLG9EQUFELHlGQUNNYixRQUROO0FBRUU7QUFDQSxvQkFBZ0IsRUFBRSwwQkFBQUEsUUFBUSxFQUFJO0FBQzVCQyxpQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRSSxNQUFDLG1EQUFEO0FBRUUsWUFBUSxFQUFFLFNBRlo7QUFHRSxhQUFTLEVBQUUsU0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFdBQU8sRUFBRSxpQkFBQU0sQ0FBQyxFQUFJO0FBQ1pBLE9BQUMsQ0FBQ1EsY0FBRjtBQUNBWCxxQkFBZSxDQUFDSCxRQUFELENBQWY7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFLLE9BQUcsRUFBQyxjQUFUO0FBQXdCLE9BQUcsRUFBQyxpQkFBNUI7QUFBK0MsU0FBSyxFQUFFO0FBQUNILFlBQU0sRUFBQyxNQUFSO0FBQWVELFdBQUssRUFBRTtBQUF0QixLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FMRixDQVJKLEVBeUJHTSxZQUFZLEdBQ1gsTUFBQyxrREFBRDtBQUNFLFlBQVEsRUFBRUYsUUFBUSxDQUFDTixRQURyQjtBQUVFLGFBQVMsRUFBRU0sUUFBUSxDQUFDTCxTQUZ0QjtBQUdFLFdBQU8sRUFBRSxtQkFBTTtBQUNiUSxxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixDQVBGLENBRFcsR0FhVCxJQXRDTixDQURFLEVBeUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBekNFLEVBNENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0dBNUNFLENBREosRUErQ0ksTUFBQyw4REFBRDtBQUFVLEtBQUMsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBYjtBQUF3QixhQUFTLEVBQUVRLHFFQUFNLENBQUNJLGFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQS9DSixDQURGO0FBcUREOztHQTdFUXZCLFc7O0tBQUFBLFc7QUErRU1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhYmI1YTFlYzg3ZGFmYzU2OGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCwgeyBNYXJrZXIsIFBvcHVwIH0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9JbmZvcm1hdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm1cIjtcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xyXG5mdW5jdGlvbiBJbmZvcm1hdGlvbigpIHtcclxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHtcclxuICAgIGxhdGl0dWRlOiAxNy4zODg4MTUsXHJcbiAgICBsb25naXR1ZGU6IDc4LjQ5MTMxMixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIHpvb206IDE1XHJcbiAgfSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGFyaywgc2V0U2VsZWN0ZWRQYXJrXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSBlID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRQYXJrKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9ybWF0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICA8UGFyYWxsYXggeT17WzIwLC0zMF19IGNsYXNzTmFtZT17c3R5bGVzLm1hcH0+XHJcbiAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgIC8vIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfVE9LRU59XHJcbiAgICAgICAgb25WaWV3cG9ydENoYW5nZT17dmlld3BvcnQgPT4ge1xyXG4gICAgICAgICAgc2V0Vmlld3BvcnQodmlld3BvcnQpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgXHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhdGl0dWRlPXsxNy4zODg4MTV9XHJcbiAgICAgICAgICAgIGxvbmdpdHVkZT17NzguNDkxMzEyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2VyLWJ0blwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFBhcmsodmlld3BvcnQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbWFwLnBuZ1wiIGFsdD1cIlNrYXRlIFBhcmsgSWNvblwiICBzdHlsZT17e2hlaWdodDpcIjEwcHhcIix3aWR0aDogXCIxMHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICBcclxuXHJcbiAgICAgICAge3NlbGVjdGVkUGFyayA/IChcclxuICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICBsYXRpdHVkZT17dmlld3BvcnQubGF0aXR1ZGV9XHJcbiAgICAgICAgICAgIGxvbmdpdHVkZT17dmlld3BvcnQubG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQYXJrKG51bGwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5zcmktZ2xvYmFsPC9oMj5cclxuICAgICAgICAgICAgICA8cD5ob21lIGNhcmU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdE1hcEdMPlxyXG4gICAgICA8aDE+XHJcbiAgICAgIFNyaSBHbG9iYWwgSG9tZSBDYXJlIFNlcnZpY2VzXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxwPiBOby4zLTMtMTczIGFuZCAxNzMvMSwgQ2hhcHBhbCBCYXphciwgS2FjaGlndWRhLCBIeWRlcmFiYWQgLSA1MDAwMjcsIFJlbGlhbmNlRGlnaXRhbCBCYWNrIFNpZGU8L3A+XHJcbiAgICAgIDwvUGFyYWxsYXggPlxyXG4gICAgICAgIDxQYXJhbGxheCB5PXtbLTIwLCAyMF19IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q29udGFjdEZvcm0vPlxyXG4gICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvcm1hdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9