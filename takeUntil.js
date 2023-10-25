const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const results3 = takeUntil(data3, x => x % 5 === 0);
assertArraysEqual(results3, [2, 4, 6, 8]);
