(() =>{
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let resetButton


window.onload = function(){
    
    resetButton=document.getElementById('resetBoard');
    resetButton.addEventListener("click", ()=>{
        clearBoard()
        setGame()
    
    });
    setGame();

}

function setGame(){

    for(let i=0; i <9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
tile.addEventListener("click",selectTile);
    }
   var moleTimer= setInterval(setMole, 1000);
    var plantTimer =setInterval(setPlant, 2000); 

}
function clearBoard(){
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile =>tile.remove())
}
function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}
function setMole(){
    if(gameOver){
        return;
    };
    if (currMoleTile){
        currMoleTile.innerHTML =[];
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id ==num){
return;
    };
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setPlant(){
    if(gameOver){
        return;
    };
    if (currPlantTile){
        currPlantTile.innerHTML = "";
        
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id ==num){
        return;
            };
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}
function selectTile(){
    if(gameOver){
        return;
    };
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();

    }else if(this== currPlantTile){
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver= true;    
    };

}
}
)();