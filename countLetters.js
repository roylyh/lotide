// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.assert(actual === expected, `✅✅✅ ${actual} !== ${expected}`);
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  // replace space etc to blank
  const newString = string.replace(/\s+/g, "");
  let results = {};
  // loop string
  // check if key exist in the result, yes the property's value adds 1, no it equals 1
  for (let c of newString) {
    if (results[c]) {
      results[c]++;
    } else {
      results[c] = 1;
    }
  }
  return results;
};

// TEST CODE
// console.log(
//   "countLetters('lighthouse in the house'):",
//   countLetters("lighthouse in the house")
// );
// const result1 = countLetters("lighthouse in the house");
// assertEqual(result1["l"], 1);
// assertEqual(result1["i"], 2);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 4);
// assertEqual(result1["t"], 2);
// assertEqual(result1["o"], 2);
// assertEqual(result1["u"], 2);
// assertEqual(result1["s"], 2);
// assertEqual(result1["e"], 3);
// assertEqual(result1["n"], 1);
// assertEqual(result1[" "], undefined);
// assertEqual(result1["w"], undefined);