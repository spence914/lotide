const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Write a function that compares two arrays to determine if they are equal

// 1. Inputs -> Two arrays
// 2. Outputs -> Boolean value
// 3. Process ->
    // I can't compare arrays using === comparitor but I can compare strings, so if I convert the 
    // arrasys to strings and compare them it will determine if they are equal
    // I can convert the arrays using the toString() method, or the join() method

    const eqArrays = function(arr1, arr2) {
     return arr1.toString() === arr2.toString();
    };



    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);