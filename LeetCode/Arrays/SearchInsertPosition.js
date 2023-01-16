// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {

               // For index not found
            if(target > nums[nums.length-1]) return nums.length;
            if(target <= nums[0] ) return 0;

            // For index in between array length
            for (let i = 0; i <= nums.length-2; i++) {
                
                if(target > nums[i] && target <= nums[i+1]) {
                    return i+1;       
                }
            }
};
