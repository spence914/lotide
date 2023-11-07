const assert = require('chai').assert;
const countLetters = require('../countLetters');

// assertEqual(countLetters("lighthouse in the house").h , 4);
// assertEqual(countLetters("spencer ernest lewis")["s"] , 3);
// assertEqual(countLetters("spencer ernest lewis")[" "] , undefined);
// assertEqual(countLetters("      ")[" "] , undefined);
// assertEqual(countLetters("s")["s"] , 1);

describe("#countLetters", () => {
  it('returns 4 when given ("lighthouse in the house").h', () => {
    assert.equal(countLetters("lighthouse in the house").h, 4);
  });

  it('returns undefined when given "     "[" "]', () => {
    assert.equal(countLetters("     ")[" "], undefined);
  });

  it('returns 1 when given "s"["s"]', () => {
    assert.equal(countLetters("s")["s"], 1);
  });

  it('returns undefined when given ("lighthouse labs")[" "]', () => {
    assert.equal(countLetters("lighthouse labs")[" "], undefined);
  });
});