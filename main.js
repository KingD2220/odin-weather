/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/CSS/styles.css":
/*!**********************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/CSS/styles.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    color: var(--font-main);
    font-family: 'Roboto', serif;
    font-size: 1.15rem;
    margin: 0px;
    padding: 0px;
    line-height: 1.6rem;
}

:root {
    --background-main: #18181b;
    --background-accent: #27272a;
    --font-main: #fafafa;
    --font-accent: #a1a1aa;
    --font-darker: #e4e4e7;
    --button-hover: #3f3f46;
    --card-border-radius: 18px;
}

h3 {
    position: absolute;
    top: -35px;
    left: 5px;
    color: var(--font-accent);
    font-weight: 500;
}

.feelslike, .high-low {
    color: var(--font-accent);
}

body {
    background-color: var(--background-main);
    height: 100vh;
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 1fr 8fr;
    min-width: 1400px;
}

h1 {
    font-size: 2rem;
}

.input-container {
    place-self: center end;
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

button  {
    border-radius: 12px;
    height: 50px;
    width: 87px;
    border: none;
    background-color: var(--background-accent);
    color: var(--font-accent);
}

button:hover {
    background-color: var(--button-hover);
}

input {
    border-radius: 15px;
    height: 50px;
    width: 400px;
    padding-left: 15px;
    padding-right: 15px;
    border: none;
    background-color: var(--background-accent);
}

input:focus {
    outline: none;
}

.main-container {
    width: max(1300px, 70vw);
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 350px 350px;
    gap: 50px;
    margin-top: 30px;
}

.current-container {
    position: relative;
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    background-color: var(--background-accent);
    border-radius: var(--card-border-radius);
    padding: 20px;
    grid-row: 1;
}

.feelslike {
    font-size: 1rem;
}

i {
    font-size: 2.3rem;
}

.precip-icon {
    font-size: 1.15rem;
}

.precip {
    display: flex;
    gap: 10px;
}

p.temp {
    font-size: 1.7rem;
}

.flex-left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.flex-left > * {
    font-size: 3.1rem;
    font-weight: bold;
}

.flex-right > * {
    font-size: 1.2rem;
}

.flex-right > .conditions {
    font-size: 1.4rem;
    margin-bottom: 10px;
}

.conditions {
    font-weight: bold;
}

.date {
    color: var(--font-accent);
}

.hourly-container {
    position: relative;
    display: grid;
    background-color: var(--background-accent);
    border-radius: var(--card-border-radius);
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 25px;
    padding: 40px;
}

.daily-container {
    position: relative;
    display: grid;
    background-color: var(--background-accent);
    border-radius: var(--card-border-radius);
    grid-column: 1/-1;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 25px;
    padding: 40px;
}

.precip {
    display: flex;
    align-items: center;
}

.precip > p, .precip > i {
    color: var(--font-darker);
}

div.day, div.hour {
    background-color: var(--background-main);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: var(--card-border-radius);
}

.date-container {
    text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/CSS/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,4BAA4B;IAC5B,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,4BAA4B;IAC5B,oBAAoB;IACpB,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wCAAwC;IACxC,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,0CAA0C;IAC1C,wCAAwC;IACxC,aAAa;IACb,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,wCAAwC;IACxC,0DAA0D;IAC1D,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,wCAAwC;IACxC,iBAAiB;IACjB,0DAA0D;IAC1D,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    box-sizing: border-box;\n    color: var(--font-main);\n    font-family: 'Roboto', serif;\n    font-size: 1.15rem;\n    margin: 0px;\n    padding: 0px;\n    line-height: 1.6rem;\n}\n\n:root {\n    --background-main: #18181b;\n    --background-accent: #27272a;\n    --font-main: #fafafa;\n    --font-accent: #a1a1aa;\n    --font-darker: #e4e4e7;\n    --button-hover: #3f3f46;\n    --card-border-radius: 18px;\n}\n\nh3 {\n    position: absolute;\n    top: -35px;\n    left: 5px;\n    color: var(--font-accent);\n    font-weight: 500;\n}\n\n.feelslike, .high-low {\n    color: var(--font-accent);\n}\n\nbody {\n    background-color: var(--background-main);\n    height: 100vh;\n    display: grid;\n    justify-content: center;\n    grid-template-rows: 1fr 1fr 8fr;\n    min-width: 1400px;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\n.input-container {\n    place-self: center end;\n    display: flex;\n    gap: 15px;\n    margin-top: 20px;\n}\n\nbutton  {\n    border-radius: 12px;\n    height: 50px;\n    width: 87px;\n    border: none;\n    background-color: var(--background-accent);\n    color: var(--font-accent);\n}\n\nbutton:hover {\n    background-color: var(--button-hover);\n}\n\ninput {\n    border-radius: 15px;\n    height: 50px;\n    width: 400px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: none;\n    background-color: var(--background-accent);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.main-container {\n    width: max(1300px, 70vw);\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: 350px 350px;\n    gap: 50px;\n    margin-top: 30px;\n}\n\n.current-container {\n    position: relative;\n    height: 310px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    background-color: var(--background-accent);\n    border-radius: var(--card-border-radius);\n    padding: 20px;\n    grid-row: 1;\n}\n\n.feelslike {\n    font-size: 1rem;\n}\n\ni {\n    font-size: 2.3rem;\n}\n\n.precip-icon {\n    font-size: 1.15rem;\n}\n\n.precip {\n    display: flex;\n    gap: 10px;\n}\n\np.temp {\n    font-size: 1.7rem;\n}\n\n.flex-left {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n.flex-left > * {\n    font-size: 3.1rem;\n    font-weight: bold;\n}\n\n.flex-right > * {\n    font-size: 1.2rem;\n}\n\n.flex-right > .conditions {\n    font-size: 1.4rem;\n    margin-bottom: 10px;\n}\n\n.conditions {\n    font-weight: bold;\n}\n\n.date {\n    color: var(--font-accent);\n}\n\n.hourly-container {\n    position: relative;\n    display: grid;\n    background-color: var(--background-accent);\n    border-radius: var(--card-border-radius);\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    gap: 25px;\n    padding: 40px;\n}\n\n.daily-container {\n    position: relative;\n    display: grid;\n    background-color: var(--background-accent);\n    border-radius: var(--card-border-radius);\n    grid-column: 1/-1;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    gap: 25px;\n    padding: 40px;\n}\n\n.precip {\n    display: flex;\n    align-items: center;\n}\n\n.precip > p, .precip > i {\n    color: var(--font-darker);\n}\n\ndiv.day, div.hour {\n    background-color: var(--background-main);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    border-radius: var(--card-border-radius);\n}\n\n.date-container {\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/CSS/weather-icons.css":
/*!*****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/CSS/weather-icons.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.eot */ "./src/font/weathericons-regular-webfont.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.woff2 */ "./src/font/weathericons-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.woff */ "./src/font/weathericons-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.ttf */ "./src/font/weathericons-regular-webfont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.svg */ "./src/font/weathericons-regular-webfont.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#weather_iconsregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 *  Weather Icons 2.0.10
 *  Updated November 1, 2020
 *  Weather themed icons for Bootstrap
 *  Author - Erik Flowers - erik@helloerik.com
 *  Email: erik@helloerik.com
 *  Twitter: http://twitter.com/Erik_UX
 *  ------------------------------------------------------------------------------
 *  Maintained at http://erikflowers.github.io/weather-icons
 *
 *  License
 *  ------------------------------------------------------------------------------
 *  - Font licensed under SIL OFL 1.1 -
 *    http://scripts.sil.org/OFL
 *  - CSS, SCSS and LESS are licensed under MIT License -
 *    http://opensource.org/licenses/mit-license.html
 *  - Documentation licensed under CC BY 3.0 -
 *    http://creativecommons.org/licenses/by/3.0/
 *  - Inspired by and works great as a companion with Font Awesome
 *    "Font Awesome by Dave Gandy - http://fontawesome.io"
 */
