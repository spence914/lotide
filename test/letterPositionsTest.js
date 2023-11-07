const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("lighthouse labs").l, [0, 11]);

describe("#letterPositions", () => {
  it('should return [1] when given ("hello").e', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it('should return [2,3] when given ("hello").l', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it('should return [0,11] when given ("lighthouse labs").l', () => {
    assert.deepEqual(letterPositions("lighthouse labs").l, [0, 11]);
  });
});