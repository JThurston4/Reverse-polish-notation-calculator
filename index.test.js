const sum = require('./index');

describe('verifying test setup', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(3, 2)).toBe(5);
  })
})