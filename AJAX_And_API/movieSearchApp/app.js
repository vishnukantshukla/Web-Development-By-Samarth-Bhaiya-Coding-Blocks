let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click',function(){ // input ke sath hamesha value kaam karega and inner text kabhi use nhi karege kabhi
    let searchText = input.value;
    console.log(searchText);
    
    let data = fetchData(searchText);

    input.value = ' ';
})


// api call karna

function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        // console.log(response);
        manipulateDom(response.data);
    })
    .catch(function(err){
         console.log("Error in Access the Data from API" , err)
    })
    
}


// dom change krega cheeze
function manipulateDom(datas){  // datas ke andar hai array
    // remove already movies present
    while(list.firstChild){ // yeese phale purane wale hate gye and then add karege new me
        list.firstChild.remove();
    }
  

    // add the movies in chat
    for(let data of datas){
       let figure = document.createElement('figure');

       if(data.show.image){  // when image is there in data then we will show movie otherwise we will  not show the image
          
         figure.innerHTML = `
            <img src = ${data.show.image.original} />
            <h2> ${data.show.name}</h2>
           
         `
          // <p>${data.show.summary}</p>
         list.appendChild(figure);
       }
    }

}