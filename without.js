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

//Implement without function that takes an array and a set of unwanted elements to
//remove from that array

//Inputs: Two arrays, a complete one, and one containing unwated elements
//Outputs: A new array containing only the wanted elements from the first array
//Process: Loop through the array comparing the elements and if they don't match the unwanted
//ones them pushing them into a new array

const without = function(sourceArray, itemsToRemove) {
  let wantedElements = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] !== itemsToRemove[i]) {
      wantedElements.push(sourceArray[i]);
    }
  } return wantedElements;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);