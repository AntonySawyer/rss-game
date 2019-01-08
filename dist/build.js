/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/components/battlefield/battlefield.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/battlefield/battlefield.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  margin: 0 auto; /* Центрируем блоки */\n  width: 100%; /* Задаем ширину 100% что бы сделать ее резиновой */\n  font-size: 0; /* Ставим родителю значение 0, что бы убрать отступы у блоков*/\n  height: 90vh;\n}\n\nmain section {\n  display: inline-block; /* Делаем блоки по горизонтали */\n  vertical-align: top; /* Выравниваем их сверху */\n  font-size: 16px; /* Ставим дочкам размер шрифта, иначе примет значение у родителя */\n}\n\n.heroBlock{\n  width: 30%; /* Задаем ширину в процентах что бы сделать ее резиновой */\n  height: 100%; /* Высота блока */\n}\n\n.animation{\n  width: 40%;\n  height: 100%;\n}\n\n.monsterBlock{\n  width: 30%;\n  height: inherit;\n}\n\n#heroName, \n#monsterName {\n  text-align: center;\n  font-size: 28px;\n}\n\n.pers {\n  height: 350px;\n  width: 380px;\n}\n\nimg {\n  height: fit-content;\n\n}\n\n.head {\n  position: absolute;\n  top: 200px;\n  right: 120px;\n}\n\n.body {\n  position: absolute;\n  top: 240px;\n  right: 100px;\n}\n\n.legs {\n\tposition: absolute;\n\ttop: 415px;\n\tright: 117px;\n}\n\n.armRight {\n  position: absolute;\n  top: 300px;\n  right: 225px;\n}\n\n.armLeft {\n  position: absolute;\n  top: 280px;\n  right: 65px;\n}\n\n.char {\n\twidth: 6px;\n\theight: 6px;\n\tfont-size: 6px;\n\tbackground: black;\n\tmargin: 30px auto;\n\t\n\t/* I forgot to mention that we are drawing a pixel girl here. So first, we'll draw the outline of the whole figure and then start coloring it. Coloring part will be easy. */\n\t\n\tbox-shadow:\n\t\t\n\t\t/* Face */\n\t\t-1em 0 black,\n\t\t1em 0 black,\n\t\t2em 1em black,\n\t\t-2em 1em black,\n\t\t3em 2em black,\n\t\t-3em 2em black,\n\t\t4em 3em black,\n\t\t-4em 3em black,\n\t\t4em 4em black,\n\t\t-4em 4em black,\n\t\t4em 5em black,\n\t\t-4em 5em black,\n\t\t4em 6em black,\n\t\t-4em 6em black,\n\t\t4em 7em black,\n\t\t-4em 7em black,\n\t\t3em 8em black,\n\t\t-3em 8em black,\n\t\t2em 9em black,\n\t\t-2em 9em black,\n\t\t1em 10em black,\n\t\t-1em 10em black,\n\t\n\t\t/* Eyes */\n\t\t-1em 3em black,\n\t\t-1em 4em black,\n\t\t1em 3em black,\n\t\t1em 4em black,\n\t\t\n\t\t/* Smile */\n\t\t-2em 6em black,\n\t\t2em 6em black,\n\t\t-1em 7em black,\n\t\t0em 7em black,\n\t\t1em 7em black,\n\t\n\t\t/* Face is complete, now we'll move onto the hair */\n\t\t-2em -3em black,\n\t\t-1em -3em black,\n\t\t0em -3em black,\n\t\t1em -3em black,\n\t\t2em -3em black,\n\t\t-3em -2em black,\n\t\t3em -2em black,\n\t\t4em -1em black,\n\t\t-4em -1em black,\n\t\t-5em 0 black,\n\t\t-5em 1em black,\n\t\t5em 0 black,\n\t\t5em 1em black,\n\t\t6em 7em black,\n\t\t6em 2em black,\n\t\t6em 3em black,\n\t\t6em 4em black,\n\t\t6em 5em black,\n\t\t6em 6em black,\n\t\t-6em 7em black,\n\t\t-6em 2em black,\n\t\t-6em 3em black,\n\t\t-6em 4em black,\n\t\t-6em 5em black,\n\t\t-6em 6em black,\n\t\t7em 8em black,\n\t\t7em 9em black,\n\t\t7em 10em black,\n\t\t7em 11em black,\n\t\t7em 12em black,\n\t\t7em 13em black,\n\t\t-7em 8em black,\n\t\t-7em 9em black,\n\t\t-7em 10em black,\n\t\t-7em 11em black,\n\t\t-7em 12em black,\n\t\t-7em 13em black,\n\t\n\t\t/* Now, the torso */\n\t\t1em 11em black,\n\t\t-1em 11em black,\n\t\t2em 11em black,\n\t\t-2em 11em black,\n\t\t3em 11em black,\n\t\t-3em 11em black,\n\t\t-4em 12em black,\n\t\t4em 12em black,\n\t\t-5em 13em black,\n\t\t5em 13em black,\n\t\t-6em 14em black,\n\t\t-6em 15em black,\n\t\t-6em 16em black,\n\t\t6em 14em black,\n\t\t6em 15em black,\n\t\t6em 16em black,\n\t\n\t\t/* Topper */\n\t\t-4em 16em black,\n\t\t4em 16em black,\n\t\t-3em 17em black,\n\t\t-3em 18em black,\n\t\t-3em 19em black,\n\t\t-3em 20em black,\n\t\t-3em 21em black,\n\t\t-3em 22em black,\n\t\t-3em 23em black,\n\t\t-3em 24em black,\n\t\t-3em 25em black,\n\t\t3em 17em black,\n\t\t3em 18em black,\n\t\t3em 19em black,\n\t\t3em 20em black,\n\t\t3em 21em black,\n\t\t3em 22em black,\n\t\t3em 23em black,\n\t\t3em 24em black,\n\t\t3em 25em black,\n\t\t2em 25em black,\n\t\t1em 25em black,\n\t\t0 25em black,\n\t\t-1em 25em black,\n\t\t-2em 25em black,\n\t\t\n\t\t/* Hands */\n\t\t-5em 17em black,\n\t\t-5em 18em black,\n\t\t-5em 19em black,\n\t\t-5em 20em black,\n\t\t-5em 21em black,\n\t\t-5em 22em black,\n\t\t-5em 23em black,\n\t\t-5em 24em black,\n\t\t-5em 25em black,\n\t\t5em 17em black,\n\t\t5em 18em black,\n\t\t5em 19em black,\n\t\t5em 20em black,\n\t\t5em 21em black,\n\t\t5em 22em black,\n\t\t5em 23em black,\n\t\t5em 24em black,\n\t\t5em 25em black,\n\t\t4em 26em black,\n\t\t-4em 26em black,\n\t\t\n\t\t/* Now only pants and shoes left :D */\n\t\t/* Pants */\n\t\t3em 26em black,\n\t\t3em 27em black,\n\t\t3em 28em black,\n\t\t3em 29em black,\n\t\t3em 30em black,\n\t\t3em 31em black,\n\t\t3em 32em black,\n\t\t3em 33em black,\n\t\t-3em 26em black,\n\t\t-3em 27em black,\n\t\t-3em 28em black,\n\t\t-3em 29em black,\n\t\t-3em 30em black,\n\t\t-3em 31em black,\n\t\t-3em 32em black,\n\t\t-3em 33em black,\n\t\t4em 34em black,\n\t\t4em 35em black,\n\t\t4em 36em black,\n\t\t4em 37em black,\n\t\t4em 38em black,\n\t\t4em 39em black,\n\t\t-4em 34em black,\n\t\t-4em 35em black,\n\t\t-4em 36em black,\n\t\t-4em 37em black,\n\t\t-4em 38em black,\n\t\t-4em 39em black,\n\t\t\n\t\t0 26em black,\n\t\t0 30em black,\n\t\t0 31em black,\n\t\t0 32em black,\n\t\t0 33em black,\n\t\t0 34em black,\n\t\t0 35em black,\n\t\t0 36em black,\n\t\t0 37em black,\n\t\t0 38em black,\n\t\t0 39em black,\n\t\t\n\t\t/* Shoes */\n\t\t-5em 40em black,\n\t\t-4em 40em black,\n\t\t-3em 40em black,\n\t\t-2em 40em black,\n\t\t-1em 40em black,\n\t\t0 40em black,\n\t\t1em 40em black,\n\t\t2em 40em black,\n\t\t3em 40em black,\n\t\t4em 40em black,\n\t\t5em 40em black,\n\t\t-6em 41em black,\n\t\t-6em 42em black,\n\t\t6em 41em black,\n\t\t6em 42em black,\n\t\t-5em 43em black,\n\t\t-4em 43em black,\n\t\t-3em 43em black,\n\t\t-2em 43em black,\n\t\t-1em 43em black,\n\t\t1em 43em black,\n\t\t2em 43em black,\n\t\t3em 43em black,\n\t\t4em 43em black,\n\t\t5em 43em black,\n\t\t0 41em black,\n\t\t0 42em black,\n\t\t\n\t\t/* Outlines are completed, now we'll color the character. For coloring, we will use size/spread parameter (4th parameter) of the box-shadow property to make our code comparitively smaller */\n\t\t\n\t\t/* Face */\n\t\t0 5em 0 3em #FFF5C9,\n\t\t0 1em 0 1em #FFF5C9,\n\t\t0 8em 0 1em #FFF5C9,\n\t\t0 10em #FFF5C9,\n\t\t0 11em #FFF5C9,\n\t\t0 12em #FFF5C9,\n\t\t\n\t\t/* Shirt */\n\t\t0 15em 0 3em purple,\n\t\t0 21em 0 3em purple,\n\t\t4em 14em 0 1em purple,\n\t\t-4em 14em 0 1em purple,\n\t\t4em 15em 0 1em purple,\n\t\t-4em 15em 0 1em purple,\n\t\t\n\t\t/* Pants */\n\t\t0 29em 0 3em red,\n\t\t0 36em 0 3em red,\n\t\t\n\t\t/* Hands */\n\t\t0 20em 0 5em #FFF5C9,\n\t\t\n\t\t/* Hair */\n\t\t0 0 0 2em brown,\n\t\t-3em 0 0 1em brown,\n\t\t3em 0 0 1em brown,\n\t\t4em 3em 0 1em brown,\n\t\t4em 6em 0 1em brown,\n\t\t3em 10em 0 3em brown,\n\t\t-4em 3em 0 1em brown,\n\t\t-4em 6em 0 1em brown,\n\t\t-3em 10em 0 3em brown,\n\t\t\n\t\t/* Shoes */\n\t\t-1em 39em 0 3em pink,\n\t\t1em 39em 0 3em pink,\n\t\t-4em 42em 0 1em pink,\n\t\t4em 42em 0 1em pink\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/casts/casts.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/casts/casts.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button{\n  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);\n  background-image: linear-gradient(top, #f4f1ee, #fff);\n  border-radius: 50%;\n  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204,198,197,.5);\n  float:left;\n  height: 70px;\n  margin: 0 30px 30px 0;\n  position: relative;\n  width: 70px;\t\t\t\n  -webkit-transition: all .1s linear;\n  transition: all .1s linear;\n}\n  \n.button:after{\n\tcolor:#e9e6e4;\n  content: \"\";\n  display: block;\n  font-size: 30px;\n  height: 30px;\n  text-decoration: none;\n  text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;\n  position: absolute;\n  width: 30px;\n}\n  \n.heart:after{\n\tcontent: \"\\2764\";\n  left: 21px;\n  top: 16px;\n}\n  \n.flower:after{\n\tcontent: \"\\273F\";\n  left: 23px;\n  top: 14px;\n}\n  \n.tick:after{\n\tcontent: \"\\2714\";\n  left:23px;\n  top:16px;\n}\n  \n.cross:after{\n\tcontent: \"\\2716\";\n  left: 24px;\n  top: 15px;\n}\n  \n.button:hover{\n\tbackground-image: -webkit-linear-gradient(top, #fff, #f4f1ee);\n  background-image: linear-gradient(top, #fff, #f4f1ee);\n  color:#0088cc;\n}\n  \n.heart:hover:after{\n\tcolor:#14e047;\n  text-shadow:0px 0px 6px #14e047;\n}\n  \n.flower:hover:after{\n\tcolor:#f99e4e;\n  text-shadow:0px 0px 6px #f99e4e;\n}\n  \n.tick:hover:after{\n\tcolor:#db2020;\n  text-shadow:0px 0px 6px #db2020;\n}\n  \n.cross:hover:after{\n\tcolor:#eb2f2f;\n  text-shadow:0px 0px 6px #eb2f2f;\n}\n\n.button:active{\n\tbackground-image: -webkit-linear-gradient(top, #efedec, #f7f4f4);\n  background-image: linear-gradient(top, #efedec, #f7f4f4);\n  box-shadow: 0 3px 5px 0 rgba(0,0,0,.4), inset 0px -3px 1px 1px rgba(204,198,197,.5);\n}\n  \n.button:active:after{\n\tcolor:#dbd2d2;\n  text-shadow: 0px -1px 1px #bdb5b4, 0px 1px 1px white;\n}\n\n.casts p {\n  display: none;\n}\n\n.heart:hover + .heartDescription{\n  display: inline-block;\n  color: #14e047;\n  position: absolute;\n  top: 55px;\n  left: 10px;\n}\n\n.tick:hover + .tickDescription{\n  display: inline-block;\n  color: #14e047;\n  position: absolute;\n  top: 55px;\n  left: 10px;\n}\n\n.flower:hover + .flowerDescription{\n  display: inline-block;\n  color: #14e047;\n  position: absolute;\n  top: 55px;\n  left: 10px;\n}\n\n.cross:hover + .crossDescription{\n  display: inline-block;\n  color: #14e047;\n  position: absolute;\n  top: 55px;\n  left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/header/header.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/header/header.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav ul {\n  list-style: none;\n  background-color: #444;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n\nnav li {\n\tfont-family: 'Oswald', sans-serif;\n  width: 175px;\n  border-bottom: none;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.4em;\n  display: inline-block;\n  margin-right: -4px;\n}\n\nnav a, nav span {\n  text-decoration: none;\n  color: #fff;\n  display: block;\n  transition: .3s background-color;\n}\n   \nnav a:hover {\n  background-color: #005f5f;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/health/health.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/health/health.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#currentHealth {\n  margin: 0 auto;\n  padding-left: 50%;\n  font-size: 32px;\n  display: inline-block;\n  color: red;\n  width: 45%;\n}\n\nprogress {\n\twidth: 95%;\n\theight: 14px;\n\tmargin: 15px auto;\n\tdisplay: block;\n\t-webkit-appearance: none;\n\tborder: none;\n}\n\nprogress::-webkit-progress-bar {\n\tbackground: black;\n\tborder-radius: 50px;\n\tpadding: 2px;\n\tbox-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.2);\n}\n\nprogress::-webkit-progress-value {\n\tborder-radius: 50px;\n\tbox-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4);\n\tbackground:\n\t\t-webkit-linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%),\n\t\t-webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),\n\t\t-webkit-linear-gradient(left, #ba7448, #c4672d);\n\tbackground-size: 25px 14px, 100% 100%, 100% 100%;\n\t-webkit-animation: move 5s linear 0 infinite;\n}\n\n@-webkit-keyframes move {\n\t0% {background-position: 0px 0px, 0 0, 0 0}\n\t100% {background-position: -100px 0px, 0 0, 0 0}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/attackMath/attackAnimation.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/attackMath/attackAnimation.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --bg-color: #171717;;\n  --attackBlock-size: 80px;\n  --attackBlock-color: #3E3E3E;\n  --attackBlock-color2: #7F7F7F;\n}\n\n.attackBlock {\n\tposition: relative;\n\ttop: 42%;\n\tleft: 50%;\n  width: 6px;\n  height: 18px;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 50%;\n}\n  \n.attackBlock:before {\n  content: '';\n  position: absolute;\n\ttop: -15%;\n\tleft: 49%;\n  width: var(--attackBlock-size);\n  height: var(--attackBlock-size);\n  transform: translate(-50%, -50%);\n  background-color: var(--attackBlock-color);\n  border-radius: 50%;\n  box-shadow: \n    -60px -20px 0 5px var(--attackBlock-color),\n    50px -10px 0 0px var(--attackBlock-color),\n    100px -16px 0 0px var(--attackBlock-color),\n    -10px -70px 0 10px var(--attackBlock-color),\n    60px -60px 0 8px var(--attackBlock-color),\n    73px -66px 0 8px var(--attackBlock-color2),\n    96px -30px 0 0px var(--attackBlock-color2),\n    20px -78px 0 8px var(--attackBlock-color2);\n  animation: attackBlock 3s ease-in-out infinite;\n}\n  \n.attackBlock:after {\n  content: '';\n  position: absolute;\n\ttop: 78%;\n\tleft: 49%;\n  width: calc(var(--attackBlock-size) * 3);\n  height: calc(var(--attackBlock-size) / 3);\n  transform: translate(-46%, -50%);\n  background-color: rgba(0 ,0 ,0 , .8);\n  border-radius: 50%;\n  animation: attackBlock_shadow 3s ease-in-out infinite;\n}\n\n@keyframes attackBlock {\n  50% {\n    transform: translate(-50%, -70%);\n  }\n  100% {\n    transform: translate(-50%, -50%);\n  }\n}\n \n@keyframes attackBlock_shadow {\n  50%{\n    transform: translate(-46%, -50%) scale(0.8);\n    background:rgba(0,0,0,.3);\n  }\n  100%{\n    transform: translate(-46%, -50%) scale(1);\n    background:rgba(0,0,0,.8);\n  }\n}\n\n.attackBlock img {\n\tmargin-top: -55%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/attackMath/attackMath.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/attackMath/attackMath.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".math {\n  display: flex;\n  flex-direction: column;\n  background: rgb(236, 171, 169);\n  width: 310px;\n  height: 180px;\n  left: calc(50% - 155px);\n  margin: -250px 0 0 0%;\n  position: absolute;\n  top: 50%;\n  border-radius: 30px;\n  box-shadow: 0 3px 7px rgba(0,0,0,.25);\n  -moz-box-shadow: 0 3px 7px rgba(0,0,0,.25);\n  -webkit-box-shadow: 0 3px 7px rgba(0,0,0,.25);\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.math:target {\n    top: 50%;\n    transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -webkit-transition: all 0.4s ease-in-out;\n}\n\n#attackMath {\n\twidth: 50%;\n\tmargin: 10% 25%;\n\tpadding: 0 1em;\n}\n\n#mathExpression {\n  font-size: 38px;\n  padding: 3px 10px;\n  margin: 0 auto;\n}\n\n#answerByUser {\n\tpadding: 3px;\n\tmargin: 0 auto;\n\twidth: 250px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/cheatSet/cheatAnimation.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/cheatSet/cheatAnimation.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheatLightning {\n  position: absolute;\n  transform: rotate(15deg);\n  animation: cheatLightning 2s steps(1, end) infinite;\n}\n.cheatLightning:before {\n  content: '';\n  position: absolute;\n  transform: translate(40px, 120px);\n  border-left: 15px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 70px solid yellow;\n}\n\n.cheatLightning:after {\n  content: '';\n  position: absolute;\n  transform: translate(25px, 60px);\n  border-left: 15px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 70px solid yellow;\n}\n\n@keyframes cheatLightning {\n  0% {\n    transform: translate(0px, 0px) rotate(15deg);\n  }\n  5% {\n    transform: translate(-40px, -15px) rotate(25deg);\n  }\n  10% {\n    transform: translate(20px, 0) rotate(-15deg);\n  }\n  15% {\n    opacity: 0;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/cheatSet/cheatSet.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/cheatSet/cheatSet.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheatSet {\n  display: flex;\n  flex-direction: column;\n  background: rgb(241, 232, 176);\n  width: 310px;\n  height: 180px;\n  left: calc(50% - 155px);\n  margin: -250px 0 0 0%;\n  position: absolute;\n  top: 50%;\n  border-radius: 30px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.cheatSet:target {\n  top: 50%;\n  transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n}\n\n#cheatSetButton {\n  width: 50%;\n  margin: 7% 25%;\n}\n\n#userByCheat {\n\tpadding: 3px;\n\tmargin: 0 auto;\n\twidth: 250px;\n}\n\n#cheatQuestion {\n  font-size: 38px;\n  padding: 3px 10px;\n  margin: 0 auto;\n}\n\n.cheatAnswerWrapper {\n  display: flex;\n  margin-top: 40px;\n  flex-direction: row;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/chooseCast/chooseCast.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/chooseCast/chooseCast.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Стили для неактивного модального окна */\n.modal {\n    background: #fff;\n    width: 400px;\n    left: calc(50% + 300px);\n    margin: -250px 0 0 -40%;\n    position: absolute;\n    top: -50%;\n    border-radius: 5px;\n    box-shadow: 0 3px 7px rgba(0,0,0,.25);\n    -moz-box-shadow: 0 3px 7px rgba(0,0,0,.25);\n    -webkit-box-shadow: 0 3px 7px rgba(0,0,0,.25);\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n\n/* Активация модального окна в состоянии :target */\n.modal:target {\n    top: 50%;\n    transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -webkit-transition: all 0.4s ease-in-out;\n}\n\n.header, .footer {\n    background: #f7f7f7;\n    border-bottom: 1px solid #e7e7e7;\n    border-radius: 5px 5px 0 0;\n    -moz-border-radius: 5px 5px 0 0;\n    -webkit-border-radius: 5px 5px 0 0;\n}\n.footer {\n    border:none;\n    border-top: 1px solid #e7e7e7;\n    border-radius: 0 0 5px 5px;\n    -moz-border-radius: 0 0 5px 5px;\n    -webkit-border-radius: 0 0 5px 5px;\n}\n.casts, .header, .footer {\n    padding: 15px;\n    z-index: 200;\n}\n\n.casts {\n        margin:80px auto;\n        width:400px;\n}\nh2 {\n    margin: 0;\n}\n.btn {\n    float: right;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/gameOver/gameOver.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/gameOver/gameOver.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gameOver {\n  display: flex;\n  flex-direction: column-reverse;\n  background: #fff;\n  width: 400px;\n  left: calc(50% + 300px);\n  margin: -250px 0 0 -40%;\n  position: absolute;\n  top: 50%;\n  border-radius: 5px;\n  box-shadow: 0 3px 7px rgba(0,0,0,.25);\n  -moz-box-shadow: 0 3px 7px rgba(0,0,0,.25);\n  -webkit-box-shadow: 0 3px 7px rgba(0,0,0,.25);\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.gameOverText {\n  font-size: 8em;\n  text-align: center;\n  animation-name: gameOverText;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes gameOverText {\n  0% {\n    color: lime;\n    text-shadow: 0 0 20px green;\n  }\n  100% {\n    color: lime;\n    text-shadow: none;\n  }\n}\n\n.reload {\n  transition: all 300ms;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 100%;\n  background: #fff;\n  position: fixed;\n  cursor: pointer;\n  height: 150px;\n  width: 150px;\n  left: 43%;\n  }\n\n.reload:hover {\n  transition: all 300ms;\n  transform: rotate(-180deg);\n}\n\n.reload svg {\n  transition: transform 500ms cubic-bezier(0.85, -0.48, 0.26, 0.67);\n  height: 100%;\n  width: 100%;\n}\n\n.reload svg path {\n  fill: #111;\n}\n  ", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/moreHealth/healthAnimation.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/moreHealth/healthAnimation.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".healthBlock {\n  transition: .5s;\n  transform: scale(0.5);\n  transform: rotate(180deg);\n}\n  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/moreHealth/moreHealth.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/moreHealth/moreHealth.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".health {\n  display: flex;\n  flex-direction: column;\n  background: rgb(192, 234, 205);\n  width: 310px;\n  height: 180px;\n  left: calc(50% - 155px);\n  margin: -250px 0 0 0%;\n  position: absolute;\n  top: 50%;\n  border-radius: 5px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.health:target {\n  top: 50%;\n  transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n}\n\n#moreHeartsButton {\n  width: 50%;\n  margin: 7% 25%;\n}\n\n#healthExpression {\n  font-size: 38px;\n  padding: 3px 10px;\n  margin: 0 auto;\n}\n\n#answerByUser {\n\tpadding: 3px;\n\tmargin: 0 auto;\n\twidth: 250px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/skipSpell/skipSpell.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/skipSpell/skipSpell.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skipSpell {\n  display: flex;\n  flex-direction: column;\n  background: rgb(169, 190, 236);\n  width: 310px;\n  height: 180px;\n  left: calc(50% - 155px);\n  margin: -250px 0 0 0%;\n  position: absolute;\n  top: 50%;\n  border-radius: 5px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, .25);\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.skipSpell:target {\n  top: 50%;\n  transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n}\n\n.cheatAnswerWrapper {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n#skipAttack, \n#cancelSkip {\n  font-size: 38px;\n  padding: 3px 10px;\n  margin: 0 auto;\n}\n\n#skipQuestion {\n  font-size: 38px;\n  padding: 3px 10px;\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/screens/startGame/startGame.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/screens/startGame/startGame.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".startWrapper {\n  width: 99vw;\n  height: 98vh;\n  margin: 0 auto;\n}\n\n.wrap {\n  width: 300px;\n}\n\n.center {\n  top: 50%;\n  transform: translateY(-50%);\n  position: relative;\n  margin: auto;\n}\n\ninput {\n  display:block;\n  width: 300px;\n  padding: 15px 0 15px 12px;\n  font-size: 28px;\n  font-weight: 400;\n  color: #377D6A;\n  background: rgba(0,0,0,0.3);\n  border: none;\n  outline: none;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n  border: 1px solid rgba(0,0,0,0.3);\n  border-radius: 4px;\n  box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px  1px rgba(255,255,255,0.2);\n  text-indent: 60px;\n  transition: all .3s ease-in-out;\n  position: relative;\n}\n\ninput:focus {\n  text-indent: 12px;\n  box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2);\n}\n\nlabel {\n  display: block;\n  position: static;\n  margin: 0 0 15px 0;\n  padding: 0;\n  font-size: 32px;\n}\n\n.wrap-label {\n  width: 300px;\n  height: 34px;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\n.move-pen {\n  animation: move-pen 1s ease-in infinite alternate;\n}\n\n@keyframes move-pen{\n  from {\n    transform: translateX(-4px) rotate(6deg);\n  }\n  to {\n    transform: translateX(4px) rotate(-3deg);\n  }\n}\n\nbutton{\n  background:#1AAB8A;\n  color:#fff;\n  border:none;\n  position:relative;\n  height:60px;\n  font-size:1.6em;\n  padding:0 2em;\n  cursor:pointer;\n  transition:800ms ease all;\n  outline:none;\n  margin: 15px 0 0 40px;\n}\nbutton:hover{\n  background:#fff;\n  color:#1AAB8A;\n}\nbutton:before,\nbutton:after{\n  content:'';\n  position:absolute;\n  top:0;\n  right:0;\n  height:2px;\n  width:0;\n  background: #1AAB8A;\n  transition:400ms ease all;\n}\nbutton:after{\n  right:inherit;\n  top:inherit;\n  left:0;\n  bottom:0;\n}\nbutton:hover:before,button:hover:after{\n  width:100%;\n  transition:800ms ease all;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_startGame_startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/startGame/startGame */ "./src/screens/startGame/startGame.js");
/* harmony import */ var _listeners_gameListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/gameListeners */ "./src/listeners/gameListeners.js");



