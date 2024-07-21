// Filter -> it is a method of Array , it also acccept the callback function,it return new Array, Yeh bo value add karta hai new Array me jha pe condition true hogi and jha pe condition false hogi uun value ko new Array me add nhi karta hai(Sach bolne wale item(jo condition ko fulfill karte hai) bo item new Array me add hote hai)

let marks = [1,2,3,4,5,6,7,8,9,10];
let newMarks=marks.filter(function(item){
    if(item>=5){
        return true;  // yeh item new Array me add hoga (koyki yenki consition true hai)
    }
    return false;  // yeese condition pe hamara item new Array me add nhi hoga
})

console.log(marks);
console.log(newMarks);

let newMarks1=marks.filter(function(item,index){
    if(item>=5){
        console.log(index);  // yeh wahi index print karta hai jo condition ko true kar rahi hai and ham filter me kbhi index return nhi kar skte it can only return value
        return true;  // yeh item new Array me add hoga (koyki yenki consition true hai)
    }
    return false;  // yeese condition pe hamara item new Array me add nhi hoga
})

console.log(marks);
console.log(newMarks1);

// undefined is also falsy value(i.e false hoti hai)