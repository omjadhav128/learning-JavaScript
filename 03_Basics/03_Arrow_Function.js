const user = {
    username : "Om",
    welcomeUser : function(){
        console.log(`${this.username} , welcome to our code..`);  // If this not given will give error
        // console.log(this);  // { username: 'Om', welcomeUser: [Function: welcomeUser] }  => will give current instance
    }
}
user.welcomeUser() // Om , welcome to our code..
user.username = "SAM" 
user.welcomeUser() // SAM , welcome to our code..

function add(){

    // console.log(this);  gives details about function
    let username = "Om"
    // console.log(this.username); // will give error undefined => this refrencing works only with objects not with functions
}
add()

//  --- Arrow Function ---

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)); // 7

// Implicit return  => single line function, no need to use return keyword
const addAnother = (num1,num2) => num1+num2
console.log(addAnother(3,5)); // 8

// can also be use using patentheses
// const addAnother = (num1,num2) => (num1+num2)  () => no need to write return keyword
// const addAnother = (num1,num2) => {return num1+num2}   {} => we have to specify return keyword

// const addAnother = (num1,num2) => ({num1 : "num2"}) // if want to return object enclose it in ()

// Interview Question => 1. difference between normal function and arrow function
// 2. This keyword in normal function and arrow function