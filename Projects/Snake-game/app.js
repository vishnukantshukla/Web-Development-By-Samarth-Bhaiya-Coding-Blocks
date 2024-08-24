let canvas=document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let cellSize=50; //height & width ka kaam krega for each cell
let boardHeight = 600;
let boardWidth = 1000;
let snakeCells=[[0,0]]; //2d array to store starting points of snake ka rectangle
let direction = 'right';

//keydown event (jaab ham up ya down ya left ya right key dabate hai)

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowDown'){
        direction='down';  // in this case row -> No change and column -> previous+ cellsize
    }
    else if(event.key === 'ArrowUp'){
        direction='up'; //  in this case row(x) -> No change and column(y) -> previous -  cellsize (minus hoga)
    }
    else if(event.key === 'Arrowleft'){
        direction='left'; // in this case row -> previos- cellsize and column -> No Change
    }
    else{
        direction='right';// in this case row -> previos+ cellsize and column -> No Change
    }


    
})

// fucntion to draw the snake
function draw(){
    ctx.clearRect(0,0,boardWidth,boardHeight); // yeh pura canvas ko clear karega previous wale ko
    for(let cell of snakeCells){
        ctx.fillStyle='red'
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
    }
}

// function to update the snake

function update(){
     
    let headX =snakeCells[snakeCells.length-1][0];
    let headY =snakeCells[snakeCells.length-1][1];

    // headx and heady se hame starting point mil gya

    // let newHeadX=headX+cellSize;
    // let newheadY=headY;  // yeh ham yeh directly change nhi karege

    let newHeadX;
    let newheadY;
    if(direction==='right'){
        newHeadX=headX+cellSize;
        newheadY=headY;
    }
    else if(direction === 'left'){
        newHeadX=headX-cellSize;
        newheadY=headY;
    }
    else if(direction === 'up'){
        newHeadX=headX
        newheadY=headY - cellSize;
    }
    else{
        newHeadX=headX
        newheadY=headY + cellSize;
    }
    snakeCells.push([newHeadX,newheadY]);
    snakeCells.shift();

}


//baar baar repeat karega
setInterval(function(){
   update();
   draw();
},100);