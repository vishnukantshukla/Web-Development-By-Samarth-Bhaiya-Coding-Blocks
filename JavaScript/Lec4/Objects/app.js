let person = {
    // key -> value
    name : 'Vishnukant',  //property 1
    age:21,               //property 2
    isMale:true,          //property 3
    favColor:'Blue'       //property 4 

};

console.log(person);

console.log(person.name);  // Here person ->  object , '.' -> dot operator , 'name' -> it is a property

console.log(person.age);

console.log(person.isMale);

console.log(person.favColor);

console.log(person['name']);  //yeh objects ko bhi bhi array ki tarahe access kar skte hai...



let person2=person;
console.log(person2);
console.log(person2.age);
person2.name="Vishnukant shukla"
console.log(person2.name);
console.log(person.name);

// object is also passed by reference