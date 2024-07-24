function some(){

}

console.log(some()); //Output -> undefined


let p1=new function(){

}

console.log(p1); // Output-> Object  (simply  return empty object)


async function some1(){ // this function is a async

    // await->yees promise ke hone ka karna hai intezar
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 second ho gye");
            resolve();
        },3000);
    })

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2 second ho gye");
            resolve();
        },2000);
    })

    console.log("dono kaam ho gye");
}
some1(); 