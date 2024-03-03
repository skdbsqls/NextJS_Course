"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/meals/share/page",{

/***/ "(app-pages-browser)/./components/meals/image-picker.js":
/*!******************************************!*\
  !*** ./components/meals/image-picker.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _image_picker_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-picker.module.css */ \"(app-pages-browser)/./components/meals/image-picker.module.css\");\n/* harmony import */ var _image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ImagePicker = (param)=>{\n    let { label, name } = param;\n    _s();\n    const [pickedImage, setPickedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const imageInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const handlePickClick = ()=>{\n        imageInput.current.click();\n    };\n    const handleImageChange = (event)=>{\n        const file = event.target.files[0];\n        if (!file) {\n            setPickedImage(null);\n            return;\n        }\n        const fileReader = new FileReader();\n        fileReader.onload = ()=>{\n            setPickedImage(fileReader.result);\n        };\n        fileReader.readAsDataURL(file);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().picker),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: name,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                        children: [\n                            !pickedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No image picked yet.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                                lineNumber: 37,\n                                columnNumber: 28\n                            }, undefined),\n                            pickedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: pickedImage,\n                                alt: \"The image selected by the user.\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                        type: \"file\",\n                        id: name,\n                        accept: \"image/png, image/jpeg\",\n                        name: name,\n                        ref: imageInput,\n                        // multiple 여러 개를 선택하고자 할 때\n                        onChange: handleImageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        type: \"button\",\n                        onClick: handlePickClick,\n                        children: \"Pick an Image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImagePicker, \"Z3X7y5IH03Qfsb2r+7xDr7PQF0E=\");\n_c = ImagePicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagePicker);\nvar _c;\n$RefreshReg$(_c, \"ImagePicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVhbHMvaW1hZ2UtcGlja2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFeUM7QUFDVjtBQUVpQjtBQUVoRCxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7O0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUE7SUFDOUMsTUFBTVEsYUFBYVQsNkNBQU1BO0lBRXpCLE1BQU1VLGtCQUFrQjtRQUN0QkQsV0FBV0UsT0FBTyxDQUFDQyxLQUFLO0lBQzFCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFbEMsSUFBSSxDQUFDRixNQUFNO1lBQ1RQLGVBQWU7WUFDZjtRQUNGO1FBRUEsTUFBTVUsYUFBYSxJQUFJQztRQUN2QkQsV0FBV0UsTUFBTSxHQUFHO1lBQ2xCWixlQUFlVSxXQUFXRyxNQUFNO1FBQ2xDO1FBRUFILFdBQVdJLGFBQWEsQ0FBQ1A7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV3JCLHdFQUFjOzswQkFDNUIsOERBQUNFO2dCQUFNcUIsU0FBU3BCOzBCQUFPRDs7Ozs7OzBCQUN2Qiw4REFBQ2tCO2dCQUFJQyxXQUFXckIsMEVBQWdCOztrQ0FDOUIsOERBQUNvQjt3QkFBSUMsV0FBV3JCLHlFQUFlOzs0QkFDNUIsQ0FBQ0ksNkJBQWUsOERBQUNzQjswQ0FBRTs7Ozs7OzRCQUNuQnRCLDZCQUNDLDhEQUFDTCxtREFBS0E7Z0NBQ0o0QixLQUFLdkI7Z0NBQ0x3QixLQUFJO2dDQUNKQyxJQUFJOzs7Ozs7Ozs7Ozs7a0NBSVYsOERBQUNDO3dCQUNDVCxXQUFXckIsdUVBQWE7d0JBQ3hCK0IsTUFBSzt3QkFDTEMsSUFBSTdCO3dCQUNKOEIsUUFBTzt3QkFDUDlCLE1BQU1BO3dCQUNOK0IsS0FBSzVCO3dCQUNMLDJCQUEyQjt3QkFDM0I2QixVQUFVekI7Ozs7OztrQ0FHWiw4REFBQzBCO3dCQUNDZixXQUFXckIsd0VBQWM7d0JBQ3pCK0IsTUFBSzt3QkFDTE0sU0FBUzlCO2tDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQTNETU47S0FBQUE7QUE2RE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWFscy9pbWFnZS1waWNrZXIuanM/YzA1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2ltYWdlLXBpY2tlci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEltYWdlUGlja2VyID0gKHsgbGFiZWwsIG5hbWUgfSkgPT4ge1xuICBjb25zdCBbcGlja2VkSW1hZ2UsIHNldFBpY2tlZEltYWdlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBoYW5kbGVQaWNrQ2xpY2sgPSAoKSA9PiB7XG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBzZXRQaWNrZWRJbWFnZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldFBpY2tlZEltYWdlKGZpbGVSZWFkZXIucmVzdWx0KTtcbiAgICB9O1xuXG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGlja2VyfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld30+XG4gICAgICAgICAgeyFwaWNrZWRJbWFnZSAmJiA8cD5ObyBpbWFnZSBwaWNrZWQgeWV0LjwvcD59XG4gICAgICAgICAge3BpY2tlZEltYWdlICYmIChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3BpY2tlZEltYWdlfVxuICAgICAgICAgICAgICBhbHQ9XCJUaGUgaW1hZ2Ugc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXCJcbiAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBpZD17bmFtZX1cbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxuICAgICAgICAgIC8vIG11bHRpcGxlIOyXrOufrCDqsJzrpbwg7ISg7YOd7ZWY6rOg7J6QIO2VoCDrlYxcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgLy8gcmVxdWlyZWQg7J2066+47KeA6rCAIOyEoO2DneuQmOyngCDslYrsnYQg6rK97JqwIGZvcm0g7KCc7LacIOu2iOqwgOuKpVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQaWNrQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBQaWNrIGFuIEltYWdlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVBpY2tlcjtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiY2xhc3NlcyIsIkltYWdlUGlja2VyIiwibGFiZWwiLCJuYW1lIiwicGlja2VkSW1hZ2UiLCJzZXRQaWNrZWRJbWFnZSIsImltYWdlSW5wdXQiLCJoYW5kbGVQaWNrQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVJbWFnZUNoYW5nZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwicGlja2VyIiwiaHRtbEZvciIsImNvbnRyb2xzIiwicHJldmlldyIsInAiLCJzcmMiLCJhbHQiLCJmaWxsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJhY2NlcHQiLCJyZWYiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/meals/image-picker.js\n"));

/***/ })

});