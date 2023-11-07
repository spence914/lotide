# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @spence914/lotide`

**Require it:**

`const _ = require('@spence914/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: takes a given array and returns the first element
* `tail(arr)`: takes a given array and returns the everything except the first element
* `middle(fullArray)`: takes a given array and returns the element(s) in the middle
* `countLetters(sentence)`: takes a given sentence and returns an object with a count of how many times each letter appeared
* `countOnly(allItems, itemsToCount)`: takes an array of items, and an item to count and returns the number of times that item appears
* `findKeyByValue(object, value)`: takes an object and a value, and returns the key at which that value is found
* `findKey(object, callback)`: takes an object and a callback, scans the object, and returns the first key for which the callback returns a truthy value. If no key is found it returns undefined
* `flatten(tallArray)`: takes an array of elements that include nested arrays, and returns a flat array of all enclosed elements
* `letterPositions(sentece)`: takes a string and returns an object containing the letters found in the string and the indexes they are found at within the string
* `takeUntil(array, callback)`: takes a given array and a callback as arguments and returns an array that includes
the elements of the input array until the callback returns a truthy value, then it will stop
* `without(sourceArray, itemsToRemove)`: takes an array and a set of unwanted elements to
remove from that array, and returns a new array of only the wanted items
* `eqArrays(arr1, arr2)`: takes two arrays and compares if they are equal, returns true if so and false if not
* `eqObjects(object1, object2)` takes two objects and compares if they are equal, returns true if so and false if not

