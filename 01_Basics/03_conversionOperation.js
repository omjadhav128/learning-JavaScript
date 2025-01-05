// ************** Conversion **************
// ---------- Converting string to number ------------------------
console.log("***CONVERSION***");

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

// -------------- Converting number to boolean ------------------------
let isLoggedIn = 1
console.log(isLoggedIn);
// 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);
// true

// 0 => false
// 1 => true


// --------------- converting string to boolean ----------------------
let namee = "om"
let booleanNamee = Boolean(namee)

console.log(namee, booleanNamee)
// true 

// "" => false
// "a" => true 
// NOTE = If text present then true or absent

// *********************** Operation ******************************
console.log("***OPERATION***");

let value =3
let negValue = -value
console.log(negValue)  

console.log(2+2); // Additon
console.log(2-2); // Subtraction
console.log(2*2); // Multiplication
console.log(2**3); // 2 to power 3
console.log(2/3); // 2 divide by 3
console.log(2%3); // 2 mod 3 => shows remainder

// String Concatination {Addition}
let firstName = "Om "
let lastName = "Jadhav"
let fullName = firstName + lastName
console.log(fullName)

console.log("1"+2)     // 12
console.log(1+"2");    // 12
console.log("1"+2+2);  // 122

// NOTE => If any one value is String it will convert remaining value to string aswell

console.log(1+2+"2"); // 32

// NOTE => but if first 2 values are number and then third is string the it will consider first 2 values as numbers only 


console.log(true) // ture
console.log(+true); // 1 => + will convert boolean to number
console.log(+"") // "" => is considered as false i.e 0