// const eqArrays = function(arr1, arr2) {
//   // compare the length of arr1
//   const length1 = arr1.length;
//   const length2 = arr2.length;
//   if (length1 !== length2) {
//     return false;
//     // compare the item inside one by one
//   } else {
//     for (let i = 0; i < length1; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  const length1 = arr1.length;
  const length2 = arr2.length;

  if (length1 !== length2) return false;

  for (let i = 0; i < length1; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;
    } else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));
