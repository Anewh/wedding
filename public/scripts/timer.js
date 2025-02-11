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

/***/ "./front/scripts/timer.js":
/*!********************************!*\
  !*** ./front/scripts/timer.js ***!
  \********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    const elTimerHeader = document.querySelector('.timer__header');\r\n\r\n    // Установите конечную дату\r\n    const deadline = new Date('2025-08-16T15:30:00');\r\n\r\n    const elDays = document.querySelector('.timer__days');\r\n    const elHours = document.querySelector('.timer__hours');\r\n    const elMinutes = document.querySelector('.timer__minutes');\r\n    const elSeconds = document.querySelector('.timer__seconds');\r\n\r\n    // Функция склонения числительных\r\n    const declensionNum = (num, words) => {\r\n        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];\r\n    };\r\n\r\n    // Функция обновления таймера\r\n    const updateTimer = () => {\r\n        const now = new Date();\r\n        if (deadline - now < 0) {\r\n            elTimerHeader.textContent = 'После начала нашей свадьбы прошло:';\r\n        }\r\n\r\n        const diff = Math.abs(deadline - now);\r\n\r\n        const days = Math.floor(diff / (1000 * 60 * 60 * 24));\r\n        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);\r\n        const minutes = Math.floor((diff / (1000 * 60)) % 60);\r\n        const seconds = Math.floor((diff / 1000) % 60);\r\n\r\n        elDays.textContent = String(days).padStart(2, '0');\r\n        elHours.textContent = String(hours).padStart(2, '0');\r\n        elMinutes.textContent = String(minutes).padStart(2, '0');\r\n        elSeconds.textContent = String(seconds).padStart(2, '0');\r\n\r\n        elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);\r\n        elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);\r\n        elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);\r\n        elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);\r\n    };\r\n\r\n    // Запустите таймер\r\n    updateTimer();\r\n    const timerId = setInterval(updateTimer, 1000);\r\n});\n\n//# sourceURL=webpack://wedding/./front/scripts/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./front/scripts/timer.js"]();
/******/ 	
/******/ })()
;