const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function (arr1, arr2) {
  // compare the length of arr1
  const length1 = arr1.length;
  const length2 = arr2.length;
  if (length1 !== length2) {
    return false;
    // compare the item inside one by one
  } else {
    for (let i = 0; i < length1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} equals ${JSON.stringify(expected)}`);
  } else {
    // console.assert(actual === expected, `✅✅✅ ${actual} !== ${expected}`);
    console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} not equals ${JSON.stringify(expected)}`);
  }
};

// const results1 = map(words, (word) => word[0]);
// const results2 = map(words, (word) => word[1]);
// const results3 = map([], (word) => word);
// const results4 = map(words, (word) => word[10]);
// assertArraysEqual(results1,['g','c','t','m','t']);
// assertArraysEqual(results2,['r','o','o','a','o']);
// assertArraysEqual(results3,[]);
// assertArraysEqual(results4,[undefined,undefined,undefined,undefined,undefined]);