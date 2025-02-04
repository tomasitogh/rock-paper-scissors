let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const displayResults = document.querySelector("#displayResults");

btnRock.addEventListener("click", () => {
    [humanScore, computerScore] = playRound("rock", getComputerChoice(), humanScore, computerScore);
    displayResults.textContent = `Human score: ${humanScore},   Computer score: ${computerScore}`;
    didSomeoneWon();
});
btnPaper.addEventListener("click", () => {
    [humanScore, computerScore] = playRound("paper", getComputerChoice(), humanScore, computerScore);
    displayResults.textContent = `Human score: ${humanScore},   Computer score: ${computerScore}`;
    didSomeoneWon();
});
btnScissors.addEventListener("click", () => {
    [humanScore, computerScore] = playRound("scissors", getComputerChoice(), humanScore, computerScore);
    displayResults.textContent = `Human score: ${humanScore},  Computer score: ${computerScore}`;
    didSomeoneWon();
});

function didSomeoneWon(){
    if (humanScore == 5){
    displayResults.textContent = 'HUMAN WINS';
    return;
} else if (computerScore == 5){
    displayResults.textContent = 'COMPUTER WINS';
    return;
};};




function getComputerChoice (){
    let computerPlay;
    let random = Math.random();
    if (random <= 1/3){
        computerPlay = "rock";
    } else if (random <= 2/3){
        computerPlay = "paper";
    } else if (random > 2/3){
        computerPlay = "scissors";
    } else {
        computerPlay = "scissors";
    }
    return computerPlay;
}

function playRound(humanChoice, computerChoice, hScore, cScore){
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'scissors' && computerChoice == 'paper') || 
        (humanChoice == 'paper' && computerChoice == 'rock')) {
        hScore++;
    } else if (((computerChoice == 'rock' && humanChoice == 'scissors') || 
                (computerChoice == 'scissors' && humanChoice == 'paper') || 
                (computerChoice == 'paper' && humanChoice == 'rock'))){
        cScore++;
    } else if (humanChoice == computerChoice){
        console.log("It's a draw.");
    }
    return [hScore, cScore];
};