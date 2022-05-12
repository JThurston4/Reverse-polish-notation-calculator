const {calculator, isOperation, handleInput} = require('./calculator');

describe('Calculator tests', () => {

  it('should correctly add 2 numbers', () => {
    expect(calculator([24, 17], '+')).toEqual(41);
    expect(calculator([2, 2], '+')).not.toEqual(5)
  });

  it('should correctly subtract 2 numbers', () => {
    expect(calculator([24, 17], '-')).toEqual(7);
    expect(calculator([2, 2], '-')).not.toEqual(5)
  });

  it('should correctly multiply 2 numbers', () => {
    expect(calculator([9, 7], '*')).toEqual(63);
    expect(calculator([2, 2], '*')).not.toEqual(5)
  });

  it('should correctly divide 2 numbers', () => {
    expect(calculator([15, 5], '/')).toEqual(3);
    expect(calculator([2, 2], '/')).not.toEqual(5)
  });

});

describe('Utility tests', () => {
  it('should identify if input is a math operation', () => {
    expect(isOperation('+')).toBe(true);
    expect(isOperation('-')).toBe(true);
    expect(isOperation('/')).toBe(true);
    expect(isOperation('*')).toBe(true);
    expect(isOperation('$')).toBe(false);
    expect(isOperation('%')).toBe(false);
    expect(isOperation(3)).toBe(false);
  });
});

describe('integration tests', () => {
  it('should route inputs to the correct destination', () => {
    expect(handleInput(`3`)).toEqual(['3']);
    expect(handleInput(`17`)).toEqual(['3', '17']);
    expect(handleInput('(')).toEqual('invalid');
    expect(handleInput('4')).toEqual(['3', '17', '4']);
    expect(handleInput('+')).toEqual(21);
  })
})

