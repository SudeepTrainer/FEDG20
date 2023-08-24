function add(a,b){
    let result = a + b; 
    return result;
}
console.log(add(2,4));

// function expression

let product = function multiply(a,b){
    return a * b;
}
console.log(product(4,5));

// let square = function square(a){
//     return a * a;
// }

// console.log(square(4));

// Anonymous function
let square = function(a){
    return a * a;
}

console.log(square(4));

// let sum = function add(a,b){
//     return a + b;
// } 
//Step 1: Remove the function name if it exists
// let sum = function (a,b){
//     return a + b;
// } 
//Step 2: Remove the function keyword and add =>(fat arrow)
// let sum = (a,b) => {
//     return a + b;
// } 
// console.log(sum(3,4));
//Step 3: Remove the curly brace and return if it is the only statement
let sum = (a,b) => a + b;

// let cube = function(a){
//     return a*a*a;
// } 
// console.log(cube(4));
// Remove the function keyword and add fat arrow(=>)
// let cube = (a) => {
//     return a*a*a;
// } 
//Remove the curly brace and return if it is the only statement
// let cube = (a) => a*a*a ;
// console.log(cube(4));
// Remove the paranthesis if there is only 1 param
let cube = a => a*a*a ;
console.log(cube(4));