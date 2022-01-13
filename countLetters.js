const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countLetters = function(string) {
//   const result = {};
//   let arr = string.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i]] = {};

//     for (let j = 0; j < arr[i].length; j++) {

//      if (!result[arr[i]][arr[i][j]]) {
//       result[arr[i]][arr[i][j]] = 1;

//      } else {
//       result[arr[i]][arr[i][j]]++;
//     }
//   }
//   } return result;
//   }
  
//   console.log(countLetters("hello"));
  
const countLetters = function(sentence) {
  const newObject = {};
  let letter = sentence.split('');
  for (let letter of sentence) {
    if (!newObject[letter]) {
      newObject[letter] = 1;
    } else {
      newObject[letter] ++
    }
  }
  return newObject;
};
console.log(countLetters("hello"));

// assertEqual(newObject["hello"] , ) do I need to include countLetters function here
