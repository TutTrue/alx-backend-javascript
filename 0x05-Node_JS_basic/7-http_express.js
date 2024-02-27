const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', (req, res) => {
  const path = process.argv[2];
  let studentsData = '';
  studentsData += 'This is the list of our students\n';
  countStudents(path)
    .then((data) => {
      studentsData += data;
      res.setHeader('Content-Type', 'text/plain');
      return res.send(studentsData);
    })
    .catch(() => {
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is the list of our students\nCannot load the database');
    });
});
app.listen(1245);
module.exports = app;
