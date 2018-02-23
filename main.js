"format es6";

// Transpiled domReady.js
System.registerDynamic('domReady.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  (function () {
    'use strict';

    module.exports = new Promise(function (resolve, reject) {
      function retest() {
        /in/.test(document.readyState) ? setTimeout(retest, 9) : resolve();
      }
      if (/in/.test(document.readyState)) document.addEventListener ? document.addEventListener('DOMContentLoaded', resolve) : restest(); else resolve();
    });
  })();
});

// Loading multiple modules like AMD's require(Array, Function)
// See http://exploringjs.com/es6/ch_modules.html#_loader-method-importing-modules
System.imports = function (deps, callback) {
    Promise.all(deps.map(url => System.import(url))).then(callback);
}

function wordpressPlugin() {
    var wpplugin = document.getElementsByClassName('wpplugin');

    if (!wpplugin.length) {
        return
    }

    System.imports(["jquery-slim", "css"], function ([$, css]) {
        console.log("Chained :)");
    });

    // Action

    System.import("jquery-slim")
    .then(function (J) {
        console.log("jQuery version is " + J.fn.jquery);
        console.log("'$' is " + typeof $);
        console.log("'jQuery' is " + typeof jQuery);
    });

    System.import("style.css!")
    .then(function () {
        console.log("CSS loaded.");
    });
}

console.log("main.js Start");

// 1. While the DOM is loading
// ...

// 2. When DOM is ready
System.import("domReady.js")
.then(function () {
    console.log("DOM is ready!");
    // Our application
    wordpressPlugin();
});

// 3. Delayed execution
// ...
