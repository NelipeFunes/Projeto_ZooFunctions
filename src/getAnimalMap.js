const data = require('../data/zoo_data');

const { species } = data;

let temp = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function resetTemp() {
  temp = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
}

function noParam() {
  resetTemp();
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

function nameInclude() {
  resetTemp();
  const animalsNE = species.filter((specie) => specie.location === 'NE');
  animalsNE.forEach((animal) => {
    temp.NE[animal.name] = animal.residents.map((each) => each.name);
  });
  const animalsNW = species.filter((specie) => specie.location === 'NW');
  animalsNW.forEach((animal) => {
    temp.NW[animal.name] = animal.residents.map((each) => each.name);
  });
  const animalsSE = species.filter((specie) => specie.location === 'SE');
  animalsSE.forEach((animal) => {
    temp.SE[animal.name] = animal.residents.map((each) => each.name);
  });
  const animalsSW = species.filter((specie) => specie.location === 'SW');
  animalsSW.forEach((animal) => {
    temp.SW[animal.name] = animal.residents.map((each) => each.name);
  });
  return temp;
}

function getAnimalMap(options) {
  if (!options) {
    return noParam();
  }
  if (!options.includeNames) {
    return noParam();
  }
  return nameInclude();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
