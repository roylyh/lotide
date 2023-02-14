const findKeyByValue = function(allItems, itemValue) {
  const keys = Object.keys(allItems);
  for (let key of keys) {
    if (allItems[key] === itemValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

