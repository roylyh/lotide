const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,3,5],[1,3,4]);
assertArraysEqual([1,3,4],[1,3,4]);
assertArraysEqual([1,3,[4]],[1,3,4]);
assertArraysEqual([1,3,[4,5,[8]]],[1,3,[4,5,[8]]]);