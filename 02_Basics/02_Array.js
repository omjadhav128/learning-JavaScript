const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["Batman", "Flash", "superman"]

console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman' ]

// marvel_heroes.push(dc_heroes)
// [ 'thor', 'ironman', 'spiderman', [ 'Batman', 'Flash', 'superman' ] ]
console.log(marvel_heroes);

// concat method will return new array by adding two arrays
console.log(marvel_heroes.concat(dc_heroes)); // [ 'thor', 'ironman', 'spiderman', 'Batman', 'Flash', 'superman' ]


// Spread Operator => ... will spread the array elements  

const newHeroes = [...marvel_heroes,...dc_heroes, ...marvel_heroes]
console.log(newHeroes); // [ 'thor', 'ironman', 'spiderman', 'Batman', 'Flash', 'superman','thor', 'ironman', 'spiderman' ]

// Flat() method => will merge the sub array elements to the original array

const another_array = [1,2,3,[4,5,6],7,[8,[9,10]]]
const real_array = another_array.flat(Infinity) // give depth as parameter
// OUTPUT  
// 1=> [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
// Infinity => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  ]

console.log(real_array);


// Checking if is an array using isArray method and creating a array using from method

console.log(Array.isArray("Om Jadhav"));
console.log(Array.from("Om Jadhav"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // [ 100, 200, 300 ]

// isArray => checks if is an array
// from => creates array from value
// of => creates array of elements/variables given 