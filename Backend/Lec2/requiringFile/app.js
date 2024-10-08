// file 2

// require('./index.js')
let math = require('./index'); // yeh automatically smj jata hai ki require me js file import hue hogi

console.log(math);  // empty object



// console.log(math.pi);
// console.log(math.ans1(5));
// console.log(math.ans2(2,3));

// destructure
// let {pi , ans1, ans2} = math;



// let {pii , ans1, ans2} = math;

let {pii: hello , ans1, ans2} = math;



console.log(ans1(5));
console.log(ans2(2,3));

console.log(hello);
// console.log(pii);// yeh aab nhi chale ga because hello ne overwrite kar diya hai







