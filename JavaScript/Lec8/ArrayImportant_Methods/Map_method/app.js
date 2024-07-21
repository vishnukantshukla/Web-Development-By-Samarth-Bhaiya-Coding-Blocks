// Map method ->  it  is a method of array(yeh method array ke upar lagta hai ) and it return new Array

let marks = [10,20,30,40,50];

let newMarks = marks.map(function(item){
    return item*2;
})

console.log(newMarks);

let newMarks1 = marks.map(function(item,index){
    return [item*2,index];
})

console.log(newMarks1);