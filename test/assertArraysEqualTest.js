const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2], [1, "2"]);
assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual([1, 2], [1, 2]);