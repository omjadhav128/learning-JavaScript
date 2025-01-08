const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.filter( (num) => num > 6 )
console.log(newNums); // [7, 8, 9, 10 ]

// Difference between for each and filter it that for each will not return a value and filter returns a value
// filter() is use to apply conditions on the array element and filter out elements accordingly

/*
If we uesr {} then we need to add return keyword => If we start a scope

const newNums = nums.filter( (num) => {
    return num > 6    
    } 
)
*/
