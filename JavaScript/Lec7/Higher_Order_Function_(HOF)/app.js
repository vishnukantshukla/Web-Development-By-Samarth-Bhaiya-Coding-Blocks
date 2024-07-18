// =====================================================

// condition 1-> when we pass function as a argument 
function a(vishnu){   // Higher Order function
    console.log("Hi i am inside a");
    vishnu();
}

function b(){
    console.log("Hi i am inside b function");
}

a(b); // So here 'a' is Higher Order Function and b function is passed as a arguments


// =====================================================

// condition ->2 When we return function 

function a1(){
    console.log("inside a1");
    function b1(){
        console.log("inside b");
    }
    return b1;
}
let temp = a1();
console.log(temp);


// =====================================================
console.log("=========================================================");
// Real life usage 



function getBoolean(arr){
    let result = [];
    for(let item of arr){
        if(typeof(item)==='boolean'){
            result.push(item);
        }
    }
    return result;
}

function getString(arr){
    let result = [];
    for(let item of arr){
        if(typeof(item)==='string'){
            result.push(item);
        }
    }
    return result;
}

function getNumber(arr){
    let result = [];
    for(let item of arr){
        if(typeof(item)==='number'){

            result.push(item);
        }
    }
    
    return result;
}

let arr= ['vishnu','vishnukant',true,false,10,20];
console.log(getBoolean(arr));
console.log(getString(arr));
console.log(getNumber(arr));



// Optimised Higher Order Function (Real life usage)

function getBoolean1(item){
    return typeof item === 'boolean'
}
function getString1(item){
    return typeof item === 'string'
}
function getNumber1(item){
     return typeof item === 'number'
}

function get(array , fun){
    let result = [];
    for(let item of array){
        if(fun(item)){
            result.push(item);
        }
    }
    return result;
}

let arr1= ['vishnu','vishnukant',true,false,10,20];
console.log(get(arr1,getBoolean1));
console.log(get(arr1,getString1));
console.log(get(arr1,getNumber1));