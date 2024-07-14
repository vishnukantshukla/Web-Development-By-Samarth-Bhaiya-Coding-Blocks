let arr5 = [10,20,30,40,50];

console.log(arr5);

// push  --> it is destructive method

// arr5.push(60);

let ans7=arr5.push(60);  // it will return the length of the array after adding the element on the array

console.log(ans7);
console.log(arr5);

// pop  --> it is a desctructive method

// arr5.pop();  

let ans6 = arr5.pop(); 

console.log(ans6);  // it will also return the last elemet which will be remove

// arr5.pop(30);  in case of pop the argument has no value so we never put value inside parenthesis 

console.log(arr5);

// shift --> it is a desctructive method

// arr5.shift();

let ans4=arr5.shift();  // it will return the removed value

console.log(ans4);

console.log(arr5);


// arr5.shift(30);  in case of shift the argument has no value so we never put value inside parenthesis

// unshift --> it is a desctructive method

// arr5.unshift(100);

let ans3=arr5.unshift(100);  // it will return the length of the array
console.log(ans3);

console.log(arr5);

console.log("============================================================================================");


// ==>  Some more Methods of Arrays



let arr =[10,20,30,40,50,60,70,80];

// console.log(arr);

// slice  --> it is a non-destructive method as yeh hamare array me permanent change nhi kar raha hai...

console.log(arr.slice(2));  // yeh saare index ke aage saare elements ko print kar dega

console.log(arr.slice(2,5)); // Here slice has two parameters first one is -> starting index and second one -> ending index (but ending index-1 tak chalega) 

// console.log(arr);


// splice -> it is destructive index

// console.log(arr.splice(3));  // yeh 3rd index se saare elements print kar dega

// console.log(arr.splice(3,5));  // here 3-> starting index , 5-> length


console.log(arr.splice(3,2,'vishnu','shukla',300))
console.log(arr);


let url = 'http://google.com/search/do/best/color/black';

let ans = url.split('/');

console.log(ans);   //it return an array


// join -> we can do this in both string and array both (it is non destructive method)

let ans5= ans.join('/');
console.log(ans5);

// concat -> it is non destructive method
let arr1 =[10,20,30,40,50,60,70,80];
let arr2=['Vishnu','kant','shukla'];


console.log(arr1.concat(arr2));

let str="Vishnukant";
let str1="Shukla";

console.log(str.concat(str1));

// Note-> concat is a non-destructive method and it is applicable for array and string..

// includes => it returns the boolean value;

let arr3= ['vishnu','shukla','ji'];
console.log(arr3.includes('shukla'));  // it will return true or false , if the value is present in array then it will return true, Otherwise it return the value

let str2="Vishnu";
let str3="shukla";

console.log(str2.includes('Vi'));

// indexOf

let arr4= ['vishnu','shukla','ji'];
console.log(arr4.indexOf('shukla')); //if the element is present in array then it will return index of that element  otherwise it will return -1;



let str4="Vishnu";
let str5="shukla";

console.log(str4.indexOf('u'));
//if the element is present in string then it will return index of that element  otherwise it will return -1;


// reverse

// let str6="vishnu";
// console.log(str6.reverse());  // it is not applicable for string

let arr6= ['vishnu','shukla','ji'];
console.log(arr6.reverse());
