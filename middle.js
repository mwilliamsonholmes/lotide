const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
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
module.exports = middle;
