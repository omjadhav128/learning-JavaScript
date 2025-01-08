
// Objects are not iterable so instead of for of loop, we use for in loop to access the valuesgit

const myObj = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python",
    html : "Hyper Text Markup Language"
}

for (key in myObj){
    console.log(`${key} => ${myObj[key]}`);
}

// js => JavaScript
// cpp => C++
// py => Python
// html => Hyper Text Markup Language


//  can be used on arrays also
const programming = ["js","py","ru","c"]
for (const key in programming) {
    // console.log(key); //  0 1 2 3   =>   only get keys
    console.log(programming[key]);  // js py ru c    
}

// For in loop cannot be applied to map as it is not iterable

// Interview Question
// Difference between for of and for in loop 
// For of loop => Values are given in the iterator
// For in loop => Keys are given in the iterator