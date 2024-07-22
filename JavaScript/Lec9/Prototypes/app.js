// Prototypes
let todo={
    title : 'buy flowers',
    desc : function(){
        return `your task is to ${this.title} `
    }
};
console.log(todo.title);
console.log(todo.desc());
console.log(todo.vishnu);  // yeh undefined dega koyki yeh hai nhi
console.log(todo.toString()); // because of prototypes


// ===========================================================================================

// (.__proto__) -> it is called dender proto (yeh aak method hai) [In order to find the prototype (parents pe jayege) to ham dender proto ka help lenge]


// =========================================================================================


// console.log( todo.__proto__);

console.log(todo.__proto__==='vishnu'); //false

console.log(todo.__proto__ === Object); // yeh false
console.log(todo.__proto__ === Object.prototype);  // yeh true hai (koyki todo ka prototype object ke prototype hai)

console.log(Object.prototype.__proto__);  // The paretnt of object.prototype is null so its output is null

// console.log(Object.prototype); yeh toString() method ko contain karta hai


