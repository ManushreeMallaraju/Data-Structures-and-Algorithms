// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let temp = [];
    
     for(let i=0; i<=arr.length-1; i++) {
          if(Number.isInteger(fn)) {
            temp.push(fn);
          }
          else {
            let result = fn(arr[i],i);
            temp.push(result);
          }
        }
        return temp;
};


// Approach
// Created temp array
// Identified edge case for constants
// Used for loop to iterate over each element and pass it to the function.
// As function return transformed element, pushed this to temp array.