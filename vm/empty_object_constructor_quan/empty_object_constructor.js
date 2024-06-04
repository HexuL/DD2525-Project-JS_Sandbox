vm = require('vm');
sauce = "laser";

console.log("We see laser if escape is successful")
const code2 = `(this.constructor.constructor("return sauce"))()`;
console.log(vm.runInContext(code2, vm.createContext({}))); 

console.log("In the nextpart, the code is running with a clean object as context")

try {
  console.log(vm.runInContext(code2, vm.createContext(Object.create(null))));
}
catch(e) {
  console.log("I expected this to go wrong with ReferenceError: sauce is not defined\n", e);
}