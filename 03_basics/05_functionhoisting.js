
addTwoNumbers(2,3);   // You can call JS functions before it's function declaration.

function addTwoNumbers(num1,num2) {
    console.log(num1 + num2);
}

/*
    You can call this function before its declaration because function declarations are hoisted to the top of their scope.
    Hoisting means that during the compilation phase,
    JavaScript moves the entire function declaration to the top of the scope.
*/


//multiplyTwo(2,3);           //  // ReferenceError: Cannot access 'multiplyTwo' before initialization
// This is also a function but also called function expression
const multiplyTwo = function(num1,num2){          // This is also called function and also expression
    console.log(num1 * num2)
}


/*
    Function expressions, like the one above, are not hoisted in the same way as function declarations.
    In this case, only the variable declaration (multiplyTwo) is hoisted, but not its assignment.
    So until the line where the function is assigned, the variable multiplyTwo is treated as undefined.

    basically both variables & functions are hoisted at the top of curent scope during compilation of code
    but in case of variables it doesn't initialize it with value , 
    it happens during code execution phase
*/

// Difference in case of declaring value using let & var

console.log(name)
console.log(surName)          // Reference error, can't access variable before it's initialization.
console.log(randomName)       // Reference error of randomName is not defined

var name = "Rohit"           // Initialize value to undefined during the time of hoisting
let surName = "Thakur"       

/*
    Hoist the variable at the top of scope during compilation &
    unlike var which is initialized to undefined.
    variable declare with let & const are placed in a temporal dead zone (TDZ)
    until the execution phase reaches the actual declaration.


    The TDZ is the time between the start of the scope and the actual declaration
    and initialization of the variable.
    During this period, accessing the variable is not allowed.
*/