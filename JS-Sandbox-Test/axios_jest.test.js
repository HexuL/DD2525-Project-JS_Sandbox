const { NodeVM } = require('vm2');
const axios = require('axios');

describe('Sandbox Security Test', () => {
  test('axios should fetch data without leaking scope', done => {
    const vm = new NodeVM({
      console: 'inherit',
      sandbox: { axios },
      require: {
        external: true,
        mock: {
            console: console
        }
      }
    });

    vm.run(`
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          console.log('Data:', response.data);
          global.testResult = response.data;
        })
        .catch(error => {
          throw new Error(error);
        });
    `, 'vm.js');

    setTimeout(() => {
      expect(global.testResult).toBeUndefined();
      done();
    }, 500);
  });
});
