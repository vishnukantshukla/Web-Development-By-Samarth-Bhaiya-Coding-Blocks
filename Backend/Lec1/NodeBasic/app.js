let PI = 3.145;
let magicNum = 68;

console.log("Vishnukant Shukla");

function sqr(num){
    return num*num;
}

let obj = {
    first : "Vishnukant",
    last : "Shukla",
    getName : function(){
        console.log(this.first +" "+ this.last);
        
    }
}

console.log(PI);
console.log(magicNum);
console.log(sqr(6));
console.log(obj.getName());




