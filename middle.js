//Create a function to take a given array and return a new one with one the middle element(s)



const middle = function(fullArray) {
  let middleElements = []; // store middle elements in new array
  let midIndex = fullArray.length / 2;
  if (fullArray.length < 3) {
    return middleElements; // if the array has fewer than 3 elements it has no middle and so the empty array is returned
  } else if (fullArray.length % 2 === 0) {
    middleElements.push((fullArray[midIndex - 1]) , fullArray[midIndex]); // if the array has an even number of elements the middle two are pushed to the new array
  } else {
    middleElements.push(fullArray[Math.floor(midIndex)]); // if the array has an odd number of elements only the one middle element is pushed
  } return middleElements;
};

module.exports = middle;
