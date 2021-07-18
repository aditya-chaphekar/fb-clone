self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": function() { return /* binding */ auth; },
/* harmony export */   "db": function() { return /* binding */ db; },
/* harmony export */   "storage": function() { return /* binding */ storage; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler


var firebaseConfig = {
  apiKey: "AIzaSyBhY6yQmIXFUFPtCsv1flzMcNiWEss3uYc",
  authDomain: "fb-clone-f914a.firebaseapp.com",
  projectId: "facebook-2-6eb19",
  storageBucket: "facebook-2-6eb19.appspot.com",
  messagingSenderId: "148443188484",
  appId: "1:148443188484:web:d3a2698e685c6264361451"
};
var app = !firebase__WEBPACK_IMPORTED_MODULE_0__.default.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0__.default.app();
var db = app.firestore();
var auth = app.auth();
var storage = firebase__WEBPACK_IMPORTED_MODULE_0__.default.storage();


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJmaXJlYmFzZSIsImRiIiwiZmlyZXN0b3JlIiwiYXV0aCIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRztBQUNyQkMsUUFBTSxFQUFFLHlDQURhO0FBRXJCQyxZQUFVLEVBQUUsZ0NBRlM7QUFHckJDLFdBQVMsRUFBRSxrQkFIVTtBQUlyQkMsZUFBYSxFQUFFLDhCQUpNO0FBS3JCQyxtQkFBaUIsRUFBRSxjQUxFO0FBTXJCQyxPQUFLLEVBQUU7QUFOYyxDQUF2QjtBQVNBLElBQU1DLEdBQUcsR0FBRyxDQUFDQyx5REFBRCxHQUNSQSwyREFBQSxDQUF1QlIsY0FBdkIsQ0FEUSxHQUVSUSxpREFBQSxFQUZKO0FBSUEsSUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLFNBQUosRUFBWDtBQUNBLElBQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSSxJQUFKLEVBQWI7QUFDQSxJQUFNQyxPQUFPLEdBQUdKLHFEQUFBLEVBQWhCO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDhmZGJiMjc1ZmFjM2M4MmZiNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZmFjZWJvb2stMi02ZWIxOS5maXJlYmFzZWFwcC5jb20vX18vYXV0aC9oYW5kbGVyXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCaFk2eVFtSVhGVUZQdENzdjFmbHpNY05pV0VzczN1WWNcIixcclxuICBhdXRoRG9tYWluOiBcImZiLWNsb25lLWY5MTRhLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJmYWNlYm9vay0yLTZlYjE5XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJmYWNlYm9vay0yLTZlYjE5LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTQ4NDQzMTg4NDg0XCIsXHJcbiAgYXBwSWQ6IFwiMToxNDg0NDMxODg0ODQ6d2ViOmQzYTI2OThlNjg1YzYyNjQzNjE0NTFcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aFxyXG4gID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcclxuICA6IGZpcmViYXNlLmFwcCgpO1xyXG5cclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBhcHAuYXV0aCgpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIsIHN0b3JhZ2UgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==