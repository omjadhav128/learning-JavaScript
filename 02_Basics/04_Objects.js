// Objects using constructor // Singleton
// const newUser = new Object()

// console.log(newUser);

const newUser = {
    email : "om@google.comm",
    fullName : {
        UserFullName : {
            firstName : "Om",
            lastName : "Jadhav"
        }
    }
}
// Nested objects
console.log(newUser.fullName.UserFullName.firstName)

// Merging two objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// assign() => copies properies of one or more object source in a single target object   assign(target,source)

const obj3 = Object.assign(obj1,obj2) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj3 = Object.assign({}, obj1,obj2) // => Optional parammeter but guarantee object creation { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3)

const objSpread = {...obj1,...obj2,...obj3,...obj2}
console.log(objSpread)

// Returns an array of keys and values
console.log(Object.keys(objSpread))
// [ '1', '2', '3', '4' ]

console.log(Object.values(objSpread))
// [ 'a', 'b', 'c', 'd' ]


console.log(Object.entries(objSpread)) // Returns array of key and value pair
// [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]


console.log(objSpread.hasOwnProperty("3")) // will check for the key is present in object or not returns true if present


// ----- Destructuring of Objects ------

const course = {
    courseName : "JavaScript",
    startDate : "2025-01-06",
    courseInstructor : "Om"
}

console.log(course.courseInstructor);
console.log(course.courseName);
console.log(course.startDate);

console.log("")
// Everytime we have to write the object name

const {courseInstructor : ci} = course;
console.log(ci);

const {courseName} = course;
console.log(courseName);
