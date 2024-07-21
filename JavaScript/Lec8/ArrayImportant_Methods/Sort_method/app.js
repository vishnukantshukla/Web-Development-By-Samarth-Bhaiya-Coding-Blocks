let arr= [12,13,5,2,4,8,7,6];
let newArray=arr.sort()
console.log(newArray);

// let arr1=['vishnu','shukla','sid','mohit','amar',"Amit","AAmit"];
let arr1= [12,13,5,2,4,8,7,6];

let newArray1=arr1.sort(function(a,b){
  //  return a-b; // ascending order
    return b-a; //descending order (a-b ya b-a dono comparator hota hai)
});
console.log(newArray1);