const Stack = require('./Stack');

describe(`testing functionality for Stack class`, () => {
  it(`should allow you to peek at whats on top`, () => {
    let stack = new Stack();
    expect(stack.peek()).toBeFalsy()
  })

  it(`should add items to top of stack`, () => {
    let stack = new Stack();
    stack.push(5);
    expect(stack.peek()).toBe(5);
    stack.push(7);
    stack.push(19);
    expect(stack.peek()).toBe(19);
    expect(stack.count).toEqual(3)
  });

  it(`should remove items from the top of the stack`, () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(1);
    stack.push(9);
    expect(stack.peek()).toBe(9);
    expect(stack.count).toBe(3);

    stack.pop();
    expect(stack.peek()).toBe(1);
    expect(stack.count).toEqual(2);
  });

  it(`should handle pop if nothing is in stack`, () => {
    let stack = new Stack();
    stack.pop();
    expect(stack.count).toEqual(0)
  });

  it(`should check if the stack is empty`, () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it(`should be able to clear all data in stack`, () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(4);
    expect(stack.peek()).toBe(4);
    expect(stack.count).toEqual(3);

    stack.clear();
    expect(stack.peek()).toBeFalsy();
    expect(stack.count).toEqual(0);
  });
});