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
    grid-template-rows: 380px 380px;
    gap: 50px;
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
`, "",{"version":3,"sources":["webpack://./src/CSS/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,4BAA4B;IAC5B,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,4BAA4B;IAC5B,oBAAoB;IACpB,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wCAAwC;IACxC,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,0CAA0C;IAC1C,wCAAwC;IACxC,aAAa;IACb,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,wCAAwC;IACxC,0DAA0D;IAC1D,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,wCAAwC;IACxC,iBAAiB;IACjB,0DAA0D;IAC1D,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    box-sizing: border-box;\n    color: var(--font-main);\n    font-family: 'Roboto', serif;\n    font-size: 1.15rem;\n    margin: 0px;\n    padding: 0px;\n    line-height: 1.6rem;\n}\n\n:root {\n    --background-main: #18181b;\n    --background-accent: #27272a;\n    --font-main: #fafafa;\n    --font-accent: #a1a1aa;\n    --font-darker: #e4e4e7;\n    --button-hover: #3f3f46;\n    --card-border-radius: 18px;\n}\n\nh3 {\n    position: absolute;\n    top: -35px;\n    left: 5px;\n    color: var(--font-accent);\n    font-weight: 500;\n}\n\n.feelslike, .high-low {\n    color: var(--font-accent);\n}\n\nbody {\n    background-color: var(--background-main);\n    height: 100vh;\n    display: grid;\n    justify-content: center;\n    grid-template-rows: 1fr 1fr 8fr;\n    min-width: 1400px;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\n.input-container {\n    place-self: center end;\n    display: flex;\n    gap: 15px;\n}\n\nbutton  {\n    border-radius: 12px;\n    height: 50px;\n    width: 87px;\n    border: none;\n    background-color: var(--background-accent);\n    color: var(--font-accent);\n}\n\nbutton:hover {\n    background-color: var(--button-hover);\n}\n\ninput {\n    border-radius: 15px;\n    height: 50px;\n    width: 400px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: none;\n    background-color: var(--background-accent);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.main-container {\n    width: max(1300px, 70vw);\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: 380px 380px;\n    gap: 50px;\n}\n\n.current-container {\n    position: relative;\n    height: 310px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    background-color: var(--background-accent);\n    border-radius: var(--card-border-radius);\n    padding: 20px;\n    grid-row: 1;\n}\n\n.feelslike {\n    font-size: 1rem;\n}\n\ni {\n    font-size: 2.3rem;\n}\n\n.precip-icon {\n    font-size: 1.15rem;\n}\n\n.precip {\n    display: flex;\n    gap: 10px;\n}\n\np.temp {\n    font-size: 1.7rem;\n}\n\n.flex-left {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n.flex-left > * {\n    font-size: 3.1rem;\n    font-weight: bold;\n}\n\n.flex-right > * {\n    font-size: 1.2rem;\n}\n\n.flex-right > .conditions {\n    font-size: 1.4rem;\n    margin-bottom: 10px;\n}\n\n.conditions {\n    font-weight: bold;\n}\n\n.date {\n    color: var(--font-accent);\n}\n\n.hourly-container {\n    position: relative;\n    display: grid;\n    background-color: var(--background-accent);\n    border-radius: var(--card-border-radius);\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    gap: 25px;\n    padding: 40px;\n}\n\n.daily-container {\n    position: relative;\n    display: grid;\n    background-color: var(--background-accent);\n    border-radius: var(--card-border-radius);\n    grid-column: 1/-1;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    gap: 25px;\n    padding: 40px;\n}\n\n.precip {\n    display: flex;\n    align-items: center;\n}\n\n.precip > p, .precip > i {\n    color: var(--font-darker);\n}\n\ndiv.day, div.hour {\n    background-color: var(--background-main);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    border-radius: var(--card-border-radius);\n}\n\n.date-container {\n    text-align: center;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtHQUErRyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksaTZCQUFpNkIsZ0NBQWdDLHlEQUF5RCx3WEFBd1gsd0JBQXdCLHVCQUF1QixHQUFHLE9BQU8sMEJBQTBCLGdDQUFn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QUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdB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d0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3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O1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNPO0FBQ2tDO0FBQ0s7QUFDRDtBQUNiOztBQUV6RCwrRUFBd0I7QUFDeEIsb0ZBQTZCOztBQUU3QiwrREFBa0MsQ0FBQyxrRUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL0NTUy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9DU1Mvd2VhdGhlci1pY29ucy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9DU1Mvc3R5bGVzLmNzcz80YWNhIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9DU1Mvd2VhdGhlci1pY29ucy5jc3M/ODU5OCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jbGFzc2VzL0NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy9kYXRhUHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9tb2R1bGVzL2lucHV0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy9sb2NhdGlvbkNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvd2VhdGhlckljb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtbWFpbik7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG59XG5cbjpyb290IHtcbiAgICAtLWJhY2tncm91bmQtbWFpbjogIzE4MTgxYjtcbiAgICAtLWJhY2tncm91bmQtYWNjZW50OiAjMjcyNzJhO1xuICAgIC0tZm9udC1tYWluOiAjZmFmYWZhO1xuICAgIC0tZm9udC1hY2NlbnQ6ICNhMWExYWE7XG4gICAgLS1mb250LWRhcmtlcjogI2U0ZTRlNztcbiAgICAtLWJ1dHRvbi1ob3ZlcjogIzNmM2Y0NjtcbiAgICAtLWNhcmQtYm9yZGVyLXJhZGl1czogMThweDtcbn1cblxuaDMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mZWVsc2xpa2UsIC5oaWdoLWxvdyB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDhmcjtcbiAgICBtaW4td2lkdGg6IDE0MDBweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbn1cblxuYnV0dG9uICB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDg3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCgxMzAwcHgsIDcwdncpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzgwcHggMzgwcHg7XG4gICAgZ2FwOiA1MHB4O1xufVxuXG4uY3VycmVudC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuLmZlZWxzbGlrZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbn1cblxuLnByZWNpcC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG59XG5cbi5wcmVjaXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5wLnRlbXAge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uZmxleC1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uZmxleC1sZWZ0ID4gKiB7XG4gICAgZm9udC1zaXplOiAzLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mbGV4LXJpZ2h0ID4gKiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mbGV4LXJpZ2h0ID4gLmNvbmRpdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb25kaXRpb25zIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRhdGUge1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWFjY2VudCk7XG59XG5cbi5ob3VybHktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDFmcikpO1xuICAgIGdhcDogMjVweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZGFpbHktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDFmcikpO1xuICAgIGdhcDogMjVweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4ucHJlY2lwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcmVjaXAgPiBwLCAucHJlY2lwID4gaSB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFya2VyKTtcbn1cblxuZGl2LmRheSwgZGl2LmhvdXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmRhdGUtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9DU1Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsd0NBQXdDO0lBQ3hDLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsMERBQTBEO0lBQzFELFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1tYWluOiAjMTgxODFiO1xcbiAgICAtLWJhY2tncm91bmQtYWNjZW50OiAjMjcyNzJhO1xcbiAgICAtLWZvbnQtbWFpbjogI2ZhZmFmYTtcXG4gICAgLS1mb250LWFjY2VudDogI2ExYTFhYTtcXG4gICAgLS1mb250LWRhcmtlcjogI2U0ZTRlNztcXG4gICAgLS1idXR0b24taG92ZXI6ICMzZjNmNDY7XFxuICAgIC0tY2FyZC1ib3JkZXItcmFkaXVzOiAxOHB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzVweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZmVlbHNsaWtlLCAuaGlnaC1sb3cge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA4ZnI7XFxuICAgIG1pbi13aWR0aDogMTQwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuYnV0dG9uICB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDg3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY2NlbnQpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoMTMwMHB4LCA3MHZ3KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4MHB4IDM4MHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5jdXJyZW50LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAzMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmZlZWxzbGlrZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaSB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbn1cXG5cXG4ucHJlY2lwLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5wcmVjaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbnAudGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZmxleC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLmZsZXgtbGVmdCA+ICoge1xcbiAgICBmb250LXNpemU6IDMuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mbGV4LXJpZ2h0ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZmxleC1yaWdodCA+IC5jb25kaXRpb25zIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb25kaXRpb25zIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtYWNjZW50KTtcXG59XFxuXFxuLmhvdXJseS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4uZGFpbHktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyLXJhZGl1cyk7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5wcmVjaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJlY2lwID4gcCwgLnByZWNpcCA+IGkge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrZXIpO1xcbn1cXG5cXG5kaXYuZGF5LCBkaXYuaG91ciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjd2VhdGhlcl9pY29uc3JlZ3VsYXJcIiB9KTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohXG4gKiAgV2VhdGhlciBJY29ucyAyLjAuMTBcbiAqICBVcGRhdGVkIE5vdmVtYmVyIDEsIDIwMjBcbiAqICBXZWF0aGVyIHRoZW1lZCBpY29ucyBmb3IgQm9vdHN0cmFwXG4gKiAgQXV0aG9yIC0gRXJpayBGbG93ZXJzIC0gZXJpa0BoZWxsb2VyaWsuY29tXG4gKiAgRW1haWw6IGVyaWtAaGVsbG9lcmlrLmNvbVxuICogIFR3aXR0ZXI6IGh0dHA6Ly90d2l0dGVyLmNvbS9FcmlrX1VYXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgTWFpbnRhaW5lZCBhdCBodHRwOi8vZXJpa2Zsb3dlcnMuZ2l0aHViLmlvL3dlYXRoZXItaWNvbnNcbiAqXG4gKiAgTGljZW5zZVxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIC0gRm9udCBsaWNlbnNlZCB1bmRlciBTSUwgT0ZMIDEuMSAtXG4gKiAgICBodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTFxuICogIC0gQ1NTLCBTQ1NTIGFuZCBMRVNTIGFyZSBsaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZSAtXG4gKiAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UuaHRtbFxuICogIC0gRG9jdW1lbnRhdGlvbiBsaWNlbnNlZCB1bmRlciBDQyBCWSAzLjAgLVxuICogICAgaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1xuICogIC0gSW5zcGlyZWQgYnkgYW5kIHdvcmtzIGdyZWF0IGFzIGEgY29tcGFuaW9uIHdpdGggRm9udCBBd2Vzb21lXG4gKiAgICBcIkZvbnQgQXdlc29tZSBieSBEYXZlIEdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvXCJcbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnd2VhdGhlcmljb25zJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgnd29mZjInKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdCgnd29mZicpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLndpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogJ3dlYXRoZXJpY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuLndpLWZ3IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMS40ZW07XG59XG4ud2ktcm90YXRlLTkwIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi53aS1yb3RhdGUtMTgwIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi53aS1yb3RhdGUtMjcwIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cbi53aS1mbGlwLWhvcml6b250YWwge1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbn1cbi53aS1mbGlwLXZlcnRpY2FsIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG59XG4ud2ktZGF5LXN1bm55OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGRcIjtcbn1cbi53aS1kYXktY2xvdWR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDJcIjtcbn1cbi53aS1kYXktY2xvdWR5LWd1c3RzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDBcIjtcbn1cbi53aS1kYXktY2xvdWR5LXdpbmR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDFcIjtcbn1cbi53aS1kYXktZm9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDNcIjtcbn1cbi53aS1kYXktaGFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA0XCI7XG59XG4ud2ktZGF5LWhhemU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNlwiO1xufVxuLndpLWRheS1saWdodG5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNVwiO1xufVxuLndpLWRheS1yYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1kYXktcmFpbi1taXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNlwiO1xufVxuLndpLWRheS1yYWluLXdpbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwN1wiO1xufVxuLndpLWRheS1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDlcIjtcbn1cbi53aS1kYXktc2xlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiMlwiO1xufVxuLndpLWRheS1zbGVldC1zdG9ybTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDY4XCI7XG59XG4ud2ktZGF5LXNub3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwYVwiO1xufVxuLndpLWRheS1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDZiXCI7XG59XG4ud2ktZGF5LXNub3ctd2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDY1XCI7XG59XG4ud2ktZGF5LXNwcmlua2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGJcIjtcbn1cbi53aS1kYXktc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBlXCI7XG59XG4ud2ktZGF5LXN1bm55LW92ZXJjYXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGNcIjtcbn1cbi53aS1kYXktdGh1bmRlcnN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTBcIjtcbn1cbi53aS1kYXktd2luZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4NVwiO1xufVxuLndpLXNvbGFyLWVjbGlwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2ZVwiO1xufVxuLndpLWhvdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDcyXCI7XG59XG4ud2ktZGF5LWNsb3VkeS1oaWdoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwN2RcIjtcbn1cbi53aS1kYXktbGlnaHQtd2luZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGM0XCI7XG59XG4ud2ktbmlnaHQtY2xlYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZVwiO1xufVxuLndpLW5pZ2h0LWFsdC1jbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4NlwiO1xufVxuLndpLW5pZ2h0LWFsdC1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyMlwiO1xufVxuLndpLW5pZ2h0LWFsdC1jbG91ZHktd2luZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyM1wiO1xufVxuLndpLW5pZ2h0LWFsdC1oYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjRcIjtcbn1cbi53aS1uaWdodC1hbHQtbGlnaHRuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjVcIjtcbn1cbi53aS1uaWdodC1hbHQtcmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDI4XCI7XG59XG4ud2ktbmlnaHQtYWx0LXJhaW4tbWl4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjZcIjtcbn1cbi53aS1uaWdodC1hbHQtcmFpbi13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjdcIjtcbn1cbi53aS1uaWdodC1hbHQtc2hvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDI5XCI7XG59XG4ud2ktbmlnaHQtYWx0LXNsZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjRcIjtcbn1cbi53aS1uaWdodC1hbHQtc2xlZXQtc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2YVwiO1xufVxuLndpLW5pZ2h0LWFsdC1zbm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmFcIjtcbn1cbi53aS1uaWdodC1hbHQtc25vdy10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2ZFwiO1xufVxuLndpLW5pZ2h0LWFsdC1zbm93LXdpbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2N1wiO1xufVxuLndpLW5pZ2h0LWFsdC1zcHJpbmtsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDJiXCI7XG59XG4ud2ktbmlnaHQtYWx0LXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyY1wiO1xufVxuLndpLW5pZ2h0LWFsdC10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW5pZ2h0LWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDMxXCI7XG59XG4ud2ktbmlnaHQtY2xvdWR5LWd1c3RzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMmZcIjtcbn1cbi53aS1uaWdodC1jbG91ZHktd2luZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzMFwiO1xufVxuLndpLW5pZ2h0LWZvZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDRhXCI7XG59XG4ud2ktbmlnaHQtaGFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDMyXCI7XG59XG4ud2ktbmlnaHQtbGlnaHRuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzNcIjtcbn1cbi53aS1uaWdodC1wYXJ0bHktY2xvdWR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODNcIjtcbn1cbi53aS1uaWdodC1yYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzZcIjtcbn1cbi53aS1uaWdodC1yYWluLW1peDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDM0XCI7XG59XG4ud2ktbmlnaHQtcmFpbi13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzVcIjtcbn1cbi53aS1uaWdodC1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzdcIjtcbn1cbi53aS1uaWdodC1zbGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGIzXCI7XG59XG4ud2ktbmlnaHQtc2xlZXQtc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2OVwiO1xufVxuLndpLW5pZ2h0LXNub3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzOFwiO1xufVxuLndpLW5pZ2h0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNmNcIjtcbn1cbi53aS1uaWdodC1zbm93LXdpbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2NlwiO1xufVxuLndpLW5pZ2h0LXNwcmlua2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzlcIjtcbn1cbi53aS1uaWdodC1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwM2FcIjtcbn1cbi53aS1uaWdodC10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzYlwiO1xufVxuLndpLWx1bmFyLWVjbGlwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3MFwiO1xufVxuLndpLXN0YXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzdcIjtcbn1cbi53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWRcIjtcbn1cbi53aS10aHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZVwiO1xufVxuLndpLW5pZ2h0LWFsdC1jbG91ZHktaGlnaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDdlXCI7XG59XG4ud2ktbmlnaHQtY2xvdWR5LWhpZ2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4MFwiO1xufVxuLndpLW5pZ2h0LWFsdC1wYXJ0bHktY2xvdWR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODFcIjtcbn1cbi53aS1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQxXCI7XG59XG4ud2ktY2xvdWR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMVwiO1xufVxuLndpLWNsb3VkeS13aW5keTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEyXCI7XG59XG4ud2ktZm9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTRcIjtcbn1cbi53aS1oYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTVcIjtcbn1cbi53aS1yYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTlcIjtcbn1cbi53aS1yYWluLW1peDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktcmFpbi13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMThcIjtcbn1cbi53aS1zaG93ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWFcIjtcbn1cbi53aS1zbGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI1XCI7XG59XG4ud2ktc25vdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktc3ByaW5rbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxY1wiO1xufVxuLndpLXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxZFwiO1xufVxuLndpLXRodW5kZXJzdG9ybTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktc25vdy13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjRcIjtcbn1cbi53aS1zbm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWJcIjtcbn1cbi53aS1zbW9nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzRcIjtcbn1cbi53aS1zbW9rZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYyXCI7XG59XG4ud2ktbGlnaHRuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTZcIjtcbn1cbi53aS1yYWluZHJvcHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0ZVwiO1xufVxuLndpLXJhaW5kcm9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzhcIjtcbn1cbi53aS1kdXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjNcIjtcbn1cbi53aS1zbm93Zmxha2UtY29sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd2luZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyMVwiO1xufVxuLndpLXN0cm9uZy13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTBcIjtcbn1cbi53aS1zYW5kc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4MlwiO1xufVxuLndpLWVhcnRocXVha2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjNlwiO1xufVxuLndpLWZpcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjN1wiO1xufVxuLndpLWZsb29kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwN2NcIjtcbn1cbi53aS1tZXRlb3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3MVwiO1xufVxuLndpLXRzdW5hbWk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjNVwiO1xufVxuLndpLXZvbGNhbm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjOFwiO1xufVxuLndpLWh1cnJpY2FuZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDczXCI7XG59XG4ud2ktdG9ybmFkbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktc21hbGwtY3JhZnQtYWR2aXNvcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjY1wiO1xufVxuLndpLWdhbGUtd2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGNkXCI7XG59XG4ud2ktc3Rvcm0td2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGNlXCI7XG59XG4ud2ktaHVycmljYW5lLXdhcm5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBjZlwiO1xufVxuLndpLXdpbmQtZGlyZWN0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjFcIjtcbn1cbi53aS1hbGllbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc1XCI7XG59XG4ud2ktY2Vsc2l1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDNjXCI7XG59XG4ud2ktZmFocmVuaGVpdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQ1XCI7XG59XG4ud2ktZGVncmVlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQyXCI7XG59XG4ud2ktdGhlcm1vbWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NVwiO1xufVxuLndpLXRoZXJtb21ldGVyLWV4dGVyaW9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTNcIjtcbn1cbi53aS10aGVybW9tZXRlci1pbnRlcm5hbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU0XCI7XG59XG4ud2ktY2xvdWQtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDNkXCI7XG59XG4ud2ktY2xvdWQtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0MFwiO1xufVxuLndpLWNsb3VkLXJlZnJlc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzZVwiO1xufVxuLndpLWhvcml6b246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0N1wiO1xufVxuLndpLWhvcml6b24tYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNDZcIjtcbn1cbi53aS1zdW5yaXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTFcIjtcbn1cbi53aS1zdW5zZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1MlwiO1xufVxuLndpLW1vb25yaXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzlcIjtcbn1cbi53aS1tb29uc2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwY2FcIjtcbn1cbi53aS1yZWZyZXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNGNcIjtcbn1cbi53aS1yZWZyZXNoLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDRiXCI7XG59XG4ud2ktdW1icmVsbGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4NFwiO1xufVxuLndpLWJhcm9tZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc5XCI7XG59XG4ud2ktaHVtaWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3YVwiO1xufVxuLndpLW5hOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwN2JcIjtcbn1cbi53aS10cmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGNiXCI7XG59XG4ud2ktbW9vbi1uZXc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5NVwiO1xufVxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5NlwiO1xufVxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5N1wiO1xufVxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5OFwiO1xufVxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5OVwiO1xufVxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5YVwiO1xufVxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5YlwiO1xufVxuLndpLW1vb24tZmlyc3QtcXVhcnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDljXCI7XG59XG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWRcIjtcbn1cbi53aS1tb29uLXdheGluZy1naWJib3VzLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5ZVwiO1xufVxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDlmXCI7XG59XG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTBcIjtcbn1cbi53aS1tb29uLXdheGluZy1naWJib3VzLTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhMVwiO1xufVxuLndpLW1vb24td2F4aW5nLWdpYmJvdXMtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGEyXCI7XG59XG4ud2ktbW9vbi1mdWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTNcIjtcbn1cbi53aS1tb29uLXdhbmluZy1naWJib3VzLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhNFwiO1xufVxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE1XCI7XG59XG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTZcIjtcbn1cbi53aS1tb29uLXdhbmluZy1naWJib3VzLTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhN1wiO1xufVxuLndpLW1vb24td2FuaW5nLWdpYmJvdXMtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGE4XCI7XG59XG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTlcIjtcbn1cbi53aS1tb29uLXRoaXJkLXF1YXJ0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhYVwiO1xufVxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhYlwiO1xufVxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhY1wiO1xufVxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhZFwiO1xufVxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhZVwiO1xufVxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBhZlwiO1xufVxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiMFwiO1xufVxuLndpLW1vb24tYWx0LW5ldzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGViXCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkMFwiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZDFcIjtcbn1cbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQyXCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBkM1wiO1xufVxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZDRcIjtcbn1cbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQ1XCI7XG59XG4ud2ktbW9vbi1hbHQtZmlyc3QtcXVhcnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQ2XCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQ3XCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQ4XCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGQ5XCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGRhXCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGRiXCI7XG59XG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGRjXCI7XG59XG4ud2ktbW9vbi1hbHQtZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGRkXCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGRlXCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGRmXCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGUwXCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGUxXCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGUyXCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGUzXCI7XG59XG4ud2ktbW9vbi1hbHQtdGhpcmQtcXVhcnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGU0XCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlNVwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZTZcIjtcbn1cbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGU3XCI7XG59XG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBlOFwiO1xufVxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZTlcIjtcbn1cbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGVhXCI7XG59XG4ud2ktbW9vbi0wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTVcIjtcbn1cbi53aS1tb29uLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5NlwiO1xufVxuLndpLW1vb24tMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDk3XCI7XG59XG4ud2ktbW9vbi0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOThcIjtcbn1cbi53aS1tb29uLTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5OVwiO1xufVxuLndpLW1vb24tNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDlhXCI7XG59XG4ud2ktbW9vbi02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWJcIjtcbn1cbi53aS1tb29uLTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5Y1wiO1xufVxuLndpLW1vb24tODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDlkXCI7XG59XG4ud2ktbW9vbi05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWVcIjtcbn1cbi53aS1tb29uLTEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWZcIjtcbn1cbi53aS1tb29uLTExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTBcIjtcbn1cbi53aS1tb29uLTEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTFcIjtcbn1cbi53aS1tb29uLTEzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTJcIjtcbn1cbi53aS1tb29uLTE0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTNcIjtcbn1cbi53aS1tb29uLTE1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTRcIjtcbn1cbi53aS1tb29uLTE2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTVcIjtcbn1cbi53aS1tb29uLTE3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTZcIjtcbn1cbi53aS1tb29uLTE4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTdcIjtcbn1cbi53aS1tb29uLTE5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYThcIjtcbn1cbi53aS1tb29uLTIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYTlcIjtcbn1cbi53aS1tb29uLTIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWFcIjtcbn1cbi53aS1tb29uLTIyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWJcIjtcbn1cbi53aS1tb29uLTIzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWNcIjtcbn1cbi53aS1tb29uLTI0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWRcIjtcbn1cbi53aS1tb29uLTI1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWVcIjtcbn1cbi53aS1tb29uLTI2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYWZcIjtcbn1cbi53aS1tb29uLTI3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjBcIjtcbn1cbi53aS10aW1lLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4YVwiO1xufVxuLndpLXRpbWUtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDhiXCI7XG59XG4ud2ktdGltZS0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOGNcIjtcbn1cbi53aS10aW1lLTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4ZFwiO1xufVxuLndpLXRpbWUtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDhlXCI7XG59XG4ud2ktdGltZS02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOGZcIjtcbn1cbi53aS10aW1lLTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5MFwiO1xufVxuLndpLXRpbWUtODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDkxXCI7XG59XG4ud2ktdGltZS05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTJcIjtcbn1cbi53aS10aW1lLTEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTNcIjtcbn1cbi53aS10aW1lLTExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOTRcIjtcbn1cbi53aS10aW1lLTEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODlcIjtcbn1cbi53aS1kaXJlY3Rpb24tdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1OFwiO1xufVxuLndpLWRpcmVjdGlvbi11cC1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU3XCI7XG59XG4ud2ktZGlyZWN0aW9uLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNGRcIjtcbn1cbi53aS1kaXJlY3Rpb24tZG93bi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDg4XCI7XG59XG4ud2ktZGlyZWN0aW9uLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0NFwiO1xufVxuLndpLWRpcmVjdGlvbi1kb3duLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0M1wiO1xufVxuLndpLWRpcmVjdGlvbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNDhcIjtcbn1cbi53aS1kaXJlY3Rpb24tdXAtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDg3XCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC0wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjdcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiOFwiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI5XCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYmFcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiYlwiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGJjXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYmRcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiZVwiO1xufVxuLndpLXdpbmQtYmVhdWZvcnQtODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGJmXCI7XG59XG4ud2ktd2luZC1iZWF1Zm9ydC05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzBcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzFcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzJcIjtcbn1cbi53aS13aW5kLWJlYXVmb3J0LTEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzNcIjtcbn1cbi53aS15YWhvby0wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTZcIjtcbn1cbi53aS15YWhvby0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGVcIjtcbn1cbi53aS15YWhvby0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzNcIjtcbn1cbi53aS15YWhvby0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWVcIjtcbn1cbi53aS15YWhvby00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWVcIjtcbn1cbi53aS15YWhvby01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTdcIjtcbn1cbi53aS15YWhvby02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTdcIjtcbn1cbi53aS15YWhvby03OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTdcIjtcbn1cbi53aS15YWhvby04OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTVcIjtcbn1cbi53aS15YWhvby05OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWFcIjtcbn1cbi53aS15YWhvby0xMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2kteWFob28tMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLXlhaG9vLTEyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWFcIjtcbn1cbi53aS15YWhvby0xMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2kteWFob28tMTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwYVwiO1xufVxuLndpLXlhaG9vLTE1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjRcIjtcbn1cbi53aS15YWhvby0xNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2kteWFob28tMTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLXlhaG9vLTE4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTdcIjtcbn1cbi53aS15YWhvby0xOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2kteWFob28tMjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXlhaG9vLTIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMjFcIjtcbn1cbi53aS15YWhvby0yMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYyXCI7XG59XG4ud2kteWFob28tMjM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1MFwiO1xufVxuLndpLXlhaG9vLTI0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTBcIjtcbn1cbi53aS15YWhvby0yNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2kteWFob28tMjY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLXlhaG9vLTI3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMzFcIjtcbn1cbi53aS15YWhvby0yODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2kteWFob28tMjk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzMVwiO1xufVxuLndpLXlhaG9vLTMwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDJcIjtcbn1cbi53aS15YWhvby0zMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDJlXCI7XG59XG4ud2kteWFob28tMzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLXlhaG9vLTMzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwODNcIjtcbn1cbi53aS15YWhvby0zNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBjXCI7XG59XG4ud2kteWFob28tMzU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxN1wiO1xufVxuLndpLXlhaG9vLTM2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzJcIjtcbn1cbi53aS15YWhvby0zNzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBlXCI7XG59XG4ud2kteWFob28tMzg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZVwiO1xufVxuLndpLXlhaG9vLTM5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGVcIjtcbn1cbi53aS15YWhvby00MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2kteWFob28tNDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2NFwiO1xufVxuLndpLXlhaG9vLTQyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWJcIjtcbn1cbi53aS15YWhvby00MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDY0XCI7XG59XG4ud2kteWFob28tNDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwY1wiO1xufVxuLndpLXlhaG9vLTQ1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGVcIjtcbn1cbi53aS15YWhvby00NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2kteWFob28tNDc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZVwiO1xufVxuLndpLXlhaG9vLTMyMDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3N1wiO1xufVxuLndpLWZvcmVjYXN0LWlvLWNsZWFyLWRheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG4ud2ktZm9yZWNhc3QtaW8tY2xlYXItbmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZVwiO1xufVxuLndpLWZvcmVjYXN0LWlvLXJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxOVwiO1xufVxuLndpLWZvcmVjYXN0LWlvLXNub3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYlwiO1xufVxuLndpLWZvcmVjYXN0LWlvLXNsZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjVcIjtcbn1cbi53aS1mb3JlY2FzdC1pby13aW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTBcIjtcbn1cbi53aS1mb3JlY2FzdC1pby1mb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLWZvcmVjYXN0LWlvLWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEzXCI7XG59XG4ud2ktZm9yZWNhc3QtaW8tcGFydGx5LWNsb3VkeS1kYXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwMlwiO1xufVxuLndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktbmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAzMVwiO1xufVxuLndpLWZvcmVjYXN0LWlvLWhhaWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNVwiO1xufVxuLndpLWZvcmVjYXN0LWlvLXRodW5kZXJzdG9ybTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktZm9yZWNhc3QtaW8tdG9ybmFkbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktd21vNDY4MC0wOmJlZm9yZSxcbi53aS13bW80NjgwLTAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTVcIjtcbn1cbi53aS13bW80NjgwLTE6YmVmb3JlLFxuLndpLXdtbzQ2ODAtMDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLXdtbzQ2ODAtMjpiZWZvcmUsXG4ud2ktd21vNDY4MC0wMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU1XCI7XG59XG4ud2ktd21vNDY4MC0zOmJlZm9yZSxcbi53aS13bW80NjgwLTAzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTNcIjtcbn1cbi53aS13bW80NjgwLTQ6YmVmb3JlLFxuLndpLXdtbzQ2ODAtMDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxNFwiO1xufVxuLndpLXdtbzQ2ODAtNTpiZWZvcmUsXG4ud2ktd21vNDY4MC0wNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0xMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0xMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0xMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktd21vNDY4MC0xODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUwXCI7XG59XG4ud2ktd21vNDY4MC0yMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0yMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC0yMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC0yMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC0yNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC0yNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC0yNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd21vNDY4MC0yNzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktd21vNDY4MC0yODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktd21vNDY4MC0yOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktd21vNDY4MC0zMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0zMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0zMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0zMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0zNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC0zNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktd21vNDY4MC00MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC00MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC00MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC00MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC00NDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC00NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC00NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC00NzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC00ODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC01MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC01MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC01MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC01MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC01NDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC01NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC01NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC01NzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC01ODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC02MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC02MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC02MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC02MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC02NDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC02NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC02NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC02NzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC02ODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC03MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC03MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC03MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC03MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC03NDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC03NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC03NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC03NzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd21vNDY4MC03ODpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktd21vNDY4MC04MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC04MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktd21vNDY4MC04MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC04MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktd21vNDY4MC04NDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFkXCI7XG59XG4ud2ktd21vNDY4MC04NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC04NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC04NzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktd21vNDY4MC04OTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktd21vNDY4MC05MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktd21vNDY4MC05MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFkXCI7XG59XG4ud2ktd21vNDY4MC05MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd21vNDY4MC05MzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd21vNDY4MC05NDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktd21vNDY4MC05NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd21vNDY4MC05NjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd21vNDY4MC05OTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktb3dtLTIwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktb3dtLTIwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktb3dtLTIwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktb3dtLTIxMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktb3dtLTIxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktb3dtLTIxMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktb3dtLTIyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE2XCI7XG59XG4ud2ktb3dtLTIzMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktb3dtLTIzMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktb3dtLTIzMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktb3dtLTMwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktb3dtLTMwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktb3dtLTMwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTMxMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTMxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTMxMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTMxMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2ktb3dtLTMxNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTMyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktb3dtLTUwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFjXCI7XG59XG4ud2ktb3dtLTUwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTUwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTUwMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTUwNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE5XCI7XG59XG4ud2ktb3dtLTUxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTUyMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2ktb3dtLTUyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2ktb3dtLTUyMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFhXCI7XG59XG4ud2ktb3dtLTUzMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFkXCI7XG59XG4ud2ktb3dtLTYwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktb3dtLTYwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktb3dtLTYwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI1XCI7XG59XG4ud2ktb3dtLTYxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTYxMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTYxNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTYxNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTYyMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE3XCI7XG59XG4ud2ktb3dtLTYyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktb3dtLTYyMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktb3dtLTcwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktb3dtLTcxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYyXCI7XG59XG4ud2ktb3dtLTcyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI2XCI7XG59XG4ud2ktb3dtLTczMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktb3dtLTc0MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE0XCI7XG59XG4ud2ktb3dtLTc2MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktb3dtLTc2MjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktb3dtLTc3MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDExXCI7XG59XG4ud2ktb3dtLTc4MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktb3dtLTgwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG4ud2ktb3dtLTgwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQxXCI7XG59XG4ud2ktb3dtLTgwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDQxXCI7XG59XG4ud2ktb3dtLTgwMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEzXCI7XG59XG4ud2ktb3dtLTgwNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEzXCI7XG59XG4ud2ktb3dtLTkwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDU2XCI7XG59XG4ud2ktb3dtLTkwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFkXCI7XG59XG4ud2ktb3dtLTkwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDczXCI7XG59XG4ud2ktb3dtLTkwMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDc2XCI7XG59XG4ud2ktb3dtLTkwNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDcyXCI7XG59XG4ud2ktb3dtLTkwNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDIxXCI7XG59XG4ud2ktb3dtLTkwNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDE1XCI7XG59XG4ud2ktb3dtLTk1NzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDUwXCI7XG59XG4ud2ktb3dtLWRheS0yMDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMFwiO1xufVxuLndpLW93bS1kYXktMjAxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTBcIjtcbn1cbi53aS1vd20tZGF5LTIwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEwXCI7XG59XG4ud2ktb3dtLWRheS0yMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNVwiO1xufVxuLndpLW93bS1kYXktMjExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDVcIjtcbn1cbi53aS1vd20tZGF5LTIxMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA1XCI7XG59XG4ud2ktb3dtLWRheS0yMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNVwiO1xufVxuLndpLW93bS1kYXktMjMwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTBcIjtcbn1cbi53aS1vd20tZGF5LTIzMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEwXCI7XG59XG4ud2ktb3dtLWRheS0yMzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxMFwiO1xufVxuLndpLW93bS1kYXktMzAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGJcIjtcbn1cbi53aS1vd20tZGF5LTMwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBiXCI7XG59XG4ud2ktb3dtLWRheS0zMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktMzEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1vd20tZGF5LTMxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS0zMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktMzEzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1vd20tZGF5LTMxNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS0zMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwYlwiO1xufVxuLndpLW93bS1kYXktNTAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGJcIjtcbn1cbi53aS1vd20tZGF5LTUwMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS01MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOFwiO1xufVxuLndpLW93bS1kYXktNTAzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDhcIjtcbn1cbi53aS1vd20tZGF5LTUwNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA4XCI7XG59XG4ud2ktb3dtLWRheS01MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNlwiO1xufVxuLndpLW93bS1kYXktNTIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDlcIjtcbn1cbi53aS1vd20tZGF5LTUyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA5XCI7XG59XG4ud2ktb3dtLWRheS01MjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwOVwiO1xufVxuLndpLW93bS1kYXktNTMxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGVcIjtcbn1cbi53aS1vd20tZGF5LTYwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBhXCI7XG59XG4ud2ktb3dtLWRheS02MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiMlwiO1xufVxuLndpLW93bS1kYXktNjAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGFcIjtcbn1cbi53aS1vd20tZGF5LTYxMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA2XCI7XG59XG4ud2ktb3dtLWRheS02MTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNlwiO1xufVxuLndpLW93bS1kYXktNjE1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDZcIjtcbn1cbi53aS1vd20tZGF5LTYxNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA2XCI7XG59XG4ud2ktb3dtLWRheS02MjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwNlwiO1xufVxuLndpLW93bS1kYXktNjIxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMGFcIjtcbn1cbi53aS1vd20tZGF5LTYyMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBhXCI7XG59XG4ud2ktb3dtLWRheS03MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwM1wiO1xufVxuLndpLW93bS1kYXktNzExOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjJcIjtcbn1cbi53aS1vd20tZGF5LTcyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI2XCI7XG59XG4ud2ktb3dtLWRheS03MzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS1kYXktNzQxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDNcIjtcbn1cbi53aS1vd20tZGF5LTc2MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDYzXCI7XG59XG4ud2ktb3dtLWRheS03NjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS1kYXktNzgxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTZcIjtcbn1cbi53aS1vd20tZGF5LTgwMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG4ud2ktb3dtLWRheS04MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwMlwiO1xufVxuLndpLW93bS1kYXktODAyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMDJcIjtcbn1cbi53aS1vd20tZGF5LTgwMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDEzXCI7XG59XG4ud2ktb3dtLWRheS04MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLW93bS1kYXktOTAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNTZcIjtcbn1cbi53aS1vd20tZGF5LTkwMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDczXCI7XG59XG4ud2ktb3dtLWRheS05MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLW93bS1kYXktOTA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNzJcIjtcbn1cbi53aS1vd20tZGF5LTkwNjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDA0XCI7XG59XG4ud2ktb3dtLWRheS05NTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1MFwiO1xufVxuLndpLW93bS1uaWdodC0yMDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW93bS1uaWdodC0yMDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW93bS1uaWdodC0yMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW93bS1uaWdodC0yMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNVwiO1xufVxuLndpLW93bS1uaWdodC0yMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNVwiO1xufVxuLndpLW93bS1uaWdodC0yMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNVwiO1xufVxuLndpLW93bS1uaWdodC0yMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNVwiO1xufVxuLndpLW93bS1uaWdodC0yMzA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW93bS1uaWdodC0yMzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW93bS1uaWdodC0yMzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZFwiO1xufVxuLndpLW93bS1uaWdodC0zMDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYlwiO1xufVxuLndpLW93bS1uaWdodC0zMDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYlwiO1xufVxuLndpLW93bS1uaWdodC0zMDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC0zMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC0zMTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC0zMTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC0zMTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC0zMTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC0zMjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYlwiO1xufVxuLndpLW93bS1uaWdodC01MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYlwiO1xufVxuLndpLW93bS1uaWdodC01MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC01MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC01MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC01MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOFwiO1xufVxuLndpLW93bS1uaWdodC01MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNlwiO1xufVxuLndpLW93bS1uaWdodC01MjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOVwiO1xufVxuLndpLW93bS1uaWdodC01MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOVwiO1xufVxuLndpLW93bS1uaWdodC01MjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyOVwiO1xufVxuLndpLW93bS1uaWdodC01MzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyY1wiO1xufVxuLndpLW93bS1uaWdodC02MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYVwiO1xufVxuLndpLW93bS1uaWdodC02MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNFwiO1xufVxuLndpLW93bS1uaWdodC02MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYVwiO1xufVxuLndpLW93bS1uaWdodC02MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNlwiO1xufVxuLndpLW93bS1uaWdodC02MTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNlwiO1xufVxuLndpLW93bS1uaWdodC02MTU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNlwiO1xufVxuLndpLW93bS1uaWdodC02MTY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNlwiO1xufVxuLndpLW93bS1uaWdodC02MjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNlwiO1xufVxuLndpLW93bS1uaWdodC02MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYVwiO1xufVxuLndpLW93bS1uaWdodC02MjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyYVwiO1xufVxuLndpLW93bS1uaWdodC03MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0YVwiO1xufVxuLndpLW93bS1uaWdodC03MTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2MlwiO1xufVxuLndpLW93bS1uaWdodC03MjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNlwiO1xufVxuLndpLW93bS1uaWdodC03MzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS1uaWdodC03NDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA0YVwiO1xufVxuLndpLW93bS1uaWdodC03NjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS1uaWdodC03NjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2M1wiO1xufVxuLndpLW93bS1uaWdodC03ODE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLW93bS1uaWdodC04MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyZVwiO1xufVxuLndpLW93bS1uaWdodC04MDE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4MVwiO1xufVxuLndpLW93bS1uaWdodC04MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA4NlwiO1xufVxuLndpLW93bS1uaWdodC04MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLW93bS1uaWdodC04MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxM1wiO1xufVxuLndpLW93bS1uaWdodC05MDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1NlwiO1xufVxuLndpLW93bS1uaWdodC05MDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3M1wiO1xufVxuLndpLW93bS1uaWdodC05MDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3NlwiO1xufVxuLndpLW93bS1uaWdodC05MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA3MlwiO1xufVxuLndpLW93bS1uaWdodC05MDY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAyNFwiO1xufVxuLndpLW93bS1uaWdodC05NTc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA1MFwiO1xufVxuLndpLXd1LWNoYW5jZWZsdXJyaWVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwNjRcIjtcbn1cbi53aS13dS1jaGFuY2VyYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMTlcIjtcbn1cbi53aS13dS1jaGFuY2VzbGVhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMGI1XCI7XG59XG4ud2ktd3UtY2hhbmNlc25vdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFiXCI7XG59XG4ud2ktd3UtY2hhbmNldHN0b3JtczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd3UtY2xlYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLXd1LWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2ktd3UtZmx1cnJpZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA2NFwiO1xufVxuLndpLXd1LWhhenk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjBiNlwiO1xufVxuLndpLXd1LW1vc3RseWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2ktd3UtbW9zdGx5c3Vubnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLXd1LXBhcnRseWNsb3VkeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDAyXCI7XG59XG4ud2ktd3UtcGFydGx5c3Vubnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAwZFwiO1xufVxuLndpLXd1LXJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjAxYVwiO1xufVxuLndpLXd1LXNsZWF0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYjVcIjtcbn1cbi53aS13dS1zbm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwMWJcIjtcbn1cbi53aS13dS1zdW5ueTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG4ud2ktd3UtdHN0b3JtczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDFlXCI7XG59XG4ud2ktd3UtdW5rbm93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9DU1Mvd2VhdGhlci1pY29ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBQ0Y7RUFDRSwyQkFBMkI7RUFDM0IsNENBQW9EO0VBQ3BELDRTQUFtWDtFQUNuWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdFQUFnRTtFQUNoRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZ0VBQWdFO0VBQ2hFLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnRUFBZ0U7RUFDaEUsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDBFQUEwRTtFQUMxRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMEVBQTBFO0VBQzFFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiFcXG4gKiAgV2VhdGhlciBJY29ucyAyLjAuMTBcXG4gKiAgVXBkYXRlZCBOb3ZlbWJlciAxLCAyMDIwXFxuICogIFdlYXRoZXIgdGhlbWVkIGljb25zIGZvciBCb290c3RyYXBcXG4gKiAgQXV0aG9yIC0gRXJpayBGbG93ZXJzIC0gZXJpa0BoZWxsb2VyaWsuY29tXFxuICogIEVtYWlsOiBlcmlrQGhlbGxvZXJpay5jb21cXG4gKiAgVHdpdHRlcjogaHR0cDovL3R3aXR0ZXIuY29tL0VyaWtfVVhcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogIE1haW50YWluZWQgYXQgaHR0cDovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zXFxuICpcXG4gKiAgTGljZW5zZVxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgLSBGb250IGxpY2Vuc2VkIHVuZGVyIFNJTCBPRkwgMS4xIC1cXG4gKiAgICBodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTFxcbiAqICAtIENTUywgU0NTUyBhbmQgTEVTUyBhcmUgbGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2UgLVxcbiAqICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5odG1sXFxuICogIC0gRG9jdW1lbnRhdGlvbiBsaWNlbnNlZCB1bmRlciBDQyBCWSAzLjAgLVxcbiAqICAgIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cXG4gKiAgLSBJbnNwaXJlZCBieSBhbmQgd29ya3MgZ3JlYXQgYXMgYSBjb21wYW5pb24gd2l0aCBGb250IEF3ZXNvbWVcXG4gKiAgICBcXFwiRm9udCBBd2Vzb21lIGJ5IERhdmUgR2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW9cXFwiXFxuICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3dlYXRoZXJpY29ucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdCcpO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LnN2ZyN3ZWF0aGVyX2ljb25zcmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ud2kge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6ICd3ZWF0aGVyaWNvbnMnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4ud2ktZncge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEuNGVtO1xcbn1cXG4ud2ktcm90YXRlLTkwIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi53aS1yb3RhdGUtMTgwIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Mik7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi53aS1yb3RhdGUtMjcwIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcbi53aS1mbGlwLWhvcml6b250YWwge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcbi53aS1mbGlwLXZlcnRpY2FsIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbn1cXG4ud2ktZGF5LXN1bm55OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktZGF5LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLWRheS1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMFxcXCI7XFxufVxcbi53aS1kYXktY2xvdWR5LXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDFcXFwiO1xcbn1cXG4ud2ktZGF5LWZvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAzXFxcIjtcXG59XFxuLndpLWRheS1oYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDRcXFwiO1xcbn1cXG4ud2ktZGF5LWhhemU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNlxcXCI7XFxufVxcbi53aS1kYXktbGlnaHRuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktZGF5LXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1kYXktcmFpbi1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1kYXktcmFpbi13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDdcXFwiO1xcbn1cXG4ud2ktZGF5LXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOVxcXCI7XFxufVxcbi53aS1kYXktc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMlxcXCI7XFxufVxcbi53aS1kYXktc2xlZXQtc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2OFxcXCI7XFxufVxcbi53aS1kYXktc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLWRheS1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZiXFxcIjtcXG59XFxuLndpLWRheS1zbm93LXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NVxcXCI7XFxufVxcbi53aS1kYXktc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1kYXktc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLWRheS1zdW5ueS1vdmVyY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG59XFxuLndpLWRheS10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1kYXktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NVxcXCI7XFxufVxcbi53aS1zb2xhci1lY2xpcHNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmVcXFwiO1xcbn1cXG4ud2ktaG90OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4ud2ktZGF5LWNsb3VkeS1oaWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2RcXFwiO1xcbn1cXG4ud2ktZGF5LWxpZ2h0LXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNFxcXCI7XFxufVxcbi53aS1uaWdodC1jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtY2xvdWR5LWd1c3RzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjJcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWNsb3VkeS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIzXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1oYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjRcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWxpZ2h0bmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXJhaW4tbWl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXJhaW4td2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI3XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjlcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNsZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjRcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNsZWV0LXN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmFcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc25vdy10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2ZFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc25vdy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjdcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNwcmlua2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyY1xcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktbmlnaHQtY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzFcXFwiO1xcbn1cXG4ud2ktbmlnaHQtY2xvdWR5LWd1c3RzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmZcXFwiO1xcbn1cXG4ud2ktbmlnaHQtY2xvdWR5LXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzBcXFwiO1xcbn1cXG4ud2ktbmlnaHQtZm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGFcXFwiO1xcbn1cXG4ud2ktbmlnaHQtaGFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMyXFxcIjtcXG59XFxuLndpLW5pZ2h0LWxpZ2h0bmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMzXFxcIjtcXG59XFxuLndpLW5pZ2h0LXBhcnRseS1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4M1xcXCI7XFxufVxcbi53aS1uaWdodC1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzZcXFwiO1xcbn1cXG4ud2ktbmlnaHQtcmFpbi1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzNFxcXCI7XFxufVxcbi53aS1uaWdodC1yYWluLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzNVxcXCI7XFxufVxcbi53aS1uaWdodC1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzdcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiM1xcXCI7XFxufVxcbi53aS1uaWdodC1zbGVldC1zdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY5XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzOFxcXCI7XFxufVxcbi53aS1uaWdodC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZjXFxcIjtcXG59XFxuLndpLW5pZ2h0LXNub3ctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY2XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNwcmlua2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzlcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNhXFxcIjtcXG59XFxuLndpLW5pZ2h0LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNiXFxcIjtcXG59XFxuLndpLWx1bmFyLWVjbGlwc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MFxcXCI7XFxufVxcbi53aS1zdGFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc3XFxcIjtcXG59XFxuLndpLXN0b3JtLXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtY2xvdWR5LWhpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3ZVxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHktaGlnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgwXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1wYXJ0bHktY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODFcXFwiO1xcbn1cXG4ud2ktY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MVxcXCI7XFxufVxcbi53aS1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMVxcXCI7XFxufVxcbi53aS1jbG91ZHktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMlxcXCI7XFxufVxcbi53aS1mb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS1oYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXJhaW4tbWl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktcmFpbi13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMThcXFwiO1xcbn1cXG4ud2ktc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXNsZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjVcXFwiO1xcbn1cXG4ud2ktc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXNwcmlua2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXNub3ctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1zbW9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzRcXFwiO1xcbn1cXG4ud2ktc21va2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1saWdodG5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS1yYWluZHJvcHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0ZVxcXCI7XFxufVxcbi53aS1yYWluZHJvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc4XFxcIjtcXG59XFxuLndpLWR1c3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1zbm93Zmxha2UtY29sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjFcXFwiO1xcbn1cXG4ud2ktc3Ryb25nLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS1zYW5kc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MlxcXCI7XFxufVxcbi53aS1lYXJ0aHF1YWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzZcXFwiO1xcbn1cXG4ud2ktZmlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM3XFxcIjtcXG59XFxuLndpLWZsb29kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2NcXFwiO1xcbn1cXG4ud2ktbWV0ZW9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzFcXFwiO1xcbn1cXG4ud2ktdHN1bmFtaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM1XFxcIjtcXG59XFxuLndpLXZvbGNhbm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOFxcXCI7XFxufVxcbi53aS1odXJyaWNhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS10b3JuYWRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktc21hbGwtY3JhZnQtYWR2aXNvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjY1xcXCI7XFxufVxcbi53aS1nYWxlLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjZFxcXCI7XFxufVxcbi53aS1zdG9ybS13YXJuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2VcXFwiO1xcbn1cXG4ud2ktaHVycmljYW5lLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjZlxcXCI7XFxufVxcbi53aS13aW5kLWRpcmVjdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIxXFxcIjtcXG59XFxuLndpLWFsaWVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzVcXFwiO1xcbn1cXG4ud2ktY2Vsc2l1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNjXFxcIjtcXG59XFxuLndpLWZhaHJlbmhlaXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0NVxcXCI7XFxufVxcbi53aS1kZWdyZWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDJcXFwiO1xcbn1cXG4ud2ktdGhlcm1vbWV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NVxcXCI7XFxufVxcbi53aS10aGVybW9tZXRlci1leHRlcmlvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUzXFxcIjtcXG59XFxuLndpLXRoZXJtb21ldGVyLWludGVybmFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTRcXFwiO1xcbn1cXG4ud2ktY2xvdWQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNkXFxcIjtcXG59XFxuLndpLWNsb3VkLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDBcXFwiO1xcbn1cXG4ud2ktY2xvdWQtcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNlXFxcIjtcXG59XFxuLndpLWhvcml6b246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0N1xcXCI7XFxufVxcbi53aS1ob3Jpem9uLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ2XFxcIjtcXG59XFxuLndpLXN1bnJpc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MVxcXCI7XFxufVxcbi53aS1zdW5zZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MlxcXCI7XFxufVxcbi53aS1tb29ucmlzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG59XFxuLndpLW1vb25zZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjYVxcXCI7XFxufVxcbi53aS1yZWZyZXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGNcXFwiO1xcbn1cXG4ud2ktcmVmcmVzaC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YlxcXCI7XFxufVxcbi53aS11bWJyZWxsYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg0XFxcIjtcXG59XFxuLndpLWJhcm9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc5XFxcIjtcXG59XFxuLndpLWh1bWlkaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2FcXFwiO1xcbn1cXG4ud2ktbmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3YlxcXCI7XFxufVxcbi53aS10cmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNiXFxcIjtcXG59XFxuLndpLW1vb24tbmV3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTVcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk2XFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5N1xcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOThcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk5XFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWJcXFwiO1xcbn1cXG4ud2ktbW9vbi1maXJzdC1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWNcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWRcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWVcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWZcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTBcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTFcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctZ2liYm91cy02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTJcXFwiO1xcbn1cXG4ud2ktbW9vbi1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTNcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTRcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTVcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTZcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTdcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYThcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctZ2liYm91cy02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTlcXFwiO1xcbn1cXG4ud2ktbW9vbi10aGlyZC1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWFcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFiXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhY1xcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWRcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFlXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZlxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjBcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtbmV3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZWJcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQxXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDJcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkM1xcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ0XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDVcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtZmlyc3QtcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ2XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkN1xcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDhcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ5XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkYVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGJcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRjXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkZFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGVcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRmXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTFcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUyXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlM1xcXCI7XFxufVxcbi53aS1tb29uLWFsdC10aGlyZC1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTRcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlNVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU2XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTdcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlOFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU5XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZWFcXFwiO1xcbn1cXG4ud2ktbW9vbi0wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTVcXFwiO1xcbn1cXG4ud2ktbW9vbi0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTZcXFwiO1xcbn1cXG4ud2ktbW9vbi0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTdcXFwiO1xcbn1cXG4ud2ktbW9vbi0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOThcXFwiO1xcbn1cXG4ud2ktbW9vbi00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTlcXFwiO1xcbn1cXG4ud2ktbW9vbi01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWFcXFwiO1xcbn1cXG4ud2ktbW9vbi02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWJcXFwiO1xcbn1cXG4ud2ktbW9vbi03OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWNcXFwiO1xcbn1cXG4ud2ktbW9vbi04OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWRcXFwiO1xcbn1cXG4ud2ktbW9vbi05OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWVcXFwiO1xcbn1cXG4ud2ktbW9vbi0xMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlmXFxcIjtcXG59XFxuLndpLW1vb24tMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMFxcXCI7XFxufVxcbi53aS1tb29uLTEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTFcXFwiO1xcbn1cXG4ud2ktbW9vbi0xMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEyXFxcIjtcXG59XFxuLndpLW1vb24tMTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhM1xcXCI7XFxufVxcbi53aS1tb29uLTE1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTRcXFwiO1xcbn1cXG4ud2ktbW9vbi0xNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE1XFxcIjtcXG59XFxuLndpLW1vb24tMTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNlxcXCI7XFxufVxcbi53aS1tb29uLTE4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTdcXFwiO1xcbn1cXG4ud2ktbW9vbi0xOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE4XFxcIjtcXG59XFxuLndpLW1vb24tMjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOVxcXCI7XFxufVxcbi53aS1tb29uLTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWFcXFwiO1xcbn1cXG4ud2ktbW9vbi0yMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFiXFxcIjtcXG59XFxuLndpLW1vb24tMjM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhY1xcXCI7XFxufVxcbi53aS1tb29uLTI0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWRcXFwiO1xcbn1cXG4ud2ktbW9vbi0yNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFlXFxcIjtcXG59XFxuLndpLW1vb24tMjY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZlxcXCI7XFxufVxcbi53aS1tb29uLTI3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjBcXFwiO1xcbn1cXG4ud2ktdGltZS0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGFcXFwiO1xcbn1cXG4ud2ktdGltZS0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGJcXFwiO1xcbn1cXG4ud2ktdGltZS0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGNcXFwiO1xcbn1cXG4ud2ktdGltZS00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGRcXFwiO1xcbn1cXG4ud2ktdGltZS01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGVcXFwiO1xcbn1cXG4ud2ktdGltZS02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGZcXFwiO1xcbn1cXG4ud2ktdGltZS03OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTBcXFwiO1xcbn1cXG4ud2ktdGltZS04OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTFcXFwiO1xcbn1cXG4ud2ktdGltZS05OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTJcXFwiO1xcbn1cXG4ud2ktdGltZS0xMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkzXFxcIjtcXG59XFxuLndpLXRpbWUtMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NFxcXCI7XFxufVxcbi53aS10aW1lLTEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODlcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNThcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLXVwLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTdcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGRcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLWRvd24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4OFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ0XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1kb3duLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0M1xcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ4XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi11cC1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODdcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjdcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjhcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjlcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYmFcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYmJcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYmNcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYmRcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC03OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYmVcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC04OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYmZcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC05OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzBcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0xMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMxXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMlxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzNcXFwiO1xcbn1cXG4ud2kteWFob28tMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLXlhaG9vLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiO1xcbn1cXG4ud2kteWFob28tMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXlhaG9vLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS15YWhvby01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS15YWhvby04OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2kteWFob28tOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXlhaG9vLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2kteWFob28tMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS15YWhvby0xMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXlhaG9vLTEzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2kteWFob28tMTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS15YWhvby0xNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXlhaG9vLTE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2kteWFob28tMTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS15YWhvby0xODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTE5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2kteWFob28tMjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS15YWhvby0yMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDIxXFxcIjtcXG59XFxuLndpLXlhaG9vLTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiO1xcbn1cXG4ud2kteWFob28tMjM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS15YWhvby0yNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXlhaG9vLTI1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2kteWFob28tMjY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS15YWhvby0yNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjtcXG59XFxuLndpLXlhaG9vLTI4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2kteWFob28tMjk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMVxcXCI7XFxufVxcbi53aS15YWhvby0zMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXlhaG9vLTMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbn1cXG4ud2kteWFob28tMzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS15YWhvby0zMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgzXFxcIjtcXG59XFxuLndpLXlhaG9vLTM0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcbn1cXG4ud2kteWFob28tMzU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS15YWhvby0zNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcyXFxcIjtcXG59XFxuLndpLXlhaG9vLTM3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tMzg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby0zOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTQwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2kteWFob28tNDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS15YWhvby00MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXlhaG9vLTQzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2kteWFob28tNDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxufVxcbi53aS15YWhvby00NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTQ2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2kteWFob28tNDc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby0zMjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzdcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tY2xlYXItZGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tY2xlYXItbmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXNsZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjVcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8td2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLWZvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktZGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tcGFydGx5LWNsb3VkeS1uaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby10b3JuYWRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0wOmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMTpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS13bW80NjgwLTI6YmVmb3JlLFxcbi53aS13bW80NjgwLTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zOmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTU6YmVmb3JlLFxcbi53aS13bW80NjgwLTA1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTI0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTI3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS13bW80NjgwLTMwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTMzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTQwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTQzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTQ2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTUwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTUzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTU2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTYwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTYzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTY2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTcwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTczOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTgwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTgzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTg2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTkwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTkzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTk2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05OTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS0yMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0yMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS1vd20tMjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLW93bS0yMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS1vd20tMjMwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0yMzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMzAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktb3dtLTMwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLW93bS0zMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tMzEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTMxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS0zMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tMzEzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktb3dtLTMxNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS0zMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1vd20tNTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktb3dtLTUwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS01MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tNTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTUwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS01MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNTIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktb3dtLTUyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLW93bS01MjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1vd20tNTMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktb3dtLTYwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLW93bS02MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1vd20tNjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjVcXFwiO1xcbn1cXG4ud2ktb3dtLTYxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNjE1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYxNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktb3dtLTYyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLW93bS03MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS1vd20tNzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiO1xcbn1cXG4ud2ktb3dtLTcyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLW93bS03MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tNzQxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktb3dtLTc2MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS03NjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tNzcxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTFcXFwiO1xcbn1cXG4ud2ktb3dtLTc4MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS04MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS1vd20tODAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDFcXFwiO1xcbn1cXG4ud2ktb3dtLTgwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQxXFxcIjtcXG59XFxuLndpLW93bS04MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tODA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLTkwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjtcXG59XFxuLndpLW93bS05MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS1vd20tOTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiO1xcbn1cXG4ud2ktb3dtLTkwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLW93bS05MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1vd20tOTA1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjFcXFwiO1xcbn1cXG4ud2ktb3dtLTkwNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLW93bS05NTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLndpLW93bS1kYXktMjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLndpLW93bS1kYXktMjMwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIzMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMzAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzEzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLW93bS1kYXktNTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDlcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIyXFxcIjtcXG59XFxuLndpLW93bS1kYXktNjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjE1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTcwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAzXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTczMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzQxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03NjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTc2MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzgxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS04MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLW93bS1kYXktODAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS04MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS1kYXktOTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLW93bS1kYXktOTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTk1NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjMwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMzI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJiXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzEzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMxNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjlcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI5XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjE1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYxNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTcyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzQxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTc2MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03NjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzgxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC04MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC04MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTkwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTkwNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI0XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05NTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MFxcXCI7XFxufVxcbi53aS13dS1jaGFuY2VmbHVycmllczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13dS1jaGFuY2VzbGVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI1XFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZXNub3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13dS1jaGFuY2V0c3Rvcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd3UtY2xlYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS13dS1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS13dS1mbHVycmllczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXd1LWhhenk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNlxcXCI7XFxufVxcbi53aS13dS1tb3N0bHljbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS13dS1tb3N0bHlzdW5ueTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXd1LXBhcnRseWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXd1LXBhcnRseXN1bm55OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktd3UtcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXd1LXNsZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjVcXFwiO1xcbn1cXG4ud2ktd3Utc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXd1LXN1bm55OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktd3UtdHN0b3JtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXd1LXVua25vd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLWljb25zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXItaWNvbnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9ucyA9IGRhdGEuY29uZGl0aW9ucztcbiAgICAgICAgdGhpcy5pY29uID0gZGF0YS5pY29uO1xuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gZGF0YS50ZW1wO1xuICAgICAgICB0aGlzLmZlZWxzID0gZGF0YS5mZWVsc2xpa2U7XG4gICAgICAgIHRoaXMucHJlY2lwID0gTWF0aC5yb3VuZChkYXRhLnByZWNpcHByb2IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDb25kaXRpb25zIGV4dGVuZHMgQ29uZGl0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzdXBlcihkYXRhLmN1cnJlbnRDb25kaXRpb25zKTtcbiAgICAgICAgdGhpcy5oaWdoID0gTWF0aC5yb3VuZChkYXRhLmRheXNbMF0udGVtcG1heCk7XG4gICAgICAgIHRoaXMubG93ID0gTWF0aC5yb3VuZChkYXRhLmRheXNbMF0udGVtcG1pbik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSG91cmx5Q29uZGl0aW9ucyBleHRlbmRzIENvbmRpdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGRheSwgaG91cikge1xuICAgICAgICBzdXBlcihkYXRhLmRheXNbZGF5XS5ob3Vyc1tob3VyXSk7XG4gICAgICAgIHRoaXMuaG91ciA9IGhvdXI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGFpbHlDb25kaXRpb25zIGV4dGVuZHMgQ29uZGl0aW9ucyB7XG4gICAgY29uc3RydWN0b3IgKGRhdGEsIGRheSkge1xuICAgICAgICBzdXBlcihkYXRhLmRheXNbZGF5XSk7XG4gICAgICAgIHRoaXMuZGF5ID0gZGF0YS5kYXlzW2RheV0uZGF0ZXRpbWU7XG4gICAgfVxufSIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCBjcmVhdGVDdXJyZW50Q29uZGl0aW9ucywgY3JlYXRlSG91cmx5QXJyYXksIGNyZWF0ZURhaWx5QXJyYXksIGdldE5leHRIb3VyIH0gZnJvbSBcIi4vbG9jYXRpb25Db25kaXRpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5TG9jYXRpb24sIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucywgZGlzcGxheUhvdXJseUNvbmRpdGlvbnMsIGRpc3BsYXlEYWlseUNvbmRpdGlvbnN9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheUxvY2F0aW9uQ29uZGl0aW9ucyhsb2NhdGlvbikge1xuXG4gICAgLy9HZXQgd2VhdGhlciBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICBjb25zdCBjdXJyZW50ID0gY3JlYXRlQ3VycmVudENvbmRpdGlvbnMoZGF0YSk7XG4gICAgY29uc3QgaG91cmx5ID0gY3JlYXRlSG91cmx5QXJyYXkoZGF0YSwgZ2V0TmV4dEhvdXIoZGF0YSkpO1xuICAgIGNvbnN0IGRhaWx5ID0gY3JlYXRlRGFpbHlBcnJheShkYXRhKTtcblxuICAgIC8vRGlzcGxheSB3ZWF0aGVyIGRhdGFcbiAgICBkaXNwbGF5TG9jYXRpb24oZGF0YS5yZXNvbHZlZEFkZHJlc3MpO1xuICAgIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhjdXJyZW50KTtcbiAgICBkaXNwbGF5SG91cmx5Q29uZGl0aW9ucyhob3VybHkpO1xuICAgIGRpc3BsYXlEYWlseUNvbmRpdGlvbnMoZGFpbHkpO1xufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRvMTJIb3VyVGltZSh0aW1lKSB7XG4gICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcxMiBBTSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRpbWUgPD0gMTEpIHtcbiAgICAgICAgcmV0dXJuIGAke3RpbWV9IEFNYDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGltZSA9PT0gMTIpIHtcbiAgICAgICAgcmV0dXJuICcxMiBQTSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7dGltZSAtIDEyfSBQTWBcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZykge1xuICAgIGNvbnN0IGRhdGVBcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQoJy0nKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZUFycmF5WzBdO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZUFycmF5WzFdIC0gMTtcbiAgICBjb25zdCBkYXkgPSBkYXRlQXJyYXlbMl07XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgcmV0dXJuIHBhcnNlZERhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURheShkYXRlKSB7XG4gICAgY29uc3QgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gICAgcmV0dXJuIGRheXNbZGF0ZS5nZXREYXkoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vbnRoKGRhdGUpIHtcbiAgICBjb25zdCBtb250aCA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcbiAgICByZXR1cm4gbW9udGhbZGF0ZS5nZXRNb250aCgpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBTY2FsZSh0ZW1wLCBzY2FsZSkge1xuICAgIGlmIChzY2FsZSA9PT0gJ0YnKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRlbXApO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBNYXRoLnJvdW5kKCh0ZW1wIC0gMzIpIC8gMS44KTtcbn0iLCJpbXBvcnQgZ2V0V2VhdGhlckljb25OYW1lIGZyb20gXCIuL3dlYXRoZXJJY29uXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG8xMkhvdXJUaW1lLCBwYXJzZURhdGUsIHBhcnNlRGF5LCBwYXJzZU1vbnRoLCB0ZW1wU2NhbGUgfSBmcm9tIFwiLi9kYXRhUHJvY2Vzc2luZ1wiO1xuaW1wb3J0IHsgdGVtcGVyYXR1cmVTY2FsZSB9IGZyb20gXCIuL2lucHV0SGFuZGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKGN1cnJlbnQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWNvbnRhaW5lclwiKTtcbiAgcmVzZXRDb250YWluZXIoY29udGFpbmVyKTtcblxuICAvL1RpdGxlXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ3VycmVudCBDb25kaXRpb25zJztcblxuICAvL0xlZnQgU2lkZVxuICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnREaXYuY2xhc3NMaXN0LmFkZChcImZsZXgtbGVmdFwiKTtcblxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wXCIpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7dGVtcFNjYWxlKGN1cnJlbnQudGVtcGVyYXR1cmUsIHRlbXBlcmF0dXJlU2NhbGUpfcKwJHt0ZW1wZXJhdHVyZVNjYWxlfWA7IC8vTUFLRSBJVCBEWU5BTUlDISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIndpXCIsIGdldFdlYXRoZXJJY29uTmFtZShjdXJyZW50Lmljb24pLCBcIndlYXRoZXItaWNvblwiKTtcblxuICBsZWZ0RGl2LmFwcGVuZENoaWxkKHRlbXApO1xuICBsZWZ0RGl2LmFwcGVuZENoaWxkKGljb24pO1xuXG4gIC8vUmlnaHQgU2lkZVxuICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWdodERpdi5jbGFzc0xpc3QuYWRkKFwiZmxleC1yaWdodFwiKTtcblxuICBjb25zdCBjb25kaXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25kaXRpb25zLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25zXCIpO1xuICBjb25kaXRpb25zLnRleHRDb250ZW50ID0gY3VycmVudC5jb25kaXRpb25zO1xuXG4gIGNvbnN0IGZlZWxzbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmVlbHNsaWtlLmNsYXNzTGlzdC5hZGQoXCJmZWVsc2xpa2VcIik7XG4gIGZlZWxzbGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7dGVtcFNjYWxlKGN1cnJlbnQuZmVlbHMsIHRlbXBlcmF0dXJlU2NhbGUpfWA7XG5cbiAgY29uc3QgaGlnaGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGlnaGxvdy5jbGFzc0xpc3QuYWRkKFwiaGlnaC1sb3dcIik7XG4gIGhpZ2hsb3cudGV4dENvbnRlbnQgPSBgSDogJHt0ZW1wU2NhbGUoY3VycmVudC5oaWdoLCB0ZW1wZXJhdHVyZVNjYWxlKX3CsCBMOiAke3RlbXBTY2FsZShjdXJyZW50LmxvdywgdGVtcGVyYXR1cmVTY2FsZSl9wrBgO1xuXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvbnMpO1xuICByaWdodERpdi5hcHBlbmRDaGlsZChmZWVsc2xpa2UpO1xuICByaWdodERpdi5hcHBlbmRDaGlsZChoaWdobG93KTtcbiAgXG4gIC8vRGlzcGxheSBFbGVtZW50c1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodERpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SG91cmx5Q29uZGl0aW9ucyhob3VybHkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWNvbnRhaW5lcicpO1xuICAgIHJlc2V0Q29udGFpbmVyKGNvbnRhaW5lcik7XG5cbiAgICAvL1RpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJseSBGb3JlY2FzdCc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhvdXJseS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZCgnaG91cicpO1xuICAgIFxuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke2NvbnZlcnRUbzEySG91clRpbWUoaG91cmx5W2ldLmhvdXIpfWA7IC8vTUlHSFQgTkVFRCBUTyBDT05WRVJUIFRJTUUgSU5UTyBBTS9QTVxuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcIndpXCIsIGdldFdlYXRoZXJJY29uTmFtZShob3VybHlbaV0uaWNvbiksIFwid2VhdGhlci1pY29uXCIpO1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7dGVtcFNjYWxlKGhvdXJseVtpXS50ZW1wZXJhdHVyZSwgdGVtcGVyYXR1cmVTY2FsZSl9wrBgO1xuXG4gICAgICAgIGNvbnN0IGZlZWxzbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZmVlbHNsaWtlLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzbGlrZScpO1xuICAgICAgICBmZWVsc2xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgJHt0ZW1wU2NhbGUoaG91cmx5W2ldLmZlZWxzLCB0ZW1wZXJhdHVyZVNjYWxlKX1gXG5cbiAgICAgICAgLy9QcmVjaXBpdGF0aW9uXG4gICAgICAgIGNvbnN0IHByZWNpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmVjaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlY2lwJyk7XG5cbiAgICAgICAgY29uc3QgcHJlY2lwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgcHJlY2lwSWNvbi5jbGFzc0xpc3QuYWRkKCd3aScsICd3aS1yYWluJywgJ3ByZWNpcC1pY29uJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmVjaXBDaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByZWNpcENoYW5jZS5jbGFzc0xpc3QuYWRkKCdwcmVjaXAtY2hhbmNlJyk7XG4gICAgICAgIHByZWNpcENoYW5jZS50ZXh0Q29udGVudD0gYCR7aG91cmx5W2ldLnByZWNpcH0lYFxuXG4gICAgICAgIHByZWNpcENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVjaXBJY29uKTtcbiAgICAgICAgcHJlY2lwQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcENoYW5jZSk7XG5cbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZChmZWVsc2xpa2UpO1xuICAgICAgICBob3VyLmFwcGVuZENoaWxkKHByZWNpcENvbnRhaW5lcik7XG5cbiAgICAgICAgLy9EaXNwbGF5IEVsZW1lbnRzXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RGFpbHlDb25kaXRpb25zKGRhaWx5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWNvbnRhaW5lcicpO1xuICAgIHJlc2V0Q29udGFpbmVyKGNvbnRhaW5lcik7XG5cbiAgICAvL1RpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0RhaWx5IEZvcmVjYXN0JztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBwYXJzZURhdGUoZGFpbHlbaV0uZGF5KTtcblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgd2Vla2RheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICAgICAgd2Vla2RheS50ZXh0Q29udGVudCA9IHBhcnNlRGF5KGRhdGVPYmplY3QpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7cGFyc2VNb250aChkYXRlT2JqZWN0KX0gJHtkYXRlT2JqZWN0LmdldERhdGUoKX1gO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnd2knLCBnZXRXZWF0aGVySWNvbk5hbWUoZGFpbHlbaV0uaWNvbiksICd3ZWF0aGVyLWljb24nKTtcblxuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXBTY2FsZShkYWlseVtpXS50ZW1wZXJhdHVyZSwgdGVtcGVyYXR1cmVTY2FsZSl9wrBgO1xuXG4gICAgICAgIGNvbnN0IHByZWNpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmVjaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlY2lwJyk7XG5cbiAgICAgICAgY29uc3QgcHJlY2lwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgcHJlY2lwSWNvbi5jbGFzc0xpc3QuYWRkKCd3aScsICd3aS1yYWluJywgJ3ByZWNpcC1pY29uJyk7XG5cbiAgICAgICAgY29uc3QgcHJlY2lwQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmVjaXBDaGFuY2UuY2xhc3NMaXN0LmFkZCgncHJlY2lwLWNoYW5jZScpO1xuICAgICAgICBwcmVjaXBDaGFuY2UudGV4dENvbnRlbnQgPSBgJHtkYWlseVtpXS5wcmVjaXB9JWA7XG5cbiAgICAgICAgcHJlY2lwQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcEljb24pO1xuICAgICAgICBwcmVjaXBDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlY2lwQ2hhbmNlKTtcblxuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQod2Vla2RheSk7XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZChwcmVjaXBDb250YWluZXIpO1xuXG4gICAgICAgIC8vRGlzcGxheSBDb250ZW50c1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0Q29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUFuZERpc3BsYXlMb2NhdGlvbkNvbmRpdGlvbnMgZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgbGV0IHRlbXBlcmF0dXJlU2NhbGUgPSAnQyc7XG5leHBvcnQgbGV0IGN1cnJlbnRMb2NhdGlvbiA9ICdXaW5uaXBlZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU2VhcmNoTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybURhdGEuZ2V0KCdzZWFyY2gnKTtcbiAgICBjdXJyZW50TG9jYXRpb24gPSBpbnB1dDtcbiAgICBzZWFyY2hGb3JtLnJlc2V0KCk7XG4gICAgY3JlYXRlQW5kRGlzcGxheUxvY2F0aW9uQ29uZGl0aW9ucyhjdXJyZW50TG9jYXRpb24pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTY2FsZUJ1dHRvbkxpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NhbGUnKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlU2NhbGUoKTtcbiAgICBjcmVhdGVBbmREaXNwbGF5TG9jYXRpb25Db25kaXRpb25zKGN1cnJlbnRMb2NhdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTY2FsZSgpIHtcbiAgaWYgKHRlbXBlcmF0dXJlU2NhbGUgPT09ICdDJykge1xuICAgIHRlbXBlcmF0dXJlU2NhbGUgPSAnRic7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVTY2FsZSA9ICdDJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VycmVudENvbmRpdGlvbnMsIEhvdXJseUNvbmRpdGlvbnMsIERhaWx5Q29uZGl0aW9ucyB9IGZyb20gJy4uL2NsYXNzZXMvQ29uZGl0aW9ucydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0vP2tleT1NNFIzUDJGRFpWOEZDUFVEN0dIMlJGR0FCYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRDb25kaXRpb25zKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEN1cnJlbnRDb25kaXRpb25zKGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG91cmx5QXJyYXkoZGF0YSwgc3RhcnRIb3VyKSB7XG4gICAgY29uc3QgaG91cmx5QXJyYXkgPSBbXTtcbiAgICBsZXQgZGF5ID0gMDtcbiAgICBsZXQgaG91ciA9IHN0YXJ0SG91cjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGlmIChob3VyID09PSAyNCkge1xuICAgICAgICAgICAgZGF5ICs9IDE7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25kaXRpb25zID0gbmV3IEhvdXJseUNvbmRpdGlvbnMoZGF0YSwgZGF5LCBob3VyKTtcbiAgICAgICAgaG91cmx5QXJyYXkucHVzaChjb25kaXRpb25zKTtcbiAgICAgICAgaG91ciArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBob3VybHlBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhaWx5QXJyYXkoZGF0YSkge1xuICAgIGNvbnN0IGRhaWx5QXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBuZXcgRGFpbHlDb25kaXRpb25zKGRhdGEsIGkpO1xuICAgICAgICBkYWlseUFycmF5LnB1c2goY29uZGl0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhaWx5QXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0SG91cihkYXRhKSB7XG4gICAgcmV0dXJuIE51bWJlcihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lLnN1YnN0cmluZygwLDIpKSArIDE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb25OYW1lKGljb24pIHtcbiAgICBpZiAoaWNvbiA9PT0gJ3Nub3cnKSB7XG4gICAgICAgIHJldHVybiAnd2ktc25vdyc7XG4gICAgfVxuICAgIGlmIChpY29uID09PSAncmFpbicpIHtcbiAgICAgICAgcmV0dXJuICd3aS1yYWluJztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICdmb2cnKSB7XG4gICAgICAgIHJldHVybiAnd2ktZm9nJztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICd3aW5kJykge1xuICAgICAgICByZXR1cm4gJ3dpLXdpbmR5JztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICdjbG91ZHknKSB7XG4gICAgICAgIHJldHVybiAnd2ktY2xvdWR5JztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICdwYXJ0bHktY2xvdWR5LWRheScpIHtcbiAgICAgICAgcmV0dXJuICd3aS1kYXktY2xvdWR5JztcbiAgICB9XG4gICAgaWYgKGljb24gPT09ICdwYXJ0bHktY2xvdWR5LW5pZ2h0Jykge1xuICAgICAgICByZXR1cm4gJ3dpLW5pZ2h0LWFsdC1jbG91ZHknO1xuICAgIH1cbiAgICBpZiAoaWNvbiA9PT0gJ2NsZWFyLWRheScpIHtcbiAgICAgICAgcmV0dXJuICd3aS1kYXktc3VubnknO1xuICAgIH1cbiAgICBpZiAoaWNvbiA9PT0gJ2NsZWFyLW5pZ2h0Jykge1xuICAgICAgICByZXR1cm4gJ3dpLW5pZ2h0LWNsZWFyJztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9DU1Mvc3R5bGVzLmNzcydcbmltcG9ydCAnLi9DU1Mvd2VhdGhlci1pY29ucy5jc3MnXG5pbXBvcnQgeyBpbml0aWFsaXplU2VhcmNoTGlzdGVuZXIgfSBmcm9tICcuL21vZHVsZXMvaW5wdXRIYW5kbGVyJztcbmltcG9ydCB7IGluaXRpYWxpemVTY2FsZUJ1dHRvbkxpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0SGFuZGxlcic7XG5pbXBvcnQgY3JlYXRlQW5kRGlzcGxheUxvY2F0aW9uQ29uZGl0aW9ucyBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQgeyBjdXJyZW50TG9jYXRpb24gfSBmcm9tICcuL21vZHVsZXMvaW5wdXRIYW5kbGVyJztcblxuaW5pdGlhbGl6ZVNlYXJjaExpc3RlbmVyKCk7XG5pbml0aWFsaXplU2NhbGVCdXR0b25MaXN0ZW5lcigpO1xuXG5jcmVhdGVBbmREaXNwbGF5TG9jYXRpb25Db25kaXRpb25zKGN1cnJlbnRMb2NhdGlvbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9