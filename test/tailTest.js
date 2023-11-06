const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1,2,3,4,5]).length,4);
const words = ['Hello', 'this', 'is', 'a', 'test'];
tail(words);
assertEqual(words.length, 5);

const result = tail(words);
assertEqual(result.length, 4);