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

//Create a function to take a given array and return a new one with one the middle element(s)

//Inputs: Original array
//Outputs: New array containing only the middle

//Process: The first step will be determining if the array has at least 3 elements, if not
// there is no middle and therefore I should have the function return an empty array
// Second I need it to determine if there are an odd or even number of elements in the array
// this will determine if the middle is one or two elements
// Third I need to determine what the middle element(s) are and push them to the new array

//Step one should just be an if statement with the length of the array
//Step two is also an if statement with the length of the array and the % operator
//Step 3 is a little trickier but I think I can use the math.floor and math.ceil
//coupled with a array.length / 2 to pick the middle elements in each case

const middle = function(fullArray) {
  let middleElements = [];
  if (fullArray.length < 3) {
    return middleElements;
  } else if (fullArray.length % 2 === 0) {
    middleElements.push((fullArray[(fullArray.length / 2) - 1]) , fullArray[fullArray.length / 2]);
  } else {
    middleElements.push(fullArray[Math.floor(fullArray.length / 2)]);
  } return middleElements
}

assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArraysEqual(middle([1, 2, 3, 4]) , [2,3]);