// ReferenceError Example:

// Example 1:
const x = 'Aziz';
const y = 'Chy';
// console.log(z);
// ReferenceError: z is not defined

// Example 2:
// console.log(name);
const name = 'John Doe'; 
// ReferenceError: Cannot access 'name' before initialization

// Example 3:
//console.log(a);
var a = 10;
// undefined 

// console.log(add(10, 20));
function add(a, b) {
    return a + b;
}
// 30

// Example 4:
// console.log(add2(10, 20));
const add2 = (n1, n2) => {
    return n1 + n2;
}
// ReferenceError: Cannot access 'add2' before initialization

// Example 5:
function doSomething() {
    const sum = 50;
}
console.log(sum);
// ReferenceError: sum is not defined