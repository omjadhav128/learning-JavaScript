
// class User{
//     constructor(email,password){
//         this.email = email,
//         this.password = password
//     }

//     set password(password){
//         this.password = password
//     }
//     get password(){
//         return this.password.toUpperCase()
//     }
    
// }

// const UserOne = new User("om@gmail.com","om1234")
// console.log(UserOne.password);

/*
Here's a step-by-step breakdown:

1. You create an instance of the User class: const UserOne = new User("om@gmail.com", "om1234");

2. The constructor sets this.password = password;, which triggers the set password() method.

3. The set password() method sets the _password property to "om1234".

4. When you attempt to access UserOne.password, it triggers the get password() method.

5. Inside the get password() method, this.password is called.

6. This calls the get password() method again, repeating the process from step 4.

7. This continues indefinitely, causing an infinite loop.

To avoid this issue, you should reference the _password property inside the get password() method instead
*/

// Here the problem is that when execution reaches this.password the constructor will call the getter and setter 
// when we write this.password and this.email in getter and setter it will call the getter and setter again and will make an infinite loop resulting in error called RangeError: Maximum call stack size exceeded
// so to avoid this we use different variable name in constructor and the getter and setter method like adding the _ in beginning 


class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    set password(password){
        this.pass = password
        // this._password = password
    }
    get password(){
        return this.pass.toUpperCase()
    }
    
}

const UserOne = new User("om@gmail.com","om1234")
console.log(UserOne.password)
// here even if the variable name is pass and we are calling the password = the set and get method has password so it will work with calling different varible name also as this.password will call the getter and setter method with password name 



// class User{
//     constructor(email,password){
//         this.email = email,
//         this.password = password
//     }

//     set pass(pass){
//         this.pass = pass
//         // this._password = password
//     }
//     get pass(){
//         return this.pass.toUpperCase()
//     }
// }
// Here the code will not give error as we have change the method name directly which create getter and setter for pass 
// and the password will have getter and setter given to it by default and will run the code but will not change the password to upper case