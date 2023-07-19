"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print() {
  const arr = [];

  const elem1 = { description: 'Feed Dogs', bool: false, number: 1 };
  const elem2 = { description: 'Feed Catss', bool: false, number: 7 };
  const elem3 = { description: 'Feed Sheeps', bool: true, number: 3 };

  arr.push(elem1);
  arr.push(elem2);
  arr.push(elem3);
  arr.sort((a, b) => a.number - b.number);

  arr.forEach((element) => {
    const child = document.createElement('li');
    child.setAttribute('class', 'item itemList');
    if (element.bool) {
      child.innerHTML = `<input class='check' type='checkbox'  checked>
      <label class="itemText">${element.description}</label> <span class="dots">&#8942;</span> `;
    } else {
      child.innerHTML = `<input class='check' type='checkbox'>
      <label class="itemText"> ${element.description} </label>  <span class="dots">&#8942;</span>`;
    }

    document.querySelector('.list').appendChild(child);
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQixtQ0FBbUM7QUFDdkYsTUFBTTtBQUNOO0FBQ0EsaUNBQWlDLHFCQUFxQixvQ0FBb0M7QUFDMUY7O0FBRUE7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50KCkge1xuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBlbGVtMSA9IHsgZGVzY3JpcHRpb246ICdGZWVkIERvZ3MnLCBib29sOiBmYWxzZSwgbnVtYmVyOiAxIH07XG4gIGNvbnN0IGVsZW0yID0geyBkZXNjcmlwdGlvbjogJ0ZlZWQgQ2F0c3MnLCBib29sOiBmYWxzZSwgbnVtYmVyOiA3IH07XG4gIGNvbnN0IGVsZW0zID0geyBkZXNjcmlwdGlvbjogJ0ZlZWQgU2hlZXBzJywgYm9vbDogdHJ1ZSwgbnVtYmVyOiAzIH07XG5cbiAgYXJyLnB1c2goZWxlbTEpO1xuICBhcnIucHVzaChlbGVtMik7XG4gIGFyci5wdXNoKGVsZW0zKTtcbiAgYXJyLnNvcnQoKGEsIGIpID0+IGEubnVtYmVyIC0gYi5udW1iZXIpO1xuXG4gIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbSBpdGVtTGlzdCcpO1xuICAgIGlmIChlbGVtZW50LmJvb2wpIHtcbiAgICAgIGNoaWxkLmlubmVySFRNTCA9IGA8aW5wdXQgY2xhc3M9J2NoZWNrJyB0eXBlPSdjaGVja2JveCcgIGNoZWNrZWQ+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJpdGVtVGV4dFwiPiR7ZWxlbWVudC5kZXNjcmlwdGlvbn08L2xhYmVsPiA8c3BhbiBjbGFzcz1cImRvdHNcIj4mIzg5NDI7PC9zcGFuPiBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZC5pbm5lckhUTUwgPSBgPGlucHV0IGNsYXNzPSdjaGVjaycgdHlwZT0nY2hlY2tib3gnPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiaXRlbVRleHRcIj4gJHtlbGVtZW50LmRlc2NyaXB0aW9ufSA8L2xhYmVsPiAgPHNwYW4gY2xhc3M9XCJkb3RzXCI+JiM4OTQyOzwvc3Bhbj5gO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==