let pappilal = document.createElement('div');
let foolanDevi = document.createElement('div');

let  arti = document.getElementById('arti'); //  phale parent ko access karna hog

pappilal.innerText="hi i am new div"  // agar usme content nhi dege to bo show nhi hoga

foolanDevi .innerText="Hi i am new Div1"
arti.appendChild(pappilal);

// arti.appendChild(pappilal,foolanDevi); // this is a wrong way because appendChild accept only one elemet

arti.append(pappilal,foolanDevi); // to add more then i child we use append(multiple elements ko add karta hai bilkul last me)

arti.prepend(pappilal , foolanDevi) //  yeh dono element ko starting me add kar dega


// Add text

// arti.appendChild('Hi i am vishnukant shukla') // it text accept nhi karta hai


// arti.appendChild('Hi i am vishnukant shukla') // it accept the both element and text (yeh element and text ko both bilkul last me add karega)

arti.prepend('Hi i am vishnukant shukla') // it accept the both element and text (yeh element and text ko both bilkul starting me add karega)

   