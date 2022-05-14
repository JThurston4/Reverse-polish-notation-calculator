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

  it('should correctly subtract 2 numbers', () => {
    let calculator = new Calculator();
    calculator.handleInput(24);
    calculator.handleInput(17);
    expect(calculator.handleInput('-')).toEqual(7);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(7);

    calculator.handleInput(50);
    expect(calculator.handleInput('-')).toEqual(-43);

    calculator.handleInput(-1);
    calculator.handleInput(-4);
    expect(calculator.handleInput('-')).toEqual(3);
    expect(calculator.count).toEqual(2);
    expect(calculator.peek()).toBe(3);

    expect(calculator.handleInput('-')).toEqual(-46);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(-46);
  });

  it('should correctly multiply 2 numbers', () => {
    let calculator = new Calculator();
    calculator.handleInput(9);
    calculator.handleInput(7);
    expect(calculator.handleInput('*')).toEqual(63);

    calculator.handleInput(1);
    calculator.handleInput(2);
    expect(calculator.handleInput('*')).toEqual(2);
    expect(calculator.count).toEqual(2);
    expect(calculator.peek()).toBe(2);
    
    expect(calculator.handleInput('*')).toEqual(126);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(126);
  });

  it('should correctly divide 2 numbers', () => {
    let calculator = new Calculator();
    calculator.handleInput(54);
    calculator.handleInput(6);
    expect(calculator.handleInput('/')).toEqual(9);

    calculator.handleInput(15);
    calculator.handleInput(5);
    expect(calculator.handleInput('/')).toEqual(3);
    expect(calculator.count).toEqual(2);
    expect(calculator.peek()).toBe(3);

    expect(calculator.handleInput('/')).toEqual(3);
    expect(calculator.count).toEqual(1);
    expect(calculator.peek()).toBe(3);
  });

  it('should not be able to divide by 0', () => {
    let calculator = new Calculator();
    calculator.handleInput(9);
    calculator.handleInput(0);
    expect(() => { calculator.handleInput('/')}).toThrow('Error :: Divide by 0');
  });
});

describe(`testing examples`, () => {
  it(`should handle return the correct answer`, () => {

    let calculator = new Calculator();
    calculator.handleInput(5);
    calculator.handleInput(5);
    calculator.handleInput(5);
    calculator.handleInput(8);
    expect(calculator.count).toEqual(4);
    expect(calculator.handleInput('+')).toEqual(13);
    expect(calculator.count).toEqual(3);
    
    expect(calculator.handleInput('+')).toEqual(18);
    expect(calculator.count).toEqual(2);
    expect(calculator.handleInput('-')).toEqual(-13);
    expect(calculator.count).toEqual(1);
  });

  it(`should handle return the correct answer`, () => {
    let calculator = new Calculator();
    calculator.handleInput(-3);
    calculator.handleInput(-2);
    expect(calculator.count).toEqual(2);
    expect(calculator.handleInput('*')).toEqual(6);
    expect(calculator.count).toEqual(1);
    
    calculator.handleInput(5);
    expect(calculator.handleInput('+')).toEqual(11);
  });

  it(`should handle return the correct answer`, () => {
    let calculator = new Calculator();
    calculator.handleInput(5);
    calculator.handleInput(9);
    calculator.handleInput(1);
    expect(calculator.count).toEqual(3);
    expect(calculator.handleInput('-')).toEqual(8);
    expect(calculator.handleInput('/')).toEqual(.625);
    expect(calculator.count).toEqual(1);
    
  });
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