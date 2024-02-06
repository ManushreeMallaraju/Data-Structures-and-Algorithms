// getName();
// console.log(x);
// console.log(getName);

// Hoisting in JS.
// var x=7;

// function getName(){
//     console.log("Namaste JS");
// }
// getName();
// // console.log(x);

// How functions work in JS ?

var x = 1;
a();
b();
console.log("oustide function: ",x);

function a() {
    var x = 10;
    console.log("in a(): ", x);
}

function b() {
    var x = 200;
    console.log("In b(): ", x);
}
