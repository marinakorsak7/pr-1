// JSON storage (save / load)

const fs = require('fs');
const path = require('path');
const Student = require('../models/Student');
const { students } = require('./studentsRepository');

function saveToJSON(data, filePath = path.join(__dirname, 'students.json')) {
  const jsonString = JSON.stringify(data, null, 2);

  fs.writeFileSync(filePath, jsonString, { encoding: 'utf-8' });
  return true;
}

function loadJSON(filePath = path.join(__dirname, 'students.json')) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const jsonString = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const parsed = JSON.parse(jsonString);

  // Convert plain objects into Student instances
  return parsed.map(st => new Student(st.id, st.name, st.age, st.group));
}

module.exports = {
  saveToJSON,
  loadJSON
};