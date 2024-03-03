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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _image_picker_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-picker.module.css */ \"(app-pages-browser)/./components/meals/image-picker.module.css\");\n/* harmony import */ var _image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ImagePicker = (param)=>{\n    let { label, name } = param;\n    _s();\n    const [pickedImage, setPickedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const imageInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const handlePickClick = ()=>{\n        imageInput.current.click();\n    };\n    const handleImageChange = (event)=>{\n        const file = event.target.files[0];\n        if (!file) {\n            return;\n        }\n        const fileReader = new FileReader();\n        fileReader.onload = ()=>{\n            setPickedImage(fileReader.result);\n        };\n        fileReader.readAsDataURL(file);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().picker),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: name,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                        children: [\n                            !pickedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No image picked yet.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                                lineNumber: 36,\n                                columnNumber: 28\n                            }, undefined),\n                            pickedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: pickedImage,\n                                alt: \"The image selected by the user.\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                        type: \"file\",\n                        id: name,\n                        accept: \"image/png, image/jpeg\",\n                        name: name,\n                        ref: imageInput,\n                        // multiple 여러 개를 선택하고자 할 때\n                        onChange: handleImageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_image_picker_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        type: \"button\",\n                        onClick: handlePickClick,\n                        children: \"Pick an Image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nayunbin/Desktop/NextJS_Course/components/meals/image-picker.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImagePicker, \"Z3X7y5IH03Qfsb2r+7xDr7PQF0E=\");\n_c = ImagePicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagePicker);\nvar _c;\n$RefreshReg$(_c, \"ImagePicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVhbHMvaW1hZ2UtcGlja2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFeUM7QUFDVjtBQUVpQjtBQUVoRCxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7O0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUE7SUFDOUMsTUFBTVEsYUFBYVQsNkNBQU1BO0lBRXpCLE1BQU1VLGtCQUFrQjtRQUN0QkQsV0FBV0UsT0FBTyxDQUFDQyxLQUFLO0lBQzFCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFbEMsSUFBSSxDQUFDRixNQUFNO1lBQ1Q7UUFDRjtRQUVBLE1BQU1HLGFBQWEsSUFBSUM7UUFDdkJELFdBQVdFLE1BQU0sR0FBRztZQUNsQlosZUFBZVUsV0FBV0csTUFBTTtRQUNsQztRQUVBSCxXQUFXSSxhQUFhLENBQUNQO0lBQzNCO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdyQix3RUFBYzs7MEJBQzVCLDhEQUFDRTtnQkFBTXFCLFNBQVNwQjswQkFBT0Q7Ozs7OzswQkFDdkIsOERBQUNrQjtnQkFBSUMsV0FBV3JCLDBFQUFnQjs7a0NBQzlCLDhEQUFDb0I7d0JBQUlDLFdBQVdyQix5RUFBZTs7NEJBQzVCLENBQUNJLDZCQUFlLDhEQUFDc0I7MENBQUU7Ozs7Ozs0QkFDbkJ0Qiw2QkFDQyw4REFBQ0wsbURBQUtBO2dDQUNKNEIsS0FBS3ZCO2dDQUNMd0IsS0FBSTtnQ0FDSkMsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUlWLDhEQUFDQzt3QkFDQ1QsV0FBV3JCLHVFQUFhO3dCQUN4QitCLE1BQUs7d0JBQ0xDLElBQUk3Qjt3QkFDSjhCLFFBQU87d0JBQ1A5QixNQUFNQTt3QkFDTitCLEtBQUs1Qjt3QkFDTCwyQkFBMkI7d0JBQzNCNkIsVUFBVXpCOzs7Ozs7a0NBR1osOERBQUMwQjt3QkFDQ2YsV0FBV3JCLHdFQUFjO3dCQUN6QitCLE1BQUs7d0JBQ0xNLFNBQVM5QjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0ExRE1OO0tBQUFBO0FBNEROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVhbHMvaW1hZ2UtcGlja2VyLmpzP2MwNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pbWFnZS1waWNrZXIubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBJbWFnZVBpY2tlciA9ICh7IGxhYmVsLCBuYW1lIH0pID0+IHtcbiAgY29uc3QgW3BpY2tlZEltYWdlLCBzZXRQaWNrZWRJbWFnZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlUGlja0NsaWNrID0gKCkgPT4ge1xuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblxuICAgIGlmICghZmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2V0UGlja2VkSW1hZ2UoZmlsZVJlYWRlci5yZXN1bHQpO1xuICAgIH07XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5waWNrZXJ9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3fT5cbiAgICAgICAgICB7IXBpY2tlZEltYWdlICYmIDxwPk5vIGltYWdlIHBpY2tlZCB5ZXQuPC9wPn1cbiAgICAgICAgICB7cGlja2VkSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cGlja2VkSW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD1cIlRoZSBpbWFnZSBzZWxlY3RlZCBieSB0aGUgdXNlci5cIlxuICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XG4gICAgICAgICAgLy8gbXVsdGlwbGUg7Jes65+sIOqwnOulvCDshKDtg53tlZjqs6DsnpAg7ZWgIOuVjFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cbiAgICAgICAgICAvLyByZXF1aXJlZCDsnbTrr7jsp4DqsIAg7ISg7YOd65CY7KeAIOyViuydhCDqsr3smrAgZm9ybSDsoJzstpwg67aI6rCA64qlXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBpY2tDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFBpY2sgYW4gSW1hZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlUGlja2VyO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJjbGFzc2VzIiwiSW1hZ2VQaWNrZXIiLCJsYWJlbCIsIm5hbWUiLCJwaWNrZWRJbWFnZSIsInNldFBpY2tlZEltYWdlIiwiaW1hZ2VJbnB1dCIsImhhbmRsZVBpY2tDbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJwaWNrZXIiLCJodG1sRm9yIiwiY29udHJvbHMiLCJwcmV2aWV3IiwicCIsInNyYyIsImFsdCIsImZpbGwiLCJpbnB1dCIsInR5cGUiLCJpZCIsImFjY2VwdCIsInJlZiIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/meals/image-picker.js\n"));

/***/ })

});