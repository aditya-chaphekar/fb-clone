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
  databaseURL: "https://fb-clone-f914a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fb-clone-f914a",
  storageBucket: "fb-clone-f914a.appspot.com",
  messagingSenderId: "934386197099",
  appId: "1:934386197099:web:2db4ee6b511f66c6be072e"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImZpcmViYXNlIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIiwic3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUUseUNBRGE7QUFFckJDLFlBQVUsRUFBRSxnQ0FGUztBQUdyQkMsYUFBVyxFQUNULDBFQUptQjtBQUtyQkMsV0FBUyxFQUFFLGdCQUxVO0FBTXJCQyxlQUFhLEVBQUUsNEJBTk07QUFPckJDLG1CQUFpQixFQUFFLGNBUEU7QUFRckJDLE9BQUssRUFBRTtBQVJjLENBQXZCO0FBV0EsSUFBTUMsR0FBRyxHQUFHLENBQUNDLHlEQUFELEdBQ1JBLDJEQUFBLENBQXVCVCxjQUF2QixDQURRLEdBRVJTLGlEQUFBLEVBRko7QUFJQSxJQUFNQyxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csU0FBSixFQUFYO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNJLElBQUosRUFBYjtBQUNBLElBQU1DLE9BQU8sR0FBR0oscURBQUEsRUFBaEI7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDJlZWI3OTkzNzlkNjY0NTJhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9mYWNlYm9vay0yLTZlYjE5LmZpcmViYXNlYXBwLmNvbS9fXy9hdXRoL2hhbmRsZXJcclxuXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJoWTZ5UW1JWEZVRlB0Q3N2MWZsek1jTmlXRXNzM3VZY1wiLFxyXG4gIGF1dGhEb21haW46IFwiZmItY2xvbmUtZjkxNGEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6XHJcbiAgICBcImh0dHBzOi8vZmItY2xvbmUtZjkxNGEtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxyXG4gIHByb2plY3RJZDogXCJmYi1jbG9uZS1mOTE0YVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZmItY2xvbmUtZjkxNGEuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5MzQzODYxOTcwOTlcIixcclxuICBhcHBJZDogXCIxOjkzNDM4NjE5NzA5OTp3ZWI6MmRiNGVlNmI1MTFmNjZjNmJlMDcyZVwiLFxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoXHJcbiAgPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG4gIDogZmlyZWJhc2UuYXBwKCk7XHJcblxyXG5jb25zdCBkYiA9IGFwcC5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgc3RvcmFnZSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9