# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @roy.louyh/lotide`

**Require it:**

`const _ = require('@roy.louyh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Get the first element of array
* `tail(array)`: Get the subarray except the first element
* `middle(array)`: Get the middle element of array if the length is even, return two elements; if odd, return one element
* `eqArrays(array1,array2)`: Return the result of comparision of two arrays
* `eqObjects(obj1,obj2)`: Return the result of comparision of two objects
* `fundKeyByValue(obj, value)`: Return the key whose value is in the obj (first key)
* `countOnly(allItems, itemsToCount)`: Return the number of items from allItems which are true in itemToCount
* `letterPoisitions(sentence)`: Return the positions of each letter in the sentence
* `flatten(array)`:return an array with subarrays