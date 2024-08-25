let products = document.querySelectorAll('section figure');
// console.log(product);


// ======================================================

// it is not the optimise way 

// for(let item of products){
//     item.addEventListener('click',function(){
//         console.log(this.innerText);
        
//     })
// }

// Drawback-> dynamically add karege new element ko DOM me to dikkat aayege because yeh phale hi querySelectorAll ki helps se sarre elements read kar chuka hai and new Eleemnt ko read nhi karega


// Solution-> we use Event Delegation

// =============================================================

// Event Delegation -> parent par event lagao rather then child per

let section = document.getElementById('container');
section.addEventListener('click',function(e){
    // console.log(e);
    if(e.target.nodeName === 'FIGURE'){  // this is a conditional rendering  (e.target me nodeName hai)
        console.log(e.target.innerText);
    }
    
    
    
})