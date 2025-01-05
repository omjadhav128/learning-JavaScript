// There are two types to data types 1. Primitive datatypes 2. Non-Primitive datatypes

// 1. Primitive DataTypes {Predefined} [Call by Value] => copy of the value is used / returned 
// 7 types of primitive datatypes [string, number, boolean, null, undefined, symbol, BigInt]

// null => object
// undefined => undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)

console.log(id == anotherId)

let bigNumber = 12334555554545445466546n
console.log(bigNumber, typeof bigNumber)
// 12334555554545445466546n bigint


// 2. Non-Primitive Datatypes {User-Defined} [call by refrence] => always address is used / returned  
// [Array, objects, Functions]

const heroes = ["Batman", "Captain America", "Hulk", "Spiderman"];

const myObj = {
    name : "Om",
    age : 21
}

const myFunction = function(){
    console.log("Hello World ");
}

console.log(heroes, typeof heroes);  // Array => Object
console.log(myObj, typeof myObj);    // object => object 
console.log(myFunction(), typeof myFunction); // Function => function    // Object Function

// JavaScript is Dynamically typed language as datatypes are not mentioned during declaring they are defined at runtime.