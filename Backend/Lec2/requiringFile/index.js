// file 1

let pi = Math.PI;
console.log(pi);

// let ans = (num)=>{return num*num};

let ans1  = num => num*num;  // yeh upar wale ki tarah bilkul same hai
console.log(ans1);


let ans2 = (a,b)=> a+b;
console.log(ans2);


// app.js me ham jaab yees index.js ko require karege  to bo autoamtically use module define kar dega and not index.js bidefault export behaviour show karega becoz require dekh liya

// by default  export an empty object nicche wala ham likhe ya  nhi likhe phir bhi

// module.exports = {};  // by default empty object


// module.exports= {pi,ans1,ans2};  // yah pe hamne by default empty object ko overwrite kar diya hai  

// why module export not this be a key-value pair ?

// Ans
//  module.exports = {
//     pi : pi,   //  --> pi
//     ans1 : ans1, // --> ans1
//     ans2 : ans2  // --> ans2

//  }

 // since key and value are same to ham single element likh kar kaam chala skte hai i.e pi:pi -> pi


//  so finaly ham likh skte hai

module.exports = {
    pii:pi,
    ans1,
    ans2,

 }

// obj = key : value