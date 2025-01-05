const accountId = 128
var accountEmail = "om@gmail.com"
let accountPassword = "123456"
accountCity = "Nashik"

// Const variables are read-only and cannot be reassigned or re-declared. Const is a block-scoped variable.
// accountId = 129 
// Error: Assignment to constant variable.

accountEmail = "omj@gmail.com"
// variables var can be re-declared and updated. var is globally scoped.
var accountEmail = "omnewmail@gmail.com"

accountPassword = "654321"
// let variables can be updated but not re-declared. let is block-scoped.

accountCity = "Mumbai"

console.log("accountId: ", accountId)

console.table({accountId, accountEmail, accountPassword, accountCity})

let accountState;
console.log("Account State : ",accountState) // Will be undefined until value is given
accountState = "Maharashtra"
console.log("Account State : ",accountState)
