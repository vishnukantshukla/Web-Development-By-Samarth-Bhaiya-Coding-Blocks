// regular invocation

function fn(){  
    console.log(this);  // Jaab bhi regular function directly call hota hai uss case me this is pointing to window object
}
fn();


// Note -> whenever javascript code is run a  global execution context is created. When GEC is created along with it  global object is also created

// When we are working with broswer in this case this object is called window object

