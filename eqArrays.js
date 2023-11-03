const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

assertEqual(eqArrays([1, 2, [3, [4, [5]]]], [1, 2, [3, [4, [5]]]]), true);
assertEqual(eqArrays([1, 2, [3, [4, [5]]]], [1, 2, [3, [4, [6]]]]), false);


