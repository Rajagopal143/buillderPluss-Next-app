"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/workspace/productlist/page",{

/***/ "(app-pages-browser)/./app/components/ProductCard.tsx":
/*!****************************************!*\
  !*** ./app/components/ProductCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contextapi_blueprintContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contextapi/blueprintContext */ \"(app-pages-browser)/./contextapi/blueprintContext.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProductCard = (product)=>{\n    _s();\n    const { blueprintData, updateItemModelUrl } = (0,_contextapi_blueprintContext__WEBPACK_IMPORTED_MODULE_1__.useBlueprintContext)();\n    const [updatedData, setUpdatedData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(blueprintData); // Store updated data\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setUpdatedData(blueprintData); // Update component state when blueprint data changes\n        console.log(JSON.stringify(updatedData));\n    }, [\n        blueprintData\n    ]);\n    const handleChangeUrl = (url)=>{\n        updateItemModelUrl(8, String(url));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-72 h-80 rounded  shadow-lg p-1 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"w-full h-[60%] object-cover mx-auto\",\n                src: product.image,\n                alt: product.name,\n                width: 100,\n                height: 0\n            }, void 0, false, {\n                fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-2 pt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-[12px] \",\n                    children: product.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"color\"\n            }, void 0, false, {\n                fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            \"-\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"white\"\n            }, void 0, false, {\n                fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-2 flex items-center justify-between pb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"inline-block bg-gray-200 rounded-full px-2 py-2 text-[12px] font-semibold text-gray-700 mr-2 \",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white px-1 py-1 rounded\",\n                        onClick: ()=>handleChangeUrl(product.filepath),\n                        children: \"Apply\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\BuilderPluss\\\\projects\\\\buillderPluss-Next-app\\\\app\\\\components\\\\ProductCard.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"3hs+K2g1zxlvWpLncRgW4DzgL64=\", false, function() {\n    return [\n        _contextapi_blueprintContext__WEBPACK_IMPORTED_MODULE_1__.useBlueprintContext\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRTtBQUN0QztBQUNvQjtBQUVsRCxNQUFNSyxjQUFjLENBQUNDOztJQUNuQixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR1IsaUZBQW1CQTtJQUNuRSxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUNHLGdCQUFnQixxQkFBcUI7SUFFcEZKLGdEQUFTQSxDQUFDO1FBQ1JPLGVBQWVILGdCQUFnQixxREFBcUQ7UUFDcEZJLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDTDtJQUM3QixHQUFHO1FBQUNGO0tBQWM7SUFFbEIsTUFBTVEsa0JBQWtCLENBQUNDO1FBQ3ZCUixtQkFBbUIsR0FBR1MsT0FBT0Q7SUFDL0I7SUFDRSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNsQixrREFBS0E7Z0JBQ0prQixXQUFVO2dCQUNWQyxLQUFLZCxRQUFRZSxLQUFLO2dCQUNsQkMsS0FBS2hCLFFBQVFpQixJQUFJO2dCQUNqQkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQTBCYixRQUFRaUIsSUFBSTs7Ozs7Ozs7Ozs7MEJBRXZELDhEQUFDRzswQkFBSzs7Ozs7O1lBQVk7MEJBQUMsOERBQUNBOzBCQUFLOzs7Ozs7MEJBQ3pCLDhEQUFDUjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNPO3dCQUFLUCxXQUFVOzs0QkFBZ0c7NEJBQzVHYixRQUFRcUIsS0FBSzs7Ozs7OztrQ0FFakIsOERBQUNDO3dCQUNDVCxXQUFVO3dCQUNWVSxTQUFTLElBQU1kLGdCQUFnQlQsUUFBUXdCLFFBQVE7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQXJDTXpCOztRQUMwQ0wsNkVBQW1CQTs7O0tBRDdESztBQXVDTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3g/NGZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VCbHVlcHJpbnRDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0YXBpL2JsdWVwcmludENvbnRleHQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkID0gKHByb2R1Y3Q6IE9iamVjdCB8IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgYmx1ZXByaW50RGF0YSwgdXBkYXRlSXRlbU1vZGVsVXJsIH0gPSB1c2VCbHVlcHJpbnRDb250ZXh0KCk7XHJcbmNvbnN0IFt1cGRhdGVkRGF0YSwgc2V0VXBkYXRlZERhdGFdID0gdXNlU3RhdGUoYmx1ZXByaW50RGF0YSk7IC8vIFN0b3JlIHVwZGF0ZWQgZGF0YVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBzZXRVcGRhdGVkRGF0YShibHVlcHJpbnREYXRhKTsgLy8gVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSB3aGVuIGJsdWVwcmludCBkYXRhIGNoYW5nZXNcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1cGRhdGVkRGF0YSkpO1xyXG59LCBbYmx1ZXByaW50RGF0YV0pO1xyXG5cclxuY29uc3QgaGFuZGxlQ2hhbmdlVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgdXBkYXRlSXRlbU1vZGVsVXJsKDgsIFN0cmluZyh1cmwpKTtcclxufTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03MiBoLTgwIHJvdW5kZWQgIHNoYWRvdy1sZyBwLTEgXCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs2MCVdIG9iamVjdC1jb3ZlciBteC1hdXRvXCJcclxuICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICBoZWlnaHQ9ezB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMTJweF0gXCI+e3Byb2R1Y3QubmFtZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuPmNvbG9yPC9zcGFuPi08c3Bhbj53aGl0ZTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0yXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0yIHB5LTIgdGV4dC1bMTJweF0gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1yLTIgXCI+XHJcbiAgICAgICAgICAke3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcHgtMSBweS0xIHJvdW5kZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlVXJsKHByb2R1Y3QuZmlsZXBhdGgpfT5cclxuICAgICAgICAgIEFwcGx5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRcclxuIl0sIm5hbWVzIjpbInVzZUJsdWVwcmludENvbnRleHQiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJibHVlcHJpbnREYXRhIiwidXBkYXRlSXRlbU1vZGVsVXJsIiwidXBkYXRlZERhdGEiLCJzZXRVcGRhdGVkRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2hhbmdlVXJsIiwidXJsIiwiU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiZmlsZXBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProductCard.tsx\n"));

/***/ })

});