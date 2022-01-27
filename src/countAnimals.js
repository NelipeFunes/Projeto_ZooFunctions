const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const find = species.find((specie) => specie.name === animal.specie);
  console.log(find);
  if (animal.sex) {
    return find.residents.filter((specie) => specie.sex === animal.sex).length;
  }
  return species.find((specie) => specie.name === animal.specie).residents.length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
