// Create a function that takes an array of items, and an item to count and returns the number of
// times that item appears

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { // loops through all items in allItems
    if (itemsToCount[item]) { // if the target item is found
      if (results[item]) { // and a key for that item exists in results already it is incremented by 1
        results[item] += 1;
      } else {
        results[item] = 1; // if the item is found for the first time a key with its name is created and the value is initialized as 1
      }
    }
  }
  return results;
};


module.exports = countOnly;