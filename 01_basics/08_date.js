
let myDate = new Date();   // Instance of Date Object
console.log(myDate)        // 2024-10-07T07:40:58.679Z ->Date in this format

console.log( myDate.toString())   // Mon Oct 07 2024 07:40:58 GMT+0000 (Coordinated Universal Time)
                        // The .toString() method returns the date and time as a human-readable string.

console.log( myDate.toDateString())  // Mon Oct 07 2024
                        // The .toDateString() method returns only the date portion of the Date object (without the time)

console.log( myDate.toISOString())   // 2024-10-07T07:42:36.896Z
/*
    A string representing the given date in the date time string format according to universal time. 
    It's the same format as the one required to be recognized by Date.parse().    
     It's widely accepted in APIs, databases, and many programming languages.
*/

console.log( myDate.toLocaleString('en-IN',
     {  
        timeZone: 'Asia/Kolkata',
         weekday: "narrow" 
      }))  
// 7/10/2024, 1:33:48 pm give local Indian time

let createdDate = new Date(2023,0,10)   // Tue Jan 10 2023, months follows zero based indexing
console.log( createdDate.toDateString()) 

let newDate = new Date('2024-01-12')    // Here in this format we stats month from 1
console.log( newDate.toDateString())



/* ----------------TimeStamp-----------------------*/

let currentTime = Date.now()
console.log(currentTime)               // Gives total milliseconds passed from 1 jan 1970 till current time

console.log(newDate.getDate())
console.log(newDate.getDay())