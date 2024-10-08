let fs = require('fs');
// console.log(fs);  // yeh huge massive object with the help of this we will perform CRUD Operation

// CRUD -> (CREATE , READ , UPDATE , DELETE)

// CREATE or Write both same

let data = "This side is Vishnukant Shukla";
fs.writeFile('abc.txt',data,{
    encoding : 'utf-8',
    flag : 'w' // there arew various type of flag read -> 'r' , write-> 'w' 
 },(err)=>{
    if(err){
        throw err;
    }
    console.log("File Written Successfully");   
})


// Or second way

let data2 = "This side is shukla jii";

fs.writeFileSync('abc1.txt',data2); // yees case me object and callback option hota hai agar ham nhi bhi degeg to bhi chalega


// ===========================================

// READ OPERATION

fs.readFile('abc.txt',{
    encoding: 'Utf-8', // yeh yesliyea use karte hai to avoid buffer output ko i.e ham jis form me data chate hai usse form me dega (Utf-8 form me dega jisse ham proper read kar ske)
    flag : 'r'
},(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    
})

// Or method two

let data1 = fs.readFileSync('abc1.txt');

console.log(data1.toString());


// Note -> 1st wala is better then second


// UPDATE

fs.appendFile('abc.txt','I am From Bareilly',(err)=>{
    if(err){
        throw err;
    }
    console.log("Update successfully");
    
})

// OR

fs.appendFileSync('abc1.txt','I am From Shahjahanpur');


//DELETE

fs.unlink('abc.txt',(err)=>{
    if(err){
        throw err;
    }
    console.log("File Deleted Successfully");
    
})

// OR

fs.unlinkSync('abc.txt');


