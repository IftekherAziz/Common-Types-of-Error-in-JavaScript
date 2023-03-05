// TypeError Examples:

const numbs = 5;
// numbs.push(45);
// TypeError: numbs.push is not a function

let address ;
// console.log(address.home);
// TypeError: Cannot read property of 'home' undefined (redaing 'home')

const location = {};
// console.log(location.city);
// undefined

let address2 = {city: 'dhaka', country: 'bangladesh'};
// console.log(address2.home.building);
// TypeError: Cannot read property 'building' of undefined

// To solve this problem we can use optional chaining:
console.log(address2?.home?.building);
// undefined

const a = 'hello';
a = 'world';
// TypeError: Assignment to constant variable.

