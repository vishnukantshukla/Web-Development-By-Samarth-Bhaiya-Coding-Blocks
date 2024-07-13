let fullName='vishnukant\nShukla';

console.log(fullName);


let str;
str="Vishnukant shukla";




// substr 

console.log(str.substr(2)); 
console.log(str.substr(2,5)); // starting index , length(ketne aage length lene hai)

// console.log(str.substr(-5,-5)); // Yeh kucch output nhi dega " " because length can never be negative..

console.log(str.substring(2));
console.log(str.substring(2,5));  // 2-> starting index , 5 -> end index strig(n-1 -> tak ka dega and 5 cannot be included)

console.log(str.substring(5,2));

console.log(str.substring(-5,2)); // -5 is automatically change to 0 Output -> vi

console.log(str.substring(-5,- 2));  // kuch output nhi aayega 


// IndexOf  method

console.log(str.indexOf('a'));  // phale baar jo a encounter kar diya to uska index return kr diya

console.log(str.indexOf('a',8));//  yeh phale baar baar a ki skip kar dega to uske index+1 likh dege to jaab next time milega..


let str1="     Vishnukant Shukla i am vishnukant    ";
console.log(str1.indexOf('a')); //-> 1st a index of a counter karega
console.log(str1.indexOf('a',str1.indexOf('a')+1));
console.log(str1.indexOf('a',str1.indexOf('a',str1.indexOf('a')+1)+1));







// replace methode

console.log(str1.replace('a','v'));  // kis ko replace karna chata hu ,Kisse se replace karna chate hai

// replaceAll method

console.log(str1.replaceAll('a','v'));

// repeat
console.log(str1.repeat(3));


// To upperCase

console.log(str1.toUpperCase());

// To LowerCase
console.log(str1.toLowerCase());


// trim() function
console.log(str1.trim());





