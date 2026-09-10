
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3);
    
    if (rnd == 0) {
        return "Rock"
    }
    else if (rnd == 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Choose your move: ")

    return console.log(choice)
}

function playRound(computerChoice, humanChoice) {
    
}

getHumanChoice();

// getComputerChoice()