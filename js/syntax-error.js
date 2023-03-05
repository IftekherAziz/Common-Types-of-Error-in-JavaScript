function isBigger (num) {
    if (num > 5) {
        return true;
    } else {
        return false;
    }
}

// SyntaxError: Unexpected token '}
// } 

const result = isBigger(10);
// console.log(result);

// syntaxError: Missing initializer in const declaration
// const sum = a , b => a+b; 
const sum = (a , b )=> a+b;
const res = sum(10, 20);
console.log(res);

const musk = {
    name: 'Elon Musk',
    // syntaxError: Unexpected identifier '
    // age: 49 
    age: 49,
    job: 'CEO of Tesla'
}

console.log(musk.age);
