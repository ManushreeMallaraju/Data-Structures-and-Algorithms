

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    function compareNumbers(a,b) {
        return a-b;
    }
    nums.sort(compareNumbers);
    
    for(let i=nums.length-1; i>=0; i--) {
        let lastDigit = nums[i];
        nums.pop();
        while(nums[i-1] === lastDigit) {
            nums.pop();
            i--;
        }
        break;
    }
    
    return nums[nums.length-1];
}

// Sample Input 0

// 5
// 2 3 6 6 5
// Sample Output 0

// 5