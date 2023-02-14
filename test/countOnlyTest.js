const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly,['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe',] only count if {Jason:true,Karima:true,Fang:true,Agouhanna:false,}",()=>{

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];

  const result = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });

  it("returns 1 for Jason", ()=>{
    assert.deepEqual(result["Jason"], 1);
  });
  it("returns undefined for Karima", ()=>{
    assert.deepEqual(result["Karima"], undefined);
  });
  it("returns 2 for Fang", ()=>{
    assert.deepEqual(result["Fang"], 2);
  });
  it("returns undefined for Agouhanna", ()=>{
    assert.deepEqual(result["Agouhanna"], undefined);
  });
});