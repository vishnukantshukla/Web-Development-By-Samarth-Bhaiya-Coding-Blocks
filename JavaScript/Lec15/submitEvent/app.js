// let formEl = document.querySelector('form');
// formEl.addEventListener('submit', function(event){
//     event.preventDefault();
    
    
//     console.log("Form submitted");
    
    
// })
// event.preventDefault() ->  in this event is a object and preventDefault() is a method inside event object jo jis element ke liye eventlistner lagaya hai uske Default behaviour ko rokh(stop ) kar deta hai




// Accessing the elements in the form

let formEl = document.querySelector('form');

formEl.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(formEl.elements); // yeh collections dega and index bhi dekh skte hai
    console.log(formEl.elements[0].value); // yeese ham form element ke value access kar payege
    console.log(formEl.elements[1].value);
    
})
