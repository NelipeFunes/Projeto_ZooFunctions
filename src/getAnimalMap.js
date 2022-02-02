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
    temp.NE.push({ [animal.name]: animal.residents.map((each) => each.name) });
  });
  const animalsNW = species.filter((specie) => specie.location === 'NW');
  animalsNW.forEach((animal) => {
    temp.NW.push({ [animal.name]: animal.residents.map((each) => each.name) });
  });
  const animalsSE = species.filter((specie) => specie.location === 'SE');
  animalsSE.forEach((animal) => {
    temp.SE.push({ [animal.name]: animal.residents.map((each) => each.name) });
  });
  const animalsSW = species.filter((specie) => specie.location === 'SW');
  animalsSW.forEach((animal) => {
    temp.SW.push({ [animal.name]: animal.residents.map((each) => each.name) });
  });
  return temp;
}
function sortedName() {
  resetTemp();
  const animalsNE = species.filter((specie) => specie.location === 'NE');
  animalsNE.forEach((animal) => {
    temp.NE.push({ [animal.name]: animal.residents.map((each) => each.name).sort() });
  });
  const animalsNW = species.filter((specie) => specie.location === 'NW');
  animalsNW.forEach((animal) => {
    temp.NW.push({ [animal.name]: animal.residents.map((each) => each.name).sort() });
  });
  const animalsSE = species.filter((specie) => specie.location === 'SE');
  animalsSE.forEach((animal) => {
    temp.SE.push({ [animal.name]: animal.residents.map((each) => each.name).sort() });
  });
  const animalsSW = species.filter((specie) => specie.location === 'SW');
  animalsSW.forEach((animal) => {
    temp.SW.push({ [animal.name]: animal.residents.map((each) => each.name).sort() });
  });
  return temp;
}

function findSex(sex) {
  resetTemp();
  const locals = ['NE', 'NW', 'SE', 'SW'];
  locals.forEach((local) => species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      temp[local].push({ [animal.name]: animal.residents.filter((each) => each.sex === sex)
        .map((each1) => each1.name) });
    }));
  return temp;
}
function findSexSort(sex) {
  resetTemp();
  const locals = ['NE', 'NW', 'SE', 'SW'];
  locals.forEach((local) => species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      temp[local].push({ [animal.name]: animal.residents.filter((each) => each.sex === sex)
        .map((each1) => each1.name).sort() });
    }));
  return temp;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return noParam();
  }
  if (options.sex && options.sorted) {
    return findSexSort(options.sex);
  }
  if (options.sorted) {
    return sortedName();
  }
  if (options.sex) {
    return findSex(options.sex);
  }
  return nameInclude();
}
module.exports = getAnimalMap;
