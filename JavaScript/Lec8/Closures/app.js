function someFunc(){
    let username = 'vishnukant shukla';
    function printName(){
        console.log(username); 
    }
    printName();
}
someFunc();

function someFunc1(){
    let username = 'vishnukant shukla';
    function printName1(){
        console.log(username); 
    }
    return printName1;
}
let returnValue=someFunc1();

returnValue();