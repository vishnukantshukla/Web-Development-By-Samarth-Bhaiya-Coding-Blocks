// Class Manipulation

// manipualting class Attribute

$('h1').first().addClass('first'); // single class


// adding class 

$('h1').first().addClass('first second vishnu'); // single class

// remove class 

$('h1').first().removeClass('second'); // single

$('h1').first().removeClass('second vishnu'); // multiple removes


// Toggle  -> Agar koye chij hogi to bo remove ho jayege or agar nhi hogi to bo add ho jayege

// $('h1').first().toggleClass('second'); //Single Toggle

$('h1').first().toggleClass('second vishnu'); // multiple toggle


// hasClass -> Ya class present hogi ya hi hogi class present

$('h1').first().hasClass('second'); // single
$('h1').first().hasClass('second vishnu'); // multiple


// events

// $('button').click(function(){
//     console.log("Hello How are you");
    
// })

// new concept (important)

// this is not same as that of ypur js

// event.target = this (in jquery same kaam karega almost)
// this points to the element over whcih the event is being triggered


// make sure never use Arrow function because it doesnot work here 

$('li').click(function(){
    $(this).css('color','red');
})

// input

$("input").keyup
(function(){
    console.log($(this).val());
    
})



// addEventListner -> 'on' use karege addEventListner ke place pe yah

$('button').on('click',function(){
    console.log("Hi i am just like a event Listener");
    
})

$('input').keypress(function(e){
    // console.log(e);
    if(e.which == 13){ // 13 enter ki value hai jaab enter press karege taab yeh chalega
        console.log($(this).val());
        
    }
    
})


// Effects in DOM

$('#fadeout').click(function(){
    $('#container').fadeOut();
})
$('#fadein').click(function(){
    $('#container').fadeIn();
})

$('#fadetoggle').click(function(){
    $('#container').fadeToggle();
})