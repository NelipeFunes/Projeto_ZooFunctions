const data = require('../data/zoo_data');

const { species } = data;

function noParam() {
  const temp = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  const animalsNE = species.filter((specie) => specie.location === 'NE');
  animalsNE.forEach((animal) => temp.NE.push(animal.name));
  const animalsNW = species.filter((specie) => specie.location === 'NW');
  animalsNW.forEach((animal) => temp.NW.push(animal.name));
  const animalsSE = species.filter((specie) => specie.location === 'SE');
  animalsSE.forEach((animal) => temp.SE.push(animal.name));
  const animalsSW = species.filter((specie) => specie.location === 'SW');
  animalsSW.forEach((animal) => temp.SW.push(animal.name));
  return temp;
}
function getAnimalMap(options) {
  if (!options) {
    return noParam();
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
