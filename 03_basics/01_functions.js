
// Function Defination
function myName(){
    console.log("My name")
}

myName;         // Function Reference
myName();      // function Execution

function addTwoNumbers(num1,num2){
    console.log(num1 + num2)
}

addTwoNumbers();               // Passing no arguments returns NAN
/*
    When you call addTwoNumbers() without providing num1 and num2, their values are undefined by default.
    undefined is not a number, so when JavaScript tries to add two undefined values, the result is NaN,
    which stands for "Not a Number."
*/

addTwoNumbers(2);               // Passing only one argument results in 2 + undefined => NAN
addTwoNumbers(2,3);

const result = addTwoNumbers(2,3);
console.log(result)            // Since the function does not have a return statement, it implicitly returns undefined.


function loggedIn(userName){
    return `${userName} just logged in`;
}

console.log( loggedIn("Rohit") );     // Rohit just logged in
console.log( loggedIn() );            // undefined just logged in
/*
    In JavaScript, when you declare a variable but don't assign any value to it,
    it is automatically initialized with the value undefined. 
    
    This applies to function parameters as well, meaning if you don't pass any argument when calling the function,
    the corresponding parameter will be undefined by default.

    When you declare a variable like let num1; without assigning any value to it, the following happens:

    let num1;  so basically if i declare a variable like this ->
    Type: The type of num1 is undefined. In JavaScript, undefined is a type on its own.
    Value: The value of num1 is also undefined.
*/
