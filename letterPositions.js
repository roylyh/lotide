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

// function to find the positions of each letter in the sentence
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const c = sentence.charAt(i);
    if (c !== " ") {
      if (results[c]) {
        results[c].push(i);
      } else {
        results[c] = [i];
      }
    }
  }
  return results;
};

// test code
// const result1 = letterPositions("hello");
// const result2 = letterPositions("lighthouseLabs is great");
// console.log(result1);
// console.log(result2);
// assertArraysEqual(result1.h,[0]);
// assertArraysEqual(result1.e,[1]);
// assertArraysEqual(result1.l,[2,3]);
// assertArraysEqual(result1.o,[4]);