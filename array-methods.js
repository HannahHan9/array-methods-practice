/*The tests have already been written for you. Look at the inputs in each test to get an idea of what the array looks like for each function

use .filter on these tasks

Use .filter when you want to remove things from an array - it will return a new array with elements that match your condition.

*/

function belowTen(numbers) {
  const result = numbers.filter((number) => number < 10);
  return result;
}

function isAttending(replies) {}

function hasMultipleCats(people) {}

/**********************************************************************************************/

// use .map on these tasks

// .map will return an array the same length as the input. It will perform a function/operation on each element in the array

function multiplyByTwo(numbers) {}

function makeGuestList(attendees) {}

function cancelMemberships(members) {
  // think about what you want in the array at the end
}

module.exports = {
  isAttending,
  belowTen,
  hasMultipleCats,
  multiplyByTwo,
  makeGuestList,
  cancelMemberships,
};
