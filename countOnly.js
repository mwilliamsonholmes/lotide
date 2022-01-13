const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count



const countOnly = function(allItems, itemsToCount) {
//function should count how many intances of each string, return results in an object
const results = {};
for (const item of allItems) {
  if (itemsToCount[item]) { 
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  console.log(item)
}
return results;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);