_screens_startGame_startGame__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
_listeners_gameListeners__WEBPACK_IMPORTED_MODULE_1__["default"].setupListener();


/***/ }),

/***/ "./src/components/battlefield/battlefield.css":
/*!****************************************************!*\
  !*** ./src/components/battlefield/battlefield.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./battlefield.css */ "./node_modules/css-loader/index.js!./src/components/battlefield/battlefield.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/battlefield/battlefield.js":
/*!***************************************************!*\
  !*** ./src/components/battlefield/battlefield.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _battlefield_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battlefield.template */ "./src/components/battlefield/battlefield.template.js");
/* harmony import */ var _battlefield_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battlefield.css */ "./src/components/battlefield/battlefield.css");
/* harmony import */ var _battlefield_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_battlefield_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interactive_nameGenerator_nameGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interactive/nameGenerator/nameGenerator */ "./src/interactive/nameGenerator/nameGenerator.js");
/* harmony import */ var _interactive_characterGenerator_characterGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interactive/characterGenerator/characterGenerator */ "./src/interactive/characterGenerator/characterGenerator.js");
/* harmony import */ var _health_health__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../health/health */ "./src/components/health/health.js");
/* harmony import */ var _interactive_score_score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interactive/score/score */ "./src/interactive/score/score.js");







class Battlefield {
  static draw() {
    const target = document.body.getElementsByTagName('header')[0];
    target.insertAdjacentHTML('afterend', _battlefield_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    document.querySelector('#heroName').innerText = document.querySelector('#userName').value;
    _health_health__WEBPACK_IMPORTED_MODULE_4__["default"].drawMonster();
    Battlefield.newMonster();
  }

  static newMonster() {
    _health_health__WEBPACK_IMPORTED_MODULE_4__["default"].fullMonsterHealth();
    document.querySelector('.monsterBlock .pers').innerHTML = ('');
    document.querySelector('#monsterName').innerText = Object(_interactive_nameGenerator_nameGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const enemyArray = Object(_interactive_characterGenerator_characterGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])();
    for (let item = 0; item < enemyArray.length; item += 1) {
      document.querySelector('.monsterBlock>.pers').innerHTML += enemyArray[item];
    }
    _interactive_score_score__WEBPACK_IMPORTED_MODULE_5__["default"].changeScore();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Battlefield);


/***/ }),

/***/ "./src/components/battlefield/battlefield.template.js":
/*!************************************************************!*\
  !*** ./src/components/battlefield/battlefield.template.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<main class="inline">
  <section class="heroBlock">
  <article id="heroName"></article>
    <article class="pers">
      <div class="char"></div>
    </article>
  </section>
	<section class="animation"></section>
  <section class="monsterBlock">
    <article id="monsterName"></article>
    <article class="pers"></article>
  </section>
</main>
`);


/***/ }),

/***/ "./src/components/casts/casts.css":
/*!****************************************!*\
  !*** ./src/components/casts/casts.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./casts.css */ "./node_modules/css-loader/index.js!./src/components/casts/casts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/casts/casts.js":
/*!***************************************!*\
  !*** ./src/components/casts/casts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _casts_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./casts.template */ "./src/components/casts/casts.template.js");
/* harmony import */ var _casts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./casts.css */ "./src/components/casts/casts.css");
/* harmony import */ var _casts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_casts_css__WEBPACK_IMPORTED_MODULE_1__);



class Casts {
  static draw() {
    const parent = document.body.getElementsByTagName('main')[0];
    const target = parent.getElementsByClassName('casts')[0];
    target.insertAdjacentHTML('beforeend', _casts_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Casts);


/***/ }),

/***/ "./src/components/casts/casts.template.js":
/*!************************************************!*\
  !*** ./src/components/casts/casts.template.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<a href="#" class="button tick"></a>
<p class="tickDescription">Слабая атака. Решение примеров на сложение чисел до 100.</p>
<a href="#" class="button cross"></a>
<p class="crossDescription">Бесполезное заклинание пропуска хода.</p>
<a href="#" class="button heart"></a>
<p class="heartDescription">Тут можно исцелиться. После этого хода монстр тоже исцеляется. Задания на вычитание.</p>
<a href="#" class="button flower"></a>
<p class="flowerDescription">Сюда вводить чит-коды. 
bigbang - 50 единиц урона монстру;
mercy - незамедлительный Game Over.</p>
`);


/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./header.css */ "./node_modules/css-loader/index.js!./src/components/header/header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.template */ "./src/components/header/header.template.js");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_1__);



class Header {
  static draw() {
    const target = document.body;
    target.insertAdjacentHTML('beforeend', _header_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./src/components/header/header.template.js":
/*!**************************************************!*\
  !*** ./src/components/header/header.template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<header class="page-header">
	<nav>
		<ul>
			<li><a href="../../screens/landingPage/index.html">Landing</a></li>
			<li><a href="#modal">Choose spell</a></li>
			<li><a href="#">Scoreboard</a></li>
			<li><span id="currentScore"></span></li>
		</ul>
	</nav>
</header>
`);


/***/ }),

/***/ "./src/components/health/health.css":
/*!******************************************!*\
  !*** ./src/components/health/health.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./health.css */ "./node_modules/css-loader/index.js!./src/components/health/health.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/health/health.js":
/*!*****************************************!*\
  !*** ./src/components/health/health.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _health_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.template */ "./src/components/health/health.template.js");
/* harmony import */ var _health_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health.css */ "./src/components/health/health.css");
/* harmony import */ var _health_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_health_css__WEBPACK_IMPORTED_MODULE_1__);



class Health {
  static parent() {
    return document.body.getElementsByTagName('main')[0];
  }

  static drawHero() {
    const targetHero = Health.parent().getElementsByClassName('heroBlock')[0];
    targetHero.insertAdjacentHTML('afterbegin', _health_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  static drawMonster() {
    const targetMonster = Health.parent().getElementsByClassName('monsterBlock')[0];
    targetMonster.insertAdjacentHTML('afterbegin', _health_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  static fullMonsterHealth() {
    document.querySelector('.monsterBlock>#currentHealthBar').value = 100;
    document.querySelector('.monsterBlock>#currentHealth').innerText = 100;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Health);


/***/ }),

/***/ "./src/components/health/health.template.js":
/*!**************************************************!*\
  !*** ./src/components/health/health.template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<span id="currentHealth">100</span>
<progress id="currentHealthBar" max="100" value="100"></progress>
`);


/***/ }),

/***/ "./src/interactive/characterGenerator/characterGenerator.js":
/*!******************************************************************!*\
  !*** ./src/interactive/characterGenerator/characterGenerator.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getRandomEnemy() {
  const armsLeft = ['<img class="armLeft" src="../../img/enemy/arms_l0.png" />',
    '<img class="armLeft" src="../../img/enemy/arms_l1.png" />',
    '<img class="armLeft" src="../../img/enemy/arms_l2.png" />',
    '<img class="armLeft" src="../../img/enemy/arms_l3.png" />',
    '<img class="armLeft" src="../../img/enemy/arms_l4.png" />',
    '<img class="armLeft" src="../../img/enemy/arms_l5.png" />'];
  const armsRight = ['<img class="armRight" src="../../img/enemy/arms_r0.png" />',
    '<img class="armRight" src="../../img/enemy/arms_r1.png" />',
    '<img class="armRight" src="../../img/enemy/arms_r2.png" />',
    '<img class="armRight" src="../../img/enemy/arms_r3.png" />',
    '<img class="armRight" src="../../img/enemy/arms_r4.png" />',
    '<img class="armRight" />',
    '<img class="armRight" src="../../img/enemy/arms_r5.png" />'];
  const body = ['<img class="body" src="../../img/enemy/body_0.png" />',
    '<img class="body" src="../../img/enemy/body_1.png" />',
    '<img class="body" src="../../img/enemy/body_2.png" />',
    '<img class="body" src="../../img/enemy/body_3.png" />',
    '<img class="body" src="../../img/enemy/body_4.png" />',
    '<img class="body" src="../../img/enemy/body_5.png" />'];
  const head = ['<img class="head" src="../../img/enemy/head_0.png" />',
    '<img class="head" src="../../img/enemy/head_1.png" />',
    '<img class="head" src="../../img/enemy/head_2.png" />',
    '<img class="head" src="../../img/enemy/head_3.png" />',
    '<img class="head" src="../../img/enemy/head_4.png" />',
    '<img class="head" src="../../img/enemy/head_5.png" />'];
  const legs = ['<img class="legs" src="../../img/enemy/legs_0.png" />',
    '<img class="legs" src="../../img/enemy/legs_1.png" />',
    '<img class="legs" src="../../img/enemy/legs_2.png" />',
    '<img class="legs" src="../../img/enemy/legs_3.png" />',
    '<img class="legs" src="../../img/enemy/legs_4.png" />',
    '<img class="legs" src="../../img/enemy/legs_5.png" />'];
  const armsLeftItem = Math.floor(Math.random() * armsLeft.length);
  const armsRightItem = Math.floor(Math.random() * armsRight.length);
  const bodyItem = Math.floor(Math.random() * body.length);
  const headItem = Math.floor(Math.random() * head.length);
  const legsItem = Math.floor(Math.random() * legs.length);
  const headValue = head[headItem];
  const bodyValue = body[bodyItem];
  const armsLeftValue = armsLeft[armsLeftItem];
  const armsRightValue = armsRight[armsRightItem];
  const legsValue = legs[legsItem];

  return [legsValue, armsRightValue, bodyValue, headValue, armsLeftValue];
}

/* harmony default export */ __webpack_exports__["default"] = (getRandomEnemy);


/***/ }),

