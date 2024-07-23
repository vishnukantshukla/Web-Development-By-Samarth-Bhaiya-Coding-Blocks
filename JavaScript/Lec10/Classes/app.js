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



// Inheritance


class Person3{
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

class Student  extends Person3{  // yah pe inheritance use karege (extends ->  students can access the methods of person3)  and Student class me Parent class(Person3) ke saare properties access hai
    
    // Agar hame kucch property add karna hai to hame constructor ko overrite karna hoga

    constructor(firstname1,lastname1,mail1,groupNumber){
        super(firstname1,lastname1,mail1);
         // yeh yesliya kiya hai jisse derived class ki properties access kar ske (like firstname , lastname,mail);
         this.group=groupNumber;
        
    }
    getName(){   // yeh phale local me check karega and then it go to parent
        return `super se bhi uper ${this.firstName1} ${this.lastName1}`;
    }


}
let Student1=new Student('barack','obama','obamam@gmail.com',100);

console.log(Student1); // Yesme ham parents ki property bhi access kar pa rahe hai


console.log(Student1.getName());  // phale yeh local me check karega agar jaab local me nhi hoga taab bo parent pe jayega
