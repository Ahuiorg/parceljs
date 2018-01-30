// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({10:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],8:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":10}],4:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./main.css":["a85bfa5dca12f31c45e468d9dd693a9e.css","a85bfa5dca12f31c45e468d9dd693a9e.js",9],"_css_loader":8}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = () => {
  console.log('in main.js');
};
},{}],6:[function(require,module,exports) {
console.log('in sort.js');

function swap (i, j, array) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

const testArray = [1, 2, 4, 3, 8, 5, 9, 7, 0, 6];

// 冒泡排序
function popSort(array) {
	let len = array.length, isSwap;
	for (let i = 0; i < len; i++) {
		isSwap = false;
		for (let j = 0; j < len - i -1; j++) {
			(array[j] > array[j + 1]) && (isSwap = true) && (swap(j, j + 1, array))
		}
	}
	return array;
}
console.log(popSort(testArray), 'popSort');

// 选择排序
function selectSort(array) {
	let len = array.len, min=0;
	for (let i = 0; i < len; i++) {
		min = i;
		for (let j = i + 1; j < len; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		if (min !== i) {
			swap(i, min, array);
		}
	}
	return array;
}
console.log(selectSort(testArray), 'selectSort');

// 快速排序
function querySort(array) {
	if (array.length > 1) {
		let len = array.length,
			q = array[0],
			leftArray = [],
			rightArray = [];
		for (let i = 1; i < len; i++) {
			if (array[i] < q) {
				leftArray.push(array[i]);
			} else {
				rightArray.push(array[i]);
			}
		}
		return [].concat(arguments.callee(leftArray), [q], arguments.callee(rightArray));
	} else {
		return array;
	}
}
console.log(querySort(testArray), 'querySort');

},{}],3:[function(require,module,exports) {
console.log('in clone.js');

// 对象深度拷贝
const testObj = {
	name: 'Ange Lee',
	sex: 'man',
	age: '18',
	friends: ['LePenghui', 'LeXingXing', 'LiWenhua'],
	like: 'ski',
	likely: function() {
		console.log(`I like ${this.like}`);
	},
	company: {
		name: 'MT',
		miss: 'lipenghui02',
		time: new Date()
	}
}

// 当被拷贝的内容没有方法，也就没有函数的时候，可以用这个方法
function cloneA(obj) {
	return JSON.parse(JSON.stringify(obj));
}
let ahui = cloneA(testObj);
console.log('json拷贝', ahui);


// 深度拷贝
function deepClone (obj) {
	if (typeof obj !== 'object') {
		return obj;
	}

	let result = obj instanceof Array ? [] : {};
	for (let i in obj) {
		result[i] = arguments.callee(obj[i]);
	}

	return result;
}
let angeli = deepClone(testObj);
console.log('深度拷贝', angeli);

angeli.like = 'baseketball';
angeli.likely();

console.log(testObj.company.time);
console.log(angeli.company.time);








},{}],7:[function(require,module,exports) {
console.log('in countTag');

// 获取所有的tag
let tags = document.getElementsByTagName('*');

// console.log(tags);
console.log(Array.from(tags));
// console.log([].slice.call(tags));


// 统计数组中出现次数的多的项

function countNum (array) {
	let obj = {}, len = array.length;

	for (let i = 0; i < len; i++) {
		if (obj[array[i]]) {
			obj[array[i]]++;
		} else {
			obj[array[i]] = 1;
		}
	}

	console.log(obj);

	let maxChart = '', maxValue = 0;
	for (let k in obj) {
		if (obj[k] > maxValue) {
			maxValue = obj[k];
			maxChart = k;
		}
	}

	return maxChart;
}

console.log(countNum(Array.from(tags)));
},{}],11:[function(require,module,exports) {
function doSomething() {
	console.log(this);
}

let element = document.getElementById('element');
let clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', () => {
	console.log('button');
});

element.addEventListener('click', () => {
	console.log('element');
});

/*
 http 头部信息
 */

let httpHeaderMsg = [
	'accept',
	'accept-charset',
	'accept-encoding',
	'accept-language',
	'host',
	'cookie',
	'user-agent',
	'referer',
	'connection',
]

},{}],2:[function(require,module,exports) {
"use strict";

require("./index.scss");

var _main = require("./main.js");

var _main2 = _interopRequireDefault(_main);

require("./sort.js");

require("./clone.js");

require("./countTag.js");

require("./base.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('来自于script的问候：新年快乐！！！');

// console.log(([][[]]+[])[+!![]]+([]+{})[!+[]+!![]]);

// console.log((!(~+[])+{})[--[~+""][+[]]*[~+[]] + ~~!+[]]+({}+[])[[~!+[]]*~+[]]);

(0, _main2.default)();
},{"./index.scss":4,"./main.js":5,"./sort.js":6,"./clone.js":3,"./countTag.js":7,"./base.js":11}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':56468/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])