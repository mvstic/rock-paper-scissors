const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playAgainButton = document.getElementById("playagain");
const resetButton = document.getElementById("reset");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const gameWinner = document.getElementById("game-winner");


const choices = ["rock", "paper", "scissors"];
let playerPoints = 0
let computerPoints = 0

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You win!");
            playerPoints +=1
        } else if (computerSelection === "paper") {
            console.log("You lose.");
            computerPoints +=1
        } else {
            console.log("It's a draw!");
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You win!");
            playerPoints +=1
        } else if (computerSelection === "rock") {
            console.log("You lose.");
            computerPoints +=1
        } else {
            console.log("It's a draw!");
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You win!");
            playerPoints +=1
        } else if (computerSelection === "rock") {
            console.log("You lose.");
            computerPoints +=1
        } else {
            console.log("It's a draw!");
        }
    }
}

function gameClick(e) {
    playAgainButton.setAttribute("disabled", 1);
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    playRound (playerSelection, computerSelection);
    console.log(`(Computer played: ${computerSelection}. You played: ${playerSelection}.)`)
    console.log(`${playerPoints}:${computerPoints}`); 
    updateScore();
    if (playerPoints === 5 || computerPoints === 5) {
        console.log(`Game over!`);
        declareWinner();
        playAgainButton.removeAttribute("disabled");
        rockButton.setAttribute("disabled", 1);
        paperButton.setAttribute("disabled", 1);
        scissorsButton.setAttribute("disabled", 1);
    }
}

function updateScore() {
    playerScore.textContent = `Player: ${playerPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`;
}

function declareWinner() {
    if (playerPoints === 5) return gameWinner.textContent = `Player wins!`;
    if (computerPoints === 5) return gameWinner.textContent = `Computer wins!`;
}

rockButton.addEventListener("click", gameClick);
paperButton.addEventListener("click", gameClick);
scissorsButton.addEventListener("click", gameClick);
playAgainButton.addEventListener("click", playAgain);
resetButton.addEventListener("click", playAgain);

function playAgain() {
    playerPoints = 0;
    computerPoints = 0;
    updateScore();
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
    gameWinner.textContent = ``;
}