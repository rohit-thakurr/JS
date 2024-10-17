
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