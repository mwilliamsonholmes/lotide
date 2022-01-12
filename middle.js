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

function assertArraysEqual(a, b){
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`Assertion Failed: ${a} !== ${b}`);
  }
  }

  const middle = function(array) {
    //need to know array.length
//if array has =< 2 elements, return an empty array
//if (odd) array %2 !== 0, return a single middle element
//if (even) array %2 === 0; return the 2 middle elements
if (array.length <= 2) {
  return [];
} else {
  let newArray = [];
  if (array.length % 2 !== 0) {
    newArray.push(Math.ceil(array.length / 2));
  } else {
    const a = array.length / 2;
    const b = a - 1;
    newArray.push(array[b]);
    newArray.push(array[a]);
  }
  return newArray;
};
  }
middle([1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// [1, 2, 3, 4]
// a = 4/x=2
// b= a-1=1

// [1, 2, 3, 4 ,5, 6]
// 6/x= 3
// b = a-1 =2