/***/ "./src/interactive/mathGenerator/mathGenerator.js":
/*!********************************************************!*\
  !*** ./src/interactive/mathGenerator/mathGenerator.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class generateTask {
  static rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getRandomAddExpression(from, to) {
    const a = generateTask.rand(from, to);
    const b = generateTask.rand(from, to);
    return `${a} + ${b}`;
  }

  static getRandomSubstrExpression(from, to) {
    const a = generateTask.rand(to / 2, to);
    const b = generateTask.rand(from + 1, to / 2);
    return `${a} - ${b}`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (generateTask);


/***/ }),

/***/ "./src/interactive/nameGenerator/nameGenerator.js":
/*!********************************************************!*\
  !*** ./src/interactive/nameGenerator/nameGenerator.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getRandomName() {
  const left = ['Ужасный', 'Сонный', 'Сопливый', 'Глупый', 'Голодный'];
  const middle = ['Огр', 'Гном', 'Гоблин', 'Кентавр', 'Макака'];
  const right = ['Том', 'Джерри', 'Тимон', 'Майкл', 'Пейн'];
  const leftItem = Math.floor(Math.random() * left.length);
  const middleItem = Math.floor(Math.random() * right.length);
  const rightItem = Math.floor(Math.random() * right.length);
  const leftValue = left[leftItem];
  const middleValue = middle[middleItem];
  const rightValue = right[rightItem];

  return `${leftValue} ${middleValue} ${rightValue}`;
}

/* harmony default export */ __webpack_exports__["default"] = (getRandomName);


/***/ }),

/***/ "./src/interactive/score/score.js":
/*!****************************************!*\
  !*** ./src/interactive/score/score.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let score;

class Score {
  static startScore() {
    score = -1;
  }

  static changeScore() {
    score += 1;
    document.querySelector('#currentScore').innerText = `Current score: ${score}`;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Score);


/***/ }),

/***/ "./src/listeners/gameListeners.js":
/*!****************************************!*\
  !*** ./src/listeners/gameListeners.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _screens_chooseCast_chooseCast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/chooseCast/chooseCast */ "./src/screens/chooseCast/chooseCast.js");
/* harmony import */ var _components_battlefield_battlefield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/battlefield/battlefield */ "./src/components/battlefield/battlefield.js");
/* harmony import */ var _components_health_health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/health/health */ "./src/components/health/health.js");
/* harmony import */ var _components_casts_casts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/casts/casts */ "./src/components/casts/casts.js");






class GameListener {
  static startApp() {
    document.querySelector('.startWrapper').style.display = 'none';
    _components_header_header__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
    _components_battlefield_battlefield__WEBPACK_IMPORTED_MODULE_2__["default"].draw();
    _screens_chooseCast_chooseCast__WEBPACK_IMPORTED_MODULE_1__["default"].draw();
    _components_health_health__WEBPACK_IMPORTED_MODULE_3__["default"].drawHero();
    _components_casts_casts__WEBPACK_IMPORTED_MODULE_4__["default"].draw();
  }

  static setupListener() {
    const mathButton = document.querySelector('#sendUserName');
    mathButton.addEventListener('click', GameListener.checkName, false);
  }

  static checkName() {
    if (document.querySelector('#userName').value !== '') {
      GameListener.startApp();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GameListener);


/***/ }),

/***/ "./src/listeners/spellListeners.js":
/*!*****************************************!*\
  !*** ./src/listeners/spellListeners.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_attackMath_attackMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screens/attackMath/attackMath */ "./src/screens/attackMath/attackMath.js");
/* harmony import */ var _screens_moreHealth_moreHealth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/moreHealth/moreHealth */ "./src/screens/moreHealth/moreHealth.js");
/* harmony import */ var _screens_skipSpell_skipSpell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/skipSpell/skipSpell */ "./src/screens/skipSpell/skipSpell.js");
/* harmony import */ var _screens_cheatSet_cheatSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screens/cheatSet/cheatSet */ "./src/screens/cheatSet/cheatSet.js");





function makeAttackMath() {
  function getAttack() {
    const currentExpression = eval(document.querySelector('#mathExpression').innerText);
    const answerByUser = document.querySelector('.math input#answerByUser').value;
    _screens_attackMath_attackMath__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
    if (+currentExpression === +answerByUser) {
      _screens_attackMath_attackMath__WEBPACK_IMPORTED_MODULE_0__["default"].heroAttack(15);
    } else {
      _screens_attackMath_attackMath__WEBPACK_IMPORTED_MODULE_0__["default"].monsterAttack(10);
    }
  }
  document.querySelector('#attackMath').onclick = getAttack;
}

function changeHealth() {
  function getHealth() {
    const currentExpression = eval(document.querySelector('#healthExpression').innerText);
    const answerByUser = document.querySelector('.health input#answerByUser').value;
    if (+currentExpression === +answerByUser) {
      _screens_moreHealth_moreHealth__WEBPACK_IMPORTED_MODULE_1__["default"].changeHeroHealth(10);
    } else {
      _screens_moreHealth_moreHealth__WEBPACK_IMPORTED_MODULE_1__["default"].hide();
      _screens_moreHealth_moreHealth__WEBPACK_IMPORTED_MODULE_1__["default"].monsterAttack(10);
    }
  }
  document.querySelector('#moreHeartsButton').onclick = getHealth;
}

function showCast() {
  function getSpell(e) {
    if (e.target === document.querySelector('a.button.tick')) {
      _screens_attackMath_attackMath__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
      makeAttackMath();
    }
    if (e.target === document.querySelector('a.button.heart')) {
      _screens_moreHealth_moreHealth__WEBPACK_IMPORTED_MODULE_1__["default"].draw();
      changeHealth();
    }
    if (e.target === document.querySelector('a.button.cross')) {
      _screens_skipSpell_skipSpell__WEBPACK_IMPORTED_MODULE_2__["default"].draw();
    }
    if (e.target === document.querySelector('a.button.flower')) {
      _screens_cheatSet_cheatSet__WEBPACK_IMPORTED_MODULE_3__["default"].draw();
      _screens_cheatSet_cheatSet__WEBPACK_IMPORTED_MODULE_3__["default"].listen();
    }
  }
  document.querySelector('#modal').onclick = getSpell;
}

/* harmony default export */ __webpack_exports__["default"] = (showCast);


/***/ }),

/***/ "./src/screens/attackMath/attackAnimation.css":
/*!****************************************************!*\
  !*** ./src/screens/attackMath/attackAnimation.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./attackAnimation.css */ "./node_modules/css-loader/index.js!./src/screens/attackMath/attackAnimation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/attackMath/attackMath.css":
/*!***********************************************!*\
  !*** ./src/screens/attackMath/attackMath.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./attackMath.css */ "./node_modules/css-loader/index.js!./src/screens/attackMath/attackMath.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/attackMath/attackMath.js":
/*!**********************************************!*\
  !*** ./src/screens/attackMath/attackMath.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attackMath_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attackMath.template */ "./src/screens/attackMath/attackMath.template.js");
/* harmony import */ var _attackAnimation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attackAnimation.css */ "./src/screens/attackMath/attackAnimation.css");
/* harmony import */ var _attackAnimation_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_attackAnimation_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attackMath_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attackMath.css */ "./src/screens/attackMath/attackMath.css");
/* harmony import */ var _attackMath_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_attackMath_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gameOver_gameOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameOver/gameOver */ "./src/screens/gameOver/gameOver.js");
/* harmony import */ var _interactive_mathGenerator_mathGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interactive/mathGenerator/mathGenerator */ "./src/interactive/mathGenerator/mathGenerator.js");
/* harmony import */ var _components_battlefield_battlefield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/battlefield/battlefield */ "./src/components/battlefield/battlefield.js");







class AttackMath {
  static draw() {
    const mathModal = document.querySelector('#math');
    if (mathModal === null) {
      const target = document.body.getElementsByTagName('main')[0];
      target.insertAdjacentHTML('beforeend', _attackMath_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } else {
      AttackMath.show();
    }
    AttackMath.setExpression();
  }

  static setExpression() {
    const expression = _interactive_mathGenerator_mathGenerator__WEBPACK_IMPORTED_MODULE_4__["default"].getRandomAddExpression(1, 75);
    const target = document.querySelector('#mathExpression');
    target.innerText = expression;
  }

  static show() {
    const mathModal = document.querySelector('#math');
    mathModal.style.visibility = '';
  }

  static heroAttack(damage) {
    document.querySelector('.monsterBlock>#currentHealthBar').value -= damage;
    document.querySelector('.monsterBlock>#currentHealth').innerText -= damage;
    AttackMath.attackAnimation('monsterBlock');
    if (document.querySelector('.monsterBlock>#currentHealth').innerText <= 0) {
      _components_battlefield_battlefield__WEBPACK_IMPORTED_MODULE_5__["default"].newMonster();
    } else {
      setTimeout(AttackMath.monsterAttack.bind(this, damage - 5), 3000);
    }
  }

  static monsterAttack(damage) {
    document.querySelector('.heroBlock>#currentHealthBar').value -= damage;
    document.querySelector('.heroBlock>#currentHealth').innerText -= damage;
    AttackMath.attackAnimation('heroBlock');
    if (document.querySelector('.heroBlock>#currentHealth').innerText <= 0) {
      _gameOver_gameOver__WEBPACK_IMPORTED_MODULE_3__["default"].draw();
    }
  }

  static attackAnimation(targetBlock) {
    const audio = new Audio('../../audio/attack.mp3');
    audio.play();
    function setClass(classes) {
      document.querySelector(`.${targetBlock}>.pers`).setAttribute('class', classes);
    }
    setClass('pers attackBlock');
    setTimeout(setClass.bind(this, 'pers'), 1500);
  }

  static hide() {
    const mathModal = document.querySelector('#math');
    mathModal.style.visibility = 'hidden';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (AttackMath);


/***/ }),

/***/ "./src/screens/attackMath/attackMath.template.js":
/*!*******************************************************!*\
  !*** ./src/screens/attackMath/attackMath.template.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="math" id="math">
  <span id="mathExpression">2+2</span>
  <input type="text" name="answerByUser" id="answerByUser">
  <button id="attackMath">Attack!</button>
</section>
`);


/***/ }),

/***/ "./src/screens/cheatSet/cheatAnimation.css":
/*!*************************************************!*\
  !*** ./src/screens/cheatSet/cheatAnimation.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./cheatAnimation.css */ "./node_modules/css-loader/index.js!./src/screens/cheatSet/cheatAnimation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/cheatSet/cheatSet.css":
/*!*******************************************!*\
  !*** ./src/screens/cheatSet/cheatSet.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./cheatSet.css */ "./node_modules/css-loader/index.js!./src/screens/cheatSet/cheatSet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/cheatSet/cheatSet.js":
/*!******************************************!*\
  !*** ./src/screens/cheatSet/cheatSet.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cheatSet_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cheatSet.template */ "./src/screens/cheatSet/cheatSet.template.js");
/* harmony import */ var _cheatSet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cheatSet.css */ "./src/screens/cheatSet/cheatSet.css");
/* harmony import */ var _cheatSet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cheatSet_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cheatAnimation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheatAnimation.css */ "./src/screens/cheatSet/cheatAnimation.css");
/* harmony import */ var _cheatAnimation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cheatAnimation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_battlefield_battlefield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/battlefield/battlefield */ "./src/components/battlefield/battlefield.js");
/* harmony import */ var _gameOver_gameOver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameOver/gameOver */ "./src/screens/gameOver/gameOver.js");






class CheatSet {
  static draw() {
    const cheatSet = document.querySelector('#cheatSet');
    if (cheatSet === null) {
      const target = document.body.getElementsByTagName('main')[0];
      target.insertAdjacentHTML('beforeend', _cheatSet_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } else {
      CheatSet.show();
    }
    CheatSet.listen();
  }

  static show() {
    const cheatSet = document.querySelector('#cheatSet');
    cheatSet.style.visibility = '';
  }

  static listen() {
    function cheatMap() {
      const cheat = document.querySelector('#userByCheat').value;
      if (cheat === 'bigbang') {
        CheatSet.heroAttack(50);
        CheatSet.hide();
      } else if (cheat === 'mercy') {
        _gameOver_gameOver__WEBPACK_IMPORTED_MODULE_4__["default"].draw();
      } else {
        CheatSet.hide();
      }
    }
    document.querySelector('#cheatSetButton').onclick = cheatMap;
  }

  static heroAttack(damage) {
    document.querySelector('.monsterBlock>#currentHealthBar').value -= damage;
    document.querySelector('.monsterBlock>#currentHealth').innerText -= damage;
    CheatSet.attackAnimation();
    if (document.querySelector('.monsterBlock>#currentHealth').innerText <= 0) {
      _components_battlefield_battlefield__WEBPACK_IMPORTED_MODULE_3__["default"].newMonster();
    }
  }

  static attackAnimation() {
    const audio = new Audio('../../audio/cheat.mp3');
    audio.play();
    function setClass(classes) {
      document.querySelector('.monsterBlock>.pers').setAttribute('class', classes);
    }
    setClass('pers cheatLightning');
    setTimeout(setClass.bind(this, 'pers'), 1500);
  }

  static hide() {
    const cheatSet = document.querySelector('#cheatSet');
    cheatSet.style.visibility = 'hidden';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CheatSet);


/***/ }),

/***/ "./src/screens/cheatSet/cheatSet.template.js":
/*!***************************************************!*\
  !*** ./src/screens/cheatSet/cheatSet.template.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="cheatSet" id="cheatSet">
  <span id="cheatQuestion">Enter cheat</span>
  <input type="text" name="userByCheat" id="userByCheat">
  <button id="cheatSetButton">Apply</button>
</section>
`);


/***/ }),

/***/ "./src/screens/chooseCast/chooseCast.css":
/*!***********************************************!*\
  !*** ./src/screens/chooseCast/chooseCast.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./chooseCast.css */ "./node_modules/css-loader/index.js!./src/screens/chooseCast/chooseCast.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/chooseCast/chooseCast.js":
/*!**********************************************!*\
  !*** ./src/screens/chooseCast/chooseCast.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chooseCast_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseCast.template */ "./src/screens/chooseCast/chooseCast.template.js");
/* harmony import */ var _chooseCast_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseCast.css */ "./src/screens/chooseCast/chooseCast.css");
/* harmony import */ var _chooseCast_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chooseCast_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _listeners_spellListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../listeners/spellListeners */ "./src/listeners/spellListeners.js");





class ChooseCast {
  static draw() {
    const target = document.body.getElementsByTagName('main')[0];
    target.insertAdjacentHTML('beforeend', _chooseCast_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    Object(_listeners_spellListeners__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ChooseCast);


/***/ }),

/***/ "./src/screens/chooseCast/chooseCast.template.js":
/*!*******************************************************!*\
  !*** ./src/screens/chooseCast/chooseCast.template.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="modal" id="modal">
  <article class="header">
    <h2>Выбор заклинания</h2>
  </article>
  <article class="casts"></article>
  <article class="footer">
    <a href="#" class="btn">Закрыть</a>
  </article>
</section>
`);


/***/ }),

/***/ "./src/screens/gameOver/gameOver.css":
/*!*******************************************!*\
  !*** ./src/screens/gameOver/gameOver.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./gameOver.css */ "./node_modules/css-loader/index.js!./src/screens/gameOver/gameOver.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/gameOver/gameOver.js":
/*!******************************************!*\
  !*** ./src/screens/gameOver/gameOver.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameOver_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameOver.template */ "./src/screens/gameOver/gameOver.template.js");
/* harmony import */ var _gameOver_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameOver.css */ "./src/screens/gameOver/gameOver.css");
/* harmony import */ var _gameOver_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameOver_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _startGame_startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startGame/startGame */ "./src/screens/startGame/startGame.js");
/* harmony import */ var _listeners_gameListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../listeners/gameListeners */ "./src/listeners/gameListeners.js");





class GameOver {
  static draw() {
    const target = document.body.getElementsByTagName('main')[0];
    target.insertAdjacentHTML('beforeend', _gameOver_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    GameOver.setupListner();
  }

  static setupListner() {
    function reloadGame() {
      document.querySelector('#gameOver').style.display = 'none';
      _startGame_startGame__WEBPACK_IMPORTED_MODULE_2__["default"].draw();
      _listeners_gameListeners__WEBPACK_IMPORTED_MODULE_3__["default"].setupListener();
    }
    document.querySelector('.reload').onclick = reloadGame;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GameOver);


/***/ }),

/***/ "./src/screens/gameOver/gameOver.template.js":
/*!***************************************************!*\
  !*** ./src/screens/gameOver/gameOver.template.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="gameOver" id="gameOver">
  <p class="gameOverText">GAME OVER</p>
  <div class="reload">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.011 20c0-0.002 0-0.003 0-0.005 0-4.421 3.578-8.005 7.991-8.005 2.683 0 5.051 1.329 6.5 3.361l1.26-1.644c-1.834-2.254-4.627-3.696-7.76-3.696 -5.519 0-9.994 4.471-10.001 9.989H8.013l3.018 4.013L13.987 20H12.011zM32 20l-2.969-3.985L26 20h1.992c-0.003 4.419-3.579 8.001-7.99 8.001 -2.716 0-5.111-1.36-6.555-3.435l-1.284 1.644c1.832 2.314 4.66 3.803 7.84 3.803 5.524 0 10.001-4.478 10.001-10.001 0-0.004-0.001-0.008-0.001-0.012H32z"/>
  </svg>
</div>
</section>
`);


/***/ }),

/***/ "./src/screens/moreHealth/healthAnimation.css":
/*!****************************************************!*\
  !*** ./src/screens/moreHealth/healthAnimation.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./healthAnimation.css */ "./node_modules/css-loader/index.js!./src/screens/moreHealth/healthAnimation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/moreHealth/moreHealth.css":
