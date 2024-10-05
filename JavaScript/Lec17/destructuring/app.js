// array destructuring

let fruits = ['apple','banana','gauva','mongo','orange'];


// earlier or older way
// let  first = fruits[0];
// let second = fruits[1];
// console.log(first);
// console.log(second);

// destructure an array

// console.log(vishnu);
let [first,second,vishnu,vishnu1,vishnu2,vishnu3=30]=fruits;  // ham destructuring me variable me kucch bhi naam de skte hai and ham default value bhi de skte hai 
console.log(first);
console.log(second);
// console.log(vishnu);
console.log(vishnu3);


let fruit = ['apple','guava','mango','grapes'];

let [vishnu5,shukla,third,fourth="ananas"]=fruit;
console.log(fourth);  // grapes aayega


// object destructuring
let car = {
    name : 'nano',
    price : 100000,
}


// this is a older way
// let n = car.name;
// let p = car.price;
// console.log(n);
// console.log(p);

// better and newer way

// let {n,p}=car  // wrong way becuase object are unordered in nature so ham name ke sath hi access karege

// let {name,price} = car; // right way
// console.log(name);
// console.log(price);

let {name:n,price:p} = car; // right way
console.log(n);
// console.log(name);// yeh error dega koyki hamne key hi change kar di
console.log(p);
// console.log(price); yeh error dega



let car1 = {
    name : 'nano',
    price1 : 100000,
}


// let {naam,price1} = car1;
// console.log(naam);  // undefined
// console.log(price1);

let {name:naam="maruti",price1} = car1;   // name me nano hi aayega koyki yeh maruti ko overwrite karega
console.log(naam);
console.log(price1);














