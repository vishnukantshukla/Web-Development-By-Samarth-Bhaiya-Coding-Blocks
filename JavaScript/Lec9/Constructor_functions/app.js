function fun(){

}
let naam = fun();
console.log(naam); // yeh undefined dega as a output


// constructor
function user(){

}
let user1 = new user();
console.log(user1);  // Output -> yeh Empty Object return karega

function user2(){
    this.username = 'vishnukant shukla',
    this.email='vishnukant@gmail.com'
}
let user3 = new user2();
console.log(user3);  // Output -> yeh Empty Object return karega

function user4(user,email){  // yeska prototype is prototype created by me (hamne khud user ko generate kiya hai)
    this.username = user,
    this.email=email,
    this.description =function(){
        return  `my name is ${this.username}`
    }
}
let user5 = new user4('vishnukant shukla','vishnukant@gmail.com'); //onject 1 with same property
let user6 = new user4('coding blocks','codingblocks.india@gmail.com'); // object 2 with same property
console.log(user5); 
console.log(user6); 
console.log(user5.description());
console.log(user6.description());


// Aab description function is same of all user instead of repeating ham User ke prototype(parent pe bhej dege ) jisse hame usse directly access kar ske

function user7(user,email){  // yeska prototype is prototype created by me (hamne khud user ko generate kiya hai)
    this.username = user,
    this.email=email
    
};

// Hamne apna khud ka prototype (User banaya hai)

user7.prototype.description=function(){  // yesse hamne apne prototype ke anadar khud add kar diya hai
    return  `my name is ${this.username}`
}

let user8 = new user4('vishnukant shukla','vishnukant@gmail.com'); //onject 1 with same property
let user9 = new user4('coding blocks','codingblocks.india@gmail.com'); // object 2 with same property
console.log(user8); 
console.log(user9); 
console.log(user8.description());
console.log(user9.description()); 
 

