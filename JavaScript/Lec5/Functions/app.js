// function definition => Here we define that function ko kya kaam karna hai

function sum(){
    let num1=10;   // Yah pe hamne statically value de diya hu
    let num2=30;
    console.log(num1+num2);
}

// Yah paar ham function ko call kar rahe hai
sum();

// console.log(sum()); // it will be undefined


// ==>  parametrised function

// 1- return something from function
function triple(num3){  //parameter  (yesme ham num3 ko datatype nhi dete hai)
    let num1=10;
    let num2=20;
    console.log(num1+num2+num3);
}

triple(100); //arguments

function sum2(){
    let num1=10;
    let num2=20;
    return (num1+num2);
}

let ans = sum2();
console.log(ans);

// multiple parameter



function sum3(num1,num2){
    return num1+num2;

}
console.log(sum3(10,20));

console.log(sum3(10)); // it will give NaN (Not a number) yeh taab tak dega jaab tak ham function ko saare arguments nhi de dege jitne usse chayea hai...

console.log(sum3()); // yeh bhi NaN return karega because hamne saare parameters pass nhii kare hai

// ===============================================

// nothing return and less arguments
function sum4(num1,num2){
    console.log(num1); 
    console.log(num2);
}
console.log(sum4(20)); //yeh undefined dega because yees case me function se kucch return nhi hua hai

// Output - 20 , undefined , undefined

// =================================================

// default parametrised function

function sum5(num1,num2=40){  // num2 is has default parameter
    console.log(num1); 
    console.log(num2);
}
console.log(sum5(20));

// Output -> 20 , 40 ,undefined

// =====================================================


function sum5(num1,num2=40){  
    console.log(num1); 
    console.log(num2);
}
console.log(sum5(20));

// =====================================================

function sum6(num1,num2=40){  
    console.log(num1); 
    console.log(num2);
}
console.log(sum6(20,60));


// ===================================================

function sum7(num1=40,num2){  
    console.log(num1); 
    console.log(num2);
}
console.log(sum7(20));  // 20 wil overwrite the num1(i.e 40 will convert to 20);


