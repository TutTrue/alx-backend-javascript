const express = require('express');

const app = express()
  .get('/', (req, res) => res.send('Hello Holberton School!'))
  .listen(1245);
module.exports = app;
