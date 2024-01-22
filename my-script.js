const choices = ['rock','paper','scissors']

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let num = getRndInteger(0, 2);
    return choices[num];
}

function win(playerSelection, computerSelection) {
    user = user + 1;
    return 'You win! ' + playerSelection + ' beats ' + computerSelection + '\nUser ' + user + ' CPU ' + cpu;
}

function lose(playerSelection, computerSelection) {
    cpu = cpu + 1;
    return 'You lose, ' + computerSelection + ' beats ' + playerSelection + '\nUser ' + user + ' CPU ' + cpu;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return playRound(prompt('Tie! Try again', 'rock').toLowerCase(), getComputerChoice());
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
        return playRound(prompt('Pleas choose either rock, paper, or scissors', 'rock').toLowerCase(), getComputerChoice());
    }

}

let playerSelection = prompt('Shoot', 'rock').toLowerCase();
let computerSelection = getComputerChoice();
let user = 0;
let cpu = 0;


function game(playerSelection, computerSelection) {
    user = 0;
    cpu = 0;
    let score = 'User ' + user + ' CPU ' + cpu;
    console.log(score);

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Shoot, again', 'rock').toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Shoot, again', 'rock').toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Shoot, again', 'rock').toLowerCase();
    computerSelection = getComputerChoice();
    
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Shoot, again', 'rock').toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    score = 'User ' + user + ' CPU ' + cpu;

    if (user > cpu) {
        return console.log('User wins! ' + score);
    }
    else {
        return console.log('CPU wins! ' + score);
    }

}
