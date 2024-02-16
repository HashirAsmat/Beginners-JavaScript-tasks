const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton =  document.querySelector("#scissor");
const resultTag = document.querySelector("#result");
let computerPoints = 0;
let playerPoints = 0;

function clickHandler(e) {
e.preventDefault();
const randomNumber = Math.random();
let computerChoose = '';
if(randomNumber >= 0 && randomNumber < 1/3){
    computerChoose ="rock";
}
else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerChoose= "paper";
}
else if (randomNumber >= 2/3 && randomNumber < 1){
    computerChoose= "scissor";
}

//console.log('computer choose: ' + computerChoose)
//console.log(this.innerText.toLowerCase()); //this refer to the particular button on which the eventlistner has been triggered.
let youChoose = this.innerText.toLowerCase();

//// comp -> rock
if(computerChoose === 'rock' && youChoose === 'rock'){
console.log("Tie" , `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`)
}

else if (computerChoose === 'rock' && youChoose === 'paper')
{
playerPoints ++;
if(playerPoints < 3){
console.log("you won this round", `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
}
else if (playerPoints === 3) {
console.log("congrats! you won the game: ", `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
playerPoints = 0;
computerChoose = 0;
}
}

else if (computerChoose === 'rock' && youChoose === 'scissor'){
computerPoints ++;
if(computerPoints < 3){
console.log("computer won this round" , `you chooses: ${youChoose} and computer chooses: ${computerChoose}`)
console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
}
else if (computerPoints === 3) {
    console.log("opps! computer won the game: ", `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    playerPoints = 0;
    computerChoose = 0;
    }
}

///// comp -> paper
else if(computerChoose === 'paper' && youChoose === 'rock'){
    computerPoints ++;
    if(computerPoints < 3){
    console.log("computer won this round" , `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
    }
    else if (computerPoints === 3) {
        console.log("opps! computer won the game:",  `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
        playerPoints = 0;
        computerChoose = 0;
        }
}

else if (computerChoose === 'paper' && youChoose === 'paper'){
console.log("Tie", `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
}

else if (computerChoose === 'paper' && youChoose === 'scissor'){
    playerPoints ++;
    if(playerPoints < 3){
    console.log("you won this round", `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
    }
    else if (playerPoints === 3) {
    console.log("congrats! you won the game : "  ,  `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    playerPoints = 0;
    computerChoose = 0;
    }
}
///// comp -> scissor
else if (computerChoose === 'scissor' && youChoose === 'rock'){
    playerPoints ++;
    if(playerPoints < 3){
    console.log("you won this round", `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
    }
    else if (playerPoints === 3) {
    console.log("congrats! you won the game" ,  `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    playerPoints = 0;
    computerChoose = 0;
    }
}

else if (computerChoose === 'scissor' && youChoose === 'paper'){
    computerPoints ++;
    if(computerPoints < 3){
    console.log("computer won this round" , `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
    console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
    }
    else if (computerPoints === 3) {
        console.log("opps! computer won the game" ,  `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
        playerPoints = 0;
        computerChoose = 0;
        }
}

else if (computerChoose === 'scissor' && youChoose === 'scissor'){
console.log("Tie" , `you chooses: ${youChoose} and computer chooses: ${computerChoose}`);
console.log(`your points: ${playerPoints} , computer points: ${computerPoints}`);
}

}

rockButton.addEventListener("click", clickHandler);
paperButton.addEventListener("click", clickHandler);
scissorButton.addEventListener("click", clickHandler);

