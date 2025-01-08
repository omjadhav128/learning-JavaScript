// filter() => Use to apply condition to each element and return only elements that satisfy the condition
// map() => Perform operation on each array element

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.map( (num) => {
    return num + 10
} )
// [11,12,13,14,15,16,17,18,19,20]

console.log(newNums);

// ---- CHANING ----
//  Chaning the map and filter method => can use multiple map() on an array at once 
// second map will perform operation on value given by previous array

// first map will multiply all values by 10 and then second map will add 1 to each value

const ans = nums.map( (num) => num*10 ) .map( (num) => num+1 )
console.log(ans);
// [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101 ]

const ans2 = nums.map( (num) => num*10 ) .map( (num) => num+1 ) .filter( (num) => num<50 )
console.log(ans2);
// [ 11, 21, 31, 41 ]