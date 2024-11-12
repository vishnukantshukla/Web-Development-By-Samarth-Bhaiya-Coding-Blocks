const fs  = require('fs');

// fs.writeFile('abcd.txt',"Hi this side is Vishnukant Shukla",{
//     encoding:'utf-8',
//     flag: 'w'
// },(err)=>{
//     if(err){
//         console.log("Error is ",err);
//     }
//     console.log("File written Successfully");

// });

fs.writeFileSync('abcd.txt',"Hi this side is Shukla jii");

fs.readFile('abcd.txt',{
    encoding : 'utf-8',
    flag:'r'
},(err)=>{
    if(err){
        console.log("Error is ", err);
    }
    console.log("Read File suceessfully");
    
})
