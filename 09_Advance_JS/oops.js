// Object Literal
const User = {
    username : "om",
    loginCnt : 12,
    signedIn :true,
    getUserDetails : function(){
        console.log(`welcome, ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(User.getUserDetails());

// console.log(this);  => {}

// constructor function
function user(username,loginCnt,signedIn){
    this.username = username;
    this.loginCnt = loginCnt;
    this.signedIn = signedIn;

    return this;
    // return this => defined implicitly - If not written then it is given by default
}
const userOne = user("UserABC",11,false);
const uesrTwo = user("UserXYZ",13,true);
// console.log(userOne);
// console.log(uesrTwo);

// Both gives same output as the same refrence is use to create the object 
// to avoid this we have to use the new keyword to create the new instance of the object everytime

const userThree = new user("UserThree",14,true);
const userFour = new user("UserMNOP",21,false);
console.log(userThree);
console.log(userFour);

// constructor => refrence of itself

// OUTPUT
// user { username: 'UserThree', loginCnt: 14, signedIn: true }
// user { username: 'UserMNOP', loginCnt: 21, signedIn: false }

// PROTOTYPES
// Javascript has a prototyipal behaviour i.e. if it didnt find any value it will check to parent and continue this until it gets null
// this , classes , inheritance in javascript is given by the prototype 

// Prototype levels 
// 1. array -> object -> null
// 2. string -> object -> null