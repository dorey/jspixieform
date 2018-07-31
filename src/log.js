export var log = (function(){
  var _log = function(...args) {
    console.log.apply(console, args);
    return args[0];
  };
  _log.profileSeconds = function(n=1) {
    console.profile();
    window.setTimeout(function(){
      console.profileEnd();
    }, n * 1000);
  };
  return _log;
})();
window.log = log;
