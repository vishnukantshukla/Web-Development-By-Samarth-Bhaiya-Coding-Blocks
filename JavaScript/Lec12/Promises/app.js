// promise  -> callback hell ya pyramind o DOOM se bachne ke liye ham promises ka use karte hai

let promise=new Promise(function(resolve,reject){
    setTimeout(function(){ // yeh data fetch karega to thod time bhi le skta hai to wait karaegye
        let data = 'hi dosto yeh promise hai';
        let err="oops dikkat aa gye"
        resolve(data);// agar data mil gya to resolve function ko call kar dege (mtlb mera kaam ho gua)

    },3000)
});   // yah pe bhi object banega new ki bjhe se. Since we are using Promise constructor so it will return promise (Promise -> reserved keyword)


promise.then(function(data){
    console.log(data);
}) //resolve wala kaam .then me likhte hai


let promise1=new Promise(function(resolve,reject){
    setTimeout(function(){ 
        // let data = 'hi dosto yeh promise hai';
        let err="oops dikkat aa gye"
        reject(err); // suppose hamara kaam pur nhi hua koye dikkat aa gye
        // resolve(data);

    },3000)
});  

// promise.then(function(data){
//     console.log(data);
// }) //resolve wala kaam .then me likhte hai\

promise1.catch(function(err){
    console.log(err);
}) // reject wala kaam .catch me likhte hai




// Note->  ham yeh kabhi promise likhte nhii hai ham sirf .then() ya .catch () pe kaam karte hai in real world

let promise2=new Promise(function(resolve,reject){
    setTimeout(function(){ 
        // let data = 'hi dosto yeh promise hai';
        // let err="oops dikkat aa gye"
        // reject(err); // suppose hamara kaam pur nhi hua koye dikkat aa gye
        // resolve(data);
        resolve('hi mai resolve ho gya'); // ham aak hi likh skte hai either resolve ya reject

    },3000)
});  


// yees case me ya to promise resolve hoga ya reject
promise2.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
}) 



let p1=new Promise((resolve,reject)=>{
    // yeh console immdeiately chalega
    console.log("3 second ka wait karo in process.....");
    // hame yeh immedialtely function nhi chalana hai yeh uske liye ham SetTimeout() use karte hai
    
    setTimeout(()=>{
        // resolve();
        reject();
    },3000);
});
// p1.then().catch()
p1.then(()=>{
    console.log("kaam process ho gya");
}).catch(()=>{
    console.log("error aa gye");
})


// .then()  chaining --> yeh problem arise kar rahi hai

let p2=new Promise((resolve,reject)=>{
    console.log("3 second ka wait karo in process.....");
    setTimeout(()=>{
        resolve();
        // reject();
    },3000);
});
p2.then(()=>{
    return new Promise((resolve,reject)=>{
        console.log("Promise run kar diya hai wait karo");
    
        // kucch wait karne ke liye hamna setTimeout likha hai
        setTimeout(()=>{
            console.log("2 second lag gye bhai sahab");
            resolve();
        },2000)
    })
}).then(()=>{
    console.log("Dono kaam ho gye hamare");
})



