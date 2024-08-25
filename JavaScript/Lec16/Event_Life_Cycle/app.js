let grandParent=document.getElementById('grandParent');
let parent=document.getElementById('parent');
let child=document.getElementById('child');


// ======================================================

// Event Bubbling Phase -> phale top to buttom jayega and then bottom se top tak console karte jayega and in this case UseCapture in EventListener will be False and bidefault useCapture in EventListner is false

// grandParent.addEventListener('click',()=>{
//     console.log('grandFather Click !!');
    
// },false)

// parent.addEventListener('click',()=>{
//     console.log('Father Click');
    
// },false)

// child.addEventListener('click',()=>{
//     console.log('child Click');
    
// },false)

// // Output->child Click Father Click grandFather Click !!

// Note- When we click on child it will propagate till top most element


// =======================================================

// Event Capture -> jaab useCapture=true hoga uus case me Event Capturing hogi and console will happen from top to bottom

// grandParent.addEventListener('click',()=>{
//     console.log('grandFather Click !!');
    
// },true)

// parent.addEventListener('click',()=>{
//     console.log('Father Click !!');
    
// },true)

// child.addEventListener('click',()=>{
//     console.log('child Click !!');
    
// },true)

// // Output-> grandFather Click !!  Father Click !! child Click !!

// ======================================================

// grandParent.addEventListener('click',()=>{
//     console.log('grandFather Click !!');
    
// },true)

// parent.addEventListener('click',()=>{
//     console.log('Father Click !!');
    
// },false)

// child.addEventListener('click',()=>{
//     console.log('child Click !!');
    
// },true)

// // Output-> grandFather Click !! child Click !!  Father Click !!


// ==========================================================

grandParent.addEventListener('click',(event)=>{
    console.log('grandFather Click !!');
    
},true)

parent.addEventListener('click',(event)=>{
    console.log(event);
    event.stopPropagation();  // yeske aage ke event ko hone se rook dete hai
    
    console.log('Father Click !!');
    
},true)

child.addEventListener('click',(event)=>{
    console.log('child Click !!');
    
},true)

// Output-> yeh sirf parent tak jayega and uske aage ka propagation ko rook(stop) kar dega
