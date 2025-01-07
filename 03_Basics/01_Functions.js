function addTwoNumbers(num1, num2) { // Parameters 
    console.log(num1+num2);
}

addTwoNumbers(3,4) // Arguments

function multiplyNumbers(num1,num2) {
    return num1*num2;
}

const result = multiplyNumbers(2,3)
console.log(result);

function userLoginMsg(username) {
    return `${username} logged in successfully...`
}

console.log(userLoginMsg("Om"));  // Om logged in successfully...

// NOTE => If we dont pass any argument then it will take it as undefined

console.log(userLoginMsg()); // undefined logged in successfully...

// Will give default value if value not given through argument it will use default value
function userLoginMsg1(username = "sam") {
    return `${username} logged in successfully...`
}

console.log(userLoginMsg1()); // sam logged in successfully...
console.log(userLoginMsg1("Mohit")); // Mohit logged in successfully...

// ******** REST OPERATOR ******** {...}
// if we dont know how much arguments will be inputed so we use rest operator ...
// the rest operator will collect all arguments into an array 
function addCartValue(...price) {
    return price
}


console.log(addCartValue(200,300,560,140));  // [ 200, 300, 560, 140 ]

// function addCartValue(val1, val2, ...price) {
//     return price
// } 
// first 2 values will be in val1 and val2 and rest values will be stored in the price 

// ----- Passing object as an argument 
const user = {
    name : "Om Jadhav",
    age : 21
}

function welcomeUser (anyobject) {
    console.log(`Welcome ${anyobject.name} and your age is ${anyobject.age}`);
}

welcomeUser(user)  // Welcome Om Jadhav and your age is 21 

welcomeUser({
    name : "sam",
    age : 18
})
// Welcome sam and your age is 18

const newArray = [200, 400, 600, 800] // 400 will be returned 
function returnSecondValue(valuearr) {
    return valuearr[1] 
}

console.log(returnSecondValue(newArray)); // 400

/*
Functions =>
    1. Values passed to functions are called as arguments 
    2. function parameters are placeholders for values that a function can accept when it is called. parameters are declared in parentheses
    3. If arguments are not given to a function it will be taken as undefined 
    4. We can set default values to the parameter, when argument is not passed it will use default value instead to undefined function age(val = 12){}
    5. Function terminated when return keyword is reached 
    6. REST Operator (...values) => is used when we dont know how many argumnents will be passed, will collect values into an array 
    7. Eg.. (val1,val2,...values) => [12,13,14,15,16] => val1=12, val2=13, values=[14,15,16] 
    8. Can pass objects as well as arrays as an argument 
*/