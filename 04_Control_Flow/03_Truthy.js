// falsy values

// false, 0 , -0, BigInt 0n, null, undefined, NaN, "" 

// truthy vaule
// "0", 'false, " ", [], {}, function(){}, 

const empArr = []
if (empArr.length === 0){
    console.log("Array is Empty..");
}

const empObj = {}
if (Object.keys(empObj).length === 0) {
    console.log("Object is empty..");
    // Object.keys() gives array of keys 
}


/* ALL THESE WILL RETURN TRUE
false == ''
false == 0
0 == ''
*/

// Nullish coalescing Operator ?? : null undefined

let val1 = 5 ?? 10
console.log(val1); /// 5


let val2 = null ?? 10
console.log(val2); /// 10

let val3 = undefined ?? 15
console.log(val3); /// 15


let val4 = null ?? 10 ?? 20 // first not null value will be assigned
console.log(val4); /// 10


// terniary operator
// condition ? true : false

