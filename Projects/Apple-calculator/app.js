let buttons = document.querySelectorAll('button');
// yeh array dega koyki saare button ko click kar skte hai
let input = document.querySelector('input');


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
            
        }
        else{
            input.value+=btnText; 
        }
        

    })
}
