
let jsonData = `[
    {
        "id" : 1,
        "name": "Vishnukant Shukla",
        "occupation" : "Software Developer",
        "address" :{
            "addressid" : []
        }
    },
    {
        "id" : 2,
        "name": "Shanu Shukla",
        "occupation" : "Software Developer",
        "address" :{
            "addressid" : 1,
            "city" : "Bareilly",
            "country":"india"
        }
    }
]`

// Now here is jsonData is string
// Here jsonData is string and i cannot use . (Dot notation because object nhi hai) here\
// we cannot work with string here koyki object hi hai hai

// now to use this string we have to convert it first usable js object me convert karna hoga

// i have a json string and we cannot work on it directly so we need to parse it first

let obj = JSON.parse(jsonData); // it accepts JSON string

console.log(obj[0].occupation);

let str  = JSON.stringify(obj);
console.log(str);







