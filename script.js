let allGridBoxes = [];
let fruit = document.createElement("div");
let hasFruitId;
let holder1 = 0;
let playerScore = 0;
let scoreBox = document.querySelector(".score-box");
let timer = document.querySelector(".text");
let totalFruits = 48;
let speedrun = 0.00;

for(let i = 1; i <= 66; ++i){
    allGridBoxes.push(document.querySelector(`.box${i}`));
}

let pacman = document.createElement("div")
pacman.style.cssText = "height:60px;width:60px;border-radius:5em;background-color:yellow;position:absolute;top:15px;left:12px;"
allGridBoxes[0].appendChild(pacman);

let curretParentNode = pacman.parentNode;

for(let i = 1; i < 66; ++i){
    let fruit = document.createElement("div");    
    fruit.style.cssText = "height:20px;width:20px;border-radius:5em;background-color:orange;position:absolute;top:35px;left:31px;"

    allGridBoxes[i].appendChild(fruit);
    allGridBoxes[i].setAttribute("id", "hasFruit")
    hasFruitId = allGridBoxes[i].id;
}

//Deleting the unnecesary fruits
allGridBoxes[3].removeChild(allGridBoxes[3].firstElementChild);
allGridBoxes[7].removeChild(allGridBoxes[7].firstElementChild);
allGridBoxes[14].removeChild(allGridBoxes[14].firstElementChild);
allGridBoxes[16].removeChild(allGridBoxes[16].firstElementChild);
allGridBoxes[18].removeChild(allGridBoxes[18].firstElementChild);
allGridBoxes[23].removeChild(allGridBoxes[23].firstElementChild);
allGridBoxes[27].removeChild(allGridBoxes[27].firstElementChild);
allGridBoxes[31].removeChild(allGridBoxes[31].firstElementChild);
allGridBoxes[34].removeChild(allGridBoxes[34].firstElementChild);
allGridBoxes[36].removeChild(allGridBoxes[36].firstElementChild);
allGridBoxes[40].removeChild(allGridBoxes[40].firstElementChild);
allGridBoxes[42].removeChild(allGridBoxes[42].firstElementChild);
allGridBoxes[48].removeChild(allGridBoxes[48].firstElementChild);
allGridBoxes[49].removeChild(allGridBoxes[49].firstElementChild);
allGridBoxes[50].removeChild(allGridBoxes[50].firstElementChild);
allGridBoxes[57].removeChild(allGridBoxes[57].firstElementChild);
allGridBoxes[63].removeChild(allGridBoxes[63].firstElementChild);

setInterval(() => {
    if((totalFruits < 48) && (totalFruits > 0)){
        setTimeout(() => {
            speedrun += 0.01;
            speedrun = speedrun.toFixed(2);
            speedrun = parseFloat(speedrun);
            timer.textContent = `${speedrun}s`
        }, 1);
    }
}, 10);
setTimeout(() => {
    /*
    let clownparty = new Audio("sounds/clownparty.mp3")
    clownparty.play();
    */
}, 200);


