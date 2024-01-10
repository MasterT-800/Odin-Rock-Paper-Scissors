const choices = ['rock','paper','scissors']

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let num = getRndInteger(0, 2);
    return choices[num];
}

function win(playerSelection, computerSelection) {
    return 'You win! ' + playerSelection + ' beats' + computerSelection;
}

function lose(playerSelection, computerSelection) {
    return 'You lose, ' + computerSelection + ' beats' + playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playRound(prompt('Shoot', 'rock').toLowerCase(), getComputerChoice());
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return lose(playerSelection,computerSelection);
        }
        else {
            return win(playerSelection, computerSelection);
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return win(playerSelection, computerSelection);
        }
        else {
            return lose(playerSelection,computerSelection);
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return win(playerSelection, computerSelection);
        }
        else {
            return lose(playerSelection,computerSelection);
        }
    }
    else { 
        return 'Pleas choose either rock, paper, or scissors', playRound(prompt('Shoot', 'rock').toLowerCase(), getComputerChoice());
    }
    
}

const playerSelection = prompt('Shoot', 'rock').toLowerCase();
const computerSelection = getComputerChoice();