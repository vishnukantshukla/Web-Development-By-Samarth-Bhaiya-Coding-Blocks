// console.log(document)

// ========================== 1- getElementByTagName     ==================================

console.log(document.getElementsByTagName('h1'));  // it returns me array


let h1Arr = document.getElementsByTagName('h1');
// console.log(h1Arr[0]);
// console.log(h1Arr[1]);

// loop 
for(let item of h1Arr){
    console.log(item);
}

// ====================================

let para = document.getElementsByTagName('p');
console.log(para)


for(let item of para){
    item.style.color='red';
    item.style.border='2px solid brown'
}



// ==========================    2- getElementById     ====================================

let id =document.getElementById('vishnu');
console.log(id)


id.style.fontSize='70px';

// ==========================    3- getElementByClass     ====================================

let para1=document.getElementsByClassName('dom');

console.log(para1);// it will return array

for(let item of para1){
    item.style.border='5px solid red'
}
// ham yees array me push/pop opertion nhi kar skte

// ==========================    4- querySelector     ====================================

let h1=document.querySelector('h1');
console.log(h1); // 1st h1 jo encounter hua usse yeh sirf return karega (i.e sirf phala wala return karega)

let dom=document.querySelector('.dom');
console.log(dom); // 1st .dom jo encounter hua usse yeh sirf return karega

let vishnu = document.querySelector('#vishnu');  //for id (1st wala retuen karega sirf)

console.log(vishnu);


// ==========================    4- querySelectorAll    ====================================

let h1s = document.querySelectorAll('h1');
console.log(h1s); // they return a NodeList (yeh Array ki tarah similar hoti hai)

for(let item of h1s){
    console.log(item);  
}


let dom1=document.querySelectorAll('.dom');
console.log(dom1);

let vishnu1= document.querySelectorAll('#vishnu');
console.log(vishnu1);
