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

  const without = function(source, itemsToRemove) {
    if (eqArrays(source, itemsToRemove)) {
      return [];
      let newArray = [];
      for (let i = 0; i < source.length; i++) {
        if (!itemsToRemove.includes(source[i])){
          newArray.push(source[i]);
        }
      }
      return newArray;
    };
  }


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);