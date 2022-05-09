const readlineSync = require('readline-sync');
const {evaluate} = require('mathjs');

const operations = ['+', '-', '/', '*'];

function isOperation(answer) {
  return operations.some((operation) => operation === answer);
}

const calculator = () => {

  let answers = [0, 0];
  while (true) {
    const answer = readlineSync.prompt();

    if (isNaN(Number(answer)) && !isOperation(answer)) {
      console.log('Invalid input, number or operation required')
    } else if (isOperation(answer)){
      console.log(evaluate(`${answers[answers.length-1]} ${answer} ${answers[answers.length-2]}`))
    } else {
      answers.push(answer);
    }
  }
}

module.exports = calculator;