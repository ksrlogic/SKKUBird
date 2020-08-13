webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "비내리는~"
    },
    content: "첫 번째 게시글 #해시태그 ###익스프레스",
    Images: [{
      src: "/profile.PNG"
    }, {
      src: "https://picsum.photos/seed/picsum/200/300"
    }, {
      src: "https://picsum.photos/seed/picsum/200/300"
    }],
    Comments: [{
      User: {
        nickname: "nero"
      },
      content: "우와 !!"
    }, {
      User: {
        nickname: "hero"
      },
      content: "멋지다!"
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  // ADD POST
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  // ADD COMMENT
  addCommentDone: false,
  addCommentError: null
};

var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "KSR"
    },
    Images: [],
    Comments: []
  };
};

var addPostAction = function addPostAction(data) {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
    data: data
  };
};
var addCommentAction = function addCommentAction() {
  return {
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostDone: true,
        addPostLoading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostDone: false,
        addPostLoading: false,
        addPostError: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: true,
        mainPosts: []
      });

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addPostError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9mb3JtYXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2J1aWxkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImRhdGEiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDYTtBQUNiLGlCQUFpQixtQkFBTyxDQUFDLHdEQUFhOzs7Ozs7Ozs7Ozs7O0FDRHpCOztBQUViLHFCQUFxQixtQkFBTyxDQUFDLHdGQUEyQjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNB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QUFFLElBSGQ7QUFJQ0Qsc0JBQWMsRUFBRTtBQUpqQjs7QUFNRCxTQUFLbUIseURBQUw7QUFDQyw2Q0FDSUgsS0FESjtBQUVDZixtQkFBVyxFQUFFLEtBRmQ7QUFHQ0Qsc0JBQWMsRUFBRSxLQUhqQjtBQUlDRSxvQkFBWSxFQUFFZSxNQUFNLENBQUNHO0FBSnRCOztBQU1ELFNBQUtOLDREQUFMO0FBQ0MsNkNBQ0lFLEtBREo7QUFFQ2IseUJBQWlCLEVBQUU7QUFGcEI7O0FBSUQsU0FBS2tCLDREQUFMO0FBQ0MsNkNBQ0lMLEtBREo7QUFFQ2IseUJBQWlCLEVBQUUsS0FGcEI7QUFHQ0Msc0JBQWMsRUFBRSxJQUhqQjtBQUlDYixpQkFBUyxFQUFFO0FBSlo7O0FBTUQsU0FBSytCLDREQUFMO0FBQ0MsNkNBQ0lOLEtBREo7QUFFQ2IseUJBQWlCLEVBQUUsS0FGcEI7QUFHQ0Qsb0JBQVksRUFBRWUsTUFBTSxDQUFDRztBQUh0Qjs7QUFLRDtBQUNDLGFBQU9KLEtBQVA7QUF2Q0Y7QUF5Q0EsQ0ExQ0Q7O0FBNENlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lY2Y0MTU5ZTliYjI5YmQ1N2VhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIHJlcGxhY2VzIGBmb3JtYXQuanNgIGluIGJ1bmRsZXJzIGxpa2Ugd2VicGFjayBvciBSb2xsdXAsXG4vLyBhY2NvcmRpbmcgdG8gYGJyb3dzZXJgIGNvbmZpZyBpbiBgcGFja2FnZS5qc29uYC5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmFuZG9tLCBhbHBoYWJldCwgc2l6ZSkge1xuICAvLyBXZSBjYW7igJl0IHVzZSBieXRlcyBiaWdnZXIgdGhhbiB0aGUgYWxwaGFiZXQuIFRvIG1ha2UgYnl0ZXMgdmFsdWVzIGNsb3NlclxuICAvLyB0byB0aGUgYWxwaGFiZXQsIHdlIGFwcGx5IGJpdG1hc2sgb24gdGhlbS4gV2UgbG9vayBmb3IgdGhlIGNsb3Nlc3RcbiAgLy8gYDIgKiogeCAtIDFgIG51bWJlciwgd2hpY2ggd2lsbCBiZSBiaWdnZXIgdGhhbiBhbHBoYWJldCBzaXplLiBJZiB3ZSBoYXZlXG4gIC8vIDMwIHN5bWJvbHMgaW4gdGhlIGFscGhhYmV0LCB3ZSB3aWxsIHRha2UgMzEgKDAwMDExMTExKS5cbiAgLy8gV2UgZG8gbm90IHVzZSBmYXN0ZXIgTWF0aC5jbHozMiwgYmVjYXVzZSBpdCBpcyBub3QgYXZhaWxhYmxlIGluIGJyb3dzZXJzLlxuICB2YXIgbWFzayA9ICgyIDw8IE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpIC0gMVxuICAvLyBCaXRtYXNrIGlzIG5vdCBhIHBlcmZlY3Qgc29sdXRpb24gKGluIG91ciBleGFtcGxlIGl0IHdpbGwgcGFzcyAzMSBieXRlcyxcbiAgLy8gd2hpY2ggaXMgYmlnZ2VyIHRoYW4gdGhlIGFscGhhYmV0KS4gQXMgYSByZXN1bHQsIHdlIHdpbGwgbmVlZCBtb3JlIGJ5dGVzLFxuICAvLyB0aGFuIElEIHNpemUsIGJlY2F1c2Ugd2Ugd2lsbCByZWZ1c2UgYnl0ZXMgYmlnZ2VyIHRoYW4gdGhlIGFscGhhYmV0LlxuXG4gIC8vIEV2ZXJ5IGhhcmR3YXJlIHJhbmRvbSBnZW5lcmF0b3IgY2FsbCBpcyBjb3N0bHksXG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciBlbnRyb3B5IGNvbGxlY3Rpb24uIFRoaXMgaXMgd2h5IG9mdGVuIGl0IHdpbGxcbiAgLy8gYmUgZmFzdGVyIHRvIGFzayBmb3IgZmV3IGV4dHJhIGJ5dGVzIGluIGFkdmFuY2UsIHRvIGF2b2lkIGFkZGl0aW9uYWwgY2FsbHMuXG5cbiAgLy8gSGVyZSB3ZSBjYWxjdWxhdGUgaG93IG1hbnkgcmFuZG9tIGJ5dGVzIHNob3VsZCB3ZSBjYWxsIGluIGFkdmFuY2UuXG4gIC8vIEl0IGRlcGVuZHMgb24gSUQgbGVuZ3RoLCBtYXNrIC8gYWxwaGFiZXQgc2l6ZSBhbmQgbWFnaWMgbnVtYmVyIDEuNlxuICAvLyAod2hpY2ggd2FzIHNlbGVjdGVkIGFjY29yZGluZyBiZW5jaG1hcmtzKS5cblxuICAvLyAtfmYgPT4gTWF0aC5jZWlsKGYpIGlmIG4gaXMgZmxvYXQgbnVtYmVyXG4gIC8vIC1+aSA9PiBpICsgMSBpZiBuIGlzIGludGVnZXIgbnVtYmVyXG4gIHZhciBzdGVwID0gLX4oMS42ICogbWFzayAqIHNpemUgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHZhciBpZCA9ICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgYnl0ZXMgPSByYW5kb20oc3RlcClcbiAgICAvLyBDb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspYFxuICAgIHZhciBpID0gc3RlcFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIC8vIElmIHJhbmRvbSBieXRlIGlzIGJpZ2dlciB0aGFuIGFscGhhYmV0IGV2ZW4gYWZ0ZXIgYml0bWFzayxcbiAgICAgIC8vIHdlIHJlZnVzZSBpdCBieSBgfHwgJydgLlxuICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbaV0gJiBtYXNrXSB8fCAnJ1xuICAgICAgLy8gTW9yZSBjb21wYWN0IHRoYW4gYGlkLmxlbmd0aCArIDEgPT09IHNpemVgXG4gICAgICBpZiAoaWQubGVuZ3RoID09PSArc2l6ZSkgcmV0dXJuIGlkXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbmZ1bmN0aW9uIGdldCAoKSB7XG4gIHJldHVybiBhbHBoYWJldCB8fCBPUklHSU5BTDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0OiBnZXQsXG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdlbmVyYXRlID0gcmVxdWlyZSgnLi9nZW5lcmF0ZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTU2Nzc1MjgwMjA2MjtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA3O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZ2VuZXJhdGUodmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZ2VuZXJhdGUoY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZ2VuZXJhdGUoY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGdlbmVyYXRlKHNlY29uZHMpO1xuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciByYW5kb20gPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xudmFyIGZvcm1hdCA9IHJlcXVpcmUoJ25hbm9pZC9mb3JtYXQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGUobnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBmb3JtYXQocmFuZG9tLCBhbHBoYWJldC5nZXQoKSwgMSk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbm9uQWxwaGFiZXRpYyA9IG5ldyBSZWdFeHAoJ1teJyArXG4gICAgICBhbHBoYWJldC5nZXQoKS5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKSArXG4gICAgJ10nKTtcbiAgICByZXR1cm4gIW5vbkFscGhhYmV0aWMudGVzdChpZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxudmFyIHJhbmRvbUJ5dGU7XG5cbmlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgcmFuZG9tQnl0ZSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgdmFyIGJ5dGVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBieXRlcztcbiAgICB9O1xufSBlbHNlIHtcbiAgICByYW5kb21CeXRlID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG4iLCJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRuaWNrbmFtZTogXCLruYTrgrTrpqzripR+XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjIyPsnbXsiqTtlITroIjsiqRcIixcclxuXHRcdFx0SW1hZ2VzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcIi9wcm9maWxlLlBOR1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDBcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRDb21tZW50czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6IFwibmVyb1wiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi7Jqw7JmAICEhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiBcImhlcm9cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuupi+yngOuLpCFcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8gQUREIFBPU1RcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8gQUREIENPTU1FTlRcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG5cdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiBcIktTUlwiLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cdFx0XHRcdGFkZFBvc3REb25lOiB0cnVlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtYWluUG9zdHM6IFtdLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9