@font-face {
  font-family: 'weathericons';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff'), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype'), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('svg');
  font-weight: normal;
  font-style: normal;
}
.wi {
  display: inline-block;
  font-family: 'weathericons';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wi-fw {
  text-align: center;
  width: 1.4em;
}
.wi-rotate-90 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.wi-rotate-180 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.wi-rotate-270 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.wi-flip-horizontal {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
  -webkit-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.wi-flip-vertical {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);
  -webkit-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
.wi-day-sunny:before {
  content: "\\f00d";
}
.wi-day-cloudy:before {
  content: "\\f002";
}
.wi-day-cloudy-gusts:before {
  content: "\\f000";
}
.wi-day-cloudy-windy:before {
  content: "\\f001";
}
.wi-day-fog:before {
  content: "\\f003";
}
.wi-day-hail:before {
  content: "\\f004";
}
.wi-day-haze:before {
  content: "\\f0b6";
}
.wi-day-lightning:before {
  content: "\\f005";
}
.wi-day-rain:before {
  content: "\\f008";
}
.wi-day-rain-mix:before {
  content: "\\f006";
}
.wi-day-rain-wind:before {
  content: "\\f007";
}
.wi-day-showers:before {
  content: "\\f009";
}
.wi-day-sleet:before {
  content: "\\f0b2";
}
.wi-day-sleet-storm:before {
  content: "\\f068";
}
.wi-day-snow:before {
  content: "\\f00a";
}
.wi-day-snow-thunderstorm:before {
  content: "\\f06b";
}
.wi-day-snow-wind:before {
  content: "\\f065";
}
.wi-day-sprinkle:before {
  content: "\\f00b";
}
.wi-day-storm-showers:before {
  content: "\\f00e";
}
.wi-day-sunny-overcast:before {
  content: "\\f00c";
}
.wi-day-thunderstorm:before {
  content: "\\f010";
}
.wi-day-windy:before {
  content: "\\f085";
}
.wi-solar-eclipse:before {
  content: "\\f06e";
}
.wi-hot:before {
  content: "\\f072";
}
.wi-day-cloudy-high:before {
  content: "\\f07d";
}
.wi-day-light-wind:before {
  content: "\\f0c4";
}
.wi-night-clear:before {
  content: "\\f02e";
}
.wi-night-alt-cloudy:before {
  content: "\\f086";
}
.wi-night-alt-cloudy-gusts:before {
  content: "\\f022";
}
.wi-night-alt-cloudy-windy:before {
  content: "\\f023";
}
.wi-night-alt-hail:before {
  content: "\\f024";
}
.wi-night-alt-lightning:before {
  content: "\\f025";
}
.wi-night-alt-rain:before {
  content: "\\f028";
}
.wi-night-alt-rain-mix:before {
  content: "\\f026";
}
.wi-night-alt-rain-wind:before {
  content: "\\f027";
}
.wi-night-alt-showers:before {
  content: "\\f029";
}
.wi-night-alt-sleet:before {
  content: "\\f0b4";
}
.wi-night-alt-sleet-storm:before {
  content: "\\f06a";
}
.wi-night-alt-snow:before {
  content: "\\f02a";
}
.wi-night-alt-snow-thunderstorm:before {
  content: "\\f06d";
}
.wi-night-alt-snow-wind:before {
  content: "\\f067";
}
.wi-night-alt-sprinkle:before {
  content: "\\f02b";
}
.wi-night-alt-storm-showers:before {
  content: "\\f02c";
}
.wi-night-alt-thunderstorm:before {
  content: "\\f02d";
}
.wi-night-cloudy:before {
  content: "\\f031";
}
.wi-night-cloudy-gusts:before {
  content: "\\f02f";
}
.wi-night-cloudy-windy:before {
  content: "\\f030";
}
.wi-night-fog:before {
  content: "\\f04a";
}
.wi-night-hail:before {
  content: "\\f032";
}
.wi-night-lightning:before {
  content: "\\f033";
}
.wi-night-partly-cloudy:before {
  content: "\\f083";
}
.wi-night-rain:before {
  content: "\\f036";
}
.wi-night-rain-mix:before {
  content: "\\f034";
}
.wi-night-rain-wind:before {
  content: "\\f035";
}
.wi-night-showers:before {
  content: "\\f037";
}
.wi-night-sleet:before {
  content: "\\f0b3";
}
.wi-night-sleet-storm:before {
  content: "\\f069";
}
.wi-night-snow:before {
  content: "\\f038";
}
.wi-night-snow-thunderstorm:before {
  content: "\\f06c";
}
.wi-night-snow-wind:before {
  content: "\\f066";
}
.wi-night-sprinkle:before {
  content: "\\f039";
}
.wi-night-storm-showers:before {
  content: "\\f03a";
}
.wi-night-thunderstorm:before {
  content: "\\f03b";
}
.wi-lunar-eclipse:before {
  content: "\\f070";
}
.wi-stars:before {
  content: "\\f077";
}
.wi-storm-showers:before {
  content: "\\f01d";
}
.wi-thunderstorm:before {
  content: "\\f01e";
}
.wi-night-alt-cloudy-high:before {
  content: "\\f07e";
}
.wi-night-cloudy-high:before {
  content: "\\f080";
}
.wi-night-alt-partly-cloudy:before {
  content: "\\f081";
}
.wi-cloud:before {
  content: "\\f041";
}
.wi-cloudy:before {
  content: "\\f013";
}
.wi-cloudy-gusts:before {
  content: "\\f011";
}
.wi-cloudy-windy:before {
  content: "\\f012";
}
.wi-fog:before {
  content: "\\f014";
}
.wi-hail:before {
  content: "\\f015";
}
.wi-rain:before {
  content: "\\f019";
}
.wi-rain-mix:before {
  content: "\\f017";
}
.wi-rain-wind:before {
  content: "\\f018";
}
.wi-showers:before {
  content: "\\f01a";
}
.wi-sleet:before {
  content: "\\f0b5";
}
.wi-snow:before {
  content: "\\f01b";
}
.wi-sprinkle:before {
  content: "\\f01c";
}
.wi-storm-showers:before {
  content: "\\f01d";
}
.wi-thunderstorm:before {
  content: "\\f01e";
}
.wi-snow-wind:before {
  content: "\\f064";
}
.wi-snow:before {
  content: "\\f01b";
}
.wi-smog:before {
  content: "\\f074";
}
.wi-smoke:before {
  content: "\\f062";
}
.wi-lightning:before {
  content: "\\f016";
}
.wi-raindrops:before {
  content: "\\f04e";
}
.wi-raindrop:before {
  content: "\\f078";
}
.wi-dust:before {
  content: "\\f063";
}
.wi-snowflake-cold:before {
  content: "\\f076";
}
.wi-windy:before {
  content: "\\f021";
}
.wi-strong-wind:before {
  content: "\\f050";
}
.wi-sandstorm:before {
  content: "\\f082";
}
.wi-earthquake:before {
  content: "\\f0c6";
}
.wi-fire:before {
  content: "\\f0c7";
}
.wi-flood:before {
  content: "\\f07c";
}
.wi-meteor:before {
  content: "\\f071";
}
.wi-tsunami:before {
  content: "\\f0c5";
}
.wi-volcano:before {
  content: "\\f0c8";
}
.wi-hurricane:before {
  content: "\\f073";
}
.wi-tornado:before {
  content: "\\f056";
}
.wi-small-craft-advisory:before {
  content: "\\f0cc";
}
.wi-gale-warning:before {
  content: "\\f0cd";
}
.wi-storm-warning:before {
  content: "\\f0ce";
}
.wi-hurricane-warning:before {
  content: "\\f0cf";
}
.wi-wind-direction:before {
  content: "\\f0b1";
}
.wi-alien:before {
  content: "\\f075";
}
.wi-celsius:before {
  content: "\\f03c";
}
.wi-fahrenheit:before {
  content: "\\f045";
}
.wi-degrees:before {
  content: "\\f042";
}
.wi-thermometer:before {
  content: "\\f055";
}
.wi-thermometer-exterior:before {
  content: "\\f053";
}
.wi-thermometer-internal:before {
  content: "\\f054";
}
.wi-cloud-down:before {
  content: "\\f03d";
}
.wi-cloud-up:before {
  content: "\\f040";
}
.wi-cloud-refresh:before {
  content: "\\f03e";
}
.wi-horizon:before {
  content: "\\f047";
}
.wi-horizon-alt:before {
  content: "\\f046";
}
.wi-sunrise:before {
  content: "\\f051";
}
.wi-sunset:before {
  content: "\\f052";
}
.wi-moonrise:before {
  content: "\\f0c9";
}
.wi-moonset:before {
  content: "\\f0ca";
}
.wi-refresh:before {
  content: "\\f04c";
}
.wi-refresh-alt:before {
  content: "\\f04b";
}
.wi-umbrella:before {
  content: "\\f084";
}
.wi-barometer:before {
  content: "\\f079";
}
.wi-humidity:before {
  content: "\\f07a";
}
.wi-na:before {
  content: "\\f07b";
}
.wi-train:before {
  content: "\\f0cb";
}
.wi-moon-new:before {
  content: "\\f095";
}
.wi-moon-waxing-crescent-1:before {
  content: "\\f096";
}
.wi-moon-waxing-crescent-2:before {
  content: "\\f097";
}
.wi-moon-waxing-crescent-3:before {
  content: "\\f098";
}
.wi-moon-waxing-crescent-4:before {
  content: "\\f099";
}
.wi-moon-waxing-crescent-5:before {
  content: "\\f09a";
}
.wi-moon-waxing-crescent-6:before {
  content: "\\f09b";
}
.wi-moon-first-quarter:before {
  content: "\\f09c";
}
.wi-moon-waxing-gibbous-1:before {
  content: "\\f09d";
}
.wi-moon-waxing-gibbous-2:before {
  content: "\\f09e";
}
.wi-moon-waxing-gibbous-3:before {
  content: "\\f09f";
}
.wi-moon-waxing-gibbous-4:before {
  content: "\\f0a0";
}
.wi-moon-waxing-gibbous-5:before {
  content: "\\f0a1";
}
.wi-moon-waxing-gibbous-6:before {
  content: "\\f0a2";
}
.wi-moon-full:before {
  content: "\\f0a3";
}
.wi-moon-waning-gibbous-1:before {
  content: "\\f0a4";
}
.wi-moon-waning-gibbous-2:before {
  content: "\\f0a5";
}
.wi-moon-waning-gibbous-3:before {
  content: "\\f0a6";
}
.wi-moon-waning-gibbous-4:before {
  content: "\\f0a7";
}
.wi-moon-waning-gibbous-5:before {
  content: "\\f0a8";
}
.wi-moon-waning-gibbous-6:before {
  content: "\\f0a9";
}
.wi-moon-third-quarter:before {
  content: "\\f0aa";
}
.wi-moon-waning-crescent-1:before {
  content: "\\f0ab";
}
.wi-moon-waning-crescent-2:before {
  content: "\\f0ac";
}
.wi-moon-waning-crescent-3:before {
  content: "\\f0ad";
}
.wi-moon-waning-crescent-4:before {
  content: "\\f0ae";
}
.wi-moon-waning-crescent-5:before {
  content: "\\f0af";
}
.wi-moon-waning-crescent-6:before {
  content: "\\f0b0";
}
.wi-moon-alt-new:before {
  content: "\\f0eb";
}
.wi-moon-alt-waxing-crescent-1:before {
  content: "\\f0d0";
}
.wi-moon-alt-waxing-crescent-2:before {
  content: "\\f0d1";
}
.wi-moon-alt-waxing-crescent-3:before {
  content: "\\f0d2";
}
.wi-moon-alt-waxing-crescent-4:before {
  content: "\\f0d3";
}
.wi-moon-alt-waxing-crescent-5:before {
  content: "\\f0d4";
}
.wi-moon-alt-waxing-crescent-6:before {
  content: "\\f0d5";
}
.wi-moon-alt-first-quarter:before {
  content: "\\f0d6";
}
.wi-moon-alt-waxing-gibbous-1:before {
  content: "\\f0d7";
}
.wi-moon-alt-waxing-gibbous-2:before {
  content: "\\f0d8";
}
.wi-moon-alt-waxing-gibbous-3:before {
  content: "\\f0d9";
}
.wi-moon-alt-waxing-gibbous-4:before {
  content: "\\f0da";
}
.wi-moon-alt-waxing-gibbous-5:before {
  content: "\\f0db";
}
.wi-moon-alt-waxing-gibbous-6:before {
  content: "\\f0dc";
}
.wi-moon-alt-full:before {
  content: "\\f0dd";
}
.wi-moon-alt-waning-gibbous-1:before {
  content: "\\f0de";
}
.wi-moon-alt-waning-gibbous-2:before {
  content: "\\f0df";
}
.wi-moon-alt-waning-gibbous-3:before {
  content: "\\f0e0";
}
.wi-moon-alt-waning-gibbous-4:before {
  content: "\\f0e1";
}
.wi-moon-alt-waning-gibbous-5:before {
  content: "\\f0e2";
}
.wi-moon-alt-waning-gibbous-6:before {
  content: "\\f0e3";
}
.wi-moon-alt-third-quarter:before {
  content: "\\f0e4";
}
.wi-moon-alt-waning-crescent-1:before {
  content: "\\f0e5";
}
.wi-moon-alt-waning-crescent-2:before {
  content: "\\f0e6";
}
.wi-moon-alt-waning-crescent-3:before {
  content: "\\f0e7";
}
.wi-moon-alt-waning-crescent-4:before {
  content: "\\f0e8";
}
.wi-moon-alt-waning-crescent-5:before {
  content: "\\f0e9";
}
.wi-moon-alt-waning-crescent-6:before {
  content: "\\f0ea";
}
.wi-moon-0:before {
  content: "\\f095";
}
.wi-moon-1:before {
  content: "\\f096";
}
.wi-moon-2:before {
  content: "\\f097";
}
.wi-moon-3:before {
  content: "\\f098";
}
.wi-moon-4:before {
  content: "\\f099";
}
.wi-moon-5:before {
  content: "\\f09a";
}
.wi-moon-6:before {
  content: "\\f09b";
}
.wi-moon-7:before {
  content: "\\f09c";
}
.wi-moon-8:before {
  content: "\\f09d";
}
.wi-moon-9:before {
  content: "\\f09e";
}
.wi-moon-10:before {
  content: "\\f09f";
}
.wi-moon-11:before {
  content: "\\f0a0";
}
.wi-moon-12:before {
  content: "\\f0a1";
}
.wi-moon-13:before {
  content: "\\f0a2";
}
.wi-moon-14:before {
  content: "\\f0a3";
}
.wi-moon-15:before {
  content: "\\f0a4";
}
.wi-moon-16:before {
  content: "\\f0a5";
}
.wi-moon-17:before {
  content: "\\f0a6";
}
.wi-moon-18:before {
  content: "\\f0a7";
}
.wi-moon-19:before {
  content: "\\f0a8";
}
.wi-moon-20:before {
  content: "\\f0a9";
}
.wi-moon-21:before {
  content: "\\f0aa";
}
.wi-moon-22:before {
  content: "\\f0ab";
}
.wi-moon-23:before {
  content: "\\f0ac";
}
.wi-moon-24:before {
  content: "\\f0ad";
}
.wi-moon-25:before {
  content: "\\f0ae";
}
.wi-moon-26:before {
  content: "\\f0af";
}
.wi-moon-27:before {
  content: "\\f0b0";
}
.wi-time-1:before {
  content: "\\f08a";
}
.wi-time-2:before {
  content: "\\f08b";
}
.wi-time-3:before {
  content: "\\f08c";
}
.wi-time-4:before {
  content: "\\f08d";
}
.wi-time-5:before {
  content: "\\f08e";
}
.wi-time-6:before {
  content: "\\f08f";
}
.wi-time-7:before {
  content: "\\f090";
}
.wi-time-8:before {
  content: "\\f091";
}
.wi-time-9:before {
  content: "\\f092";
}
.wi-time-10:before {
  content: "\\f093";
}
.wi-time-11:before {
  content: "\\f094";
}
.wi-time-12:before {
  content: "\\f089";
}
.wi-direction-up:before {
  content: "\\f058";
}
.wi-direction-up-right:before {
  content: "\\f057";
}
.wi-direction-right:before {
  content: "\\f04d";
}
.wi-direction-down-right:before {
  content: "\\f088";
}
.wi-direction-down:before {
  content: "\\f044";
}
.wi-direction-down-left:before {
  content: "\\f043";
}
.wi-direction-left:before {
  content: "\\f048";
}
.wi-direction-up-left:before {
  content: "\\f087";
}
.wi-wind-beaufort-0:before {
  content: "\\f0b7";
}
.wi-wind-beaufort-1:before {
  content: "\\f0b8";
}
.wi-wind-beaufort-2:before {
  content: "\\f0b9";
}
.wi-wind-beaufort-3:before {
  content: "\\f0ba";
}
.wi-wind-beaufort-4:before {
  content: "\\f0bb";
}
.wi-wind-beaufort-5:before {
  content: "\\f0bc";
}
.wi-wind-beaufort-6:before {
  content: "\\f0bd";
}
.wi-wind-beaufort-7:before {
  content: "\\f0be";
}
.wi-wind-beaufort-8:before {
  content: "\\f0bf";
}
.wi-wind-beaufort-9:before {
  content: "\\f0c0";
}
.wi-wind-beaufort-10:before {
  content: "\\f0c1";
}
.wi-wind-beaufort-11:before {
  content: "\\f0c2";
}
.wi-wind-beaufort-12:before {
  content: "\\f0c3";
}
.wi-yahoo-0:before {
  content: "\\f056";
}
.wi-yahoo-1:before {
  content: "\\f00e";
}
.wi-yahoo-2:before {
  content: "\\f073";
}
.wi-yahoo-3:before {
  content: "\\f01e";
}
.wi-yahoo-4:before {
  content: "\\f01e";
}
.wi-yahoo-5:before {
  content: "\\f017";
}
.wi-yahoo-6:before {
  content: "\\f017";
}
.wi-yahoo-7:before {
  content: "\\f017";
}
.wi-yahoo-8:before {
  content: "\\f015";
}
.wi-yahoo-9:before {
  content: "\\f01a";
}
.wi-yahoo-10:before {
  content: "\\f015";
}
.wi-yahoo-11:before {
  content: "\\f01a";
}
.wi-yahoo-12:before {
  content: "\\f01a";
}
.wi-yahoo-13:before {
  content: "\\f01b";
}
.wi-yahoo-14:before {
  content: "\\f00a";
}
.wi-yahoo-15:before {
  content: "\\f064";
}
.wi-yahoo-16:before {
  content: "\\f01b";
}
.wi-yahoo-17:before {
  content: "\\f015";
}
.wi-yahoo-18:before {
  content: "\\f017";
}
.wi-yahoo-19:before {
  content: "\\f063";
}
.wi-yahoo-20:before {
  content: "\\f014";
}
.wi-yahoo-21:before {
  content: "\\f021";
}
.wi-yahoo-22:before {
  content: "\\f062";
}
.wi-yahoo-23:before {
  content: "\\f050";
}
.wi-yahoo-24:before {
  content: "\\f050";
}
.wi-yahoo-25:before {
  content: "\\f076";
}
.wi-yahoo-26:before {
  content: "\\f013";
}
.wi-yahoo-27:before {
  content: "\\f031";
}
.wi-yahoo-28:before {
  content: "\\f002";
}
.wi-yahoo-29:before {
  content: "\\f031";
}
.wi-yahoo-30:before {
  content: "\\f002";
}
.wi-yahoo-31:before {
  content: "\\f02e";
}
.wi-yahoo-32:before {
  content: "\\f00d";
}
.wi-yahoo-33:before {
  content: "\\f083";
}
.wi-yahoo-34:before {
  content: "\\f00c";
}
.wi-yahoo-35:before {
  content: "\\f017";
}
.wi-yahoo-36:before {
  content: "\\f072";
}
.wi-yahoo-37:before {
  content: "\\f00e";
}
.wi-yahoo-38:before {
  content: "\\f00e";
}
.wi-yahoo-39:before {
  content: "\\f00e";
}
.wi-yahoo-40:before {
  content: "\\f01a";
}
.wi-yahoo-41:before {
  content: "\\f064";
}
.wi-yahoo-42:before {
  content: "\\f01b";
}
.wi-yahoo-43:before {
  content: "\\f064";
}
.wi-yahoo-44:before {
  content: "\\f00c";
}
.wi-yahoo-45:before {
  content: "\\f00e";
}
.wi-yahoo-46:before {
  content: "\\f01b";
}
.wi-yahoo-47:before {
  content: "\\f00e";
}
.wi-yahoo-3200:before {
  content: "\\f077";
}
.wi-forecast-io-clear-day:before {
  content: "\\f00d";
}
.wi-forecast-io-clear-night:before {
  content: "\\f02e";
}
.wi-forecast-io-rain:before {
  content: "\\f019";
}
.wi-forecast-io-snow:before {
  content: "\\f01b";
}
.wi-forecast-io-sleet:before {
  content: "\\f0b5";
}
.wi-forecast-io-wind:before {
  content: "\\f050";
}
.wi-forecast-io-fog:before {
  content: "\\f014";
}
.wi-forecast-io-cloudy:before {
  content: "\\f013";
}
.wi-forecast-io-partly-cloudy-day:before {
  content: "\\f002";
}
.wi-forecast-io-partly-cloudy-night:before {
  content: "\\f031";
}
.wi-forecast-io-hail:before {
  content: "\\f015";
}
.wi-forecast-io-thunderstorm:before {
  content: "\\f01e";
}
.wi-forecast-io-tornado:before {
  content: "\\f056";
}
.wi-wmo4680-0:before,
.wi-wmo4680-00:before {
  content: "\\f055";
}
.wi-wmo4680-1:before,
.wi-wmo4680-01:before {
  content: "\\f013";
}
.wi-wmo4680-2:before,
.wi-wmo4680-02:before {
  content: "\\f055";
}
.wi-wmo4680-3:before,
.wi-wmo4680-03:before {
  content: "\\f013";
}
.wi-wmo4680-4:before,
.wi-wmo4680-04:before {
  content: "\\f014";
}
.wi-wmo4680-5:before,
.wi-wmo4680-05:before {
  content: "\\f014";
}
.wi-wmo4680-10:before {
  content: "\\f014";
}
.wi-wmo4680-11:before {
  content: "\\f014";
}
.wi-wmo4680-12:before {
  content: "\\f016";
}
.wi-wmo4680-18:before {
  content: "\\f050";
}
.wi-wmo4680-20:before {
  content: "\\f014";
}
.wi-wmo4680-21:before {
  content: "\\f017";
}
.wi-wmo4680-22:before {
  content: "\\f017";
}
.wi-wmo4680-23:before {
  content: "\\f019";
}
.wi-wmo4680-24:before {
  content: "\\f01b";
}
.wi-wmo4680-25:before {
  content: "\\f015";
}
.wi-wmo4680-26:before {
  content: "\\f01e";
}
.wi-wmo4680-27:before {
  content: "\\f063";
}
.wi-wmo4680-28:before {
  content: "\\f063";
}
.wi-wmo4680-29:before {
  content: "\\f063";
}
.wi-wmo4680-30:before {
  content: "\\f014";
}
.wi-wmo4680-31:before {
  content: "\\f014";
}
.wi-wmo4680-32:before {
  content: "\\f014";
}
.wi-wmo4680-33:before {
  content: "\\f014";
}
.wi-wmo4680-34:before {
  content: "\\f014";
}
.wi-wmo4680-35:before {
  content: "\\f014";
}
.wi-wmo4680-40:before {
  content: "\\f017";
}
.wi-wmo4680-41:before {
  content: "\\f01c";
}
.wi-wmo4680-42:before {
  content: "\\f019";
}
.wi-wmo4680-43:before {
  content: "\\f01c";
}
.wi-wmo4680-44:before {
  content: "\\f019";
}
.wi-wmo4680-45:before {
  content: "\\f015";
}
.wi-wmo4680-46:before {
  content: "\\f015";
}
.wi-wmo4680-47:before {
  content: "\\f01b";
}
.wi-wmo4680-48:before {
  content: "\\f01b";
}
.wi-wmo4680-50:before {
  content: "\\f01c";
}
.wi-wmo4680-51:before {
  content: "\\f01c";
}
.wi-wmo4680-52:before {
  content: "\\f019";
}
.wi-wmo4680-53:before {
  content: "\\f019";
}
.wi-wmo4680-54:before {
  content: "\\f076";
}
.wi-wmo4680-55:before {
  content: "\\f076";
}
.wi-wmo4680-56:before {
  content: "\\f076";
}
.wi-wmo4680-57:before {
  content: "\\f01c";
}
.wi-wmo4680-58:before {
  content: "\\f019";
}
.wi-wmo4680-60:before {
  content: "\\f01c";
}
.wi-wmo4680-61:before {
  content: "\\f01c";
}
.wi-wmo4680-62:before {
  content: "\\f019";
}
.wi-wmo4680-63:before {
  content: "\\f019";
}
.wi-wmo4680-64:before {
  content: "\\f015";
}
.wi-wmo4680-65:before {
  content: "\\f015";
}
.wi-wmo4680-66:before {
  content: "\\f015";
}
.wi-wmo4680-67:before {
  content: "\\f017";
}
.wi-wmo4680-68:before {
  content: "\\f017";
}
.wi-wmo4680-70:before {
  content: "\\f01b";
}
.wi-wmo4680-71:before {
  content: "\\f01b";
}
.wi-wmo4680-72:before {
  content: "\\f01b";
}
.wi-wmo4680-73:before {
  content: "\\f01b";
}
.wi-wmo4680-74:before {
  content: "\\f076";
}
.wi-wmo4680-75:before {
  content: "\\f076";
}
.wi-wmo4680-76:before {
  content: "\\f076";
}
.wi-wmo4680-77:before {
  content: "\\f01b";
}
.wi-wmo4680-78:before {
  content: "\\f076";
}
.wi-wmo4680-80:before {
  content: "\\f019";
}
.wi-wmo4680-81:before {
  content: "\\f01c";
}
.wi-wmo4680-82:before {
  content: "\\f019";
}
.wi-wmo4680-83:before {
  content: "\\f019";
}
.wi-wmo4680-84:before {
  content: "\\f01d";
}
.wi-wmo4680-85:before {
  content: "\\f017";
}
.wi-wmo4680-86:before {
  content: "\\f017";
}
.wi-wmo4680-87:before {
  content: "\\f017";
}
.wi-wmo4680-89:before {
  content: "\\f015";
}
.wi-wmo4680-90:before {
  content: "\\f016";
}
.wi-wmo4680-91:before {
  content: "\\f01d";
}
.wi-wmo4680-92:before {
  content: "\\f01e";
}
.wi-wmo4680-93:before {
  content: "\\f01e";
}
.wi-wmo4680-94:before {
  content: "\\f016";
}
.wi-wmo4680-95:before {
  content: "\\f01e";
}
.wi-wmo4680-96:before {
  content: "\\f01e";
}
.wi-wmo4680-99:before {
  content: "\\f056";
}
.wi-owm-200:before {
  content: "\\f01e";
}
.wi-owm-201:before {
  content: "\\f01e";
}
.wi-owm-202:before {
  content: "\\f01e";
}
.wi-owm-210:before {
  content: "\\f016";
}
.wi-owm-211:before {
  content: "\\f016";
}
.wi-owm-212:before {
  content: "\\f016";
}
.wi-owm-221:before {
  content: "\\f016";
}
.wi-owm-230:before {
  content: "\\f01e";
}
.wi-owm-231:before {
  content: "\\f01e";
}
.wi-owm-232:before {
  content: "\\f01e";
}
.wi-owm-300:before {
  content: "\\f01c";
}
.wi-owm-301:before {
  content: "\\f01c";
}
.wi-owm-302:before {
  content: "\\f019";
}
.wi-owm-310:before {
  content: "\\f017";
}
.wi-owm-311:before {
  content: "\\f019";
}
.wi-owm-312:before {
  content: "\\f019";
}
.wi-owm-313:before {
  content: "\\f01a";
}
.wi-owm-314:before {
  content: "\\f019";
}
.wi-owm-321:before {
  content: "\\f01c";
}
.wi-owm-500:before {
  content: "\\f01c";
}
.wi-owm-501:before {
  content: "\\f019";
}
.wi-owm-502:before {
  content: "\\f019";
}
.wi-owm-503:before {
  content: "\\f019";
}
.wi-owm-504:before {
  content: "\\f019";
}
.wi-owm-511:before {
  content: "\\f017";
}
.wi-owm-520:before {
  content: "\\f01a";
}
.wi-owm-521:before {
  content: "\\f01a";
}
.wi-owm-522:before {
  content: "\\f01a";
}
.wi-owm-531:before {
  content: "\\f01d";
}
.wi-owm-600:before {
  content: "\\f01b";
}
.wi-owm-601:before {
  content: "\\f01b";
}
.wi-owm-602:before {
  content: "\\f0b5";
}
.wi-owm-611:before {
  content: "\\f017";
}
.wi-owm-612:before {
  content: "\\f017";
}
.wi-owm-615:before {
  content: "\\f017";
}
.wi-owm-616:before {
  content: "\\f017";
}
.wi-owm-620:before {
  content: "\\f017";
}
.wi-owm-621:before {
  content: "\\f01b";
}
.wi-owm-622:before {
  content: "\\f01b";
}
.wi-owm-701:before {
  content: "\\f014";
}
.wi-owm-711:before {
  content: "\\f062";
}
.wi-owm-721:before {
  content: "\\f0b6";
}
.wi-owm-731:before {
  content: "\\f063";
}
.wi-owm-741:before {
  content: "\\f014";
}
.wi-owm-761:before {
  content: "\\f063";
}
.wi-owm-762:before {
  content: "\\f063";
}
.wi-owm-771:before {
  content: "\\f011";
}
.wi-owm-781:before {
  content: "\\f056";
}
.wi-owm-800:before {
  content: "\\f00d";
}
.wi-owm-801:before {
  content: "\\f041";
}
.wi-owm-802:before {
  content: "\\f041";
}
.wi-owm-803:before {
  content: "\\f013";
}
.wi-owm-804:before {
  content: "\\f013";
}
.wi-owm-900:before {
  content: "\\f056";
}
.wi-owm-901:before {
  content: "\\f01d";
}
.wi-owm-902:before {
  content: "\\f073";
}
.wi-owm-903:before {
  content: "\\f076";
}
.wi-owm-904:before {
  content: "\\f072";
}
.wi-owm-905:before {
  content: "\\f021";
}
.wi-owm-906:before {
  content: "\\f015";
}
.wi-owm-957:before {
  content: "\\f050";
}
.wi-owm-day-200:before {
  content: "\\f010";
}
.wi-owm-day-201:before {
  content: "\\f010";
}
.wi-owm-day-202:before {
  content: "\\f010";
}
.wi-owm-day-210:before {
  content: "\\f005";
}
.wi-owm-day-211:before {
  content: "\\f005";
}
.wi-owm-day-212:before {
  content: "\\f005";
}
.wi-owm-day-221:before {
  content: "\\f005";
}
.wi-owm-day-230:before {
  content: "\\f010";
}
.wi-owm-day-231:before {
  content: "\\f010";
}
.wi-owm-day-232:before {
  content: "\\f010";
}
.wi-owm-day-300:before {
  content: "\\f00b";
}
.wi-owm-day-301:before {
  content: "\\f00b";
}
.wi-owm-day-302:before {
  content: "\\f008";
}
.wi-owm-day-310:before {
  content: "\\f008";
}
.wi-owm-day-311:before {
  content: "\\f008";
}
.wi-owm-day-312:before {
  content: "\\f008";
}
.wi-owm-day-313:before {
  content: "\\f008";
}
.wi-owm-day-314:before {
  content: "\\f008";
}
.wi-owm-day-321:before {
  content: "\\f00b";
}
.wi-owm-day-500:before {
  content: "\\f00b";
}
.wi-owm-day-501:before {
  content: "\\f008";
}
.wi-owm-day-502:before {
  content: "\\f008";
}
.wi-owm-day-503:before {
  content: "\\f008";
}
.wi-owm-day-504:before {
  content: "\\f008";
}
.wi-owm-day-511:before {
  content: "\\f006";
}
.wi-owm-day-520:before {
  content: "\\f009";
}
.wi-owm-day-521:before {
  content: "\\f009";
}
.wi-owm-day-522:before {
  content: "\\f009";
}
.wi-owm-day-531:before {
  content: "\\f00e";
}
.wi-owm-day-600:before {
  content: "\\f00a";
}
.wi-owm-day-601:before {
  content: "\\f0b2";
}
.wi-owm-day-602:before {
  content: "\\f00a";
}
.wi-owm-day-611:before {
  content: "\\f006";
}
.wi-owm-day-612:before {
  content: "\\f006";
}
.wi-owm-day-615:before {
  content: "\\f006";
}
.wi-owm-day-616:before {
  content: "\\f006";
}
.wi-owm-day-620:before {
  content: "\\f006";
}
.wi-owm-day-621:before {
  content: "\\f00a";
}
.wi-owm-day-622:before {
  content: "\\f00a";
}
.wi-owm-day-701:before {
  content: "\\f003";
}
.wi-owm-day-711:before {
  content: "\\f062";
}
.wi-owm-day-721:before {
  content: "\\f0b6";
}
.wi-owm-day-731:before {
  content: "\\f063";
}
.wi-owm-day-741:before {
  content: "\\f003";
}
.wi-owm-day-761:before {
  content: "\\f063";
}
.wi-owm-day-762:before {
  content: "\\f063";
}
.wi-owm-day-781:before {
  content: "\\f056";
}
.wi-owm-day-800:before {
  content: "\\f00d";
}
.wi-owm-day-801:before {
  content: "\\f002";
}
.wi-owm-day-802:before {
  content: "\\f002";
}
.wi-owm-day-803:before {
  content: "\\f013";
}
.wi-owm-day-804:before {
  content: "\\f013";
}
.wi-owm-day-900:before {
  content: "\\f056";
}
.wi-owm-day-902:before {
  content: "\\f073";
}
.wi-owm-day-903:before {
  content: "\\f076";
}
.wi-owm-day-904:before {
  content: "\\f072";
}
.wi-owm-day-906:before {
  content: "\\f004";
}
.wi-owm-day-957:before {
  content: "\\f050";
}
.wi-owm-night-200:before {
  content: "\\f02d";
}
.wi-owm-night-201:before {
  content: "\\f02d";
}
.wi-owm-night-202:before {
  content: "\\f02d";
}
.wi-owm-night-210:before {
  content: "\\f025";
}
.wi-owm-night-211:before {
  content: "\\f025";
}
.wi-owm-night-212:before {
  content: "\\f025";
}
.wi-owm-night-221:before {
  content: "\\f025";
}
.wi-owm-night-230:before {
  content: "\\f02d";
}
.wi-owm-night-231:before {
  content: "\\f02d";
}
.wi-owm-night-232:before {
  content: "\\f02d";
}
.wi-owm-night-300:before {
  content: "\\f02b";
}
.wi-owm-night-301:before {
  content: "\\f02b";
}
.wi-owm-night-302:before {
  content: "\\f028";
}
.wi-owm-night-310:before {
  content: "\\f028";
}
.wi-owm-night-311:before {
  content: "\\f028";
}
.wi-owm-night-312:before {
  content: "\\f028";
}
.wi-owm-night-313:before {
  content: "\\f028";
}
.wi-owm-night-314:before {
  content: "\\f028";
}
.wi-owm-night-321:before {
  content: "\\f02b";
}
.wi-owm-night-500:before {
  content: "\\f02b";
}
.wi-owm-night-501:before {
  content: "\\f028";
}
.wi-owm-night-502:before {
  content: "\\f028";
}
.wi-owm-night-503:before {
  content: "\\f028";
}
.wi-owm-night-504:before {
  content: "\\f028";
}
.wi-owm-night-511:before {
  content: "\\f026";
}
.wi-owm-night-520:before {
  content: "\\f029";
}
.wi-owm-night-521:before {
  content: "\\f029";
}
.wi-owm-night-522:before {
  content: "\\f029";
}
.wi-owm-night-531:before {
  content: "\\f02c";
}
.wi-owm-night-600:before {
  content: "\\f02a";
}
.wi-owm-night-601:before {
  content: "\\f0b4";
}
.wi-owm-night-602:before {
  content: "\\f02a";
}
.wi-owm-night-611:before {
  content: "\\f026";
}
.wi-owm-night-612:before {
  content: "\\f026";
}
.wi-owm-night-615:before {
  content: "\\f026";
}
.wi-owm-night-616:before {
  content: "\\f026";
}
.wi-owm-night-620:before {
  content: "\\f026";
}
.wi-owm-night-621:before {
  content: "\\f02a";
}
.wi-owm-night-622:before {
  content: "\\f02a";
}
.wi-owm-night-701:before {
  content: "\\f04a";
}
.wi-owm-night-711:before {
  content: "\\f062";
}
.wi-owm-night-721:before {
  content: "\\f0b6";
}
.wi-owm-night-731:before {
  content: "\\f063";
}
.wi-owm-night-741:before {
  content: "\\f04a";
}
.wi-owm-night-761:before {
  content: "\\f063";
}
.wi-owm-night-762:before {
  content: "\\f063";
}
.wi-owm-night-781:before {
  content: "\\f056";
}
.wi-owm-night-800:before {
  content: "\\f02e";
}
.wi-owm-night-801:before {
  content: "\\f081";
}
.wi-owm-night-802:before {
  content: "\\f086";
}
.wi-owm-night-803:before {
  content: "\\f013";
}
.wi-owm-night-804:before {
  content: "\\f013";
}
.wi-owm-night-900:before {
  content: "\\f056";
}
.wi-owm-night-902:before {
  content: "\\f073";
}
.wi-owm-night-903:before {
  content: "\\f076";
}
.wi-owm-night-904:before {
  content: "\\f072";
}
.wi-owm-night-906:before {
  content: "\\f024";
}
.wi-owm-night-957:before {
  content: "\\f050";
}
.wi-wu-chanceflurries:before {
  content: "\\f064";
}
.wi-wu-chancerain:before {
  content: "\\f019";
}
.wi-wu-chancesleat:before {
  content: "\\f0b5";
}
.wi-wu-chancesnow:before {
  content: "\\f01b";
}
.wi-wu-chancetstorms:before {
  content: "\\f01e";
}
.wi-wu-clear:before {
  content: "\\f00d";
}
.wi-wu-cloudy:before {
  content: "\\f002";
}
.wi-wu-flurries:before {
  content: "\\f064";
}
.wi-wu-hazy:before {
  content: "\\f0b6";
}
.wi-wu-mostlycloudy:before {
  content: "\\f002";
}
.wi-wu-mostlysunny:before {
  content: "\\f00d";
}
.wi-wu-partlycloudy:before {
  content: "\\f002";
}
.wi-wu-partlysunny:before {
  content: "\\f00d";
}
.wi-wu-rain:before {
  content: "\\f01a";
}
.wi-wu-sleat:before {
  content: "\\f0b5";
}
.wi-wu-snow:before {
  content: "\\f01b";
}
.wi-wu-sunny:before {
  content: "\\f00d";
}
.wi-wu-tstorms:before {
  content: "\\f01e";
}
.wi-wu-unknown:before {
  content: "\\f00d";
}
`, "",{"version":3,"sources":["webpack://./src/CSS/weather-icons.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;EAoBE;AACF;EACE,2BAA2B;EAC3B,4CAAoD;EACpD,4SAAmX;EACnX,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;AACpC;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,gEAAgE;EAChE,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;AAC1B;AACA;EACE,gEAAgE;EAChE,iCAAiC;EACjC,6BAA6B;EAC7B,yBAAyB;AAC3B;AACA;EACE,gEAAgE;EAChE,iCAAiC;EACjC,6BAA6B;EAC7B,yBAAyB;AAC3B;AACA;EACE,0EAA0E;EAC1E,+BAA+B;EAC/B,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,0EAA0E;EAC1E,+BAA+B;EAC/B,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB","sourcesContent":["/*!\n *  Weather Icons 2.0.10\n *  Updated November 1, 2020\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */\n@font-face {\n  font-family: 'weathericons';\n  src: url('../font/weathericons-regular-webfont.eot');\n  src: url('../font/weathericons-regular-webfont.eot?#iefix') format('embedded-opentype'), url('../font/weathericons-regular-webfont.woff2') format('woff2'), url('../font/weathericons-regular-webfont.woff') format('woff'), url('../font/weathericons-regular-webfont.ttf') format('truetype'), url('../font/weathericons-regular-webfont.svg#weather_iconsregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.wi {\n  display: inline-block;\n  font-family: 'weathericons';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.wi-fw {\n  text-align: center;\n  width: 1.4em;\n}\n.wi-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.wi-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.wi-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.wi-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.wi-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n.wi-day-sunny:before {\n  content: \"\\f00d\";\n}\n.wi-day-cloudy:before {\n  content: \"\\f002\";\n}\n.wi-day-cloudy-gusts:before {\n  content: \"\\f000\";\n}\n.wi-day-cloudy-windy:before {\n  content: \"\\f001\";\n}\n.wi-day-fog:before {\n  content: \"\\f003\";\n}\n.wi-day-hail:before {\n  content: \"\\f004\";\n}\n.wi-day-haze:before {\n  content: \"\\f0b6\";\n}\n.wi-day-lightning:before {\n  content: \"\\f005\";\n}\n.wi-day-rain:before {\n  content: \"\\f008\";\n}\n.wi-day-rain-mix:before {\n  content: \"\\f006\";\n}\n.wi-day-rain-wind:before {\n  content: \"\\f007\";\n}\n.wi-day-showers:before {\n  content: \"\\f009\";\n}\n.wi-day-sleet:before {\n  content: \"\\f0b2\";\n}\n.wi-day-sleet-storm:before {\n  content: \"\\f068\";\n}\n.wi-day-snow:before {\n  content: \"\\f00a\";\n}\n.wi-day-snow-thunderstorm:before {\n  content: \"\\f06b\";\n}\n.wi-day-snow-wind:before {\n  content: \"\\f065\";\n}\n.wi-day-sprinkle:before {\n  content: \"\\f00b\";\n}\n.wi-day-storm-showers:before {\n  content: \"\\f00e\";\n}\n.wi-day-sunny-overcast:before {\n  content: \"\\f00c\";\n}\n.wi-day-thunderstorm:before {\n  content: \"\\f010\";\n}\n.wi-day-windy:before {\n  content: \"\\f085\";\n}\n.wi-solar-eclipse:before {\n  content: \"\\f06e\";\n}\n.wi-hot:before {\n  content: \"\\f072\";\n}\n.wi-day-cloudy-high:before {\n  content: \"\\f07d\";\n}\n.wi-day-light-wind:before {\n  content: \"\\f0c4\";\n}\n.wi-night-clear:before {\n  content: \"\\f02e\";\n}\n.wi-night-alt-cloudy:before {\n  content: \"\\f086\";\n}\n.wi-night-alt-cloudy-gusts:before {\n  content: \"\\f022\";\n}\n.wi-night-alt-cloudy-windy:before {\n  content: \"\\f023\";\n}\n.wi-night-alt-hail:before {\n  content: \"\\f024\";\n}\n.wi-night-alt-lightning:before {\n  content: \"\\f025\";\n}\n.wi-night-alt-rain:before {\n  content: \"\\f028\";\n}\n.wi-night-alt-rain-mix:before {\n  content: \"\\f026\";\n}\n.wi-night-alt-rain-wind:before {\n  content: \"\\f027\";\n}\n.wi-night-alt-showers:before {\n  content: \"\\f029\";\n}\n.wi-night-alt-sleet:before {\n  content: \"\\f0b4\";\n}\n.wi-night-alt-sleet-storm:before {\n  content: \"\\f06a\";\n}\n.wi-night-alt-snow:before {\n  content: \"\\f02a\";\n}\n.wi-night-alt-snow-thunderstorm:before {\n  content: \"\\f06d\";\n}\n.wi-night-alt-snow-wind:before {\n  content: \"\\f067\";\n}\n.wi-night-alt-sprinkle:before {\n  content: \"\\f02b\";\n}\n.wi-night-alt-storm-showers:before {\n  content: \"\\f02c\";\n}\n.wi-night-alt-thunderstorm:before {\n  content: \"\\f02d\";\n}\n.wi-night-cloudy:before {\n  content: \"\\f031\";\n}\n.wi-night-cloudy-gusts:before {\n  content: \"\\f02f\";\n}\n.wi-night-cloudy-windy:before {\n  content: \"\\f030\";\n}\n.wi-night-fog:before {\n  content: \"\\f04a\";\n}\n.wi-night-hail:before {\n  content: \"\\f032\";\n}\n.wi-night-lightning:before {\n  content: \"\\f033\";\n}\n.wi-night-partly-cloudy:before {\n  content: \"\\f083\";\n}\n.wi-night-rain:before {\n  content: \"\\f036\";\n}\n.wi-night-rain-mix:before {\n  content: \"\\f034\";\n}\n.wi-night-rain-wind:before {\n  content: \"\\f035\";\n}\n.wi-night-showers:before {\n  content: \"\\f037\";\n}\n.wi-night-sleet:before {\n  content: \"\\f0b3\";\n}\n.wi-night-sleet-storm:before {\n  content: \"\\f069\";\n}\n.wi-night-snow:before {\n  content: \"\\f038\";\n}\n.wi-night-snow-thunderstorm:before {\n  content: \"\\f06c\";\n}\n.wi-night-snow-wind:before {\n  content: \"\\f066\";\n}\n.wi-night-sprinkle:before {\n  content: \"\\f039\";\n}\n.wi-night-storm-showers:before {\n  content: \"\\f03a\";\n}\n.wi-night-thunderstorm:before {\n  content: \"\\f03b\";\n}\n.wi-lunar-eclipse:before {\n  content: \"\\f070\";\n}\n.wi-stars:before {\n  content: \"\\f077\";\n}\n.wi-storm-showers:before {\n  content: \"\\f01d\";\n}\n.wi-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-night-alt-cloudy-high:before {\n  content: \"\\f07e\";\n}\n.wi-night-cloudy-high:before {\n  content: \"\\f080\";\n}\n.wi-night-alt-partly-cloudy:before {\n  content: \"\\f081\";\n}\n.wi-cloud:before {\n  content: \"\\f041\";\n}\n.wi-cloudy:before {\n  content: \"\\f013\";\n}\n.wi-cloudy-gusts:before {\n  content: \"\\f011\";\n}\n.wi-cloudy-windy:before {\n  content: \"\\f012\";\n}\n.wi-fog:before {\n  content: \"\\f014\";\n}\n.wi-hail:before {\n  content: \"\\f015\";\n}\n.wi-rain:before {\n  content: \"\\f019\";\n}\n.wi-rain-mix:before {\n  content: \"\\f017\";\n}\n.wi-rain-wind:before {\n  content: \"\\f018\";\n}\n.wi-showers:before {\n  content: \"\\f01a\";\n}\n.wi-sleet:before {\n  content: \"\\f0b5\";\n}\n.wi-snow:before {\n  content: \"\\f01b\";\n}\n.wi-sprinkle:before {\n  content: \"\\f01c\";\n}\n.wi-storm-showers:before {\n  content: \"\\f01d\";\n}\n.wi-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-snow-wind:before {\n  content: \"\\f064\";\n}\n.wi-snow:before {\n  content: \"\\f01b\";\n}\n.wi-smog:before {\n  content: \"\\f074\";\n}\n.wi-smoke:before {\n  content: \"\\f062\";\n}\n.wi-lightning:before {\n  content: \"\\f016\";\n}\n.wi-raindrops:before {\n  content: \"\\f04e\";\n}\n.wi-raindrop:before {\n  content: \"\\f078\";\n}\n.wi-dust:before {\n  content: \"\\f063\";\n}\n.wi-snowflake-cold:before {\n  content: \"\\f076\";\n}\n.wi-windy:before {\n  content: \"\\f021\";\n}\n.wi-strong-wind:before {\n  content: \"\\f050\";\n}\n.wi-sandstorm:before {\n  content: \"\\f082\";\n}\n.wi-earthquake:before {\n  content: \"\\f0c6\";\n}\n.wi-fire:before {\n  content: \"\\f0c7\";\n}\n.wi-flood:before {\n  content: \"\\f07c\";\n}\n.wi-meteor:before {\n  content: \"\\f071\";\n}\n.wi-tsunami:before {\n  content: \"\\f0c5\";\n}\n.wi-volcano:before {\n  content: \"\\f0c8\";\n}\n.wi-hurricane:before {\n  content: \"\\f073\";\n}\n.wi-tornado:before {\n  content: \"\\f056\";\n}\n.wi-small-craft-advisory:before {\n  content: \"\\f0cc\";\n}\n.wi-gale-warning:before {\n  content: \"\\f0cd\";\n}\n.wi-storm-warning:before {\n  content: \"\\f0ce\";\n}\n.wi-hurricane-warning:before {\n  content: \"\\f0cf\";\n}\n.wi-wind-direction:before {\n  content: \"\\f0b1\";\n}\n.wi-alien:before {\n  content: \"\\f075\";\n}\n.wi-celsius:before {\n  content: \"\\f03c\";\n}\n.wi-fahrenheit:before {\n  content: \"\\f045\";\n}\n.wi-degrees:before {\n  content: \"\\f042\";\n}\n.wi-thermometer:before {\n  content: \"\\f055\";\n}\n.wi-thermometer-exterior:before {\n  content: \"\\f053\";\n}\n.wi-thermometer-internal:before {\n  content: \"\\f054\";\n}\n.wi-cloud-down:before {\n  content: \"\\f03d\";\n}\n.wi-cloud-up:before {\n  content: \"\\f040\";\n}\n.wi-cloud-refresh:before {\n  content: \"\\f03e\";\n}\n.wi-horizon:before {\n  content: \"\\f047\";\n}\n.wi-horizon-alt:before {\n  content: \"\\f046\";\n}\n.wi-sunrise:before {\n  content: \"\\f051\";\n}\n.wi-sunset:before {\n  content: \"\\f052\";\n}\n.wi-moonrise:before {\n  content: \"\\f0c9\";\n}\n.wi-moonset:before {\n  content: \"\\f0ca\";\n}\n.wi-refresh:before {\n  content: \"\\f04c\";\n}\n.wi-refresh-alt:before {\n  content: \"\\f04b\";\n}\n.wi-umbrella:before {\n  content: \"\\f084\";\n}\n.wi-barometer:before {\n  content: \"\\f079\";\n}\n.wi-humidity:before {\n  content: \"\\f07a\";\n}\n.wi-na:before {\n  content: \"\\f07b\";\n}\n.wi-train:before {\n  content: \"\\f0cb\";\n}\n.wi-moon-new:before {\n  content: \"\\f095\";\n}\n.wi-moon-waxing-crescent-1:before {\n  content: \"\\f096\";\n}\n.wi-moon-waxing-crescent-2:before {\n  content: \"\\f097\";\n}\n.wi-moon-waxing-crescent-3:before {\n  content: \"\\f098\";\n}\n.wi-moon-waxing-crescent-4:before {\n  content: \"\\f099\";\n}\n.wi-moon-waxing-crescent-5:before {\n  content: \"\\f09a\";\n}\n.wi-moon-waxing-crescent-6:before {\n  content: \"\\f09b\";\n}\n.wi-moon-first-quarter:before {\n  content: \"\\f09c\";\n}\n.wi-moon-waxing-gibbous-1:before {\n  content: \"\\f09d\";\n}\n.wi-moon-waxing-gibbous-2:before {\n  content: \"\\f09e\";\n}\n.wi-moon-waxing-gibbous-3:before {\n  content: \"\\f09f\";\n}\n.wi-moon-waxing-gibbous-4:before {\n  content: \"\\f0a0\";\n}\n.wi-moon-waxing-gibbous-5:before {\n  content: \"\\f0a1\";\n}\n.wi-moon-waxing-gibbous-6:before {\n  content: \"\\f0a2\";\n}\n.wi-moon-full:before {\n  content: \"\\f0a3\";\n}\n.wi-moon-waning-gibbous-1:before {\n  content: \"\\f0a4\";\n}\n.wi-moon-waning-gibbous-2:before {\n  content: \"\\f0a5\";\n}\n.wi-moon-waning-gibbous-3:before {\n  content: \"\\f0a6\";\n}\n.wi-moon-waning-gibbous-4:before {\n  content: \"\\f0a7\";\n}\n.wi-moon-waning-gibbous-5:before {\n  content: \"\\f0a8\";\n}\n.wi-moon-waning-gibbous-6:before {\n  content: \"\\f0a9\";\n}\n.wi-moon-third-quarter:before {\n  content: \"\\f0aa\";\n}\n.wi-moon-waning-crescent-1:before {\n  content: \"\\f0ab\";\n}\n.wi-moon-waning-crescent-2:before {\n  content: \"\\f0ac\";\n}\n.wi-moon-waning-crescent-3:before {\n  content: \"\\f0ad\";\n}\n.wi-moon-waning-crescent-4:before {\n  content: \"\\f0ae\";\n}\n.wi-moon-waning-crescent-5:before {\n  content: \"\\f0af\";\n}\n.wi-moon-waning-crescent-6:before {\n  content: \"\\f0b0\";\n}\n.wi-moon-alt-new:before {\n  content: \"\\f0eb\";\n}\n.wi-moon-alt-waxing-crescent-1:before {\n  content: \"\\f0d0\";\n}\n.wi-moon-alt-waxing-crescent-2:before {\n  content: \"\\f0d1\";\n}\n.wi-moon-alt-waxing-crescent-3:before {\n  content: \"\\f0d2\";\n}\n.wi-moon-alt-waxing-crescent-4:before {\n  content: \"\\f0d3\";\n}\n.wi-moon-alt-waxing-crescent-5:before {\n  content: \"\\f0d4\";\n}\n.wi-moon-alt-waxing-crescent-6:before {\n  content: \"\\f0d5\";\n}\n.wi-moon-alt-first-quarter:before {\n  content: \"\\f0d6\";\n}\n.wi-moon-alt-waxing-gibbous-1:before {\n  content: \"\\f0d7\";\n}\n.wi-moon-alt-waxing-gibbous-2:before {\n  content: \"\\f0d8\";\n}\n.wi-moon-alt-waxing-gibbous-3:before {\n  content: \"\\f0d9\";\n}\n.wi-moon-alt-waxing-gibbous-4:before {\n  content: \"\\f0da\";\n}\n.wi-moon-alt-waxing-gibbous-5:before {\n  content: \"\\f0db\";\n}\n.wi-moon-alt-waxing-gibbous-6:before {\n  content: \"\\f0dc\";\n}\n.wi-moon-alt-full:before {\n  content: \"\\f0dd\";\n}\n.wi-moon-alt-waning-gibbous-1:before {\n  content: \"\\f0de\";\n}\n.wi-moon-alt-waning-gibbous-2:before {\n  content: \"\\f0df\";\n}\n.wi-moon-alt-waning-gibbous-3:before {\n  content: \"\\f0e0\";\n}\n.wi-moon-alt-waning-gibbous-4:before {\n  content: \"\\f0e1\";\n}\n.wi-moon-alt-waning-gibbous-5:before {\n  content: \"\\f0e2\";\n}\n.wi-moon-alt-waning-gibbous-6:before {\n  content: \"\\f0e3\";\n}\n.wi-moon-alt-third-quarter:before {\n  content: \"\\f0e4\";\n}\n.wi-moon-alt-waning-crescent-1:before {\n  content: \"\\f0e5\";\n}\n.wi-moon-alt-waning-crescent-2:before {\n  content: \"\\f0e6\";\n}\n.wi-moon-alt-waning-crescent-3:before {\n  content: \"\\f0e7\";\n}\n.wi-moon-alt-waning-crescent-4:before {\n  content: \"\\f0e8\";\n}\n.wi-moon-alt-waning-crescent-5:before {\n  content: \"\\f0e9\";\n}\n.wi-moon-alt-waning-crescent-6:before {\n  content: \"\\f0ea\";\n}\n.wi-moon-0:before {\n  content: \"\\f095\";\n}\n.wi-moon-1:before {\n  content: \"\\f096\";\n}\n.wi-moon-2:before {\n  content: \"\\f097\";\n}\n.wi-moon-3:before {\n  content: \"\\f098\";\n}\n.wi-moon-4:before {\n  content: \"\\f099\";\n}\n.wi-moon-5:before {\n  content: \"\\f09a\";\n}\n.wi-moon-6:before {\n  content: \"\\f09b\";\n}\n.wi-moon-7:before {\n  content: \"\\f09c\";\n}\n.wi-moon-8:before {\n  content: \"\\f09d\";\n}\n.wi-moon-9:before {\n  content: \"\\f09e\";\n}\n.wi-moon-10:before {\n  content: \"\\f09f\";\n}\n.wi-moon-11:before {\n  content: \"\\f0a0\";\n}\n.wi-moon-12:before {\n  content: \"\\f0a1\";\n}\n.wi-moon-13:before {\n  content: \"\\f0a2\";\n}\n.wi-moon-14:before {\n  content: \"\\f0a3\";\n}\n.wi-moon-15:before {\n  content: \"\\f0a4\";\n}\n.wi-moon-16:before {\n  content: \"\\f0a5\";\n}\n.wi-moon-17:before {\n  content: \"\\f0a6\";\n}\n.wi-moon-18:before {\n  content: \"\\f0a7\";\n}\n.wi-moon-19:before {\n  content: \"\\f0a8\";\n}\n.wi-moon-20:before {\n  content: \"\\f0a9\";\n}\n.wi-moon-21:before {\n  content: \"\\f0aa\";\n}\n.wi-moon-22:before {\n  content: \"\\f0ab\";\n}\n.wi-moon-23:before {\n  content: \"\\f0ac\";\n}\n.wi-moon-24:before {\n  content: \"\\f0ad\";\n}\n.wi-moon-25:before {\n  content: \"\\f0ae\";\n}\n.wi-moon-26:before {\n  content: \"\\f0af\";\n}\n.wi-moon-27:before {\n  content: \"\\f0b0\";\n}\n.wi-time-1:before {\n  content: \"\\f08a\";\n}\n.wi-time-2:before {\n  content: \"\\f08b\";\n}\n.wi-time-3:before {\n  content: \"\\f08c\";\n}\n.wi-time-4:before {\n  content: \"\\f08d\";\n}\n.wi-time-5:before {\n  content: \"\\f08e\";\n}\n.wi-time-6:before {\n  content: \"\\f08f\";\n}\n.wi-time-7:before {\n  content: \"\\f090\";\n}\n.wi-time-8:before {\n  content: \"\\f091\";\n}\n.wi-time-9:before {\n  content: \"\\f092\";\n}\n.wi-time-10:before {\n  content: \"\\f093\";\n}\n.wi-time-11:before {\n  content: \"\\f094\";\n}\n.wi-time-12:before {\n  content: \"\\f089\";\n}\n.wi-direction-up:before {\n  content: \"\\f058\";\n}\n.wi-direction-up-right:before {\n  content: \"\\f057\";\n}\n.wi-direction-right:before {\n  content: \"\\f04d\";\n}\n.wi-direction-down-right:before {\n  content: \"\\f088\";\n}\n.wi-direction-down:before {\n  content: \"\\f044\";\n}\n.wi-direction-down-left:before {\n  content: \"\\f043\";\n}\n.wi-direction-left:before {\n  content: \"\\f048\";\n}\n.wi-direction-up-left:before {\n  content: \"\\f087\";\n}\n.wi-wind-beaufort-0:before {\n  content: \"\\f0b7\";\n}\n.wi-wind-beaufort-1:before {\n  content: \"\\f0b8\";\n}\n.wi-wind-beaufort-2:before {\n  content: \"\\f0b9\";\n}\n.wi-wind-beaufort-3:before {\n  content: \"\\f0ba\";\n}\n.wi-wind-beaufort-4:before {\n  content: \"\\f0bb\";\n}\n.wi-wind-beaufort-5:before {\n  content: \"\\f0bc\";\n}\n.wi-wind-beaufort-6:before {\n  content: \"\\f0bd\";\n}\n.wi-wind-beaufort-7:before {\n  content: \"\\f0be\";\n}\n.wi-wind-beaufort-8:before {\n  content: \"\\f0bf\";\n}\n.wi-wind-beaufort-9:before {\n  content: \"\\f0c0\";\n}\n.wi-wind-beaufort-10:before {\n  content: \"\\f0c1\";\n}\n.wi-wind-beaufort-11:before {\n  content: \"\\f0c2\";\n}\n.wi-wind-beaufort-12:before {\n  content: \"\\f0c3\";\n}\n.wi-yahoo-0:before {\n  content: \"\\f056\";\n}\n.wi-yahoo-1:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-2:before {\n  content: \"\\f073\";\n}\n.wi-yahoo-3:before {\n  content: \"\\f01e\";\n}\n.wi-yahoo-4:before {\n  content: \"\\f01e\";\n}\n.wi-yahoo-5:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-6:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-7:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-8:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-9:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-10:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-11:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-12:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-13:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-14:before {\n  content: \"\\f00a\";\n}\n.wi-yahoo-15:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-16:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-17:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-18:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-19:before {\n  content: \"\\f063\";\n}\n.wi-yahoo-20:before {\n  content: \"\\f014\";\n}\n.wi-yahoo-21:before {\n  content: \"\\f021\";\n}\n.wi-yahoo-22:before {\n  content: \"\\f062\";\n}\n.wi-yahoo-23:before {\n  content: \"\\f050\";\n}\n.wi-yahoo-24:before {\n  content: \"\\f050\";\n}\n.wi-yahoo-25:before {\n  content: \"\\f076\";\n}\n.wi-yahoo-26:before {\n  content: \"\\f013\";\n}\n.wi-yahoo-27:before {\n  content: \"\\f031\";\n}\n.wi-yahoo-28:before {\n  content: \"\\f002\";\n}\n.wi-yahoo-29:before {\n  content: \"\\f031\";\n}\n.wi-yahoo-30:before {\n  content: \"\\f002\";\n}\n.wi-yahoo-31:before {\n  content: \"\\f02e\";\n}\n.wi-yahoo-32:before {\n  content: \"\\f00d\";\n}\n.wi-yahoo-33:before {\n  content: \"\\f083\";\n}\n.wi-yahoo-34:before {\n  content: \"\\f00c\";\n}\n.wi-yahoo-35:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-36:before {\n  content: \"\\f072\";\n}\n.wi-yahoo-37:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-38:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-39:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-40:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-41:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-42:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-43:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-44:before {\n  content: \"\\f00c\";\n}\n.wi-yahoo-45:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-46:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-47:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-3200:before {\n  content: \"\\f077\";\n}\n.wi-forecast-io-clear-day:before {\n  content: \"\\f00d\";\n}\n.wi-forecast-io-clear-night:before {\n  content: \"\\f02e\";\n}\n.wi-forecast-io-rain:before {\n  content: \"\\f019\";\n}\n.wi-forecast-io-snow:before {\n  content: \"\\f01b\";\n}\n.wi-forecast-io-sleet:before {\n  content: \"\\f0b5\";\n}\n.wi-forecast-io-wind:before {\n  content: \"\\f050\";\n}\n.wi-forecast-io-fog:before {\n  content: \"\\f014\";\n}\n.wi-forecast-io-cloudy:before {\n  content: \"\\f013\";\n}\n.wi-forecast-io-partly-cloudy-day:before {\n  content: \"\\f002\";\n}\n.wi-forecast-io-partly-cloudy-night:before {\n  content: \"\\f031\";\n}\n.wi-forecast-io-hail:before {\n  content: \"\\f015\";\n}\n.wi-forecast-io-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-forecast-io-tornado:before {\n  content: \"\\f056\";\n}\n.wi-wmo4680-0:before,\n.wi-wmo4680-00:before {\n  content: \"\\f055\";\n}\n.wi-wmo4680-1:before,\n.wi-wmo4680-01:before {\n  content: \"\\f013\";\n}\n.wi-wmo4680-2:before,\n.wi-wmo4680-02:before {\n  content: \"\\f055\";\n}\n.wi-wmo4680-3:before,\n.wi-wmo4680-03:before {\n  content: \"\\f013\";\n}\n.wi-wmo4680-4:before,\n.wi-wmo4680-04:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-5:before,\n.wi-wmo4680-05:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-10:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-11:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-12:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-18:before {\n  content: \"\\f050\";\n}\n.wi-wmo4680-20:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-21:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-22:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-23:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-24:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-25:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-26:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-27:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-28:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-29:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-30:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-31:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-32:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-33:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-34:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-35:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-40:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-41:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-42:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-43:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-44:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-45:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-46:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-47:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-48:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-50:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-51:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-52:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-53:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-54:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-55:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-56:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-57:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-58:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-60:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-61:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-62:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-63:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-64:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-65:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-66:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-67:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-68:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-70:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-71:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-72:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-73:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-74:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-75:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-76:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-77:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-78:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-80:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-81:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-82:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-83:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-84:before {\n  content: \"\\f01d\";\n}\n.wi-wmo4680-85:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-86:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-87:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-89:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-90:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-91:before {\n  content: \"\\f01d\";\n}\n.wi-wmo4680-92:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-93:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-94:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-95:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-96:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-99:before {\n  content: \"\\f056\";\n}\n.wi-owm-200:before {\n  content: \"\\f01e\";\n}\n.wi-owm-201:before {\n  content: \"\\f01e\";\n}\n.wi-owm-202:before {\n  content: \"\\f01e\";\n}\n.wi-owm-210:before {\n  content: \"\\f016\";\n}\n.wi-owm-211:before {\n  content: \"\\f016\";\n}\n.wi-owm-212:before {\n  content: \"\\f016\";\n}\n.wi-owm-221:before {\n  content: \"\\f016\";\n}\n.wi-owm-230:before {\n  content: \"\\f01e\";\n}\n.wi-owm-231:before {\n  content: \"\\f01e\";\n}\n.wi-owm-232:before {\n  content: \"\\f01e\";\n}\n.wi-owm-300:before {\n  content: \"\\f01c\";\n}\n.wi-owm-301:before {\n  content: \"\\f01c\";\n}\n.wi-owm-302:before {\n  content: \"\\f019\";\n}\n.wi-owm-310:before {\n  content: \"\\f017\";\n}\n.wi-owm-311:before {\n  content: \"\\f019\";\n}\n.wi-owm-312:before {\n  content: \"\\f019\";\n}\n.wi-owm-313:before {\n  content: \"\\f01a\";\n}\n.wi-owm-314:before {\n  content: \"\\f019\";\n}\n.wi-owm-321:before {\n  content: \"\\f01c\";\n}\n.wi-owm-500:before {\n  content: \"\\f01c\";\n}\n.wi-owm-501:before {\n  content: \"\\f019\";\n}\n.wi-owm-502:before {\n  content: \"\\f019\";\n}\n.wi-owm-503:before {\n  content: \"\\f019\";\n}\n.wi-owm-504:before {\n  content: \"\\f019\";\n}\n.wi-owm-511:before {\n  content: \"\\f017\";\n}\n.wi-owm-520:before {\n  content: \"\\f01a\";\n}\n.wi-owm-521:before {\n  content: \"\\f01a\";\n}\n.wi-owm-522:before {\n  content: \"\\f01a\";\n}\n.wi-owm-531:before {\n  content: \"\\f01d\";\n}\n.wi-owm-600:before {\n  content: \"\\f01b\";\n}\n.wi-owm-601:before {\n  content: \"\\f01b\";\n}\n.wi-owm-602:before {\n  content: \"\\f0b5\";\n}\n.wi-owm-611:before {\n  content: \"\\f017\";\n}\n.wi-owm-612:before {\n  content: \"\\f017\";\n}\n.wi-owm-615:before {\n  content: \"\\f017\";\n}\n.wi-owm-616:before {\n  content: \"\\f017\";\n}\n.wi-owm-620:before {\n  content: \"\\f017\";\n}\n.wi-owm-621:before {\n  content: \"\\f01b\";\n}\n.wi-owm-622:before {\n  content: \"\\f01b\";\n}\n.wi-owm-701:before {\n  content: \"\\f014\";\n}\n.wi-owm-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-741:before {\n  content: \"\\f014\";\n}\n.wi-owm-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-771:before {\n  content: \"\\f011\";\n}\n.wi-owm-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-800:before {\n  content: \"\\f00d\";\n}\n.wi-owm-801:before {\n  content: \"\\f041\";\n}\n.wi-owm-802:before {\n  content: \"\\f041\";\n}\n.wi-owm-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-901:before {\n  content: \"\\f01d\";\n}\n.wi-owm-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-905:before {\n  content: \"\\f021\";\n}\n.wi-owm-906:before {\n  content: \"\\f015\";\n}\n.wi-owm-957:before {\n  content: \"\\f050\";\n}\n.wi-owm-day-200:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-201:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-202:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-210:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-211:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-212:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-221:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-230:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-231:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-232:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-300:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-301:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-302:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-310:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-311:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-312:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-313:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-314:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-321:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-500:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-501:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-502:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-503:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-504:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-511:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-520:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-521:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-522:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-531:before {\n  content: \"\\f00e\";\n}\n.wi-owm-day-600:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-601:before {\n  content: \"\\f0b2\";\n}\n.wi-owm-day-602:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-611:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-612:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-615:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-616:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-620:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-621:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-622:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-701:before {\n  content: \"\\f003\";\n}\n.wi-owm-day-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-day-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-day-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-741:before {\n  content: \"\\f003\";\n}\n.wi-owm-day-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-day-800:before {\n  content: \"\\f00d\";\n}\n.wi-owm-day-801:before {\n  content: \"\\f002\";\n}\n.wi-owm-day-802:before {\n  content: \"\\f002\";\n}\n.wi-owm-day-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-day-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-day-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-day-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-day-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-day-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-day-906:before {\n  content: \"\\f004\";\n}\n.wi-owm-day-957:before {\n  content: \"\\f050\";\n}\n.wi-owm-night-200:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-201:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-202:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-210:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-211:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-212:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-221:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-230:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-231:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-232:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-300:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-301:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-302:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-310:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-311:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-312:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-313:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-314:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-321:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-500:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-501:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-502:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-503:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-504:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-511:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-520:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-521:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-522:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-531:before {\n  content: \"\\f02c\";\n}\n.wi-owm-night-600:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-601:before {\n  content: \"\\f0b4\";\n}\n.wi-owm-night-602:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-611:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-612:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-615:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-616:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-620:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-621:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-622:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-701:before {\n  content: \"\\f04a\";\n}\n.wi-owm-night-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-night-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-night-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-741:before {\n  content: \"\\f04a\";\n}\n.wi-owm-night-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-night-800:before {\n  content: \"\\f02e\";\n}\n.wi-owm-night-801:before {\n  content: \"\\f081\";\n}\n.wi-owm-night-802:before {\n  content: \"\\f086\";\n}\n.wi-owm-night-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-night-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-night-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-night-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-night-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-night-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-night-906:before {\n  content: \"\\f024\";\n}\n.wi-owm-night-957:before {\n  content: \"\\f050\";\n}\n.wi-wu-chanceflurries:before {\n  content: \"\\f064\";\n}\n.wi-wu-chancerain:before {\n  content: \"\\f019\";\n}\n.wi-wu-chancesleat:before {\n  content: \"\\f0b5\";\n}\n.wi-wu-chancesnow:before {\n  content: \"\\f01b\";\n}\n.wi-wu-chancetstorms:before {\n  content: \"\\f01e\";\n}\n.wi-wu-clear:before {\n  content: \"\\f00d\";\n}\n.wi-wu-cloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-flurries:before {\n  content: \"\\f064\";\n}\n.wi-wu-hazy:before {\n  content: \"\\f0b6\";\n}\n.wi-wu-mostlycloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-mostlysunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-partlycloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-partlysunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-rain:before {\n  content: \"\\f01a\";\n}\n.wi-wu-sleat:before {\n  content: \"\\f0b5\";\n}\n.wi-wu-snow:before {\n  content: \"\\f01b\";\n}\n.wi-wu-sunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-tstorms:before {\n  content: \"\\f01e\";\n}\n.wi-wu-unknown:before {\n  content: \"\\f00d\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/styles.css":
/*!****************************!*\
  !*** ./src/CSS/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "../../node_modules/css-loader/dist/cjs.js!./src/CSS/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/CSS/weather-icons.css":
/*!***********************************!*\
  !*** ./src/CSS/weather-icons.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_icons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./weather-icons.css */ "../../node_modules/css-loader/dist/cjs.js!./src/CSS/weather-icons.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weather_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weather_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weather_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weather_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/Conditions.js":
/*!***********************************!*\
  !*** ./src/classes/Conditions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditions: () => (/* binding */ CurrentConditions),
/* harmony export */   DailyConditions: () => (/* binding */ DailyConditions),
/* harmony export */   HourlyConditions: () => (/* binding */ HourlyConditions),
/* harmony export */   "default": () => (/* binding */ Conditions)
/* harmony export */ });
class Conditions {
    constructor(data) {
        this.conditions = data.conditions;
        this.icon = data.icon;
        this.temperature = data.temp;
        this.feels = data.feelslike;
        this.precip = Math.round(data.precipprob);
    }
}

class CurrentConditions extends Conditions {
    constructor(data) {
        super(data.currentConditions);
        this.high = Math.round(data.days[0].tempmax);
        this.low = Math.round(data.days[0].tempmin);
    }
}

class HourlyConditions extends Conditions {
    constructor(data, day, hour) {
        super(data.days[day].hours[hour]);
        this.hour = hour;
    }
}

class DailyConditions extends Conditions {
    constructor (data, day) {
        super(data.days[day]);
        this.day = data.days[day].datetime;
    }
}

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAndDisplayLocationConditions)
/* harmony export */ });
/* harmony import */ var _locationConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationConditions */ "./src/modules/locationConditions.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/modules/display.js");



async function createAndDisplayLocationConditions(location) {

    //Get weather data
    const data = await (0,_locationConditions__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location);
    const current = (0,_locationConditions__WEBPACK_IMPORTED_MODULE_0__.createCurrentConditions)(data);
    const hourly = (0,_locationConditions__WEBPACK_IMPORTED_MODULE_0__.createHourlyArray)(data, (0,_locationConditions__WEBPACK_IMPORTED_MODULE_0__.getNextHour)(data));
    const daily = (0,_locationConditions__WEBPACK_IMPORTED_MODULE_0__.createDailyArray)(data);

    //Display weather data
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayLocation)(data.resolvedAddress);
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayCurrentConditions)(current);
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayHourlyConditions)(hourly);
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayDailyConditions)(daily);
}



/***/ }),

/***/ "./src/modules/dataProcessing.js":
/*!***************************************!*\
  !*** ./src/modules/dataProcessing.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTo12HourTime: () => (/* binding */ convertTo12HourTime),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   parseDay: () => (/* binding */ parseDay),
/* harmony export */   parseMonth: () => (/* binding */ parseMonth),
/* harmony export */   tempScale: () => (/* binding */ tempScale)
/* harmony export */ });
function convertTo12HourTime(time) {
    if (time === 0) {
        return '12 AM';
    }
    else if (time <= 11) {
        return `${time} AM`;
    }
    else if (time === 12) {
        return '12 PM';
    }
    else {
        return `${time - 12} PM`
    }
}

function parseDate(dateString) {
    const dateArray = dateString.split('-');
    const year = dateArray[0];
    const month = dateArray[1] - 1;
    const day = dateArray[2];
    const parsedDate = new Date(year, month, day);

    return parsedDate;
}

function parseDay(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

function parseMonth(date) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[date.getMonth()];
}

function tempScale(temp, scale) {
    if (scale === 'F') {
        return Math.round(temp);
    }
    else return Math.round((temp - 32) / 1.8);
}

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCurrentConditions: () => (/* binding */ displayCurrentConditions),
/* harmony export */   displayDailyConditions: () => (/* binding */ displayDailyConditions),
/* harmony export */   displayHourlyConditions: () => (/* binding */ displayHourlyConditions),
/* harmony export */   displayLocation: () => (/* binding */ displayLocation)
/* harmony export */ });
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherIcon */ "./src/modules/weatherIcon.js");
/* harmony import */ var _dataProcessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataProcessing */ "./src/modules/dataProcessing.js");
/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputHandler */ "./src/modules/inputHandler.js");




function displayCurrentConditions(current) {
  const container = document.querySelector(".current-container");
  resetContainer(container);

  //Title
  const title = document.createElement('h3');
  title.textContent = 'Current Conditions';

  //Left Side
  const leftDiv = document.createElement('div');
  leftDiv.classList.add("flex-left");

  const temp = document.createElement('span');
  temp.classList.add("temp");
  temp.textContent = `${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(current.temperature, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}°${_inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale}`; //MAKE IT DYNAMIC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const icon = document.createElement('i');
  icon.classList.add("wi", (0,_weatherIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(current.icon), "weather-icon");

  leftDiv.appendChild(temp);
  leftDiv.appendChild(icon);

  //Right Side
  const rightDiv = document.createElement('div');
  rightDiv.classList.add("flex-right");

  const conditions = document.createElement('p');
  conditions.classList.add("conditions");
  conditions.textContent = current.conditions;

  const feelslike = document.createElement('p');
  feelslike.classList.add("feelslike");
  feelslike.textContent = `Feels like ${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(current.feels, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}`;

  const highlow = document.createElement('p');
  highlow.classList.add("high-low");
  highlow.textContent = `H: ${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(current.high, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}° L: ${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(current.low, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}°`;

  rightDiv.appendChild(conditions);
  rightDiv.appendChild(feelslike);
  rightDiv.appendChild(highlow);
  
  //Display Elements
  container.appendChild(title);
  container.appendChild(leftDiv);
  container.appendChild(rightDiv);
}

function displayHourlyConditions(hourly) {
    const container = document.querySelector('.hourly-container');
    resetContainer(container);

    //Title
    const title = document.createElement('h3');
    title.textContent = 'Hourly Forecast';
    container.appendChild(title);


    for(let i = 0; i < hourly.length; i++) {
        const hour = document.createElement('div');
        hour.classList.add('hour');
    
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.convertTo12HourTime)(hourly[i].hour)}`; //MIGHT NEED TO CONVERT TIME INTO AM/PM

        const icon = document.createElement('i');
        icon.classList.add("wi", (0,_weatherIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(hourly[i].icon), "weather-icon");

        const temp = document.createElement('p');
        temp.classList.add('temp');
        temp.textContent = `${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(hourly[i].temperature, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}°`;

        const feelslike = document.createElement('p');
        feelslike.classList.add('feelslike');
        feelslike.textContent = `Feels ${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(hourly[i].feels, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}`

        //Precipitation
        const precipContainer = document.createElement('div');
        precipContainer.classList.add('precip');

        const precipIcon = document.createElement('i');
        precipIcon.classList.add('wi', 'wi-rain', 'precip-icon');
        
        const precipChance = document.createElement('p');
        precipChance.classList.add('precip-chance');
        precipChance.textContent= `${hourly[i].precip}%`

        precipContainer.appendChild(precipIcon);
        precipContainer.appendChild(precipChance);

        hour.appendChild(time);
        hour.appendChild(icon);
        hour.appendChild(temp);
        hour.appendChild(feelslike);
        hour.appendChild(precipContainer);

        //Display Elements
        container.appendChild(hour);
    }
}

function displayDailyConditions(daily) {
    const container = document.querySelector('.daily-container');
    resetContainer(container);

    //Title
    const title = document.createElement('h3');
    title.textContent = 'Daily Forecast';
    container.appendChild(title);

    for(let i = 0; i < daily.length; i++) {
        const dateObject = (0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.parseDate)(daily[i].day);

        const day = document.createElement('div');
        day.classList.add('day');
        
        const weekday = document.createElement('p');
        weekday.classList.add('day');
        weekday.textContent = (0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.parseDay)(dateObject);

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = `${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.parseMonth)(dateObject)} ${dateObject.getDate()}`;

        const icon = document.createElement('i');
        icon.classList.add('wi', (0,_weatherIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(daily[i].icon), 'weather-icon');

        const temp = document.createElement('p');
        temp.classList.add('temp');
        temp.textContent = `${(0,_dataProcessing__WEBPACK_IMPORTED_MODULE_1__.tempScale)(daily[i].temperature, _inputHandler__WEBPACK_IMPORTED_MODULE_2__.temperatureScale)}°`;

        const precipContainer = document.createElement('div');
        precipContainer.classList.add('precip');

        const precipIcon = document.createElement('i');
        precipIcon.classList.add('wi', 'wi-rain', 'precip-icon');

        const precipChance = document.createElement('p');
        precipChance.classList.add('precip-chance');
        precipChance.textContent = `${daily[i].precip}%`;

        precipContainer.appendChild(precipIcon);
        precipContainer.appendChild(precipChance);

        day.appendChild(weekday);
        day.appendChild(date);
        day.appendChild(icon);
        day.appendChild(temp);
        day.appendChild(precipContainer);

        //Display Contents
        container.appendChild(day);
    }
}

function resetContainer(container) {
    container.textContent = '';
}

function displayLocation(location) {
    const locationContainer = document.querySelector('.location');
    locationContainer.textContent = location;
}


/***/ }),

/***/ "./src/modules/inputHandler.js":
/*!*************************************!*\
  !*** ./src/modules/inputHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentLocation: () => (/* binding */ currentLocation),
/* harmony export */   initializeScaleButtonListener: () => (/* binding */ initializeScaleButtonListener),
/* harmony export */   initializeSearchListener: () => (/* binding */ initializeSearchListener),
/* harmony export */   temperatureScale: () => (/* binding */ temperatureScale)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/modules/controller.js");


let temperatureScale = 'C';
let currentLocation = 'Winnipeg';

function initializeSearchListener() {
  const searchForm = document.querySelector("form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const input = formData.get('search');
    currentLocation = input;
    searchForm.reset();
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__["default"])(currentLocation);
  });
}

function initializeScaleButtonListener() {
  const button = document.querySelector('.scale');

  button.addEventListener('click', () => {
    toggleScale();
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__["default"])(currentLocation);
  });
}

