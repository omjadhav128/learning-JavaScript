// -------------------- Numbers ----------------------------

const score = 100

console.log(`${score} => ${typeof(score)}`)

const balance = new Number(400);
console.log(`${balance} => ${typeof(balance)}`)

console.log(`${balance.toFixed(2)}`); // 400.00
console.log(`${balance.toFixed(4)}`); // 400.0000

console.log(`${12.82999.toPrecision(3)}`) // 12.8 => give importance to how many digits
console.log(`${12.86999.toPrecision(3)}`) // 12.9
console.log(`${112.86999.toPrecision(3)}`) // 113
console.log(`${1121.86999.toPrecision(3)}`) // 1.12e+3

// Convert number to string according to currency
const money = 10000000
console.log(money.toLocaleString('en-US'));  // 10,000,000
console.log(money.toLocaleString('en-IN'));  // 1,00,00,000

console.log(`${Number.MAX_VALUE}`)         // 1.7976931348623157e+308
console.log(`${Number.MAX_SAFE_INTEGER}`)  // 9007199254740991
console.log(`${Number.MIN_VALUE}`)         // 5e-324
console.log(`${Number.MIN_SAFE_INTEGER}`)  // -9007199254740991

// --------------------- Maths ------------------------------
console.log('***Math***')

console.log(`${Math.abs(-4.5)}`); // 4.5

console.log(`${Math.round(4.5)}`); // 5
console.log(`${Math.round(4.4)}`); // 4

console.log(`${Math.floor(4.4)}`); // 4
console.log(`${Math.ceil(4.9)}`);  // 5

console.log(`${Math.min(2,7,4,8,4,9,67)}`)   // 2
console.log(`${Math.max(2,7,4,8,4,9,67)}`)   // 67

console.log(`${Math.random()}`); // always gives values between 0-1

console.log(`${Math.floor(Math.random()*10 + 1)}`)  // 2 , 5 , 7 => Single digit values

const min = 10
const max = 50
console.log(`${Math.floor(Math.random() * (max - min + 1)) + min }`) // 21 10 31 48 12