const students = [
  { name: "An", age: 18, score: 8 },
  { name: "Bình", age: 17, score: 6 },
  { name: "Chi", age: 18, score: 9 },
];

function getExcellentStudents(students) {
  return students.filter(student => student.score >= 8);
}

console.log(getExcellentStudents(students));
// [{ name: "An", age: 18, score: 8 }, { name: "Chi", age: 18, score: 9 }]
