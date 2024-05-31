const { NodeVM } = require('vm2-3-9-19');
const axios = require('axios');

const vm = new NodeVM({
    console: 'inherit',
    sandbox: { axios },
    require: {
        external: true,  // 允许加载外部模块
        mock: {
            console: console  // 允许在沙箱内使用 console
        }
    }
});

let code = `
console.log('Starting request...');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('Data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
`;

vm.run(code);
