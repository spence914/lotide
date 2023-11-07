// Write a function that compares two arrays to determine if they are equal

// 1. Inputs -> Two arrays
// 2. Outputs -> Boolean value
// 3. Process ->
// I can loop through the arrays to compare each individual value to one another at every
// index to see if they are exactly equal.

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) { // if the values at index i in both arrays are arrays themselves, recursively call eqArrays to determine equality
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


module.exports = eqArrays;


