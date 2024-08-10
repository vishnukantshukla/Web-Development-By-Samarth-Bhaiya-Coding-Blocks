// Note-> in case of adding classes ham har bare sare likhe likhne padhte jaab bhi ham new classes add karte but in case of classList ham aak baar likhe gye and jaab bhi hame new class add karne hogi to sirf bahi class add karayege

// 1-> add method

let arti= document.querySelector('article');
// arti.classList.add('vishnu');  // yeh sahi way hai
// arti.classList.add('vishnu vishnu1');// wrong way

arti.classList.add('vishnu','vishnu1','vishnu2'); // we can give multiple class by comma separated


arti.classList.add('vishnu3') // in terms ko classes ham kisi bhi class ko kisi point of time me add bhi kar skte hai and hame purane class lo likhna nhi padega


// 2- remove


// arti.classList.remove('vishnu3') // jaab hame single class reove karne ho

arti.classList.remove('vishnu3','vishnu2') 


// 3- toggle

arti.classList.toggle('toggle');  //true
 // Agar toggle class hogi already to uske prooperties ko remove kar dega and agar toggle class nhi hue to toggle class ko add kar dega(uski properties add kar dega (bracket ke andar 'toggle' yeh class hai))


// arti.classList.toggle('toggle'); //false (already add ho chuka hai to ham uski properties remove kar dega)


// 4- contains

console.log(arti.classList.contains('vishnu'));// output -> true  // yeh true or false me output dega
 

// console.log(arti.classList.contains('vishnu'));  // output false