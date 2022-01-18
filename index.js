const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`Assertion Failed: ${a} !== ${b}`);
  }
};
const assertEqual = require('./assertEqual');
const eqObjects = function (object1, object2) {
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
const findKey = function (object, callback) {
  for (const key in object) {
    // console.log(object[key]);
    // console.log(object[key]);
    if (callback(object[key]))
      return key;
  }
};
const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  };
}
const letterPositions = function (sentence) {
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
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const takeUntil = function (array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) return newArray;
    newArray.push(item);
  }
}
const without = function (source, itemsToRemove) {
  if (eqArrays(source, itemsToRemove)) {
    return [];
    let newArray = [];
    for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])) {
        newArray.push(source[i]);
      }
    }
    return newArray;
  };
}

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};