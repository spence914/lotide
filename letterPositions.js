const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) { // loop through characters in sentence
    if (sentence[i] !== " ") { // ignore spaces
      if (results[sentence[i]]) { // if the results object already contains a key for the letter at i, push the index into the array keeping track of letter positions
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i]; // if the results object doesn't yet contain a key for a letter, create it, and itialize an array with the value of the letters index
      }
    }
  }
  return results;
};

module.exports = letterPositions;

