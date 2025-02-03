// Topics -> .call() , passing current execution context , passing this - current instance to another function/object
function setUserName(username){
    this.username = username;
    console.log("setUserName called");
    
}

function createUser(username,email,password){
    
    setUserName(username);
    
    this.email = email;
    this.password = password;
}

const userOne = new createUser("om","om@gmail.com",123)

// console.log(userOne);
// OUTPUT => setUserName called
// createUser { email: 'om@gmail.com', password: 123 }
// The setUserName method is getting called but the this.username is getting init for setUserName and not for createUser as .this point current object instance 
// NOTE // ACTUAL REASON => when the function setUserName is called its variables are initalize but after the function call ended (returned) the variables cleared with the execution context of that function
// .call() is  used to store the refrence 

// and here we have to pass the this from createUser to store the refrence in instance of createUser function and not in setUserName
// setUserName(this,uesrname)

function setUserName2(username){
    this.username = username;
    console.log("setUserName 2 called");    
}

//  .call() is used to pass current execution context to another function / object 
function createUser2(username,email,password){
    
    setUserName2.call(this,username);
    
    this.email = email;
    this.password = password;
}

const userOne2 = new createUser2("om","om@gmail.com",123)

console.log(userOne2);
// OUTPUT =>
// setUserName 2 called
// createUser2 { username: 'om', email: 'om@gmail.com', password: 123 }