const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};


const eqArrays = function(first, second) {
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
  if (first[i] === second[j]) {
    return true;
  } else if (first[i] !== second[j]) {
    return false;
  }
}
  }
  return eqArrays;
}
console.log(eqArrays(["1", "2", "3"], ["1", "2", "5"]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false



//receive first array and second array
//if first === second, then return true
//if first !== second, then return false
//use assertEqual to test
