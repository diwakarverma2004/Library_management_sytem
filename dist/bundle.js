/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/RqstBooks.js":
/*!*************************!*\
  !*** ./js/RqstBooks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"./node_modules/webpack/lib/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_diwakarverma_Downloads_Minor_project_node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@firebase/app */ \"./node_modules/@firebase/app/dist/esm/index.esm2017.js\");\n/* harmony import */ var _Users_diwakarverma_Downloads_Minor_project_node_modules_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBRNHN4-796R_PV72zvE9n8FfNtQPIZfRM\",\r\n  authDomain: \"lab-website-4a6be.firebaseapp.com\",\r\n  // databaseURL: \"https://console.firebase.google.com/u/0/project/lab-website-4a6be/firestore/databases/-default-/data/~2FIssuedBookDetail~2F19YG7b75WLllgb7gqbmq\",\r\n  projectId: \"lab-website-4a6be\",\r\n  storageBucket: \"lab-website-4a6be.appspot.com\",\r\n  messagingSenderId: \"470033430724\",\r\n  appId: \"1:470033430724:web:63c7d900da0a6730197191\"\r\n};\r\n\r\n// establish connection\r\n const app = (0,_Users_diwakarverma_Downloads_Minor_project_node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\r\n  \r\n// connection where to service from\r\n const db = (0,_Users_diwakarverma_Downloads_Minor_project_node_modules_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);  \r\n\r\n//collection reference\r\n const colRef = (0,_Users_diwakarverma_Downloads_Minor_project_node_modules_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, 'requested_book')\r\n\r\n// get collection data\r\n;(0,_Users_diwakarverma_Downloads_Minor_project_node_modules_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(colRef)\r\n  .then((snapshot) =>  {\r\n    let requested_book = []\r\n    snapshot.docs.forEach((doc) => {\r\n      requested_book.push({ ...doc.data(), id: doc.id})\r\n    })\r\n    console.log(requested_book)\r\n  })\r\n  .catch(err => {\r\n    console.log(err.message)\r\n  })\r\n  \n\n//# sourceURL=webpack://minor-project/./js/RqstBooks.js?");

/***/ }),

/***/ "./node_modules/@firebase/firestore/dist/index.esm2017.js":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/index.esm2017.js ***!
  \****************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/diwakarverma/Downloads/Minor project/node_modules/@firebase/firestore/dist/index.esm2017.js'\");\n\n//# sourceURL=webpack://minor-project/./node_modules/@firebase/firestore/dist/index.esm2017.js?");

/***/ }),

/***/ "./node_modules/webpack/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/webpack/lib/index.js ***!
  \*******************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/diwakarverma/Downloads/Minor project/node_modules/webpack/lib/index.js'\");\n\n//# sourceURL=webpack://minor-project/./node_modules/webpack/lib/index.js?");

/***/ }),

/***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/diwakarverma/Downloads/Minor project/node_modules/@firebase/app/dist/esm/index.esm2017.js'\");\n\n//# sourceURL=webpack://minor-project/./node_modules/@firebase/app/dist/esm/index.esm2017.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/RqstBooks.js");
/******/ 	
/******/ })()
;