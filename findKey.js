// Implement findKey function which takes an object and a callback, scans the object, and
// returns the first key for which the callback returns a truthy value. If no key is found
// it should return undefined



// this function loops throught the keys of the passed object, then for each key checks if
// a callback function passed on the object associated with that key returns a truthy response
// if yes it returns the key itself, otherwise it returns undefined

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};


module.exports = findKey;

