console.log('Hi i am free');

// block

{  // ham block ko aase bhi bana skte hai
    console.log('Hi i am a block');
}

// scope

let score = 50;
if(score>33){
    let x=20;

}  // yeh pe block khatam ho gya to uske scope bhikhatam ho jayega

// ham yeese check kar skte hai inspect -> source-> app.js -> script-> bha pe score inital undefined hoga because (let and const first come in Script scope);

console.log(x); // Output -> Reference Error (x is not defined)