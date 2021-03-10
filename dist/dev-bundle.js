/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_addDots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addDots */ \"./src/modules/addDots.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_photoChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/photoChange */ \"./src/modules/photoChange.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_questionForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/questionForm */ \"./src/modules/questionForm.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('28 march 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // Прокрутка\n\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_3__.default)(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__.default)(); // dots\n\n(0,_modules_addDots__WEBPACK_IMPORTED_MODULE_5__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)(); // change photo on mouseenter/leave\n\n(0,_modules_photoChange__WEBPACK_IMPORTED_MODULE_7__.default)(); // calculator\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_8__.default)(100); //question form\n\n(0,_modules_questionForm__WEBPACK_IMPORTED_MODULE_9__.default)(); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://JSTimer/./src/index.js?");

/***/ }),

/***/ "./src/modules/addDots.js":
/*!********************************!*\
  !*** ./src/modules/addDots.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addDots = function addDots() {\n  var slide = document.querySelectorAll('.portfolio-item');\n  var dotParent = document.querySelector('.portfolio-dots');\n  var dot = \"<li class=\\\"dot\\\"></li>\";\n\n  for (var i = 0; i < slide.length; i++) {\n    dotParent.innerHTML += dot;\n\n    if (i === 0) {\n      dotParent.firstElementChild.classList.add('dot-active');\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDots);\n\n//# sourceURL=webpack://JSTimer/./src/modules/addDots.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcDay = document.querySelector('.calc-day');\n  var calcCount = document.querySelector('.calc-count');\n  var totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0;\n    var countValue = 1;\n    var dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    if (total === 0) {\n      totalValue.textContent = total;\n    } else {\n      var tmp = 1;\n\n      var numberAnimation = function numberAnimation() {\n        var animId = requestAnimationFrame(numberAnimation);\n\n        if (tmp < total) {\n          totalValue.textContent = tmp;\n        } else {\n          totalValue.textContent = total;\n          cancelAnimationFrame(animId);\n        }\n\n        tmp += Math.floor(price * squareValue * dayValue * countValue * 0.03);\n      };\n\n      numberAnimation();\n    }\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('input')) {\n      target.value = target.value.replace(/\\D/, '');\n    }\n  });\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://JSTimer/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours');\n  var timerMinutes = document.querySelector('#timer-minutes');\n  var timerSeconds = document.querySelector('#timer-seconds');\n\n  function addZero(k) {\n    if (k / 10 < 1) {\n      return '0' + k;\n    } else {\n      return k;\n    }\n  }\n\n  ;\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000;\n    var seconds = Math.floor(timeRemaining % 60);\n    var minutes = Math.floor(timeRemaining / 60 % 60);\n    var hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = addZero(timer.hours);\n    timerMinutes.textContent = addZero(timer.minutes);\n    timerSeconds.textContent = addZero(timer.seconds);\n\n    if (timer.timeRemaining <= 0) {\n      clearInterval(intervalID);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  var intervalID = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://JSTimer/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/photoChange.js":
/*!************************************!*\
  !*** ./src/modules/photoChange.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar photoChange = function photoChange() {\n  var command = document.getElementById('command').querySelectorAll('img');\n\n  var changeSrc = function changeSrc(item) {\n    var tmp = item.getAttribute('src');\n    item.setAttribute('src', item.dataset.img);\n    item.dataset.img = tmp;\n  };\n\n  command.forEach(function (item) {\n    item.addEventListener('mouseenter', function () {\n      changeSrc(item);\n    });\n    item.addEventListener('mouseleave', function () {\n      changeSrc(item);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photoChange);\n\n//# sourceURL=webpack://JSTimer/./src/modules/photoChange.js?");

/***/ }),

