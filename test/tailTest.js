const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [] for for an array with only one element [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for for an empty array []", () => {
    assert.deepEqual(tail([]), []);
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);