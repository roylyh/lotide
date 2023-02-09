// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.assert(actual === expected, `✅✅✅ ${actual} !== ${expected}`);
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" ,};
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
// assertEqual(
//   eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
//   true
// );
// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
// assertEqual(
//   eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
//   false
// );
