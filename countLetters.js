const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const results = {};

  for (const letters of sentence) {
    if (results[letters]) {
      results[letters] += 1
    } else {
      results[letters] = 1
    }
  }
  console.log(results);
}

countLetters("lighthouse in the house");