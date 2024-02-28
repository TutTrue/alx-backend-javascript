import readDatabase from '../utils';

class StudentController {
  static getAllStudents(req, res) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        res.send(data);
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        res.send(data);
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }
}

export default StudentController;
