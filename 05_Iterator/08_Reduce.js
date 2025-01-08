// reduce() will reduce all the array value into one single value by performing operation on it

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc,currVal) => {
    console.log(`${acc} is accumulator and ${currVal} is current value`);
    
    return acc + currVal
} ,0 )
console.log(myTotal);

// 0 is accumulator and 1 is current value
// 1 is accumulator and 2 is current value
// 3 is accumulator and 3 is current value
// 6

/*
Syntax

array.reduce( (accumulator,curerntValue) => () , initialValue  )
// for first iteration accumulator has initialValue
*/

// add shopping cart prices

const shopping = [
    {
        product : "Shirt",
        price : 599
    },
    {
        product : "Pant",
        price : 799
    },
    {
        product : "Hoodie",
        price : 999
    }
]

const cartValue = shopping.reduce( (acc,product) => acc+product.price , 0)
console.log(`Total Amount to pay : ${cartValue} Rs.`);
// Total Amount to pay : 2397 Rs.
