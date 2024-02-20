
// https://www.hackerrank.com/challenges/the-birthday-bar/problem
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let sum = d;
    let length = m;
   
    let count = 0;
    let lengthCount = 1;
    
    for(let i=0; i<=s.length; i++) {
            if(s[i] === sum && length === lengthCount) {
                count++
                if(s.length === 1) {
                    break;
                }
            } 
            else {
                let j=i+1; 
                if(s[i] < sum && lengthCount <= length) {
                    lengthCount++;
                    let total = s[i] + s[j];
                    if( total === sum && lengthCount === length) {
                        count++;                
                    }
                }
            }  
            lengthCount = 1; 
    }
    return count;
}



// Input (stdin)
// 5
// 1 2 1 3 2
// 3 2
// Your Output (stdout)
// 2

// Input (stdin)
// 6
// 1 1 1 1 1 1
// 3 2
// Your Output (stdout)
// 0

// Input (stdin)
// 1
// 4
// 4 1
// Your Output (stdout)
// 1