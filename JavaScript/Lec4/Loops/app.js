// for loop
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(i===j){
           break;
        }
        else{
            console.log(i , j);
        }
        
    }
}


// while Loop
let num=100;
while(num>=0){
    console.log(num);
    num=num-10;
}

// for-in  loop  ==> (objects)

let person={
    name:"vishnukant",
    age:21,
    isMale:true
}

for(let item in person){
    console.log(`${item} --> ${person[item]}`);
}



console.log("================================================================");

// for-of loop ==> (arrays,maps,lists,vectors)


let arr= ['vishnu','sam','shukla','jay'];
for(let item of arr){
    console.log(item);
}

