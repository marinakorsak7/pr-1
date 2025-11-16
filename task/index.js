// // Student Management System

// class Student {
//   /**
//    * @param {string} id
//    * @param {stirng} name
//    * @param {number} age
//    * @param {string} group
//    */
//   constructor(id, name, age, group) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.group = group;
//   }
// }

// const students = [
//   new Student("1", "John Doe", 20, 2),
//   new Student("2", "Jane Smith", 23, 3),
//   new Student("3", "Mike Johnson", 18, 2),
// ];

// function addStudent(name, age, grade) {
//   throw new Error("Method is not yet implemented");
// }

// function removeStudent(id) {
//   throw new Error("Method is not yet implemented");
// }

// function getStudentById(id) {
//   throw new Error("Method is not yet implemented");
// }

// function getStudentsByGroup(group) {
//   throw new Error("Method is not yet implemented");
// }

// function getAllStudents() {
//   throw new Error("Method is not yet implemented");
// }

// function calculateAverageAge() {
//   throw new Error("Method is not yet implemented");
// }

// class Logger {
//   #isVerboseModeEnabled = false;
//   #isQuietModeEnabled = false;

//   constructor(verbose = false, quiet = false) {
//     this.#isVerboseModeEnabled = verbose;
//     this.#isQuietModeEnabled = quiet;
//   }

//   /**
//    * TODO: Implement the log method
//    *
//    * If "verbose" flag is set: log the message + log additional system data from the os module
//    * If "quiet" flag is set: suppress the logging output
//    *
//    *  Example system data to log:
//    * - Current timestamp
//    * - Operating system platform
//    * - Total memory
//    * - Free memory
//    * - CPU model
//    */
//   log(...data) {
//     console.log(...data);
//   }
// }

// function saveToJSON(data, filePath) {
//   throw new Error("Method is not yet implemented");
// }

// function loadJSON(filePath) {
//   throw new Error("Method is not yet implemented");
// }

// Student Management System Entry Point


const {
  addStudent,
  removeStudent,
  getStudentById,
  getStudentsByGroup,
  getAllStudents,
  calculateAverageAge
} = require('./storage/studentsRepository');

const { saveToJSON, loadJSON } = require('./storage/jsonStorage');
const Logger = require('./logger/Logger');

// CLI flags handling
const isVerbose = process.argv.includes('--verbose');
const isQuiet = process.argv.includes('--quiet');

const logger = new Logger(isVerbose, isQuiet);

// Save students to JSON
saveToJSON(getAllStudents());
logger.log("Students saved to JSON file");

// Load students from file
const loadedStudents = loadJSON();
logger.log("Loaded students:", loadedStudents);

// Test calls
logger.log("All students:", getAllStudents());
logger.log("Find by ID:", getStudentById("2"));
logger.log("Find by group:", getStudentsByGroup(2));
logger.log("Average age:", calculateAverageAge());


