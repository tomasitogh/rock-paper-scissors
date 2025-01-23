let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let computerPlay;
    let random = Math.random();
    if (random <= 1/3){
        computerPlay = "Rock";
    } else if (random <= 2/3){
        computerPlay = "Paper";
    } else {
        computerPlay = "Scissors";
    }
    return computerPlay;
}

function getHumanChoice() {
    let humanPlay;
    humanPlay = prompt("Whats's your play?", "Rock, paper or scissors");
    return humanPlay;
}




console.log(getComputerChoice());
console.log(getHumanChoice());