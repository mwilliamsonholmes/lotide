const eqArrays = require('./eqArrays');

//take 2 arrays and console.log message if true or false
function assertArraysEqual(a, b) {
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`Assertion Failed: ${a} !== ${b}`);
  }
}
module.exports = assertArraysEqual;

