let obj={
    evs : 90,
    cn : 90,
    web :100,
    maths : 10,
    total : function(){  //methods


        // console.log(90 + 90 + 100 +10);
        return (90 + 90 + 100 +10);
    },

    bulao : function(){
       return ("Vishnu ko bulao");
    }
}

console.log(obj.evs);
console.log(obj.total());  //method ke case me parethesis dege
console.log(obj.bulao());


// Note---> functions always returns us something , if we donot return anything then javascript automatically return undefined..