function GradeCalculator(a){
    if(a>=80){
        return "O Grade";
    }
    else if(a>=60){
        return "A Grade"
    }
    else if(a>=40){
        return "B Grade"
    }
    else if(a>=30){
        return "C Grade ";
    }
    else{
        return "Fail";
    }
}

let res=GradeCalculator(45);
console.log(res);

console.log(GradeCalculator('sam'));  // yesne internally typecast kar liya hoga yesliyea yeska output "Fail"  aayega


