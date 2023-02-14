const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns {h:[0],e:[1],l:[2,3],o:[4],} for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
  });

  it("returns {l:[0],i:[1,15],g:[2,18],h:[3,5],t:[4,22],o:[6],u:[7],s:[8,13,16],e:[9,20],L:[10],a:[11,21],b:[12],r:[19]} for 'lighthouseLabs is great'", () => {
    assert.deepEqual(letterPositions("lighthouseLabs is great"),{l:[0],i:[1,15],g:[2,18],h:[3,5],t:[4,22],o:[6],u:[7],s:[8,13,16],e:[9,20],L:[10],a:[11,21],b:[12],r:[19]});
  });
});
