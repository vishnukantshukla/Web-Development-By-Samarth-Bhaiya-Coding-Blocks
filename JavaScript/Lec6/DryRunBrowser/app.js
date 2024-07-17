console.log(a);
var a =10;
function fun(){
    var b=100;
    function fun2(){
        console.log(a);
        console.log(c);
    }
    fun2();
}
fun();