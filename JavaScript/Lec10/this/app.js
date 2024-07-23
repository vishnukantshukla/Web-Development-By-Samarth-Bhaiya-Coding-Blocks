// regular invocation

function fn(){  
    console.log(this);  // Jaab bhi regular function directly call hota hai uss case me this is pointing to window object
}
fn();


// Note -> whenever javascript code is run a  global execution context is created. When GEC is created along with it  global object is also created

// When we are working with broswer in this case this object is called window object



// 2-> Method Invocation

let obj = {
    number : 2,
    fn : function(){
        console.log(this);
    }
}
obj.fn();  // this is pointing to the object over which it is called (i.e "obj" ki bjhe se "fn function "" run ho raha hai so "this" is pointing to  "obj")

// Question
let obj1 = {
    number : 2,
    fn : function(){
        console.log(this);
    }
}
let myfun=obj1.fn
myfun();  // in this case "this" pointing to window  (regular calling or invocation)

// Question
let obj3 = {
    fn : function(){
        function calculate(){
            console.log(this); // this will point to window object
        }
        calculate();  // yeh Regular invocation(or Regular calling)

    }
}
obj3.fn();


// 3- Constructor function calling

function CreateObj(){  // this will point to  CreateObj (i.e it will point to the newly created object)
    this.x = 20;

}

let obj4=new CreateObj();  // this point to CreateObj
console.log(obj4.x);
console.log(obj4);


// Note -> in this case new created object ko this point karega hamesha


// 4- Indirect Calling //ploymorphism achieve ho raha hai with call and apply

// 4.1-> .call() , 4.2 -> .apply() , 4.3-> .bind()



let obj5={
    a :20,
    fn : function(){
        console.log(this);
    }
}
obj5.fn();  // this is pointing to obj5

let obj6 = {
    a:50
}
// obj6.fn(); //error dega


// .call() 

obj5.fn.call(obj6);  // here  this is now pointing the obj 6

// Note -> jaab bhi .call() method ka istemal kr rahe hote ho tab jo aap call ke andar mentio  krte ho apka "this" usse point karta hai (i.e here this obj6 ko point kar raha hai)


// .apply()


let obj7={
    a :20,
    fn : function(a,b,c){
        console.log(this , a, b, c);
    }
}

let obj8  = {
    name : 'vishnukant'
}
obj7.fn.call(obj8,1,2,3);  // here obj8 is provind context or reference to this and (1,2,3 etc ) are the arguments (i.e obj8 this ka context hoga and uske aalwa ham ketne bhi arguments bhej skte hai )
obj7.fn.apply(obj8,[5,6,7]);


// .bind()

let obj9={
    fn:function(){
        console.log(this);
    }
}

obj9.fn(); // this is pointing to obj9
let myfun1=obj9.fn.bind(obj9); // bind ke andar context of this 
myfun1();  // yeh sirf aab obj9 ko hi point karega



 