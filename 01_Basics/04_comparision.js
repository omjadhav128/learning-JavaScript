// *** Comparision Operation ***

console.log("2" > 1); // true
console.log("1" > 2); // false

// NOTE => Comparision operator converts the string into number first 

console.log(null > 0);  // falses
console.log(null == 0); // false ; Equality check
console.log(null < 0);  // false
console.log(null >= 0); // ture

// NOTE => actually null when converted to number it becomes 0 ; here but when comparing using == it is not converted to number
// == Equality Check will not convert null to number
// <= Comparision check will convert null to number 

console.log(undefined > 0);  // false 
console.log(undefined == 0); // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false 

console.log("BREAK");

console.log("0" == 0); // true

// === is used to strictly check i.e it will not convert it must have same datatype also
console.log("0" === 0); // false 

console.log("1" == true) // true