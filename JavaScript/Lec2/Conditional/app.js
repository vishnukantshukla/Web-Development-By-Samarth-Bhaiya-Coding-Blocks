let BankAccountBalance = 600;

if(BankAccountBalance>=500){
    console.log(500);
}


if(true){
    console.log("This side is vishnukant shukla");
}

if(true) console.log("Shukla jii this side")



// if , else if statements

let age = 20;

if(age<=18){
    console.log("Allowed not to enter club");
}
else if(age<=22){
    console.log("Allowd to enter the club but can't drink");
}
else{
    console.log("Allow to enter the club and can also drink");
}



let age1= prompt("Please Enter your age");  // yeh pe jo input ham dege(chay integer hi kyu na ho) bo string ki form me store hoga..


let age2= parseInt(prompt("Please Enter your age"));
// yeh pe jo input ham dege(chay integer hi kyu na ho) bo string ki form me store hoga usse parseInt Integer me convert ka dega....



if(age1<=18){
    console.log("Allowed not to enter club");
}
else if(age1<=22){
    console.log("Allowd to enter the club but can't drink");
}
else{
    console.log("Allow to enter the club and can also drink");
}