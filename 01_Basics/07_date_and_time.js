// ------------------------------- Date ------------------------------------

let myDate = new Date()
console.log(`${myDate}`)                        // Mon Jan 06 2025 21:51:57 GMT+0530 (India Standard Time)
console.log(`${myDate.toLocaleTimeString()}`)   // 9:51:57 pm
console.log(`${myDate.toString()}`)             // Mon Jan 06 2025 21:51:57 GMT+0530 (India Standard Time)
console.log(`${myDate.toDateString()}`)         // Mon Jan 06 2025
console.log(`${myDate.toLocaleString()}`)       // 6/1/2025, 9:51:57 pm
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023,0,23) // Year-Month-Date => {Months start from 0 in JavaScript}
console.log(`${myCreatedDate.toDateString()}`) // Mon Jan 23 2023

let myCreatedDate1 = new Date(2023,0,23,5,24)  
console.log(`${myCreatedDate1.toString()}`) // Mon Jan 23 2023 05:24:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date("2003-08-12")  
console.log(`${myCreatedDate2.toDateString()}`) // Tue Aug 12 2003

let myTimeStamp = Date.now();
console.log(myTimeStamp);
// NOTE => Timestamp is given in miliseconds and if we have to convert it into seconds we have to divide it by 1000

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

// --- Customization of date and time --- //
console.log(newDate.toLocaleString('default',{
    day : '2-digit',
    weekday : 'long'
}));    
// OUTPUT: => Monday 06

newDate.toLocaleString('default',{
    day : '2-digit',
    weekday : 'long'
})
