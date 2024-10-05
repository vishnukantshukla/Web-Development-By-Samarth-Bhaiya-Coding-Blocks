let arr1=[10,20,30,40];
let arr2 = [50,60,70,80];


//concat
let arr3 = arr1.concat(arr2);
// console.log(arr3);


// spread operator --> it is a modern way

// arr2  = [...arr1,50,60,70];
// console.log(arr2);

arr4  = [...arr1,...arr2];
console.log(arr4);


// for object

let obj = {
    l : 10,
    m : 'vishnu',
    n : 'shahjahanpur'
}

let obj2 = {
    ...obj,
    age : 27,
}
console.log(obj2);

// now we want to remove property object
delete obj.m; // delete object.property(method)
console.log(obj);


// why we use spread

