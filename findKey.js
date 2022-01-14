//scans the object and returns the first key for which the callback returns a truthy value. if no key found it should return undefined
const findKey = function (object, callback) {

  for (const key in object) {
    // console.log(object[key]);
    // console.log(object[key]);
    if (callback(object[key]))
      return key;
  }

}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertEqual("Lighthouse Labs", "Hi");
// assertEqual(1, 5);

