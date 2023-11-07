// This function will take a given sentence and return an object with a count of how many times each letter appeared

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) { // loop through all letters in sentence
    if (letter !== ' ') { // ignore spaces
      if (results[letter]) {
        results[letter] += 1; // if a key already exists in teh results object for a given letter increment it by one each time it is found
      } else {
        results[letter] = 1; // if the key doesn't yet exist when the letter is found, create a key for it and initialize the count at 1
      }
    }
  }
  return results;
};

module.exports = countLetters;