function toggleScale() {
  if (temperatureScale === 'C') {
    temperatureScale = 'F';
  }
  else {
    temperatureScale = 'C';
  }
}


/***/ }),

/***/ "./src/modules/locationConditions.js":
/*!*******************************************!*\
  !*** ./src/modules/locationConditions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCurrentConditions: () => (/* binding */ createCurrentConditions),
/* harmony export */   createDailyArray: () => (/* binding */ createDailyArray),
/* harmony export */   createHourlyArray: () => (/* binding */ createHourlyArray),
/* harmony export */   getNextHour: () => (/* binding */ getNextHour),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _classes_Conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Conditions */ "./src/classes/Conditions.js");


async function getWeatherData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=M4R3P2FDZV8FCPUD7GH2RFGAB`);
    const data = await response.json();
    return data;
}

function createCurrentConditions(data) {
    return new _classes_Conditions__WEBPACK_IMPORTED_MODULE_0__.CurrentConditions(data);
}

function createHourlyArray(data, startHour) {
    const hourlyArray = [];
    let day = 0;
    let hour = startHour;

    for (let i = 0; i < 5; i++) {
        if (hour === 24) {
            day += 1;
            hour = 0;
        }
        const conditions = new _classes_Conditions__WEBPACK_IMPORTED_MODULE_0__.HourlyConditions(data, day, hour);
        hourlyArray.push(conditions);
        hour += 1;
    }

    return hourlyArray;
}

function createDailyArray(data) {
    const dailyArray = [];

    for (let i = 0; i < 7; i++) {
        const conditions = new _classes_Conditions__WEBPACK_IMPORTED_MODULE_0__.DailyConditions(data, i);
        dailyArray.push(conditions);
    }

    return dailyArray;
}

function getNextHour(data) {
    return Number(data.currentConditions.datetime.substring(0,2)) + 1;
}

/***/ }),

/***/ "./src/modules/weatherIcon.js":
/*!************************************!*\
  !*** ./src/modules/weatherIcon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherIconName)
/* harmony export */ });
function getWeatherIconName(icon) {
    if (icon === 'snow') {
        return 'wi-snow';
    }
    if (icon === 'rain') {
        return 'wi-rain';
    }
    if (icon === 'fog') {
        return 'wi-fog';
    }
    if (icon === 'wind') {
        return 'wi-windy';
    }
    if (icon === 'cloudy') {
        return 'wi-cloudy';
    }
    if (icon === 'partly-cloudy-day') {
        return 'wi-day-cloudy';
    }
    if (icon === 'partly-cloudy-night') {
        return 'wi-night-alt-cloudy';
    }
    if (icon === 'clear-day') {
        return 'wi-day-sunny';
    }
    if (icon === 'clear-night') {
        return 'wi-night-clear';
    }
}

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.eot":
/*!***************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.eot ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb2ec001c20cf752f852.eot";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.svg":
/*!***************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1341a15172cec8dae06e.svg";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.ttf":
/*!***************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0942d1e1c447d6ce3ffc.ttf";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.woff":
/*!****************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "371511ddba5fdac0538c.woff";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e218aee6928fe3da9ed6.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/styles.css */ "./src/CSS/styles.css");
/* harmony import */ var _CSS_weather_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSS/weather-icons.css */ "./src/CSS/weather-icons.css");
/* harmony import */ var _modules_inputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/inputHandler */ "./src/modules/inputHandler.js");
/* harmony import */ var _modules_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controller */ "./src/modules/controller.js");







(0,_modules_inputHandler__WEBPACK_IMPORTED_MODULE_2__.initializeSearchListener)();
(0,_modules_inputHandler__WEBPACK_IMPORTED_MODULE_2__.initializeScaleButtonListener)();

(0,_modules_controller__WEBPACK_IMPORTED_MODULE_3__["default"])(_modules_inputHandler__WEBPACK_IMPORTED_MODULE_2__.currentLocation);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksNkJBQTZCLDZCQUE2Qiw4QkFBOEIsbUNBQW1DLHlCQUF5QixrQkFBa0IsbUJBQW1CLDBCQUEwQixHQUFHLFdBQVcsaUNBQWlDLG1DQUFtQywyQkFBMkIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsaUNBQWlDLEdBQUcsUUFBUSx5QkFBeUIsaUJBQWlCLGdCQUFnQixnQ0FBZ0MsdUJBQXVCLEdBQUcsMkJBQTJCLGdDQUFnQyxHQUFHLFVBQVUsK0NBQStDLG9CQUFvQixvQkFBb0IsOEJBQThCLHNDQUFzQyx3QkFBd0IsR0FBRyxRQUFRLHNCQUFzQixHQUFHLHNCQUFzQiw2QkFBNkIsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxhQUFhLDBCQUEwQixtQkFBbUIsa0JBQWtCLG1CQUFtQixpREFBaUQsZ0NBQWdDLEdBQUcsa0JBQWtCLDRDQUE0QyxHQUFHLFdBQVcsMEJBQTBCLG1CQUFtQixtQkFBbUIseUJBQXlCLDBCQUEwQixtQkFBbUIsaURBQWlELEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHFCQUFxQiwrQkFBK0Isb0JBQW9CLHFDQUFxQyxzQ0FBc0MsZ0JBQWdCLHVCQUF1QixHQUFHLHdCQUF3Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixpREFBaUQsK0NBQStDLG9CQUFvQixrQkFBa0IsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsT0FBTyx3QkFBd0IsR0FBRyxrQkFBa0IseUJBQXlCLEdBQUcsYUFBYSxvQkFBb0IsZ0JBQWdCLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsb0JBQW9CLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QiwwQkFBMEIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyx1QkFBdUIseUJBQXlCLG9CQUFvQixpREFBaUQsK0NBQStDLGlFQUFpRSxnQkFBZ0Isb0JBQW9CLEdBQUcsc0JBQXNCLHlCQUF5QixvQkFBb0IsaURBQWlELCtDQUErQyx3QkFBd0IsaUVBQWlFLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsR0FBRyw4QkFBOEIsZ0NBQWdDLEdBQUcsdUJBQXVCLCtDQUErQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixvQ0FBb0MsK0NBQStDLEdBQUcscUJBQXFCLHlCQUF5QixHQUFHLHFCQUFxQjtBQUM5a0s7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE12QztBQUNtSDtBQUNqQjtBQUNPO0FBQ3pHLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsNENBQTRDLGdLQUE2RDtBQUN6Ryw0Q0FBNEMsOEpBQTREO0FBQ3hHLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsNENBQTRDLDRKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQixrQ0FBa0MsaUJBQWlCO0FBQzNILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0Isa0NBQWtDLCtCQUErQjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQyxxQ0FBcUMsbUNBQW1DLHlCQUF5QixtQ0FBbUMsd0JBQXdCLG1DQUFtQyw0QkFBNEIsbUNBQW1DO0FBQzlTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrR0FBK0csTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGk2QkFBaTZCLGdDQUFnQyx5REFBeUQsd1hBQXdYLHdC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LHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxpQ0FBaUMsd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxx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QUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUI7QUFDbDQrQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2owRDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQTZHO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJdUQ7QUFDL0UsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3RSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUFvSDtBQUNwSDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhGQUFPOzs7O0FBSThEO0FBQ3RGLE9BQU8saUVBQWUsOEZBQU8sSUFBSSw4RkFBTyxVQUFVLDhGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJpSTtBQUNYOztBQUV2Rzs7QUFFZjtBQUNBLHVCQUF1QixtRUFBYztBQUNyQyxvQkFBb0IsNEVBQXVCO0FBQzNDLG1CQUFtQixzRUFBaUIsT0FBTyxnRUFBVztBQUN0RCxrQkFBa0IscUVBQWdCOztBQUVsQztBQUNBLElBQUkseURBQWU7QUFDbkIsSUFBSSxrRUFBd0I7QUFDNUIsSUFBSSxpRUFBdUI7QUFDM0IsSUFBSSxnRUFBc0I7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0I7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEMrQztBQUNvRDtBQUNqRDs7QUFFM0M7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwwREFBUyxzQkFBc0IsMkRBQWdCLEVBQUUsR0FBRywyREFBZ0IsQ0FBQyxHQUFHOztBQUVoRztBQUNBLDJCQUEyQix3REFBa0I7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLDBEQUFTLGdCQUFnQiwyREFBZ0IsRUFBRTs7QUFFbkY7QUFDQTtBQUNBLDhCQUE4QiwwREFBUyxlQUFlLDJEQUFnQixFQUFFLE9BQU8sMERBQVMsY0FBYywyREFBZ0IsRUFBRTs7QUFFeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9FQUFtQixpQkFBaUIsR0FBRzs7QUFFckU7QUFDQSxpQ0FBaUMsd0RBQWtCOztBQUVuRDtBQUNBO0FBQ0EsOEJBQThCLDBEQUFTLHdCQUF3QiwyREFBZ0IsRUFBRTs7QUFFakY7QUFDQTtBQUNBLHlDQUF5QywwREFBUyxrQkFBa0IsMkRBQWdCLEVBQUU7O0FBRXRGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDLDJCQUEyQiwwREFBUzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5REFBUTs7QUFFdEM7QUFDQTtBQUNBLDhCQUE4QiwyREFBVSxjQUFjLEVBQUUscUJBQXFCOztBQUU3RTtBQUNBLGlDQUFpQyx3REFBa0I7O0FBRW5EO0FBQ0E7QUFDQSw4QkFBOEIsMERBQVMsdUJBQXVCLDJEQUFnQixFQUFFOztBQUVoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0I7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SzhEOztBQUV2RDtBQUNBOztBQUVBO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBa0M7QUFDdEMsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQWtDO0FBQ3RDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDNEY7O0FBRXJGO0FBQ1Asd0hBQXdILFNBQVM7QUFDakk7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZUFBZSxrRUFBaUI7QUFDaEM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQWdCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0IsK0JBQStCLGdFQUFlO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDTztBQUNrQztBQUNLO0FBQ0Q7QUFDYjs7QUFFekQsK0VBQXdCO0FBQ3hCLG9GQUE2Qjs7QUFFN0IsK0RBQWtDLENBQUMsa0VBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9DU1Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvQ1NTL3dlYXRoZXItaWNvbnMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvQ1NTL3N0eWxlcy5jc3M/NGFjYSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvQ1NTL3dlYXRoZXItaWNvbnMuY3NzPzg1OTgiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY2xhc3Nlcy9Db25kaXRpb25zLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvZGF0YVByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy9pbnB1dEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvbG9jYXRpb25Db25kaXRpb25zLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9tb2R1bGVzL3dlYXRoZXJJY29uLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiB2YXIoLS1mb250LW1haW4pO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xufVxuXG46cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kLW1haW46ICMxODE4MWI7XG4gICAgLS1iYWNrZ3JvdW5kLWFjY2VudDogIzI3MjcyYTtcbiAgICAtLWZvbnQtbWFpbjogI2ZhZmFmYTtcbiAgICAtLWZvbnQtYWNjZW50OiAjYTFhMWFhO1xuICAgIC0tZm9udC1kYXJrZXI6ICNlNGU0ZTc7XG4gICAgLS1idXR0b24taG92ZXI6ICMzZjNmNDY7XG4gICAgLS1jYXJkLWJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbmgzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzVweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmVlbHNsaWtlLCAuaGlnaC1sb3cge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWFjY2VudCk7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA4ZnI7XG4gICAgbWluLXdpZHRoOiAxNDAwcHg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuYnV0dG9uICB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDg3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCgxMzAwcHgsIDcwdncpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzUwcHggMzUwcHg7XG4gICAgZ2FwOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jdXJyZW50LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMzEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdyaWQtcm93OiAxO1xufVxuXG4uZmVlbHNsaWtlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmkge1xuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xufVxuXG4ucHJlY2lwLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbn1cblxuLnByZWNpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbnAudGVtcCB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5mbGV4LWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5mbGV4LWxlZnQgPiAqIHtcbiAgICBmb250LXNpemU6IDMuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZsZXgtcmlnaHQgPiAqIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmZsZXgtcmlnaHQgPiAuY29uZGl0aW9ucyB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbmRpdGlvbnMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGF0ZSB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcbn1cblxuLmhvdXJseS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAyNXB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5kYWlseS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAyNXB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5wcmVjaXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByZWNpcCA+IHAsIC5wcmVjaXAgPiBpIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrZXIpO1xufVxuXG5kaXYuZGF5LCBkaXYuaG91ciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uZGF0ZS1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0NTUy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QywwREFBMEQ7SUFDMUQsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtbWFpbik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtbWFpbjogIzE4MTgxYjtcXG4gICAgLS1iYWNrZ3JvdW5kLWFjY2VudDogIzI3MjcyYTtcXG4gICAgLS1mb250LW1haW46ICNmYWZhZmE7XFxuICAgIC0tZm9udC1hY2NlbnQ6ICNhMWExYWE7XFxuICAgIC0tZm9udC1kYXJrZXI6ICNlNGU0ZTc7XFxuICAgIC0tYnV0dG9uLWhvdmVyOiAjM2YzZjQ2O1xcbiAgICAtLWNhcmQtYm9yZGVyLXJhZGl1czogMThweDtcXG59XFxuXFxuaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTM1cHg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmZlZWxzbGlrZSwgLmhpZ2gtbG93IHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgOGZyO1xcbiAgICBtaW4td2lkdGg6IDE0MDBweDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbmJ1dHRvbiAge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA4N3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDEzMDBweCwgNzB2dyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNTBweCAzNTBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uY3VycmVudC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMzEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmkge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG59XFxuXFxuLnByZWNpcC1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4ucHJlY2lwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5wLnRlbXAge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmZsZXgtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5mbGV4LWxlZnQgPiAqIHtcXG4gICAgZm9udC1zaXplOiAzLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmxleC1yaWdodCA+ICoge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmZsZXgtcmlnaHQgPiAuY29uZGl0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29uZGl0aW9ucyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWFjY2VudCk7XFxufVxcblxcbi5ob3VybHktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyLXJhZGl1cyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMjVweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLmRhaWx5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4ucHJlY2lwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByZWNpcCA+IHAsIC5wcmVjaXAgPiBpIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFya2VyKTtcXG59XFxuXFxuZGl2LmRheSwgZGl2LmhvdXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI3dlYXRoZXJfaWNvbnNyZWd1bGFyXCIgfSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIVxuICogIFdlYXRoZXIgSWNvbnMgMi4wLjEwXG4gKiAgVXBkYXRlZCBOb3ZlbWJlciAxLCAyMDIwXG4gKiAgV2VhdGhlciB0aGVtZWQgaWNvbnMgZm9yIEJvb3RzdHJhcFxuICogIEF1dGhvciAtIEVyaWsgRmxvd2VycyAtIGVyaWtAaGVsbG9lcmlrLmNvbVxuICogIEVtYWlsOiBlcmlrQGhlbGxvZXJpay5jb21cbiAqICBUd2l0dGVyOiBodHRwOi8vdHdpdHRlci5jb20vRXJpa19VWFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIE1haW50YWluZWQgYXQgaHR0cDovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zXG4gKlxuICogIExpY2Vuc2VcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICAtIEZvbnQgbGljZW5zZWQgdW5kZXIgU0lMIE9GTCAxLjEgLVxuICogICAgaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcbiAqICAtIENTUywgU0NTUyBhbmQgTEVTUyBhcmUgbGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2UgLVxuICogICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLmh0bWxcbiAqICAtIERvY3VtZW50YXRpb24gbGljZW5zZWQgdW5kZXIgQ0MgQlkgMy4wIC1cbiAqICAgIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cbiAqICAtIEluc3BpcmVkIGJ5IGFuZCB3b3JrcyBncmVhdCBhcyBhIGNvbXBhbmlvbiB3aXRoIEZvbnQgQXdlc29tZVxuICogICAgXCJGb250IEF3ZXNvbWUgYnkgRGF2ZSBHYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pb1wiXG4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3dlYXRoZXJpY29ucyc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3dvZmYyJyksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi53aSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICd3ZWF0aGVyaWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi53aS1mdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEuNGVtO1xufVxuLndpLXJvdGF0ZS05MCB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4ud2ktcm90YXRlLTE4MCB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Mik7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ud2ktcm90YXRlLTI3MCB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4ud2ktZmxpcC1ob3Jpem9udGFsIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG59XG4ud2ktZmxpcC12ZXJ0aWNhbCB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xufVxuLndpLWRheS1zdW5ueTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG4ud2ktZGF5LWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2ktZGF5LWNsb3VkeS1ndXN0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAwXCI7XG59XG4ud2ktZGF5LWNsb3VkeS13aW5keTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAxXCI7XG59XG4ud2ktZGF5LWZvZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAzXCI7XG59XG4ud2ktZGF5LWhhaWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNFwiO1xufVxuLndpLWRheS1oYXplOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjZcIjtcbn1cbi53aS1kYXktbGlnaHRuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDVcIjtcbn1cbi53aS1kYXktcmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktZGF5LXJhaW4tbWl4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDZcIjtcbn1cbi53aS1kYXktcmFpbi13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDdcIjtcbn1cbi53aS1kYXktc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA5XCI7XG59XG4ud2ktZGF5LXNsZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjJcIjtcbn1cbi53aS1kYXktc2xlZXQtc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2OFwiO1xufVxuLndpLWRheS1zbm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGFcIjtcbn1cbi53aS1kYXktc25vdy10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2YlwiO1xufVxuLndpLWRheS1zbm93LXdpbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2NVwiO1xufVxuLndpLWRheS1zcHJpbmtsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBiXCI7XG59XG4ud2ktZGF5LXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZVwiO1xufVxuLndpLWRheS1zdW5ueS1vdmVyY2FzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBjXCI7XG59XG4ud2ktZGF5LXRodW5kZXJzdG9ybTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEwXCI7XG59XG4ud2ktZGF5LXdpbmR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODVcIjtcbn1cbi53aS1zb2xhci1lY2xpcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNmVcIjtcbn1cbi53aS1ob3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3MlwiO1xufVxuLndpLWRheS1jbG91ZHktaGlnaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDdkXCI7XG59XG4ud2ktZGF5LWxpZ2h0LXdpbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjNFwiO1xufVxuLndpLW5pZ2h0LWNsZWFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmVcIjtcbn1cbi53aS1uaWdodC1hbHQtY2xvdWR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODZcIjtcbn1cbi53aS1uaWdodC1hbHQtY2xvdWR5LWd1c3RzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjJcIjtcbn1cbi53aS1uaWdodC1hbHQtY2xvdWR5LXdpbmR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjNcIjtcbn1cbi53aS1uaWdodC1hbHQtaGFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDI0XCI7XG59XG4ud2ktbmlnaHQtYWx0LWxpZ2h0bmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDI1XCI7XG59XG4ud2ktbmlnaHQtYWx0LXJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW5pZ2h0LWFsdC1yYWluLW1peDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDI2XCI7XG59XG4ud2ktbmlnaHQtYWx0LXJhaW4td2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDI3XCI7XG59XG4ud2ktbmlnaHQtYWx0LXNob3dlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOVwiO1xufVxuLndpLW5pZ2h0LWFsdC1zbGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI0XCI7XG59XG4ud2ktbmlnaHQtYWx0LXNsZWV0LXN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNmFcIjtcbn1cbi53aS1uaWdodC1hbHQtc25vdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDJhXCI7XG59XG4ud2ktbmlnaHQtYWx0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNmRcIjtcbn1cbi53aS1uaWdodC1hbHQtc25vdy13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjdcIjtcbn1cbi53aS1uaWdodC1hbHQtc3ByaW5rbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYlwiO1xufVxuLndpLW5pZ2h0LWFsdC1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmNcIjtcbn1cbi53aS1uaWdodC1hbHQtdGh1bmRlcnN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1uaWdodC1jbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzMVwiO1xufVxuLndpLW5pZ2h0LWNsb3VkeS1ndXN0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDJmXCI7XG59XG4ud2ktbmlnaHQtY2xvdWR5LXdpbmR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzBcIjtcbn1cbi53aS1uaWdodC1mb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0YVwiO1xufVxuLndpLW5pZ2h0LWhhaWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzMlwiO1xufVxuLndpLW5pZ2h0LWxpZ2h0bmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDMzXCI7XG59XG4ud2ktbmlnaHQtcGFydGx5LWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDgzXCI7XG59XG4ud2ktbmlnaHQtcmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDM2XCI7XG59XG4ud2ktbmlnaHQtcmFpbi1taXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzNFwiO1xufVxuLndpLW5pZ2h0LXJhaW4td2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDM1XCI7XG59XG4ud2ktbmlnaHQtc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDM3XCI7XG59XG4ud2ktbmlnaHQtc2xlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiM1wiO1xufVxuLndpLW5pZ2h0LXNsZWV0LXN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjlcIjtcbn1cbi53aS1uaWdodC1zbm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzhcIjtcbn1cbi53aS1uaWdodC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDZjXCI7XG59XG4ud2ktbmlnaHQtc25vdy13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjZcIjtcbn1cbi53aS1uaWdodC1zcHJpbmtsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDM5XCI7XG59XG4ud2ktbmlnaHQtc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDNhXCI7XG59XG4ud2ktbmlnaHQtdGh1bmRlcnN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwM2JcIjtcbn1cbi53aS1sdW5hci1lY2xpcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzBcIjtcbn1cbi53aS1zdGFyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc3XCI7XG59XG4ud2ktc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFkXCI7XG59XG4ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWVcIjtcbn1cbi53aS1uaWdodC1hbHQtY2xvdWR5LWhpZ2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3ZVwiO1xufVxuLndpLW5pZ2h0LWNsb3VkeS1oaWdoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODBcIjtcbn1cbi53aS1uaWdodC1hbHQtcGFydGx5LWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDgxXCI7XG59XG4ud2ktY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0MVwiO1xufVxuLndpLWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEzXCI7XG59XG4ud2ktY2xvdWR5LWd1c3RzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTFcIjtcbn1cbi53aS1jbG91ZHktd2luZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMlwiO1xufVxuLndpLWZvZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktaGFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktcmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktcmFpbi1taXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXJhaW4td2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE4XCI7XG59XG4ud2ktc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2ktc2xlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNVwiO1xufVxuLndpLXNub3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXNwcmlua2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWNcIjtcbn1cbi53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWRcIjtcbn1cbi53aS10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXNub3ctd2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDY0XCI7XG59XG4ud2ktc25vdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktc21vZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc0XCI7XG59XG4ud2ktc21va2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2MlwiO1xufVxuLndpLWxpZ2h0bmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktcmFpbmRyb3BzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNGVcIjtcbn1cbi53aS1yYWluZHJvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc4XCI7XG59XG4ud2ktZHVzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktc25vd2ZsYWtlLWNvbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdpbmR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjFcIjtcbn1cbi53aS1zdHJvbmctd2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUwXCI7XG59XG4ud2ktc2FuZHN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODJcIjtcbn1cbi53aS1lYXJ0aHF1YWtlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzZcIjtcbn1cbi53aS1maXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzdcIjtcbn1cbi53aS1mbG9vZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDdjXCI7XG59XG4ud2ktbWV0ZW9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzFcIjtcbn1cbi53aS10c3VuYW1pOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzVcIjtcbn1cbi53aS12b2xjYW5vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzhcIjtcbn1cbi53aS1odXJyaWNhbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3M1wiO1xufVxuLndpLXRvcm5hZG86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLXNtYWxsLWNyYWZ0LWFkdmlzb3J5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwY2NcIjtcbn1cbi53aS1nYWxlLXdhcm5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjZFwiO1xufVxuLndpLXN0b3JtLXdhcm5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjZVwiO1xufVxuLndpLWh1cnJpY2FuZS13YXJuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwY2ZcIjtcbn1cbi53aS13aW5kLWRpcmVjdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGIxXCI7XG59XG4ud2ktYWxpZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NVwiO1xufVxuLndpLWNlbHNpdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzY1wiO1xufVxuLndpLWZhaHJlbmhlaXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0NVwiO1xufVxuLndpLWRlZ3JlZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0MlwiO1xufVxuLndpLXRoZXJtb21ldGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTVcIjtcbn1cbi53aS10aGVybW9tZXRlci1leHRlcmlvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUzXCI7XG59XG4ud2ktdGhlcm1vbWV0ZXItaW50ZXJuYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NFwiO1xufVxuLndpLWNsb3VkLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzZFwiO1xufVxuLndpLWNsb3VkLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNDBcIjtcbn1cbi53aS1jbG91ZC1yZWZyZXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwM2VcIjtcbn1cbi53aS1ob3Jpem9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNDdcIjtcbn1cbi53aS1ob3Jpem9uLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQ2XCI7XG59XG4ud2ktc3VucmlzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUxXCI7XG59XG4ud2ktc3Vuc2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTJcIjtcbn1cbi53aS1tb29ucmlzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGM5XCI7XG59XG4ud2ktbW9vbnNldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGNhXCI7XG59XG4ud2ktcmVmcmVzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDRjXCI7XG59XG4ud2ktcmVmcmVzaC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0YlwiO1xufVxuLndpLXVtYnJlbGxhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODRcIjtcbn1cbi53aS1iYXJvbWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3OVwiO1xufVxuLndpLWh1bWlkaXR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwN2FcIjtcbn1cbi53aS1uYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDdiXCI7XG59XG4ud2ktdHJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjYlwiO1xufVxuLndpLW1vb24tbmV3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTVcIjtcbn1cbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTZcIjtcbn1cbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTdcIjtcbn1cbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOThcIjtcbn1cbi53aS1tb29uLXdheGluZy1jcmVzY2VudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTlcIjtcbn1cbi53aS1tb29uLXdheGluZy1jcmVzY2VudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWFcIjtcbn1cbi53aS1tb29uLXdheGluZy1jcmVzY2VudC02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWJcIjtcbn1cbi53aS1tb29uLWZpcnN0LXF1YXJ0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5Y1wiO1xufVxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDlkXCI7XG59XG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWVcIjtcbn1cbi53aS1tb29uLXdheGluZy1naWJib3VzLTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5ZlwiO1xufVxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGEwXCI7XG59XG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTFcIjtcbn1cbi53aS1tb29uLXdheGluZy1naWJib3VzLTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhMlwiO1xufVxuLndpLW1vb24tZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGEzXCI7XG59XG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTRcIjtcbn1cbi53aS1tb29uLXdhbmluZy1naWJib3VzLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhNVwiO1xufVxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE2XCI7XG59XG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTdcIjtcbn1cbi53aS1tb29uLXdhbmluZy1naWJib3VzLTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhOFwiO1xufVxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE5XCI7XG59XG4ud2ktbW9vbi10aGlyZC1xdWFydGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWFcIjtcbn1cbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWJcIjtcbn1cbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWNcIjtcbn1cbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWRcIjtcbn1cbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWVcIjtcbn1cbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWZcIjtcbn1cbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjBcIjtcbn1cbi53aS1tb29uLWFsdC1uZXc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlYlwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZDBcIjtcbn1cbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQxXCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkMlwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZDNcIjtcbn1cbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQ0XCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkNVwiO1xufVxuLndpLW1vb24tYWx0LWZpcnN0LXF1YXJ0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkNlwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkN1wiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkOFwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkOVwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkYVwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkYlwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkY1wiO1xufVxuLndpLW1vb24tYWx0LWZ1bGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkZFwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkZVwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkZlwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlMFwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlMVwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlMlwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlM1wiO1xufVxuLndpLW1vb24tYWx0LXRoaXJkLXF1YXJ0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlNFwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZTVcIjtcbn1cbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGU2XCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlN1wiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZThcIjtcbn1cbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGU5XCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlYVwiO1xufVxuLndpLW1vb24tMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDk1XCI7XG59XG4ud2ktbW9vbi0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTZcIjtcbn1cbi53aS1tb29uLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5N1wiO1xufVxuLndpLW1vb24tMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDk4XCI7XG59XG4ud2ktbW9vbi00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTlcIjtcbn1cbi53aS1tb29uLTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5YVwiO1xufVxuLndpLW1vb24tNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDliXCI7XG59XG4ud2ktbW9vbi03OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWNcIjtcbn1cbi53aS1tb29uLTg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5ZFwiO1xufVxuLndpLW1vb24tOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDllXCI7XG59XG4ud2ktbW9vbi0xMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDlmXCI7XG59XG4ud2ktbW9vbi0xMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGEwXCI7XG59XG4ud2ktbW9vbi0xMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGExXCI7XG59XG4ud2ktbW9vbi0xMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGEyXCI7XG59XG4ud2ktbW9vbi0xNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGEzXCI7XG59XG4ud2ktbW9vbi0xNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE0XCI7XG59XG4ud2ktbW9vbi0xNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE1XCI7XG59XG4ud2ktbW9vbi0xNzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE2XCI7XG59XG4ud2ktbW9vbi0xODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE3XCI7XG59XG4ud2ktbW9vbi0xOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE4XCI7XG59XG4ud2ktbW9vbi0yMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE5XCI7XG59XG4ud2ktbW9vbi0yMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGFhXCI7XG59XG4ud2ktbW9vbi0yMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGFiXCI7XG59XG4ud2ktbW9vbi0yMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGFjXCI7XG59XG4ud2ktbW9vbi0yNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGFkXCI7XG59XG4ud2ktbW9vbi0yNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGFlXCI7XG59XG4ud2ktbW9vbi0yNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGFmXCI7XG59XG4ud2ktbW9vbi0yNzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGIwXCI7XG59XG4ud2ktdGltZS0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOGFcIjtcbn1cbi53aS10aW1lLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4YlwiO1xufVxuLndpLXRpbWUtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDhjXCI7XG59XG4ud2ktdGltZS00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOGRcIjtcbn1cbi53aS10aW1lLTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4ZVwiO1xufVxuLndpLXRpbWUtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDhmXCI7XG59XG4ud2ktdGltZS03OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTBcIjtcbn1cbi53aS10aW1lLTg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5MVwiO1xufVxuLndpLXRpbWUtOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDkyXCI7XG59XG4ud2ktdGltZS0xMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDkzXCI7XG59XG4ud2ktdGltZS0xMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDk0XCI7XG59XG4ud2ktdGltZS0xMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDg5XCI7XG59XG4ud2ktZGlyZWN0aW9uLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNThcIjtcbn1cbi53aS1kaXJlY3Rpb24tdXAtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1N1wiO1xufVxuLndpLWRpcmVjdGlvbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDRkXCI7XG59XG4ud2ktZGlyZWN0aW9uLWRvd24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4OFwiO1xufVxuLndpLWRpcmVjdGlvbi1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNDRcIjtcbn1cbi53aS1kaXJlY3Rpb24tZG93bi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNDNcIjtcbn1cbi53aS1kaXJlY3Rpb24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQ4XCI7XG59XG4ud2ktZGlyZWN0aW9uLXVwLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4N1wiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI3XCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjhcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiOVwiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGJhXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYmJcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiY1wiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGJkXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC03OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYmVcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiZlwiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGMwXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC0xMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGMxXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC0xMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGMyXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC0xMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGMzXCI7XG59XG4ud2kteWFob28tMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2kteWFob28tMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBlXCI7XG59XG4ud2kteWFob28tMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDczXCI7XG59XG4ud2kteWFob28tMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2kteWFob28tNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2kteWFob28tNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2kteWFob28tNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2kteWFob28tNzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2kteWFob28tODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2kteWFob28tOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2kteWFob28tMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXlhaG9vLTExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWFcIjtcbn1cbi53aS15YWhvby0xMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2kteWFob28tMTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXlhaG9vLTE0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGFcIjtcbn1cbi53aS15YWhvby0xNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDY0XCI7XG59XG4ud2kteWFob28tMTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXlhaG9vLTE3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTVcIjtcbn1cbi53aS15YWhvby0xODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2kteWFob28tMTk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLXlhaG9vLTIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTRcIjtcbn1cbi53aS15YWhvby0yMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDIxXCI7XG59XG4ud2kteWFob28tMjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2MlwiO1xufVxuLndpLXlhaG9vLTIzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTBcIjtcbn1cbi53aS15YWhvby0yNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUwXCI7XG59XG4ud2kteWFob28tMjU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXlhaG9vLTI2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS15YWhvby0yNzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDMxXCI7XG59XG4ud2kteWFob28tMjg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwMlwiO1xufVxuLndpLXlhaG9vLTI5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzFcIjtcbn1cbi53aS15YWhvby0zMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2kteWFob28tMzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZVwiO1xufVxuLndpLXlhaG9vLTMyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGRcIjtcbn1cbi53aS15YWhvby0zMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDgzXCI7XG59XG4ud2kteWFob28tMzQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwY1wiO1xufVxuLndpLXlhaG9vLTM1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTdcIjtcbn1cbi53aS15YWhvby0zNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDcyXCI7XG59XG4ud2kteWFob28tMzc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZVwiO1xufVxuLndpLXlhaG9vLTM4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGVcIjtcbn1cbi53aS15YWhvby0zOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBlXCI7XG59XG4ud2kteWFob28tNDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLXlhaG9vLTQxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjRcIjtcbn1cbi53aS15YWhvby00MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2kteWFob28tNDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2NFwiO1xufVxuLndpLXlhaG9vLTQ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGNcIjtcbn1cbi53aS15YWhvby00NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBlXCI7XG59XG4ud2kteWFob28tNDY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXlhaG9vLTQ3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGVcIjtcbn1cbi53aS15YWhvby0zMjAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzdcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1jbGVhci1kYXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLWZvcmVjYXN0LWlvLWNsZWFyLW5pZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmVcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1yYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTlcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1zbm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWJcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1zbGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI1XCI7XG59XG4ud2ktZm9yZWNhc3QtaW8td2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUwXCI7XG59XG4ud2ktZm9yZWNhc3QtaW8tZm9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTRcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1jbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktZGF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDJcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1wYXJ0bHktY2xvdWR5LW5pZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzFcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1oYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTVcIjtcbn1cbi53aS1mb3JlY2FzdC1pby10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLWZvcmVjYXN0LWlvLXRvcm5hZG86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLXdtbzQ2ODAtMDpiZWZvcmUsXG4ud2ktd21vNDY4MC0wMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU1XCI7XG59XG4ud2ktd21vNDY4MC0xOmJlZm9yZSxcbi53aS13bW80NjgwLTAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS13bW80NjgwLTI6YmVmb3JlLFxuLndpLXdtbzQ2ODAtMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NVwiO1xufVxuLndpLXdtbzQ2ODAtMzpiZWZvcmUsXG4ud2ktd21vNDY4MC0wMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEzXCI7XG59XG4ud2ktd21vNDY4MC00OmJlZm9yZSxcbi53aS13bW80NjgwLTA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTRcIjtcbn1cbi53aS13bW80NjgwLTU6YmVmb3JlLFxuLndpLXdtbzQ2ODAtMDU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLXdtbzQ2ODAtMTg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1MFwiO1xufVxuLndpLXdtbzQ2ODAtMjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtMjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtMjM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtMjQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtMjU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtMjY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXdtbzQ2ODAtMjc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLXdtbzQ2ODAtMjg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLXdtbzQ2ODAtMjk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLXdtbzQ2ODAtMzA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMzM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMzQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtMzU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtNDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtNDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNDU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtNDY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtNDc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNDg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtNTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtNTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtNTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNTg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtNjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNjM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtNjQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtNjU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtNjY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtNjc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtNjg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtNzA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNzM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNzQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtNzU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtNzY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtNzc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXdtbzQ2ODAtNzg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLXdtbzQ2ODAtODA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtODE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXdtbzQ2ODAtODI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtODM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLXdtbzQ2ODAtODQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZFwiO1xufVxuLndpLXdtbzQ2ODAtODU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtODY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtODc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXdtbzQ2ODAtODk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXdtbzQ2ODAtOTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLXdtbzQ2ODAtOTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZFwiO1xufVxuLndpLXdtbzQ2ODAtOTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXdtbzQ2ODAtOTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXdtbzQ2ODAtOTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLXdtbzQ2ODAtOTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXdtbzQ2ODAtOTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXdtbzQ2ODAtOTk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLW93bS0yMDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW93bS0yMDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW93bS0yMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW93bS0yMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLW93bS0yMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLW93bS0yMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLW93bS0yMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNlwiO1xufVxuLndpLW93bS0yMzA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW93bS0yMzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW93bS0yMzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW93bS0zMDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLW93bS0zMDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLW93bS0zMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS0zMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS0zMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS0zMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS0zMTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLW93bS0zMTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS0zMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLW93bS01MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLW93bS01MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS01MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS01MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS01MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLW93bS01MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS01MjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLW93bS01MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLW93bS01MjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLW93bS01MzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZFwiO1xufVxuLndpLW93bS02MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLW93bS02MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLW93bS02MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNVwiO1xufVxuLndpLW93bS02MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS02MTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS02MTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS02MTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS02MjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLW93bS02MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLW93bS02MjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLW93bS03MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLW93bS03MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2MlwiO1xufVxuLndpLW93bS03MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNlwiO1xufVxuLndpLW93bS03MzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS03NDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLW93bS03NjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS03NjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS03NzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMVwiO1xufVxuLndpLW93bS03ODE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLW93bS04MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLW93bS04MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0MVwiO1xufVxuLndpLW93bS04MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0MVwiO1xufVxuLndpLW93bS04MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLW93bS04MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLW93bS05MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLW93bS05MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZFwiO1xufVxuLndpLW93bS05MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3M1wiO1xufVxuLndpLW93bS05MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLW93bS05MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3MlwiO1xufVxuLndpLW93bS05MDU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyMVwiO1xufVxuLndpLW93bS05MDY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLW93bS05NTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1MFwiO1xufVxuLndpLW93bS1kYXktMjAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTBcIjtcbn1cbi53aS1vd20tZGF5LTIwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEwXCI7XG59XG4ud2ktb3dtLWRheS0yMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMFwiO1xufVxuLndpLW93bS1kYXktMjEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDVcIjtcbn1cbi53aS1vd20tZGF5LTIxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA1XCI7XG59XG4ud2ktb3dtLWRheS0yMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNVwiO1xufVxuLndpLW93bS1kYXktMjIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDVcIjtcbn1cbi53aS1vd20tZGF5LTIzMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEwXCI7XG59XG4ud2ktb3dtLWRheS0yMzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMFwiO1xufVxuLndpLW93bS1kYXktMjMyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTBcIjtcbn1cbi53aS1vd20tZGF5LTMwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBiXCI7XG59XG4ud2ktb3dtLWRheS0zMDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwYlwiO1xufVxuLndpLW93bS1kYXktMzAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1vd20tZGF5LTMxMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS0zMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktMzEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1vd20tZGF5LTMxMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS0zMTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktMzIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGJcIjtcbn1cbi53aS1vd20tZGF5LTUwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBiXCI7XG59XG4ud2ktb3dtLWRheS01MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktNTAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1vd20tZGF5LTUwMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS01MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktNTExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDZcIjtcbn1cbi53aS1vd20tZGF5LTUyMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA5XCI7XG59XG4ud2ktb3dtLWRheS01MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOVwiO1xufVxuLndpLW93bS1kYXktNTIyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDlcIjtcbn1cbi53aS1vd20tZGF5LTUzMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBlXCI7XG59XG4ud2ktb3dtLWRheS02MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwYVwiO1xufVxuLndpLW93bS1kYXktNjAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjJcIjtcbn1cbi53aS1vd20tZGF5LTYwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBhXCI7XG59XG4ud2ktb3dtLWRheS02MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNlwiO1xufVxuLndpLW93bS1kYXktNjEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDZcIjtcbn1cbi53aS1vd20tZGF5LTYxNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA2XCI7XG59XG4ud2ktb3dtLWRheS02MTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNlwiO1xufVxuLndpLW93bS1kYXktNjIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDZcIjtcbn1cbi53aS1vd20tZGF5LTYyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBhXCI7XG59XG4ud2ktb3dtLWRheS02MjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwYVwiO1xufVxuLndpLW93bS1kYXktNzAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDNcIjtcbn1cbi53aS1vd20tZGF5LTcxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYyXCI7XG59XG4ud2ktb3dtLWRheS03MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNlwiO1xufVxuLndpLW93bS1kYXktNzMxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjNcIjtcbn1cbi53aS1vd20tZGF5LTc0MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAzXCI7XG59XG4ud2ktb3dtLWRheS03NjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS1kYXktNzYyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjNcIjtcbn1cbi53aS1vd20tZGF5LTc4MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktb3dtLWRheS04MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLW93bS1kYXktODAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDJcIjtcbn1cbi53aS1vd20tZGF5LTgwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2ktb3dtLWRheS04MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLW93bS1kYXktODA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS1vd20tZGF5LTkwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktb3dtLWRheS05MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3M1wiO1xufVxuLndpLW93bS1kYXktOTAzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzZcIjtcbn1cbi53aS1vd20tZGF5LTkwNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDcyXCI7XG59XG4ud2ktb3dtLWRheS05MDY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNFwiO1xufVxuLndpLW93bS1kYXktOTU3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTBcIjtcbn1cbi53aS1vd20tbmlnaHQtMjAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1vd20tbmlnaHQtMjAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1vd20tbmlnaHQtMjAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1vd20tbmlnaHQtMjEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjVcIjtcbn1cbi53aS1vd20tbmlnaHQtMjExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjVcIjtcbn1cbi53aS1vd20tbmlnaHQtMjEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjVcIjtcbn1cbi53aS1vd20tbmlnaHQtMjIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjVcIjtcbn1cbi53aS1vd20tbmlnaHQtMjMwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1vd20tbmlnaHQtMjMxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1vd20tbmlnaHQtMjMyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmRcIjtcbn1cbi53aS1vd20tbmlnaHQtMzAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmJcIjtcbn1cbi53aS1vd20tbmlnaHQtMzAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmJcIjtcbn1cbi53aS1vd20tbmlnaHQtMzAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtMzEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtMzExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtMzEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtMzEzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtMzE0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtMzIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmJcIjtcbn1cbi53aS1vd20tbmlnaHQtNTAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmJcIjtcbn1cbi53aS1vd20tbmlnaHQtNTAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtNTAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtNTAzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtNTA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjhcIjtcbn1cbi53aS1vd20tbmlnaHQtNTExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNTIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjlcIjtcbn1cbi53aS1vd20tbmlnaHQtNTIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjlcIjtcbn1cbi53aS1vd20tbmlnaHQtNTIyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjlcIjtcbn1cbi53aS1vd20tbmlnaHQtNTMxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmNcIjtcbn1cbi53aS1vd20tbmlnaHQtNjAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmFcIjtcbn1cbi53aS1vd20tbmlnaHQtNjAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjRcIjtcbn1cbi53aS1vd20tbmlnaHQtNjAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmFcIjtcbn1cbi53aS1vd20tbmlnaHQtNjExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNjEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNjE1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNjE2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNjIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNjIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmFcIjtcbn1cbi53aS1vd20tbmlnaHQtNjIyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmFcIjtcbn1cbi53aS1vd20tbmlnaHQtNzAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNGFcIjtcbn1cbi53aS1vd20tbmlnaHQtNzExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjJcIjtcbn1cbi53aS1vd20tbmlnaHQtNzIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjZcIjtcbn1cbi53aS1vd20tbmlnaHQtNzMxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjNcIjtcbn1cbi53aS1vd20tbmlnaHQtNzQxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNGFcIjtcbn1cbi53aS1vd20tbmlnaHQtNzYxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjNcIjtcbn1cbi53aS1vd20tbmlnaHQtNzYyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjNcIjtcbn1cbi53aS1vd20tbmlnaHQtNzgxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTZcIjtcbn1cbi53aS1vd20tbmlnaHQtODAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmVcIjtcbn1cbi53aS1vd20tbmlnaHQtODAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODFcIjtcbn1cbi53aS1vd20tbmlnaHQtODAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODZcIjtcbn1cbi53aS1vd20tbmlnaHQtODAzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS1vd20tbmlnaHQtODA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS1vd20tbmlnaHQtOTAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTZcIjtcbn1cbi53aS1vd20tbmlnaHQtOTAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzNcIjtcbn1cbi53aS1vd20tbmlnaHQtOTAzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzZcIjtcbn1cbi53aS1vd20tbmlnaHQtOTA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzJcIjtcbn1cbi53aS1vd20tbmlnaHQtOTA2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjRcIjtcbn1cbi53aS1vd20tbmlnaHQtOTU3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTBcIjtcbn1cbi53aS13dS1jaGFuY2VmbHVycmllczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDY0XCI7XG59XG4ud2ktd3UtY2hhbmNlcmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd3UtY2hhbmNlc2xlYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNVwiO1xufVxuLndpLXd1LWNoYW5jZXNub3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLXd1LWNoYW5jZXRzdG9ybXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXd1LWNsZWFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGRcIjtcbn1cbi53aS13dS1jbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwMlwiO1xufVxuLndpLXd1LWZsdXJyaWVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjRcIjtcbn1cbi53aS13dS1oYXp5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjZcIjtcbn1cbi53aS13dS1tb3N0bHljbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwMlwiO1xufVxuLndpLXd1LW1vc3RseXN1bm55OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGRcIjtcbn1cbi53aS13dS1wYXJ0bHljbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwMlwiO1xufVxuLndpLXd1LXBhcnRseXN1bm55OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGRcIjtcbn1cbi53aS13dS1yYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWFcIjtcbn1cbi53aS13dS1zbGVhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI1XCI7XG59XG4ud2ktd3Utc25vdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd3Utc3Vubnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLXd1LXRzdG9ybXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLXd1LXVua25vd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ1NTL3dlYXRoZXItaWNvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CRTtBQUNGO0VBQ0UsMkJBQTJCO0VBQzNCLDRDQUFvRDtFQUNwRCw0U0FBbVg7RUFDblgsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnRUFBZ0U7RUFDaEUsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGdFQUFnRTtFQUNoRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0VBQWdFO0VBQ2hFLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwRUFBMEU7RUFDMUUsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDBFQUEwRTtFQUMxRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogIFdlYXRoZXIgSWNvbnMgMi4wLjEwXFxuICogIFVwZGF0ZWQgTm92ZW1iZXIgMSwgMjAyMFxcbiAqICBXZWF0aGVyIHRoZW1lZCBpY29ucyBmb3IgQm9vdHN0cmFwXFxuICogIEF1dGhvciAtIEVyaWsgRmxvd2VycyAtIGVyaWtAaGVsbG9lcmlrLmNvbVxcbiAqICBFbWFpbDogZXJpa0BoZWxsb2VyaWsuY29tXFxuICogIFR3aXR0ZXI6IGh0dHA6Ly90d2l0dGVyLmNvbS9FcmlrX1VYXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICBNYWludGFpbmVkIGF0IGh0dHA6Ly9lcmlrZmxvd2Vycy5naXRodWIuaW8vd2VhdGhlci1pY29uc1xcbiAqXFxuICogIExpY2Vuc2VcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogIC0gRm9udCBsaWNlbnNlZCB1bmRlciBTSUwgT0ZMIDEuMSAtXFxuICogICAgaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcXG4gKiAgLSBDU1MsIFNDU1MgYW5kIExFU1MgYXJlIGxpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlIC1cXG4gKiAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UuaHRtbFxcbiAqICAtIERvY3VtZW50YXRpb24gbGljZW5zZWQgdW5kZXIgQ0MgQlkgMy4wIC1cXG4gKiAgICBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXFxuICogIC0gSW5zcGlyZWQgYnkgYW5kIHdvcmtzIGdyZWF0IGFzIGEgY29tcGFuaW9uIHdpdGggRm9udCBBd2Vzb21lXFxuICogICAgXFxcIkZvbnQgQXdlc29tZSBieSBEYXZlIEdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvXFxcIlxcbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICd3ZWF0aGVyaWNvbnMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5lb3QnKTtcXG4gIHNyYzogdXJsKCcuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5zdmcjd2VhdGhlcl9pY29uc3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLndpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnd2VhdGhlcmljb25zJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuLndpLWZ3IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjRlbTtcXG59XFxuLndpLXJvdGF0ZS05MCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4ud2ktcm90YXRlLTE4MCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ud2ktcm90YXRlLTI3MCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG4ud2ktZmxpcC1ob3Jpem9udGFsIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG4ud2ktZmxpcC12ZXJ0aWNhbCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuLndpLWRheS1zdW5ueTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLWRheS1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS1kYXktY2xvdWR5LWd1c3RzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDBcXFwiO1xcbn1cXG4ud2ktZGF5LWNsb3VkeS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAxXFxcIjtcXG59XFxuLndpLWRheS1mb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwM1xcXCI7XFxufVxcbi53aS1kYXktaGFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA0XFxcIjtcXG59XFxuLndpLWRheS1oYXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktZGF5LWxpZ2h0bmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLndpLWRheS1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktZGF5LXJhaW4tbWl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktZGF5LXJhaW4td2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA3XFxcIjtcXG59XFxuLndpLWRheS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDlcXFwiO1xcbn1cXG4ud2ktZGF5LXNsZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjJcXFwiO1xcbn1cXG4ud2ktZGF5LXNsZWV0LXN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjhcXFwiO1xcbn1cXG4ud2ktZGF5LXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1kYXktc25vdy10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2YlxcXCI7XFxufVxcbi53aS1kYXktc25vdy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjVcXFwiO1xcbn1cXG4ud2ktZGF5LXNwcmlua2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiO1xcbn1cXG4ud2ktZGF5LXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS1kYXktc3Vubnktb3ZlcmNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxufVxcbi53aS1kYXktdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktZGF5LXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODVcXFwiO1xcbn1cXG4ud2ktc29sYXItZWNsaXBzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZlXFxcIjtcXG59XFxuLndpLWhvdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcyXFxcIjtcXG59XFxuLndpLWRheS1jbG91ZHktaGlnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdkXFxcIjtcXG59XFxuLndpLWRheS1saWdodC13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzRcXFwiO1xcbn1cXG4ud2ktbmlnaHQtY2xlYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODZcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWNsb3VkeS1ndXN0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIyXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1jbG91ZHktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyM1xcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtaGFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI0XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1saWdodG5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1yYWluLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1yYWluLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyN1xcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI5XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI0XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbGVldC1zdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZhXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmRcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNub3ctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY3XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zcHJpbmtsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJiXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsb3VkeS1ndXN0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJmXFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsb3VkeS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMwXFxcIjtcXG59XFxuLndpLW5pZ2h0LWZvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRhXFxcIjtcXG59XFxuLndpLW5pZ2h0LWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMlxcXCI7XFxufVxcbi53aS1uaWdodC1saWdodG5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzM1xcXCI7XFxufVxcbi53aS1uaWdodC1wYXJ0bHktY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM2XFxcIjtcXG59XFxuLndpLW5pZ2h0LXJhaW4tbWl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzRcXFwiO1xcbn1cXG4ud2ktbmlnaHQtcmFpbi13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzVcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM3XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNsZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc2xlZXQtc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2OVxcXCI7XFxufVxcbi53aS1uaWdodC1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzhcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc25vdy10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2Y1xcXCI7XFxufVxcbi53aS1uaWdodC1zbm93LXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NlxcXCI7XFxufVxcbi53aS1uaWdodC1zcHJpbmtsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM5XFxcIjtcXG59XFxuLndpLW5pZ2h0LXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzYVxcXCI7XFxufVxcbi53aS1uaWdodC10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzYlxcXCI7XFxufVxcbi53aS1sdW5hci1lY2xpcHNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzBcXFwiO1xcbn1cXG4ud2ktc3RhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3N1xcXCI7XFxufVxcbi53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWNsb3VkeS1oaWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2VcXFwiO1xcbn1cXG4ud2ktbmlnaHQtY2xvdWR5LWhpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtcGFydGx5LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgxXFxcIjtcXG59XFxuLndpLWNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDFcXFwiO1xcbn1cXG4ud2ktY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktY2xvdWR5LWd1c3RzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTFcXFwiO1xcbn1cXG4ud2ktY2xvdWR5LXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTJcXFwiO1xcbn1cXG4ud2ktZm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktaGFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1yYWluLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXJhaW4td2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE4XFxcIjtcXG59XFxuLndpLXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI1XFxcIjtcXG59XFxuLndpLXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1zcHJpbmtsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1zbm93LXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktc21vZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc0XFxcIjtcXG59XFxuLndpLXNtb2tlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiO1xcbn1cXG4ud2ktbGlnaHRuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktcmFpbmRyb3BzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGVcXFwiO1xcbn1cXG4ud2ktcmFpbmRyb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3OFxcXCI7XFxufVxcbi53aS1kdXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktc25vd2ZsYWtlLWNvbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIxXFxcIjtcXG59XFxuLndpLXN0cm9uZy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktc2FuZHN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODJcXFwiO1xcbn1cXG4ud2ktZWFydGhxdWFrZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM2XFxcIjtcXG59XFxuLndpLWZpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjN1xcXCI7XFxufVxcbi53aS1mbG9vZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdjXFxcIjtcXG59XFxuLndpLW1ldGVvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcxXFxcIjtcXG59XFxuLndpLXRzdW5hbWk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNVxcXCI7XFxufVxcbi53aS12b2xjYW5vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzhcXFwiO1xcbn1cXG4ud2ktaHVycmljYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiO1xcbn1cXG4ud2ktdG9ybmFkbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLXNtYWxsLWNyYWZ0LWFkdmlzb3J5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2NcXFwiO1xcbn1cXG4ud2ktZ2FsZS13YXJuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2RcXFwiO1xcbn1cXG4ud2ktc3Rvcm0td2FybmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNlXFxcIjtcXG59XFxuLndpLWh1cnJpY2FuZS13YXJuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2ZcXFwiO1xcbn1cXG4ud2ktd2luZC1kaXJlY3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMVxcXCI7XFxufVxcbi53aS1hbGllbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc1XFxcIjtcXG59XFxuLndpLWNlbHNpdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzY1xcXCI7XFxufVxcbi53aS1mYWhyZW5oZWl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDVcXFwiO1xcbn1cXG4ud2ktZGVncmVlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQyXFxcIjtcXG59XFxuLndpLXRoZXJtb21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTVcXFwiO1xcbn1cXG4ud2ktdGhlcm1vbWV0ZXItZXh0ZXJpb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1M1xcXCI7XFxufVxcbi53aS10aGVybW9tZXRlci1pbnRlcm5hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU0XFxcIjtcXG59XFxuLndpLWNsb3VkLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzZFxcXCI7XFxufVxcbi53aS1jbG91ZC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQwXFxcIjtcXG59XFxuLndpLWNsb3VkLXJlZnJlc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzZVxcXCI7XFxufVxcbi53aS1ob3Jpem9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDdcXFwiO1xcbn1cXG4ud2ktaG9yaXpvbi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0NlxcXCI7XFxufVxcbi53aS1zdW5yaXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTFcXFwiO1xcbn1cXG4ud2ktc3Vuc2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTJcXFwiO1xcbn1cXG4ud2ktbW9vbnJpc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOVxcXCI7XFxufVxcbi53aS1tb29uc2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2FcXFwiO1xcbn1cXG4ud2ktcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRjXFxcIjtcXG59XFxuLndpLXJlZnJlc2gtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGJcXFwiO1xcbn1cXG4ud2ktdW1icmVsbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NFxcXCI7XFxufVxcbi53aS1iYXJvbWV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3OVxcXCI7XFxufVxcbi53aS1odW1pZGl0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdhXFxcIjtcXG59XFxuLndpLW5hOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2JcXFwiO1xcbn1cXG4ud2ktdHJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjYlxcXCI7XFxufVxcbi53aS1tb29uLW5ldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NlxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTdcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk4XFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWFcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjtcXG59XFxuLndpLW1vb24tZmlyc3QtcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDljXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlkXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDllXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlmXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEwXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGExXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEyXFxcIjtcXG59XFxuLndpLW1vb24tZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEzXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE0XFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE1XFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE2XFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE3XFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE4XFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE5XFxcIjtcXG59XFxuLndpLW1vb24tdGhpcmQtcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFhXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYlxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWNcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFkXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZVxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWZcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIwXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LW5ldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGViXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDBcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQyXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDNcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ1XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LWZpcnN0LXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDdcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ4XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkOVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGFcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRiXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkY1xcXCI7XFxufVxcbi53aS1tb29uLWFsdC1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGRcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRlXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkZlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTBcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUxXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTNcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtdGhpcmQtcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU0XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTVcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlNlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU3XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZThcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlOVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGVhXFxcIjtcXG59XFxuLndpLW1vb24tMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXG59XFxuLndpLW1vb24tMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk2XFxcIjtcXG59XFxuLndpLW1vb24tMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk3XFxcIjtcXG59XFxuLndpLW1vb24tMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk4XFxcIjtcXG59XFxuLndpLW1vb24tNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk5XFxcIjtcXG59XFxuLndpLW1vb24tNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlhXFxcIjtcXG59XFxuLndpLW1vb24tNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjtcXG59XFxuLndpLW1vb24tNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDljXFxcIjtcXG59XFxuLndpLW1vb24tODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlkXFxcIjtcXG59XFxuLndpLW1vb24tOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDllXFxcIjtcXG59XFxuLndpLW1vb24tMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZlxcXCI7XFxufVxcbi53aS1tb29uLTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTBcXFwiO1xcbn1cXG4ud2ktbW9vbi0xMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGExXFxcIjtcXG59XFxuLndpLW1vb24tMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMlxcXCI7XFxufVxcbi53aS1tb29uLTE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTNcXFwiO1xcbn1cXG4ud2ktbW9vbi0xNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE0XFxcIjtcXG59XFxuLndpLW1vb24tMTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNVxcXCI7XFxufVxcbi53aS1tb29uLTE3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTZcXFwiO1xcbn1cXG4ud2ktbW9vbi0xODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE3XFxcIjtcXG59XFxuLndpLW1vb24tMTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOFxcXCI7XFxufVxcbi53aS1tb29uLTIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTlcXFwiO1xcbn1cXG4ud2ktbW9vbi0yMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFhXFxcIjtcXG59XFxuLndpLW1vb24tMjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYlxcXCI7XFxufVxcbi53aS1tb29uLTIzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWNcXFwiO1xcbn1cXG4ud2ktbW9vbi0yNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFkXFxcIjtcXG59XFxuLndpLW1vb24tMjU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZVxcXCI7XFxufVxcbi53aS1tb29uLTI2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWZcXFwiO1xcbn1cXG4ud2ktbW9vbi0yNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIwXFxcIjtcXG59XFxuLndpLXRpbWUtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhhXFxcIjtcXG59XFxuLndpLXRpbWUtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhiXFxcIjtcXG59XFxuLndpLXRpbWUtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhjXFxcIjtcXG59XFxuLndpLXRpbWUtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhkXFxcIjtcXG59XFxuLndpLXRpbWUtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhlXFxcIjtcXG59XFxuLndpLXRpbWUtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhmXFxcIjtcXG59XFxuLndpLXRpbWUtNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkwXFxcIjtcXG59XFxuLndpLXRpbWUtODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkxXFxcIjtcXG59XFxuLndpLXRpbWUtOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkyXFxcIjtcXG59XFxuLndpLXRpbWUtMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5M1xcXCI7XFxufVxcbi53aS10aW1lLTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTRcXFwiO1xcbn1cXG4ud2ktdGltZS0xMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg5XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU4XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi11cC1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU3XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRkXFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1kb3duLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODhcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0NFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tZG93bi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDNcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0OFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tdXAtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg3XFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI3XFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI4XFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI5XFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGJhXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGJiXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGJjXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGJkXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGJlXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGJmXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMwXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzJcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0xMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMzXFxcIjtcXG59XFxuLndpLXlhaG9vLTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS15YWhvby0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLXlhaG9vLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS15YWhvby00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2kteWFob28tNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS15YWhvby03OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXlhaG9vLTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS15YWhvby0xMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXlhaG9vLTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2kteWFob28tMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS15YWhvby0xMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXlhaG9vLTE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2kteWFob28tMTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS15YWhvby0xNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXlhaG9vLTE3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2kteWFob28tMTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS15YWhvby0xOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXlhaG9vLTIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2kteWFob28tMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMVxcXCI7XFxufVxcbi53aS15YWhvby0yMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYyXFxcIjtcXG59XFxuLndpLXlhaG9vLTIzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2kteWFob28tMjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS15YWhvby0yNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXlhaG9vLTI2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2kteWFob28tMjc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMVxcXCI7XFxufVxcbi53aS15YWhvby0yODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXlhaG9vLTI5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzFcXFwiO1xcbn1cXG4ud2kteWFob28tMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS15YWhvby0zMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG59XFxuLndpLXlhaG9vLTMyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2kteWFob28tMzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4M1xcXCI7XFxufVxcbi53aS15YWhvby0zNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG59XFxuLndpLXlhaG9vLTM1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tMzY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS15YWhvby0zNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTM4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tMzk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby00MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXlhaG9vLTQxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2kteWFob28tNDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby00MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXlhaG9vLTQ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcbn1cXG4ud2kteWFob28tNDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby00NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXlhaG9vLTQ3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tMzIwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc3XFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLWNsZWFyLWRheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLWNsZWFyLW5pZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI1XFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1mb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1wYXJ0bHktY2xvdWR5LWRheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktbmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1oYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tdG9ybmFkbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMDpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NVxcXCI7XFxufVxcbi53aS13bW80NjgwLTE6YmVmb3JlLFxcbi53aS13bW80NjgwLTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yOmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS13bW80NjgwLTQ6YmVmb3JlLFxcbi53aS13bW80NjgwLTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01OmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS13bW80NjgwLTIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTIzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTI2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS13bW80NjgwLTI5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTMyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTM1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTQyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTQ1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTQ4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTUyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTU1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTU4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTYyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTY1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTY4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTcyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTgyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS13bW80NjgwLTg1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTg5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05MDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS13bW80NjgwLTkyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05MzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS13bW80NjgwLTk1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05NjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tMjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0yMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLW93bS0yMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS1vd20tMjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIzMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0yMzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjMyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTMwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLW93bS0zMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1vd20tMzAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTMxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS0zMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tMzEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTMxMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLW93bS0zMTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tMzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktb3dtLTUwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLW93bS01MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tNTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTUwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS01MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tNTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTUyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLW93bS01MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1vd20tNTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktb3dtLTUzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLW93bS02MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1vd20tNjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktb3dtLTYwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI1XFxcIjtcXG59XFxuLndpLW93bS02MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYxNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNjIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLW93bS02MjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1vd20tNzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktb3dtLTcxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYyXFxcIjtcXG59XFxuLndpLW93bS03MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNlxcXCI7XFxufVxcbi53aS1vd20tNzMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLTc0MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLW93bS03NjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tNzYyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLTc3MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDExXFxcIjtcXG59XFxuLndpLW93bS03ODE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tODAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktb3dtLTgwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQxXFxcIjtcXG59XFxuLndpLW93bS04MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MVxcXCI7XFxufVxcbi53aS1vd20tODAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLTgwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS05MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tOTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktb3dtLTkwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLW93bS05MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS1vd20tOTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4ud2ktb3dtLTkwNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIxXFxcIjtcXG59XFxuLndpLW93bS05MDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS1vd20tOTU3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLndpLW93bS1kYXktMjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIzMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLW93bS1kYXktMzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLW93bS1kYXktNTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDlcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLW93bS1kYXktNjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLW93bS1kYXktNjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYxNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLW93bS1kYXktNjIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwM1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTcxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYyXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTc0MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAzXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03NjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTc4MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS1kYXktODAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS04MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLW93bS1kYXktODAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS04MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS1kYXktOTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcyXFxcIjtcXG59XFxuLndpLW93bS1kYXktOTA2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDRcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05NTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIzMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjMyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJiXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMxMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJiXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI5XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjlcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJjXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYxNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTcxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYyXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTc0MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03NjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzYyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTc4MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC04MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC04MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTkwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTkwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcyXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTU3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNlZmx1cnJpZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS13dS1jaGFuY2VyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNlc2xlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS13dS1jaGFuY2Vzbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNldHN0b3JtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXd1LWNsZWFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktd3UtY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktd3UtZmx1cnJpZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS13dS1oYXp5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktd3UtbW9zdGx5Y2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktd3UtbW9zdGx5c3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS13dS1wYXJ0bHljbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS13dS1wYXJ0bHlzdW5ueTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXd1LXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS13dS1zbGVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI1XFxcIjtcXG59XFxuLndpLXd1LXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13dS1zdW5ueTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXd1LXRzdG9ybXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13dS11bmtub3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci1pY29ucy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLWljb25zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmNvbmRpdGlvbnMgPSBkYXRhLmNvbmRpdGlvbnM7XG4gICAgICAgIHRoaXMuaWNvbiA9IGRhdGEuaWNvbjtcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGRhdGEudGVtcDtcbiAgICAgICAgdGhpcy5mZWVscyA9IGRhdGEuZmVlbHNsaWtlO1xuICAgICAgICB0aGlzLnByZWNpcCA9IE1hdGgucm91bmQoZGF0YS5wcmVjaXBwcm9iKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXJyZW50Q29uZGl0aW9ucyBleHRlbmRzIENvbmRpdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoZGF0YS5jdXJyZW50Q29uZGl0aW9ucyk7XG4gICAgICAgIHRoaXMuaGlnaCA9IE1hdGgucm91bmQoZGF0YS5kYXlzWzBdLnRlbXBtYXgpO1xuICAgICAgICB0aGlzLmxvdyA9IE1hdGgucm91bmQoZGF0YS5kYXlzWzBdLnRlbXBtaW4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhvdXJseUNvbmRpdGlvbnMgZXh0ZW5kcyBDb25kaXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBkYXksIGhvdXIpIHtcbiAgICAgICAgc3VwZXIoZGF0YS5kYXlzW2RheV0uaG91cnNbaG91cl0pO1xuICAgICAgICB0aGlzLmhvdXIgPSBob3VyO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhaWx5Q29uZGl0aW9ucyBleHRlbmRzIENvbmRpdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yIChkYXRhLCBkYXkpIHtcbiAgICAgICAgc3VwZXIoZGF0YS5kYXlzW2RheV0pO1xuICAgICAgICB0aGlzLmRheSA9IGRhdGEuZGF5c1tkYXldLmRhdGV0aW1lO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgY3JlYXRlQ3VycmVudENvbmRpdGlvbnMsIGNyZWF0ZUhvdXJseUFycmF5LCBjcmVhdGVEYWlseUFycmF5LCBnZXROZXh0SG91ciB9IGZyb20gXCIuL2xvY2F0aW9uQ29uZGl0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheUxvY2F0aW9uLCBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMsIGRpc3BsYXlIb3VybHlDb25kaXRpb25zLCBkaXNwbGF5RGFpbHlDb25kaXRpb25zfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFuZERpc3BsYXlMb2NhdGlvbkNvbmRpdGlvbnMobG9jYXRpb24pIHtcblxuICAgIC8vR2V0IHdlYXRoZXIgZGF0YVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gICAgY29uc3QgY3VycmVudCA9IGNyZWF0ZUN1cnJlbnRDb25kaXRpb25zKGRhdGEpO1xuICAgIGNvbnN0IGhvdXJseSA9IGNyZWF0ZUhvdXJseUFycmF5KGRhdGEsIGdldE5leHRIb3VyKGRhdGEpKTtcbiAgICBjb25zdCBkYWlseSA9IGNyZWF0ZURhaWx5QXJyYXkoZGF0YSk7XG5cbiAgICAvL0Rpc3BsYXkgd2VhdGhlciBkYXRhXG4gICAgZGlzcGxheUxvY2F0aW9uKGRhdGEucmVzb2x2ZWRBZGRyZXNzKTtcbiAgICBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMoY3VycmVudCk7XG4gICAgZGlzcGxheUhvdXJseUNvbmRpdGlvbnMoaG91cmx5KTtcbiAgICBkaXNwbGF5RGFpbHlDb25kaXRpb25zKGRhaWx5KTtcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUbzEySG91clRpbWUodGltZSkge1xuICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnMTIgQU0nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aW1lIDw9IDExKSB7XG4gICAgICAgIHJldHVybiBgJHt0aW1lfSBBTWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRpbWUgPT09IDEyKSB7XG4gICAgICAgIHJldHVybiAnMTIgUE0nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3RpbWUgLSAxMn0gUE1gXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcpIHtcbiAgICBjb25zdCBkYXRlQXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGRhdGVBcnJheVswXTtcbiAgICBjb25zdCBtb250aCA9IGRhdGVBcnJheVsxXSAtIDE7XG4gICAgY29uc3QgZGF5ID0gZGF0ZUFycmF5WzJdO1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgIHJldHVybiBwYXJzZWREYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXkoZGF0ZSkge1xuICAgIGNvbnN0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICAgIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNb250aChkYXRlKSB7XG4gICAgY29uc3QgbW9udGggPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gICAgcmV0dXJuIG1vbnRoW2RhdGUuZ2V0TW9udGgoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wU2NhbGUodGVtcCwgc2NhbGUpIHtcbiAgICBpZiAoc2NhbGUgPT09ICdGJykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0ZW1wKTtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gTWF0aC5yb3VuZCgodGVtcCAtIDMyKSAvIDEuOCk7XG59IiwiaW1wb3J0IGdldFdlYXRoZXJJY29uTmFtZSBmcm9tIFwiLi93ZWF0aGVySWNvblwiO1xuaW1wb3J0IHsgY29udmVydFRvMTJIb3VyVGltZSwgcGFyc2VEYXRlLCBwYXJzZURheSwgcGFyc2VNb250aCwgdGVtcFNjYWxlIH0gZnJvbSBcIi4vZGF0YVByb2Nlc3NpbmdcIjtcbmltcG9ydCB7IHRlbXBlcmF0dXJlU2NhbGUgfSBmcm9tIFwiLi9pbnB1dEhhbmRsZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhjdXJyZW50KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1jb250YWluZXJcIik7XG4gIHJlc2V0Q29udGFpbmVyKGNvbnRhaW5lcik7XG5cbiAgLy9UaXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0N1cnJlbnQgQ29uZGl0aW9ucyc7XG5cbiAgLy9MZWZ0IFNpZGVcbiAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJmbGV4LWxlZnRcIik7XG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXBTY2FsZShjdXJyZW50LnRlbXBlcmF0dXJlLCB0ZW1wZXJhdHVyZVNjYWxlKX3CsCR7dGVtcGVyYXR1cmVTY2FsZX1gOyAvL01BS0UgSVQgRFlOQU1JQyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ3aVwiLCBnZXRXZWF0aGVySWNvbk5hbWUoY3VycmVudC5pY29uKSwgXCJ3ZWF0aGVyLWljb25cIik7XG5cbiAgbGVmdERpdi5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChpY29uKTtcblxuICAvL1JpZ2h0IFNpZGVcbiAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtcmlnaHRcIik7XG5cbiAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uZGl0aW9ucy5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uc1wiKTtcbiAgY29uZGl0aW9ucy50ZXh0Q29udGVudCA9IGN1cnJlbnQuY29uZGl0aW9ucztcblxuICBjb25zdCBmZWVsc2xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZlZWxzbGlrZS5jbGFzc0xpc3QuYWRkKFwiZmVlbHNsaWtlXCIpO1xuICBmZWVsc2xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke3RlbXBTY2FsZShjdXJyZW50LmZlZWxzLCB0ZW1wZXJhdHVyZVNjYWxlKX1gO1xuXG4gIGNvbnN0IGhpZ2hsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhpZ2hsb3cuY2xhc3NMaXN0LmFkZChcImhpZ2gtbG93XCIpO1xuICBoaWdobG93LnRleHRDb250ZW50ID0gYEg6ICR7dGVtcFNjYWxlKGN1cnJlbnQuaGlnaCwgdGVtcGVyYXR1cmVTY2FsZSl9wrAgTDogJHt0ZW1wU2NhbGUoY3VycmVudC5sb3csIHRlbXBlcmF0dXJlU2NhbGUpfcKwYDtcblxuICByaWdodERpdi5hcHBlbmRDaGlsZChjb25kaXRpb25zKTtcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoZmVlbHNsaWtlKTtcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoaGlnaGxvdyk7XG4gIFxuICAvL0Rpc3BsYXkgRWxlbWVudHNcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseUNvbmRpdGlvbnMoaG91cmx5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1jb250YWluZXInKTtcbiAgICByZXNldENvbnRhaW5lcihjb250YWluZXIpO1xuXG4gICAgLy9UaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdIb3VybHkgRm9yZWNhc3QnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBob3VybHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3VyLmNsYXNzTGlzdC5hZGQoJ2hvdXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBgJHtjb252ZXJ0VG8xMkhvdXJUaW1lKGhvdXJseVtpXS5ob3VyKX1gOyAvL01JR0hUIE5FRUQgVE8gQ09OVkVSVCBUSU1FIElOVE8gQU0vUE1cblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ3aVwiLCBnZXRXZWF0aGVySWNvbk5hbWUoaG91cmx5W2ldLmljb24pLCBcIndlYXRoZXItaWNvblwiKTtcblxuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXBTY2FsZShob3VybHlbaV0udGVtcGVyYXR1cmUsIHRlbXBlcmF0dXJlU2NhbGUpfcKwYDtcblxuICAgICAgICBjb25zdCBmZWVsc2xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGZlZWxzbGlrZS5jbGFzc0xpc3QuYWRkKCdmZWVsc2xpa2UnKTtcbiAgICAgICAgZmVlbHNsaWtlLnRleHRDb250ZW50ID0gYEZlZWxzICR7dGVtcFNjYWxlKGhvdXJseVtpXS5mZWVscywgdGVtcGVyYXR1cmVTY2FsZSl9YFxuXG4gICAgICAgIC8vUHJlY2lwaXRhdGlvblxuICAgICAgICBjb25zdCBwcmVjaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJlY2lwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByZWNpcCcpO1xuXG4gICAgICAgIGNvbnN0IHByZWNpcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHByZWNpcEljb24uY2xhc3NMaXN0LmFkZCgnd2knLCAnd2ktcmFpbicsICdwcmVjaXAtaWNvbicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJlY2lwQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmVjaXBDaGFuY2UuY2xhc3NMaXN0LmFkZCgncHJlY2lwLWNoYW5jZScpO1xuICAgICAgICBwcmVjaXBDaGFuY2UudGV4dENvbnRlbnQ9IGAke2hvdXJseVtpXS5wcmVjaXB9JWBcblxuICAgICAgICBwcmVjaXBDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlY2lwSWNvbik7XG4gICAgICAgIHByZWNpcENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVjaXBDaGFuY2UpO1xuXG4gICAgICAgIGhvdXIuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgICAgIGhvdXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGhvdXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgICAgIGhvdXIuYXBwZW5kQ2hpbGQoZmVlbHNsaWtlKTtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZChwcmVjaXBDb250YWluZXIpO1xuXG4gICAgICAgIC8vRGlzcGxheSBFbGVtZW50c1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURhaWx5Q29uZGl0aW9ucyhkYWlseSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1jb250YWluZXInKTtcbiAgICByZXNldENvbnRhaW5lcihjb250YWluZXIpO1xuXG4gICAgLy9UaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdEYWlseSBGb3JlY2FzdCc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gcGFyc2VEYXRlKGRhaWx5W2ldLmRheSk7XG5cbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHdlZWtkYXkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgICAgIHdlZWtkYXkudGV4dENvbnRlbnQgPSBwYXJzZURheShkYXRlT2JqZWN0KTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3BhcnNlTW9udGgoZGF0ZU9iamVjdCl9ICR7ZGF0ZU9iamVjdC5nZXREYXRlKCl9YDtcblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3dpJywgZ2V0V2VhdGhlckljb25OYW1lKGRhaWx5W2ldLmljb24pLCAnd2VhdGhlci1pY29uJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHt0ZW1wU2NhbGUoZGFpbHlbaV0udGVtcGVyYXR1cmUsIHRlbXBlcmF0dXJlU2NhbGUpfcKwYDtcblxuICAgICAgICBjb25zdCBwcmVjaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJlY2lwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByZWNpcCcpO1xuXG4gICAgICAgIGNvbnN0IHByZWNpcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHByZWNpcEljb24uY2xhc3NMaXN0LmFkZCgnd2knLCAnd2ktcmFpbicsICdwcmVjaXAtaWNvbicpO1xuXG4gICAgICAgIGNvbnN0IHByZWNpcENoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJlY2lwQ2hhbmNlLmNsYXNzTGlzdC5hZGQoJ3ByZWNpcC1jaGFuY2UnKTtcbiAgICAgICAgcHJlY2lwQ2hhbmNlLnRleHRDb250ZW50ID0gYCR7ZGFpbHlbaV0ucHJlY2lwfSVgO1xuXG4gICAgICAgIHByZWNpcENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVjaXBJY29uKTtcbiAgICAgICAgcHJlY2lwQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcENoYW5jZSk7XG5cbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKHdlZWtkYXkpO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQocHJlY2lwQ29udGFpbmVyKTtcblxuICAgICAgICAvL0Rpc3BsYXkgQ29udGVudHNcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMb2NhdGlvbihsb2NhdGlvbikge1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG4gICAgbG9jYXRpb25Db250YWluZXIudGV4dENvbnRlbnQgPSBsb2NhdGlvbjtcbn1cbiIsImltcG9ydCBjcmVhdGVBbmREaXNwbGF5TG9jYXRpb25Db25kaXRpb25zIGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGxldCB0ZW1wZXJhdHVyZVNjYWxlID0gJ0MnO1xuZXhwb3J0IGxldCBjdXJyZW50TG9jYXRpb24gPSAnV2lubmlwZWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVNlYXJjaExpc3RlbmVyKCkge1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1EYXRhLmdldCgnc2VhcmNoJyk7XG4gICAgY3VycmVudExvY2F0aW9uID0gaW5wdXQ7XG4gICAgc2VhcmNoRm9ybS5yZXNldCgpO1xuICAgIGNyZWF0ZUFuZERpc3BsYXlMb2NhdGlvbkNvbmRpdGlvbnMoY3VycmVudExvY2F0aW9uKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU2NhbGVCdXR0b25MaXN0ZW5lcigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjYWxlJyk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZVNjYWxlKCk7XG4gICAgY3JlYXRlQW5kRGlzcGxheUxvY2F0aW9uQ29uZGl0aW9ucyhjdXJyZW50TG9jYXRpb24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2NhbGUoKSB7XG4gIGlmICh0ZW1wZXJhdHVyZVNjYWxlID09PSAnQycpIHtcbiAgICB0ZW1wZXJhdHVyZVNjYWxlID0gJ0YnO1xuICB9XG4gIGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlU2NhbGUgPSAnQyc7XG4gIH1cbn1cbiIsImltcG9ydCB7IEN1cnJlbnRDb25kaXRpb25zLCBIb3VybHlDb25kaXRpb25zLCBEYWlseUNvbmRpdGlvbnMgfSBmcm9tICcuLi9jbGFzc2VzL0NvbmRpdGlvbnMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259Lz9rZXk9TTRSM1AyRkRaVjhGQ1BVRDdHSDJSRkdBQmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXJyZW50Q29uZGl0aW9ucyhkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBDdXJyZW50Q29uZGl0aW9ucyhkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvdXJseUFycmF5KGRhdGEsIHN0YXJ0SG91cikge1xuICAgIGNvbnN0IGhvdXJseUFycmF5ID0gW107XG4gICAgbGV0IGRheSA9IDA7XG4gICAgbGV0IGhvdXIgPSBzdGFydEhvdXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBpZiAoaG91ciA9PT0gMjQpIHtcbiAgICAgICAgICAgIGRheSArPSAxO1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IG5ldyBIb3VybHlDb25kaXRpb25zKGRhdGEsIGRheSwgaG91cik7XG4gICAgICAgIGhvdXJseUFycmF5LnB1c2goY29uZGl0aW9ucyk7XG4gICAgICAgIGhvdXIgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG91cmx5QXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYWlseUFycmF5KGRhdGEpIHtcbiAgICBjb25zdCBkYWlseUFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBjb25zdCBjb25kaXRpb25zID0gbmV3IERhaWx5Q29uZGl0aW9ucyhkYXRhLCBpKTtcbiAgICAgICAgZGFpbHlBcnJheS5wdXNoKGNvbmRpdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBkYWlseUFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dEhvdXIoZGF0YSkge1xuICAgIHJldHVybiBOdW1iZXIoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZS5zdWJzdHJpbmcoMCwyKSkgKyAxO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uTmFtZShpY29uKSB7XG4gICAgaWYgKGljb24gPT09ICdzbm93Jykge1xuICAgICAgICByZXR1cm4gJ3dpLXNub3cnO1xuICAgIH1cbiAgICBpZiAoaWNvbiA9PT0gJ3JhaW4nKSB7XG4gICAgICAgIHJldHVybiAnd2ktcmFpbic7XG4gICAgfVxuICAgIGlmIChpY29uID09PSAnZm9nJykge1xuICAgICAgICByZXR1cm4gJ3dpLWZvZyc7XG4gICAgfVxuICAgIGlmIChpY29uID09PSAnd2luZCcpIHtcbiAgICAgICAgcmV0dXJuICd3aS13aW5keSc7XG4gICAgfVxuICAgIGlmIChpY29uID09PSAnY2xvdWR5Jykge1xuICAgICAgICByZXR1cm4gJ3dpLWNsb3VkeSc7XG4gICAgfVxuICAgIGlmIChpY29uID09PSAncGFydGx5LWNsb3VkeS1kYXknKSB7XG4gICAgICAgIHJldHVybiAnd2ktZGF5LWNsb3VkeSc7XG4gICAgfVxuICAgIGlmIChpY29uID09PSAncGFydGx5LWNsb3VkeS1uaWdodCcpIHtcbiAgICAgICAgcmV0dXJuICd3aS1uaWdodC1hbHQtY2xvdWR5JztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICdjbGVhci1kYXknKSB7XG4gICAgICAgIHJldHVybiAnd2ktZGF5LXN1bm55JztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICdjbGVhci1uaWdodCcpIHtcbiAgICAgICAgcmV0dXJuICd3aS1uaWdodC1jbGVhcic7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vQ1NTL3N0eWxlcy5jc3MnXG5pbXBvcnQgJy4vQ1NTL3dlYXRoZXItaWNvbnMuY3NzJ1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVNlYXJjaExpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0SGFuZGxlcic7XG5pbXBvcnQgeyBpbml0aWFsaXplU2NhbGVCdXR0b25MaXN0ZW5lciB9IGZyb20gJy4vbW9kdWxlcy9pbnB1dEhhbmRsZXInO1xuaW1wb3J0IGNyZWF0ZUFuZERpc3BsYXlMb2NhdGlvbkNvbmRpdGlvbnMgZnJvbSAnLi9tb2R1bGVzL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgY3VycmVudExvY2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0SGFuZGxlcic7XG5cbmluaXRpYWxpemVTZWFyY2hMaXN0ZW5lcigpO1xuaW5pdGlhbGl6ZVNjYWxlQnV0dG9uTGlzdGVuZXIoKTtcblxuY3JlYXRlQW5kRGlzcGxheUxvY2F0aW9uQ29uZGl0aW9ucyhjdXJyZW50TG9jYXRpb24pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==