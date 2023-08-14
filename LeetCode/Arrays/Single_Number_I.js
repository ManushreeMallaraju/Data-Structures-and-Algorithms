// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    // can exclude constraints
    // if(nums.length < 1 || nums.length >=3 * 10^4 ) return;

    // for(let i in nums) {
    //     if(nums[i] < -3 * 10^4 || nums[i] <= 3*10^4) return;
    // }

    let map = new Map();
    nums.map(integer => {
        map.has(integer) ? map.set(integer, -1) : map.set(integer, 1);
    })

    for( const [key, value] of map) {
        if(value === 1) return key;
    }
};