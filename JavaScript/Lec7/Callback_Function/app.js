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
function check(item , fun){   // Here check is ha higher order function
    return fun(item);  // yeh fun(function ke andar fun ko call kiya) calling ki bjhe se callback function hai
}

console.log(check(true,getBoolean1));
console.log(check(19,getNumber1));

console.log(check('vishnu',getString1));


//  Note -> jaab kisi function ko dusre function ke andar call kar de and then jaab bo funtion me capture hoga to usse function ke andar usse call kar de That type of function jise ham permetrised ki tarah pass karde and usse ko call kare function ke andar they are called callback fucntion

// Simply we can say that jis fucntion ke andar ham dusre function ko as a prmetrised bhej de and jis function ke andar usse bhejte hai usse me call bhi kar de this are called tge fucntion which we send as a argument are called callback and jis function ke andar ham bhejte hai they are called higher order funtion..