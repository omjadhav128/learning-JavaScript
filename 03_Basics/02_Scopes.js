var c = 300;
let b = 200;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("Inner ",a);   
}

// console.log("Outer a :",a); // Error: a is not defined.
console.log("Outer c :", c); // Values printed is 30 but should be 300
console.log("Outer b :", b); // Values printed is 200

// NOTE => Let,Const is block level scope and Var has global scope



// --------------- FUNCTIONS ----------------- {HOISTING}
// Two different types of function declaration 

// This type of function can be access before function declaration
console.log(addOne(5)) // 6
function addOne(num){
    return ++num;
}

// will give error if used before declaration
// console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num+=2
}
console.log(addTwo(5)); // 7