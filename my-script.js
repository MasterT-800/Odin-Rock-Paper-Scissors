const choices = ['rock','paper','scissors']

//Randomize computers choice
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let num = getRndInteger(0, 2);
    return choices[num];
}
//Set initial scores
let user = 0;
let cpu = 0;

//Div where the resluts of each game will show up
const results = document.querySelector('#results');

// Add event listener to all buttons, this will specify player choice and play a round
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playRound(button.name, getComputerChoice());
    });
  });


//Tally score and then remove and add a div to the DOM
function win(playerSelection, computerSelection) {
    user = user + 1;
    const gameResult = document.createElement('p');
    if (user < 5){
        gameResult.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection + '\nUser ' + user + ' CPU ' + cpu;
    }
    else {
        gameResult.textContent = 'You win! You scored 5 points congratulations';
    }
    results.appendChild(gameResult);
}

function lose(playerSelection, computerSelection) {
    cpu = cpu + 1;
    const gameResult = document.createElement('p');
    if (cpu < 5){
        gameResult.textContent = 'You lose, ' + computerSelection + ' beats ' + playerSelection + '\nUser ' + user + ' CPU ' + cpu;
    }
    else {
        gameResult.textContent = 'You lose, Computer scored 5 points. GAME OVER';
    }
    results.appendChild(gameResult);
}


//Takes player button choice and random computer chioce and compares them returning either a tie, win or lose function
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('Tie! Try again');
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
        return alert('Please choose either rock, paper, or scissors');
    }

}
