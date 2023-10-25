const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Implement findKey function which takes an object and a callback, scans the object, and
// returns the first key for which the callback returns a truthy value. If no key is found
// it should return undefined


// I can reuse some logic from findKeyByValue

// const findKeyByValue = function(object, value) {
//   for (const key of Object.keys(object)) {
//     if (object[key] === value) {
//       return key;
//     }
//   }
// };
// I will use a similar for loop to go through the keys of the object and then similarly
//check them against the callback for truthiness.


const findKey = function(object, callback){
for (const key of Object.keys(object)) {
  if (object[key] === )
}
}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"