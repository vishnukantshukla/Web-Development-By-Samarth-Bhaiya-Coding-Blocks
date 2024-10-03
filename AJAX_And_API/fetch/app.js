// Method 2 ->  How to get data using fetch()
// using fetch for url call

fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(function(response){   // yeh response ke sath resolve hua hoga
        console.log(response);// yesme hame abhi pura data nhi mila hai meta data/header mila hai

        return response.json(); // it also returns promise and yeh hame complete data dega .then() me jaab resolve hoga
        console.log(data);
        
        
    })
    .then(function(data){  // agar yeh .json resolve hoga to yeh kucch data se resolve hoga and yeh .json ko resolve karega

        console.log(data);
        
    })
    .catch(function(error){
        console.log(error); 
        
    })