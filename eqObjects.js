const eqArrays = require('./eqArrays');



const eqObjects = function(object1, object2) {

  let keys1 = Object.keys(object1); // create arrays of keys of two obejcts passed
  let keys2 = Object.keys(object2);

  if (!eqArrays(keys1.sort(), keys2.sort())) { // sort the keys of the objects, if they are not equal then the obejcts cannot be either
    return false;
  }

  for (let key of keys1) { // loop through keys of object1
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if the item at a given key in both objects is an array
      if (!eqArrays(object1[key], object2[key])) { // // use eqArrays to assert if they are equal
        return false;
      }
    } else if (typeof (object1[key]) === "object" && !Array.isArray(object1[key])) { // if the items at a given key are objects and also not arrays
      if (!eqObjects(object1[key], object2[key])) { // use eqObjects recursively to check if the objects match
        return false;
      }
    }
  } return true;
};

module.exports = eqObjects;