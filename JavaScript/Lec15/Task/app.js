let btn = document.querySelector('button');
let bodyEle = document.querySelector('body');

function changeBodyColor(){
    bodyEle.style.backgroundColor='red'
}
btn.addEventListener('click',changeBodyColor)

// onclick -> aak baar click kiya to chala

// doubleclick ->  2 baar click kiya to chala


function meraFunction(){
    console.log("Two times dabaya hai ek baar nhi");
    
}
btn.addEventListener('dblclick',meraFunction); //dbl-> double