const assert = require("chai").assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue",() => {
  
  it("returns 'drama' for {sci_fi:'The Expanse',comedy:'Brooklyn Nine-Nine',drama:'The Wire',} to find 'The Wire'", () => {
    assert.deepEqual(findKeyByValue({sci_fi:'The Expanse',comedy:'Brooklyn Nine-Nine',drama:'The Wire',},'The Wire'), "drama");
  });

  it("returns 'drama' for {sci_fi:'The Expanse',comedy:'Brooklyn Nine-Nine',drama:'The Wire',} to find 'The Wire'", () => {
    assert.deepEqual(findKeyByValue({sci_fi:'The Expanse',comedy:'Brooklyn Nine-Nine',drama:'The Wire',},'That \'70s Show'), undefined);
  });
});