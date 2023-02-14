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

module.exports = eqArrays;
