let ul = document.querySelector('ul');
let req =new XMLHttpRequest();

// Connection banana hai first basically

req.open('GET','https://api.tvmaze.com/search/shows?q=girls');

// Bhejna hai Apni Request/ Demand ko
req.send();

// Jaab saare sahi salamat data mil jaye or saara kaam sahi se ho jaye
req.onload = function(){
    console.log(this,'Vishnu'); // yeh request ko point karega
    // console.log(this.response);  yesse data access kar skte hai

    let Info = JSON.parse(this.response);
    console.log(Info);

    for(let d of Info){
        let li = document.createElement('li');
        li.innerHTML = `
         <img src= ${d.show.image.original} height="100px" />
         <span>${d.score}</span>
        `
        ul.append(li);
        
    }
    
    
}

// lekin agar koye error ya dikkat ho jaye to
req.onerror = function(){
    console.log(this);
    
}


