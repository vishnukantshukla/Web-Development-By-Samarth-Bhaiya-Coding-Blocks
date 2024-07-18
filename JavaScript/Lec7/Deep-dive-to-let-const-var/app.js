console.log('Hi i am free');

// block

{  // ham block ko aase bhi bana skte hai
    console.log('Hi i am a block');
}

// scope

// Question-1

let score = 50;
if(score>33){
    let x=20;

}  // yah pe block khatam ho gya to uske scope bhi khatam ho jayega

// ham yeese check kar skte hai inspect -> source-> app.js -> script-> bha pe score inital undefined hoga because (let and const first come in Script scope);

//console.log(x); // Output -> Reference Error (x is not defined)


// Question-> 2

let x1 = 10;  // phale yees Sript scope mila
{  // yeska alag scope hoga

    let x1 =20;
    console.log(x1); // 20 (because yees x1 ki value block scope me hai)


}// jab block khatam ho jayega to yeska scope bhi khatam ho jayega

console.log(x1);  // 10 print karega because Yeh Script ke hai


// Question 3->

let x2=40;
{
    console.log(x2);
}
console.log(x2);

// =====================================================


// var


// Question ->4
var x3 = 10;
{
    var x3 = 20;
    console.log(x3);
}

console.log(x3);
// Output --> 20 20

// yeess case me yeh hua initially me x3 me Global scope me undefined diya in MCP and then in CEP (it will check and then overwrite the value of x3 to x3=10; and since var has a functional scope so block se kucch affect nhi padega and then again it redeclare the x3 and Modify the value of x3 in Gobal scope that is why uska output => 20 ,20 aa raha hai)

// =====================================================

// Question - 5

var x4 = 10;
{
    x4 = 20;  // ham var ke case me reassign bhi kar skta hu
    console.log(x4);
}

console.log(x4);
// Output --> 20 20


// ===================================================

// Question -> 5
var a = 100;

function fun(){
    var a = 50;
    console.log(a);
}

fun();
console.log(a);

// Output ->  50 100

// ham sirf function and variable ko memory allocate karte hai


// yees case me jab program ko run karege taab Global Execution Context banega in which a is in Global scope and its value initilize to undefined (i.e x = undefined) and the whole function will come in MCP(Memory creation phase), Now CEP will come and check whether the x is present in MCP and then will overwrite the value of x (i.e x =100) and then fun will call then new Exection Context will create then Local or functional scope is created  it has a varible "a" which is initilize to undefined in MCP and the CEP will check and overwrite the value of a (i.e a = 50) and then it console the output  Once the function execute it will terminate (khatam ho jayega) and now CEP will check in its local memory(i.e MCP ) and console the value a =100;

// ===================================================


// hoisting -> access variable and function before its initilization

// Question - >  6 
// console.log(a1);
//console.log(b1); // b ki value Dead Temporal zone and it cannot be accessed (but usse yeh malum hai ki b variable hai but usse value nhi mili hai ) (Variable hai but Js ko abhi nhi pta hai uske baare me)
console.log(c1);

var a1 = 10;
let b1 = 100;  
const c1 = 1000;