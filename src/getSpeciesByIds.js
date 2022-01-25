const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    const animal = species.filter(i => i.id === ids[0]);
    return animal;
    }
  const array = [];
  ids.forEach((id) => array.push(species.find((i) => i.id === id)));
  return array;
}
module.exports = getSpeciesByIds;
