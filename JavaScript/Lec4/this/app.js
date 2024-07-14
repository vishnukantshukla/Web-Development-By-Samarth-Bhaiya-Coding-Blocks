let obj1={
    evs : 90,
    cn : 90,
    web :100,
    maths : 10,
    total : function(){  //methods
        return (90 + 90 + 100 +10);
    },

    bulao : function(){
       return ("Vishnu ko bulao");
    }
}

console.log(obj1.evs);
console.log(obj1.total());  //method ke case me parethesis dege
console.log(obj1.bulao());



// Using this keyword


let obj2={
    name : "vishnukant shukla",
    evs : 90,
    cn : 90,
    web :100,
    maths : 10,
    total : function(){  //methods


        // console.log(90 + 90 + 100 +10);
        return (this.evs + this.cn+this.web + this.maths);
    },

    bulao : function(){
       return (`${this.name} ko bulao`);
    }
}

console.log(obj2.evs);
console.log(obj2.total());  //method ke case me parethesis dege
console.log(obj2.bulao());


// Note---> functions always returns us something , if we donot return anything then javascript automatically return undefined..