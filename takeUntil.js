
// takeUntil will take a given array and a callback as arguments and return an array that includes
//the elements of the input array until the callback returns a truthy value, then it will stop


const takeUntil = function(array, callback) {
  const newArr = [];
  for (let element of array) {
    if (!callback(element)) {
      newArr.push(element);
    } if (callback(element)) {
      break;
    }
  } return newArr;
};

module.exports = takeUntil;
