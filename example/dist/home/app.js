System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports('default', app);

      function app(){setTimeout(function(){document.querySelector("h1").innerHTML="Is Changed!!",alert("changed");},5e3);}

    })
  };
}));
//# sourceMappingURL=app.js.map
