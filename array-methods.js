/*The tests have already been written for you. Look at the inputs in each test to get an idea of what the array looks like for each function

use .filter on these tasks

Use .filter when you want to remove things from an array - it will return a new array with elements that match your condition.

*/

function belowTen(numbers) {
  const result = numbers.filter((number) => number < 10);
  return result;
}

function isAttending(replies) {
  const copyReplies = [...replies];
  const result = copyReplies.filter((reply) => reply.confirmed === true);
  return result;
}

function hasMultipleCats(people) {
  const copyPeople = [...people];
  const result = copyPeople.filter((person) => person.catCount > 0);
  return result;
}

/**********************************************************************************************/

// use .map on these tasks

// .map will return an array the same length as the input. It will perform a function/operation on each element in the array

function multiplyByTwo(numbers) {
  const numbersCopy = [...numbers];
  const result = numbersCopy.map((num) => num * 2);
  return result;
}

function makeGuestList(attendees) {
  const result = attendees.map((attendee) => attendee.name);
  return result;
}

function cancelMemberships(members) {
  // const copyMembers = [...members];
  if (members.length === 0) return [];
  const cancelledMembers = members.map((member) => {
    if (member.status === "active") {
      member.status = "cancelled";
    } else if (member.status === "cancelled") {
      member.status = "cancelled";
    }
  });
  return cancelledMembers;
}

module.exports = {
  isAttending,
  belowTen,
  hasMultipleCats,
  multiplyByTwo,
  makeGuestList,
  cancelMemberships,
};
