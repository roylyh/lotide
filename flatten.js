// flatten an array with subarrays
const flatten = function(array) {
  let newArr = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((ele) => {
        newArr.push(ele);
      });
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

module.exports = flatten;
