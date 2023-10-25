const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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


const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(restaurants, x => x.stars === 2), "noma");
assertEqual(findKey(restaurants, x => x.stars === 4), undefined);
assertEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");

const apartments = {
  "Appt1": {
    sqrft: 400,
    bedrooms: 1,
    bathrooms: 1
  },
  "Appt2": {
    sqrft: 500,
    bedrooms: 2,
    bathrooms: 2
  },
  "Appt3": {
    sqrft: 750,
    bedrooms: 3,
    bathrooms: 2.5
  }
};

assertEqual(findKey(apartments, x => x.bathrooms > 2), "Appt3");
assertEqual(findKey(apartments, x => x.bedrooms === 1), "Appt1");
assertEqual(findKey(apartments, x => x.bedrooms > 3), undefined);

