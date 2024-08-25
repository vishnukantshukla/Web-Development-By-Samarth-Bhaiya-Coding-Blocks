let canvas=document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let cellSize=50; //height & width ka kaam krega for each cell
let boardHeight = 600;
let boardWidth = 1350;
let snakeCells=[[0,0]]; //2d array to store starting points of snake ka rectangle
let direction = 'right';

let gameOver = false; // walls se touch hone ke baad ho jaye true

let FoodCells=GenerateFood(); // because we need 2 values i.e x and y 

let score = 0;
//baar baar repeat karega
let intervalId=setInterval(function(){
    update();
    draw();
 },100);

//keydown event (jaab ham up ya down ya left ya right key dabate hai)

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowDown'){
        direction='down';  // in this case row -> No change and column -> previous+ cellsize
    }
    else if(event.key === 'ArrowUp'){
        direction='up'; //  in this case row(x) -> No change and column(y) -> previous -  cellsize (minus hoga)
    }
    else if(event.key === 'ArrowLeft'){
        direction='left'; // in this case row -> previos- cellsize and column -> No Change
    }
    else{
        direction='right';// in this case row -> previos+ cellsize and column -> No Change
    }


    
})

// fucntion to draw the snake
function draw(){
    if(gameOver === true){
        clearInterval(intervalId); //it accect an id and it is used to stop the 9interval

        ctx.fillStyle = 'Yellow';
        ctx.font = '50px monospace'
        ctx.fillText('GAME OVER !!',500,300);
        return;

        return;
    }
    ctx.clearRect(0,0,boardWidth,boardHeight); // yeh pura canvas ko clear karega previous wale ko
    for(let cell of snakeCells){
        ctx.fillStyle='red'
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
        ctx.strokeStyle = 'orange';
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize);

    }




    //draw Food
    ctx.fillStyle = 'green';
    ctx.fillRect(FoodCells[0],FoodCells[1],cellSize,cellSize);

    // draw score
    ctx.font = '25px monospace'
    ctx.fillText(`Score : ${score}`,20,25)
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
        if(newHeadX===boardWidth || BitItSelf(newHeadX,newheadY)){
            gameOver = true;

        }
    }
    else if(direction === 'left'){
        newHeadX=headX-cellSize;
        newheadY=headY;
        if(newHeadX<0 || BitItSelf(newHeadX,newheadY)){
            gameOver = true;
        }
    }
    else if(direction === 'up'){
        newHeadX=headX
        newheadY=headY - cellSize;
        if(newheadY < 0 || BitItSelf(newHeadX,newheadY)){
            gameOver = true;
        }
    }
    else{
        newHeadX=headX
        newheadY=headY + cellSize;
        if(newheadY===boardHeight || BitItSelf(newHeadX,newheadY)){
            gameOver=true;
        }
    }
    snakeCells.push([newHeadX,newheadY]);
    if(newHeadX === FoodCells[0] && newheadY === FoodCells[1]){
        FoodCells = GenerateFood();
        score+=1;
    }
    else{
        snakeCells.shift();

    }
    
}

//boardWidth - cellSize yeeese hame max value mil jayege
function GenerateFood(){
    // aab ham return me x and y find karege
    return[
        Math.round((Math.random() * (boardWidth - cellSize)) /cellSize) * cellSize,
        Math.round((Math.random() * (boardHeight - cellSize)) /cellSize) * cellSize,
        
    ]
}

// function to check that snake cut itself or not

function BitItSelf(newHeadX,newheadY){
    //loop
    for(let item of  snakeCells){
        if(item[0] === newHeadX && item[1] === newheadY){
            return true;
        }
    }
    return false;
}