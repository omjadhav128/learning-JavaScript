const programming = ["js", "Java", "Python", "CPP", "Ruby"]

// array.forEach(Callback_Function)

programming.forEach((item)=>{
    console.log(item);
})

// OUTPUT:
// js
// Java
// Python
// CPP
// Ruby

// For Each loop needs function inside it to perform task called as callback function => callback functions dont have function name 
// Here we are using arrow function as callback function as we dont have to specify function name
console.log();
console.log();

function printMe(item){
    console.log(item);
}

programming.forEach(printMe) // Just give here the function refrence dont call the function here it will be executed by itself automatically

console.log();
console.log();

programming.forEach((item,index,arr)=>{ // We not only get just the value we also get index and whole array list
    console.log(item,index,arr);
})

// js 0 [ 'js', 'Java', 'Python', 'CPP', 'Ruby' ]
// Java 1 [ 'js', 'Java', 'Python', 'CPP', 'Ruby' ]
// Python 2 [ 'js', 'Java', 'Python', 'CPP', 'Ruby' ]
// CPP 3 [ 'js', 'Java', 'Python', 'CPP', 'Ruby' ]
// Ruby 4 [ 'js', 'Java', 'Python', 'CPP', 'Ruby' ]

// For Array of Objects

const coding = [
    {
        langName : "JavaScript",
        fileName : "js"
    },
    {
        langName : "Java",
        fileName : "java"
    },
    {
        langName : "Python",
        fileName : "py"
    },
]

coding.forEach( (item) => {
    console.log(item.langName + "=>" + item.fileName);
} )
// OUTPUT: 
// JavaScript=>js
// Java=>java
// Python=>py