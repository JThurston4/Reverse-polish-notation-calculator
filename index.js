const readlineSync = require('readline-sync');
const Calculator = require('./models/Calculator');
let calculator = new Calculator();

let active = true;

while(active) {
  const input = readlineSync.prompt();
  if (input.toLowerCase() === 'q') {
    active = false;
  } else {
    calculator.handleInput(input);
  }
};