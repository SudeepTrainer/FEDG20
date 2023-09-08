let person = {
    firstname: "Mark",
    lastname: "Zuck",
    age: 21,
    country: "USA"
}
console.log(person);

// Create an object for ShoppingCart
let ShoppingCart = [{
    name: "iPhone",
    brand: "Apple",
    price: 234567,
    quantity: 1
},
{
    name: "iPad",
    brand: "Apple",
    price: 345435,
    quantity: 1
}];

// object are references

let name1 = "Mark";
let name2 = name1;
let name3 = name2;

name2 = "Elon";
console.log(name3);

let product1 = {
    name: "laptop",
    price: 43535
}
let product2 = {
    name: "laptop",
    price: 43535
}
console.log(product1 === product2);
product3 = product1;
product3.name = "keyboard";
console.log(product1.name);

// clone an object

// let product4 = Object.assign({},product3);
// console.log(product3);
// console.log(product4);
// product3.name = "TV";
// console.log(product3);
// console.log(product4);

let product4 = { ...product3 };
console.log(product3);
console.log(product4);
product3.name = "TV";
console.log(product3);
console.log(product4);

const personMethods = {
    greet: function () {
        console.log(`Hi, this is ${this.firstName}`);
    },
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// function Person(fname, lname, age) {
//     let person = {}
//     person.firstName = fname;
//     person.lastName = lname;
//     person.age = age;
//     // person.greet = function () {
//     //     console.log(`Hi, this is ${this.firstName}`);
//     // }
//     person.greet = personMethods.greet;
//     // person.getFullName = function () {
//     //     console.log(`${this.firstName} ${this.lastName}`);
//     // }
//     person.getFullName = personMethods.getFullName;
//     return person;
// }

// let elon = Person("Elon", "Musk", 23);
// console.log(elon.firstName);
// elon.greet();
// elon.getFullName();

// let bill = Person("Bill", "Gates", 24);
// console.log(bill.lastName);
// bill.getFullName();

//Object.create
let parent = {
    country: "India"
}
let child = Object.create(parent);
child.name = "Mark";
console.log(child.country);
console.log(child.name);
console.log(parent.name);

let animalPrototype = {
    makeNoise: function () {
        console.log(`${this.name} Making noise`);
    }
}
let animal = Object.create(animalPrototype);
animal.name = "Lion";
animal.makeNoise();

console.log(Array.prototype);
console.log(String.prototype);

function Person(fname, lname, age) {
    // let person = Object.create(Person.prototype);
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    // return person;
}

Person.prototype.greet = function () {
    console.log(`Hi, this is ${this.firstName}`);
};
Person.prototype.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
};

let elon = new Person("Elon", "Musk", 23);
console.log(elon.firstName);
elon.greet();
elon.getFullName();

let bill = new Person("Bill", "Gates", 24);
console.log(bill.lastName);
bill.getFullName();
console.log(typeof Person);
class Person1 {
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    greet() {

    }
    getFullName() {

    }
}

let array = []
let anotherArray = new Array()

function anotherFunc() {

}
console.log(anotherFunc.prototype);