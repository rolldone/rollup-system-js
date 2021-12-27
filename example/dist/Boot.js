System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      /* "Its Killer Feature!", Share Component Viat Boot Wrapper */var components=exports('components', {});var setComponent=exports('setComponent', function(a,b){components[a]=b;});var getComponent=exports('getComponent', function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;return new Promise(/*#__PURE__*/function(){var c=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function d(c){return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(null!=components[a]){d.next=6;break}if(1e4!=b){d.next=3;break}throw new Error("Whoops you forgot create or \"import on laravel or your framework templating import\" this component with this name \"".concat(a,"\" , please check beginning!"));case 3:return b+=1,setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function d(){return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.t0=c,d.next=3,getComponent(a,b);case 3:d.t1=d.sent,(0, d.t0)(d.t1);case 5:case"end":return d.stop();}},d)})),100),d.abrupt("return");case 6:c(components[a]);case 7:case"end":return d.stop();}},d)}));return function(){return c.apply(this,arguments)}}())});var download=exports('download', function(a){return new Promise(/*#__PURE__*/function(){var b=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function c(b){var d;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,System["import"](a);case 2:d=c.sent,b(d);case 4:case"end":return c.stop();}},c)}));return function(){return b.apply(this,arguments)}}())});

    })
  };
}));
//# sourceMappingURL=Boot.js.map
