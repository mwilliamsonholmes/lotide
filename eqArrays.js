const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

// const eqArrays = function(first, second) {
  
//   for (let i = 0; i < first.length; i++) {
//     for (let j = 0; j < second.length; j++) {
//   if (first[i] !== second[j]) {
//         return false;
//   } else if (first[i] === second[j]) {
//     return true;
//   }
//   }
// }
// };

// function eqArrays(first, second) {
//   if (first === second) {
//     return true;
//   } if (first.length !== second.length) {
//     return false;
//     for (let i = 0; i < first.length; i++){
//       if (first[i] !== b[i]) {
//         return false;
//       }
//     }
//   }
// }

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
  
console.log(eqArrays([1, 2, 3], [1, 2, "3"]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false

