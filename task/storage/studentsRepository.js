// Students repository

const Student = require('../models/Student');

const students = [
  new Student("1", "John Doe", 20, 2),
  new Student("2", "Jane Smith", 23, 3),
  new Student("3", "Mike Johnson", 18, 2),
];

function generateId() {
  // simple incremental ID
  return String(students.length > 0 ? Number(students[students.length - 1].id) + 1 : 1);
}

/**
 * Add new student
 * @param {string} name
 * @param {number} age
 * @param {string|number} group
 */
function addStudent(name, age, group) {
  const newId = generateId();
  const student = new Student(newId, name, age, group);
  students.push(student);
  return student;
}

/**
 * Remove student by id
 * @param {string|number} id
 */
function removeStudent(id) {
  const index = students.findIndex(s => s.id === String(id));
  if (index === -1) {
    return false;
  }
  students.splice(index, 1);
  return true;
}

/**
 * Find student by id
 * @param {string|number} id
 * @returns {Student|null}
 */
function getStudentById(id) {
  return students.find(s => s.id === String(id)) || null;
}

/**
 * Get students by group number
 * @param {string|number} group
 * @returns {Student[]}
 */
function getStudentsByGroup(group) {
  return students.filter(s => String(s.group) === String(group));
}

/**
 * Return all students
 * @returns {Student[]}
 */
function getAllStudents() {
  return students;
}

/**
 * Calculate average age for all students
 * @returns {number}
 */
function calculateAverageAge() {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, s) => sum + s.age, 0);
  return total / students.length;
}

module.exports = {
  students,
  addStudent,
  removeStudent,
  getStudentById,
  getStudentsByGroup,
  getAllStudents,
  calculateAverageAge
};