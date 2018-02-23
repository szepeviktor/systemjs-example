(function(){
  'use strict';

  module.exports = new Promise(function(resolve, reject){
    function retest(){/in/.test(document.readyState) ? setTimeout(retest,9) : resolve()}
    if (/in/.test(document.readyState))
      document.addEventListener ? document.addEventListener('DOMContentLoaded',resolve) : restest();
    else
      resolve();
  });
}());