/*!***********************************************!*\
  !*** ./src/screens/moreHealth/moreHealth.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./moreHealth.css */ "./node_modules/css-loader/index.js!./src/screens/moreHealth/moreHealth.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/moreHealth/moreHealth.js":
/*!**********************************************!*\
  !*** ./src/screens/moreHealth/moreHealth.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moreHealth_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moreHealth.template */ "./src/screens/moreHealth/moreHealth.template.js");
/* harmony import */ var _moreHealth_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreHealth.css */ "./src/screens/moreHealth/moreHealth.css");
/* harmony import */ var _moreHealth_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moreHealth_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _healthAnimation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthAnimation.css */ "./src/screens/moreHealth/healthAnimation.css");
/* harmony import */ var _healthAnimation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_healthAnimation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interactive_mathGenerator_mathGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interactive/mathGenerator/mathGenerator */ "./src/interactive/mathGenerator/mathGenerator.js");





class MoreHealth {
  static draw() {
    const mathModal = document.querySelector('#health');
    if (mathModal === null) {
      const target = document.body.getElementsByTagName('main')[0];
      target.insertAdjacentHTML('beforeend', _moreHealth_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } else {
      MoreHealth.show();
    }
    MoreHealth.setExpression();
  }

  static setExpression() {
    const expression = _interactive_mathGenerator_mathGenerator__WEBPACK_IMPORTED_MODULE_3__["default"].getRandomSubstrExpression(1, 100);
    const target = document.querySelector('#healthExpression');
    target.innerText = expression;
  }

  static show() {
    const mathModal = document.querySelector('#health');
    mathModal.style.visibility = '';
  }

  static changeHeroHealth(kit) {
    MoreHealth.hide();
    document.querySelector('.heroBlock>#currentHealthBar').value -= -kit;
    document.querySelector('.heroBlock>#currentHealth').innerText -= -kit;
    MoreHealth.healthAnimation('heroBlock');
    MoreHealth.monsterAttack(kit);
  }

  static monsterAttack(kit) {
    document.querySelector('.monsterBlock>#currentHealthBar').value -= -kit / 2;
    document.querySelector('.monsterBlock>#currentHealth').innerText -= -kit / 2;
    MoreHealth.healthAnimation('monsterBlock');
  }

  static healthAnimation(targetBlock) {
    const audio = new Audio('../../audio/health.mp3');
    audio.play();
    function setClass(classes) {
      document.querySelector(`.${targetBlock}>.pers`).setAttribute('class', classes);
    }
    setClass('pers healthBlock');
    setTimeout(setClass.bind(this, 'pers'), 500);
  }


  static hide() {
    const mathModal = document.querySelector('#health');
    mathModal.style.visibility = 'hidden';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MoreHealth);


/***/ }),

/***/ "./src/screens/moreHealth/moreHealth.template.js":
/*!*******************************************************!*\
  !*** ./src/screens/moreHealth/moreHealth.template.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="health" id="health">
  <span id="healthExpression">2+2</span>
  <input type="text" name="answerByUser" id="answerByUser">
  <button id="moreHeartsButton">Apply</button>
</section>
`);


/***/ }),

/***/ "./src/screens/skipSpell/skipSpell.css":
/*!*********************************************!*\
  !*** ./src/screens/skipSpell/skipSpell.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./skipSpell.css */ "./node_modules/css-loader/index.js!./src/screens/skipSpell/skipSpell.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/skipSpell/skipSpell.js":
/*!********************************************!*\
  !*** ./src/screens/skipSpell/skipSpell.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skipSpell_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skipSpell.template */ "./src/screens/skipSpell/skipSpell.template.js");
/* harmony import */ var _skipSpell_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skipSpell.css */ "./src/screens/skipSpell/skipSpell.css");
/* harmony import */ var _skipSpell_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skipSpell_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attackMath_attackMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attackMath/attackMath */ "./src/screens/attackMath/attackMath.js");




class SkipSpell {
  static draw() {
    const skipSpell = document.querySelector('#skipSpell');
    if (skipSpell === null) {
      const target = document.body.getElementsByTagName('main')[0];
      target.insertAdjacentHTML('beforeend', _skipSpell_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } else {
      SkipSpell.show();
    }
    SkipSpell.listen();
  }

  static show() {
    const skipSpell = document.querySelector('#skipSpell');
    skipSpell.style.visibility = '';
  }

  static listen() {
    function skipConfirm(answer) {
      if (answer === 'yes') {
        _attackMath_attackMath__WEBPACK_IMPORTED_MODULE_2__["default"].monsterAttack(5);
        SkipSpell.hide();
      } else {
        SkipSpell.hide();
      }
    }
    document.querySelector('#skipAttack').onclick = skipConfirm.bind(this, 'yes');
    document.querySelector('#cancelSkip').onclick = skipConfirm.bind(this, 'no');
  }

  static hide() {
    const skipSpell = document.querySelector('#skipSpell');
    skipSpell.style.visibility = 'hidden';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SkipSpell);


/***/ }),

/***/ "./src/screens/skipSpell/skipSpell.template.js":
/*!*****************************************************!*\
  !*** ./src/screens/skipSpell/skipSpell.template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="skipSpell" id="skipSpell">
  <span id="skipQuestion">Are you sure?</span>
  <div class="cheatAnswerWrapper">
    <button id="skipAttack">Yes</button>
    <button id="cancelSkip">No</button>
  </div>
</section>
`);


/***/ }),

/***/ "./src/screens/startGame/startGame.css":
/*!*********************************************!*\
  !*** ./src/screens/startGame/startGame.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./startGame.css */ "./node_modules/css-loader/index.js!./src/screens/startGame/startGame.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/screens/startGame/startGame.js":
/*!********************************************!*\
  !*** ./src/screens/startGame/startGame.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startGame_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame.template */ "./src/screens/startGame/startGame.template.js");
/* harmony import */ var _startGame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame.css */ "./src/screens/startGame/startGame.css");
/* harmony import */ var _startGame_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_startGame_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interactive_score_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interactive/score/score */ "./src/interactive/score/score.js");




class StartGame {
  static draw() {
    document.body.innerHTML = ('');
    const target = document.body;
    target.insertAdjacentHTML('beforeend', _startGame_template__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _interactive_score_score__WEBPACK_IMPORTED_MODULE_2__["default"].startScore();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StartGame);


/***/ }),

