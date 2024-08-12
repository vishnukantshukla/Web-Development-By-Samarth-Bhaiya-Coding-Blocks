
// 1->  inline way
function dosomethings(){
    console.log("This is a  inline way");
    
}

// Note-> jaab ham Click me pe click karunga to dosomething event triggered hoga


// 2nd way -> event handler property

// let btn = document.querySelector('button');  // yeh object return karega jisme btn me object me store hoga

// onclick

// btn.onclick=function(){
//     console.log("Hello everyone this is dusra tarika");
    
// }

// mouseenter event -> button ke anderjate hi red color ho jauyega

// btn.onmouseenter= function(){
//     btn.style.color='red';
// }

// mouseleave  event -> 

// button ko jaab ham leave karte hai to yeh color ho jayega

// btn.onmouseleave= function(){
//     btn.style.color='violet';
// }


// this is to show that  only 1 event is possible at a time because overwrite ho raha hai

// let btn = document.querySelector('button');

// function one(){
//     console.log("one");
    
// }
// function two(){
//     console.log('two');
    

// }

// btn.onclick=one;
// btn.onclick=two;

// Note-> yees case me function 2 hi sirf chalega because yaha overwrite ho raha hai to jaab bhi hame two function at the same time chalane ho uss case me ham EventListener ka use karte hai


// Solution : use EventListner

let btn = document.querySelector('button');

function one(){
    console.log("one");
    
}
function two(){
    console.log('two');
    

}

btn.addEventListener('click',one);
btn.addEventListener('click',two);