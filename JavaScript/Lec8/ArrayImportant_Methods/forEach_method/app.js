
// forEach() ->  it is not a function but it is a method of array

let students = ["vishnu","sid","yuvi","mohit","kaju"];
students.forEach(function(val){  //val(kucch bhi de skte hai Ex- vishnu,item,val kucch bhi de skte hai) -> it is a iterator which go all the element of the array
    console.log(val);
})

console.log(students);

let fruits = ["apple","mango","banana","orange","pineapple"];
// iterator basically point out 1 by  1 all the element of array

fruits.forEach(function(val , index){ // ham two arguments ko bhi pass kar skte hai val-> hamare array ke elements ko lenge and index -> usse element ki index ko  
    console.log(`index was ${index} --> juice was ${val}`);
  
})

// forEach()-> it doesnot return any thing and it is just like looping

// val is compulsory but index is optional 

