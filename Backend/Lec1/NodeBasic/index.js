let arr = process.argv;
console.log(arr);

// Note -> it will return array which contains two things . 1-  path the nodejs where it install and 2 - it contain the path of currrent file

// ============================================================================================================

// Note -> node index.js 10, 20, 30 Here 10,20,30 are inputs

let arr1 = process.argv.slice(2);
console.log(arr1);

for(let  i of arr1){
    console.log(i);
    
}

