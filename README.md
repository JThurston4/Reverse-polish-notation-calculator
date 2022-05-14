# Summary
This is my implmentation of a reverse polish notation calculator (RPNC) done in the command line, ```node index.js``` to run.  

## Description (from wiki)
```In reverse Polish notation, the operators follow their operands; for instance, to add 3 and 4 together, one would write 3 4 + rather than 3 + 4. If there are multiple operations, operators are given immediately after their final operands (often an operator takes two operands, in which case the operator is written after the second operand); so the expression written 3 − 4 + 5 in conventional notation would be written 3 4 − 5 + in reverse Polish notation: 4 is first subtracted from 3, then 5 is added to it. An advantage of reverse Polish notation is that it removes the need for parentheses that are required by infix notation. While 3 − 4 × 5 can also be written 3 − (4 × 5), in reverse Polish notation, this could be written 3 4 5 × −, which reduces to 3 20 − (which can further be reduced to -17);.```



# The Process
## Pre-development
During my planning phase I wrote out a general road map in the `outline.md` file that helps show my thought process in creating this.  

When I started I wasn't familiar with the concept of a RPNC and had to play around with one / watch videos before I was able to wrap my head around it. The resources below were especially helpful in that regard.

- [http://www.alcula.com/calculators/rpn/](http://www.alcula.com/calculators/rpn/)
- [https://www.youtube.com/watch?v=bytfIdoUhD8](https://www.youtube.com/watch?v=bytfIdoUhD8) 

## Beginning Development
After having a general understanding of the tool it became clear that all the `numberical inputs` are stored in a `stack` that gets it's top two items resolved as you input an `operation`.  Javascript doesn't have a built in `Stack` class so I thought would be best to make one and then find a way to integrate that into what is running the calculator.  Before I tackled any logic I wanted a quick and simple way to grab and store user input.  While there are a variety of ways to accomplish this, I chose the library `readline-sync` due to it being fast to set up and easy to understand when reading the code.  With that out of the way it I started on the implementing the logic portion.

## Challenges
1. The first challenge was finding a way to evalutate the mathematical expression since all inputs oringally came as `strings`.  Converting the `numercial inputs` was easy enough but converting the `operations` was trickier.  I ended up using the `mathjs` library but the dependency was taking a toll on the application start up time, bringing it from near instant start all the way up to ~20 seconds on my machine.  After more research I decided on the library `math-expression-evaluator` as it served my needs without causing much hindrance at run time.

2. The second challenge was deciding how to integrate the `Stack` into the calculator.  I had a function responsible for the calculator originally but I couldn't think of a convenient way to return the result of an operation without the function returning a new stack entirely which is definitely something I wanted to avoid.  After some brainstorming I decided to make the calculator its own class that inherits from `Stack` so it can easily make changes to the stack any time an operation is handled.

Finally I wrote some tests to handle edge cases, implemented the logic to pass the tests, and wired everything to the `index.js` file which runs the application.  I think if I dedicated more time I'd style the application to resemble a calculator screen in the CLI that would also have a visual representation of the stack.