let buttons = document.querySelectorAll('button');
// yeh array dega koyki saare button ko click kar skte hai
let input = document.querySelector('input');
let intervalId;
for(let button of buttons){
    button.addEventListener('click',function(event){
        let btnText = event.target.innerText;
        if(btnText==='AC'){
            input.value='';
        }
        else if(btnText==='='){
            
            try{
                let result=eval(input.value);  // yeh eval method hota hai to Html ke anadar mathematical calculation perform karke de deta hai
                input.value=result;
            }
            catch(e){
                input.value='Invalid syntax';
            }
            intervalId=setInterval(() => {
                input.value='';
                clearInterval(intervalId);
            }, 3000);
            
        }
        else{
            input.value+=btnText; 
        }
        
    })
}


// setInterval ki help se after 10 sec input ko Empty se set kar dege

/* setInterval(function(){
        input.value='';
    },10000);
*/