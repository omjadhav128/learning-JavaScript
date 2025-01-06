//  ARRAYS

// Collection of elements is called as arrays.
// Arrays have zero based indexing

// JavaScript arrays are resizable 
let numbers = [0,1,2,3,4,5,6]
const myArray = new Array(1,2,3,4,5);
console.log(numbers,typeof numbers);
console.log(myArray,typeof myArray);

// JavaScript arrays can contain elements of different datatypes 
let newArray = [1,2,3,"Om",true]

// NOTE => Javascript array copy operations create shallow copies {share same refrence point} [will update original array]

// -- Array Methods

myArray.push(75); // Add value to the end of array
myArray.push(55); 

console.log(myArray);

myArray.pop(); // removes value from the rear end of array
console.log(myArray);

myArray.unshift(12); // Adds values from the front of array, shift the remaining array by 1 index
console.log(myArray);

myArray.shift(); // removes values from the front of array
console.log(myArray);

console.log(myArray.includes(75)); // true
console.log(myArray.includes(55)); // false

console.log(myArray.indexOf(75)); // 5
console.log(myArray.indexOf(55)); // -1

console.log(myArray.join()); // converts array into string

// slice, splice

// NOTE => not only difference of 2nd parameter is exclusive and inclusive but,
// => slice will not update original array [exclusive]
// => Splice will update the original array [inclusive]

const myn1 = myArray.slice(1,3) // exclusive
console.log(myn1); // [ 2, 3 ]
console.log(myArray); // [ 1, 2, 3, 4, 5, 75 ]

const myn2 = myArray.splice(1,3) // inclusive
console.log(myn2); // [ 2, 3, 4 ]
console.log(myArray); // [ 1, 5, 75 ]

// // Output
// [ 2, 3 ]
// [ 2, 3, 4 ]