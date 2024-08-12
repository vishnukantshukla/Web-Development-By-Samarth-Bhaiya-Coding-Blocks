let inpEle = document.querySelector('input');

function fun(event){ // anyname de skte hai but ham generally 2 naam dete hai 1-> e ya 2-> event

    // console.log(event);
    // console.log(event.target);
    console.log(event.target.value);

    
    
    console.log("input Event chal gaya");
    
}
inpEle.addEventListener('input',fun )