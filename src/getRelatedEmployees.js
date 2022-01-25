const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const employe = employees.some((employeer) => employeer.managers.includes(id));
  return employe;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const names = [];
  employees.forEach((employeer) => {
    if (employeer.managers.includes(managerId)) {
      names.push(`${employeer.firstName} ${employeer.lastName}`);
    }
  });
  return names;
}

module.exports = { isManager, getRelatedEmployees };