/***/ "./src/screens/startGame/startGame.template.js":
/*!*****************************************************!*\
  !*** ./src/screens/startGame/startGame.template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="startWrapper">
  <div class="wrap center startGame" id="startGame"> 
    <div class="wrap-label">
      <label for="userName">Введите имя</label>
    </div>
    <input type="text" id="userName" required >
    <button id="sendUserName">Start Game</button>
  </div>
</section>
`);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmF0dGxlZmllbGQvYmF0dGxlZmllbGQuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhc3RzL2Nhc3RzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFsdGgvaGVhbHRoLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9hdHRhY2tNYXRoL2F0dGFja0FuaW1hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvYXR0YWNrTWF0aC9hdHRhY2tNYXRoLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jaGVhdFNldC9jaGVhdEFuaW1hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hlYXRTZXQvY2hlYXRTZXQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL2Nob29zZUNhc3QvY2hvb3NlQ2FzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvZ2FtZU92ZXIvZ2FtZU92ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL21vcmVIZWFsdGgvaGVhbHRoQW5pbWF0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9tb3JlSGVhbHRoL21vcmVIZWFsdGguY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL3NraXBTcGVsbC9za2lwU3BlbGwuY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL3N0YXJ0R2FtZS9zdGFydEdhbWUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkLmNzcz9hNzg2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkLnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhc3RzL2Nhc3RzLmNzcz8zYWIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhc3RzL2Nhc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nhc3RzL2Nhc3RzLnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzP2UxN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWx0aC9oZWFsdGguY3NzP2U2MmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhbHRoL2hlYWx0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFsdGgvaGVhbHRoLnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGl2ZS9jaGFyYWN0ZXJHZW5lcmF0b3IvY2hhcmFjdGVyR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGl2ZS9tYXRoR2VuZXJhdG9yL21hdGhHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyYWN0aXZlL25hbWVHZW5lcmF0b3IvbmFtZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3RpdmUvc2NvcmUvc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVycy9nYW1lTGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXN0ZW5lcnMvc3BlbGxMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvYXR0YWNrTWF0aC9hdHRhY2tBbmltYXRpb24uY3NzPzY3ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvYXR0YWNrTWF0aC9hdHRhY2tNYXRoLmNzcz9iMzAyIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL2F0dGFja01hdGgvYXR0YWNrTWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9hdHRhY2tNYXRoL2F0dGFja01hdGgudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hlYXRTZXQvY2hlYXRBbmltYXRpb24uY3NzP2VlYjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hlYXRTZXQvY2hlYXRTZXQuY3NzP2M5YjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hlYXRTZXQvY2hlYXRTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hlYXRTZXQvY2hlYXRTZXQudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hvb3NlQ2FzdC9jaG9vc2VDYXN0LmNzcz84ZGE2Iiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL2Nob29zZUNhc3QvY2hvb3NlQ2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jaG9vc2VDYXN0L2Nob29zZUNhc3QudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvZ2FtZU92ZXIvZ2FtZU92ZXIuY3NzP2RhY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvZ2FtZU92ZXIvZ2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvZ2FtZU92ZXIvZ2FtZU92ZXIudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvbW9yZUhlYWx0aC9oZWFsdGhBbmltYXRpb24uY3NzPzVmYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvbW9yZUhlYWx0aC9tb3JlSGVhbHRoLmNzcz9kMDUzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL21vcmVIZWFsdGgvbW9yZUhlYWx0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9tb3JlSGVhbHRoL21vcmVIZWFsdGgudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvc2tpcFNwZWxsL3NraXBTcGVsbC5jc3M/MzVkOCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9za2lwU3BlbGwvc2tpcFNwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL3NraXBTcGVsbC9za2lwU3BlbGwudGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvc3RhcnRHYW1lL3N0YXJ0R2FtZS5jc3M/NzZiNCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9zdGFydEdhbWUvc3RhcnRHYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL3N0YXJ0R2FtZS9zdGFydEdhbWUudGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVE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RUFBQzs7Ozs7Ozs7Ozs7OztBQ1BGLGNBQWMsbUJBQU8sQ0FBQyxtSUFBNkQ7O0FBRW5GLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ25CO0FBQ3lCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyREFBUTtBQUNuRCxJQUFJLGdFQUFLO0FBQ1Q7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDYnpCO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm1haW4ge1xcbiAgbWFyZ2luOiAwIGF1dG87IC8qINCm0LXQvdGC0YDQuNGA0YPQtdC8INCx0LvQvtC60LggKi9cXG4gIHdpZHRoOiAxMDAlOyAvKiDQl9Cw0LTQsNC10Lwg0YjQuNGA0LjQvdGDIDEwMCUg0YfRgtC+INCx0Ysg0YHQtNC10LvQsNGC0Ywg0LXQtSDRgNC10LfQuNC90L7QstC+0LkgKi9cXG4gIGZvbnQtc2l6ZTogMDsgLyog0KHRgtCw0LLQuNC8INGA0L7QtNC40YLQtdC70Y4g0LfQvdCw0YfQtdC90LjQtSAwLCDRh9GC0L4g0LHRiyDRg9Cx0YDQsNGC0Ywg0L7RgtGB0YLRg9C/0Ysg0YMg0LHQu9C+0LrQvtCyKi9cXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxubWFpbiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyog0JTQtdC70LDQtdC8INCx0LvQvtC60Lgg0L/QviDQs9C+0YDQuNC30L7QvdGC0LDQu9C4ICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiDQktGL0YDQsNCy0L3QuNCy0LDQtdC8INC40YUg0YHQstC10YDRhdGDICovXFxuICBmb250LXNpemU6IDE2cHg7IC8qINCh0YLQsNCy0LjQvCDQtNC+0YfQutCw0Lwg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCwg0LjQvdCw0YfQtSDQv9GA0LjQvNC10YIg0LfQvdCw0YfQtdC90LjQtSDRgyDRgNC+0LTQuNGC0LXQu9GPICovXFxufVxcblxcbi5oZXJvQmxvY2t7XFxuICB3aWR0aDogMzAlOyAvKiDQl9Cw0LTQsNC10Lwg0YjQuNGA0LjQvdGDINCyINC/0YDQvtGG0LXQvdGC0LDRhSDRh9GC0L4g0LHRiyDRgdC00LXQu9Cw0YLRjCDQtdC1INGA0LXQt9C40L3QvtCy0L7QuSAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiDQktGL0YHQvtGC0LAg0LHQu9C+0LrQsCAqL1xcbn1cXG5cXG4uYW5pbWF0aW9ue1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1vbnN0ZXJCbG9ja3tcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbiNoZXJvTmFtZSwgXFxuI21vbnN0ZXJOYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLnBlcnMge1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiAzODBweDtcXG59XFxuXFxuaW1nIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxufVxcblxcbi5oZWFkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAwcHg7XFxuICByaWdodDogMTIwcHg7XFxufVxcblxcbi5ib2R5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjQwcHg7XFxuICByaWdodDogMTAwcHg7XFxufVxcblxcbi5sZWdzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA0MTVweDtcXG5cXHRyaWdodDogMTE3cHg7XFxufVxcblxcbi5hcm1SaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwMHB4O1xcbiAgcmlnaHQ6IDIyNXB4O1xcbn1cXG5cXG4uYXJtTGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI4MHB4O1xcbiAgcmlnaHQ6IDY1cHg7XFxufVxcblxcbi5jaGFyIHtcXG5cXHR3aWR0aDogNnB4O1xcblxcdGhlaWdodDogNnB4O1xcblxcdGZvbnQtc2l6ZTogNnB4O1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdFxcblxcdC8qIEkgZm9yZ290IHRvIG1lbnRpb24gdGhhdCB3ZSBhcmUgZHJhd2luZyBhIHBpeGVsIGdpcmwgaGVyZS4gU28gZmlyc3QsIHdlJ2xsIGRyYXcgdGhlIG91dGxpbmUgb2YgdGhlIHdob2xlIGZpZ3VyZSBhbmQgdGhlbiBzdGFydCBjb2xvcmluZyBpdC4gQ29sb3JpbmcgcGFydCB3aWxsIGJlIGVhc3kuICovXFxuXFx0XFxuXFx0Ym94LXNoYWRvdzpcXG5cXHRcXHRcXG5cXHRcXHQvKiBGYWNlICovXFxuXFx0XFx0LTFlbSAwIGJsYWNrLFxcblxcdFxcdDFlbSAwIGJsYWNrLFxcblxcdFxcdDJlbSAxZW0gYmxhY2ssXFxuXFx0XFx0LTJlbSAxZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDJlbSBibGFjayxcXG5cXHRcXHQtM2VtIDJlbSBibGFjayxcXG5cXHRcXHQ0ZW0gM2VtIGJsYWNrLFxcblxcdFxcdC00ZW0gM2VtIGJsYWNrLFxcblxcdFxcdDRlbSA0ZW0gYmxhY2ssXFxuXFx0XFx0LTRlbSA0ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDVlbSBibGFjayxcXG5cXHRcXHQtNGVtIDVlbSBibGFjayxcXG5cXHRcXHQ0ZW0gNmVtIGJsYWNrLFxcblxcdFxcdC00ZW0gNmVtIGJsYWNrLFxcblxcdFxcdDRlbSA3ZW0gYmxhY2ssXFxuXFx0XFx0LTRlbSA3ZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDhlbSBibGFjayxcXG5cXHRcXHQtM2VtIDhlbSBibGFjayxcXG5cXHRcXHQyZW0gOWVtIGJsYWNrLFxcblxcdFxcdC0yZW0gOWVtIGJsYWNrLFxcblxcdFxcdDFlbSAxMGVtIGJsYWNrLFxcblxcdFxcdC0xZW0gMTBlbSBibGFjayxcXG5cXHRcXG5cXHRcXHQvKiBFeWVzICovXFxuXFx0XFx0LTFlbSAzZW0gYmxhY2ssXFxuXFx0XFx0LTFlbSA0ZW0gYmxhY2ssXFxuXFx0XFx0MWVtIDNlbSBibGFjayxcXG5cXHRcXHQxZW0gNGVtIGJsYWNrLFxcblxcdFxcdFxcblxcdFxcdC8qIFNtaWxlICovXFxuXFx0XFx0LTJlbSA2ZW0gYmxhY2ssXFxuXFx0XFx0MmVtIDZlbSBibGFjayxcXG5cXHRcXHQtMWVtIDdlbSBibGFjayxcXG5cXHRcXHQwZW0gN2VtIGJsYWNrLFxcblxcdFxcdDFlbSA3ZW0gYmxhY2ssXFxuXFx0XFxuXFx0XFx0LyogRmFjZSBpcyBjb21wbGV0ZSwgbm93IHdlJ2xsIG1vdmUgb250byB0aGUgaGFpciAqL1xcblxcdFxcdC0yZW0gLTNlbSBibGFjayxcXG5cXHRcXHQtMWVtIC0zZW0gYmxhY2ssXFxuXFx0XFx0MGVtIC0zZW0gYmxhY2ssXFxuXFx0XFx0MWVtIC0zZW0gYmxhY2ssXFxuXFx0XFx0MmVtIC0zZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSAtMmVtIGJsYWNrLFxcblxcdFxcdDNlbSAtMmVtIGJsYWNrLFxcblxcdFxcdDRlbSAtMWVtIGJsYWNrLFxcblxcdFxcdC00ZW0gLTFlbSBibGFjayxcXG5cXHRcXHQtNWVtIDAgYmxhY2ssXFxuXFx0XFx0LTVlbSAxZW0gYmxhY2ssXFxuXFx0XFx0NWVtIDAgYmxhY2ssXFxuXFx0XFx0NWVtIDFlbSBibGFjayxcXG5cXHRcXHQ2ZW0gN2VtIGJsYWNrLFxcblxcdFxcdDZlbSAyZW0gYmxhY2ssXFxuXFx0XFx0NmVtIDNlbSBibGFjayxcXG5cXHRcXHQ2ZW0gNGVtIGJsYWNrLFxcblxcdFxcdDZlbSA1ZW0gYmxhY2ssXFxuXFx0XFx0NmVtIDZlbSBibGFjayxcXG5cXHRcXHQtNmVtIDdlbSBibGFjayxcXG5cXHRcXHQtNmVtIDJlbSBibGFjayxcXG5cXHRcXHQtNmVtIDNlbSBibGFjayxcXG5cXHRcXHQtNmVtIDRlbSBibGFjayxcXG5cXHRcXHQtNmVtIDVlbSBibGFjayxcXG5cXHRcXHQtNmVtIDZlbSBibGFjayxcXG5cXHRcXHQ3ZW0gOGVtIGJsYWNrLFxcblxcdFxcdDdlbSA5ZW0gYmxhY2ssXFxuXFx0XFx0N2VtIDEwZW0gYmxhY2ssXFxuXFx0XFx0N2VtIDExZW0gYmxhY2ssXFxuXFx0XFx0N2VtIDEyZW0gYmxhY2ssXFxuXFx0XFx0N2VtIDEzZW0gYmxhY2ssXFxuXFx0XFx0LTdlbSA4ZW0gYmxhY2ssXFxuXFx0XFx0LTdlbSA5ZW0gYmxhY2ssXFxuXFx0XFx0LTdlbSAxMGVtIGJsYWNrLFxcblxcdFxcdC03ZW0gMTFlbSBibGFjayxcXG5cXHRcXHQtN2VtIDEyZW0gYmxhY2ssXFxuXFx0XFx0LTdlbSAxM2VtIGJsYWNrLFxcblxcdFxcblxcdFxcdC8qIE5vdywgdGhlIHRvcnNvICovXFxuXFx0XFx0MWVtIDExZW0gYmxhY2ssXFxuXFx0XFx0LTFlbSAxMWVtIGJsYWNrLFxcblxcdFxcdDJlbSAxMWVtIGJsYWNrLFxcblxcdFxcdC0yZW0gMTFlbSBibGFjayxcXG5cXHRcXHQzZW0gMTFlbSBibGFjayxcXG5cXHRcXHQtM2VtIDExZW0gYmxhY2ssXFxuXFx0XFx0LTRlbSAxMmVtIGJsYWNrLFxcblxcdFxcdDRlbSAxMmVtIGJsYWNrLFxcblxcdFxcdC01ZW0gMTNlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMTNlbSBibGFjayxcXG5cXHRcXHQtNmVtIDE0ZW0gYmxhY2ssXFxuXFx0XFx0LTZlbSAxNWVtIGJsYWNrLFxcblxcdFxcdC02ZW0gMTZlbSBibGFjayxcXG5cXHRcXHQ2ZW0gMTRlbSBibGFjayxcXG5cXHRcXHQ2ZW0gMTVlbSBibGFjayxcXG5cXHRcXHQ2ZW0gMTZlbSBibGFjayxcXG5cXHRcXG5cXHRcXHQvKiBUb3BwZXIgKi9cXG5cXHRcXHQtNGVtIDE2ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDE2ZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSAxN2VtIGJsYWNrLFxcblxcdFxcdC0zZW0gMThlbSBibGFjayxcXG5cXHRcXHQtM2VtIDE5ZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSAyMGVtIGJsYWNrLFxcblxcdFxcdC0zZW0gMjFlbSBibGFjayxcXG5cXHRcXHQtM2VtIDIyZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSAyM2VtIGJsYWNrLFxcblxcdFxcdC0zZW0gMjRlbSBibGFjayxcXG5cXHRcXHQtM2VtIDI1ZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDE3ZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDE4ZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDE5ZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDIwZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDIxZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDIyZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDIzZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDI0ZW0gYmxhY2ssXFxuXFx0XFx0M2VtIDI1ZW0gYmxhY2ssXFxuXFx0XFx0MmVtIDI1ZW0gYmxhY2ssXFxuXFx0XFx0MWVtIDI1ZW0gYmxhY2ssXFxuXFx0XFx0MCAyNWVtIGJsYWNrLFxcblxcdFxcdC0xZW0gMjVlbSBibGFjayxcXG5cXHRcXHQtMmVtIDI1ZW0gYmxhY2ssXFxuXFx0XFx0XFxuXFx0XFx0LyogSGFuZHMgKi9cXG5cXHRcXHQtNWVtIDE3ZW0gYmxhY2ssXFxuXFx0XFx0LTVlbSAxOGVtIGJsYWNrLFxcblxcdFxcdC01ZW0gMTllbSBibGFjayxcXG5cXHRcXHQtNWVtIDIwZW0gYmxhY2ssXFxuXFx0XFx0LTVlbSAyMWVtIGJsYWNrLFxcblxcdFxcdC01ZW0gMjJlbSBibGFjayxcXG5cXHRcXHQtNWVtIDIzZW0gYmxhY2ssXFxuXFx0XFx0LTVlbSAyNGVtIGJsYWNrLFxcblxcdFxcdC01ZW0gMjVlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMTdlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMThlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMTllbSBibGFjayxcXG5cXHRcXHQ1ZW0gMjBlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMjFlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMjJlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMjNlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMjRlbSBibGFjayxcXG5cXHRcXHQ1ZW0gMjVlbSBibGFjayxcXG5cXHRcXHQ0ZW0gMjZlbSBibGFjayxcXG5cXHRcXHQtNGVtIDI2ZW0gYmxhY2ssXFxuXFx0XFx0XFxuXFx0XFx0LyogTm93IG9ubHkgcGFudHMgYW5kIHNob2VzIGxlZnQgOkQgKi9cXG5cXHRcXHQvKiBQYW50cyAqL1xcblxcdFxcdDNlbSAyNmVtIGJsYWNrLFxcblxcdFxcdDNlbSAyN2VtIGJsYWNrLFxcblxcdFxcdDNlbSAyOGVtIGJsYWNrLFxcblxcdFxcdDNlbSAyOWVtIGJsYWNrLFxcblxcdFxcdDNlbSAzMGVtIGJsYWNrLFxcblxcdFxcdDNlbSAzMWVtIGJsYWNrLFxcblxcdFxcdDNlbSAzMmVtIGJsYWNrLFxcblxcdFxcdDNlbSAzM2VtIGJsYWNrLFxcblxcdFxcdC0zZW0gMjZlbSBibGFjayxcXG5cXHRcXHQtM2VtIDI3ZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSAyOGVtIGJsYWNrLFxcblxcdFxcdC0zZW0gMjllbSBibGFjayxcXG5cXHRcXHQtM2VtIDMwZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSAzMWVtIGJsYWNrLFxcblxcdFxcdC0zZW0gMzJlbSBibGFjayxcXG5cXHRcXHQtM2VtIDMzZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDM0ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDM1ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDM2ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDM3ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDM4ZW0gYmxhY2ssXFxuXFx0XFx0NGVtIDM5ZW0gYmxhY2ssXFxuXFx0XFx0LTRlbSAzNGVtIGJsYWNrLFxcblxcdFxcdC00ZW0gMzVlbSBibGFjayxcXG5cXHRcXHQtNGVtIDM2ZW0gYmxhY2ssXFxuXFx0XFx0LTRlbSAzN2VtIGJsYWNrLFxcblxcdFxcdC00ZW0gMzhlbSBibGFjayxcXG5cXHRcXHQtNGVtIDM5ZW0gYmxhY2ssXFxuXFx0XFx0XFxuXFx0XFx0MCAyNmVtIGJsYWNrLFxcblxcdFxcdDAgMzBlbSBibGFjayxcXG5cXHRcXHQwIDMxZW0gYmxhY2ssXFxuXFx0XFx0MCAzMmVtIGJsYWNrLFxcblxcdFxcdDAgMzNlbSBibGFjayxcXG5cXHRcXHQwIDM0ZW0gYmxhY2ssXFxuXFx0XFx0MCAzNWVtIGJsYWNrLFxcblxcdFxcdDAgMzZlbSBibGFjayxcXG5cXHRcXHQwIDM3ZW0gYmxhY2ssXFxuXFx0XFx0MCAzOGVtIGJsYWNrLFxcblxcdFxcdDAgMzllbSBibGFjayxcXG5cXHRcXHRcXG5cXHRcXHQvKiBTaG9lcyAqL1xcblxcdFxcdC01ZW0gNDBlbSBibGFjayxcXG5cXHRcXHQtNGVtIDQwZW0gYmxhY2ssXFxuXFx0XFx0LTNlbSA0MGVtIGJsYWNrLFxcblxcdFxcdC0yZW0gNDBlbSBibGFjayxcXG5cXHRcXHQtMWVtIDQwZW0gYmxhY2ssXFxuXFx0XFx0MCA0MGVtIGJsYWNrLFxcblxcdFxcdDFlbSA0MGVtIGJsYWNrLFxcblxcdFxcdDJlbSA0MGVtIGJsYWNrLFxcblxcdFxcdDNlbSA0MGVtIGJsYWNrLFxcblxcdFxcdDRlbSA0MGVtIGJsYWNrLFxcblxcdFxcdDVlbSA0MGVtIGJsYWNrLFxcblxcdFxcdC02ZW0gNDFlbSBibGFjayxcXG5cXHRcXHQtNmVtIDQyZW0gYmxhY2ssXFxuXFx0XFx0NmVtIDQxZW0gYmxhY2ssXFxuXFx0XFx0NmVtIDQyZW0gYmxhY2ssXFxuXFx0XFx0LTVlbSA0M2VtIGJsYWNrLFxcblxcdFxcdC00ZW0gNDNlbSBibGFjayxcXG5cXHRcXHQtM2VtIDQzZW0gYmxhY2ssXFxuXFx0XFx0LTJlbSA0M2VtIGJsYWNrLFxcblxcdFxcdC0xZW0gNDNlbSBibGFjayxcXG5cXHRcXHQxZW0gNDNlbSBibGFjayxcXG5cXHRcXHQyZW0gNDNlbSBibGFjayxcXG5cXHRcXHQzZW0gNDNlbSBibGFjayxcXG5cXHRcXHQ0ZW0gNDNlbSBibGFjayxcXG5cXHRcXHQ1ZW0gNDNlbSBibGFjayxcXG5cXHRcXHQwIDQxZW0gYmxhY2ssXFxuXFx0XFx0MCA0MmVtIGJsYWNrLFxcblxcdFxcdFxcblxcdFxcdC8qIE91dGxpbmVzIGFyZSBjb21wbGV0ZWQsIG5vdyB3ZSdsbCBjb2xvciB0aGUgY2hhcmFjdGVyLiBGb3IgY29sb3JpbmcsIHdlIHdpbGwgdXNlIHNpemUvc3ByZWFkIHBhcmFtZXRlciAoNHRoIHBhcmFtZXRlcikgb2YgdGhlIGJveC1zaGFkb3cgcHJvcGVydHkgdG8gbWFrZSBvdXIgY29kZSBjb21wYXJpdGl2ZWx5IHNtYWxsZXIgKi9cXG5cXHRcXHRcXG5cXHRcXHQvKiBGYWNlICovXFxuXFx0XFx0MCA1ZW0gMCAzZW0gI0ZGRjVDOSxcXG5cXHRcXHQwIDFlbSAwIDFlbSAjRkZGNUM5LFxcblxcdFxcdDAgOGVtIDAgMWVtICNGRkY1QzksXFxuXFx0XFx0MCAxMGVtICNGRkY1QzksXFxuXFx0XFx0MCAxMWVtICNGRkY1QzksXFxuXFx0XFx0MCAxMmVtICNGRkY1QzksXFxuXFx0XFx0XFxuXFx0XFx0LyogU2hpcnQgKi9cXG5cXHRcXHQwIDE1ZW0gMCAzZW0gcHVycGxlLFxcblxcdFxcdDAgMjFlbSAwIDNlbSBwdXJwbGUsXFxuXFx0XFx0NGVtIDE0ZW0gMCAxZW0gcHVycGxlLFxcblxcdFxcdC00ZW0gMTRlbSAwIDFlbSBwdXJwbGUsXFxuXFx0XFx0NGVtIDE1ZW0gMCAxZW0gcHVycGxlLFxcblxcdFxcdC00ZW0gMTVlbSAwIDFlbSBwdXJwbGUsXFxuXFx0XFx0XFxuXFx0XFx0LyogUGFudHMgKi9cXG5cXHRcXHQwIDI5ZW0gMCAzZW0gcmVkLFxcblxcdFxcdDAgMzZlbSAwIDNlbSByZWQsXFxuXFx0XFx0XFxuXFx0XFx0LyogSGFuZHMgKi9cXG5cXHRcXHQwIDIwZW0gMCA1ZW0gI0ZGRjVDOSxcXG5cXHRcXHRcXG5cXHRcXHQvKiBIYWlyICovXFxuXFx0XFx0MCAwIDAgMmVtIGJyb3duLFxcblxcdFxcdC0zZW0gMCAwIDFlbSBicm93bixcXG5cXHRcXHQzZW0gMCAwIDFlbSBicm93bixcXG5cXHRcXHQ0ZW0gM2VtIDAgMWVtIGJyb3duLFxcblxcdFxcdDRlbSA2ZW0gMCAxZW0gYnJvd24sXFxuXFx0XFx0M2VtIDEwZW0gMCAzZW0gYnJvd24sXFxuXFx0XFx0LTRlbSAzZW0gMCAxZW0gYnJvd24sXFxuXFx0XFx0LTRlbSA2ZW0gMCAxZW0gYnJvd24sXFxuXFx0XFx0LTNlbSAxMGVtIDAgM2VtIGJyb3duLFxcblxcdFxcdFxcblxcdFxcdC8qIFNob2VzICovXFxuXFx0XFx0LTFlbSAzOWVtIDAgM2VtIHBpbmssXFxuXFx0XFx0MWVtIDM5ZW0gMCAzZW0gcGluayxcXG5cXHRcXHQtNGVtIDQyZW0gMCAxZW0gcGluayxcXG5cXHRcXHQ0ZW0gNDJlbSAwIDFlbSBwaW5rXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbntcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y0ZjFlZSwgI2ZmZik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjRmMWVlLCAjZmZmKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAuMyksIGluc2V0IDBweCA0cHggMXB4IDFweCB3aGl0ZSwgaW5zZXQgMHB4IC0zcHggMXB4IDFweCByZ2JhKDIwNCwxOTgsMTk3LC41KTtcXG4gIGZsb2F0OmxlZnQ7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBtYXJnaW46IDAgMzBweCAzMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzBweDtcXHRcXHRcXHRcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcXG59XFxuICBcXG4uYnV0dG9uOmFmdGVye1xcblxcdGNvbG9yOiNlOWU2ZTQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDFweCAjYmRiNWI0LCAxcHggMXB4IDFweCB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4gIFxcbi5oZWFydDphZnRlcntcXG5cXHRjb250ZW50OiBcXFwiXFxcXDI3NjRcXFwiO1xcbiAgbGVmdDogMjFweDtcXG4gIHRvcDogMTZweDtcXG59XFxuICBcXG4uZmxvd2VyOmFmdGVye1xcblxcdGNvbnRlbnQ6IFxcXCJcXFxcMjczRlxcXCI7XFxuICBsZWZ0OiAyM3B4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4gIFxcbi50aWNrOmFmdGVye1xcblxcdGNvbnRlbnQ6IFxcXCJcXFxcMjcxNFxcXCI7XFxuICBsZWZ0OjIzcHg7XFxuICB0b3A6MTZweDtcXG59XFxuICBcXG4uY3Jvc3M6YWZ0ZXJ7XFxuXFx0Y29udGVudDogXFxcIlxcXFwyNzE2XFxcIjtcXG4gIGxlZnQ6IDI0cHg7XFxuICB0b3A6IDE1cHg7XFxufVxcbiAgXFxuLmJ1dHRvbjpob3ZlcntcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmYsICNmNGYxZWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiwgI2Y0ZjFlZSk7XFxuICBjb2xvcjojMDA4OGNjO1xcbn1cXG4gIFxcbi5oZWFydDpob3ZlcjphZnRlcntcXG5cXHRjb2xvcjojMTRlMDQ3O1xcbiAgdGV4dC1zaGFkb3c6MHB4IDBweCA2cHggIzE0ZTA0NztcXG59XFxuICBcXG4uZmxvd2VyOmhvdmVyOmFmdGVye1xcblxcdGNvbG9yOiNmOTllNGU7XFxuICB0ZXh0LXNoYWRvdzowcHggMHB4IDZweCAjZjk5ZTRlO1xcbn1cXG4gIFxcbi50aWNrOmhvdmVyOmFmdGVye1xcblxcdGNvbG9yOiNkYjIwMjA7XFxuICB0ZXh0LXNoYWRvdzowcHggMHB4IDZweCAjZGIyMDIwO1xcbn1cXG4gIFxcbi5jcm9zczpob3ZlcjphZnRlcntcXG5cXHRjb2xvcjojZWIyZjJmO1xcbiAgdGV4dC1zaGFkb3c6MHB4IDBweCA2cHggI2ViMmYyZjtcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmV7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWZlZGVjLCAjZjdmNGY0KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlZmVkZWMsICNmN2Y0ZjQpO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLDAsMCwuNCksIGluc2V0IDBweCAtM3B4IDFweCAxcHggcmdiYSgyMDQsMTk4LDE5NywuNSk7XFxufVxcbiAgXFxuLmJ1dHRvbjphY3RpdmU6YWZ0ZXJ7XFxuXFx0Y29sb3I6I2RiZDJkMjtcXG4gIHRleHQtc2hhZG93OiAwcHggLTFweCAxcHggI2JkYjViNCwgMHB4IDFweCAxcHggd2hpdGU7XFxufVxcblxcbi5jYXN0cyBwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFydDpob3ZlciArIC5oZWFydERlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMxNGUwNDc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDU1cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGljazpob3ZlciArIC50aWNrRGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogIzE0ZTA0NztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTVweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5mbG93ZXI6aG92ZXIgKyAuZmxvd2VyRGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogIzE0ZTA0NztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTVweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5jcm9zczpob3ZlciArIC5jcm9zc0Rlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMxNGUwNDc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDU1cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbm5hdiBsaSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDE3NXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogLTRweDtcXG59XFxuXFxubmF2IGEsIG5hdiBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiAuM3MgYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuICAgXFxubmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY1ZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY3VycmVudEhlYWx0aCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmctbGVmdDogNTAlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbnByb2dyZXNzIHtcXG5cXHR3aWR0aDogOTUlO1xcblxcdGhlaWdodDogMTRweDtcXG5cXHRtYXJnaW46IDE1cHggYXV0bztcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFx0cGFkZGluZzogMnB4O1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcblxcdGJhY2tncm91bmQ6XFxuXFx0XFx0LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCAzMyUsIHJnYmEoMCwgMCwgMCwgMC4xKSAzMyUsIHJnYmEoMCwgMCwgMCwgMC4xKSA2NiUsIHRyYW5zcGFyZW50IDY2JSksXFxuXFx0XFx0LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCByZ2JhKDAsIDAsIDAsIDAuMikpLFxcblxcdFxcdC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNiYTc0NDgsICNjNDY3MmQpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMjVweCAxNHB4LCAxMDAlIDEwMCUsIDEwMCUgMTAwJTtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogbW92ZSA1cyBsaW5lYXIgMCBpbmZpbml0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUge1xcblxcdDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAwIDAsIDAgMH1cXG5cXHQxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwcHggMHB4LCAwIDAsIDAgMH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjMTcxNzE3OztcXG4gIC0tYXR0YWNrQmxvY2stc2l6ZTogODBweDtcXG4gIC0tYXR0YWNrQmxvY2stY29sb3I6ICMzRTNFM0U7XFxuICAtLWF0dGFja0Jsb2NrLWNvbG9yMjogIzdGN0Y3RjtcXG59XFxuXFxuLmF0dGFja0Jsb2NrIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiA0MiU7XFxuXFx0bGVmdDogNTAlO1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiAgXFxuLmF0dGFja0Jsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC0xNSU7XFxuXFx0bGVmdDogNDklO1xcbiAgd2lkdGg6IHZhcigtLWF0dGFja0Jsb2NrLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1hdHRhY2tCbG9jay1zaXplKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXR0YWNrQmxvY2stY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogXFxuICAgIC02MHB4IC0yMHB4IDAgNXB4IHZhcigtLWF0dGFja0Jsb2NrLWNvbG9yKSxcXG4gICAgNTBweCAtMTBweCAwIDBweCB2YXIoLS1hdHRhY2tCbG9jay1jb2xvciksXFxuICAgIDEwMHB4IC0xNnB4IDAgMHB4IHZhcigtLWF0dGFja0Jsb2NrLWNvbG9yKSxcXG4gICAgLTEwcHggLTcwcHggMCAxMHB4IHZhcigtLWF0dGFja0Jsb2NrLWNvbG9yKSxcXG4gICAgNjBweCAtNjBweCAwIDhweCB2YXIoLS1hdHRhY2tCbG9jay1jb2xvciksXFxuICAgIDczcHggLTY2cHggMCA4cHggdmFyKC0tYXR0YWNrQmxvY2stY29sb3IyKSxcXG4gICAgOTZweCAtMzBweCAwIDBweCB2YXIoLS1hdHRhY2tCbG9jay1jb2xvcjIpLFxcbiAgICAyMHB4IC03OHB4IDAgOHB4IHZhcigtLWF0dGFja0Jsb2NrLWNvbG9yMik7XFxuICBhbmltYXRpb246IGF0dGFja0Jsb2NrIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbn1cXG4gIFxcbi5hdHRhY2tCbG9jazphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDc4JTtcXG5cXHRsZWZ0OiA0OSU7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1hdHRhY2tCbG9jay1zaXplKSAqIDMpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWF0dGFja0Jsb2NrLXNpemUpIC8gMyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDYlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCAsMCAsMCAsIC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogYXR0YWNrQmxvY2tfc2hhZG93IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGF0dGFja0Jsb2NrIHtcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcbn1cXG4gXFxuQGtleWZyYW1lcyBhdHRhY2tCbG9ja19zaGFkb3cge1xcbiAgNTAle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDYlLCAtNTAlKSBzY2FsZSgwLjgpO1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMpO1xcbiAgfVxcbiAgMTAwJXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ2JSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuOCk7XFxuICB9XFxufVxcblxcbi5hdHRhY2tCbG9jayBpbWcge1xcblxcdG1hcmdpbi10b3A6IC01NSU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hdGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LCAxNzEsIDE2OSk7XFxuICB3aWR0aDogMzEwcHg7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNTVweCk7XFxuICBtYXJnaW46IC0yNTBweCAwIDAgMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLDAsMCwuMjUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLDAsMCwuMjUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLDAsMCwuMjUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1hdGg6dGFyZ2V0IHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jYXR0YWNrTWF0aCB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IDEwJSAyNSU7XFxuXFx0cGFkZGluZzogMCAxZW07XFxufVxcblxcbiNtYXRoRXhwcmVzc2lvbiB7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jYW5zd2VyQnlVc2VyIHtcXG5cXHRwYWRkaW5nOiAzcHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0d2lkdGg6IDI1MHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGVhdExpZ2h0bmluZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxuICBhbmltYXRpb246IGNoZWF0TGlnaHRuaW5nIDJzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7XFxufVxcbi5jaGVhdExpZ2h0bmluZzpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAxMjBweCk7XFxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDcwcHggc29saWQgeWVsbG93O1xcbn1cXG5cXG4uY2hlYXRMaWdodG5pbmc6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNXB4LCA2MHB4KTtcXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNzBweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hlYXRMaWdodG5pbmcge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDE1ZGVnKTtcXG4gIH1cXG4gIDUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsIC0xNXB4KSByb3RhdGUoMjVkZWcpO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMCkgcm90YXRlKC0xNWRlZyk7XFxuICB9XFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGVhdFNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDIzMiwgMTc2KTtcXG4gIHdpZHRoOiAzMTBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDE1NXB4KTtcXG4gIG1hcmdpbjogLTI1MHB4IDAgMCAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIC4yNSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIC4yNSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIC4yNSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY2hlYXRTZXQ6dGFyZ2V0IHtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2NoZWF0U2V0QnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDclIDI1JTtcXG59XFxuXFxuI3VzZXJCeUNoZWF0IHtcXG5cXHRwYWRkaW5nOiAzcHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0d2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jY2hlYXRRdWVzdGlvbiB7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2hlYXRBbnN3ZXJXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiDQodGC0LjQu9C4INC00LvRjyDQvdC10LDQutGC0LjQstC90L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwICovXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDMwMHB4KTtcXG4gICAgbWFyZ2luOiAtMjUwcHggMCAwIC00MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsMCwwLC4yNSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwwLDAsLjI1KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLDAsMCwuMjUpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyog0JDQutGC0LjQstCw0YbQuNGPINC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwINCyINGB0L7RgdGC0L7Rj9C90LjQuCA6dGFyZ2V0ICovXFxuLm1vZGFsOnRhcmdldCB7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG59XFxuLmZvb3RlciB7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcbi5jYXN0cywgLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLmNhc3RzIHtcXG4gICAgICAgIG1hcmdpbjo4MHB4IGF1dG87XFxuICAgICAgICB3aWR0aDo0MDBweDtcXG59XFxuaDIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5idG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVPdmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbGVmdDogY2FsYyg1MCUgKyAzMDBweCk7XFxuICBtYXJnaW46IC0yNTBweCAwIDAgLTQwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwwLDAsLjI1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwwLDAsLjI1KTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwwLDAsLjI1KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5nYW1lT3ZlclRleHQge1xcbiAgZm9udC1zaXplOiA4ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbmltYXRpb24tbmFtZTogZ2FtZU92ZXJUZXh0O1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdhbWVPdmVyVGV4dCB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiBsaW1lO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggZ3JlZW47XFxuICB9XFxuICAxMDAlIHtcXG4gICAgY29sb3I6IGxpbWU7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG5cXG4ucmVsb2FkIHtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGxlZnQ6IDQzJTtcXG4gIH1cXG5cXG4ucmVsb2FkOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbn1cXG5cXG4ucmVsb2FkIHN2ZyB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuODUsIC0wLjQ4LCAwLjI2LCAwLjY3KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVsb2FkIHN2ZyBwYXRoIHtcXG4gIGZpbGw6ICMxMTE7XFxufVxcbiAgXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhbHRoQmxvY2sge1xcbiAgdHJhbnNpdGlvbjogLjVzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuICBcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFsdGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTkyLCAyMzQsIDIwNSk7XFxuICB3aWR0aDogMzEwcHg7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNTVweCk7XFxuICBtYXJnaW46IC0yNTBweCAwIDAgMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIC4yNSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIC4yNSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIC4yNSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhbHRoOnRhcmdldCB7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtb3JlSGVhcnRzQnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDclIDI1JTtcXG59XFxuXFxuI2hlYWx0aEV4cHJlc3Npb24ge1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI2Fuc3dlckJ5VXNlciB7XFxuXFx0cGFkZGluZzogM3B4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdHdpZHRoOiAyNTBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2tpcFNwZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogcmdiKDE2OSwgMTkwLCAyMzYpO1xcbiAgd2lkdGg6IDMxMHB4O1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTU1cHgpO1xcbiAgbWFyZ2luOiAtMjUwcHggMCAwIDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNraXBTcGVsbDp0YXJnZXQge1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2hlYXRBbnN3ZXJXcmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNza2lwQXR0YWNrLCBcXG4jY2FuY2VsU2tpcCB7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jc2tpcFF1ZXN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXJ0V3JhcHBlciB7XFxuICB3aWR0aDogOTl2dztcXG4gIGhlaWdodDogOTh2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ud3JhcCB7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbmlucHV0IHtcXG4gIGRpc3BsYXk6YmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDAgMTVweCAxMnB4O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMzc3RDZBO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCA0NXB4IHJnYmEoMTAwLDEwMCwxMDAsMC4yKSwgMCAxcHggIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XFxuICB0ZXh0LWluZGVudDogNjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIHRleHQtaW5kZW50OiAxMnB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsMTAwLDEwMCwwLjQpLCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBtYXJnaW46IDAgMCAxNXB4IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ud3JhcC1sYWJlbCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1vdmUtcGVuIHtcXG4gIGFuaW1hdGlvbjogbW92ZS1wZW4gMXMgZWFzZS1pbiBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZS1wZW57XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpIHJvdGF0ZSg2ZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgcm90YXRlKC0zZGVnKTtcXG4gIH1cXG59XFxuXFxuYnV0dG9ue1xcbiAgYmFja2dyb3VuZDojMUFBQjhBO1xcbiAgY29sb3I6I2ZmZjtcXG4gIGJvcmRlcjpub25lO1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBoZWlnaHQ6NjBweDtcXG4gIGZvbnQtc2l6ZToxLjZlbTtcXG4gIHBhZGRpbmc6MCAyZW07XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIHRyYW5zaXRpb246ODAwbXMgZWFzZSBhbGw7XFxuICBvdXRsaW5lOm5vbmU7XFxuICBtYXJnaW46IDE1cHggMCAwIDQwcHg7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQ6I2ZmZjtcXG4gIGNvbG9yOiMxQUFCOEE7XFxufVxcbmJ1dHRvbjpiZWZvcmUsXFxuYnV0dG9uOmFmdGVye1xcbiAgY29udGVudDonJztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjA7XFxuICByaWdodDowO1xcbiAgaGVpZ2h0OjJweDtcXG4gIHdpZHRoOjA7XFxuICBiYWNrZ3JvdW5kOiAjMUFBQjhBO1xcbiAgdHJhbnNpdGlvbjo0MDBtcyBlYXNlIGFsbDtcXG59XFxuYnV0dG9uOmFmdGVye1xcbiAgcmlnaHQ6aW5oZXJpdDtcXG4gIHRvcDppbmhlcml0O1xcbiAgbGVmdDowO1xcbiAgYm90dG9tOjA7XFxufVxcbmJ1dHRvbjpob3ZlcjpiZWZvcmUsYnV0dG9uOmhvdmVyOmFmdGVye1xcbiAgd2lkdGg6MTAwJTtcXG4gIHRyYW5zaXRpb246ODAwbXMgZWFzZSBhbGw7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBTdGFydEdhbWUgZnJvbSAnLi9zY3JlZW5zL3N0YXJ0R2FtZS9zdGFydEdhbWUnO1xuaW1wb3J0IEdhbWVMaXN0ZW5lciBmcm9tICcuL2xpc3RlbmVycy9nYW1lTGlzdGVuZXJzJztcblxuU3RhcnRHYW1lLmRyYXcoKTtcbkdhbWVMaXN0ZW5lci5zZXR1cExpc3RlbmVyKCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9iYXR0bGVmaWVsZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYmF0dGxlZmllbGQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9iYXR0bGVmaWVsZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9iYXR0bGVmaWVsZC50ZW1wbGF0ZSc7XG5pbXBvcnQgJy4vYmF0dGxlZmllbGQuY3NzJztcbmltcG9ydCBnZXRSYW5kb21OYW1lIGZyb20gJy4uLy4uL2ludGVyYWN0aXZlL25hbWVHZW5lcmF0b3IvbmFtZUdlbmVyYXRvcic7XG5pbXBvcnQgZ2V0UmFuZG9tRW5lbXkgZnJvbSAnLi4vLi4vaW50ZXJhY3RpdmUvY2hhcmFjdGVyR2VuZXJhdG9yL2NoYXJhY3RlckdlbmVyYXRvcic7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4uL2hlYWx0aC9oZWFsdGgnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uLy4uL2ludGVyYWN0aXZlL3Njb3JlL3Njb3JlJztcblxuY2xhc3MgQmF0dGxlZmllbGQge1xuICBzdGF0aWMgZHJhdygpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXTtcbiAgICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIHRlbXBsYXRlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVyb05hbWUnKS5pbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlck5hbWUnKS52YWx1ZTtcbiAgICBIZWFsdGguZHJhd01vbnN0ZXIoKTtcbiAgICBCYXR0bGVmaWVsZC5uZXdNb25zdGVyKCk7XG4gIH1cblxuICBzdGF0aWMgbmV3TW9uc3RlcigpIHtcbiAgICBIZWFsdGguZnVsbE1vbnN0ZXJIZWFsdGgoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3RlckJsb2NrIC5wZXJzJykuaW5uZXJIVE1MID0gKCcnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9uc3Rlck5hbWUnKS5pbm5lclRleHQgPSBnZXRSYW5kb21OYW1lKCk7XG4gICAgY29uc3QgZW5lbXlBcnJheSA9IGdldFJhbmRvbUVuZW15KCk7XG4gICAgZm9yIChsZXQgaXRlbSA9IDA7IGl0ZW0gPCBlbmVteUFycmF5Lmxlbmd0aDsgaXRlbSArPSAxKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3RlckJsb2NrPi5wZXJzJykuaW5uZXJIVE1MICs9IGVuZW15QXJyYXlbaXRlbV07XG4gICAgfVxuICAgIFNjb3JlLmNoYW5nZVNjb3JlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlZmllbGQ7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48bWFpbiBjbGFzcz1cImlubGluZVwiPlxuICA8c2VjdGlvbiBjbGFzcz1cImhlcm9CbG9ja1wiPlxuICA8YXJ0aWNsZSBpZD1cImhlcm9OYW1lXCI+PC9hcnRpY2xlPlxuICAgIDxhcnRpY2xlIGNsYXNzPVwicGVyc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJcIj48L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gIDwvc2VjdGlvbj5cblx0PHNlY3Rpb24gY2xhc3M9XCJhbmltYXRpb25cIj48L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwibW9uc3RlckJsb2NrXCI+XG4gICAgPGFydGljbGUgaWQ9XCJtb25zdGVyTmFtZVwiPjwvYXJ0aWNsZT5cbiAgICA8YXJ0aWNsZSBjbGFzcz1cInBlcnNcIj48L2FydGljbGU+XG4gIDwvc2VjdGlvbj5cbjwvbWFpbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYXN0cy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2FzdHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYXN0cy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jYXN0cy50ZW1wbGF0ZSc7XG5pbXBvcnQgJy4vY2FzdHMuY3NzJztcblxuY2xhc3MgQ2FzdHMge1xuICBzdGF0aWMgZHJhdygpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgY29uc3QgdGFyZ2V0ID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhc3RzJylbMF07XG4gICAgdGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhc3RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ1dHRvbiB0aWNrXCI+PC9hPlxuPHAgY2xhc3M9XCJ0aWNrRGVzY3JpcHRpb25cIj7QodC70LDQsdCw0Y8g0LDRgtCw0LrQsC4g0KDQtdGI0LXQvdC40LUg0L/RgNC40LzQtdGA0L7QsiDQvdCwINGB0LvQvtC20LXQvdC40LUg0YfQuNGB0LXQuyDQtNC+IDEwMC48L3A+XG48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGNyb3NzXCI+PC9hPlxuPHAgY2xhc3M9XCJjcm9zc0Rlc2NyaXB0aW9uXCI+0JHQtdGB0L/QvtC70LXQt9C90L7QtSDQt9Cw0LrQu9C40L3QsNC90LjQtSDQv9GA0L7Qv9GD0YHQutCwINGF0L7QtNCwLjwvcD5cbjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidXR0b24gaGVhcnRcIj48L2E+XG48cCBjbGFzcz1cImhlYXJ0RGVzY3JpcHRpb25cIj7QotGD0YIg0LzQvtC20L3QviDQuNGB0YbQtdC70LjRgtGM0YHRjy4g0J/QvtGB0LvQtSDRjdGC0L7Qs9C+INGF0L7QtNCwINC80L7QvdGB0YLRgCDRgtC+0LbQtSDQuNGB0YbQtdC70Y/QtdGC0YHRjy4g0JfQsNC00LDQvdC40Y8g0L3QsCDQstGL0YfQuNGC0LDQvdC40LUuPC9wPlxuPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ1dHRvbiBmbG93ZXJcIj48L2E+XG48cCBjbGFzcz1cImZsb3dlckRlc2NyaXB0aW9uXCI+0KHRjtC00LAg0LLQstC+0LTQuNGC0Ywg0YfQuNGCLdC60L7QtNGLLiBcbmJpZ2JhbmcgLSA1MCDQtdC00LjQvdC40YYg0YPRgNC+0L3QsCDQvNC+0L3RgdGC0YDRgztcbm1lcmN5IC0g0L3QtdC30LDQvNC10LTQu9C40YLQtdC70YzQvdGL0LkgR2FtZSBPdmVyLjwvcD5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9oZWFkZXIuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hlYWRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hlYWRlci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9oZWFkZXIudGVtcGxhdGUnO1xuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuXG5jbGFzcyBIZWFkZXIge1xuICBzdGF0aWMgZHJhdygpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRhcmdldC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48aGVhZGVyIGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cblx0PG5hdj5cblx0XHQ8dWw+XG5cdFx0XHQ8bGk+PGEgaHJlZj1cIi4uLy4uL3NjcmVlbnMvbGFuZGluZ1BhZ2UvaW5kZXguaHRtbFwiPkxhbmRpbmc8L2E+PC9saT5cblx0XHRcdDxsaT48YSBocmVmPVwiI21vZGFsXCI+Q2hvb3NlIHNwZWxsPC9hPjwvbGk+XG5cdFx0XHQ8bGk+PGEgaHJlZj1cIiNcIj5TY29yZWJvYXJkPC9hPjwvbGk+XG5cdFx0XHQ8bGk+PHNwYW4gaWQ9XCJjdXJyZW50U2NvcmVcIj48L3NwYW4+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L25hdj5cbjwvaGVhZGVyPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hlYWx0aC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaGVhbHRoLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaGVhbHRoLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hlYWx0aC50ZW1wbGF0ZSc7XG5pbXBvcnQgJy4vaGVhbHRoLmNzcyc7XG5cbmNsYXNzIEhlYWx0aCB7XG4gIHN0YXRpYyBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcbiAgfVxuXG4gIHN0YXRpYyBkcmF3SGVybygpIHtcbiAgICBjb25zdCB0YXJnZXRIZXJvID0gSGVhbHRoLnBhcmVudCgpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlcm9CbG9jaycpWzBdO1xuICAgIHRhcmdldEhlcm8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGVtcGxhdGUpO1xuICB9XG5cbiAgc3RhdGljIGRyYXdNb25zdGVyKCkge1xuICAgIGNvbnN0IHRhcmdldE1vbnN0ZXIgPSBIZWFsdGgucGFyZW50KCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9uc3RlckJsb2NrJylbMF07XG4gICAgdGFyZ2V0TW9uc3Rlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0ZW1wbGF0ZSk7XG4gIH1cblxuICBzdGF0aWMgZnVsbE1vbnN0ZXJIZWFsdGgoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXJCbG9jaz4jY3VycmVudEhlYWx0aEJhcicpLnZhbHVlID0gMTAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyQmxvY2s+I2N1cnJlbnRIZWFsdGgnKS5pbm5lclRleHQgPSAxMDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhbHRoO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNwYW4gaWQ9XCJjdXJyZW50SGVhbHRoXCI+MTAwPC9zcGFuPlxuPHByb2dyZXNzIGlkPVwiY3VycmVudEhlYWx0aEJhclwiIG1heD1cIjEwMFwiIHZhbHVlPVwiMTAwXCI+PC9wcm9ncmVzcz5cbmA7XG4iLCJmdW5jdGlvbiBnZXRSYW5kb21FbmVteSgpIHtcbiAgY29uc3QgYXJtc0xlZnQgPSBbJzxpbWcgY2xhc3M9XCJhcm1MZWZ0XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2FybXNfbDAucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiYXJtTGVmdFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9hcm1zX2wxLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImFybUxlZnRcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvYXJtc19sMi5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJhcm1MZWZ0XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2FybXNfbDMucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiYXJtTGVmdFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9hcm1zX2w0LnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImFybUxlZnRcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvYXJtc19sNS5wbmdcIiAvPiddO1xuICBjb25zdCBhcm1zUmlnaHQgPSBbJzxpbWcgY2xhc3M9XCJhcm1SaWdodFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9hcm1zX3IwLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImFybVJpZ2h0XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2FybXNfcjEucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiYXJtUmlnaHRcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvYXJtc19yMi5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJhcm1SaWdodFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9hcm1zX3IzLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImFybVJpZ2h0XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2FybXNfcjQucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiYXJtUmlnaHRcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJhcm1SaWdodFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9hcm1zX3I1LnBuZ1wiIC8+J107XG4gIGNvbnN0IGJvZHkgPSBbJzxpbWcgY2xhc3M9XCJib2R5XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2JvZHlfMC5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJib2R5XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2JvZHlfMS5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJib2R5XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2JvZHlfMi5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJib2R5XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2JvZHlfMy5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJib2R5XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2JvZHlfNC5wbmdcIiAvPicsXG4gICAgJzxpbWcgY2xhc3M9XCJib2R5XCIgc3JjPVwiLi4vLi4vaW1nL2VuZW15L2JvZHlfNS5wbmdcIiAvPiddO1xuICBjb25zdCBoZWFkID0gWyc8aW1nIGNsYXNzPVwiaGVhZFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9oZWFkXzAucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiaGVhZFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9oZWFkXzEucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiaGVhZFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9oZWFkXzIucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiaGVhZFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9oZWFkXzMucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiaGVhZFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9oZWFkXzQucG5nXCIgLz4nLFxuICAgICc8aW1nIGNsYXNzPVwiaGVhZFwiIHNyYz1cIi4uLy4uL2ltZy9lbmVteS9oZWFkXzUucG5nXCIgLz4nXTtcbiAgY29uc3QgbGVncyA9IFsnPGltZyBjbGFzcz1cImxlZ3NcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvbGVnc18wLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImxlZ3NcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvbGVnc18xLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImxlZ3NcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvbGVnc18yLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImxlZ3NcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvbGVnc18zLnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImxlZ3NcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvbGVnc180LnBuZ1wiIC8+JyxcbiAgICAnPGltZyBjbGFzcz1cImxlZ3NcIiBzcmM9XCIuLi8uLi9pbWcvZW5lbXkvbGVnc181LnBuZ1wiIC8+J107XG4gIGNvbnN0IGFybXNMZWZ0SXRlbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFybXNMZWZ0Lmxlbmd0aCk7XG4gIGNvbnN0IGFybXNSaWdodEl0ZW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcm1zUmlnaHQubGVuZ3RoKTtcbiAgY29uc3QgYm9keUl0ZW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2R5Lmxlbmd0aCk7XG4gIGNvbnN0IGhlYWRJdGVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVhZC5sZW5ndGgpO1xuICBjb25zdCBsZWdzSXRlbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZ3MubGVuZ3RoKTtcbiAgY29uc3QgaGVhZFZhbHVlID0gaGVhZFtoZWFkSXRlbV07XG4gIGNvbnN0IGJvZHlWYWx1ZSA9IGJvZHlbYm9keUl0ZW1dO1xuICBjb25zdCBhcm1zTGVmdFZhbHVlID0gYXJtc0xlZnRbYXJtc0xlZnRJdGVtXTtcbiAgY29uc3QgYXJtc1JpZ2h0VmFsdWUgPSBhcm1zUmlnaHRbYXJtc1JpZ2h0SXRlbV07XG4gIGNvbnN0IGxlZ3NWYWx1ZSA9IGxlZ3NbbGVnc0l0ZW1dO1xuXG4gIHJldHVybiBbbGVnc1ZhbHVlLCBhcm1zUmlnaHRWYWx1ZSwgYm9keVZhbHVlLCBoZWFkVmFsdWUsIGFybXNMZWZ0VmFsdWVdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21FbmVteTtcbiIsImNsYXNzIGdlbmVyYXRlVGFzayB7XG4gIHN0YXRpYyByYW5kKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cblxuICBzdGF0aWMgZ2V0UmFuZG9tQWRkRXhwcmVzc2lvbihmcm9tLCB0bykge1xuICAgIGNvbnN0IGEgPSBnZW5lcmF0ZVRhc2sucmFuZChmcm9tLCB0byk7XG4gICAgY29uc3QgYiA9IGdlbmVyYXRlVGFzay5yYW5kKGZyb20sIHRvKTtcbiAgICByZXR1cm4gYCR7YX0gKyAke2J9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRSYW5kb21TdWJzdHJFeHByZXNzaW9uKGZyb20sIHRvKSB7XG4gICAgY29uc3QgYSA9IGdlbmVyYXRlVGFzay5yYW5kKHRvIC8gMiwgdG8pO1xuICAgIGNvbnN0IGIgPSBnZW5lcmF0ZVRhc2sucmFuZChmcm9tICsgMSwgdG8gLyAyKTtcbiAgICByZXR1cm4gYCR7YX0gLSAke2J9YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRhc2s7XG4iLCJmdW5jdGlvbiBnZXRSYW5kb21OYW1lKCkge1xuICBjb25zdCBsZWZ0ID0gWyfQo9C20LDRgdC90YvQuScsICfQodC+0L3QvdGL0LknLCAn0KHQvtC/0LvQuNCy0YvQuScsICfQk9C70YPQv9GL0LknLCAn0JPQvtC70L7QtNC90YvQuSddO1xuICBjb25zdCBtaWRkbGUgPSBbJ9Ce0LPRgCcsICfQk9C90L7QvCcsICfQk9C+0LHQu9C40L0nLCAn0JrQtdC90YLQsNCy0YAnLCAn0JzQsNC60LDQutCwJ107XG4gIGNvbnN0IHJpZ2h0ID0gWyfQotC+0LwnLCAn0JTQttC10YDRgNC4JywgJ9Ci0LjQvNC+0L0nLCAn0JzQsNC50LrQuycsICfQn9C10LnQvSddO1xuICBjb25zdCBsZWZ0SXRlbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZnQubGVuZ3RoKTtcbiAgY29uc3QgbWlkZGxlSXRlbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJpZ2h0Lmxlbmd0aCk7XG4gIGNvbnN0IHJpZ2h0SXRlbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJpZ2h0Lmxlbmd0aCk7XG4gIGNvbnN0IGxlZnRWYWx1ZSA9IGxlZnRbbGVmdEl0ZW1dO1xuICBjb25zdCBtaWRkbGVWYWx1ZSA9IG1pZGRsZVttaWRkbGVJdGVtXTtcbiAgY29uc3QgcmlnaHRWYWx1ZSA9IHJpZ2h0W3JpZ2h0SXRlbV07XG5cbiAgcmV0dXJuIGAke2xlZnRWYWx1ZX0gJHttaWRkbGVWYWx1ZX0gJHtyaWdodFZhbHVlfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbU5hbWU7XG4iLCJsZXQgc2NvcmU7XG5cbmNsYXNzIFNjb3JlIHtcbiAgc3RhdGljIHN0YXJ0U2NvcmUoKSB7XG4gICAgc2NvcmUgPSAtMTtcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VTY29yZSgpIHtcbiAgICBzY29yZSArPSAxO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50U2NvcmUnKS5pbm5lclRleHQgPSBgQ3VycmVudCBzY29yZTogJHtzY29yZX1gO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTY29yZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCBDaG9vc2VDYXN0IGZyb20gJy4uL3NjcmVlbnMvY2hvb3NlQ2FzdC9jaG9vc2VDYXN0JztcbmltcG9ydCBCYXR0bGVmaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi4vY29tcG9uZW50cy9oZWFsdGgvaGVhbHRoJztcbmltcG9ydCBDYXN0cyBmcm9tICcuLi9jb21wb25lbnRzL2Nhc3RzL2Nhc3RzJztcblxuY2xhc3MgR2FtZUxpc3RlbmVyIHtcbiAgc3RhdGljIHN0YXJ0QXBwKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydFdyYXBwZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIEhlYWRlci5kcmF3KCk7XG4gICAgQmF0dGxlZmllbGQuZHJhdygpO1xuICAgIENob29zZUNhc3QuZHJhdygpO1xuICAgIEhlYWx0aC5kcmF3SGVybygpO1xuICAgIENhc3RzLmRyYXcoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cExpc3RlbmVyKCkge1xuICAgIGNvbnN0IG1hdGhCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VuZFVzZXJOYW1lJyk7XG4gICAgbWF0aEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdhbWVMaXN0ZW5lci5jaGVja05hbWUsIGZhbHNlKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja05hbWUoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyTmFtZScpLnZhbHVlICE9PSAnJykge1xuICAgICAgR2FtZUxpc3RlbmVyLnN0YXJ0QXBwKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVMaXN0ZW5lcjtcbiIsImltcG9ydCBBdHRhY2tNYXRoIGZyb20gJy4uL3NjcmVlbnMvYXR0YWNrTWF0aC9hdHRhY2tNYXRoJztcbmltcG9ydCBNb3JlSGVhbHRoIGZyb20gJy4uL3NjcmVlbnMvbW9yZUhlYWx0aC9tb3JlSGVhbHRoJztcbmltcG9ydCBTa2lwU3BlbGwgZnJvbSAnLi4vc2NyZWVucy9za2lwU3BlbGwvc2tpcFNwZWxsJztcbmltcG9ydCBDaGVhdFNldCBmcm9tICcuLi9zY3JlZW5zL2NoZWF0U2V0L2NoZWF0U2V0JztcblxuZnVuY3Rpb24gbWFrZUF0dGFja01hdGgoKSB7XG4gIGZ1bmN0aW9uIGdldEF0dGFjaygpIHtcbiAgICBjb25zdCBjdXJyZW50RXhwcmVzc2lvbiA9IGV2YWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hdGhFeHByZXNzaW9uJykuaW5uZXJUZXh0KTtcbiAgICBjb25zdCBhbnN3ZXJCeVVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0aCBpbnB1dCNhbnN3ZXJCeVVzZXInKS52YWx1ZTtcbiAgICBBdHRhY2tNYXRoLmhpZGUoKTtcbiAgICBpZiAoK2N1cnJlbnRFeHByZXNzaW9uID09PSArYW5zd2VyQnlVc2VyKSB7XG4gICAgICBBdHRhY2tNYXRoLmhlcm9BdHRhY2soMTUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBdHRhY2tNYXRoLm1vbnN0ZXJBdHRhY2soMTApO1xuICAgIH1cbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNrTWF0aCcpLm9uY2xpY2sgPSBnZXRBdHRhY2s7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUhlYWx0aCgpIHtcbiAgZnVuY3Rpb24gZ2V0SGVhbHRoKCkge1xuICAgIGNvbnN0IGN1cnJlbnRFeHByZXNzaW9uID0gZXZhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhbHRoRXhwcmVzc2lvbicpLmlubmVyVGV4dCk7XG4gICAgY29uc3QgYW5zd2VyQnlVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWx0aCBpbnB1dCNhbnN3ZXJCeVVzZXInKS52YWx1ZTtcbiAgICBpZiAoK2N1cnJlbnRFeHByZXNzaW9uID09PSArYW5zd2VyQnlVc2VyKSB7XG4gICAgICBNb3JlSGVhbHRoLmNoYW5nZUhlcm9IZWFsdGgoMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBNb3JlSGVhbHRoLmhpZGUoKTtcbiAgICAgIE1vcmVIZWFsdGgubW9uc3RlckF0dGFjaygxMCk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3JlSGVhcnRzQnV0dG9uJykub25jbGljayA9IGdldEhlYWx0aDtcbn1cblxuZnVuY3Rpb24gc2hvd0Nhc3QoKSB7XG4gIGZ1bmN0aW9uIGdldFNwZWxsKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYnV0dG9uLnRpY2snKSkge1xuICAgICAgQXR0YWNrTWF0aC5kcmF3KCk7XG4gICAgICBtYWtlQXR0YWNrTWF0aCgpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYnV0dG9uLmhlYXJ0JykpIHtcbiAgICAgIE1vcmVIZWFsdGguZHJhdygpO1xuICAgICAgY2hhbmdlSGVhbHRoKCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYS5idXR0b24uY3Jvc3MnKSkge1xuICAgICAgU2tpcFNwZWxsLmRyYXcoKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhLmJ1dHRvbi5mbG93ZXInKSkge1xuICAgICAgQ2hlYXRTZXQuZHJhdygpO1xuICAgICAgQ2hlYXRTZXQubGlzdGVuKCk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpLm9uY2xpY2sgPSBnZXRTcGVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0Nhc3Q7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hdHRhY2tBbmltYXRpb24uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2F0dGFja0FuaW1hdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2F0dGFja0FuaW1hdGlvbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hdHRhY2tNYXRoLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hdHRhY2tNYXRoLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXR0YWNrTWF0aC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hdHRhY2tNYXRoLnRlbXBsYXRlJztcbmltcG9ydCAnLi9hdHRhY2tBbmltYXRpb24uY3NzJztcbmltcG9ydCAnLi9hdHRhY2tNYXRoLmNzcyc7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi4vZ2FtZU92ZXIvZ2FtZU92ZXInO1xuaW1wb3J0IGdldFRhc2sgZnJvbSAnLi4vLi4vaW50ZXJhY3RpdmUvbWF0aEdlbmVyYXRvci9tYXRoR2VuZXJhdG9yJztcbmltcG9ydCBCYXR0bGVmaWVsZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkJztcblxuY2xhc3MgQXR0YWNrTWF0aCB7XG4gIHN0YXRpYyBkcmF3KCkge1xuICAgIGNvbnN0IG1hdGhNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXRoJyk7XG4gICAgaWYgKG1hdGhNb2RhbCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuICAgICAgdGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBdHRhY2tNYXRoLnNob3coKTtcbiAgICB9XG4gICAgQXR0YWNrTWF0aC5zZXRFeHByZXNzaW9uKCk7XG4gIH1cblxuICBzdGF0aWMgc2V0RXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gZ2V0VGFzay5nZXRSYW5kb21BZGRFeHByZXNzaW9uKDEsIDc1KTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF0aEV4cHJlc3Npb24nKTtcbiAgICB0YXJnZXQuaW5uZXJUZXh0ID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBzaG93KCkge1xuICAgIGNvbnN0IG1hdGhNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXRoJyk7XG4gICAgbWF0aE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBoZXJvQXR0YWNrKGRhbWFnZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyQmxvY2s+I2N1cnJlbnRIZWFsdGhCYXInKS52YWx1ZSAtPSBkYW1hZ2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXJCbG9jaz4jY3VycmVudEhlYWx0aCcpLmlubmVyVGV4dCAtPSBkYW1hZ2U7XG4gICAgQXR0YWNrTWF0aC5hdHRhY2tBbmltYXRpb24oJ21vbnN0ZXJCbG9jaycpO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3RlckJsb2NrPiNjdXJyZW50SGVhbHRoJykuaW5uZXJUZXh0IDw9IDApIHtcbiAgICAgIEJhdHRsZWZpZWxkLm5ld01vbnN0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dChBdHRhY2tNYXRoLm1vbnN0ZXJBdHRhY2suYmluZCh0aGlzLCBkYW1hZ2UgLSA1KSwgMzAwMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1vbnN0ZXJBdHRhY2soZGFtYWdlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9CbG9jaz4jY3VycmVudEhlYWx0aEJhcicpLnZhbHVlIC09IGRhbWFnZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb0Jsb2NrPiNjdXJyZW50SGVhbHRoJykuaW5uZXJUZXh0IC09IGRhbWFnZTtcbiAgICBBdHRhY2tNYXRoLmF0dGFja0FuaW1hdGlvbignaGVyb0Jsb2NrJyk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvQmxvY2s+I2N1cnJlbnRIZWFsdGgnKS5pbm5lclRleHQgPD0gMCkge1xuICAgICAgR2FtZU92ZXIuZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRhY2tBbmltYXRpb24odGFyZ2V0QmxvY2spIHtcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vLi4vYXVkaW8vYXR0YWNrLm1wMycpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBmdW5jdGlvbiBzZXRDbGFzcyhjbGFzc2VzKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRCbG9ja30+LnBlcnNgKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3Nlcyk7XG4gICAgfVxuICAgIHNldENsYXNzKCdwZXJzIGF0dGFja0Jsb2NrJyk7XG4gICAgc2V0VGltZW91dChzZXRDbGFzcy5iaW5kKHRoaXMsICdwZXJzJyksIDE1MDApO1xuICB9XG5cbiAgc3RhdGljIGhpZGUoKSB7XG4gICAgY29uc3QgbWF0aE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hdGgnKTtcbiAgICBtYXRoTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFja01hdGg7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cIm1hdGhcIiBpZD1cIm1hdGhcIj5cbiAgPHNwYW4gaWQ9XCJtYXRoRXhwcmVzc2lvblwiPjIrMjwvc3Bhbj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFuc3dlckJ5VXNlclwiIGlkPVwiYW5zd2VyQnlVc2VyXCI+XG4gIDxidXR0b24gaWQ9XCJhdHRhY2tNYXRoXCI+QXR0YWNrITwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuYDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NoZWF0QW5pbWF0aW9uLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jaGVhdEFuaW1hdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NoZWF0QW5pbWF0aW9uLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NoZWF0U2V0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jaGVhdFNldC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NoZWF0U2V0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NoZWF0U2V0LnRlbXBsYXRlJztcbmltcG9ydCAnLi9jaGVhdFNldC5jc3MnO1xuaW1wb3J0ICcuL2NoZWF0QW5pbWF0aW9uLmNzcyc7XG5pbXBvcnQgQmF0dGxlZmllbGQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXR0bGVmaWVsZC9iYXR0bGVmaWVsZCc7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi4vZ2FtZU92ZXIvZ2FtZU92ZXInO1xuXG5jbGFzcyBDaGVhdFNldCB7XG4gIHN0YXRpYyBkcmF3KCkge1xuICAgIGNvbnN0IGNoZWF0U2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWF0U2V0Jyk7XG4gICAgaWYgKGNoZWF0U2V0ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIENoZWF0U2V0LnNob3coKTtcbiAgICB9XG4gICAgQ2hlYXRTZXQubGlzdGVuKCk7XG4gIH1cblxuICBzdGF0aWMgc2hvdygpIHtcbiAgICBjb25zdCBjaGVhdFNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVhdFNldCcpO1xuICAgIGNoZWF0U2V0LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBsaXN0ZW4oKSB7XG4gICAgZnVuY3Rpb24gY2hlYXRNYXAoKSB7XG4gICAgICBjb25zdCBjaGVhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyQnlDaGVhdCcpLnZhbHVlO1xuICAgICAgaWYgKGNoZWF0ID09PSAnYmlnYmFuZycpIHtcbiAgICAgICAgQ2hlYXRTZXQuaGVyb0F0dGFjayg1MCk7XG4gICAgICAgIENoZWF0U2V0LmhpZGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlYXQgPT09ICdtZXJjeScpIHtcbiAgICAgICAgR2FtZU92ZXIuZHJhdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ2hlYXRTZXQuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlYXRTZXRCdXR0b24nKS5vbmNsaWNrID0gY2hlYXRNYXA7XG4gIH1cblxuICBzdGF0aWMgaGVyb0F0dGFjayhkYW1hZ2UpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3RlckJsb2NrPiNjdXJyZW50SGVhbHRoQmFyJykudmFsdWUgLT0gZGFtYWdlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyQmxvY2s+I2N1cnJlbnRIZWFsdGgnKS5pbm5lclRleHQgLT0gZGFtYWdlO1xuICAgIENoZWF0U2V0LmF0dGFja0FuaW1hdGlvbigpO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3RlckJsb2NrPiNjdXJyZW50SGVhbHRoJykuaW5uZXJUZXh0IDw9IDApIHtcbiAgICAgIEJhdHRsZWZpZWxkLm5ld01vbnN0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0YWNrQW5pbWF0aW9uKCkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi8uLi9hdWRpby9jaGVhdC5tcDMnKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3Nlcykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXJCbG9jaz4ucGVycycpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzKTtcbiAgICB9XG4gICAgc2V0Q2xhc3MoJ3BlcnMgY2hlYXRMaWdodG5pbmcnKTtcbiAgICBzZXRUaW1lb3V0KHNldENsYXNzLmJpbmQodGhpcywgJ3BlcnMnKSwgMTUwMCk7XG4gIH1cblxuICBzdGF0aWMgaGlkZSgpIHtcbiAgICBjb25zdCBjaGVhdFNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVhdFNldCcpO1xuICAgIGNoZWF0U2V0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVhdFNldDtcbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwiY2hlYXRTZXRcIiBpZD1cImNoZWF0U2V0XCI+XG4gIDxzcGFuIGlkPVwiY2hlYXRRdWVzdGlvblwiPkVudGVyIGNoZWF0PC9zcGFuPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlckJ5Q2hlYXRcIiBpZD1cInVzZXJCeUNoZWF0XCI+XG4gIDxidXR0b24gaWQ9XCJjaGVhdFNldEJ1dHRvblwiPkFwcGx5PC9idXR0b24+XG48L3NlY3Rpb24+XG5gO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2hvb3NlQ2FzdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2hvb3NlQ2FzdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Nob29zZUNhc3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2hvb3NlQ2FzdC50ZW1wbGF0ZSc7XG5pbXBvcnQgJy4vY2hvb3NlQ2FzdC5jc3MnO1xuaW1wb3J0IHNob3dDYXN0IGZyb20gJy4uLy4uL2xpc3RlbmVycy9zcGVsbExpc3RlbmVycyc7XG5cblxuY2xhc3MgQ2hvb3NlQ2FzdCB7XG4gIHN0YXRpYyBkcmF3KCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcbiAgICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG4gICAgc2hvd0Nhc3QoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaG9vc2VDYXN0O1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJtb2RhbFwiIGlkPVwibW9kYWxcIj5cbiAgPGFydGljbGUgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8aDI+0JLRi9Cx0L7RgCDQt9Cw0LrQu9C40L3QsNC90LjRjzwvaDI+XG4gIDwvYXJ0aWNsZT5cbiAgPGFydGljbGUgY2xhc3M9XCJjYXN0c1wiPjwvYXJ0aWNsZT5cbiAgPGFydGljbGUgY2xhc3M9XCJmb290ZXJcIj5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuXCI+0JfQsNC60YDRi9GC0Yw8L2E+XG4gIDwvYXJ0aWNsZT5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nYW1lT3Zlci5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZU92ZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nYW1lT3Zlci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lT3Zlci50ZW1wbGF0ZSc7XG5pbXBvcnQgJy4vZ2FtZU92ZXIuY3NzJztcbmltcG9ydCBTdGFydEdhbWUgZnJvbSAnLi4vc3RhcnRHYW1lL3N0YXJ0R2FtZSc7XG5pbXBvcnQgR2FtZUxpc3RlbmVyIGZyb20gJy4uLy4uL2xpc3RlbmVycy9nYW1lTGlzdGVuZXJzJztcblxuY2xhc3MgR2FtZU92ZXIge1xuICBzdGF0aWMgZHJhdygpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgdGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICAgIEdhbWVPdmVyLnNldHVwTGlzdG5lcigpO1xuICB9XG5cbiAgc3RhdGljIHNldHVwTGlzdG5lcigpIHtcbiAgICBmdW5jdGlvbiByZWxvYWRHYW1lKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIFN0YXJ0R2FtZS5kcmF3KCk7XG4gICAgICBHYW1lTGlzdGVuZXIuc2V0dXBMaXN0ZW5lcigpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVsb2FkJykub25jbGljayA9IHJlbG9hZEdhbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZU92ZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cImdhbWVPdmVyXCIgaWQ9XCJnYW1lT3ZlclwiPlxuICA8cCBjbGFzcz1cImdhbWVPdmVyVGV4dFwiPkdBTUUgT1ZFUjwvcD5cbiAgPGRpdiBjbGFzcz1cInJlbG9hZFwiPlxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCIgdmlld0JveD1cIjAgMCA0MCA0MFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA0MCA0MFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjAxMSAyMGMwLTAuMDAyIDAtMC4wMDMgMC0wLjAwNSAwLTQuNDIxIDMuNTc4LTguMDA1IDcuOTkxLTguMDA1IDIuNjgzIDAgNS4wNTEgMS4zMjkgNi41IDMuMzYxbDEuMjYtMS42NDRjLTEuODM0LTIuMjU0LTQuNjI3LTMuNjk2LTcuNzYtMy42OTYgLTUuNTE5IDAtOS45OTQgNC40NzEtMTAuMDAxIDkuOTg5SDguMDEzbDMuMDE4IDQuMDEzTDEzLjk4NyAyMEgxMi4wMTF6TTMyIDIwbC0yLjk2OS0zLjk4NUwyNiAyMGgxLjk5MmMtMC4wMDMgNC40MTktMy41NzkgOC4wMDEtNy45OSA4LjAwMSAtMi43MTYgMC01LjExMS0xLjM2LTYuNTU1LTMuNDM1bC0xLjI4NCAxLjY0NGMxLjgzMiAyLjMxNCA0LjY2IDMuODAzIDcuODQgMy44MDMgNS41MjQgMCAxMC4wMDEtNC40NzggMTAuMDAxLTEwLjAwMSAwLTAuMDA0LTAuMDAxLTAuMDA4LTAuMDAxLTAuMDEySDMyelwiLz5cbiAgPC9zdmc+XG48L2Rpdj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9oZWFsdGhBbmltYXRpb24uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hlYWx0aEFuaW1hdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hlYWx0aEFuaW1hdGlvbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb3JlSGVhbHRoLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb3JlSGVhbHRoLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9yZUhlYWx0aC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb3JlSGVhbHRoLnRlbXBsYXRlJztcbmltcG9ydCAnLi9tb3JlSGVhbHRoLmNzcyc7XG5pbXBvcnQgJy4vaGVhbHRoQW5pbWF0aW9uLmNzcyc7XG5pbXBvcnQgZ2V0VGFzayBmcm9tICcuLi8uLi9pbnRlcmFjdGl2ZS9tYXRoR2VuZXJhdG9yL21hdGhHZW5lcmF0b3InO1xuXG5jbGFzcyBNb3JlSGVhbHRoIHtcbiAgc3RhdGljIGRyYXcoKSB7XG4gICAgY29uc3QgbWF0aE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWx0aCcpO1xuICAgIGlmIChtYXRoTW9kYWwgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcbiAgICAgIHRhcmdldC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTW9yZUhlYWx0aC5zaG93KCk7XG4gICAgfVxuICAgIE1vcmVIZWFsdGguc2V0RXhwcmVzc2lvbigpO1xuICB9XG5cbiAgc3RhdGljIHNldEV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGdldFRhc2suZ2V0UmFuZG9tU3Vic3RyRXhwcmVzc2lvbigxLCAxMDApO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFsdGhFeHByZXNzaW9uJyk7XG4gICAgdGFyZ2V0LmlubmVyVGV4dCA9IGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgc2hvdygpIHtcbiAgICBjb25zdCBtYXRoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhbHRoJyk7XG4gICAgbWF0aE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VIZXJvSGVhbHRoKGtpdCkge1xuICAgIE1vcmVIZWFsdGguaGlkZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvQmxvY2s+I2N1cnJlbnRIZWFsdGhCYXInKS52YWx1ZSAtPSAta2l0O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvQmxvY2s+I2N1cnJlbnRIZWFsdGgnKS5pbm5lclRleHQgLT0gLWtpdDtcbiAgICBNb3JlSGVhbHRoLmhlYWx0aEFuaW1hdGlvbignaGVyb0Jsb2NrJyk7XG4gICAgTW9yZUhlYWx0aC5tb25zdGVyQXR0YWNrKGtpdCk7XG4gIH1cblxuICBzdGF0aWMgbW9uc3RlckF0dGFjayhraXQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3RlckJsb2NrPiNjdXJyZW50SGVhbHRoQmFyJykudmFsdWUgLT0gLWtpdCAvIDI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXJCbG9jaz4jY3VycmVudEhlYWx0aCcpLmlubmVyVGV4dCAtPSAta2l0IC8gMjtcbiAgICBNb3JlSGVhbHRoLmhlYWx0aEFuaW1hdGlvbignbW9uc3RlckJsb2NrJyk7XG4gIH1cblxuICBzdGF0aWMgaGVhbHRoQW5pbWF0aW9uKHRhcmdldEJsb2NrKSB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4uLy4uL2F1ZGlvL2hlYWx0aC5tcDMnKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3Nlcykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFyZ2V0QmxvY2t9Pi5wZXJzYCkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMpO1xuICAgIH1cbiAgICBzZXRDbGFzcygncGVycyBoZWFsdGhCbG9jaycpO1xuICAgIHNldFRpbWVvdXQoc2V0Q2xhc3MuYmluZCh0aGlzLCAncGVycycpLCA1MDApO1xuICB9XG5cblxuICBzdGF0aWMgaGlkZSgpIHtcbiAgICBjb25zdCBtYXRoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhbHRoJyk7XG4gICAgbWF0aE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlSGVhbHRoO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJoZWFsdGhcIiBpZD1cImhlYWx0aFwiPlxuICA8c3BhbiBpZD1cImhlYWx0aEV4cHJlc3Npb25cIj4yKzI8L3NwYW4+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbnN3ZXJCeVVzZXJcIiBpZD1cImFuc3dlckJ5VXNlclwiPlxuICA8YnV0dG9uIGlkPVwibW9yZUhlYXJ0c0J1dHRvblwiPkFwcGx5PC9idXR0b24+XG48L3NlY3Rpb24+XG5gO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2tpcFNwZWxsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9za2lwU3BlbGwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9za2lwU3BlbGwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc2tpcFNwZWxsLnRlbXBsYXRlJztcbmltcG9ydCAnLi9za2lwU3BlbGwuY3NzJztcbmltcG9ydCBBdHRhY2tNYXRoIGZyb20gJy4uL2F0dGFja01hdGgvYXR0YWNrTWF0aCc7XG5cbmNsYXNzIFNraXBTcGVsbCB7XG4gIHN0YXRpYyBkcmF3KCkge1xuICAgIGNvbnN0IHNraXBTcGVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lwU3BlbGwnKTtcbiAgICBpZiAoc2tpcFNwZWxsID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XG4gICAgICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFNraXBTcGVsbC5zaG93KCk7XG4gICAgfVxuICAgIFNraXBTcGVsbC5saXN0ZW4oKTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93KCkge1xuICAgIGNvbnN0IHNraXBTcGVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lwU3BlbGwnKTtcbiAgICBza2lwU3BlbGwuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGxpc3RlbigpIHtcbiAgICBmdW5jdGlvbiBza2lwQ29uZmlybShhbnN3ZXIpIHtcbiAgICAgIGlmIChhbnN3ZXIgPT09ICd5ZXMnKSB7XG4gICAgICAgIEF0dGFja01hdGgubW9uc3RlckF0dGFjayg1KTtcbiAgICAgICAgU2tpcFNwZWxsLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFNraXBTcGVsbC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lwQXR0YWNrJykub25jbGljayA9IHNraXBDb25maXJtLmJpbmQodGhpcywgJ3llcycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxTa2lwJykub25jbGljayA9IHNraXBDb25maXJtLmJpbmQodGhpcywgJ25vJyk7XG4gIH1cblxuICBzdGF0aWMgaGlkZSgpIHtcbiAgICBjb25zdCBza2lwU3BlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpcFNwZWxsJyk7XG4gICAgc2tpcFNwZWxsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lwU3BlbGw7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInNraXBTcGVsbFwiIGlkPVwic2tpcFNwZWxsXCI+XG4gIDxzcGFuIGlkPVwic2tpcFF1ZXN0aW9uXCI+QXJlIHlvdSBzdXJlPzwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImNoZWF0QW5zd2VyV3JhcHBlclwiPlxuICAgIDxidXR0b24gaWQ9XCJza2lwQXR0YWNrXCI+WWVzPC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD1cImNhbmNlbFNraXBcIj5ObzwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmA7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdGFydEdhbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXJ0R2FtZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXJ0R2FtZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9zdGFydEdhbWUudGVtcGxhdGUnO1xuaW1wb3J0ICcuL3N0YXJ0R2FtZS5jc3MnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uLy4uL2ludGVyYWN0aXZlL3Njb3JlL3Njb3JlJztcblxuY2xhc3MgU3RhcnRHYW1lIHtcbiAgc3RhdGljIGRyYXcoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAoJycpO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICAgIFNjb3JlLnN0YXJ0U2NvcmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFydEdhbWU7XG4iLCJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInN0YXJ0V3JhcHBlclwiPlxuICA8ZGl2IGNsYXNzPVwid3JhcCBjZW50ZXIgc3RhcnRHYW1lXCIgaWQ9XCJzdGFydEdhbWVcIj4gXG4gICAgPGRpdiBjbGFzcz1cIndyYXAtbGFiZWxcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyTmFtZVwiPtCS0LLQtdC00LjRgtC1INC40LzRjzwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyTmFtZVwiIHJlcXVpcmVkID5cbiAgICA8YnV0dG9uIGlkPVwic2VuZFVzZXJOYW1lXCI+U3RhcnQgR2FtZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9