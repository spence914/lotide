const assert = require('chai').assert;
const findKey = require('../findKey');


describe("#findKey", () => {
  const restaurants = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };
  it('should return "noma" when given "(restaurants, x => x.stars === 2)"', () => {
    assert.equal(findKey(restaurants, x => x.stars === 2), "noma");
  });

  it('should return "undefined" when given "(restaurants, x => x.stars === 4)"', () => {
    assert.equal(findKey(restaurants, x => x.stars === 4), undefined);
  });

  it('shiuld return "Akaleri" when given "(restaurants, x => x.stars === 3)"', () => {
    assert.equal(findKey(restaurants, x => x.stars === 3), "Akaleri");
  });

});