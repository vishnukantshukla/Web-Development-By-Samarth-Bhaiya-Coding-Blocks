console.log("start");
console.log("run after 4 second");

// Hamare paas aasa kucch nhi hai jo ki ham JS ko stop kar ske.
console.log("end");



// SetTimeout(callback function,delay in milliseconds(ms));

// SetTimeout(()=>{},4000);

console.log("start");
setTimeout(function(){  // yah pe browswer timer laga dega 4 sec ka (broswer ke paas storage hoti hai bha pe yeh store ho jayega (client side pe))
    console.log("run after 4 second");
},4000)
console.log("end");

// Output-> start,end, (After 4 second) run after 4 second

// Questions
console.log('start ji');
setTimeout(function(){
    console.log('After 2 second');
},2000);
//After 2 second 4 sec chal jayega
setTimeout(function(){
    console.log('After 4 seconds');
},4000);
console.log('end jii');


// Question
console.log('start ji');

setTimeout(function(){
    console.log('After 4 seconds first');
},4000);

setTimeout(function(){
    console.log('After 2 second second');
},2000);

console.log('end jii');

// Note -> hame usse koye mtlb nhii haiki ham 2sec wala phale likhe ya 4 sec wala but callback me bahi phale jayega jiska time kaam hoga

// Question

console.log('start ji 1');

setTimeout(function(){
    console.log('After 0 second second');
},0);  // jaab tak callstack khali nhi hoga taab tak yeh nhi chalega (jaab callstack khali hoga taab yeh event loop ki help se callstack me jayega and execute hoga)

console.log('end jii');





