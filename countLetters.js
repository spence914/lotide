const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const results = {};

  for (const letters of sentence) {
    if (letters !== ' ') {
      if (results[letters]) {
        results[letters] += 1;
      } else {
        results[letters] = 1;
      }
    }
  }
  return results;
};

assertEqual(countLetters("lighthouse in the house").h , 4);
assertEqual(countLetters("spencer ernest lewis")["s"] , 3);
assertEqual(countLetters("spencer ernest lewis")[" "] , undefined);
