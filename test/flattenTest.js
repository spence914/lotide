const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {
  it('should return [1,2,3,4,5,6] when given [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });

  it('should return [2, 4, 6, 2, 4, 6] when given [2, 4, 6, [2, 4, 6]]', () => {
    assert.deepEqual(flatten([2, 4, 6, [2, 4, 6]]), [2, 4, 6, 2, 4, 6]);
  });
});