const Evaluator = require('math-expression-evaluator');
const Stack = require('./Stack');

class Calculator extends Stack {
  constructor() {
    super();
    this.operations = ['+', '-', '/', '*', '^'];
  }

  convertBadArgs(item) {
    if (item === undefined) {
      return 0;
    }
    return item;
  }

  calculate(operation) {
    const secondArg = this.convertBadArgs(this.pop());
    const firstArg = this.convertBadArgs(this.pop());

    let answer = Evaluator.eval(`${firstArg} ${operation} ${secondArg}`);
    if (answer === "Infinity" || isNaN(answer)) { //result of divide by 0
      throw new Error('Divide by 0');
    }

    answer = Number(Number.parseFloat(answer).toFixed(3));

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