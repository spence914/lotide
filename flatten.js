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
  } else {console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  };
};

//Create a funciton flatten that will take an array containing elements included nested arrays
// of elements and return a flattened array of all the elements

//Inputs: original array
//Outputs: flattened array

//Method: I can loop through the outer array checking if each element is itself an array,
// if it isn't I can just push it straigh to the new flattenedArray and if it is I can use
// another loop that pushes each of those elements to the new array