const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(entrants) {
  const people = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      people.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      people.adult += 1;
    } else {
      people.senior += 1;
    }
  });
  return people;
}

function calculateEntry(entrants) {
  // https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const infos = countEntrants(entrants);
  return Object.keys(infos).reduce((acc, crr) => acc + (infos[crr] * prices[crr]), 0);
}

module.exports = { calculateEntry, countEntrants };

/* let cost = 0;
entrants.forEach((entrant) => {
  if (entrant.age < 18) {
    cost += prices.child;
  } else if (entrant.age >= 18 && entrant.age < 50) {
    cost += prices.adult;
  } else {
    cost += prices.senior;
  }
});
return parseFloat(cost.toFixed(2));
*/
