const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

assertEqual(countLetters("lighthouse in the house").h , 4);
assertEqual(countLetters("spencer ernest lewis")["s"] , 3);
assertEqual(countLetters("spencer ernest lewis")[" "] , undefined);
assertEqual(countLetters("      ")[" "] , undefined);
assertEqual(countLetters("s")["s"] , 1);