//function takeUntil returns a slice of the array with elements taken from the beginning
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//should return [ 1, 2, 5, 7, 2 ]

const takeUntil = function (array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) return newArray;
    newArray.push(item);
  }
}

const results1 = takeUntil(data1, x => x < 0);
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