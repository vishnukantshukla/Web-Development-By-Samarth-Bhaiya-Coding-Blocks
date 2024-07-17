function sum8(num1 , num2){
    return num1+num2;
}
console.log(sum8(10,20));  // It will give Output -> 30


let ans = sum8(10,'vishnu')
console.log(ans); // Output 10vishnu

console.log(typeof(ans));  // Output -> string  (because number(10) is typecasted to string) so that 10 & vishnu are string and now they are able concate and give output as result

let ans1 =sum8(10,true);  //Here 10 is a value and true is value 1 and output -> 10 + 1 = 11 (beacause yeh true ko 1 se typecaste kar dega)
console.log(typeof(ans1));
console.log(ans1);   

let ans2 =sum8('100',true);  //Here 10 is a string and true is also typecasted to string and output -> 100true (beacause yeh true ko string se typecaste kar dega)
console.log(typeof(ans2));  //string
console.log(ans2); //100true