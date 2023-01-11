"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Mapbox.jsx":
/*!*******************************!*\
  !*** ./components/Mapbox.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var _mui_icons_material_PersonPinCircleTwoTone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/PersonPinCircleTwoTone */ \"./node_modules/@mui/icons-material/PersonPinCircleTwoTone.js\");\n/* harmony import */ var _mui_icons_material_DirectionsCarFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/DirectionsCarFilled */ \"./node_modules/@mui/icons-material/DirectionsCarFilled.js\");\n\n\n\n\n\n\nconst fleet = [\n    [\n        48.578374,\n        7.756802\n    ],\n    [\n        48.586885,\n        7.753119\n    ],\n    [\n        48.581565,\n        7.738541\n    ]\n];\nfunction Mapbox() {\n    const accessToken = \"pk.eyJ1IjoiZ2VvZmZyZXloYWNoIiwiYSI6ImNsYmNjZ2I0azAydGEzb3F1bzh4ODdobnUifQ.muaEc8O8cGiO_yTvpZOMVw\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        mapboxAccessToken: accessToken,\n        initialViewState: {\n            latitude: 48.58186963621235,\n            longitude: 7.750978575153635,\n            zoom: 12\n        },\n        style: {\n            width: 600,\n            height: 400\n        },\n        mapStyle: \"mapbox://styles/mapbox/streets-v9\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                latitude: 48.58186963621235,\n                longitude: 7.750978575153635,\n                anchor: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PersonPinCircleTwoTone__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/geoffreyhach/DEV/WILD/hackathon-CYG/components/Mapbox.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/geoffreyhach/DEV/WILD/hackathon-CYG/components/Mapbox.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            fleet.map((car)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                    latitude: car[0],\n                    longitude: car[1],\n                    anchor: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DirectionsCarFilled__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/geoffreyhach/DEV/WILD/hackathon-CYG/components/Mapbox.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/geoffreyhach/DEV/WILD/hackathon-CYG/components/Mapbox.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/geoffreyhach/DEV/WILD/hackathon-CYG/components/Mapbox.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = Mapbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapbox);\nvar _c;\n$RefreshReg$(_c, \"Mapbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcGJveC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNpQjtBQUNUO0FBQ2tEO0FBQ047QUFFOUUsTUFBTU0sUUFBUTtJQUNWO1FBQUM7UUFBVztLQUFTO0lBQ3JCO1FBQUM7UUFBVztLQUFTO0lBQ3JCO1FBQUM7UUFBVztLQUFTO0NBQ3hCO0FBRUQsU0FBU0MsU0FBUztJQUNkLE1BQU1DLGNBQWNDLGtHQUFzQztJQUMxRCxxQkFDSSw4REFBQ1Isb0RBQUdBO1FBQ0FXLG1CQUFtQko7UUFDbkJLLGtCQUFrQjtZQUNkQyxVQUFVO1lBQ1ZDLFdBQVc7WUFDWEMsTUFBTTtRQUNWO1FBQ0FDLE9BQU87WUFBRUMsT0FBTztZQUFLQyxRQUFRO1FBQUk7UUFDakNDLFVBQVM7OzBCQUVULDhEQUFDbEIsZ0RBQU1BO2dCQUNIWSxVQUFVO2dCQUNWQyxXQUFXO2dCQUNYTSxRQUFROzBCQUVSLDRFQUFDakIsa0ZBQTBCQTs7Ozs7Ozs7OztZQUc5QkUsTUFBTWdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO2dCQUNoQixxQkFDSSw4REFBQ3JCLGdEQUFNQTtvQkFDSFksVUFBVVMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hCUixXQUFXUSxHQUFHLENBQUMsRUFBRTtvQkFDakJGLFFBQVE7OEJBRVIsNEVBQUNoQiwrRUFBdUJBOzs7Ozs7Ozs7O1lBR3BDOzs7Ozs7O0FBR1o7S0FsQ1NFO0FBb0NULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwYm94LmpzeD82ODZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXAsIHsgTWFya2VyIH0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgUGVyc29uUGluQ2lyY2xlVHdvVG9uZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uUGluQ2lyY2xlVHdvVG9uZVwiO1xuaW1wb3J0IERpcmVjdGlvbnNDYXJGaWxsZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RpcmVjdGlvbnNDYXJGaWxsZWRcIjtcblxuY29uc3QgZmxlZXQgPSBbXG4gICAgWzQ4LjU3ODM3NCwgNy43NTY4MDJdLFxuICAgIFs0OC41ODY4ODUsIDcuNzUzMTE5XSxcbiAgICBbNDguNTgxNTY1LCA3LjczODU0MV0sXG5dO1xuXG5mdW5jdGlvbiBNYXBib3goKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQVBJX0tFWTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFwXG4gICAgICAgICAgICBtYXBib3hBY2Nlc3NUb2tlbj17YWNjZXNzVG9rZW59XG4gICAgICAgICAgICBpbml0aWFsVmlld1N0YXRlPXt7XG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDQ4LjU4MTg2OTYzNjIxMjM1LFxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogNy43NTA5Nzg1NzUxNTM2MzUsXG4gICAgICAgICAgICAgICAgem9vbTogMTIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfX1cbiAgICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPE1hcmtlclxuICAgICAgICAgICAgICAgIGxhdGl0dWRlPXs0OC41ODE4Njk2MzYyMTIzNX1cbiAgICAgICAgICAgICAgICBsb25naXR1ZGU9ezcuNzUwOTc4NTc1MTUzNjM1fVxuICAgICAgICAgICAgICAgIGFuY2hvcj17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGVyc29uUGluQ2lyY2xlVHdvVG9uZUljb24gLz5cbiAgICAgICAgICAgIDwvTWFya2VyPlxuXG4gICAgICAgICAgICB7ZmxlZXQubWFwKChjYXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT17Y2FyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtjYXJbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3I9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXJlY3Rpb25zQ2FyRmlsbGVkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvTWFwPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcGJveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcCIsIk1hcmtlciIsIkJveCIsIlBlcnNvblBpbkNpcmNsZVR3b1RvbmVJY29uIiwiRGlyZWN0aW9uc0NhckZpbGxlZEljb24iLCJmbGVldCIsIk1hcGJveCIsImFjY2Vzc1Rva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01BUEJPWF9BUElfS0VZIiwibWFwYm94QWNjZXNzVG9rZW4iLCJpbml0aWFsVmlld1N0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcFN0eWxlIiwiYW5jaG9yIiwibWFwIiwiY2FyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mapbox.jsx\n"));

/***/ })

});