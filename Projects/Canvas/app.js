let canvas = document.querySelector('canvas');

// brush== context (context is a type of brush with the help of which we can draw somthing on canvas)

let ctx=canvas.getContext('2d'); // yeski madat se brush milega and ham 2D image banate hai

// ctx is a native name for context but ham koye bhi naam de skte hai


// starting Point(x,y),width,Height yeh four coordinate dege fill react ke aanadar

ctx.fillRect(100,100,150,60) // yeh rectangle fill karke dega (Rect stands -> Rectangle) and starting point(x,y) and width and Height of element i.e total 4 element aayega

// Abhi brush ka color black hi hai

ctx.fillStyle='red';  // yeh brush ka color change kar dega

ctx.fillRect(100,200,150,60) // brush ka baad me color change hua hai to aab red hoga aab


ctx.strokeStyle='green' // aab yeh brush ka color green karega barna black hi rehta because uper hamne fillReact naam wale brush ko red diya tha but aab yeh paar ham strokeRect wala brush de rahe hai to yah pe alag se dena hoga color


ctx.strokeRect(250, 250,100,100) // yeh reactangle ko fill nhi karega sirf border dega 

// We can also make path also using brush to ham (begin dete hai(start))


ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(100,120);
ctx.lineTo(200,220);
ctx.lineTo(50,50);
ctx.stroke();


// now we draw triangle

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(100,100);
ctx.stroke();
// ctx.fill(); // agar color fill karna hoga to yeh karege
ctx.closePath();



// drawing the text on canvas



ctx.fillText('vishnukant shukla',100,140) // width and height is adjusted by text itself but staring point hame dena hoga

// fillText yees case me phale text dege uske baad starting point dege (width and height)

// Agar hame khusd size badana hai to ham ctx.font = '28px' dege



ctx.font='32px sans-sarif'
ctx.fillStyle='blue'
ctx.fillText('shukla vishnukant ',150,400)
