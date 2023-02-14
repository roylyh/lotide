// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function (object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// refactor eqobject
const eqObjects = function(obj1, obj2) {
  // base case
  if (obj1 === obj2) return true;
  // check null and type
  if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") return false;
  // get the keys
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  // check the length of keys
  if (obj1Keys.length !== obj2Keys.length) return false;
  
  for (let key of obj1Keys) {
    //
    if (!obj2Keys.includes(key)) {
      return false;
    }
    // recursive case
    if (!eqObjects(obj1[key],obj2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
