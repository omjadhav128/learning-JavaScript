const name = "Om Jadhav"
repoCount = "50"

// console.log(name + repoCount); 

console.log(`My name is ${name} and my repository count is ${repoCount}`); // prefered syntax => String Interpolation

console.log(name.length);

console.log(name[1]);

const userName = new String("omjadhav128");

console.log(userName, typeof userName, userName.toUpperCase());
console.log(userName.charAt(4));  // d
console.log(userName.indexOf('d'));  // 4

const newString  = userName.substring(0,2); // Second index is Exclusive => {inclusive,exclusive}
console.log(newString);

const anotherString = userName.slice(-11,-8); // can use negative indexing for value from end 
console.log(anotherString);

const nextString = "     om     "
console.log(nextString);
console.log(nextString.trim()); // will remove blank spaces from front and rear end
console.log(nextString.trimEnd());

const url = "https://omjadhav/om%20jadhav"
console.log(url.replace("%20","-"));

console.log(url.includes("om")); // returns true or false

const exString = "sinhgad college of engineering"
console.log(exString.split(" ")); // returns an array of strings