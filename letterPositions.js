// function to find the positions of each letter in the sentence
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const c = sentence.charAt(i);
    if (c !== " ") {
      if (results[c]) {
        results[c].push(i);
      } else {
        results[c] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// test code
// const result1 = letterPositions("hello");
const result2 = letterPositions("lighthouseLabs is great");
// console.log(result1);
console.log(result2);
// assertArraysEqual(result1.h,[0]);
// assertArraysEqual(result1.e,[1]);
// assertArraysEqual(result1.l,[2,3]);
// assertArraysEqual(result1.o,[4]);
// {l:[0],i:[1,15],g:[2,18],h:[3,5],t:[4,22],o:[6],u:[7],s:[8,13,16],e:[9,20],L:[10],a:[11,21],b:[12],r:[19]}