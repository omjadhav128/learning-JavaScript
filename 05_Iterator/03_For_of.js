// for of

const arr = [1,2,3]

for (val of arr){
    // console.log(val);
}

let name = "Om Jadhav"

for (char of name){
    // console.log(char);
}

// MAP => use to store key, value pair of data. Only unique entires are considered.

const map = new Map()
map.set('IN', "India")
map.set('DXB', "Dubai")
map.set('FR', "France")

for (key of map){
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'DXB', 'Dubai' ]
// [ 'FR', 'France' ]

for ([key,val] of map){
    console.log(key + "=>" + val);  
}
// IN=>India
// DXB=>Dubai
// FR=>France