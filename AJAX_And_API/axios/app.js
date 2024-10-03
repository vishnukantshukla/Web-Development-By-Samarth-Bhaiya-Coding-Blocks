// method 3 -> axios
axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    console.log(response);
    
})
.catch(function(err){
    console.log(err);
    
})

// Note -> axios is a third party library and sabse best hai yeh as compare to fetch and XMLHttpRequest().