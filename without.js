
//Implement without function that takes an array and a set of unwanted elements to
//remove from that array

//Inputs: Two arrays, a complete one, and one containing unwanted elements
//Outputs: A new array containing only the wanted elements from the first array

//Process: Loop through the array comparing the elements and if they don't match the unwanted
//ones them pushing them into a new array.
//Above method didnt work because it only compared two elements at the same index, AI help
// on compass recomended I use the includes method to check if the source array included any
//of the unwanted elements so I have implemented that here

const without = function(sourceArray, itemsToRemove) {
  let wantedElements = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      wantedElements.push(sourceArray[i]);
    }
  } return wantedElements;
};


module.exports = without;