window.addEventListener("keydown", e =>{

    if((e.key == "ArrowDown") || (e.key == "s")){
        if((curretParentNode == allGridBoxes[55]) || (curretParentNode == allGridBoxes[56]) || (curretParentNode == allGridBoxes[57]) ||
        (curretParentNode == allGridBoxes[58]) || (curretParentNode == allGridBoxes[59]) || (curretParentNode == allGridBoxes[60]) ||
        (curretParentNode == allGridBoxes[61]) || (curretParentNode == allGridBoxes[62]) || (curretParentNode == allGridBoxes[63]) ||
        (curretParentNode == allGridBoxes[64]) || (curretParentNode == allGridBoxes[65]) || (curretParentNode == allGridBoxes[5]) ||
        (curretParentNode == allGridBoxes[12]) || (curretParentNode == allGridBoxes[20]) || (curretParentNode == allGridBoxes[25]) ||
        (curretParentNode == allGridBoxes[29]) || (curretParentNode == allGridBoxes[37]) || (curretParentNode == allGridBoxes[38]) ||
        (curretParentNode == allGridBoxes[39]) || (curretParentNode == allGridBoxes[46]) || (curretParentNode == allGridBoxes[52])){
            
        }else{
            holder1 += 11;
            console.log(holder1)
            curretParentNode.removeChild(pacman);
            allGridBoxes[holder1].appendChild(pacman)
            curretParentNode = pacman.parentNode;

            if(curretParentNode.id == "hasFruit"){
                let takeFruitSound = new Audio("sounds/takeFruit.m4a")
                takeFruitSound.play();
                playerScore += 50;
                totalFruits -= 1;
                scoreBox.textContent = `${playerScore}`;
                curretParentNode.removeAttribute("id");
                curretParentNode.removeChild(curretParentNode.firstElementChild);
            }
            if((playerScore == 500) || (playerScore == 1000) || (playerScore == 1500) || (playerScore == 2000)){
                let siu = new Audio("sounds/siu.mp3");
                siu.play();
            }
            if(totalFruits == 0){
                let yeiSound = new Audio("sounds/yeeeee.mp3");
                yeiSound.play();
            }
        }

    }else if((e.key == "ArrowUp") || (e.key == "w")){
        if((curretParentNode == allGridBoxes[0]) || (curretParentNode == allGridBoxes[1]) || (curretParentNode == allGridBoxes[2]) ||
        (curretParentNode == allGridBoxes[3]) || (curretParentNode == allGridBoxes[4]) || (curretParentNode == allGridBoxes[5]) ||
        (curretParentNode == allGridBoxes[6]) || (curretParentNode == allGridBoxes[7]) || (curretParentNode == allGridBoxes[8]) ||
        (curretParentNode == allGridBoxes[9]) || (curretParentNode == allGridBoxes[10]) || (curretParentNode == allGridBoxes[25]) ||
        (curretParentNode == allGridBoxes[29]) || (curretParentNode == allGridBoxes[38]) || (curretParentNode == allGridBoxes[45]) ||
        (curretParentNode == allGridBoxes[47]) || (curretParentNode == allGridBoxes[59]) || (curretParentNode == allGridBoxes[60]) ||
        (curretParentNode == allGridBoxes[61]) || (curretParentNode == allGridBoxes[51]) || (curretParentNode == allGridBoxes[53])){
            
        }else{
            holder1 -= 11;
            console.log(holder1)
            curretParentNode.removeChild(pacman);
            allGridBoxes[holder1].appendChild(pacman)
            curretParentNode = pacman.parentNode;

            if(curretParentNode.id == "hasFruit"){
                let takeFruitSound = new Audio("sounds/takeFruit.m4a")
                takeFruitSound.play();
                playerScore += 50;
                totalFruits -= 1;
                scoreBox.textContent = `${playerScore}`;
                curretParentNode.removeAttribute("id");
                curretParentNode.removeChild(curretParentNode.firstElementChild);
            }
            if((playerScore == 500) || (playerScore == 1000) || (playerScore == 1500) || (playerScore == 2000)){
                let siu = new Audio("sounds/siu.mp3");
                siu.play();
            }
            if(totalFruits == 0){
                let yeiSound = new Audio("sounds/yeeeee.mp3");
                yeiSound.play();
            }
        }
    }else if((e.key == "ArrowRight") || (e.key == "d")){
        if((curretParentNode == allGridBoxes[65]) || (curretParentNode == allGridBoxes[54]) || (curretParentNode == allGridBoxes[43]) ||
        (curretParentNode == allGridBoxes[32]) || (curretParentNode == allGridBoxes[21]) || (curretParentNode == allGridBoxes[10]) ||
        (curretParentNode == allGridBoxes[2]) || (curretParentNode == allGridBoxes[6]) || (curretParentNode == allGridBoxes[13]) ||
        (curretParentNode == allGridBoxes[15]) || (curretParentNode == allGridBoxes[17]) || (curretParentNode == allGridBoxes[22]) ||
        (curretParentNode == allGridBoxes[26]) || (curretParentNode == allGridBoxes[30]) || (curretParentNode == allGridBoxes[33]) ||
        (curretParentNode == allGridBoxes[35]) || (curretParentNode == allGridBoxes[39]) || (curretParentNode == allGridBoxes[41]) ||
        (curretParentNode == allGridBoxes[47]) || (curretParentNode == allGridBoxes[56]) || (curretParentNode == allGridBoxes[62])){
            
        }else{
            holder1 += 1;
            console.log(holder1)
            curretParentNode.removeChild(pacman);
            allGridBoxes[holder1].appendChild(pacman)
            curretParentNode = pacman.parentNode;

            if(curretParentNode.id == "hasFruit"){
                let takeFruitSound = new Audio("sounds/takeFruit.m4a")
                takeFruitSound.play();
                playerScore += 50;
                totalFruits -= 1;
                scoreBox.textContent = `${playerScore}`;
                curretParentNode.removeAttribute("id");
                curretParentNode.removeChild(curretParentNode.firstElementChild)
            }
            if((playerScore == 500) || (playerScore == 1000) || (playerScore == 1500) || (playerScore == 2000)){
                let siu = new Audio("sounds/siu.mp3");
                siu.play();
            }
            if(totalFruits == 0){
                let yeiSound = new Audio("sounds/yeeeee.mp3");
                yeiSound.play();
            }
        }
        
    }else if((e.key == "ArrowLeft") || (e.key == "a")){
        if((curretParentNode == allGridBoxes[55]) || (curretParentNode == allGridBoxes[44]) || (curretParentNode == allGridBoxes[33]) ||
        (curretParentNode == allGridBoxes[22]) || (curretParentNode == allGridBoxes[11]) || (curretParentNode == allGridBoxes[0]) ||
        (curretParentNode == allGridBoxes[4]) || (curretParentNode == allGridBoxes[8]) || (curretParentNode == allGridBoxes[15]) ||
        (curretParentNode == allGridBoxes[17]) || (curretParentNode == allGridBoxes[19]) || (curretParentNode == allGridBoxes[24]) ||
        (curretParentNode == allGridBoxes[28]) || (curretParentNode == allGridBoxes[32]) || (curretParentNode == allGridBoxes[35]) ||
        (curretParentNode == allGridBoxes[37]) || (curretParentNode == allGridBoxes[41]) || (curretParentNode == allGridBoxes[43]) ||
        (curretParentNode == allGridBoxes[51]) || (curretParentNode == allGridBoxes[58]) || (curretParentNode == allGridBoxes[64])){
            
        }else{
            holder1 -= 1;
            console.log(holder1)
            curretParentNode.removeChild(pacman);
            allGridBoxes[holder1].appendChild(pacman)
            curretParentNode = pacman.parentNode;

            if(curretParentNode.id == "hasFruit"){
                let takeFruitSound = new Audio("sounds/takeFruit.m4a")
                takeFruitSound.play();
                playerScore += 50;
                totalFruits -= 1;
                scoreBox.textContent = `${playerScore}`;
                curretParentNode.removeAttribute("id");
                curretParentNode.removeChild(curretParentNode.firstElementChild)
            }
            if((playerScore == 500) || (playerScore == 1000) || (playerScore == 1500) || (playerScore == 2000)){
                let siu = new Audio("sounds/siu.mp3");
                siu.play();
            }
            if(totalFruits == 0){
                let yeiSound = new Audio("sounds/yeeeee.mp3");
                yeiSound.play();
            }
        }
    }
})

