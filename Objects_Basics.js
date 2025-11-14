const student = {
  name: "Kavindu",
  age: 21,
  faculty: "Computing",
  subjects: ["Web Development", "Database Systems", "Programming"],
};

console.log(student.name, ",", student.faculty);

student.year = 2025;
console.log(student);

student.age = 22;
console.log(student);

console.log(student.subjects);
student.subjects.forEach((subject) => {
  console.log(subject);
});
