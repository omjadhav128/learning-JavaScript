class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCouser(){
        console.log(`New course was added by ${this.username}`);
    }
}

const userOne = new Teacher("Om","om@netflix","om123")
// Will call the parent constructor and store the username for parent class and will access all the properties of parent class here

userOne.addCouser()
userOne.logMe()

// OUTPUT => New course was added by Om
// Username is : Om

const userTwo = new User("Vedant")
userTwo.logMe()
// userTwo.addCouser() => ERROR addCourse is not a function
// OUTPUT => Username is : Vedant

console.log(userOne == userTwo); // false
console.log(userTwo instanceof Teacher); // false
console.log(userOne instanceof User); // true -> userOne object of Teacher is instance of class user as Teachers extends properties of User