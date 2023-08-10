const promptSync = require('prompt-sync')();

var rndGenterator: number = Math.floor(Math.random() * 10);

let user = promptSync('Enter a number between 1 and 10: ');
let userChoice = Number(user);

    if (userChoice === rndGenterator) {
        console.log('Congrats! You got it! Win');
    }
    else {
        console.log('Oppss! You lost it! Lose. The number was: ' + rndGenterator);
    };
