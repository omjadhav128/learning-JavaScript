// Promise is an object for asynchronous code in JS
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// .then() - resove => when promise is completed successfully 
// .catch() - reject => when promise is not completed successfully

// Promise object states 
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// The function you give to a Promise is called the executor function. The executor function contains the asynchronous operation, and it takes two arguments: resolve and reject. These two arguments are themselves functions that you call to either resolve the promise with a value or reject it with a reason (error).

const promiseOne = new Promise(function(resolve,reject){
    // Do async task
    // call DB, call API     networking     file handling
    console.log("Starting Promise 1"); 
    setTimeout(function(){
        console.log("3 seconds completed"); 
        resolve();
    },3000)
})

promiseOne.then(function(){
    console.log("1 Completed Successfully");   
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Second Promise working")
        resolve()
    },6000)
}).then(function(){
    console.log("Second Promise is Completed");
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"omjadhav128",email:"iomjadhav@gmail.com"});
        // passing value to then using resolve and accessing then in .then(para) funtion 
    },8000)

})

promiseThree.then((result)=>{
    console.log(result);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"user1",password:"user123"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },10000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username // will pass the username to the upper .then() function
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);  
}).finally(()=>{
    console.log("All promises till 4 are completed "); 
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"om12",password:"om@123"});
        }
        else{
            reject('ERROR: in Promise no 5');
        }
    },12000)
})

// async await function does not provide by default resolve and reject we should handel it by using try catch block
async function consumePromiseFive() {
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()