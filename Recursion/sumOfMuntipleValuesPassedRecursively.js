// Can you write code for this function: sum(a)(b)(c)....( n)(). 
//This should return the sum of a+b+c....+n.  


//Understand the problem:

//input -> sum(1)(2)(3)(4)(5)..(n) -> 1 + 2 + 3 + 4 +...+ N

//Edge cases : hgandle negative numbers, single number, one argument

//Recursive function :
// sum is a function which takes a and returns another function which takes b, 
// which returns another funciton.. until it takes no arg -> return a+b+c+..+n 

// let sum = function (a) { 
//     return function (b) { //find out the base case -> base case here is the no argument function
//         return sum(a+b); //add the value until you find empty argument, i.e, base case: b === undefined
//         ...
//     }
// }

//More simplified..
// let sum = function (a) {
//     return function (b) {
//         if(b) {
//              return sum(a+b);
//         }
//         return a;
//     }        
// }

//More simplified..
// let sum = (a) => {
//     return b => {
//         return b ? sum(a + b) : a;
//     }
// }

//More simplified..
let sum = a => b => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)());
console.log(sum(-1)(2)(-3)());
console.log(sum(-1));