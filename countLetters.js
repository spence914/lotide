const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

assertEqual(countLetters("lighthouse in the house").h , 4);
assertEqual(countLetters("spencer ernest lewis")["s"] , 3);
assertEqual(countLetters("spencer ernest lewis")[" "] , undefined);
assertEqual(countLetters("      ")[" "] , undefined);
assertEqual(countLetters("s")["s"] , 1);
