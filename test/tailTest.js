const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('should return [2,3,4,5] when given [1,2,3,4,5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("should return ['this', 'is', 'a', 'test'] when given ['Hello', 'this', 'is', 'a', 'test']", () => {
    assert.deepEqual(tail(['Hello', 'this', 'is', 'a', 'test']), ['this', 'is', 'a', 'test']);
  });
});