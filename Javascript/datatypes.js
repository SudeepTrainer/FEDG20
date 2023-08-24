console.log("testing");
//SNOBNUS
//String Number Object Boolean null undefined Symbol 

var country = "USA";

// Javascript is an interpreted language
// ES1 1997
// ES6 JS

let name = "Mark Zuck";
const PI = 3.14;
// PI = 4.12; error
name = "Elon musk";
console.log(name);

// var,let and const difference
// var is global scoped
// let and const is block scoped
for(var i=0;i<10;i++){
    // i is available outside this code block
}
console.log(i);
for(let j=0;j<10;j++){
    // j is available only inside this code block
}
// console.log(j);

// strings
let msg1 = 'Your\'s truly';
let msg2 = "This is a \"quote\"";
let msg3 = `Your's truly. This is a "quote"`;

let firstname = "MArk";
let lastname = "Zuck";
// let fullName = "Fisrtname:" +"\t"+ firstname + "Lastname:"+" " + lastname;
let fullName = `Firstname:  ${firstname.toUpperCase()} Lastname: ${lastname}`;
console.log(fullName);

//Number

let num1 = 23445;
let num2 = 23.14;

console.log(1/0);
console.log(-1/0);
console.log(200**20000);
console.log(Math.pow(200,20000));
console.log(0/0);
console.log(0/"Mark");
console.log(Math.max(10,20));
console.log(Math.floor(2.132));
console.log(Math.ceil(2.123));
console.log(Date.now());
// https://www.epochconverter.com
console.log(parseInt("3"));
console.log(parseInt("3.134"));
console.log(parseFloat("3.134"));

//Boolean
let flag = false;

// let isAdult = age > 17;

console.log(10==10);
console.log("10"==10);
console.log("10"=="10");

console.log(10===10);
console.log("10"===10);
console.log("10"==="10");

//undefined and null

let aVar;
console.log(aVar);

let anothervar = null;
console.log(anothervar);

// let myFirstName = "Sudeep";
// let myLastName;

// console.log(`${myFirstName} ${myLastName}`);

let myFirstName = "Mark";
let myLastName = "Zuck";

myLastName = null;
console.log(`${myFirstName} ${myLastName}`);