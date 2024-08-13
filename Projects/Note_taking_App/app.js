// selecting input

let titleEle = document.getElementById('title');

// selecting the ul (unordered list)
let listEle = document.getElementById('list');

// selecting btn for the event triggering 
let addButtonEle = document.getElementById('add-btn');

addButtonEle.addEventListener('click',function(event){
    // extracting the value from input
    let titleText = titleEle.value;

    // creating the value from input
    let li = document.createElement('li');
    
    // inserting the text inside li from the input value

    li.innerHTML= titleText;

    // newly created li hai usse append/add karna
    
    listEle.appendChild(li);
})

