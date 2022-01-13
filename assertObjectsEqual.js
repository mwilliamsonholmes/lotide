
//check to see if 2 objects are equal, returns true or false
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key])
  
      } else if (object1[key] !== object2[key]) return false;
      }
  }
  return true;
};

//takes in 2 objects, prints certain message if true, another message if false
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
 if (eqObjects(actual, expected)) {
  console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
 } else {
  console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
 }
//  console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};
assertObjectsEqual({num : 1}, {num : 2});