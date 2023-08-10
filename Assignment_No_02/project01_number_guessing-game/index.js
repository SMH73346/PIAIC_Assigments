var promptSync = require('prompt-sync')();
var rndGenterator = Math.floor(Math.random() * 10);
var user = promptSync('Enter a number between 1 and 10: ');
var userChoice = Number(user);
if (userChoice === rndGenterator) {
    console.log('Congrats! You got it! Win');
}
else {
    console.log('Oppss! You lost it! Lose. The number was: ' + rndGenterator);
}
;
