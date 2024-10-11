
let age = "33"

console.log( typeof age)
console.log( typeof(age))    //Both can be use

let valueInNumber = Number(age)
console.log(typeof valueInNumber)

/*
    let num1 = new Number(23) creates an object.
    let num2 = Number(23) creates a primitive value.
*/

let newAge = "33abc"
let wrongAge = Number(newAge)

console.log(typeof wrongAge)    // Type here is also a number
console.log(wrongAge)   // value assign in this NAN which is not a number value have a datatype of number

let scoreOne = Number(null);       // Convert this value to 0 as value has not been assigned
let scoreTwo = Number(undefined);   // Convert this value to NAN

console.table([scoreOne,scoreTwo])

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.table([stringNumber, typeof stringNumber])


// *********************** Operations ***********************

let value = 3
let negValue = -value
//console.log(negValue);

let str1 = 1 + "2"        // "12"
let str2 = "1" + 2        // "12"
console.table([str1, typeof str1, str2, typeof str2])

console.log("2" + 1 + 3)    // "213"
console.log( 2 + 1 + "3")   //  "33"