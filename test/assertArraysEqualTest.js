const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
// assertArraysEqual([1,[2,3]],[1,[2,3]]); // Should pass