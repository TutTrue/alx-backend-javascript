const mocha = require('mocha');
const request = require('request');

describe('GET /', () => {
  it('should return a string', () => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) throw err;
      if (res.statusCode === 200) {
        if (body === 'Welcome to the payment system') {
          return true;
        }
      }
    });
  });
});
