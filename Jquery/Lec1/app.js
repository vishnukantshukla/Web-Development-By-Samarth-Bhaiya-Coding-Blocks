// using tag
// console.log($('h1'));

// using class

// console.log($('.vishnu')); // multiple element of same class can be select

// using id
// console.log($('#vishnu1'));  // multiple id cannot be selected it can only select only first encountered element with the id name

// manipulate elements
//css adding

// single css properties

// $('h1').css('color','red');
// $('h1').css('background','green');

// multiple properties aak sath add karne ke liye ham object ka use karege

$('h1').css({
    color : 'red',
    backgroundColor:'green'
})

// access text

console.log($('p').text()); //text method -- innerHTML

console.log($('p').text('<em> vishnukant</em>')); //text is a method (it is working s a text content)   text method -- textContent (yeh tag se aware nhi hota hai ham yeh nhi karege uske liye ham .html use karege)

console.log($('p').html('<em> vishnukant</em>'));

console.log($('p').html()); // it is ware with the tag tp yeese use karege yeh





// console.log($('p').text('sanorita')); // it .text() here act as a setter


// Manipulating Attributes  

console.log($('a').text()); // yeh value dega

//.attr is act as a getter
console.log($('a').attr('href')); // yeh attribute ki value dega 


// it also act as setter
console.log($('a').attr('href','http://facebook.com')); // yeh attribute ki value dega   



// selecting particular element

$('h1:nth-of-type(4)').css('border','2px solid plum') // right way (sahi tarika)

$('h1:first()').css('border','2px solid plum') // right way
$('h1:last()').css('border','2px solid plum') //right way

// $('h1:firstChild()').css('border','2px solid plum') // its a wrong way

// $('h1:lastChild()').css('border','2px solid plum') //its a wrong


// Another way to select particular element
$('h1').last().css('border','20px solid brown') // it is a alternative way

$('h1').first().css('border','20px solid brown') // it is a alternative way


// getting value of inputs


console.log($('input').val(''));

console.log($('input').val('vishnukant')); // to change the value of input



















// Note -> Official Documentation for JQuery 
// 1- You might not need Jquery.com
// 2- Jquery.com














