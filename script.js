function getCPUChoice() {
    let rnd = Math.floor(Math.random() * 3);
    
    if (rnd === 0) {
        return "rock";
    }
    else if (rnd === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose your move: ");

    return choice.toLowerCase();
}

function playRound(humanChoice, cpuChoice) {

    if (humanChoice === cpuChoice) {
        return "draw";
    }

    if (
        (humanChoice === "rock" && cpuChoice === "scissors") ||
        (humanChoice === "paper" && cpuChoice === "rock") ||
        (humanChoice === "scissors" && cpuChoice === "paper")
    ) {
        return "human";
    }
    return "cpu";
}

function playGame() {

    let humanScore = 0;
    let cpuScore = 0;

    while (humanScore !== 5 && cpuScore !== 5) {

        let result = playRound(getHumanChoice(), getCPUChoice())
             
        if (result === "human") {
            humanScore++;
            console.log(`Human wins this round. Human: ${humanScore}, CPU: ${cpuScore}`);
        }
        else if (result === "cpu") {
            cpuScore++;
            console.log(`CPU wins this round. Human: ${humanScore}, CPU: ${cpuScore}`);
        }
        else {
            console.log(`It's a draw. Human: ${humanScore}, CPU: ${cpuScore}`);
        }
    }

    if (humanScore >= 5) {
        return "The Human Wins";
    }
    else {
        return "The CPU Wins";
    }
}

console.log(playGame());