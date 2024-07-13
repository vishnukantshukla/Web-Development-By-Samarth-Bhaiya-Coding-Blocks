let arr = [1,2,3,4,5]

console.log(arr);

console.log(arr[31]);   // yeh output me undefined dega


let arr1 = [1,2,3,'vishnu','sam','shanu',null, undefined,true];

console.log(arr1);
console.log(arr1.length);  // it is used find the length of array

let ans=console.log(arr1[3]);   // ham console karte time value ko store nhi kar skte

ans2=arr1[3];
console.log((typeof(ans2)));  //string ya number ho  skte hai according to the value (yeese kar skte hai but ham console ki value store nhi kar skte hai);


console.log(typeof(ans));//undefined


let ans1= console.log;
console.log(typeof(ans1));  // funtion



let arr3 = [1,2,3,'vishnu','sam','shanu',null, undefined,[10,'vishnu123',30],true];

console.log(arr3[8]);  // to access array inside array

console.log(arr3[8][1]);  // to access array inside array


let arr4 = [1,2,3,'vishnu','sam','shanu',null, undefined,[10,'vishnu123',30,[50,60]],true];

console.log(arr4[8][3][1]);  // we can do multiple nesting of array
