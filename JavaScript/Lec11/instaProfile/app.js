// it is a wrong way ham yeh kabhi nhi karte hai
function step1(){
    setTimeout(function(){
        console.log("Image select kar raha hu");
        return 'image';
    },4000);

}
function step2(image){
    setTimeout(function(){
        console.log(`Apply filter on ${image}`);
        return 'Beautiful Image';
    },2000);
}
function step3(filterImage){
    setTimeout(function(){
        console.log(`Badiya se caption on ${filterImage} dekh liya`);
        return "photo plus caption";
    },3000)

}

function step4(final){
    setTimeout(function(){
        console.log(`${final} Uploaded`);
    },2000);
}

// Yena order match hi nhi ho raha yeski bjhe se undefined de raha hai to hame yeske liye particular order dena hoga
// calling
let image =step1();
let filterImage=step2(image);
let finalImage = step3(filterImage);
step4(finalImage);




// it is a better way 

function step5(fn){
    setTimeout(function(){
        console.log("selecting image");
        fn('image');
    },4000);

}
function step6(image,cb){
    setTimeout(function(){
        console.log(`Apply filter to ${image} and make it attractive`);
        cb('filterImage1');
    },2000);
}
function step7(filterImage,cb){
    setTimeout(function(){
        console.log(`Badiya se caption on ${filterImage} dekh liya`);
        cb('finalImage1 with caption')
    },3000)

}

function step8(final){
    setTimeout(function(){
        console.log(`${final} Uploaded`);
    },2000);
}

// Yena order match hi nhi ho raha yeski bjhe se undefined de raha hai to hame yeske liye particular order dena hoga
// calling
step5(function(image1){
    step6(image1,function(filterImage1){
        step7(filterImage1,function(finalImage1){
            step8(finalImage1);
        });
    });
});


// Advantage of callback nesting

// 1- 1st function khatam ho gya uske baad 2nd function chale ga and uske baad 3rd function chalega and uske badd 4th function chalege

// Disadvantages

// 1- Callback hell or pyramid of DOOM
// 2- Dependeny (Highly dependency to other (i.e Agar step 1 nhii chala too orr sare fucntion nhi chalege))