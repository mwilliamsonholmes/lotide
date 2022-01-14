//map function will return a new array based on the results of the callbackFunction
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

//checks if two arrays are equal, returns true or false
function eqArrays(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

//take 2 objects and console.log message if true or false
function assertArraysEqual(a, b) {
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`Assertion Failed: ${a} !== ${b}`);
  }
}