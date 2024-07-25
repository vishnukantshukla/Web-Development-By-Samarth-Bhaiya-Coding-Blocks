
// ======== getAttribute =========


let anchor = document.querySelector('a');
console.log(anchor.getAttribute('href'))// href bhi attribute hai yeski value mil jayege

console.log(anchor.getAttribute('class'))  // class bhi attribute hai yeski value mil jayege


// =============== setAttribute ============

let anchor1 = document.querySelector('a');
anchor1.setAttribute('href','http://facebook.com'); // 1st argument kise set karna hai 2nd argument kisse set karna hai
console.log(anchor1.getAttribute('href'));



// rel world usage
 let h1 =document.querySelector('h1');
 h1.setAttribute('class','vishnu'); // hamne attribute ki help se class add kar de


 let input = document.querySelector('input');

 console.log(input);
//  input.setAttribute('type','date');
//  input.setAttribute('type','color');
//  input.setAttribute('type','checkbox');
input.setAttribute('type','password');

