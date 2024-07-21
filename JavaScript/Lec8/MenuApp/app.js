let menu = ['palak panner', 'chole chawal','chicken dhatura','pannerButter masala', 'manchurian','chicken biryani','pizza','Egg burji','soda'];

function isVeg(food){
    if((food.toLowerCase().indexOf('chicken')!== -1 )|| food.toLowerCase().indexOf('egg')!==-1){
        return false;  // yeska mtlb chicken and egg present hai
    }
    return true;
}
let vegMenu=menu.filter(isVeg);
console.log(menu);
console.log(vegMenu);