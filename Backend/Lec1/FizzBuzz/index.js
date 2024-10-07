// approach 1:  Rejected because % is a heavy operation because behind the scene yeh internlly loop chalalata hai  jo microprocessor ko loaded karta hai

function fizzbuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log(i,"->","FizzBuzz");
            
        }
        else if(i%3==0){
            console.log(i,"->","fizz");
        }
        else if(i%5==0){
            console.log(i,"->","Buzz");
            
        }
        else{
            console.log(i,"-> "+i);
        }
    }
}
// fizzbuzz(20);


// approach 2 -> little optimised

function fizzbuzz2(n){
    for(let i=1;i<=n;i++){
        let str = '';
        if(i%3==0){
            str+='Fizz';
        }
        if(i%5==0){
            str+='Buzz';
        }
        if(str==""){
            str+=i;
        }
        console.log(str);
        
    }
}

// fizzbuzz2(20); 



// Approach 3-> most optimised Approach

let cnt3 = 1;
let cnt5 = 1;
function fizzbuzz3(n){
    for(let i=1;i<=n;i++){
        let str = '';
        if(cnt3==3){
            str+='Fizz';
            cnt3=0;
        }
        if(cnt5==5){
            str+='Buzz';
            cnt5 =0;
        }
        if(str== ""){
            str+=i;
        }
        console.log(str);
        cnt3++;
        cnt5++;
        

    }
}
fizzbuzz3(20);