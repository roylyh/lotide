// Test assertion function
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${JSON.stringify(
        actual
      )} equals ${JSON.stringify(expected)}`
    );
  } else {
    // console.assert(actual === expected, `✅✅✅ ${actual} !== ${expected}`);
    console.log(
      `🛑🛑🛑 Assertion failed: ${JSON.stringify(
        actual
      )} not equals ${JSON.stringify(expected)}`
    );
  }
};

//actual function
const middle = function (array) {
  // initialize an empty array
  let result = [];
  // check the length if < 3 return []
  const arrLength = array.length;
  if (arrLength > 2) {
    const halfLength = arrLength / 2;
    if (arrLength % 2 === 0) {
      result.push(array[halfLength - 1]);
      result.push(array[halfLength]);
    } else {
      result.push(array[Math.floor(halfLength)]);
    }
  }
  return result;
};

//test
// console.log(middle([1]));
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
