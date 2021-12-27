/* Overriding createSCript add versioning */
var version = document.querySelector('script[type="systemjs-importmap"]').getAttribute('version');
System.__proto__.createScript = function (url) {
  version = version || (new Date()).getMilliseconds();
  const script = document.createElement('script');
  script.charset = 'utf-8';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = url+'?v='+version;
  return script;
};