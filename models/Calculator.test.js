const Calculator = require('./Calculator');

describe('Math Evaluation tests', () => {
  it('should correctly add 2 numbers', () => {
    let calculator = new Calculator();
    calculator.handleInput(5);
    calculator.handleInput(3);
    expect(calculator.handleInput('+')).toEqual(8);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(8);

    calculator.handleInput(17);
    expect(calculator.handleInput('+')).toEqual(25);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(25);

    calculator.handleInput(1);
    calculator.handleInput(0);
    calculator.handleInput(1);
    expect(calculator.handleInput('+')).toEqual(1);
    expect(calculator.count).toEqual(3);
    expect(calculator.peek()).toBe(1);

    expect(calculator.handleInput('+')).toEqual(2);
    expect(calculator.count).toEqual(2);
    expect(calculator.peek()).toBe(2);

    expect(calculator.handleInput('+')).toEqual(27);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(27);
  });

  // it('should correctly subtract 2 numbers', () => {
  //   expect(calculator([24, 17], '-')).toEqual(7);
  //   expect(calculator([2, 2], '-')).not.toEqual(5)
  // });

  // it('should correctly multiply 2 numbers', () => {
  //   expect(calculator([9, 7], '*')).toEqual(63);
  //   expect(calculator([2, 2], '*')).not.toEqual(5)
  // });

  // it('should correctly divide 2 numbers', () => {
  //   expect(calculator([15, 5], '/')).toEqual(3);
  //   expect(calculator([2, 2], '/')).not.toEqual(5)
  // });

});

describe('Utility tests', () => {
  it('should identify if input is a math operation', () => {
    let calculator = new Calculator();

    expect(calculator.isOperation('+')).toBe(true);
    expect(calculator.isOperation('-')).toBe(true);
    expect(calculator.isOperation('/')).toBe(true);
    expect(calculator.isOperation('*')).toBe(true);
    expect(calculator.isOperation('$')).toBe(false);
    expect(calculator.isOperation('%')).toBe(false);
    expect(calculator.isOperation(3)).toBe(false);
  });
});

// describe('integration tests', () => {
//   it('should route inputs to the correct destination', () => {
//     expect(handleInput(`3`)).toEqual(['3']);
//     expect(handleInput(`17`)).toEqual(['3', '17']);
//     expect(handleInput('(')).toEqual('invalid');
//     expect(handleInput('4')).toEqual(['3', '17', '4']);
//     expect(handleInput('+')).toEqual(21);
//   })
// })