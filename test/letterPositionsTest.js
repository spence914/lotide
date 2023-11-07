const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse labs").l, [0, 11]);