// Objects can be created in two ways by : literals and constructor

// literals => no Singleton const user = {}
// Constructor => Singleton user.create()

// object literals

// Interview Question => How to give symbol in object

const mySym = Symbol("KeyValue")

const user = {
    name : "Om",
    age: 21,
    "Gender" : "Male",
    // mySym : "key1", will be treated as an string
    [mySym] : "key1",
    location : "Pune",
    email : "iomjadhav@gmail.com",
    isLoggedIn : true
};

// Always use square brackets for accessing array elements

console.log(user.name);
console.log(user["email"]);
console.log(user["Gender"]); // Male
console.log(user.Gender);    // Male

console.log(typeof user[mySym]);

// Updating JS objects

user["email"] = "om@google.com"
console.log(user["email"])

// Make JS Object Unmutable => cannot be updated
// After operation {Updating} will not give error but will also not update the array 
// Object.freeze(user)  
user["name"] = "Om Jadhav"
console.log(user["name"])

console.log(user)
/*
{
  name: 'Om',
  age: 21,
  Gender: 'Male',
  location: 'Pune',
  email: 'om@google.com',
  isLoggedIn: true,
  [Symbol(KeyValue)]: 'key1' /// Symbol value 
}
*/

user.greet = function () {
    console.log("Hello JS User");
}

user.greet()

user.greetUser = function () {
    console.log(`Hello ${this.name}`); // Use this to point current object   
}

user.greetUser()

console.log(user.greetUser); // [Function (anonymous)]
console.log(user.greetUser()); // undefined