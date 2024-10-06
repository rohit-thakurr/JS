const score = 100     // Set Type is Number Automatically

const balance = new Number(100)  // Explicitly specifying type as number & converts balance an number object
console.log(typeof(balance))

console.log( balance.toString().length ) // here we have used toString method of Number class which converts it into string
                                        // Then we use .length method of string on it

console.log( balance.toFixed(2)) // Give  it to x(here 2) decimal palces, use in ecommerce websites

const someNumber = 123.567
console.log( someNumber.toPrecision(4))   // Give total 4 values and round off it to it's precise one

/*
    toFixed() focuses on decimal places after the point.
    toPrecision() focuses on total significant digits (both before and after the decimal point).

    toPrecision() can return scientific notation if the precision is less than the number of digits before the decimal point. 
    toFixed() never does this.
*/

const hundreds = 10000000
console.log( hundreds.toLocaleString('en-IN')) // By Deafault these are in US standards like 1,000,000 which you can make
                                               // make it in indian standard 10,00,000

/*
    There are other methods like Number.Max_Value to get max value of integer in js
*/