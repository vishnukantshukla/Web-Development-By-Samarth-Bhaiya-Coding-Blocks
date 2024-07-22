function anything(){
    let name = 'vishnukant shukla';
    function printName(){
        console.log(name);
    }
    // printName();
    return printName;
}

let fun=anything();//printnaam function yah pe return hoga
fun();

// Closure ->  reference lete hai sabhi chij ka jis jis paar yeh depend karta hai


// =========================================================


// real life uses


function counter(){
    let count=0;
    function getCount(){
        return count;
    }
    return getCount;
}
let counter1=counter();
console.log(counter1());



function counter2(){
    let count1=0;
    return {  // yah pe hame getcount ka direct access nhi hai
        getCount1 : function(){
            return count1;
        }
        
    
    };
}

// yah pe hamne object ka use yesliya kiya koyki ham multiple chije bhi retuen kara skte hai like increment in count , decrement in count

let counter3=counter2();
console.log(counter3.getCount1());


// application 

function counter4(){
    let count3=0;
    return {
        getCount3:function(){
            return count3;
        },
        increment:function(){
            // count3++;
            count3+=1;
        } ,
        decrement : function(){
            count3-=1;
        },
        reset : function(){
            count3=0;
        },
    }
}

let counter5 = counter4();
console.log(counter5.getCount3());
counter5.increment();
console.log(counter5.getCount3());
counter5.decrement();
console.log(counter5.getCount3());
counter5.reset();
console.log(counter5.getCount3());

