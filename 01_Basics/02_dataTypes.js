"use strict"; // treat all JS code as newer version 

// alert(3+3) // Not supported in node js, it is only supported when in browser

// DataTypes in JavaScript
/*
number 
bigInt
string
boolean
null // standalone value
undefined
symbol => unique
*/

// Differece between null and undefined
// null => no value / empty value is assigned to the variable
// undefined => the value is not yet known / undefined / unknown

let age = 18
let nameUser = "Om"
let isLoggedIn = true
let password
let city = null

console.table({age:typeof age, nameUser:typeof nameUser, isLoggedIn:typeof isLoggedIn, password:typeof password, city: typeof city})

/*
OUTPUT:
┌────────────┬─────────────┐
│ (index)    │ Values      │
├────────────┼─────────────┤
│ age        │ 'number'    │
│ nameUser   │ 'string'    │
│ isLoggedIn │ 'boolean'   │
│ password   │ 'undefined' │
│ city       │ 'object'    │
└────────────┴─────────────┘
*/