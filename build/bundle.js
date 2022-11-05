
  	(function(modules) {
  	  function require(id) {
  		  const [fn, mapping] = modules[id];

  		  function localRequire(relativePath) {
  			  return require(mapping[relativePath]);
  		  }

  		  const module = { exports: {} };

  		  fn(localRequire, module, module.exports);

  		  return module.exports;
  	  }

  	  require(0);
  	})({0 : [
		  function(require, module, exports) {
			  "use strict";

var _calc = require("./utils/calc.js");
var _greet = require("./utils/greet.js");
var _greet2 = _interopRequireDefault(_greet);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log("20 + 10 = " + (0, _calc.add)(20, 10));
console.log("20 * 10 = " + (0, _calc.multiply)(20, 10));
console.log("20 - 10 = " + (0, _calc.subtract)(20, 10));
console.log("20 / 10 = " + (0, _calc.divide)(20, 10));
console.log(_greet2.default);
		  },
		  {"./utils/calc.js":1,"./utils/greet.js":2}
	  ],
	  1 : [
		  function(require, module, exports) {
			  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
		  },
		  {}
	  ],
	  2 : [
		  function(require, module, exports) {
			  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _name = require("./name.js");
var _name2 = _interopRequireDefault(_name);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = "Hello " + _name2.default;
		  },
		  {"./name.js":3}
	  ],
	  3 : [
		  function(require, module, exports) {
			  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "Swapnadeep";
		  },
		  {}
	  ],
	  })
  	