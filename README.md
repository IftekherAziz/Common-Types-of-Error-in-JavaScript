# Module 40
 
 Debugging: 

 - Debugging is the process of finding and resolving errors or bugs in software code, scripts, or programs. It involves identifying and analyzing the root cause of a problem, diagnosing the issue, and fixing it so that the software performs as expected.

Some Debug Methods:

- Using the console command
- Setting the breakpoint
- Using the debugger Keyword
- Backtracking 

Common Types of Errors:

There are several types of errors that can occur in JavaScript:

- Syntax errors
- Runtime errors
- Logical errors
- Type errors
- Reference errors
- Range errors
- Network errors


<!-- Quiz -->

1. What type of error is commonly caused by referencing a variable or function that has not been defined?

- ReferenceError

2. What type of error is commonly caused by trying to perform an operation on a value that is not of the expected type?

- TypeError

3. What type of error is commonly caused by trying to access an array element that does not exist?

- TypeError

4. What type of error is commonly caused by trying to call a function that does not exist?

- ReferenceError

5. What type of error will the following code throw?

const num = 10;
num();

- TypeError

6. What type of error will the following code snippet produce?

let x = 10;
x = y + 5;
console.log(x);

- ReferenceError

7. What type of error will the following code snippet produce?

const obj = { name: 'John' };
Object.keys(obj).forEach(prop => console.log(prop));

- None of the above 

8. What type of error will the following code snippet produce?

const name = 'John';
name.toUpperCase = () => 'JOHN';
console.log(name.toUpperCase());

- None of the above

9. What type of error will the following code snippet produce?

const arr = [1, 2, 3];
arr.slice(-2, 0);

- RangeError

10. What type of error will the following code snippet produce?

const greeting = 'Hello, world!';

- None of the above