let  person = {
    firstname:"Mark",
    lastname:"Zuck",
    age:21,
    country:"USA"
}
console.log(person);

// Create an object for ShoppingCart
 let ShoppingCart = [ {
        name:"iPhone",
        brand:"Apple",
        price:234567,
        quantity:1
    },
    {
        name:"iPad",
        brand:"Apple",
        price:345435,
        quantity:1
    }];

// object are references

let name1 = "Mark";
let name2 = name1;
let name3 = name2;

name2 = "Elon";
console.log(name3);

let product1 ={
    name:"laptop",
    price:43535
}
let product2 = {
    name:"laptop",
    price:43535
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

let product4 ={...product3};
console.log(product3);
console.log(product4);
product3.name = "TV";
console.log(product3);
console.log(product4);