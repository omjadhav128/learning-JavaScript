class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const userOne = new User("Omm")

userOne.logMe()
// console.log(userOne.createId())  => after static will give an error 

// OUTPUT    => before static 
// Username is : Omm
// 123

// static => will not give access to all the object instance created from that class => make it private
// it will not be accessible to child classes object also