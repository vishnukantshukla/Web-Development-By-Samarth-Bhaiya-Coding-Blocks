// ====================================================
// var a = 20;

// function myfun(){
//     console.log('inside mera function');
// }
// console.log(a);
// myfun();

// Output-> 20 , inside mera function

// =====================================================


// Question 2-> 

// (When we access a varible/ function even before its declaration that concept is called hoisting)


console.log(a); //accessing a varible
 myfun(); // accessing a function

// function declaration
function myfun(){
    console.log('inside mera function');
}

// variable declaration
var a = 20;
// ======================================================

// Question - 3

var b =10;
vishnu();
function vishnu(){
    console.log(b);
    console.log('inner function');
}
console.log(b);

// =================================================

// Question - 3

console.log(c);
vishnu1();
function vishnu1(){
    console.log(c);
    console.log('inner function');
}
let c = 10;

// Output -> it will give Reference Error



