const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);
const nameAnimals = species.map((specie) => specie.name);

function getDays(day) {
  let mensage = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  let animals = species.filter((specie) => specie.availability.includes(day))
    .map((each) => each.name);
  if (day === 'Monday') {
    mensage = 'CLOSED';
    animals = 'The zoo will be closed!';
  }
  return {
    [day]: {
      officeHour: mensage,
      exhibition: animals,
    },
  };
}

function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    return getDays(scheduleTarget);
  }
  if (nameAnimals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return days.reduce((acc, curr) => ({ ...acc, ...getDays(curr) }), {});
}

module.exports = getSchedule;

// codigo feito com base no  do amiguinho KauaASB
// https://github.com/tryber/sd-19-b-project-zoo-functions/blob/kaue-alves-zoo-functions-project/src/getSchedule.js
