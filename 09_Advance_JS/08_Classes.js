class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abcc`
    }
    uppperUserName(){
        return this.username.toUpperCase();
    }
}

const userOne = new User("om","om@google","qwe")
console.log(userOne.encryptPassword());
console.log(userOne.uppperUserName());

// Behind the scene if we were'nt using the class

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abcc`
}

user.prototype.uppperUserName = function(){
    return this.username.toUpperCase();
}

const userTwo = new user("Vedant","vedant@fb","xyz")
console.log(userTwo.encryptPassword());
console.log(userTwo.uppperUserName());
