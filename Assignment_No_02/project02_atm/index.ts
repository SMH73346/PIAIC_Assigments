const inquirer = require('inquirer');

const rndGenterator = Math.floor(Math.random() * 10);

inquirer.prompt([
  {
    type: 'input',
    name: 'guess',
    message: 'Enter your guess: '
  }
]).then(function(answer: any) {
const num = answer.guess;

if(num === rndGenterator) {
console.log('You got it! Win');
} else { 
  console.log('Wrong');
}
});

