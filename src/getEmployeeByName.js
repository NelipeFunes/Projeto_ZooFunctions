const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const objEmp = {};
  if (typeof employeeName === 'undefined') return objEmp;
  const firstName = employees.find((employee) => employee.firstName === employeeName);
  const lastName = employees.find((employee) => employee.lastName === employeeName);
  return firstName || lastName;
}

module.exports = getEmployeeByName;
