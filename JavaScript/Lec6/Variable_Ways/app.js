// const way1

const email="vishnu@gmail.com";

console.log(email);

// Can we redeclare it ? Answer -> NO


// const email="vishnu1@gmail.com";   // So redeclare is not possible

// Can we reassign it ? 
// Answer-NO

// email = "vishnu1@gmail.com";
// console.log(email); So reassign is not possoble


// ======================================================================

// Questin:-

// Invalid -> jaab bhi const se initilize karege variable ko to uski value dena compulasory hai otherwise it will through the error

// it is invalid way to initilise variable using const

// const naam;  
// naam="vishnukant-shukla";  it is not a possible because reassigning 

// ========================================================================


// Let way 2

let var_name='vishnukant shukla';
console.log(var_name);

// can i redeclare it ? 
// Answer-> NO

// let var_name=100; //it is not possible in case of let to redeclare

// Can we reassign it ?
// Answer - Yes

var_name='vishnu';
console.log(var_name);  // reassign is possible in case of  let

// ============================================
// it is valid in case of let
let varnaam;
varnaam=100;
console.log(varnaam);

// ==============================================


// var Way3

var college=true;
console.log(college);

// can i redeclare it ?
// Answer -> Yes
var college =100;
console.log(college);

// Can i reassign it ?
// Answer=> Yes

college=500;

console.log(college);


// =================================
// it is valid in case of var 

var vishnu;
vishnu=100;
console.log(vishnu);


// ======================