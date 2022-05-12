const readlineSync = require('readline-sync');
const {handleInput} = require('./calculator');

let active = true;

while(active) {
  const input = readlineSync.prompt();
  if (input.toLowerCase() === 'q') {
    active = false;
  } else {
    handleInput(input)
  }
};