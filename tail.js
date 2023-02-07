const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.assert(actual === expected, `✅✅✅ ${actual} !== ${expected}`);
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

// Test Case: Check the original array which has 3 elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, ["Lighthouse", "Labs"].length);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check the original array which has 0 elements
const result1 = tail([]);
assertEqual(result1.length, 0);
assertEqual(result1[0],undefined);

// Test Case: Check the original array which has 1 element
const result2 = tail(["Hello"]);
assertEqual(result2.length, 0);
assertEqual(result2[0],undefined);