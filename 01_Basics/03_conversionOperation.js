// -- Converting string to number

let marks = "95"
console.log(marks, typeof(marks))
// 95 string

let valueInNumber = Number(marks)
console.log(valueInNumber, typeof valueInNumber)
// 95 number

// Converting a string into number where it is not a complete number

let score = "33a"
console.log(score, typeof(score))
// 33a string

let scoreInNumber = Number(score)
console.log(scoreInNumber, typeof(scoreInNumber));
// NaN number // NaN => Not a Number {i.e. value that iss converted was not a number }


// "33" => 33
// null => 0
// undefined => NaN
// true => 1
// false => 0
// om => NaN

// -- Converting number to boolean
let isLoggedIn = 1
console.log(isLoggedIn);
// 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);
// true

// 0 => false
// 1 => true


// -- converting string to boolean 
let namee = "om"
let booleanNamee = Boolean(namee)

console.log(namee, booleanNamee)
// true 

// "" => false
// "a" => true 
// NOTE = If text present then true or absent