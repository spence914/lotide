const assert = require('chai').assert;
const without = require('../without');


describe("#without", () => {
  it('should return ["hello", "world"] if given ["hello", "world", "lighthouse"],["lighthouse"]', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"],["lighthouse"]), ["hello", "world"]);
  });

  it('should return ["1", "2"] if given ["1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});