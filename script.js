let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let computerPlay;
    let random = Math.random();
    if (random <= 1/3){
        computerPlay = "rock";
    } else if (random <= 2/3){
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }
    return computerPlay;
}
function getHumanChoice() {
    let humanPlay;
    humanPlay = prompt("Whats's your play?", "Rock, paper or scissors");
    return humanPlay;
}
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')) {
        console.log("Human wins.");
        humanScore++;
    } else if (((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'scissors' && humanChoice == 'paper') || (computerChoice == 'paper' && humanChoice == 'rock'))){
        console.log("Computer wins.");
        computerScore++;
    } else if (humanChoice == computerChoice){
        console.log("It's a draw.");
    }
    return humanScore, computerScore;
}
function playGame (){
    for (let i = 0; i <= 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        humanScore, computerscore = playRound(humanChoice,computerChoice);
    }
    humanScore > computerScore ? console.log("HUMAN WINS") : console.log("COMPUTER WINS");
}




playGame();