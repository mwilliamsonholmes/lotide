# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mwilliamson.holmes/lotide`

**Require it:**

`const _ = require('@mwilliamson.holmes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(arr1,arr2): prints message after comparing two arrays
* assertEqual(actual, expected): prints a message comparing two values
* assertObjectsEqual(actual, expected): prints a message comparing two objects
* countLetters(string): takes in a string and returns an object with a count of each time the letters in that string occur
* head(array): returns the first item in an array
* tail(array): returns the "tail" of an array- everything except the first element (head)
* middle(array): returns the one middle element of an array with an odd number of elements, returns the middle two elements of an array with an even number of elements
* countOnly(allItems, itemsToCount): takes in a collection of items and return counts for a specific subset of those items
* letterPositions(string): returns an object with all the indices in the string where each character is found
* findKey(object, callback): scans the object and returns the first key for which the callback returns a truthy value
* findKeyByValue(object, value): given a value, search the object to find the first key associated with the property
* eqObjects(object1, object2): takes in two objects and returns true or false, based on a perfect match
* eqArrays(arr1, arr2): returns true or false that two arrays have the same values
* map(array, callback): return a new array based on the results of the callback function
* takeUntil(array, callback): return a slice of the array with elements taken from the beginning-it will keep collecting items until the callback returns  truthy value
* without(source, itemsToRemove): returns a new array of all of the elements in the first array not included in the second array
