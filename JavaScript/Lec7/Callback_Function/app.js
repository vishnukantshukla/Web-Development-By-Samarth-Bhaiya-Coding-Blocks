function getBoolean1(item){
    return typeof item === 'boolean'
}
function getString1(item){
    return typeof item === 'string'
}
function getNumber1(item){
     return typeof item === 'number'
}


// here fun is called callback function
function check(item , fun){
    return fun(item);  // yeh fun(function ke andar fun ko call kiya) calling ki bjhe se callback function hai
}

console.log(check(true,getBoolean1));
console.log(check(19,getNumber1));

console.log(check('vishnu',getString1));
