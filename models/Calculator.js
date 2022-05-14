const Evaluator = require('math-expression-evaluator');
const Stack = require('./Stack');

class Calculator extends Stack {
  constructor() {
    super();
    this.operations = ['+', '-', '/', '*'];
  }

  calculate(operation) {
    const secondArg = this.pop();
    const firstArg = this.pop();
    
    const answer = Evaluator.eval(`${firstArg} ${operation} ${secondArg}`);
    if (answer === "Infinity" ) { //result of divide by 0
      throw new Error('Error :: Divide by 0')
    }
    this.push(answer);
    console.log(answer);
    return answer;
  }

  isOperation(input) {
    return this.operations.some((operation) => operation === input);
  }

  handleInput(input) {
    if (!this.isOperation(input) && isNaN(Number(input))) {
      console.log('Invalid input, number or operation required')
      return 'invalid' // for testing purposes

    } else if (this.isOperation(input)) {
      return this.calculate(input);

    } else {
      return this.push(input)
    }
  }
}

module.exports = Calculator;