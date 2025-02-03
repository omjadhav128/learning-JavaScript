// can we change to value of Math.PI
// No

console.log(Math.PI);

Math.PI = 4
console.log(Math.PI);

// 3.141592653589793
// 3.141592653589793


console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
/* OUTPUT
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

// cannot update because the writable property is set as false and we cannot update it 

// We can make our object object properties immutable like this 

const user = {
    name : "OM",
    age : 21,
    isAvailabe : true,
    logMe : function(){
        console.log(`Hellow, ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user,"name")); // (objectname,"property")
// OUTPUT:
// { value: 'OM', writable: true, enumerable: true, configurable: true }
// Here the writable value is true i.e we can edit the value of name as of now 

Object.defineProperty(user,"name",{
    writable : false,
    enumerable : false
})
// Now no one can change the name property of the user object 
// We can set it for all the properties like this (variables)
console.log(Object.getOwnPropertyDescriptor(user,"name")); // (objectname,"property")

console.log(user.name); // OM
user.name = "Vedant"
console.log(user.name); // OM

// name value cannot be changed now 

// for (let [key,value] of Object.entries(user)) {
//     console.log(`${key} : ${value}`);
// }
/*
age : 21
isAvailabe : true
logMe : function(){
        console.log(`Hellow, ${this.name}`);
    }
*/ // Function should not have to be returned here 

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function')
        console.log(`${key} : ${value}`);
}
// age : 21
// isAvailabe : true
// Name is not printed here as name is set as enumerable so cannot iterate on it