//Adding a new Todo
$('input').keypress(function(e){
    // console.log(e);
    if(e.which === 13){
        const todotext=$(this).val();
        console.log(todotext);

        $('#list').append(`<li> <span>X</span> ${todotext} </li> `)
        // Once value we receive then erase it from input box

        $(this).val(' '); 
    }
    
})

// mark the work completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
})

// delete todo

$('ul').on('click','span',function(e){
    e.stopPropagation(); // to stop event bubbling
    // $(this) -> Here this will point to span fadeOut(ketne time tak fad karega , kya karna hai uske baad)
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    })
})


// toggle input on click on plus

$('#plus').click(function(){
    $('input').fadeToggle();
})
