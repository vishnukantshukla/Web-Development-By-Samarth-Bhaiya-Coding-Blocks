function Person(firstname,lastname,mail){  //Person -> yeh prototype hai
    this.firstName=firstname;
    this.lastName=lastname;
    this.email=mail;
}

// Yeh pe khud ka function hi prototype hota hai (i.e Person khud hi prototype hai)

Person.prototype.pritName=function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

Person.prototype.getName=function(){
    return (`${this.firstName} ${this.lastName}`);
}
let person1=new Person('vishnukant','shukla','vishnu@gmail.com');
console.log(person1);
console.log(person1.email);
console.log(person1.getName());
person1.pritName();


// Class syntax


// ===== This is a syntax of class syntax ===================

class Person1{
    constructor(){  // simply constructor function ko run kar dega

    }
}

// ================================================

class Person2{
    constructor(firstname1,lastname1,mail1){
        this.firstName1=firstname1;
        this.lastName1=lastname1;
        this.email1=mail1;
    }
    getName(){  // yah pe prototype banane ki jagah pe function bana dete hai simple
        return `${this.firstName1} ${this.lastName1}`;
    }
    pritName(){
        console.log(`${this.firstName1} ${this.lastName1}`);
    }
}

// Note -> / yah pe prototype banane ki jagah pe function bana dete hai simple

let person2 =new Person2('vishnu','shukla','vishnu12@gmail.com');
console.log(person2);
console.log(person2.firstName1);
console.log(person2.email1);
console.log(person2.getName());
person2.pritName();
console.log(typeof(person2));  // Output -> object
