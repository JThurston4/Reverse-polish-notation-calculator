# Specs
1. The calculator should use standard input and standard output
2. It should implement the four standard arithmetic operators
3. The calculator should handle errors and recover gracefully
4. The calculator should exit when it receives a q command or an end of input indicator (EOF / Ctrl+D)

# Guidelines
- It works right
- The code is well-abstracted and uses good names
- It provides for a good user experience (end-user and programmer)
- The code adheres to style and practices accepted by the community
- Tests demonstrate intended use, help prevent regression, and can withstand change
- You write intention-revealing commit messages


# Readme
## Write your README as if it was for a production service. Include the following items:

- A high-level description of your solution
- Reasoning behind your technical choices, including architectural
- Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
- How to run your code, if applicable
- Link to the hosted application, if applicable


# Tasks
1. Get text / user input to appear on cli ✅
2. Implement functionality of calculator
  A. Application will run until user exits ✅
    1. Implement `while` loop that the app runs off of, condition is fulfilled when specific input is made (`q`) ✅
  B. Calculator seems to work using a stack that resolves the two items on top when an operation is made
    1. Create a `Stack` class
    2. Create a `Calculator` class that integrates `Stack` 
  C. Begin general functionality
    1. Process to handle arithmetic and lessen stack size
    2. Handle errors that might occur
      A. Divide by `0`
      B. Non number inputs
      C. Non arithmetic inputs
3. Style the calculator
4. Create `README`