export default function getListStudentIds(listStudent) {
  const keys = [];
  if (typeof listStudent !== 'object') return keys;
  listStudent.forEach((student) => {
    keys.push(student.id);
  });
  return keys;
}
