class Stack {
  constructor() {
    this.count = 0;
    this.data = [];
  }
  
  pop() {
    if (this.isEmpty()) {
      return;
    }
    this.count--;
    return this.data.pop();
  }

  push(item) {
    this.data[this.count] = item;
    this.count++;
  }

  peek() {
    return this.data[this.count - 1];
  }
  
  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.data = [];
  }
}

module.exports = Stack;