const choices = ['rock','paper','scissors']

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let num = getRndInteger(0, 2);
    return choices[num];
}