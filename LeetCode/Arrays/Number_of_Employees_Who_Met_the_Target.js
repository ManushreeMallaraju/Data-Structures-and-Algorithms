/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
      // if( hours.length < 1 || hours.length > 50 ) {
    //     return;
    // }
    // else if(target > 10^5) {
    //     return;
    // }
    // else {
    //     for(let i=0; i <= hours.length ; i++) {
    //             if(hours[i] < 0)  return;
    //     }
    // }
   
    //    Runtime is high
    // hours.sort((a,b) => a-b);
    //[28, 48]
      
    // console.log("hours: ", hours);
    // console.log("hours len: ", hours.length);
    // let index = hours.findIndex((value) => {
    //   console.log("Value ", value)
    //   console.log("value > target: ", value > target);
    //   return value > target || value === target 
    // })
  
    // console.log("index: ", index);
  
    // if(index != -1) {
    //     if(index === 0 && hours.length === 1) { // Doesn't pass for test case with one element
    //         return 1; 
    //     } 
      
    //     return hours.length - index;
    // } else {
    //     return 0
    // }

    // runtime is 57ms
    return hours.filter(hour => hour >= target).length;
};

numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2);

// Test cases :
// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Input: hours = [5], target = 2
// Output: 1
// Input: hours = [48, 28], target = 2
// Output: 2
