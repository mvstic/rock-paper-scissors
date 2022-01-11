function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // rock
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win!";
        } else if (computerSelection == "paper") {
            return "You lose.";
        } else {
            return "It's a draw!";
        }
    }
    // paper
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You win!";
        } else if (computerSelection == "rock") {
            return "You lose.";
        } else {
            return "It's a draw!";
        }
    }
    // scissors
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win!";
        } else if (computerSelection == "rock") {
            return "You lose.";
        } else {
            return "It's a draw!";
        }
    }
}

function game() {
    let playerSelection = prompt("Rock, paper, scissors?");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(`Computer played: ${computerSelection}`);
    console.log(`You played: ${playerSelection}`);
    alert(result);
}