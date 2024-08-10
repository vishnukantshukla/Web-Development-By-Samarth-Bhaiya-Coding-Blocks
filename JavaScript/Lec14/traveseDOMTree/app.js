// properties (these are not methods and properties can never be run)


// 1- Parent

let para1= document.querySelector('#para1');
let arti= document.querySelector('#arti1');

let div3= document.querySelector('#div3');

console.log(para1.parentElement); // it will return whole article

// console.log(para1.parentElement()); // wrong



console.log(para1.parentElement.parentElement); // section

console.log(para1.parentElement.parentElement.parentElement.parentElement.parentElement);  // Parent of HTML is null

//2-  Children
console.log(arti.children); // it will return HTML 
// console.log(arti.children()); // wrong way

let coll=arti.children;
for(let item of coll){
    item.style.fontSize = '24px';
}


// 3-Siblings (nextElemnt Sibling)
console.log(div3.nextElementSibling);  // yeh next sibling dega

// previous sibling

console.log(div3.previousElementSibling);

// to add new Element

