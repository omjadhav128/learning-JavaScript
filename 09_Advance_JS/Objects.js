function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 3

console.log(multiplyBy5(5));    // 25
console.log(multiplyBy5.power); // 3
console.log(multiplyBy5.prototype); // {}

// Everything in JS is an object, even a function is an object also

function createUser(username,score){
    this.username = username
    this.score = score
}

// we can add custom methods and properties to the function using prototype 

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

// while using no need to specify the .prototype. to access . JS will automatically access the parent objects and get the value

const userOne = new createUser("OM",45);
const userTwo = createUser("JAY",55); // will give error as prototype functionality is not available as we are not using new keyword 

console.log(userOne.printMe());
userOne.increment()
console.log(userOne.printMe());

/*
NOTES: 

New Keyword
A new object is created: the new keyword initiates the creation of a new Javascript object.

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the construtor's prototype.

The constructor is called: The constuctor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object,array,function, etc.), the newly created object is returned.

*/