/***/ "./src/modules/questionForm.js":
/*!*************************************!*\
  !*** ./src/modules/questionForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar questionForm = function questionForm() {\n  var inputForm = document.querySelector('.footer-form-input');\n  var footerInputs = inputForm.querySelectorAll('input');\n  var mainFormInput = document.querySelector('.main-form-input');\n  var mainInputs = mainFormInput.querySelectorAll('input');\n  var modalForm = document.getElementById('form3');\n  var modalInputs = modalForm.querySelectorAll('input');\n\n  var check = function check(item) {\n    if (item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form1-name' || item.getAttribute('id') === 'form3-name') {\n      item.value = item.value.replace(/[^а-яё -%]/ig, '');\n    } else if (item.getAttribute('id') === 'form2-email' || item.getAttribute('id') === 'form1-email' || item.getAttribute('id') === 'form3-email') {\n      item.value = item.value.replace(/[^a-z@_.!~*'-]/ig, '');\n    } else if (item.getAttribute('id') === 'form2-phone' || item.getAttribute('id') === 'form1-phone' || item.getAttribute('id') === 'form3-phone') {\n      item.value = item.value.replace(/[^+0-9]/, '');\n    } else if (item.getAttribute('id') === 'form2-message' || item.getAttribute('id') === 'form1-message' || item.getAttribute('id') === 'form3-message') {\n      item.value = item.value.replace(/[^а-яё0-9 -,.;:!?]/ig, '');\n    }\n  };\n\n  mainFormInput.addEventListener('input', function (event) {\n    var target = event.target;\n    check(target);\n  });\n  inputForm.addEventListener('input', function (event) {\n    var target = event.target;\n    check(target);\n  });\n  modalForm.addEventListener('input', function (event) {\n    var target = event.target;\n    check(target);\n  });\n\n  var inputCheck = function inputCheck(item) {\n    item.addEventListener('blur', function () {\n      check(item);\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.replace(/[-]+/g, '-');\n      item.value = item.value.replace(/^[\\s+]/, '');\n      item.value = item.value.replace(/[\\s+]$/, '');\n\n      if (item.getAttribute('id') === 'form2-name' || item.getAttribute('id') === 'form1-name' || item.getAttribute('id') === 'form3-name') {\n        item.value = item.value.replace(/\\S+/gi, function (match) {\n          return match[0].toUpperCase() + match.substr(1);\n        });\n      }\n    });\n  };\n\n  mainInputs.forEach(function (item) {\n    inputCheck(item);\n  });\n  footerInputs.forEach(function (item) {\n    inputCheck(item);\n  });\n  modalInputs.forEach(function (item) {\n    inputCheck(item);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionForm);\n\n//# sourceURL=webpack://JSTimer/./src/modules/questionForm.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var menuItems = document.querySelectorAll('menu>ul>li>a');\n  var mainBlockLink = document.querySelector('main>a');\n\n  function getScroll(item) {\n    var itemHref = item.getAttribute('href');\n    document.querySelector(itemHref).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  }\n\n  mainBlockLink.addEventListener('click', function (elem) {\n    elem.preventDefault();\n    getScroll(mainBlockLink);\n  });\n  menuItems.forEach(function (item) {\n    item.addEventListener('click', function (elem) {\n      elem.preventDefault();\n      getScroll(item);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://JSTimer/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var style = document.createElement('style');\n  style.textContent = \"\\n.sk-three-bounce {\\n  width: 8em;\\n  margin: auto;\\n  text-align: center;\\n}\\n.sk-three-bounce .sk-child {\\n  width: 2em;\\n  height: 2em;\\n  background-color: #337ab7;\\n  border-radius: 100%;\\n  display: inline-block;\\n  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\\n  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\\n}\\n.sk-three-bounce .sk-bounce-1 {\\n  -webkit-animation-delay: -0.32s;\\n  animation-delay: -0.32s;\\n}\\n.sk-three-bounce .sk-bounce-2 {\\n  -webkit-animation-delay: -0.16s;\\n  animation-delay: -0.16s;\\n}\\n\\n@keyframes sk-three-bounce {\\n  0%, 80%, 100% {\\n  transform: scale(0);\\n  }\\n  40% {\\n  transform: scale(1.0);\\n  }\\n}\\n\";\n  var errorMsg = 'Что-то пошло не так...';\n  var loadMsg = 'Загрузка...';\n  var successMsg = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form1 = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var form3 = document.getElementById('form3');\n  var statusMsg = document.createElement('div');\n  statusMsg.style.cssText = 'font-size: 2rem; color: white;';\n\n  var formEvent = function formEvent(form) {\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMsg);\n      var formData = new FormData(form);\n      var body = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          body[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      document.head.appendChild(style);\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMsg.textContent = successMsg;\n      })[\"catch\"](function (error) {\n        statusMsg.textContent = errorMsg;\n        console.error(error);\n      });\n      form.querySelectorAll('input').forEach(function (item) {\n        item.value = '';\n      });\n    });\n  };\n\n  formEvent(form1);\n  formEvent(form2);\n  formEvent(form3);\n\n  var postData = function postData(body) {\n    statusMsg.innerHTML = \"\\n          <div class=\\\"sk-three-bounce\\\">\\n              <div class=\\\"sk-bounce-1 sk-child\\\"></div>\\n              <div class=\\\"sk-bounce-2 sk-child\\\"></div>\\n              <div class=\\\"sk-bounce-3 sk-child\\\"></div>\\n          </div>\\n          \";\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://JSTimer/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item');\n  var dot = document.querySelectorAll('.dot');\n  var slider = document.querySelector('.portfolio-content');\n  var interval;\n  var currentSlide = 0;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (item, index) {\n        if (item === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://JSTimer/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header');\n  var tab = tabHeader.querySelectorAll('.service-header-tab');\n  var tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target.classList.contains('service-header-tab')) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://JSTimer/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      handlerMenu();\n    } else if (target.tagName === 'A' && target.closest('menu')) {\n      handlerMenu();\n    } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://JSTimer/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var popupContent = document.querySelector('.popup-content');\n  var i = -42;\n  var iterator = 2;\n  var requestId;\n\n  function showPopUp() {\n    requestId = requestAnimationFrame(showPopUp);\n    popup.style.display = 'block';\n    popupContent.style.left = \"\".concat(i, \"rem\");\n    i += iterator;\n\n    if (popupContent.offsetLeft / document.documentElement.clientWidth > 0.38) {\n      popupContent.style.left = \"38%\";\n      cancelAnimationFrame(requestId);\n    }\n  }\n\n  ;\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      if (document.documentElement.clientWidth >= 768) {\n        i = -50;\n        requestId = requestAnimationFrame(showPopUp);\n      } else {\n        popupContent.style.left = \"\";\n        popup.style.display = 'block';\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://JSTimer/./src/modules/togglePopUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;