const Evaluator = require('math-expression-evaluator');

const operations = ['+', '-', '/', '*'];

let inputArr = [];

function isOperation(input) {
  return operations.some((operation) => operation === input);
}

function calculator (inputs, operation) {
  const answer = Evaluator.eval(`${inputs[inputs.length-2]} ${operation} ${inputs[inputs.length-1]}`)
  console.log(answer);
  return answer;
}d

function handleInput(input) {
  if (!isOperation(input) && isNaN(Number(input))) {
    console.log('Invalid input, number or operation required')
    return 'invalid' // for testing purposes
  } else if (isOperation(input)) {
    return calculator(inputArr, input);
  } else {
    inputArr.push(input)
    return inputArr;
  }
}

module.exports = {isOperation, calculator, handleInput}