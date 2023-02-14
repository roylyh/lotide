const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten",()=>{

  it("returns [1,2,3] for [1,2,3]", ()=>{
    assert.deepEqual(flatten([1,2,3]), [1,2,3]);
  });

  it("returns [] for []", ()=>{
    assert.deepEqual(flatten([]), []);
  });

  it("returns [1,[2,3]] for [1,2,3]", ()=>{
    assert.deepEqual(flatten([1,[2,3]]), [1,2,3]);
  });

});