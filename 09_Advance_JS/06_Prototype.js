// Topics => prototype , inheritance using __prototype__ , Setting custom properties to Objects 
let myHeroes = ["IronMan","SpiderMan"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

// heroPower.getSpiderPower() // spider power is sling

Object.prototype.global = function(){
    console.log(`This property is present in all objects`);
}
// we are giving global property to the Object which is accessible by all the objects that will be created
// prototyping => myHeroes , heroPower -> Object -> null
// giving property to the top level object
// here properties are given to the object which is parent for myHeroes as well as heroPower

heroPower.global()
myHeroes.global()

// Here both the objects will give the result as it has global() funtion present for both 

Array.prototype.heyGlobal = function(){
    console.log(`Global says hi to myHeroes`);
}
myHeroes.heyGlobal()
// heroPower.heyGlobal()  // will give error as we have set properties to the array object not the objects


/*
Error => cannot set properties of undefined
            as it is not an object it is an array instance

myHeroes.prototype.heyGlobal = function(){
    console.log(`Global says hi to myHeroes`);
    }

you can't directly set properties on the prototype of array instances like myHeroes. The prototype property in JavaScript is typically used for function constructors, not for array instances. If you want to add custom methods or properties to your array, you can use the array's constructor prototype.

let myHeroes = ["IronMan", "SpiderMan"];

Array.prototype.superHeroGreet = function() {
    return this.map(hero => `Hello, ${hero}!`);
};

console.log(myHeroes.superHeroGreet()); // ["Hello, IronMan!", "Hello, SpiderMan!"]

*/

// inheritance 

const User = {
    userName : "om",
    email : "om@google.com"
}

const Teacher = {
    makeVIdeo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    __prototype__ : TeachingSupport,
}
// __prototype__ is old syntax 
Teacher.__prototype__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher);
// Here we are giving TeachingSupport Properties to the Teacher 

console.log(TASupport.isAvailable);

// Creating a trueLength() function which will give length by removing the whitespaces

const anotherName = "om        "
console.log(anotherName.length);  // 10

String.prototype.trueLength = function(){
    console.log(`${this}`); // will point out to the current string which is calling trueLength() function
    console.log(`The true length is ${this.trim().length}`);
}

anotherName.trueLength()
// om
// The true length is 2

"hello       ".trueLength()
// hello
// The true length is 5

// As we have set trueLength for the String object it will be accessible to all the strings and we can get true length of all the strings