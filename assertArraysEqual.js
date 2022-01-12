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
// console.log(eqArrays([1, 2], [1, 2]));


function assertArraysEqual(a, b){
if (eqArrays(a, b)) {
  console.log(`Assertion Passed: ${a} === ${b}`);
} else {
  console.log(`Assertion Failed: ${a} !== ${b}`);
}
}
assertArraysEqual([1,2], [1, 3]);




// const assertArraysEqual = function(arr1, arr2) {
//   eqArrays(arr1, arr2);
// if (eqArrays === true) {
//   console.log(`Assertion Passed: ${arr1} === ${arr2}`);
// } else if (eqArrays === false) {
//   console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
// }
// }