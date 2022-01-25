const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const result = species.filter((specie) => specie.name === animal)[0].residents
    .every((resident) => resident.age > 7);
  return result;
}
module.exports = getAnimalsOlderThan;
