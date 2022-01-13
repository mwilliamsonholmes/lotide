function assertArraysEqual(a, b){
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`Assertion Failed: ${a} !== ${b}`);
  }
  }

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

//find index of each letter in a sentence, display as object of arrays
const letterPositions = function(sentence) {
  const results = {}; 
  
  for (let i = 0; i < sentence.length; i++) {
         
    if (results[sentence[i]] && sentence[i] !== " ") {      
      results[sentence[i]].push(i);
    }
    if (!results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
}
console.log(letterPositions("hello world"));

//     if (sentence[i] !== //another letter in the sentece) {
// { 
//   count.push(indexOf([i]));
//   } else {
//    return result.indexOf(letter);
//   }
//   return result;
// };
// }
// assertArraysEqual(letterPositions("hello").e, [1]);

// let word = "hello";
// console.log(word.indexOf("l"));

//find index of each letter in a sentence, display as object of arrays
// const letterPositions = function(sentence) {
//   const results = {}; 
//   // let location = [];
//   for (let i = 0; i < sentence.length; i++) {
//     // const key = sentence[i];        
//     if (!result[key]) {      
//       location.push(indexOf(result));   
//     } else {         
//       result[key]++
//   }
//   return result;
// }
// }