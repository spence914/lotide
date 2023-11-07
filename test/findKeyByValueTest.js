const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it('should return "drama" when given (bestTVShowsByGenre, "The Wire")', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return "undefined when given "(bestTVShowsByGenre, "That \'70s Show"), undefined"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('should return "sci_fi" when given "(bestTVShowsByGenre, "The Expanse"), "sci_fi""', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

});