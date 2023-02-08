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
      `🛑🛑🛑 Assertion failed: ${actual} not equals ${JSON.stringify(
        expected
      )}`
    );
  }
};

const without = function (source, itemsToRemove) {
  let result = [];
  // loop items in source
  for (const elem of source) {
    // if itemsToRemove not includes elems, push into result
    if (!itemsToRemove.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
};

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);