// Mark and Jane are very happy after having their first kid, and Mark wants to buy some toys for him. There are  different toys, tagged with their prices, but he has only . He wants to buy the maximum number of toys for his son.

// You are Mark's best friend and have to help him buy as many toys as possible.

// Input Format

// The first line contains two integers,  and  separated by a space.
// The next line contains  space separated integers indicating the price of each toy.

// Output Format

// Output an integer that denotes the maximum number of toys Mark can buy with .

// Constraints



// A toy can't be bought multiple times.

// Sample Input

// 7 50
// 1 12 5 111 200 1000 10
// Sample Output

// 4
// Explanation

// He can buy only  toys at the most. These toys have the following prices: .

function processData(input) {
    //Enter your code here
//     var rows = input.split('\n');
//     var totalMoney = rows[0].split(' ').map(Number)[1];
//     var array = rows[1].split(' ').map(Number);
    
//     array.sort((a,b) => a-b);
    
//     let sum = 0;
//     let count = 0;
    
    
//     for(let i=0 ; i<array.length-1; i++) {
//         if(sum <= totalMoney) {
//             sum = sum + array[i];
//             count++;
//         }
//     }
        
   
    // console.log(count-1);
    
    // this is the optimal solution
    var rows = input.split('\n'); // Array ["7 50", "1 12 5 111 200 1000 10"]
    var max = rows[0].split(' ').map(Number)[1]; 
    var arr = rows[1].split(' ').map(Number);
    arr = arr.sort(function(a, b){return a-b}); 
    var i = 0;
    while(max>=0) {
        max -= arr[i];
        i++;
    }
    console.log(i-1);
} 

