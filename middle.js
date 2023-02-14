const middle = function(array) {
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

module.exports = middle;
