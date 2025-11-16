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


