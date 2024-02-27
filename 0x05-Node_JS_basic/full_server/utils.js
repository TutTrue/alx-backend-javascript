const fs = require('fs');

function readDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile(process.argv[2], 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const fields = {};
        const students = data.split('\n');
        console.log(`Number of students: ${students.length - 1}`);
        students.forEach((student) => {
          const studentData = student.split(',');
          if (fields[studentData[3]]) {
            fields[studentData[3]].push(studentData[0]);
          } else {
            fields[studentData[3]] = [studentData[0]];
          }
        });
        delete fields.field;
        for (const field in fields) {
          if (field) {
            console.log(
              `Number of students in ${field}: ${
                fields[field].length
              }. List: ${fields[field].join(', ')}`,
            );
          }
        }
        resolve();
      }
    });
  });
}

module.exports = readDatabase;
