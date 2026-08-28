
console.log("Hello World!")

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

getComputerChoice()